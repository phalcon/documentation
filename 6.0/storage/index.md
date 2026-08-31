---
title: "Storage Component"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Storage Component

## Overview

The `Phalcon\Storage` namespace contains components that help with storing data in different storages. The component is heavily integrated into [Phalcon\Cache\Cache][cache] as well as [Phalcon\Session][session]. It offers serialization of data based on various serialization adapters, and storage of data based on various storage adapters. Factories help with the creation of all necessary objects for the component to work.

## Serializers

The `Phalcon\Storage\Serializer` namespace offers classes that implement the [Serializable][serializable] interface and thus expose the `serialize` and `unserialize` methods. The purpose of these classes is to transform the data before saving it to the storage and after retrieving it from the storage.

:::info[NOTE]
The default serializer for all adapters is `Phalcon\Storage\Serializer\Php` which uses PHP's `serialize` and `unserialize` methods. These methods can suit most applications. However, the developer might want to use something more efficient such as [igbinary][igbinary] which is faster and achieves better compression.
:::

:::danger[WARNING]
The `Php` serializer uses PHP's native `unserialize()`, which instantiates any class contained in the stored bytes. If an attacker can influence those bytes (for example a shared or writable cache backend), this allows PHP object injection and possibly remote code execution. For data that can be attacker-influenced, use the `Json` or `Msgpack` serializer instead of `Php`.

If you must keep the `Php` serializer, restrict the classes it may instantiate with the `allowedClasses` adapter option (`false` for none, or a list of class names) - it is passed to `Phalcon\Storage\Serializer\Php::setAllowedClasses()` and also covers the nested content of the `Stream` adapter. Anything outside the list is reported as a failed read. The `Igbinary` serializer has no such option: it instantiates whatever class the stored bytes name, so use it only with a store you fully trust. The store itself is not an integrity boundary; if the backend is shared, sign the stored values (for example an HMAC over the serialized bytes) and verify the signature before reading them.
:::

The storage adapter can be configured to use a different serializer. The available serializers are:

### `Base64`

This serializer uses the `base64_encode` and `base64_decode` methods to serialize data. The input must be of type `string`, therefore this serializer has obvious limitations

### `Igbinary`

The `igbinary` serializes relies on the `igbinary_serialize` and `igbinary_unserialize` methods. Those methods are exposed via the [igbinary][igbinary] PHP extension, which has to be installed and loaded on the target system.

### `Json`

The `JSON` serializer uses `json_encode` and `json_decode`. The target system must have JSON support available for PHP.

### `MemcachedIgbinary`

This serializer can be used when using `Memcached`. It corresponds to the built-in Igbinary serializer that `Memcached` has.

### `MemcachedJson`

This serializer can be used when using `Memcached`. It corresponds to the built-in JSON serializer that `Memcached` has.

### `MemcachedPhp`

This serializer can be used when using `Memcached`. It corresponds to the built-in PHP serializer that `Memcached` has.

### `Msgpack`

Similar to `igbinary` the `msgpack` serializer uses `msgpack_pack` and `msgpack_unpack` for serializing and unserializing data. This, along with `igbinary` is one of the fastest and most efficient serializers. However, it requires that the [msgpack][msgpack] PHP extension is loaded on the target system.

### `None`

This serializer does not transform the data at all. Both its `serialize` and `unserialize` get and set the data without altering it.

### `Php`

This is the default serializer. It uses PHP's `serialize` and `unserialize` methods for data transformations.

### `RedisIgbinary`

This serializer can be used when using `Redis`. It corresponds to the built-in Igbinary serializer that `Redis` has.

### `RedisJson`

This serializer can be used when using `Redis`. It corresponds to the built-in JSON serializer that `Redis` has.

### `RedisMsgpack`

This serializer can be used when using `Redis`. It corresponds to the built-in Msgpack serializer that `Redis` has.

### `RedisNone`

This serializer can be used when using `Redis`. It corresponds to the built-in None serializer that `Redis` has.

### `RedisPhp`

This serializer can be used when using `Redis`. It corresponds to the built-in PHP serializer that `Redis` has.

### Custom

Phalcon also offers the [Phalcon\Storage\Serializer\SerializerInterface][storage-serializer-serializerinterface] which can be implemented in a custom class. The class can offer the serialization you require.

```php
<?php

namespace MyApp\Storage\Serializer;

use Phalcon\Storage\Serializer\SerializerInterface;

class Garble implements SerializerInterface
{
/**
 * Data storage
 * 
 * @var string
 */
private $data = '';

/**
 * Return the stored data
 * 
 * @return string
 */
public function getData(): string
{
    return $this->data;
}       

/**
 * Serializes data
 */
public function serialize(): string
{
    return rot13($this->data);
}

/**
 * Set the data
 * 
 * @var Garble
 *
 * @return Garble
 */
public function setData($data): Garble
{
    $this->data = (string) $data;

    return $this;
}       

/**
 * Unserializes data
 */
public function unserialize($data): void
{
    $this->data = str_rot13($data);
}
}
```

Using it:

```php
<?php

namespace MyApp;

use MyApp\Storage\Serializer\Garble;

$data = 'I came, I saw, I conquered.';
$garble = new Garble();

$garble
->setData($data)
->serialize()  
;

echo $garble->getData(); // "V pnzr, V fnj, V pbadhrerq."

$encrypted = 'V pnzr, V fnj, V pbadhrerq.';

$garble->unserialize($encrypted);

echo $garble->getData(); // "I came, I saw, I conquered."
``` 

:::info[NOTE]
`Phalcon\Storage\Serializer\SerializerInterface` declares `getData()`, `serialize()`, `setData()` and `unserialize()`. After `unserialize()` the adapters also call `isSuccess()` to detect a failed decode; that method is provided by `Phalcon\Storage\Serializer\AbstractSerializer`. A custom serializer that implements the interface directly (as above) is not required to declare `isSuccess()` - the adapters guard the call and treat a missing method as success. Implement `isSuccess()` (returning `false` after a failed `unserialize()`) if you want a corrupt or unreadable entry to resolve to the default value instead of the decoded result.
:::

## Serializer Factory

Although all serializer classes can be instantiated using the `new` keyword, Phalcon offers the [Phalcon\Storage\SerializerFactory][storage-serializerfactory] class, so that developers can instantiate serializer classes. All the above serializers are registered in the factory and lazy loaded when called. The factory also allows you to register additional (custom) serializer classes. The only thing to consider is choosing the name of the serializer in comparison to the existing ones. If you define the same name, you will overwrite the built-in one. The objects are cached in the factory so if you call the `newInstance()` method with the same parameters during the same request, you will get the same object back.

The example below shows how you can create a `Json` serializer either using the `new` keyword or the factory:

```php
<?php

use Phalcon\Storage\Serializer\Json; 
use Phalcon\Storage\SerializerFactory;

$jsonSerializer = new Json();

$factory        = new SerializerFactory();
$jsonSerializer = $factory->newInstance('json');
```

The parameters you can use for the factory are:

| **Name**             | **Class**                                                                             |
|----------------------|---------------------------------------------------------------------------------------|
| `base64`             | [Phalcon\Storage\Serializer\Base64][storage-serializer-base64]                        |
| `igbinary`           | [Phalcon\Storage\Serializer\Igbinary][storage-serializer-igbinary]                    |
| `json`               | [Phalcon\Storage\Serializer\Json][storage-serializer-json]                            |
| `memcached_igbinary` | [Phalcon\Storage\Serializer\MemcachedIgbinary][storage-serializer-memcached-igbinary] |
| `memcached_json`     | [Phalcon\Storage\Serializer\MemcachedJson][storage-serializer-memcached-json]         |
| `memcached_php`      | [Phalcon\Storage\Serializer\MemcachedPhp][storage-serializer-memcached-php]           |
| `msgpack`            | [Phalcon\Storage\Serializer\Msgpack][storage-serializer-msgpack]                      |
| `none`               | [Phalcon\Storage\Serializer\None][storage-serializer-none]                            |
| `php`                | [Phalcon\Storage\Serializer\Php][storage-serializer-php]                              |
| `redis_igbinary`     | [Phalcon\Storage\Serializer\RedisIgbinary][storage-serializer-redis-igbinary]         |
| `redis_json`         | [Phalcon\Storage\Serializer\RedisJson][storage-serializer-redis-json]                 |
| `redis_msgpack`      | [Phalcon\Storage\Serializer\RedisMsgpack][storage-serializer-redis-msgpack]           |
| `redis_none`         | [Phalcon\Storage\Serializer\RedisNone][storage-serializer-redis-none]                 |
| `redis_php`          | [Phalcon\Storage\Serializer\RedisPhp][storage-serializer-redis-php]                   |

## Adapters

The `Phalcon\Storage\Adapter` namespace offers classes that implement the [Phalcon\Storage\Adapter\AdapterInterface][storage-adapter-adapterinterface] interface. It exposes common methods that are used to perform operations on the storage adapter. These adapters act as wrappers to respective backend code.

The available methods are:

| Method           | Description                                                                |
|------------------|----------------------------------------------------------------------------|
| `clear`          | Flushes/clears the store                                                   |
| `decrement`      | Decrements a stored number                                                 |
| `delete`         | Deletes data from the adapter                                              |
| `deleteMultiple` | Deletes multiple keys from the adapter in a single operation               |
| `get`            | Reads data from the adapter                                                |
| `getAdapter`     | Returns the already connected adapter or connects to the backend server(s) |
| `getKeys`        | Returns all the keys stored (optional filter parameter)                    |
| `getPrefix`      | Returns the prefix for the keys                                            |
| `has`            | Checks if an element exists in the store                                   |
| `increment`      | Increments a stored number                                                 |
| `set`            | Stores data in the adapter                                                 |
| `setForever`     | Stores data in the adapter without an expiration                           |

:::info[NOTE]
The `getAdapter()` method returns the connected adapter. This offers more flexibility to the developer since it can be used to execute additional methods that each adapter offers. For instance, for the `Redis` adapter you can use the `getAdapter()` to obtain the connected object and call `zAdd`, `zRange`, and other methods not exposed by the Phalcon adapter.
:::

:::info[NOTE]
Keys returned by `getKeys()` carry the adapter prefix. The adapters also accept keys that already carry the prefix: `get()`, `has()`, `delete()`, `deleteMultiple()`, `set()`, `setForever()`, `increment()` and `decrement()` strip a leading prefix from the supplied key before applying their own, so the output of `getKeys()` can be passed back to these methods unchanged.
:::

:::warning[NOTE]
A consequence of the stripping is that a key whose name happens to start with the prefix text addresses the same record as the bare key: with prefix `data-`, `set('data-users', ...)` and `set('users', ...)` write to the same stored entry. If your keys are externally generated identifiers, or can legitimately begin with the prefix text, disable the behavior with the `stripPrefix` option (default `true`) when constructing the adapter. The `Phalcon\Session` adapters disable it automatically.
:::

To construct one of these objects, you will need to pass a [Phalcon\Storage\SerializerFactory][storage-serializerfactory] object in the constructor and optionally some parameters required for the adapter of your choice. The list of options is outlined below.

The available adapters are:

### Capability matrix

The adapters share one interface but differ in how some operations behave. These differences affect correctness and performance:

| Adapter        | Counters (`increment` / `decrement`) | `getKeys()` cost                    | Notes                                                         |
|----------------|--------------------------------------|-------------------------------------|--------------------------------------------------------------|
| `Apcu`         | Native, atomic                       | `APCUIterator` regex scan           | Phalcon-side serializers only                                |
| `Libmemcached` | Native, atomic                       | `getAllKeys()` (server-dependent)   | `getAllKeys()` may be incomplete on modern memcached builds  |
| `Memory`       | Read-modify-write                    | In-memory array (cheap)             | Per-request only; not shared across processes                |
| `Redis`        | Native, atomic                       | Non-blocking `SCAN` iteration       | Phalcon-side or backend-native (`OPT_SERIALIZER`) serializers |
| `RedisCluster` | Native, atomic                       | Blocking `KEYS` across master nodes | Per-node `SCAN` not yet implemented                          |
| `Stream`       | Read-modify-write (not atomic)       | Recursive directory traversal       | Counter updates are racy across concurrent processes         |

:::info[NOTE]
Backend-native serializers (the `Redis` `OPT_SERIALIZER` mappings such as `RedisPhp` or `RedisJson`) change the bytes stored on the server compared to the Phalcon-side serializers. Data written through one is not readable through the other.
:::

### `Apcu`

This adapter uses `Apcu` to store the data. In order to use this adapter, you will need to have [apcu][apcu] enabled in your target system. This class does not use an actual _adapter_, since the `apcu` functionality is exposed using the `apcu_*` PHP functions.

| Option              | Default    |
|---------------------|------------|
| `defaultSerializer` | `Php`      |
| `lifetime`          | `3600`     |
| `serializer`        | `null`     |
| `prefix`            | `ph-apcu-` |
| `stripPrefix`       | `true`     |

The following example demonstrates how to create a new `Apcu` storage adapter, which will use the [Phalcon\Storage\Serializer\Json][storage-serializer-json] serializer and have a default lifetime of 7200.

```php
<?php

use Phalcon\Storage\Adapter\Apcu;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
];

$adapter = new Apcu($serializerFactory, $options);
```

The above example used a [Phalcon\Storage\SerializerFactory][storage-serializerfactory] object and the `defaultSerializer` option to tell the adapter to instantiate the relevant serializer.

### `Libmemcached`

This adapter utilizes PHP's [memcached][memcached] extension to connect to Memcached servers. The adapter used is an instance of the `Memcached` class, created after the first event that requires the connection to be active.

| Option                                          | Default                               |
|-------------------------------------------------|---------------------------------------|
| `defaultSerializer`                             | `Php`                                 |
| `lifetime`                                      | `3600`                                |
| `serializer`                                    | `null`                                |
| `prefix`                                        | `ph-memc-`                            |
| `stripPrefix`                                   | `true`                                |
| `servers[0]['host']`                            | `127.0.0.1`                           |
| `servers[0]['port']`                            | `11211`                               |
| `servers[0]['weight']`                          | `1`                                   |
| `persistentId`                                  | `ph-mcid-`                            |
| `saslAuthData['user']`                          |                                       |
| `saslAuthData['pass']`                          |                                       |
| `client[\Memcached::OPT_CONNECT_TIMEOUT]`       | `10`                                  |
| `client[\Memcached::OPT_DISTRIBUTION]`          | `\Memcached::DISTRIBUTION_CONSISTENT` |
| `client[\Memcached::OPT_SERVER_FAILURE_LIMIT]`  | `2`                                   |
| `client[\Memcached::OPT_REMOVE_FAILED_SERVERS]` | `true`                                |
| `client[\Memcached::OPT_RETRY_TIMEOUT]`         | `1`                                   |

You can specify more than one server in the options array passed in the constructor. If `SASL` data is defined, the adapter will try to authenticate using the passed data. If there is an error in the options or the class cannot add one or more servers in the pool, a `Phalcon\Storage\Exception` will be thrown.

The following example demonstrates how to create a new `Libmemcached` storage adapter, which will use the [Phalcon\Storage\Serializer\Json][storage-serializer-json] serializer and have a default lifetime of 7200. It will use the `10.4.13.100` as the first server with weight `1` connecting to port `11211` and `10.4.13.110` as the second server with weight `5` again connecting to port `11211`.

```php
<?php

use Phalcon\Storage\Adapter\Libmemcached;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
'servers'           => [
    0 => [
        'host'   => '10.4.13.100',
        'port'   => 11211,
        'weight' => 1,
    ],
    1 => [
        'host'   => '10.4.13.110',
        'port'   => 11211,
        'weight' => 5,
    ],
],
];

$adapter = new Libmemcached($serializerFactory, $options);
```

The above example used a [Phalcon\Storage\SerializerFactory][storage-serializerfactory] object and the `defaultSerializer` option to tell the adapter to instantiate the relevant serializer.

**Serializers**: The `Memcached` class which is the adapter that the [Phalcon\Storage\Adapter\Libmemcached][storage-adapter-libmemcached] uses, offers support for serializing out of the box. The built-in serializers are:

* `\Memcached::SERIALIZER_PHP`
* `\Memcached::SERIALIZER_JSON`
* `\Memcached::SERIALIZER_IGBINARY`

The [igbinary][igbinary] built-in serializer is only available if `igbinary` is present in the target system and [Memcached][memcached] extension is compiled with it. To enable these serializers, you can use the [Phalcon\Storage\Serializer\MemcachedIgbinary][storage-serializer-memcached-igbinary], [Phalcon\Storage\Serializer\MemcachedJson][storage-serializer-memcached-json] or [Phalcon\Storage\Serializer\MemcachedPhp][storage-serializer-memcached-php]

### `Memory`

This adapter uses the computer's memory to store the data. As all data is stored in memory, there is no persistence, meaning that once the request is completed, the data is lost. This adapter can be used for testing or temporary storage during a particular request. The options available for the constructor are:

| Option              | Default    |
|---------------------|------------|
| `defaultSerializer` | `Php`      |
| `lifetime`          | `3600`     |
| `serializer`        | `null`     |
| `prefix`            | `ph-memo-` |
| `stripPrefix`       | `true`     |

The following example demonstrates how to create a new `Memory` storage adapter, which will use the [Phalcon\Storage\Serializer\Json][storage-serializer-json] serializer and have a default lifetime of 7200.

```php
<?php

use Phalcon\Storage\Adapter\Memory;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
];

$adapter = new Memory($serializerFactory, $options);
```

The above example used a [Phalcon\Storage\SerializerFactory][storage-serializerfactory] object and the `defaultSerializer` option to tell the adapter to instantiate the relevant serializer.

The adapter retains every key set for its lifetime. In long-running PHP processes (Swoole, RoadRunner, queue workers) call `setMaxItems()` to evict the oldest entry FIFO before a new key is stored once the cap is reached.

```php
<?php

use Phalcon\Storage\Adapter\Memory;
use Phalcon\Storage\SerializerFactory;

$adapter = new Memory(new SerializerFactory());
$adapter->setMaxItems(10000);
```

The default value `0` preserves the original unbounded behavior. `getMaxItems()` returns the current cap. Eviction is FIFO by insertion order; existing keys updated via `set()` are not promoted.

### `Redis`

This adapter utilizes PHP's [redis][redis] extension to connect to a Redis server. The adapter used is an instance of the `Redis` class, created after the first event that requires the connection to be active.

| Option              | Default     |
|---------------------|-------------|
| `defaultSerializer` | `Php`       |
| `lifetime`          | `3600`      |
| `serializer`        | `null`      |
| `prefix`            | `ph-reds-`  |
| `stripPrefix`       | `true`      |
| `host`              | `127.0.0.1` |
| `port`              | `6379`      |
| `index`             | `1`         |
| `persistent`        | `false`     |
| `auth`              |             |
| `socket`            |             |
| `ssl`               |             |

If `auth` data is defined, the adapter will try to authenticate using the passed data. If there is an error in the options, or the server cannot connect or authenticate, a `Phalcon\Storage\Exception` will be thrown.

The following example demonstrates how to create a new `Redis` storage adapter, which will use the [Phalcon\Storage\Serializer\Json][storage-serializer-json] serializer and have a default lifetime of 7200. It will use the `10.4.13.100` as the host, connect to port `6379`, and select the index `1`.

```php
<?php

use Phalcon\Storage\Adapter\Redis;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
'host'              => '10.4.13.100',
'port'              => 6379,
'index'             => 1,
];

$adapter = new Redis($serializerFactory, $options);
```

The above example used a [Phalcon\Storage\SerializerFactory][storage-serializerfactory] object and the `defaultSerializer` option to tell the adapter to instantiate the relevant serializer.

**Serializers**: The `Redis` class which is the adapter that the [Phalcon\Storage\Adapter\Redis][storage-adapter-redis] uses, offers support for serializing out of the box. The built-in serializers are:

* `\Redis::SERIALIZER_NONE`
* `\Redis::SERIALIZER_PHP`
* `\Redis::SERIALIZER_IGBINARY`
* `\Redis::SERIALIZER_MSGPACK`

The [igbinary][igbinary] and built-in serializer are only available if `igbinary` is present in the target system and [Redis][redis] extension is compiled with it. The same applies to [msgpack][msgpack] built-in serializer. It is only available if `msgpack` is present in the target system and the [Redis][redis] extension is compiled with it. To enable these serializers, you can use the [Phalcon\Storage\Serializer\RedisIgbinary][storage-serializer-redis-igbinary], [Phalcon\Storage\Serializer\RedisJson][storage-serializer-redis-json], [Phalcon\Storage\Serializer\RedisMsgpack][storage-serializer-redis-msgpack], [Phalcon\Storage\Serializer\RedisNone][storage-serializer-redis-none] or [Phalcon\Storage\Serializer\RedisPhp][storage-serializer-redis-php].

**NOTE** `increment` - `decrement`

At this point in time, there is an issue with `Redis`, where the internal `Redis` serializer does not skip scalar values because it can only store strings. As a result, if you use `increment` after a `set` for a number, will not return a number:

The way to store numbers and use the `increment` (or `decrement`) is to either remove the internal serializer for `Redis`

```php
$storage->getAdapter()->setOption(\Redis::OPT_SERIALIZER, \Redis::SERIALIZER_NONE);
```

or you could use `increment` instead of using `set` at the first setting of the value to the key:

```php
$storage->delete('my-key');
$storage->increment('my-key', 2);
echo $storage->get('my-key');      // 2
$storage->increment('my-key', 3);
echo $storage->get('my-key');      // 3
```

### `RedisCluster`

This adapter utilizes PHP's [redis][redis] extension to connect to a Redis Cluster. It extends the `Redis` adapter and shares its serializer support, but connects to multiple nodes and uses `ph-redc-` as its default key prefix.

You can connect either by supplying seed hosts directly, or by referencing a named cluster configured in `redis.ini`.

| Option              | Default              |
|---------------------|----------------------|
| `defaultSerializer` | `Php`                |
| `lifetime`          | `3600`               |
| `serializer`        | `null`               |
| `prefix`            | `ph-redc-`           |
| `stripPrefix`       | `true`               |
| `name`              | `null`               |
| `hosts`             | `['127.0.0.1:6379']` |
| `timeout`           | `0`                  |
| `readTimeout`       | `0`                  |
| `persistent`        | `false`              |
| `auth`              | `''`                 |
| `context`           | `null`               |

**Connecting by seed hosts:**

```php
<?php

use Phalcon\Storage\Adapter\RedisCluster;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
'hosts'             => ['redis-node-1:7000', 'redis-node-2:7001'],
];

$adapter = new RedisCluster($serializerFactory, $options);
```

**Connecting by named cluster (configured in `redis.ini`):**

```ini
; redis.ini
redis.clusters.seeds = "mycluster[]=localhost:7000&mycluster[]=localhost:7001"
redis.clusters.timeout = "mycluster=5"
redis.clusters.read_timeout = "mycluster=10"
```

```php
<?php

use Phalcon\Storage\Adapter\RedisCluster;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$adapter = new RedisCluster($serializerFactory, ['name' => 'mycluster']);
```

### `Stream`

This adapter is the simplest to set up since it uses the target system's file system (it only requires a storage path that is writeable). It is one of the slowest storage adapters since the data has to be written to the file system. Each file created corresponds to a key stored. The file contains additional metadata to calculate the lifetime of the storage element, resulting in additional reads and writes to the file system.

| Option              | Default   |
|---------------------|-----------|
| `defaultSerializer` | `Php`     |
| `lifetime`          | `3600`    |
| `serializer`        | `null`    |
| `prefix`            | `phstrm-` |
| `stripPrefix`       | `true`    |
| `storageDir`        |           |

If the `storageDir` is not defined a `Phalcon\Storage\Exception` will be thrown.

:::info[NOTE]
The adapter utilizes logic to store files in separate subdirectories based on the name of the key passed, thus avoiding the `too many files in one folder` limit present in Windows or Linux-based systems.
:::

The following example demonstrates how to create a new `Stream` storage adapter, which will use the [Phalcon\Storage\Serializer\Json][storage-serializer-json] serializer and have a default lifetime of 7200. It will store the data in `/data/storage`.

```php
<?php

use Phalcon\Storage\Adapter\Stream;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
'storageDir'        => '/data/storage',
];

$adapter = new Stream($serializerFactory, $options);
```

The above example used a [Phalcon\Storage\SerializerFactory][storage-serializerfactory] object and the `defaultSerializer` option to tell the adapter to instantiate the relevant serializer.

### Custom

Phalcon also offers the [Phalcon\Storage\Adapter\AdapterInterface][storage-adapter-adapterinterface] which can be implemented in a custom class. The class can offer the storage adapter functionality you require.

```php
<?php

namespace MyApp\Storage\Adapter;

use Phalcon\Storage\Adapter\AdapterInterface;

class Custom implements AdapterInterface
{
/**
 * Flushes/clears the cache
 */
public function clear(): bool
{
    // Custom implementation
}

/**
 * Decrements a stored number
 */
public function decrement(string $key, int $value = 1)
{
    // Custom implementation
}

/**
 * Deletes data from the adapter
 */
public function delete(string $key): bool
{
    // Custom implementation
}

/**
 * Deletes multiple keys from the adapter
 */
public function deleteMultiple(array $keys): bool
{
    // Custom implementation
}

/**
 * Reads data from the adapter
 */
public function get(string $key)
{
    // Custom implementation
}

/**
 * Returns the already connected adapter or connects to the backend server(s)
 */
public function getAdapter()
{
    // Custom implementation
}

/**
 * Returns all the keys stored. If a filter has been passed the 
 * keys that match the filter will be returned
 */
public function getKeys(string $prefix = ""): array
{
    // Custom implementation
}

/**
 * Returns the prefix for the keys
 */
public function getPrefix(): string
{
    // Custom implementation
}

/**
 * Checks if an element exists in the cache
 */
public function has(string $key): bool
{
    // Custom implementation
}

/**
 * Increments a stored number
 */
public function increment(string $key, int $value = 1)
{
    // Custom implementation
}

/**
 * Stores data in the adapter
 */
public function set(string $key, $value, $ttl = null): bool
{
    // Custom implementation
}
}
```

Using it:

```php
<?php

namespace MyApp;

use MyApp\Storage\Adapter\Custom;

$custom = new Custom();

$custom->set('my-key', $data);
``` 

## Adapter Factory

Although all adapter classes can be instantiated using the `new` keyword, Phalcon offers the [Phalcon\Storage\AdapterFactory][storage-adapterfactory] class, so that you can instantiate cache adapter classes. All the above adapters are registered in the factory and lazy loaded when called. The factory also allows you to register additional (custom) adapter classes. The only thing to consider is choosing the name of the adapter in comparison to the existing ones. If you define the same name, you will overwrite the built-in one. The objects are cached in the factory so if you call the `newInstance()` method with the same parameters during the same request, you will get the same object back.

The example below shows how you can create an `Apcu` cache adapter with the `new` keyword or the factory:

```php
<?php

use Phalcon\Storage\Adapter\Apcu;
use Phalcon\Storage\Serializer\Json;

$jsonSerializer = new Json();

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
'serializer'        => $jsonSerializer,
];

$adapter = new Apcu(null, $options);
```

```php
<?php

use Phalcon\Storage\AdapterFactory;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();
$adapterFactory    = new AdapterFactory($serializerFactory);

$options = [
'defaultSerializer' => 'Json',
'lifetime'          => 7200,
];

$adapter = $adapterFactory->newInstance('apcu', $options);
```

The parameters you can use for the factory are:

| Name           | Adapter                                                              |
|----------------|----------------------------------------------------------------------|
| `apcu`         | [Phalcon\Storage\Adapter\Apcu][storage-adapter-apcu]                 |
| `libmemcached` | [Phalcon\Storage\Adapter\Libmemcached][storage-adapter-libmemcached] |
| `memory`       | [Phalcon\Storage\Adapter\Memory][storage-adapter-memory]             |
| `redis`        | [Phalcon\Storage\Adapter\Redis][storage-adapter-redis]               |
| `redisCluster` | [Phalcon\Storage\Adapter\RedisCluster][storage-adapter-rediscluster] |
| `stream`       | [Phalcon\Storage\Adapter\Stream][storage-adapter-stream]             |

## Events

The [Phalcon\Storage\AbstractAdapter][storage-adapter-abstractadapter] object implements the [Phalcon\Events\EventsAware][events-eventsawareinterface] interfaces. As a result `getEventsManager()` and `setEventsManager()` are available for you to use.

| Event                  | Description                                   | Can stop operation |
|------------------------|-----------------------------------------------|:------------------:|
| `beforeSet`            | Fires before the value is set                 |         No         |
| `afterSet`             | Fires after the value has been set            |         No         |
| `beforeGet`            | Fires before the value is requested           |         No         |
| `afterGet`             | Fires after the value has been requested      |         No         |
| `beforeHas`            | Fires before the value is requested           |         No         |
| `afterHas`             | Fires after the value has been requested      |         No         |
| `beforeDelete`         | Fires before the value is deleted             |         No         |
| `afterDelete`          | Fires after the value has been deleted        |         No         |
| `beforeDeleteMultiple` | Fires before multiple values are deleted      |         No         |
| `afterDeleteMultiple`  | Fires after multiple values have been deleted |         No         |
| `beforeIncrement`      | Fires before the value has been incremented   |         No         |
| `afterIncrement`       | Fires after the value has been incremented    |         No         |
| `beforeDecrement`      | Fires before the value has been decremented   |         No         |
| `afterDecrement`       | Fires after the value has been decremented    |         No         |

:::info[NOTE]
Each public operation fires only its own `before`/`after` pair. Internal work is routed through the adapter's protected primitives, so a `get()` or `increment()` no longer emits nested `beforeHas`/`afterHas` (or `beforeGet`/`beforeSet`) events from the steps it performs internally. Event listeners therefore observe one event pair per call you make.
:::

## Exceptions

Any exception thrown in the Storage component will be of type `Phalcon\Storage\Exception`. You can use this exception to selectively catch exceptions thrown only from this component.

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Storage\Exception` so callers can catch a specific failure mode. Existing `catch (Phalcon\Storage\Exception $e)` blocks continue to work unchanged.

| Class                                                               | Parent                      | Thrown when                                                                |
|---------------------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------|
| `Phalcon\Storage\Exceptions\AuthenticationFailed`                   | `Phalcon\Storage\Exception` | A Redis / Memcached server rejects the configured credentials.             |
| `Phalcon\Storage\Exceptions\ClusterConnectionFailed`                | `Phalcon\Storage\Exception` | The Redis cluster connection cannot be established.                        |
| `Phalcon\Storage\Exceptions\ConnectionFailed`                       | `Phalcon\Storage\Exception` | The single-node Redis / Memcached connection cannot be established.        |
| `Phalcon\Storage\Exceptions\DatabaseSelectionFailed`                | `Phalcon\Storage\Exception` | The configured Redis database index cannot be selected.                    |
| `Phalcon\Storage\Exceptions\InvalidConfiguration`                   | `Phalcon\Storage\Exception` | The adapter receives configuration values it cannot make sense of.         |
| `Phalcon\Storage\Exceptions\StorageError`                           | `Phalcon\Storage\Exception` | The underlying driver raises an error that does not match the cases above. |
| `Phalcon\Storage\Serializer\Exceptions\InvalidSerializationInput`   | `Phalcon\Storage\Exception` | A serializer is given input it cannot serialize (typically a resource).    |
| `Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput` | `Phalcon\Storage\Exception` | A serializer is given an opaque payload it cannot decode.                  |

[apcu]: https://www.php.net/manual/en/book.apcu.php
[cache]: /6.0/cache/
[events-eventsawareinterface]: /6.0/api/phalcon_events/#eventseventsawareinterface
[igbinary]: https://github.com/igbinary/igbinary7
[memcached]: https://www.php.net/manual/en/book.memcached.php
[msgpack]: https://msgpack.org/
[redis]: https://github.com/phpredis/phpredis
[serializable]: https://www.php.net/manual/en/class.serializable.php
[session]: /6.0/session/
[storage-adapter-abstractadapter]: /6.0/api/phalcon_storage/#storageadapterabstractadapter
[storage-adapter-adapterinterface]: /6.0/api/phalcon_storage/#storageadapteradapterinterface
[storage-adapter-apcu]: /6.0/api/phalcon_storage/#storageadapterapcu
[storage-adapter-libmemcached]: /6.0/api/phalcon_storage/#storageadapterlibmemcached
[storage-adapter-memory]: /6.0/api/phalcon_storage/#storageadaptermemory
[storage-adapter-redis]: /6.0/api/phalcon_storage/#storageadapterredis
[storage-adapter-rediscluster]: /6.0/api/phalcon_storage/#storageadapterrediscluster
[storage-adapter-stream]: /6.0/api/phalcon_storage/#storageadapterstream
[storage-adapterfactory]: /6.0/api/phalcon_storage/#storageadapterfactory
[storage-exception]: /6.0/api/phalcon_storage/#storageexception
[storage-serializer-abstractserializer]: /6.0/api/phalcon_storage/#storageserializerabstractserializer
[storage-serializer-base64]: /6.0/api/phalcon_storage/#storageserializerbase64
[storage-serializer-igbinary]: /6.0/api/phalcon_storage/#storageserializerigbinary
[storage-serializer-json]: /6.0/api/phalcon_storage/#storageserializerjson
[storage-serializer-memcached-igbinary]: /6.0/api/phalcon_storage/#storageserializermemcachedigbinary
[storage-serializer-memcached-json]: /6.0/api/phalcon_storage/#storageserializermemcachedjson
[storage-serializer-memcached-php]: /6.0/api/phalcon_storage/#storageserializermemcachedphp
[storage-serializer-msgpack]: /6.0/api/phalcon_storage/#storageserializermsgpack
[storage-serializer-none]: /6.0/api/phalcon_storage/#storageserializernone
[storage-serializer-php]: /6.0/api/phalcon_storage/#storageserializerphp
[storage-serializer-redis-igbinary]: /6.0/api/phalcon_storage/#storageserializerredisigbinary
[storage-serializer-redis-json]: /6.0/api/phalcon_storage/#storageserializerredisjson
[storage-serializer-redis-msgpack]: /6.0/api/phalcon_storage/#storageserializerredismsgpack
[storage-serializer-redis-none]: /6.0/api/phalcon_storage/#storageserializerredisnone
[storage-serializer-redis-php]: /6.0/api/phalcon_storage/#storageserializerredisphp
[storage-serializer-serializerinterface]: /6.0/api/phalcon_storage/#storageserializerserializerinterface
[storage-serializerfactory]: /6.0/api/phalcon_storage/#storageserializerfactory

Source: https://docs.phalcon.io/6.0/storage/index.mdx
