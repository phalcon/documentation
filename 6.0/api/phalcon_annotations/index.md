---
title: "Phalcon Annotations"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Annotations

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Annotations\Adapter\AbstractAdapter

Abstract

This is the base class for Phalcon\Annotations adapters

The adapters supply read() and write(). This class does not declare them,
the same as in cphalcon.

@method mixed read(string $key)
@method mixed write(string $key, Reflection $data)

- **`Phalcon\Annotations\Adapter\AbstractAdapter`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)
  - [`Phalcon\Annotations\Adapter\Apcu`](#annotationsadapterapcu)
  - [`Phalcon\Annotations\Adapter\Memory`](#annotationsadaptermemory)
  - [`Phalcon\Annotations\Adapter\Stream`](#annotationsadapterstream)

`Phalcon\Annotations\Collection` · `Phalcon\Annotations\Exception` · `Phalcon\Annotations\Reader` · `Phalcon\Annotations\ReaderInterface` · `Phalcon\Annotations\Reflection` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public get(mixed $className): Reflection` — Parses or retrieves all the annotations found in a class

- `public getAnnotationsLimit(): int` — Returns the configured annotations-cache cap (0 = unlimited).

- `public getConstant(string $className, string $constantName): Collection` — Returns the annotations found in a specific constant

- `public getConstants(string $className): array` — Returns the annotations found in all the class' constants

- `public getMethod(string $className, string $methodName): Collection` — Returns the annotations found in a specific method

- `public getMethods(string $className): array` — Returns the annotations found in all the class' methods

- `public getProperties(string $className): array` — Returns the annotations found in all the class' properties

- `public getProperty(string $className, string $propertyName): Collection` — Returns the annotations found in a specific property

- `public getReader(): ReaderInterface` — Returns the annotation reader

- `public setAnnotationsLimit(int $annotationsLimit)` — Caps the number of class entries retained in the annotations

- `public setReader(ReaderInterface $reader)` — Sets the annotations parser

### Properties

- `protected array $annotations = []`

- `protected int $annotationsLimit = 0` — Maximum number of class annotation entries retained in the
  in-memory cache. 0 (default) keeps the original unbounded
  behavior; a positive value clears the cache when adding a new
  class would exceed it.

- `protected ReaderInterface|null $reader = null`

### Methods

<h4 id="annotationsadapterabstractadapter-get"><code>get()</code></h4>

```php
public function get( mixed $className ): Reflection;
```

Parses or retrieves all the annotations found in a class

<h4 id="annotationsadapterabstractadapter-getannotationslimit"><code>getAnnotationsLimit()</code></h4>

```php
public function getAnnotationsLimit(): int;
```

Returns the configured annotations-cache cap (0 = unlimited).
See setAnnotationsLimit().

<h4 id="annotationsadapterabstractadapter-getconstant"><code>getConstant()</code></h4>

```php
public function getConstant(
    string $className,
    string $constantName
): Collection;
```

Returns the annotations found in a specific constant

<h4 id="annotationsadapterabstractadapter-getconstants"><code>getConstants()</code></h4>

```php
public function getConstants( string $className ): array;
```

Returns the annotations found in all the class' constants

<h4 id="annotationsadapterabstractadapter-getmethod"><code>getMethod()</code></h4>

```php
public function getMethod(
    string $className,
    string $methodName
): Collection;
```

Returns the annotations found in a specific method

<h4 id="annotationsadapterabstractadapter-getmethods"><code>getMethods()</code></h4>

```php
public function getMethods( string $className ): array;
```

Returns the annotations found in all the class' methods

<h4 id="annotationsadapterabstractadapter-getproperties"><code>getProperties()</code></h4>

```php
public function getProperties( string $className ): array;
```

Returns the annotations found in all the class' properties

<h4 id="annotationsadapterabstractadapter-getproperty"><code>getProperty()</code></h4>

```php
public function getProperty(
    string $className,
    string $propertyName
): Collection;
```

Returns the annotations found in a specific property

<h4 id="annotationsadapterabstractadapter-getreader"><code>getReader()</code></h4>

```php
public function getReader(): ReaderInterface;
```

Returns the annotation reader

<h4 id="annotationsadapterabstractadapter-setannotationslimit"><code>setAnnotationsLimit()</code></h4>

```php
public function setAnnotationsLimit( int $annotationsLimit );
```

Caps the number of class entries retained in the annotations
cache. 0 disables the cap (the default; preserves the original
unbounded behavior). When the cap is exceeded, the cache is
cleared and repopulated on subsequent reads.

<h4 id="annotationsadapterabstractadapter-setreader"><code>setReader()</code></h4>

```php
public function setReader( ReaderInterface $reader );
```

Sets the annotations parser


## Annotations\Adapter\AdapterInterface

Interface

This interface must be implemented by adapters in Phalcon\Annotations

- **`Phalcon\Annotations\Adapter\AdapterInterface`**

`Phalcon\Annotations\Collection` · `Phalcon\Annotations\ReaderInterface` · `Phalcon\Annotations\Reflection` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public get(string $className): Reflection` — Parses or retrieves all the annotations found in a class

- `public getConstant(string $className, string $constantName): Collection` — Returns the annotations found in a specific constant

- `public getConstants(string $className): array` — Returns the annotations found in all the class' constants

- `public getMethod(string $className, string $methodName): Collection` — Returns the annotations found in a specific method

- `public getMethods(string $className): array` — Returns the annotations found in all the class' methods

- `public getProperties(string $className): array` — Returns the annotations found in all the class' methods

- `public getProperty(string $className, string $propertyName): Collection` — Returns the annotations found in a specific property

- `public getReader(): ReaderInterface` — Returns the annotation reader

- `public setReader(ReaderInterface $reader)` — Sets the annotations parser

### Methods

<h4 id="annotationsadapteradapterinterface-get"><code>get()</code></h4>

```php
public function get( string $className ): Reflection;
```

Parses or retrieves all the annotations found in a class

<h4 id="annotationsadapteradapterinterface-getconstant"><code>getConstant()</code></h4>

```php
public function getConstant(
    string $className,
    string $constantName
): Collection;
```

Returns the annotations found in a specific constant

<h4 id="annotationsadapteradapterinterface-getconstants"><code>getConstants()</code></h4>

```php
public function getConstants( string $className ): array;
```

Returns the annotations found in all the class' constants

<h4 id="annotationsadapteradapterinterface-getmethod"><code>getMethod()</code></h4>

```php
public function getMethod(
    string $className,
    string $methodName
): Collection;
```

Returns the annotations found in a specific method

<h4 id="annotationsadapteradapterinterface-getmethods"><code>getMethods()</code></h4>

```php
public function getMethods( string $className ): array;
```

Returns the annotations found in all the class' methods

<h4 id="annotationsadapteradapterinterface-getproperties"><code>getProperties()</code></h4>

```php
public function getProperties( string $className ): array;
```

Returns the annotations found in all the class' methods

<h4 id="annotationsadapteradapterinterface-getproperty"><code>getProperty()</code></h4>

```php
public function getProperty(
    string $className,
    string $propertyName
): Collection;
```

Returns the annotations found in a specific property

<h4 id="annotationsadapteradapterinterface-getreader"><code>getReader()</code></h4>

```php
public function getReader(): ReaderInterface;
```

Returns the annotation reader

<h4 id="annotationsadapteradapterinterface-setreader"><code>setReader()</code></h4>

```php
public function setReader( ReaderInterface $reader );
```

Sets the annotations parser


## Annotations\Adapter\Apcu

Class

Stores the parsed annotations in APCu. This adapter is suitable for production

```php
use Phalcon\Annotations\Adapter\Apcu;

$annotations = new Apcu();
```

- [`Phalcon\Annotations\Adapter\AbstractAdapter`](#annotationsadapterabstractadapter)
  - **`Phalcon\Annotations\Adapter\Apcu`**

`Phalcon\Annotations\Reflection` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public __construct(array $options = [])` — Phalcon\Annotations\Adapter\Apcu constructor

- `public read(string $key): bool|Reflection` — Reads parsed annotations from APCu

- `public write(string $key, Reflection $data): bool` — Writes parsed annotations to APCu

### Properties

- `protected string $prefix = ""`

- `protected int $ttl = 172800`

### Methods

<h4 id="annotationsadapterapcu-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Annotations\Adapter\Apcu constructor

<h4 id="annotationsadapterapcu-read"><code>read()</code></h4>

```php
public function read( string $key ): bool|Reflection;
```

Reads parsed annotations from APCu

<h4 id="annotationsadapterapcu-write"><code>write()</code></h4>

```php
public function write(
    string $key,
    Reflection $data
): bool;
```

Writes parsed annotations to APCu


## Annotations\Adapter\Memory

Class

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

- [`Phalcon\Annotations\Adapter\AbstractAdapter`](#annotationsadapterabstractadapter)
  - **`Phalcon\Annotations\Adapter\Memory`**

`Phalcon\Annotations\Reflection` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public __construct(array $options = [])`

- `public read(string $key): bool|Reflection` — Reads parsed annotations from memory

- `public write(string $key, Reflection $data): void` — Writes parsed annotations to memory

### Properties

- `protected mixed $data = null` — The property has no initializer, so it is null until the first write.

### Methods

<h4 id="annotationsadaptermemory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="annotationsadaptermemory-read"><code>read()</code></h4>

```php
public function read( string $key ): bool|Reflection;
```

Reads parsed annotations from memory

<h4 id="annotationsadaptermemory-write"><code>write()</code></h4>

```php
public function write(
    string $key,
    Reflection $data
): void;
```

Writes parsed annotations to memory


## Annotations\Adapter\Stream

Class

Stores the parsed annotations in files. This adapter is suitable for production

```php
use Phalcon\Annotations\Adapter\Stream;

$annotations = new Stream(
    [
        "annotationsDir" => "app/cache/annotations/",
    ]
);
```

- [`Phalcon\Annotations\Adapter\AbstractAdapter`](#annotationsadapterabstractadapter)
  - **`Phalcon\Annotations\Adapter\Stream`**

`Phalcon\Annotations\Annotation` · `Phalcon\Annotations\Collection` · `Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable` · `Phalcon\Annotations\Exceptions\CannotReadAnnotationData` · `Phalcon\Annotations\Reflection` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Support\Traits\FilePathTrait` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(array $options = [])` — Phalcon\Annotations\Adapter\Stream constructor

- `public read(string $key): bool|int|Reflection` — Reads parsed annotations from files

- `public write(string $key, Reflection $data): void` — Writes parsed annotations to files

### Properties

- `protected string $annotationsDir = "./"`

### Methods

<h4 id="annotationsadapterstream-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Annotations\Adapter\Stream constructor

<h4 id="annotationsadapterstream-read"><code>read()</code></h4>

```php
public function read( string $key ): bool|int|Reflection;
```

Reads parsed annotations from files

<h4 id="annotationsadapterstream-write"><code>write()</code></h4>

```php
public function write(
    string $key,
    Reflection $data
): void;
```

Writes parsed annotations to files


## Annotations\Annotation

Class

Represents a single annotation in an annotations collection

- **`Phalcon\Annotations\Annotation`**

`Phalcon\Annotations\Docblock\Scanner\Opcode` · `Phalcon\Annotations\Exceptions\UnknownAnnotationExpression` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public __construct(array $reflectionData)` — Phalcon\Annotations\Annotation constructor

- `public getArgument(int|string $position): mixed` — Returns an argument in a specific position

- `public getArguments(): array` — Returns the expression arguments

- `public getExprArguments(): array` — Returns the expression arguments without resolving

- `public getExpression(array $expr): mixed` — Resolves an annotation expression

- `public getName(): string|null` — Returns the annotation's name

- `public getNamedArgument(string $name): mixed` — Returns a named argument

- `public getNamedParameter(string $name): mixed` — Returns a named parameter

- `public hasArgument(int|string $position): bool` — Returns an argument in a specific position

- `public numberArguments(): int` — Returns the number of arguments that the annotation has

### Constants

- `const int T_RESOLVED = 1000` — Type of an expression node that holds a value that PHP resolved
  already. The attributes reader makes these nodes, because
  ReflectionAttribute::getArguments() gives the values and not a parse
  tree. The value goes to the caller without a change.

  The parser types stop at 309 (PHANNOT\_T\_ARBITRARY\_TEXT). The value is
  1000 and not 310, so that a token added to the grammar later cannot
  make two case labels with one value in getExpression().

### Properties

- `protected array $arguments = []` — Annotation Arguments

- `protected array $exprArguments = []` — Annotation ExprArguments

- `protected string|null $name = null` — Annotation Name

### Methods

<h4 id="annotationsannotation-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $reflectionData );
```

Phalcon\Annotations\Annotation constructor

<h4 id="annotationsannotation-getargument"><code>getArgument()</code></h4>

```php
public function getArgument( int|string $position ): mixed;
```

Returns an argument in a specific position

<h4 id="annotationsannotation-getarguments"><code>getArguments()</code></h4>

```php
public function getArguments(): array;
```

Returns the expression arguments

<h4 id="annotationsannotation-getexprarguments"><code>getExprArguments()</code></h4>

```php
public function getExprArguments(): array;
```

Returns the expression arguments without resolving

<h4 id="annotationsannotation-getexpression"><code>getExpression()</code></h4>

```php
public function getExpression( array $expr ): mixed;
```

Resolves an annotation expression

<h4 id="annotationsannotation-getname"><code>getName()</code></h4>

```php
public function getName(): string|null;
```

Returns the annotation's name

<h4 id="annotationsannotation-getnamedargument"><code>getNamedArgument()</code></h4>

```php
public function getNamedArgument( string $name ): mixed;
```

Returns a named argument

<h4 id="annotationsannotation-getnamedparameter"><code>getNamedParameter()</code></h4>

```php
public function getNamedParameter( string $name ): mixed;
```

Returns a named parameter

<h4 id="annotationsannotation-hasargument"><code>hasArgument()</code></h4>

```php
public function hasArgument( int|string $position ): bool;
```

Returns an argument in a specific position

<h4 id="annotationsannotation-numberarguments"><code>numberArguments()</code></h4>

```php
public function numberArguments(): int;
```

Returns the number of arguments that the annotation has


## Annotations\AnnotationsFactory

Class

Factory to create annotations components

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Annotations\AnnotationsFactory`**

`Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Apcu` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Adapter\Stream` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Factory\AbstractFactory`

### Method Summary

- `public __construct(array $services = [])` — AdapterFactory constructor.

- `public load(mixed $config): AdapterInterface` — Factory to create an instance from a Config object

- `public newInstance(string $name, array $options = []): AdapterInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="annotationsannotationsfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

<h4 id="annotationsannotationsfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

<h4 id="annotationsannotationsfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="annotationsannotationsfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="annotationsannotationsfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters


## Annotations\AttributesReader

Class

Parses PHP attributes returning an array with the found annotations

The array has the same shape as the one of Phalcon\Annotations\Reader, so
the adapters, Reflection, Collection and Annotation do not know which
reader made it.

PHP resolves the value of an attribute argument, so there is no parse tree
to walk. Each value goes in a node of the type Annotation::T_RESOLVED,
which Annotation::getExpression() gives back without a change.

- **`Phalcon\Annotations\AttributesReader`** - implements [`Phalcon\Annotations\ReaderInterface`](#annotationsreaderinterface)

`Phalcon\Annotations\Docblock\Scanner\Opcode` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `ReflectionAttribute` · `ReflectionClass` · `ReflectionException`

### Method Summary

- `public parse(string $className): array` — Reads attributes from the class, its constants, properties and methods

- `protected buildArguments(array $attributeArguments): array` — Makes the argument list of one attribute. PHP resolved the values

- `protected buildNodes(array $attributes, string $file, int $line): array` — Makes the node list of one target from its attributes

- `protected resolveName(string $name): string` — Gives the name that the collection matches on.

### Constants

- `const string PHALCON_NAMESPACE = "Phalcon\\Annotations\\"` — An attribute of this namespace gets the short name, so that `#[Column]`
  and `@Column` give the same name. Every other attribute keeps the full
  class name, so that an attribute of another library cannot take the
  place of a Phalcon one.

### Methods

<h4 id="annotationsattributesreader-parse"><code>parse()</code></h4>

```php
public function parse( string $className ): array;
```

Reads attributes from the class, its constants, properties and methods

<h4 id="annotationsattributesreader-buildarguments"><code>buildArguments()</code></h4>

```php
protected function buildArguments( array $attributeArguments ): array;
```

Makes the argument list of one attribute. PHP resolved the values
already, so each one goes in a node that Annotation::getExpression()
gives back without a change. An integer key is a positional argument
and a string key is a named one.

<h4 id="annotationsattributesreader-buildnodes"><code>buildNodes()</code></h4>

```php
protected function buildNodes(
    array $attributes,
    string $file,
    int $line
): array;
```

Makes the node list of one target from its attributes

<h4 id="annotationsattributesreader-resolvename"><code>resolveName()</code></h4>

```php
protected function resolveName( string $name ): string;
```

Gives the name that the collection matches on.

An attribute of the Phalcon\Annotations namespace gets the short name,
so that `#[Column]` and `@Column` give the same name. Every other
attribute keeps the full class name, so that an attribute of another
library cannot take the place of a Phalcon one.

Extend this reader and override this method to give the same short
name to the attributes of your own namespace.


## Annotations\Collection

Class

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

The class cannot carry an `@implements Iterator<int, Annotation>` tag.
`current()` returns `false` past the end of the collection, while Psalm's
`Iterator` stub requires `TValue|null` there. Narrowing the iteration would
mean changing that return to null, which is a v7 signature change.

- **`Phalcon\Annotations\Collection`** - implements `\Iterator`, `\Countable`

`Countable` · `Iterator` · `Phalcon\Annotations\Exceptions\AnnotationNotFound` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public __construct(array $reflectionData = [])` — Phalcon\Annotations\Collection constructor

- `public count(): int` — Returns the number of annotations in the collection

- `public current(): mixed` — Returns the current annotation in the iterator

- `public get(string $name): Annotation` — Returns the first annotation that match a name

- `public getAll(string $name): array` — Returns all the annotations that match a name

- `public getAnnotations(): array` — Returns the internal annotations as an array

- `public has(string $name): bool` — Check if an annotation exists in a collection

- `public key(): int` — Returns the current position/key in the iterator

- `public next(): void` — Moves the internal iteration pointer to the next position

- `public rewind(): void` — Rewinds the internal iterator

- `public valid(): bool` — Check if the current annotation in the iterator is valid

### Properties

- `protected array $annotations`

- `protected int $position = 0`

### Methods

<h4 id="annotationscollection-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $reflectionData = [] );
```

Phalcon\Annotations\Collection constructor

<h4 id="annotationscollection-count"><code>count()</code></h4>

```php
public function count(): int;
```

Returns the number of annotations in the collection

<h4 id="annotationscollection-current"><code>current()</code></h4>

```php
public function current(): mixed;
```

Returns the current annotation in the iterator

<h4 id="annotationscollection-get"><code>get()</code></h4>

```php
public function get( string $name ): Annotation;
```

Returns the first annotation that match a name

<h4 id="annotationscollection-getall"><code>getAll()</code></h4>

```php
public function getAll( string $name ): array;
```

Returns all the annotations that match a name

<h4 id="annotationscollection-getannotations"><code>getAnnotations()</code></h4>

```php
public function getAnnotations(): array;
```

Returns the internal annotations as an array

<h4 id="annotationscollection-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check if an annotation exists in a collection

<h4 id="annotationscollection-key"><code>key()</code></h4>

```php
public function key(): int;
```

Returns the current position/key in the iterator

<h4 id="annotationscollection-next"><code>next()</code></h4>

```php
public function next(): void;
```

Moves the internal iteration pointer to the next position

<h4 id="annotationscollection-rewind"><code>rewind()</code></h4>

```php
public function rewind(): void;
```

Rewinds the internal iterator

<h4 id="annotationscollection-valid"><code>valid()</code></h4>

```php
public function valid(): bool;
```

Check if the current annotation in the iterator is valid


## Annotations\Exception

Class

Class for exceptions thrown by Phalcon\Annotations

- `\Exception`
  - **`Phalcon\Annotations\Exception`**
    - [`Phalcon\Annotations\Exceptions\AnnotationNotFound`](#annotationsexceptionsannotationnotfound)
    - [`Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable`](#annotationsexceptionsannotationsdirectorynotwritable)
    - [`Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`](#annotationsexceptionsunknownannotationexpression)


## Annotations\Exceptions\AnnotationNotFound

Class

- `\Exception`
  - [`Phalcon\Annotations\Exception`](#annotationsexception)
    - **`Phalcon\Annotations\Exceptions\AnnotationNotFound`**

`Phalcon\Annotations\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="annotationsexceptionsannotationnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Annotations\Exceptions\AnnotationsDirectoryNotWritable

Class

- `\Exception`
  - [`Phalcon\Annotations\Exception`](#annotationsexception)
    - **`Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable`**

`Phalcon\Annotations\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="annotationsexceptionsannotationsdirectorynotwritable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Annotations\Exceptions\CannotReadAnnotationData

Class

- `\RuntimeException`
  - **`Phalcon\Annotations\Exceptions\CannotReadAnnotationData`**

`RuntimeException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="annotationsexceptionscannotreadannotationdata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Annotations\Exceptions\UnknownAnnotationExpression

Class

- `\Exception`
  - [`Phalcon\Annotations\Exception`](#annotationsexception)
    - **`Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`**

`Phalcon\Annotations\Exception`

### Method Summary

- `public __construct(string $type)`

### Methods

<h4 id="annotationsexceptionsunknownannotationexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```


## Annotations\Models\MetaData\Column

Class

Describes a model column. It is the attribute form of `@Column`.

The parameter names are camelCase, because PSR-12 does not allow
snake_case. The metadata strategy reads the two spellings. The default
value is `defaultValue` and not `default`, because `default` is a Zephir
keyword.

- **`Phalcon\Annotations\Models\MetaData\Column`**

`Attribute`

### Method Summary

- `public __construct(string|null $column = null, string $type = "string", int|null $length = null, bool $nullable = false, bool $skipOnInsert = false, bool $skipOnUpdate = false, bool $allowEmptyString = false, mixed $defaultValue = null)`

### Properties

- `public bool $allowEmptyString = false`

- `public string|null $column = null`

- `public mixed $defaultValue = null`

- `public int|null $length = null`

- `public bool $nullable = false`

- `public bool $skipOnInsert = false`

- `public bool $skipOnUpdate = false`

- `public string $type = "string"`

### Methods

<h4 id="annotationsmodelsmetadatacolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string|null $column = null,
    string $type = "string",
    int|null $length = null,
    bool $nullable = false,
    bool $skipOnInsert = false,
    bool $skipOnUpdate = false,
    bool $allowEmptyString = false,
    mixed $defaultValue = null
);
```


## Annotations\Models\MetaData\Identity

Class

Marks a property as the identity column. It is the attribute form of `@Identity`.

- **`Phalcon\Annotations\Models\MetaData\Identity`**

`Attribute`


## Annotations\Models\MetaData\Primary

Class

Marks a property as part of the primary key. It is the attribute form of `@Primary`.

- **`Phalcon\Annotations\Models\MetaData\Primary`**

`Attribute`


## Annotations\Models\MetaData\Source

Class

Names the table of a model. No framework code reads it today.

- **`Phalcon\Annotations\Models\MetaData\Source`**

`Attribute`

### Method Summary

- `public __construct(string $table)`

### Properties

- `public string $table`

### Methods

<h4 id="annotationsmodelsmetadatasource-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $table );
```


## Annotations\Reader

Class

Parses docblocks returning an array with the found annotations

- **`Phalcon\Annotations\Reader`** - implements [`Phalcon\Annotations\ReaderInterface`](#annotationsreaderinterface)

`Phalcon\Annotations\Docblock\Exception` · `Phalcon\Annotations\Docblock\Parser\Parser` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `ReflectionClass` · `ReflectionClassConstant`

### Method Summary

- `public parse(string $className): array` — Reads annotations from the class docblocks, its methods and/or properties

- `public parseDocBlock(string $docBlock, mixed $file = null, mixed $line = null): array|false` — Parses a raw doc block returning the annotations found

### Methods

<h4 id="annotationsreader-parse"><code>parse()</code></h4>

```php
public function parse( string $className ): array;
```

Reads annotations from the class docblocks, its methods and/or properties

<h4 id="annotationsreader-parsedocblock"><code>parseDocBlock()</code></h4>

```php
public static function parseDocBlock(
    string $docBlock,
    mixed $file = null,
    mixed $line = null
): array|false;
```

Parses a raw doc block returning the annotations found


## Annotations\ReaderInterface

Interface

Reads the annotations of a class and returns them as an array

Phalcon\Annotations\Reader reads the docblocks and Phalcon\Annotations\AttributesReader
reads the PHP attributes. The two give the same array shape, so the adapter
and the classes after it do not know which reader made it.

- **`Phalcon\Annotations\ReaderInterface`**

`Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public parse(string $className): array` — Reads annotations from the class, its constants, properties and methods

### Methods

<h4 id="annotationsreaderinterface-parse"><code>parse()</code></h4>

```php
public function parse( string $className ): array;
```

Reads annotations from the class, its constants, properties and methods


## Annotations\Reflection

Class

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

- **`Phalcon\Annotations\Reflection`**

`Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public __construct(array $reflectionData = [])`

- `public getClassAnnotations(): Collection|null` — Returns the annotations found in the class docblock

- `public getConstantsAnnotations(): array` — Returns the annotations found in the constants' docblocks

- `public getMethodsAnnotations(): array` — Returns the annotations found in the methods' docblocks

- `public getPropertiesAnnotations(): array` — Returns the annotations found in the properties' docblocks

- `public getReflectionData(): array` — Returns the raw parsing intermediate definitions used to construct the

### Properties

- `protected Collection|null $classAnnotations = null`

- `protected array $constantAnnotations = []`

- `protected array $methodAnnotations = []`

- `protected array $propertyAnnotations = []`

- `protected array $reflectionData = []`

### Methods

<h4 id="annotationsreflection-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $reflectionData = [] );
```

<h4 id="annotationsreflection-getclassannotations"><code>getClassAnnotations()</code></h4>

```php
public function getClassAnnotations(): Collection|null;
```

Returns the annotations found in the class docblock

<h4 id="annotationsreflection-getconstantsannotations"><code>getConstantsAnnotations()</code></h4>

```php
public function getConstantsAnnotations(): array;
```

Returns the annotations found in the constants' docblocks

<h4 id="annotationsreflection-getmethodsannotations"><code>getMethodsAnnotations()</code></h4>

```php
public function getMethodsAnnotations(): array;
```

Returns the annotations found in the methods' docblocks

<h4 id="annotationsreflection-getpropertiesannotations"><code>getPropertiesAnnotations()</code></h4>

```php
public function getPropertiesAnnotations(): array;
```

Returns the annotations found in the properties' docblocks

<h4 id="annotationsreflection-getreflectiondata"><code>getReflectionData()</code></h4>

```php
public function getReflectionData(): array;
```

Returns the raw parsing intermediate definitions used to construct the
reflection


## Annotations\Router\Connect

Class

Marks a method as a CONNECT route. It is the attribute form of `@Connect`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Connect`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterconnect-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Delete

Class

Marks a method as a DELETE route. It is the attribute form of `@Delete`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Delete`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterdelete-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Get

Class

Marks a method as a GET route. It is the attribute form of `@Get`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Get`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterget-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Head

Class

Marks a method as a HEAD route. It is the attribute form of `@Head`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Head`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterhead-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Options

Class

Marks a method as a OPTIONS route. It is the attribute form of `@Options`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Options`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouteroptions-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Patch

Class

Marks a method as a PATCH route. It is the attribute form of `@Patch`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Patch`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterpatch-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Post

Class

Marks a method as a POST route. It is the attribute form of `@Post`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Post`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterpost-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Purge

Class

Marks a method as a PURGE route. It is the attribute form of `@Purge`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Purge`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterpurge-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Put

Class

Marks a method as a PUT route. It is the attribute form of `@Put`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Put`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsrouterput-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\Route

Class

Marks a method as a route. It is the attribute form of `@Route`.

The annotations service never makes an instance of this class. It reads the
arguments with ReflectionAttribute::getArguments(). The class gives the
name, the targets and the signature that an IDE and a static analyzer read.

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

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes`

### Method Summary

- `public __construct(string $route, array|string|null $methods = null, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Properties

- `public array|string|null $beforeMatch = null`

- `public array $converters = []`

- `public array|string|null $methods = null`

- `public string|null $name = null`

- `public array $paths = []`

- `public string $route`

### Methods

<h4 id="annotationsrouterroute-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    array|string|null $methods = null,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```


## Annotations\Router\RoutePrefix

Class

Sets the prefix of every route of a controller. It is the attribute form of
`@RoutePrefix`.

- **`Phalcon\Annotations\Router\RoutePrefix`**

`Attribute`

### Method Summary

- `public __construct(string $prefix)`

### Properties

- `public string $prefix`

### Methods

<h4 id="annotationsrouterrouteprefix-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $prefix );
```


## Annotations\Router\Trace

Class

Marks a method as a TRACE route. It is the attribute form of `@Trace`.

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
  - **`Phalcon\Annotations\Router\Trace`**

`Attribute` · `Phalcon\Contracts\Annotations\AnnotationsTypes` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

- `public __construct(string $route, string|null $name = null, array $paths = [], array $converters = [], array|string|null $beforeMatch = null)`

### Methods

<h4 id="annotationsroutertrace-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $route,
    string|null $name = null,
    array $paths = [],
    array $converters = [],
    array|string|null $beforeMatch = null
);
```

Source: https://docs.phalcon.io/6.0/api/phalcon_annotations/index.mdx
