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

  const headers7d = ['Campaign', 'Spend ($)', 'Purchases', 'Cost/Purchase ($)', 'ROAS', 'CTR (%)', 'Status', 'Suggested Action'];
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

    const suggestion = suggestAction(spend, roas, ctr, cpp, purchases);

    sheet.getRange(r, 1, 1, 8).setValues([[
      shortName,
      spend.toFixed(2),
      purchases,
      cpp !== null ? cpp.toFixed(2) : '—',
      roas !== null ? roas.toFixed(3) : '—',
      ctr.toFixed(2),
      status,
      suggestion
    ]]);

    if (roas !== null && roas < 0.2) {
      sheet.getRange(r, 1, 1, 8).setBackground('#fce8e6');
    }
    r++;
  });

  // Totals row
  sheet.getRange(r, 1, 1, 3).setValues([['TOTAL', totalSpend7d.toFixed(2), totalPurchases7d]])
    .setFontWeight('bold').setBackground('#f0f0f0');
  sheet.setColumnWidth(8, 380);
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

// Break-even CPL based on funnel math:
// 31% attend Ses3 × 40% book call × 70% show × 30% close × $8000 = ~$208/lead
const BREAKEVEN_CPL = 208;

function suggestAction(spend, roas, ctr, cpp, purchases) {
  if (spend < 5) return '— No spend';

  if (purchases === 0 && spend > 100) {
    if (ctr < 0.5) return '🛑 Kill — no leads & very low CTR. Wrong audience or weak creative.';
    return '⚠️ Pause & check — spending but zero leads recorded. Verify pixel is firing.';
  }

  if (cpp === null || purchases === 0) {
    if (ctr >= 1.5) return '👀 Monitor — good CTR but no leads yet. Check landing page.';
    return '⏳ Too early to judge — needs more data.';
  }

  // Primary metric: cost per lead vs break-even backend value (~$208)
  if (cpp < 80)  return '🚀 Scale hard — very cheap leads. Increase budget 30-50%.';
  if (cpp < 140) return '📈 Scale 20-30% — profitable on backend. Strong performer.';
  if (cpp < BREAKEVEN_CPL) return '✅ Hold & test — leads below break-even ($208). Try new creatives to lower CPL further.';
  if (cpp < 280) {
    if (ctr < 1.0) return '🔄 Refresh creative — leads too expensive & weak CTR. Test new hook/angle.';
    return '🔄 Test new audience — leads above break-even ($208). People click but don\'t opt in.';
  }
  if (cpp < 400) return '⚠️ Restructure — leads costing ~2× what they\'re worth. New creative + tighter audience.';
  return '🛑 Kill or pause — leads far too expensive to be profitable on backend. Reallocate budget.';
}

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

// ─── CREATIVE INVENTORY TAB ──────────────────────────────────────────────────

function pullCreativeInventory() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Creative Inventory');
  if (!sheet) sheet = ss.insertSheet('Creative Inventory');
  sheet.clear();
  sheet.clearFormats();

  const now = Utilities.formatDate(new Date(), 'Australia/Sydney', 'dd MMM yyyy HH:mm') + ' AEST';
  sheet.getRange('A1').setValue('CREATIVE INVENTORY')
    .setFontSize(16).setFontWeight('bold');
  sheet.getRange('A2').setValue(`Last updated: ${now}`)
    .setFontColor('#888888');

  const campaigns = callAPI(`${AD_ACCOUNT}/campaigns`, {
    fields: 'name,status,id',
    limit: '100'
  });

  const adsets = callAPI(`${AD_ACCOUNT}/adsets`, {
    fields: 'name,campaign_id,status',
    limit: '200'
  });

  const ads = callAPI(`${AD_ACCOUNT}/ads`, {
    fields: 'name,campaign_id,status,creative{object_type}',
    limit: '300'
  });

  const adsetsByCampaign = {};
  (adsets.data || []).forEach(as => {
    if (!adsetsByCampaign[as.campaign_id]) adsetsByCampaign[as.campaign_id] = [];
    adsetsByCampaign[as.campaign_id].push(as);
  });

  const adsByCampaign = {};
  (ads.data || []).forEach(ad => {
    if (!adsByCampaign[ad.campaign_id]) adsByCampaign[ad.campaign_id] = [];
    adsByCampaign[ad.campaign_id].push(ad);
  });

  let r = 4;
  sheet.getRange(r, 1).setValue('CAMPAIGN BREAKDOWN')
    .setFontWeight('bold').setFontSize(12);
  r++;

  const headers = ['Campaign', 'Status', 'Ad Sets', 'Total Ads', 'Image Ads', 'Video Ads', 'Other'];
  sheet.getRange(r, 1, 1, headers.length).setValues([headers])
    .setFontWeight('bold').setBackground('#e8f0fe');
  r++;

  let grandTotal = 0, grandImages = 0, grandVideos = 0, grandOther = 0;

  (campaigns.data || []).forEach(campaign => {
    const campAdsets = adsetsByCampaign[campaign.id] || [];
    const campAds = adsByCampaign[campaign.id] || [];

    let images = 0, videos = 0, other = 0;
    campAds.forEach(ad => {
      const t = ((ad.creative && ad.creative.object_type) || '').toUpperCase();
      if (t.includes('PHOTO') || t.includes('IMAGE')) images++;
      else if (t.includes('VIDEO')) videos++;
      else other++;
    });

    grandTotal += campAds.length;
    grandImages += images;
    grandVideos += videos;
    grandOther += other;

    const shortName = campaign.name
      .replace('A&S - Challenge Funnel ', '')
      .replace('- Event: Purchase - COLD - WC', '')
      .trim();

    sheet.getRange(r, 1, 1, 7).setValues([[
      shortName, campaign.status, campAdsets.length,
      campAds.length, images, videos, other
    ]]);
    r++;
  });

  sheet.getRange(r, 1, 1, 7)
    .setValues([['TOTAL', '', '', grandTotal, grandImages, grandVideos, grandOther]])
    .setFontWeight('bold').setBackground('#f0f0f0');
  r += 2;

  // ── Monthly new creative history (last 6 months) ──
  sheet.getRange(r, 1).setValue('NEW ADS CREATED — LAST 6 MONTHS')
    .setFontWeight('bold').setFontSize(12);
  r++;

  sheet.getRange(r, 1, 1, 3).setValues([['Month', 'New Ads Created', 'Created By']])
    .setFontWeight('bold').setBackground('#e8f0fe');
  r++;

  const sixMonthsAgo = Math.floor((Date.now() - 180 * 86400000) / 1000);
  const history = callAPI(`${AD_ACCOUNT}/activities`, {
    fields: 'actor_name,translated_event_type,event_time',
    since: sixMonthsAgo,
    until: Math.floor(Date.now() / 1000),
    limit: '500'
  });

  const creations = (history.data || []).filter(e =>
    (e.translated_event_type || '').toLowerCase().includes('ad created')
  );

  const byMonth = {};
  creations.forEach(e => {
    const month = e.event_time.slice(0, 7);
    if (!byMonth[month]) byMonth[month] = { count: 0, actors: {} };
    byMonth[month].count++;
    const actor = e.actor_name || 'Unknown';
    byMonth[month].actors[actor] = (byMonth[month].actors[actor] || 0) + 1;
  });

  const sortedMonths = Object.keys(byMonth).sort();
  if (sortedMonths.length === 0) {
    sheet.getRange(r, 1).setValue('No ad creation events found in last 6 months');
  } else {
    sortedMonths.forEach(month => {
      const d = byMonth[month];
      const actorStr = Object.entries(d.actors)
        .map(([name, count]) => `${name} (${count})`).join(', ');
      sheet.getRange(r, 1, 1, 3).setValues([[month, d.count, actorStr]]);
      r++;
    });
  }

  sheet.setColumnWidth(1, 360);
  sheet.setColumnWidth(2, 100);
  sheet.setColumnWidth(3, 90);
  sheet.setColumnWidth(4, 90);
  sheet.setColumnWidth(5, 100);
  sheet.setColumnWidth(6, 100);
  sheet.setColumnWidth(7, 80);

  r += 2;

  // ── Per-ad performance table (last 30 days) ──
  const adInsights = callAPI(`${AD_ACCOUNT}/insights`, {
    fields: 'ad_id,ad_name,campaign_name,spend,impressions,clicks,actions,cost_per_action_type,ctr',
    date_preset: 'last_30d',
    level: 'ad',
    limit: '200'
  });

  const adStatusMap = {};
  (ads.data || []).forEach(ad => { adStatusMap[ad.id] = ad.status; });

  const adRows = (adInsights.data || []).map(adRow => {
    const spend = parseFloat(adRow.spend || 0);
    const purchases = getPurchases(adRow.actions);
    const cpp = getCPP(adRow.cost_per_action_type);
    const ctr = parseFloat(adRow.ctr || 0);
    const impressions = parseInt(adRow.impressions || 0);
    const status = adStatusMap[adRow.ad_id] || '—';
    const action = suggestAction(spend, null, ctr, cpp, purchases);
    const adUrl = `https://adsmanager.facebook.com/adsmanager/manage/ads?act=${AD_ACCOUNT.replace('act_', '')}&selected_ad_ids=${adRow.ad_id}`;
    const shortCampaign = (adRow.campaign_name || '')
      .replace('A&S - Challenge Funnel ', '')
      .replace('- Event: Purchase - COLD - WC', '')
      .trim();
    return { adRow, spend, purchases, cpp, ctr, impressions, status, action, adUrl, shortCampaign };
  });

  // Sort worst CPL first so kills surface at the top
  adRows.sort((a, b) => {
    if (a.cpp === null && b.cpp === null) return b.spend - a.spend;
    if (a.cpp === null) return 1;
    if (b.cpp === null) return -1;
    return b.cpp - a.cpp;
  });

  // ── Priority Actions banner ──
  const killList = adRows.filter(a => a.action.startsWith('🛑') && a.spend > 100);
  const scaleList = adRows.filter(a => a.action.startsWith('🚀') || a.action.startsWith('📈'));

  if (killList.length > 0 || scaleList.length > 0) {
    sheet.getRange(r, 1).setValue('⚡ PRIORITY ACTIONS')
      .setFontWeight('bold').setFontSize(13).setFontColor('#d93025');
    r++;

    if (killList.length > 0) {
      sheet.getRange(r, 1).setValue('PAUSE OR KILL — above break-even $208 CPL:')
        .setFontWeight('bold');
      r++;
      killList.slice(0, 8).forEach(a => {
        const cplStr = a.cpp !== null ? `$${a.cpp.toFixed(0)} CPL` : 'no leads';
        sheet.getRange(r, 1)
          .setValue(`  🛑 "${a.adRow.ad_name}" — ${cplStr}  |  ${a.shortCampaign}`)
          .setBackground('#fce8e6');
        r++;
      });
      r++;
    }

    if (scaleList.length > 0) {
      sheet.getRange(r, 1).setValue('SCALE BUDGET — profitable leads:')
        .setFontWeight('bold');
      r++;
      scaleList.slice(0, 8).forEach(a => {
        const cplStr = a.cpp !== null ? `$${a.cpp.toFixed(0)} CPL` : 'early';
        sheet.getRange(r, 1)
          .setValue(`  🚀 "${a.adRow.ad_name}" — ${cplStr}  |  ${a.shortCampaign}`)
          .setBackground('#c8e6c9');
        r++;
      });
      r++;
    }
    r++;
  }

  // ── Full ad table ──
  sheet.getRange(r, 1).setValue('ALL ADS — 30-DAY PERFORMANCE (sorted by Cost/Lead, worst first)')
    .setFontWeight('bold').setFontSize(12);
  r++;

  const adPerfHeaders = ['Ad Name', 'Campaign', 'Status', 'Spend ($)', 'Leads', 'Cost/Lead ($)', 'CTR (%)', 'Impressions', 'Suggested Action', 'View Ad'];
  sheet.getRange(r, 1, 1, adPerfHeaders.length).setValues([adPerfHeaders])
    .setFontWeight('bold').setBackground('#e8f0fe');
  r++;

  adRows.forEach(({ adRow, spend, purchases, cpp, ctr, impressions, status, action, adUrl, shortCampaign }) => {
    sheet.getRange(r, 1, 1, 9).setValues([[
      adRow.ad_name || '—',
      shortCampaign,
      status,
      spend.toFixed(2),
      purchases,
      cpp !== null ? cpp.toFixed(2) : '—',
      ctr.toFixed(2),
      impressions,
      action
    ]]);

    sheet.getRange(r, 10).setFormula(`=HYPERLINK("${adUrl}","View in Ads Manager")`);

    let bg = null;
    if (action.startsWith('🛑'))      bg = '#fce8e6';
    else if (action.startsWith('⚠️')) bg = '#fef3c7';
    else if (action.startsWith('🔄')) bg = '#fff9c4';
    else if (action.startsWith('✅')) bg = '#e6f4ea';
    else if (action.startsWith('📈')) bg = '#c8e6c9';
    else if (action.startsWith('🚀')) bg = '#a8d5a2';
    if (bg) sheet.getRange(r, 1, 1, 9).setBackground(bg);
    r++;
  });

  sheet.setColumnWidth(1, 300);
  sheet.setColumnWidth(9, 380);
  sheet.setColumnWidth(10, 160);
}

// ─── MAIN ENTRY POINT ────────────────────────────────────────────────────────

function dailyUpdate() {
  try {
    updateDashboard();
    pullDailySpend();
    pullChangeHistory();
    pullCreativeInventory();
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
