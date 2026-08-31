---
title: "Service Locator"
version: "5.18"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Service Locator

## Overview

`Phalcon\Support\AbstractLocator` is an abstract base class for building service locators on top of a dependency injection container. A locator maps short names (for example `session`, `token`) to fully-qualified class names, validates that each class implements a required interface, and resolves shared instances from the container on demand.

It backs the `Phalcon\Auth` locators - `Phalcon\Auth\Guard\GuardLocator`, `Phalcon\Auth\Adapter\AdapterLocator`, and `Phalcon\Auth\Access\AccessLocator` - and can be extended for any "named service" use case.

The constructor accepts either container implementation:

- `Phalcon\Contracts\Container\Service\Collection` - the modern `Phalcon\Container\Container`.
- `Phalcon\Di\DiInterface` - the legacy `Phalcon\Di\Di`.

Any other type throws a `TypeError`.

---

## Building a Locator

Extend `AbstractLocator` and implement the three abstract methods:

- `getServices()` - the default `name => class-string` map.
- `getInterfaceClass()` - the interface every registered class must implement.
- `getExceptionClass()` - the exception class thrown on errors.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Support\AbstractLocator;

interface PaymentGateway
{
public function charge(int $amountCents): bool;
}

final class PaymentGatewayLocator extends AbstractLocator
{
protected function getServices(): array
{
    return [
        'stripe' => StripeGateway::class,
        'paypal' => PaypalGateway::class,
    ];
}

protected function getInterfaceClass(): string
{
    return PaymentGateway::class;
}

protected function getExceptionClass(): string
{
    return PaymentException::class;
}
}

$container = new Container();
$locator   = new PaymentGatewayLocator($container);

$gateway = $locator->newInstance('stripe');
```

---

## Resolving Services

`newInstance()` resolves a shared instance from the container by looking up the class-string mapped to the given name. The service must be available in the container; otherwise the locator throws its configured exception class.

```php
<?php

$gateway = $locator->newInstance('paypal');
```

When the container is a `Phalcon\Di\DiInterface`, the instance is resolved with `getShared()`. When it is a `Phalcon\Container\Container`, it is resolved with `get()`.

---

## Registering and Inspecting Services

Use `register()` to add a mapping or override an existing one. The definition must implement the interface returned by `getInterfaceClass()`; otherwise the configured exception is thrown.

```php
<?php

$locator->register('adyen', AdyenGateway::class);

$locator->has('adyen');          // true
$locator->getClass('adyen');     // 'AdyenGateway'
$locator->getAll();              // ['stripe' => ..., 'paypal' => ..., 'adyen' => ...]
```

Extra mappings can also be supplied to the constructor as a second argument. They are registered on top of the defaults:

```php
<?php

$locator = new PaymentGatewayLocator(
$container,
['adyen' => AdyenGateway::class]
);
```

| Method | Returns | Purpose |
|---|---|---|
| `newInstance(string $name)` | `object` | Resolve a shared instance from the container |
| `register(string $name, string $definition)` | `static` | Add or override a `name => class-string` mapping |
| `has(string $name)` | `bool` | Whether a name is registered |
| `getClass(string $name)` | `string` | The class-string registered under a name |
| `getAll()` | `array` | The full `name => class-string` map |

---

## Errors

`register()` rejects a class that does not implement `getInterfaceClass()`, throwing the locator's `getExceptionClass()`. `getClass()` and `newInstance()` throw the same exception class when the requested name is not registered, and `newInstance()` also throws when the resolved class is not available in the container.

[abstract-locator]: /5.18/api/phalcon_support/#supportabstractlocator
[container]: /5.18/container/
[di]: /5.18/di/
[auth]: /5.18/auth/

Source: https://docs.phalcon.io/5.18/support-locator/index.mdx
