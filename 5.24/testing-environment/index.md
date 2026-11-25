---
title: "Testing Environment"
version: "5.24"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Testing Environment

## Overview

Phalcon was originally written in C, which limited contributions because most PHP developers do not work in C. To make contributing approachable, the team introduced [Zephir][zephir], a language with a syntax close to PHP and JavaScript that compiles to a PHP extension. The Phalcon codebase was rewritten in Zephir for [Phalcon 2.0][phalcon-2], and Zephir has been central to Phalcon's development ever since.

## The Challenge

Building a feature-rich framework requires a development environment with many services. Validating the ORM across database adapters (`MySQL`, `PostgreSQL`, `SQLite`) requires the relevant PHP extensions and databases. Running the full test suite requires more still, such as Redis and Memcached. Add the range of supported PHP versions (8.1 through 8.6), and a local setup becomes involved.

## Solution

Phalcon previously used `nanobox`, which is now discontinued. The development environment is now built on Docker. A few commands bring up every service and PHP version needed to build the extension and run the tests.

## Installation

Before you begin, install Docker. If you have not installed it yet, follow the instructions [here][docker_installation]. You will also need `docker compose`; installation details are [here][docker_compose].

## Running the Development Environment

**1. Fork the repository.** Fork the [cphalcon][cphalcon] repository to your GitHub account. Navigate to the [cphalcon][cphalcon] page and click the Fork button at the top right.

**2. Clone the fork.** Clone the forked repository to a directory of your choice. The example below assumes the GitHub account is `niden`; replace it with your own.

```bash
git clone git@github.com:niden/cphalcon
```

**3. Build the environment.** Navigate to the `cphalcon` folder and build the containers:

```bash
docker compose build
```

This may take some time, depending on your machine. It is not run frequently, only when the Dockerfiles change or you choose to rebuild.

## Starting the Environment

Once the containers are built, start the environment:

```bash
docker compose up -d
```

The command uses the `docker-compose.yml` file from the repository and runs the environment in the background, so your terminal stays free. To stop the environment:

```bash
docker compose down
```

## Service Networking

The service containers (databases, cache, queue) are not published to the host. They are reachable over the internal Compose network by their service name, for example `mysql`, `mariadb`, `postgres`, `redis`, `memcached`, and `beanstalkd`. You run the tests from inside a PHP development container, which reaches each service by that name. Because no host ports are published, you can run this environment alongside other projects without port collisions.

## Entering the Environment

The environment provides one container per supported PHP version:

```
cphalcon-dev-8.1
cphalcon-dev-8.2
cphalcon-dev-8.3
cphalcon-dev-8.4
cphalcon-dev-8.5
cphalcon-dev-8.6
```

To enter the PHP 8.1 container:

```bash
docker exec -it cphalcon-dev-8.1 /bin/bash
```

You will be prompted with:

```bash
root@cphalcon-dev-8.1:/srv#
```

You are now inside the environment with the extensions and services available. To exit, type `exit`:

```bash
root@cphalcon-dev-8.1:/srv# exit
```

## Aliases

The development containers define aliases in the `.bashrc` under `resources/docker/develop/`. The most useful ones:

| Alias    | Command                                     |
|----------|---------------------------------------------|
| `g`      | `git`                                       |
| `h`      | `history`                                   |
| `l`      | `ls -lF`                                    |
| `zephir` | `./vendor/bin/zephir`                       |
| `zf`     | `./vendor/bin/zephir fullclean`             |
| `zg`     | `./vendor/bin/zephir generate`              |
| `zs`     | `./vendor/bin/zephir stubs`                 |
| `cpl`    | `zf && zg && cd ext/ && ./install && cd ..` |

## Composer

Install the dependencies:

```bash
root@cphalcon-dev-8.1:/srv# composer install
```

### Composer commands

Composer is configured to build and test the extension. Run a command with:

```bash
composer <command>
```

For example:

```bash
# Run the code sniffer
composer cs
```

The test scripts run through [Talon][talon], the Phalcon test runner (see below):

| Command              | Description                                    |
|----------------------|------------------------------------------------|
| `analyze`            | Run Psalm static analysis                      |
| `cs`                 | Run CodeSniffer (`phpcs`)                       |
| `cs-fix`             | Apply CodeSniffer fixes (`phpcbf`)              |
| `cs-fixer`           | Run PHP CS Fixer (dry run)                      |
| `cs-fixer-fix`       | Apply PHP CS Fixer                             |
| `test-unit`          | Run the unit suite (`talon run unit`)          |
| `test-unit-coverage` | Run the unit suite with Clover coverage        |
| `test-db-mariadb`    | Run the MariaDB database suite                  |
| `test-db-mysql`      | Run the MySQL database suite                    |
| `test-db-pgsql`      | Run the PostgreSQL database suite              |
| `test-db-sqlite`     | Run the SQLite database suite                   |
| `test-db`            | Run all database suites (mariadb, mysql, pgsql, sqlite) |
| `test-all`           | Run every suite                               |

## Check Zephir

Zephir is installed by Composer. Confirm it is available:

```bash
root@cphalcon-dev-8.1:/srv# zephir
```

## Compile Phalcon

Compile the extension with Zephir using the `cpl` alias:

```bash
root@cphalcon-dev-8.1:/srv# cpl
```

## Check Extensions

Verify the extension is loaded:

```bash
root@cphalcon-dev-8.1:/srv# php -m
```

Check for `phalcon` in the list of installed modules.

## Setup Databases

Create a `.env` file in the project root from the Docker template:

```bash
root@cphalcon-dev-8.1:/srv# cp tests/support/_config/.env.docker .env
```

## Environment Variables

The test bootstrap (`tests/bootstrap.php`) loads the `.env` file from the project root. [Talon][talon] reads the connection settings of the databases and services from these variables. The Docker template (`tests/support/_config/.env.docker`) has the correct values for the Docker environment. Each host is the name of a service (see [Service Networking](#service-networking)).

To run the tests without Docker, copy `tests/support/_config/.env.default` instead. It uses `127.0.0.1` for each host. Change the values to match your local services.

| Prefix                | Variables                                            | Service       |
|-----------------------|------------------------------------------------------|---------------|
| `DATA_MYSQL_`         | `HOST`, `PORT`, `USER`, `PASS`, `NAME`, `CHARSET`    | MySQL         |
| `DATA_MARIADB_`       | `HOST`, `PORT`, `USER`, `PASS`, `NAME`, `CHARSET`    | MariaDB       |
| `DATA_POSTGRES_`      | `HOST`, `PORT`, `USER`, `PASS`, `NAME`, `SCHEMA`     | PostgreSQL    |
| `DATA_SQLITE_`        | `NAME` (the path of the database file)               | SQLite        |
| `DATA_REDIS_`         | `HOST`, `PORT`, `NAME` (the database index)          | Redis         |
| `DATA_REDIS_CLUSTER_` | `HOSTS` (a comma-separated `host:port` list), `AUTH` | Redis Cluster |
| `DATA_MEMCACHED_`     | `HOST`, `PORT`, `WEIGHT`                             | Memcached     |
| `DATA_BEANSTALKD_`    | `HOST`, `PORT`                                       | Beanstalkd    |

For example, `DATA_MYSQL_HOST` is the host of the MySQL server.

The Docker template has two more groups of variables:

| Variable         | Description                                                                                                  |
|------------------|--------------------------------------------------------------------------------------------------------------|
| `PROJECT_PREFIX` | The prefix of the container names (default `cphalcon`). Docker Compose reads it from `.env`. To run two copies of the repository at the same time, set a different value in each copy before you start its environment |
| `schema_*`       | The settings of `talon schema`, which generates the schema files in `tests/support/assets/schema`. See [Schema Fixtures][talon-schema] |

Each database PHPUnit configuration in `resources/` sets three more variables:

- `driver`: the database of the suite (`mysql`, `mariadb`, `pgsql`, or `sqlite`)
- `dump_file`: the schema folder that Talon loads into the database, for example `tests/support/assets/schema/mysql`
- `initial_queries`: the SQL that runs when the connection opens (MySQL and MariaDB only)

## Testing with Talon

Phalcon runs its suites through [Talon][talon], the Phalcon test runner. Talon is a harness over PHPUnit: it loads the correct Phalcon build, applies the suite configuration, and runs the tests. In cphalcon it loads the C extension you have compiled. The same runner is used across the Phalcon projects, on both the v5 C extension and the v6 `phalcon/phalcon` package, and Talon uses whichever is present.

Suites are declared in `talon.php` at the repository root. Each suite maps to a PHPUnit configuration under `resources/`:

| Suite     | PHPUnit configuration           |
|-----------|---------------------------------|
| `unit`    | `resources/phpunit.xml.dist`    |
| `mariadb` | `resources/phpunit.mariadb.xml` |
| `mysql`   | `resources/phpunit.mysql.xml`   |
| `pgsql`   | `resources/phpunit.pgsql.xml`   |
| `sqlite`  | `resources/phpunit.sqlite.xml`  |

Run a suite directly with:

```bash
root@cphalcon-dev-8.1:/srv# ./vendor/bin/talon run unit
```

The Composer scripts wrap these calls, so `composer test-unit` runs `talon run unit`. For the full Talon reference, see the [Talon][talon] page.

## Running Tests

### Unit

Run the unit suite:

```bash
root@cphalcon-dev-8.1:/srv# composer test-unit
```

Run a subset by passing PHPUnit arguments after `--`:

```bash
# a single test method by name
root@cphalcon-dev-8.1:/srv# ./vendor/bin/talon run unit -- --filter testConnect

# a specific directory
root@cphalcon-dev-8.1:/srv# ./vendor/bin/talon run unit -- tests/unit/<subdirectory>
```

### Database

Run the database suites:

```bash
root@cphalcon-dev-8.1:/srv# composer test-db-mariadb
root@cphalcon-dev-8.1:/srv# composer test-db-mysql
root@cphalcon-dev-8.1:/srv# composer test-db-pgsql
root@cphalcon-dev-8.1:/srv# composer test-db-sqlite
root@cphalcon-dev-8.1:/srv# composer test-db
```

### Coverage

Generate a Clover coverage report for the unit suite:

```bash
root@cphalcon-dev-8.1:/srv# composer test-unit-coverage
```

## Repository Layout

The table shows the main folders and files of the repository.

| Path                 | Contents                                                                    |
|----------------------|-----------------------------------------------------------------------------|
| `phalcon/`           | The Zephir source code (`.zep` files)                                       |
| `ext/`               | The C source code of the extension                                          |
| `optimizers/`        | Zephir optimizers that connect Zephir calls to C functions in `ext/`        |
| `tests/unit/`        | The unit suite                                                              |
| `tests/database/`    | The database suites                                                         |
| `tests/support/`     | Test helpers, `.env` templates (`_config/`), database schemas (`assets/schema/`) |
| `tests/benchmarks/`  | Benchmarks that compare two builds of the extension                         |
| `resources/`         | PHPUnit and code style configuration, Dockerfiles (`docker/`), old changelogs (`changelogs/`) |
| `build/`             | Tools that build the extension from merged source files                     |
| `bin/`               | Maintenance scripts, for example `genparsers.sh`                            |
| `3rdparty/`          | The Lemon parser generator and third-party licenses                         |
| `.github/`           | CI workflows, issue templates, and the pull request template                |
| `config.json`        | The Zephir project configuration                                            |
| `talon.php`          | The Talon suites                                                            |
| `docker-compose.yml` | The development environment                                                 |
| `CHANGELOG-5.0.md`   | The changelog of the current version                                        |

The folders in `phalcon/` follow the namespaces. For example, `phalcon/Acl/Adapter/Memory.zep` contains the `Phalcon\Acl\Adapter\Memory` class. Most folders in `tests/unit/` have the same names as the folders in `phalcon/`.

### Generated and Hand-Written Code

When you run `cpl`, Zephir writes most of the C code in `ext/` again. Do not edit these files:

- `ext/kernel/`
- `*.zep.c` and `*.zep.h`

Remove changes to these files before you submit a pull request.

Some C files in `ext/` do not have a Zephir source. The `extra-sources` key in `config.json` adds them to the build. Edit these files directly:

| Component          | Path                                |
|--------------------|-------------------------------------|
| PHQL parser        | `ext/phalcon/mvc/model/query/`      |
| Volt parser        | `ext/phalcon/mvc/view/engine/volt/` |
| Annotations parser | `ext/phalcon/annotations/`          |
| ORM helpers        | `ext/phalcon/mvc/model/orm.c`       |
| URL helpers        | `ext/phalcon/mvc/url/utils.c`       |

Each parser folder has a [Lemon][lemon] grammar (`parser.php.lemon`), a [re2c][re2c] scanner (`scanner.re`), and C helper functions (`base.c`). The script `bin/genparsers.sh` generates `parser.c` and `scanner.c` from them. Do not edit `parser.c` or `scanner.c`. After you change a grammar, a scanner, or a `base.c` file, generate the parsers again and compile the extension:

```bash
root@cphalcon-dev-8.1:/srv# bin/genparsers.sh
root@cphalcon-dev-8.1:/srv# cpl
```

## Development

Open your editor and develop in Zephir. After changing any `.zep` file (inside the `phalcon` folder), recompile the extension:

```bash
root@cphalcon-dev-8.1:/srv# cpl
```

Then run the tests:

```bash
root@cphalcon-dev-8.1:/srv# composer test-unit
```

For Zephir documentation, see the [Zephir Docs][zephir_docs].

## Debugging

The development containers do not have gdb or valgrind. To find the cause of a crash or a memory error in the extension, use the debug image in `resources/docker/debug`. The image compiles PHP from source with debug information. It has gdb with the PHP macros (`zbacktrace`, `printzv`), valgrind, and AddressSanitizer (ASan) support. The image is not part of the Compose stack. Build it and start it only when you need it.

The full instructions are in the [debug image README][debug-readme]. The steps below use the `release` variant, which is the closest to the CI build of PHP. Run the commands from the `cphalcon` folder on your host.

**1. Build the image.** The build compiles PHP, so it takes some minutes. The default PHP version is 8.6. For a different version, read the notes in the README first.

```bash
docker build -f resources/docker/debug/Dockerfile \
    -t cphalcon-debug-8.6:release \
    --build-arg PHP_DEBUG=0 \
    --build-arg UID=$(id -u) --build-arg GID=$(id -g) \
    .
```

**2. Start the container.** The Compose stack must be up, because the container uses its network for the services. If you changed `PROJECT_PREFIX`, the network is `<PROJECT_PREFIX>_default`.

```bash
docker run -d --name cphalcon-release-8.6 \
    --network cphalcon_default \
    --add-host host.docker.internal:host-gateway \
    --cap-add SYS_PTRACE --security-opt seccomp=unconfined --ulimit core=-1 \
    -v "$PWD":/srv -w /srv \
    cphalcon-debug-8.6:release
```

**3. Compile the extension with debug information.**

```bash
docker exec cphalcon-release-8.6 resources/docker/debug/build-so debug
```

**4. Run the tests under gdb.** At a crash, `bt` shows the C stack and `zbacktrace` shows the PHP stack.

```bash
docker exec cphalcon-release-8.6 gdb -q -batch \
    -ex "handle SIGPIPE SIGUSR1 SIGUSR2 SIGALRM SIGCHLD SIGTERM SIGINT SIGQUIT nostop noprint pass" \
    -ex run -ex bt -ex zbacktrace \
    --args php -d extension=ext/modules/phalcon.so vendor/bin/phpunit -c resources/phpunit.xml.dist
```

Add `--filter '<test name>'` to the end of the command to run one test.

The README also shows how to:

- use the `debug` variant, which stops at each failed PHP debug check (arginfo, return types)
- use the `asan` variant to find memory errors, such as use after free
- run the tests under valgrind

:::warning[WARNING]
`build-so` generates `ext/` again with the PHP version of the debug image. Do not commit these files. The development containers use the same `ext/modules/phalcon.so` file. When you finish, run `cpl` in a development container before you run the tests there.
:::

To remove the container and the image:

```bash
docker rm -f cphalcon-release-8.6
docker rmi cphalcon-debug-8.6:release
```

## Services

The available services are:

- Beanstalkd
- MariaDB
- Memcached
- MySQL
- PostgreSQL
- Redis (including a Redis Cluster)

Enabled PHP extensions include:

- apcu
- ctype
- curl
- dom
- fileinfo
- gd
- gettext
- gmp
- iconv
- igbinary
- imagick
- intl
- json
- mbstring
- memcached
- mongodb
- msgpack
- opcache
- pdo
- pdo_mysql
- pdo_pgsql
- pdo_sqlite
- phar
- redis
- session
- simplexml
- sqlite3
- tokenizer
- xdebug
- xml
- xmlwriter
- yaml
- zephir_parser
- zip
- zlib

Database schema dumps are located under `tests/support/assets/schema`, in one folder for each database (`mysql`, `pgsql`, `sqlite`).

For questions, join the [Discord][discord] server or our [Discussions][discussions].

&lt;3 Phalcon Team

[cphalcon]: https://github.com/phalcon/cphalcon
[debug-readme]: https://github.com/phalcon/cphalcon/blob/5.0.x/resources/docker/debug/README.md
[discord]: https://phalcon.io/discord
[discussions]: https://phalcon.io/discussions
[docker_compose]: https://docs.docker.com/compose/install/
[docker_installation]: https://docs.docker.com/engine/installation/
[lemon]: https://www.sqlite.org/lemon.html
[phalcon-2]: https://blog.phalcon.io/post/phalcon-2-0-the-future
[re2c]: https://re2c.org
[talon]: /5.24/talon/
[talon-schema]: /5.24/talon/#schema-fixtures
[zephir]: https://zephir-lang.com
[zephir_docs]: https://docs.zephir-lang.com

Source: https://docs.phalcon.io/5.24/testing-environment/index.mdx
