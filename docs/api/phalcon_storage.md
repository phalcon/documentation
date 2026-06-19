---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Storage\AdapterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/AdapterFactory.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Storage\AdapterFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\Adapter\AdapterInterface`
{ .api-uses }

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

#### `__construct()` { #storageadapterfactory-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $services = []
);
```

AdapterFactory constructor.

#### `newInstance()` { #storageadapterfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #storageadapterfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #storageadapterfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Storage\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/AbstractAdapter.zep){ .src-btn }

Class AbstractAdapter

@package Phalcon\Storage\Adapter

@property mixed               $adapter
@property string              $defaultSerializer
@property int                 $lifetime
@property array               $options
@property string              $prefix
@property SerializerInterface $serializer
@property SerializerFactory   $serializerFactory

<div class="api-tree" markdown>

- **`Phalcon\Storage\Adapter\AbstractAdapter`** — implements [`Phalcon\Storage\Adapter\AdapterInterface`](#storageadapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
    - [`Phalcon\Storage\Adapter\Apcu`](#storageadapterapcu)
    - [`Phalcon\Storage\Adapter\Libmemcached`](#storageadapterlibmemcached)
    - [`Phalcon\Storage\Adapter\Memory`](#storageadaptermemory)
    - [`Phalcon\Storage\Adapter\Redis`](#storageadapterredis)
    - [`Phalcon\Storage\Adapter\Stream`](#storageadapterstream)
    - [`Phalcon\Storage\Adapter\Weak`](#storageadapterweak)

</div>

__Uses__ `DateInterval` · `DateTime` · `Exception` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Exception` · `Phalcon\Support\Helper\Arr\Get`
{ .api-uses }

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
<a class="api-item" href="#storageadapterabstractadapter-getarrval">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getArrVal</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reads an element from an array, optionally casting it. Delegates to the</span>
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
<span class="desc">Whether a leading prefix is stripped from incoming keys before the
adapter prefix is applied. Disable when keys are externally
generated identifiers that may legitimately start with the prefix
text (e.g. session ids).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `clear()` { #storageadapterabstractadapter-clear }

```php
abstract public function clear(): bool;
```

Flushes/clears the cache

#### `decrement()` { #storageadapterabstractadapter-decrement }

```php
public function decrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `delete()` { #storageadapterabstractadapter-delete }

```php
public function delete( string $key ): bool;
```

Deletes data from the adapter

#### `deleteMultiple()` { #storageadapterabstractadapter-deletemultiple }

```php
public function deleteMultiple( array $keys ): bool;
```

Deletes data from the adapter

#### `get()` { #storageadapterabstractadapter-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

#### `getAdapter()` { #storageadapterabstractadapter-getadapter }

```php
public function getAdapter(): mixed;
```

Returns the adapter - connects to the storage if not connected

#### `getDefaultSerializer()` { #storageadapterabstractadapter-getdefaultserializer }

```php
public function getDefaultSerializer(): string;
```

Name of the default serializer class

#### `getEventsManager()` { #storageadapterabstractadapter-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Get the event manager

#### `getKeys()` { #storageadapterabstractadapter-getkeys }

```php
abstract public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

#### `getLifetime()` { #storageadapterabstractadapter-getlifetime }

```php
public function getLifetime(): int;
```

Returns the lifetime

#### `getPrefix()` { #storageadapterabstractadapter-getprefix }

```php
public function getPrefix(): string;
```

Returns the prefix

#### `getSerializer()` { #storageadapterabstractadapter-getserializer }

```php
public function getSerializer(): SerializerInterface;
```

Get the serializer

#### `has()` { #storageadapterabstractadapter-has }

```php
public function has( string $key ): bool;
```

Checks if an element exists in the cache

#### `increment()` { #storageadapterabstractadapter-increment }

```php
public function increment(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `set()` { #storageadapterabstractadapter-set }

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

#### `setDefaultSerializer()` { #storageadapterabstractadapter-setdefaultserializer }

```php
public function setDefaultSerializer( string $serializer ): void;
```

#### `setEventsManager()` { #storageadapterabstractadapter-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the event manager

<div class="api-group">Protected · 18</div>

#### `__construct()` { #storageadapterabstractadapter-__construct }

```php
protected function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

AbstractAdapter constructor.

#### `doDecrement()` { #storageadapterabstractadapter-dodecrement }

```php
abstract protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `doDelete()` { #storageadapterabstractadapter-dodelete }

```php
abstract protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doDeleteMultiple()` { #storageadapterabstractadapter-dodeletemultiple }

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from the adapter

#### `doGet()` { #storageadapterabstractadapter-doget }

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

#### `doGetData()` { #storageadapterabstractadapter-dogetdata }

```php
protected function doGetData( string $key ): mixed;
```

#### `doHas()` { #storageadapterabstractadapter-dohas }

```php
abstract protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

#### `doIncrement()` { #storageadapterabstractadapter-doincrement }

```php
abstract protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `doSet()` { #storageadapterabstractadapter-doset }

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

#### `fire()` { #storageadapterabstractadapter-fire }

```php
protected function fire(
    string $eventName,
    mixed $keys
): void;
```

Trigger an event for the eventsManager.

#### `getArrVal()` { #storageadapterabstractadapter-getarrval }

```php
protected function getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null,
    string $cast = null
): mixed;
```

Reads an element from an array, optionally casting it. Delegates to the
canonical Support\Helper\Arr\Get helper.

@todo Remove this wrapper when we get traits

#### `getFilteredKeys()` { #storageadapterabstractadapter-getfilteredkeys }

```php
protected function getFilteredKeys(
    mixed $keys,
    string $prefix
): array;
```

Filters the keys array based on global and passed prefix

#### `getKeyWithoutPrefix()` { #storageadapterabstractadapter-getkeywithoutprefix }

```php
protected function getKeyWithoutPrefix( string $key ): string;
```

Check if the key has the prefix and remove it, otherwise just return the
key unaltered. When the `stripPrefix` option is `false` the key is
always returned unaltered.

#### `getPrefixedKey()` { #storageadapterabstractadapter-getprefixedkey }

```php
protected function getPrefixedKey( mixed $key ): string;
```

Returns the key requested, prefixed

#### `getSerializedData()` { #storageadapterabstractadapter-getserializeddata }

```php
protected function getSerializedData( mixed $content ): mixed;
```

Returns serialized data

#### `getTtl()` { #storageadapterabstractadapter-getttl }

```php
protected function getTtl( mixed $ttl ): int;
```

Calculates the TTL for a cache item

#### `getUnserializedData()` { #storageadapterabstractadapter-getunserializeddata }

```php
protected function getUnserializedData(
    mixed $content,
    mixed $defaultValue = null
): mixed;
```

Returns unserialized data

#### `initSerializer()` { #storageadapterabstractadapter-initserializer }

```php
protected function initSerializer(): void;
```

Initializes the serializer


## Storage\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/AdapterInterface.zep){ .src-btn }

Interface for Phalcon\Logger adapters

<div class="api-tree" markdown>

- **`Phalcon\Storage\Adapter\AdapterInterface`**
    - [`Phalcon\Cache\Adapter\AdapterInterface`](phalcon_cache.md#cacheadapteradapterinterface)

</div>

__Uses__ `Phalcon\Storage\Serializer\SerializerInterface`
{ .api-uses }

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

#### `clear()` { #storageadapteradapterinterface-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `decrement()` { #storageadapteradapterinterface-decrement }

```php
public function decrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `delete()` { #storageadapteradapterinterface-delete }

```php
public function delete( string $key ): bool;
```

Deletes data from the adapter

#### `deleteMultiple()` { #storageadapteradapterinterface-deletemultiple }

```php
public function deleteMultiple( array $keys ): bool;
```

Deletes multiple data from the adapter

#### `get()` { #storageadapteradapterinterface-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

#### `getAdapter()` { #storageadapteradapterinterface-getadapter }

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the backend
server(s)

#### `getKeys()` { #storageadapteradapterinterface-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

#### `getPrefix()` { #storageadapteradapterinterface-getprefix }

```php
public function getPrefix(): string;
```

Returns the prefix for the keys

#### `has()` { #storageadapteradapterinterface-has }

```php
public function has( string $key ): bool;
```

Checks if an element exists in the cache

#### `increment()` { #storageadapteradapterinterface-increment }

```php
public function increment(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `set()` { #storageadapteradapterinterface-set }

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

#### `setForever()` { #storageadapteradapterinterface-setforever }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Apcu.zep){ .src-btn }

Apcu adapter

Capabilities:
- Counters: native atomic (apcu_inc()/apcu_dec()).
- getKeys(): APCUIterator regex scan over the shared APCu store.
- Serializers: Phalcon-side only; no backend-native serializer.

@property array $options

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - **`Phalcon\Storage\Adapter\Apcu`**
        - [`Phalcon\Cache\Adapter\Apcu`](phalcon_cache.md#cacheadapterapcu)

</div>

__Uses__ `APCUIterator` · `DateInterval` · `Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`
{ .api-uses }

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
<a class="api-item" href="#storageadapterapcu-phpapcudec">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|int</code>
<code class="sig"><span class="sf">phpApcuDec</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$step</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">@todo Remove the below once we get traits</span>
</a>
<a class="api-item" href="#storageadapterapcu-phpapcudelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|array</code>
<code class="sig"><span class="sf">phpApcuDelete</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#storageadapterapcu-phpapcuexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|array</code>
<code class="sig"><span class="sf">phpApcuExists</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#storageadapterapcu-phpapcufetch">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">phpApcuFetch</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#storageadapterapcu-phpapcuinc">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|int</code>
<code class="sig"><span class="sf">phpApcuInc</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$step</span><span class="sm"> = 1</span></span>)</code>
</a>
<a class="api-item" href="#storageadapterapcu-phpapcuiterator">
<code class="vis vis-protected">protected</code>
<code class="ret">APCUIterator|bool</code>
<code class="sig"><span class="sf">phpApcuIterator</span>( <span class="st">string</span> <span class="sv">$pattern</span> )</code>
</a>
<a class="api-item" href="#storageadapterapcu-phpapcustore">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|array</code>
<code class="sig"><span class="sf">phpApcuStore</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$payload</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$ttl</span><span class="sm"> = 0</span></span>)</code>
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

#### `__construct()` { #storageadapterapcu-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Apcu constructor.

#### `clear()` { #storageadapterapcu-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getKeys()` { #storageadapterapcu-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

#### `setForever()` { #storageadapterapcu-setforever }

```php
public function setForever(
    string $key,
    mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 14</div>

#### `doDecrement()` { #storageadapterapcu-dodecrement }

```php
protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `doDelete()` { #storageadapterapcu-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doDeleteMultiple()` { #storageadapterapcu-dodeletemultiple }

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from APCu in a single call

#### `doGetData()` { #storageadapterapcu-dogetdata }

```php
protected function doGetData( string $key );
```

#### `doHas()` { #storageadapterapcu-dohas }

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

#### `doIncrement()` { #storageadapterapcu-doincrement }

```php
protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `doSet()` { #storageadapterapcu-doset }

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

#### `phpApcuDec()` { #storageadapterapcu-phpapcudec }

```php
protected function phpApcuDec(
    mixed $key,
    int $step = 1
): bool|int;
```

@todo Remove the below once we get traits

#### `phpApcuDelete()` { #storageadapterapcu-phpapcudelete }

```php
protected function phpApcuDelete( mixed $key ): bool|array;
```

#### `phpApcuExists()` { #storageadapterapcu-phpapcuexists }

```php
protected function phpApcuExists( mixed $key ): bool|array;
```

#### `phpApcuFetch()` { #storageadapterapcu-phpapcufetch }

```php
protected function phpApcuFetch( mixed $key ): mixed;
```

#### `phpApcuInc()` { #storageadapterapcu-phpapcuinc }

```php
protected function phpApcuInc(
    mixed $key,
    int $step = 1
): bool|int;
```

#### `phpApcuIterator()` { #storageadapterapcu-phpapcuiterator }

```php
protected function phpApcuIterator( string $pattern ): APCUIterator|bool;
```

#### `phpApcuStore()` { #storageadapterapcu-phpapcustore }

```php
protected function phpApcuStore(
    mixed $key,
    mixed $payload,
    int $ttl = 0
): bool|array;
```


## Storage\Adapter\Libmemcached

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Libmemcached.zep){ .src-btn }

Libmemcached adapter

Capabilities:
- Counters: native atomic (Memcached::increment()/decrement()).
- getKeys(): Memcached::getAllKeys(), which is server-dependent and may be
  incomplete or unavailable on modern memcached builds.
- Serializers: Phalcon-side plus libmemcached's own options.

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - **`Phalcon\Storage\Adapter\Libmemcached`**
        - [`Phalcon\Cache\Adapter\Libmemcached`](phalcon_cache.md#cacheadapterlibmemcached)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\Exception` · `Phalcon\Storage\Exceptions\ConnectionFailed` · `Phalcon\Storage\Exceptions\InvalidConfiguration` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`
{ .api-uses }

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

#### `__construct()` { #storageadapterlibmemcached-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Libmemcached constructor.

#### `clear()` { #storageadapterlibmemcached-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getAdapter()` { #storageadapterlibmemcached-getadapter }

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the Memcached
server(s)

#### `getKeys()` { #storageadapterlibmemcached-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

#### `setForever()` { #storageadapterlibmemcached-setforever }

```php
public function setForever(
    string $key,
    mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 6</div>

#### `doDecrement()` { #storageadapterlibmemcached-dodecrement }

```php
protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `doDelete()` { #storageadapterlibmemcached-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doDeleteMultiple()` { #storageadapterlibmemcached-dodeletemultiple }

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from Memcached using a single deleteMulti call

#### `doHas()` { #storageadapterlibmemcached-dohas }

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

#### `doIncrement()` { #storageadapterlibmemcached-doincrement }

```php
protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `doSet()` { #storageadapterlibmemcached-doset }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Memory.zep){ .src-btn }

Memory adapter

@property array $data
@property array $options

Capabilities:
- Scope: per-request, in-process; nothing is shared across requests or
  processes and the store is discarded when the request ends.
- Counters: read-modify-write on the in-memory array.
- getKeys(): in-memory array scan (cheap).
- Optional maxItems FIFO cap drops the oldest entry before a new key is set.

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - **`Phalcon\Storage\Adapter\Memory`**
        - [`Phalcon\Cache\Adapter\Memory`](phalcon_cache.md#cacheadaptermemory)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`
{ .api-uses }

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
<span class="desc">Maximum number of items retained in the in-memory store.
0 (default) keeps the original unbounded behavior; a positive
value drops the oldest entry FIFO before a new key is stored.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #storageadaptermemory-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Memory constructor.

#### `clear()` { #storageadaptermemory-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getKeys()` { #storageadaptermemory-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

#### `getMaxItems()` { #storageadaptermemory-getmaxitems }

```php
public function getMaxItems(): int;
```

Returns the configured store cap (0 = unlimited). See setMaxItems().

#### `setForever()` { #storageadaptermemory-setforever }

```php
public function setForever(
    string $key,
    mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

#### `setMaxItems()` { #storageadaptermemory-setmaxitems }

```php
public function setMaxItems( int $maxItems ): static;
```

Caps the number of items retained in the in-memory store.
0 disables the cap (the default; preserves the original
unbounded behavior). When the cap is exceeded, the oldest
entry is evicted FIFO before a new key is stored.

<div class="api-group">Protected · 6</div>

#### `doDecrement()` { #storageadaptermemory-dodecrement }

```php
protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `doDelete()` { #storageadaptermemory-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doGetData()` { #storageadaptermemory-dogetdata }

```php
protected function doGetData( string $key );
```

#### `doHas()` { #storageadaptermemory-dohas }

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

#### `doIncrement()` { #storageadaptermemory-doincrement }

```php
protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `doSet()` { #storageadaptermemory-doset }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Redis.zep){ .src-btn }

Redis adapter

Capabilities:
- Counters: native atomic (incrBy()/decrBy()).
- getKeys(): non-blocking SCAN iteration.
- Serializers: Phalcon-side, or backend-native via OPT_SERIALIZER. Native
  serializers change the bytes at rest and are not interchangeable with
  Phalcon-side serializers.

@property array $options

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - **`Phalcon\Storage\Adapter\Redis`**
        - [`Phalcon\Cache\Adapter\Redis`](phalcon_cache.md#cacheadapterredis)
        - [`Phalcon\Storage\Adapter\RedisCluster`](#storageadapterrediscluster)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\Exception` · `Phalcon\Storage\Exceptions\AuthenticationFailed` · `Phalcon\Storage\Exceptions\ConnectionFailed` · `Phalcon\Storage\Exceptions\DatabaseSelectionFailed` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception`
{ .api-uses }

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

#### `__construct()` { #storageadapterredis-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Redis constructor.

#### `clear()` { #storageadapterredis-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getAdapter()` { #storageadapterredis-getadapter }

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the Redis
server(s)

#### `getKeys()` { #storageadapterredis-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

#### `setForever()` { #storageadapterredis-setforever }

```php
public function setForever(
    string $key,
    mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 6</div>

#### `doDecrement()` { #storageadapterredis-dodecrement }

```php
protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `doDelete()` { #storageadapterredis-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doDeleteMultiple()` { #storageadapterredis-dodeletemultiple }

```php
protected function doDeleteMultiple( array $keys ): bool;
```

Deletes multiple keys from Redis using a single unlink call

#### `doHas()` { #storageadapterredis-dohas }

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

#### `doIncrement()` { #storageadapterredis-doincrement }

```php
protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `doSet()` { #storageadapterredis-doset }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/RedisCluster.zep){ .src-btn }

RedisCluster adapter

Capabilities (in addition to Redis):
- Counters: native atomic (incrBy()/decrBy()).
- getKeys(): blocking KEYS across all master nodes (per-node SCAN is left to
  the redesign); clear() flushes every master.
- Serializers: Phalcon-side, or backend-native via OPT_SERIALIZER.

@property array $options

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Redis`](#storageadapterredis)
        - **`Phalcon\Storage\Adapter\RedisCluster`**
            - [`Phalcon\Cache\Adapter\RedisCluster`](phalcon_cache.md#cacheadapterrediscluster)

</div>

__Uses__ `Phalcon\Storage\Exceptions\ClusterConnectionFailed` · `Phalcon\Storage\SerializerFactory`
{ .api-uses }

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

#### `__construct()` { #storageadapterrediscluster-__construct }

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

#### `clear()` { #storageadapterrediscluster-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getAdapter()` { #storageadapterrediscluster-getadapter }

```php
public function getAdapter(): mixed;
```

Returns the already connected adapter or connects to the Redis
Cluster server(s)

#### `getKeys()` { #storageadapterrediscluster-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Returns all the keys stored

RedisCluster::scan() iterates one node at a time, so the blocking KEYS
command is retained here (phpredis routes it across the masters). The
per-node SCAN migration is left to the storage redesign.


## Storage\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Stream.zep){ .src-btn }

Stream adapter

Capabilities:
- Counters: read-modify-write (doHas()/doGet()/doSet()); not atomic and racy
  across concurrent processes.
- getKeys(): recursive directory traversal; cost grows with the entry count.
- Serializers: Phalcon-side only.

@property string $storageDir
@property array  $options

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - **`Phalcon\Storage\Adapter\Stream`**
        - [`Phalcon\Cache\Adapter\Stream`](phalcon_cache.md#cacheadapterstream)

</div>

__Uses__ `DateInterval` · `FilesystemIterator` · `Iterator` · `Phalcon\Storage\Exceptions\InvalidConfiguration` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\Exception` · `RecursiveDirectoryIterator` · `RecursiveIteratorIterator`
{ .api-uses }

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
<a class="api-item" href="#storageadapterstream-phpfileexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFileExists</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
<span class="desc">@todo Remove the methods below when we get traits</span>
</a>
<a class="api-item" href="#storageadapterstream-phpfilegetcontents">
<code class="vis vis-protected">protected</code>
<code class="ret">string|bool</code>
<code class="sig"><span class="sf">phpFileGetContents</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
</a>
<a class="api-item" href="#storageadapterstream-phpfileputcontents">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">phpFilePutContents</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$context</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#storageadapterstream-phpfopen">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">phpFopen</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span></span>)</code>
</a>
<a class="api-item" href="#storageadapterstream-phpunlink">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpUnlink</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
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

#### `__construct()` { #storageadapterstream-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Stream constructor.

#### `clear()` { #storageadapterstream-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getKeys()` { #storageadapterstream-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

#### `setForever()` { #storageadapterstream-setforever }

```php
public function setForever(
    string $key,
    mixed $value
): bool;
```

Stores data in the adapter forever. The key needs to manually deleted
from the adapter.

<div class="api-group">Protected · 11</div>

#### `doDecrement()` { #storageadapterstream-dodecrement }

```php
protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number

#### `doDelete()` { #storageadapterstream-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doGet()` { #storageadapterstream-doget }

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

#### `doHas()` { #storageadapterstream-dohas }

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache and is not expired

#### `doIncrement()` { #storageadapterstream-doincrement }

```php
protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number

#### `doSet()` { #storageadapterstream-doset }

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

#### `phpFileExists()` { #storageadapterstream-phpfileexists }

```php
protected function phpFileExists( string $filename ): bool;
```

@todo Remove the methods below when we get traits

#### `phpFileGetContents()` { #storageadapterstream-phpfilegetcontents }

```php
protected function phpFileGetContents( string $filename ): string|bool;
```

#### `phpFilePutContents()` { #storageadapterstream-phpfileputcontents }

```php
protected function phpFilePutContents(
    string $filename,
    mixed $data,
    int $flags = 0,
    mixed $context = null
): int|bool;
```

#### `phpFopen()` { #storageadapterstream-phpfopen }

```php
protected function phpFopen(
    string $filename,
    string $mode
): mixed;
```

#### `phpUnlink()` { #storageadapterstream-phpunlink }

```php
protected function phpUnlink( string $filename ): bool;
```


## Storage\Adapter\Weak

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Weak.zep){ .src-btn }

Weak Adapter

Capabilities:
- Stores objects only, as WeakReferences; entries vanish when the referenced
  object is garbage-collected.
- TTL is ignored; no serializer is used (none/no-op).
- Counters unsupported: increment()/decrement() return false.
- setForever() is equivalent to set(); getKeys() reads the in-memory list.

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](#storageadapterabstractadapter)
    - **`Phalcon\Storage\Adapter\Weak`**
        - [`Phalcon\Cache\Adapter\Weak`](phalcon_cache.md#cacheadapterweak)

</div>

__Uses__ `DateInterval` · `Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Exception`
{ .api-uses }

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

#### `__construct()` { #storageadapterweak-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $options = []
);
```

Constructor, there are no options

#### `clear()` { #storageadapterweak-clear }

```php
public function clear(): bool;
```

Flushes/clears the cache

#### `getKeys()` { #storageadapterweak-getkeys }

```php
public function getKeys( string $prefix = "" ): array;
```

Stores data in the adapter

#### `setDefaultSerializer()` { #storageadapterweak-setdefaultserializer }

```php
public function setDefaultSerializer( string $serializer ): void;
```

will never set a serializer, WeakReference cannot be serialized

#### `setForever()` { #storageadapterweak-setforever }

```php
public function setForever(
    string $key,
    mixed $value
): bool;
```

For compatiblity only, there is no Forever with WeakReference.

<div class="api-group">Protected · 6</div>

#### `doDecrement()` { #storageadapterweak-dodecrement }

```php
protected function doDecrement(
    string $key,
    int $value = 1
): int|bool;
```

Decrements a stored number - not supported for WeakReference

#### `doDelete()` { #storageadapterweak-dodelete }

```php
protected function doDelete( string $key ): bool;
```

Deletes data from the adapter

#### `doGet()` { #storageadapterweak-doget }

```php
protected function doGet(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Reads data from the adapter

#### `doHas()` { #storageadapterweak-dohas }

```php
protected function doHas( string $key ): bool;
```

Checks if an element exists in the cache

#### `doIncrement()` { #storageadapterweak-doincrement }

```php
protected function doIncrement(
    string $key,
    int $value = 1
): int|bool;
```

Increments a stored number - not supported for WeakReference

#### `doSet()` { #storageadapterweak-doset }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exception.zep){ .src-btn }

Phalcon\Storage\Exception

Exceptions thrown in Phalcon\Storage will use this class

<div class="api-tree" markdown>

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/AuthenticationFailed.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Storage\Exception`](#storageexception)
        - **`Phalcon\Storage\Exceptions\AuthenticationFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageexceptionsauthenticationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #storageexceptionsauthenticationfailed-__construct }

```php
public function __construct();
```


## Storage\Exceptions\ClusterConnectionFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/ClusterConnectionFailed.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Storage\Exception`](#storageexception)
        - **`Phalcon\Storage\Exceptions\ClusterConnectionFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`
{ .api-uses }


## Storage\Exceptions\ConnectionFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/ConnectionFailed.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Storage\Exception`](#storageexception)
        - **`Phalcon\Storage\Exceptions\ConnectionFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`
{ .api-uses }


## Storage\Exceptions\DatabaseSelectionFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/DatabaseSelectionFailed.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Storage\Exception`](#storageexception)
        - **`Phalcon\Storage\Exceptions\DatabaseSelectionFailed`**

</div>

__Uses__ `Phalcon\Storage\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#storageexceptionsdatabaseselectionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #storageexceptionsdatabaseselectionfailed-__construct }

```php
public function __construct();
```


## Storage\Exceptions\InvalidConfiguration

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/InvalidConfiguration.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Storage\Exception`](#storageexception)
        - **`Phalcon\Storage\Exceptions\InvalidConfiguration`**

</div>

__Uses__ `Phalcon\Storage\Exception`
{ .api-uses }


## Storage\Exceptions\StorageError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exceptions/StorageError.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Storage\Exception`](#storageexception)
        - **`Phalcon\Storage\Exceptions\StorageError`**

</div>

__Uses__ `Phalcon\Storage\Exception`
{ .api-uses }


## Storage\SerializerFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/SerializerFactory.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Storage\SerializerFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\Serializer\SerializerInterface`
{ .api-uses }

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

#### `__construct()` { #storageserializerfactory-__construct }

```php
public function __construct( array $services = [] );
```

SerializerFactory constructor.

#### `newInstance()` { #storageserializerfactory-newinstance }

```php
public function newInstance( string $name ): SerializerInterface;
```

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #storageserializerfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #storageserializerfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Storage\Serializer\AbstractSerializer

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/AbstractSerializer.zep){ .src-btn }

@property mixed $data
@property bool  $isSuccess

<div class="api-tree" markdown>

- **`Phalcon\Storage\Serializer\AbstractSerializer`** — implements [`Phalcon\Storage\Serializer\SerializerInterface`](#storageserializerserializerinterface)
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

#### `__construct()` { #storageserializerabstractserializer-__construct }

```php
public function __construct( mixed $data = null );
```

AbstractSerializer constructor.

#### `__serialize()` { #storageserializerabstractserializer-__serialize }

```php
public function __serialize(): array;
```

Serialize data

#### `__unserialize()` { #storageserializerabstractserializer-__unserialize }

```php
public function __unserialize( array $data ): void;
```

Unserialize data

#### `getData()` { #storageserializerabstractserializer-getdata }

```php
public function getData(): mixed;
```

#### `isSuccess()` { #storageserializerabstractserializer-issuccess }

```php
public function isSuccess(): bool;
```

Returns `true` if the serialize/unserialize operation was successful;
`false` otherwise

#### `setData()` { #storageserializerabstractserializer-setdata }

```php
public function setData( mixed $data ): void;
```

<div class="api-group">Protected · 1</div>

#### `isSerializable()` { #storageserializerabstractserializer-isserializable }

```php
protected function isSerializable( mixed $data ): bool;
```

If this returns true, then the data is returned as is


## Storage\Serializer\Base64

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Base64.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - **`Phalcon\Storage\Serializer\Base64`**

</div>

__Uses__ `Phalcon\Storage\Serializer\Exceptions\InvalidSerializationInput` · `Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput`
{ .api-uses }

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
<a class="api-item" href="#storageserializerbase64-phpbase64decode">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpBase64Decode</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strict</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Wrapper for base64_decode</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `serialize()` { #storageserializerbase64-serialize }

```php
public function serialize(): string;
```

Serializes data

#### `unserialize()` { #storageserializerbase64-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializes data

@retrun void

<div class="api-group">Protected · 1</div>

#### `phpBase64Decode()` { #storageserializerbase64-phpbase64decode }

```php
protected function phpBase64Decode(
    string $input,
    bool $strict = false
);
```

Wrapper for base64_decode


## Storage\Serializer\Exceptions\InvalidSerializationInput

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Exceptions/InvalidSerializationInput.zep){ .src-btn }

<div class="api-tree" markdown>

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

#### `__construct()` { #storageserializerexceptionsinvalidserializationinput-__construct }

```php
public function __construct();
```


## Storage\Serializer\Exceptions\InvalidUnserializationInput

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Exceptions/InvalidUnserializationInput.zep){ .src-btn }

<div class="api-tree" markdown>

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

#### `__construct()` { #storageserializerexceptionsinvalidunserializationinput-__construct }

```php
public function __construct();
```


## Storage\Serializer\Igbinary

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Igbinary.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - **`Phalcon\Storage\Serializer\Igbinary`**
        - [`Phalcon\Storage\Serializer\Msgpack`](#storageserializermsgpack)

</div>

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
<a class="api-item" href="#storageserializerigbinary-phpigbinaryserialize">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">phpIgbinarySerialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Wrapper for <code>igbinary_serialize</code></span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `serialize()` { #storageserializerigbinary-serialize }

```php
public function serialize(): mixed;
```

Serializes data

#### `unserialize()` { #storageserializerigbinary-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializes data

<div class="api-group">Protected · 3</div>

#### `doSerialize()` { #storageserializerigbinary-doserialize }

```php
protected function doSerialize( mixed $value ): string|null;
```

Serialize

#### `doUnserialize()` { #storageserializerigbinary-dounserialize }

```php
protected function doUnserialize( mixed $value );
```

Unserialize

#### `phpIgbinarySerialize()` { #storageserializerigbinary-phpigbinaryserialize }

```php
protected function phpIgbinarySerialize( mixed $value ): string|null;
```

Wrapper for `igbinary_serialize`


## Storage\Serializer\Json

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Json.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - **`Phalcon\Storage\Serializer\Json`**

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Support\Helper\Json\Encode`
{ .api-uses }

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

#### `__construct()` { #storageserializerjson-__construct }

```php
public function __construct( mixed $data = null );
```

AbstractSerializer constructor.

#### `serialize()` { #storageserializerjson-serialize }

```php
public function serialize(): mixed;
```

Serializes data

#### `unserialize()` { #storageserializerjson-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializes data


## Storage\Serializer\MemcachedIgbinary

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedIgbinary.zep){ .src-btn }

Serializer using the built-in Memcached 'igbinary' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\MemcachedIgbinary`**

</div>


## Storage\Serializer\MemcachedJson

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedJson.zep){ .src-btn }

Serializer using the built-in Memcached 'json' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\MemcachedJson`**

</div>


## Storage\Serializer\MemcachedPhp

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedPhp.zep){ .src-btn }

Serializer using the built-in Memcached 'php' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\MemcachedPhp`**

</div>


## Storage\Serializer\Msgpack

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Msgpack.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\Igbinary`](#storageserializerigbinary)
        - **`Phalcon\Storage\Serializer\Msgpack`**

</div>

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

#### `doSerialize()` { #storageserializermsgpack-doserialize }

```php
protected function doSerialize( mixed $value ): string;
```

Serializes data

#### `doUnserialize()` { #storageserializermsgpack-dounserialize }

```php
protected function doUnserialize( mixed $value );
```


## Storage\Serializer\None

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/None.zep){ .src-btn }

<div class="api-tree" markdown>

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

#### `serialize()` { #storageserializernone-serialize }

```php
public function serialize(): mixed;
```

Serializes data

#### `unserialize()` { #storageserializernone-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializes data

@retrun void


## Storage\Serializer\Php

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Php.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - **`Phalcon\Storage\Serializer\Php`**

</div>

__Uses__ `Phalcon\Storage\Serializer\Exceptions\InvalidUnserializationInput`
{ .api-uses }

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

#### `serialize()` { #storageserializerphp-serialize }

```php
public function serialize(): mixed;
```

Serializes data

#### `unserialize()` { #storageserializerphp-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializes data


## Storage\Serializer\RedisIgbinary

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisIgbinary.zep){ .src-btn }

Serializer using the built-in Redis 'igbinary' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\RedisIgbinary`**

</div>


## Storage\Serializer\RedisJson

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisJson.zep){ .src-btn }

Serializer using the built-in Redis 'json' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\RedisJson`**

</div>


## Storage\Serializer\RedisMsgpack

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisMsgpack.zep){ .src-btn }

Serializer using the built-in Redis 'msgpack' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\RedisMsgpack`**

</div>


## Storage\Serializer\RedisNone

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisNone.zep){ .src-btn }

Serializer using the built-in Redis 'none' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\RedisNone`**

</div>


## Storage\Serializer\RedisPhp

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisPhp.zep){ .src-btn }

Serializer using the built-in Redis 'php' serializer

<div class="api-tree" markdown>

- [`Phalcon\Storage\Serializer\AbstractSerializer`](#storageserializerabstractserializer)
    - [`Phalcon\Storage\Serializer\None`](#storageserializernone)
        - **`Phalcon\Storage\Serializer\RedisPhp`**

</div>


## Storage\Serializer\SerializerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/SerializerInterface.zep){ .src-btn }

<div class="api-tree" markdown>

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

#### `getData()` { #storageserializerserializerinterface-getdata }

```php
public function getData(): mixed;
```

#### `serialize()` { #storageserializerserializerinterface-serialize }

```php
public function serialize(): mixed;
```

Serializes data

#### `setData()` { #storageserializerserializerinterface-setdata }

```php
public function setData( mixed $data ): void;
```

#### `unserialize()` { #storageserializerserializerinterface-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializes data
