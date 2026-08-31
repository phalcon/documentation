---
title: "Phalcon Container"
version: "4.2"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Container

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Container

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Container.zep)

-   __Namespace__

    - `Phalcon`

-   __Uses__

    - `Psr\Container\ContainerInterface`
    - `Phalcon\Di\DiInterface`

-   __Extends__

-   __Implements__

    - `ContainerInterface`

PSR-11 Wrapper for `Phalcon\Di`

### Properties
```php
/**
 * @var DiInterface
 */
protected $container;

```

## Methods

```php
public function __construct( DiInterface $container );
```
Phalcon\Container constructor

```php
public function get( mixed $name ): mixed;
```
Return the service

```php
public function has( mixed $name ): bool;
```
Whether a service exists or not in the container

Source: https://docs.phalcon.io/4.2/api/phalcon_container/index.mdx
