# A1 Event Decor Manufacturing — Website (Frontend + Demo Admin Panel)

## What's in this build
A complete, premium, mobile-first frontend for all four public pages —
`index.html` (Home), `about.html`, `products.html`, `contact.html` — plus
`admin.html`, a login-gated dashboard for editing content.

### Your logo
The logo you sent is at `img/logo.png` and is now used in the header,
footer, and browser tab icon on every page.

### Fixes applied from `fixes.docx`
- Removed pricing from product cards (this is a portfolio site, not
  e-commerce) — "Know More" now just expands the full description + gallery.
- Confirmed no "Add to Cart" anywhere (not applicable to a portfolio site).
- Removed the "Home / About" breadcrumb from the About page's story hero.
- Footer now shows real Facebook/Twitter/TikTok/Instagram icons (SVG),
  editable from the admin panel, instead of placeholder letters.
- Testimonials, message cards, and section designs were refreshed for a
  more premium, distinct look site-wide.
- Reworked the "ticket" hero element into a genuine looping image slideshow.

If any specific redesign in the doc doesn't match what you had in mind,
point me to the exact screenshot number (e.g. "image14") and what to
change about it — the doc's screenshots mix in reference designs from a
different project, so a couple of the redesign directions were my best
interpretation of the intent, not a pixel-for-pixel copy.

## The Admin Panel — how to use it
Open `admin.html` in your browser.

- **Username:** `Fahad`
- **Password:** `Fahadtravels`

(These defaults are no longer shown on the login screen itself — they're
documented here instead. Change them immediately from **Account &
Security** in the sidebar: you can update the username, password, and
the security question/answer used for password recovery. Passwords are
stored as a SHA-256 hash in your browser, not in plain text — a real
improvement over plain text, though it's still browser-local rather
than a server-side secret.)

If you forget your password, use "Forgot password?" on the login
screen — it asks your security question and lets you set a new
password once answered correctly.

From there you can edit: the Home page hero/message/mission/vision/story/
stats, the About page (who we are, founder/CEO messages, services,
process, values), all Products (add/edit/delete, images, featured/popular/
coming-soon flags), Testimonials (add/edit/delete), Contact details, and
branding/social links. Every save reflects immediately on the public pages.

### Important — please read this before relying on it
This admin panel **saves to your browser's local storage**, not to a
database. That means:
- Edits are only visible on the same browser, same device, where you made
  them. Open the site in a different browser or clear your browser data,
  and edits disappear (reverting to the defaults in `js/content.js`).
- It is **not** multi-user, and login is a simple client-side check — it
  is a working demonstration of "edit without touching code," not a
  secure production system. Anyone with the page's source can see the
  hardcoded check in `js/cms.js`.
- There's no real audit log, 2FA, roles, image upload, email notifications,
  or database — those all require a real backend.

**For a real, production CMS** (content visible to every visitor, from
any device, with real login security), you need the backend described in
your original spec: Node/Express + MongoDB + JWT/bcrypt + real hosting.
That's the natural next phase once you have a MongoDB Atlas account,
Cloudinary account, and a hosting provider — I can scaffold that Express
API and wire this same admin UI to it once those exist.

## If admin changes aren't showing on the site
This was reported and I found and fixed one real bug (see below), but the
**most common cause** is environmental, not code:

1. **Open the whole site through one local server, not by double-clicking files.**
   `admin.html` and `index.html` must be served from the exact same
   `http://...` origin for the browser to share the saved data between
   them. In VS Code, right-click `index.html` → "Open with Live Server"
   and use that same server for `admin.html` too. Or run
   `python -m http.server` in the `site` folder and open
   `http://localhost:8000/`. Opening files via `file://` (double-click)
   is unreliable for this — some browsers isolate storage per file.
2. **Hard refresh after saving** — Ctrl/Cmd+Shift+R on the public page,
   since regular refresh can serve a cached copy of the page.
3. The admin panel now shows a banner about this on first load of each
   session, and save buttons show an explicit error if the browser
   actually blocks the write (private/incognito mode, storage disabled).

**Bug fixed this round:** saving the About page's text fields was
overwriting the whole About record, which wiped out any Founder/CEO/
Who-We-Are photos you'd uploaded separately. Photo uploads and text
saves are now merged safely, so one no longer erases the other.

## What's new in this round
- **Welcome popup**: shows on every page load, on every page, with your
  logo. Edit its title/message or turn it off from Admin → Branding &
  Footer → Welcome Popup.
- **Image/video upload** added directly to the Products editor (in
  addition to pasting a URL) — images up to 2MB, video clips up to 4MB
  (browser storage is small; for anything bigger, use a YouTube/Vimeo
  embed link instead, which the video field already supports).
- Subtle animations: floating gradient orbs in the hero, a light 3D tilt
  on product/feature cards when you hover them (desktop only — skipped
  on touch devices and when the OS "reduce motion" setting is on).


