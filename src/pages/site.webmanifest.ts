// The web app manifest of the docs: the name, and the icons of public/ (copies
// of phalcon/favicons/ in phalcon/assets) for a home screen. The short name is
// the site part only, so that a home screen does not cut it: the icon shows the
// brand. A home screen icon opens the docs in the browser (display: browser):
// it is a web site, not an app. The colors come from the design tokens, as the
// browser bar color of the head (astro.config.ts).
import { resolveToken } from "../lib/design-checks.mjs";
import { SITE_DESCRIPTION, SITE_TITLE } from "../lib/site.mjs";
import tokens from "../styles/tokens.css?raw";

export const prerender = true;

export function GET() {
  const color = resolveToken(tokens, "--ph-dark-bg");
  const manifest = {
    name: SITE_TITLE,
    short_name: "Docs",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: color,
    theme_color: color,
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };

  return new Response(`${JSON.stringify(manifest, null, 2)}\n`, { headers: { "Content-Type": "application/manifest+json" } });
}
