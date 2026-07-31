---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Support\AbstractLocator

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/AbstractLocator.zep){ .src-btn }

Abstract base class for service locators.

Provides a unified way to register, validate, and resolve services
from a DI container, with support for both legacy Di and new Container.

@template T of object

<div class="api-tree" markdown>

- **`Phalcon\Support\AbstractLocator`**
    - [`Phalcon\Auth\Access\AccessLocator`](phalcon_auth.md#authaccessaccesslocator)
    - [`Phalcon\Auth\Adapter\AdapterLocator`](phalcon_auth.md#authadapteradapterlocator)
    - [`Phalcon\Auth\Guard\GuardLocator`](phalcon_auth.md#authguardguardlocator)

</div>

__Uses__ `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Throwable`
{ .api-uses }

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

#### `__construct()` { #supportabstractlocator-__construct }

```php
public function __construct(
    mixed $container,
    array $services = []
);
```

#### `getAll()` { #supportabstractlocator-getall }

```php
public function getAll(): array;
```

Returns the full registered service map (defaults plus any added via
register()).

#### `getClass()` { #supportabstractlocator-getclass }

```php
public function getClass( string $name ): string;
```

Returns the class-string registered under the given name.

#### `has()` { #supportabstractlocator-has }

```php
public function has( string $name ): bool;
```

Whether a service with the given name is registered.

#### `newInstance()` { #supportabstractlocator-newinstance }

```php
public function newInstance( string $name ): object;
```

Retrieve a service instance from the container.

On the `DiInterface` path this returns the container's **shared**
instance (`getShared()`) - despite the name, it is not a fresh build.
Locators whose services carry per-activation state should override this
method to resolve a fresh instance; see `Auth\Access\AccessLocator`, which uses
`ContainerResolver::resolveFresh` for exactly that reason.

#### `register()` { #supportabstractlocator-register }

```php
public function register(
    string $name,
    string $definition
): static;
```

Register a service or override an existing one.

<div class="api-group">Protected · 4</div>

#### `getExceptionClass()` { #supportabstractlocator-getexceptionclass }

```php
abstract protected function getExceptionClass(): string;
```

Get the exception class to throw on errors.

#### `getInterfaceClass()` { #supportabstractlocator-getinterfaceclass }

```php
abstract protected function getInterfaceClass(): string;
```

Get the interface/class that all registered services must implement.
This allows different locators to enforce different contracts.

#### `getService()` { #supportabstractlocator-getservice }

```php
protected function getService( string $name ): string;
```

Get the service class name for a given name.

#### `getServices()` { #supportabstractlocator-getservices }

```php
abstract protected function getServices(): array;
```

Get the default services for this locator.


## Support\Collection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Support\Collection`** - implements [`Phalcon\Support\Collection\CollectionInterface`](#supportcollectioncollectioninterface), `Countable`, `JsonSerializable`
    - [`Phalcon\Config\Config`](phalcon_config.md#configconfig)
    - [`Phalcon\Html\Attributes`](phalcon_html.md#htmlattributes)
    - [`Phalcon\Session\Bag`](phalcon_session.md#sessionbag)
    - [`Phalcon\Support\Collection\ReadOnlyCollection`](#supportcollectionreadonlycollection)
    - [`Phalcon\Support\Registry`](#supportregistry)

</div>

__Uses__ `ArrayAccess` · `ArrayIterator` · `Countable` · `InvalidArgumentException` · `IteratorAggregate` · `JsonSerializable` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Collection\Exceptions\InvalidValueType` · `Phalcon\Support\Helper\Json\Encode` · `Traversable`
{ .api-uses }

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

#### `__construct()` { #supportcollection-__construct }

```php
public function __construct(
    array $data = [],
    bool $insensitive = true,
    bool $strictNull = false,
    string $type = null
);
```

Collection constructor.

#### `__get()` { #supportcollection-__get }

```php
public function __get( string $element ): mixed;
```

Magic getter to get an element from the collection

#### `__isset()` { #supportcollection-__isset }

```php
public function __isset( string $element ): bool;
```

Magic isset to check whether an element exists or not

#### `__serialize()` { #supportcollection-__serialize }

```php
public function __serialize(): array;
```

Returns the state of the collection for serialization, including
configuration flags so the round-trip restores full state.

#### `__set()` { #supportcollection-__set }

```php
public function __set(
    string $element,
    mixed $value
): void;
```

Magic setter to assign values to an element

#### `__unserialize()` { #supportcollection-__unserialize }

```php
public function __unserialize( array $data ): void;
```

Restores the collection state. Accepts both the structured format
emitted by __serialize() and the legacy flat-array format for BC
with previously serialized data.

#### `__unset()` { #supportcollection-__unset }

```php
public function __unset( string $element ): void;
```

Magic unset to remove an element from the collection

#### `clear()` { #supportcollection-clear }

```php
public function clear(): void;
```

Clears the internal collection

#### `column()` { #supportcollection-column }

```php
public function column( string $propertyOrMethod ): array;
```

Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.

#### `count()` { #supportcollection-count }

```php
public function count(): int;
```

Count elements of an object

#### `each()` { #supportcollection-each }

```php
public function each( callable $callback ): static;
```

Invokes the callback for every item in the collection. Returns the
collection itself to allow chaining.

#### `filter()` { #supportcollection-filter }

```php
public function filter( callable $callback ): static;
```

Returns a new collection of items for which the callback returns true.
Keys are preserved.

#### `first()` { #supportcollection-first }

```php
public function first(): mixed;
```

Returns the first value in the collection, or null if empty.

#### `get()` { #supportcollection-get }

```php
public function get(
    string $element,
    mixed $defaultValue = null,
    string $cast = null
): mixed;
```

Get the element from the collection

#### `getIterator()` { #supportcollection-getiterator }

```php
public function getIterator(): Traversable;
```

Returns the iterator of the class

#### `getKeys()` { #supportcollection-getkeys }

```php
public function getKeys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

#### `getType()` { #supportcollection-gettype }

```php
public function getType(): string|null;
```

Returns the configured runtime type guard, or null if none.

#### `getValues()` { #supportcollection-getvalues }

```php
public function getValues(): array;
```

Returns the values of the internal array.

#### `has()` { #supportcollection-has }

```php
public function has( string $element ): bool;
```

Get the element from the collection

#### `init()` { #supportcollection-init }

```php
public function init( array $data = [] ): void;
```

Initialize internal array

#### `isEmpty()` { #supportcollection-isempty }

```php
public function isEmpty(): bool;
```

Return if the collection is empty

#### `jsonSerialize()` { #supportcollection-jsonserialize }

```php
public function jsonSerialize(): array;
```

Specify data which should be serialized to JSON

@link https://php.net/manual/en/jsonserializable.jsonserialize.php

#### `keys()` { #supportcollection-keys }

```php
public function keys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

#### `last()` { #supportcollection-last }

```php
public function last(): mixed;
```

Returns the last value in the collection, or null if empty.

#### `map()` { #supportcollection-map }

```php
public function map( callable $callback ): static;
```

Returns a new collection with the callback applied to every value.
Keys are preserved.

#### `offsetExists()` { #supportcollection-offsetexists }

```php
public function offsetExists( mixed $element ): bool;
```

Whether a offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php

#### `offsetGet()` { #supportcollection-offsetget }

```php
public function offsetGet( mixed $element ): mixed;
```

Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php

#### `offsetSet()` { #supportcollection-offsetset }

```php
public function offsetSet(
    mixed $element,
    mixed $value
): void;
```

Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php

#### `offsetUnset()` { #supportcollection-offsetunset }

```php
public function offsetUnset( mixed $element ): void;
```

Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php

#### `reduce()` { #supportcollection-reduce }

```php
public function reduce(
    callable $callback,
    mixed $initial = null
): mixed;
```

Reduces the collection to a single value using the callback. The
callback receives `($accumulator, $value, $key)`.

#### `remove()` { #supportcollection-remove }

```php
public function remove( string $element ): void;
```

Delete the element from the collection

#### `replace()` { #supportcollection-replace }

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array, clearing existing data first

#### `serialize()` { #supportcollection-serialize }

```php
public function serialize(): string|null;
```

BC - delegate to __serialize()

#### `set()` { #supportcollection-set }

```php
public function set(
    string $element,
    mixed $value
): void;
```

Set an element in the collection

#### `sort()` { #supportcollection-sort }

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

#### `toArray()` { #supportcollection-toarray }

```php
public function toArray(): array;
```

Returns the object in an array format

#### `toJson()` { #supportcollection-tojson }

```php
public function toJson( int $options = 4194383 ): string;
```

Returns the object in a JSON format

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES, JSON_THROW_ON_ERROR

@see https://www.ietf.org/rfc/rfc4627.txt

#### `unserialize()` { #supportcollection-unserialize }

```php
public function unserialize( string $data ): void;
```

BC - delegate to __unserialize()

#### `values()` { #supportcollection-values }

```php
public function values(): array;
```

Returns the values of the internal array.

#### `where()` { #supportcollection-where }

```php
public function where(
    string $propertyOrMethod,
    mixed $value
): static;
```

Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.

<div class="api-group">Protected · 5</div>

#### `cloneEmpty()` { #supportcollection-cloneempty }

```php
protected function cloneEmpty( array $data = [] ): static;
```

Builds a new collection of the same concrete class, carrying over the
configuration (insensitivity, strict-null, type) of the current one.

#### `extractValue()` { #supportcollection-extractvalue }

```php
protected function extractValue(
    mixed $item,
    string $propertyOrMethod
): mixed;
```

Extracts a single value from an item. For arrays returns the keyed
entry; for objects, prefers a callable method, then a readable
property. Returns null when nothing matches.

#### `processKey()` { #supportcollection-processkey }

```php
protected function processKey( string $element ): string;
```

Checks if we need insensitive keys and if so, converts the element to
lowercase

#### `setData()` { #supportcollection-setdata }

```php
protected function setData(
    string $element,
    mixed $value
): void;
```

Internal method to set data

#### `validateType()` { #supportcollection-validatetype }

```php
protected function validateType( mixed $value ): void;
```

Validates the value against the configured `$type` guard. When `$type`
is null this is a no-op. Scalar tokens (`int`, `string`, `bool`,
`float`, `array`, `object`) map to their `is_*` checks; anything else
is treated as a class/interface name and tested with `instanceof`.


## Support\Collection\CollectionInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/CollectionInterface.zep){ .src-btn }

Phalcon\Support\Collection\CollectionInterface

<div class="api-tree" markdown>

- `ArrayAccess`
    - [`Phalcon\Contracts\Support\Collection`](phalcon_contracts.md#contractssupportcollection)
        - **`Phalcon\Support\Collection\CollectionInterface`**
            - [`Phalcon\Config\ConfigInterface`](phalcon_config.md#configconfiginterface)

</div>

__Uses__ `Phalcon\Contracts\Support\Collection`
{ .api-uses }


## Support\Collection\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exception.zep){ .src-btn }

Exceptions for the Collection object

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - **`Phalcon\Support\Collection\Exception`**
            - [`Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`](#supportcollectionexceptionsreadonlyviolation)

</div>

__Uses__ `Phalcon\Support\Exception`
{ .api-uses }


## Support\Collection\Exceptions\InvalidValueType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exceptions/InvalidValueType.zep){ .src-btn }

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Support\Collection\Exceptions\InvalidValueType`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportcollectionexceptionsinvalidvaluetype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supportcollectionexceptionsinvalidvaluetype-__construct }

```php
public function __construct(
    string $type,
    mixed $value
);
```


## Support\Collection\Exceptions\ReadOnlyViolation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exceptions/ReadOnlyViolation.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - [`Phalcon\Support\Collection\Exception`](#supportcollectionexception)
            - **`Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`**

</div>

__Uses__ `Phalcon\Support\Collection\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportcollectionexceptionsreadonlyviolation-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supportcollectionexceptionsreadonlyviolation-__construct }

```php
public function __construct();
```


## Support\Collection\ReadOnlyCollection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/ReadOnlyCollection.zep){ .src-btn }

A read only Collection object

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](#supportcollection)
    - **`Phalcon\Support\Collection\ReadOnlyCollection`**

</div>

__Uses__ `Phalcon\Support\Collection` · `Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`
{ .api-uses }

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

#### `__construct()` { #supportcollectionreadonlycollection-__construct }

```php
public function __construct(
    array $data = [],
    bool $insensitive = true,
    bool $strictNull = false,
    string $type = null
);
```

ReadOnlyCollection constructor.

#### `__unserialize()` { #supportcollectionreadonlycollection-__unserialize }

```php
public function __unserialize( array $data ): void;
```

Restores the collection state during unserialization.

Temporarily disables the read-only guard so the parent class can restore
the collection state. The guard is re-enabled before the method returns.

#### `clear()` { #supportcollectionreadonlycollection-clear }

```php
public function clear(): void;
```

#### `init()` { #supportcollectionreadonlycollection-init }

```php
public function init( array $data = [] ): void;
```

#### `remove()` { #supportcollectionreadonlycollection-remove }

```php
public function remove( string $element ): void;
```

Delete the element from the collection

#### `replace()` { #supportcollectionreadonlycollection-replace }

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array

#### `set()` { #supportcollectionreadonlycollection-set }

```php
public function set(
    string $element,
    mixed $value
): void;
```

Set an element in the collection


## Support\Debug

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug.zep){ .src-btn }

Listens for uncaught exceptions and renders them. Acts as a thin coordinator
delegating data collection to ReportBuilder and presentation to a Renderer.

<div class="api-tree" markdown>

- **`Phalcon\Support\Debug`**

</div>

__Uses__ `Phalcon\Contracts\Support\Debug\Renderer` · `Phalcon\Support\Debug\Exceptions\RequestHalted` · `Phalcon\Support\Debug\Exceptions\RuntimeWarning` · `Phalcon\Support\Debug\Renderer\HtmlRenderer` · `Phalcon\Support\Debug\ReportBuilder` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `ReflectionException` · `Throwable`
{ .api-uses }

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

#### `__construct()` { #supportdebug-__construct }

```php
public function __construct();
```

#### `clearVars()` { #supportdebug-clearvars }

```php
public function clearVars(): static;
```

Clears are variables added previously

#### `debugVar()` { #supportdebug-debugvar }

```php
public function debugVar( mixed $varz ): static;
```

Adds a variable to the debug output

#### `getCssSources()` { #supportdebug-getcsssources }

```php
public function getCssSources(): string;
```

Returns the CSS sources

#### `getJsSources()` { #supportdebug-getjssources }

```php
public function getJsSources(): string;
```

Returns the JavaScript sources

#### `getRenderer()` { #supportdebug-getrenderer }

```php
public function getRenderer(): Renderer;
```

Returns the renderer used to produce the output

#### `getVersion()` { #supportdebug-getversion }

```php
public function getVersion(): string;
```

Generates a link to the current version documentation

#### `halt()` { #supportdebug-halt }

```php
public function halt(): void;
```

Halts the request showing a backtrace

#### `listen()` { #supportdebug-listen }

```php
public function listen(
    bool $exceptions = true,
    bool $lowSeverity = false
): static;
```

Listen for uncaught exceptions and non silent notices or warnings

#### `listenExceptions()` { #supportdebug-listenexceptions }

```php
public function listenExceptions(): static;
```

Listen for uncaught exceptions

#### `listenLowSeverity()` { #supportdebug-listenlowseverity }

```php
public function listenLowSeverity(): static;
```

Listen for non silent notices or warnings

#### `onUncaughtException()` { #supportdebug-onuncaughtexception }

```php
public function onUncaughtException( \Throwable $exception ): bool;
```

Handles uncaught exceptions

#### `onUncaughtLowSeverity()` { #supportdebug-onuncaughtlowseverity }

```php
public function onUncaughtLowSeverity(
    mixed $severity,
    mixed $message,
    mixed $file,
    mixed $line
): void;
```

Throws an exception when a notice or warning is raised

#### `renderHtml()` { #supportdebug-renderhtml }

```php
public function renderHtml( \Throwable $exception ): string;
```

Render exception to html format.

#### `setBlacklist()` { #supportdebug-setblacklist }

```php
public function setBlacklist( array $blacklist ): static;
```

Sets if files the exception's backtrace must be showed

#### `setRenderer()` { #supportdebug-setrenderer }

```php
public function setRenderer( Renderer $renderer ): static;
```

Sets the renderer used to produce the output

#### `setShowBackTrace()` { #supportdebug-setshowbacktrace }

```php
public function setShowBackTrace( bool $showBackTrace ): static;
```

Sets if files the exception's backtrace must be showed

#### `setShowFileFragment()` { #supportdebug-setshowfilefragment }

```php
public function setShowFileFragment( bool $showFileFragment ): static;
```

Sets if files must be completely opened and showed in the output
or just the fragment related to the exception

#### `setShowFiles()` { #supportdebug-setshowfiles }

```php
public function setShowFiles( bool $showFiles ): static;
```

Set if files part of the backtrace must be shown in the output

#### `setUri()` { #supportdebug-seturi }

```php
public function setUri( string $uri ): static;
```

Change the base URI for static resources


## Support\Debug\Dump

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Dump.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Support\Debug\Dump`** - implements [`Phalcon\Contracts\Support\Debug\TemplateAware`](phalcon_contracts.md#contractssupportdebugtemplateaware)

</div>

__Uses__ `Phalcon\Contracts\Support\Debug\TemplateAware` · `Phalcon\Di\DiInterface` · `Phalcon\Support\Helper\Json\Encode` · `Reflection` · `ReflectionClass` · `ReflectionProperty` · `stdClass`
{ .api-uses }

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
<span class="desc">Template overrides keyed by name.

@todo Move getTemplate()/setTemplate()/templates into a shared trait once
      Zephir supports traits (mirrors
      Phalcon\Support\Debug\Traits\TemplateAwareTrait in the PHP source).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `__construct()` { #supportdebugdump-__construct }

```php
public function __construct(
    array $styles = [],
    bool $detailed = false
);
```

Phalcon\Debug\Dump constructor

#### `all()` { #supportdebugdump-all }

```php
public function all(): string;
```

Alias of variables() method

#### `getDetailed()` { #supportdebugdump-getdetailed }

```php
public function getDetailed(): bool;
```

#### `getTemplate()` { #supportdebugdump-gettemplate }

```php
public function getTemplate( string $name ): string;
```

Returns the template for the given name (override if set, default
otherwise).

#### `one()` { #supportdebugdump-one }

```php
public function one(
    mixed $variable,
    string $name = null
): string;
```

Alias of variable() method

#### `setDetailed()` { #supportdebugdump-setdetailed }

```php
public function setDetailed( bool $flag ): void;
```

#### `setStyles()` { #supportdebugdump-setstyles }

```php
public function setStyles( array $styles = [] ): array;
```

Set styles for vars type

#### `setTemplate()` { #supportdebugdump-settemplate }

```php
public function setTemplate(
    string $name,
    string $template
): static;
```

Overrides the template for the given name.

#### `toJson()` { #supportdebugdump-tojson }

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

#### `variable()` { #supportdebugdump-variable }

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

#### `variables()` { #supportdebugdump-variables }

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

#### `defaultTemplate()` { #supportdebugdump-defaulttemplate }

```php
protected function defaultTemplate( string $name ): string;
```

Returns the embedded default template for the given name.

#### `getStyle()` { #supportdebugdump-getstyle }

```php
protected function getStyle( string $type ): string;
```

Get style for type

#### `output()` { #supportdebugdump-output }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Debug will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - **`Phalcon\Support\Debug\Exception`**
            - [`Phalcon\Support\Debug\Exceptions\RequestHalted`](#supportdebugexceptionsrequesthalted)

</div>

__Uses__ `Phalcon\Support\Exception`
{ .api-uses }


## Support\Debug\Exceptions\RequestHalted

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exceptions/RequestHalted.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - [`Phalcon\Support\Debug\Exception`](#supportdebugexception)
            - **`Phalcon\Support\Debug\Exceptions\RequestHalted`**

</div>

__Uses__ `Phalcon\Support\Debug\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supportdebugexceptionsrequesthalted-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supportdebugexceptionsrequesthalted-__construct }

```php
public function __construct();
```


## Support\Debug\Exceptions\RuntimeWarning

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exceptions/RuntimeWarning.zep){ .src-btn }

<div class="api-tree" markdown>

- `\ErrorException`
    - **`Phalcon\Support\Debug\Exceptions\RuntimeWarning`**

</div>


## Support\Debug\Renderer\HtmlRenderer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Renderer/HtmlRenderer.zep){ .src-btn }

Renders an ExceptionReport as the HTML debug page using embedded, overridable
template strings filled by strtr. All styling and interactivity (theme, tabs,
syntax highlighting, copy/editor links) are provided by the external
debug.css / debug.js assets.

<div class="api-tree" markdown>

- **`Phalcon\Support\Debug\Renderer\HtmlRenderer`** - implements [`Phalcon\Contracts\Support\Debug\Renderer`](phalcon_contracts.md#contractssupportdebugrenderer)

</div>

__Uses__ `Phalcon\Contracts\Support\Debug\Renderer` · `Phalcon\Support\Debug\Report\BacktraceItem` · `Phalcon\Support\Debug\Report\ExceptionReport` · `Phalcon\Support\Version`
{ .api-uses }

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
<span class="desc">Template overrides keyed by name.

@todo Move getTemplate()/setTemplate()/templates into a shared trait once
      Zephir supports traits (mirrors
      Phalcon\Support\Debug\Traits\TemplateAwareTrait in the PHP source).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getCssSources()` { #supportdebugrendererhtmlrenderer-getcsssources }

```php
public function getCssSources( string $uri ): string;
```

#### `getJsSources()` { #supportdebugrendererhtmlrenderer-getjssources }

```php
public function getJsSources( string $uri ): string;
```

#### `getTemplate()` { #supportdebugrendererhtmlrenderer-gettemplate }

```php
public function getTemplate( string $name ): string;
```

Returns the template for the given name (override if set, default
otherwise).

#### `getVersion()` { #supportdebugrendererhtmlrenderer-getversion }

```php
public function getVersion(): string;
```

#### `render()` { #supportdebugrendererhtmlrenderer-render }

```php
public function render( ExceptionReport $report ): string;
```

#### `setTemplate()` { #supportdebugrendererhtmlrenderer-settemplate }

```php
public function setTemplate(
    string $name,
    string $template
): static;
```

Overrides the template for the given name.

<div class="api-group">Protected · 4</div>

#### `defaultTemplate()` { #supportdebugrendererhtmlrenderer-defaulttemplate }

```php
protected function defaultTemplate( string $name ): string;
```

Returns the embedded default template for the given name.

#### `escapeString()` { #supportdebugrendererhtmlrenderer-escapestring }

```php
protected function escapeString( string $value ): string;
```

Escapes a string with htmlentities

#### `getArrayDump()` { #supportdebugrendererhtmlrenderer-getarraydump }

```php
protected function getArrayDump(
    array $argument,
    int $number = 0
): string|null;
```

Produces a recursive representation of an array

#### `getVarDump()` { #supportdebugrendererhtmlrenderer-getvardump }

```php
protected function getVarDump( mixed $variable ): string;
```

Produces a string representation of a variable


## Support\Debug\ReportBuilder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/ReportBuilder.zep){ .src-btn }

Collects the runtime data for an exception (backtrace, superglobals, included
files, memory, variables) into an ExceptionReport. Holds no presentation
logic.

<div class="api-tree" markdown>

- **`Phalcon\Support\Debug\ReportBuilder`**

</div>

__Uses__ `Phalcon\Support\Debug\Report\BacktraceItem` · `Phalcon\Support\Debug\Report\ExceptionReport` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `ReflectionClass` · `ReflectionException` · `ReflectionFunction` · `Throwable`
{ .api-uses }

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

#### `build()` { #supportdebugreportbuilder-build }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Report/BacktraceItem.zep){ .src-btn }

Represents a single resolved frame of an exception backtrace.

<div class="api-tree" markdown>

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

#### `__construct()` { #supportdebugreportbacktraceitem-__construct }

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

#### `getArgs()` { #supportdebugreportbacktraceitem-getargs }

```php
public function getArgs(): array;
```

#### `getClassLink()` { #supportdebugreportbacktraceitem-getclasslink }

```php
public function getClassLink(): string|null;
```

#### `getClassName()` { #supportdebugreportbacktraceitem-getclassname }

```php
public function getClassName(): string|null;
```

#### `getFile()` { #supportdebugreportbacktraceitem-getfile }

```php
public function getFile(): string|null;
```

#### `getFragment()` { #supportdebugreportbacktraceitem-getfragment }

```php
public function getFragment(): array|null;
```

#### `getFunctionLink()` { #supportdebugreportbacktraceitem-getfunctionlink }

```php
public function getFunctionLink(): string|null;
```

#### `getFunctionName()` { #supportdebugreportbacktraceitem-getfunctionname }

```php
public function getFunctionName(): string;
```

#### `getLine()` { #supportdebugreportbacktraceitem-getline }

```php
public function getLine(): int|null;
```

#### `getType()` { #supportdebugreportbacktraceitem-gettype }

```php
public function getType(): string|null;
```

#### `hasArgs()` { #supportdebugreportbacktraceitem-hasargs }

```php
public function hasArgs(): bool;
```


## Support\Debug\Report\ExceptionReport

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Report/ExceptionReport.zep){ .src-btn }

Carries all data collected for an exception, ready to be rendered. Holds no
presentation logic.

<div class="api-tree" markdown>

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

#### `__construct()` { #supportdebugreportexceptionreport-__construct }

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

#### `getBacktrace()` { #supportdebugreportexceptionreport-getbacktrace }

```php
public function getBacktrace(): array;
```

#### `getClassName()` { #supportdebugreportexceptionreport-getclassname }

```php
public function getClassName(): string;
```

#### `getFile()` { #supportdebugreportexceptionreport-getfile }

```php
public function getFile(): string;
```

#### `getIncludedFiles()` { #supportdebugreportexceptionreport-getincludedfiles }

```php
public function getIncludedFiles(): array;
```

#### `getLine()` { #supportdebugreportexceptionreport-getline }

```php
public function getLine(): int;
```

#### `getMemoryUsage()` { #supportdebugreportexceptionreport-getmemoryusage }

```php
public function getMemoryUsage(): int;
```

#### `getMessage()` { #supportdebugreportexceptionreport-getmessage }

```php
public function getMessage(): string;
```

#### `getPeakMemoryUsage()` { #supportdebugreportexceptionreport-getpeakmemoryusage }

```php
public function getPeakMemoryUsage(): int;
```

#### `getRequest()` { #supportdebugreportexceptionreport-getrequest }

```php
public function getRequest(): array;
```

#### `getServer()` { #supportdebugreportexceptionreport-getserver }

```php
public function getServer(): array;
```

#### `getUri()` { #supportdebugreportexceptionreport-geturi }

```php
public function getUri(): string;
```

#### `getVariables()` { #supportdebugreportexceptionreport-getvariables }

```php
public function getVariables(): array;
```

#### `hasVariables()` { #supportdebugreportexceptionreport-hasvariables }

```php
public function hasVariables(): bool;
```

#### `isShowBackTrace()` { #supportdebugreportexceptionreport-isshowbacktrace }

```php
public function isShowBackTrace(): bool;
```

#### `setBacktrace()` { #supportdebugreportexceptionreport-setbacktrace }

```php
public function setBacktrace( array $backtrace ): static;
```

#### `setIncludedFiles()` { #supportdebugreportexceptionreport-setincludedfiles }

```php
public function setIncludedFiles( array $includedFiles ): static;
```

#### `setMemoryUsage()` { #supportdebugreportexceptionreport-setmemoryusage }

```php
public function setMemoryUsage( int $memoryUsage ): static;
```

#### `setPeakMemoryUsage()` { #supportdebugreportexceptionreport-setpeakmemoryusage }

```php
public function setPeakMemoryUsage( int $peakMemoryUsage ): static;
```

#### `setRequest()` { #supportdebugreportexceptionreport-setrequest }

```php
public function setRequest( array $request ): static;
```

#### `setServer()` { #supportdebugreportexceptionreport-setserver }

```php
public function setServer( array $server ): static;
```

#### `setVariables()` { #supportdebugreportexceptionreport-setvariables }

```php
public function setVariables( array $variables ): static;
```


## Support\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Support will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Support\Exception`**
        - [`Phalcon\Support\Collection\Exception`](#supportcollectionexception)
        - [`Phalcon\Support\Debug\Exception`](#supportdebugexception)
        - [`Phalcon\Support\Helper\Exception`](#supporthelperexception)

</div>


## Support\HelperFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/HelperFactory.zep){ .src-btn }

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
@method string dynamic(string $text, string $leftDel = "{", string $rightDel = "}", string $separator = "|")
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

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Support\HelperFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Support\Helper\Arr\Blacklist` · `Phalcon\Support\Helper\Arr\Chunk` · `Phalcon\Support\Helper\Arr\Filter` · `Phalcon\Support\Helper\Arr\First` · `Phalcon\Support\Helper\Arr\FirstKey` · `Phalcon\Support\Helper\Arr\Flatten` · `Phalcon\Support\Helper\Arr\Get` · `Phalcon\Support\Helper\Arr\Group` · `Phalcon\Support\Helper\Arr\Has` · `Phalcon\Support\Helper\Arr\IsUnique` · `Phalcon\Support\Helper\Arr\Last` · `Phalcon\Support\Helper\Arr\LastKey` · `Phalcon\Support\Helper\Arr\Order` · `Phalcon\Support\Helper\Arr\Pluck` · `Phalcon\Support\Helper\Arr\Set` · `Phalcon\Support\Helper\Arr\SliceLeft` · `Phalcon\Support\Helper\Arr\SliceRight` · `Phalcon\Support\Helper\Arr\Split` · `Phalcon\Support\Helper\Arr\ToObject` · `Phalcon\Support\Helper\Arr\ValidateAll` · `Phalcon\Support\Helper\Arr\ValidateAny` · `Phalcon\Support\Helper\Arr\Whitelist` · `Phalcon\Support\Helper\File\Basename` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Support\Helper\Number\IsBetween` · `Phalcon\Support\Helper\Str\Camelize` · `Phalcon\Support\Helper\Str\Concat` · `Phalcon\Support\Helper\Str\CountVowels` · `Phalcon\Support\Helper\Str\Decapitalize` · `Phalcon\Support\Helper\Str\Decrement` · `Phalcon\Support\Helper\Str\DirFromFile` · `Phalcon\Support\Helper\Str\DirSeparator` · `Phalcon\Support\Helper\Str\Dynamic` · `Phalcon\Support\Helper\Str\EndsWith` · `Phalcon\Support\Helper\Str\FirstBetween` · `Phalcon\Support\Helper\Str\Friendly` · `Phalcon\Support\Helper\Str\Humanize` · `Phalcon\Support\Helper\Str\Includes` · `Phalcon\Support\Helper\Str\Increment` · `Phalcon\Support\Helper\Str\Interpolate` · `Phalcon\Support\Helper\Str\IsAnagram` · `Phalcon\Support\Helper\Str\IsLower` · `Phalcon\Support\Helper\Str\IsPalindrome` · `Phalcon\Support\Helper\Str\IsUpper` · `Phalcon\Support\Helper\Str\KebabCase` · `Phalcon\Support\Helper\Str\Len` · `Phalcon\Support\Helper\Str\Lower` · `Phalcon\Support\Helper\Str\PascalCase` · `Phalcon\Support\Helper\Str\Prefix` · `Phalcon\Support\Helper\Str\Random` · `Phalcon\Support\Helper\Str\ReduceSlashes` · `Phalcon\Support\Helper\Str\SnakeCase` · `Phalcon\Support\Helper\Str\StartsWith` · `Phalcon\Support\Helper\Str\Suffix` · `Phalcon\Support\Helper\Str\Ucwords` · `Phalcon\Support\Helper\Str\Uncamelize` · `Phalcon\Support\Helper\Str\Underscore` · `Phalcon\Support\Helper\Str\Upper`
{ .api-uses }

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

#### `__call()` { #supporthelperfactory-__call }

```php
public function __call(
    string $name,
    array $arguments
);
```

#### `__construct()` { #supporthelperfactory-__construct }

```php
public function __construct( array $services = [] );
```

FactoryTrait constructor.

#### `newInstance()` { #supporthelperfactory-newinstance }

```php
public function newInstance( string $name );
```

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #supporthelperfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #supporthelperfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Support\Helper\Arr\AbstractArr

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/AbstractArr.zep){ .src-btn }

@internal

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Traits\Support\Helper\Arr\FilterTrait directly instead of extending
this.

<div class="api-tree" markdown>

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

__Uses__ `Phalcon\Traits\Support\Helper\Arr\FilterTrait`
{ .api-uses }


## Support\Helper\Arr\Blacklist

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Blacklist.zep){ .src-btn }

Black list filter by key: exclude elements of an array
by the keys obtained from the elements of a blacklist

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrblacklist-__invoke }

```php
public function __invoke(
    array $collection,
    array $blackList
): array;
```


## Support\Helper\Arr\Chunk

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Chunk.zep){ .src-btn }

Chunks an array into smaller arrays of a specified size.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrchunk-__invoke }

```php
public function __invoke(
    array $collection,
    int $size,
    bool $preserveKeys = false
): array;
```


## Support\Helper\Arr\Filter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Filter.zep){ .src-btn }

Filters a collection using array_filter and using the callable (if defined)

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrfilter-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method = null
): mixed;
```


## Support\Helper\Arr\First

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/First.zep){ .src-btn }

Returns the first element of the collection. If a callable is passed, the
element returned is the first that validates true

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrfirst-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method = null
): mixed;
```


## Support\Helper\Arr\FirstKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/FirstKey.zep){ .src-btn }

Returns the key of the first element of the collection. If a callable
is passed, the element returned is the first that validates true

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrfirstkey-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method = null
): mixed;
```


## Support\Helper\Arr\Flatten

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Flatten.zep){ .src-btn }

Flattens an array up to the one level depth, unless `$deep` is set to
`true`

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrflatten-__invoke }

```php
public function __invoke(
    array $collection,
    bool $deep = false
): array;
```


## Support\Helper\Arr\Get

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Get.zep){ .src-btn }

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Arr\Get`**

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Arr\GetTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperarrget-__invoke }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Group.zep){ .src-btn }

Groups the elements of an array based on the passed callable

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Arr\Group`**

</div>

__Uses__ `Phalcon\Traits\Php\InfoTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperarrgroup-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method
): array;
```


## Support\Helper\Arr\Has

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Has.zep){ .src-btn }

Checks an array if it has an element with a specific key and returns
`true`/`false` accordingly

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrhas-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $index
): bool;
```


## Support\Helper\Arr\IsUnique

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/IsUnique.zep){ .src-btn }

Checks a flat list for duplicate values. Returns true if duplicate
values exist and false if values are all unique.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrisunique-__invoke }

```php
public function __invoke( array $collection ): bool;
```


## Support\Helper\Arr\Last

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Last.zep){ .src-btn }

Returns the last element of the collection. If a callable is passed, the
element returned is the first that validates true

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrlast-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method = null
): mixed;
```


## Support\Helper\Arr\LastKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/LastKey.zep){ .src-btn }

Returns the key of the last element of the collection. If a callable is
passed, the element returned is the first that validates true

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrlastkey-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method = null
): mixed;
```


## Support\Helper\Arr\Order

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Order.zep){ .src-btn }

Sorts a collection of arrays or objects by an attribute of the object. It
supports ascending/descending sorts but also flags that are identical to
the ones used by `ksort` and `krsort`

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrorder-__invoke }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Pluck.zep){ .src-btn }

Returns a subset of the collection based on the values of the collection

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrpluck-__invoke }

```php
public function __invoke(
    array $collection,
    string $element
): array;
```


## Support\Helper\Arr\Set

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Set.zep){ .src-btn }

Sets an array element. Using a key is optional

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrset-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $value,
    mixed $index = null
): array;
```


## Support\Helper\Arr\SliceLeft

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/SliceLeft.zep){ .src-btn }

Returns a new array with n elements removed from the left.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrsliceleft-__invoke }

```php
public function __invoke(
    array $collection,
    int $elements = 1
): array;
```


## Support\Helper\Arr\SliceRight

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/SliceRight.zep){ .src-btn }

Returns a new array with n elements removed from the right.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrsliceright-__invoke }

```php
public function __invoke(
    array $collection,
    int $elements = 1
): array;
```


## Support\Helper\Arr\Split

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Split.zep){ .src-btn }

Returns a new array with keys of the collection as one element and values
as another

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrsplit-__invoke }

```php
public function __invoke( array $collection ): array;
```


## Support\Helper\Arr\ToObject

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ToObject.zep){ .src-btn }

Returns the passed array as an object.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrtoobject-__invoke }

```php
public function __invoke( array $collection ): object;
```


## Support\Helper\Arr\ValidateAll

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ValidateAll.zep){ .src-btn }

Returns `true` if the provided function returns `true` for all elements of
the collection, `false` otherwise.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrvalidateall-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method
): bool;
```


## Support\Helper\Arr\ValidateAny

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ValidateAny.zep){ .src-btn }

Returns `true` if the provided function returns `true` for at least one
element of the collection, `false` otherwise.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrvalidateany-__invoke }

```php
public function __invoke(
    array $collection,
    mixed $method
): bool;
```


## Support\Helper\Arr\Whitelist

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Whitelist.zep){ .src-btn }

White list filter by key: obtain elements of an array filtering by the keys
obtained from the elements of a whitelist

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperarrwhitelist-__invoke }

```php
public function __invoke(
    array $collection,
    array $whiteList
): array;
```


## Support\Helper\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Support\Helper will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - **`Phalcon\Support\Helper\Exception`**
            - [`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`](#supporthelperstrexceptionsinsufficientarguments)
            - [`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`](#supporthelperstrexceptionsinvalidreplaceformat)

</div>

__Uses__ `Phalcon\Support\Exception`
{ .api-uses }


## Support\Helper\File\Basename

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/File/Basename.zep){ .src-btn }

Gets the filename from a given path, Same as PHP's `basename()` but has
non-ASCII support. PHP's `basename()` does not properly support streams or
filenames beginning with a non-US-ASCII character.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperfilebasename-__invoke }

```php
public function __invoke(
    string $uri,
    string $suffix = null
): string;
```

@see https://bugs.php.net/bug.php?id=37738


## Support\Helper\Json\Decode

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Decode.zep){ .src-btn }

Decodes a string using `json_decode` and throws an exception if the
JSON data cannot be decoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
JsonDecodeError

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Json\Decode`**

</div>

__Uses__ `Phalcon\Support\Helper\Json\Exceptions\JsonDecodeError` · `Phalcon\Traits\Support\Helper\Json\DecodeTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsondecode-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$associative</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$depth</span><span class="sm"> = 512</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 79</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #supporthelperjsondecode-__invoke }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Encode.zep){ .src-btn }

Encodes a string using `json_encode` and throws an exception if the
JSON data cannot be encoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
JsonEncodeError

@see  https://www.ietf.org/rfc/rfc4627.txt

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Json\Encode`**

</div>

__Uses__ `Phalcon\Support\Helper\Json\Exceptions\JsonEncodeError` · `Phalcon\Traits\Support\Helper\Json\EncodeTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperjsonencode-__invoke }

```php
public function __invoke(
    mixed $data,
    int $options = 79,
    int $depth = 512
): string;
```


## Support\Helper\Json\Exceptions\JsonDecodeError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Exceptions/JsonDecodeError.zep){ .src-btn }

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Support\Helper\Json\Exceptions\JsonDecodeError`**

</div>

__Uses__ `InvalidArgumentException` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsonexceptionsjsondecodeerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">Throwable</span> <span class="sv">$previous</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supporthelperjsonexceptionsjsondecodeerror-__construct }

```php
public function __construct(
    string $message = "",
    int $code = 0,
    Throwable $previous = null
);
```


## Support\Helper\Json\Exceptions\JsonEncodeError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Exceptions/JsonEncodeError.zep){ .src-btn }

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Support\Helper\Json\Exceptions\JsonEncodeError`**

</div>

__Uses__ `InvalidArgumentException` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperjsonexceptionsjsonencodeerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">Throwable</span> <span class="sv">$previous</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supporthelperjsonexceptionsjsonencodeerror-__construct }

```php
public function __construct(
    string $message = "",
    int $code = 0,
    Throwable $previous = null
);
```


## Support\Helper\Number\IsBetween

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Number/IsBetween.zep){ .src-btn }

Checks if a number is within a range

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelpernumberisbetween-__invoke }

```php
public function __invoke(
    int $value,
    int $start,
    int $end
): bool;
```


## Support\Helper\Str\AbstractStr

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/AbstractStr.zep){ .src-btn }

Abstract class offering methods to help with the Str namespace.

@internal

@todo Remove in v7. Kept only for backwards compatibility; compose the
      individual Phalcon\Traits\Support\Helper\Str\* traits directly instead
      of extending this.

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\AbstractStr`**
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

__Uses__ `Phalcon\Traits\Support\Helper\Str\EndsWithTrait` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait` · `Phalcon\Traits\Support\Helper\Str\LowerTrait` · `Phalcon\Traits\Support\Helper\Str\StartsWithTrait` · `Phalcon\Traits\Support\Helper\Str\UpperTrait`
{ .api-uses }


## Support\Helper\Str\Camelize

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Camelize.zep){ .src-btn }

Converts strings to upperCamelCase or lowerCamelCase

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\Camelize`**

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Str\CamelizeTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperstrcamelize-__invoke }

```php
public function __invoke(
    string $text,
    string $delimiters = null,
    bool $lowerFirst = false
): string;
```


## Support\Helper\Str\Concat

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Concat.zep){ .src-btn }

Concatenates strings using the separator only once without duplication in
places concatenation

<div class="api-tree" markdown>

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
    - **`Phalcon\Support\Helper\Str\Concat`**

</div>

__Uses__ `Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrconcat-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$many</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #supporthelperstrconcat-__invoke }

```php
public function __invoke(
    string $delimiter,
    string $many
): string;
```


## Support\Helper\Str\CountVowels

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/CountVowels.zep){ .src-btn }

Returns number of vowels in provided string. Uses a regular expression
to count the number of vowels (A, E, I, O, U) in a string.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrcountvowels-__invoke }

```php
public function __invoke( string $text ): int;
```


## Support\Helper\Str\Decapitalize

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Decapitalize.zep){ .src-btn }

Decapitalizes the first letter of the string and then adds it with rest
of the string. Omit the upperRest parameter to keep the rest of the
string intact, or set it to true to convert to uppercase.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrdecapitalize-__invoke }

```php
public function __invoke(
    string $text,
    bool $upperRest = false,
    string $encoding = "UTF-8"
): string;
```


## Support\Helper\Str\Decrement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Decrement.zep){ .src-btn }

Removes a number from the end of a string or decrements that number if it
is already defined

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrdecrement-__invoke }

```php
public function __invoke(
    string $text,
    string $separator = "_"
): string;
```


## Support\Helper\Str\DirFromFile

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/DirFromFile.zep){ .src-btn }

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\DirFromFile`**

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Str\DirFromFileTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperstrdirfromfile-__invoke }

```php
public function __invoke( string $file ): string;
```


## Support\Helper\Str\DirSeparator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/DirSeparator.zep){ .src-btn }

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\DirSeparator`**

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperstrdirseparator-__invoke }

```php
public function __invoke( string $directory ): string;
```


## Support\Helper\Str\Dynamic

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Dynamic.zep){ .src-btn }

Generates random text in accordance with the template. The template is
defined by the left and right delimiter and it can contain values separated
by the separator

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\Dynamic`**

</div>

__Uses__ `Phalcon\Support\Helper\Str\Exceptions\SyntaxError`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrdynamic-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$leftDelimiter</span><span class="sm"> = &quot;{&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$rightDelimiter</span><span class="sm"> = &quot;}&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;|&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #supporthelperstrdynamic-__invoke }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/EndsWith.zep){ .src-btn }

Check if a string ends with a given string

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrendswith-__invoke }

```php
public function __invoke(
    string $haystack,
    string $needle,
    bool $ignoreCase = true
): bool;
```


## Support\Helper\Str\Exceptions\InsufficientArguments

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Exceptions/InsufficientArguments.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - [`Phalcon\Support\Helper\Exception`](#supporthelperexception)
            - **`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`**

</div>

__Uses__ `Phalcon\Support\Helper\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrexceptionsinsufficientarguments-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supporthelperstrexceptionsinsufficientarguments-__construct }

```php
public function __construct();
```


## Support\Helper\Str\Exceptions\InvalidReplaceFormat

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Exceptions/InvalidReplaceFormat.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Support\Exception`](#supportexception)
        - [`Phalcon\Support\Helper\Exception`](#supporthelperexception)
            - **`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`**

</div>

__Uses__ `Phalcon\Support\Helper\Exception`
{ .api-uses }


## Support\Helper\Str\Exceptions\SyntaxError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Exceptions/SyntaxError.zep){ .src-btn }

<div class="api-tree" markdown>

- `RuntimeException`
    - **`Phalcon\Support\Helper\Str\Exceptions\SyntaxError`**

</div>

__Uses__ `RuntimeException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#supporthelperstrexceptionssyntaxerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #supporthelperstrexceptionssyntaxerror-__construct }

```php
public function __construct( string $text );
```


## Support\Helper\Str\FirstBetween

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/FirstBetween.zep){ .src-btn }

Returns the first string there is between the strings from the
parameter start and end.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrfirstbetween-__invoke }

```php
public function __invoke(
    string $text,
    string $start,
    string $end
): string;
```


## Support\Helper\Str\Friendly

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Friendly.zep){ .src-btn }

Changes a text to a URL friendly one. Replaces commonly known accented
characters with their Latin equivalents. If a `replace` string or array
is passed, it will also be used to replace those characters with a space.

<div class="api-tree" markdown>

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
    - **`Phalcon\Support\Helper\Str\Friendly`**

</div>

__Uses__ `Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`
{ .api-uses }

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

#### `__invoke()` { #supporthelperstrfriendly-__invoke }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Humanize.zep){ .src-btn }

Makes an underscored or dashed text human-readable

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrhumanize-__invoke }

```php
public function __invoke( string $text ): string;
```


## Support\Helper\Str\Includes

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Includes.zep){ .src-btn }

Determines whether a string includes another string or not.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrincludes-__invoke }

```php
public function __invoke(
    string $haystack,
    string $needle
): bool;
```


## Support\Helper\Str\Increment

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Increment.zep){ .src-btn }

Adds a number to the end of a string or increments that number if it
is already defined

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrincrement-__invoke }

```php
public function __invoke(
    string $text,
    string $separator = "_"
): string;
```


## Support\Helper\Str\Interpolate

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Interpolate.zep){ .src-btn }

Interpolates context values into the message placeholders. By default, the
right and left tokens are `%`

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\Interpolate`**

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Str\InterpolateTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperstrinterpolate-__invoke }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsAnagram.zep){ .src-btn }

Compare two strings and returns `true` if both strings are anagram,
`false` otherwise.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrisanagram-__invoke }

```php
public function __invoke(
    string $first,
    string $second
): bool;
```


## Support\Helper\Str\IsLower

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsLower.zep){ .src-btn }

Returns `true` if the given string is in lower case, `false` otherwise.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrislower-__invoke }

```php
public function __invoke(
    string $text,
    string $encoding = "UTF-8"
): bool;
```


## Support\Helper\Str\IsPalindrome

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsPalindrome.zep){ .src-btn }

Returns `true` if the given string is a palindrome, `false` otherwise.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrispalindrome-__invoke }

```php
public function __invoke( string $text ): bool;
```


## Support\Helper\Str\IsUpper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsUpper.zep){ .src-btn }

Returns `true` if the given string is in upper case, `false` otherwise.

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrisupper-__invoke }

```php
public function __invoke(
    string $text,
    string $encoding = "UTF-8"
): bool;
```


## Support\Helper\Str\KebabCase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/KebabCase.zep){ .src-btn }

Converts strings to kebab-case style

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrkebabcase-__invoke }

```php
public function __invoke(
    string $text,
    string $delimiters = null
): string;
```


## Support\Helper\Str\Len

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Len.zep){ .src-btn }

Calculates the length of the string using `mb_strlen`

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrlen-__invoke }

```php
public function __invoke(
    string $text,
    string $encoding = "UTF-8"
): int;
```


## Support\Helper\Str\Lower

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Lower.zep){ .src-btn }

Converts a string to lowercase using mbstring

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrlower-__invoke }

```php
public function __invoke(
    string $text,
    string $encoding = "UTF-8"
): string;
```


## Support\Helper\Str\PascalCase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/PascalCase.zep){ .src-btn }

Converts strings to PascalCase style

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\PascalCase`**
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

#### `__invoke()` { #supporthelperstrpascalcase-__invoke }

```php
public function __invoke(
    string $text,
    string $delimiters = null
): string;
```

<div class="api-group">Protected · 1</div>

#### `processArray()` { #supporthelperstrpascalcase-processarray }

```php
protected function processArray(
    string $text,
    string $delimiters = null
): array;
```


## Support\Helper\Str\Prefix

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Prefix.zep){ .src-btn }

Prefixes the text with the supplied prefix

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrprefix-__invoke }

```php
public function __invoke(
    mixed $text,
    string $prefix
): string;
```


## Support\Helper\Str\Random

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Random.zep){ .src-btn }

Generates a random string based on the given type. Type is one of the
RANDOM_* constants

<div class="api-tree" markdown>

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
<span class="desc">Only alphanumeric uppercase characters exclude similar
characters [2345679ACDEFHJKLMNPRSTUVWXYZ]</span>
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

#### `__invoke()` { #supporthelperstrrandom-__invoke }

```php
public function __invoke(
    int $type = self::RANDOM_ALNUM,
    int $length = 8
): string;
```


## Support\Helper\Str\ReduceSlashes

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/ReduceSlashes.zep){ .src-btn }

Reduces multiple slashes in a string to single slashes

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrreduceslashes-__invoke }

```php
public function __invoke( string $text ): string;
```


## Support\Helper\Str\SnakeCase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/SnakeCase.zep){ .src-btn }

Converts strings to snake_case style

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrsnakecase-__invoke }

```php
public function __invoke(
    string $text,
    string $delimiters = null
): string;
```


## Support\Helper\Str\StartsWith

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/StartsWith.zep){ .src-btn }

Check if a string starts with a given string

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrstartswith-__invoke }

```php
public function __invoke(
    string $haystack,
    string $needle,
    bool $ignoreCase = true
): bool;
```


## Support\Helper\Str\Suffix

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Suffix.zep){ .src-btn }

Suffixes the text with the supplied suffix

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrsuffix-__invoke }

```php
public function __invoke(
    mixed $text,
    string $suffix
): string;
```


## Support\Helper\Str\Ucwords

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Ucwords.zep){ .src-btn }

Capitalizes the first letter of each word

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrucwords-__invoke }

```php
public function __invoke(
    string $text,
    string $encoding = "UTF-8"
): string;
```


## Support\Helper\Str\Uncamelize

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Uncamelize.zep){ .src-btn }

Converts strings to non camelized style

<div class="api-tree" markdown>

- **`Phalcon\Support\Helper\Str\Uncamelize`**

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`
{ .api-uses }

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

#### `__invoke()` { #supporthelperstruncamelize-__invoke }

```php
public function __invoke(
    string $text,
    string $delimiter = "_"
): string;
```


## Support\Helper\Str\Underscore

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Underscore.zep){ .src-btn }

Makes a text underscored instead of spaced

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrunderscore-__invoke }

```php
public function __invoke( string $text ): string;
```


## Support\Helper\Str\Upper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Upper.zep){ .src-btn }

Converts a string to uppercase using mbstring

<div class="api-tree" markdown>

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

#### `__invoke()` { #supporthelperstrupper-__invoke }

```php
public function __invoke(
    string $text,
    string $encoding = "UTF-8"
): string;
```


## Support\Registry

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Registry.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](#supportcollection)
    - **`Phalcon\Support\Registry`**

</div>

__Uses__ `Phalcon\Support\Collection` · `Traversable`
{ .api-uses }

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

#### `__construct()` { #supportregistry-__construct }

```php
final public function __construct( array $data = [] );
```

Constructor

#### `__get()` { #supportregistry-__get }

```php
final public function __get( string $element ): mixed;
```

Magic getter to get an element from the collection

#### `__isset()` { #supportregistry-__isset }

```php
final public function __isset( string $element ): bool;
```

Magic isset to check whether an element exists or not

#### `__set()` { #supportregistry-__set }

```php
final public function __set(
    string $element,
    mixed $value
): void;
```

Magic setter to assign values to an element

#### `__unset()` { #supportregistry-__unset }

```php
final public function __unset( string $element ): void;
```

Magic unset to remove an element from the collection

#### `clear()` { #supportregistry-clear }

```php
final public function clear(): void;
```

Clears the internal collection

#### `count()` { #supportregistry-count }

```php
final public function count(): int;
```

Count elements of an object

@link https://php.net/manual/en/countable.count.php

#### `get()` { #supportregistry-get }

```php
final public function get(
    string $element,
    mixed $defaultValue = null,
    string $cast = null
): mixed;
```

Get the element from the collection

#### `getIterator()` { #supportregistry-getiterator }

```php
final public function getIterator(): Traversable;
```

Returns the iterator of the class

#### `has()` { #supportregistry-has }

```php
final public function has( string $element ): bool;
```

Determines whether an element is present in the collection.

#### `init()` { #supportregistry-init }

```php
final public function init( array $data = [] ): void;
```

Initialize internal array

#### `jsonSerialize()` { #supportregistry-jsonserialize }

```php
final public function jsonSerialize(): array;
```

Specify data which should be serialized to JSON

@link https://php.net/manual/en/jsonserializable.jsonserialize.php

#### `offsetExists()` { #supportregistry-offsetexists }

```php
final public function offsetExists( mixed $element ): bool;
```

Whether a offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php

#### `offsetGet()` { #supportregistry-offsetget }

```php
final public function offsetGet( mixed $element ): mixed;
```

Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php

#### `offsetSet()` { #supportregistry-offsetset }

```php
final public function offsetSet(
    mixed $element,
    mixed $value
): void;
```

Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php

#### `offsetUnset()` { #supportregistry-offsetunset }

```php
final public function offsetUnset( mixed $element ): void;
```

Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php

#### `remove()` { #supportregistry-remove }

```php
final public function remove( string $element ): void;
```

Delete the element from the collection

#### `serialize()` { #supportregistry-serialize }

```php
final public function serialize(): string|null;
```

String representation of object

@link https://php.net/manual/en/serializable.serialize.php

#### `set()` { #supportregistry-set }

```php
final public function set(
    string $element,
    mixed $value
): void;
```

Set an element in the collection

#### `toArray()` { #supportregistry-toarray }

```php
final public function toArray(): array;
```

Returns the object in an array format

#### `toJson()` { #supportregistry-tojson }

```php
final public function toJson( int $options = 79 ): string;
```

Returns the object in a JSON format

The default string uses the following options for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT, JSON_UNESCAPED_SLASHES

@see https://www.ietf.org/rfc/rfc4627.txt

#### `unserialize()` { #supportregistry-unserialize }

```php
final public function unserialize( string $data ): void;
```

Constructs the object

@link https://php.net/manual/en/serializable.unserialize.php


## Support\Settings

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Settings.zep){ .src-btn }

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

<div class="api-tree" markdown>

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

#### `get()` { #supportsettings-get }

```php
public static function get( string $key ): mixed;
```

Returns the value of a known setting.

Resolution order:
  1. PHP-level override (set via Settings::set())
  2. globals_get() - the C-level value, honoring php.ini / .htaccess
  3. null - for unknown keys

#### `reset()` { #supportsettings-reset }

```php
public static function reset(): void;
```

Clears all PHP-level overrides, restoring get() to return globals_get()
fallback values (as configured in php.ini or .htaccess).

#### `set()` { #supportsettings-set }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Version.zep){ .src-btn }

This class allows to get the installed version of the framework

<div class="api-tree" markdown>

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
<span class="desc">The constant referencing the major version. Returns 0

``<code>php
echo (new Phalcon\Support\Version())
         -&gt;getPart(Phalcon\Support\Version::VERSION_MAJOR);
</code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_MEDIUM</span><span class="sm"> = 1</span></code>
<span class="desc">The constant referencing the major version. Returns 1

``<code>php
echo (new Phalcon\Support\Version())
         -&gt;getPart(Phalcon\Support\Version::VERSION_MEDIUM);
</code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_MINOR</span><span class="sm"> = 2</span></code>
<span class="desc">The constant referencing the major version. Returns 2

``<code>php
echo (new Phalcon\Support\Version())
         -&gt;getPart(Phalcon\Support\Version::VERSION_MINOR);
</code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_SPECIAL</span><span class="sm"> = 3</span></code>
<span class="desc">The constant referencing the major version. Returns 3

``<code>php
echo (new Phalcon\Support\Version())
         -&gt;getPart(Phalcon\Support\Version::VERSION_SPECIAL);
</code>``</span>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_SPECIAL_NUMBER</span><span class="sm"> = 4</span></code>
<span class="desc">The constant referencing the major version. Returns 4

``<code>php
echo (new Phalcon\Support\Version())
         -&gt;getPart(Phalcon\Support\Version::VERSION_SPECIAL_NUMBER);
</code>``</span>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `get()` { #supportversion-get }

```php
public function get(): string;
```

Returns the active version (string)

```php
echo (new Phalcon\Version())->get();
```

#### `getId()` { #supportversion-getid }

```php
public function getId(): string;
```

Returns the numeric active version

```php
echo (new Phalcon\Version())->getId();
```

#### `getPart()` { #supportversion-getpart }

```php
public function getPart( int $part ): string;
```

Returns a specific part of the version. If the wrong parameter is passed
it will return the full version

```php
echo (new Phalcon\Version())->getPart(Phalcon\Version::VERSION_MAJOR);
```

<div class="api-group">Protected · 2</div>

#### `getSpecial()` { #supportversion-getspecial }

```php
protected final function getSpecial( int $special ): string;
```

Translates a number to a special release.

#### `getVersion()` { #supportversion-getversion }

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
