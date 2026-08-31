---
title: "Phalcon Factory"
version: "4.2"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Factory

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Factory\AbstractFactory ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Factory/AbstractFactory.zep)

-   __Namespace__

    - `Phalcon\Factory`

-   __Uses__

    - `Phalcon\Config\ConfigInterface`

-   __Extends__

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

### Properties
```php
/**
 * @var array
 */
protected $mapper;

/**
 * @var array
 */
protected $services;

```

### Methods

```php
protected function checkConfig( mixed $config ): array;
```
Checks the config if it is a valid object

```php
abstract protected function getAdapters(): array;
```
Returns the adapters for the factory

```php
protected function getService( string $name ): mixed;
```
Checks if a service exists and throws an exception

```php
protected function init( array $services = [] ): void;
```
AdapterFactory constructor.

## Factory\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Factory/Exception.zep)

-   __Namespace__

    - `Phalcon\Factory`

-   __Uses__

-   __Extends__

    `\Exception`

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Source: https://docs.phalcon.io/4.2/api/phalcon_factory/index.mdx
