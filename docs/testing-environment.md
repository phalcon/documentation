# Testing Environment
- - -

# Overview
Phalcon, historically characterized by a modest development community and limited pull requests, faced challenges due to developers' unfamiliarity with C, the language in which the framework was originally written. To encourage contributions, we introduced [Zephir][zephir], a language closely resembling PHP and Javascript syntax. In [2003][2003], we unveiled this initiative, subsequently releasing the language and transitioning all Phalcon code to Zephir. Since then, Zephir has been integral to Phalcon's development.

# The Challenge
Building a feature-rich framework necessitates a comprehensive development environment supporting various features and associated services. For example, validating ORM functionality across different database adapters (e.g., `MySQL`, `Postgresql`, `Sqlite`) requires the installation of relevant PHP extensions and databases. Similarly, to execute the testing suite for Phalcon's extensive functionality, developers must install numerous extensions and services such as Redis and Memcached.

Considering the diverse PHP versions (e.g., PHP 8.0, 8.1), Phalcon's development becomes intricate due to these prerequisites.

# Solution
Formerly relying on `nanobox," a solution now discontinued, we intensified our efforts, adopting Docker to streamline development requirements. With just a few commands, developers can seamlessly contribute to Phalcon and execute tests promptly.

This Docker-based approach simplifies the setup, ensuring a more accessible and efficient development process for Phalcon.


# Installation
Before you begin, ensure that docker is installed on your machine. If you haven't installed it yet, follow the instructions [here][docker_installation]. Additionally, you'll need `docker compose` - installation details can be found [here][docker_compose].

# Running the Development Environment
1. Fork the Repository
   Start by forking the [cphalcon][cphalcon] repository to your GitHub account. If you haven't done this already, navigate to the [cphalcon][cphalcon] page in your browser and click the Fork button located at the top right of the screen.

2. Clone the Fork
   Clone the forked repository to a directory of your choice. The example below assumes the GitHub account is `niden`; replace it with your own account.

```bash
git clone git@github.com:niden/cphalcon
```

3. Build the Environment
   Navigate to the cphalcon folder (or your chosen repository location) and build the containers with the following command:

```bash
docker compose build 
```

This process may take some time, depending on your machine's specifications. It is not required frequently, only when changes occur in the dockerfiles or when you choose to rebuild your containers.

# Starting the Environment
Once all the containers have been built, initiate the environment using the following command:

```bash
docker compose up -d
```

The above command, utilizing the `docker-compose.yml` file from the repository, runs the environment in the background, allowing you to reuse your terminal. To stop the environment, press `Ctrl-C` if the `-d` flag was not used. If `-d` was used, inform Docker that you wish to halt the environment:

```bash
docker compose down
```

# Environment Configuration
## Exposed Ports
With the above command, service containers expose ports to your host as detailed in the table below:

| Service    | Port |
|------------|------|
| `mysql`    | 3306 |
| `postgres` | 5432 |
| `redis`    | 6379 |

This setup is convenient for most developers. However, for those concurrently working on multiple projects using the same services (e.g., `mysql`), this configuration may hinder a second environment's functionality, as the port on the host is already in use.

## Isolated Configuration
Alternatively, use the `docker-compose-local.yml` file, which does not expose ports from service containers to the host, ensuring isolation:

```bash
docker compose -f docker-compose-local.yml up -d
```

In this case, you'll need to determine the IP address of a specific service container to connect to it. For example, to connect to the mysql container:

```bash
docker inspect \
  -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
  cphalcon-mysql
```

Identify the correct IP address and connect accordingly:

```bash
mysql -uroot -p -h172.18.0.4
```

## Entering the Environment
To enter the environment, specify the desired PHP version environment. Three environments are available:

`cphalcon-8.0`
`cphalcon-8.1`
`cphalcon-8.2`

For example, to enter the PHP 8.1 environment:

```bash
docker exec -it cphalcon-8.1 /bin/bash
```

You'll be prompted with:

```bash
root@cphalcon-81:/srv#
```

You are now inside the environment with all the necessary extensions and services. To exit, type `exit` and press Enter:

```bash
root@cphalcon-81:/srv# exit
```

## Aliases
The development environments include predefined aliases in the `.bashrc` file located under the `docker/` folder and the corresponding PHP version subfolder. Some notable aliases include:

| Alias              | Command                                                       |
|--------------------|---------------------------------------------------------------|
| `g`                | git                                                           |
| `h`                | history                                                       |
| `l`                | ls -lF ${colorflag}                                           |
| `ll`               | LC_ALL="C.UTF-8" ls -alF                                      |
| `zephir`           | ./zephir                                                      |
| `zf`               | ./zephir fullclean                                            |
| `zg`               | ./zephir generate                                             |
| `zs`               | ./zephir stubs                                                |
| `cpl`              | zf && zg && cd ext/ && ./install && ..                        |
| `codecept`         | php -d extension=ext/modules/phalcon.so ./vendor/bin/codecept |

## Composer
Before proceeding, update Composer:

```bash
root@cphalcon-81:/srv# composer install
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

| Command            | Description                    |
|--------------------|--------------------------------|
| `analyze`          | Run Psalm (`psalm`)            |
| `cs`               | Run CodeSniffer (`phpcs`)      |
| `cs-fix`           | Run CodeSniffer fix (`phpcbf`) |
| `test-unit`        | Run unit tests                 |
| `test-cli`         | Run cli tests                  |
| `test-integration` | Run integration tests          |
| `test-db-common`   | Run common database tests      |
| `test-db-mysql`    | Run mysql database tests       |
| `test-db-pgsql`    | Run pgsql database tests       |
| `test-db-sqlite`   | Run sqlite tests               |
| `test-db`          | Run all database tests         |
| `test-all`         | Run all tests                  |

## Check Zephir
`Zephir` is installed by `composer`. Ensure that the latest version is installed by executing:

```bash
root@cphalcon-81:/srv# zephir
```
The output should resemble the formatted screen provided in the documentation.

## Compile Phalcon
Compile Phalcon using Zephir:

```bash
root@cphalcon-81:/srv# cpl
```

## Check Extensions
Verify that extensions are correctly installed by typing:

```bash
root@cphalcon-81:/srv# php -m
```

Check for phalcon in the list of installed modules.

## Setup Databases
Create a `.env` file in the project root:

```bash
root@cphalcon-81:/srv# cp tests/_config/.env.docker .env
```

# Running Tests
## Unit
Build the Codeception base classes before running unit tests:

```bash
root@cphalcon-81:/srv# codecept build
```

Run unit tests:

```bash
root@cphalcon-81:/srv# test-unit
```
Execute tests from a specific folder:

```bash
root@cphalcon-81:/srv# codecept run tests/unit/some/folder/
```
Execute a single test:

```bash
root@cphalcon-81:/srv# codecept run tests/unit/some/folder/some/test/file.php
```

## Database
Run database-related tests using aliases:

```bash
root@cphalcon-81:/srv# test-db-common
root@cphalcon-81:/srv# test-db-mysql
root@cphalcon-81:/srv# test-db-pgsql
root@cphalcon-81:/srv# test-db-sqlite
root@cphalcon-81:/srv# test-db       
```

# Development
Open your preferred editor and start developing in Zephir. For any changes to `.zep` files (inside the `phalcon` folder), recompile the extension:

```bash
root@cphalcon-81:/srv# cpl
```
Run tests after making changes:

```bash
root@cphalcon-81:/srv# codecept run tests/unit/somefolder/somecestfile:sometest
```
For Zephir documentation, refer to the [Zephir Docs][zephir_docs] site.

# Services
The available services are:

- Memcached
- MySQL
- PostgreSQL
- Redis

Enabled PHP extensions include:

- apcu
- ctype
- curl
- dom
- fileinfo
- gd
- gmp
- gettext
- imagick
- iconv
- igbinary
- intl
- json
- memcached
- mbstring
- mongodb
- opcache
- phar
- pdo
- pdo_mysql
- pdo_pgsql
- pdo_sqlite
- redis
- session
- simplexml
- sqlite3
- tokenizer
- yaml
- zephir_parser
- xdebug
- xml
- xmlwriter
- zip
- zlib

Database dumps are located under `tests/_data/assets/schemas`

For questions, join the [Discord][discord] server or our [Discussions][discussions].

<3 Phalcon Team

[2003]: https://blog.phalcon.io/post/phalcon-2-0-the-future
[cphalcon]: https://github.com/phalcon/cphalcon
[codeception]: https://codeception.com
[codeception_commands]: https://codeception.com/docs/reference/Commands
[codeception_introduction]: https://codeception.com/docs/01-Introduction
[discord]: https://phalcon.io/discord
[docker_installation]: https://docs.docker.com/engine/installation/
[docker_compose]: https://docs.docker.com/compose/install/
[discussions]: https://phalcon.io/discussions
[zephir]: https://zephir-lang.com
[zephir_docs]: https://docs.zephir-lang.com
