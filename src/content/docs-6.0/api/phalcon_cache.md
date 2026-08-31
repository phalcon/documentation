---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Cache\AbstractCache

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/AbstractCache.php){ .src-btn }

This component offers caching capabilities for your application.

Event layering: cache operations can emit `cache:*` events from two layers.
This facade fires `cache:before*`/`cache:after*` around each operation, and
the underlying `Storage` adapter (whose `eventType` is `"cache"`) also fires
`cache:before*`/`cache:after*` for the same operation. If an events manager
is wired into both the facade and the adapter, a single call emits the event
twice (once from each object). Wire the manager into one layer only; the
facade is the supported source for cache-level events (it also emits the
multi-key `cache:*Multiple` events).

<div class="api-tree" markdown>

- **`Phalcon\Cache\AbstractCache`** - implements [`Phalcon\Cache\CacheInterface`](#cachecacheinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
    - [`Phalcon\Cache\Cache`](#cachecache)

</div>

__Uses__ `DateInterval` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Redis` · `Throwable` · `Traversable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cacheabstractcache-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AdapterInterface</span> <span class="sv">$adapter</span> )</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#cacheabstractcache-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Fetches a value from the cache.</span>
</a>
<a class="api-item" href="#cacheabstractcache-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the current adapter</span>
</a>
<a class="api-item" href="#cacheabstractcache-set">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">DateInterval|int|null</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists data in the cache, uniquely referenced by a key with an</span>
</a>
<a class="api-item" href="#cacheabstractcache-checkkey">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkKey</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks the key. If it contains invalid characters an exception is thrown</span>
</a>
<a class="api-item" href="#cacheabstractcache-checkkeys">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkKeys</span>( <span class="st">mixed</span> <span class="sv">$keys</span> )</code>
<span class="desc">Checks the key. If it contains invalid characters an exception is thrown</span>
</a>
<a class="api-item" href="#cacheabstractcache-doclear">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doClear</span>()</code>
<span class="desc">Wipes clean the entire cache&#039;s keys.</span>
</a>
<a class="api-item" href="#cacheabstractcache-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Delete an item from the cache by its unique key.</span>
</a>
<a class="api-item" href="#cacheabstractcache-dodeletemultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDeleteMultiple</span>( <span class="st">iterable</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple cache items in a single operation.</span>
</a>
<a class="api-item" href="#cacheabstractcache-doget">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">doGet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Fetches a value from the cache.</span>
</a>
<a class="api-item" href="#cacheabstractcache-dogetmultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">iterable</code>
<code class="sig"><span class="sf">doGetMultiple</span>(<span class="prm"><span class="st">iterable</span> <span class="sv">$keys</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Obtains multiple cache items by their unique keys.</span>
</a>
<a class="api-item" href="#cacheabstractcache-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Determines whether an item is present in the cache.</span>
</a>
<a class="api-item" href="#cacheabstractcache-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">DateInterval|int|null</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists data in the cache, uniquely referenced by a key with an optional</span>
</a>
<a class="api-item" href="#cacheabstractcache-dosetmultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSetMultiple</span>(<span class="prm"><span class="st">iterable</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists a set of key =&gt; value pairs in the cache, with an optional TTL.</span>
</a>
<a class="api-item" href="#cacheabstractcache-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
<span class="desc">Returns the exception class that will be used for exceptions thrown</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sv">$adapter</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #cacheabstractcache-__construct }

```php
public function __construct( AdapterInterface $adapter );
```

Constructor.

#### `get()` { #cacheabstractcache-get }

```php
abstract public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

#### `getAdapter()` { #cacheabstractcache-getadapter }

```php
public function getAdapter(): AdapterInterface;
```

Returns the current adapter

#### `set()` { #cacheabstractcache-set }

```php
abstract public function set(
    string $key,
    mixed $value,
    DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an
optional expiration TTL time.

<div class="api-group">Protected · 11</div>

#### `checkKey()` { #cacheabstractcache-checkkey }

```php
protected function checkKey( string $key ): void;
```

Checks the key. If it contains invalid characters an exception is thrown

#### `checkKeys()` { #cacheabstractcache-checkkeys }

```php
protected function checkKeys( mixed $keys ): void;
```

Checks the key. If it contains invalid characters an exception is thrown

#### `doClear()` { #cacheabstractcache-doclear }

```php
protected function doClear(): bool;
```

Wipes clean the entire cache's keys.

#### `doDelete()` { #cacheabstractcache-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Delete an item from the cache by its unique key.

#### `doDeleteMultiple()` { #cacheabstractcache-dodeletemultiple }

```php
protected function doDeleteMultiple( iterable $keys ): bool;
```

Deletes multiple cache items in a single operation.

#### `doGet()` { #cacheabstractcache-doget }

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

#### `doGetMultiple()` { #cacheabstractcache-dogetmultiple }

```php
protected function doGetMultiple(
    iterable $keys,
    mixed $defaultValue = null
): iterable;
```

Obtains multiple cache items by their unique keys.

#### `doHas()` { #cacheabstractcache-dohas }

```php
protected function doHas( string $key ): bool;
```

Determines whether an item is present in the cache.

#### `doSet()` { #cacheabstractcache-doset }

```php
protected function doSet(
    string $key,
    mixed $value,
    DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

#### `doSetMultiple()` { #cacheabstractcache-dosetmultiple }

```php
protected function doSetMultiple(
    iterable $values,
    mixed $ttl = null
): bool;
```

Persists a set of key => value pairs in the cache, with an optional TTL.

#### `getExceptionClass()` { #cacheabstractcache-getexceptionclass }

```php
abstract protected function getExceptionClass(): string;
```

Returns the exception class that will be used for exceptions thrown


## Cache\AdapterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/AdapterFactory.php){ .src-btn }

Factory to create Cache adapters

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Cache\AdapterFactory`**

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Apcu` · `Phalcon\Cache\Adapter\Libmemcached` · `Phalcon\Cache\Adapter\Memory` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Cache\Adapter\RedisCluster` · `Phalcon\Cache\Adapter\Stream` · `Phalcon\Cache\Adapter\Weak` · `Phalcon\Cache\Exception\Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\SerializerFactory` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cacheadapterfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$serializerFactory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span></span>)</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#cacheadapterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#cacheadapterfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#cacheadapterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">SerializerFactory</code>
<code class="sig"><span class="sv">$serializerFactory</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #cacheadapterfactory-__construct }

```php
public function __construct(
    SerializerFactory $serializerFactory,
    array $services = []
);
```

AdapterFactory constructor.

#### `newInstance()` { #cacheadapterfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #cacheadapterfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #cacheadapterfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Cache\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/AdapterInterface.php){ .src-btn }

Interface for Phalcon\Cache adapters

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AdapterInterface`](phalcon_storage.md#storageadapteradapterinterface)
    - **`Phalcon\Cache\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Storage\Adapter\AdapterInterface`
{ .api-uses }


## Cache\Adapter\Apcu

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/Apcu.php){ .src-btn }

Apcu adapter

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Apcu`](phalcon_storage.md#storageadapterapcu)
        - **`Phalcon\Cache\Adapter\Apcu`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Apcu`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Adapter\Libmemcached

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/Libmemcached.php){ .src-btn }

Libmemcached adapter

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Libmemcached`](phalcon_storage.md#storageadapterlibmemcached)
        - **`Phalcon\Cache\Adapter\Libmemcached`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Libmemcached`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Adapter\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/Memory.php){ .src-btn }

Memory adapter

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Memory`](phalcon_storage.md#storageadaptermemory)
        - **`Phalcon\Cache\Adapter\Memory`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Memory`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Adapter\Redis

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/Redis.php){ .src-btn }

Redis adapter

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Redis`](phalcon_storage.md#storageadapterredis)
        - **`Phalcon\Cache\Adapter\Redis`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Redis`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Adapter\RedisCluster

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/RedisCluster.php){ .src-btn }

RedisCluster adapter

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Redis`](phalcon_storage.md#storageadapterredis)
        - [`Phalcon\Storage\Adapter\RedisCluster`](phalcon_storage.md#storageadapterrediscluster)
            - **`Phalcon\Cache\Adapter\RedisCluster`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\RedisCluster`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/Stream.php){ .src-btn }

Stream adapter

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Stream`](phalcon_storage.md#storageadapterstream)
        - **`Phalcon\Cache\Adapter\Stream`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Stream`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Adapter\Weak

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Adapter/Weak.php){ .src-btn }

WeakCache implementation based on WeakReference

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Weak`](phalcon_storage.md#storageadapterweak)
        - **`Phalcon\Cache\Adapter\Weak`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Weak`
{ .api-uses }

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;cache&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
</div>


## Cache\Cache

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Cache.php){ .src-btn }

This component offers caching capabilities for your application.

<div class="api-tree" markdown>

- [`Phalcon\Cache\AbstractCache`](#cacheabstractcache)
    - **`Phalcon\Cache\Cache`**

</div>

__Uses__ `DateInterval` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cachecache-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Wipes clean the entire cache&#039;s keys.</span>
</a>
<a class="api-item" href="#cachecache-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Delete an item from the cache by its unique key.</span>
</a>
<a class="api-item" href="#cachecache-deletemultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">deleteMultiple</span>( <span class="st">iterable</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple cache items in a single operation.</span>
</a>
<a class="api-item" href="#cachecache-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Fetches a value from the cache.</span>
</a>
<a class="api-item" href="#cachecache-getmultiple">
<code class="vis vis-public">public</code>
<code class="ret">iterable</code>
<code class="sig"><span class="sf">getMultiple</span>(<span class="prm"><span class="st">iterable</span> <span class="sv">$keys</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Obtains multiple cache items by their unique keys.</span>
</a>
<a class="api-item" href="#cachecache-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Determines whether an item is present in the cache.</span>
</a>
<a class="api-item" href="#cachecache-set">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">DateInterval|int|null</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists data in the cache, uniquely referenced by a key with an optional</span>
</a>
<a class="api-item" href="#cachecache-setmultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setMultiple</span>(<span class="prm"><span class="st">iterable</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">DateInterval|int|null</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists a set of key =&gt; value pairs in the cache, with an optional TTL.</span>
</a>
<a class="api-item" href="#cachecache-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
<span class="desc">Returns the exception class that will be used for exceptions thrown</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `clear()` { #cachecache-clear }

```php
public function clear(): bool;
```

Wipes clean the entire cache's keys.

#### `delete()` { #cachecache-delete }

```php
public function delete( string $key ): bool;
```

Delete an item from the cache by its unique key.

#### `deleteMultiple()` { #cachecache-deletemultiple }

```php
public function deleteMultiple( iterable $keys ): bool;
```

Deletes multiple cache items in a single operation.

#### `get()` { #cachecache-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

#### `getMultiple()` { #cachecache-getmultiple }

```php
public function getMultiple(
    iterable $keys,
    mixed $defaultValue = null
): iterable;
```

Obtains multiple cache items by their unique keys.

#### `has()` { #cachecache-has }

```php
public function has( string $key ): bool;
```

Determines whether an item is present in the cache.

#### `set()` { #cachecache-set }

```php
public function set(
    string $key,
    mixed $value,
    DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

#### `setMultiple()` { #cachecache-setmultiple }

```php
public function setMultiple(
    iterable $values,
    DateInterval|int|null $ttl = null
): bool;
```

Persists a set of key => value pairs in the cache, with an optional TTL.

<div class="api-group">Protected · 1</div>

#### `getExceptionClass()` { #cachecache-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

Returns the exception class that will be used for exceptions thrown


## Cache\CacheFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/CacheFactory.php){ .src-btn }

Creates a new Cache class

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - **`Phalcon\Cache\CacheFactory`**

</div>

__Uses__ `Phalcon\Cache\Exception\Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractConfigFactory` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cachecachefactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AdapterFactory</span> <span class="sv">$adapterFactory</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#cachecachefactory-load">
<code class="vis vis-public">public</code>
<code class="ret">CacheInterface</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#cachecachefactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">CacheInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructs a new Cache instance.</span>
</a>
<a class="api-item" href="#cachecachefactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
<span class="desc">Returns the exception class for the factory</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterFactory</code>
<code class="sig"><span class="sv">$adapterFactory</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #cachecachefactory-__construct }

```php
public function __construct( AdapterFactory $adapterFactory );
```

Constructor

#### `load()` { #cachecachefactory-load }

```php
public function load( mixed $config ): CacheInterface;
```

Factory to create an instance from a Config object

#### `newInstance()` { #cachecachefactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): CacheInterface;
```

Constructs a new Cache instance.

<div class="api-group">Protected · 1</div>

#### `getExceptionClass()` { #cachecachefactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

Returns the exception class for the factory


## Cache\CacheInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/CacheInterface.php){ .src-btn }

Interface for Phalcon\Cache\Cache

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Cache\Cache`](phalcon_contracts.md#contractscachecache)
    - **`Phalcon\Cache\CacheInterface`**

</div>

__Uses__ `Phalcon\Contracts\Cache\Cache`
{ .api-uses }


## Cache\Exception\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Exception/Exception.php){ .src-btn }

Exceptions thrown in Phalcon\Cache will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Cache\Exception\Exception`**

</div>


## Cache\Exception\InvalidArgumentException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Cache/Exception/InvalidArgumentException.php){ .src-btn }

Exceptions thrown in Phalcon\Cache for invalid arguments will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Cache\Exception\InvalidArgumentException`**

</div>
