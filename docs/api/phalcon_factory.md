---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Factory\AbstractConfigFactory

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Factory/AbstractConfigFactory.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Factory\AbstractConfigFactory`**
    - [`Phalcon\Cache\CacheFactory`](phalcon_cache.md#cachecachefactory)
    - [`Phalcon\Factory\AbstractFactory`](#factoryabstractfactory)
    - [`Phalcon\Logger\LoggerFactory`](phalcon_logger.md#loggerloggerfactory)

</div>

__Uses__ `Phalcon\Config\ConfigInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#factoryabstractconfigfactory-checkconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">checkConfig</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Checks the config if it is a valid object</span>
</a>
<a class="api-item" href="#factoryabstractconfigfactory-checkconfigelement">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">checkConfigElement</span>(<span class="prm"><span class="st">array</span> <span class="sv">$config</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$element</span></span>)</code>
<span class="desc">Checks if the config has &quot;adapter&quot;</span>
</a>
<a class="api-item" href="#factoryabstractconfigfactory-getexception">
<code class="vis vis-protected">protected</code>
<code class="ret">\Exception</code>
<code class="sig"><span class="sf">getException</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Returns the exception object for the child class</span>
</a>
<a class="api-item" href="#factoryabstractconfigfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 4</div>

#### `checkConfig()` { #factoryabstractconfigfactory-checkconfig }

```php
protected function checkConfig( mixed $config ): array;
```

Checks the config if it is a valid object

#### `checkConfigElement()` { #factoryabstractconfigfactory-checkconfigelement }

```php
protected function checkConfigElement(
    array $config,
    string $element
): array;
```

Checks if the config has "adapter"

#### `getException()` { #factoryabstractconfigfactory-getexception }

```php
protected function getException( string $message ): \Exception;
```

Returns the exception object for the child class

#### `getExceptionClass()` { #factoryabstractconfigfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```


## Factory\AbstractFactory

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Factory/AbstractFactory.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](#factoryabstractconfigfactory)
    - **`Phalcon\Factory\AbstractFactory`**
        - [`Phalcon\Annotations\AnnotationsFactory`](phalcon_annotations.md#annotationsannotationsfactory)
        - [`Phalcon\Cache\AdapterFactory`](phalcon_cache.md#cacheadapterfactory)
        - [`Phalcon\Config\ConfigFactory`](phalcon_config.md#configconfigfactory)
        - [`Phalcon\Db\Adapter\PdoFactory`](phalcon_db.md#dbadapterpdofactory)
        - [`Phalcon\Encryption\Crypt\PadFactory`](phalcon_encryption.md#encryptioncryptpadfactory)
        - [`Phalcon\Filter\Validation\ValidatorFactory`](phalcon_filter.md#filtervalidationvalidatorfactory)
        - [`Phalcon\Image\ImageFactory`](phalcon_image.md#imageimagefactory)
        - [`Phalcon\Logger\AdapterFactory`](phalcon_logger.md#loggeradapterfactory)
        - [`Phalcon\Paginator\PaginatorFactory`](phalcon_paginator.md#paginatorpaginatorfactory)
        - [`Phalcon\Storage\AdapterFactory`](phalcon_storage.md#storageadapterfactory)
        - [`Phalcon\Storage\SerializerFactory`](phalcon_storage.md#storageserializerfactory)
        - [`Phalcon\Support\HelperFactory`](phalcon_support.md#supporthelperfactory)
        - [`Phalcon\Translate\InterpolatorFactory`](phalcon_translate.md#translateinterpolatorfactory)
        - [`Phalcon\Translate\TranslateFactory`](phalcon_translate.md#translatetranslatefactory)

</div>

__Uses__ `Phalcon\Config\ConfigInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#factoryabstractfactory-getservice">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a service exists and throws an exception</span>
</a>
<a class="api-item" href="#factoryabstractfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the adapters for the factory</span>
</a>
<a class="api-item" href="#factoryabstractfactory-init">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">Initialize services/add new services</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$mapper</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$services</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Protected · 3</div>

#### `getService()` { #factoryabstractfactory-getservice }

```php
protected function getService( string $name ): mixed;
```

Checks if a service exists and throws an exception

#### `getServices()` { #factoryabstractfactory-getservices }

```php
abstract protected function getServices(): array;
```

Returns the adapters for the factory

#### `init()` { #factoryabstractfactory-init }

```php
protected function init( array $services = [] ): void;
```

Initialize services/add new services


## Factory\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Factory/Exception.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Factory\Exception`**

</div>
