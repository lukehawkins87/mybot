"""
Facebook Ads Audit Script
Run this locally: python fb_audit.py
Requires: pip install requests python-dotenv
"""

import requests
import json
from datetime import datetime, timedelta
from dotenv import load_dotenv
import os

load_dotenv()

TOKEN = os.getenv("FB_ACCESS_TOKEN")
AD_ACCOUNT = os.getenv("FB_AD_ACCOUNT_ID")
BASE_URL = "https://graph.facebook.com/v25.0"


def get(endpoint, params={}):
    params["access_token"] = TOKEN
    r = requests.get(f"{BASE_URL}/{endpoint}", params=params)
    return r.json()


def section(title):
    print(f"\n{'='*60}")
    print(f"  {title}")
    print(f"{'='*60}")


def pull_campaigns():
    section("ACTIVE CAMPAIGNS — LAST 30 DAYS PERFORMANCE")
    data = get(f"{AD_ACCOUNT}/campaigns", {
        "fields": "name,status,daily_budget,lifetime_budget,objective",
        "limit": 100
    })
    campaigns = data.get("data", [])
    active = [c for c in campaigns if c.get("status") == "ACTIVE"]
    print(f"\nTotal campaigns: {len(campaigns)} | Active: {len(active)}\n")

    # Get insights for active campaigns
    insights = get(f"{AD_ACCOUNT}/insights", {
        "fields": "campaign_name,spend,impressions,clicks,actions,cost_per_action_type,ctr,cpc,reach,frequency",
        "date_preset": "last_30d",
        "level": "campaign",
        "limit": 100
    })
    for row in insights.get("data", []):
        purchases = next((a["value"] for a in row.get("actions", []) if a["action_type"] == "purchase"), "0")
        cost_per_purchase = next((a["value"] for a in row.get("cost_per_action_type", []) if a["action_type"] == "purchase"), "N/A")
        print(f"Campaign: {row.get('campaign_name', 'N/A')[:50]}")
        print(f"  Spend: ${float(row.get('spend', 0)):,.2f} | Reach: {int(row.get('reach', 0)):,} | Freq: {float(row.get('frequency', 0)):.2f}")
        print(f"  Clicks: {row.get('clicks', 0)} | CTR: {float(row.get('ctr', 0)):.2f}% | CPC: ${float(row.get('cpc', 0)):.2f}")
        print(f"  Purchases: {purchases} | Cost/Purchase: ${cost_per_purchase}")
        print()


def pull_change_history():
    section("CHANGE HISTORY — LAST 30 DAYS (What the agency actually did)")

    since = int((datetime.now() - timedelta(days=30)).timestamp())
    until = int(datetime.now().timestamp())

    data = get(f"{AD_ACCOUNT}/activities", {
        "fields": "actor_name,event_type,object_name,translated_event_type,event_time,extra_data",
        "since": since,
        "until": until,
        "limit": 200
    })

    changes = data.get("data", [])
    print(f"\nTotal changes in last 30 days: {len(changes)}\n")

    by_actor = {}
    by_day = {}
    by_type = {}

    for change in changes:
        actor = change.get("actor_name", "Unknown")
        event_time = change.get("event_time", "")
        day = event_time[:10] if event_time else "Unknown"
        event_type = change.get("translated_event_type", change.get("event_type", "Unknown"))

        by_actor[actor] = by_actor.get(actor, 0) + 1
        by_day[day] = by_day.get(day, 0) + 1
        by_type[event_type] = by_type.get(event_type, 0) + 1

    print("Changes by person:")
    for actor, count in sorted(by_actor.items(), key=lambda x: -x[1]):
        print(f"  {actor}: {count} changes")

    print("\nChanges by type (what was done):")
    for etype, count in sorted(by_type.items(), key=lambda x: -x[1])[:15]:
        print(f"  {etype}: {count}")

    print("\nChanges by day (activity pattern):")
    for day in sorted(by_day.keys()):
        bar = "█" * min(by_day[day], 40)
        print(f"  {day}: {bar} ({by_day[day]})")

    # Estimate time
    total_changes = len(changes)
    days_with_activity = len([d for d in by_day.values() if d > 0])
    avg_per_active_day = total_changes / days_with_activity if days_with_activity else 0
    estimated_mins = total_changes * 3  # ~3 min per change conservative estimate

    print(f"\n--- TIME ESTIMATE ---")
    print(f"Days with any activity: {days_with_activity}/30")
    print(f"Avg changes on active days: {avg_per_active_day:.1f}")
    print(f"Estimated time (3 min/change): {estimated_mins} minutes = {estimated_mins/60:.1f} hours over 30 days")
    print(f"Estimated time per active day: {estimated_mins/max(days_with_activity,1):.0f} minutes")


def pull_adsets():
    section("AD SETS — BUDGET & TARGETING OVERVIEW")
    data = get(f"{AD_ACCOUNT}/adsets", {
        "fields": "name,status,daily_budget,lifetime_budget,targeting,optimization_goal,billing_event",
        "filtering": '[{"field":"effective_status","operator":"IN","value":["ACTIVE"]}]',
        "limit": 50
    })
    adsets = data.get("data", [])
    print(f"\nActive ad sets: {len(adsets)}\n")
    for adset in adsets[:10]:
        budget = adset.get("daily_budget") or adset.get("lifetime_budget") or "Ad set budget"
        if budget != "Ad set budget":
            budget = f"${int(budget)/100:.2f}/day"
        print(f"  {adset.get('name', 'N/A')[:55]}")
        print(f"    Budget: {budget} | Goal: {adset.get('optimization_goal', 'N/A')}")


def pull_top_ads():
    section("TOP & BOTTOM ADS BY COST PER PURCHASE")
    data = get(f"{AD_ACCOUNT}/insights", {
        "fields": "ad_name,adset_name,spend,actions,cost_per_action_type,impressions,ctr",
        "date_preset": "last_30d",
        "level": "ad",
        "limit": 100,
        "filtering": '[{"field":"spend","operator":"GREATER_THAN","value":"10"}]'
    })
    ads = data.get("data", [])

    ads_with_purchases = []
    for ad in ads:
        purchases = next((float(a["value"]) for a in ad.get("actions", []) if a["action_type"] == "purchase"), 0)
        cpp = next((float(a["value"]) for a in ad.get("cost_per_action_type", []) if a["action_type"] == "purchase"), 99999)
        if purchases > 0:
            ads_with_purchases.append({**ad, "_purchases": purchases, "_cpp": cpp})

    ads_with_purchases.sort(key=lambda x: x["_cpp"])

    print(f"\nAds with purchases: {len(ads_with_purchases)}\n")
    print("TOP 5 BEST (lowest cost/purchase):")
    for ad in ads_with_purchases[:5]:
        print(f"  {ad.get('ad_name','N/A')[:50]}")
        print(f"    Spend: ${float(ad.get('spend',0)):,.2f} | Purchases: {ad['_purchases']:.0f} | CPP: ${ad['_cpp']:,.2f}")

    print("\nBOTTOM 5 WORST (highest cost/purchase):")
    for ad in ads_with_purchases[-5:]:
        print(f"  {ad.get('ad_name','N/A')[:50]}")
        print(f"    Spend: ${float(ad.get('spend',0)):,.2f} | Purchases: {ad['_purchases']:.0f} | CPP: ${ad['_cpp']:,.2f}")


if __name__ == "__main__":
    print("\nFACEBOOK ADS AUDIT")
    print(f"Account: {AD_ACCOUNT}")
    print(f"Run at: {datetime.now().strftime('%Y-%m-%d %H:%M')}")

    pull_campaigns()
    pull_change_history()
    pull_adsets()
    pull_top_ads()

    print("\n" + "="*60)
    print("  AUDIT COMPLETE — paste full output back to Claude")
    print("="*60 + "\n")
