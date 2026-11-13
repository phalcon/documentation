/**
 * The versions that the site loads.
 *
 * Each start of the dev server renders all the pages of the loaded versions
 * again. With all the versions, this takes more time than the dev server
 * allows, and the server does not start. Set DOCS_VERSIONS to the versions to
 * load, separated by spaces or commas, for example "6.0 5.24". When
 * DOCS_VERSIONS is not set or is empty, every version loads. Builds do not set
 * it. `./serve` sets it.
 */
const requested = (process.env.DOCS_VERSIONS ?? "").trim();
const selected = requested === "" ? null : new Set(requested.split(/[\s,]+/));

/** True when the site loads this version. */
export function isLoadedVersion(version) {
  return selected === null || selected.has(version);
}
