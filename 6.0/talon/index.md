---
title: "Talon"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Talon

## Overview

[Talon][github] is the Phalcon test harness. It is the part of Phalcon that catches the bugs. Talon bootstraps a Phalcon test environment and fronts PHPUnit, so any Phalcon project can write unit, database, functional, and browser tests with minimal boilerplate.

Talon provides three things:

- **Traits** - the framework-neutral core. Each trait carries a group of helpers (reflection, filesystem, database, functional, browser, services).
- **PHPUnit base classes** - ready-to-extend test cases that compose the traits for each kind of test.
- **A command-line runner** - `vendor/bin/talon`, which runs PHPUnit once per mapped suite.

Talon runs on both Phalcon distributions and uses whichever is present:

- **Phalcon v5** - the `ext-phalcon` C extension.
- **Phalcon v6** - the `phalcon/phalcon` PHP package.

The same test suite runs against either one. Talon is used across the Phalcon projects, including [cphalcon][cphalcon], the sample applications, and the PHP framework itself. To see it driving the cphalcon suites, see the [Testing environment][testing-environment] guide.

## Requirements

- PHP 8.1 or later.
- Phalcon, either the v5 C extension or the v6 `phalcon/phalcon` package. See the [installation][installation] page for the extension.
- `symfony/browser-kit` and `symfony/dom-crawler` are pulled in as dependencies and power the browser tests.

## Installation

Install Talon as a development dependency:

```bash
composer require --dev phalcon/talon
```

## Bootstrapping Your Tests

Point PHPUnit at a bootstrap file that boots Talon. The one-liner form reads configuration from the environment:

```php
<?php

// tests/bootstrap.php

require __DIR__ . '/../vendor/autoload.php';

use Phalcon\Talon\Settings;
use Phalcon\Talon\Talon;

Talon::boot(Settings::fromEnv());
```

When you need setup hooks (for example, raising the memory limit or creating output directories), use the bootstrap `Runner`. It runs your callbacks `before` or `after` each bootstrap `Stage` - `Stage::Settings`, `Stage::Environment`, and `Stage::Directories`:

```php
<?php

use Phalcon\Talon\Bootstrap\Runner;
use Phalcon\Talon\Bootstrap\Stage;
use Phalcon\Talon\Settings;

Runner::for(Settings::fromArray(['root' => __DIR__ . '/..']))
->before(Stage::Environment, fn () => ini_set('memory_limit', '512M'))
->after(Stage::Directories, fn ($settings) => mkdir($settings->outputPath('screens'), 0777, true))
->boot();
```

## The Command-Line Runner

`vendor/bin/talon` runs PHPUnit once per mapped suite:

```bash
vendor/bin/talon run            # default suite (unit)
vendor/bin/talon run mysql
vendor/bin/talon run mysql pgsql
vendor/bin/talon run all        # every mapped suite, sequentially
vendor/bin/talon suites         # list mapped suites
vendor/bin/talon schema         # generate the schema artifacts
```

Each suite runs as its own subprocess, so per-suite extensions and environment variables take effect. A single suite forwards its exit code verbatim. Multiple suites print a per-suite summary and exit with the highest code.

### Suite discovery

With zero configuration, suites are discovered from `phpunit*.xml` files in the project root and in `resources/`. `phpunit.xml.dist` becomes the `unit` suite (the default), and `phpunit.mysql.xml` becomes the `mysql` suite.

Projects that need PHP ini flags or environment variables declare a `talon.php` at the project root:

```php
<?php

return [
'php'     => ['extension=ext/modules/phalcon.so'],   // global ini flags, optional
'suites'  => [
    'unit'    => ['config' => 'resources/phpunit.xml.dist'],
    'mariadb' => ['config' => 'resources/phpunit.mariadb.xml'],
    'mysql'   => ['config' => 'resources/phpunit.mysql.xml'],
    'pgsql'   => ['config' => 'resources/phpunit.pgsql.xml'],
    'sqlite'  => ['config' => 'resources/phpunit.sqlite.xml'],
],
'default' => 'unit',
];
```

Per-suite keys:

| Key      | Required | Description                                           |
|----------|----------|-------------------------------------------------------|
| `config` | Yes      | Path to the PHPUnit configuration for the suite       |
| `php`    | No       | Extra PHP ini flags, merged over the global `php`     |
| `env`    | No       | Extra environment variables, merged over global `env` |
| `args`   | No       | Default PHPUnit arguments for the suite               |

### Forwarding arguments to PHPUnit

Options are forwarded to PHPUnit starting at the first option Talon does not recognize itself. Everything after `--` is always forwarded verbatim:

```bash
vendor/bin/talon run unit -- --filter FooTest --testdox
```

## Test Case Base Classes

Each base class composes the relevant traits for one kind of test. They live in the `Phalcon\Talon\PHPUnit` namespace:

| Base class                   | For                 | Highlights                                                        |
|------------------------------|---------------------|-------------------------------------------------------------------|
| `AbstractUnitTestCase`       | Unit tests          | Reflection and filesystem helpers                                 |
| `AbstractDatabaseTestCase`   | Database tests      | `assertInDatabase()`; driver from the `driver` env                |
| `AbstractFunctionalTestCase` | Functional tests    | Dispatch a route through your application and assert the result   |
| `AbstractBrowserTestCase`    | Multi-request flows | In-process browser; cookies and session preserved across requests |
| `AbstractServicesTestCase`   | Redis / Memcached   | Cache helpers; auto-skip when the backend is unreachable          |

### Unit tests

```php
<?php

use Phalcon\Talon\PHPUnit\AbstractUnitTestCase;

final class CalculatorTest extends AbstractUnitTestCase
{
public function testInternal(): void
{
    $this->assertSame(5, $this->callProtectedMethod(new Calculator(), 'add', 2, 3));
}
}
```

`AbstractUnitTestCase` provides `callProtectedMethod()`, `getProtectedProperty()`, `setProtectedProperty()`, `invokeMethod()`, `getNewFileName()`, `safeDeleteFile()`, `safeDeleteDirectory()`, `assertFileContentsContains()`, `checkExtensionIsLoaded()`, and `checkPhalconAvailable()`.

### Database tests

```php
<?php

use Phalcon\Talon\PHPUnit\AbstractDatabaseTestCase;

final class UserTest extends AbstractDatabaseTestCase
{
public function testSeeded(): void
{
    $this->assertInDatabase('users', ['email' => 'john.connor@skynet.dev']);
}
}
```

The driver comes from the `driver` environment variable (`sqlite`, `mysql`, `mariadb`, or `pgsql`). Credentials come from `Settings`, read from environment variables by default.

Each driver reads its own block, so MySQL and MariaDB are configured independently and can point at different servers:

| Driver    | Variable               | Default     | Notes                              |
|-----------|------------------------|-------------|------------------------------------|
| `mariadb` | `DATA_MARIADB_HOST`    | `127.0.0.1` |                                    |
| `mariadb` | `DATA_MARIADB_PORT`    | `3306`      |                                    |
| `mariadb` | `DATA_MARIADB_NAME`    | `talon`     | Database name                      |
| `mariadb` | `DATA_MARIADB_USER`    | `root`      |                                    |
| `mariadb` | `DATA_MARIADB_PASS`    | empty       |                                    |
| `mariadb` | `DATA_MARIADB_CHARSET` | `utf8mb4`   |                                    |
| `mysql`   | `DATA_MYSQL_HOST`      | `127.0.0.1` |                                    |
| `mysql`   | `DATA_MYSQL_PORT`      | `3306`      |                                    |
| `mysql`   | `DATA_MYSQL_NAME`      | `talon`     | Database name                      |
| `mysql`   | `DATA_MYSQL_USER`      | `root`      |                                    |
| `mysql`   | `DATA_MYSQL_PASS`      | empty       |                                    |
| `mysql`   | `DATA_MYSQL_CHARSET`   | `utf8mb4`   |                                    |
| `pgsql`   | `DATA_POSTGRES_HOST`   | `127.0.0.1` |                                    |
| `pgsql`   | `DATA_POSTGRES_PORT`   | `5432`      |                                    |
| `pgsql`   | `DATA_POSTGRES_NAME`   | `talon`     | Database name                      |
| `pgsql`   | `DATA_POSTGRES_USER`   | `postgres`  |                                    |
| `pgsql`   | `DATA_POSTGRES_PASS`   | empty       |                                    |
| `pgsql`   | `DATA_POSTGRES_SCHEMA` | empty       | Sets the connection search path    |
| `sqlite`  | `DATA_SQLITE_NAME`     | `:memory:`  | A file path, or `:memory:`         |

Two further variables apply to every driver:

| Variable          | Default | Notes                                                                                     |
|-------------------|---------|-------------------------------------------------------------------------------------------|
| `dump_file`       | empty   | Schema artifact loaded on the first connection. A dialect directory, or a flat `.sql` file |
| `initial_queries` | empty   | SQL run immediately after connecting, before any other statement                           |

MariaDB connects through `pdo_mysql`, so `Settings::getDatabaseDsn('mariadb')` returns a DSN carrying the `mysql:` prefix. No additional PHP extension is required.

`DATA_POSTGRES_SCHEMA` is applied to the connection as `SET search_path` immediately after connecting, before any `initial_queries` run.

### Functional tests

Talon never owns your container. Hand it your configured application through an `appFactory()`:

```php
<?php

use Phalcon\Talon\PHPUnit\AbstractFunctionalTestCase;

final class HomeTest extends AbstractFunctionalTestCase
{
protected function appFactory(): callable
{
    // returns a configured Application or Micro
    return fn () => require __DIR__ . '/../app/bootstrap.php';
}

public function testHome(): void
{
    $this->dispatch('/');
    $this->assertController('index');
    $this->assertResponseContentContains('Welcome');
}
}
```

### Browser tests

For multi-request flows - login, forms, redirects - `AbstractBrowserTestCase` drives your application **in-process**, with no web server, through a [symfony/browser-kit][browser-kit] bridge. Cookies and the session are kept across requests, and redirects are followed automatically:

```php
<?php

use Phalcon\Talon\PHPUnit\AbstractBrowserTestCase;

final class LoginTest extends AbstractBrowserTestCase
{
protected function appFactory(): callable
{
    return fn () => require __DIR__ . '/../app/bootstrap.php';
}

public function testLogin(): void
{
    $this->visitPage('/session/login');
    $this->fillField('email', 'sarah.connor@skynet.dev');
    $this->fillField('password', 'password1');
    $this->pressButton('Log In');

    $this->assertPageContainsText('Search users');
}
}
```

The browser verbs are `visitPage`, `fillField`, `selectOption`, `clickLink`, `pressButton`, and `getCookie`/`setCookie`. The assertions are `assertPageContainsText` and `assertPageMissingText`. Browser tests require `symfony/browser-kit` and `symfony/dom-crawler`, which Talon installs.

### Service tests

```php
<?php

use Phalcon\Talon\PHPUnit\AbstractServicesTestCase;

final class CacheTest extends AbstractServicesTestCase
{
public function testRedis(): void
{
    $this->setRedisKey('key', 'value');
    $this->assertSame('value', $this->getRedisKey('key'));
}
}
```

Service tests skip automatically when the backend (Redis or Memcached) is unreachable, so the suite stays green on a host without those services.

The backends read these environment variables:

| Service        | Variable                   | Default     | Notes                                  |
|----------------|----------------------------|-------------|----------------------------------------|
| `redis`        | `DATA_REDIS_HOST`          | `127.0.0.1` |                                        |
| `redis`        | `DATA_REDIS_PORT`          | `6379`      |                                        |
| `redis`        | `DATA_REDIS_NAME`          | `0`         | The database index, not a name         |
| `redisCluster` | `DATA_REDIS_CLUSTER_HOSTS` | empty       | Comma-separated `host:port` list       |
| `redisCluster` | `DATA_REDIS_CLUSTER_AUTH`  | empty       |                                        |
| `memcached`    | `DATA_MEMCACHED_HOST`      | `127.0.0.1` |                                        |
| `memcached`    | `DATA_MEMCACHED_PORT`      | `11211`     |                                        |
| `memcached`    | `DATA_MEMCACHED_WEIGHT`    | `0`         | Server weight passed to `addServer()`  |
| `beanstalk`    | `DATA_BEANSTALKD_HOST`     | empty       |                                        |
| `beanstalk`    | `DATA_BEANSTALKD_PORT`     | empty       |                                        |

`ServicesTrait` provides helpers for Redis and Memcached only. The `redisCluster` and `beanstalk` options are read and exposed through `Settings::getServiceOptions()` for a project to consume, but Talon ships no assertions for them.

### Mocking a resultset

To assert against model logic without a database, mock a resultset with `ResultSetTrait`:

```php
<?php

use Phalcon\Talon\Traits\ResultSetTrait;
use PHPUnit\Framework\TestCase;

final class ReportTest extends TestCase
{
use ResultSetTrait;

public function testReport(): void
{
    $resultset = $this->mockResultSet([$modelA, $modelB]);

    $this->assertCount(2, $resultset);
}
}
```

## Schema Fixtures

A schema fixture is a class that declares the DDL for one table, per dialect. Talon generates the SQL artifacts from those classes, and your tests use the same classes to create, truncate, and populate the table.

- **MySQL and MariaDB** share one set of statements. MariaDB uses the MySQL dialect, so there is no separate method for it.
- **PostgreSQL** has its own set.
- **SQLite** has its own set.

Extend `Phalcon\Talon\Database\Schema\AbstractSchema` and declare the table name and the statements for each dialect. The three per-dialect methods are abstract, so a new dialect cannot be forgotten:

```php
<?php

use Phalcon\Talon\Database\Schema\AbstractSchema;

final class InvoicesSchema extends AbstractSchema
{
protected string $table = 'co_invoices';

public function insert(int $id, string $title, float $total): int
{
    return $this->execute(
        'INSERT INTO co_invoices (inv_id, inv_title, inv_total) '
        . 'VALUES (:id, :title, :total)',
        [':id' => $id, ':title' => $title, ':total' => $total]
    );
}

protected function getStatementsMysql(): array
{
    return [
        'CREATE TABLE `co_invoices` ('
        . '`inv_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, '
        . '`inv_title` VARCHAR(100) NULL, '
        . '`inv_total` DECIMAL(10,2) NOT NULL, '
        . 'PRIMARY KEY (`inv_id`)'
        . ') ENGINE=InnoDB;',
    ];
}

protected function getStatementsPgsql(): array
{
    return [
        'CREATE TABLE co_invoices ('
        . 'inv_id SERIAL PRIMARY KEY, '
        . 'inv_title VARCHAR(100) NULL, '
        . 'inv_total NUMERIC(10,2) NOT NULL'
        . ');',
    ];
}

protected function getStatementsSqlite(): array
{
    return [
        'CREATE TABLE co_invoices ('
        . 'inv_id INTEGER PRIMARY KEY AUTOINCREMENT, '
        . 'inv_title TEXT NULL, '
        . 'inv_total REAL NOT NULL'
        . ');',
    ];
}
}
```

Four rules govern the statement lists:

| Rule | Detail |
|------|--------|
| Creation statements only | Do not write a `DROP TABLE` for the declared table. The generator prepends one from the table name |
| An empty list means absent | The table does not exist in that dialect. It is skipped entirely and gets no manifest entry |
| One fixture, one table | The table name is the artifact file name and the manifest key. Two fixtures declaring the same table throw `SchemaTableDuplicate` |
| `insert()` is yours | The contract covers `create()`, `drop()`, and `clear()`, never the data shape, so each fixture types its own insert signature |

`clear()` empties the table, but do not assert on its return value. MySQL and PostgreSQL clear with `TRUNCATE`, which reports no affected rows, so both return `0`. Only SQLite's `DELETE` returns a count.

A fixture whose statements create a second table receives no generated `DROP` for that table. Write the drop yourself, or split the fixture in two.

Override `getDependencies()` to declare the tables that must exist first:

```php
<?php

use Phalcon\Talon\Database\Schema\AbstractSchema;

final class InvoiceLinesSchema extends AbstractSchema
{
protected string $table = 'co_invoice_lines';

/**
 * @return list<string>
 */
public function getDependencies(): array
{
    return ['co_invoices'];
}

// getStatementsMysql(), getStatementsPgsql(), getStatementsSqlite() omitted
}
```

### Generating the artifacts

```bash
vendor/bin/talon schema         # every dialect
vendor/bin/talon schema mysql   # one dialect
```

The command is driven by five settings, read from the environment or from `Settings::fromArray()`:

| Setting            | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| `schema_source`    | Directory holding the fixture classes, relative to the project root     |
| `schema_namespace` | Namespace prefix for those classes                                      |
| `schema_output`    | Directory the artifacts are written to, relative to the project root    |
| `schema_pre`       | Class emitted before every table, for session setup or schema creation  |
| `schema_post`      | Class emitted after every table, closing whatever `schema_pre` opened   |

`schema_pre` and `schema_post` are ordinary `AbstractSchema` subclasses with an empty `$table`. Use them for statements that belong to the load as a whole, such as `SET FOREIGN_KEY_CHECKS=0` on MySQL or `CREATE SCHEMA IF NOT EXISTS` on PostgreSQL.

Each dialect is written to its own directory:

```text
schema/mysql/_preSchema.sql     session setup
schema/mysql/co_invoices.sql    the table's DROP, then its creation statements
schema/mysql/manifest.json      load order, dependencies, per-dialect presence
schema/mysql/_postSchema.sql    closes what _preSchema opened
```

File names follow your table names, so a schema-qualified name keeps its dot: `private.co_orders.sql`. The manifest is generated, never hand-edited. When it is wrong, correct a fixture class and regenerate.

### Loading a schema

Point `dump_file` at the dialect directory. `AbstractDatabaseTestCase` loads it on the first connection, in this order: `_preSchema.sql`, the manifest's tables, `_postSchema.sql`.

```xml
<env name="dump_file" value="resources/schema/mysql"/>
```

`Connection::loadSchema()` also accepts a single flat `.sql` file, so a project can move to the directory format on its own schedule.

### Rebuilding one table

Loading the whole schema once and truncating between tests remains the default. `addTable()` is the escape hatch for a test that needs one table rebuilt:

```php
<?php

use Phalcon\Talon\PHPUnit\AbstractDatabaseTestCase;

final class InvoiceRebuildTest extends AbstractDatabaseTestCase
{
public function testRebuild(): void
{
    $this->addTable('co_invoices');

    $this->assertTrue($this->getConnection()->tableExists('co_invoices'));
}
}
```

`addTable()` is standalone only, and that is enforced. A declared dependency that does not yet exist throws `SchemaDependencyMissing`. Dependencies are never resolved for you, so call the method once per table, dependency first:

```php
$this->addTable('co_invoices');       // the dependency
$this->addTable('co_invoice_lines');  // the dependent
```

The restriction is deliberate. `schema_pre` is in effect only during the bulk load. By the time a test runs, `schema_post` has restored `FOREIGN_KEY_CHECKS=1`, so a table with foreign keys that loads correctly in bulk can fail on its own, on MySQL, for reasons the calling test does not suggest.

## Traits

The traits are the core public API. Compose them directly when you do not want the base classes. They live in the `Phalcon\Talon\Traits` namespace:

| Trait                       | Provides                                                                                                                                                   |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ReflectionTrait`           | `callProtectedMethod`, `getProtectedProperty`, `setProtectedProperty`, `invokeMethod`                                                                      |
| `FileSystemTrait`           | `getNewFileName`, `safeDeleteFile`, `safeDeleteDirectory`, `assertFileContentsContains`, `assertFileContentsEqual`                                         |
| `DatabaseTrait`             | `assertInDatabase`, `assertNotInDatabase`, `getConnection`, `getDialect`, `getDriver`, `addTable`                                                           |
| `FunctionalTrait`           | `dispatch`, `getContent`                                                                                                                                   |
| `FunctionalAssertionsTrait` | `assertController`, `assertAction`, `assertResponseCode`, `assertRedirectTo`, `assertResponseContentContains`, `assertHeader`, `assertDispatchIsForwarded` |
| `BrowserTrait`              | `visitPage`, `fillField`, `selectOption`, `clickLink`, `pressButton`, `getCookie`, `setCookie`                                                             |
| `BrowserAssertionsTrait`    | `assertPageContainsText`, `assertPageMissingText`                                                                                                          |
| `ServicesTrait`             | `setRedisKey`, `getRedisKey`, `hasRedisKey`, `sendRedisCommand`, `setMemcachedKey`, `getMemcachedKey`, `clearMemcached`                                    |
| `ResultSetTrait`            | `mockResultSet`                                                                                                                                            |

## Configuration

Configuration is held in a `Settings` object. The one-liner bootstrap uses `Settings::fromEnv()`, which reads environment variables. To configure Talon in code, pass `Settings::fromArray()` to `Talon::boot()`, or override `getSettings()` in a project base class:

```php
<?php

use Phalcon\Talon\Settings;
use Phalcon\Talon\Talon;

Talon::boot(
Settings::fromArray(
    [
        'root' => dirname(__DIR__),
        'db'   => [
            'mysql'  => [
                'host'     => '127.0.0.1', 
                'port'     => 3306, 
                'dbname'   => 'app', 
                'username' => 'root', 
                'password' => '',
            ],
            'sqlite' => [
                'dbname' => ':memory:',
            ],
        ],
    ]
)
);
```

## Beyond PHPUnit

The traits carry no PHPUnit base-class requirement for their non-assertion helpers, so [Pest][pest] (through `uses(...)`) and other runners can consume them too. Pest and Codeception adapters are planned for a future release.

## References

- [Talon - GitHub Repository][github]
- [Talon on Packagist][packagist]
- [PHPUnit][phpunit]
- [Pest][pest]
- [Symfony BrowserKit][browser-kit]
- [Testing environment][testing-environment]

[browser-kit]: https://symfony.com/doc/current/components/browser_kit.html
[cphalcon]: https://github.com/phalcon/cphalcon
[github]: https://github.com/phalcon/talon
[installation]: /6.0/installation/
[packagist]: https://packagist.org/packages/phalcon/talon
[pest]: https://pestphp.com
[phpunit]: https://phpunit.de
[testing-environment]: /6.0/testing-environment/

Source: https://docs.phalcon.io/6.0/talon/index.mdx
