---
title: "Phalcon Storage"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Storage

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Storage\AdapterFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Storage\AdapterFactory`**

`Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Apcu` · `Phalcon\Storage\Adapter\Libmemcached` · `Phalcon\Storage\Adapter\Memory` · `Phalcon\Storage\Adapter\Redis` · `Phalcon\Storage\Adapter\RedisCluster` · `Phalcon\Storage\Adapter\Stream` · `Phalcon\Storage\Adapter\Weak`

### Method Summary

- `public __construct(SerializerFactory $factory, array $services = [])` — AdapterFactory constructor.

- `public newInstance(string $name, array $options = []): AdapterInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="storageadapterfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $services = []
);
```

AdapterFactory constructor.

<h4 id="storageadapterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="storageadapterfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="storageadapterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters


## Storage\Adapter\AbstractAdapter

Abstract

Storage AbstractAdapter

- **`Phalcon\Storage\Adapter\AbstractAdapter`** - implements [`Phalcon\Storage\Adapter\AdapterInterface`](#storageadapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)
  - [`Phalcon\Storage\Adapter\Apcu`](#storageadapterapcu)
  - [`Phalcon\Storage\Adapter\Libmemcached`](#storageadapterlibmemcached)
  - [`Phalcon\Storage\Adapter\Memory`](#storageadaptermemory)
  - [`Phalcon\Storage\Adapter\Redis`](#storageadapterredis)
  - [`Phalcon\Storage\Adapter\Stream`](#storageadapterstream)
  - [`Phalcon\Storage\Adapter\Weak`](#storageadapterweak)

`DateInterval` · `DateTime` · `Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

- `public clear(): bool` — Flushes/clears the cache

- `public decrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `public delete(string $key): bool` — Deletes data from the adapter

- `public deleteMultiple(array $keys): bool` — Deletes multiple data from the adapter

- `public get(string $key, mixed $defaultValue = null): mixed` — Reads data from the adapter

- `public getAdapter(): mixed` — Returns the adapter - connects to the storage if not connected

- `public getDefaultSerializer(): string` — Name of the default serializer class

- `public getKeys(string $prefix = ""): array` — Returns all the keys stored

- `public getLifetime(): int` — Returns the lifetime

- `public getPrefix(): string` — Returns the prefix

- `public getSerializer(): SerializerInterface|null` — Get the serializer

- `public has(string $key): bool` — Checks if an element exists in the cache

- `public increment(string $key, int $value = 1): false|int` — Increments a stored number

- `public set(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

- `public setDefaultSerializer(string $serializer): void`

- `protected __construct(SerializerFactory $serializerFactory, array $options = [])` — AbstractAdapter constructor.

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doDeleteMultiple(array $keys): bool` — Deletes multiple data from the adapter

- `protected doGet(string $key, mixed $defaultValue = null): mixed`

- `protected doGetData(string $key): mixed`

- `protected doHas(string $key): bool` — Checks if an element exists in the cache

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

- `protected getFilteredKeys(mixed $keys, string $prefix): array` — Filters the keys array based on global and passed prefix

- `protected getKeyWithoutPrefix(string $key): string` — Check if the key has the prefix and remove it, otherwise just return the

- `protected getPrefixedKey(mixed $key): string` — Returns the key requested, prefixed

- `protected getSerializedData(mixed $content): mixed` — Returns serialized data

- `protected getTtl(mixed $ttl): int` — Calculates the TTL for a cache item

- `protected getUnserializedData(mixed $content, mixed $defaultValue = null): mixed` — Returns unserialized data

- `protected initSerializer(): void` — Initializes the serializer

### Properties

- `protected mixed $adapter = null`

- `protected array<int, string>|bool $allowedClasses = true` — Classes the "php" serializer may instantiate: true, false or a list
  of class names (the "allowedClasses" option)

- `protected string $defaultSerializer = "php"` — Name of the default serializer class

- `protected string $eventType = "storage"` — EventType prefix.

- `protected int $lifetime = 3600` — Name of the default TTL (time to live)

- `protected array<string, mixed> $options = []`

- `protected string $prefix = "ph-memo-"`

- `protected SerializerInterface|null $serializer = null`

- `protected SerializerFactory $serializerFactory`

- `protected bool $stripPrefix = true` — Whether a leading prefix is stripped from incoming keys before the
  adapter prefix is applied. Disable when keys are externally
  generated identifiers that may legitimately start with the prefix
  text (e.g. session ids).

### Methods

<h4 id="storageadapterabstractadapter-clear"><code>clear()</code></h4>

```php
abstract public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterabstractadapter-decrement"><code>decrement()</code></h4>

```php
public function decrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapterabstractadapter-delete"><code>delete()</code></h4>

```php
public function delete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterabstractadapter-deletemultiple"><code>deleteMultiple()</code></h4>

```php
public function deleteMultiple( array $keys ): bool;
```

Deletes multiple data from the adapter

<h4 id="storageadapterabstractadapter-get"><code>get()</code></h4>

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

<h4 id="storageadapterabstractadapter-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): mixed;
```

Returns the adapter - connects to the storage if not connected

<h4 id="storageadapterabstractadapter-getdefaultserializer"><code>getDefaultSerializer()</code></h4>

```php
public function getDefaultSerializer(): string;
```

Name of the default serializer class

<h4 id="storageadapterabstractadapter-getkeys"><code>getKeys()</code></h4>

```php
abstract public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

<h4 id="storageadapterabstractadapter-getlifetime"><code>getLifetime()</code></h4>

```php
public function getLifetime(): int;
```

Returns the lifetime

<h4 id="storageadapterabstractadapter-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string;
```

Returns the prefix

<h4 id="storageadapterabstractadapter-getserializer"><code>getSerializer()</code></h4>

```php
public function getSerializer(): SerializerInterface|null;
```

Get the serializer

<h4 id="storageadapterabstractadapter-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapterabstractadapter-increment"><code>increment()</code></h4>

```php
public function increment(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapterabstractadapter-set"><code>set()</code></h4>

```php
public function set(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.

<h4 id="storageadapterabstractadapter-setdefaultserializer"><code>setDefaultSerializer()</code></h4>

```php
public function setDefaultSerializer( string $serializer ): void;
```

<h4 id="storageadapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
protected function __construct(
    SerializerFactory $serializerFactory,
    array $options = []
);
```

AbstractAdapter constructor.

<h4 id="storageadapterabstractadapter-dodecrement"><code>doDecrement()</code></h4>

```php
abstract protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapterabstractadapter-dodelete"><code>doDelete()</code></h4>

```php
abstract protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterabstractadapter-dodeletemultiple"><code>doDeleteMultiple()</code></h4>

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple data from the adapter

<h4 id="storageadapterabstractadapter-doget"><code>doGet()</code></h4>

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

<h4 id="storageadapterabstractadapter-dogetdata"><code>doGetData()</code></h4>

```php
protected function doGetData( string $key ): mixed;
```

<h4 id="storageadapterabstractadapter-dohas"><code>doHas()</code></h4>

```php
abstract protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapterabstractadapter-doincrement"><code>doIncrement()</code></h4>

```php
abstract protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapterabstractadapter-doset"><code>doSet()</code></h4>

```php
abstract protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.

<h4 id="storageadapterabstractadapter-getfilteredkeys"><code>getFilteredKeys()</code></h4>

```php
protected function getFilteredKeys(
    mixed $keys,
    string $prefix
): array;
```

Filters the keys array based on global and passed prefix

<h4 id="storageadapterabstractadapter-getkeywithoutprefix"><code>getKeyWithoutPrefix()</code></h4>

```php
protected function getKeyWithoutPrefix( string $key ): string;
```

Check if the key has the prefix and remove it, otherwise just return the
key unaltered. When the `stripPrefix` option is `false` the key is
always returned unaltered.

<h4 id="storageadapterabstractadapter-getprefixedkey"><code>getPrefixedKey()</code></h4>

```php
protected function getPrefixedKey( mixed $key ): string;
```

Returns the key requested, prefixed

<h4 id="storageadapterabstractadapter-getserializeddata"><code>getSerializedData()</code></h4>

```php
protected function getSerializedData( mixed $content ): mixed;
```

Returns serialized data

<h4 id="storageadapterabstractadapter-getttl"><code>getTtl()</code></h4>

```php
protected function getTtl( mixed $ttl ): int;
```

Calculates the TTL for a cache item

<h4 id="storageadapterabstractadapter-getunserializeddata"><code>getUnserializedData()</code></h4>

```php
protected function getUnserializedData(
    mixed $content,
    mixed $defaultValue = null
): mixed;
```

Returns unserialized data

<h4 id="storageadapterabstractadapter-initserializer"><code>initSerializer()</code></h4>

```php
protected function initSerializer(): void;
```

Initializes the serializer


## Storage\Adapter\AdapterInterface

Interface

Interface for Phalcon\Logger adapters

The adapter classes carry this member and the framework calls it on
the interface. It joins the contract in the next major; until then the
tag below records what all implementations provide.

@method int getLifetime()

- **`Phalcon\Storage\Adapter\AdapterInterface`**
  - [`Phalcon\Cache\Adapter\AdapterInterface`](/6.0/api/phalcon_cache/#cacheadapteradapterinterface)

`DateInterval` · `Phalcon\Contracts\Storage\StorageTypes`

### Method Summary

- `public clear(): bool` — Flushes/clears the cache

- `public decrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `public delete(string $key): bool` — Deletes data from the adapter

- `public deleteMultiple(array $keys): bool` — Deletes multiple data from the adapter

- `public get(string $key, mixed $defaultValue = null): mixed` — Reads data from the adapter

- `public getAdapter(): mixed` — Returns the already connected adapter or connects to the backend

- `public getKeys(string $prefix = ""): array` — Returns all the keys stored

- `public getPrefix(): string` — Returns the prefix for the keys

- `public has(string $key): bool` — Checks if an element exists in the cache

- `public increment(string $key, int $value = 1): false|int` — Increments a stored number

- `public set(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

- `public setForever(string $key, mixed $data): bool` — Stores data in the adapter forever. The key needs to be manually deleted

### Methods

<h4 id="storageadapteradapterinterface-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapteradapterinterface-decrement"><code>decrement()</code></h4>

```php
public function decrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapteradapterinterface-delete"><code>delete()</code></h4>

```php
public function delete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapteradapterinterface-deletemultiple"><code>deleteMultiple()</code></h4>

```php
public function deleteMultiple( array $keys ): bool;
```

Deletes multiple data from the adapter

<h4 id="storageadapteradapterinterface-get"><code>get()</code></h4>

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

<h4 id="storageadapteradapterinterface-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the backend
server(s)

<h4 id="storageadapteradapterinterface-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

<h4 id="storageadapteradapterinterface-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string;
```

Returns the prefix for the keys

<h4 id="storageadapteradapterinterface-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapteradapterinterface-increment"><code>increment()</code></h4>

```php
public function increment(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapteradapterinterface-set"><code>set()</code></h4>

```php
public function set(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.

<h4 id="storageadapteradapterinterface-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

Stores data in the adapter forever. The key needs to be manually deleted
from the adapter.


## Storage\Adapter\Apcu

Class

Apcu adapter

Capabilities:
- Counters: native atomic (apcu_inc()/apcu_dec()).
- getKeys(): APCUIterator regex scan over the shared APCu store.
- Serializers: Phalcon-side only; no backend-native serializer.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - **`Phalcon\Storage\Adapter\Apcu`**
    - [`Phalcon\Cache\Adapter\Apcu`](/6.0/api/phalcon_cache/#cacheadapterapcu)

`APCUIterator` · `Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Traits\Php\ApcuTrait`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — Apcu constructor.

- `public clear(): bool` — Flushes/clears the cache

- `public getKeys(string $prefix = ""): array` — Stores data in the adapter

- `public setForever(string $key, mixed $data): bool` — Stores data in the adapter forever. The key needs to manually deleted

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doDeleteMultiple(array $keys): bool` — Deletes multiple keys from APCu in a single call

- `protected doGetData(string $key): mixed`

- `protected doHas(string $key): bool` — Checks if an element exists in the cache

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

### Properties

- `protected string $prefix = "ph-apcu-"`

### Methods

<h4 id="storageadapterapcu-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Apcu constructor.

<h4 id="storageadapterapcu-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterapcu-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

<h4 id="storageadapterapcu-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<h4 id="storageadapterapcu-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapterapcu-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterapcu-dodeletemultiple"><code>doDeleteMultiple()</code></h4>

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from APCu in a single call

<h4 id="storageadapterapcu-dogetdata"><code>doGetData()</code></h4>

```php
protected function doGetData( string $key ): mixed;
```

<h4 id="storageadapterapcu-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapterapcu-doincrement"><code>doIncrement()</code></h4>

```php
protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapterapcu-doset"><code>doSet()</code></h4>

```php
protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


## Storage\Adapter\Libmemcached

Class

Libmemcached adapter

Capabilities:
- Counters: native atomic (Memcached::increment()/decrement()).
- getKeys(): Memcached::getAllKeys(), which is server-dependent and may be
  incomplete or unavailable on modern memcached builds.
- Serializers: Phalcon-side plus libmemcached's own options.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - **`Phalcon\Storage\Adapter\Libmemcached`**
    - [`Phalcon\Cache\Adapter\Libmemcached`](/6.0/api/phalcon_cache/#cacheadapterlibmemcached)

`DateInterval` · `Exception` · `Memcached` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\Exception` · `Phalcon\Storage\Exceptions\ConnectionFailed` · `Phalcon\Storage\Exceptions\InvalidConfiguration` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — Libmemcached constructor.

- `public clear(): bool` — Flushes/clears the cache

- `public getAdapter(): mixed` — Returns the already connected adapter or connects to the Memcached

- `public getKeys(string $prefix = ""): array` — Stores data in the adapter

- `public setForever(string $key, mixed $data): bool` — Stores data in the adapter forever. The key needs to be manually deleted

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doDeleteMultiple(array $keys): bool` — Deletes multiple keys from Memcached using a single deleteMulti call

- `protected doHas(string $key): bool` — Checks if an element exists in the cache

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

### Properties

- `protected string $prefix = "ph-memc-"`

### Methods

<h4 id="storageadapterlibmemcached-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Libmemcached constructor.

<h4 id="storageadapterlibmemcached-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterlibmemcached-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the Memcached
server(s)

<h4 id="storageadapterlibmemcached-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

<h4 id="storageadapterlibmemcached-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

Stores data in the adapter forever. The key needs to be manually deleted
from the adapter.

<h4 id="storageadapterlibmemcached-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapterlibmemcached-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterlibmemcached-dodeletemultiple"><code>doDeleteMultiple()</code></h4>

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from Memcached using a single deleteMulti call

<h4 id="storageadapterlibmemcached-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapterlibmemcached-doincrement"><code>doIncrement()</code></h4>

```php
protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapterlibmemcached-doset"><code>doSet()</code></h4>

```php
protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


## Storage\Adapter\Memory

Class

Memory adapter

Capabilities:
- Scope: per-request, in-process; nothing is shared across requests or
  processes and the store is discarded when the request ends.
- Counters: read-modify-write on the in-memory array.
- getKeys(): in-memory array scan (cheap).
- Optional maxItems FIFO cap drops the oldest entry before a new key is set.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - **`Phalcon\Storage\Adapter\Memory`**
    - [`Phalcon\Cache\Adapter\Memory`](/6.0/api/phalcon_cache/#cacheadaptermemory)

`Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\SerializerFactory`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — Memory constructor.

- `public clear(): bool` — Flushes/clears the cache

- `public getKeys(string $prefix = ""): array` — Stores data in the adapter

- `public getMaxItems(): int` — Returns the configured store cap (0 = unlimited). See setMaxItems().

- `public setForever(string $key, mixed $data): bool` — Stores data in the adapter forever. The key needs to manually deleted

- `public setMaxItems(int $maxItems): static` — Caps the number of items retained in the in-memory store.

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doGetData(string $key): mixed`

- `protected doHas(string $key): bool` — Checks if an element exists in the cache

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

### Properties

- `protected array<string, mixed> $data = []`

- `protected int $maxItems = 0` — Maximum number of items retained in the in-memory store.
  0 (default) keeps the original unbounded behavior; a positive
  value drops the oldest entry FIFO before a new key is stored.

### Methods

<h4 id="storageadaptermemory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Memory constructor.

<h4 id="storageadaptermemory-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadaptermemory-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

<h4 id="storageadaptermemory-getmaxitems"><code>getMaxItems()</code></h4>

```php
public function getMaxItems(): int;
```

Returns the configured store cap (0 = unlimited). See setMaxItems().

<h4 id="storageadaptermemory-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<h4 id="storageadaptermemory-setmaxitems"><code>setMaxItems()</code></h4>

```php
public function setMaxItems( int $maxItems ): static;
```

Caps the number of items retained in the in-memory store.
0 disables the cap (the default; preserves the original
unbounded behavior). When the cap is exceeded, the oldest
entry is evicted FIFO before a new key is stored.

<h4 id="storageadaptermemory-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadaptermemory-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadaptermemory-dogetdata"><code>doGetData()</code></h4>

```php
protected function doGetData( string $key ): mixed;
```

<h4 id="storageadaptermemory-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadaptermemory-doincrement"><code>doIncrement()</code></h4>

```php
protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadaptermemory-doset"><code>doSet()</code></h4>

```php
protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


## Storage\Adapter\Redis

Class

Redis adapter

Capabilities:
- Counters: native atomic (incrBy()/decrBy()).
- getKeys(): non-blocking SCAN iteration.
- Serializers: Phalcon-side, or backend-native via OPT_SERIALIZER. Native
  serializers change the bytes at rest and are not interchangeable with
  Phalcon-side serializers.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - **`Phalcon\Storage\Adapter\Redis`**
    - [`Phalcon\Cache\Adapter\Redis`](/6.0/api/phalcon_cache/#cacheadapterredis)
    - [`Phalcon\Storage\Adapter\RedisCluster`](#storageadapterrediscluster)

`DateInterval` · `Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\Exception` · `Phalcon\Storage\Exceptions\AuthenticationFailed` · `Phalcon\Storage\Exceptions\ConnectionFailed` · `Phalcon\Storage\Exceptions\DatabaseSelectionFailed` · `Phalcon\Storage\SerializerFactory` · `Redis` · `RedisException`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — Redis constructor.

- `public clear(): bool` — Flushes/clears the cache

- `public getAdapter(): mixed` — Returns the already connected adapter or connects to the Redis

- `public getKeys(string $prefix = ""): array` — Returns all the keys stored

- `public setForever(string $key, mixed $data): bool` — Stores data in the adapter forever. The key needs to manually deleted

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doDeleteMultiple(array $keys): bool` — Deletes multiple keys from Redis using a single unlink call

- `protected doHas(string $key): bool` — Checks if an element exists in the cache

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

- `protected getDefaultOptions(array $options): array` — The parameter is the raw, user supplied options array; `RedisCluster`

### Properties

- `protected string $prefix = "ph-reds-"`

### Methods

<h4 id="storageadapterredis-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Redis constructor.

<h4 id="storageadapterredis-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterredis-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the Redis
server(s)

The return type is deliberately left wide: RedisCluster extends this
adapter and hands back a `RedisCluster` client, which is not a `Redis`.
Callers inside this class narrow it to `RedisService` locally.

<h4 id="storageadapterredis-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

SCAN replaces the blocking KEYS command. SCAN_NOPREFIX keeps the prefix
handling explicit: the physical prefix is matched and returned unchanged,
so getFilteredKeys() sees exactly what KEYS produced.

<h4 id="storageadapterredis-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<h4 id="storageadapterredis-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapterredis-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterredis-dodeletemultiple"><code>doDeleteMultiple()</code></h4>

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from Redis using a single unlink call

<h4 id="storageadapterredis-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapterredis-doincrement"><code>doIncrement()</code></h4>

```php
protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapterredis-doset"><code>doSet()</code></h4>

```php
protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.

<h4 id="storageadapterredis-getdefaultoptions"><code>getDefaultOptions()</code></h4>

```php
protected function getDefaultOptions( array $options ): array;
```

The parameter is the raw, user supplied options array; `RedisCluster`
overrides this method with its own set of keys, so the two signatures
have to agree on the wider type.


## Storage\Adapter\RedisCluster

Class

RedisCluster adapter

Capabilities (in addition to Redis):
- Counters: native atomic (incrBy()/decrBy()).
- getKeys(): blocking KEYS across all master nodes (per-node SCAN is left to
  the redesign); clear() flushes every master.
- Serializers: Phalcon-side, or backend-native via OPT_SERIALIZER.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - [`Phalcon\Storage\Adapter\Redis`](#storageadapterredis)
    - **`Phalcon\Storage\Adapter\RedisCluster`**
      - [`Phalcon\Cache\Adapter\RedisCluster`](/6.0/api/phalcon_cache/#cacheadapterrediscluster)

`Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\Exceptions\ClusterConnectionFailed` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception` · `Redis` · `RedisCluster` · `Throwable`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — You can create and connect to a cluster either by passing it one or more

- `public clear(): bool` — Flushes/clears the cache

- `public getAdapter(): mixed` — Returns the already connected adapter or connects to the Redis

- `public getKeys(string $prefix = ""): array` — Returns all the keys stored

- `protected getDefaultOptions(array $options): array`

### Properties

- `protected string $prefix = "ph-redc-"`

### Methods

<h4 id="storageadapterrediscluster-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

You can create and connect to a cluster either by passing it one or more
'seed' nodes, or by defining these in redis.ini as a 'named' cluster.

If you are connecting with the cluster by offering a name, that is
configured in redis.ini:

```
# In redis.ini
redis.clusters.seeds = "mycluster[]=localhost:7000&test[]=localhost:7001"
redis.clusters.timeout = "mycluster=5"
redis.clusters.read_timeout = "mycluster=10"
redis.clusters.auth = "mycluster=password"
```
you can use `$options = ["name" => "mycluster"]`.

If you don't have cluster seeds configured in your redis.ini,
you should pass hosts as an array,
eg. `$options = ["hosts" => ["a-host:7000", "b-host:7001"]]`.

You can provide authentication data offering a string `user=password`
or array `["user" => "name", "password" => "secret"]`.

The `timeout` is the amount of time library will wait when connecting
or writing to the cluster. `readTimeout` is the amount of time library
will wait for a result from the cluster.

The `context` is an array of values used for ssl/tls stream context
options eg `["verify_peer" => 0, "local_cert" => "file:///path/to/cert.pem"]`

<h4 id="storageadapterrediscluster-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterrediscluster-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the Redis
server(s)

<h4 id="storageadapterrediscluster-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

RedisCluster::scan() iterates one node at a time, so the blocking KEYS
command is retained here (phpredis routes it across the masters). The
per-node SCAN migration is left to the storage redesign.

<h4 id="storageadapterrediscluster-getdefaultoptions"><code>getDefaultOptions()</code></h4>

```php
protected function getDefaultOptions( array $options ): array;
```


## Storage\Adapter\Stream

Class

Stream adapter

Capabilities:
- Counters: read-modify-write (doHas()/doGet()/doSet()); not atomic and racy
  across concurrent processes.
- getKeys(): recursive directory traversal; cost grows with the entry count.
- Serializers: Phalcon-side only.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - **`Phalcon\Storage\Adapter\Stream`**
    - [`Phalcon\Cache\Adapter\Stream`](/6.0/api/phalcon_cache/#cacheadapterstream)

`FilesystemIterator` · `Iterator` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\Exceptions\InvalidConfiguration` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Traits\FilePathTrait` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Support\Helper\Str\DirFromFileTrait` · `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait` · `RecursiveDirectoryIterator` · `RecursiveIteratorIterator` · `SplFileInfo`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — Stream constructor.

- `public clear(): bool` — Flushes/clears the cache

- `public getKeys(string $prefix = ""): array` — Stores data in the adapter

- `public setForever(string $key, mixed $data): bool` — Stores data in the adapter forever. The key needs to manually deleted

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doGet(string $key, mixed $defaultValue = null): mixed` — Reads data from the adapter

- `protected doHas(string $key): bool` — Checks if an element exists in the cache and is not expired

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

### Properties

- `protected string $prefix = "ph-strm"`

- `protected string $storageDir = ""`

### Methods

<h4 id="storageadapterstream-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Stream constructor.

<h4 id="storageadapterstream-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterstream-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

<h4 id="storageadapterstream-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<h4 id="storageadapterstream-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number

<h4 id="storageadapterstream-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterstream-doget"><code>doGet()</code></h4>

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

<h4 id="storageadapterstream-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache and is not expired

<h4 id="storageadapterstream-doincrement"><code>doIncrement()</code></h4>

```php
protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number

<h4 id="storageadapterstream-doset"><code>doSet()</code></h4>

```php
protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


## Storage\Adapter\Weak

Class

Weak Adapter

Capabilities:
- Stores objects only, as WeakReferences; entries vanish when the referenced
  object is garbage-collected.
- TTL is ignored; no serializer is used (none/no-op).
- Counters unsupported: increment()/decrement() return false.
- setForever() is equivalent to set(); getKeys() reads the in-memory list.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
  - **`Phalcon\Storage\Adapter\Weak`**
    - [`Phalcon\Cache\Adapter\Weak`](/6.0/api/phalcon_cache/#cacheadapterweak)

`Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Storage\SerializerFactory` · `WeakReference`

### Method Summary

- `public __construct(SerializerFactory $factory, array $options = [])` — Constructor, there are no options

- `public clear(): bool` — Flushes/clears the cache

- `public getKeys(string $prefix = ""): array` — Stores data in the adapter

- `public setDefaultSerializer(string $serializer): void` — Will never set a serializer, WeakReference cannot be serialized

- `public setForever(string $key, mixed $data): bool` — For compatiblity only, there is no Forever with WeakReference.

- `protected doDecrement(string $key, int $value = 1): false|int` — Decrements a stored number - not supported for WeakReference

- `protected doDelete(string $key): bool` — Deletes data from the adapter

- `protected doGet(string $key, mixed $defaultValue = null): mixed` — Reads data from the adapter

- `protected doHas(string $key): bool` — Checks if an element exists in the cache

- `protected doIncrement(string $key, int $value = 1): false|int` — Increments a stored number - not supported for WeakReference

- `protected doSet(string $key, mixed $value, mixed $ttl = null): bool` — Stores data in the adapter. If the TTL is `null` (default) or not defined

### Properties

- `protected string|null $fetching = null`

- `protected array $options = []`

- `protected array<string, WeakReference<object>> $weakList = []`

### Methods

<h4 id="storageadapterweak-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Constructor, there are no options

<h4 id="storageadapterweak-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Flushes/clears the cache

<h4 id="storageadapterweak-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

<h4 id="storageadapterweak-setdefaultserializer"><code>setDefaultSerializer()</code></h4>

```php
public function setDefaultSerializer( string $serializer ): void;
```

Will never set a serializer, WeakReference cannot be serialized

<h4 id="storageadapterweak-setforever"><code>setForever()</code></h4>

```php
public function setForever(
    string $key,
    mixed $data
): bool;
```

For compatiblity only, there is no Forever with WeakReference.

<h4 id="storageadapterweak-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
    string $key,
    int $value = 1
): false|int;
```

Decrements a stored number - not supported for WeakReference

<h4 id="storageadapterweak-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadapterweak-doget"><code>doGet()</code></h4>

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

<h4 id="storageadapterweak-dohas"><code>doHas()</code></h4>

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

<h4 id="storageadapterweak-doincrement"><code>doIncrement()</code></h4>

```php
protected function doIncrement(
    string $key,
    int $value = 1
): false|int;
```

Increments a stored number - not supported for WeakReference

<h4 id="storageadapterweak-doset"><code>doSet()</code></h4>

```php
protected function doSet(
    string $key,
    mixed $value,
    mixed $ttl = null
): bool;
```

Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


## Storage\Exception

Class

Phalcon\Storage\Exception

Exceptions thrown in Phalcon\Storage will use this class

- `\Exception`
  - **`Phalcon\Storage\Exception`**
    - [`Phalcon\Storage\Exceptions\AuthenticationFailed`](#storageexceptionsauthenticationfailed)
    - [`Phalcon\Storage\Exceptions\ClusterConnectionFailed`](#storageexceptionsclusterconnectionfailed)
    - [`Phalcon\Storage\Exceptions\ConnectionFailed`](#storageexceptionsconnectionfailed)
    - [`Phalcon\Storage\Exceptions\DatabaseSelectionFailed`](#storageexceptionsdatabaseselectionfailed)
    - [`Phalcon\Storage\Exceptions\InvalidConfiguration`](#storageexceptionsinvalidconfiguration)
    - [`Phalcon\Storage\Exceptions\StorageError`](#storageexceptionsstorageerror)


## Storage\Exceptions\AuthenticationFailed

Class

- `\Exception`
  - [`Phalcon\Storage\Exception`](#storageexception)
    - **`Phalcon\Storage\Exceptions\AuthenticationFailed`**

`Phalcon\Storage\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="storageexceptionsauthenticationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Storage\Exceptions\ClusterConnectionFailed

Class

- `\Exception`
  - [`Phalcon\Storage\Exception`](#storageexception)
    - **`Phalcon\Storage\Exceptions\ClusterConnectionFailed`**

`Phalcon\Storage\Exception`


## Storage\Exceptions\ConnectionFailed

Class

- `\Exception`
  - [`Phalcon\Storage\Exception`](#storageexception)
    - **`Phalcon\Storage\Exceptions\ConnectionFailed`**

`Phalcon\Storage\Exception`


## Storage\Exceptions\DatabaseSelectionFailed

Class

- `\Exception`
  - [`Phalcon\Storage\Exception`](#storageexception)
    - **`Phalcon\Storage\Exceptions\DatabaseSelectionFailed`**

`Phalcon\Storage\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="storageexceptionsdatabaseselectionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Storage\Exceptions\InvalidConfiguration

Class

- `\Exception`
  - [`Phalcon\Storage\Exception`](#storageexception)
    - **`Phalcon\Storage\Exceptions\InvalidConfiguration`**

`Phalcon\Storage\Exception`


## Storage\Exceptions\StorageError

Class

- `\Exception`
  - [`Phalcon\Storage\Exception`](#storageexception)
    - **`Phalcon\Storage\Exceptions\StorageError`**

`Phalcon\Storage\Exception`


## Storage\SerializerFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Storage\SerializerFactory`**

`Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\Serializer\Base64` · `Phalcon\Storage\Serializer\Igbinary` · `Phalcon\Storage\Serializer\Json` · `Phalcon\Storage\Serializer\MemcachedIgbinary` · `Phalcon\Storage\Serializer\MemcachedJson` · `Phalcon\Storage\Serializer\MemcachedPhp` · `Phalcon\Storage\Serializer\Msgpack` · `Phalcon\Storage\Serializer\None` · `Phalcon\Storage\Serializer\Php` · `Phalcon\Storage\Serializer\RedisIgbinary` · `Phalcon\Storage\Serializer\RedisJson` · `Phalcon\Storage\Serializer\RedisMsgpack` · `Phalcon\Storage\Serializer\RedisNone` · `Phalcon\Storage\Serializer\RedisPhp` · `Phalcon\Storage\Serializer\SerializerInterface`

### Method Summary

- `public __construct(array $services = [])` — SerializerFactory constructor.

- `public newInstance(string $name): SerializerInterface`

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="storageserializerfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

SerializerFactory constructor.

<h4 id="storageserializerfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): SerializerInterface;
```

<h4 id="storageserializerfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="storageserializerfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters


## Storage\Serializer\AbstractSerializer

Abstract

@property mixed $data
@property bool  $isSuccess

- **`Phalcon\Storage\Serializer\AbstractSerializer`** - implements [`Phalcon\Storage\Serializer\SerializerInterface`](#storageserializerserializerinterface)
  - [`Phalcon\Storage\Serializer\Base64`](#storageserializerbase64)
  - [`Phalcon\Storage\Serializer\Igbinary`](#storageserializerigbinary)
  - [`Phalcon\Storage\Serializer\Json`](#storageserializerjson)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
  - [`Phalcon\Storage\Serializer\Php`](#storageserializerphp)

`Phalcon\Contracts\Storage\StorageTypes`

### Method Summary

- `public __construct(mixed $data = null)` — AbstractSerializer constructor.

- `public __serialize(): array` — Serialize data

- `public __unserialize(array $data): void` — Unserialize data

- `public getData(): mixed`

- `public isSuccess(): bool` — Returns `true` if the serialize/unserialize operation was successful;

- `public setData(mixed $data): void`

- `protected isSerializable(mixed $data): bool` — If this returns true, then the data is returned as is

### Properties

- `protected mixed $data = null`

- `protected bool $isSuccess = true`

### Methods

<h4 id="storageserializerabstractserializer-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $data = null );
```

AbstractSerializer constructor.

<h4 id="storageserializerabstractserializer-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

Serialize data

<h4 id="storageserializerabstractserializer-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

Unserialize data

<h4 id="storageserializerabstractserializer-getdata"><code>getData()</code></h4>

```php
public function getData(): mixed;
```

<h4 id="storageserializerabstractserializer-issuccess"><code>isSuccess()</code></h4>

```php
public function isSuccess(): bool;
```

Returns `true` if the serialize/unserialize operation was successful;
`false` otherwise

<h4 id="storageserializerabstractserializer-setdata"><code>setData()</code></h4>

```php
public function setData( mixed $data ): void;
```

<h4 id="storageserializerabstractserializer-isserializable"><code>isSerializable()</code></h4>

```php
protected function isSerializable( mixed $data ): bool;
```

If this returns true, then the data is returned as is


## Storage\Serializer\Base64

Class

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - **`Phalcon\Storage\Serializer\Base64`**

`Phalcon\Storage\Serializer\Exceptions\InvalidSerializationInput` · `Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput` · `Phalcon\Traits\Php\Base64Trait`

### Method Summary

- `public serialize(): string` — Serializes data

- `public unserialize(mixed $data): void` — Unserializes data

### Methods

<h4 id="storageserializerbase64-serialize"><code>serialize()</code></h4>

```php
public function serialize(): string;
```

Serializes data

<h4 id="storageserializerbase64-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data


## Storage\Serializer\Exceptions\InvalidSerializationInput

Class

- `\InvalidArgumentException`
  - **`Phalcon\Storage\Serializer\Exceptions\InvalidSerializationInput`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="storageserializerexceptionsinvalidserializationinput-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Storage\Serializer\Exceptions\InvalidUnserializationInput

Class

- `\InvalidArgumentException`
  - **`Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="storageserializerexceptionsinvalidunserializationinput-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Storage\Serializer\Igbinary

Class

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - **`Phalcon\Storage\Serializer\Igbinary`**
    - [`Phalcon\Storage\Serializer\Msgpack`](#storageserializermsgpack)

`Phalcon\Traits\Php\IgbinaryTrait`

### Method Summary

- `public serialize(): mixed` — Serializes data

- `public unserialize(mixed $data): void` — Unserializes data

- `protected doSerialize(mixed $value): string|null` — Serialize

- `protected doUnserialize(mixed $value)` — Unserialize

### Methods

<h4 id="storageserializerigbinary-serialize"><code>serialize()</code></h4>

```php
public function serialize(): mixed;
```

Serializes data

<h4 id="storageserializerigbinary-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data

<h4 id="storageserializerigbinary-doserialize"><code>doSerialize()</code></h4>

```php
protected function doSerialize( mixed $value ): string|null;
```

Serialize

<h4 id="storageserializerigbinary-dounserialize"><code>doUnserialize()</code></h4>

```php
protected function doUnserialize( mixed $value );
```

Unserialize


## Storage\Serializer\Json

Class

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - **`Phalcon\Storage\Serializer\Json`**

`Phalcon\Support\Helper\Json\Decode` · `Phalcon\Support\Helper\Json\Encode`

### Method Summary

- `public __construct(mixed $data = null)` — AbstractSerializer constructor.

- `public serialize(): mixed` — Serializes data

- `public unserialize(mixed $data): void` — Unserializes data

### Methods

<h4 id="storageserializerjson-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $data = null );
```

AbstractSerializer constructor.

<h4 id="storageserializerjson-serialize"><code>serialize()</code></h4>

```php
public function serialize(): mixed;
```

Serializes data

<h4 id="storageserializerjson-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data


## Storage\Serializer\MemcachedIgbinary

Class

Serializer using the built-in Memcached 'igbinary' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\MemcachedIgbinary`**


## Storage\Serializer\MemcachedJson

Class

Serializer using the built-in Memcached 'json' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\MemcachedJson`**


## Storage\Serializer\MemcachedPhp

Class

Serializer using the built-in Memcached 'php' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\MemcachedPhp`**


## Storage\Serializer\Msgpack

Class

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\Igbinary`](#storageserializerigbinary)
    - **`Phalcon\Storage\Serializer\Msgpack`**

`Phalcon\Traits\Php\MsgpackTrait`

### Method Summary

- `protected doSerialize(mixed $value): string` — Serializes data

- `protected doUnserialize(mixed $value)`

### Methods

<h4 id="storageserializermsgpack-doserialize"><code>doSerialize()</code></h4>

```php
protected function doSerialize( mixed $value ): string;
```

Serializes data

<h4 id="storageserializermsgpack-dounserialize"><code>doUnserialize()</code></h4>

```php
protected function doUnserialize( mixed $value );
```


## Storage\Serializer\None

Class

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - **`Phalcon\Storage\Serializer\None`**
    - [`Phalcon\Storage\Serializer\MemcachedIgbinary`](#storageserializermemcachedigbinary)
    - [`Phalcon\Storage\Serializer\MemcachedJson`](#storageserializermemcachedjson)
    - [`Phalcon\Storage\Serializer\MemcachedPhp`](#storageserializermemcachedphp)
    - [`Phalcon\Storage\Serializer\RedisIgbinary`](#storageserializerredisigbinary)
    - [`Phalcon\Storage\Serializer\RedisJson`](#storageserializerredisjson)
    - [`Phalcon\Storage\Serializer\RedisMsgpack`](#storageserializerredismsgpack)
    - [`Phalcon\Storage\Serializer\RedisNone`](#storageserializerredisnone)
    - [`Phalcon\Storage\Serializer\RedisPhp`](#storageserializerredisphp)

### Method Summary

- `public serialize(): mixed` — Serializes data

- `public unserialize(mixed $data): void` — Unserializes data

### Methods

<h4 id="storageserializernone-serialize"><code>serialize()</code></h4>

```php
public function serialize(): mixed;
```

Serializes data

<h4 id="storageserializernone-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data


## Storage\Serializer\Php

Class

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - **`Phalcon\Storage\Serializer\Php`**

`Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput` · `Phalcon\Traits\Php\SerializeTrait` · `__PHP_Incomplete_Class`

### Method Summary

- `public getAllowedClasses(): array|bool`

- `public serialize(): mixed` — Serializes data

- `public setAllowedClasses(array|bool $allowedClasses): static` — Restricts the classes that unserialize() may instantiate (see the

- `public unserialize(mixed $data): void` — Unserializes data

### Properties

- `protected array<int, string>|bool $allowedClasses = true` — Classes that unserialize() may instantiate: true (any class, the PHP
  default), false (none) or a list of class names. Stored bytes that
  try to build another class are rejected on read.

### Methods

<h4 id="storageserializerphp-getallowedclasses"><code>getAllowedClasses()</code></h4>

```php
public function getAllowedClasses(): array|bool;
```

<h4 id="storageserializerphp-serialize"><code>serialize()</code></h4>

```php
public function serialize(): mixed;
```

Serializes data

<h4 id="storageserializerphp-setallowedclasses"><code>setAllowedClasses()</code></h4>

```php
public function setAllowedClasses( array|bool $allowedClasses ): static;
```

Restricts the classes that unserialize() may instantiate (see the
"allowed_classes" option of unserialize()).

<h4 id="storageserializerphp-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data


## Storage\Serializer\RedisIgbinary

Class

Serializer using the built-in Redis 'igbinary' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\RedisIgbinary`**


## Storage\Serializer\RedisJson

Class

Serializer using the built-in Redis 'json' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\RedisJson`**


## Storage\Serializer\RedisMsgpack

Class

Serializer using the built-in Redis 'msgpack' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\RedisMsgpack`**


## Storage\Serializer\RedisNone

Class

Serializer using the built-in Redis 'none' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\RedisNone`**


## Storage\Serializer\RedisPhp

Class

Serializer using the built-in Redis 'php' serializer

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
  - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
    - **`Phalcon\Storage\Serializer\RedisPhp`**


## Storage\Serializer\SerializerInterface

Interface

- **`Phalcon\Storage\Serializer\SerializerInterface`**

### Method Summary

- `public getData(): mixed`

- `public serialize(): mixed` — Serializes data

- `public setData(mixed $data): void`

- `public unserialize(mixed $data): void` — Unserializes data

### Methods

<h4 id="storageserializerserializerinterface-getdata"><code>getData()</code></h4>

```php
public function getData(): mixed;
```

<h4 id="storageserializerserializerinterface-serialize"><code>serialize()</code></h4>

```php
public function serialize(): mixed;
```

Serializes data

<h4 id="storageserializerserializerinterface-setdata"><code>setData()</code></h4>

```php
public function setData( mixed $data ): void;
```

<h4 id="storageserializerserializerinterface-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data

Source: https://docs.phalcon.io/6.0/api/phalcon_storage/index.mdx
