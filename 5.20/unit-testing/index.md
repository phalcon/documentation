---
title: "Unit Testing"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Unit Testing

## Overview

Tests protect your application. A test suite catches regressions before they reach production and documents how your code is meant to behave. This page shows how to test a Phalcon application with [Talon][talon], the Phalcon test harness. Talon fronts PHPUnit and provides ready-to-extend base classes, so you write tests with minimal boilerplate.

This page covers unit tests. For database, functional, and browser tests, and the full list of base classes and helpers, see the [Talon][talon] reference. To build and test the framework itself, see the [Testing environment][testing-environment] guide.

## Install

Add PHPUnit and Talon as development dependencies:

```bash
composer require --dev phpunit/phpunit phalcon/talon
```

Talon runs on both the Phalcon v5 C extension and the Phalcon v6 `phalcon/phalcon` package, and uses whichever is present.

## Directory Layout

Create a `tests` directory with a `Unit` subdirectory and a bootstrap file:

```
public/
src/
tests/
Unit/
bootstrap.php
```

## Autoload the Test Namespace

Map a test namespace to the `tests` directory in `composer.json`:

```json
{
"autoload-dev": {
    "psr-4": {
        "Tests\\": "tests/"
    }
}
}
```

Refresh the autoloader after editing `composer.json`:

```bash
composer dump-autoload
```

## Bootstrap

Boot Talon from `tests/bootstrap.php`. The one-liner form reads its configuration from the environment:

```php
<?php

// tests/bootstrap.php

require __DIR__ . '/../vendor/autoload.php';

use Phalcon\Talon\Settings;
use Phalcon\Talon\Talon;

Talon::boot(Settings::fromEnv());
```

## PHPUnit Configuration

Save a `phpunit.xml.dist` file in the project root. It points PHPUnit at the bootstrap file and the `tests/Unit` directory:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
     bootstrap="tests/bootstrap.php"
     colors="true"
     cacheDirectory=".phpunit.cache">
<testsuites>
    <testsuite name="unit">
        <directory>tests/Unit</directory>
    </testsuite>
</testsuites>
</phpunit>
```

## Write a Test

Unit test classes extend `Phalcon\Talon\PHPUnit\AbstractUnitTestCase`. Beyond the standard PHPUnit assertions, the base class adds reflection helpers such as `callProtectedMethod()`, so you can exercise internal logic without changing its visibility:

```php
<?php

declare(strict_types=1);

namespace Tests\Unit;

use MyApp\Calculator;
use Phalcon\Talon\PHPUnit\AbstractUnitTestCase;

final class CalculatorTest extends AbstractUnitTestCase
{
public function testAdd(): void
{
    $calculator = new Calculator();

    $this->assertSame(5, $calculator->add(2, 3));
}

public function testProtectedRounding(): void
{
    $calculator = new Calculator();

    $this->assertSame(
        3,
        $this->callProtectedMethod($calculator, 'roundValue', 2.5)
    );
}
}
```

`AbstractUnitTestCase` also provides `getProtectedProperty()`, `setProtectedProperty()`, `invokeMethod()`, and filesystem helpers such as `getNewFileName()` and `safeDeleteFile()`. See the [Talon][talon] page for the full list.

## Run the Tests

Run the suite with PHPUnit:

```bash
vendor/bin/phpunit
```

Talon also discovers `phpunit.xml.dist` as the `unit` suite, so you can run it through the Talon runner:

```bash
vendor/bin/talon run
```

A failing assertion is reported by PHPUnit:

```bash
There was 1 failure:

1) Tests\Unit\CalculatorTest::testAdd
Failed asserting that 4 is identical to 5.

/app/tests/Unit/CalculatorTest.php:16

FAILURES!
Tests: 2, Assertions: 2, Failures: 1.
```

## Next Steps

- Database, functional, and browser tests, and the full base-class and trait reference: the [Talon][talon] page.
- Building and testing the Phalcon extension itself: the [Testing environment][testing-environment] guide.

## Resources

- [PHPUnit documentation][phpunit]

[phpunit]: https://phpunit.de
[talon]: /5.20/talon/
[testing-environment]: /5.20/testing-environment/

Source: https://docs.phalcon.io/5.20/unit-testing/index.mdx
