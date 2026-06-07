/**
 * Facebook Ads Daily Monitor — Google Apps Script
 *
 * Setup:
 * 1. Go to script.google.com, create new project, paste this code
 * 2. Click Extensions > Apps Script (if pasting from Google Sheets)
 * 3. Go to Project Settings (gear icon) > Script Properties
 * 4. Add property: FB_ACCESS_TOKEN = your 60-day access token
 * 5. Run the "setup" function once to create the daily trigger
 */

const AD_ACCOUNT = 'act_1963706923903289';
const API_VERSION = 'v25.0';
const BASE_URL = `https://graph.facebook.com/${API_VERSION}`;

// ─── API HELPER ───────────────────────────────────────────────────────────────

function getToken() {
  return PropertiesService.getScriptProperties().getProperty('FB_ACCESS_TOKEN');
}

function callAPI(endpoint, params = {}) {
  params.access_token = getToken();
  const qs = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  const response = UrlFetchApp.fetch(`${BASE_URL}/${endpoint}?${qs}`, {
    muteHttpExceptions: true
  });
  const data = JSON.parse(response.getContentText());
  if (data.error) throw new Error(`Facebook API Error: ${data.error.message}`);
  return data;
}

function getPurchases(actions) {
  const a = (actions || []).find(x => x.action_type === 'purchase');
  return a ? parseInt(a.value) : 0;
}

function getCPP(costPerAction) {
  const a = (costPerAction || []).find(x => x.action_type === 'purchase');
  return a ? parseFloat(a.value) : null;
}

function getRoas(purchaseRoas) {
  const a = (purchaseRoas || []).find(x => x.action_type === 'omni_purchase');
  return a ? parseFloat(a.value) : null;
}

function yesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return Utilities.formatDate(d, 'UTC', 'yyyy-MM-dd');
}

function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#1a1a2e')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// ─── DASHBOARD TAB ────────────────────────────────────────────────────────────

function updateDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Dashboard');
  if (!sheet) sheet = ss.insertSheet('Dashboard', 0);
  sheet.clear();
  sheet.clearFormats();

  const now = Utilities.formatDate(new Date(), 'Australia/Sydney', 'dd MMM yyyy HH:mm') + ' AEST';

  // Header
  sheet.getRange('A1').setValue('FACEBOOK ADS DASHBOARD')
    .setFontSize(18).setFontWeight('bold');
  sheet.getRange('A2').setValue(`Last updated: ${now}`)
    .setFontColor('#888888');

  // ── 7-day campaign summary ──
  const data7d = callAPI(`${AD_ACCOUNT}/insights`, {
    fields: 'campaign_name,spend,impressions,clicks,actions,cost_per_action_type,purchase_roas,ctr',
    date_preset: 'last_7d',
    level: 'campaign',
    limit: '50'
  });

  sheet.getRange('A4').setValue('LAST 7 DAYS — CAMPAIGN PERFORMANCE')
    .setFontWeight('bold').setFontSize(12);

  const headers7d = ['Campaign', 'Spend ($)', 'Purchases', 'Cost/Purchase ($)', 'ROAS', 'CTR (%)', 'Status'];
  sheet.getRange(5, 1, 1, headers7d.length).setValues([headers7d])
    .setFontWeight('bold').setBackground('#e8f0fe');

  let r = 6;
  let totalSpend7d = 0;
  let totalPurchases7d = 0;

  (data7d.data || []).forEach(row => {
    const spend = parseFloat(row.spend || 0);
    const purchases = getPurchases(row.actions);
    const cpp = getCPP(row.cost_per_action_type);
    const roas = getRoas(row.purchase_roas);
    const ctr = parseFloat(row.ctr || 0);
    totalSpend7d += spend;
    totalPurchases7d += purchases;

    let status = '🔴 Poor';
    if (roas !== null) {
      if (roas >= 0.5) status = '🟡 Marginal';
      if (roas >= 1.0) status = '🟢 Profitable';
    }

    const shortName = row.campaign_name
      .replace('A&S - Challenge Funnel ', '')
      .replace('- Event: Purchase - COLD - WC', '')
      .trim();

    sheet.getRange(r, 1, 1, 7).setValues([[
      shortName,
      spend.toFixed(2),
      purchases,
      cpp !== null ? cpp.toFixed(2) : '—',
      roas !== null ? roas.toFixed(3) : '—',
      ctr.toFixed(2),
      status
    ]]);

    if (roas !== null && roas < 0.2) {
      sheet.getRange(r, 1, 1, 7).setBackground('#fce8e6');
    }
    r++;
  });

  // Totals row
  sheet.getRange(r, 1, 1, 3).setValues([['TOTAL', totalSpend7d.toFixed(2), totalPurchases7d]])
    .setFontWeight('bold').setBackground('#f0f0f0');
  r += 2;

  // ── Agency activity yesterday ──
  sheet.getRange(r, 1).setValue('AGENCY ACTIVITY — YESTERDAY')
    .setFontWeight('bold').setFontSize(12);
  r++;

  const sinceTs = Math.floor((Date.now() - 86400000) / 1000);
  const untilTs = Math.floor(Date.now() / 1000);

  const changes = callAPI(`${AD_ACCOUNT}/activities`, {
    fields: 'actor_name,translated_event_type,object_name,event_time',
    since: sinceTs,
    until: untilTs,
    limit: '200'
  });

  const humanChanges = (changes.data || []).filter(c => c.actor_name !== 'Meta');

  if (humanChanges.length === 0) {
    sheet.getRange(r, 1).setValue('✅ No changes made by agency yesterday')
      .setFontColor('#137333');
  } else {
    sheet.getRange(r, 1).setValue(`${humanChanges.length} changes made by ${humanChanges[0].actor_name}`);
    r++;
    const byType = {};
    humanChanges.forEach(c => {
      byType[c.translated_event_type] = (byType[c.translated_event_type] || 0) + 1;
    });
    Object.entries(byType).forEach(([type, count]) => {
      sheet.getRange(r, 1).setValue(`  • ${count}x ${type}`);
      r++;
    });
  }

  // Format columns
  sheet.setColumnWidth(1, 380);
  sheet.setColumnWidth(2, 100);
  sheet.setColumnWidth(3, 100);
  sheet.setColumnWidth(4, 140);
  sheet.setColumnWidth(5, 80);
  sheet.setColumnWidth(6, 80);
  sheet.setColumnWidth(7, 120);
}

// ─── DAILY SPEND TAB ─────────────────────────────────────────────────────────

function pullDailySpend() {
  const sheet = getOrCreateSheet('Daily Spend', [
    'Date', 'Campaign', 'Spend ($)', 'Purchases', 'Cost/Purchase ($)', 'ROAS', 'Impressions', 'Clicks', 'CTR (%)'
  ]);

  const date = yesterday();
  const data = callAPI(`${AD_ACCOUNT}/insights`, {
    fields: 'campaign_name,spend,impressions,clicks,actions,cost_per_action_type,purchase_roas,ctr',
    time_range: JSON.stringify({ since: date, until: date }),
    level: 'campaign',
    limit: '50'
  });

  if (!data.data || data.data.length === 0) {
    sheet.appendRow([date, 'No data returned', 0, 0, '—', '—', 0, 0, 0]);
    return;
  }

  data.data.forEach(row => {
    const purchases = getPurchases(row.actions);
    const cpp = getCPP(row.cost_per_action_type);
    const roas = getRoas(row.purchase_roas);
    sheet.appendRow([
      date,
      row.campaign_name,
      parseFloat(row.spend || 0).toFixed(2),
      purchases,
      cpp !== null ? cpp.toFixed(2) : '—',
      roas !== null ? roas.toFixed(3) : '—',
      parseInt(row.impressions || 0),
      parseInt(row.clicks || 0),
      parseFloat(row.ctr || 0).toFixed(2)
    ]);
  });
}

// ─── CHANGE LOG TAB ──────────────────────────────────────────────────────────

function assessChange(changeType) {
  const t = (changeType || '').toLowerCase();
  if (t.includes('budget updated') || t.includes('budget update'))
    return '⚠️ Budget changed — was this justified by performance?';
  if (t.includes('ad created'))
    return '✅ New ad created — good, testing new creative';
  if (t.includes('campaign status'))
    return '⚠️ Campaign toggled on/off — check the reason';
  if (t.includes('ad set status'))
    return 'ℹ️ Ad set toggled — likely pausing underperformer';
  if (t.includes('ad set budget'))
    return '⚠️ Ad set budget changed — verify performance justified this';
  if (t.includes('campaign name'))
    return 'ℹ️ Rename only — no performance impact';
  if (t.includes('ad updated'))
    return 'ℹ️ Ad edited — check what changed';
  if (t.includes('ad status'))
    return 'ℹ️ Ad toggled on/off';
  if (t.includes('review'))
    return 'ℹ️ Automated — ad review result, not a manual action';
  return 'ℹ️ Review manually';
}

function pullChangeHistory() {
  const sheet = getOrCreateSheet('Change Log', [
    'Date', 'Time (AEST)', 'Who', 'Change Type', 'Object Affected', 'Assessment'
  ]);

  sheet.setColumnWidth(5, 350);
  sheet.setColumnWidth(6, 320);

  const sinceTs = Math.floor((Date.now() - 86400000) / 1000);
  const untilTs = Math.floor(Date.now() / 1000);

  const data = callAPI(`${AD_ACCOUNT}/activities`, {
    fields: 'actor_name,translated_event_type,object_name,event_time',
    since: sinceTs,
    until: untilTs,
    limit: '200'
  });

  const humanChanges = (data.data || []).filter(c => c.actor_name !== 'Meta');
  const date = yesterday();

  if (humanChanges.length === 0) {
    sheet.appendRow([date, '—', 'No changes', '—', '—', '✅ No agency activity yesterday']);
    return;
  }

  humanChanges.forEach(change => {
    const eventTime = new Date(change.event_time);
    const timeStr = Utilities.formatDate(eventTime, 'Australia/Sydney', 'HH:mm');
    sheet.appendRow([
      date,
      timeStr,
      change.actor_name,
      change.translated_event_type,
      change.object_name,
      assessChange(change.translated_event_type)
    ]);
  });
}

// ─── MAIN ENTRY POINT ────────────────────────────────────────────────────────

function dailyUpdate() {
  try {
    updateDashboard();
    pullDailySpend();
    pullChangeHistory();
    Logger.log('✅ Daily update complete');
  } catch (e) {
    Logger.log(`❌ Error: ${e.message}`);
    const email = Session.getActiveUser().getEmail();
    GmailApp.sendEmail(
      email,
      '⚠️ FB Ads Monitor — Error',
      `Your daily Facebook Ads update failed.\n\nError: ${e.message}\n\nYour access token may have expired — generate a new one from the Graph API Explorer.`
    );
  }
}

// ─── FIRST-TIME SETUP ────────────────────────────────────────────────────────

function setup() {
  // Delete any existing triggers
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));

  // Create daily trigger at 8am AEST (= 10pm UTC previous day)
  ScriptApp.newTrigger('dailyUpdate')
    .timeBased()
    .everyDays(1)
    .atHour(22) // 10pm UTC = 8am AEST
    .create();

  Logger.log('✅ Setup complete. Daily trigger set for 8am AEST.');

  // Run immediately to populate the sheet
  dailyUpdate();
}
