---
title: "Phalcon Cache"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Cache

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Cache\AbstractCache

Abstract

This component offers caching capabilities for your application.

Event layering: cache operations can emit `cache:*` events from two layers.
This facade fires `cache:before*`/`cache:after*` around each operation, and
the underlying `Storage` adapter (whose `eventType` is `"cache"`) also fires
`cache:before*`/`cache:after*` for the same operation. If an events manager
is wired into both the facade and the adapter, a single call emits the event
twice (once from each object). Wire the manager into one layer only; the
facade is the supported source for cache-level events (it also emits the
multi-key `cache:*Multiple` events).

- **`Phalcon\Cache\AbstractCache`** - implements [`Phalcon\Cache\CacheInterface`](#cachecacheinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Cache\Cache`](#cachecache)

`DateInterval` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Redis` · `Throwable` · `Traversable`

### Method Summary

<ApiItem href="#cacheabstractcache-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterInterface","name":"adapter","default":null}]}>
Constructor.
</ApiItem>
<ApiItem href="#cacheabstractcache-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Fetches a value from the cache.
</ApiItem>
<ApiItem href="#cacheabstractcache-getadapter" visibility="public" name="getAdapter" returnType="AdapterInterface" params={[]}>
Returns the current adapter
</ApiItem>
<ApiItem href="#cacheabstractcache-set" visibility="public" name="set" returnType="bool" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null},{"type":"DateInterval|int|null","name":"ttl","default":"null"}]}>
Persists data in the cache, uniquely referenced by a key with an
</ApiItem>
<ApiItem href="#cacheabstractcache-checkkey" visibility="protected" name="checkKey" returnType="void" params={[{"type":"string","name":"key","default":null}]}>
Checks the key. If it contains invalid characters an exception is thrown
</ApiItem>
<ApiItem href="#cacheabstractcache-checkkeys" visibility="protected" name="checkKeys" returnType="void" params={[{"type":"mixed","name":"keys","default":null}]}>
Checks the key. If it contains invalid characters an exception is thrown
</ApiItem>
<ApiItem href="#cacheabstractcache-doclear" visibility="protected" name="doClear" returnType="bool" params={[]}>
Wipes clean the entire cache's keys.
</ApiItem>
<ApiItem href="#cacheabstractcache-dodelete" visibility="protected" name="doDelete" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Delete an item from the cache by its unique key.
</ApiItem>
<ApiItem href="#cacheabstractcache-dodeletemultiple" visibility="protected" name="doDeleteMultiple" returnType="bool" params={[{"type":"iterable","name":"keys","default":null}]}>
Deletes multiple cache items in a single operation.
</ApiItem>
<ApiItem href="#cacheabstractcache-doget" visibility="protected" name="doGet" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Fetches a value from the cache.
</ApiItem>
<ApiItem href="#cacheabstractcache-dogetmultiple" visibility="protected" name="doGetMultiple" returnType="iterable" params={[{"type":"iterable","name":"keys","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Obtains multiple cache items by their unique keys.
</ApiItem>
<ApiItem href="#cacheabstractcache-dohas" visibility="protected" name="doHas" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Determines whether an item is present in the cache.
</ApiItem>
<ApiItem href="#cacheabstractcache-doset" visibility="protected" name="doSet" returnType="bool" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null},{"type":"DateInterval|int|null","name":"ttl","default":"null"}]}>
Persists data in the cache, uniquely referenced by a key with an optional
</ApiItem>
<ApiItem href="#cacheabstractcache-dosetmultiple" visibility="protected" name="doSetMultiple" returnType="bool" params={[{"type":"iterable","name":"values","default":null},{"type":"mixed","name":"ttl","default":"null"}]}>
Persists a set of key => value pairs in the cache, with an optional TTL.
</ApiItem>
<ApiItem href="#cacheabstractcache-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
Returns the exception class that will be used for exceptions thrown
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="adapter" type="AdapterInterface" default="">
</ApiItem>

### Methods

<h4 id="cacheabstractcache-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterInterface $adapter );
```

Constructor.

<h4 id="cacheabstractcache-get"><code>get()</code></h4>

```php
abstract public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

<h4 id="cacheabstractcache-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): AdapterInterface;
```

Returns the current adapter

<h4 id="cacheabstractcache-set"><code>set()</code></h4>

```php
abstract public function set(
string $key,
mixed $value,
DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an
optional expiration TTL time.

<h4 id="cacheabstractcache-checkkey"><code>checkKey()</code></h4>

```php
protected function checkKey( string $key ): void;
```

Checks the key. If it contains invalid characters an exception is thrown

<h4 id="cacheabstractcache-checkkeys"><code>checkKeys()</code></h4>

```php
protected function checkKeys( mixed $keys ): void;
```

Checks the key. If it contains invalid characters an exception is thrown

<h4 id="cacheabstractcache-doclear"><code>doClear()</code></h4>

```php
protected function doClear(): bool;
```

Wipes clean the entire cache's keys.

<h4 id="cacheabstractcache-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Delete an item from the cache by its unique key.

<h4 id="cacheabstractcache-dodeletemultiple"><code>doDeleteMultiple()</code></h4>

```php
protected function doDeleteMultiple( iterable $keys ): bool;
```

Deletes multiple cache items in a single operation.

<h4 id="cacheabstractcache-doget"><code>doGet()</code></h4>

```php
protected function doGet(
string $key,
mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

<h4 id="cacheabstractcache-dogetmultiple"><code>doGetMultiple()</code></h4>

```php
protected function doGetMultiple(
iterable $keys,
mixed $defaultValue = null
): iterable;
```

Obtains multiple cache items by their unique keys.

<h4 id="cacheabstractcache-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Determines whether an item is present in the cache.

<h4 id="cacheabstractcache-doset"><code>doSet()</code></h4>

```php
protected function doSet(
string $key,
mixed $value,
DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

<h4 id="cacheabstractcache-dosetmultiple"><code>doSetMultiple()</code></h4>

```php
protected function doSetMultiple(
iterable $values,
mixed $ttl = null
): bool;
```

Persists a set of key => value pairs in the cache, with an optional TTL.

<h4 id="cacheabstractcache-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
abstract protected function getExceptionClass(): string;
```

Returns the exception class that will be used for exceptions thrown

## Cache\AdapterFactory

Class

Factory to create Cache adapters

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Cache\AdapterFactory`**

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Apcu` · `Phalcon\Cache\Adapter\Libmemcached` · `Phalcon\Cache\Adapter\Memory` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Cache\Adapter\RedisCluster` · `Phalcon\Cache\Adapter\Stream` · `Phalcon\Cache\Adapter\Weak` · `Phalcon\Cache\Exception\Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\SerializerFactory` · `Throwable`

### Method Summary

<ApiItem href="#cacheadapterfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"SerializerFactory","name":"serializerFactory","default":null},{"type":"array","name":"services","default":"[]"}]}>
AdapterFactory constructor.
</ApiItem>
<ApiItem href="#cacheadapterfactory-newinstance" visibility="public" name="newInstance" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Create a new instance of the adapter
</ApiItem>
<ApiItem href="#cacheadapterfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#cacheadapterfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="serializerFactory" type="SerializerFactory" default="">
</ApiItem>

### Methods

<h4 id="cacheadapterfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
SerializerFactory $serializerFactory,
array $services = []
);
```

AdapterFactory constructor.

<h4 id="cacheadapterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
string $name,
array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="cacheadapterfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="cacheadapterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Cache\Adapter\AdapterInterface

Interface

Interface for Phalcon\Cache adapters

- [`Phalcon\Storage\Adapter\AdapterInterface`](/6.0/api/phalcon_storage/#storageadapteradapterinterface)
- **`Phalcon\Cache\Adapter\AdapterInterface`**

`Phalcon\Storage\Adapter\AdapterInterface`

## Cache\Adapter\Apcu

Class

Apcu adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Apcu`](/6.0/api/phalcon_storage/#storageadapterapcu)
- **`Phalcon\Cache\Adapter\Apcu`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Apcu`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Adapter\Libmemcached

Class

Libmemcached adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Libmemcached`](/6.0/api/phalcon_storage/#storageadapterlibmemcached)
- **`Phalcon\Cache\Adapter\Libmemcached`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Libmemcached`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Adapter\Memory

Class

Memory adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Memory`](/6.0/api/phalcon_storage/#storageadaptermemory)
- **`Phalcon\Cache\Adapter\Memory`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Memory`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Adapter\Redis

Class

Redis adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Redis`](/6.0/api/phalcon_storage/#storageadapterredis)
- **`Phalcon\Cache\Adapter\Redis`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Redis`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Adapter\RedisCluster

Class

RedisCluster adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Redis`](/6.0/api/phalcon_storage/#storageadapterredis)
- [`Phalcon\Storage\Adapter\RedisCluster`](/6.0/api/phalcon_storage/#storageadapterrediscluster)
- **`Phalcon\Cache\Adapter\RedisCluster`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\RedisCluster`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Adapter\Stream

Class

Stream adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Stream`](/6.0/api/phalcon_storage/#storageadapterstream)
- **`Phalcon\Cache\Adapter\Stream`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Stream`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Adapter\Weak

Class

WeakCache implementation based on WeakReference

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Weak`](/6.0/api/phalcon_storage/#storageadapterweak)
- **`Phalcon\Cache\Adapter\Weak`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Weak`

### Properties

<ApiItem kind="property" visibility="protected" name="eventType" type="string" default="&quot;cache&quot;">
EventType prefix.
</ApiItem>

## Cache\Cache

Class

This component offers caching capabilities for your application.

- [`Phalcon\Cache\AbstractCache`](#cacheabstractcache)
- **`Phalcon\Cache\Cache`**

`DateInterval` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Throwable`

### Method Summary

<ApiItem href="#cachecache-clear" visibility="public" name="clear" returnType="bool" params={[]}>
Wipes clean the entire cache's keys.
</ApiItem>
<ApiItem href="#cachecache-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Delete an item from the cache by its unique key.
</ApiItem>
<ApiItem href="#cachecache-deletemultiple" visibility="public" name="deleteMultiple" returnType="bool" params={[{"type":"iterable","name":"keys","default":null}]}>
Deletes multiple cache items in a single operation.
</ApiItem>
<ApiItem href="#cachecache-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Fetches a value from the cache.
</ApiItem>
<ApiItem href="#cachecache-getmultiple" visibility="public" name="getMultiple" returnType="iterable" params={[{"type":"iterable","name":"keys","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Obtains multiple cache items by their unique keys.
</ApiItem>
<ApiItem href="#cachecache-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Determines whether an item is present in the cache.
</ApiItem>
<ApiItem href="#cachecache-set" visibility="public" name="set" returnType="bool" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null},{"type":"DateInterval|int|null","name":"ttl","default":"null"}]}>
Persists data in the cache, uniquely referenced by a key with an optional
</ApiItem>
<ApiItem href="#cachecache-setmultiple" visibility="public" name="setMultiple" returnType="bool" params={[{"type":"iterable","name":"values","default":null},{"type":"DateInterval|int|null","name":"ttl","default":"null"}]}>
Persists a set of key => value pairs in the cache, with an optional TTL.
</ApiItem>
<ApiItem href="#cachecache-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
Returns the exception class that will be used for exceptions thrown
</ApiItem>

### Methods

<h4 id="cachecache-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Wipes clean the entire cache's keys.

<h4 id="cachecache-delete"><code>delete()</code></h4>

```php
public function delete( string $key ): bool;
```

Delete an item from the cache by its unique key.

<h4 id="cachecache-deletemultiple"><code>deleteMultiple()</code></h4>

```php
public function deleteMultiple( iterable $keys ): bool;
```

Deletes multiple cache items in a single operation.

<h4 id="cachecache-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

<h4 id="cachecache-getmultiple"><code>getMultiple()</code></h4>

```php
public function getMultiple(
iterable $keys,
mixed $defaultValue = null
): iterable;
```

Obtains multiple cache items by their unique keys.

<h4 id="cachecache-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Determines whether an item is present in the cache.

<h4 id="cachecache-set"><code>set()</code></h4>

```php
public function set(
string $key,
mixed $value,
DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

<h4 id="cachecache-setmultiple"><code>setMultiple()</code></h4>

```php
public function setMultiple(
iterable $values,
DateInterval|int|null $ttl = null
): bool;
```

Persists a set of key => value pairs in the cache, with an optional TTL.

<h4 id="cachecache-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Returns the exception class that will be used for exceptions thrown

## Cache\CacheFactory

Class

Creates a new Cache class

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
- **`Phalcon\Cache\CacheFactory`**

`Phalcon\Cache\Exception\Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractConfigFactory` · `Throwable`

### Method Summary

<ApiItem href="#cachecachefactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterFactory","name":"adapterFactory","default":null}]}>
Constructor
</ApiItem>
<ApiItem href="#cachecachefactory-load" visibility="public" name="load" returnType="CacheInterface" params={[{"type":"mixed","name":"config","default":null}]}>
Factory to create an instance from a Config object
</ApiItem>
<ApiItem href="#cachecachefactory-newinstance" visibility="public" name="newInstance" returnType="CacheInterface" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Constructs a new Cache instance.
</ApiItem>
<ApiItem href="#cachecachefactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
Returns the exception class for the factory
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="adapterFactory" type="AdapterFactory" default="">
</ApiItem>

### Methods

<h4 id="cachecachefactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterFactory $adapterFactory );
```

Constructor

<h4 id="cachecachefactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): CacheInterface;
```

Factory to create an instance from a Config object

<h4 id="cachecachefactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
string $name,
array $options = []
): CacheInterface;
```

Constructs a new Cache instance.

<h4 id="cachecachefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Returns the exception class for the factory

## Cache\CacheInterface

Interface

Interface for Phalcon\Cache\Cache

- [`Phalcon\Contracts\Cache\Cache`](/6.0/api/phalcon_contracts/#contractscachecache)
- **`Phalcon\Cache\CacheInterface`**

`Phalcon\Contracts\Cache\Cache`

## Cache\Exception\Exception

Class

Exceptions thrown in Phalcon\Cache will use this class

- `\Exception`
- **`Phalcon\Cache\Exception\Exception`**

## Cache\Exception\InvalidArgumentException

Class

Exceptions thrown in Phalcon\Cache for invalid arguments will use this class

- `\Exception`
- **`Phalcon\Cache\Exception\InvalidArgumentException`**

Source: https://docs.phalcon.io/6.0/api/phalcon_cache/index.mdx
