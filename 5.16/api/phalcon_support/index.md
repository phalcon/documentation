---
title: "Phalcon Support"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Support

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Support\AbstractLocator

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/AbstractLocator.zep">Source on GitHub</a>

Abstract base class for service locators.

Provides a unified way to register, validate, and resolve services
from a DI container, with support for both legacy Di and new Container.

@template T of object

<div class="api-tree">

- **`Phalcon\Support\AbstractLocator`**
- [`Phalcon\Auth\Access\AccessLocator`](/5.16/api/phalcon_auth/#authaccessaccesslocator)
- [`Phalcon\Auth\Adapter\AdapterLocator`](/5.16/api/phalcon_auth/#authadapteradapterlocator)
- [`Phalcon\Auth\Guard\GuardLocator`](/5.16/api/phalcon_auth/#authguardguardlocator)

</div>

__Uses__ `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportabstractlocator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#supportabstractlocator-getall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAll</span>()</code>
<span class="desc">Returns the full registered service map (defaults plus any added via</span>
</a>
<a class="api-item" href="#supportabstractlocator-getclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getClass</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the class-string registered under the given name.</span>
</a>
<a class="api-item" href="#supportabstractlocator-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Whether a service with the given name is registered.</span>
</a>
<a class="api-item" href="#supportabstractlocator-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieve a service instance from the container.</span>
</a>
<a class="api-item" href="#supportabstractlocator-register">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">register</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Register a service or override an existing one.</span>
</a>
<a class="api-item" href="#supportabstractlocator-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
<span class="desc">Get the exception class to throw on errors.</span>
</a>
<a class="api-item" href="#supportabstractlocator-getinterfaceclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getInterfaceClass</span>()</code>
<span class="desc">Get the interface/class that all registered services must implement.</span>
</a>
<a class="api-item" href="#supportabstractlocator-getservice">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Get the service class name for a given name.</span>
</a>
<a class="api-item" href="#supportabstractlocator-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Get the default services for this locator.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Collection|DiInterface</code>
<code class="sig"><span class="sv">$container</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$services</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="supportabstractlocator-__construct"><code>__construct()</code></h4>

```php
public function __construct(
mixed $container,
array $services = []
);
```

<h4 id="supportabstractlocator-getall"><code>getAll()</code></h4>

```php
public function getAll(): array;
```

Returns the full registered service map (defaults plus any added via
register()).

<h4 id="supportabstractlocator-getclass"><code>getClass()</code></h4>

```php
public function getClass( string $name ): string;
```

Returns the class-string registered under the given name.

<h4 id="supportabstractlocator-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Whether a service with the given name is registered.

<h4 id="supportabstractlocator-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): object;
```

Retrieve a service instance from the container.

On the `DiInterface` path this returns the container's **shared**
instance (`getShared()`) — despite the name, it is not a fresh build.
Locators whose services carry per-activation state should override this
method to resolve a fresh instance; see `Auth\Access\AccessLocator`, which uses
`ContainerResolver::resolveFresh` for exactly that reason.

<h4 id="supportabstractlocator-register"><code>register()</code></h4>

```php
public function register(
string $name,
string $definition
): static;
```

Register a service or override an existing one.

<div class="api-group">Protected · 4</div>

<h4 id="supportabstractlocator-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
abstract protected function getExceptionClass(): string;
```

Get the exception class to throw on errors.

<h4 id="supportabstractlocator-getinterfaceclass"><code>getInterfaceClass()</code></h4>

```php
abstract protected function getInterfaceClass(): string;
```

Get the interface/class that all registered services must implement.
This allows different locators to enforce different contracts.

<h4 id="supportabstractlocator-getservice"><code>getService()</code></h4>

```php
protected function getService( string $name ): string;
```

Get the service class name for a given name.

<h4 id="supportabstractlocator-getservices"><code>getServices()</code></h4>

```php
abstract protected function getServices(): array;
```

Get the default services for this locator.

## Support\Collection

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection.zep">Source on GitHub</a>

`Phalcon\Support\Collection` is a supercharged object-oriented array. It implements:
- [ArrayAccess](https://www.php.net/manual/en/class.arrayaccess.php)
- [Countable](https://www.php.net/manual/en/class.countable.php)
- [IteratorAggregate](https://www.php.net/manual/en/class.iteratoraggregate.php)
- [JsonSerializable](https://www.php.net/manual/en/class.jsonserializable.php)

It can be used in any part of the application that needs collection of data
Such implementations are for instance accessing globals `$_GET`, `$_POST`
etc.

@property array       $data
@property bool        $insensitive
@property array       $lowerKeys
@property bool        $strictNull
@property string|null $type

<div class="api-tree">

- **`Phalcon\Support\Collection`** — implements [`Phalcon\Support\Collection\CollectionInterface`](#supportcollectioncollectioninterface), `Countable`, `JsonSerializable`
- [`Phalcon\Config\Config`](/5.16/api/phalcon_config/#configconfig)
- [`Phalcon\Html\Attributes`](/5.16/api/phalcon_html/#htmlattributes)
- [`Phalcon\Session\Bag`](/5.16/api/phalcon_session/#sessionbag)
- [`Phalcon\Support\Collection\ReadOnlyCollection`](#supportcollectionreadonlycollection)
- [`Phalcon\Support\Registry`](#supportregistry)

</div>

__Uses__ `ArrayAccess` · `ArrayIterator` · `Countable` · `InvalidArgumentException` · `IteratorAggregate` · `JsonSerializable` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Collection\Exceptions\InvalidValueType` · `Phalcon\Support\Helper\Json\Encode` · `Traversable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportcollection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strictNull</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Collection constructor.</span>
</a>
<a class="api-item" href="#supportcollection-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Magic getter to get an element from the collection</span>
</a>
<a class="api-item" href="#supportcollection-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Magic isset to check whether an element exists or not</span>
</a>
<a class="api-item" href="#supportcollection-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__serialize</span>()</code>
<span class="desc">Returns the state of the collection for serialization, including</span>
</a>
<a class="api-item" href="#supportcollection-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Magic setter to assign values to an element</span>
</a>
<a class="api-item" href="#supportcollection-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unserialize</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Restores the collection state. Accepts both the structured format</span>
</a>
<a class="api-item" href="#supportcollection-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Magic unset to remove an element from the collection</span>
</a>
<a class="api-item" href="#supportcollection-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears the internal collection</span>
</a>
<a class="api-item" href="#supportcollection-column">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">column</span>( <span class="st">string</span> <span class="sv">$propertyOrMethod</span> )</code>
<span class="desc">Returns the values from a single property/method extracted from every</span>
</a>
<a class="api-item" href="#supportcollection-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Count elements of an object</span>
</a>
<a class="api-item" href="#supportcollection-each">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">each</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Invokes the callback for every item in the collection. Returns the</span>
</a>
<a class="api-item" href="#supportcollection-filter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Returns a new collection of items for which the callback returns true.</span>
</a>
<a class="api-item" href="#supportcollection-first">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">first</span>()</code>
<span class="desc">Returns the first value in the collection, or null if empty.</span>
</a>
<a class="api-item" href="#supportcollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Get the element from the collection</span>
</a>
<a class="api-item" href="#supportcollection-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">Traversable</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
<span class="desc">Returns the iterator of the class</span>
</a>
<a class="api-item" href="#supportcollection-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span> )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#supportcollection-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns the configured runtime type guard, or null if none.</span>
</a>
<a class="api-item" href="#supportcollection-getvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValues</span>()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#supportcollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Get the element from the collection</span>
</a>
<a class="api-item" href="#supportcollection-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Initialize internal array</span>
</a>
<a class="api-item" href="#supportcollection-isempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isEmpty</span>()</code>
<span class="desc">Return if the collection is empty</span>
</a>
<a class="api-item" href="#supportcollection-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">jsonSerialize</span>()</code>
<span class="desc">Specify data which should be serialized to JSON</span>
</a>
<a class="api-item" href="#supportcollection-keys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">keys</span>( <span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span> )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#supportcollection-last">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">last</span>()</code>
<span class="desc">Returns the last value in the collection, or null if empty.</span>
</a>
<a class="api-item" href="#supportcollection-map">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">map</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Returns a new collection with the callback applied to every value.</span>
</a>
<a class="api-item" href="#supportcollection-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Whether a offset exists</span>
</a>
<a class="api-item" href="#supportcollection-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Offset to retrieve</span>
</a>
<a class="api-item" href="#supportcollection-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Offset to set</span>
</a>
<a class="api-item" href="#supportcollection-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Offset to unset</span>
</a>
<a class="api-item" href="#supportcollection-reduce">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">reduce</span>(<span class="prm"><span class="st">callable</span> <span class="sv">$callback</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$initial</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reduces the collection to a single value using the callback. The</span>
</a>
<a class="api-item" href="#supportcollection-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Delete the element from the collection</span>
</a>
<a class="api-item" href="#supportcollection-replace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">replace</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Replaces the collection data with a new array, clearing existing data first</span>
</a>
<a class="api-item" href="#supportcollection-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">BC - delegate to __serialize()</span>
</a>
<a class="api-item" href="#supportcollection-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set an element in the collection</span>
</a>
<a class="api-item" href="#supportcollection-sort">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">sort</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$callback</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$order</span><span class="sm"> = 4</span></span>)</code>
<span class="desc">Returns a new collection sorted by value. Keys are preserved. When a</span>
</a>
<a class="api-item" href="#supportcollection-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the object in an array format</span>
</a>
<a class="api-item" href="#supportcollection-tojson">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toJson</span>( <span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 4194383</span> )</code>
<span class="desc">Returns the object in a JSON format</span>
</a>
<a class="api-item" href="#supportcollection-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">string</span> <span class="sv">$data</span> )</code>
<span class="desc">BC - delegate to __unserialize()</span>
</a>
<a class="api-item" href="#supportcollection-values">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">values</span>()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#supportcollection-where">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">where</span>(<span class="prm"><span class="st">string</span> <span class="sv">$propertyOrMethod</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Returns a new collection containing only the items whose</span>
</a>
<a class="api-item" href="#supportcollection-cloneempty">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">cloneEmpty</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Builds a new collection of the same concrete class, carrying over the</span>
</a>
<a class="api-item" href="#supportcollection-extractvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">extractValue</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$item</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$propertyOrMethod</span></span>)</code>
<span class="desc">Extracts a single value from an item. For arrays returns the keyed</span>
</a>
<a class="api-item" href="#supportcollection-processkey">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processKey</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Checks if we need insensitive keys and if so, converts the element to</span>
</a>
<a class="api-item" href="#supportcollection-setdata">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setData</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Internal method to set data</span>
</a>
<a class="api-item" href="#supportcollection-validatetype">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">validateType</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Validates the value against the configured <code>$type</code> guard. When <code>$type</code></span>
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
<code class="ret">bool</code>
<code class="sig"><span class="sv">$insensitive</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$lowerKeys</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$strictNull</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 40</div>

<h4 id="supportcollection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $data = [],
bool $insensitive = true,
bool $strictNull = false,
string $type = null
);
```

Collection constructor.

<h4 id="supportcollection-__get"><code>__get()</code></h4>

```php
public function __get( string $element ): mixed;
```

Magic getter to get an element from the collection

<h4 id="supportcollection-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $element ): bool;
```

Magic isset to check whether an element exists or not

<h4 id="supportcollection-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

Returns the state of the collection for serialization, including
configuration flags so the round-trip restores full state.

<h4 id="supportcollection-__set"><code>__set()</code></h4>

```php
public function __set(
string $element,
mixed $value
): void;
```

Magic setter to assign values to an element

<h4 id="supportcollection-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

Restores the collection state. Accepts both the structured format
emitted by __serialize() and the legacy flat-array format for BC
with previously serialized data.

<h4 id="supportcollection-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $element ): void;
```

Magic unset to remove an element from the collection

<h4 id="supportcollection-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clears the internal collection

<h4 id="supportcollection-column"><code>column()</code></h4>

```php
public function column( string $propertyOrMethod ): array;
```

Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.

<h4 id="supportcollection-count"><code>count()</code></h4>

```php
public function count(): int;
```

Count elements of an object

<h4 id="supportcollection-each"><code>each()</code></h4>

```php
public function each( callable $callback ): static;
```

Invokes the callback for every item in the collection. Returns the
collection itself to allow chaining.

<h4 id="supportcollection-filter"><code>filter()</code></h4>

```php
public function filter( callable $callback ): static;
```

Returns a new collection of items for which the callback returns true.
Keys are preserved.

<h4 id="supportcollection-first"><code>first()</code></h4>

```php
public function first(): mixed;
```

Returns the first value in the collection, or null if empty.

<h4 id="supportcollection-get"><code>get()</code></h4>

```php
public function get(
string $element,
mixed $defaultValue = null,
string $cast = null
): mixed;
```

Get the element from the collection

<h4 id="supportcollection-getiterator"><code>getIterator()</code></h4>

```php
public function getIterator(): Traversable;
```

Returns the iterator of the class

<h4 id="supportcollection-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

<h4 id="supportcollection-gettype"><code>getType()</code></h4>

```php
public function getType(): string|null;
```

Returns the configured runtime type guard, or null if none.

<h4 id="supportcollection-getvalues"><code>getValues()</code></h4>

```php
public function getValues(): array;
```

Returns the values of the internal array.

<h4 id="supportcollection-has"><code>has()</code></h4>

```php
public function has( string $element ): bool;
```

Get the element from the collection

<h4 id="supportcollection-init"><code>init()</code></h4>

```php
public function init( array $data = [] ): void;
```

Initialize internal array

<h4 id="supportcollection-isempty"><code>isEmpty()</code></h4>

```php
public function isEmpty(): bool;
```

Return if the collection is empty

<h4 id="supportcollection-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

Specify data which should be serialized to JSON

@link https://php.net/manual/en/jsonserializable.jsonserialize.php

<h4 id="supportcollection-keys"><code>keys()</code></h4>

```php
public function keys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

<h4 id="supportcollection-last"><code>last()</code></h4>

```php
public function last(): mixed;
```

Returns the last value in the collection, or null if empty.

<h4 id="supportcollection-map"><code>map()</code></h4>

```php
public function map( callable $callback ): static;
```

Returns a new collection with the callback applied to every value.
Keys are preserved.

<h4 id="supportcollection-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $element ): bool;
```

Whether a offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php

<h4 id="supportcollection-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $element ): mixed;
```

Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php

<h4 id="supportcollection-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $element,
mixed $value
): void;
```

Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php

<h4 id="supportcollection-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $element ): void;
```

Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php

<h4 id="supportcollection-reduce"><code>reduce()</code></h4>

```php
public function reduce(
callable $callback,
mixed $initial = null
): mixed;
```

Reduces the collection to a single value using the callback. The
callback receives `($accumulator, $value, $key)`.

<h4 id="supportcollection-remove"><code>remove()</code></h4>

```php
public function remove( string $element ): void;
```

Delete the element from the collection

<h4 id="supportcollection-replace"><code>replace()</code></h4>

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array, clearing existing data first

<h4 id="supportcollection-serialize"><code>serialize()</code></h4>

```php
public function serialize(): string|null;
```

BC - delegate to __serialize()

<h4 id="supportcollection-set"><code>set()</code></h4>

```php
public function set(
string $element,
mixed $value
): void;
```

Set an element in the collection

<h4 id="supportcollection-sort"><code>sort()</code></h4>

```php
public function sort(
mixed $callback = null,
int $order = 4
): static;
```

Returns a new collection sorted by value. Keys are preserved. When a
callback is supplied, `uasort` is used. Without a callback, the
comparison direction is controlled by the `$order` argument
(`SORT_ASC` or `SORT_DESC`).

<h4 id="supportcollection-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the object in an array format

<h4 id="supportcollection-tojson"><code>toJson()</code></h4>

```php
public function toJson( int $options = 4194383 ): string;
```

Returns the object in a JSON format

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES, JSON_THROW_ON_ERROR

@see https://www.ietf.org/rfc/rfc4627.txt

<h4 id="supportcollection-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( string $data ): void;
```

BC - delegate to __unserialize()

<h4 id="supportcollection-values"><code>values()</code></h4>

```php
public function values(): array;
```

Returns the values of the internal array.

<h4 id="supportcollection-where"><code>where()</code></h4>

```php
public function where(
string $propertyOrMethod,
mixed $value
): static;
```

Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.

<div class="api-group">Protected · 5</div>

<h4 id="supportcollection-cloneempty"><code>cloneEmpty()</code></h4>

```php
protected function cloneEmpty( array $data = [] ): static;
```

Builds a new collection of the same concrete class, carrying over the
configuration (insensitivity, strict-null, type) of the current one.

<h4 id="supportcollection-extractvalue"><code>extractValue()</code></h4>

```php
protected function extractValue(
mixed $item,
string $propertyOrMethod
): mixed;
```

Extracts a single value from an item. For arrays returns the keyed
entry; for objects, prefers a callable method, then a readable
property. Returns null when nothing matches.

<h4 id="supportcollection-processkey"><code>processKey()</code></h4>

```php
protected function processKey( string $element ): string;
```

Checks if we need insensitive keys and if so, converts the element to
lowercase

<h4 id="supportcollection-setdata"><code>setData()</code></h4>

```php
protected function setData(
string $element,
mixed $value
): void;
```

Internal method to set data

<h4 id="supportcollection-validatetype"><code>validateType()</code></h4>

```php
protected function validateType( mixed $value ): void;
```

Validates the value against the configured `$type` guard. When `$type`
is null this is a no-op. Scalar tokens (`int`, `string`, `bool`,
`float`, `array`, `object`) map to their `is_*` checks; anything else
is treated as a class/interface name and tested with `instanceof`.

## Support\Collection\CollectionInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/CollectionInterface.zep">Source on GitHub</a>

Phalcon\Support\Collection\CollectionInterface

<div class="api-tree">

- `ArrayAccess`
- [`Phalcon\Contracts\Support\Collection`](/5.16/api/phalcon_contracts/#contractssupportcollection)
- **`Phalcon\Support\Collection\CollectionInterface`**
- [`Phalcon\Config\ConfigInterface`](/5.16/api/phalcon_config/#configconfiginterface)

</div>

__Uses__ `Phalcon\Contracts\Support\Collection`

## Support\Collection\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exception.zep">Source on GitHub</a>

Exceptions for the Collection object

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- **`Phalcon\Support\Collection\Exception`**
- [`Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`](#supportcollectionexceptionsreadonlyviolation)

</div>

__Uses__ `Phalcon\Support\Exception`

## Support\Collection\Exceptions\InvalidValueType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exceptions/InvalidValueType.zep">Source on GitHub</a>

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\Support\Collection\Exceptions\InvalidValueType`**

</div>

__Uses__ `InvalidArgumentException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportcollectionexceptionsinvalidvaluetype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supportcollectionexceptionsinvalidvaluetype-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $type,
mixed $value
);
```

## Support\Collection\Exceptions\ReadOnlyViolation

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exceptions/ReadOnlyViolation.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Collection\Exception`](#supportcollectionexception)
- **`Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`**

</div>

__Uses__ `Phalcon\Support\Collection\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportcollectionexceptionsreadonlyviolation-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supportcollectionexceptionsreadonlyviolation-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Support\Collection\ReadOnlyCollection

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/ReadOnlyCollection.zep">Source on GitHub</a>

A read only Collection object

<div class="api-tree">

- [`Phalcon\Support\Collection`](#supportcollection)
- **`Phalcon\Support\Collection\ReadOnlyCollection`**

</div>

__Uses__ `Phalcon\Support\Collection` · `Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportcollectionreadonlycollection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strictNull</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
<span class="desc">ReadOnlyCollection constructor.</span>
</a>
<a class="api-item" href="#supportcollectionreadonlycollection-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unserialize</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Restores the collection state during unserialization.</span>
</a>
<a class="api-item" href="#supportcollectionreadonlycollection-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
</a>
<a class="api-item" href="#supportcollectionreadonlycollection-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#supportcollectionreadonlycollection-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Delete the element from the collection</span>
</a>
<a class="api-item" href="#supportcollectionreadonlycollection-replace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">replace</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Replaces the collection data with a new array</span>
</a>
<a class="api-item" href="#supportcollectionreadonlycollection-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set an element in the collection</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$constructed</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="supportcollectionreadonlycollection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $data = [],
bool $insensitive = true,
bool $strictNull = false,
string $type = null
);
```

ReadOnlyCollection constructor.

<h4 id="supportcollectionreadonlycollection-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

Restores the collection state during unserialization.

Temporarily disables the read-only guard so the parent class can restore
the collection state. The guard is re-enabled before the method returns.

<h4 id="supportcollectionreadonlycollection-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

<h4 id="supportcollectionreadonlycollection-init"><code>init()</code></h4>

```php
public function init( array $data = [] ): void;
```

<h4 id="supportcollectionreadonlycollection-remove"><code>remove()</code></h4>

```php
public function remove( string $element ): void;
```

Delete the element from the collection

<h4 id="supportcollectionreadonlycollection-replace"><code>replace()</code></h4>

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array

<h4 id="supportcollectionreadonlycollection-set"><code>set()</code></h4>

```php
public function set(
string $element,
mixed $value
): void;
```

Set an element in the collection

## Support\Debug

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug.zep">Source on GitHub</a>

Listens for uncaught exceptions and renders them. Acts as a thin coordinator
delegating data collection to ReportBuilder and presentation to a Renderer.

<div class="api-tree">

- **`Phalcon\Support\Debug`**

</div>

__Uses__ `Phalcon\Contracts\Support\Debug\Renderer` · `Phalcon\Support\Debug\Exceptions\RequestHalted` · `Phalcon\Support\Debug\Exceptions\RuntimeWarning` · `Phalcon\Support\Debug\Renderer\HtmlRenderer` · `Phalcon\Support\Debug\ReportBuilder` · `Phalcon\Support\Helper\Arr\Get` · `ReflectionException` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebug-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
<a class="api-item" href="#supportdebug-clearvars">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">clearVars</span>()</code>
<span class="desc">Clears are variables added previously</span>
</a>
<a class="api-item" href="#supportdebug-debugvar">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">debugVar</span>( <span class="st">mixed</span> <span class="sv">$varz</span> )</code>
<span class="desc">Adds a variable to the debug output</span>
</a>
<a class="api-item" href="#supportdebug-getcsssources">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCssSources</span>()</code>
<span class="desc">Returns the CSS sources</span>
</a>
<a class="api-item" href="#supportdebug-getjssources">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getJsSources</span>()</code>
<span class="desc">Returns the JavaScript sources</span>
</a>
<a class="api-item" href="#supportdebug-getrenderer">
<code class="vis vis-public">public</code>
<code class="ret">Renderer</code>
<code class="sig"><span class="sf">getRenderer</span>()</code>
<span class="desc">Returns the renderer used to produce the output</span>
</a>
<a class="api-item" href="#supportdebug-getversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
<span class="desc">Generates a link to the current version documentation</span>
</a>
<a class="api-item" href="#supportdebug-halt">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">halt</span>()</code>
<span class="desc">Halts the request showing a backtrace</span>
</a>
<a class="api-item" href="#supportdebug-listen">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">listen</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$exceptions</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowSeverity</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Listen for uncaught exceptions and non silent notices or warnings</span>
</a>
<a class="api-item" href="#supportdebug-listenexceptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">listenExceptions</span>()</code>
<span class="desc">Listen for uncaught exceptions</span>
</a>
<a class="api-item" href="#supportdebug-listenlowseverity">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">listenLowSeverity</span>()</code>
<span class="desc">Listen for non silent notices or warnings</span>
</a>
<a class="api-item" href="#supportdebug-onuncaughtexception">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">onUncaughtException</span>( <span class="st">\Throwable</span> <span class="sv">$exception</span> )</code>
<span class="desc">Handles uncaught exceptions</span>
</a>
<a class="api-item" href="#supportdebug-onuncaughtlowseverity">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">onUncaughtLowSeverity</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$severity</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$line</span></span>)</code>
<span class="desc">Throws an exception when a notice or warning is raised</span>
</a>
<a class="api-item" href="#supportdebug-renderhtml">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderHtml</span>( <span class="st">\Throwable</span> <span class="sv">$exception</span> )</code>
<span class="desc">Render exception to html format.</span>
</a>
<a class="api-item" href="#supportdebug-setblacklist">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setBlacklist</span>( <span class="st">array</span> <span class="sv">$blacklist</span> )</code>
<span class="desc">Sets if files the exception&#039;s backtrace must be showed</span>
</a>
<a class="api-item" href="#supportdebug-setrenderer">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setRenderer</span>( <span class="st">Renderer</span> <span class="sv">$renderer</span> )</code>
<span class="desc">Sets the renderer used to produce the output</span>
</a>
<a class="api-item" href="#supportdebug-setshowbacktrace">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setShowBackTrace</span>( <span class="st">bool</span> <span class="sv">$showBackTrace</span> )</code>
<span class="desc">Sets if files the exception&#039;s backtrace must be showed</span>
</a>
<a class="api-item" href="#supportdebug-setshowfilefragment">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setShowFileFragment</span>( <span class="st">bool</span> <span class="sv">$showFileFragment</span> )</code>
<span class="desc">Sets if files must be completely opened and showed in the output</span>
</a>
<a class="api-item" href="#supportdebug-setshowfiles">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setShowFiles</span>( <span class="st">bool</span> <span class="sv">$showFiles</span> )</code>
<span class="desc">Set if files part of the backtrace must be shown in the output</span>
</a>
<a class="api-item" href="#supportdebug-seturi">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUri</span>( <span class="st">string</span> <span class="sv">$uri</span> )</code>
<span class="desc">Change the base URI for static resources</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$blacklist</span><span class="sm"> = [...]</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$hideDocumentRoot</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isActive</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Renderer</code>
<code class="sig"><span class="sv">$renderer</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ReportBuilder</code>
<code class="sig"><span class="sv">$reportBuilder</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$showBackTrace</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$showFileFragment</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$showFiles</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$uri</span><span class="sm"> = &quot;https://assets.phalcon.io/debug/5.0.x/&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 20</div>

<h4 id="supportdebug-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

<h4 id="supportdebug-clearvars"><code>clearVars()</code></h4>

```php
public function clearVars(): static;
```

Clears are variables added previously

<h4 id="supportdebug-debugvar"><code>debugVar()</code></h4>

```php
public function debugVar( mixed $varz ): static;
```

Adds a variable to the debug output

<h4 id="supportdebug-getcsssources"><code>getCssSources()</code></h4>

```php
public function getCssSources(): string;
```

Returns the CSS sources

<h4 id="supportdebug-getjssources"><code>getJsSources()</code></h4>

```php
public function getJsSources(): string;
```

Returns the JavaScript sources

<h4 id="supportdebug-getrenderer"><code>getRenderer()</code></h4>

```php
public function getRenderer(): Renderer;
```

Returns the renderer used to produce the output

<h4 id="supportdebug-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string;
```

Generates a link to the current version documentation

<h4 id="supportdebug-halt"><code>halt()</code></h4>

```php
public function halt(): void;
```

Halts the request showing a backtrace

<h4 id="supportdebug-listen"><code>listen()</code></h4>

```php
public function listen(
bool $exceptions = true,
bool $lowSeverity = false
): static;
```

Listen for uncaught exceptions and non silent notices or warnings

<h4 id="supportdebug-listenexceptions"><code>listenExceptions()</code></h4>

```php
public function listenExceptions(): static;
```

Listen for uncaught exceptions

<h4 id="supportdebug-listenlowseverity"><code>listenLowSeverity()</code></h4>

```php
public function listenLowSeverity(): static;
```

Listen for non silent notices or warnings

<h4 id="supportdebug-onuncaughtexception"><code>onUncaughtException()</code></h4>

```php
public function onUncaughtException( \Throwable $exception ): bool;
```

Handles uncaught exceptions

<h4 id="supportdebug-onuncaughtlowseverity"><code>onUncaughtLowSeverity()</code></h4>

```php
public function onUncaughtLowSeverity(
mixed $severity,
mixed $message,
mixed $file,
mixed $line
): void;
```

Throws an exception when a notice or warning is raised

<h4 id="supportdebug-renderhtml"><code>renderHtml()</code></h4>

```php
public function renderHtml( \Throwable $exception ): string;
```

Render exception to html format.

<h4 id="supportdebug-setblacklist"><code>setBlacklist()</code></h4>

```php
public function setBlacklist( array $blacklist ): static;
```

Sets if files the exception's backtrace must be showed

<h4 id="supportdebug-setrenderer"><code>setRenderer()</code></h4>

```php
public function setRenderer( Renderer $renderer ): static;
```

Sets the renderer used to produce the output

<h4 id="supportdebug-setshowbacktrace"><code>setShowBackTrace()</code></h4>

```php
public function setShowBackTrace( bool $showBackTrace ): static;
```

Sets if files the exception's backtrace must be showed

<h4 id="supportdebug-setshowfilefragment"><code>setShowFileFragment()</code></h4>

```php
public function setShowFileFragment( bool $showFileFragment ): static;
```

Sets if files must be completely opened and showed in the output
or just the fragment related to the exception

<h4 id="supportdebug-setshowfiles"><code>setShowFiles()</code></h4>

```php
public function setShowFiles( bool $showFiles ): static;
```

Set if files part of the backtrace must be shown in the output

<h4 id="supportdebug-seturi"><code>setUri()</code></h4>

```php
public function setUri( string $uri ): static;
```

Change the base URI for static resources

## Support\Debug\Dump

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Dump.zep">Source on GitHub</a>

Dumps information about a variable(s)

```php
$foo = 123;

echo (new \Phalcon\Debug\Dump())->variable($foo, "foo");
```

```php
$foo = "string";
$bar = ["key" => "value"];
$baz = new stdClass();

echo (new \Phalcon\Debug\Dump())->variables($foo, $bar, $baz);
```

<div class="api-tree">

- **`Phalcon\Support\Debug\Dump`** — implements [`Phalcon\Contracts\Support\Debug\TemplateAware`](/5.16/api/phalcon_contracts/#contractssupportdebugtemplateaware)

</div>

__Uses__ `Phalcon\Contracts\Support\Debug\TemplateAware` · `Phalcon\Di\DiInterface` · `Phalcon\Support\Helper\Json\Encode` · `Reflection` · `ReflectionClass` · `ReflectionProperty` · `stdClass`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugdump-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$styles</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$detailed</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Phalcon\Debug\Dump constructor</span>
</a>
<a class="api-item" href="#supportdebugdump-all">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">all</span>()</code>
<span class="desc">Alias of variables() method</span>
</a>
<a class="api-item" href="#supportdebugdump-getdetailed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getDetailed</span>()</code>
</a>
<a class="api-item" href="#supportdebugdump-gettemplate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTemplate</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the template for the given name (override if set, default</span>
</a>
<a class="api-item" href="#supportdebugdump-one">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">one</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$variable</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Alias of variable() method</span>
</a>
<a class="api-item" href="#supportdebugdump-setdetailed">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDetailed</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
</a>
<a class="api-item" href="#supportdebugdump-setstyles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">setStyles</span>( <span class="st">array</span> <span class="sv">$styles</span><span class="sm"> = []</span> )</code>
<span class="desc">Set styles for vars type</span>
</a>
<a class="api-item" href="#supportdebugdump-settemplate">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTemplate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$template</span></span>)</code>
<span class="desc">Overrides the template for the given name.</span>
</a>
<a class="api-item" href="#supportdebugdump-tojson">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toJson</span>( <span class="st">mixed</span> <span class="sv">$variable</span> )</code>
<span class="desc">Returns an JSON string of information about a single variable.</span>
</a>
<a class="api-item" href="#supportdebugdump-variable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">variable</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$variable</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an HTML string of information about a single variable.</span>
</a>
<a class="api-item" href="#supportdebugdump-variables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">variables</span>()</code>
<span class="desc">Returns an HTML string of debugging information about any number of</span>
</a>
<a class="api-item" href="#supportdebugdump-defaulttemplate">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">defaultTemplate</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the embedded default template for the given name.</span>
</a>
<a class="api-item" href="#supportdebugdump-getstyle">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStyle</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Get style for type</span>
</a>
<a class="api-item" href="#supportdebugdump-output">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">output</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$variable</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$tab</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Prepare an HTML string of information about a single variable.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$detailed</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$methods</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$styles</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$templates</span><span class="sm"> = []</span></code>
<span class="desc">Template overrides keyed by name. @todo Move getTemplate()/setTemplate()/templates into a shared trait once Zephir supports traits (mirrors Phalcon\Support\Debug\Traits\TemplateAwareTrait in the PHP source).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

<h4 id="supportdebugdump-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $styles = [],
bool $detailed = false
);
```

Phalcon\Debug\Dump constructor

<h4 id="supportdebugdump-all"><code>all()</code></h4>

```php
public function all(): string;
```

Alias of variables() method

<h4 id="supportdebugdump-getdetailed"><code>getDetailed()</code></h4>

```php
public function getDetailed(): bool;
```

<h4 id="supportdebugdump-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate( string $name ): string;
```

Returns the template for the given name (override if set, default
otherwise).

<h4 id="supportdebugdump-one"><code>one()</code></h4>

```php
public function one(
mixed $variable,
string $name = null
): string;
```

Alias of variable() method

<h4 id="supportdebugdump-setdetailed"><code>setDetailed()</code></h4>

```php
public function setDetailed( bool $flag ): void;
```

<h4 id="supportdebugdump-setstyles"><code>setStyles()</code></h4>

```php
public function setStyles( array $styles = [] ): array;
```

Set styles for vars type

<h4 id="supportdebugdump-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate(
string $name,
string $template
): static;
```

Overrides the template for the given name.

<h4 id="supportdebugdump-tojson"><code>toJson()</code></h4>

```php
public function toJson( mixed $variable ): string;
```

Returns an JSON string of information about a single variable.

```php
$foo = [
"key" => "value",
];

echo (new \Phalcon\Debug\Dump())->toJson($foo);

$foo = new stdClass();
$foo->bar = "buz";

echo (new \Phalcon\Debug\Dump())->toJson($foo);
```

<h4 id="supportdebugdump-variable"><code>variable()</code></h4>

```php
public function variable(
mixed $variable,
string $name = null
): string;
```

Returns an HTML string of information about a single variable.

```php
echo (new \Phalcon\Debug\Dump())->variable($foo, "foo");
```

<h4 id="supportdebugdump-variables"><code>variables()</code></h4>

```php
public function variables(): string;
```

Returns an HTML string of debugging information about any number of
variables, each wrapped in a "pre" tag.

```php
$foo = "string";
$bar = ["key" => "value"];
$baz = new stdClass();

echo (new \Phalcon\Debug\Dump())->variables($foo, $bar, $baz);
```

<div class="api-group">Protected · 3</div>

<h4 id="supportdebugdump-defaulttemplate"><code>defaultTemplate()</code></h4>

```php
protected function defaultTemplate( string $name ): string;
```

Returns the embedded default template for the given name.

<h4 id="supportdebugdump-getstyle"><code>getStyle()</code></h4>

```php
protected function getStyle( string $type ): string;
```

Get style for type

<h4 id="supportdebugdump-output"><code>output()</code></h4>

```php
protected function output(
mixed $variable,
string $name = null,
int $tab = 1
): string;
```

Prepare an HTML string of information about a single variable.

## Support\Debug\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Debug will use this class

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- **`Phalcon\Support\Debug\Exception`**
- [`Phalcon\Support\Debug\Exceptions\RequestHalted`](#supportdebugexceptionsrequesthalted)

</div>

__Uses__ `Phalcon\Support\Exception`

## Support\Debug\Exceptions\RequestHalted

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exceptions/RequestHalted.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Debug\Exception`](#supportdebugexception)
- **`Phalcon\Support\Debug\Exceptions\RequestHalted`**

</div>

__Uses__ `Phalcon\Support\Debug\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugexceptionsrequesthalted-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supportdebugexceptionsrequesthalted-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Support\Debug\Exceptions\RuntimeWarning

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exceptions/RuntimeWarning.zep">Source on GitHub</a>

<div class="api-tree">

- `\ErrorException`
- **`Phalcon\Support\Debug\Exceptions\RuntimeWarning`**

</div>

## Support\Debug\Renderer\HtmlRenderer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Renderer/HtmlRenderer.zep">Source on GitHub</a>

Renders an ExceptionReport as the HTML debug page using embedded, overridable
template strings filled by strtr. All styling and interactivity (theme, tabs,
syntax highlighting, copy/editor links) are provided by the external
debug.css / debug.js assets.

<div class="api-tree">

- **`Phalcon\Support\Debug\Renderer\HtmlRenderer`** — implements [`Phalcon\Contracts\Support\Debug\Renderer`](/5.16/api/phalcon_contracts/#contractssupportdebugrenderer)

</div>

__Uses__ `Phalcon\Contracts\Support\Debug\Renderer` · `Phalcon\Support\Debug\Report\BacktraceItem` · `Phalcon\Support\Debug\Report\ExceptionReport` · `Phalcon\Support\Version`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugrendererhtmlrenderer-getcsssources">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCssSources</span>( <span class="st">string</span> <span class="sv">$uri</span> )</code>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-getjssources">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getJsSources</span>( <span class="st">string</span> <span class="sv">$uri</span> )</code>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-gettemplate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTemplate</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the template for the given name (override if set, default</span>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-getversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">ExceptionReport</span> <span class="sv">$report</span> )</code>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-settemplate">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTemplate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$template</span></span>)</code>
<span class="desc">Overrides the template for the given name.</span>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-defaulttemplate">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">defaultTemplate</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the embedded default template for the given name.</span>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-escapestring">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeString</span>( <span class="st">string</span> <span class="sv">$value</span> )</code>
<span class="desc">Escapes a string with htmlentities</span>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-getarraydump">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getArrayDump</span>(<span class="prm"><span class="st">array</span> <span class="sv">$argument</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$number</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Produces a recursive representation of an array</span>
</a>
<a class="api-item" href="#supportdebugrendererhtmlrenderer-getvardump">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getVarDump</span>( <span class="st">mixed</span> <span class="sv">$variable</span> )</code>
<span class="desc">Produces a string representation of a variable</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$templates</span><span class="sm"> = []</span></code>
<span class="desc">Template overrides keyed by name. @todo Move getTemplate()/setTemplate()/templates into a shared trait once Zephir supports traits (mirrors Phalcon\Support\Debug\Traits\TemplateAwareTrait in the PHP source).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="supportdebugrendererhtmlrenderer-getcsssources"><code>getCssSources()</code></h4>

```php
public function getCssSources( string $uri ): string;
```

<h4 id="supportdebugrendererhtmlrenderer-getjssources"><code>getJsSources()</code></h4>

```php
public function getJsSources( string $uri ): string;
```

<h4 id="supportdebugrendererhtmlrenderer-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate( string $name ): string;
```

Returns the template for the given name (override if set, default
otherwise).

<h4 id="supportdebugrendererhtmlrenderer-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string;
```

<h4 id="supportdebugrendererhtmlrenderer-render"><code>render()</code></h4>

```php
public function render( ExceptionReport $report ): string;
```

<h4 id="supportdebugrendererhtmlrenderer-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate(
string $name,
string $template
): static;
```

Overrides the template for the given name.

<div class="api-group">Protected · 4</div>

<h4 id="supportdebugrendererhtmlrenderer-defaulttemplate"><code>defaultTemplate()</code></h4>

```php
protected function defaultTemplate( string $name ): string;
```

Returns the embedded default template for the given name.

<h4 id="supportdebugrendererhtmlrenderer-escapestring"><code>escapeString()</code></h4>

```php
protected function escapeString( string $value ): string;
```

Escapes a string with htmlentities

<h4 id="supportdebugrendererhtmlrenderer-getarraydump"><code>getArrayDump()</code></h4>

```php
protected function getArrayDump(
array $argument,
int $number = 0
): string|null;
```

Produces a recursive representation of an array

<h4 id="supportdebugrendererhtmlrenderer-getvardump"><code>getVarDump()</code></h4>

```php
protected function getVarDump( mixed $variable ): string;
```

Produces a string representation of a variable

## Support\Debug\ReportBuilder

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/ReportBuilder.zep">Source on GitHub</a>

Collects the runtime data for an exception (backtrace, superglobals, included
files, memory, variables) into an ExceptionReport. Holds no presentation
logic.

<div class="api-tree">

- **`Phalcon\Support\Debug\ReportBuilder`**

</div>

__Uses__ `Phalcon\Support\Debug\Report\BacktraceItem` · `Phalcon\Support\Debug\Report\ExceptionReport` · `Phalcon\Support\Helper\Arr\Get` · `ReflectionClass` · `ReflectionException` · `ReflectionFunction` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugreportbuilder-build">
<code class="vis vis-public">public</code>
<code class="ret">ExceptionReport</code>
<code class="sig"><span class="sf">build</span>(<span class="prm"><span class="st">\Throwable</span> <span class="sv">$exception</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$blacklist</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$showBackTrace</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$showFiles</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$showFileFragment</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$data</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supportdebugreportbuilder-build"><code>build()</code></h4>

```php
public function build(
\Throwable $exception,
array $blacklist,
bool $showBackTrace,
bool $showFiles,
bool $showFileFragment,
string $uri,
array $data
): ExceptionReport;
```

## Support\Debug\Report\BacktraceItem

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Report/BacktraceItem.zep">Source on GitHub</a>

Represents a single resolved frame of an exception backtrace.

<div class="api-tree">

- **`Phalcon\Support\Debug\Report\BacktraceItem`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugreportbacktraceitem-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$functionName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$type</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$className</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$classLink</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$functionLink</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$hasArgs</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$args</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$file</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$line</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$fragment</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getargs">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getArgs</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getclasslink">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getClassLink</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getclassname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getClassName</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getfile">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getFile</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getfragment">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getFragment</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getfunctionlink">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getFunctionLink</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getfunctionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFunctionName</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-getline">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getLine</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportbacktraceitem-hasargs">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasArgs</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$args</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$classLink</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$className</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$file</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sv">$fragment</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$functionLink</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$functionName</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$hasArgs</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sv">$line</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

<h4 id="supportdebugreportbacktraceitem-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $functionName,
mixed $type = null,
mixed $className = null,
mixed $classLink = null,
mixed $functionLink = null,
bool $hasArgs = false,
array $args = [],
mixed $file = null,
mixed $line = null,
mixed $fragment = null
);
```

<h4 id="supportdebugreportbacktraceitem-getargs"><code>getArgs()</code></h4>

```php
public function getArgs(): array;
```

<h4 id="supportdebugreportbacktraceitem-getclasslink"><code>getClassLink()</code></h4>

```php
public function getClassLink(): string|null;
```

<h4 id="supportdebugreportbacktraceitem-getclassname"><code>getClassName()</code></h4>

```php
public function getClassName(): string|null;
```

<h4 id="supportdebugreportbacktraceitem-getfile"><code>getFile()</code></h4>

```php
public function getFile(): string|null;
```

<h4 id="supportdebugreportbacktraceitem-getfragment"><code>getFragment()</code></h4>

```php
public function getFragment(): array|null;
```

<h4 id="supportdebugreportbacktraceitem-getfunctionlink"><code>getFunctionLink()</code></h4>

```php
public function getFunctionLink(): string|null;
```

<h4 id="supportdebugreportbacktraceitem-getfunctionname"><code>getFunctionName()</code></h4>

```php
public function getFunctionName(): string;
```

<h4 id="supportdebugreportbacktraceitem-getline"><code>getLine()</code></h4>

```php
public function getLine(): int|null;
```

<h4 id="supportdebugreportbacktraceitem-gettype"><code>getType()</code></h4>

```php
public function getType(): string|null;
```

<h4 id="supportdebugreportbacktraceitem-hasargs"><code>hasArgs()</code></h4>

```php
public function hasArgs(): bool;
```

## Support\Debug\Report\ExceptionReport

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Report/ExceptionReport.zep">Source on GitHub</a>

Carries all data collected for an exception, ready to be rendered. Holds no
presentation logic.

<div class="api-tree">

- **`Phalcon\Support\Debug\Report\ExceptionReport`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugreportexceptionreport-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$line</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$showBackTrace</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$uri</span></span>)</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getbacktrace">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getBacktrace</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getclassname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getClassName</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getfile">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFile</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getincludedfiles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getIncludedFiles</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getline">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLine</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getmemoryusage">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getMemoryUsage</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getmessage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessage</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getpeakmemoryusage">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPeakMemoryUsage</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getrequest">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getRequest</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getserver">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServer</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-geturi">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUri</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-getvariables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getVariables</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-hasvariables">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasVariables</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-isshowbacktrace">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isShowBackTrace</span>()</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setbacktrace">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setBacktrace</span>( <span class="st">array</span> <span class="sv">$backtrace</span> )</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setincludedfiles">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setIncludedFiles</span>( <span class="st">array</span> <span class="sv">$includedFiles</span> )</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setmemoryusage">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setMemoryUsage</span>( <span class="st">int</span> <span class="sv">$memoryUsage</span> )</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setpeakmemoryusage">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setPeakMemoryUsage</span>( <span class="st">int</span> <span class="sv">$peakMemoryUsage</span> )</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setrequest">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setRequest</span>( <span class="st">array</span> <span class="sv">$request</span> )</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setserver">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setServer</span>( <span class="st">array</span> <span class="sv">$server</span> )</code>
</a>
<a class="api-item" href="#supportdebugreportexceptionreport-setvariables">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setVariables</span>( <span class="st">array</span> <span class="sv">$variables</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">BacktraceItem[]</code>
<code class="sig"><span class="sv">$backtrace</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$className</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$file</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$includedFiles</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$line</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$memoryUsage</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$message</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$peakMemoryUsage</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$request</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$server</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$showBackTrace</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$uri</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$variables</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 22</div>

<h4 id="supportdebugreportexceptionreport-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $className,
string $message,
string $file,
int $line,
bool $showBackTrace,
string $uri
);
```

<h4 id="supportdebugreportexceptionreport-getbacktrace"><code>getBacktrace()</code></h4>

```php
public function getBacktrace(): array;
```

<h4 id="supportdebugreportexceptionreport-getclassname"><code>getClassName()</code></h4>

```php
public function getClassName(): string;
```

<h4 id="supportdebugreportexceptionreport-getfile"><code>getFile()</code></h4>

```php
public function getFile(): string;
```

<h4 id="supportdebugreportexceptionreport-getincludedfiles"><code>getIncludedFiles()</code></h4>

```php
public function getIncludedFiles(): array;
```

<h4 id="supportdebugreportexceptionreport-getline"><code>getLine()</code></h4>

```php
public function getLine(): int;
```

<h4 id="supportdebugreportexceptionreport-getmemoryusage"><code>getMemoryUsage()</code></h4>

```php
public function getMemoryUsage(): int;
```

<h4 id="supportdebugreportexceptionreport-getmessage"><code>getMessage()</code></h4>

```php
public function getMessage(): string;
```

<h4 id="supportdebugreportexceptionreport-getpeakmemoryusage"><code>getPeakMemoryUsage()</code></h4>

```php
public function getPeakMemoryUsage(): int;
```

<h4 id="supportdebugreportexceptionreport-getrequest"><code>getRequest()</code></h4>

```php
public function getRequest(): array;
```

<h4 id="supportdebugreportexceptionreport-getserver"><code>getServer()</code></h4>

```php
public function getServer(): array;
```

<h4 id="supportdebugreportexceptionreport-geturi"><code>getUri()</code></h4>

```php
public function getUri(): string;
```

<h4 id="supportdebugreportexceptionreport-getvariables"><code>getVariables()</code></h4>

```php
public function getVariables(): array;
```

<h4 id="supportdebugreportexceptionreport-hasvariables"><code>hasVariables()</code></h4>

```php
public function hasVariables(): bool;
```

<h4 id="supportdebugreportexceptionreport-isshowbacktrace"><code>isShowBackTrace()</code></h4>

```php
public function isShowBackTrace(): bool;
```

<h4 id="supportdebugreportexceptionreport-setbacktrace"><code>setBacktrace()</code></h4>

```php
public function setBacktrace( array $backtrace ): static;
```

<h4 id="supportdebugreportexceptionreport-setincludedfiles"><code>setIncludedFiles()</code></h4>

```php
public function setIncludedFiles( array $includedFiles ): static;
```

<h4 id="supportdebugreportexceptionreport-setmemoryusage"><code>setMemoryUsage()</code></h4>

```php
public function setMemoryUsage( int $memoryUsage ): static;
```

<h4 id="supportdebugreportexceptionreport-setpeakmemoryusage"><code>setPeakMemoryUsage()</code></h4>

```php
public function setPeakMemoryUsage( int $peakMemoryUsage ): static;
```

<h4 id="supportdebugreportexceptionreport-setrequest"><code>setRequest()</code></h4>

```php
public function setRequest( array $request ): static;
```

<h4 id="supportdebugreportexceptionreport-setserver"><code>setServer()</code></h4>

```php
public function setServer( array $server ): static;
```

<h4 id="supportdebugreportexceptionreport-setvariables"><code>setVariables()</code></h4>

```php
public function setVariables( array $variables ): static;
```

## Support\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Support will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Support\Exception`**
- [`Phalcon\Support\Collection\Exception`](#supportcollectionexception)
- [`Phalcon\Support\Debug\Exception`](#supportdebugexception)
- [`Phalcon\Support\Helper\Exception`](#supporthelperexception)

</div>

## Support\HelperFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/HelperFactory.zep">Source on GitHub</a>

ServiceLocator implementation for helpers

@method string basename(string $uri, string $suffix = null)
@method array  blacklist(array $collection, array $blackList)
@method string camelize(string $text, string $delimiters = null, bool $lowerFirst = false)
@method array  chunk(array $collection, int $size, bool $preserveKeys = false)
@method string concat(string $delimiter, string $first, string $second, string ...$arguments)
@method int    countVowels(string $text)
@method string decapitalize(string $text, bool $upperRest = false, string $encoding = 'UTF-8')
@method string decode(string $data, bool $associative = false, int $depth = 512, int $options = 0)
@method string decrement(string $text, string $separator = '_')
@method string dirFromFile(string $file)
@method string dirSeparator(string $directory)
@method string dynamic(string $text, string $leftDel = "\{", string $rightDel = "\}", string $separator = "|")
@method string encode($data, int $options = 0, int $depth = 512)
@method bool   endsWith(string $haystack, string $needle, bool $ignoreCase = true)
@method mixed  filter(array $collection, callable|null $method)
@method mixed  first(array $collection, callable $method = null)
@method string firstBetween(string $text, string $start, string $end)
@method mixed  firstKey(array $collection, callable $method = null)
@method string friendly(string $text, string $separator = '-', bool $lowercase = true, $replace = null)
@method array  flatten(array $collection, bool $deep = false)
@method mixed  get(array $collection, $index, $defaultValue = null, string $cast = null)
@method array  group(array $collection, $method)
@method bool   has(array $collection, $index)
@method string humanize(string $text)
@method bool   includes(string $haystack, string $needle)
@method string increment(string $text, string $separator = '_')
@method string interpolate(string $message, array $context = [], string $leftToken = "%", string $rightToken = "%")
@method bool   isAnagram(string $first, string $second)
@method bool   isBetween(int $value, int $start, int $end)
@method bool   isLower(string $text, string $encoding = 'UTF-8')
@method bool   isPalindrome(string $text)
@method bool   isUnique(array $collection)
@method bool   isUpper(string $text, string $encoding = 'UTF-8')
@method string kebabCase(string $text, string $delimiters = null)
@method mixed  last(array $collection, callable $method = null)
@method mixed  lastKey(array $collection, callable $method = null)
@method int    len(string $text, string $encoding = 'UTF-8')
@method string lower(string $text, string $encoding = 'UTF-8')
@method array  order(array $collection, $attribute, string $order = 'asc')
@method string pascalCase(string $text, string $delimiters = null)
@method array  pluck(array $collection, string $element)
@method string prefix(string $text, string $prefix)
@method string random(int $type = 0, int $length = 8)
@method string reduceSlashes(string $text)
@method array  set(array $collection, $value, $index = null)
@method array  sliceLeft(array $collection, int $elements = 1)
@method array  sliceRight(array $collection, int $elements = 1)
@method string snakeCase(string $text, string $delimiters = null)
@method array  split(array $collection)
@method bool   startsWith(string $haystack, string $needle, bool $ignoreCase = true)
@method string suffix($text, string $suffix)
@method object toObject(array $collection)
@method bool   validateAll(array $collection, callable $method)
@method bool   validateAny(array $collection, callable $method)
@method string ucwords(string $text, string $encoding = 'UTF-8')
@method string uncamelize(string $text, string $delimiters = '_')
@method string underscore(string $text)
@method string upper(string $text, string $encoding = 'UTF-8')
@method array  whitelist(array $collection, array $whiteList)

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.16/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.16/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Support\HelperFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperfactory-__call">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__call</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#supporthelperfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">FactoryTrait constructor.</span>
</a>
<a class="api-item" href="#supporthelperfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#supporthelperfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#supporthelperfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="supporthelperfactory-__call"><code>__call()</code></h4>

```php
public function __call(
string $name,
array $arguments
);
```

<h4 id="supporthelperfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

FactoryTrait constructor.

<h4 id="supporthelperfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name );
```

<div class="api-group">Protected · 2</div>

<h4 id="supporthelperfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="supporthelperfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Support\Helper\Arr\AbstractArr

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/AbstractArr.zep">Source on GitHub</a>

Abstract class offering methods to help with the Arr namespace. This can
be moved to a trait once Zephir supports it.

This base exists only for the `Arr` helper hierarchy; it is not a general
base class. New code that needs these routines should compose the relevant
invokable helper (for example `Arr\Get`) rather than extending it.

@internal

@todo move to trait when there is support for it

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\AbstractArr`**
- [`Phalcon\Support\Helper\Arr\Blacklist`](#supporthelperarrblacklist)
- [`Phalcon\Support\Helper\Arr\Filter`](#supporthelperarrfilter)
- [`Phalcon\Support\Helper\Arr\First`](#supporthelperarrfirst)
- [`Phalcon\Support\Helper\Arr\FirstKey`](#supporthelperarrfirstkey)
- [`Phalcon\Support\Helper\Arr\Last`](#supporthelperarrlast)
- [`Phalcon\Support\Helper\Arr\LastKey`](#supporthelperarrlastkey)
- [`Phalcon\Support\Helper\Arr\ValidateAll`](#supporthelperarrvalidateall)
- [`Phalcon\Support\Helper\Arr\ValidateAny`](#supporthelperarrvalidateany)
- [`Phalcon\Support\Helper\Arr\Whitelist`](#supporthelperarrwhitelist)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrabstractarr-tofilter">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toFilter</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Helper method to filter the collection</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="supporthelperarrabstractarr-tofilter"><code>toFilter()</code></h4>

```php
protected function toFilter(
array $collection,
mixed $method = null
): array;
```

Helper method to filter the collection

## Support\Helper\Arr\Blacklist

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Blacklist.zep">Source on GitHub</a>

Black list filter by key: exclude elements of an array
by the keys obtained from the elements of a blacklist

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Blacklist`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrblacklist-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$blackList</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrblacklist-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
array $blackList
): array;
```

## Support\Helper\Arr\Chunk

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Chunk.zep">Source on GitHub</a>

Chunks an array into smaller arrays of a specified size.

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Chunk`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrchunk-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$size</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$preserveKeys</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrchunk-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
int $size,
bool $preserveKeys = false
): array;
```

## Support\Helper\Arr\Filter

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Filter.zep">Source on GitHub</a>

Filters a collection using array_filter and using the callable (if defined)

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Filter`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrfilter-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrfilter-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method = null
): mixed;
```

## Support\Helper\Arr\First

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/First.zep">Source on GitHub</a>

Returns the first element of the collection. If a callable is passed, the
element returned is the first that validates true

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\First`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrfirst-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrfirst-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method = null
): mixed;
```

## Support\Helper\Arr\FirstKey

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/FirstKey.zep">Source on GitHub</a>

Returns the key of the first element of the collection. If a callable
is passed, the element returned is the first that validates true

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\FirstKey`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrfirstkey-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrfirstkey-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method = null
): mixed;
```

## Support\Helper\Arr\Flatten

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Flatten.zep">Source on GitHub</a>

Flattens an array up to the one level depth, unless `$deep` is set to
`true`

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Flatten`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrflatten-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$deep</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrflatten-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
bool $deep = false
): array;
```

## Support\Helper\Arr\Get

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Get.zep">Source on GitHub</a>

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Get`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrget-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrget-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $index,
mixed $defaultValue = null,
string $cast = null
): mixed;
```

## Support\Helper\Arr\Group

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Group.zep">Source on GitHub</a>

Groups the elements of an array based on the passed callable

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Group`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrgroup-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrgroup-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method
): array;
```

## Support\Helper\Arr\Has

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Has.zep">Source on GitHub</a>

Checks an array if it has an element with a specific key and returns
`true`/`false` accordingly

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Has`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrhas-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrhas-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $index
): bool;
```

## Support\Helper\Arr\IsUnique

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/IsUnique.zep">Source on GitHub</a>

Checks a flat list for duplicate values. Returns true if duplicate
values exist and false if values are all unique.

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\IsUnique`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrisunique-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">array</span> <span class="sv">$collection</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrisunique-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $collection ): bool;
```

## Support\Helper\Arr\Last

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Last.zep">Source on GitHub</a>

Returns the last element of the collection. If a callable is passed, the
element returned is the first that validates true

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Last`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrlast-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrlast-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method = null
): mixed;
```

## Support\Helper\Arr\LastKey

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/LastKey.zep">Source on GitHub</a>

Returns the key of the last element of the collection. If a callable is
passed, the element returned is the first that validates true

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\LastKey`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrlastkey-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrlastkey-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method = null
): mixed;
```

## Support\Helper\Arr\Order

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Order.zep">Source on GitHub</a>

Sorts a collection of arrays or objects by an attribute of the object. It
supports ascending/descending sorts but also flags that are identical to
the ones used by `ksort` and `krsort`

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Order`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrorder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$order</span><span class="sm"> = self::ORDER_ASC</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = 0</span></span>)</code>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ORDER_ASC</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ORDER_DESC</span><span class="sm"> = 2</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrorder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $attribute,
int $order = self::ORDER_ASC,
int $flags = 0
): array;
```

## Support\Helper\Arr\Pluck

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Pluck.zep">Source on GitHub</a>

Returns a subset of the collection based on the values of the collection

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Pluck`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrpluck-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$element</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrpluck-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
string $element
): array;
```

## Support\Helper\Arr\Set

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Set.zep">Source on GitHub</a>

Sets an array element. Using a key is optional

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Set`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrset-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrset-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $value,
mixed $index = null
): array;
```

## Support\Helper\Arr\SliceLeft

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/SliceLeft.zep">Source on GitHub</a>

Returns a new array with n elements removed from the left.

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\SliceLeft`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrsliceleft-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$elements</span><span class="sm"> = 1</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrsliceleft-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
int $elements = 1
): array;
```

## Support\Helper\Arr\SliceRight

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/SliceRight.zep">Source on GitHub</a>

Returns a new array with n elements removed from the right.

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\SliceRight`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrsliceright-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$elements</span><span class="sm"> = 1</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrsliceright-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
int $elements = 1
): array;
```

## Support\Helper\Arr\Split

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Split.zep">Source on GitHub</a>

Returns a new array with keys of the collection as one element and values
as another

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\Split`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrsplit-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">array</span> <span class="sv">$collection</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrsplit-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $collection ): array;
```

## Support\Helper\Arr\ToObject

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ToObject.zep">Source on GitHub</a>

Returns the passed array as an object.

<div class="api-tree">

- **`Phalcon\Support\Helper\Arr\ToObject`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrtoobject-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">array</span> <span class="sv">$collection</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrtoobject-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $collection ): object;
```

## Support\Helper\Arr\ValidateAll

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ValidateAll.zep">Source on GitHub</a>

Returns `true` if the provided function returns `true` for all elements of
the collection, `false` otherwise.

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\ValidateAll`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrvalidateall-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrvalidateall-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method
): bool;
```

## Support\Helper\Arr\ValidateAny

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ValidateAny.zep">Source on GitHub</a>

Returns `true` if the provided function returns `true` for at least one
element of the collection, `false` otherwise.

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\ValidateAny`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrvalidateany-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrvalidateany-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $method
): bool;
```

## Support\Helper\Arr\Whitelist

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Whitelist.zep">Source on GitHub</a>

White list filter by key: obtain elements of an array filtering by the keys
obtained from the elements of a whitelist

<div class="api-tree">

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Whitelist`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperarrwhitelist-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whiteList</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperarrwhitelist-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
array $whiteList
): array;
```

## Support\Helper\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Support\Helper will use this class

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- **`Phalcon\Support\Helper\Exception`**
- [`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`](#supporthelperstrexceptionsinsufficientarguments)
- [`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`](#supporthelperstrexceptionsinvalidreplaceformat)

</div>

__Uses__ `Phalcon\Support\Exception`

## Support\Helper\File\Basename

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/File/Basename.zep">Source on GitHub</a>

Gets the filename from a given path, Same as PHP's `basename()` but has
non-ASCII support. PHP's `basename()` does not properly support streams or
filenames beginning with a non-US-ASCII character.

<div class="api-tree">

- **`Phalcon\Support\Helper\File\Basename`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperfilebasename-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$suffix</span><span class="sm"> = null</span></span>)</code>
<span class="desc">@see https://bugs.php.net/bug.php?id=37738</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperfilebasename-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $uri,
string $suffix = null
): string;
```

@see https://bugs.php.net/bug.php?id=37738

## Support\Helper\Json\Decode

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Decode.zep">Source on GitHub</a>

Decodes a string using `json_decode` and throws an exception if the
JSON data cannot be decoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
JsonDecodeError

<div class="api-tree">

- **`Phalcon\Support\Helper\Json\Decode`**

</div>

__Uses__ `Phalcon\Support\Helper\Json\Exceptions\JsonDecodeError`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsondecode-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$associative</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$depth</span><span class="sm"> = 512</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 79</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperjsondecode-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $data,
bool $associative = false,
int $depth = 512,
int $options = 79
);
```

## Support\Helper\Json\Encode

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Encode.zep">Source on GitHub</a>

Encodes a string using `json_encode` and throws an exception if the
JSON data cannot be encoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
JsonEncodeError

@see  https://www.ietf.org/rfc/rfc4627.txt

<div class="api-tree">

- **`Phalcon\Support\Helper\Json\Encode`**

</div>

__Uses__ `Phalcon\Support\Helper\Json\Exceptions\JsonEncodeError`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsonencode-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 79</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$depth</span><span class="sm"> = 512</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperjsonencode-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $data,
int $options = 79,
int $depth = 512
): string;
```

## Support\Helper\Json\Exceptions\JsonDecodeError

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Exceptions/JsonDecodeError.zep">Source on GitHub</a>

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\Support\Helper\Json\Exceptions\JsonDecodeError`**

</div>

__Uses__ `InvalidArgumentException` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsonexceptionsjsondecodeerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">Throwable</span> <span class="sv">$previous</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperjsonexceptionsjsondecodeerror-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $message = "",
int $code = 0,
Throwable $previous = null
);
```

## Support\Helper\Json\Exceptions\JsonEncodeError

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Exceptions/JsonEncodeError.zep">Source on GitHub</a>

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\Support\Helper\Json\Exceptions\JsonEncodeError`**

</div>

__Uses__ `InvalidArgumentException` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsonexceptionsjsonencodeerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">Throwable</span> <span class="sv">$previous</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperjsonexceptionsjsonencodeerror-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $message = "",
int $code = 0,
Throwable $previous = null
);
```

## Support\Helper\Number\IsBetween

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Number/IsBetween.zep">Source on GitHub</a>

Checks if a number is within a range

<div class="api-tree">

- **`Phalcon\Support\Helper\Number\IsBetween`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelpernumberisbetween-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">int</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$start</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$end</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelpernumberisbetween-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
int $value,
int $start,
int $end
): bool;
```

## Support\Helper\Str\AbstractStr

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/AbstractStr.zep">Source on GitHub</a>

Abstract class offering methods to help with the Str namespace. This can
be moved to a trait once Zephir supports it.

This base exists only for the `Str` helper hierarchy; it is not a general
base class. New code that needs these routines should compose the relevant
invokable helper (for example `Str\Interpolate`) rather than extending it.

@internal

@todo move to trait when there is support for it

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\AbstractStr`**
- [`Phalcon\Logger\Formatter\AbstractFormatter`](/5.16/api/phalcon_logger/#loggerformatterabstractformatter)
- [`Phalcon\Support\Helper\Str\Concat`](#supporthelperstrconcat)
- [`Phalcon\Support\Helper\Str\Decapitalize`](#supporthelperstrdecapitalize)
- [`Phalcon\Support\Helper\Str\EndsWith`](#supporthelperstrendswith)
- [`Phalcon\Support\Helper\Str\Friendly`](#supporthelperstrfriendly)
- [`Phalcon\Support\Helper\Str\IsLower`](#supporthelperstrislower)
- [`Phalcon\Support\Helper\Str\IsUpper`](#supporthelperstrisupper)
- [`Phalcon\Support\Helper\Str\Lower`](#supporthelperstrlower)
- [`Phalcon\Support\Helper\Str\StartsWith`](#supporthelperstrstartswith)
- [`Phalcon\Support\Helper\Str\Upper`](#supporthelperstrupper)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrabstractstr-toendswith">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">toEndsWith</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ignoreCase</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Check if a string ends with a given string</span>
</a>
<a class="api-item" href="#supporthelperstrabstractstr-tointerpolate">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toInterpolate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$left</span><span class="sm"> = &quot;%&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$right</span><span class="sm"> = &quot;%&quot;</span></span>)</code>
<span class="desc">Interpolates context values into the message placeholders</span>
</a>
<a class="api-item" href="#supporthelperstrabstractstr-tolower">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toLower</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
<span class="desc">Lowercases a string using mbstring</span>
</a>
<a class="api-item" href="#supporthelperstrabstractstr-tostartswith">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">toStartsWith</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ignoreCase</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Check if a string starts with a given string</span>
</a>
<a class="api-item" href="#supporthelperstrabstractstr-toupper">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toUpper</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
<span class="desc">Uppercases a string using mbstring</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 5</div>

<h4 id="supporthelperstrabstractstr-toendswith"><code>toEndsWith()</code></h4>

```php
protected function toEndsWith(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

Check if a string ends with a given string

<h4 id="supporthelperstrabstractstr-tointerpolate"><code>toInterpolate()</code></h4>

```php
protected function toInterpolate(
string $input,
array $context = [],
string $left = "%",
string $right = "%"
): string;
```

Interpolates context values into the message placeholders

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message

<h4 id="supporthelperstrabstractstr-tolower"><code>toLower()</code></h4>

```php
protected function toLower(
string $text,
string $encoding = "UTF-8"
): string;
```

Lowercases a string using mbstring

<h4 id="supporthelperstrabstractstr-tostartswith"><code>toStartsWith()</code></h4>

```php
protected function toStartsWith(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

Check if a string starts with a given string

<h4 id="supporthelperstrabstractstr-toupper"><code>toUpper()</code></h4>

```php
protected function toUpper(
string $text,
string $encoding = "UTF-8"
): string;
```

Uppercases a string using mbstring

## Support\Helper\Str\Camelize

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Camelize.zep">Source on GitHub</a>

Converts strings to upperCamelCase or lowerCamelCase

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\PascalCase`](#supporthelperstrpascalcase)
- **`Phalcon\Support\Helper\Str\Camelize`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrcamelize-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowerFirst</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrcamelize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $delimiters = null,
bool $lowerFirst = false
): string;
```

## Support\Helper\Str\Concat

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Concat.zep">Source on GitHub</a>

Concatenates strings using the separator only once without duplication in
places concatenation

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Concat`**

</div>

__Uses__ `Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrconcat-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrconcat-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(): string;
```

## Support\Helper\Str\CountVowels

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/CountVowels.zep">Source on GitHub</a>

Returns number of vowels in provided string. Uses a regular expression
to count the number of vowels (A, E, I, O, U) in a string.

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\CountVowels`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrcountvowels-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrcountvowels-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): int;
```

## Support\Helper\Str\Decapitalize

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Decapitalize.zep">Source on GitHub</a>

Decapitalizes the first letter of the string and then adds it with rest
of the string. Omit the upperRest parameter to keep the rest of the
string intact, or set it to true to convert to uppercase.

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Decapitalize`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrdecapitalize-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$upperRest</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrdecapitalize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
bool $upperRest = false,
string $encoding = "UTF-8"
): string;
```

## Support\Helper\Str\Decrement

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Decrement.zep">Source on GitHub</a>

Removes a number from the end of a string or decrements that number if it
is already defined

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Decrement`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrdecrement-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;_&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrdecrement-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "_"
): string;
```

## Support\Helper\Str\DirFromFile

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/DirFromFile.zep">Source on GitHub</a>

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\DirFromFile`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrdirfromfile-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$file</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrdirfromfile-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $file ): string;
```

## Support\Helper\Str\DirSeparator

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/DirSeparator.zep">Source on GitHub</a>

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\DirSeparator`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrdirseparator-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$directory</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrdirseparator-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $directory ): string;
```

## Support\Helper\Str\Dynamic

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Dynamic.zep">Source on GitHub</a>

Generates random text in accordance with the template. The template is
defined by the left and right delimiter and it can contain values separated
by the separator

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Dynamic`**

</div>

__Uses__ `Phalcon\Support\Helper\Str\Exceptions\SyntaxError`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrdynamic-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$leftDelimiter</span><span class="sm"> = &quot;\{&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$rightDelimiter</span><span class="sm"> = &quot;\}&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;|&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrdynamic-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $leftDelimiter = "{",
string $rightDelimiter = "}",
string $separator = "|"
): string;
```

## Support\Helper\Str\EndsWith

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/EndsWith.zep">Source on GitHub</a>

Check if a string ends with a given string

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\EndsWith`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrendswith-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ignoreCase</span><span class="sm"> = true</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrendswith-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

## Support\Helper\Str\Exceptions\InsufficientArguments

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Exceptions/InsufficientArguments.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Helper\Exception`](#supporthelperexception)
- **`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`**

</div>

__Uses__ `Phalcon\Support\Helper\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrexceptionsinsufficientarguments-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrexceptionsinsufficientarguments-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Support\Helper\Str\Exceptions\InvalidReplaceFormat

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Exceptions/InvalidReplaceFormat.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Helper\Exception`](#supporthelperexception)
- **`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`**

</div>

__Uses__ `Phalcon\Support\Helper\Exception`

## Support\Helper\Str\Exceptions\SyntaxError

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Exceptions/SyntaxError.zep">Source on GitHub</a>

<div class="api-tree">

- `RuntimeException`
- **`Phalcon\Support\Helper\Str\Exceptions\SyntaxError`**

</div>

__Uses__ `RuntimeException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrexceptionssyntaxerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrexceptionssyntaxerror-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $text );
```

## Support\Helper\Str\FirstBetween

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/FirstBetween.zep">Source on GitHub</a>

Returns the first string there is between the strings from the
parameter start and end.

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\FirstBetween`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrfirstbetween-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$start</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$end</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrfirstbetween-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $start,
string $end
): string;
```

## Support\Helper\Str\Friendly

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Friendly.zep">Source on GitHub</a>

Changes a text to a URL friendly one. Replaces commonly known accented
characters with their Latin equivalents. If a `replace` string or array
is passed, it will also be used to replace those characters with a space.

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Friendly`**

</div>

__Uses__ `Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrfriendly-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;-&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowercase</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrfriendly-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "-",
bool $lowercase = true,
mixed $replace = null
): string;
```

## Support\Helper\Str\Humanize

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Humanize.zep">Source on GitHub</a>

Makes an underscored or dashed text human-readable

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Humanize`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrhumanize-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrhumanize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): string;
```

## Support\Helper\Str\Includes

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Includes.zep">Source on GitHub</a>

Determines whether a string includes another string or not.

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Includes`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrincludes-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrincludes-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $haystack,
string $needle
): bool;
```

## Support\Helper\Str\Increment

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Increment.zep">Source on GitHub</a>

Adds a number to the end of a string or increments that number if it
is already defined

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Increment`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrincrement-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;_&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrincrement-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "_"
): string;
```

## Support\Helper\Str\Interpolate

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Interpolate.zep">Source on GitHub</a>

Interpolates context values into the message placeholders. By default, the
right and left tokens are `%`

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Interpolate`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrinterpolate-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$leftToken</span><span class="sm"> = &quot;%&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$rightToken</span><span class="sm"> = &quot;%&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrinterpolate-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $message,
array $context = [],
string $leftToken = "%",
string $rightToken = "%"
): string;
```

## Support\Helper\Str\IsAnagram

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsAnagram.zep">Source on GitHub</a>

Compare two strings and returns `true` if both strings are anagram,
`false` otherwise.

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\IsAnagram`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrisanagram-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$first</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$second</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrisanagram-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $first,
string $second
): bool;
```

## Support\Helper\Str\IsLower

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsLower.zep">Source on GitHub</a>

Returns `true` if the given string is in lower case, `false` otherwise.

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\IsLower`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrislower-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrislower-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): bool;
```

## Support\Helper\Str\IsPalindrome

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsPalindrome.zep">Source on GitHub</a>

Returns `true` if the given string is a palindrome, `false` otherwise.

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\IsPalindrome`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrispalindrome-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrispalindrome-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): bool;
```

## Support\Helper\Str\IsUpper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsUpper.zep">Source on GitHub</a>

Returns `true` if the given string is in upper case, `false` otherwise.

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\IsUpper`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrisupper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrisupper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): bool;
```

## Support\Helper\Str\KebabCase

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/KebabCase.zep">Source on GitHub</a>

Converts strings to kebab-case style

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\PascalCase`](#supporthelperstrpascalcase)
- **`Phalcon\Support\Helper\Str\KebabCase`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrkebabcase-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiters</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrkebabcase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $delimiters = null
): string;
```

## Support\Helper\Str\Len

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Len.zep">Source on GitHub</a>

Calculates the length of the string using `mb_strlen`

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Len`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrlen-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrlen-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): int;
```

## Support\Helper\Str\Lower

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Lower.zep">Source on GitHub</a>

Converts a string to lowercase using mbstring

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Lower`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrlower-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrlower-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): string;
```

## Support\Helper\Str\PascalCase

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/PascalCase.zep">Source on GitHub</a>

Converts strings to PascalCase style

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\PascalCase`**
- [`Phalcon\Support\Helper\Str\Camelize`](#supporthelperstrcamelize)
- [`Phalcon\Support\Helper\Str\KebabCase`](#supporthelperstrkebabcase)
- [`Phalcon\Support\Helper\Str\SnakeCase`](#supporthelperstrsnakecase)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrpascalcase-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiters</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#supporthelperstrpascalcase-processarray">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">processArray</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiters</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrpascalcase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $delimiters = null
): string;
```

<div class="api-group">Protected · 1</div>

<h4 id="supporthelperstrpascalcase-processarray"><code>processArray()</code></h4>

```php
protected function processArray(
string $text,
string $delimiters = null
): array;
```

## Support\Helper\Str\Prefix

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Prefix.zep">Source on GitHub</a>

Prefixes the text with the supplied prefix

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Prefix`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrprefix-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$prefix</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrprefix-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $text,
string $prefix
): string;
```

## Support\Helper\Str\Random

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Random.zep">Source on GitHub</a>

Generates a random string based on the given type. Type is one of the
RANDOM_* constants

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Random`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrrandom-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = self::RANDOM_ALNUM</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$length</span><span class="sm"> = 8</span></span>)</code>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RANDOM_ALNUM</span><span class="sm"> = 0</span></code>
<span class="desc">Only alphanumeric characters [a-zA-Z0-9]</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RANDOM_ALPHA</span><span class="sm"> = 1</span></code>
<span class="desc">Only alphabetical characters [azAZ]</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RANDOM_DISTINCT</span><span class="sm"> = 5</span></code>
<span class="desc">Only alphanumeric uppercase characters exclude similar characters [2345679ACDEFHJKLMNPRSTUVWXYZ]</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RANDOM_HEXDEC</span><span class="sm"> = 2</span></code>
<span class="desc">Only hexadecimal characters [0-9a-f]</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RANDOM_NOZERO</span><span class="sm"> = 4</span></code>
<span class="desc">Only numbers without 0 [1-9]</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RANDOM_NUMERIC</span><span class="sm"> = 3</span></code>
<span class="desc">Only numbers [0-9]</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrrandom-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
int $type = self::RANDOM_ALNUM,
int $length = 8
): string;
```

## Support\Helper\Str\ReduceSlashes

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/ReduceSlashes.zep">Source on GitHub</a>

Reduces multiple slashes in a string to single slashes

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\ReduceSlashes`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrreduceslashes-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrreduceslashes-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): string;
```

## Support\Helper\Str\SnakeCase

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/SnakeCase.zep">Source on GitHub</a>

Converts strings to snake_case style

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\PascalCase`](#supporthelperstrpascalcase)
- **`Phalcon\Support\Helper\Str\SnakeCase`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrsnakecase-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiters</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrsnakecase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $delimiters = null
): string;
```

## Support\Helper\Str\StartsWith

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/StartsWith.zep">Source on GitHub</a>

Check if a string starts with a given string

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\StartsWith`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrstartswith-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ignoreCase</span><span class="sm"> = true</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrstartswith-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

## Support\Helper\Str\Suffix

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Suffix.zep">Source on GitHub</a>

Suffixes the text with the supplied suffix

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Suffix`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrsuffix-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$suffix</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrsuffix-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $text,
string $suffix
): string;
```

## Support\Helper\Str\Ucwords

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Ucwords.zep">Source on GitHub</a>

Capitalizes the first letter of each word

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Ucwords`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrucwords-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrucwords-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): string;
```

## Support\Helper\Str\Uncamelize

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Uncamelize.zep">Source on GitHub</a>

Converts strings to non camelized style

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Uncamelize`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstruncamelize-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = &quot;_&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstruncamelize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $delimiter = "_"
): string;
```

## Support\Helper\Str\Underscore

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Underscore.zep">Source on GitHub</a>

Makes a text underscored instead of spaced

<div class="api-tree">

- **`Phalcon\Support\Helper\Str\Underscore`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrunderscore-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrunderscore-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): string;
```

## Support\Helper\Str\Upper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Upper.zep">Source on GitHub</a>

Converts a string to uppercase using mbstring

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Upper`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrupper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="supporthelperstrupper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): string;
```

## Support\Registry

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Registry.zep">Source on GitHub</a>

A registry is a container for storing objects and values in the application
space. By storing the value in a registry, the same object is always
available throughout your application.

```php
$registry = new \Phalcon\Registry();

// Set value
$registry->something = "something";
// or
$registry["something"] = "something";

// Get value
$value = $registry->something;
// or
$value = $registry["something"];

// Check if the key exists
$exists = isset($registry->something);
// or
$exists = isset($registry["something"]);

// Unset
unset($registry->something);
// or
unset($registry["something"]);
```

In addition to ArrayAccess, Phalcon\Registry also implements Countable
(count($registry) will return the number of elements in the registry),
Serializable and Iterator (you can iterate over the registry using a foreach
loop) interfaces. For PHP 5.4 and higher, JsonSerializable interface is
implemented.

Phalcon\Registry is very fast (it is typically faster than any userspace
implementation of the registry); however, this comes at a price:
Phalcon\Registry is a final class and cannot be inherited from.

Though Phalcon\Registry exposes methods like __get(), offsetGet(), count() etc,
it is not recommended to invoke them manually (these methods exist mainly to
match the interfaces the registry implements): $registry->__get("property")
is several times slower than $registry->property.

Internally all the magic methods (and interfaces except JsonSerializable)
are implemented using object handlers or similar techniques: this allows to
bypass relatively slow method calls.

<div class="api-tree">

- [`Phalcon\Support\Collection`](#supportcollection)
- **`Phalcon\Support\Registry`**

</div>

__Uses__ `Phalcon\Support\Collection` · `Traversable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportregistry-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#supportregistry-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Magic getter to get an element from the collection</span>
</a>
<a class="api-item" href="#supportregistry-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Magic isset to check whether an element exists or not</span>
</a>
<a class="api-item" href="#supportregistry-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Magic setter to assign values to an element</span>
</a>
<a class="api-item" href="#supportregistry-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Magic unset to remove an element from the collection</span>
</a>
<a class="api-item" href="#supportregistry-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears the internal collection</span>
</a>
<a class="api-item" href="#supportregistry-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Count elements of an object</span>
</a>
<a class="api-item" href="#supportregistry-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Get the element from the collection</span>
</a>
<a class="api-item" href="#supportregistry-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">Traversable</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
<span class="desc">Returns the iterator of the class</span>
</a>
<a class="api-item" href="#supportregistry-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Determines whether an element is present in the collection.</span>
</a>
<a class="api-item" href="#supportregistry-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Initialize internal array</span>
</a>
<a class="api-item" href="#supportregistry-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">jsonSerialize</span>()</code>
<span class="desc">Specify data which should be serialized to JSON</span>
</a>
<a class="api-item" href="#supportregistry-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Whether a offset exists</span>
</a>
<a class="api-item" href="#supportregistry-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Offset to retrieve</span>
</a>
<a class="api-item" href="#supportregistry-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Offset to set</span>
</a>
<a class="api-item" href="#supportregistry-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Offset to unset</span>
</a>
<a class="api-item" href="#supportregistry-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Delete the element from the collection</span>
</a>
<a class="api-item" href="#supportregistry-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">serialize</span>()</code>
<span class="desc">String representation of object</span>
</a>
<a class="api-item" href="#supportregistry-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set an element in the collection</span>
</a>
<a class="api-item" href="#supportregistry-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the object in an array format</span>
</a>
<a class="api-item" href="#supportregistry-tojson">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toJson</span>( <span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 79</span> )</code>
<span class="desc">Returns the object in a JSON format</span>
</a>
<a class="api-item" href="#supportregistry-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unserialize</span>( <span class="st">string</span> <span class="sv">$data</span> )</code>
<span class="desc">Constructs the object</span>
</a>
</div>

### Methods

<div class="api-group">Public · 22</div>

<h4 id="supportregistry-__construct"><code>__construct()</code></h4>

```php
final public function __construct( array $data = [] );
```

Constructor

<h4 id="supportregistry-__get"><code>__get()</code></h4>

```php
final public function __get( string $element ): mixed;
```

Magic getter to get an element from the collection

<h4 id="supportregistry-__isset"><code>__isset()</code></h4>

```php
final public function __isset( string $element ): bool;
```

Magic isset to check whether an element exists or not

<h4 id="supportregistry-__set"><code>__set()</code></h4>

```php
final public function __set(
string $element,
mixed $value
): void;
```

Magic setter to assign values to an element

<h4 id="supportregistry-__unset"><code>__unset()</code></h4>

```php
final public function __unset( string $element ): void;
```

Magic unset to remove an element from the collection

<h4 id="supportregistry-clear"><code>clear()</code></h4>

```php
final public function clear(): void;
```

Clears the internal collection

<h4 id="supportregistry-count"><code>count()</code></h4>

```php
final public function count(): int;
```

Count elements of an object

@link https://php.net/manual/en/countable.count.php

<h4 id="supportregistry-get"><code>get()</code></h4>

```php
final public function get(
string $element,
mixed $defaultValue = null,
string $cast = null
): mixed;
```

Get the element from the collection

<h4 id="supportregistry-getiterator"><code>getIterator()</code></h4>

```php
final public function getIterator(): Traversable;
```

Returns the iterator of the class

<h4 id="supportregistry-has"><code>has()</code></h4>

```php
final public function has( string $element ): bool;
```

Determines whether an element is present in the collection.

<h4 id="supportregistry-init"><code>init()</code></h4>

```php
final public function init( array $data = [] ): void;
```

Initialize internal array

<h4 id="supportregistry-jsonserialize"><code>jsonSerialize()</code></h4>

```php
final public function jsonSerialize(): array;
```

Specify data which should be serialized to JSON

@link https://php.net/manual/en/jsonserializable.jsonserialize.php

<h4 id="supportregistry-offsetexists"><code>offsetExists()</code></h4>

```php
final public function offsetExists( mixed $element ): bool;
```

Whether a offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php

<h4 id="supportregistry-offsetget"><code>offsetGet()</code></h4>

```php
final public function offsetGet( mixed $element ): mixed;
```

Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php

<h4 id="supportregistry-offsetset"><code>offsetSet()</code></h4>

```php
final public function offsetSet(
mixed $element,
mixed $value
): void;
```

Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php

<h4 id="supportregistry-offsetunset"><code>offsetUnset()</code></h4>

```php
final public function offsetUnset( mixed $element ): void;
```

Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php

<h4 id="supportregistry-remove"><code>remove()</code></h4>

```php
final public function remove( string $element ): void;
```

Delete the element from the collection

<h4 id="supportregistry-serialize"><code>serialize()</code></h4>

```php
final public function serialize(): string|null;
```

String representation of object

@link https://php.net/manual/en/serializable.serialize.php

<h4 id="supportregistry-set"><code>set()</code></h4>

```php
final public function set(
string $element,
mixed $value
): void;
```

Set an element in the collection

<h4 id="supportregistry-toarray"><code>toArray()</code></h4>

```php
final public function toArray(): array;
```

Returns the object in an array format

<h4 id="supportregistry-tojson"><code>toJson()</code></h4>

```php
final public function toJson( int $options = 79 ): string;
```

Returns the object in a JSON format

The default string uses the following options for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT, JSON_UNESCAPED_SLASHES

@see https://www.ietf.org/rfc/rfc4627.txt

<h4 id="supportregistry-unserialize"><code>unserialize()</code></h4>

```php
final public function unserialize( string $data ): void;
```

Constructs the object

@link https://php.net/manual/en/serializable.unserialize.php

## Support\Settings

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Settings.zep">Source on GitHub</a>

Phalcon\Support\Settings

Provides a PHP-userland layer for reading and overriding the Phalcon
extension's ini settings (orm.*, db.*, form.*).

get() checks PHP-level overrides first, then falls back to globals_get()
which reads the value configured in php.ini / .htaccess / per-virtualhost.

set() stores the value in the PHP-level overrides array only. It does NOT
call globals_set(), so the change is confined to this static state and never
modifies the underlying C struct. This prevents settings changed by one
project from leaking into another project sharing the same PHP worker process.

NOTE: In non-ZTS (non-thread-safe) PHP builds, globals_get() reads from a
process-level C struct. Because set() does not write to that struct, any
value set via ini_set("phalcon.orm.*", ...) or globals_set() by other code
remains visible through get() as the fallback for keys that have no
PHP-level override. In ZTS builds each thread has its own copy of the struct.

reset() clears only the keys that were previously set via set(), restoring
those keys to their globals_get() fallback values.

<div class="api-tree">

- **`Phalcon\Support\Settings`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportsettings-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Returns the value of a known setting.</span>
</a>
<a class="api-item" href="#supportsettings-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Clears all PHP-level overrides, restoring get() to return globals_get()</span>
</a>
<a class="api-item" href="#supportsettings-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Overrides a setting at the PHP level.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$overrides</span></code>
<span class="desc">PHP-level overrides. Keys stored here take priority over globals_get().</span>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="supportsettings-get"><code>get()</code></h4>

```php
public static function get( string $key ): mixed;
```

Returns the value of a known setting.

Resolution order:
  1. PHP-level override (set via Settings::set())
  2. globals_get() - the C-level value, honoring php.ini / .htaccess
  3. null - for unknown keys

<h4 id="supportsettings-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Clears all PHP-level overrides, restoring get() to return globals_get()
fallback values (as configured in php.ini or .htaccess).

<h4 id="supportsettings-set"><code>set()</code></h4>

```php
public static function set(
string $key,
mixed $value
): void;
```

Overrides a setting at the PHP level.

Does NOT call globals_set(), so the C-level struct is not modified and
no other project sharing this PHP process is affected.

Unknown keys are silently ignored.

## Support\Version

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Version.zep">Source on GitHub</a>

This class allows to get the installed version of the framework

<div class="api-tree">

- **`Phalcon\Support\Version`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportversion-get">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">get</span>()</code>
<span class="desc">Returns the active version (string)</span>
</a>
<a class="api-item" href="#supportversion-getid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getId</span>()</code>
<span class="desc">Returns the numeric active version</span>
</a>
<a class="api-item" href="#supportversion-getpart">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPart</span>( <span class="st">int</span> <span class="sv">$part</span> )</code>
<span class="desc">Returns a specific part of the version. If the wrong parameter is passed</span>
</a>
<a class="api-item" href="#supportversion-getspecial">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSpecial</span>( <span class="st">int</span> <span class="sv">$special</span> )</code>
<span class="desc">Translates a number to a special release.</span>
</a>
<a class="api-item" href="#supportversion-getversion">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
<span class="desc">Area where the version number is set. The format is as follows:</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_MAJOR</span><span class="sm"> = 0</span></code>
<span class="desc">The constant referencing the major version. Returns 0 ``<code>php echo (new Phalcon\Support\Version()) -&gt;getPart(Phalcon\Support\Version::VERSION_MAJOR); </code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_MEDIUM</span><span class="sm"> = 1</span></code>
<span class="desc">The constant referencing the major version. Returns 1 ``<code>php echo (new Phalcon\Support\Version()) -&gt;getPart(Phalcon\Support\Version::VERSION_MEDIUM); </code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_MINOR</span><span class="sm"> = 2</span></code>
<span class="desc">The constant referencing the major version. Returns 2 ``<code>php echo (new Phalcon\Support\Version()) -&gt;getPart(Phalcon\Support\Version::VERSION_MINOR); </code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_SPECIAL</span><span class="sm"> = 3</span></code>
<span class="desc">The constant referencing the major version. Returns 3 ``<code>php echo (new Phalcon\Support\Version()) -&gt;getPart(Phalcon\Support\Version::VERSION_SPECIAL); </code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_SPECIAL_NUMBER</span><span class="sm"> = 4</span></code>
<span class="desc">The constant referencing the major version. Returns 4 ``<code>php echo (new Phalcon\Support\Version()) -&gt;getPart(Phalcon\Support\Version::VERSION_SPECIAL_NUMBER); </code>``</span>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="supportversion-get"><code>get()</code></h4>

```php
public function get(): string;
```

Returns the active version (string)

```php
echo (new Phalcon\Version())->get();
```

<h4 id="supportversion-getid"><code>getId()</code></h4>

```php
public function getId(): string;
```

Returns the numeric active version

```php
echo (new Phalcon\Version())->getId();
```

<h4 id="supportversion-getpart"><code>getPart()</code></h4>

```php
public function getPart( int $part ): string;
```

Returns a specific part of the version. If the wrong parameter is passed
it will return the full version

```php
echo (new Phalcon\Version())->getPart(Phalcon\Version::VERSION_MAJOR);
```

<div class="api-group">Protected · 2</div>

<h4 id="supportversion-getspecial"><code>getSpecial()</code></h4>

```php
protected final function getSpecial( int $special ): string;
```

Translates a number to a special release.

<h4 id="supportversion-getversion"><code>getVersion()</code></h4>

```php
protected function getVersion(): array;
```

Area where the version number is set. The format is as follows:
ABBCCDE

A - Major version
B - Med version (two digits)
C - Min version (two digits)
D - Special release: 1 = alpha, 2 = beta, 3 = RC, 4 = stable
E - Special release version i.e. RC1, Beta2 etc.

Source: https://docs.phalcon.io/5.16/api/phalcon_support/index.mdx
