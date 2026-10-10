---
title: "Phalcon Annotations"
version: "5.20"
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

- **`Phalcon\Annotations\Adapter\AbstractAdapter`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)
  - [`Phalcon\Annotations\Adapter\Apcu`](#annotationsadapterapcu)
  - [`Phalcon\Annotations\Adapter\Memory`](#annotationsadaptermemory)
  - [`Phalcon\Annotations\Adapter\Stream`](#annotationsadapterstream)

`Phalcon\Annotations\Collection` · `Phalcon\Annotations\Exception` · `Phalcon\Annotations\Reader` · `Phalcon\Annotations\ReaderInterface` · `Phalcon\Annotations\Reflection`

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

- `protected Reader $reader`

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

`Phalcon\Annotations\Collection` · `Phalcon\Annotations\ReaderInterface` · `Phalcon\Annotations\Reflection`

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

`Phalcon\Annotations\Reflection`

### Method Summary

- `public __construct(array $options = [])` — Phalcon\Annotations\Adapter\Apcu constructor

- `public read(string $key): Reflection|bool` — Reads parsed annotations from APCu

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
public function read( string $key ): Reflection|bool;
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

`Phalcon\Annotations\Reflection`

### Method Summary

- `public __construct(array $options = [])`

- `public read(string $key): Reflection|bool` — Reads parsed annotations from memory

- `public write(string $key, Reflection $data): void` — Writes parsed annotations to memory

### Properties

- `protected mixed $data`

### Methods

<h4 id="annotationsadaptermemory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="annotationsadaptermemory-read"><code>read()</code></h4>

```php
public function read( string $key ): Reflection|bool;
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

`Phalcon\Annotations\Exception` · `Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable` · `Phalcon\Annotations\Exceptions\CannotReadAnnotationData` · `Phalcon\Annotations\Reflection` · `Phalcon\Traits\Php\FileTrait` · `RuntimeException`

### Method Summary

- `public __construct(array $options = [])` — Phalcon\Annotations\Adapter\Stream constructor

- `public read(string $key): Reflection|bool|int` — Reads parsed annotations from files

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
public function read( string $key ): Reflection|bool|int;
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

`Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`

### Method Summary

- `public __construct(array $reflectionData)` — Phalcon\Annotations\Annotation constructor

- `public getArgument(mixed $position): mixed|null` — Returns an argument in a specific position

- `public getArguments(): array` — Returns the expression arguments

- `public getExprArguments(): array` — Returns the expression arguments without resolving

- `public getExpression(array $expr): mixed` — Resolves an annotation expression

- `public getName(): null|string` — Returns the annotation's name

- `public getNamedArgument(string $name): mixed|null` — Returns a named argument

- `public getNamedParameter(string $name): mixed` — Returns a named parameter

- `public hasArgument(mixed $position): bool` — Returns an argument in a specific position

- `public numberArguments(): int` — Returns the number of arguments that the annotation has

### Properties

- `protected array $arguments = []` — Annotation Arguments

- `protected array $exprArguments = []` — Annotation ExprArguments

- `protected string|null $name` — Annotation Name

### Methods

<h4 id="annotationsannotation-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $reflectionData );
```

Phalcon\Annotations\Annotation constructor

<h4 id="annotationsannotation-getargument"><code>getArgument()</code></h4>

```php
public function getArgument( mixed $position ): mixed|null;
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
public function getName(): null|string;
```

Returns the annotation's name

<h4 id="annotationsannotation-getnamedargument"><code>getNamedArgument()</code></h4>

```php
public function getNamedArgument( string $name ): mixed|null;
```

Returns a named argument

<h4 id="annotationsannotation-getnamedparameter"><code>getNamedParameter()</code></h4>

```php
public function getNamedParameter( string $name ): mixed;
```

Returns a named parameter

<h4 id="annotationsannotation-hasargument"><code>hasArgument()</code></h4>

```php
public function hasArgument( mixed $position ): bool;
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

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/5.20/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Annotations\AnnotationsFactory`**

`Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Apcu` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Adapter\Stream` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

- `public __construct(array $services = [])` — AdapterFactory constructor.

- `public load(mixed $config): mixed` — Factory to create an instance from a Config object

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
public function load( mixed $config ): mixed;
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

- **`Phalcon\Annotations\Collection`** - implements `\Iterator`, `\Countable`

`Countable` · `Iterator` · `Phalcon\Annotations\Exceptions\AnnotationNotFound`

### Method Summary

- `public __construct(array $reflectionData = [])` — Phalcon\Annotations\Collection constructor

- `public count(): int` — Returns the number of annotations in the collection

- `public current(): mixed` — Returns the current annotation in the iterator

- `public get(string $name): Annotation` — Returns the first annotation that match a name

- `public getAll(string $name): Annotation[]` — Returns all the annotations that match a name

- `public getAnnotations(): Annotation[]` — Returns the internal annotations as an array

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
public function getAll( string $name ): Annotation[];
```

Returns all the annotations that match a name

<h4 id="annotationscollection-getannotations"><code>getAnnotations()</code></h4>

```php
public function getAnnotations(): Annotation[];
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


## Annotations\Reader

Class

Parses docblocks returning an array with the found annotations

- **`Phalcon\Annotations\Reader`** - implements [`Phalcon\Annotations\ReaderInterface`](#annotationsreaderinterface)

`ReflectionClass`

### Method Summary

- `public parse(string $className): array` — Reads annotations from the class docblocks, its methods and/or properties

- `public parseDocBlock(string $docBlock, mixed $file = null, mixed $line = null): array` — Parses a raw doc block returning the annotations found

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
): array;
```

Parses a raw doc block returning the annotations found


## Annotations\ReaderInterface

Interface

Parses docblocks returning an array with the found annotations

- **`Phalcon\Annotations\ReaderInterface`**

### Method Summary

- `public parse(string $className): array` — Reads annotations from the class docblocks, its constants, properties and methods

- `public parseDocBlock(string $docBlock, mixed $file = null, mixed $line = null): array` — Parses a raw docblock returning the annotations found

### Methods

<h4 id="annotationsreaderinterface-parse"><code>parse()</code></h4>

```php
public function parse( string $className ): array;
```

Reads annotations from the class docblocks, its constants, properties and methods

<h4 id="annotationsreaderinterface-parsedocblock"><code>parseDocBlock()</code></h4>

```php
public static function parseDocBlock(
    string $docBlock,
    mixed $file = null,
    mixed $line = null
): array;
```

Parses a raw docblock returning the annotations found


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

### Method Summary

- `public __construct(array $reflectionData = [])`

- `public getClassAnnotations(): Collection|null` — Returns the annotations found in the class docblock

- `public getConstantsAnnotations(): Collection[]` — Returns the annotations found in the constants' docblocks

- `public getMethodsAnnotations(): Collection[]` — Returns the annotations found in the methods' docblocks

- `public getPropertiesAnnotations(): Collection[]` — Returns the annotations found in the properties' docblocks

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
public function getConstantsAnnotations(): Collection[];
```

Returns the annotations found in the constants' docblocks

<h4 id="annotationsreflection-getmethodsannotations"><code>getMethodsAnnotations()</code></h4>

```php
public function getMethodsAnnotations(): Collection[];
```

Returns the annotations found in the methods' docblocks

<h4 id="annotationsreflection-getpropertiesannotations"><code>getPropertiesAnnotations()</code></h4>

```php
public function getPropertiesAnnotations(): Collection[];
```

Returns the annotations found in the properties' docblocks

<h4 id="annotationsreflection-getreflectiondata"><code>getReflectionData()</code></h4>

```php
public function getReflectionData(): array;
```

Returns the raw parsing intermediate definitions used to construct the
reflection

Source: https://docs.phalcon.io/5.20/api/phalcon_annotations/index.mdx
