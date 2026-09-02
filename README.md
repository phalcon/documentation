<p align="center"><a href="https://docs.phalcon.io" target="_blank">
    <img src="https://assets.phalcon.io/phalcon/images/svg/phalcon-logo-transparent-black.svg" height="100" alt="Phalcon"/>
</a></p>

Official [Phalcon][0] documentation website.

## Documentation
* Official documentation is [located here][1]

## How it is built

The site is an [Astro](https://astro.build) project using [nimbus-docs](https://nimbus-docs.com). Every documentation version is a content collection of its own:

| Path | Purpose |
|---|---|
| `src/content/docs-<version>/` | The pages of a version (MDX) |
| `src/sidebar/<version>.mjs` | The navigation of a version |
| `src/redirects/<version>.mjs` | The redirects of a version (old URLs) |
| `src/pages/<version>/` | The routes of a version (generated, do not edit) |
| `src/versions.generated.mjs`, `src/content.config.ts` | Generated registry of the versions (do not edit) |
| `src/lib/site.mjs` | Stable releases, pre-releases, deprecated versions, analytics |
| `src/components/`, `src/components.ts` | Astro components. `components.ts` is the registry that makes one usable in MDX with no import |
| `src/styles/` | The stylesheets. `BaseLayout.astro` imports all of them |
| `src/data/releases.ts` | The release history, shared by the `releases` page of every version |
| `public/assets/images/` | Images, shared by all versions |
| `resources/nimbus/` | Converter from the former MkDocs sources, templates, tests |

All tooling runs in Docker; nothing needs to be installed on the host.

### Local preview

```bash
./serve            # http://localhost:4321 (builds the image and installs on first run)
```

Stop the preview before a build: both use the `.astro/` cache.

### Build, lint, test

```bash
docker run --rm -v "$PWD":/docs phalcon-docs pnpm build        # dist/
docker run --rm -v "$PWD":/docs phalcon-docs pnpm lint:docs    # links and anchors
docker run --rm -v "$PWD":/docs phalcon-docs pnpm test
```

### Start a new version

```bash
scripts/new-version.sh 5.20 5.21
```

Then edit `src/content/docs-5.21/`, and set `STABLE_VERSIONS` (or
`PRERELEASES`) in `src/lib/site.mjs` when the version is published. The
first entry of `STABLE_VERSIONS` is where `/` and `/latest/` lead.

### Publish a release

The `releases` page of every version reads `src/data/releases.ts`, so one
entry serves all of them. Take the date from the changelog, not from the git
tag: some tags are a day away from the release, and some releases have no
tag.

```bash
grep -m1 '5\.21\.0' ../cphalcon/CHANGELOG-5.0.md    # 5.x
grep -m1 'beta 12'  ../phalcon/CHANGELOG.md         # 6.0 previews
```

For a new minor:

1. `scripts/new-version.sh 5.20 5.21`
2. Add the release to the end of `src/data/releases.ts`
3. Move `status: "maintained"` to the release that 5.21 supersedes
4. Put the version first in `STABLE_VERSIONS` in `src/lib/site.mjs`

For a major that leaves pre-release, 6.0 for example:

1. Add `{ version: "6.0", date: "...", php: "..." }` to `src/data/releases.ts`
2. Set `STABLE_VERSIONS` to `["6.0", "5.20"]` and delete `6.0` from `PRERELEASES`

The 6.0 previews then leave the page on their own: a preview is shown only
while its major version has no stable release. Their entries can stay in the
file or go, and the page is the same either way.

### Convert a MkDocs version

Every version is converted; the converter is kept for a version that is still
in MkDocs form. Point it at a checkout of that branch:

```bash
docker build -t phalcon-docs-converter resources/docker/converter
docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py \
    --version 4.2 --source <checkout>/docs --nav <checkout>/mkdocs.yml --skip-locale-redirects
docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py --register
```

`--skip-locale-redirects` drops the redirects of the translations of the old
multilingual site (one per page per language, one file each in the build).

### Deployment

A push to `master` builds the site and publishes `dist/` to the branch named by `DEPLOY_BRANCH` in the workflow (`production`), which Cloudflare Pages serves. The `gh-pages` branch holds the last MkDocs deployment as the rollback: to roll back, point the Cloudflare Pages production branch at `gh-pages`. The workflow also points the `/latest/` redirect rule at the stable version.

## Community
* Follow us on [GitHub][3], [Facebook][4], [Twitter][5] or [Gab.ai][6]
* Get Phalcon support on [Discord][7] and [Official Discussions][8]

## Contributing

This work is an open source, community-driven project. See [CONTRIBUTING.md][9] for details about contributions to this repository.


## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [[Become a sponsor](https://opencollective.com/phalcon#sponsor)]

<a href="https://opencollective.com/phalcon/#contributors">
<img src="https://opencollective.com/phalcon/tiers/sponsors.svg?avatarHeight=48&width=800">
</a>

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/phalcon#backer)]

<a href="https://opencollective.com/phalcon/#contributors">
<img src="https://opencollective.com/phalcon/tiers/backers.svg?avatarHeight=48&width=800&height=200">
</a>


## License

This work licensed under the New BSD License. See the [LICENSE][10] file for more information.

[0]: https://phalcon.io
[1]: https://docs.phalcon.io
[3]: https://github.com/phalcon/cphalcon
[4]: https://phalcon.io/fb
[5]: https://phalcon.io/t
[6]: https://phalcon.io/gab
[7]: https://phalcon.io/discord
[8]: https://phalcon.io/discussions
[9]: https://github.com/phalcon/cphalcon/blob/master/CONTRIBUTING.md
[10]: https://github.com/phalcon/cphalcon/blob/master/LICENSE.txt
