---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Annotations\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/AbstractAdapter.zep){ .src-btn }

This is the base class for Phalcon\Annotations adapters

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Adapter\AbstractAdapter`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)
    - [`Phalcon\Annotations\Adapter\Apcu`](#annotationsadapterapcu)
    - [`Phalcon\Annotations\Adapter\Memory`](#annotationsadaptermemory)
    - [`Phalcon\Annotations\Adapter\Stream`](#annotationsadapterstream)

</div>

__Uses__ `Phalcon\Annotations\Collection` · `Phalcon\Annotations\Exception` · `Phalcon\Annotations\Reader` · `Phalcon\Annotations\ReaderInterface` · `Phalcon\Annotations\Reflection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterabstractadapter-get">
<code class="vis vis-public">public</code>
<code class="ret">Reflection</code>
<code class="sig"><span class="sf">get</span>( <span class="st">mixed</span> <span class="sv">$className</span> )</code>
<span class="desc">Parses or retrieves all the annotations found in a class</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getannotationslimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getAnnotationsLimit</span>()</code>
<span class="desc">Returns the configured annotations-cache cap (0 = unlimited).</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getconstant">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getConstant</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$constantName</span></span>)</code>
<span class="desc">Returns the annotations found in a specific constant</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getconstants">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getConstants</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the annotations found in all the class&#039; constants</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getMethod</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$methodName</span></span>)</code>
<span class="desc">Returns the annotations found in a specific method</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getmethods">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMethods</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the annotations found in all the class&#039; methods</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getproperties">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getProperties</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the annotations found in all the class&#039; properties</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getproperty">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$propertyName</span></span>)</code>
<span class="desc">Returns the annotations found in a specific property</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-getreader">
<code class="vis vis-public">public</code>
<code class="ret">ReaderInterface</code>
<code class="sig"><span class="sf">getReader</span>()</code>
<span class="desc">Returns the annotation reader</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-setannotationslimit">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">setAnnotationsLimit</span>( <span class="st">int</span> <span class="sv">$annotationsLimit</span> )</code>
<span class="desc">Caps the number of class entries retained in the annotations</span>
</a>
<a class="api-item" href="#annotationsadapterabstractadapter-setreader">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">setReader</span>( <span class="st">ReaderInterface</span> <span class="sv">$reader</span> )</code>
<span class="desc">Sets the annotations parser</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$annotations</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$annotationsLimit</span><span class="sm"> = 0</span></code>
<span class="desc">Maximum number of class annotation entries retained in the
in-memory cache. 0 (default) keeps the original unbounded
behavior; a positive value clears the cache when adding a new
class would exceed it.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Reader</code>
<code class="sig"><span class="sv">$reader</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `get()` { #annotationsadapterabstractadapter-get }

```php
public function get( mixed $className ): Reflection;
```

Parses or retrieves all the annotations found in a class

#### `getAnnotationsLimit()` { #annotationsadapterabstractadapter-getannotationslimit }

```php
public function getAnnotationsLimit(): int;
```

Returns the configured annotations-cache cap (0 = unlimited).
See setAnnotationsLimit().

#### `getConstant()` { #annotationsadapterabstractadapter-getconstant }

```php
public function getConstant(
    string $className,
    string $constantName
): Collection;
```

Returns the annotations found in a specific constant

#### `getConstants()` { #annotationsadapterabstractadapter-getconstants }

```php
public function getConstants( string $className ): array;
```

Returns the annotations found in all the class' constants

#### `getMethod()` { #annotationsadapterabstractadapter-getmethod }

```php
public function getMethod(
    string $className,
    string $methodName
): Collection;
```

Returns the annotations found in a specific method

#### `getMethods()` { #annotationsadapterabstractadapter-getmethods }

```php
public function getMethods( string $className ): array;
```

Returns the annotations found in all the class' methods

#### `getProperties()` { #annotationsadapterabstractadapter-getproperties }

```php
public function getProperties( string $className ): array;
```

Returns the annotations found in all the class' properties

#### `getProperty()` { #annotationsadapterabstractadapter-getproperty }

```php
public function getProperty(
    string $className,
    string $propertyName
): Collection;
```

Returns the annotations found in a specific property

#### `getReader()` { #annotationsadapterabstractadapter-getreader }

```php
public function getReader(): ReaderInterface;
```

Returns the annotation reader

#### `setAnnotationsLimit()` { #annotationsadapterabstractadapter-setannotationslimit }

```php
public function setAnnotationsLimit( int $annotationsLimit );
```

Caps the number of class entries retained in the annotations
cache. 0 disables the cap (the default; preserves the original
unbounded behavior). When the cap is exceeded, the cache is
cleared and repopulated on subsequent reads.

#### `setReader()` { #annotationsadapterabstractadapter-setreader }

```php
public function setReader( ReaderInterface $reader );
```

Sets the annotations parser


## Annotations\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/AdapterInterface.zep){ .src-btn }

This interface must be implemented by adapters in Phalcon\Annotations

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Annotations\Collection` · `Phalcon\Annotations\ReaderInterface` · `Phalcon\Annotations\Reflection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapteradapterinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">Reflection</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Parses or retrieves all the annotations found in a class</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getconstant">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getConstant</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$constantName</span></span>)</code>
<span class="desc">Returns the annotations found in a specific constant</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getconstants">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getConstants</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the annotations found in all the class&#039; constants</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getMethod</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$methodName</span></span>)</code>
<span class="desc">Returns the annotations found in a specific method</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getmethods">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMethods</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the annotations found in all the class&#039; methods</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getproperties">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getProperties</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Returns the annotations found in all the class&#039; methods</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getproperty">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$propertyName</span></span>)</code>
<span class="desc">Returns the annotations found in a specific property</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-getreader">
<code class="vis vis-public">public</code>
<code class="ret">ReaderInterface</code>
<code class="sig"><span class="sf">getReader</span>()</code>
<span class="desc">Returns the annotation reader</span>
</a>
<a class="api-item" href="#annotationsadapteradapterinterface-setreader">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">setReader</span>( <span class="st">ReaderInterface</span> <span class="sv">$reader</span> )</code>
<span class="desc">Sets the annotations parser</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `get()` { #annotationsadapteradapterinterface-get }

```php
public function get( string $className ): Reflection;
```

Parses or retrieves all the annotations found in a class

#### `getConstant()` { #annotationsadapteradapterinterface-getconstant }

```php
public function getConstant(
    string $className,
    string $constantName
): Collection;
```

Returns the annotations found in a specific constant

#### `getConstants()` { #annotationsadapteradapterinterface-getconstants }

```php
public function getConstants( string $className ): array;
```

Returns the annotations found in all the class' constants

#### `getMethod()` { #annotationsadapteradapterinterface-getmethod }

```php
public function getMethod(
    string $className,
    string $methodName
): Collection;
```

Returns the annotations found in a specific method

#### `getMethods()` { #annotationsadapteradapterinterface-getmethods }

```php
public function getMethods( string $className ): array;
```

Returns the annotations found in all the class' methods

#### `getProperties()` { #annotationsadapteradapterinterface-getproperties }

```php
public function getProperties( string $className ): array;
```

Returns the annotations found in all the class' methods

#### `getProperty()` { #annotationsadapteradapterinterface-getproperty }

```php
public function getProperty(
    string $className,
    string $propertyName
): Collection;
```

Returns the annotations found in a specific property

#### `getReader()` { #annotationsadapteradapterinterface-getreader }

```php
public function getReader(): ReaderInterface;
```

Returns the annotation reader

#### `setReader()` { #annotationsadapteradapterinterface-setreader }

```php
public function setReader( ReaderInterface $reader );
```

Sets the annotations parser


## Annotations\Adapter\Apcu

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/Apcu.zep){ .src-btn }

Stores the parsed annotations in APCu. This adapter is suitable for production

```php
use Phalcon\Annotations\Adapter\Apcu;

$annotations = new Apcu();
```

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Adapter\AbstractAdapter`](#annotationsadapterabstractadapter)
    - **`Phalcon\Annotations\Adapter\Apcu`**

</div>

__Uses__ `Phalcon\Annotations\Reflection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterapcu-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Phalcon\Annotations\Adapter\Apcu constructor</span>
</a>
<a class="api-item" href="#annotationsadapterapcu-read">
<code class="vis vis-public">public</code>
<code class="ret">Reflection|bool</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Reads parsed annotations from APCu</span>
</a>
<a class="api-item" href="#annotationsadapterapcu-write">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">Reflection</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Writes parsed annotations to APCu</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$ttl</span><span class="sm"> = 172800</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #annotationsadapterapcu-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Annotations\Adapter\Apcu constructor

#### `read()` { #annotationsadapterapcu-read }

```php
public function read( string $key ): Reflection|bool;
```

Reads parsed annotations from APCu

#### `write()` { #annotationsadapterapcu-write }

```php
public function write(
    string $key,
    Reflection $data
): bool;
```

Writes parsed annotations to APCu


## Annotations\Adapter\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/Memory.zep){ .src-btn }

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Adapter\AbstractAdapter`](#annotationsadapterabstractadapter)
    - **`Phalcon\Annotations\Adapter\Memory`**

</div>

__Uses__ `Phalcon\Annotations\Reflection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadaptermemory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#annotationsadaptermemory-read">
<code class="vis vis-public">public</code>
<code class="ret">Reflection|bool</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Reads parsed annotations from memory</span>
</a>
<a class="api-item" href="#annotationsadaptermemory-write">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">Reflection</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Writes parsed annotations to memory</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$data</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #annotationsadaptermemory-__construct }

```php
public function __construct( array $options = [] );
```

#### `read()` { #annotationsadaptermemory-read }

```php
public function read( string $key ): Reflection|bool;
```

Reads parsed annotations from memory

#### `write()` { #annotationsadaptermemory-write }

```php
public function write(
    string $key,
    Reflection $data
): void;
```

Writes parsed annotations to memory


## Annotations\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/Stream.zep){ .src-btn }

Stores the parsed annotations in files. This adapter is suitable for production

```php
use Phalcon\Annotations\Adapter\Stream;

$annotations = new Stream(
    [
        "annotationsDir" => "app/cache/annotations/",
    ]
);
```

<div class="api-tree" markdown>

- [`Phalcon\Annotations\Adapter\AbstractAdapter`](#annotationsadapterabstractadapter)
    - **`Phalcon\Annotations\Adapter\Stream`**

</div>

__Uses__ `Phalcon\Annotations\Exception` · `Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable` · `Phalcon\Annotations\Exceptions\CannotReadAnnotationData` · `Phalcon\Annotations\Reflection` · `Phalcon\Traits\Php\FileTrait` · `RuntimeException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsadapterstream-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Phalcon\Annotations\Adapter\Stream constructor</span>
</a>
<a class="api-item" href="#annotationsadapterstream-read">
<code class="vis vis-public">public</code>
<code class="ret">Reflection|bool|int</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Reads parsed annotations from files</span>
</a>
<a class="api-item" href="#annotationsadapterstream-write">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">Reflection</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Writes parsed annotations to files</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$annotationsDir</span><span class="sm"> = &quot;./&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #annotationsadapterstream-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Annotations\Adapter\Stream constructor

#### `read()` { #annotationsadapterstream-read }

```php
public function read( string $key ): Reflection|bool|int;
```

Reads parsed annotations from files

#### `write()` { #annotationsadapterstream-write }

```php
public function write(
    string $key,
    Reflection $data
): void;
```

Writes parsed annotations to files


## Annotations\Annotation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Annotation.zep){ .src-btn }

Represents a single annotation in an annotations collection

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Annotation`**

</div>

__Uses__ `Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsannotation-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$reflectionData</span> )</code>
<span class="desc">Phalcon\Annotations\Annotation constructor</span>
</a>
<a class="api-item" href="#annotationsannotation-getargument">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getArgument</span>( <span class="st">mixed</span> <span class="sv">$position</span> )</code>
<span class="desc">Returns an argument in a specific position</span>
</a>
<a class="api-item" href="#annotationsannotation-getarguments">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getArguments</span>()</code>
<span class="desc">Returns the expression arguments</span>
</a>
<a class="api-item" href="#annotationsannotation-getexprarguments">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExprArguments</span>()</code>
<span class="desc">Returns the expression arguments without resolving</span>
</a>
<a class="api-item" href="#annotationsannotation-getexpression">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getExpression</span>( <span class="st">array</span> <span class="sv">$expr</span> )</code>
<span class="desc">Resolves an annotation expression</span>
</a>
<a class="api-item" href="#annotationsannotation-getname">
<code class="vis vis-public">public</code>
<code class="ret">null|string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the annotation&#039;s name</span>
</a>
<a class="api-item" href="#annotationsannotation-getnamedargument">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getNamedArgument</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a named argument</span>
</a>
<a class="api-item" href="#annotationsannotation-getnamedparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getNamedParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a named parameter</span>
</a>
<a class="api-item" href="#annotationsannotation-hasargument">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasArgument</span>( <span class="st">mixed</span> <span class="sv">$position</span> )</code>
<span class="desc">Returns an argument in a specific position</span>
</a>
<a class="api-item" href="#annotationsannotation-numberarguments">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">numberArguments</span>()</code>
<span class="desc">Returns the number of arguments that the annotation has</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$arguments</span><span class="sm"> = []</span></code>
<span class="desc">Annotation Arguments</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$exprArguments</span><span class="sm"> = []</span></code>
<span class="desc">Annotation ExprArguments</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$name</span></code>
<span class="desc">Annotation Name</span>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #annotationsannotation-__construct }

```php
public function __construct( array $reflectionData );
```

Phalcon\Annotations\Annotation constructor

#### `getArgument()` { #annotationsannotation-getargument }

```php
public function getArgument( mixed $position ): mixed|null;
```

Returns an argument in a specific position

#### `getArguments()` { #annotationsannotation-getarguments }

```php
public function getArguments(): array;
```

Returns the expression arguments

#### `getExprArguments()` { #annotationsannotation-getexprarguments }

```php
public function getExprArguments(): array;
```

Returns the expression arguments without resolving

#### `getExpression()` { #annotationsannotation-getexpression }

```php
public function getExpression( array $expr ): mixed;
```

Resolves an annotation expression

#### `getName()` { #annotationsannotation-getname }

```php
public function getName(): null|string;
```

Returns the annotation's name

#### `getNamedArgument()` { #annotationsannotation-getnamedargument }

```php
public function getNamedArgument( string $name ): mixed|null;
```

Returns a named argument

#### `getNamedParameter()` { #annotationsannotation-getnamedparameter }

```php
public function getNamedParameter( string $name ): mixed;
```

Returns a named parameter

#### `hasArgument()` { #annotationsannotation-hasargument }

```php
public function hasArgument( mixed $position ): bool;
```

Returns an argument in a specific position

#### `numberArguments()` { #annotationsannotation-numberarguments }

```php
public function numberArguments(): int;
```

Returns the number of arguments that the annotation has


## Annotations\AnnotationsFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/AnnotationsFactory.zep){ .src-btn }

Factory to create annotations components

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Annotations\AnnotationsFactory`**

</div>

__Uses__ `Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Apcu` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Adapter\Stream` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsannotationsfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#annotationsannotationsfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#annotationsannotationsfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#annotationsannotationsfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#annotationsannotationsfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #annotationsannotationsfactory-__construct }

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

#### `load()` { #annotationsannotationsfactory-load }

```php
public function load( mixed $config ): mixed;
```

Factory to create an instance from a Config object

#### `newInstance()` { #annotationsannotationsfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #annotationsannotationsfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #annotationsannotationsfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Annotations\Collection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Collection.zep){ .src-btn }

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
```

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Collection`** - implements `\Iterator`, `\Countable`

</div>

__Uses__ `Countable` · `Iterator` · `Phalcon\Annotations\Exceptions\AnnotationNotFound`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationscollection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$reflectionData</span><span class="sm"> = []</span> )</code>
<span class="desc">Phalcon\Annotations\Collection constructor</span>
</a>
<a class="api-item" href="#annotationscollection-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Returns the number of annotations in the collection</span>
</a>
<a class="api-item" href="#annotationscollection-current">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">current</span>()</code>
<span class="desc">Returns the current annotation in the iterator</span>
</a>
<a class="api-item" href="#annotationscollection-get">
<code class="vis vis-public">public</code>
<code class="ret">Annotation</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the first annotation that match a name</span>
</a>
<a class="api-item" href="#annotationscollection-getall">
<code class="vis vis-public">public</code>
<code class="ret">Annotation[]</code>
<code class="sig"><span class="sf">getAll</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns all the annotations that match a name</span>
</a>
<a class="api-item" href="#annotationscollection-getannotations">
<code class="vis vis-public">public</code>
<code class="ret">Annotation[]</code>
<code class="sig"><span class="sf">getAnnotations</span>()</code>
<span class="desc">Returns the internal annotations as an array</span>
</a>
<a class="api-item" href="#annotationscollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if an annotation exists in a collection</span>
</a>
<a class="api-item" href="#annotationscollection-key">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">key</span>()</code>
<span class="desc">Returns the current position/key in the iterator</span>
</a>
<a class="api-item" href="#annotationscollection-next">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">next</span>()</code>
<span class="desc">Moves the internal iteration pointer to the next position</span>
</a>
<a class="api-item" href="#annotationscollection-rewind">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">rewind</span>()</code>
<span class="desc">Rewinds the internal iterator</span>
</a>
<a class="api-item" href="#annotationscollection-valid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">valid</span>()</code>
<span class="desc">Check if the current annotation in the iterator is valid</span>
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

<div class="api-group">Public · 11</div>

#### `__construct()` { #annotationscollection-__construct }

```php
public function __construct( array $reflectionData = [] );
```

Phalcon\Annotations\Collection constructor

#### `count()` { #annotationscollection-count }

```php
public function count(): int;
```

Returns the number of annotations in the collection

#### `current()` { #annotationscollection-current }

```php
public function current(): mixed;
```

Returns the current annotation in the iterator

#### `get()` { #annotationscollection-get }

```php
public function get( string $name ): Annotation;
```

Returns the first annotation that match a name

#### `getAll()` { #annotationscollection-getall }

```php
public function getAll( string $name ): Annotation[];
```

Returns all the annotations that match a name

#### `getAnnotations()` { #annotationscollection-getannotations }

```php
public function getAnnotations(): Annotation[];
```

Returns the internal annotations as an array

#### `has()` { #annotationscollection-has }

```php
public function has( string $name ): bool;
```

Check if an annotation exists in a collection

#### `key()` { #annotationscollection-key }

```php
public function key(): int;
```

Returns the current position/key in the iterator

#### `next()` { #annotationscollection-next }

```php
public function next(): void;
```

Moves the internal iteration pointer to the next position

#### `rewind()` { #annotationscollection-rewind }

```php
public function rewind(): void;
```

Rewinds the internal iterator

#### `valid()` { #annotationscollection-valid }

```php
public function valid(): bool;
```

Check if the current annotation in the iterator is valid


## Annotations\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exception.zep){ .src-btn }

Class for exceptions thrown by Phalcon\Annotations

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Annotations\Exception`**
        - [`Phalcon\Annotations\Exceptions\AnnotationNotFound`](#annotationsexceptionsannotationnotfound)
        - [`Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable`](#annotationsexceptionsannotationsdirectorynotwritable)
        - [`Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`](#annotationsexceptionsunknownannotationexpression)

</div>


## Annotations\Exceptions\AnnotationNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/AnnotationNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Annotations\Exception`](#annotationsexception)
        - **`Phalcon\Annotations\Exceptions\AnnotationNotFound`**

</div>

__Uses__ `Phalcon\Annotations\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsexceptionsannotationnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsexceptionsannotationnotfound-__construct }

```php
public function __construct( string $name );
```


## Annotations\Exceptions\AnnotationsDirectoryNotWritable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/AnnotationsDirectoryNotWritable.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Annotations\Exception`](#annotationsexception)
        - **`Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable`**

</div>

__Uses__ `Phalcon\Annotations\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsexceptionsannotationsdirectorynotwritable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsexceptionsannotationsdirectorynotwritable-__construct }

```php
public function __construct();
```


## Annotations\Exceptions\CannotReadAnnotationData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/CannotReadAnnotationData.zep){ .src-btn }

<div class="api-tree" markdown>

- `\RuntimeException`
    - **`Phalcon\Annotations\Exceptions\CannotReadAnnotationData`**

</div>

__Uses__ `RuntimeException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsexceptionscannotreadannotationdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsexceptionscannotreadannotationdata-__construct }

```php
public function __construct();
```


## Annotations\Exceptions\UnknownAnnotationExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/UnknownAnnotationExpression.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Annotations\Exception`](#annotationsexception)
        - **`Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`**

</div>

__Uses__ `Phalcon\Annotations\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsexceptionsunknownannotationexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #annotationsexceptionsunknownannotationexpression-__construct }

```php
public function __construct( string $type );
```


## Annotations\Reader

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Reader.zep){ .src-btn }

Parses docblocks returning an array with the found annotations

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Reader`** - implements [`Phalcon\Annotations\ReaderInterface`](#annotationsreaderinterface)

</div>

__Uses__ `ReflectionClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsreader-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parse</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Reads annotations from the class docblocks, its methods and/or properties</span>
</a>
<a class="api-item" href="#annotationsreader-parsedocblock">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parseDocBlock</span>(<span class="prm"><span class="st">string</span> <span class="sv">$docBlock</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$file</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$line</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Parses a raw doc block returning the annotations found</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `parse()` { #annotationsreader-parse }

```php
public function parse( string $className ): array;
```

Reads annotations from the class docblocks, its methods and/or properties

#### `parseDocBlock()` { #annotationsreader-parsedocblock }

```php
public static function parseDocBlock(
    string $docBlock,
    mixed $file = null,
    mixed $line = null
): array;
```

Parses a raw doc block returning the annotations found


## Annotations\ReaderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/ReaderInterface.zep){ .src-btn }

Parses docblocks returning an array with the found annotations

<div class="api-tree" markdown>

- **`Phalcon\Annotations\ReaderInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsreaderinterface-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parse</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Reads annotations from the class docblocks, its constants, properties and methods</span>
</a>
<a class="api-item" href="#annotationsreaderinterface-parsedocblock">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parseDocBlock</span>(<span class="prm"><span class="st">string</span> <span class="sv">$docBlock</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$file</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$line</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Parses a raw docblock returning the annotations found</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `parse()` { #annotationsreaderinterface-parse }

```php
public function parse( string $className ): array;
```

Reads annotations from the class docblocks, its constants, properties and methods

#### `parseDocBlock()` { #annotationsreaderinterface-parsedocblock }

```php
public static function parseDocBlock(
    string $docBlock,
    mixed $file = null,
    mixed $line = null
): array;
```

Parses a raw docblock returning the annotations found


## Annotations\Reflection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Reflection.zep){ .src-btn }

Allows to manipulate the annotations reflection in an OO manner

```php
use Phalcon\Annotations\Reader;
use Phalcon\Annotations\Reflection;

// Parse the annotations in a class
$reader = new Reader();
$parsing = $reader->parse("MyComponent");

// Create the reflection
$reflection = new Reflection($parsing);

// Get the annotations in the class docblock
$classAnnotations = $reflection->getClassAnnotations();
```

<div class="api-tree" markdown>

- **`Phalcon\Annotations\Reflection`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#annotationsreflection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$reflectionData</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#annotationsreflection-getclassannotations">
<code class="vis vis-public">public</code>
<code class="ret">Collection|null</code>
<code class="sig"><span class="sf">getClassAnnotations</span>()</code>
<span class="desc">Returns the annotations found in the class docblock</span>
</a>
<a class="api-item" href="#annotationsreflection-getconstantsannotations">
<code class="vis vis-public">public</code>
<code class="ret">Collection[]</code>
<code class="sig"><span class="sf">getConstantsAnnotations</span>()</code>
<span class="desc">Returns the annotations found in the constants&#039; docblocks</span>
</a>
<a class="api-item" href="#annotationsreflection-getmethodsannotations">
<code class="vis vis-public">public</code>
<code class="ret">Collection[]</code>
<code class="sig"><span class="sf">getMethodsAnnotations</span>()</code>
<span class="desc">Returns the annotations found in the methods&#039; docblocks</span>
</a>
<a class="api-item" href="#annotationsreflection-getpropertiesannotations">
<code class="vis vis-public">public</code>
<code class="ret">Collection[]</code>
<code class="sig"><span class="sf">getPropertiesAnnotations</span>()</code>
<span class="desc">Returns the annotations found in the properties&#039; docblocks</span>
</a>
<a class="api-item" href="#annotationsreflection-getreflectiondata">
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

#### `__construct()` { #annotationsreflection-__construct }

```php
public function __construct( array $reflectionData = [] );
```

#### `getClassAnnotations()` { #annotationsreflection-getclassannotations }

```php
public function getClassAnnotations(): Collection|null;
```

Returns the annotations found in the class docblock

#### `getConstantsAnnotations()` { #annotationsreflection-getconstantsannotations }

```php
public function getConstantsAnnotations(): Collection[];
```

Returns the annotations found in the constants' docblocks

#### `getMethodsAnnotations()` { #annotationsreflection-getmethodsannotations }

```php
public function getMethodsAnnotations(): Collection[];
```

Returns the annotations found in the methods' docblocks

#### `getPropertiesAnnotations()` { #annotationsreflection-getpropertiesannotations }

```php
public function getPropertiesAnnotations(): Collection[];
```

Returns the annotations found in the properties' docblocks

#### `getReflectionData()` { #annotationsreflection-getreflectiondata }

```php
public function getReflectionData(): array;
```

Returns the raw parsing intermediate definitions used to construct the
reflection
