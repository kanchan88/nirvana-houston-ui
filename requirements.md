# CLAUDE.md — Nirvana Indian Restaurant

This file guides any agent or developer building the Nirvana website. Read it fully before writing code. The goal is one thing: a **clean, elegant, premium, mobile-first** restaurant site that looks expensive, loads fast, and sends every order to Toast.

---

## 1. Product in one paragraph

Nirvana is a premium Halal Indian restaurant. The website is a brochure + conversion surface, not an e-commerce app. We **do not** build a cart or checkout — all ordering redirects to the restaurant's **Toast** online ordering platform. Our job is to make people feel the quality of the place, find what they need on a phone in seconds, and tap one of three things: **Order Now**, **Request Catering**, or **View Menu**. Everything else is presentation.

**North-star metrics:** mobile order-button taps, catering form submissions, and time-to-first-meaningful-paint. Design every decision against those.

---

## 2. Audience & context

- **~80% of traffic is mobile.** Mobile is the primary design target, not an afterthought. Design every screen at 375px first, then scale up. If a layout only works on desktop, it's wrong.
- Users arrive hungry, distracted, often outdoors, often one-handed. Tap targets must be large, copy must be scannable, key actions must be reachable with a thumb.
- Returning users come via marketing links straight to **What's New / Offers** and **Catering** — those pages must stand alone and convert without the homepage.

---

## 2b. Design direction — editorial, photography-led, calm

**Reference (aesthetic only, not content):** dishoom.com. We take its *feel*, never its copy, layout-for-layout, or assets. What we're borrowing:

- **It reads like a beautifully typeset magazine, not a web template.** Big confident serif headlines, a small uppercase label above each section ("BOMBAY COMFORT FOOD" → headline), generous narrative copy with warmth, and full-bleed photography that carries the page. We do the same with Nirvana's own voice and dishes.
- **Photography is the hero.** Large, rich, real food and room photos. Editorial captions in small serif/italic ("Slow-cooked overnight…", "Fresh from the tandoor"). Images are not decoration — they *are* the content.
- **Restraint everywhere.** Muted, warm palette; lots of whitespace; one idea per section; nothing shouts. The luxury comes from space, type, and photography — not effects.
- **Minimal motion.** The user explicitly wants this. Almost no animation: a quiet fade/rise as sections enter, gentle hover states, and that's it. No parallax theatrics, no autoplaying sliders, no scroll-jacking. Calm = premium.
- **Clear, few CTAs.** Dishoom leads with "View menus" / "Book a table." We lead with **Order Now** (→ Toast), **View Menu**, and **Request Catering**. Never more than two CTAs competing in one view.

Translate this into Nirvana's navy + gold identity: the editorial structure and calm of Dishoom, the colours and peacock elegance of Nirvana. Think *understated, premium, content-first* — every screen should look composed and intentional, like a page in a good cookbook.

---

## 3. Brand identity

### 3.1 Logo
- Gold script "Nirvana" wordmark with "INDIAN RESTAURANT" beneath it, paired with an ornate gold-and-teal peacock. The peacock and paisley feather motifs are the brand's signature — use them as **accents**, never as loud background clutter.
- Provide the logo as SVG. Keep generous clear space around it. Never recolor it, stretch it, or place it on a busy background.
- Favicon: a simplified peacock head/crest mark in gold on navy.

### 3.2 Color — Dark Navy Blue & Gold
Premium restaurants win on restraint. Navy dominates, gold accents, lots of breathing room. Gold is for emphasis (CTAs, dividers, highlights), never for body text.

```css
:root {
  /* Core */
  --navy-900: #0B1220;   /* deepest backgrounds, footer */
  --navy-800: #0F1A2E;   /* primary dark sections */
  --navy-700: #16243F;   /* cards on dark, elevated surfaces */
  --navy-600: #20314F;   /* borders/hairlines on dark */

  /* Gold */
  --gold-500: #C9A24B;   /* primary gold — CTAs, accents */
  --gold-400: #D9B65C;   /* hover / lighter gold */
  --gold-300: #E7CE86;   /* highlights, subtle gradients */
  --gold-gradient: linear-gradient(135deg, #E7CE86 0%, #C9A24B 55%, #A67C2E 100%);

  /* Peacock accent (use sparingly — feather motifs, micro-details) */
  --teal-500: #1F8A8A;
  --teal-300: #57B6B0;

  /* Neutrals / light surfaces (warm, editorial off-white — magazine feel) */
  --cream-50:  #F5F1E6;  /* light page background (warm, not stark white) */
  --cream-100: #EDE7D8;  /* light cards */
  --ink-900:   #14161A;  /* body text on light */
  --ink-600:   #4A4F58;  /* secondary text on light */
  --line:      rgba(201,162,75,0.22); /* gold hairline dividers */

  /* Status */
  --halal-green: #2E7D52;
  --error: #C0492F;
}
```

**Usage rules**
- Two themed surface modes: **Dark** (navy bg, cream/gold text) for hero, footer, and feature bands; **Light** (cream bg, ink text, gold accents) for dense reading like the menu and blog. Alternate them to create rhythm — never put two identical-tone sections back to back without a divider.
- Gold is precious. If everything is gold, nothing is. Limit gold fills to primary CTAs and the brand mark; use gold mostly as thin lines, small icons, and text accents.
- Contrast must pass WCAG AA. Gold text only on navy at large sizes; never gold body text on cream.

### 3.3 Typography
Elegant serif display for personality, clean sans for everything functional. Load via `font-display: swap`, subset, and self-host or use a fast provider.

- **Display / headings:** a refined serif — `"Cormorant Garamond"` or `"Playfair Display"` (high-contrast, premium). Use for H1–H3, the wordmark feel, and pull-quotes.
- **Body / UI:** a humanist sans — `"Inter"` or `"Plus Jakarta Sans"`. Use for paragraphs, nav, buttons, menu item text, forms.
- **Optional accent:** a tasteful script *only* for short decorative labels (e.g. "Since …"), never for anything that must be read quickly.

```css
:root {
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;

  --step--1: clamp(0.83rem, 0.78rem + 0.2vw, 0.9rem);
  --step-0:  clamp(1rem, 0.95rem + 0.25vw, 1.1rem);
  --step-1:  clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --step-2:  clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem);
  --step-3:  clamp(2rem, 1.5rem + 2.5vw, 3.25rem);
  --step-4:  clamp(2.6rem, 1.8rem + 4vw, 4.5rem);   /* hero */
}
```

- Generous line-height for body (1.6–1.7). Tight, confident leading for serif headings (1.05–1.15).
- Use letter-spacing on small uppercase labels (the "INDIAN RESTAURANT" treatment) — `0.18em`, gold, small caps feel.

### 3.4 Voice & tone
Warm, confident, hospitable — never gimmicky or discount-shouty. "Crafted," "fragrant," "slow-cooked," "house favourite." Short sentences. Let the food do the talking.

---

## 4. Design system & motion

### 4.1 Spacing, radius, shadow
```css
:root {
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-24: 96px;
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 22px; --radius-pill: 999px;
  --shadow-soft: 0 10px 30px -12px rgba(11,18,32,0.45);
  --shadow-card: 0 6px 20px -10px rgba(11,18,32,0.35);
  --container: 1140px;
}
```
- Whitespace is the luxury signal. When unsure, add space, remove elements. Section vertical padding ≥ `--space-16` on mobile, `--space-24` on desktop.
- Rounded but restrained corners. Soft, low shadows only — no harsh drop shadows.

### 4.2 Imagery — the heart of the design
- Large, high-quality food and room photography is the hero of the whole site. Shoot/buy real Nirvana dishes and interiors; avoid generic stock. Aim for warm, appetising, well-lit images with depth.
- **Editorial captions.** Pair key photos with short italic serif captions (e.g. *"Slow-cooked overnight, finished in the tandoor"*). This is the single biggest move that makes the site feel premium and magazine-like rather than templated.
- Mix formats deliberately: occasional full-bleed images, tall portrait shots beside text columns, and quiet two-up pairs. Vary rhythm; never a monotonous grid of equal thumbnails.
- Subtle navy gradient overlays on hero/CTA images so gold/cream text stays legible.
- Decorative **peacock-feather paisley line-art** in gold at very low opacity (4–8%) for section dividers and footer flourish only. Decoration must never compete with content.
- Every image: explicit `width`/`height`, `loading="lazy"` (except LCP hero), modern formats (AVIF/WebP), responsive `srcset`. Photography is heavy — performance discipline here is non-negotiable (§10).

### 4.3 Motion — deliberately minimal
The client wants restraint here. Default to *no* animation; add a touch only where it aids clarity.
- **Allowed:** a single quiet fade-and-rise as a section scrolls into view (≤12px, ~350ms, ease-out, once — no repeating). Gentle gold underline on link hover. Buttons lift ~1–2px on hover/press. Smooth, non-janky image lazy-load (fade-in, no skeleton flash).
- **Not allowed:** parallax, scroll-jacking, auto-advancing carousels, counters that bounce, hover effects that move layout, anything that delays content appearing, decorative loops. If an effect makes the page feel "designed at you," cut it.
- The catering stat counters (§8.4) may count up once on entry — but keep it subtle and show final numbers immediately under `prefers-reduced-motion`.
- **Respect `prefers-reduced-motion`** — disable all transforms/fades when set; content appears instantly.
- Galleries are swipeable/tappable and user-driven, never auto-moving.

---

## 5. Global components

| Component | Spec |
|---|---|
| **Header / Nav** | Transparent over hero, becomes solid navy on scroll. Logo left. On mobile: hamburger → full-screen navy drawer with large gold links. A persistent gold **Order Now** button is always visible in the header. |
| **Order Now CTA** | Gold pill, navy text, `--shadow-soft`. Opens Toast in a new tab. Appears in header, hero, every menu section, and a mobile sticky bar. This is the most important element on the site. |
| **Sticky mobile action bar** | Fixed bottom bar on mobile only: **Order Now** (primary gold) + **Call** + **Directions**. Always thumb-reachable. Hide on scroll-down, reveal on scroll-up. |
| **Halal badge** | Small gold-outlined badge with `--halal-green` checkmark: "100% Halal." Appears in header area or hero and recurs on every page (see §7). |
| **Buffet ribbon** | A recurring gold accent block promoting the buffet — surfaces on home, menu, and as a cross-link elsewhere (see §7). |
| **Section band** | The core editorial unit. Small uppercase gold label → large serif headline → short warm paragraph → at most one CTA. Generous padding, lots of whitespace, paired with one strong photo. Alternate dark/light bands for rhythm. |
| **Image + caption** | Photo with an italic serif caption beneath/beside it. The signature premium detail — used throughout home, about, menu, gallery. |
| **Section divider** | Thin gold hairline or a faint centered peacock-paisley motif. |
| **Card** | Navy-700 on dark / cream-100 on light, `--radius-md`, `--shadow-card`, gold hairline border. |
| **Footer** | Navy-900. Logo, hours, address w/ map link, phone, social, Halal badge, faint peacock flourish, quick links to all pages, and one more Order Now. |
| **Buttons** | Primary = gold pill / navy text. Secondary = navy outline + gold text. Tertiary = text + gold underline-on-hover. Min height 48px, min tap target 44×44px. |

---

## 6. Toast ordering integration (critical)

- **No native cart, no checkout, no payment on this site.** Every "Order Now" / "Order Online" is a link to the restaurant's Toast online ordering URL.
- Centralize the URL in one config constant (e.g. `TOAST_ORDER_URL`) so it's changed in exactly one place.
- Links open in a **new tab** with `target="_blank" rel="noopener"`.
- Track clicks as a conversion event (analytics) — these taps are the primary KPI.
- Never block the redirect behind a modal or form. One tap → Toast.

---

## 7. Site-wide non-negotiables

These appear/repeat across **every** page:

1. **Halal everywhere.** A "100% Halal" badge or line is visible on every page. It's a core trust signal — design it elegantly, not as a sticker.
2. **Buffet always promoted.** Each page links to or teases the buffet (ribbon, banner, or footer mention). The buffet is a flagship offering.
3. **Order Now reachable at all times** (header + mobile sticky bar).
4. **Mobile-first, fast, accessible, SEO-clean** (see §10).

---

## 8. Pages

Navigation order: **Home · About Us · Menu · Catering · Blogs · What's New / Offers · Gallery**

### 8.1 Home
The flagship introduction; must link to every other page. Build it as a **sequence of editorial section bands** (§5) — calm, scrollable, photography-led, alternating dark/light — not a busy dashboard of widgets.
- **Hero:** full-bleed dish photo, navy overlay, serif H1, one-line positioning, **Order Now** + **View Menu** buttons, Halal badge, opening hours teaser.
- **Highlights band:** 3–4 key features (Halal, Buffet, Catering, Authentic flavours) as elegant icon cards.
- **Buffet feature section** — visually rich, gold-accented, links to Menu › Buffet.
- **Signature dishes / featured content** strip with Order Now.
- **Google Reviews integration** — display real customer reviews (favour 5-star). Use the Google Places/Reviews data; render as a tasteful card row, gold stars, avatar, name, snippet. Fetch server-side or cache to avoid layout shift and rate limits; never let it block render. Include schema markup.
- **Hours block** — clearly formatted open/close times, plus address + map + call.
- **Promotions / What's New teaser** linking to the Offers page.
- **Catering teaser** with a single strong CTA to the Catering page.
- Closing CTA band + footer.
- Pack the page with **SEO-strong, natural copy**: cuisine, neighbourhood, Halal, buffet, catering keywords.

### 8.2 About Us
- Story & history of the restaurant; origin and background (warm, narrative serif copy).
- **Mission, vision, values** — three elegant cards or a quiet editorial layout.
- **Our Team** — leadership/team members with portraits, names, roles, short bios. Tasteful grid, navy cards, gold accents.

### 8.3 Menu
Two clear categories, both with Order Now buttons in **every** section.
- **A La Carte:** full listings with descriptions, prices, and details. Group by course/category with a sticky category nav (chips) on mobile. Dietary/spice/veg markers as small gold icons. Light (cream) reading surface for legibility.
- **Buffet:** prominent, image-led. Buffet photography, visual highlights, item listings (content provided later — build a flexible, easily editable structure and use elegant placeholders meanwhile). Promote heavily.
- Halal badge present. Clear pricing. Each section: **Order Now → Toast**.

### 8.4 Catering — *(one of the most important pages; treat it as a landing page)*
- Hero with a strong value statement + **Request a Quote** CTA.
- **Services grid:** Corporate Catering, Lunch Boxes, Birthday Parties, Anniversaries, Weddings, Receptions, Graduation Parties, Private Events & Special Occasions — each with icon, short description, image.
- **Image gallery** of catering events (swipeable on mobile, lightbox on desktop).
- **Animated stat counters** — e.g. events catered, guests served, years of experience. Count up on scroll into view; respect reduced-motion (show final numbers).
- **Inquiry / quotation form** (see §9). This is the page's main conversion.
- Trust elements: testimonials, Halal note.

### 8.5 Blogs
- Article index (card grid) + individual post template. For: articles, updates, restaurant stories, recipes, announcements, engagement content.
- Clean editorial reading layout, generous typography, related-posts, share buttons. SEO-optimized (meta, OG, article schema). Easy to add posts via the CMS (§11).

### 8.6 What's New / Offers — *(heavy marketing use; must stand alone)*
- Purpose: new menu items, promotions/discounts, special offers, seasonal announcements, marketing campaigns.
- Designed to be linked directly from campaigns. Bold, scannable offer cards with validity dates and clear CTAs (Order Now / View Menu).
- Easy for staff to update frequently — flexible, CMS-driven card list.

### 8.7 Gallery
- Photo gallery: ambiance, food, buffet setup, catering events, customer experiences.
- Masonry/justified grid, lazy-loaded, lightbox with swipe on mobile. Optional category filters (Food / Buffet / Catering / Ambiance).

---

## 9. Forms (catering inquiry + contact)

- Fields: name, email, phone, event type (select — mirror the catering services), event date, guest count, message. Mark required fields clearly.
- Large, comfortable inputs; gold focus ring; inline validation; accessible labels (not placeholder-only).
- Success and error states are designed, not browser-default alerts.
- Submission: send to the restaurant's email/CRM endpoint, with spam protection (honeypot + lightweight challenge) and server-side validation. Confirm with a friendly on-brand success message.

---

## 10. Performance, SEO & accessibility

**Performance**
- Mobile-first, fast loading is a hard requirement. Targets: LCP < 2.5s on mid-tier mobile, CLS < 0.1, TBT low.
- Optimize and lazy-load images (AVIF/WebP, responsive srcset, explicit dimensions). Preload the hero image and fonts.
- Minimal JS; defer non-critical scripts. Avoid heavy carousel/animation libraries — prefer CSS + small intersection-observer helpers.
- Self-host fonts subset; `font-display: swap`.

**SEO**
- Semantic HTML, one H1 per page, logical heading order, descriptive alt text.
- Unique title + meta description per page; Open Graph + Twitter cards.
- Structured data: `Restaurant` (with `servesCuisine`, `priceRange`, hours, address, geo), `Menu`/`MenuItem` where feasible, `AggregateRating`/`Review` for Google reviews, `Article` for blog posts, `LocalBusiness`.
- Clean URLs, sitemap.xml, robots.txt, canonical tags. Fast = ranking signal.
- Rich, natural keyword copy on Home and Menu (Halal Indian restaurant, buffet, catering, location terms).

**Accessibility (WCAG 2.1 AA)**
- Color contrast AA on all text. Visible gold focus states. Full keyboard nav. ARIA on nav drawer, lightbox, accordions, sticky bar. Tap targets ≥ 44px. Honor `prefers-reduced-motion` and `prefers-reduced-data`.

---

## 11. Architecture & content management

- **Tech:** prefer a fast, SEO-friendly framework (e.g. Next.js/Astro) with SSG/ISR. Tailwind or CSS variables matching the tokens above. Component-driven.
- **Easy content updates:** Menu items, blog posts, offers, gallery images, team members, and catering stats must all be editable **without touching code** — back the dynamic content with a headless CMS or simple structured content files. Offers and Menu change often; make them trivial to edit.
- Single source of truth for: `TOAST_ORDER_URL`, phone, address, hours, social links, Google Place ID — in one config.
- Responsive image pipeline + reusable `<OrderButton>`, `<HalalBadge>`, `<BuffetRibbon>`, `<SectionDivider>`, `<StatCounter>`, `<ReviewCard>` components.

---

## 12. Definition of done (checklist)

- [ ] All 7 pages built, linked in nav, and reachable from the homepage.
- [ ] Every menu section + key page has an **Order Now** button → Toast (new tab, single config URL).
- [ ] **100% Halal** badge visible on every page.
- [ ] **Buffet** promoted on home, menu, and cross-linked site-wide.
- [ ] Mobile sticky action bar (Order / Call / Directions) works and is thumb-reachable.
- [ ] Google Reviews show on home with schema; no layout shift.
- [ ] Catering page: services, gallery, animated counters, working inquiry form.
- [ ] What's New/Offers stands alone and is CMS-editable for campaigns.
- [ ] Hours, address, phone, map correct and consistent everywhere.
- [ ] Lighthouse mobile: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95.
- [ ] Reduced-motion and keyboard navigation verified.
- [ ] Navy + gold system applied consistently; gold used with restraint; lots of whitespace.

---

## 13. Design principles (keep this taste alive)

1. **Edit like a magazine.** Each section = one label, one headline, one idea, one photo, optionally one CTA. If a section is doing two jobs, split it.
2. **Restraint reads as premium.** Fewer elements, more whitespace, confident typography. The space *is* the design.
3. **Photography leads; UI gets out of the way.** Real food, real room, editorial captions.
4. **Motion is a whisper, not a show.** A quiet fade on entry at most. When in doubt, no animation.
5. **Gold is an accent, not a coat of paint.** Thin lines, small marks, one bold CTA per view.
6. **Mobile thumb-first.** If the main action isn't reachable with one thumb, redesign it.
7. **One tap to order.** Never put friction between intent and Toast.
8. **Calm motion, fast pages.** Elegance is also speed.