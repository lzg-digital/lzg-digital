# LZG Digital — GitHub Pages Site

## Before deployment
1. Open `assets/js/config.js`.
2. Replace the placeholder email, phone and WhatsApp number.
3. Replace `SITE_CONFIG.seo.siteUrl` with the final GitHub Pages URL or custom domain.
4. Replace every occurrence of `https://lzg-digital.github.io/lzg-digital/` with your real site URL. This placeholder appears in:
   - `robots.txt` (1 line)
   - `sitemap.xml` (10 URLs)
   - the `<link rel="canonical">` and Open Graph tags in every page's `<head>` (11 HTML files)
   - the JSON-LD structured data at the bottom of `index.html`, `faq/index.html`, and every page under `about/`, `contact/`, `work/`, `services/` (9 files)

   The fastest way to do this safely is a project-wide find-and-replace for the exact string `YOUR-USERNAME.github.io/YOUR-REPOSITORY` (works from any code editor, or `sed` on the command line). Do not publish the site with this placeholder left in place — it is intentionally left unset rather than filled with a fake URL.
5. If using a custom domain, use the HTTPS custom domain in step 4 instead of the `github.io` URL, and add a `CNAME` file at the project root.
6. Do not add `noindex` to public pages you want Google to rank.

## Editable from one file
- Brand name
- Tagline
- Email
- Phone
- WhatsApp
- Location
- Business hours
- Social links
- CTA wording
- Pricing

## SEO safety
Public pages use `index,follow` and self-referencing canonical URLs.
`robots.txt` allows crawling and points to `sitemap.xml`.
No fake reviews or fabricated SEO metrics are included.

## GitHub Pages
Keep `index.html` at the publishing root. GitHub Pages requires the entry file to be named exactly `index.html`.

## Performance / mobile / indexing note
The site is built mobile-first with lightweight CSS/JS, no required external font, no large image dependency, no autoplay video, and a CSS-based hero visual. It includes a reduced-motion fallback and responsive layouts.
A final Lighthouse/PageSpeed score cannot be honestly guaranteed until the site is deployed at its final URL; run PageSpeed Insights after deployment and optimize using the real field/lab results.


## Security hardening
- Static-only architecture: no server credentials or API secrets are shipped to the browser.
- HTML pages include a restrictive Content Security Policy and defensive browser policies.
- The 404 page is marked `noindex,nofollow,noarchive`; it should remain a genuine HTTP 404 on deployment.
- Keep the repository free of private keys, tokens, passwords, and `.env` files.
- Enable HTTPS enforcement in the final GitHub Pages/custom-domain deployment.
- For strongest response-header control (HSTS, X-Content-Type-Options, etc.), place the site behind a hosting/CDN layer that supports custom HTTP response headers (for example, Cloudflare).
