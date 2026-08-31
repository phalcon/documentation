# The Phalcon documentation site

Astro + [nimbus-docs](https://nimbus-docs.com). The `nimbus-docs` package supplies the content
schemas, the sidebar/TOC/breadcrumb helpers, the MDX→markdown route, the build hooks and the
`nimbus-docs` CLI. Everything in `src/` belongs to this repository.

This site replaces a MkDocs site. Two properties of that site are kept and must stay kept:

- **URLs.** Every page lives at `/<version>/<slug>/`, as before.
- **Heading anchors.** `src/lib/mkdocs-heading-ids.mjs` gives each heading the id that
  Python-Markdown gave it. Change the text of a heading and its anchor changes with it, which
  breaks every link that points to it.

`README.md` is the description for people. This file is the description for agents.

## No tooling on the host

Every command runs in the `phalcon-docs` image (node 22, pnpm 10, `WORKDIR /docs`). Build it with
`docker build -t phalcon-docs resources/docker` if it does not exist.

```bash
./serve                                                        # dev server, http://localhost:4321
docker run --rm -v "$PWD":/docs phalcon-docs pnpm build         # dist/, about four minutes
docker run --rm -v "$PWD":/docs phalcon-docs pnpm lint:docs     # frontmatter + internal links
docker run --rm -v "$PWD":/docs phalcon-docs pnpm test          # unit tests of src/lib and scripts
docker run --rm -v "$PWD":/docs phalcon-docs pnpm typecheck     # astro check
docker run --rm -v "$PWD":/docs phalcon-docs pnpm exec nimbus-docs check   # build-free preflight
docker run --rm -v "$PWD":/docs phalcon-docs-converter -m unittest resources/nimbus/test_convert.py
```

Stop `./serve` before a build: both use the `.astro/` cache. After renaming or deleting content
files, remove the stale content-layer cache first: `rm -rf .astro node_modules/.astro`.

## One collection per version

There is no shared content. Each documentation version is a content collection of its own, and a
correction applies only to the version whose file you edit. The primary `docs` collection stays
empty (one `draft: true` placeholder) so that no page lives at an unversioned URL.

```
src/
├── components.ts               # MDX globals registry — a component used in .mdx must be listed here
├── components/                 # AgentDirective, Header, Render + ui/<slug>/ (registry components)
├── content/
│   ├── docs/index.mdx          # placeholder only — the primary collection is empty on purpose
│   ├── docs-<version>/*.mdx    # the pages of a version (6.0, 5.20 … 5.11, 5.9 … 5.4; no 5.10)
│   └── partials/*.mdx          # referenced with <Render file="..." />
├── content.config.ts           # GENERATED — registers docs-<version> collections
├── versions.generated.mjs      # GENERATED — the sidebar/redirect registry
├── sidebar/<version>.mjs       # GENERATED from that version's mkdocs.yml nav
├── redirects/<version>.mjs     # GENERATED from that version's redirect stubs and redirect_maps
├── pages/
│   ├── <version>/[...slug].astro       # GENERATED route of a version
│   ├── <version>/[...slug]/index.md.ts # GENERATED markdown twin, /<version>/<slug>/index.md
│   ├── [...slug].astro, [...slug]/     # the empty primary collection
│   ├── [section]/llms.txt.ts           # per-version agent index, /<version>/llms.txt
│   ├── llms.txt.ts, llms-full.txt.ts, robots.txt.ts, og.png.ts, og/, 404.astro
├── layouts/                    # BaseLayout (head, fan art, AgentDirective), DocsLayout
├── lib/
│   ├── site.mjs                # STABLE_VERSIONS, PRERELEASES, versionBanner, versionTag, analytics
│   ├── mkdocs-heading-ids.mjs  # the MkDocs heading ids
│   ├── version-sidebar.mjs     # the rail of one version
│   └── cn.ts                   # Tailwind className merger
├── styles/                     # globals.css, prose.css, api.css (port of the MkDocs API styles)
└── fanart.html                 # <head> comment, refreshed by the deploy workflow

public/assets/images/           # images, shared by all versions, referenced as /assets/images/...
resources/nimbus/               # convert.py, its tests, templates, per-version overrides, parity.sh
resources/legacy/{3.4,4.1,4.2}/ # MkDocs sources not converted yet
scripts/                        # new-version.sh, update-nfr.mjs
patches/                        # nimbus patch that allows the dot in `docs-5.20`
```

**Do not edit a generated file.** `src/content.config.ts`, `src/versions.generated.mjs`,
`src/sidebar/*`, `src/redirects/*` and `src/pages/<version>/*` are written by
`resources/nimbus/convert.py`; the route files come from `resources/nimbus/templates/*.tpl`. Change
the template or the converter, then run `convert.py --register` again:

```bash
docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py --register
```

## Writing docs

Frontmatter validates against `docsSchema` from `nimbus-docs/schemas`. Only `title` is required.

```mdx
---
title: My page
description: One-line summary.
---

Content. The H1 of the page comes from `title` — do not repeat it in the body.

## Section heading
```

Rules:

- **A component in `.mdx` must be PascalCase and listed in `src/components.ts`.** Registered
  today: `Aside`, `Card`, `CardGrid`, `PackageManagers`, `Render`, `Step`, `Steps`, `TabItem`,
  `Tabs`. `nimbus-docs check` reports an unresolved component with a "did you mean" hint.
- **`:::note` / `:::tip` / `:::caution` / `:::danger` admonitions work in `.mdx` only.** nimbus
  does not rewrite them in `.md`.
- **Escape a bare `<`.** In MDX, `<` before an uppercase letter or a word that is not an HTML tag
  starts a component: write `&lt;`.
- **Partials go through `<Render file="<slug>" />`** and live in `src/content/partials/`. Never
  import an `.mdx` file directly.
- **Icons come from nimbus**: `<Icon name="ph:<glyph>" class="w-4 h-4" />`, imported from
  `@cloudflare/nimbus-docs/components/Icon.astro`. The set is Phosphor (`@iconify-json/ph`);
  glyphs: [phosphoricons.com](https://phosphoricons.com). `astro-icon` is not installed here.
- **Link inside the same version.** `/5.20/di/` from a 5.20 page. A link to another version is
  almost always a mistake; the linter suggests them, so read its suggestions before you apply one.
- **Keep `<AgentDirective />` in `BaseLayout.astro`.** It points agents at the markdown twin and
  at `/llms.txt`.

## Doing things

| Goal | Action |
|---|---|
| Correct a page | Edit `src/content/docs-<version>/<slug>.mdx`. Repeat per version — nothing is shared. |
| Add a page | Create `src/content/docs-<version>/<slug>.mdx` **and** add it to `src/sidebar/<version>.mjs`. A page that no sidebar lists is built but never linked. |
| Add an image | Put it in `public/assets/images/content/` and reference `/assets/images/content/<file>`. |
| Add a partial | Create `src/content/partials/<slug>.mdx`, use `<Render file="<slug>" />`. |
| Cut a new version | `scripts/new-version.sh 5.20 5.21`, then set `STABLE_VERSIONS` or `PRERELEASES` in `src/lib/site.mjs` when it is published. |
| Publish a version | `STABLE_VERSIONS[0]` in `src/lib/site.mjs` is where `/` and `/latest/` lead and carries the "latest" tag. Stable versions show no banner; every other version gets the caution banner from `versionBanner()`. |
| Refresh the NFR page | `docker run --rm -v "$PWD":/docs phalcon-docs pnpm run update-nfr` (writes it in every version). |
| Convert a legacy version | `convert.py --version 4.2 --source resources/legacy/4.2/docs --nav resources/legacy/4.2/mkdocs.yml`, then `convert.py --register`. Replace a converted page by hand from `resources/nimbus/overrides/` (see its README). |
| Compare with the old site | `resources/nimbus/parity.sh <version>` — URLs and heading ids of `dist/<version>` against `gh-pages/<version>`. |
| Install a registry component | `pnpm exec nimbus-docs add <slug>`, then register it in `src/components.ts` if `.mdx` uses it. |
| Upgrade nimbus | Re-check `patches/@cloudflare__nimbus-docs@<version>.patch` (it allows the dot in a collection key). `pnpm exec nimbus-docs outdated`, `diff <file>`, `add <slug> --overwrite`. |

## Verify before you claim

`lint:docs` and `test` are cheap and catch most of it; `pnpm build` is the real check and takes
about four minutes. A change to content needs at least:

```bash
docker run --rm -v "$PWD":/docs phalcon-docs pnpm lint:docs
```

To compile-check MDX without a full build, run `@mdx-js/mdx`'s `compile()` over the files you
touched (strip the frontmatter first) — it reports every error at once in seconds. `@mdx-js/mdx`
is a transitive dependency, so import it from `node_modules/.pnpm/@mdx-js+mdx@<version>/...`.

`pnpm exec nimbus-docs check --json` runs the environment, structural, authoring and type checks
build-free and returns findings with fixes. Its notes about `head`, `versions` and `sidebar` are
expected here: those config fields are computed, so only a build validates them.

## Deployment

A push to `master` runs `.github/workflows/deploy-documents.yml`: install (which applies the
patch) → `update-nfr` → `test` → refresh `src/fanart.html` from `phalcon/assets` → `build` →
publish `dist/` to the branch named by `DEPLOY_BRANCH` (`production`), which Cloudflare Pages
serves → point the `/latest/` redirect rule at `STABLE_VERSION`. The `gh-pages` branch holds the
last MkDocs deployment as the rollback: point the Pages production branch back at it.

## Don't

- Edit a generated file — change the converter or the template and re-register.
- Move a page or reword a heading without a reason: both break links that already exist.
- Add a component under `src/components/ui/` by hand when the nimbus registry has it — use
  `nimbus-docs add` so its dependencies resolve.
- Import an `.mdx` file directly — use `<Render file="..." />`.
- Attach remark/rehype plugins through `mdx({ remarkPlugins })`: Sätteri drops them silently.
  Heading and table transforms go in `markdown.hastPlugins` in `astro.config.ts`.
- Remove `<AgentDirective />` unless asked.
- Use a component in `.mdx` without adding it to `src/components.ts`.
- Run a build while `./serve` is running.
