/**
 * Site settings that are not part of the nimbus config schema.
 *
 * - `googleAnalytics(id)` returns the `<head>` elements for a Google
 *   Analytics 4 property; add them to `head` in astro.config.ts, or leave
 *   the id empty to disable analytics.
 * - `versionBanner(version, latest)` returns the banner shown on every page
 *   of a documentation version.
 */

/** @param {string} id - A GA4 measurement id such as `G-XXXXXXXXXX`. */
export function googleAnalytics(id) {
  if (!id) return [];
  return [
    {
      tag: "script",
      attrs: { async: "true", src: `https://www.googletagmanager.com/gtag/js?id=${id}` },
    },
    {
      tag: "script",
      content:
        "window.dataLayer = window.dataLayer || [];" +
        "function gtag(){dataLayer.push(arguments);}" +
        "gtag('js', new Date());" +
        `gtag('config', '${id}');`,
    },
  ];
}

/**
 * The stable releases, newest first. It is a decision, not the newest
 * number: a pre-release (6.0 beta) is newer but not stable. Stable versions
 * show no banner; the first one is where `/` and `/latest/` lead and gets
 * the "latest" tag in the picker, the others get "stable". When 6.0 is
 * released: `["6.0", "5.20"]`, and remove it from PRERELEASES.
 */
export const STABLE_VERSIONS = ["5.20"];

/** The version that `/` and `/latest/` lead to. */
export const STABLE_VERSION = STABLE_VERSIONS[0];

/** Versions that are published but not stable yet, with their tag. */
export const PRERELEASES = { "6.0": "beta" };

/**
 * Versions that are no longer maintained. They are kept as a reference for
 * finished applications, not as documentation for active development.
 * nimbus (`versions.deprecated` in astro.config.ts) gives them the
 * deprecation banner, a sidebar badge and the Pagefind `status:deprecated`
 * facet, so `versionBanner()` adds nothing for them.
 */
export const DEPRECATED = ["3.4"];

/** The picker tag of a version, or undefined. */
export function versionTag(version, stable = STABLE_VERSIONS, prereleases = PRERELEASES) {
  if (version === stable[0]) return "latest";
  if (stable.includes(version)) return "stable";
  return prereleases[version];
}

/**
 * The banner of a page of `version`, or null for a stable or a deprecated
 * version.
 *
 * An older version points to the stable release of its own major line
 * when there is one (5.19 → 5.20), otherwise to the newest stable. A
 * deprecated version gets nimbus's own deprecation banner instead, which
 * links the same page of the current version.
 *
 * @param {string} version - The version of the page, e.g. `5.20`.
 * @param {string[]} stable - The stable releases, newest first.
 * @param {Record<string, string>} prereleases - Pre-release tags by version.
 * @param {string[]} deprecated - The versions that are no longer maintained.
 * @returns {{ content: string, type: "note" | "tip" | "caution" | "danger" } | null}
 */
export function versionBanner(
  version,
  stable = STABLE_VERSIONS,
  prereleases = PRERELEASES,
  deprecated = DEPRECATED
) {
  if (stable.includes(version) || deprecated.includes(version)) return null;
  const major = version.split(".")[0];
  const target = stable.find((v) => v.split(".")[0] === major) ?? stable[0];
  const link = `<a href="/${target}/">${target}</a>`;
  if (prereleases[version]) {
    return {
      content:
        `You are reading the documentation for Phalcon <strong>${version}</strong> (${prereleases[version]}). ` +
        `${link} remains the current stable release.`,
      type: "caution",
    };
  }
  return {
    content:
      `You are reading the documentation for Phalcon <strong>${version}</strong>. ` +
      `The current stable release is ${link}.`,
    type: "caution",
  };
}
