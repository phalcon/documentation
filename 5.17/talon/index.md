---
title: "Talon"
version: "5.17"
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
    'unit'   => ['config' => 'resources/phpunit.xml.dist'],
    'mysql'  => ['config' => 'resources/phpunit.mysql.xml'],
    'pgsql'  => ['config' => 'resources/phpunit.pgsql.xml'],
    'sqlite' => ['config' => 'resources/phpunit.sqlite.xml'],
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

The driver comes from the `driver` environment variable (`sqlite`, `mysql`, or `pgsql`). Credentials come from `Settings`, read from environment variables by default.

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

## Traits

The traits are the core public API. Compose them directly when you do not want the base classes. They live in the `Phalcon\Talon\Traits` namespace:

| Trait                       | Provides                                                                                                                                                   |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ReflectionTrait`           | `callProtectedMethod`, `getProtectedProperty`, `setProtectedProperty`, `invokeMethod`                                                                      |
| `FileSystemTrait`           | `getNewFileName`, `safeDeleteFile`, `safeDeleteDirectory`, `assertFileContentsContains`, `assertFileContentsEqual`                                         |
| `DatabaseTrait`             | `assertInDatabase`, `assertNotInDatabase`, `getConnection`                                                                                                 |
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
[installation]: /5.17/installation/
[packagist]: https://packagist.org/packages/phalcon/talon
[pest]: https://pestphp.com
[phpunit]: https://phpunit.de
[testing-environment]: /5.17/testing-environment/

Source: https://docs.phalcon.io/5.17/talon/index.mdx
