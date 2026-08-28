# <img src="assets/images/quill-mark.svg" height="26" alt=""> Quill

- - -

## Overview

[Quill][github] is the Phalcon API documentation generator. It reads Zephir and PHP sources into one typed model and renders that model as Markdown pages for an [mkdocs][mkdocs] site or as a single JSON document.

Phalcon is maintained in two codebases. [cphalcon][cphalcon] is written in Zephir and compiled into an extension; [phalcon][phalcon] is the same framework implemented in PHP. Quill reads both into the same model, which is how the API pages on this site are produced and how the two implementations are checked against each other.

Quill has three parts:

- **Readers** - one per language. `ZephirReader` parses `.zep` files through `phalcon/zephir`; `PhpReader` parses `.php` files through `nikic/php-parser`. A reader knows nothing about output.
- **The model** - an object graph of class definitions with their constants, properties, methods, imports and relations. `ClassDefinition::toArray()` serializes it and carries a `version`.
- **Formatters** - one per output format. `MarkdownFormatter` writes one page per top-level namespace plus an index; `JsonFormatter` writes the model as `model.json`. A formatter knows nothing about the source language.

```
ZephirReader  (phalcon/zephir)   ─┐                      ┌─> MarkdownFormatter (mkdocs pages)
                                  ├>  Model -> toArray() ┤
PhpReader     (nikic/php-parser) ─┘   (object graph)     └─> JsonFormatter     (model document)
```

The announcement is on the [Phalcon blog][blog].

## Requirements

- PHP 8.1 or later.
- `nikic/php-parser` is a dependency of Quill and is installed with it. The PHP reader always works.
- `phalcon/zephir` is required only to read `.zep` sources. Selecting `language: zephir` without it stops with a message that names the missing package.

## Installation

Install Quill as a development dependency:

```bash
composer require --dev phalcon/quill
```

The binary is `vendor/bin/quill`.

## Configuration

Everything project-specific lives in a `quill.php` file at the project root. The file returns an array. Nothing about a particular repository is compiled into Quill.

This is the configuration [cphalcon][cphalcon] uses to document its Zephir sources:

```php
<?php

return [
    'language'   => 'zephir',
    'source'     => 'phalcon',
    'output'     => 'nikos/docs/api',
    'assets'     => 'nikos/docs/assets/css',
    'repository' => 'phalcon/cphalcon',
    'branch'     => '5.0.x',
    'prefix'     => 'phalcon',
    'extension'  => 'zep',
    'namespace'  => 'Phalcon',
];
```

The same file for a PHP project changes the reader, the source tree and the extension. This is the one [phalcon][phalcon] uses:

```php
<?php

return [
    'language'   => 'php',
    'source'     => 'src',
    'output'     => 'nikos/docs/api',
    'assets'     => 'nikos/docs/assets/css',
    'repository' => 'phalcon/phalcon',
    'branch'     => 'v6.0.x',
    'prefix'     => 'src',
    'extension'  => 'php',
    'namespace'  => 'Phalcon',
];
```

| Key          | Required | Description                                                                                                                                        |
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `language`   | Yes      | Selects the reader: `zephir` or `php`                                                                                                              |
| `source`     | Yes      | Directory of the source tree to read                                                                                                               |
| `output`     | Yes      | Directory the documents are written to                                                                                                             |
| `repository` | Yes      | GitHub repository in `owner/name` form                                                                                                             |
| `branch`     | Yes      | Branch the source links point at                                                                                                                   |
| `prefix`     | Yes      | Path of the source tree inside the repository                                                                                                      |
| `extension`  | Yes      | File extension the reader collects                                                                                                                 |
| `namespace`  | Yes      | Root namespace. Headings drop it; page names carry it lowercased, so `Phalcon` gives `phalcon_acl.md`                                              |
| `assets`     | No       | Directory a formatter's static assets are written to. Defaults to `output`                                                                         |
| `templates`  | No       | Directory holding your own templates. Each template is looked up there first and falls back to the shipped one. See [Templates](#templates) below |

`source`, `output`, `assets` and `templates` are resolved relative to `quill.php` unless they start with `/`. Every required key must be a non-empty string; a missing one raises `MissingConfigurationKey` naming the key. A `quill.php` that does not return an array raises `MalformedConfiguration`.

`repository`, `branch` and `prefix` build the "Source on GitHub" link of every class:

```
https://github.com/<repository>/blob/<branch>/<prefix>/<path>
```

Separating `output` from `assets` lets the destination mirror the layout of the site that consumes it. With the values above, `cp -r nikos/docs/* <site>/docs/` lands the pages under `docs/api/` and the stylesheet under `docs/assets/css/`.

## Generating

`vendor/bin/quill generate` reads the configured source tree and writes the documents:

```bash
vendor/bin/quill generate                             # every page, using ./quill.php
vendor/bin/quill generate encryption                  # only pages matching the filter
vendor/bin/quill generate --namespace=Phalcon\Config  # one namespace and everything beneath it
vendor/bin/quill generate --format=json               # one model document instead of pages
vendor/bin/quill generate --config=docs/quill.php     # a configuration file elsewhere
vendor/bin/quill generate --output=build/api          # a different destination for this run
```

| Option               | Description                                                                                                                                                        |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<filter>`           | Positional. Narrows what is written; matched case-insensitively. The Markdown formatter matches it against the page name, the JSON formatter against the class name |
| `--config=<path>`    | Path to the configuration file. Defaults to `./quill.php`                                                                                                          |
| `--output=<dir>`     | Destination override for one run. Assets follow the documents                                                                                                      |
| `--format=<name>`    | `markdown` (default) or `json`                                                                                                                                     |
| `--namespace=<ns>`   | Limits the run to one namespace and everything beneath it, matched exactly. The configured root is implied, so `Config` and `Phalcon\Config` are the same          |
| `--help`, `-h`       | Prints the usage                                                                                                                                                   |

The command prints one `Processing:` line per document and one `Asset:` line per static file, then `Done. Output: <dir>`. It exits with `0` on success. Any error is printed as `quill: <message>` and the exit code is `1`. A `--namespace` that matches nothing is an error, not an empty document.

Two behaviors to be aware of:

- The model is always built from every source file, whatever the filter. Cross-page links stay correct on a narrow run.
- A complete run prunes: a document in the output directory that the run did not produce is deleted, so a namespace that disappears from the source takes its page with it. Pruning is limited to files with the formatter's own extension; anything else in the directory is left alone. A run narrowed by a filter or a namespace is partial by design and never prunes.

### What is written

With `--format=markdown`:

- one page per top-level namespace segment, named `<namespace>_<segment>.md`, for example `phalcon_acl.md`
- an `index.md` page linking to every other page
- `api.css`, the stylesheet the generated markup depends on, written to `assets`

With `--format=json`:

- one `model.json` document holding every definition, private members included

## Templates

The Markdown formatter emits no markup of its own. Every fragment it writes comes from a template file, and the `templates` configuration key points at a directory of your own that is consulted first, template by template. Overriding one template does not require copying the others.

Templates live under a directory named for the format. With `templates` set to `docs/templates`, an override of the method template is `docs/templates/markdown/method.tpl`. This is the shipped `method.tpl`:

````
#### `{{name}}()` { #{{anchor}} }

```php
{{signature}}
```
{{description}}
````

The rules are:

- Placeholders are written `{{name}}` and are substituted in a single pass. A value that contains `{{title}}` is inserted as text, not interpreted.
- A placeholder the template does not use is ignored. A template may take fewer placeholders than it is handed.
- A placeholder the shipped template does not define is an error. `UnknownPlaceholder` names every unknown token at once.
- Loops, ordering and conditionals stay in PHP. A section that renders nothing is handed an empty string.
- One trailing newline is stripped from every template. A fragment that must end with a newline is written with a blank final line.
- A `.tpl` whose name is not in the shipped set, or one placed above the format directory, is ignored. The run prints a warning naming the file and the nearest valid name before any page is written.

| Template              | Renders                                          | Placeholders                                                                                                                        |
|-----------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `index`               | The index page                                   | `lines`                                                                                                                             |
| `index-line`          | One entry on the index page                      | `namespace`, `label`, `page`                                                                                                        |
| `page`                | One page's front matter and notice               | `namespace`, `classes`                                                                                                              |
| `class`               | One class's whole section                        | `title`, `structure`, `badge`, `sourceUrl`, `description`, `tree`, `uses`, `usedBy`, `summary`, `constants`, `properties`, `methods` |
| `class-description`   | The class prose, when there is any               | `description`                                                                                                                       |
| `tree`                | The inheritance block                            | `lines`                                                                                                                             |
| `uses`                | The import list                                  | `entries`                                                                                                                           |
| `used-by`             | The classes that use a trait                     | `entries`                                                                                                                           |
| `summary`             | The method summary section                       | `rows`                                                                                                                              |
| `summary-row`         | One summary row                                  | `anchor`, `visibility`, `returnType`, `signature`, `description`                                                                    |
| `summary-return-type` | The return type chip, when declared              | `type`                                                                                                                              |
| `constants`           | The constants section                            | `rows`                                                                                                                              |
| `constant-row`        | One constant                                     | `type`, `name`, `default`, `description`                                                                                            |
| `properties`          | The properties section                           | `rows`                                                                                                                              |
| `property-row`        | One property                                     | `visibility`, `type`, `name`, `default`, `description`                                                                              |
| `row-description`     | The description cell shared by the row templates | `description`                                                                                                                       |
| `methods`             | The method detail section                        | `groups`                                                                                                                            |
| `method-group`        | One visibility group's header and body           | `label`, `count`, `methods`                                                                                                         |
| `method`              | One method's heading and signature block         | `name`, `anchor`, `signature`, `description`                                                                                        |
| `method-description`  | The method prose, when there is any              | `description`                                                                                                                       |

`api.css` carries selectors only. Colors come from `--api-*` custom properties that the stylesheet reads but does not define, so the palette, including light and dark variants, belongs to the site that renders the pages.

## Formatters

|                 | `markdown`                                | `json`                        |
|-----------------|-------------------------------------------|-------------------------------|
| Output          | One page per namespace, plus an index     | One `model.json`              |
| Assets          | `api.css`                                 | None                          |
| Private members | Filtered out                              | Present, with visibility      |
| Enums           | Rendered as classes                       | `structure.keyword: enum`     |
| Traits          | `Trait` badge, plus a `Used by` list      | `structure.keyword: trait`    |

The model is complete on purpose: anything a reader can observe goes into it, even when a formatter ignores it. Adding a formatter never requires changing a reader. The Markdown formatter is opinionated; the JSON formatter writes the model as it stands.

## Comparing Two Implementations

Because the model has the same shape whichever reader produced it, two model documents can be compared. This is how [cphalcon][cphalcon] and [phalcon][phalcon] are kept aligned. The section is optional; a project that only wants API pages does not need it.

Generate one model document per implementation:

```bash
vendor/bin/quill generate --format=json --config=cphalcon/quill.php --output=build/cphalcon
vendor/bin/quill generate --format=json --config=phalcon/quill.php  --output=build/phalcon
```

Add `--namespace=` to both commands to compare one subsystem at a time, which keeps the report short:

```bash
vendor/bin/quill generate --format=json --namespace=Phalcon\Config --config=cphalcon/quill.php --output=build/cphalcon
vendor/bin/quill generate --format=json --namespace=Phalcon\Config --config=phalcon/quill.php  --output=build/phalcon
```

### parity

`parity` reports the structural differences between two model documents:

```bash
vendor/bin/quill parity build/cphalcon/model.json build/phalcon/model.json
```

The report lists the definition count on each side, the definitions present on one side only and, for the shared ones, which member sections differ and by how many entries. Each list shows at most 25 entries and states how many were held back. The command exits with `0` when the two documents match and `1` when anything differs, so it can gate a build.

`parity` refuses a document whose model `version` it does not recognize and raises `IncompatibleDocument`, rather than reporting moved keys as differences.

### docblocks

`docblocks` takes the same two documents and writes the documentation disagreements to a CSV file:

```bash
vendor/bin/quill docblocks build/cphalcon/model.json build/phalcon/model.json docblocks.csv
```

The file has one row per difference with the columns `fqcn`, `kind`, `member`, one column per side named after the repository (`cphalcon`, `phalcon`) and `winner`. Where one side has no description the `winner` column is pre-filled with the first letter of the side that has one; the remaining rows are a decision for a person to make. Nothing in this command edits source files.

Names in the model are resolved while the source is read. Both languages can name a parent as `\Foo`, as `Foo` behind a `use` statement, or as `Foo` meaning a sibling in the same namespace. The readers resolve all three, so two trees that agree cannot appear to disagree.

## References

- [Quill - GitHub Repository][github]
- [Quill on Packagist][packagist]
- [Introducing Phalcon Quill][blog]
- [mkdocs][mkdocs]
- [Zephir][zephir]

[blog]: https://blog.phalcon.io/post/introducing-phalcon-quill
[cphalcon]: https://github.com/phalcon/cphalcon
[github]: https://github.com/phalcon/quill
[mkdocs]: https://www.mkdocs.org
[packagist]: https://packagist.org/packages/phalcon/quill
[phalcon]: https://github.com/phalcon/phalcon
[zephir]: https://zephir-lang.com
