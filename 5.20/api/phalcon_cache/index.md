---
title: "Phalcon Cache"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Cache

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Cache\AbstractCache

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/AbstractCache.zep">Source on GitHub</a>

This component offers caching capabilities for your application.

Event layering: cache operations can emit `cache:*` events from two layers.
This facade fires `cache:before*`/`cache:after*` around each operation, and
the underlying `Storage` adapter (whose `eventType` is `"cache"`) also fires
`cache:before*`/`cache:after*` for the same operation. If an events manager
is wired into both the facade and the adapter, a single call emits the event
twice (once from each object). Wire the manager into one layer only; the
facade is the supported source for cache-level events (it also emits the
multi-key `cache:*Multiple` events).

<div class="api-tree">

- **`Phalcon\Cache\AbstractCache`** - implements [`Phalcon\Cache\CacheInterface`](#cachecacheinterface), [`Phalcon\Events\EventsAwareInterface`](/5.20/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Cache\Cache`](#cachecache)

</div>

__Uses__ `DateInterval` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Throwable` · `Traversable`

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
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">doDeleteMultiple</span>( <span class="st">mixed</span> <span class="sv">$keys</span> )</code>
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
<code class="ret">array</code>
<code class="sig"><span class="sf">doGetMultiple</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$keys</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists data in the cache, uniquely referenced by a key with an optional</span>
</a>
<a class="api-item" href="#cacheabstractcache-dosetmultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSetMultiple</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
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

<div class="api-group">Protected · 11</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/AdapterFactory.zep">Source on GitHub</a>

Factory to create Cache adapters

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.20/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Cache\AdapterFactory`**

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Adapter\Apcu` · `Phalcon\Cache\Adapter\Libmemcached` · `Phalcon\Cache\Adapter\Memory` · `Phalcon\Cache\Adapter\Redis` · `Phalcon\Cache\Adapter\RedisCluster` · `Phalcon\Cache\Adapter\Stream` · `Phalcon\Cache\Adapter\Weak` · `Phalcon\Cache\Exception\Exception` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\SerializerFactory` · `Throwable`

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/AdapterInterface.zep">Source on GitHub</a>

Interface for Phalcon\Cache adapters

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AdapterInterface`](/5.20/api/phalcon_storage/#storageadapteradapterinterface)
- **`Phalcon\Cache\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Storage\Adapter\AdapterInterface`

## Cache\Adapter\Apcu

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Apcu.zep">Source on GitHub</a>

Apcu adapter

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Apcu`](/5.20/api/phalcon_storage/#storageadapterapcu)
- **`Phalcon\Cache\Adapter\Apcu`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Apcu`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Libmemcached.zep">Source on GitHub</a>

Libmemcached adapter

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Libmemcached`](/5.20/api/phalcon_storage/#storageadapterlibmemcached)
- **`Phalcon\Cache\Adapter\Libmemcached`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Libmemcached`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Memory.zep">Source on GitHub</a>

Memory adapter

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Memory`](/5.20/api/phalcon_storage/#storageadaptermemory)
- **`Phalcon\Cache\Adapter\Memory`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Memory`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Redis.zep">Source on GitHub</a>

Redis adapter

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Redis`](/5.20/api/phalcon_storage/#storageadapterredis)
- **`Phalcon\Cache\Adapter\Redis`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Redis`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/RedisCluster.zep">Source on GitHub</a>

RedisCluster adapter

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Redis`](/5.20/api/phalcon_storage/#storageadapterredis)
- [`Phalcon\Storage\Adapter\RedisCluster`](/5.20/api/phalcon_storage/#storageadapterrediscluster)
- **`Phalcon\Cache\Adapter\RedisCluster`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\RedisCluster`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Stream.zep">Source on GitHub</a>

Stream adapter

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream)
- **`Phalcon\Cache\Adapter\Stream`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Stream`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Weak.zep">Source on GitHub</a>

WeakCache implementation based on WeakReference

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Weak`](/5.20/api/phalcon_storage/#storageadapterweak)
- **`Phalcon\Cache\Adapter\Weak`** - implements [`Phalcon\Cache\Adapter\AdapterInterface`](#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Weak`

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Cache.zep">Source on GitHub</a>

This component offers caching capabilities for your application.

<div class="api-tree">

- [`Phalcon\Cache\AbstractCache`](#cacheabstractcache)
- **`Phalcon\Cache\Cache`**

</div>

__Uses__ `DateInterval` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Throwable`

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
<code class="sig"><span class="sf">deleteMultiple</span>( <span class="st">mixed</span> <span class="sv">$keys</span> )</code>
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
<code class="sig"><span class="sf">getMultiple</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$keys</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists data in the cache, uniquely referenced by a key with an optional</span>
</a>
<a class="api-item" href="#cachecache-setmultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setMultiple</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
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

<div class="api-group">Protected · 1</div>

<h4 id="cachecache-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Returns the exception class that will be used for exceptions thrown

## Cache\CacheFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/CacheFactory.zep">Source on GitHub</a>

Creates a new Cache class

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
- **`Phalcon\Cache\CacheFactory`**

</div>

__Uses__ `Phalcon\Cache\Exception\Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Storage\StorageTypes` · `Phalcon\Factory\AbstractConfigFactory` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#cachecachefactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AdapterFactory</span> <span class="sv">$factory</span> )</code>
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

<div class="api-group">Protected · 1</div>

<h4 id="cachecachefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Returns the exception class for the factory

## Cache\CacheInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/CacheInterface.zep">Source on GitHub</a>

Interface for Phalcon\Cache\Cache

<div class="api-tree">

- [`Phalcon\Contracts\Cache\Cache`](/5.20/api/phalcon_contracts/#contractscachecache)
- **`Phalcon\Cache\CacheInterface`**

</div>

__Uses__ `Phalcon\Contracts\Cache\Cache`

## Cache\Exception\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Exception/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Cache will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Cache\Exception\Exception`**

</div>

## Cache\Exception\InvalidArgumentException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Exception/InvalidArgumentException.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Cache for invalid arguments will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Cache\Exception\InvalidArgumentException`**

</div>

Source: https://docs.phalcon.io/5.20/api/phalcon_cache/index.mdx
