---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Annotations\AdapterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/AdapterFactory.php){ .src-btn }

Factory to create Annotations adapters

@property SerializerFactory $serializerFactory

<div class="api-tree" markdown>

- **`Phalcon\Annotations\AdapterFactory`**

</div>

__Uses__ `Exception` · `Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Apcu` · `Phalcon\Annotations\Adapter\Libmemcached` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Adapter\Redis` · `Phalcon\Annotations\Adapter\Stream` · `Phalcon\Annotations\Adapter\Weak` · `Phalcon\Annotations\Parser\Exception` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Traits\Factory\FactoryTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">SerializerFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span></span>)</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#annotationsadapterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#annotationsadapterfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#annotationsadapterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #annotationsadapterfactory-__construct }

```php
public function __construct(
    SerializerFactory $factory,
    array $services = []
);
```

AdapterFactory constructor.

#### `newInstance()` { #annotationsadapterfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #annotationsadapterfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #annotationsadapterfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Annotations\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/AdapterInterface.php){ .src-btn }

This interface must be implemented by adapters in Phalcon\Components\Attributes

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AdapterInterface`](phalcon_storage.md#storageadapteradapterinterface)
    - **`Phalcon\Annotations\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Storage\Adapter\AdapterInterface`
{ .api-uses }


## Annotations\Adapter\Apcu

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/Apcu.php){ .src-btn }

Stores the parsed annotations in apcu.

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Apcu`](phalcon_storage.md#storageadapterapcu)
        - **`Phalcon\Annotations\Adapter\Apcu`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

</div>

__Uses__ `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Apcu`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterapcu-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `get()` { #annotationsadapterapcu-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```


## Annotations\Adapter\Libmemcached

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/Libmemcached.php){ .src-btn }

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Libmemcached`](phalcon_storage.md#storageadapterlibmemcached)
        - **`Phalcon\Annotations\Adapter\Libmemcached`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

</div>

__Uses__ `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Libmemcached`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterlibmemcached-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `get()` { #annotationsadapterlibmemcached-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```


## Annotations\Adapter\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/Memory.php){ .src-btn }

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Memory`](phalcon_storage.md#storageadaptermemory)
        - **`Phalcon\Annotations\Adapter\Memory`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

</div>

__Uses__ `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Memory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadaptermemory-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `get()` { #annotationsadaptermemory-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```


## Annotations\Adapter\Redis

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/Redis.php){ .src-btn }

Stores the parsed annotations in redis.

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Redis`](phalcon_storage.md#storageadapterredis)
        - **`Phalcon\Annotations\Adapter\Redis`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

</div>

__Uses__ `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Redis`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterredis-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `get()` { #annotationsadapterredis-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```


## Annotations\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/Stream.php){ .src-btn }

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Stream`](phalcon_storage.md#storageadapterstream)
        - **`Phalcon\Annotations\Adapter\Stream`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

</div>

__Uses__ `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Stream`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterstream-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `get()` { #annotationsadapterstream-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```


## Annotations\Adapter\Weak

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Adapter/Weak.php){ .src-btn }

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

<div class="api-tree" markdown>

- [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
    - [`Phalcon\Storage\Adapter\Weak`](phalcon_storage.md#storageadapterweak)
        - **`Phalcon\Annotations\Adapter\Weak`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

</div>

__Uses__ `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Weak`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterweak-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `get()` { #annotationsadapterweak-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```


## Annotations\Annotations

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Annotations.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Annotations`**

</div>

__Uses__ `Phalcon\Annotations\Parser\Collection` · `Phalcon\Annotations\Parser\Reader` · `Phalcon\Annotations\Parser\ReaderInterface` · `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsannotations-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AdapterInterface</span> <span class="sv">$adapter</span> )</code>
</a>
<a class="api-item" href="#annotationsannotations-get">
<code class="vis vis-public">public</code>
<code class="ret">Reflection</code>
<code class="sig"><span class="sf">get</span>( <span class="st">mixed</span> <span class="sv">$className</span> )</code>
<span class="desc">Parses or retrieves all the attributes found in a class</span>
</a>
<a class="api-item" href="#annotationsannotations-getconstant">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getConstant</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$constantName</span></span>)</code>
<span class="desc">Returns the attributes found in a specific constant</span>
</a>
<a class="api-item" href="#annotationsannotations-getconstants">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getConstants</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the attributes found in all the class&#039; constants</span>
</a>
<a class="api-item" href="#annotationsannotations-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getMethod</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$methodName</span></span>)</code>
<span class="desc">Returns the attributes found in a specific method</span>
</a>
<a class="api-item" href="#annotationsannotations-getmethods">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMethods</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the attributes found in all the class&#039; methods</span>
</a>
<a class="api-item" href="#annotationsannotations-getproperties">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getProperties</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the attributes found in all the class&#039; properties</span>
</a>
<a class="api-item" href="#annotationsannotations-getproperty">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$propertyName</span></span>)</code>
<span class="desc">Returns the attributes found in a specific property</span>
</a>
<a class="api-item" href="#annotationsannotations-getreader">
<code class="vis vis-public">public</code>
<code class="ret">ReaderInterface</code>
<code class="sig"><span class="sf">getReader</span>()</code>
<span class="desc">Returns the annotation reader</span>
</a>
<a class="api-item" href="#annotationsannotations-read">
<code class="vis vis-public">public</code>
<code class="ret">bool|Reflection</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Reads parsed annotations from memory</span>
</a>
<a class="api-item" href="#annotationsannotations-setreader">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setReader</span>( <span class="st">ReaderInterface</span> <span class="sv">$reader</span> )</code>
<span class="desc">Sets the attributes parser</span>
</a>
<a class="api-item" href="#annotationsannotations-write">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">Reflection</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Writes parsed annotations to memory</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">CACHE_PREFIX</span><span class="sm"> = &quot;_PHATN&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sv">$adapter</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Reader|null</code>
<code class="sig"><span class="sv">$reader</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 12</div>

#### `__construct()` { #annotationsannotations-__construct }

```php
public function __construct( AdapterInterface $adapter );
```

#### `get()` { #annotationsannotations-get }

```php
public function get( mixed $className ): Reflection;
```

Parses or retrieves all the attributes found in a class

#### `getConstant()` { #annotationsannotations-getconstant }

```php
public function getConstant(
    string $className,
    string $constantName
): Collection;
```

Returns the attributes found in a specific constant

#### `getConstants()` { #annotationsannotations-getconstants }

```php
public function getConstants( string $className ): array;
```

Returns the attributes found in all the class' constants

#### `getMethod()` { #annotationsannotations-getmethod }

```php
public function getMethod(
    string $className,
    string $methodName
): Collection;
```

Returns the attributes found in a specific method

#### `getMethods()` { #annotationsannotations-getmethods }

```php
public function getMethods( string $className ): array;
```

Returns the attributes found in all the class' methods

#### `getProperties()` { #annotationsannotations-getproperties }

```php
public function getProperties( string $className ): array;
```

Returns the attributes found in all the class' properties

#### `getProperty()` { #annotationsannotations-getproperty }

```php
public function getProperty(
    string $className,
    string $propertyName
): Collection;
```

Returns the attributes found in a specific property

#### `getReader()` { #annotationsannotations-getreader }

```php
public function getReader(): ReaderInterface;
```

Returns the annotation reader

#### `read()` { #annotationsannotations-read }

```php
public function read( string $key ): bool|Reflection;
```

Reads parsed annotations from memory

#### `setReader()` { #annotationsannotations-setreader }

```php
public function setReader( ReaderInterface $reader ): void;
```

Sets the attributes parser

#### `write()` { #annotationsannotations-write }

```php
public function write(
    string $key,
    Reflection $data
): bool;
```

Writes parsed annotations to memory


## Annotations\Models\MetaData\Column

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Models/MetaData/Column.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Models\MetaData\Column`**

</div>

__Uses__ `Attribute`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsmodelsmetadatacolumn-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$column</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = &quot;string&quot;</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$length</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$nullable</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$skipOnInsert</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$skipOnUpdate</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$allowEmptyString</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$default</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$allowEmptyString</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$column</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$default</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sv">$length</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$nullable</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$skipOnInsert</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$skipOnUpdate</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;string&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsmodelsmetadatacolumn-__construct }

```php
public function __construct(
    string|null $column = null,
    string $type = "string",
    int|null $length = null,
    bool $nullable = false,
    bool $skipOnInsert = false,
    bool $skipOnUpdate = false,
    bool $allowEmptyString = false,
    mixed $default = null
);
```


## Annotations\Models\MetaData\Identity

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Models/MetaData/Identity.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Models\MetaData\Identity`**

</div>

__Uses__ `Attribute`
{ .api-uses }


## Annotations\Models\MetaData\Primary

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Models/MetaData/Primary.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Models\MetaData\Primary`**

</div>

__Uses__ `Attribute`
{ .api-uses }


## Annotations\Models\MetaData\Source

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Models/MetaData/Source.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Models\MetaData\Source`**

</div>

__Uses__ `Attribute`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsmodelsmetadatasource-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$table</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$table</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsmodelsmetadatasource-__construct }

```php
public function __construct( string $table );
```


## Annotations\Parser\Annotation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Parser/Annotation.php){ .src-btn }

Represents a single attribute in an attributes collection

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Parser\Annotation`**

</div>

__Uses__ `ReflectionAttribute`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsparserannotation-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">ReflectionAttribute</span> <span class="sv">$reflectionData</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#annotationsparserannotation-getargument">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getArgument</span>( <span class="st">int|string</span> <span class="sv">$position</span> )</code>
<span class="desc">Returns an argument in a specific position</span>
</a>
<a class="api-item" href="#annotationsparserannotation-getarguments">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getArguments</span>()</code>
<span class="desc">Returns the expression arguments</span>
</a>
<a class="api-item" href="#annotationsparserannotation-getcleanname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCleanName</span>()</code>
<span class="desc">Returns the attribute&#039;s base name</span>
</a>
<a class="api-item" href="#annotationsparserannotation-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the attribute&#039;s name</span>
</a>
<a class="api-item" href="#annotationsparserannotation-getnamedargument">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getNamedArgument</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a named argument</span>
</a>
<a class="api-item" href="#annotationsparserannotation-getnamedparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getNamedParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a named parameter</span>
</a>
<a class="api-item" href="#annotationsparserannotation-hasargument">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasArgument</span>( <span class="st">int|string</span> <span class="sv">$position</span> )</code>
<span class="desc">Returns an argument in a specific position</span>
</a>
<a class="api-item" href="#annotationsparserannotation-numberarguments">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">numberArguments</span>()</code>
<span class="desc">Returns the number of arguments that the attribute has</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$arguments</span><span class="sm"> = []</span></code>
<span class="desc">Attribute Arguments</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span></code>
<span class="desc">Attribute Name</span>
</div>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #annotationsparserannotation-__construct }

```php
public function __construct( ReflectionAttribute $reflectionData );
```

Constructor

#### `getArgument()` { #annotationsparserannotation-getargument }

```php
public function getArgument( int|string $position ): mixed;
```

Returns an argument in a specific position

#### `getArguments()` { #annotationsparserannotation-getarguments }

```php
public function getArguments(): array;
```

Returns the expression arguments

#### `getCleanName()` { #annotationsparserannotation-getcleanname }

```php
public function getCleanName(): string;
```

Returns the attribute's base name

#### `getName()` { #annotationsparserannotation-getname }

```php
public function getName(): string;
```

Returns the attribute's name

#### `getNamedArgument()` { #annotationsparserannotation-getnamedargument }

```php
public function getNamedArgument( string $name ): mixed;
```

Returns a named argument

#### `getNamedParameter()` { #annotationsparserannotation-getnamedparameter }

```php
public function getNamedParameter( string $name ): mixed;
```

Returns a named parameter

#### `hasArgument()` { #annotationsparserannotation-hasargument }

```php
public function hasArgument( int|string $position ): bool;
```

Returns an argument in a specific position

#### `numberArguments()` { #annotationsparserannotation-numberarguments }

```php
public function numberArguments(): int;
```

Returns the number of arguments that the attribute has


## Annotations\Parser\Collection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Parser/Collection.php){ .src-btn }

Represents a collection of annotations. This class allows to traverse a group
of annotations easily

```php
// Traverse annotations
foreach ($classAnnotations as $annotation) {
    echo "Name=", $annotation->getName(), PHP_EOL;
}

// Check if the annotations has a specific
var_dump($classAnnotations->has("Cacheable"));

// Get an specific annotation in the collection
$annotation = $classAnnotations->get("Cacheable");

@template TKey of int
@template TValue of Annotation
```

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Parser\Collection`** - implements `\IteratorAggregate`

</div>

__Uses__ `ArrayIterator` · `IteratorAggregate` · `Traversable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsparsercollection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$reflectionData</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#annotationsparsercollection-get">
<code class="vis vis-public">public</code>
<code class="ret">Annotation</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the first annotation that match a name</span>
</a>
<a class="api-item" href="#annotationsparsercollection-getall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAll</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns all the annotations that match a name</span>
</a>
<a class="api-item" href="#annotationsparsercollection-getannotations">
<code class="vis vis-public">public</code>
<code class="ret">Traversable</code>
<code class="sig"><span class="sf">getAnnotations</span>()</code>
</a>
<a class="api-item" href="#annotationsparsercollection-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">Traversable</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
</a>
<a class="api-item" href="#annotationsparsercollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if an annotation exists in a collection</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$annotations</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$position</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #annotationsparsercollection-__construct }

```php
public function __construct( array $reflectionData = [] );
```

Constructor

#### `get()` { #annotationsparsercollection-get }

```php
public function get( string $name ): Annotation;
```

Returns the first annotation that match a name

#### `getAll()` { #annotationsparsercollection-getall }

```php
public function getAll( string $name ): array;
```

Returns all the annotations that match a name

#### `getAnnotations()` { #annotationsparsercollection-getannotations }

```php
public function getAnnotations(): Traversable;
```

#### `getIterator()` { #annotationsparsercollection-getiterator }

```php
public function getIterator(): Traversable;
```

#### `has()` { #annotationsparsercollection-has }

```php
public function has( string $name ): bool;
```

Check if an annotation exists in a collection


## Annotations\Parser\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Parser/Exception.php){ .src-btn }

Class for exceptions thrown by Phalcon\Annotations

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Annotations\Parser\Exception`**

</div>


## Annotations\Parser\Reader

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Parser/Reader.php){ .src-btn }

Parses classes returning an array with the found annotations

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Parser\Reader`** - implements [`Phalcon\Annotations\Parser\ReaderInterface`](#annotationsparserreaderinterface)

</div>

__Uses__ `ReflectionClass` · `ReflectionException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsparserreader-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parse</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Reads annotations from the class, its methods and/or properties</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `parse()` { #annotationsparserreader-parse }

```php
public function parse( string $className ): array;
```

Reads annotations from the class, its methods and/or properties


## Annotations\Parser\ReaderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Parser/ReaderInterface.php){ .src-btn }

Parses attributes returning an array with the found attributes

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Parser\ReaderInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsparserreaderinterface-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parse</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Reads attributes from the class, properties and methods</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `parse()` { #annotationsparserreaderinterface-parse }

```php
public function parse( string $className ): array;
```

Reads attributes from the class, properties and methods


## Annotations\Parser\Reflection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Parser/Reflection.php){ .src-btn }

Allows to manipulate the annotations reflection in an OO manner

```php
use Phalcon\Components\Annotations\Reader;
use Phalcon\Components\Annotations\Reflection;

// Parse the annotations in a class
$reader = new Reader();
$parsing = $reader->parse("MyComponent");

// Create the reflection
$reflection = new Reflection($parsing);

// Get the annotations from the class
$classAnnotations = $reflection->getClassAnnotations();
```

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Parser\Reflection`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsparserreflection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$reflectionData</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#annotationsparserreflection-getclassannotations">
<code class="vis vis-public">public</code>
<code class="ret">Collection|null</code>
<code class="sig"><span class="sf">getClassAnnotations</span>()</code>
<span class="desc">Returns the annotations found in the class docblock</span>
</a>
<a class="api-item" href="#annotationsparserreflection-getconstantsannotations">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getConstantsAnnotations</span>()</code>
<span class="desc">Returns the annotations found as constants</span>
</a>
<a class="api-item" href="#annotationsparserreflection-getmethodsannotations">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMethodsAnnotations</span>()</code>
<span class="desc">Returns the annotations found at methods</span>
</a>
<a class="api-item" href="#annotationsparserreflection-getpropertiesannotations">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getPropertiesAnnotations</span>()</code>
<span class="desc">Returns the annotations found at properties</span>
</a>
<a class="api-item" href="#annotationsparserreflection-getreflectiondata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getReflectionData</span>()</code>
<span class="desc">Returns the raw parsing intermediate definitions used to construct the</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Collection|null</code>
<code class="sig"><span class="sv">$classAnnotations</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$constantAnnotations</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$methodAnnotations</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$propertyAnnotations</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$reflectionData</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #annotationsparserreflection-__construct }

```php
public function __construct( array $reflectionData = [] );
```

Constructor

#### `getClassAnnotations()` { #annotationsparserreflection-getclassannotations }

```php
public function getClassAnnotations(): Collection|null;
```

Returns the annotations found in the class docblock

#### `getConstantsAnnotations()` { #annotationsparserreflection-getconstantsannotations }

```php
public function getConstantsAnnotations(): array;
```

Returns the annotations found as constants

#### `getMethodsAnnotations()` { #annotationsparserreflection-getmethodsannotations }

```php
public function getMethodsAnnotations(): array;
```

Returns the annotations found at methods

#### `getPropertiesAnnotations()` { #annotationsparserreflection-getpropertiesannotations }

```php
public function getPropertiesAnnotations(): array;
```

Returns the annotations found at properties

#### `getReflectionData()` { #annotationsparserreflection-getreflectiondata }

```php
public function getReflectionData(): array;
```

Returns the raw parsing intermediate definitions used to construct the
reflection


## Annotations\Router\Connect

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Connect.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Connect`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterconnect-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterconnect-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Delete

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Delete.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Delete`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterdelete-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterdelete-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Get

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Get.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Get`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterget-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterget-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Head

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Head.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Head`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterhead-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterhead-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Options

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Options.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Options`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouteroptions-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouteroptions-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Patch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Patch.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Patch`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterpatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterpatch-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Post

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Post.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Post`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterpost-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterpost-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Purge

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Purge.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Purge`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterpurge-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterpurge-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Put

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Put.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Put`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterput-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterput-__construct }

```php
public function __construct( mixed $params );
```


## Annotations\Router\Route

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Route.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Router\Route`**
    - [`Phalcon\Annotations\Router\Connect`](#annotationsrouterconnect)
    - [`Phalcon\Annotations\Router\Delete`](#annotationsrouterdelete)
    - [`Phalcon\Annotations\Router\Get`](#annotationsrouterget)
    - [`Phalcon\Annotations\Router\Head`](#annotationsrouterhead)
    - [`Phalcon\Annotations\Router\Options`](#annotationsrouteroptions)
    - [`Phalcon\Annotations\Router\Patch`](#annotationsrouterpatch)
    - [`Phalcon\Annotations\Router\Post`](#annotationsrouterpost)
    - [`Phalcon\Annotations\Router\Purge`](#annotationsrouterpurge)
    - [`Phalcon\Annotations\Router\Put`](#annotationsrouterput)
    - [`Phalcon\Annotations\Router\Trace`](#annotationsroutertrace)

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterroute-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$route</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$methods</span><span class="sm"> = [...]</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$paths</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$converters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array|string|null</span> <span class="sv">$beforeMatch</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig"><span class="sv">$beforeMatch</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$converters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">array|string</code>
<code class="sig"><span class="sv">$methods</span><span class="sm"> = [...]</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$paths</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$route</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterroute-__construct }

```php
public function __construct(
    string $route,
    array|string $methods = [...],
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\RoutePrefix

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/RoutePrefix.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Router\RoutePrefix`**

</div>

__Uses__ `Attribute`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsrouterrouteprefix-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$prefix</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsrouterrouteprefix-__construct }

```php
public function __construct( string $prefix );
```


## Annotations\Router\Trace

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Annotations/Router/Trace.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
    - **`Phalcon\Annotations\Router\Trace`**

</div>

__Uses__ `Attribute` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsroutertrace-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$params</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsroutertrace-__construct }

```php
public function __construct( mixed $params );
```
