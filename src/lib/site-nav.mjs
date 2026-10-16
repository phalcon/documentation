/**
 * The links of the shared nav of the Phalcon sites: the links of phalcon.io,
 * with absolute addresses. The nav (src/components/Header.astro) shows them
 * from 84rem. Below 84rem the drawer of the docs navigation shows them
 * (src/components/SiteLinks.astro): the docs have no burger.
 */

/** @type {{ label: string, href: string }[]} */
export const links = [
  { label: "Download", href: "https://phalcon.io/download" },
  { label: "Docs", href: "https://docs.phalcon.io" },
  { label: "Features", href: "https://phalcon.io/#features" },
];

/** @type {{ label: string, items: { label: string, href: string }[] }[]} */
export const menus = [
  {
    label: "Community",
    items: [
      { label: "Discord", href: "https://phalcon.io/discord" },
      { label: "Discussions (v5)", href: "https://github.com/phalcon/cphalcon/discussions" },
      { label: "Discussions (v6)", href: "https://github.com/phalcon/phalcon/discussions" },
      { label: "Stack Overflow", href: "https://phalcon.io/so" },
      { label: "Blog", href: "https://phalcon.io/blog" },
      { label: "Support", href: "https://phalcon.io/support" },
    ],
  },
  {
    label: "Project",
    items: [
      { label: "Contribute", href: "https://phalcon.io/contribute" },
      { label: "Team", href: "https://phalcon.io/team" },
      { label: "Testimonials", href: "https://phalcon.io/testimonials" },
      { label: "Built with Phalcon", href: "https://phalcon.io/built-with" },
      { label: "Sponsors", href: "https://phalcon.io/sponsors" },
      { label: "Hosting", href: "https://phalcon.io/hosting" },
    ],
  },
];

/** The "Get Phalcon" button. */
export const download = "https://phalcon.io/download";

/** The GitHub link, with the star count of cphalcon. */
export const github = "https://github.com/phalcon/cphalcon";
