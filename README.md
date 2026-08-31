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
| `src/lib/site.mjs` | Stable releases, pre-releases, analytics |
| `public/assets/images/` | Images, shared by all versions |
| `resources/nimbus/` | Converter from the former MkDocs sources, templates, tests |
| `resources/legacy/` | MkDocs sources of 3.4, 4.1 and 4.2, not converted yet |

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

### Convert a MkDocs version (legacy)

```bash
docker build -t phalcon-docs-converter resources/docker/converter
docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py \
    --version 4.2 --source resources/legacy/4.2/docs --nav resources/legacy/4.2/mkdocs.yml
docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py --register
```

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
