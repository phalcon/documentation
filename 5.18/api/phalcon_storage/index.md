---
title: "Phalcon Storage"
version: "5.18"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Storage

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Storage\AdapterFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/AdapterFactory.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.18/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.18/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Storage\AdapterFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\Adapter\AdapterInterface` · `Phalcon\Storage\Adapter\Apcu` · `Phalcon\Storage\Adapter\Libmemcached` · `Phalcon\Storage\Adapter\Memory` · `Phalcon\Storage\Adapter\Redis` · `Phalcon\Storage\Adapter\RedisCluster` · `Phalcon\Storage\Adapter\Stream` · `Phalcon\Storage\Adapter\Weak`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span></span>)</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#storageadapterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#storageadapterfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#storageadapterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/AbstractAdapter.zep">Source on GitHub</a>

Class AbstractAdapter

@package Phalcon\Storage\Adapter

@property mixed               $adapter
@property string              $defaultSerializer
@property int                 $lifetime
@property array               $options
@property string              $prefix
@property SerializerInterface $serializer
@property SerializerFactory   $serializerFactory

<div class="api-tree">

- **`Phalcon\Storage\Adapter\AbstractAdapter`** - implements [`Phalcon\Storage\Adapter\AdapterInterface`](#storageadapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](/5.18/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Storage\Adapter\Apcu`](#storageadapterapcu)
- [`Phalcon\Storage\Adapter\Libmemcached`](#storageadapterlibmemcached)
- [`Phalcon\Storage\Adapter\Memory`](#storageadaptermemory)
- [`Phalcon\Storage\Adapter\Redis`](#storageadapterredis)
- [`Phalcon\Storage\Adapter\Stream`](#storageadapterstream)
- [`Phalcon\Storage\Adapter\Weak`](#storageadapterweak)

</div>

__Uses__ `DateInterval` · `DateTime` · `Exception` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Exception` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterabstractadapter-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-decrement">
<code class="vis vis-public">public</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">decrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-deletemultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">deleteMultiple</span>( <span class="st">array</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reads data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the adapter - connects to the storage if not connected</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getdefaultserializer">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDefaultSerializer</span>()</code>
<span class="desc">Name of the default serializer class</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Get the event manager</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns all the keys stored</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getlifetime">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLifetime</span>()</code>
<span class="desc">Returns the lifetime</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPrefix</span>()</code>
<span class="desc">Returns the prefix</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getserializer">
<code class="vis vis-public">public</code>
<code class="ret">SerializerInterface</code>
<code class="sig"><span class="sf">getSerializer</span>()</code>
<span class="desc">Get the serializer</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-increment">
<code class="vis vis-public">public</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">increment</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-set">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-setdefaultserializer">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultSerializer</span>( <span class="st">string</span> <span class="sv">$serializer</span> )</code>
</a>
<a class="api-item" href="#storageadapterabstractadapter-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the event manager</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-__construct">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">AbstractAdapter constructor.</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-dodeletemultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDeleteMultiple</span>( <span class="st">array</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple keys from the adapter</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-doget">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">doGet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#storageadapterabstractadapter-dogetdata">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">doGetData</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#storageadapterabstractadapter-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-fire">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">fire</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$keys</span></span>)</code>
<span class="desc">Trigger an event for the eventsManager.</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getfilteredkeys">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getFilteredKeys</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$keys</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$prefix</span></span>)</code>
<span class="desc">Filters the keys array based on global and passed prefix</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getkeywithoutprefix">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getKeyWithoutPrefix</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Check if the key has the prefix and remove it, otherwise just return the</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getprefixedkey">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPrefixedKey</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
<span class="desc">Returns the key requested, prefixed</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getserializeddata">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getSerializedData</span>( <span class="st">mixed</span> <span class="sv">$content</span> )</code>
<span class="desc">Returns serialized data</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getttl">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTtl</span>( <span class="st">mixed</span> <span class="sv">$ttl</span> )</code>
<span class="desc">Calculates the TTL for a cache item</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-getunserializeddata">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getUnserializedData</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns unserialized data</span>
</a>
<a class="api-item" href="#storageadapterabstractadapter-initserializer">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">initSerializer</span>()</code>
<span class="desc">Initializes the serializer</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$adapter</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultSerializer</span><span class="sm"> = &quot;php&quot;</span></code>
<span class="desc">Name of the default serializer class</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$eventType</span><span class="sm"> = &quot;storage&quot;</span></code>
<span class="desc">EventType prefix.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sv">$eventsManager</span><span class="sm"> = null</span></code>
<span class="desc">Event Manager</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$lifetime</span><span class="sm"> = 3600</span></code>
<span class="desc">Name of the default TTL (time to live)</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;ph-memo-&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">SerializerInterface|null</code>
<code class="sig"><span class="sv">$serializer</span></code>
<span class="desc">Serializer</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">SerializerFactory</code>
<code class="sig"><span class="sv">$serializerFactory</span></code>
<span class="desc">Serializer Factory</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$stripPrefix</span><span class="sm"> = true</span></code>
<span class="desc">Whether a leading prefix is stripped from incoming keys before the adapter prefix is applied. Disable when keys are externally generated identifiers that may legitimately start with the prefix text (e.g. session ids).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 17</div>

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
): int|bool;
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

Deletes data from the adapter

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

<h4 id="storageadapterabstractadapter-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Get the event manager

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
public function getSerializer(): SerializerInterface;
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
): int|bool;
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

<h4 id="storageadapterabstractadapter-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the event manager

<div class="api-group">Protected · 17</div>

<h4 id="storageadapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
protected function __construct(
SerializerFactory $factory,
array $options = []
);
```

AbstractAdapter constructor.

<h4 id="storageadapterabstractadapter-dodecrement"><code>doDecrement()</code></h4>

```php
abstract protected function doDecrement(
string $key,
int $value = 1
): int|bool;
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

Deletes multiple keys from the adapter

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
): int|bool;
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

<h4 id="storageadapterabstractadapter-fire"><code>fire()</code></h4>

```php
protected function fire(
string $eventName,
mixed $keys
): void;
```

Trigger an event for the eventsManager.

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/AdapterInterface.zep">Source on GitHub</a>

Interface for Phalcon\Logger adapters

<div class="api-tree">

- **`Phalcon\Storage\Adapter\AdapterInterface`**
- [`Phalcon\Cache\Adapter\AdapterInterface`](/5.18/api/phalcon_cache/#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Storage\Serializer\SerializerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapteradapterinterface-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-decrement">
<code class="vis vis-public">public</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">decrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-deletemultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">deleteMultiple</span>( <span class="st">array</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple data from the adapter</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reads data from the adapter</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the already connected adapter or connects to the backend</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns all the keys stored</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPrefix</span>()</code>
<span class="desc">Returns the prefix for the keys</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-increment">
<code class="vis vis-public">public</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">increment</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-set">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
<a class="api-item" href="#storageadapteradapterinterface-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores data in the adapter forever. The key needs to manually deleted</span>
</a>
</div>

### Methods

<div class="api-group">Public · 12</div>

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
): int|bool;
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
): int|bool;
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
mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

## Storage\Adapter\Apcu

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Apcu.zep">Source on GitHub</a>

Apcu adapter

Capabilities:
- Counters: native atomic (apcu_inc()/apcu_dec()).
- getKeys(): APCUIterator regex scan over the shared APCu store.
- Serializers: Phalcon-side only; no backend-native serializer.

@property array $options

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- **`Phalcon\Storage\Adapter\Apcu`**
- [`Phalcon\Cache\Adapter\Apcu`](/5.18/api/phalcon_cache/#cacheadapterapcu)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception` · `Phalcon\Traits\Php\ApcuTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterapcu-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Apcu constructor.</span>
</a>
<a class="api-item" href="#storageadapterapcu-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterapcu-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Stores data in the adapter</span>
</a>
<a class="api-item" href="#storageadapterapcu-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores data in the adapter forever. The key needs to manually deleted</span>
</a>
<a class="api-item" href="#storageadapterapcu-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapterapcu-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterapcu-dodeletemultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDeleteMultiple</span>( <span class="st">array</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple keys from APCu in a single call</span>
</a>
<a class="api-item" href="#storageadapterapcu-dogetdata">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">doGetData</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#storageadapterapcu-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapterapcu-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapterapcu-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;ph-apcu-&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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
mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 7</div>

<h4 id="storageadapterapcu-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
string $key,
int $value = 1
): int|bool;
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
protected function doGetData( string $key );
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
): int|bool;
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Libmemcached.zep">Source on GitHub</a>

Libmemcached adapter

Capabilities:
- Counters: native atomic (Memcached::increment()/decrement()).
- getKeys(): Memcached::getAllKeys(), which is server-dependent and may be
  incomplete or unavailable on modern memcached builds.
- Serializers: Phalcon-side plus libmemcached's own options.

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- **`Phalcon\Storage\Adapter\Libmemcached`**
- [`Phalcon\Cache\Adapter\Libmemcached`](/5.18/api/phalcon_cache/#cacheadapterlibmemcached)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\Exception` · `Phalcon\Storage\Exceptions\ConnectionFailed` · `Phalcon\Storage\Exceptions\InvalidConfiguration` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterlibmemcached-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Libmemcached constructor.</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the already connected adapter or connects to the Memcached</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Stores data in the adapter</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores data in the adapter forever. The key needs to manually deleted</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-dodeletemultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDeleteMultiple</span>( <span class="st">array</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple keys from Memcached using a single deleteMulti call</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapterlibmemcached-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;ph-memc-&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

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
mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 6</div>

<h4 id="storageadapterlibmemcached-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
string $key,
int $value = 1
): int|bool;
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
): int|bool;
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Memory.zep">Source on GitHub</a>

Memory adapter

@property array $data
@property array $options

Capabilities:
- Scope: per-request, in-process; nothing is shared across requests or
  processes and the store is discarded when the request ends.
- Counters: read-modify-write on the in-memory array.
- getKeys(): in-memory array scan (cheap).
- Optional maxItems FIFO cap drops the oldest entry before a new key is set.

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- **`Phalcon\Storage\Adapter\Memory`**
- [`Phalcon\Cache\Adapter\Memory`](/5.18/api/phalcon_cache/#cacheadaptermemory)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadaptermemory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Memory constructor.</span>
</a>
<a class="api-item" href="#storageadaptermemory-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadaptermemory-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Stores data in the adapter</span>
</a>
<a class="api-item" href="#storageadaptermemory-getmaxitems">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getMaxItems</span>()</code>
<span class="desc">Returns the configured store cap (0 = unlimited). See setMaxItems().</span>
</a>
<a class="api-item" href="#storageadaptermemory-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores data in the adapter forever. The key needs to manually deleted</span>
</a>
<a class="api-item" href="#storageadaptermemory-setmaxitems">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setMaxItems</span>( <span class="st">int</span> <span class="sv">$maxItems</span> )</code>
<span class="desc">Caps the number of items retained in the in-memory store.</span>
</a>
<a class="api-item" href="#storageadaptermemory-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadaptermemory-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadaptermemory-dogetdata">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">doGetData</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#storageadaptermemory-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadaptermemory-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadaptermemory-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$maxItems</span><span class="sm"> = 0</span></code>
<span class="desc">Maximum number of items retained in the in-memory store. 0 (default) keeps the original unbounded behavior; a positive value drops the oldest entry FIFO before a new key is stored.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

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
mixed $value
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

<div class="api-group">Protected · 6</div>

<h4 id="storageadaptermemory-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
string $key,
int $value = 1
): int|bool;
```

Decrements a stored number

<h4 id="storageadaptermemory-dodelete"><code>doDelete()</code></h4>

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

<h4 id="storageadaptermemory-dogetdata"><code>doGetData()</code></h4>

```php
protected function doGetData( string $key );
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
): int|bool;
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Redis.zep">Source on GitHub</a>

Redis adapter

Capabilities:
- Counters: native atomic (incrBy()/decrBy()).
- getKeys(): non-blocking SCAN iteration.
- Serializers: Phalcon-side, or backend-native via OPT_SERIALIZER. Native
  serializers change the bytes at rest and are not interchangeable with
  Phalcon-side serializers.

@property array $options

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- **`Phalcon\Storage\Adapter\Redis`**
- [`Phalcon\Cache\Adapter\Redis`](/5.18/api/phalcon_cache/#cacheadapterredis)
- [`Phalcon\Storage\Adapter\RedisCluster`](#storageadapterrediscluster)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\Exception` · `Phalcon\Storage\Exceptions\AuthenticationFailed` · `Phalcon\Storage\Exceptions\ConnectionFailed` · `Phalcon\Storage\Exceptions\DatabaseSelectionFailed` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterredis-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Redis constructor.</span>
</a>
<a class="api-item" href="#storageadapterredis-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterredis-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the already connected adapter or connects to the Redis</span>
</a>
<a class="api-item" href="#storageadapterredis-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Stores data in the adapter</span>
</a>
<a class="api-item" href="#storageadapterredis-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores data in the adapter forever. The key needs to manually deleted</span>
</a>
<a class="api-item" href="#storageadapterredis-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapterredis-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterredis-dodeletemultiple">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDeleteMultiple</span>( <span class="st">array</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple keys from Redis using a single unlink call</span>
</a>
<a class="api-item" href="#storageadapterredis-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapterredis-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapterredis-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;ph-reds-&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

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

<h4 id="storageadapterredis-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

<h4 id="storageadapterredis-setforever"><code>setForever()</code></h4>

```php
public function setForever(
string $key,
mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 6</div>

<h4 id="storageadapterredis-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
string $key,
int $value = 1
): int|bool;
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
): int|bool;
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

## Storage\Adapter\RedisCluster

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/RedisCluster.zep">Source on GitHub</a>

RedisCluster adapter

Capabilities (in addition to Redis):
- Counters: native atomic (incrBy()/decrBy()).
- getKeys(): blocking KEYS across all master nodes (per-node SCAN is left to
  the redesign); clear() flushes every master.
- Serializers: Phalcon-side, or backend-native via OPT_SERIALIZER.

@property array $options

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Redis`](#storageadapterredis)
- **`Phalcon\Storage\Adapter\RedisCluster`**
- [`Phalcon\Cache\Adapter\RedisCluster`](/5.18/api/phalcon_cache/#cacheadapterrediscluster)

</div>

__Uses__ `Phalcon\Storage\Exceptions\ClusterConnectionFailed` · `Phalcon\Storage\SerializerFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterrediscluster-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">You can create and connect to a cluster either by passing it one or more</span>
</a>
<a class="api-item" href="#storageadapterrediscluster-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterrediscluster-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the already connected adapter or connects to the Redis</span>
</a>
<a class="api-item" href="#storageadapterrediscluster-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns all the keys stored</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;ph-redc-&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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
Cluster server(s)

<h4 id="storageadapterrediscluster-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

RedisCluster::scan() iterates one node at a time, so the blocking KEYS
command is retained here (phpredis routes it across the masters). The
per-node SCAN migration is left to the storage redesign.

## Storage\Adapter\Stream

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Stream.zep">Source on GitHub</a>

Stream adapter

Capabilities:
- Counters: read-modify-write (doHas()/doGet()/doSet()); not atomic and racy
  across concurrent processes.
- getKeys(): recursive directory traversal; cost grows with the entry count.
- Serializers: Phalcon-side only.

@property string $storageDir
@property array  $options

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- **`Phalcon\Storage\Adapter\Stream`**
- [`Phalcon\Cache\Adapter\Stream`](/5.18/api/phalcon_cache/#cacheadapterstream)

</div>

__Uses__ `DateInterval` · `FilesystemIterator` · `Iterator` · `Phalcon\Storage\Exceptions\InvalidConfiguration` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Support\Helper\Str\DirFromFileTrait` · `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait` · `RecursiveDirectoryIterator` · `RecursiveIteratorIterator`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterstream-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Stream constructor.</span>
</a>
<a class="api-item" href="#storageadapterstream-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterstream-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Stores data in the adapter</span>
</a>
<a class="api-item" href="#storageadapterstream-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores data in the adapter forever. The key needs to manually deleted</span>
</a>
<a class="api-item" href="#storageadapterstream-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number</span>
</a>
<a class="api-item" href="#storageadapterstream-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterstream-doget">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">doGet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reads data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterstream-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache and is not expired</span>
</a>
<a class="api-item" href="#storageadapterstream-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number</span>
</a>
<a class="api-item" href="#storageadapterstream-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;ph-strm&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$storageDir</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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
mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 6</div>

<h4 id="storageadapterstream-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
string $key,
int $value = 1
): int|bool;
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
): int|bool;
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Weak.zep">Source on GitHub</a>

Weak Adapter

Capabilities:
- Stores objects only, as WeakReferences; entries vanish when the referenced
  object is garbage-collected.
- TTL is ignored; no serializer is used (none/no-op).
- Counters unsupported: increment()/decrement() return false.
- setForever() is equivalent to set(); getKeys() reads the in-memory list.

<div class="api-tree">

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
- **`Phalcon\Storage\Adapter\Weak`**
- [`Phalcon\Cache\Adapter\Weak`](/5.18/api/phalcon_cache/#cacheadapterweak)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageadapterweak-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor, there are no options</span>
</a>
<a class="api-item" href="#storageadapterweak-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Flushes/clears the cache</span>
</a>
<a class="api-item" href="#storageadapterweak-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Stores data in the adapter</span>
</a>
<a class="api-item" href="#storageadapterweak-setdefaultserializer">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultSerializer</span>( <span class="st">string</span> <span class="sv">$serializer</span> )</code>
<span class="desc">will never set a serializer, WeakReference cannot be serialized</span>
</a>
<a class="api-item" href="#storageadapterweak-setforever">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setForever</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">For compatiblity only, there is no Forever with WeakReference.</span>
</a>
<a class="api-item" href="#storageadapterweak-dodecrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doDecrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Decrements a stored number - not supported for WeakReference</span>
</a>
<a class="api-item" href="#storageadapterweak-dodelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doDelete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Deletes data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterweak-doget">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">doGet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reads data from the adapter</span>
</a>
<a class="api-item" href="#storageadapterweak-dohas">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doHas</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an element exists in the cache</span>
</a>
<a class="api-item" href="#storageadapterweak-doincrement">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">doIncrement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$value</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Increments a stored number - not supported for WeakReference</span>
</a>
<a class="api-item" href="#storageadapterweak-doset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doSet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Stores data in the adapter. If the TTL is <code>null</code> (default) or not defined</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sv">$fetching</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$weakList</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

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

will never set a serializer, WeakReference cannot be serialized

<h4 id="storageadapterweak-setforever"><code>setForever()</code></h4>

```php
public function setForever(
string $key,
mixed $value
): bool;
```

For compatiblity only, there is no Forever with WeakReference.

<div class="api-group">Protected · 6</div>

<h4 id="storageadapterweak-dodecrement"><code>doDecrement()</code></h4>

```php
protected function doDecrement(
string $key,
int $value = 1
): int|bool;
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
): int|bool;
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exception.zep">Source on GitHub</a>

Phalcon\Storage\Exception

Exceptions thrown in Phalcon\Storage will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Storage\Exception`**
- [`Phalcon\Storage\Exceptions\AuthenticationFailed`](#storageexceptionsauthenticationfailed)
- [`Phalcon\Storage\Exceptions\ClusterConnectionFailed`](#storageexceptionsclusterconnectionfailed)
- [`Phalcon\Storage\Exceptions\ConnectionFailed`](#storageexceptionsconnectionfailed)
- [`Phalcon\Storage\Exceptions\DatabaseSelectionFailed`](#storageexceptionsdatabaseselectionfailed)
- [`Phalcon\Storage\Exceptions\InvalidConfiguration`](#storageexceptionsinvalidconfiguration)
- [`Phalcon\Storage\Exceptions\StorageError`](#storageexceptionsstorageerror)

</div>

## Storage\Exceptions\AuthenticationFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/AuthenticationFailed.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Storage\Exception`](#storageexception)
- **`Phalcon\Storage\Exceptions\AuthenticationFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageexceptionsauthenticationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="storageexceptionsauthenticationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Storage\Exceptions\ClusterConnectionFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/ClusterConnectionFailed.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Storage\Exception`](#storageexception)
- **`Phalcon\Storage\Exceptions\ClusterConnectionFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`

## Storage\Exceptions\ConnectionFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/ConnectionFailed.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Storage\Exception`](#storageexception)
- **`Phalcon\Storage\Exceptions\ConnectionFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`

## Storage\Exceptions\DatabaseSelectionFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/DatabaseSelectionFailed.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Storage\Exception`](#storageexception)
- **`Phalcon\Storage\Exceptions\DatabaseSelectionFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageexceptionsdatabaseselectionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="storageexceptionsdatabaseselectionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Storage\Exceptions\InvalidConfiguration

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/InvalidConfiguration.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Storage\Exception`](#storageexception)
- **`Phalcon\Storage\Exceptions\InvalidConfiguration`**

</div>

__Uses__ `Phalcon\Storage\Exception`

## Storage\Exceptions\StorageError

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/StorageError.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Storage\Exception`](#storageexception)
- **`Phalcon\Storage\Exceptions\StorageError`**

</div>

__Uses__ `Phalcon\Storage\Exception`

## Storage\SerializerFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/SerializerFactory.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.18/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.18/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Storage\SerializerFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\Serializer\Base64` · `Phalcon\Storage\Serializer\Igbinary` · `Phalcon\Storage\Serializer\Json` · `Phalcon\Storage\Serializer\MemcachedIgbinary` · `Phalcon\Storage\Serializer\MemcachedJson` · `Phalcon\Storage\Serializer\MemcachedPhp` · `Phalcon\Storage\Serializer\Msgpack` · `Phalcon\Storage\Serializer\None` · `Phalcon\Storage\Serializer\Php` · `Phalcon\Storage\Serializer\RedisIgbinary` · `Phalcon\Storage\Serializer\RedisJson` · `Phalcon\Storage\Serializer\RedisMsgpack` · `Phalcon\Storage\Serializer\RedisNone` · `Phalcon\Storage\Serializer\RedisPhp` · `Phalcon\Storage\Serializer\SerializerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">SerializerFactory constructor.</span>
</a>
<a class="api-item" href="#storageserializerfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">SerializerInterface</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#storageserializerfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#storageserializerfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="storageserializerfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

SerializerFactory constructor.

<h4 id="storageserializerfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): SerializerInterface;
```

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/AbstractSerializer.zep">Source on GitHub</a>

@property mixed $data
@property bool  $isSuccess

<div class="api-tree">

- **`Phalcon\Storage\Serializer\AbstractSerializer`** - implements [`Phalcon\Storage\Serializer\SerializerInterface`](#storageserializerserializerinterface)
- [`Phalcon\Storage\Serializer\Base64`](#storageserializerbase64)
- [`Phalcon\Storage\Serializer\Igbinary`](#storageserializerigbinary)
- [`Phalcon\Storage\Serializer\Json`](#storageserializerjson)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- [`Phalcon\Storage\Serializer\Php`](#storageserializerphp)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerabstractserializer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span> )</code>
<span class="desc">AbstractSerializer constructor.</span>
</a>
<a class="api-item" href="#storageserializerabstractserializer-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__serialize</span>()</code>
<span class="desc">Serialize data</span>
</a>
<a class="api-item" href="#storageserializerabstractserializer-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unserialize</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserialize data</span>
</a>
<a class="api-item" href="#storageserializerabstractserializer-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getData</span>()</code>
</a>
<a class="api-item" href="#storageserializerabstractserializer-issuccess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSuccess</span>()</code>
<span class="desc">Returns <code>true</code> if the serialize/unserialize operation was successful;</span>
</a>
<a class="api-item" href="#storageserializerabstractserializer-setdata">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setData</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
</a>
<a class="api-item" href="#storageserializerabstractserializer-isserializable">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSerializable</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">If this returns true, then the data is returned as is</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isSuccess</span><span class="sm"> = true</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

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

<div class="api-group">Protected · 1</div>

<h4 id="storageserializerabstractserializer-isserializable"><code>isSerializable()</code></h4>

```php
protected function isSerializable( mixed $data ): bool;
```

If this returns true, then the data is returned as is

## Storage\Serializer\Base64

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Base64.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- **`Phalcon\Storage\Serializer\Base64`**

</div>

__Uses__ `Phalcon\Storage\Serializer\Exceptions\InvalidSerializationInput` · `Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput` · `Phalcon\Traits\Php\Base64Trait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerbase64-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializerbase64-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserializes data</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

@retrun void

## Storage\Serializer\Exceptions\InvalidSerializationInput

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Exceptions/InvalidSerializationInput.zep">Source on GitHub</a>

<div class="api-tree">

- `\InvalidArgumentException`
- **`Phalcon\Storage\Serializer\Exceptions\InvalidSerializationInput`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerexceptionsinvalidserializationinput-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="storageserializerexceptionsinvalidserializationinput-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Storage\Serializer\Exceptions\InvalidUnserializationInput

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Exceptions/InvalidUnserializationInput.zep">Source on GitHub</a>

<div class="api-tree">

- `\InvalidArgumentException`
- **`Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerexceptionsinvalidunserializationinput-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="storageserializerexceptionsinvalidunserializationinput-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Storage\Serializer\Igbinary

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Igbinary.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- **`Phalcon\Storage\Serializer\Igbinary`**
- [`Phalcon\Storage\Serializer\Msgpack`](#storageserializermsgpack)

</div>

__Uses__ `Phalcon\Traits\Php\IgbinaryTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerigbinary-serialize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializerigbinary-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserializes data</span>
</a>
<a class="api-item" href="#storageserializerigbinary-doserialize">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">doSerialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Serialize</span>
</a>
<a class="api-item" href="#storageserializerigbinary-dounserialize">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">doUnserialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Unserialize</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Json.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- **`Phalcon\Storage\Serializer\Json`**

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Support\Helper\Json\Encode`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerjson-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span> )</code>
<span class="desc">AbstractSerializer constructor.</span>
</a>
<a class="api-item" href="#storageserializerjson-serialize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializerjson-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserializes data</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedIgbinary.zep">Source on GitHub</a>

Serializer using the built-in Memcached 'igbinary' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\MemcachedIgbinary`**

</div>

## Storage\Serializer\MemcachedJson

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedJson.zep">Source on GitHub</a>

Serializer using the built-in Memcached 'json' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\MemcachedJson`**

</div>

## Storage\Serializer\MemcachedPhp

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedPhp.zep">Source on GitHub</a>

Serializer using the built-in Memcached 'php' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\MemcachedPhp`**

</div>

## Storage\Serializer\Msgpack

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Msgpack.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\Igbinary`](#storageserializerigbinary)
- **`Phalcon\Storage\Serializer\Msgpack`**

</div>

__Uses__ `Phalcon\Traits\Php\MsgpackTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializermsgpack-doserialize">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">doSerialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializermsgpack-dounserialize">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">doUnserialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/None.zep">Source on GitHub</a>

<div class="api-tree">

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

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializernone-serialize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializernone-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserializes data</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

@retrun void

## Storage\Serializer\Php

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Php.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- **`Phalcon\Storage\Serializer\Php`**

</div>

__Uses__ `Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput` · `Phalcon\Traits\Php\SerializeTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerphp-serialize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializerphp-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserializes data</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="storageserializerphp-serialize"><code>serialize()</code></h4>

```php
public function serialize(): mixed;
```

Serializes data

<h4 id="storageserializerphp-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializes data

## Storage\Serializer\RedisIgbinary

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisIgbinary.zep">Source on GitHub</a>

Serializer using the built-in Redis 'igbinary' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\RedisIgbinary`**

</div>

## Storage\Serializer\RedisJson

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisJson.zep">Source on GitHub</a>

Serializer using the built-in Redis 'json' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\RedisJson`**

</div>

## Storage\Serializer\RedisMsgpack

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisMsgpack.zep">Source on GitHub</a>

Serializer using the built-in Redis 'msgpack' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\RedisMsgpack`**

</div>

## Storage\Serializer\RedisNone

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisNone.zep">Source on GitHub</a>

Serializer using the built-in Redis 'none' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\RedisNone`**

</div>

## Storage\Serializer\RedisPhp

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisPhp.zep">Source on GitHub</a>

Serializer using the built-in Redis 'php' serializer

<div class="api-tree">

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
- [`Phalcon\Storage\Serializer\None`](#storageserializernone)
- **`Phalcon\Storage\Serializer\RedisPhp`**

</div>

## Storage\Serializer\SerializerInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/SerializerInterface.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Storage\Serializer\SerializerInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageserializerserializerinterface-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getData</span>()</code>
</a>
<a class="api-item" href="#storageserializerserializerinterface-serialize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">Serializes data</span>
</a>
<a class="api-item" href="#storageserializerserializerinterface-setdata">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setData</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
</a>
<a class="api-item" href="#storageserializerserializerinterface-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Unserializes data</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

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

Source: https://docs.phalcon.io/5.18/api/phalcon_storage/index.mdx
