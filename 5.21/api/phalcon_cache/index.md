---
title: "Phalcon Cache"
version: "5.21"
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

- **`Phalcon\Cache\AbstractCache`** - implements [`Phalcon\Cache\CacheInterface`](#cachecacheinterface), [`Phalcon\Events\EventsAwareInterface`](/5.21/api/phalcon_events/#eventseventsawareinterface)
  - [`Phalcon\Cache\Cache`](#cachecache)

`DateInterval` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Throwable` · `Traversable`

### Method Summary

- `public __construct(AdapterInterface $adapter)` — Constructor.

- `public get(string $key, mixed $defaultValue = null): mixed` — Fetches a value from the cache.

- `public getAdapter(): AdapterInterface` — Returns the current adapter

- `public set(string $key, mixed $value, mixed $ttl = null): bool` — Persists data in the cache, uniquely referenced by a key with an

- `protected checkKey(string $key): void` — Checks the key. If it contains invalid characters an exception is thrown

- `protected checkKeys(mixed $keys): void` — Checks the key. If it contains invalid characters an exception is thrown

- `protected doClear(): bool` — Wipes clean the entire cache's keys.

- `protected doDelete(string $key): bool` — Delete an item from the cache by its unique key.

- `protected doDeleteMultiple(mixed $keys): bool` — Deletes multiple cache items in a single operation.

- `protected doGet(string $key, mixed $defaultValue = null): mixed` — Fetches a value from the cache.

- `protected doGetMultiple(mixed $keys, mixed $defaultValue = null): array` — Obtains multiple cache items by their unique keys.

- `protected doHas(string $key): bool` — Determines whether an item is present in the cache.

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Persists data in the cache, uniquely referenced by a key with an optional

- `protected doSetMultiple(mixed $values, mixed $ttl = null): bool` — Persists a set of key => value pairs in the cache, with an optional TTL.

- `protected getExceptionClass(): string` — Returns the exception class that will be used for exceptions thrown

### Properties

- `protected AdapterInterface $adapter`

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
    mixed $ttl = null
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
protected function doDeleteMultiple( mixed $keys ): bool;
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
    mixed $keys,
    mixed $defaultValue = null
): array;
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
    mixed $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

<h4 id="cacheabstractcache-dosetmultiple"><code>doSetMultiple()</code></h4>

```php
protected function doSetMultiple(
    mixed $values,
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

- [`Phalcon\Factory\AbstractConfigFactory`](/5.21/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/5.21/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Cache\AdapterFactory`**

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Apcu` · `Phalcon\Cache\Adapter\Libmemcached` · `Phalcon\Cache\Adapter\Memory` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Cache\Adapter\RedisCluster` · `Phalcon\Cache\Adapter\Stream` · `Phalcon\Cache\Adapter\Weak` · `Phalcon\Cache\Exception\Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\SerializerFactory` · `Throwable`

### Method Summary

- `public __construct(SerializerFactory $serializerFactory, array $services = [])` — AdapterFactory constructor.

- `public newInstance(string $name, array $options = []): AdapterInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Properties

- `protected SerializerFactory $serializerFactory`

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

- [`Phalcon\Storage\Adapter\AdapterInterface`](/5.21/api/phalcon_storage/#storageadapteradapterinterface)
  - **`Phalcon\Cache\Adapter\AdapterInterface`**

`Phalcon\Storage\Adapter\AdapterInterface`


## Cache\Adapter\Apcu

Class

Apcu adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Apcu`](/5.21/api/phalcon_storage/#storageadapterapcu)
    - **`Phalcon\Cache\Adapter\Apcu`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Apcu`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Adapter\Libmemcached

Class

Libmemcached adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Libmemcached`](/5.21/api/phalcon_storage/#storageadapterlibmemcached)
    - **`Phalcon\Cache\Adapter\Libmemcached`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Libmemcached`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Adapter\Memory

Class

Memory adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Memory`](/5.21/api/phalcon_storage/#storageadaptermemory)
    - **`Phalcon\Cache\Adapter\Memory`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Memory`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Adapter\Redis

Class

Redis adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Redis`](/5.21/api/phalcon_storage/#storageadapterredis)
    - **`Phalcon\Cache\Adapter\Redis`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Redis`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Adapter\RedisCluster

Class

RedisCluster adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Redis`](/5.21/api/phalcon_storage/#storageadapterredis)
    - [`Phalcon\Storage\Adapter\RedisCluster`](/5.21/api/phalcon_storage/#storageadapterrediscluster)
      - **`Phalcon\Cache\Adapter\RedisCluster`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\RedisCluster`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Adapter\Stream

Class

Stream adapter

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Stream`](/5.21/api/phalcon_storage/#storageadapterstream)
    - **`Phalcon\Cache\Adapter\Stream`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Stream`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Adapter\Weak

Class

WeakCache implementation based on WeakReference

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Weak`](/5.21/api/phalcon_storage/#storageadapterweak)
    - **`Phalcon\Cache\Adapter\Weak`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Weak`

### Properties

- `protected string $eventType = "cache"` — EventType prefix.


## Cache\Cache

Class

This component offers caching capabilities for your application.

- [`Phalcon\Cache\AbstractCache`](#cacheabstractcache)
  - **`Phalcon\Cache\Cache`**

`DateInterval` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Throwable`

### Method Summary

- `public clear(): bool` — Wipes clean the entire cache's keys.

- `public delete(string $key): bool` — Delete an item from the cache by its unique key.

- `public deleteMultiple(mixed $keys): bool` — Deletes multiple cache items in a single operation.

- `public get(string $key, mixed $defaultValue = null): mixed` — Fetches a value from the cache.

- `public getMultiple(mixed $keys, mixed $defaultValue = null)` — Obtains multiple cache items by their unique keys.

- `public has(string $key): bool` — Determines whether an item is present in the cache.

- `public set(string $key, mixed $value, mixed $ttl = null): bool` — Persists data in the cache, uniquely referenced by a key with an optional

- `public setMultiple(mixed $values, mixed $ttl = null): bool` — Persists a set of key => value pairs in the cache, with an optional TTL.

- `protected getExceptionClass(): string` — Returns the exception class that will be used for exceptions thrown

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
public function deleteMultiple( mixed $keys ): bool;
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
    mixed $keys,
    mixed $defaultValue = null
);
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
    mixed $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

<h4 id="cachecache-setmultiple"><code>setMultiple()</code></h4>

```php
public function setMultiple(
    mixed $values,
    mixed $ttl = null
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

- [`Phalcon\Factory\AbstractConfigFactory`](/5.21/api/phalcon_factory/#factoryabstractconfigfactory)
  - **`Phalcon\Cache\CacheFactory`**

`Phalcon\Cache\Exception\Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractConfigFactory` · `Throwable`

### Method Summary

- `public __construct(AdapterFactory $factory)` — Constructor

- `public load(mixed $config): CacheInterface` — Factory to create an instance from a Config object

- `public newInstance(string $name, array $options = []): CacheInterface` — Constructs a new Cache instance.

- `protected getExceptionClass(): string` — Returns the exception class for the factory

### Properties

- `protected AdapterFactory $adapterFactory`

### Methods

<h4 id="cachecachefactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterFactory $factory );
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

- [`Phalcon\Contracts\Cache\Cache`](/5.21/api/phalcon_contracts/#contractscachecache)
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

Source: https://docs.phalcon.io/5.21/api/phalcon_cache/index.mdx
