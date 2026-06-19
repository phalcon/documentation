# Testing Environment

- - -

# Overview

Phalcon v6 is a pure PHP framework, so contributing to it requires nothing more than a working PHP environment and
[Composer][composer]. There is no extension to compile and no Zephir toolchain to set up. The test suite is built on
[PHPUnit][phpunit] and is kept in sync with the [cphalcon][cphalcon] suite, so a test written here can run against the C
extension and vice versa.

# The Challenge

Building a feature-rich framework necessitates a comprehensive development environment supporting various features and
associated services. For example, validating ORM functionality across different database adapters (e.g., `MySQL`,
`Postgresql`, `Sqlite`) requires the installation of relevant PHP extensions and databases. Similarly, to execute the
testing suite for Phalcon's extensive functionality, developers must have access to services such as Redis and
Memcached.

Considering the diverse PHP versions (e.g., PHP 8.1, 8.2, 8.3, 8.4), setting all of this up by hand becomes intricate.

# Solution

To streamline these requirements we use Docker. With just a few commands, developers can seamlessly contribute to
Phalcon and execute tests promptly, with all the required extensions and services already configured.

# Installation

Before you begin, ensure that Docker is installed on your machine. If you haven't installed it yet, follow the
instructions [here][docker_installation]. Additionally, you'll need `docker compose` - installation details can be
found [here][docker_compose].

# Running the Development Environment

1. Fork the Repository
   Start by forking the [phalcon][phalcon] repository to your GitHub account. If you haven't done this already,
   navigate to the [phalcon][phalcon] page in your browser and click the Fork button located at the top right of the
   screen.

2. Clone the Fork
   Clone the forked repository to a directory of your choice. The example below assumes the GitHub account is `niden`;
   replace it with your own account.

```bash
git clone git@github.com:niden/phalcon
```

3. Build the Environment
   Navigate to the phalcon folder (or your chosen repository location) and build the containers with the following
   command:

```bash
docker compose build 
```

This process may take some time, depending on your machine's specifications. It is not required frequently, only when
changes occur in the dockerfiles or when you choose to rebuild your containers.

# Starting the Environment

Once all the containers have been built, initiate the environment using the following command:

```bash
docker compose up -d
```

The above command, utilizing the `docker-compose.yml` file from the repository, runs the environment in the background,
allowing you to reuse your terminal. To stop the environment:

```bash
docker compose down
```

# Environment Configuration

## Entering the Environment

To enter the environment, specify the desired PHP version environment. The following environments are available:

`phalcon-dev-8.1`
`phalcon-dev-8.2`
`phalcon-dev-8.3`
`phalcon-dev-8.4`

For example, to enter the PHP 8.1 environment:

```bash
docker exec -it phalcon-dev-8.1 /bin/bash
```

You'll be prompted with:

```bash
root@phalcon-dev-81:/srv#
```

You are now inside the environment with all the necessary extensions and services. To exit, type `exit` and press
Enter:

```bash
root@phalcon-dev-81:/srv# exit
```

## Composer

Before proceeding, install the dependencies:

```bash
root@phalcon-dev-81:/srv# composer install
```

### Composer commands

Composer is configured to facilitate testing. Execute the commands as follows:

```bash
composer <command>
```

Example:

```bash
# Run the code sniffer
composer cs
```

| Command          | Description                          |
|------------------|--------------------------------------|
| `analyze`        | Run static analysis (`phpstan`)      |
| `cs`             | Run CodeSniffer (`phpcs`)            |
| `cs-fix`         | Run CodeSniffer fix (`phpcbf`)       |
| `test-unit`      | Run unit tests                       |
| `test-db-mysql`  | Run MySQL database tests             |
| `test-db-pgsql`  | Run PostgreSQL database tests        |
| `test-db-sqlite` | Run SQLite database tests            |
| `test-db`        | Run all database tests               |
| `test-all`       | Run unit and all database tests      |

## Setup Databases

The repository ships with a `.env` file in the project root that is preconfigured for the Docker services. The database
hosts point to the service containers (`phalcon-mysql`, `phalcon-postgres`, `phalcon-redis`, etc.), so no additional
configuration is required to run the test suite inside the environment.

# Running Tests

## Unit

```bash
root@phalcon-dev-81:/srv# composer test-unit
```

To run a single test file or directory, call PHPUnit directly:

```bash
root@phalcon-dev-81:/srv# vendor/bin/phpunit -c resources/phpunit.xml.dist tests/unit/some/folder/SomeTest.php
```

## Database

```bash
root@phalcon-dev-81:/srv# composer test-db-mysql
root@phalcon-dev-81:/srv# composer test-db-pgsql
root@phalcon-dev-81:/srv# composer test-db-sqlite
root@phalcon-dev-81:/srv# composer test-db
```

# Development

Open your preferred editor and start developing in PHP. Since Phalcon v6 is pure PHP, there is no compilation step:
edit the files under the `src/` folder and run the tests directly.

```bash
root@phalcon-dev-81:/srv# composer test-unit
```

All code must pass the static analyzer and the coding standard checks (PSR-12) before it can be merged:

```bash
root@phalcon-dev-81:/srv# composer analyze
root@phalcon-dev-81:/srv# composer cs
```

# Services

The available services are:

- MariaDB
- Memcached
- MySQL
- PostgreSQL
- Redis (including a Redis cluster)

Database schema dumps are located under `tests/support/assets/schema/`.

For questions, join the [Discord][discord] server or our [Discussions][discussions].

<3 Phalcon Team

[composer]: https://getcomposer.org

[phalcon]: https://github.com/phalcon/phalcon

[cphalcon]: https://github.com/phalcon/cphalcon

[phpunit]: https://phpunit.de

[discord]: https://phalcon.io/discord

[docker_installation]: https://docs.docker.com/engine/installation/

[docker_compose]: https://docs.docker.com/compose/install/

[discussions]: https://phalcon.io/discussions
