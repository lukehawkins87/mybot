# Social Content Cadence & Type Audit — Regan Hillyer · Marczell Klein · Brooke Castillo

> **Goal:** For each of the 3, count pieces of content and content type (carousel / quote cards /
> feed posts / videos/reels) per week and per month, across Instagram, Facebook, LinkedIn, TikTok,
> X/Twitter, YouTube (shorts + long-form), and podcasts (Spotify/Apple/etc.).
>
> **Status (2026-06-08):** ✅ **Instagram** captured for Regan & Marczell. ⏸️ Brooke/LCS Instagram and
> **all other platforms parked** — blocked by an **Apify monthly usage hard-limit** ("Monthly usage hard
> limit exceeded. Please upgrade your subscription"). Resume when the plan resets/upgrades. Per user
> decision, this pass is **Instagram-only**.

## Accounts in scope (primary handles)
| Platform | Regan Hillyer | Marczell Klein | Brooke Castillo / LCS |
|---|---|---|---|
| Instagram | @reganhillyer (~2M) | @marczell (~296K) | @lifecoachschool (+ @therealbrookecastillo) |
| TikTok | @reganhillyer | @marczell (+ @marczellklein) | @lifecoachschool |
| X/Twitter | @ReganHillyer | @Marczellklein | @BrookeCastillo |
| YouTube | @ReganHillyerCoach | Marczell Klein channel | The Life Coach School |
| Facebook | /ReganHillyer | /marczellklein | /lifecoachschool |
| LinkedIn | in/reganhillyer | (sparse) | /school/lifecoachschool |
| Podcast | TBD | "Everything is Influence" | The Life Coach School Podcast |

## Method
- Tool: Apify `apify/instagram-scraper`, `resultsType: posts`.
- Window: **last 90 days** (`onlyPostsNewerThan: 2026-03-10` → 2026-06-08 ≈ 12.9 weeks ≈ 3.0 months).
- Content type derived from media type: `Sidecar` = **carousel**, `Video`/`productType:clips` = **reel/video**,
  `Image` = **single image** (includes quote cards — see caveat). Collab/tagged posts owned by other
  accounts were excluded (matched on exact `ownerUsername`).

## Instagram results (last 90 days)

### Regan Hillyer — @reganhillyer ✅
| Content type | Count | Share |
|---|---|---|
| Reels / video | 31 | 40% |
| Carousel (multi-image) | 30 | 39% |
| Single image (incl. quote cards) | 16 | 21% |
| **Total** | **77** | 100% |

- **Cadence: ~6.0 posts/week · ~25.7 posts/month.**
- Highly active; near-even three-way split across reels, carousels, and single images.

### Marczell Klein — @marczell ✅ (low volume — confirmed across 2 runs)
| Content type | Count (in window) | Share |
|---|---|---|
| Carousel | 3 | 100% |
| Reels / video | 0 | 0% |
| Single image | 0 | 0% |
| **Total** | **3** | 100% |

- Posts in window: 2026-03-12, 2026-04-14, 2026-05-03 — **all carousels**.
- **Cadence: ~0.23 posts/week · ~1 post/month.** His IG *feed* is not a primary channel; his volume lives
  in paid Meta ads, click-to-Messenger, and TikTok (see the ad-census report).

### Brooke Castillo / The Life Coach School ⏸️ PENDING
- `@lifecoachschool` and `@therealbrookecastillo` returned no data before the Apify limit hit — needs a
  re-run once Apify usage resets. Do **not** treat the empty result as "posts nothing."

## Caveats
1. **"Quote cards" are not auto-detectable.** Scrapers report media type only; a single `Image` may be a
   quote graphic or a photo. Separating them needs visual review (vision/OCR) on a sample — not yet done.
2. **Carousels can contain mixed media**; counted once, by Instagram's `Sidecar` type.
3. Collab/tagged posts (e.g., Regan ↔ Mindvalley) were excluded to avoid double-counting.

## To finish (when Apify is back)
1. Re-run Instagram for `@lifecoachschool` + `@therealbrookecastillo`.
2. Other platforms (parked this pass): TikTok, YouTube (split shorts vs long-form by duration),
   X/Twitter, Facebook pages, LinkedIn (scrape-hostile — may need manual), podcasts via RSS (true
   episode cadence; podcast apps just redistribute the same feed).
3. Optional: vision pass to split "quote cards" out of single-image counts.
