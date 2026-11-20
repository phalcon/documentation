---
title: "Crest"
version: "5.24"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Crest

## Overview

Crest is a command line application for Phalcon. It generates code, shows information
about a project, and creates and runs projects.

Crest works with two flavors of project, `mvc` and `adr`:

- **MVC** (Model-View-Controller): models, views and controllers, in the layout of [vokuro][vokuro]
  and [invo][invo], the Phalcon sample applications.
- **ADR** (Action-Domain-Responder): an action for each route, and a responder that the
  action calls. A route is an HTTP method and a path that the application answers, for
  example `GET /`. The action answers the route, and the responder makes the response. An
  ADR project can also have middleware: classes that a request goes through before it
  gets to the action.

The table shows the flavors that each command works in. A command for one flavor only
stops with an error in a project of the other flavor:

| Command | ADR | MVC |
|---|---|---|
| `about` | ✓ | ✓ |
| `config:show` | ✓ | ✓ |
| `container:list` | ✓ | — |
| `down` | ✓ | ✓ |
| `event:list` | ✓ | — |
| `init` | ✓ | ✓ |
| `install` | ✓ | ✓ |
| `list` | ✓ | ✓ |
| `make:action` | ✓ | — |
| `make:command` | ✓ | ✓ |
| `make:controller` | — | ✓ |
| `make:middleware` | ✓ | — |
| `make:model` | — | ✓ |
| `make:module` | — | ✓ |
| `make:provider` | ✓ | ✓ |
| `make:responder` | ✓ | — |
| `make:scaffold` | — | ✓ |
| `new` | ✓ | ✓ |
| `route:list` | ✓ | — |
| `serve` | ✓ | ✓ |
| `stub:publish` | ✓ | ✓ |
| `up` | ✓ | ✓ |

The error names the flavor of the project and the flavors that the command supports:

```text
crest: make:responder does not support the 'mvc' flavor of this project; it supports: adr
```

To start, see [Installation](#installation) and [Quick Start](#quick-start).

## Requirements

- PHP `^8.1`, with the `tokenizer` extension (`ext-tokenizer`; PHP turns it on by default)
- Phalcon v5, the `ext-phalcon` C extension (`^5.18`), or Phalcon v6, the
  `phalcon/phalcon` PHP implementation (`^6`). Crest itself needs neither of them to run

## Installation

Crest has no tagged release yet. Packagist has only the version `dev-master`, and the
default `minimum-stability` of composer is `stable`. Thus give the version in the
`composer require` command.

In a project, install Crest as a dev dependency:

```bash
composer require --dev phalcon/crest:dev-master
```

This copy is the project Crest, in `vendor/bin/crest`. It runs the commands that work on
the project, for example the generators (the `make:*` commands). See
[The Global Crest and the Project Crest](#the-global-crest-and-the-project-crest).

To create projects, also install Crest globally. This copy is the global Crest. The global
composer `vendor/bin` folder must be in your `PATH`:

```bash
composer global require phalcon/crest:dev-master
```

## Quick Start

`crest new` creates a project (see [Creating a Project](#creating-a-project)). Run it with
the global Crest of [Installation](#installation). On a host with docker and no PHP, use
[With Docker Only](#with-docker-only) instead.

```bash
crest new my-app                      # create an MVC project
crest new my-app --flavor=adr         # create an ADR project
```

In a terminal, `new` asks for each value that no option gives. An empty answer takes the
default (see [Creating a Project](#creating-a-project)).

For an MVC project with no database, the output of `new` gives two ways to run the
project. With docker, you use `./crest`, a script that `crest new` writes into the project
(see [The Launcher](#the-launcher)). With PHP on the host, you use `crest serve`. The next
two sections explain each way. The output is:

```text
Created my-app/

Nothing runs it yet. With docker:

    cd my-app
    ./crest up
    ./crest install

Or with PHP and composer on the host:

    cd my-app
    composer install
    crest serve

Then GET / answers from src/Controllers/IndexController.php
```

### With Docker

With docker on the host, run:

```bash
cd my-app
./crest up
./crest install
```

`./crest up` starts the containers. `./crest install` installs the composer dependencies
(see [The Launcher](#the-launcher)). A v5 project compiles the Phalcon extension in
`./crest up`. This takes some minutes. Then `GET /` answers on http://localhost:8080/.

### With PHP on the Host

Without docker, create the project with `crest new my-app --runtime=host`: the project
Crest then runs with the PHP of the host (see [The Runtime](#the-runtime)). With PHP and
composer on the host, run:

```bash
cd my-app
composer install
crest serve
```

`crest serve` starts PHP's built-in web server for the project (see
[Running a Project](#running-a-project)). By default, `crest serve` listens on
`127.0.0.1:8080`.

### With Docker Only

On a host with docker and no PHP, one command creates a project, starts it and installs
it, as in [With Docker](#with-docker). The command downloads the
[`crest-setup` script](#the-setup-script) and runs it. `my-app` is the name of the
project:

```bash
curl -fsSL https://phalcon.io/crest-setup | sh -s -- my-app
```

Then `GET /` answers on http://localhost:8080/. On Windows, run the command in the
Windows Subsystem for Linux (WSL2).

For another port, set `APP_PORT`. The script writes it into the project `.env`, the file
of settings that docker compose reads (see [The Launcher](#the-launcher)):

```bash
curl -fsSL https://phalcon.io/crest-setup | APP_PORT=9000 sh -s -- my-app
```

[The Setup Script](#the-setup-script) gives the details: the options, the errors, and how
to read the script before it runs.

## How Crest Works

This section explains the parts of Crest that the rest of this page uses:
[The Project File](#the-project-file),
[The Global Crest and the Project Crest](#the-global-crest-and-the-project-crest),
[The Runtime](#the-runtime), [The Launcher](#the-launcher) and [Stubs](#stubs).

### The Project File

Each project has a `crest.php` at its root. This is the project file. `crest new` writes
it. For an existing project, `crest init` writes it (see
[Adding Crest to an Existing Project](#adding-crest-to-an-existing-project)). The file
holds the settings of the project, for example:

- the flavor
- the root namespace
- the front controller (the class that starts the application)
- the folders that Crest writes into
- the runtime (see [The Runtime](#the-runtime))

The `bootstrap` key names the front controller (see
[Commands That Boot the Project](#commands-that-boot-the-project)).
[Configuration](#configuration) shows each key.

Crest finds the project by its `crest.php`: the file that `--config` names, or the nearest
`crest.php` in or above the working directory or `--directory` (see
[Global Options](#global-options)). Without `crest.php`, Crest stops. This error is the
same in both flavors:

```text
crest: no crest.php found; run 'crest init'
```

### The Global Crest and the Project Crest

The commands that work on the project, for example `make:controller`, `make:action` and
`route:list`, need the autoloader and the Phalcon of the project. A project from
`crest new` requires `phalcon/crest` as a dev dependency. Thus after `crest install` (see
[The Launcher](#the-launcher)) or `composer install`, it has its own Crest in
`vendor/bin/crest`. A global Crest passes the project commands to this Crest, with the
same arguments, and returns its exit status. This is the hand-off.

`make:controller` creates an MVC controller (see
[Generating Controllers](#generating-controllers)). `make:action` creates an ADR action
for a route (see [Generating Actions](#generating-actions)). `route:list` shows each route
that the application answers (see [Command Reference](#command-reference)). For example,
a global Crest passes this command to `vendor/bin/crest`:

### MVC

```bash
crest make:controller Hello
```

### ADR

```bash
crest make:action GET /hello
```

The `about` command shows the environment and version report (see
[Command Reference](#command-reference)). In a project, run `crest` with the global Crest:

### MVC

```bash
crest                                 # list the available commands
crest about                           # show the environment and version report
crest make:controller Company
```

### ADR

```bash
crest                                 # list the available commands
crest about                           # show the environment and version report
crest make:action GET /company/all
```

Without a global Crest, run the Crest of the project: `vendor/bin/crest` in the project,
or `./crest` on a host with docker and no PHP (see [The Launcher](#the-launcher)). In this
text, the container is the docker compose service `app`, a container that docker compose
runs (see [The Runtime](#the-runtime)). In the container, there is no global Crest, so run
`vendor/bin/crest` there:

### MVC

```bash
docker compose exec app vendor/bin/crest make:controller Hello
```

### ADR

```bash
docker compose exec app vendor/bin/crest make:action GET /hello
```

`new`, `init`, `up`, `down`, `install` and `--version` (see
[Global Options](#global-options)) always run in the `crest` that you type, with no
hand-off. `down` stops the containers (see [The Launcher](#the-launcher)). `new`, `up`,
`down` and `install` run before the project has a `vendor/`. Thus run them with a Crest
outside the `vendor/` of the project, for example the global Crest (see
[Installation](#installation)) or the launcher `./crest` (see
[The Launcher](#the-launcher)).

`bin-dir` is a setting of composer (see [Configuration](#configuration)). If the project
has no `<bin-dir>/crest` (by default `vendor/bin/crest`), Crest stops, as it does without
`crest.php`. The messages are the same in both flavors:

```text
crest: /path/to/my-app has no vendor/bin/crest; run 'crest install' or 'composer install' first
crest: /path/to/my-app does not require phalcon/crest; run 'composer require --dev phalcon/crest'
```

The second message is for a project that does not require Crest. Add `:dev-master` to the
`composer require` command of this message (see [Installation](#installation)).

### The Runtime

The `runtime` key of `crest.php` says where the project commands run:

- With `['type' => 'host']`, a global Crest runs the project's `vendor/bin/crest` with the
  PHP of the host.
- With `['type' => 'docker', 'service' => 'app']` (what `crest new` writes), a global
  Crest runs `docker compose exec app vendor/bin/crest ...` in the project root. `app` is
  the service: a container that the compose file of the project names.

Use docker when Phalcon is only in the container. For example, a v5 project then works on
a host without `ext-phalcon`. The containers must be up (`crest up`).

The docker runtime has two conditions. The compose file that `crest new` writes,
`docker-compose.yml`, meets both:

- The service must mount the project folder (share it with the container), with
  `vendor/` in it: Crest looks for `vendor/bin/crest` on the host first.
- The `working_dir` of the service, the folder where its commands start, must be the
  project root: `vendor/bin/crest` runs there.

`crest install` runs composer in a docker compose service, with each runtime. With the
docker runtime, composer runs in the service of the runtime. With the host runtime,
composer runs in the `service` of the `runtime` key, else in `app`.

`crest serve` is the exception: it always runs on the host, because PHP's built-in server
must listen there. With docker, `crest up` serves the project.

### The Launcher

`./crest` is a launcher script that `crest new` writes into the project. It needs docker
only: PHP on the host is not necessary.

`./crest up`, `./crest down` and `./crest install` run docker compose on the host: they
start the containers, stop them, and install the dependencies. With a global Crest,
`crest up` and `crest install` do the same. Crest runs `up`, `down` and `install` with
docker compose in the folder of the `crest.php` that it finds (see
[The Project File](#the-project-file)).

All other commands of `./crest` run `vendor/bin/crest` in the service of the project
(`app`, or the `--service` of `new`; see [Creating a Project](#creating-a-project)):

### MVC

```bash
./crest make:controller Hello
```

### ADR

```bash
./crest make:action GET /hello
```

Before `./crest install`, they stop with `crest: run './crest install' first`. Without a
terminal (CI, a pipe), the launcher adds `-T`, which tells `docker compose exec` not to
ask for a terminal. On Windows, run `./crest` in WSL2.

The `.env` file of the project holds settings that docker compose reads, for example
`APP_PORT` and the user and group IDs (`UID` and `GID`). The files that the container
writes belong to the user of these IDs. With rootless docker (docker that runs without
root), set `UID=0` and `GID=0` in `.env`: rootless docker maps root in the container to
your user.

The Crest commands of the launcher get `CREST_HOST_ROOT`, the host folder of the project.
Thus Crest shows host paths, not the paths in the container. The hand-off of a global
Crest does the same.

The launcher runs `vendor/bin/crest`. If you change `vendor-dir` or `bin-dir` in
`composer.json` (see [Configuration](#configuration)), change the `crest=` line at the top
of `./crest`.

### Stubs

Crest generates files from stubs. A stub is a template in the Crest package, with
placeholders such as `{{ flavor }}`: Crest fills in each placeholder with a value of the
project. To change a stub, publish a copy with `crest stub:publish`, and edit the copy.
Crest then uses your copy. `crest new` writes a project from the `project-*` stubs, for
example the `project-config` stub for `crest.php`. [Custom Stubs](#custom-stubs) and
[Project Stubs](#project-stubs) tell where each copy goes. For the `project-config` stub,
see also [Commands after `new`](#commands-after-new).

Some generators also write a base: a class that Crest owns and writes again, for example
`CrestControllerBase`, which your controllers extend.
[Generated Bases](#generated-bases) tells when Crest writes a base again.

## Creating a Project

`crest new` creates a project. It writes an MVC or an ADR project that runs:

```bash
crest new my-app
crest new my-app --flavor=adr
```

An MVC project has `public/index.php` (the web entry point) and the front controller
`src/AppFront.php`. It also has `crest.php`, `composer.json`, the docker files, and
`src/Controllers/IndexController.php`, which answers `GET /`. For more, see
[The MVC Project](#the-mvc-project). An ADR project has the same entry point, front
controller and files, and `src/Action/Get.php`, which answers `GET /`.

`new` takes the options in the table below. The view engine (the `--template-engine` row)
renders the views of an MVC project: with `phtml`, the views are PHP templates in `.phtml`
files. `--camel-case` and `--get-set` change the models that `make:model` writes from the
database tables (see [Generating Models](#generating-models)). They set the `models` key
of `crest.php` (see [Configuration](#configuration)).

| Option | Purpose |
|---|---|
| `--flavor=mvc\|adr` | the flavor of the project; defaults to `mvc` |
| `--template-engine=<engine>` | the view engine of an MVC project: `phtml`, the default and the only engine for now. An ADR project has no views, so `new` stops when you give it |
| `--namespace=<name>` | root namespace for the generated code; defaults to `App` |
| `--php=<major.minor>` | PHP version for `composer.json` and the Dockerfile; defaults to `8.4`, and must be 8.1 or later |
| `--phalcon=v5\|v6` | `v5` requires the C extension, 5.18 or later; `v6` the `phalcon/phalcon` package; defaults to `v5` |
| `--runtime=host\|docker` | where the project commands run (the `runtime` key of `crest.php`); defaults to `docker` |
| `--service=<name>` | the docker compose service, for `docker`; defaults to `app` |
| `--database=none\|mariadb\|mysql\|pgsql\|sqlite` | the database of the project; defaults to `none`. See [The Database](#the-database) |
| `--camel-case` | for MVC: property names in camelCase (`models.camelCase` of `crest.php`). See [Names](#names) |
| `--get-set` | for MVC: protected properties with a getter and a setter (`models.getSet` of `crest.php`). See [Getters and Setters](#getters-and-setters) |
| `--force` | write into a directory that is not empty, and overwrite files with the same names |

In a terminal, `new` asks for each value that no option gives:

- the flavor
- the namespace
- the PHP version
- the Phalcon version
- the runtime (`host` or `docker`)
- the service, for `docker`
- the database

For an MVC project with a database, `new` asks two more questions. First, it asks if the
property names of the models are in camelCase. Then it asks if the properties are
protected, with a getter and a setter.

There is no question for the view engine while there is only one. An empty answer takes
the default. `--no-interaction` (see [Global Options](#global-options)), or a run without
a terminal (CI, a pipe), asks nothing and takes the defaults. The options still give
their values, for example in CI.

The project goes into the folder `<name>` in the working directory, or in `--directory`
if you give one (see [Global Options](#global-options)). By default, `new` runs nothing:
no composer, no docker, no network. It writes the files and prints the next steps. For an
MVC project with no database, [Quick Start](#quick-start) shows the output.

To make `new` run commands, see [Commands after `new`](#commands-after-new). To change
the files that `new` writes, see [Project Stubs](#project-stubs).

### The MVC Project

`crest new my-app --flavor=mvc` writes the layout of the Phalcon sample applications
([vokuro][vokuro], [invo][invo]). The table below uses these Phalcon terms:

- The DI (dependency injection) container of the application holds its services: the
  objects that the application uses. These are not the docker container and the docker
  compose service of [The Runtime](#the-runtime).
- `FactoryDefault` is the Phalcon DI container with the default services.
- A provider is a class that registers services in the DI container.
- `Phalcon\Mvc\Application` handles each request.
- The dispatcher loads the controller of a URL and calls it.

| Path | Contents |
|---|---|
| `public/index.php` | the web entry point, as in an ADR project |
| `src/AppFront.php` | the front controller: `FactoryDefault`, the providers and `Phalcon\Mvc\Application` |
| `src/Providers/` | `DispatcherProvider` (the default namespace of the controllers), `UrlProvider` (the base URI of the links and the redirects) and `ViewProvider` (the views folder and the phtml engine) |
| `src/Controllers/` | `IndexController`, which answers `GET /` |
| `src/Controllers/Base/` | `CrestControllerBase`, the base that Crest owns (see [Generated Bases](#generated-bases)) |
| `themes/default/` | the layout `index.phtml` and the view `index/index.phtml` |

`crest.php` has `'flavor' => 'mvc'` and the paths (the folders that Crest writes into)
`command`, `controller`, [`form`](#the-form), `model`, [`module`](#generating-modules),
`provider` and `views` (see [Configuration](#configuration)). To add a service, run
`crest make:provider Mailer`. It writes `src/Providers/MailerProvider.php`, a provider
that implements `Phalcon\Di\ServiceProviderInterface`. It also prints the line to add to
`AppFront::providers()`, the list of the providers of the front controller.

A URL with no controller stops in the dispatcher ("handler class cannot be loaded").
With `display_errors` off, PHP answers 500. With `display_errors` on, PHP shows the error
in the page, with status 200. Add a not-found page if your project needs one. For
example, use a dispatcher listener (a class that gets the events of the dispatcher), such
as the `NotFoundPlugin` of [invo][invo].

### The Database

`--database` gives the project a database, in each flavor:

```bash
crest new my-app --flavor=mvc --database=mysql
```

| Choice | The service in `docker-compose.yml` | The PHP extension |
|---|---|---|
| `none` | none; the default | none |
| `mariadb` | `database`, with the image `mariadb:11.4` | `pdo_mysql` |
| `mysql` | `database`, with the image `mysql:8.4` | `pdo_mysql` |
| `pgsql` | `database`, with the image `postgres:18` | `pdo_pgsql` |
| `sqlite` | none: the database is the file `storage/database.sqlite` | `pdo_sqlite`, which the `php` image has |

With a database, `new` also writes:

- `DbProvider.php` in the provider folder (`src/Providers` for MVC, `src/Provider` for
  ADR). `DbProvider` registers the `db` service: the connection to the database (see
  [The MVC Project](#the-mvc-project) for services). The MVC front controller adds
  `DbProvider` in `providers()`. The ADR front controller gets an override of
  `registerProviders()`, the method that registers the services. The override calls
  `DbProvider`.
- The connection values at the end of `.env`:

  ```text
  DB_HOST=database
  DB_PORT=3306
  DB_NAME=my_app
  DB_USERNAME=my_app
  DB_PASSWORD=secret
  DB_PUBLISHED_PORT=3306
  ```

  `DB_NAME` is the project name, with `_` in place of `-`, cut to 64 characters.
  `DB_USERNAME` is the same name, cut to 32 characters. For `sqlite`, `.env` has only
  `DB_NAME=storage/database.sqlite`, relative to the project root.
- For `mariadb`, `mysql` and `pgsql`: the service `database` in `docker-compose.yml`,
  with a named volume for its data and a health check. The app service starts when the
  database accepts connections. Thus `crest make:model` works right after `crest up` and
  `crest install`. The database listens on the host only at `127.0.0.1`, on the port
  `DB_PUBLISHED_PORT`: other computers cannot connect to it.
- For `mariadb`, `mysql` and `pgsql`: the PDO extension in `resources/docker/Dockerfile`.
- `phalcon/phql` in `composer.json`, for an MVC project with Phalcon v6. PHQL is the query
  language that a model uses to find rows (see [Generating Models](#generating-models)).
- For `sqlite`: the empty file `storage/database.sqlite` (an empty file is a valid SQLite
  database), `storage/.gitkeep`, and `/storage/database.sqlite` in `.gitignore`.
  `--force` does not replace a database file that exists: git ignores the file, so
  nothing can restore its data.

docker compose gives the values of `.env` to the app container. PHP on the host does not
read `.env`. There, `DbProvider` uses its defaults: `127.0.0.1` and the published port.
`DbProvider` reads each value from `getenv()`, then from `$_ENV`, then takes the default.

A loader such as phpdotenv (a PHP library that loads `.env`) also reads `.env` on the
host. There, `DB_HOST=database` is not a known host. Then give PHP on the host
`DB_HOST=127.0.0.1` and `DB_PORT` (the published port) in its environment: `getenv()`
wins over `$_ENV`.

To run the project with PHP on the host, start only the database, and install the PDO
extension on the host:

```bash
docker compose up -d database
```

If the port is in use on the host, change `DB_PUBLISHED_PORT` in `.env`. Then PHP on the
host needs `DB_PORT` with the same value in its environment. The MySQL and MariaDB images
do not accept the user `root`. Thus a project with the name `root` needs another
`DB_USERNAME`.

The `db` service is shared. It connects when the project uses it for the first time, for
example at the first query of a model. Thus the project answers `GET /` when the database
does not run. A wrong value gives the connection error at the first use of `db`.

With `mysql`, `mariadb` or `pgsql`, the app service cannot have the name `database`:

```text
crest: the service 'database' is the name of the database service; choose another service name
```

In an ADR project with a database, the front controller already has
`registerProviders()`. For a new provider, add only the `provide()` line that
`crest make:provider` prints. `provide()` is the method of a provider that registers its
services.

To change the service or the `.env` lines of the database, for example the image, see
[Project Stubs](#project-stubs).

### Commands after `new`

`new` can run commands after it writes the files, for example `crest up` and
`crest install`. The `new` key of `crest.php` lists these commands. The key and the
examples in this section are the same in both flavors. `new` writes
`crest.php` from the `project-config` stub (see [Stubs](#stubs)). Thus publish the
`project-config` stub in the folder that the projects go into (see
[Project Stubs](#project-stubs)):

```bash
crest stub:publish project-config
```

Then add the key `new` to the copy. Each entry of the key is one command, as a list of
words:

```php
'new' => [
    ['crest', 'up'],
    ['crest', 'install'],
],
```

With the host runtime, use `['composer', 'install']` instead. With the docker runtime,
composer runs in the container. This is because the host often has no Phalcon, or an
older PHP, and then `composer install` on the host stops.

There is no shell: pipes, `&&` and variables do not work. When the first word is
`crest`, the Crest that runs `new` also runs the command. Use `crest`, not `./crest`.
This is because Crest looks for a relative path from the folder where you type the
command, not from the project.

`new` runs the commands in order, in the project folder. It prints `Running: <command>`
before each one. At the end, it prints `Ran 2 commands from the 'new' key of crest.php`.

The first command that fails stops the list, and `new` returns its exit status:

```text
crest: 'composer install' failed with exit status 2; the files in my-app/ stay
```

A program that is not in the `PATH` also stops the list, with exit status 1:

```text
crest: 'composer' was not found; install it or add it to the PATH
```

`new` reads the key from the `crest.php` that it writes. Thus it checks the key after it
writes the files. If the key is not a list of commands, or if PHP cannot parse the file,
`new` stops before the first command. The files stay. The error names the published stub
that `new` used. Change the stub, not the `crest.php` of the project. Then run `new` again
with `--force`:

```text
crest: my-app/crest.php: 'new' entry 2 in crest.php must be a list of strings, e.g. ['crest', 'up']; the files in my-app/ stay; fix /path/to/resources/stubs/shared/project-config.stub and run new again with --force
```

`new` also checks that the written `crest.php` has the flavor of the project. Keep
`'flavor' => '{{ flavor }}'` in a published `project-config`. A copy with a fixed flavor
stops `new` in the same way, before the first command.

The key stays in the `crest.php` of the project. No other command reads it.
`config:show` shows the configuration of the project, but not this key (see
[Command Reference](#command-reference)). `init` uses the same stub: it writes the key,
but runs nothing (see
[Adding Crest to an Existing Project](#adding-crest-to-an-existing-project)).

### The Setup Script

The `crest-setup` script of [With Docker Only](#with-docker-only) runs `crest new <name>`
in a one-off `composer:2` container. Each option after the name goes to `new` (see the
options in [Creating a Project](#creating-a-project)). The script and its examples are the
same in both flavors, except the `Next:` hint at the end: it names a command for the
flavor of the new project. `--flavor` goes to `new` as each other option. For example, for a
project with Phalcon v6:

```bash
curl -fsSL https://phalcon.io/crest-setup | sh -s -- my-app --phalcon v6
```

In the script, `new` asks no questions: the options give the values, else the defaults
apply. The project goes into the folder `<name>` in the working directory. The script
stops with an error when you give `--directory`, and when the working directory is a
system folder such as `/usr`. The `--help` option of the script shows the options of
`new`.

The working directory has the same path in the container. Thus the errors of `new` show
host paths (see [The Launcher](#the-launcher)). The script writes your user and group IDs
into the project `.env`. Then it runs `./crest up` and `./crest install` (see
[With Docker](#with-docker)).

If `./crest up` or `./crest install` fails, for example because the port is in use, the
project stays. The script prints the commands to run after you fix the problem.

With rootless docker, the script writes `UID=0` and `GID=0` into `.env` (see
[The Launcher](#the-launcher)). It also does not change the owner of the project files
(no `chown`).

The script runs on your host. To read it before it runs:

```bash
curl -fsSL https://phalcon.io/crest-setup -o crest-setup.sh
less crest-setup.sh
sh crest-setup.sh my-app
```

`https://phalcon.io/crest-setup` points to
`https://raw.githubusercontent.com/phalcon/crest/master/resources/setup.sh`.

Do not add a `new` key to a published `project-config` stub for the setup command (see
[Commands after `new`](#commands-after-new)). The script runs `new` in a container
without docker, so `crest up` fails there. The script runs `./crest up` and
`./crest install` itself.

## Adding Crest to an Existing Project

For an existing project, `crest init` writes `crest.php` (see
[The Project File](#the-project-file)). If the project does not require Crest yet, add it
as a dev dependency first. The `composer require` command needs the version `dev-master`
(see [Installation](#installation)). The commands are the same in both flavors:

```bash
composer require --dev phalcon/crest:dev-master
crest init
```

`init` writes `crest.php` in the nearest folder with a `composer.json`. The psr-4 map is
the `autoload.psr-4` part of `composer.json`: it gives a folder to each namespace prefix,
for example `"App\\": "src/"`. The generators (the `make:*` commands) get their
namespaces from this map. Thus `init` needs a psr-4 entry in `composer.json`. Without
one, `init` stops and tells you to add one, for example `"App\\": "app/"`, and to run
`composer dump-autoload`.

`init` asks these questions, in this order. For each question, it proposes a value that it
finds in the project:

1. The namespace. The proposal is the namespace of the first psr-4 entry whose folder
   exists. The answer must be in the psr-4 map (`App\Api` under `"App\\": "src/"` is).
   The other proposals follow the answer: its folder is the psr-4 folder of the longest
   prefix, for example `src/Api`.
2. The flavor: `mvc` or `adr`. For each flavor, `init` counts the default folders of that
   flavor (item 4) that the project has. It proposes the flavor with the most. A tie gives
   `mvc`. A project with `src/Controllers`, `src/Providers` and `themes/vokuro` gets
   `mvc`. `--flavor` answers the question.
3. The front controller: `<namespace>\AppFront` when `AppFront.php` is in the folder of
   the namespace. Answer `none` for no front controller.
4. A folder for each path of the flavor (the `paths` key of `crest.php`; see
   [Configuration](#configuration)). The MVC paths are `command`, `controller`, `form`,
   `model`, `module`, `provider` and `views`. The ADR paths are `action`, `command`,
   `middleware`, `provider` and `responder`. The question says if the folder exists. A
   class folder is in the folder of the namespace. An answer must be a relative folder in
   a psr-4 folder. Its folder names must give a usable namespace: `src/my-actions` gives
   `App\my-actions`, which PHP cannot use. `init` removes a leading `./`.

   `views` holds no classes. It is a relative folder in the project, with no psr-4
   check. Each part of the answer must be a folder name. Thus `init` refuses an absolute
   folder, an empty part (`//`), `.` and `..`. The proposal is `themes/default`. When that
   folder does not exist and `themes/` has one folder only, `init` proposes that folder
   (`themes/vokuro` in [vokuro][vokuro]).
5. The runtime (see [The Runtime](#the-runtime)). The proposal is docker when the project
   has `compose.yaml`, `compose.yml`, `docker-compose.yaml` or `docker-compose.yml`. For
   docker, `init` also asks for the service. The proposal is `app`, or the first service.

Press Enter to accept a proposal. `--no-interaction` accepts all the proposals (see
[Global Options](#global-options)). `--force` overwrites an existing `crest.php`. If the
project does not require Crest, `init` prints the `composer require` line. Add
`:dev-master` to that line (see [Installation](#installation)).

For an MVC project, `init` also writes the `models` key of `crest.php` (see
[Configuration](#configuration)). It writes `'camelCase' => false`, so the models of the
project keep their property names. It also writes `'getSet' => false`, so the properties
of the models stay public. See [Names](#names) and
[Getters and Setters](#getters-and-setters).

## Running a Project

A project runs with docker, or with PHP on the host (see [Quick Start](#quick-start)).
For the Crest that runs `up`, `down` and `install`, see
[The Global Crest and the Project Crest](#the-global-crest-and-the-project-crest).

With docker, use `crest up`, `crest install` and `crest down` (see
[The Launcher](#the-launcher)). `crest down` stops and removes the containers.
`up --build` rebuilds the image first, and `down --volumes` also removes the named
volumes.

Without docker, `crest serve` starts PHP's built-in web server for the project (see
[With PHP on the Host](#with-php-on-the-host)). `.htrouter.php` is the router script of
PHP's built-in server. `serve` runs `php -S 127.0.0.1:8080 -t public .htrouter.php` in the
project root. The router and the document root (`public`) are the same as in the
container.

The port is `--port`, else `APP_PORT` from the environment, else `APP_PORT` in the
project `.env`, else 8080. docker compose reads `APP_PORT` in the same order.

`serve` reads `.env` as docker compose does: the last `APP_PORT` line wins, and `export`,
`APP_PORT: <port>`, quotes and `#` comments are allowed. `serve` does not expand
`${...}`: a value with `${...}` stops `serve` with an error.

`serve` finds the project root from a subfolder. A global Crest passes `serve` to the
Crest in `vendor/`, as it does the other project commands (see
[The Global Crest and the Project Crest](#the-global-crest-and-the-project-crest)).
`serve` stops before PHP starts if `.htrouter.php` or `<vendor-dir>/autoload.php` is
missing. `vendor-dir` is a setting of composer (see [Configuration](#configuration)).

The server uses the PHP that runs Crest. PHP options on the command line, for example
`-d extension=phalcon.so`, do not reach the server. Put such settings in `php.ini`.

Press Ctrl+C to stop the server. If the server continues to run, for example after Crest
stopped in a different way, stop its PHP process. The command is the same in both
flavors:

```bash
pkill -f -- '-S 127.0.0.1:8080'
```

Use your port if it is not 8080.

## Commands That Boot the Project

Four commands read objects that exist only after the application registers them.
[`container:list`](#command-reference) reads the services and lists them, and
[`event:list`](#command-reference) reads the listeners of the events manager and lists
them. `make:model` and `make:scaffold` (see [Generating Scaffolds](#generating-scaffolds))
read the `db` service (see [The Database](#the-database)). Thus these commands start your
front controller: they boot the project. Name the front controller in the `bootstrap` key
of `crest.php`:

### MVC

```php
return [
    'bootstrap' => App\AppFront::class,
];
```

### ADR

```php
return [
    'bootstrap' => App\Front\ApiFront::class,
];
```

Crest constructs the class with the project root. The constructor can take the root if
the class needs it. The class must declare `boot()`. There is no class to extend and no
interface to implement: `boot()` is the whole contract. In the MVC example, `boot()`
returns a `FactoryDefault` (a `Phalcon\Di\DiInterface`). In the ADR example, `boot()`
returns a `Phalcon\Container\Container`. Each one is a DI container (see
[The MVC Project](#the-mvc-project)):

### MVC

```php
use Phalcon\Di\DiInterface;
use Phalcon\Di\FactoryDefault;

final class AppFront
{
    public function __construct(private readonly string $projectRoot)
    {
    }

    public function boot(): DiInterface
    {
        $container = new FactoryDefault();

        // register your providers, with the db service

        return $container;
    }
}
```

### ADR

```php
use Phalcon\Container\Container;

final class ApiFront
{
    public function __construct(private readonly string $root)
    {
    }

    public function boot(): Container
    {
        $container = new Container();

        // register your services

        return $container;
    }
}
```

`boot()` must return an object. Each command has its own conditions for that object:

| Command | Flavor | Requires the returned object to |
|---|---|---|
| `container:list` | <span class="badge badge--adr">ADR</span> | implement `Phalcon\Contracts\Container\Service\Collection` and `Phalcon\Contracts\Container\Service\Enumerable` |
| `event:list` | <span class="badge badge--adr">ADR</span> | implement `Collection`, and hold a registered `Phalcon\Events\Manager` |
| `make:model`, `make:scaffold` | <span class="badge badge--mvc">MVC</span> | implement `Phalcon\Di\DiInterface`, and hold a `db` service that is a `Phalcon\Db\Adapter\AdapterInterface` |

`Phalcon\Container\Container` implements both contracts of the `container:list` row.
Thus `boot()` can return a `Phalcon\Container\Container` for `container:list`.

For `event:list`, "registered" means a definition or an instance that exists. A manager
that the container can only autowire does not count. In that case, Crest stops with an
error that says that the bootstrap registers no manager. It does not show zero listeners
from a new instance that it made itself.

All the other commands, for example the other generators, `about`, `config:show` and
`route:list`, do not start your front controller. Thus they also work on a project that
does not run.

## Generating Controllers

<span class="badge badge--mvc">MVC</span> For MVC projects (see the flavor table in [Overview](#overview)).

In an MVC project, `make:controller` writes a controller and the base class that
it extends (see [Generated Bases](#generated-bases)):

```bash
crest make:controller Users
```

When the base does not exist yet, the output starts with these lines:

```text
Created src/Controllers/Base/CrestControllerBase.php
Created src/Controllers/UsersController.php
```

In the `Created`, `Updated` and `Kept` lines, Crest prints the full path of each
file or folder. The examples of these lines in this document show the path from the
project root.

`UsersController` extends `CrestControllerBase`, which extends
`Phalcon\Mvc\Controller`, and has an empty `indexAction()`. With the default
routes of the Phalcon router, the first part of the URL names the controller.
Crest then prints what the dispatcher needs: its default namespace, the URL of
`indexAction()` with the default routes (`GET /users`), and the name of its view
(`users/index`). The views folder and the engine belong to your project.

A project from `crest new --flavor=mvc` already has `CrestControllerBase` and
`IndexController`, and its dispatcher has the default namespace. Thus in that
project, `make:controller` prints no line for the base while the base is the
same as its stub (see [Generated Bases](#generated-bases)).

The name must give a class that the dispatcher can find from a URL. Crest stops
on `users` (the URL `/users` looks for `UsersController`), on `User_Profiles`,
and on a name that gives the suffix two times in the class name, for example
`UserControllerController`, or `Usercontroller` (which gives
`UsercontrollerController`). `UserController` gives `UserController`.

To write the controller into a module, add `--module` (see
[Generating Modules](#generating-modules)):

```bash
crest make:controller Users --module=admin
```

```text
Created src/Modules/Admin/Controllers/Base/CrestControllerBase.php
Created src/Modules/Admin/Controllers/UsersController.php
```

Each module has its own `CrestControllerBase`. The `Module.php` of the module
sets the default namespace of the dispatcher. Thus Crest prints the URL with the
routes of `make:module` (`GET /admin/users/index`) and the views folder of the
module. The module must exist. If it does not exist, Crest stops and tells you
to run `make:module` first.

### Generated Bases

Crest owns `CrestControllerBase` in `src/Controllers/Base/`. Its docblock starts
with `Generated by crest.` Do not edit it: when you run `make:controller` or
`make:scaffold`, Crest compares the file with the stub of the base. If they are
not the same, Crest writes the file again. This removes your changes. You own
the controllers, and Crest writes each one only once. Each module has its own
copy, in the `Controllers/Base/` folder of the module
(`src/Modules/Admin/Controllers/Base/`), with the same rules. For the new base of
a module, add `--module=<key>` to `make:controller`, with the key of the module
(see [Generating Modules](#generating-modules)).

- To get the new base after an upgrade of Crest, run `make:controller` again on
  an existing controller. Crest keeps the controller and writes the base:

  ```text
  Updated src/Controllers/Base/CrestControllerBase.php
  Kept src/Controllers/UsersController.php: it exists; pass --force to replace it
  ```

- `--force` replaces the controller with a new one. It never replaces a base
  without the `Generated by crest.` line: Crest keeps that file and prints a
  note. To get the Crest base back, delete the file or add the
  `Generated by crest.` line to it.
- Put the code that your controllers share into your own class that extends
  `CrestControllerBase`. Publish `controller.stub`
  (`crest stub:publish controller`) and change its `use` line and its
  `extends`, so that new controllers extend your class.
- Crest uses a published `controller-base.stub`, not the packaged one. Thus the
  upgrades of Crest no longer change your base. Keep the `Generated by crest.`
  line in your copy. Then Crest writes the base again when you change the stub.

## Generating Models

<span class="badge badge--mvc">MVC</span> For MVC projects (see the flavor table in [Overview](#overview)).

In an MVC project, `make:model` reads a table from the database of the project,
and writes a model and a base class. The model extends the base (see
[Generated Bases](#generated-bases)). Crest writes relations only from FOREIGN
KEY constraints (see [Relations](#relations)):

```bash
crest make:model users
```

```text
Created src/Models/Base/UsersBase.php
No relations for users: the table has no foreign keys, and no foreign keys point to it. Relations come only from foreign keys.
Created src/Models/Users.php
```

Crest reads the table through the `db` service of your project. Thus it starts
your front controller: `crest.php` must name it in `bootstrap` (see
[Commands That Boot the Project](#commands-that-boot-the-project)). A project
from `crest new --flavor=mvc` with a database has the `db` service (see
[The Database](#the-database)). For a project without one, add a provider that
registers it (`crest make:provider Db`).

With the `phalcon/phalcon` package (Phalcon v6), a model also needs
`phalcon/phql`, the package for PHQL (see [The Database](#the-database)). The
extension (Phalcon v5) has PHQL. For an MVC project with Phalcon v6, `crest new`
with a database adds the package to `composer.json`. For another project, install it:

```bash
composer require phalcon/phql:1.0.x-dev
```

`Users` extends `UsersBase`, which extends `Phalcon\Mvc\Model`. The base has a
property for each column, in the order of the table, and an `initialize()` that
sets the table:

```php
public ?int $id = null;
public ?string $name = null;
```

| Column type | Property type |
|---|---|
| the integer types | `?int` |
| `FLOAT`, `REAL`, `DOUBLE` | `?float` |
| `BOOLEAN` on PostgreSQL | `?bool` |
| all others, also `DECIMAL`, the dates and text | `?string` |

The column type is the type that Phalcon reads from the database. MySQL and
MariaDB keep a `BOOLEAN` column as `TINYINT(1)`, so it gives `?int`. On SQLite,
Phalcon reads `DOUBLE` and `BOOLEAN` columns as `VARCHAR`, so they give
`?string`.

On SQLite, a `TINYINT(1)` column gives `?int` before cphalcon 5.24.0 and before the tag
of `phalcon/phalcon` after `v6.0.0RC4`. From these versions, it gives `?bool`, and a
`Select` field in a scaffold.

Each property is nullable, with the default `null`, because a new model has no
values yet. The class name comes from the table name: Crest makes the first
letter of each part between `_` uppercase. `user_profiles` gives
`UserProfiles`. To give a table another class, or a column another property
name, see [Names](#names).

When the table changes, run `make:model` again. Crest writes the base again,
and keeps your model:

```text
Updated src/Models/Base/UsersBase.php
No relations for users: the table has no foreign keys, and no foreign keys point to it. Relations come only from foreign keys.
Kept src/Models/Users.php: it exists; pass --force to replace it
```

The rules of [Generated Bases](#generated-bases) apply to the base of a model
too. Do not edit it. You can change only the aliases of its relations (in the
`RelationAlias` attributes, see [Relations](#relations)) and the names in its
`PropertyName` attributes (see [Names](#names)). `--force` replaces the model,
but never a base without the `Generated by crest.` line. If you add `initialize()` to your model, call
`parent::initialize()` first.

For the errors that stop `make:model` before it writes a file, see
[When `make:model` Stops](#when-makemodel-stops).

`make:model` is for MVC projects. An ADR project uses repositories, not Active
Record models, so the command stops there.

To write the models into a module, add `--module` (see
[Generating Modules](#generating-modules)):

```bash
crest make:model users --module=admin
```

```text
Created src/Modules/Admin/Models/Base/UsersBase.php
No relations for users: the table has no foreign keys, and no foreign keys point to it. Relations come only from foreign keys.
Created src/Modules/Admin/Models/Users.php
```

The models and their bases go into the `Models` folder of the module, in its
namespace (`App\Modules\Admin\Models`). `--module` works with one table and
with `--all` (see [All the Tables](#all-the-tables)). A relation names a model
in the same module, so write the related
tables into the same module. The lines that tell you to run `make:model` again
name the option, for example
`Run make:model --module=admin for customers too: ...`. Crest reads the tables
through the `db` service of the project, also when the module sets its own
`db`.

### Names

Crest gives each model the class of its table name, and each property the
name of its column. Two settings in `crest.php` and one option change the
names:

```php
return [
    'flavor'    => 'mvc',
    'bootstrap' => App\AppFront::class,
    'models'    => [
        'classes'   => ['users' => 'User', 'user-profiles' => 'UserProfile'],
        'camelCase' => true,
    ],
];
```

The `models` key has two more settings, `getSet` and `schema`, which do not
change the names (see [Getters and Setters](#getters-and-setters) and
[The Schema](#the-schema)).

In an MVC project, `crest config:show` shows the key (see
[Configuration](#configuration)): the rows `camelCase`, `getSet` and `schema`, each with
its origin, and a table with each line of `classes`, sorted by table:

```text
ITEM       VALUE          ORIGIN
...
service    app            default
camelCase  true           declared
getSet     false          default
schema     none           default

PATH        LOCATION                   ORIGIN
...

TABLE          CLASS
user-profiles  UserProfile
users          User
```

When the key is not correct, `config:show` shows the error in a `models` row and
exits with 0, and `make:model` stops on it:

```text
service    app                                                default
models     crest.php: models.camelCase must be true or false  declared
```

**Classes.** `classes` gives a class to a table. Write a line only for each
table whose class you want to change: the other tables keep the class of their
name. Crest does not make a singular class name: `users` gives `Users`, not
`User`. For `User`, write the line `'users' => 'User'`. The table name must be
exact, with the same case. A line also gives a class to a table whose name gives
none (`user-profiles`), or gives a name that PHP reserves (`list`), also with
`--all`. With `--all`, a line for a table that the database does not have gives a
note:

```text
Note: models.classes names the table Users, which the database does not have; did you mean users?
```

When you add a line for a table that has a model, Crest writes a new base and a
new model (`UserBase.php`, `User.php`), and keeps the old files. A note names
the old files, and the tables that have relations with the table:

```text
Note: the old files of users stay: src/Models/Users.php and src/Models/Base/UsersBase.php; move your code to User, delete them, then run make:model for invoices
```

Move your code to the new model, delete the old files, and run `make:model` for
the tables of the note. Crest prints the note on each run until you delete the
old files. With `--all`, the note names only the related tables that the run
does not write, such as the tables of `--exclude` (see
[All the Tables](#all-the-tables)). The note also names a
related table that has no model yet: `make:model` then writes a model for it.
The new base does not get the `PropertyName` attributes of the old base: give
the names again with `--property` (see **One property** below).

Crest prints no note when the old base does not have the `Generated by crest.`
line. Crest also prints no note when another table gets the old class (for
example, with the line `'members' => 'Users'`), because the old base can be the
base of that table.

**camelCase.** With `'camelCase' => true`, each property gets the camelCase form
of its column: Crest splits the column at each `_`, makes the first letter of
each part uppercase, and then makes the first letter of the name lowercase.
`first_name` gives `firstName`, and `name` stays `name`. The other letters do
not change, so a column in capitals gives an unusual name (`USER_ID` gives `uSERID`):
give it a name with `--property`. The setting applies to each table, on each
run.

:::warning[WARNING]
When you change `camelCase` in a project that has models, the
next run of `make:model` renames the properties of each base that it writes,
and the code that uses the old names stops working. Crest prints a `Renamed`
line for each property that changes.
:::

**One property.** `--property` gives a name to a column of one table:

```bash
crest make:model users --property="first name=firstName,last_name=lastName"
```

Separate the columns with commas, and give all the names to one `--property`:
if you give it two times, Crest uses only the last one. A column whose name has
a comma, or a space at the start or the end, cannot get a name. `--property`
works only for one table, not with `--all`.

Crest keeps each name of `--property` in a `PropertyName` attribute on the
base:

```php
#[\Crest\Attribute\PropertyName('first name', name: 'firstName')]
abstract class UsersBase extends Model
```

On the next runs, you do not give `--property` again: Crest reads the
attribute. You can change the name in the attribute, and Crest uses it on the
next run. To use the name of `camelCase`, or the column name, again, delete the
attribute line and run `make:model` again. When the table no longer has the
column, Crest drops the attribute:

```text
Dropped the property name firstName of column 'first name': the table has no such column
```

Crest reads the `PropertyName` attributes as it reads the `RelationAlias`
attributes (see [Relations](#relations)). Crest stops, and writes no file, when
a `PropertyName` attribute does not have two plain strings (the column and the
name), when two attributes have the same column, or when the name in an
attribute is not a usable property name. The message names the file and the
line.

The order of the names: `--property`, then the attribute, then `camelCase`, then
the column name.

**columnMap().** When a property does not have the name of its column, the
base gets a `columnMap()` with each column and its property. Phalcon uses it to
read and write the rows, but only when the setting `orm.column_renaming` is on,
as it is by default. The relations use the property names of the two tables:
with `camelCase`, the `belongsTo()` of `invoices` has `'customerId'` (see
[Relations](#relations)).

**When a name changes.** When a property gets another name (a change of
`camelCase`, a new `--property`, or a changed attribute), Crest prints a line
for it. When a relation of another table uses the property, Crest names that
table:

```text
Updated src/Models/Base/InvoicesBase.php
Renamed $customer_id to $customerId: change the code that uses it
Run make:model for customers too: its relations use the property names of invoices
Kept src/Models/Invoices.php: it exists; pass --force to replace it
```

With `--all`, Crest reads all the tables in the same run, and writes again each
base that changes. Thus it names only the tables of `--exclude` (see
[All the Tables](#all-the-tables)). It does not name a table that fails later.
The summary lists each table that failed: run `make:model` for it again after
the fix.

**Published stubs.** `model-base` has the placeholder `{{ columnMap }}`, and the
fragment stub `fragment-model-property` (see [Project Stubs](#project-stubs)) has
`{{ property }}`. A copy that you published before
Crest added these placeholders does not have them. When a base needs a
`columnMap()`, Crest stops:

```text
crest: the published stub /path/to/resources/stubs/mvc/model-base.stub has no {{ columnMap }}; publish it again with crest stub:publish model-base --force, and make your changes in it again
```

Crest writes the `columnMap()` with the stub `fragment-model-column-map`, which
has the placeholder `{{ pairs }}`. On the next run, Crest reads the old property
names from this `columnMap()`. It reads only the form that it writes: a body
with only `return [...];`, and a plain string on each side of each `=>`. When
the base has another form (a published `fragment-model-column-map`, or a change
by hand), Crest still writes the base, but it cannot find the renamed
properties. It prints no `Renamed` line, and prints:

```text
Note: crest cannot read columnMap() of src/Models/Base/CustomersBase.php, so it cannot list the renamed properties
```

Then find the code that uses the properties of that table yourself.

### All the Tables

`make:model --all` writes a model and its base for each table of the database,
in the order of the table names. For each table, Crest prints a `Table` line,
then the lines of `make:model <table>`. At the end, Crest prints a summary:

```bash
crest make:model --all
```

```text
Table customers
Created src/Models/Base/CustomersBase.php
Created src/Models/Customers.php

Table invoices
Created src/Models/Base/InvoicesBase.php
Created src/Models/Invoices.php

2 tables: 2 models created, 0 kept, 0 failed.
```

Each table works as with `make:model <table>`. On another run, Crest compares
each base with the base that it makes from the table. If they are not the
same, Crest writes the base again. Crest keeps the models, and `--force`
replaces them. When the database has no tables to write, Crest prints
`No tables to write.`, and the exit status is 0.

With `models.schema`, `--all` writes the tables of that schema (see
[The Schema](#the-schema)), and the line names the schema:

```text
No tables to write in the schema 'billing'.
```

PostgreSQL gives no tables for a schema that does not exist, so a schema name
with a typo gives this line. On MySQL and MariaDB, a schema that does not exist
stops Crest:

```text
crest: the schema 'billing' cannot be read: SQLSTATE[42000]: Syntax error or access violation: 1049 Unknown database 'billing'
```

`--all` writes no models for views, and no models for the internal tables of
SQLite (for example, `sqlite_sequence`). For a view, run `make:model <view>`.
This works on MySQL, MariaDB and PostgreSQL. On SQLite, `make:model <view>`
stops with the "not found" error, because Phalcon finds only tables there.

To skip tables, give their names to one `--exclude`, separated by commas:

```bash
crest make:model --all --exclude=audit_log,phalcon_migrations
```

Give all the names to one `--exclude`. If you give `--exclude` two times,
Crest uses only the last one.

Each name must be the exact name of a table, with the same case. A name that
the database does not have stops Crest before it writes a file. When the name
differs from a table only in case, the error gives the name of the table:

```text
crest: --exclude: the database has no table Users; did you mean users?
```

For the name of a view or an internal SQLite table, Crest prints a note, and
continues. A skipped table still gives its relations: with
`--exclude=invoices`, the base of `customers` has its `hasMany()` to
`Invoices`.

With `--all`, an error of the list in
[When `make:model` Stops](#when-makemodel-stops) that is about one table makes
only that table fail. For example:

- its name gives no class name (`user-profiles`) or a name that PHP reserves
  (`list`), and no line of `models.classes` gives it a class;
- a column is not a property name and has no name from an attribute;
- Crest cannot use its base;
- a published stub has no placeholder that its base needs.

A table also fails when it gives the same class as another table, also with a
different case (`UserProfiles` and `user_profiles`, or `USERS` and `users`):
Crest writes none of these tables. Crest prints the reason, and continues with
the next table. At the end, Crest lists the tables that failed, so that you can
write their models yourself:

```text
Table user-profiles
Failed: 'user-profiles' gives no usable class name; expected a table name like 'users' or 'user_profiles'

Table users
Created src/Models/Base/UsersBase.php
No relations for users: the table has no foreign keys, and no foreign keys point to it. Relations come only from foreign keys.
Created src/Models/Users.php

2 tables: 1 model created, 0 kept, 1 failed.
Failed tables:
  user-profiles: 'user-profiles' gives no usable class name; expected a table name like 'users' or 'user_profiles'
```

The exit status is 1 when a table fails, and 0 when Crest writes or keeps each
table. Crest prints all these lines to stdout, also the `Failed` lines, so a
log of the output (`> log.txt`) has them in order. An error that is not about
one table stops Crest, and goes to stderr: for example, no `db` service, a
connection that breaks, or a stub that Crest cannot render. The files of the
tables before the error stay, and the next run continues from them.

### Relations

Crest writes relations only from FOREIGN KEY constraints. It does not read the
names of the columns: a column `customer_id` with no FOREIGN KEY constraint
gives no relation. MySQL tables with the MyISAM engine do not keep foreign
keys, so they give no relations. When a table has no foreign keys, and no
foreign key of another table points to it, `make:model` prints:

```text
No relations for users: the table has no foreign keys, and no foreign keys point to it. Relations come only from foreign keys.
```

With no foreign keys, write the relations in your model, in `initialize()`
after `parent::initialize()`. The `alias` option is the name that you use to read
the relation (see the aliases below). For example:

```php
public function initialize(): void
{
    parent::initialize();

    $this->belongsTo(
        'customer_id',
        Customers::class,
        'id',
        ['alias' => 'Customer']
    );
}
```

With foreign keys, the base gets a `belongsTo()` for each foreign key of the
table, and a `hasMany()` for each foreign key of another table that points to
the table. With these tables:

```sql
CREATE TABLE customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NOT NULL);
CREATE TABLE invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    total DECIMAL(10,2)
);
```

the base of `invoices` gets:

```php
$this->belongsTo(
    'customer_id',
    \App\Models\Customers::class,
    'id',
    ['alias' => 'Customer']
);
```

and the base of `customers` gets:

```php
$this->hasMany(
    'id',
    \App\Models\Invoices::class,
    'customer_id',
    ['alias' => 'Invoices']
);
```

Read a relation through its alias: `$invoice->Customer`, `$customer->Invoices`,
or `$invoice->getRelated('Customer')`. The related class is in the folder of
your models, also when you did not generate its model yet. Run `make:model`
for each table.

The aliases:

- A `belongsTo()` uses the key column without `_id`: `customer_id` gives
  `Customer`. If the column does not end in `_id`, if the part before `_id`
  gives no valid name (`_2nd_id`), or if the key has more than one column, the
  alias comes from the name of the related table: `customers` gives
  `Customers`.
- A `hasMany()` uses the class of the other table (`Invoices`). If that table
  has more than one key to this table, the alias adds `By` and the alias of the
  key: a table `messages` with `sender_id` and `recipient_id` gives
  `MessagesBySender` and `MessagesByRecipient`.

Each relation has a `RelationAlias` attribute on the base, with the key of the
relation and its alias:

```php
/**
 * Generated by crest. Do not edit this file: crest writes it again when you
 * run make:model invoices. Put your code into the model that extends it.
 *
 * You can change the alias in a RelationAlias attribute: crest keeps it when
 * it writes this file again.
 */
#[\Crest\Attribute\RelationAlias('belongsTo invoices(customer_id) -> customers(id)', alias: 'Customer')]
abstract class InvoicesBase extends Model
```

To change an alias, change the `alias:` argument, and run `make:model` for the
table again. Crest writes the base with your alias, and keeps it on each later
run. An alias in an attribute does not change when another key to the same
table comes, or when a later version of Crest has other rules. Change only the
`alias:` argument: Crest writes the rest of the base again. If you delete the
base, the aliases go back to the rules above.

When the next base has no relation for the key of an attribute, Crest drops
the attribute and prints one line for it, so that you know that the alias is
gone. This happens when a key column gets a new name, when the key gets
another target, or when the table name has another case on another server:

```text
Dropped the alias Buyer of 'belongsTo invoices(buyer_id) -> customers(id)': the database has no such key
```

Crest reads the attributes with the PHP tokenizer, so a formatter can change
their layout: line breaks, comments, quotes, named arguments, or a `use` import
of `Crest\Attribute\RelationAlias`. Each argument must be a plain string: in
single quotes, or in double quotes with no backslash. A constant, or two
strings joined with `.`, is not a plain string. The attribute class does not
need to exist when your application runs, so an install without Crest
(`composer install --no-dev`) works.

Crest stops, and writes no file, when the base is not valid PHP, when a
`RelationAlias` attribute does not have two plain strings (the key and the
alias), when an alias is not a valid name, when two attributes have the same
key, when an alias of an attribute has the name of a property of the table or,
with `models.getSet`, the name of a getter (see
[Getters and Setters](#getters-and-setters)), or when two aliases of attributes
are the same (Crest ignores the case). The message names the file and the
line.

When another table gets a new key to a table, run `make:model` again for the
table that the key points to, so that its base gets the new `hasMany()`. Or run
`make:model --all`: Crest compares the base of each table with the base that it
makes from the table, and writes the base again if they are not the same.

Crest skips a relation that it cannot write, and prints one line for it:

```text
Skipped the relation belongsTo invoices(customer_id) -> customers(id): the alias Customer has the name of a property
```

Crest skips a relation when:

- the key does not name the referenced columns (SQLite accepts
  `REFERENCES customers`);
- the related table gives no class name, or a name that PHP reserves;
- Crest cannot read the base of the related table, for example because an
  attribute in it does not have two plain strings. The line gives the error;
- a key column of the related table has no usable property name, and no
  `--property` or attribute gives it one (see [Names](#names));
- the alias has the name of a property of the table or, with `models.getSet`,
  the name of a getter (Crest ignores the case);
- two or more relations have the same alias (Crest ignores the case). Crest
  skips all of them, but not a relation whose alias comes from an attribute;
- the key points to a table of another schema: the reason is
  `the table customers is in another schema` (see [The Schema](#the-schema)).

Crest writes the other relations. When the reason is the alias (the name of a
property or of a getter, or two relations with the same alias), you can give
the skipped relation an alias: add an attribute with the key from the line, and
run `make:model` again:

```php
#[\Crest\Attribute\RelationAlias('belongsTo invoices(customer_id) -> customers(id)', alias: 'Client')]
```

For the other reasons, an attribute does nothing: Crest drops it, with a
`Dropped` line.

When Crest cannot read the base of the related table, correct that base as the
line says, and run `make:model` again. When a key column of the related table
has no usable property name, give it a name in a run for the related table, and
then run `make:model` for this table again:

```text
Skipped the relation hasMany notes(it's_id) -> users(id): column 'it's_id' of table 'notes' has no usable property name
```

```bash
crest make:model notes --property="it's_id=userId"
crest make:model users
```

You can also add a skipped relation in your model, in `initialize()` after
`parent::initialize()`.

Composite keys work on MySQL and MariaDB: the fields are arrays, for example
`['order_id', 'line_no']`. On PostgreSQL, composite keys work from the C extension
cphalcon 5.24.0 and from the tag of `phalcon/phalcon` after `v6.0.0RC4`. Before these
versions, Phalcon gives the wrong columns for a composite key on PostgreSQL. On
SQLite, Phalcon gives one key for each column of a composite key. Thus Crest
writes one relation for each column, and each relation uses only a part of the
key. Crest does not support SQLite composite keys.

An alias with the name of a `get` method of `Phalcon\Mvc\Model`, for example
`Messages` (`getMessages()`) or `Source` (`getSource()`), works as a property
(`$user->Messages`) and through `getRelated('Messages')`, but not as
`$user->getMessages()`: PHP calls the method of the model.

### The Schema

Crest reads the tables of the default schema of the connection. To read the
tables of another schema, give its name in the `models` key of `crest.php`:

```php
'models' => [
    'schema' => 'billing',
],
```

Then `make:model`, `make:model --all` and `make:scaffold` read the tables, the
columns and the foreign keys of that schema, and each base calls `setSchema()`
after `setSource()`. Thus the model reads and writes the rows of
`billing.invoices`:

```php
public function initialize(): void
{
    $this->setSource('invoices');
    $this->setSchema('billing');
}
```

The value must be a string that is not empty and not only white space. Crest
uses it as you write it: on PostgreSQL, write the name with the case that the
server keeps. A `null` value is the same as no value. The schema applies to all
the tables of the project, also with `--module`. `config:show` shows it in the
`schema` row (see [Names](#names)).

When you change the value, the next run reads the tables of the new schema, and
writes the base of each table of the run with the new value. A table that the
new schema does not have stops `make:model`:

```text
crest: table 'invoices' was not found in the schema 'billing' of the 'db' service
```

Crest deletes no file. When you remove the key, the next run writes each base
with no `setSchema()`.

A model keeps its schema until Crest writes its base again. Thus after you add,
change or remove the key, run `make:model --all`: a related model whose base
Crest did not write again reads the old schema, with no error.

SQLite has no schemas. When the `db` service is SQLite, and `models.schema` has
a value, Crest stops:

```text
crest: crest.php: models.schema is 'billing', but SQLite has no schemas; remove the key
```

When `models.schema` has a value, a published `model-base` must have the
placeholder `{{ schema }}`. A copy that you published before Crest added this
placeholder does not have it, and Crest stops with the message of
**Published stubs** in [Names](#names). With no `models.schema`, a published
copy works as before.

**A key to another schema.** Crest writes a relation only to a table of the
schema that it reads. A foreign key to a table of another schema gives no
relation, also with no `models.schema`:

```text
Skipped the relation belongsTo invoices(customer_id) -> customers(id): the table customers is in another schema
```

Crest finds such a key from the list of the tables: the referenced table is not
a table of the schema. A base from an older version of Crest can have a
relation like that. The next run removes it, and the code that uses its alias
stops working. A `RelationAlias` attribute for the key gets a `Dropped` line.
If you need the relation, write it in your model.

The limits:

- When the schema also has a table or a view with the name of the referenced
  table, Crest cannot see the difference. It writes the relation to the model
  of that table or view in the schema.
- A key from a table of another schema to a table of this schema gives no
  `hasMany()`: Crest does not read the other schemas.
- On PostgreSQL, two schemas can have the same table with the same key column.
  If you do not give the keys a name, PostgreSQL gives the two keys the same
  name, for example `invoices_customer_id_fkey`. Two keys with the same name can
  point to tables or columns with different names. For such keys, before
  cphalcon 5.24.0 and before the tag of `phalcon/phalcon` after `v6.0.0RC4`,
  Phalcon gives one key with the columns of the two keys. Crest then writes a
  relation with the column two times, or a `Skipped` line, for that key. To fix
  it, give one of the two keys another name, or use the release with the fix.

### Getters and Setters

phalcon-devtools is the Phalcon Devtools command line tool (see
[References](#references)). With `--get-set`, it wrote models with protected
properties, and a getter and a setter for each column. With `'getSet' => true`
in the `models` key of `crest.php`, each base that `make:model` writes has
protected typed properties, and a getter and a setter for each property. The
base of the table `people` (`id`, `first_name`) is:

```php
abstract class PeopleBase extends Model
{
    protected ?int $id = null;
    protected ?string $first_name = null;

    public function initialize(): void
    {
        $this->setSource('people');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $value): static
    {
        $this->id = $value;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(?string $value): static
    {
        $this->first_name = $value;

        return $this;
    }
}
```

The default is `false`, and a `null` value counts as no value. A value that is
not `true` or `false` stops `make:model` and `make:scaffold`. The setting
applies to each table of the project.

**The names.** The methods are `get<Name>()` and `set<Name>()`. Crest makes
`<Name>` from the property: it splits the property at each `_`, and makes the
first letter of each part uppercase. `first_name` gives `getFirstName()`. With
`camelCase`, `firstName` also gives `getFirstName()`, so a change of
`camelCase` does not change the methods. `--property=first_name=givenName`
gives `getGivenName()`. A setter returns the model, so you can chain the
setters: `$user->setFirstName('Ann')->setAge(30)`.

Phalcon uses the methods in `toArray()`, in `assign()` (when
`disableAssignSetters` is off), in the forms, and for `$user->first_name` from
outside the model. `findFirst()` and `save()` do not use the methods: they read
and write the protected properties directly. Thus a getter or a setter that you
change in your model does not run when Phalcon reads a row or saves it. (When
the setting `orm.call_setters_on_hydration` is on, `findFirst()` calls the
setters. The setting is off by default.) Two things change for the code outside
the model:

- `isset($user->first_name)` is true also when the value is null;
- `get_object_vars()` and `foreach` do not show the columns. `(array)` gives
  the columns, but not with the key `first_name`: the key of a protected
  property starts with `"\0*\0"`.

`$user->first_name ?? 'none'` still gives `'none'` for a null value.

**What stops the command.** With the key, these names stop `make:model` before
it writes a file. With `--all`, only the table of the name fails.

- The getter or the setter is a method of `Phalcon\Mvc\Model`. For example, the
  column `source` gives `getSource()`:

  ```text
  crest: column 'source' of table 'pages' gives the method getSource(), which Phalcon\Mvc\Model has; give it another name with --property="source=<name>"
  ```

  A name from `--property` or from a `PropertyName` attribute gives the same
  error, with its source.
- Two properties give one method name, without regard to case, for example
  `first_name` and `firstName`.

Phalcon gives the related records of an alias through `get<Alias>()`, and a
getter of the base would hide them. Thus Crest skips a relation whose alias is
the `<Name>` of a property, without regard to case. For example, the column
`billing_address` of `invoices` gives `getBillingAddress()`, the getter of the
alias `BillingAddress`:

```text
Skipped the relation belongsTo invoices(billing_address_id) -> addresses(id): the alias BillingAddress has the name of a getter
```

An alias from a `RelationAlias` attribute stops the command, and you change
it.

**A change of the key.** When a property gets another name, Crest prints a
line for its methods after the `Renamed` line of the property:

```text
Renamed getFname() and setFname() to getGivenName() and setGivenName(): change the code that uses them
```

From `true` to `false`, the base gets public properties and no methods, and
Crest prints a line for each property:

```text
Removed getFirstName() and setFirstName(): change the code that uses them
```

From `false` to `true`, Crest prints a line for each base:

```text
Note: the properties of <base file> are protected now; code outside the model goes through the getters and setters
```

**Published stubs.** The getter and the setter come from the stub
`fragment-model-get-set`. With the key, `fragment-model-property` needs the
placeholder `{{ visibility }}`, and `model-base` needs `{{ methods }}`. A copy
that you published before Crest added these placeholders does not have them:
publish it again with `crest stub:publish <name> --force`, and make your
changes in it again. With no key, an old copy works.

**Moving a devtools `--get-set` model.**

1. Set `'getSet' => true` in the `models` key of `crest.php`. If devtools used
   `camelize`, also set `'camelCase' => true`.
2. Run `crest make:model --all`. Crest writes each base. A model file that
   exists stays as it is, because Crest writes a model one time.
3. In each model:
   - change `extends Model` to `extends <Class>Base`, with the `use` line of
     the `Base` namespace;
   - delete the properties, the getters and the setters that devtools wrote;
   - delete `columnMap()` and the `setSource()` line, because the base has
     them;
   - keep your own code. If the model keeps `initialize()`, call
     `parent::initialize()` first.

A property, a getter or a setter of devtools that stays in the model stops PHP
when it loads the model, for example:

```text
Fatal error: Declaration of Users::getAge() must be compatible with UsersBase::getAge(): ?int
Fatal error: Type of Users::$age must be ?int (as in class UsersBase)
```

Delete them. To change a getter or a setter, keep the declaration of the base.

The code that calls the methods keeps working: the names are the same, and you
can chain the setters. There are two differences:

- A setter accepts only the type of the column, or null. In a file with
  `strict_types`, another type is a `TypeError`. A write through `__set()`
  (`$user->age = '42'`) and `assign()` use the weak rules of PHP: `'42'`
  converts, but `'abc'` for an `int` is a `TypeError`. The setters of devtools
  had no types, so they accepted each value.
- A getter gives the typed value.

On `phalcon/phalcon` `v6.0.0RC4` and before, a write through `__set()` or
`assign()` gives a `TypeError` when the value does not have the type of the
column, also for `'42'`.

### When `make:model` Stops

Crest stops, and writes no file, when:

- the table name gives no class name (`user-profiles`), or a name that PHP
  reserves (`list`), and `models.classes` gives it no class (see
  [Names](#names));
- the project has no `db` service, the service is not a Phalcon database
  adapter, or it cannot connect;
- the table does not exist (in the schema of `models.schema`, when you set it);
- `models.schema` has a value, and the `db` service is SQLite (see
  [The Schema](#the-schema));
- a column name cannot be a property name, and no `--property` or attribute
  gives it another name. Examples: `first name` (not a property name) and
  `container` (a property of `Phalcon\Mvc\Model`). The error gives the
  `--property` to use (see [Names](#names));
- two columns give the same property name (with `camelCase`, `first_name` and
  `firstName`): the error tells you to give one of them another name with
  `--property`;
- the base is not valid PHP, or Crest cannot use a `RelationAlias` or a
  `PropertyName` attribute in it (see [Relations](#relations) and
  [Names](#names));
- the `models` key of `crest.php` is not correct, or `--property` names a
  column that the table does not have (see [Names](#names));
- a published stub has no `{{ columnMap }}` or `{{ property }}`, and the base
  needs a `columnMap()` (see [Names](#names)), or the published `model-base`
  has no `{{ schema }}`, and `models.schema` has a value (see
  [The Schema](#the-schema));
- `models.getSet` is `true`, and a getter or a setter is a method of
  `Phalcon\Mvc\Model`, two properties give one method name, or a published
  stub has no `{{ visibility }}` or `{{ methods }}` (see
  [Getters and Setters](#getters-and-setters));
- `--module` names a module that does not exist (see
  [Generating Modules](#generating-modules)).

## Generating Modules

<span class="badge badge--mvc">MVC</span> For MVC projects (see the flavor table in [Overview](#overview)).

In an MVC project, `make:module` writes a module: a part of the application
with its own controllers, models and views, for example `admin` or `reports`.
All the modules are in the `module` path of `crest.php` (`src/Modules`), and
each module has the same structure:

```bash
crest make:module admin
```

```text
Created src/Modules/Admin/Module.php
Created src/Modules/Admin/Controllers
Created src/Modules/Admin/Models
Created src/Modules/Admin/views
```

| Path | Contents |
|---|---|
| `src/Modules/Admin/Module.php` | `App\Modules\Admin\Module`, which implements `Phalcon\Mvc\ModuleDefinitionInterface` |
| `src/Modules/Admin/Controllers/` | the controllers (`crest make:controller Index --module=admin`) |
| `src/Modules/Admin/Models/` | the models (`crest make:model users --module=admin`) |
| `src/Modules/Admin/views/` | the views of the module |

After the `Created` lines, Crest prints the lines to add to your front
controller and your router (see [Registration and Routes](#registration-and-routes)).

The folder is the name with the first letter of each part between `_` in
uppercase: `admin` and `Admin` give `Admin`, and `admin_panel` gives
`AdminPanel`. The key of the module is the folder in lowercase: `admin`, or
`adminpanel`. You use the key in `registerModules()`, in the routes and in
`--module`. Crest finds a module from its key, so `--module=adminpanel` finds
the folder `AdminPanel`. A name that does not give a class name (`my module`,
`admin-panel`) stops the command.

`Module.php` is yours: add the services of the module in `registerServices()`.
Crest writes it one time. When it exists, `make:module` stops; `--force`
replaces only `Module.php`, and the folders and their files stay. There is no
config file. A module that needs settings reads them from the environment in
`registerServices()`, as `DbProvider` does in a project with a database. With
docker, docker compose gives the values of `.env` to the app container. PHP on
the host does not read `.env` (see [The Database](#the-database)).

### Registration and Routes

Crest does not change your front controller or your router. `run()` of
`AppFront` handles the request and sends the response. Register the module in
`run()`, before `handle()`:

```php
public function run(): int
{
    $uri         = (string) ($_SERVER['REQUEST_URI'] ?? '/');
    $application = new Application($this->boot());
    $application->registerModules([
        'admin'  => ['className' => \App\Modules\Admin\Module::class],
        'common' => ['className' => \App\Modules\Common\Module::class],
    ]);
    $response = $application->handle($uri);

    if ($response instanceof ResponseInterface) {
        $response->send();
    }

    return 0;
}
```

Then send requests to the modules with routes. Write a provider for the router
(`crest make:provider Router`), and add the line that it prints
(`new \App\Providers\RouterProvider(),`) to `providers()`:

```php
public function register(DiInterface $di): void
{
    $di->setShared('router', function (): Router {
        // The default routes stay for the controllers of the project.
        $router = new Router();

        $router->add('/admin', [
            'module'     => 'admin',
            'controller' => 'index',
            'action'     => 'index',
        ]);
        $router->add('/admin/:controller', [
            'module'     => 'admin',
            'controller' => 1,
            'action'     => 'index',
        ]);
        $router->add('/admin/:controller/:action/:params', [
            'module'     => 'admin',
            'controller' => 1,
            'action'     => 2,
            'params'     => 3,
        ]);

        // A route that does not follow the pattern of a module.
        $router->add('/login', [
            'module'     => 'common',
            'controller' => 'session',
            'action'     => 'login',
        ]);

        return $router;
    });
}
```

`Router` is `Phalcon\Mvc\Router`. A request with no module in its route uses
the dispatcher and the views of the project, as before.

### What a Module Changes

`registerServices()` of `Module.php` changes two services that the providers
of the project set:

- the default namespace of the dispatcher becomes the namespace of the
  controllers of the module (`App\Modules\Admin\Controllers`);
- the views folder becomes the `views/` folder of the module.

Thus a page of the module uses only the views of the module, and shows no
layout of the project. Add a layout in the `views/` folder of the module. For
one views folder for the whole application, change the `setViewsDir()` line of
`Module.php` to the views folder of the project.

A project with no `dispatcher` or `view` service must change
`registerServices()`.

### Models in a Module

A relation of a model in a module names a model in the same module. To share
models between modules, keep them in the `model` path: run `make:model` with
no `--module`. `make:model --module` reads the tables through the `db` service
of the project, also when the module sets its own `db`.

## Generating Scaffolds

<span class="badge badge--mvc">MVC</span> For MVC projects (see the flavor table in [Overview](#overview)).

In an MVC project, `make:scaffold` writes CRUD pages for one table of the
database: a model, a form, a controller and three views. In a project from
`crest new --flavor=mvc` with a database, and with a table `users`:

```bash
crest make:scaffold users
```

```text
Created src/Models/Base/UsersBase.php
No relations for users: the table has no foreign keys, and no foreign keys point to it. Relations come only from foreign keys.
Created src/Models/Users.php
Created src/Forms/Base/UsersFormBase.php
Created src/Forms/UsersForm.php
Created src/Controllers/UsersController.php
Created themes/default/users/index.phtml
Created themes/default/users/new.phtml
Created themes/default/users/edit.phtml
```

A project from `crest new --flavor=mvc` already has `CrestControllerBase`. Thus
Crest prints no line for it while the base is the same as its stub. Crest then
prints what the pages need: the default namespace of the dispatcher, the URL of
the list, and the base URI. It also tells you that the pages have no login and
no CSRF check.

| File | Owner | A second run |
|---|---|---|
| `src/Models/Base/UsersBase.php` | Crest | writes it again |
| `src/Models/Users.php` | you | keeps it, also with `--force` |
| `src/Forms/Base/UsersFormBase.php` | Crest | writes it again |
| `src/Forms/UsersForm.php` | you | keeps it, unless `--force` |
| `src/Controllers/Base/CrestControllerBase.php` | Crest | writes it again |
| `src/Controllers/UsersController.php` | you | keeps it, unless `--force` |
| `themes/default/users/index.phtml` | you | keeps it, unless `--force` |
| `themes/default/users/new.phtml` | you | keeps it, unless `--force` |
| `themes/default/users/edit.phtml` | you | keeps it, unless `--force` |

Crest writes a base again only if the file is not the same as the base that
Crest makes: from the table for `UsersBase` and `UsersFormBase`, and from the
stub `controller-base` for `CrestControllerBase`. Thus when the table gets a new
column, run `make:scaffold` again. Crest writes the two bases again, and the
list and the `new` and `edit` pages show the column, because the views loop
over the form. The rules of [Generated Bases](#generated-bases) apply to the
two bases. `make:model --force` replaces the model.

With `models.schema`, the pages read the table of that schema (see
[The Schema](#the-schema)).

### The Names of the Pages

All the names come from the class of the model. Thus one line of
`models.classes` changes all of them (see [Names](#names)):

| Name | `users` | `user_profiles` | `users` with `'users' => 'User'` |
|---|---|---|---|
| Model | `Users` | `UserProfiles` | `User` |
| Form | `UsersForm` | `UserProfilesForm` | `UserForm` |
| Form base | `UsersFormBase` | `UserProfilesFormBase` | `UserFormBase` |
| Controller | `UsersController` | `UserProfilesController` | `UserController` |
| URL and views folder | `users` | `user-profiles` | `user` |

The name of a field is the property of its column, and its label comes from the
column: `first_name` gives the label `First name`.

### The Pages

The list and the `new` and `edit` pages use the form that `make:scaffold` writes
(see [The Form](#the-form)).

| URL | Method | Result |
|---|---|---|
| `/users` | any | the list, with 10 rows on each page, and the search form |
| `/users/search` | any | the list of the rows that match the query |
| `/users/new` | any | an empty form |
| `/users/create` | POST | adds a row, and goes to the list |
| `/users/edit/<id>` | any | the form of the row |
| `/users/save/<id>` | POST | changes the row, and goes to the list |
| `/users/delete/<id>` | POST | deletes the row, and goes to the list |

- A request to `create`, `save` or `delete` that is not a POST goes to the list,
  and changes nothing.
- When the model refuses a value, the form shows again, with the messages of the
  model and the values that the user typed. When the model refuses a delete, the
  list shows its messages.
- `create` does not change a row that exists: a primary key that is in the table
  gives the message of the model, and the form shows again.
- A row that does not exist gives `Users was not found`, and the list.

To write the pages into a module, add `--module` (see
[Generating Modules](#generating-modules)):

```bash
crest make:scaffold users --module=admin
```

The model, the form and the controller go into the `Models`, `Forms` and
`Controllers` folders of the module, in its namespace, and the views go into
`views/users/`. The pages are at `/admin/users`, after you add the registration
and the routes that `make:module` prints. The module must exist.

### What Stops the Command

Crest does these checks before it writes a file. Thus a run that stops changes
nothing. It stops when:

- the project is not an MVC project;
- `--module` names a module that does not exist;
- the table name gives no class name, and `models.classes` gives it no class;
- the dispatcher cannot find a controller of that class from a URL (see
  [Generating Controllers](#generating-controllers));
- no psr-4 entry covers the `form`, `controller` or `model` path;
- the table does not exist;
- the table has no primary key, or its primary key has more than one column;
- `make:model` stops on the table (see
  [When `make:model` Stops](#when-makemodel-stops));
- a property has the name of an accessor of `Phalcon\Mvc\Model` (see below);
- the `edit` form has no fields, for example when the table has only its primary
  key.

**A column with the name of a `Model` accessor.** `Phalcon\Mvc\Model` has methods
such as `setSource()`, `getSchema()` and `getMessages()`. A form calls
`set<Name>()` and `get<Name>()` when they exist. Thus a column `source` calls
`Model::setSource()`, and each save fails. Crest stops, and gives the command that
gives the column another property name:

```text
crest: column 'source' gives the property 'source', and Phalcon\Mvc\Model has a method with that name; give it another name with make:model sources --property=source=<name>
```

Run that `make:model` command, then run `make:scaffold` again. With
`models.getSet`, the check of `make:model` for the getters and setters comes
first, and Crest stops with the message of
[Getters and Setters](#getters-and-setters).

### The Form

The form has one field for each column, in the order of the table:

| Column | Field | Filter | Other |
|---|---|---|---|
| The identity column | none | | |
| A primary key that is not identity | as the rows below | as the rows below | on the `new` form only |
| Name is `email` (any case) | `Email` | `email` | |
| `BIGINTEGER`, `INTEGER`, `MEDIUMINTEGER`, `SMALLINTEGER`, `TINYINTEGER` | `Numeric` | `int` | |
| `DOUBLE`, `FLOAT` | `Numeric` | `float` | `step="any"` |
| `DECIMAL` | `Numeric` | `trim` | `step="any"` |
| `BOOLEAN` | `Select` | `bool` | the options `No` and `Yes`, and an empty option |
| `DATE` | `Date` | `trim` | |
| `TEXT`, `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`, `JSON`, `JSONB` | `TextArea` | `trim` | |
| `BLOB`, `TINYBLOB`, `MEDIUMBLOB`, `LONGBLOB`, `BINARY`, `VARBINARY`, `BYTEA` | none | | Crest prints `Skipped <column>: a binary column has no field in the form` |
| Each other type | `Text` | `trim` | |

The column type is the type that Phalcon reads from the database (see
[Generating Models](#generating-models)). An input that is empty or has only
whitespace is null, and the model decides if the column can be null: a `NOT NULL`
column gives the message `<property> is required`.

The pages also work with `models.getSet`: the form and the views go through the getters
and the setters (see [Getters and Setters](#getters-and-setters)).

### Search

The search form has the fields of the `new` form, and uses the rules of
`Phalcon\Mvc\Model\Criteria::fromInput()`: `LIKE` for a `VARCHAR` column, and `=`
for each other type. An empty field is not in the search. On PostgreSQL, partial
text for a `DATE`, a `TIMESTAMP` or a `UUID` column gives an error page.

### The Base URI

The links and the redirects use the `url` service. With no base URI, Phalcon makes
one from `PHP_SELF`, and the links of a page such as `/users/edit/5` are not
correct. A project from `crest new` sets `/` in `UrlProvider`. For an application in
a subfolder, change that line, for example to `/shop/`. Another project must set
the base URI:

```php
$url->setBaseUri('/');
```

### Limits

- The pages have no login and no CSRF check. Add them before you deploy the pages.
- There is no success message after a redirect, because a message that stays after
  a redirect needs a session. When your project has a `session` service, call
  `$this->flashSession->success('Saved')` before the redirect, and add
  `<?php $this->flashSession->output() ?>` to the view.
- A foreign key column gets the field of its type, for example a `Numeric` field,
  not a list of the related rows.
- A `DELETE` that a foreign key refuses gives an error page.
- A column with the name `page` is also the parameter of the page in the URL.
- A project with the `phalcon/phalcon` package (Phalcon v6) needs `phalcon/phql`
  (see [The Database](#the-database)).

## Generating Actions

<span class="badge badge--adr">ADR</span> For ADR projects (see the flavor table in [Overview](#overview)).

`make:action` takes an HTTP method and a route path:

```bash
crest make:action GET /company/all
crest make:action GET /company/{id}
```

Crest does not have its own rule for the class name. It gets the name from the router of
the framework (`Router::classFor()`). Each part of the path becomes a namespace part, and
the class name is the HTTP method followed by these parts. Placeholders are not part of
the name.

| Command | File |
|---|---|
| `crest make:action GET /company/all` | `src/Action/Company/All/GetCompanyAll.php` |
| `crest make:action GET /company/{id}` | `src/Action/Company/GetCompany.php` |

Thus the file goes where the router looks for it. Route placeholders (the parts in
braces, such as `{id}`) must come last: Crest stops on
`/album/{id}/edit`, and tells you to write `/album/edit/{id}`.

`--responder` picks the responder that the action calls. The `json` responder gives a
JSON response. The view responder renders a template with your renderer: the
`Renderer` object of the project.

| Option | Purpose |
|---|---|
| `--responder=json\|view` | the packaged stub to render; the default is `json` |
| `--stub=<name>` | render a named stub instead; you cannot use it together with `--responder` |
| `--template=<name>` | the template that the view responder renders; the default is `<path>/index` |
| `--force` | overwrite an existing action |

A view action names a template, but Crest does not create the template.
`Renderer::render()` takes a name, not a path. Thus the folder and the extension
belong to your renderer. Crest prints the name of the template, and does not
guess a file name.

## Configuration

`crest.php` is the project file (see [The Project File](#the-project-file)). This
section shows its keys. The examples show the file that `crest new` writes for each
flavor:

### MVC

```php
return [
    'flavor'    => 'mvc',
    'namespace' => 'App',
    'bootstrap' => App\AppFront::class,
    'models'    => [
        // Property names in camelCase. A change renames the properties of
        // each model, so choose before the first make:model.
        'camelCase' => false,
        // Protected properties with a getter and a setter for each, as
        // devtools --get-set. A change changes the base of each model.
        'getSet'    => false,
        // The class name of a table, when the default name does not fit,
        // e.g. 'user_logins' => 'Login'.
        'classes'   => [],
    ],
    'paths'     => [
        'command'    => 'src/Command',
        'controller' => 'src/Controllers',
        'form'       => 'src/Forms',
        'model'      => 'src/Models',
        'module'     => 'src/Modules',
        'provider'   => 'src/Providers',
        'views'      => 'themes/default',
    ],
    'runtime'   => ['type' => 'docker', 'service' => 'app'],
];
```

### ADR

```php
return [
    'flavor'    => 'adr',
    'namespace' => 'App',
    'bootstrap' => App\AppFront::class,
    'paths'     => [
        'action'     => 'src/Action',
        'command'    => 'src/Command',
        'middleware' => 'src/Middleware',
        'provider'   => 'src/Provider',
        'responder'  => 'src/Responder',
    ],
    'runtime'   => ['type' => 'docker', 'service' => 'app'],
];
```

A key that is not in the file takes its default: `flavor` `mvc`, `namespace` `App`, the
default paths of the flavor (the paths in the examples above), and the host runtime.
`crest new` writes the `runtime` key, with docker by default (see
[Creating a Project](#creating-a-project)). Thus the host default does not apply to a new
project.

`crest config:show` shows the keys of `crest.php` with their values and their origins,
except `namespaces` and `new`. `declared`: `crest.php` sets the key. `default`: `crest.php`
does not set the key, or sets it to `null`, and Crest uses its default value. Each key of
`paths` has its own origin.

The `runtime` key says where the project commands run (see [The Runtime](#the-runtime)).

The `paths` key gives a folder for each kind of file that Crest writes. Crest gets the
namespace of a path from the psr-4 map of `composer.json`. Thus a psr-4 entry must cover
each path: `src/Action` under `App\ => src/` gives `App\Action`. For a folder that no
psr-4 entry covers, give the namespace in the `namespaces` key:

### MVC

```php
return [
    'paths'      => ['controller' => 'app/Controllers'],
    'namespaces' => ['controller' => 'Shop\Controllers'],
];
```

### ADR

```php
return [
    'paths'      => ['action' => 'app/Handlers'],
    'namespaces' => ['action' => 'Shop\Handlers'],
];
```

The `models` key changes the names that `make:model` gives in an MVC project.
`classes` gives a class to a table, and `camelCase` gives camelCase property names.
`getSet` gives protected properties with a getter and a setter for each. The option
`--get-set` of phalcon-devtools (see [References](#references)) does the same.
`crest new` and `crest init` write the key for an MVC project, with
`'camelCase' => false` and `'getSet' => false`. `crest new --camel-case` and
`--get-set` give `true`. `crest config:show` shows the key. See [Names](#names) and
[Getters and Setters](#getters-and-setters):

```php
return [
    'models' => [
        'classes'   => ['users' => 'User'],
        'camelCase' => true,
        'getSet'    => true,
    ],
];
```

`models.schema` gives the schema of the tables: `make:model` and `make:scaffold`
then read the tables of that schema, and each base calls `setSchema()`. See
[The Schema](#the-schema).

Crest reads `vendor-dir` and `bin-dir` as composer does. It uses
`COMPOSER_VENDOR_DIR` and `COMPOSER_BIN_DIR` first, then `config` in `composer.json`,
then `vendor` and `<vendor-dir>/bin`. The hand-off runs `<bin-dir>/crest`, and `serve`
checks `<vendor-dir>/autoload.php`. With the docker runtime, composer runs in the
container, so Crest reads only `composer.json`, and the two folders must be relative.
Crest does not expand `~` or `$VAR` in these values: use a relative or an absolute
path.

## Custom Stubs

A stub is a template that Crest fills in (see [Stubs](#stubs)). To change a stub, copy
it into `resources/stubs/<flavor>/` in your project. Crest then uses your copy, not the
packaged stub. A stub that all flavors use, for example `command.stub`, is in
`resources/stubs/shared/`. Crest looks for a stub in this order: your
`resources/stubs/<flavor>/`, your `resources/stubs/shared/`, then the same two folders
in the package. `crest stub:publish` copies each stub into the folder where Crest looks
for it.

`stub:publish` copies a `project-*` stub, which `new` uses, only when you give its name.
See [Project Stubs](#project-stubs).

### Project Stubs

`crest new` writes the files of a project from the `project-*` stubs (see
[Creating a Project](#creating-a-project)). To change them, publish them by name in the
folder that the project goes into (the working directory, or `--directory`), then edit
the copies. For example, `project-front` is the stub of the front controller. A project
stub needs no `crest.php`. `--flavor` gives its flavor, as for `new`; the default is
`mvc`:

### MVC

```bash
crest stub:publish project-front
```

### ADR

```bash
crest stub:publish project-front --flavor=adr
```

The project stubs that are the same in both flavors are in `resources/stubs/shared/`,
and a publish puts them there. A copy in `resources/stubs/<flavor>/` wins over the
shared copy for that flavor, and a publish of the shared copy prints a note that names
it. Crest looks for a project stub in the order of [Custom Stubs](#custom-stubs). When
the flavor does not have the stub and another flavor does, the error names the option to
use, for example `pass --flavor=mvc`.

A publish with no name leaves the project stubs out, because they do nothing inside a
project. It also leaves the fragment stubs (`fragment-*`) out. They hold pieces of the
framework API and the guidance text that the generators print. A copy of a fragment does
not get the changes of later releases. Publish a fragment by name to change it.

You can change each project stub on its own. The names that the stubs and Crest must
agree on come from these placeholders:

- `{{ documentRoot }}`: the web root folder, `public`
- `{{ router }}`: the router script, `.htrouter.php`
- `{{ portVariable }}`: the port variable, `APP_PORT`
- `{{ port }}`: the default port, `8080`
- `{{ front }}`: the name of the front controller class, `AppFront`
- `{{ source }}`: the source folder, `src`
- `{{ autoloader }}`: the autoloader, `vendor/autoload.php`

Keep these placeholders where the packaged copy has them. Then `serve`, `init` and the
generated files agree.

`project-front`, `project-config` and `project-index` must also agree with each other on
the namespace. `new` decides where each file goes: a stub cannot move its file. A
published copy must use only the placeholders of the packaged copy. If a placeholder has
no value, `new` stops before it writes a file.

In an MVC project, `{{ controllerNamespace }}`, `{{ controllerPath }}`,
`{{ providerNamespace }}`, `{{ providerPath }}` and `{{ viewsPath }}` come from the
default paths of the flavor. A stub that depends on the view engine has the engine name
in its name: `project-phtml-provider`, `project-phtml-layout` and `project-phtml-index`.

The service of the database and the database lines of `.env` (see
[The Database](#the-database)) come from the project stubs `project-compose-mysql`,
`project-compose-mariadb`, `project-compose-pgsql`, `project-env-database` and
`project-env-sqlite`. These stubs are the same in both flavors. To change one, for
example the image, publish it by name in the folder that the projects go into:

```bash
crest stub:publish project-compose-mysql
```

A copy of a project stub that you published before the database option does not have the
new placeholders: `{{ dependsOn }}`, `{{ databaseService }}`, `{{ databaseInstall }}`,
`{{ databaseEnv }}`, `{{ databaseIgnore }}`, `{{ phql }}`, `{{ dbUse }}`,
`{{ dbProvider }}`, `{{ registerProviders }}` and `{{ models }}`. When the project needs
one, `new` stops before it writes a file, and names the copy:

### MVC

```text
crest: the published stub /path/to/resources/stubs/shared/project-compose.stub has no {{ databaseService }}; publish it again with crest stub:publish project-compose --flavor=mvc --force, and make your changes in it again
```

### ADR

```text
crest: the published stub /path/to/resources/stubs/shared/project-compose.stub has no {{ databaseService }}; publish it again with crest stub:publish project-compose --flavor=adr --force, and make your changes in it again
```

Without a database, and without `--camel-case` and `--get-set`, such a copy works as
before.

## Adding Commands from a Package

A package adds commands to Crest in its `composer.json`:

```json
"extra": {
    "crest": {
        "commands": {
            "demo:greet": "Vendor\\Demo\\GreetCommand"
        }
    }
}
```

Crest reads this block from each package that is installed with the Crest that runs, and
from its root project. In a project, the global Crest passes the listing and the project
commands to the project Crest (see
[The Global Crest and the Project Crest](#the-global-crest-and-the-project-crest)). Thus
only the packages of the project count. Outside a project, the packages of the global
Crest count. These commands cannot replace a command or an alias of Crest, and the root
project replaces a package command with the same name. `crest make:command` writes a
command and prints its block (see [Command Reference](#command-reference)). A package
command works in both flavors, and `make:command` gives the same output in both.

An unknown command gives a hint when Crest knows the package that provides its prefix:

```text
crest: unknown command 'migration:run'; provided by phalcon/migrations
```

There is no hint when a registered command has that prefix: the package is installed,
and only the name is wrong.

A command extends `Crest\Console\Command\Command` and declares two methods:

```php
use Crest\Console\Command\Command;
use Crest\Console\Input;
use Crest\Console\Output;
use Crest\Console\Parsing\Definition;

final class GreetCommand extends Command
{
    public function define(): Definition
    {
        return Definition::for('demo:greet', 'Greet someone')
            ->argument('name', true, 'Who to greet')
            ->option('shout', 'Use capital letters');
    }

    public function handle(Input $input, Output $output): int
    {
        $output->line('Hello ' . $input->argumentString('name'));

        return 0;
    }
}
```

Crest makes the command with `new $class()`, so the constructor must work without
arguments. Crest skips a class that is not a `Command`, or that `new $class()` cannot
create. Each command also gets the global options (`--config`, `--directory`,
`--trace`, `--help`, `--quiet`, `--no-interaction`; see
[Global Options](#global-options)).

These types are the API for a package. Each type has `@api` in its docblock:

| Type | Use |
|---|---|
| `Crest\Console\Command\Command` | the base class of a command |
| `Crest\Console\Parsing\Definition` | `for()`, `argument()` and `option()` declare the arguments and options |
| `Crest\Console\Input` | the values of the call |
| `Crest\Console\Output` | `line()`, `success()`, `error()`, `write()`, `table()`, `ask()` and `choice()` |
| `Crest\Console\Exceptions\Exception` | throw it to stop with one clean error line |
| `Crest\Command\Project` | `Project::context($input)` gives the project of the call |
| `Crest\Project\ProjectContext` | `root()`, `path($key)` and `namespaceFor($key)` |

`Project::context()` finds the project as the other commands do (see
[The Project File](#the-project-file)). Without `crest.php`, the command stops with the
`crest init` hint.

A public element with `@internal` in its docblock is not part of the API, and it can
change in any release. Tools that read the tag, for example an IDE or a rule of a static
analyzer, can report its use from another package. Do not extend
`Crest\Command\ProjectCommand`: it is the base of the commands of Crest, and it changes
with them.

## Command Reference

The table shows the aliases in parentheses. Run `crest` with no arguments, or
`crest list`, for the same listing from the tool itself. In a project, the listing shows
only the commands for the flavor of the project (see [Overview](#overview)).
`crest --help` shows the help of `list`, because `crest` with no command runs `list`.
An unknown option with no command, or a `crest.php` that is not valid, stops the listing
with an error.

| Command | Description |
|---|---|
| `about` (`info`, `i`) | environment and version report |
| `config:show` | the project configuration that Crest resolved, and where each value came from |
| `container:list` | services registered in the project container |
| `down` | stop and remove the project containers |
| `event:list` | listeners attached to the project events manager |
| `init` | write `crest.php` for an existing project |
| `install` | install composer dependencies in the project container |
| `list` (`commands`, `enumerate`) | the available commands |
| `make:action` | create an ADR action for a route |
| `make:command` | create a Crest command |
| `make:controller` | create an MVC controller |
| `make:middleware` | create an ADR middleware |
| `make:model` | create an MVC model from a database table, or from each table with `--all` (relations come only from foreign keys) |
| `make:module` | create an MVC module |
| `make:provider` | create a service provider |
| `make:responder` | create an ADR responder |
| `make:scaffold` | create MVC CRUD pages for a database table |
| `new` | create an ADR or MVC project |
| `route:list` | every route the application answers |
| `serve` (`server`) | start PHP's built-in web server for the project |
| `stub:publish` | copy packaged stubs into the project for editing |
| `up` | start the project containers |

The flavors of each command are in the table of [Overview](#overview).

### Global Options

| Option | Purpose |
|---|---|
| `--config=<file>` | explicit path to `crest.php` |
| `--directory=<dir>` | where Crest starts to look for `crest.php`; for `new` and `init`, the directory to use |
| `--trace` | full exception trace |
| `--help`, `-h` | usage for the current command |
| `--quiet`, `-q` | suppress non-essential output |
| `--no-interaction`, `-n` | ask no questions; use the default answers |
| `--version`, `-V` | Crest version |

## References

- [Crest - GitHub Repository][github]
- [Crest on Packagist][packagist]
- [Phalcon Devtools][devtools]

[devtools]: /5.24/devtools/
[github]: https://github.com/phalcon/crest
[invo]: https://github.com/phalcon/invo
[packagist]: https://packagist.org/packages/phalcon/crest
[vokuro]: https://github.com/phalcon/vokuro

Source: https://docs.phalcon.io/5.24/crest/index.mdx
