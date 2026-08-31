---
title: "Phalcon Support"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Support

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Support\AbstractLocator

Abstract

Abstract base class for service locators.

Provides a unified way to register, validate, and resolve services
from a DI container, with support for both legacy Di and new Container.

@template T of object

- **`Phalcon\Support\AbstractLocator`**
- [`Phalcon\Auth\Access\AccessLocator`](../phalcon_auth/#authaccessaccesslocator)
- [`Phalcon\Auth\Adapter\AdapterLocator`](../phalcon_auth/#authadapteradapterlocator)
- [`Phalcon\Auth\Guard\GuardLocator`](../phalcon_auth/#authguardguardlocator)

`Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Throwable`

### Method Summary

<ApiItem href="#supportabstractlocator-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"Collection|DiInterface","name":"container","default":null},{"type":"array","name":"services","default":"[]"}]}>
</ApiItem>
<ApiItem href="#supportabstractlocator-getall" visibility="public" name="getAll" returnType="array" params={[]}>
Returns the full registered service map (defaults plus any added via
</ApiItem>
<ApiItem href="#supportabstractlocator-getclass" visibility="public" name="getClass" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns the class-string registered under the given name.
</ApiItem>
<ApiItem href="#supportabstractlocator-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Whether a service with the given name is registered.
</ApiItem>
<ApiItem href="#supportabstractlocator-newinstance" visibility="public" name="newInstance" returnType="object" params={[{"type":"string","name":"name","default":null}]}>
Retrieve a service instance from the container.
</ApiItem>
<ApiItem href="#supportabstractlocator-register" visibility="public" name="register" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"definition","default":null}]}>
Register a service or override an existing one.
</ApiItem>
<ApiItem href="#supportabstractlocator-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
Get the exception class to throw on errors.
</ApiItem>
<ApiItem href="#supportabstractlocator-getinterfaceclass" visibility="protected" name="getInterfaceClass" returnType="string" params={[]}>
Get the interface/class that all registered services must implement.
</ApiItem>
<ApiItem href="#supportabstractlocator-getservice" visibility="protected" name="getService" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Get the service class name for a given name.
</ApiItem>
<ApiItem href="#supportabstractlocator-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Get the default services for this locator.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="Collection|DiInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="services" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="supportabstractlocator-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Collection|DiInterface $container,
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
instance (`getShared()`) - despite the name, it is not a fresh build.
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

Class

`Phalcon\Support\Collection` is a supercharged object-oriented array. It implements:
- [ArrayAccess](https://www.php.net/manual/en/class.arrayaccess.php)
- [Countable](https://www.php.net/manual/en/class.countable.php)
- [IteratorAggregate](https://www.php.net/manual/en/class.iteratoraggregate.php)
- [JsonSerializable](https://www.php.net/manual/en/class.jsonserializable.php)

It can be used in any part of the application that needs collection of data
Such implementations are for instance accessing globals `$_GET`, `$_POST`
etc.

@implements CollectionInterface&lt;T>

@property array&lt;string, T>      $data
@property bool                  $insensitive
@property array&lt;string, string> $lowerKeys
@property bool                  $strictNull
@property string|null           $type

- **`Phalcon\Support\Collection`** - implements [`Phalcon\Support\Collection\CollectionInterface`](#supportcollectioncollectioninterface), `\Countable`, `\JsonSerializable`
- [`Phalcon\Config\Config`](../phalcon_config/#configconfig)
- [`Phalcon\Html\Attributes`](../phalcon_html/#htmlattributes)
- [`Phalcon\Session\Bag`](../phalcon_session/#sessionbag)
- [`Phalcon\Support\Collection\ReadOnlyCollection`](#supportcollectionreadonlycollection)
- [`Phalcon\Support\Registry`](#supportregistry)

`ArrayIterator` · `Countable` · `JsonSerializable` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Collection\Exceptions\InvalidValueType` · `Phalcon\Support\Collection\Traits\ArrayAccessTrait` · `Phalcon\Support\Collection\Traits\GetSetHasTrait` · `Phalcon\Support\Helper\Json\Encode` · `Traversable`

### Method Summary

<ApiItem href="#supportcollection-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"data","default":"[]"},{"type":"bool","name":"insensitive","default":"true"},{"type":"bool","name":"strictNull","default":"false"},{"type":"string|null","name":"type","default":"null"}]}>
Collection constructor.
</ApiItem>
<ApiItem href="#supportcollection-__serialize" visibility="public" name="__serialize" returnType="array" params={[]}>
Returns the state of the collection for serialization, including
</ApiItem>
<ApiItem href="#supportcollection-__unserialize" visibility="public" name="__unserialize" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
Restores the collection state. Accepts both the structured format
</ApiItem>
<ApiItem href="#supportcollection-clear" visibility="public" name="clear" returnType="void" params={[]}>
Clears the internal collection
</ApiItem>
<ApiItem href="#supportcollection-column" visibility="public" name="column" returnType="array" params={[{"type":"string","name":"propertyOrMethod","default":null}]}>
Returns the values from a single property/method extracted from every
</ApiItem>
<ApiItem href="#supportcollection-count" visibility="public" name="count" returnType="int" params={[]}>
Count elements of an object
</ApiItem>
<ApiItem href="#supportcollection-each" visibility="public" name="each" returnType="static" params={[{"type":"callable","name":"callback","default":null}]}>
Invokes the callback for every item in the collection. Returns the
</ApiItem>
<ApiItem href="#supportcollection-filter" visibility="public" name="filter" returnType="static" params={[{"type":"callable","name":"callback","default":null}]}>
Returns a new collection of items for which the callback returns true.
</ApiItem>
<ApiItem href="#supportcollection-first" visibility="public" name="first" returnType="mixed" params={[]}>
Returns the first value in the collection, or null if empty.
</ApiItem>
<ApiItem href="#supportcollection-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportcollection-getiterator" visibility="public" name="getIterator" returnType="Traversable" params={[]}>
Returns the iterator of the class
</ApiItem>
<ApiItem href="#supportcollection-getkeys" visibility="public" name="getKeys" returnType="array" params={[{"type":"bool","name":"insensitive","default":"true"}]}>
Returns the keys (insensitive or not) of the collection.
</ApiItem>
<ApiItem href="#supportcollection-gettype" visibility="public" name="getType" returnType="string|null" params={[]}>
Returns the configured runtime type guard, or null if none.
</ApiItem>
<ApiItem href="#supportcollection-getvalues" visibility="public" name="getValues" returnType="array" params={[]}>
Returns the values of the internal array.
</ApiItem>
<ApiItem href="#supportcollection-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportcollection-init" visibility="public" name="init" returnType="void" params={[{"type":"array","name":"data","default":"[]"}]}>
Initialize internal array
</ApiItem>
<ApiItem href="#supportcollection-isempty" visibility="public" name="isEmpty" returnType="bool" params={[]}>
Return if the collection is empty
</ApiItem>
<ApiItem href="#supportcollection-jsonserialize" visibility="public" name="jsonSerialize" returnType="array" params={[]}>
Specify data which should be serialized to JSON
</ApiItem>
<ApiItem href="#supportcollection-keys" visibility="public" name="keys" returnType="array" params={[{"type":"bool","name":"insensitive","default":"true"}]}>
Returns the keys (insensitive or not) of the collection.
</ApiItem>
<ApiItem href="#supportcollection-last" visibility="public" name="last" returnType="mixed" params={[]}>
Returns the last value in the collection, or null if empty.
</ApiItem>
<ApiItem href="#supportcollection-map" visibility="public" name="map" returnType="static" params={[{"type":"callable","name":"callback","default":null}]}>
Returns a new collection with the callback applied to every value.
</ApiItem>
<ApiItem href="#supportcollection-reduce" visibility="public" name="reduce" returnType="mixed" params={[{"type":"callable","name":"callback","default":null},{"type":"mixed","name":"initial","default":"null"}]}>
Reduces the collection to a single value using the callback. The
</ApiItem>
<ApiItem href="#supportcollection-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Delete the element from the collection
</ApiItem>
<ApiItem href="#supportcollection-replace" visibility="public" name="replace" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
Replaces the collection data with a new array, clearing existing data first
</ApiItem>
<ApiItem href="#supportcollection-serialize" visibility="public" name="serialize" returnType="string|null" params={[]}>
BC - delegate to __serialize()
</ApiItem>
<ApiItem href="#supportcollection-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Set an element in the collection
</ApiItem>
<ApiItem href="#supportcollection-sort" visibility="public" name="sort" returnType="static" params={[{"type":"callable|null","name":"callback","default":"null"},{"type":"int","name":"order","default":"SORT_ASC"}]}>
Returns a new collection sorted by value. Keys are preserved. When a
</ApiItem>
<ApiItem href="#supportcollection-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the object in an array format
</ApiItem>
<ApiItem href="#supportcollection-tojson" visibility="public" name="toJson" returnType="string" params={[{"type":"int","name":"options","default":null}]}>
Returns the object in a JSON format
</ApiItem>
<ApiItem href="#supportcollection-unserialize" visibility="public" name="unserialize" returnType="void" params={[{"type":"string","name":"data","default":null}]}>
BC - delegate to __unserialize()
</ApiItem>
<ApiItem href="#supportcollection-values" visibility="public" name="values" returnType="array" params={[]}>
Returns the values of the internal array.
</ApiItem>
<ApiItem href="#supportcollection-where" visibility="public" name="where" returnType="static" params={[{"type":"string","name":"propertyOrMethod","default":null},{"type":"mixed","name":"value","default":null}]}>
Returns a new collection containing only the items whose
</ApiItem>
<ApiItem href="#supportcollection-cloneempty" visibility="protected" name="cloneEmpty" returnType="static" params={[{"type":"array","name":"data","default":"[]"}]}>
Builds a new collection of the same concrete class, carrying over the
</ApiItem>
<ApiItem href="#supportcollection-extractvalue" visibility="protected" name="extractValue" returnType="mixed" params={[{"type":"mixed","name":"item","default":null},{"type":"string","name":"propertyOrMethod","default":null}]}>
Extracts a single value from an item. For arrays returns the keyed
</ApiItem>
<ApiItem href="#supportcollection-processkey" visibility="protected" name="processKey" returnType="string" params={[{"type":"string","name":"element","default":null}]}>
Checks if we need insensitive keys and if so, converts the element to
</ApiItem>
<ApiItem href="#supportcollection-setdata" visibility="protected" name="setData" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Internal method to set data
</ApiItem>
<ApiItem href="#supportcollection-validatetype" visibility="protected" name="validateType" returnType="void" params={[{"type":"mixed","name":"value","default":null}]}>
Validates the value against the configured `$type` guard. When `$type`
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="data" type="array&lt;string, T&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="insensitive" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="lowerKeys" type="array&lt;string, string&gt;" default="[]">
Maps the case-insensitive key back to the original one it was stored
under.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="strictNull" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string|null" default="null">
</ApiItem>

### Methods

<h4 id="supportcollection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $data = [],
bool $insensitive = true,
bool $strictNull = false,
string|null $type = null
);
```

Collection constructor.

<h4 id="supportcollection-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

Returns the state of the collection for serialization, including
configuration flags so the round-trip restores full state.

<h4 id="supportcollection-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

Restores the collection state. Accepts both the structured format
emitted by __serialize() and the legacy flat-array format for BC
with previously serialized data.

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
string|null $cast = null
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
callable|null $callback = null,
int $order = SORT_ASC
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
public function toJson( int $options ): string;
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

Interface

Phalcon\Support\Collection\CollectionInterface

@extends CollectionContract&lt;T>

- `\ArrayAccess`
- [`Phalcon\Contracts\Support\Collection`](../phalcon_contracts/#contractssupportcollection)
- **`Phalcon\Support\Collection\CollectionInterface`**
- [`Phalcon\Config\ConfigInterface`](../phalcon_config/#configconfiginterface)

`Phalcon\Contracts\Support\Collection`

## Support\Collection\Exception

Class

Exceptions for the Collection object

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- **`Phalcon\Support\Collection\Exception`**
- [`Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`](#supportcollectionexceptionsreadonlyviolation)

`Phalcon\Support\Exception`

## Support\Collection\Exceptions\InvalidValueType

Class

- `\InvalidArgumentException`
- **`Phalcon\Support\Collection\Exceptions\InvalidValueType`**

`InvalidArgumentException`

### Method Summary

<ApiItem href="#supportcollectionexceptionsinvalidvaluetype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"mixed","name":"value","default":null}]}>
</ApiItem>

### Methods

<h4 id="supportcollectionexceptionsinvalidvaluetype-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $type,
mixed $value
);
```

## Support\Collection\Exceptions\ReadOnlyViolation

Class

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Collection\Exception`](#supportcollectionexception)
- **`Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`**

`Phalcon\Support\Collection\Exception`

### Method Summary

<ApiItem href="#supportcollectionexceptionsreadonlyviolation-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="supportcollectionexceptionsreadonlyviolation-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Support\Collection\ReadOnlyCollection

Class

A read only Collection object

@extends Collection&lt;T>

- [`Phalcon\Support\Collection`](#supportcollection)
- **`Phalcon\Support\Collection\ReadOnlyCollection`**

`Phalcon\Support\Collection` · `Phalcon\Support\Collection\Exceptions\ReadOnlyViolation`

### Method Summary

<ApiItem href="#supportcollectionreadonlycollection-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"data","default":"[]"},{"type":"bool","name":"insensitive","default":"true"},{"type":"bool","name":"strictNull","default":"false"},{"type":"string|null","name":"type","default":"null"}]}>
ReadOnlyCollection constructor.
</ApiItem>
<ApiItem href="#supportcollectionreadonlycollection-__unserialize" visibility="public" name="__unserialize" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
Restores the collection state during unserialization.
</ApiItem>
<ApiItem href="#supportcollectionreadonlycollection-clear" visibility="public" name="clear" returnType="void" params={[]}>
</ApiItem>
<ApiItem href="#supportcollectionreadonlycollection-init" visibility="public" name="init" returnType="void" params={[{"type":"array","name":"data","default":"[]"}]}>
</ApiItem>
<ApiItem href="#supportcollectionreadonlycollection-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Delete the element from the collection
</ApiItem>
<ApiItem href="#supportcollectionreadonlycollection-replace" visibility="public" name="replace" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
Replaces the collection data with a new array
</ApiItem>
<ApiItem href="#supportcollectionreadonlycollection-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Set an element in the collection
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="constructed" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="supportcollectionreadonlycollection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $data = [],
bool $insensitive = true,
bool $strictNull = false,
string|null $type = null
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

## Support\Collection\Traits\ArrayAccessTrait

Trait

- **`Phalcon\Support\Collection\Traits\ArrayAccessTrait`**

[`Phalcon\Support\Collection`](#supportcollection)

### Method Summary

<ApiItem href="#supportcollectiontraitsarrayaccesstrait-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"element","default":null}]}>
Whether a offset exists
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"element","default":null}]}>
Offset to retrieve
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Offset to set
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"element","default":null}]}>
Offset to unset
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Delete the element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsarrayaccesstrait-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Set an element in the collection
</ApiItem>

### Methods

<h4 id="supportcollectiontraitsarrayaccesstrait-get"><code>get()</code></h4>

```php
abstract public function get(
string $element,
mixed $defaultValue = null,
string|null $cast = null
): mixed;
```

Get the element from the collection

<h4 id="supportcollectiontraitsarrayaccesstrait-has"><code>has()</code></h4>

```php
abstract public function has( string $element ): bool;
```

Get the element from the collection

<h4 id="supportcollectiontraitsarrayaccesstrait-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $element ): bool;
```

Whether a offset exists

<h4 id="supportcollectiontraitsarrayaccesstrait-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $element ): mixed;
```

Offset to retrieve

<h4 id="supportcollectiontraitsarrayaccesstrait-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $element,
mixed $value
): void;
```

Offset to set

<h4 id="supportcollectiontraitsarrayaccesstrait-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $element ): void;
```

Offset to unset

<h4 id="supportcollectiontraitsarrayaccesstrait-remove"><code>remove()</code></h4>

```php
abstract public function remove( string $element ): void;
```

Delete the element from the collection

<h4 id="supportcollectiontraitsarrayaccesstrait-set"><code>set()</code></h4>

```php
abstract public function set(
string $element,
mixed $value
): void;
```

Set an element in the collection

## Support\Collection\Traits\GetSetHasTrait

Trait

- **`Phalcon\Support\Collection\Traits\GetSetHasTrait`**

[`Phalcon\Support\Collection`](#supportcollection)

### Method Summary

<ApiItem href="#supportcollectiontraitsgetsethastrait-__get" visibility="public" name="__get" returnType="mixed" params={[{"type":"string","name":"element","default":null}]}>
Magic getter to get an element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Magic isset to check whether an element exists or not
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-__set" visibility="public" name="__set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Magic setter to assign values to an element
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-__unset" visibility="public" name="__unset" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Magic unset to remove an element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Delete the element from the collection
</ApiItem>
<ApiItem href="#supportcollectiontraitsgetsethastrait-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Set an element in the collection
</ApiItem>

### Methods

<h4 id="supportcollectiontraitsgetsethastrait-__get"><code>__get()</code></h4>

```php
public function __get( string $element ): mixed;
```

Magic getter to get an element from the collection

<h4 id="supportcollectiontraitsgetsethastrait-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $element ): bool;
```

Magic isset to check whether an element exists or not

<h4 id="supportcollectiontraitsgetsethastrait-__set"><code>__set()</code></h4>

```php
public function __set(
string $element,
mixed $value
): void;
```

Magic setter to assign values to an element

<h4 id="supportcollectiontraitsgetsethastrait-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $element ): void;
```

Magic unset to remove an element from the collection

<h4 id="supportcollectiontraitsgetsethastrait-get"><code>get()</code></h4>

```php
abstract public function get(
string $element,
mixed $defaultValue = null,
string|null $cast = null
): mixed;
```

Get the element from the collection

<h4 id="supportcollectiontraitsgetsethastrait-has"><code>has()</code></h4>

```php
abstract public function has( string $element ): bool;
```

Get the element from the collection

<h4 id="supportcollectiontraitsgetsethastrait-remove"><code>remove()</code></h4>

```php
abstract public function remove( string $element ): void;
```

Delete the element from the collection

<h4 id="supportcollectiontraitsgetsethastrait-set"><code>set()</code></h4>

```php
abstract public function set(
string $element,
mixed $value
): void;
```

Set an element in the collection

## Support\Debug

Class

Listens for uncaught exceptions and renders them. Acts as a thin coordinator
delegating data collection to ReportBuilder and presentation to a Renderer.

- **`Phalcon\Support\Debug`**

`Phalcon\Contracts\Support\Debug\Renderer` · `Phalcon\Contracts\Support\SupportTypes` · `Phalcon\Support\Debug\Exceptions\RequestHalted` · `Phalcon\Support\Debug\Exceptions\RuntimeWarning` · `Phalcon\Support\Debug\Renderer\HtmlRenderer` · `Phalcon\Support\Debug\ReportBuilder` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `ReflectionException` · `Throwable`

### Method Summary

<ApiItem href="#supportdebug-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>
<ApiItem href="#supportdebug-clearvars" visibility="public" name="clearVars" returnType="static" params={[]}>
Clears are variables added previously
</ApiItem>
<ApiItem href="#supportdebug-debugvar" visibility="public" name="debugVar" returnType="static" params={[{"type":"mixed","name":"variable","default":null}]}>
Adds a variable to the debug output
</ApiItem>
<ApiItem href="#supportdebug-getcsssources" visibility="public" name="getCssSources" returnType="string" params={[]}>
Returns the CSS sources
</ApiItem>
<ApiItem href="#supportdebug-getjssources" visibility="public" name="getJsSources" returnType="string" params={[]}>
Returns the JavaScript sources
</ApiItem>
<ApiItem href="#supportdebug-getrenderer" visibility="public" name="getRenderer" returnType="Renderer" params={[]}>
Returns the renderer used to produce the output
</ApiItem>
<ApiItem href="#supportdebug-getversion" visibility="public" name="getVersion" returnType="string" params={[]}>
Generates a link to the current version documentation
</ApiItem>
<ApiItem href="#supportdebug-halt" visibility="public" name="halt" returnType="void" params={[]}>
Halts the request showing a backtrace
</ApiItem>
<ApiItem href="#supportdebug-listen" visibility="public" name="listen" returnType="static" params={[{"type":"bool","name":"exceptions","default":"true"},{"type":"bool","name":"lowSeverity","default":"false"}]}>
Listen for uncaught exceptions and non silent notices or warnings
</ApiItem>
<ApiItem href="#supportdebug-listenexceptions" visibility="public" name="listenExceptions" returnType="static" params={[]}>
Listen for uncaught exceptions
</ApiItem>
<ApiItem href="#supportdebug-listenlowseverity" visibility="public" name="listenLowSeverity" returnType="static" params={[]}>
Listen for non silent notices or warnings
</ApiItem>
<ApiItem href="#supportdebug-onuncaughtexception" visibility="public" name="onUncaughtException" returnType="bool" params={[{"type":"Throwable","name":"exception","default":null}]}>
Handles uncaught exceptions
</ApiItem>
<ApiItem href="#supportdebug-onuncaughtlowseverity" visibility="public" name="onUncaughtLowSeverity" returnType="void" params={[{"type":"int","name":"severity","default":null},{"type":"string","name":"message","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
Throws an exception when a notice or warning is raised
</ApiItem>
<ApiItem href="#supportdebug-renderhtml" visibility="public" name="renderHtml" returnType="string" params={[{"type":"Throwable","name":"exception","default":null}]}>
Render exception to html format.
</ApiItem>
<ApiItem href="#supportdebug-setblacklist" visibility="public" name="setBlacklist" returnType="static" params={[{"type":"array","name":"blacklist","default":null}]}>
Sets if files the exception's backtrace must be showed
</ApiItem>
<ApiItem href="#supportdebug-setrenderer" visibility="public" name="setRenderer" returnType="static" params={[{"type":"Renderer","name":"renderer","default":null}]}>
Sets the renderer used to produce the output
</ApiItem>
<ApiItem href="#supportdebug-setshowbacktrace" visibility="public" name="setShowBackTrace" returnType="static" params={[{"type":"bool","name":"showBackTrace","default":null}]}>
Sets if files the exception's backtrace must be showed
</ApiItem>
<ApiItem href="#supportdebug-setshowfilefragment" visibility="public" name="setShowFileFragment" returnType="static" params={[{"type":"bool","name":"showFileFragment","default":null}]}>
Sets if files must be completely opened and showed in the output
</ApiItem>
<ApiItem href="#supportdebug-setshowfiles" visibility="public" name="setShowFiles" returnType="static" params={[{"type":"bool","name":"showFiles","default":null}]}>
Set if files part of the backtrace must be shown in the output
</ApiItem>
<ApiItem href="#supportdebug-seturi" visibility="public" name="setUri" returnType="static" params={[{"type":"string","name":"uri","default":null}]}>
Change the base URI for static resources
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="blacklist" type="array" default="[...]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="data" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hideDocumentRoot" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isActive" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="renderer" type="Renderer" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="reportBuilder" type="ReportBuilder" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="showBackTrace" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="showFileFragment" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="showFiles" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uri" type="string" default="&quot;https://assets.phalcon.io/debug/6.0.x/&quot;">
</ApiItem>

### Methods

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
public function debugVar( mixed $variable ): static;
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
public function onUncaughtException( Throwable $exception ): bool;
```

Handles uncaught exceptions

<h4 id="supportdebug-onuncaughtlowseverity"><code>onUncaughtLowSeverity()</code></h4>

```php
public function onUncaughtLowSeverity(
int $severity,
string $message,
string $file,
int $line
): void;
```

Throws an exception when a notice or warning is raised

<h4 id="supportdebug-renderhtml"><code>renderHtml()</code></h4>

```php
public function renderHtml( Throwable $exception ): string;
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

Class

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

- **`Phalcon\Support\Debug\Dump`** - implements [`Phalcon\Contracts\Support\Debug\TemplateAware`](../phalcon_contracts/#contractssupportdebugtemplateaware)

`InvalidArgumentException` · `JsonException` · `Phalcon\Container\Container` · `Phalcon\Contracts\Support\Debug\TemplateAware` · `Phalcon\Contracts\Support\SupportTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Support\Debug\Traits\TemplateAwareTrait` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait` · `Reflection` · `ReflectionClass` · `ReflectionException` · `ReflectionProperty` · `stdClass`

### Method Summary

<ApiItem href="#supportdebugdump-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"styles","default":"[]"},{"type":"bool","name":"detailed","default":"false"}]}>
Dump constructor.
</ApiItem>
<ApiItem href="#supportdebugdump-all" visibility="public" name="all" returnType="string" params={[]}>
Alias of variables() method
</ApiItem>
<ApiItem href="#supportdebugdump-getdetailed" visibility="public" name="getDetailed" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugdump-one" visibility="public" name="one" returnType="string" params={[{"type":"mixed","name":"variable","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Alias of variable() method
</ApiItem>
<ApiItem href="#supportdebugdump-setdetailed" visibility="public" name="setDetailed" returnType="void" params={[{"type":"bool","name":"flag","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugdump-setstyles" visibility="public" name="setStyles" returnType="array" params={[{"type":"array","name":"styles","default":"[]"}]}>
Set styles for vars type
</ApiItem>
<ApiItem href="#supportdebugdump-tojson" visibility="public" name="toJson" returnType="string" params={[{"type":"mixed","name":"variable","default":null}]}>
Returns an JSON string of information about a single variable.
</ApiItem>
<ApiItem href="#supportdebugdump-variable" visibility="public" name="variable" returnType="string" params={[{"type":"mixed","name":"variable","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Returns an HTML string of information about a single variable.
</ApiItem>
<ApiItem href="#supportdebugdump-variables" visibility="public" name="variables" returnType="string" params={[]}>
Returns an HTML string of debugging information about any number of
</ApiItem>
<ApiItem href="#supportdebugdump-defaulttemplate" visibility="protected" name="defaultTemplate" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns the embedded default template for the given name.
</ApiItem>
<ApiItem href="#supportdebugdump-getstyle" visibility="protected" name="getStyle" returnType="string" params={[{"type":"string","name":"type","default":null}]}>
Get style for type
</ApiItem>
<ApiItem href="#supportdebugdump-output" visibility="protected" name="output" returnType="string" params={[{"type":"mixed","name":"variable","default":null},{"type":"string|null","name":"name","default":"null"},{"type":"int","name":"tab","default":"1"}]}>
Prepare an HTML string of information about a single variable.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="detailed" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methods" type="array&lt;array-key, class-string&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="styles" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="supportdebugdump-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $styles = [],
bool $detailed = false
);
```

Dump constructor.

<h4 id="supportdebugdump-all"><code>all()</code></h4>

```php
public function all(): string;
```

Alias of variables() method

<h4 id="supportdebugdump-getdetailed"><code>getDetailed()</code></h4>

```php
public function getDetailed(): bool;
```

<h4 id="supportdebugdump-one"><code>one()</code></h4>

```php
public function one(
mixed $variable,
string|null $name = null
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
string|null $name = null
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
string|null $name = null,
int $tab = 1
): string;
```

Prepare an HTML string of information about a single variable.

## Support\Debug\Exception

Class

Exceptions thrown in Phalcon\Debug will use this class

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- **`Phalcon\Support\Debug\Exception`**
- [`Phalcon\Support\Debug\Exceptions\RequestHalted`](#supportdebugexceptionsrequesthalted)

`Phalcon\Support\Exception`

## Support\Debug\Exceptions\RequestHalted

Class

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Debug\Exception`](#supportdebugexception)
- **`Phalcon\Support\Debug\Exceptions\RequestHalted`**

`Phalcon\Support\Debug\Exception`

### Method Summary

<ApiItem href="#supportdebugexceptionsrequesthalted-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="supportdebugexceptionsrequesthalted-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Support\Debug\Exceptions\RuntimeWarning

Class

- `\ErrorException`
- **`Phalcon\Support\Debug\Exceptions\RuntimeWarning`**

## Support\Debug\Renderer\HtmlRenderer

Class

Renders an ExceptionReport as the HTML debug page using embedded, overridable
template strings filled by the interpolator. All styling and interactivity
(theme, tabs, syntax highlighting, copy/editor links) are provided by the
external debug.css / debug.js assets.

- **`Phalcon\Support\Debug\Renderer\HtmlRenderer`** - implements [`Phalcon\Contracts\Support\Debug\Renderer`](../phalcon_contracts/#contractssupportdebugrenderer)

`Phalcon\Contracts\Support\Debug\Renderer` · `Phalcon\Contracts\Support\SupportTypes` · `Phalcon\Support\Debug\Report\BacktraceItem` · `Phalcon\Support\Debug\Report\ExceptionReport` · `Phalcon\Support\Debug\Traits\TemplateAwareTrait` · `Phalcon\Support\Version` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait`

### Method Summary

<ApiItem href="#supportdebugrendererhtmlrenderer-getcsssources" visibility="public" name="getCssSources" returnType="string" params={[{"type":"string","name":"uri","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-getjssources" visibility="public" name="getJsSources" returnType="string" params={[{"type":"string","name":"uri","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-getversion" visibility="public" name="getVersion" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-render" visibility="public" name="render" returnType="string" params={[{"type":"ExceptionReport","name":"report","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-defaulttemplate" visibility="protected" name="defaultTemplate" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns the embedded default template for the given name.
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-escapestring" visibility="protected" name="escapeString" returnType="string" params={[{"type":"string","name":"value","default":null}]}>
Escapes a string with htmlentities
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-getarraydump" visibility="protected" name="getArrayDump" returnType="string|null" params={[{"type":"array","name":"arguments","default":null},{"type":"int","name":"number","default":"0"}]}>
Produces a recursive representation of an array
</ApiItem>
<ApiItem href="#supportdebugrendererhtmlrenderer-getvardump" visibility="protected" name="getVarDump" returnType="string" params={[{"type":"mixed","name":"variable","default":null}]}>
Produces a string representation of a variable
</ApiItem>

### Methods

<h4 id="supportdebugrendererhtmlrenderer-getcsssources"><code>getCssSources()</code></h4>

```php
public function getCssSources( string $uri ): string;
```

<h4 id="supportdebugrendererhtmlrenderer-getjssources"><code>getJsSources()</code></h4>

```php
public function getJsSources( string $uri ): string;
```

<h4 id="supportdebugrendererhtmlrenderer-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string;
```

<h4 id="supportdebugrendererhtmlrenderer-render"><code>render()</code></h4>

```php
public function render( ExceptionReport $report ): string;
```

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
array $arguments,
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

Class

Collects the runtime data for an exception (backtrace, superglobals, included
files, memory, variables) into an ExceptionReport. Holds no presentation
logic.

- **`Phalcon\Support\Debug\ReportBuilder`**

`Phalcon\Contracts\Support\SupportTypes` · `Phalcon\Support\Debug\Report\BacktraceItem` · `Phalcon\Support\Debug\Report\ExceptionReport` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `ReflectionClass` · `ReflectionException` · `ReflectionFunction` · `Throwable`

### Method Summary

<ApiItem href="#supportdebugreportbuilder-build" visibility="public" name="build" returnType="ExceptionReport" params={[{"type":"Throwable","name":"exception","default":null},{"type":"array","name":"blacklist","default":null},{"type":"bool","name":"showBackTrace","default":null},{"type":"bool","name":"showFiles","default":null},{"type":"bool","name":"showFileFragment","default":null},{"type":"string","name":"uri","default":null},{"type":"array","name":"data","default":null}]}>
</ApiItem>

### Methods

<h4 id="supportdebugreportbuilder-build"><code>build()</code></h4>

```php
public function build(
Throwable $exception,
array $blacklist,
bool $showBackTrace,
bool $showFiles,
bool $showFileFragment,
string $uri,
array $data
): ExceptionReport;
```

## Support\Debug\Report\BacktraceItem

Final

Represents a single resolved frame of an exception backtrace.

- **`Phalcon\Support\Debug\Report\BacktraceItem`**

`Phalcon\Contracts\Support\SupportTypes`

### Method Summary

<ApiItem href="#supportdebugreportbacktraceitem-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"functionName","default":null},{"type":"string|null","name":"type","default":"null"},{"type":"string|null","name":"className","default":"null"},{"type":"string|null","name":"classLink","default":"null"},{"type":"string|null","name":"functionLink","default":"null"},{"type":"bool","name":"hasArgs","default":"false"},{"type":"array","name":"args","default":"[]"},{"type":"string|null","name":"file","default":"null"},{"type":"int|null","name":"line","default":"null"},{"type":"array|null","name":"fragment","default":"null"}]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getargs" visibility="public" name="getArgs" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getclasslink" visibility="public" name="getClassLink" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getclassname" visibility="public" name="getClassName" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getfile" visibility="public" name="getFile" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getfragment" visibility="public" name="getFragment" returnType="array|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getfunctionlink" visibility="public" name="getFunctionLink" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getfunctionname" visibility="public" name="getFunctionName" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-getline" visibility="public" name="getLine" returnType="int|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-gettype" visibility="public" name="getType" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportbacktraceitem-hasargs" visibility="public" name="hasArgs" returnType="bool" params={[]}>
</ApiItem>

### Methods

<h4 id="supportdebugreportbacktraceitem-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $functionName,
string|null $type = null,
string|null $className = null,
string|null $classLink = null,
string|null $functionLink = null,
bool $hasArgs = false,
array $args = [],
string|null $file = null,
int|null $line = null,
array|null $fragment = null
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

Final

Carries all data collected for an exception, ready to be rendered. Holds no
presentation logic.

- **`Phalcon\Support\Debug\Report\ExceptionReport`**

`Phalcon\Contracts\Support\SupportTypes`

### Method Summary

<ApiItem href="#supportdebugreportexceptionreport-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"message","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null},{"type":"bool","name":"showBackTrace","default":null},{"type":"string","name":"uri","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getbacktrace" visibility="public" name="getBacktrace" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getclassname" visibility="public" name="getClassName" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getfile" visibility="public" name="getFile" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getincludedfiles" visibility="public" name="getIncludedFiles" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getline" visibility="public" name="getLine" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getmemoryusage" visibility="public" name="getMemoryUsage" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getmessage" visibility="public" name="getMessage" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getpeakmemoryusage" visibility="public" name="getPeakMemoryUsage" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getrequest" visibility="public" name="getRequest" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getserver" visibility="public" name="getServer" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-geturi" visibility="public" name="getUri" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-getvariables" visibility="public" name="getVariables" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-hasvariables" visibility="public" name="hasVariables" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-isshowbacktrace" visibility="public" name="isShowBackTrace" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setbacktrace" visibility="public" name="setBacktrace" returnType="static" params={[{"type":"array","name":"backtrace","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setincludedfiles" visibility="public" name="setIncludedFiles" returnType="static" params={[{"type":"array","name":"includedFiles","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setmemoryusage" visibility="public" name="setMemoryUsage" returnType="static" params={[{"type":"int","name":"memoryUsage","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setpeakmemoryusage" visibility="public" name="setPeakMemoryUsage" returnType="static" params={[{"type":"int","name":"peakMemoryUsage","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setrequest" visibility="public" name="setRequest" returnType="static" params={[{"type":"array","name":"request","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setserver" visibility="public" name="setServer" returnType="static" params={[{"type":"array","name":"server","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugreportexceptionreport-setvariables" visibility="public" name="setVariables" returnType="static" params={[{"type":"array","name":"variables","default":null}]}>
</ApiItem>

### Methods

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

## Support\Debug\Traits\TemplateAwareTrait

Trait

Shared store for named, overridable template strings. A using class supplies
the embedded defaults via defaultTemplate().

Note: this trait has no Zephir equivalent; the cphalcon mirror duplicates
these members in each class until Zephir supports traits.

- **`Phalcon\Support\Debug\Traits\TemplateAwareTrait`**

`Phalcon\Contracts\Support\SupportTypes`

[`Phalcon\Support\Debug\Dump`](#supportdebugdump) · [`Phalcon\Support\Debug\Renderer\HtmlRenderer`](#supportdebugrendererhtmlrenderer)

### Method Summary

<ApiItem href="#supportdebugtraitstemplateawaretrait-gettemplate" visibility="public" name="getTemplate" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugtraitstemplateawaretrait-settemplate" visibility="public" name="setTemplate" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"template","default":null}]}>
</ApiItem>
<ApiItem href="#supportdebugtraitstemplateawaretrait-defaulttemplate" visibility="protected" name="defaultTemplate" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns the embedded default template for the given name.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="templates" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="supportdebugtraitstemplateawaretrait-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate( string $name ): string;
```

<h4 id="supportdebugtraitstemplateawaretrait-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate(
string $name,
string $template
): static;
```

<h4 id="supportdebugtraitstemplateawaretrait-defaulttemplate"><code>defaultTemplate()</code></h4>

```php
abstract protected function defaultTemplate( string $name ): string;
```

Returns the embedded default template for the given name.

## Support\Exception

Class

Exceptions thrown in Phalcon\Support will use this class

- `\Exception`
- **`Phalcon\Support\Exception`**
- [`Phalcon\Support\Collection\Exception`](#supportcollectionexception)
- [`Phalcon\Support\Debug\Exception`](#supportdebugexception)
- [`Phalcon\Support\Helper\Exception`](#supporthelperexception)

## Support\HelperFactory

Class

ServiceLocator implementation for helpers

@method string basename(string $uri, string $suffix = null)
@method support_collection blacklist(support_collection $collection, support_collection $blackList)
@method string camelize(string $text, string $delimiters = null, bool $lowerFirst = false)
@method support_collection chunk(support_collection $collection, int $size, bool $preserveKeys = false)
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
@method mixed  filter(support_collection $collection, callable|null $method)
@method mixed  first(support_collection $collection, callable $method = null)
@method string firstBetween(string $text, string $start, string $end)
@method mixed  firstKey(support_collection $collection, callable $method = null)
@method string friendly(string $text, string $separator = '-', bool $lowercase = true, $replace = null)
@method support_collection flatten(support_collection $collection, bool $deep = false)
@method mixed  get(support_collection $collection, $index, $defaultValue = null, string $cast = null)
@method array&lt;array-key, list&lt;mixed>> group(support_collection $collection, $method)
@method bool   has(support_collection $collection, $index)
@method string humanize(string $text)
@method bool   includes(string $haystack, string $needle)
@method string increment(string $text, string $separator = '_')
@method string interpolate(string $message, string[] $context=[], string $leftToken="%", string $rightToken="%")
@method bool   isAnagram(string $first, string $second)
@method bool   isBetween(int $value, int $start, int $end)
@method bool   isLower(string $text, string $encoding = 'UTF-8')
@method bool   isPalindrome(string $text)
@method bool   isUnique(support_collection $collection)
@method bool   isUpper(string $text, string $encoding = 'UTF-8')
@method string kebabCase(string $text, string $delimiters = null)
@method mixed  last(support_collection $collection, callable $method = null)
@method mixed  lastKey(support_collection $collection, callable $method = null)
@method int    len(string $text, string $encoding = 'UTF-8')
@method string lower(string $text, string $encoding = 'UTF-8')
@method support_collection order(support_collection $collection, $attribute, string $order = 'asc')
@method string pascalCase(string $text, string $delimiters = null)
@method support_collection pluck(support_collection $collection, string $element)
@method string prefix(string $text, string $prefix)
@method string random(int $type = 0, int $length = 8)
@method string reduceSlashes(string $text)
@method support_collection set(support_collection $collection, $value, $index = null)
@method support_collection sliceLeft(support_collection $collection, int $elements = 1)
@method support_collection sliceRight(support_collection $collection, int $elements = 1)
@method string snakeCase(string $text, string $delimiters = null)
@method support_collection split(support_collection $collection)
@method bool   startsWith(string $haystack, string $needle, bool $ignoreCase = true)
@method string suffix(string $text, string $suffix)
@method object toObject(support_collection $collection)
@method bool   validateAll(support_collection $collection, callable $method)
@method bool   validateAny(support_collection $collection, callable $method)
@method string ucwords(string $text, string $encoding = 'UTF-8')
@method string uncamelize(string $text, string $delimiters = '_')
@method string underscore(string $text)
@method string upper(string $text, string $encoding = 'UTF-8')
@method support_collection whitelist(support_collection $collection, support_collection $whiteList)

- [`Phalcon\Factory\AbstractConfigFactory`](../phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](../phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Support\HelperFactory`**

`Phalcon\Contracts\Support\SupportTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Support\Helper\Arr\Blacklist` · `Phalcon\Support\Helper\Arr\Chunk` · `Phalcon\Support\Helper\Arr\Filter` · `Phalcon\Support\Helper\Arr\First` · `Phalcon\Support\Helper\Arr\FirstKey` · `Phalcon\Support\Helper\Arr\Flatten` · `Phalcon\Support\Helper\Arr\Get` · `Phalcon\Support\Helper\Arr\Group` · `Phalcon\Support\Helper\Arr\Has` · `Phalcon\Support\Helper\Arr\IsUnique` · `Phalcon\Support\Helper\Arr\Last` · `Phalcon\Support\Helper\Arr\LastKey` · `Phalcon\Support\Helper\Arr\Order` · `Phalcon\Support\Helper\Arr\Pluck` · `Phalcon\Support\Helper\Arr\Set` · `Phalcon\Support\Helper\Arr\SliceLeft` · `Phalcon\Support\Helper\Arr\SliceRight` · `Phalcon\Support\Helper\Arr\Split` · `Phalcon\Support\Helper\Arr\ToObject` · `Phalcon\Support\Helper\Arr\ValidateAll` · `Phalcon\Support\Helper\Arr\ValidateAny` · `Phalcon\Support\Helper\Arr\Whitelist` · `Phalcon\Support\Helper\File\Basename` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Support\Helper\Number\IsBetween` · `Phalcon\Support\Helper\Str\Camelize` · `Phalcon\Support\Helper\Str\Concat` · `Phalcon\Support\Helper\Str\CountVowels` · `Phalcon\Support\Helper\Str\Decapitalize` · `Phalcon\Support\Helper\Str\Decrement` · `Phalcon\Support\Helper\Str\DirFromFile` · `Phalcon\Support\Helper\Str\DirSeparator` · `Phalcon\Support\Helper\Str\Dynamic` · `Phalcon\Support\Helper\Str\EndsWith` · `Phalcon\Support\Helper\Str\FirstBetween` · `Phalcon\Support\Helper\Str\Friendly` · `Phalcon\Support\Helper\Str\Humanize` · `Phalcon\Support\Helper\Str\Includes` · `Phalcon\Support\Helper\Str\Increment` · `Phalcon\Support\Helper\Str\Interpolate` · `Phalcon\Support\Helper\Str\IsAnagram` · `Phalcon\Support\Helper\Str\IsLower` · `Phalcon\Support\Helper\Str\IsPalindrome` · `Phalcon\Support\Helper\Str\IsUpper` · `Phalcon\Support\Helper\Str\KebabCase` · `Phalcon\Support\Helper\Str\Len` · `Phalcon\Support\Helper\Str\Lower` · `Phalcon\Support\Helper\Str\PascalCase` · `Phalcon\Support\Helper\Str\Prefix` · `Phalcon\Support\Helper\Str\Random` · `Phalcon\Support\Helper\Str\ReduceSlashes` · `Phalcon\Support\Helper\Str\SnakeCase` · `Phalcon\Support\Helper\Str\StartsWith` · `Phalcon\Support\Helper\Str\Suffix` · `Phalcon\Support\Helper\Str\Ucwords` · `Phalcon\Support\Helper\Str\Uncamelize` · `Phalcon\Support\Helper\Str\Underscore` · `Phalcon\Support\Helper\Str\Upper` · `Throwable`

### Method Summary

<ApiItem href="#supporthelperfactory-__call" visibility="public" name="__call" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"arguments","default":null}]}>
</ApiItem>
<ApiItem href="#supporthelperfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"services","default":"[]"}]}>
Constructor.
</ApiItem>
<ApiItem href="#supporthelperfactory-newinstance" visibility="public" name="newInstance" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#supporthelperfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#supporthelperfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Methods

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

Constructor.

<h4 id="supporthelperfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name );
```

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

Abstract

@internal

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Traits\Support\Helper\Arr\FilterTrait directly instead of extending
this.

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

`Phalcon\Traits\Support\Helper\Arr\FilterTrait`

## Support\Helper\Arr\Blacklist

Class

Black list filter by key: exclude elements of an array
by the keys obtained from the elements of a blacklist

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Blacklist`**

### Method Summary

<ApiItem href="#supporthelperarrblacklist-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"array","name":"blackList","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrblacklist-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
array $blackList
): array;
```

## Support\Helper\Arr\Chunk

Class

Chunks an array into smaller arrays of a specified size.

- **`Phalcon\Support\Helper\Arr\Chunk`**

### Method Summary

<ApiItem href="#supporthelperarrchunk-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"int","name":"size","default":null},{"type":"bool","name":"preserveKeys","default":"false"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrchunk-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
int $size,
bool $preserveKeys = false
): array;
```

## Support\Helper\Arr\Filter

Class

Filters an array using array_filter. If a callback is supplied, it will be
used.

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Filter`**

### Method Summary

<ApiItem href="#supporthelperarrfilter-__invoke" visibility="public" name="__invoke" returnType="mixed" params={[{"type":"array","name":"collection","default":null},{"type":"callable|null","name":"method","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrfilter-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable|null $method = null
): mixed;
```

## Support\Helper\Arr\First

Class

Returns the first element of the collection. If a callable is passed, the
element returned is the first that validates true

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\First`**

### Method Summary

<ApiItem href="#supporthelperarrfirst-__invoke" visibility="public" name="__invoke" returnType="mixed" params={[{"type":"array","name":"collection","default":null},{"type":"callable|null","name":"method","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrfirst-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable|null $method = null
): mixed;
```

## Support\Helper\Arr\FirstKey

Class

Returns the key of the first element of the collection. If a callable
is passed, the element returned is the first that validates true

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\FirstKey`**

### Method Summary

<ApiItem href="#supporthelperarrfirstkey-__invoke" visibility="public" name="__invoke" returnType="int|string|null" params={[{"type":"array","name":"collection","default":null},{"type":"callable|null","name":"method","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrfirstkey-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable|null $method = null
): int|string|null;
```

## Support\Helper\Arr\Flatten

Class

Flattens an array up to the one level depth, unless `$deep` is set to
`true`

- **`Phalcon\Support\Helper\Arr\Flatten`**

### Method Summary

<ApiItem href="#supporthelperarrflatten-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"bool","name":"deep","default":"false"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrflatten-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
bool $deep = false
): array;
```

## Support\Helper\Arr\Get

Class

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally

- **`Phalcon\Support\Helper\Arr\Get`**

`Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<ApiItem href="#supporthelperarrget-__invoke" visibility="public" name="__invoke" returnType="mixed" params={[{"type":"array","name":"collection","default":null},{"type":"mixed","name":"index","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrget-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $index,
mixed $defaultValue = null,
string|null $cast = null
): mixed;
```

## Support\Helper\Arr\Group

Class

Groups the elements of an array based on the passed callable

- **`Phalcon\Support\Helper\Arr\Group`**

`Phalcon\Traits\Php\InfoTrait`

### Method Summary

<ApiItem href="#supporthelperarrgroup-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"callable|string","name":"method","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrgroup-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable|string $method
): array;
```

## Support\Helper\Arr\Has

Class

Checks an array if it has an element with a specific key and returns
`true`/`false` accordingly

- **`Phalcon\Support\Helper\Arr\Has`**

### Method Summary

<ApiItem href="#supporthelperarrhas-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"array","name":"collection","default":null},{"type":"mixed","name":"index","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrhas-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $index
): bool;
```

## Support\Helper\Arr\IsUnique

Class

Checks a flat list for duplicate values. Returns true if duplicate
values exist and false if values are all unique.

- **`Phalcon\Support\Helper\Arr\IsUnique`**

`Stringable`

### Method Summary

<ApiItem href="#supporthelperarrisunique-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"array","name":"collection","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrisunique-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $collection ): bool;
```

## Support\Helper\Arr\Last

Class

Returns the last element of the collection. If a callable is passed, the
element returned is the first that validates true

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Last`**

### Method Summary

<ApiItem href="#supporthelperarrlast-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"array","name":"collection","default":null},{"type":"callable|null","name":"method","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrlast-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable|null $method = null
);
```

## Support\Helper\Arr\LastKey

Class

Returns the key of the last element of the collection. If a callable is
passed, the element returned is the first that validates true

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\LastKey`**

### Method Summary

<ApiItem href="#supporthelperarrlastkey-__invoke" visibility="public" name="__invoke" returnType="int|string|null" params={[{"type":"array","name":"collection","default":null},{"type":"callable|null","name":"method","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrlastkey-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable|null $method = null
): int|string|null;
```

## Support\Helper\Arr\Order

Class

Sorts a collection of arrays or objects by an attribute of the object. It
supports ascending/descending sorts but also flags that are identical to
the ones used by `ksort` and `krsort`

- **`Phalcon\Support\Helper\Arr\Order`**

### Method Summary

<ApiItem href="#supporthelperarrorder-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"string","name":"attribute","default":null},{"type":"int","name":"order","default":"self::ORDER_ASC"},{"type":"int","name":"flags","default":"SORT_REGULAR"}]}>
</ApiItem>

### Constants

<ApiItem kind="constant" name="ORDER_ASC" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="ORDER_DESC" type="int" default="2">
</ApiItem>

### Methods

<h4 id="supporthelperarrorder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
string $attribute,
int $order = self::ORDER_ASC,
int $flags = SORT_REGULAR
): array;
```

## Support\Helper\Arr\Pluck

Class

Returns a subset of the collection based on the values of the collection

- **`Phalcon\Support\Helper\Arr\Pluck`**

### Method Summary

<ApiItem href="#supporthelperarrpluck-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"string","name":"element","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrpluck-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
string $element
): array;
```

## Support\Helper\Arr\Set

Class

Sets an array element. Using a key is optional

- **`Phalcon\Support\Helper\Arr\Set`**

### Method Summary

<ApiItem href="#supporthelperarrset-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"mixed","name":"value","default":null},{"type":"int|string|null","name":"index","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrset-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
mixed $value,
int|string|null $index = null
): array;
```

## Support\Helper\Arr\SliceLeft

Class

Returns a new array with n elements removed from the left.

- **`Phalcon\Support\Helper\Arr\SliceLeft`**

### Method Summary

<ApiItem href="#supporthelperarrsliceleft-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"int","name":"elements","default":"1"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrsliceleft-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
int $elements = 1
): array;
```

## Support\Helper\Arr\SliceRight

Class

Returns a new array with n elements removed from the right.

- **`Phalcon\Support\Helper\Arr\SliceRight`**

### Method Summary

<ApiItem href="#supporthelperarrsliceright-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"int","name":"elements","default":"1"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrsliceright-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
int $elements = 1
): array;
```

## Support\Helper\Arr\Split

Class

Returns a new array with keys of the collection as one element and values
as another

- **`Phalcon\Support\Helper\Arr\Split`**

### Method Summary

<ApiItem href="#supporthelperarrsplit-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrsplit-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $collection ): array;
```

## Support\Helper\Arr\ToObject

Class

Returns the passed array as an object.

- **`Phalcon\Support\Helper\Arr\ToObject`**

### Method Summary

<ApiItem href="#supporthelperarrtoobject-__invoke" visibility="public" name="__invoke" returnType="object" params={[{"type":"array","name":"collection","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrtoobject-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $collection ): object;
```

## Support\Helper\Arr\ValidateAll

Class

Returns `true` if the provided function returns `true` for all elements of
the collection, `false` otherwise.

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\ValidateAll`**

### Method Summary

<ApiItem href="#supporthelperarrvalidateall-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"array","name":"collection","default":null},{"type":"callable","name":"method","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrvalidateall-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable $method
): bool;
```

## Support\Helper\Arr\ValidateAny

Class

Returns `true` if the provided function returns `true` for at least one
element of the collection, `false` otherwise.

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\ValidateAny`**

### Method Summary

<ApiItem href="#supporthelperarrvalidateany-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"array","name":"collection","default":null},{"type":"callable","name":"method","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrvalidateany-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
callable $method
): bool;
```

## Support\Helper\Arr\Whitelist

Class

White list filter by key: obtain elements of an array filtering by the keys
obtained from the elements of a whitelist

- [`Phalcon\Support\Helper\Arr\AbstractArr`](#supporthelperarrabstractarr)
- **`Phalcon\Support\Helper\Arr\Whitelist`**

### Method Summary

<ApiItem href="#supporthelperarrwhitelist-__invoke" visibility="public" name="__invoke" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"array","name":"whiteList","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperarrwhitelist-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
array $collection,
array $whiteList
): array;
```

## Support\Helper\Exception

Class

Exceptions thrown in Phalcon\Support\Helper will use this class

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- **`Phalcon\Support\Helper\Exception`**
- [`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`](#supporthelperstrexceptionsinsufficientarguments)
- [`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`](#supporthelperstrexceptionsinvalidreplaceformat)

`Phalcon\Support\Exception`

## Support\Helper\File\Basename

Class

Gets the filename from a given path, Same as PHP's `basename()` but has
non-ASCII support. PHP's `basename()` does not properly support streams or
filenames beginning with a non-US-ASCII character.

- **`Phalcon\Support\Helper\File\Basename`**

### Method Summary

<ApiItem href="#supporthelperfilebasename-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"uri","default":null},{"type":"string|null","name":"suffix","default":"null"}]}>
@see https://bugs.php.net/bug.php?id=37738
</ApiItem>

### Methods

<h4 id="supporthelperfilebasename-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $uri,
string|null $suffix = null
): string;
```

@see https://bugs.php.net/bug.php?id=37738

## Support\Helper\Json\Decode

Class

Decodes a string using `json_decode` and throws an exception if the
JSON data cannot be decoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
JsonDecodeError

- **`Phalcon\Support\Helper\Json\Decode`**

`JsonException` · `Phalcon\Support\Helper\Json\Exceptions\JsonDecodeError` · `Phalcon\Traits\Support\Helper\Json\DecodeTrait`

### Method Summary

<ApiItem href="#supporthelperjsondecode-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"data","default":null},{"type":"bool","name":"associative","default":"false"},{"type":"int","name":"depth","default":"512"},{"type":"int","name":"options","default":"79"}]}>
</ApiItem>

### Methods

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

Class

Encodes a string using `json_encode` and throws an exception if the
JSON data cannot be encoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
JsonEncodeError

@see  https://www.ietf.org/rfc/rfc4627.txt

- **`Phalcon\Support\Helper\Json\Encode`**

`JsonException` · `Phalcon\Support\Helper\Json\Exceptions\JsonEncodeError` · `Phalcon\Traits\Support\Helper\Json\EncodeTrait`

### Method Summary

<ApiItem href="#supporthelperjsonencode-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"mixed","name":"data","default":null},{"type":"int","name":"options","default":"79"},{"type":"int","name":"depth","default":"512"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperjsonencode-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $data,
int $options = 79,
int $depth = 512
): string;
```

## Support\Helper\Json\Exceptions\JsonDecodeError

Class

- `\InvalidArgumentException`
- **`Phalcon\Support\Helper\Json\Exceptions\JsonDecodeError`**

`InvalidArgumentException` · `Throwable`

### Method Summary

<ApiItem href="#supporthelperjsonexceptionsjsondecodeerror-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":"\"\""},{"type":"int","name":"code","default":"0"},{"type":"Throwable|null","name":"previous","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperjsonexceptionsjsondecodeerror-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $message = "",
int $code = 0,
Throwable|null $previous = null
);
```

## Support\Helper\Json\Exceptions\JsonEncodeError

Class

- `\InvalidArgumentException`
- **`Phalcon\Support\Helper\Json\Exceptions\JsonEncodeError`**

`InvalidArgumentException` · `Throwable`

### Method Summary

<ApiItem href="#supporthelperjsonexceptionsjsonencodeerror-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":"\"\""},{"type":"int","name":"code","default":"0"},{"type":"Throwable|null","name":"previous","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperjsonexceptionsjsonencodeerror-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $message = "",
int $code = 0,
Throwable|null $previous = null
);
```

## Support\Helper\Number\IsBetween

Class

Checks if a number is within a range

- **`Phalcon\Support\Helper\Number\IsBetween`**

### Method Summary

<ApiItem href="#supporthelpernumberisbetween-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"int","name":"value","default":null},{"type":"int","name":"start","default":null},{"type":"int","name":"end","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelpernumberisbetween-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
int $value,
int $start,
int $end
): bool;
```

## Support\Helper\Str\AbstractStr

Abstract

Abstract class offering methods to help with the Str namespace.

@internal

@todo Remove in v7. Kept only for backwards compatibility; compose the
      individual Phalcon\Traits\Support\Helper\Str\* traits directly instead
      of extending this.

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

`Phalcon\Traits\Support\Helper\Str\EndsWithTrait` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait` · `Phalcon\Traits\Support\Helper\Str\LowerTrait` · `Phalcon\Traits\Support\Helper\Str\StartsWithTrait` · `Phalcon\Traits\Support\Helper\Str\UpperTrait`

## Support\Helper\Str\Camelize

Class

Converts strings to upperCamelCase or lowerCamelCase

- **`Phalcon\Support\Helper\Str\Camelize`**

`Phalcon\Traits\Support\Helper\Str\CamelizeTrait`

### Method Summary

<ApiItem href="#supporthelperstrcamelize-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"delimiters","default":"null"},{"type":"bool","name":"lowerFirst","default":"false"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrcamelize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string|null $delimiters = null,
bool $lowerFirst = false
): string;
```

## Support\Helper\Str\Concat

Class

Concatenates strings using the separator only once without duplication in
places concatenation

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Concat`**

`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`

### Method Summary

<ApiItem href="#supporthelperstrconcat-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"delimiter","default":null},{"type":"string","name":"many","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrconcat-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $delimiter,
string $many
): string;
```

## Support\Helper\Str\CountVowels

Class

Returns number of vowels in provided string. Uses a regular expression
to count the number of vowels (A, E, I, O, U) in a string.

- **`Phalcon\Support\Helper\Str\CountVowels`**

### Method Summary

<ApiItem href="#supporthelperstrcountvowels-__invoke" visibility="public" name="__invoke" returnType="int" params={[{"type":"string","name":"text","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrcountvowels-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): int;
```

## Support\Helper\Str\Decapitalize

Class

Decapitalizes the first letter of the string and then adds it with rest
of the string. Omit the upperRest parameter to keep the rest of the
string intact, or set it to true to convert to uppercase.

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Decapitalize`**

### Method Summary

<ApiItem href="#supporthelperstrdecapitalize-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"bool","name":"upperRest","default":"false"},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrdecapitalize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
bool $upperRest = false,
string $encoding = "UTF-8"
): string;
```

## Support\Helper\Str\Decrement

Class

Removes a number from the end of a string or decrements that number if it
is already defined

- **`Phalcon\Support\Helper\Str\Decrement`**

### Method Summary

<ApiItem href="#supporthelperstrdecrement-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"separator","default":"\"_\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrdecrement-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "_"
): string;
```

## Support\Helper\Str\DirFromFile

Class

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end

- **`Phalcon\Support\Helper\Str\DirFromFile`**

`Phalcon\Traits\Support\Helper\Str\DirFromFileTrait`

### Method Summary

<ApiItem href="#supporthelperstrdirfromfile-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"file","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrdirfromfile-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $file ): string;
```

## Support\Helper\Str\DirSeparator

Class

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR

- **`Phalcon\Support\Helper\Str\DirSeparator`**

`Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`

### Method Summary

<ApiItem href="#supporthelperstrdirseparator-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"directory","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrdirseparator-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $directory ): string;
```

## Support\Helper\Str\Dynamic

Class

Generates random text in accordance with the template. The template is
defined by the left and right delimiter and it can contain values separated
by the separator

- **`Phalcon\Support\Helper\Str\Dynamic`**

`Phalcon\Support\Helper\Str\Exceptions\SyntaxError`

### Method Summary

<ApiItem href="#supporthelperstrdynamic-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"leftDelimiter","default":"\"{\""},{"type":"string","name":"rightDelimiter","default":"\"}\""},{"type":"string","name":"separator","default":"\"|\""}]}>
</ApiItem>

### Methods

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

Class

Check if a string ends with a given string

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\EndsWith`**

### Method Summary

<ApiItem href="#supporthelperstrendswith-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"haystack","default":null},{"type":"string","name":"needle","default":null},{"type":"bool","name":"ignoreCase","default":"true"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrendswith-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

## Support\Helper\Str\Exceptions\InsufficientArguments

Class

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Helper\Exception`](#supporthelperexception)
- **`Phalcon\Support\Helper\Str\Exceptions\InsufficientArguments`**

`Phalcon\Support\Helper\Exception`

## Support\Helper\Str\Exceptions\InvalidReplaceFormat

Class

- `\Exception`
- [`Phalcon\Support\Exception`](#supportexception)
- [`Phalcon\Support\Helper\Exception`](#supporthelperexception)
- **`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`**

`Phalcon\Support\Helper\Exception`

## Support\Helper\Str\Exceptions\SyntaxError

Class

- `\RuntimeException`
- **`Phalcon\Support\Helper\Str\Exceptions\SyntaxError`**

`RuntimeException`

### Method Summary

<ApiItem href="#supporthelperstrexceptionssyntaxerror-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"text","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrexceptionssyntaxerror-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $text );
```

## Support\Helper\Str\FirstBetween

Class

Returns the first string there is between the strings from the
parameter start and end.

- **`Phalcon\Support\Helper\Str\FirstBetween`**

### Method Summary

<ApiItem href="#supporthelperstrfirstbetween-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"start","default":null},{"type":"string","name":"end","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrfirstbetween-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $start,
string $end
): string;
```

## Support\Helper\Str\Friendly

Class

Changes a text to a URL friendly one. Replaces commonly known accented
characters with their Latin equivalents. If a `replace` string or array
is passed, it will also be used to replace those characters with a space.

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Friendly`**

`Phalcon\Support\Helper\Str\Exceptions\InvalidReplaceFormat`

### Method Summary

<ApiItem href="#supporthelperstrfriendly-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"separator","default":"\"-\""},{"type":"bool","name":"lowercase","default":"true"},{"type":"array|string|null","name":"replace","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrfriendly-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "-",
bool $lowercase = true,
array|string|null $replace = null
): string;
```

## Support\Helper\Str\Humanize

Class

Makes an underscored or dashed text human-readable

- **`Phalcon\Support\Helper\Str\Humanize`**

### Method Summary

<ApiItem href="#supporthelperstrhumanize-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrhumanize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): string;
```

## Support\Helper\Str\Includes

Class

Determines whether a string includes another string or not.

- **`Phalcon\Support\Helper\Str\Includes`**

### Method Summary

<ApiItem href="#supporthelperstrincludes-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"haystack","default":null},{"type":"string","name":"needle","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrincludes-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $haystack,
string $needle
): bool;
```

## Support\Helper\Str\Increment

Class

Adds a number to the end of a string or increments that number if it
is already defined

- **`Phalcon\Support\Helper\Str\Increment`**

### Method Summary

<ApiItem href="#supporthelperstrincrement-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"separator","default":"\"_\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrincrement-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "_"
): string;
```

## Support\Helper\Str\Interpolate

Class

Interpolates context values into the message placeholders. By default, the
right and left tokens are `%`

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message

- **`Phalcon\Support\Helper\Str\Interpolate`**

`Phalcon\Traits\Support\Helper\Str\InterpolateTrait`

### Method Summary

<ApiItem href="#supporthelperstrinterpolate-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"},{"type":"string","name":"leftToken","default":"\"%\""},{"type":"string","name":"rightToken","default":"\"%\""}]}>
</ApiItem>

### Methods

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

Class

Compare two strings and returns `true` if both strings are anagram,
`false` otherwise.

- **`Phalcon\Support\Helper\Str\IsAnagram`**

### Method Summary

<ApiItem href="#supporthelperstrisanagram-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"first","default":null},{"type":"string","name":"second","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrisanagram-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $first,
string $second
): bool;
```

## Support\Helper\Str\IsLower

Class

Returns `true` if the given string is in lower case, `false` otherwise.

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\IsLower`**

### Method Summary

<ApiItem href="#supporthelperstrislower-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrislower-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): bool;
```

## Support\Helper\Str\IsPalindrome

Class

Returns `true` if the given string is a palindrome, `false` otherwise.

- **`Phalcon\Support\Helper\Str\IsPalindrome`**

### Method Summary

<ApiItem href="#supporthelperstrispalindrome-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"text","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrispalindrome-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): bool;
```

## Support\Helper\Str\IsUpper

Class

Returns `true` if the given string is in upper case, `false` otherwise.

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\IsUpper`**

### Method Summary

<ApiItem href="#supporthelperstrisupper-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrisupper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): bool;
```

## Support\Helper\Str\KebabCase

Class

Converts strings to kebab-case style

- [`Phalcon\Support\Helper\Str\PascalCase`](#supporthelperstrpascalcase)
- **`Phalcon\Support\Helper\Str\KebabCase`**

### Method Summary

<ApiItem href="#supporthelperstrkebabcase-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"delimiters","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrkebabcase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string|null $delimiters = null
): string;
```

## Support\Helper\Str\Len

Class

Calculates the length of the string using `mb_strlen`

- **`Phalcon\Support\Helper\Str\Len`**

### Method Summary

<ApiItem href="#supporthelperstrlen-__invoke" visibility="public" name="__invoke" returnType="int" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrlen-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): int;
```

## Support\Helper\Str\Lower

Class

Converts a string to lowercase using mbstring

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Lower`**

### Method Summary

<ApiItem href="#supporthelperstrlower-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrlower-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): string;
```

## Support\Helper\Str\PascalCase

Class

Converts strings to PascalCase style

- **`Phalcon\Support\Helper\Str\PascalCase`**
- [`Phalcon\Support\Helper\Str\KebabCase`](#supporthelperstrkebabcase)
- [`Phalcon\Support\Helper\Str\SnakeCase`](#supporthelperstrsnakecase)

### Method Summary

<ApiItem href="#supporthelperstrpascalcase-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"delimiters","default":"null"}]}>
</ApiItem>
<ApiItem href="#supporthelperstrpascalcase-processarray" visibility="protected" name="processArray" returnType="array" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"delimiters","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrpascalcase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string|null $delimiters = null
): string;
```

<h4 id="supporthelperstrpascalcase-processarray"><code>processArray()</code></h4>

```php
protected function processArray(
string $text,
string|null $delimiters = null
): array;
```

## Support\Helper\Str\Prefix

Class

Prefixes the text with the supplied prefix
@todo v7 make text string

- **`Phalcon\Support\Helper\Str\Prefix`**

`Stringable`

### Method Summary

<ApiItem href="#supporthelperstrprefix-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"mixed","name":"text","default":null},{"type":"string","name":"prefix","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrprefix-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $text,
string $prefix
): string;
```

## Support\Helper\Str\Random

Class

Generates a random string based on the given type. Type is one of the
RANDOM_* constants

- **`Phalcon\Support\Helper\Str\Random`**

### Method Summary

<ApiItem href="#supporthelperstrrandom-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"int","name":"type","default":"self::RANDOM_ALNUM"},{"type":"int","name":"length","default":"8"}]}>
</ApiItem>

### Constants

<ApiItem kind="constant" name="RANDOM_ALNUM" type="int" default="0">
Only alphanumeric characters [a-zA-Z0-9]
</ApiItem>
<ApiItem kind="constant" name="RANDOM_ALPHA" type="int" default="1">
Only alphabetical characters [azAZ]
</ApiItem>
<ApiItem kind="constant" name="RANDOM_DISTINCT" type="int" default="5">
Only alphanumeric uppercase characters exclude similar
characters [2345679ACDEFHJKLMNPRSTUVWXYZ]
</ApiItem>
<ApiItem kind="constant" name="RANDOM_HEXDEC" type="int" default="2">
Only hexadecimal characters [0-9a-f]
</ApiItem>
<ApiItem kind="constant" name="RANDOM_NOZERO" type="int" default="4">
Only numbers without 0 [1-9]
</ApiItem>
<ApiItem kind="constant" name="RANDOM_NUMERIC" type="int" default="3">
Only numbers [0-9]
</ApiItem>

### Methods

<h4 id="supporthelperstrrandom-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
int $type = self::RANDOM_ALNUM,
int $length = 8
): string;
```

## Support\Helper\Str\ReduceSlashes

Class

Reduces multiple slashes in a string to single slashes

- **`Phalcon\Support\Helper\Str\ReduceSlashes`**

### Method Summary

<ApiItem href="#supporthelperstrreduceslashes-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrreduceslashes-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): string;
```

## Support\Helper\Str\SnakeCase

Class

Converts strings to snake_case style

- [`Phalcon\Support\Helper\Str\PascalCase`](#supporthelperstrpascalcase)
- **`Phalcon\Support\Helper\Str\SnakeCase`**

### Method Summary

<ApiItem href="#supporthelperstrsnakecase-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"delimiters","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrsnakecase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string|null $delimiters = null
): string;
```

## Support\Helper\Str\StartsWith

Class

Check if a string starts with a given string

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\StartsWith`**

### Method Summary

<ApiItem href="#supporthelperstrstartswith-__invoke" visibility="public" name="__invoke" returnType="bool" params={[{"type":"string","name":"haystack","default":null},{"type":"string","name":"needle","default":null},{"type":"bool","name":"ignoreCase","default":"true"}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrstartswith-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

## Support\Helper\Str\Suffix

Class

Suffixes the text with the supplied suffix

- **`Phalcon\Support\Helper\Str\Suffix`**

`Stringable`

### Method Summary

<ApiItem href="#supporthelperstrsuffix-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"mixed","name":"text","default":null},{"type":"string","name":"suffix","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrsuffix-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $text,
string $suffix
): string;
```

## Support\Helper\Str\Ucwords

Class

Capitalizes the first letter of each word

- **`Phalcon\Support\Helper\Str\Ucwords`**

### Method Summary

<ApiItem href="#supporthelperstrucwords-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrucwords-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): string;
```

## Support\Helper\Str\Uncamelize

Class

Converts strings to non camelized style

- **`Phalcon\Support\Helper\Str\Uncamelize`**

`Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`

### Method Summary

<ApiItem href="#supporthelperstruncamelize-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"delimiter","default":"\"_\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstruncamelize-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $delimiter = "_"
): string;
```

## Support\Helper\Str\Underscore

Class

Makes a text underscored instead of spaced

- **`Phalcon\Support\Helper\Str\Underscore`**

### Method Summary

<ApiItem href="#supporthelperstrunderscore-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrunderscore-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $text ): string;
```

## Support\Helper\Str\Upper

Class

Converts a string to uppercase using mbstring

- [`Phalcon\Support\Helper\Str\AbstractStr`](#supporthelperstrabstractstr)
- **`Phalcon\Support\Helper\Str\Upper`**

### Method Summary

<ApiItem href="#supporthelperstrupper-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="supporthelperstrupper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $encoding = "UTF-8"
): string;
```

## Support\Registry

Final

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

@extends Collection&lt;mixed>

- [`Phalcon\Support\Collection`](#supportcollection)
- **`Phalcon\Support\Registry`**

`Traversable`

### Method Summary

<ApiItem href="#supportregistry-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"data","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#supportregistry-__get" visibility="public" name="__get" returnType="mixed" params={[{"type":"string","name":"element","default":null}]}>
Magic getter to get an element from the collection
</ApiItem>
<ApiItem href="#supportregistry-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Magic isset to check whether an element exists or not
</ApiItem>
<ApiItem href="#supportregistry-__set" visibility="public" name="__set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Magic setter to assign values to an element
</ApiItem>
<ApiItem href="#supportregistry-__unset" visibility="public" name="__unset" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Magic unset to remove an element from the collection
</ApiItem>
<ApiItem href="#supportregistry-clear" visibility="public" name="clear" returnType="void" params={[]}>
Clears the internal collection
</ApiItem>
<ApiItem href="#supportregistry-count" visibility="public" name="count" returnType="int" params={[]}>
Count elements of an object
</ApiItem>
<ApiItem href="#supportregistry-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
Get the element from the collection
</ApiItem>
<ApiItem href="#supportregistry-getiterator" visibility="public" name="getIterator" returnType="Traversable" params={[]}>
Returns the iterator of the class
</ApiItem>
<ApiItem href="#supportregistry-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Determines whether an element is present in the collection.
</ApiItem>
<ApiItem href="#supportregistry-init" visibility="public" name="init" returnType="void" params={[{"type":"array","name":"data","default":"[]"}]}>
Initialize internal array
</ApiItem>
<ApiItem href="#supportregistry-jsonserialize" visibility="public" name="jsonSerialize" returnType="array" params={[]}>
Specify data which should be serialized to JSON
</ApiItem>
<ApiItem href="#supportregistry-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"element","default":null}]}>
Whether a offset exists
</ApiItem>
<ApiItem href="#supportregistry-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"element","default":null}]}>
Offset to retrieve
</ApiItem>
<ApiItem href="#supportregistry-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Offset to set
</ApiItem>
<ApiItem href="#supportregistry-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"element","default":null}]}>
Offset to unset
</ApiItem>
<ApiItem href="#supportregistry-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Delete the element from the collection
</ApiItem>
<ApiItem href="#supportregistry-serialize" visibility="public" name="serialize" returnType="string|null" params={[]}>
String representation of object
</ApiItem>
<ApiItem href="#supportregistry-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Set an element in the collection
</ApiItem>
<ApiItem href="#supportregistry-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the object in an array format
</ApiItem>
<ApiItem href="#supportregistry-tojson" visibility="public" name="toJson" returnType="string" params={[{"type":"int","name":"options","default":null}]}>
Returns the object in a JSON format
</ApiItem>
<ApiItem href="#supportregistry-unserialize" visibility="public" name="unserialize" returnType="void" params={[{"type":"string","name":"serialized","default":null}]}>
Unserializes the object
</ApiItem>

### Methods

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

<h4 id="supportregistry-get"><code>get()</code></h4>

```php
final public function get(
string $element,
mixed $defaultValue = null,
string|null $cast = null
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

<h4 id="supportregistry-offsetexists"><code>offsetExists()</code></h4>

```php
final public function offsetExists( mixed $element ): bool;
```

Whether a offset exists

<h4 id="supportregistry-offsetget"><code>offsetGet()</code></h4>

```php
final public function offsetGet( mixed $element ): mixed;
```

Offset to retrieve

<h4 id="supportregistry-offsetset"><code>offsetSet()</code></h4>

```php
final public function offsetSet(
mixed $element,
mixed $value
): void;
```

Offset to set

<h4 id="supportregistry-offsetunset"><code>offsetUnset()</code></h4>

```php
final public function offsetUnset( mixed $element ): void;
```

Offset to unset

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
final public function toJson( int $options ): string;
```

Returns the object in a JSON format

The default string uses the following options for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT, JSON_UNESCAPED_SLASHES

<h4 id="supportregistry-unserialize"><code>unserialize()</code></h4>

```php
final public function unserialize( string $serialized ): void;
```

Unserializes the object

## Support\Settings

Class

Phalcon\Support\Settings

Provides a PHP-userland layer for reading and overriding the Phalcon
framework's settings (orm.*, db.*, form.*).

get() checks PHP-level overrides first, then falls back to
ini_get("phalcon.&lt;key>") which reads the value configured in php.ini /
.htaccess / per-virtualhost (only available when the C extension is loaded).

set() stores the value in the PHP-level overrides array only. It does NOT
call ini_set(), so the change is confined to this static state and never
modifies the underlying ini configuration. This prevents settings changed
by one project from leaking into another project sharing the same PHP
worker process.

reset() clears only the keys that were previously set via set(), restoring
those keys to their ini_get() fallback values.

- **`Phalcon\Support\Settings`**

### Method Summary

<ApiItem href="#supportsettings-get" visibility="public" name="get" returnType="bool|int|null" params={[{"type":"string","name":"key","default":null}]}>
Returns the value of a known setting.
</ApiItem>
<ApiItem href="#supportsettings-reset" visibility="public" name="reset" returnType="void" params={[]}>
Clears all PHP-level overrides, restoring get() to return ini_get()
</ApiItem>
<ApiItem href="#supportsettings-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"key","default":null},{"type":"bool|int","name":"value","default":null}]}>
Overrides a setting at the PHP level.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="overrides" type="array&lt;string, bool|int&gt;" default="[]">
PHP-level overrides. Keys stored here take priority over ini_get().
</ApiItem>

### Methods

<h4 id="supportsettings-get"><code>get()</code></h4>

```php
public static function get( string $key ): bool|int|null;
```

Returns the value of a known setting.

Resolution order:
  1. PHP-level override (set via Settings::set())
  2. ini_get("phalcon.&lt;key>") - the ini value, honoring php.ini / .htaccess
     (only available when the Phalcon C extension is loaded)
  3. Hardcoded default - mirrors the C extension's compiled-in defaults
  4. null - for unknown keys

<h4 id="supportsettings-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Clears all PHP-level overrides, restoring get() to return ini_get()
fallback values (as configured in php.ini or .htaccess).

<h4 id="supportsettings-set"><code>set()</code></h4>

```php
public static function set(
string $key,
bool|int $value
): void;
```

Overrides a setting at the PHP level.

Does NOT call ini_set(), so the ini configuration is not modified and
no other project sharing this PHP process is affected.

Unknown keys are silently ignored.

## Support\Traits\ConfigTrait

Trait

- **`Phalcon\Support\Traits\ConfigTrait`**

`Phalcon\Config\ConfigInterface` · `Throwable`

[`Phalcon\Auth\ManagerFactory`](../phalcon_auth/#authmanagerfactory)

### Method Summary

<ApiItem href="#supporttraitsconfigtrait-checkconfig" visibility="protected" name="checkConfig" returnType="array" params={[{"type":"mixed","name":"config","default":null}]}>
Normalizes the factory configuration. The parameter is `mixed` on
</ApiItem>
<ApiItem href="#supporttraitsconfigtrait-checkconfigelement" visibility="protected" name="checkConfigElement" returnType="array" params={[{"type":"array","name":"config","default":null},{"type":"string","name":"element","default":null}]}>
Checks if the config has a specific element
</ApiItem>
<ApiItem href="#supporttraitsconfigtrait-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
Returns the exception class for the factory
</ApiItem>

### Methods

<h4 id="supporttraitsconfigtrait-checkconfig"><code>checkConfig()</code></h4>

```php
protected function checkConfig( mixed $config ): array;
```

Normalizes the factory configuration. The parameter is `mixed` on
purpose: anything that is neither an array nor a `ConfigInterface` is
rejected here at runtime.

<h4 id="supporttraitsconfigtrait-checkconfigelement"><code>checkConfigElement()</code></h4>

```php
protected function checkConfigElement(
array $config,
string $element
): array;
```

Checks if the config has a specific element

<h4 id="supporttraitsconfigtrait-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
abstract protected function getExceptionClass(): string;
```

Returns the exception class for the factory

## Support\Traits\FilePathTrait

Trait

- **`Phalcon\Support\Traits\FilePathTrait`**

[`Phalcon\Mvc\Model\MetaData\Stream`](../phalcon_mvc/#mvcmodelmetadatastream) · [`Phalcon\Mvc\View\Engine\Volt\Compiler`](../phalcon_mvc/#mvcviewenginevoltcompiler) · [`Phalcon\Storage\Adapter\Stream`](../phalcon_storage/#storageadapterstream)

### Method Summary

<ApiItem href="#supporttraitsfilepathtrait-preparevirtualpath" visibility="public" name="prepareVirtualPath" returnType="string" params={[{"type":"string","name":"key","default":null},{"type":"string","name":"separator","default":"\"_\""}]}>
</ApiItem>

### Methods

<h4 id="supporttraitsfilepathtrait-preparevirtualpath"><code>prepareVirtualPath()</code></h4>

```php
public function prepareVirtualPath(
string $key,
string $separator = "_"
): string;
```

## Support\Version

Class

This class allows to get the installed version of the framework

- **`Phalcon\Support\Version`**

### Method Summary

<ApiItem href="#supportversion-get" visibility="public" name="get" returnType="string" params={[]}>
Returns the active version (string)
</ApiItem>
<ApiItem href="#supportversion-getid" visibility="public" name="getId" returnType="string" params={[]}>
Returns the numeric active version
</ApiItem>
<ApiItem href="#supportversion-getpart" visibility="public" name="getPart" returnType="string" params={[{"type":"int","name":"part","default":null}]}>
Returns a specific part of the version. If the wrong parameter is passed
</ApiItem>
<ApiItem href="#supportversion-getspecial" visibility="protected" name="getSpecial" returnType="string" params={[{"type":"int","name":"special","default":null}]}>
Translates a number to a special release.
</ApiItem>
<ApiItem href="#supportversion-getversion" visibility="protected" name="getVersion" returnType="array" params={[]}>
Area where the version number is set. The format is as follows:
</ApiItem>

### Constants

<ApiItem kind="constant" name="VERSION_MAJOR" type="int" default="0">
The constant referencing the major version. Returns 0

```php
echo (new Phalcon\Support\Version())
     ->getPart(Phalcon\Support\Version::VERSION_MAJOR);
```
</ApiItem>
<ApiItem kind="constant" name="VERSION_MEDIUM" type="int" default="1">
The constant referencing the major version. Returns 1

```php
echo (new Phalcon\Support\Version())
     ->getPart(Phalcon\Support\Version::VERSION_MEDIUM);
```
</ApiItem>
<ApiItem kind="constant" name="VERSION_MINOR" type="int" default="2">
The constant referencing the major version. Returns 2

```php
echo (new Phalcon\Support\Version())
     ->getPart(Phalcon\Support\Version::VERSION_MINOR);
```
</ApiItem>
<ApiItem kind="constant" name="VERSION_SPECIAL" type="int" default="3">
The constant referencing the major version. Returns 3

```php
echo (new Phalcon\Support\Version())
     ->getPart(Phalcon\Support\Version::VERSION_SPECIAL);
```
</ApiItem>
<ApiItem kind="constant" name="VERSION_SPECIAL_NUMBER" type="int" default="4">
The constant referencing the major version. Returns 4

```php
echo (new Phalcon\Support\Version())
     ->getPart(Phalcon\Support\Version::VERSION_SPECIAL_NUMBER);
```
</ApiItem>

### Methods

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

<h4 id="supportversion-getspecial"><code>getSpecial()</code></h4>

```php
final protected function getSpecial( int $special ): string;
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

Source: https://docs.phalcon.io/6.0/api/phalcon_support/index.mdx
