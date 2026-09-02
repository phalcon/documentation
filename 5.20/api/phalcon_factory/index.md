---
title: "Phalcon Factory"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Factory

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Factory\AbstractConfigFactory

Abstract

- **`Phalcon\Factory\AbstractConfigFactory`**
- [`Phalcon\Cache\CacheFactory`](/5.20/api/phalcon_cache/#cachecachefactory)
- [`Phalcon\Factory\AbstractFactory`](#factoryabstractfactory)
- [`Phalcon\Logger\LoggerFactory`](/5.20/api/phalcon_logger/#loggerloggerfactory)
- [`Phalcon\Queue\QueueFactory`](/5.20/api/phalcon_queue/#queuequeuefactory)

`Phalcon\Config\ConfigInterface`

### Method Summary

<ApiItem href="#factoryabstractconfigfactory-checkconfig" visibility="protected" name="checkConfig" returnType="array" params={[{"type":"mixed","name":"config","default":null}]}>
Checks the config if it is a valid object
</ApiItem>
<ApiItem href="#factoryabstractconfigfactory-checkconfigelement" visibility="protected" name="checkConfigElement" returnType="array" params={[{"type":"array","name":"config","default":null},{"type":"string","name":"element","default":null}]}>
Checks if the config has "adapter"
</ApiItem>
<ApiItem href="#factoryabstractconfigfactory-getexception" visibility="protected" name="getException" returnType="\Exception" params={[{"type":"string","name":"message","default":null}]}>
Returns the exception object for the child class
</ApiItem>
<ApiItem href="#factoryabstractconfigfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="factoryabstractconfigfactory-checkconfig"><code>checkConfig()</code></h4>

```php
protected function checkConfig( mixed $config ): array;
```

Checks the config if it is a valid object

<h4 id="factoryabstractconfigfactory-checkconfigelement"><code>checkConfigElement()</code></h4>

```php
protected function checkConfigElement(
array $config,
string $element
): array;
```

Checks if the config has "adapter"

<h4 id="factoryabstractconfigfactory-getexception"><code>getException()</code></h4>

```php
protected function getException( string $message ): \Exception;
```

Returns the exception object for the child class

<h4 id="factoryabstractconfigfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

## Factory\AbstractFactory

Abstract

- [`Phalcon\Factory\AbstractConfigFactory`](#factoryabstractconfigfactory)
- **`Phalcon\Factory\AbstractFactory`**
- [`Phalcon\Annotations\AnnotationsFactory`](/5.20/api/phalcon_annotations/#annotationsannotationsfactory)
- [`Phalcon\Cache\AdapterFactory`](/5.20/api/phalcon_cache/#cacheadapterfactory)
- [`Phalcon\Config\ConfigFactory`](/5.20/api/phalcon_config/#configconfigfactory)
- [`Phalcon\Db\Adapter\PdoFactory`](/5.20/api/phalcon_db/#dbadapterpdofactory)
- [`Phalcon\Encryption\Crypt\PadFactory`](/5.20/api/phalcon_encryption/#encryptioncryptpadfactory)
- [`Phalcon\Filter\Validation\ValidatorFactory`](/5.20/api/phalcon_filter/#filtervalidationvalidatorfactory)
- [`Phalcon\Image\ImageFactory`](/5.20/api/phalcon_image/#imageimagefactory)
- [`Phalcon\Logger\AdapterFactory`](/5.20/api/phalcon_logger/#loggeradapterfactory)
- [`Phalcon\Paginator\PaginatorFactory`](/5.20/api/phalcon_paginator/#paginatorpaginatorfactory)
- [`Phalcon\Queue\AdapterFactory`](/5.20/api/phalcon_queue/#queueadapterfactory)
- [`Phalcon\Storage\AdapterFactory`](/5.20/api/phalcon_storage/#storageadapterfactory)
- [`Phalcon\Storage\SerializerFactory`](/5.20/api/phalcon_storage/#storageserializerfactory)
- [`Phalcon\Support\HelperFactory`](/5.20/api/phalcon_support/#supporthelperfactory)
- [`Phalcon\Translate\InterpolatorFactory`](/5.20/api/phalcon_translate/#translateinterpolatorfactory)
- [`Phalcon\Translate\TranslateFactory`](/5.20/api/phalcon_translate/#translatetranslatefactory)

`Phalcon\Config\ConfigInterface`

### Method Summary

<ApiItem href="#factoryabstractfactory-getservice" visibility="protected" name="getService" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Checks if a service exists and throws an exception
</ApiItem>
<ApiItem href="#factoryabstractfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the adapters for the factory
</ApiItem>
<ApiItem href="#factoryabstractfactory-init" visibility="protected" name="init" returnType="void" params={[{"type":"array","name":"services","default":"[]"}]}>
Initialize services/add new services
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="mapper" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="services" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="factoryabstractfactory-getservice"><code>getService()</code></h4>

```php
protected function getService( string $name ): mixed;
```

Checks if a service exists and throws an exception

<h4 id="factoryabstractfactory-getservices"><code>getServices()</code></h4>

```php
abstract protected function getServices(): array;
```

Returns the adapters for the factory

<h4 id="factoryabstractfactory-init"><code>init()</code></h4>

```php
protected function init( array $services = [] ): void;
```

Initialize services/add new services

## Factory\Exception

Class

- `\Exception`
- **`Phalcon\Factory\Exception`**

Source: https://docs.phalcon.io/5.20/api/phalcon_factory/index.mdx
