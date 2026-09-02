/**
 * The Phalcon release history. This is the only source for the "Release
 * History" page of every version.
 *
 * The order is oldest first. To add a release, put one line at the end.
 *
 * The dates come from the changelogs, which is the source that the release
 * announcements use: `resources/changelogs/` and `CHANGELOG-5.0.md` of
 * `cphalcon`, and `CHANGELOG.md` of `phalcon` for the 6.0 previews. Do not
 * use the git tags. Some tags disagree with the changelog by a day, the tag
 * of 6.0.0alpha1 is on a commit from 2020, and 5.12.0 has no tag at all.
 *
 * Two releases have no changelog entry, and keep the date that the
 * documentation always showed: 2.0, and 0.3 to 0.6. The changelog of 0.x
 * gives no date before 0.7.
 */

export interface Release {
  /** The release, in the form that the user knows: "5.20", "6.0.0beta3". */
  version: string;
  /** The release date, as ISO 8601. The component makes the display form. */
  date: string;
  /** The PHP versions that the release supports. Empty before 3.0. */
  php: string;
  /**
   * "maintained" - an older release that still gets fixes.
   * "preview" - an alpha, a beta or a release candidate.
   *
   * Leave this out for a superseded release, and for the latest release.
   * The component finds the latest release: it is the last entry that is
   * not a preview.
   */
  status?: "maintained" | "preview";
}

export const releases: Release[] = [
  { version: "0.3", date: "2012-11-14", php: "" },
  { version: "0.4", date: "2012-06-02", php: "" },
  { version: "0.5", date: "2012-09-17", php: "" },
  { version: "0.6", date: "2012-11-11", php: "" },
  { version: "0.7", date: "2012-12-04", php: "" },
  { version: "0.8", date: "2013-01-18", php: "" },
  { version: "0.9", date: "2013-02-05", php: "" },
  { version: "1.0", date: "2013-03-22", php: "" },
  { version: "1.1", date: "2013-05-08", php: "" },
  { version: "1.2", date: "2013-07-10", php: "" },
  { version: "1.3", date: "2014-03-19", php: "" },
  { version: "2.0", date: "2015-04-16", php: "" },
  { version: "3.0", date: "2016-07-29", php: "5.6-7.0" },
  { version: "3.1", date: "2017-03-22", php: "5.6-7.0" },
  { version: "3.2", date: "2017-06-19", php: "5.6-7.1" },
  { version: "3.3", date: "2017-12-23", php: "5.6-7.2" },
  { version: "3.4", date: "2018-05-28", php: "5.6-7.2" },
  { version: "4.0", date: "2019-12-21", php: "7.2-7.4" },
  { version: "4.1", date: "2020-10-31", php: "7.2-7.4" },
  { version: "5.0", date: "2022-09-22", php: "7.4-8.2" },
  { version: "5.1", date: "2022-11-01", php: "7.4-8.2" },
  { version: "5.2", date: "2023-02-26", php: "7.4-8.2" },
  { version: "5.3", date: "2023-08-15", php: "7.4-8.2" },
  { version: "5.4", date: "2023-10-25", php: "7.4-8.2" },
  { version: "5.5", date: "2023-12-25", php: "8.0-8.3" },
  { version: "5.6", date: "2024-01-09", php: "8.0-8.3" },
  { version: "5.7", date: "2024-05-17", php: "8.0-8.3" },
  { version: "5.8", date: "2024-07-09", php: "8.0-8.3" },
  { version: "5.9", date: "2025-03-08", php: "8.1-8.4" },
  { version: "5.10", date: "2025-12-25", php: "8.1-8.4" },
  { version: "5.11", date: "2026-04-03", php: "8.1-8.5" },
  { version: "5.12", date: "2026-04-29", php: "8.1-8.5" },
  { version: "5.13", date: "2026-05-18", php: "8.1-8.5" },
  { version: "5.14", date: "2026-06-04", php: "8.1-8.5" },
  { version: "5.15", date: "2026-06-18", php: "8.1-8.5" },
  { version: "5.16", date: "2026-06-22", php: "8.1-8.5" },
  { version: "5.17", date: "2026-07-17", php: "8.1-8.5" },
  { version: "5.18", date: "2026-07-31", php: "8.1-8.5" },
  { version: "5.19", date: "2026-08-19", php: "8.1-8.5", status: "maintained" },
  { version: "5.20", date: "2026-08-22", php: "8.1-8.5" },

  { version: "6.0.0alpha1", date: "2026-06-19", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0alpha2", date: "2026-06-19", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0alpha3", date: "2026-06-29", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0alpha4", date: "2026-07-13", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0alpha5", date: "2026-07-21", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0alpha6", date: "2026-07-22", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta1", date: "2026-07-24", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta2", date: "2026-07-26", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta3", date: "2026-07-27", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta4", date: "2026-07-28", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta5", date: "2026-07-31", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta6", date: "2026-08-02", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta7", date: "2026-08-19", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta8", date: "2026-08-22", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta9", date: "2026-08-24", php: "8.1-8.5", status: "preview" },
  { version: "6.0.0beta10", date: "2026-08-25", php: "8.1-8.5", status: "preview" },
];
