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

## Annotations\AdapterFactory

Class

Factory to create Annotations adapters

@property SerializerFactory $serializerFactory

- [`Phalcon\Factory\AbstractConfigFactory`](../phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](../phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Annotations\AdapterFactory`**

`Exception` · `Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Apcu` · `Phalcon\Annotations\Adapter\Libmemcached` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Adapter\Redis` · `Phalcon\Annotations\Adapter\Stream` · `Phalcon\Annotations\Adapter\Weak` · `Phalcon\Annotations\Parser\Exception` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Storage\SerializerFactory`

### Method Summary

<ApiItem href="#annotationsadapterfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"SerializerFactory","name":"factory","default":null},{"type":"array","name":"services","default":"[]"}]}>
AdapterFactory constructor.
</ApiItem>
<ApiItem href="#annotationsadapterfactory-newinstance" visibility="public" name="newInstance" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Create a new instance of the adapter
</ApiItem>
<ApiItem href="#annotationsadapterfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#annotationsadapterfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Methods

<h4 id="annotationsadapterfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
SerializerFactory $factory,
array $services = []
);
```

AdapterFactory constructor.

<h4 id="annotationsadapterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
string $name,
array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="annotationsadapterfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="annotationsadapterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Annotations\Adapter\AdapterInterface

Interface

This interface must be implemented by adapters in Phalcon\Components\Attributes

- [`Phalcon\Storage\Adapter\AdapterInterface`](../phalcon_storage/#storageadapteradapterinterface)
- **`Phalcon\Annotations\Adapter\AdapterInterface`**

`Phalcon\Storage\Adapter\AdapterInterface`

## Annotations\Adapter\Apcu

Class

Stores the parsed annotations in apcu.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](../phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Apcu`](../phalcon_storage/#storageadapterapcu)
- **`Phalcon\Annotations\Adapter\Apcu`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

`Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Apcu`

### Method Summary

<ApiItem href="#annotationsadapterapcu-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="annotationsadapterapcu-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

## Annotations\Adapter\Libmemcached

Class

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

- [`Phalcon\Storage\Adapter\AbstractAdapter`](../phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Libmemcached`](../phalcon_storage/#storageadapterlibmemcached)
- **`Phalcon\Annotations\Adapter\Libmemcached`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

`Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Libmemcached`

### Method Summary

<ApiItem href="#annotationsadapterlibmemcached-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="annotationsadapterlibmemcached-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

## Annotations\Adapter\Memory

Class

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

- [`Phalcon\Storage\Adapter\AbstractAdapter`](../phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Memory`](../phalcon_storage/#storageadaptermemory)
- **`Phalcon\Annotations\Adapter\Memory`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

`Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Memory`

### Method Summary

<ApiItem href="#annotationsadaptermemory-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="annotationsadaptermemory-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

## Annotations\Adapter\Redis

Class

Stores the parsed annotations in redis.

- [`Phalcon\Storage\Adapter\AbstractAdapter`](../phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Redis`](../phalcon_storage/#storageadapterredis)
- **`Phalcon\Annotations\Adapter\Redis`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

`Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Redis`

### Method Summary

<ApiItem href="#annotationsadapterredis-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="annotationsadapterredis-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

## Annotations\Adapter\Stream

Class

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

- [`Phalcon\Storage\Adapter\AbstractAdapter`](../phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Stream`](../phalcon_storage/#storageadapterstream)
- **`Phalcon\Annotations\Adapter\Stream`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

`Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Stream`

### Method Summary

<ApiItem href="#annotationsadapterstream-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="annotationsadapterstream-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

## Annotations\Adapter\Weak

Class

Stores the parsed annotations in memory. This adapter is the suitable
development/testing

- [`Phalcon\Storage\Adapter\AbstractAdapter`](../phalcon_storage/#storageadapterabstractadapter)
- [`Phalcon\Storage\Adapter\Weak`](../phalcon_storage/#storageadapterweak)
- **`Phalcon\Annotations\Adapter\Weak`** - implements [`Phalcon\Annotations\Adapter\AdapterInterface`](#annotationsadapteradapterinterface)

`Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\Weak`

### Method Summary

<ApiItem href="#annotationsadapterweak-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="annotationsadapterweak-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

## Annotations\Annotations

Class

- **`Phalcon\Annotations\Annotations`**

`Phalcon\Annotations\Parser\Collection` · `Phalcon\Annotations\Parser\Reader` · `Phalcon\Annotations\Parser\ReaderInterface` · `Phalcon\Annotations\Parser\Reflection` · `Phalcon\Storage\Adapter\AdapterInterface`

### Method Summary

<ApiItem href="#annotationsannotations-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterInterface","name":"adapter","default":null}]}>
</ApiItem>
<ApiItem href="#annotationsannotations-get" visibility="public" name="get" returnType="Reflection" params={[{"type":"mixed","name":"className","default":null}]}>
Parses or retrieves all the attributes found in a class
</ApiItem>
<ApiItem href="#annotationsannotations-getconstant" visibility="public" name="getConstant" returnType="Collection" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"constantName","default":null}]}>
Returns the attributes found in a specific constant
</ApiItem>
<ApiItem href="#annotationsannotations-getconstants" visibility="public" name="getConstants" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
Returns the attributes found in all the class' constants
</ApiItem>
<ApiItem href="#annotationsannotations-getmethod" visibility="public" name="getMethod" returnType="Collection" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"methodName","default":null}]}>
Returns the attributes found in a specific method
</ApiItem>
<ApiItem href="#annotationsannotations-getmethods" visibility="public" name="getMethods" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
Returns the attributes found in all the class' methods
</ApiItem>
<ApiItem href="#annotationsannotations-getproperties" visibility="public" name="getProperties" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
Returns the attributes found in all the class' properties
</ApiItem>
<ApiItem href="#annotationsannotations-getproperty" visibility="public" name="getProperty" returnType="Collection" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"propertyName","default":null}]}>
Returns the attributes found in a specific property
</ApiItem>
<ApiItem href="#annotationsannotations-getreader" visibility="public" name="getReader" returnType="ReaderInterface" params={[]}>
Returns the annotation reader
</ApiItem>
<ApiItem href="#annotationsannotations-read" visibility="public" name="read" returnType="bool|Reflection" params={[{"type":"string","name":"key","default":null}]}>
Reads parsed annotations from memory
</ApiItem>
<ApiItem href="#annotationsannotations-setreader" visibility="public" name="setReader" returnType="void" params={[{"type":"ReaderInterface","name":"reader","default":null}]}>
Sets the attributes parser
</ApiItem>
<ApiItem href="#annotationsannotations-write" visibility="public" name="write" returnType="bool" params={[{"type":"string","name":"key","default":null},{"type":"Reflection","name":"data","default":null}]}>
Writes parsed annotations to memory
</ApiItem>

### Constants

<ApiItem kind="constant" name="CACHE_PREFIX" type="string" default="&quot;_PHATN&quot;">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="adapter" type="AdapterInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="reader" type="Reader|null" default="null">
</ApiItem>

### Methods

<h4 id="annotationsannotations-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterInterface $adapter );
```

<h4 id="annotationsannotations-get"><code>get()</code></h4>

```php
public function get( mixed $className ): Reflection;
```

Parses or retrieves all the attributes found in a class

<h4 id="annotationsannotations-getconstant"><code>getConstant()</code></h4>

```php
public function getConstant(
string $className,
string $constantName
): Collection;
```

Returns the attributes found in a specific constant

<h4 id="annotationsannotations-getconstants"><code>getConstants()</code></h4>

```php
public function getConstants( string $className ): array;
```

Returns the attributes found in all the class' constants

<h4 id="annotationsannotations-getmethod"><code>getMethod()</code></h4>

```php
public function getMethod(
string $className,
string $methodName
): Collection;
```

Returns the attributes found in a specific method

<h4 id="annotationsannotations-getmethods"><code>getMethods()</code></h4>

```php
public function getMethods( string $className ): array;
```

Returns the attributes found in all the class' methods

<h4 id="annotationsannotations-getproperties"><code>getProperties()</code></h4>

```php
public function getProperties( string $className ): array;
```

Returns the attributes found in all the class' properties

<h4 id="annotationsannotations-getproperty"><code>getProperty()</code></h4>

```php
public function getProperty(
string $className,
string $propertyName
): Collection;
```

Returns the attributes found in a specific property

<h4 id="annotationsannotations-getreader"><code>getReader()</code></h4>

```php
public function getReader(): ReaderInterface;
```

Returns the annotation reader

<h4 id="annotationsannotations-read"><code>read()</code></h4>

```php
public function read( string $key ): bool|Reflection;
```

Reads parsed annotations from memory

<h4 id="annotationsannotations-setreader"><code>setReader()</code></h4>

```php
public function setReader( ReaderInterface $reader ): void;
```

Sets the attributes parser

<h4 id="annotationsannotations-write"><code>write()</code></h4>

```php
public function write(
string $key,
Reflection $data
): bool;
```

Writes parsed annotations to memory

## Annotations\Models\MetaData\Column

Class

- **`Phalcon\Annotations\Models\MetaData\Column`**

`Attribute`

### Method Summary

<ApiItem href="#annotationsmodelsmetadatacolumn-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string|null","name":"column","default":"null"},{"type":"string","name":"type","default":"\"string\""},{"type":"int|null","name":"length","default":"null"},{"type":"bool","name":"nullable","default":"false"},{"type":"bool","name":"skipOnInsert","default":"false"},{"type":"bool","name":"skipOnUpdate","default":"false"},{"type":"bool","name":"allowEmptyString","default":"false"},{"type":"mixed","name":"default","default":"null"}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="public" name="allowEmptyString" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="public" name="column" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="public" name="default" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="public" name="length" type="int|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="public" name="nullable" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="public" name="skipOnInsert" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="public" name="skipOnUpdate" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="public" name="type" type="string" default="&quot;string&quot;">
</ApiItem>

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
mixed $default = null
);
```

## Annotations\Models\MetaData\Identity

Class

- **`Phalcon\Annotations\Models\MetaData\Identity`**

`Attribute`

## Annotations\Models\MetaData\Primary

Class

- **`Phalcon\Annotations\Models\MetaData\Primary`**

`Attribute`

## Annotations\Models\MetaData\Source

Class

- **`Phalcon\Annotations\Models\MetaData\Source`**

`Attribute`

### Method Summary

<ApiItem href="#annotationsmodelsmetadatasource-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"table","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="public" name="table" type="string" default="">
</ApiItem>

### Methods

<h4 id="annotationsmodelsmetadatasource-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $table );
```

## Annotations\Parser\Annotation

Class

Represents a single attribute in an attributes collection

- **`Phalcon\Annotations\Parser\Annotation`**

`ReflectionAttribute`

### Method Summary

<ApiItem href="#annotationsparserannotation-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"ReflectionAttribute","name":"reflectionData","default":null}]}>
Constructor
</ApiItem>
<ApiItem href="#annotationsparserannotation-getargument" visibility="public" name="getArgument" returnType="mixed" params={[{"type":"int|string","name":"position","default":null}]}>
Returns an argument in a specific position
</ApiItem>
<ApiItem href="#annotationsparserannotation-getarguments" visibility="public" name="getArguments" returnType="array" params={[]}>
Returns the expression arguments
</ApiItem>
<ApiItem href="#annotationsparserannotation-getcleanname" visibility="public" name="getCleanName" returnType="string" params={[]}>
Returns the attribute's base name
</ApiItem>
<ApiItem href="#annotationsparserannotation-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the attribute's name
</ApiItem>
<ApiItem href="#annotationsparserannotation-getnamedargument" visibility="public" name="getNamedArgument" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns a named argument
</ApiItem>
<ApiItem href="#annotationsparserannotation-getnamedparameter" visibility="public" name="getNamedParameter" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns a named parameter
</ApiItem>
<ApiItem href="#annotationsparserannotation-hasargument" visibility="public" name="hasArgument" returnType="bool" params={[{"type":"int|string","name":"position","default":null}]}>
Returns an argument in a specific position
</ApiItem>
<ApiItem href="#annotationsparserannotation-numberarguments" visibility="public" name="numberArguments" returnType="int" params={[]}>
Returns the number of arguments that the attribute has
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="arguments" type="array" default="[]">
Attribute Arguments
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
Attribute Name
</ApiItem>

### Methods

<h4 id="annotationsparserannotation-__construct"><code>__construct()</code></h4>

```php
public function __construct( ReflectionAttribute $reflectionData );
```

Constructor

<h4 id="annotationsparserannotation-getargument"><code>getArgument()</code></h4>

```php
public function getArgument( int|string $position ): mixed;
```

Returns an argument in a specific position

<h4 id="annotationsparserannotation-getarguments"><code>getArguments()</code></h4>

```php
public function getArguments(): array;
```

Returns the expression arguments

<h4 id="annotationsparserannotation-getcleanname"><code>getCleanName()</code></h4>

```php
public function getCleanName(): string;
```

Returns the attribute's base name

<h4 id="annotationsparserannotation-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the attribute's name

<h4 id="annotationsparserannotation-getnamedargument"><code>getNamedArgument()</code></h4>

```php
public function getNamedArgument( string $name ): mixed;
```

Returns a named argument

<h4 id="annotationsparserannotation-getnamedparameter"><code>getNamedParameter()</code></h4>

```php
public function getNamedParameter( string $name ): mixed;
```

Returns a named parameter

<h4 id="annotationsparserannotation-hasargument"><code>hasArgument()</code></h4>

```php
public function hasArgument( int|string $position ): bool;
```

Returns an argument in a specific position

<h4 id="annotationsparserannotation-numberarguments"><code>numberArguments()</code></h4>

```php
public function numberArguments(): int;
```

Returns the number of arguments that the attribute has

## Annotations\Parser\Collection

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

@template TKey of int
@template TValue of Annotation
```

- **`Phalcon\Annotations\Parser\Collection`** - implements `\IteratorAggregate`

`ArrayIterator` · `IteratorAggregate` · `Traversable`

### Method Summary

<ApiItem href="#annotationsparsercollection-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"reflectionData","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#annotationsparsercollection-get" visibility="public" name="get" returnType="Annotation" params={[{"type":"string","name":"name","default":null}]}>
Returns the first annotation that match a name
</ApiItem>
<ApiItem href="#annotationsparsercollection-getall" visibility="public" name="getAll" returnType="array" params={[{"type":"string","name":"name","default":null}]}>
Returns all the annotations that match a name
</ApiItem>
<ApiItem href="#annotationsparsercollection-getannotations" visibility="public" name="getAnnotations" returnType="Traversable" params={[]}>
</ApiItem>
<ApiItem href="#annotationsparsercollection-getiterator" visibility="public" name="getIterator" returnType="Traversable" params={[]}>
</ApiItem>
<ApiItem href="#annotationsparsercollection-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check if an annotation exists in a collection
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="annotations" type="array" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="position" type="int" default="0">
</ApiItem>

### Methods

<h4 id="annotationsparsercollection-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $reflectionData = [] );
```

Constructor

<h4 id="annotationsparsercollection-get"><code>get()</code></h4>

```php
public function get( string $name ): Annotation;
```

Returns the first annotation that match a name

<h4 id="annotationsparsercollection-getall"><code>getAll()</code></h4>

```php
public function getAll( string $name ): array;
```

Returns all the annotations that match a name

<h4 id="annotationsparsercollection-getannotations"><code>getAnnotations()</code></h4>

```php
public function getAnnotations(): Traversable;
```

<h4 id="annotationsparsercollection-getiterator"><code>getIterator()</code></h4>

```php
public function getIterator(): Traversable;
```

<h4 id="annotationsparsercollection-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check if an annotation exists in a collection

## Annotations\Parser\Exception

Class

Class for exceptions thrown by Phalcon\Annotations

- `\Exception`
- **`Phalcon\Annotations\Parser\Exception`**

## Annotations\Parser\Reader

Class

Parses classes returning an array with the found annotations

- **`Phalcon\Annotations\Parser\Reader`** - implements [`Phalcon\Annotations\Parser\ReaderInterface`](#annotationsparserreaderinterface)

`ReflectionClass` · `ReflectionException`

### Method Summary

<ApiItem href="#annotationsparserreader-parse" visibility="public" name="parse" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
Reads annotations from the class, its methods and/or properties
</ApiItem>

### Methods

<h4 id="annotationsparserreader-parse"><code>parse()</code></h4>

```php
public function parse( string $className ): array;
```

Reads annotations from the class, its methods and/or properties

## Annotations\Parser\ReaderInterface

Interface

Parses attributes returning an array with the found attributes

- **`Phalcon\Annotations\Parser\ReaderInterface`**

### Method Summary

<ApiItem href="#annotationsparserreaderinterface-parse" visibility="public" name="parse" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
Reads attributes from the class, properties and methods
</ApiItem>

### Methods

<h4 id="annotationsparserreaderinterface-parse"><code>parse()</code></h4>

```php
public function parse( string $className ): array;
```

Reads attributes from the class, properties and methods

## Annotations\Parser\Reflection

Class

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

- **`Phalcon\Annotations\Parser\Reflection`**

### Method Summary

<ApiItem href="#annotationsparserreflection-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"reflectionData","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#annotationsparserreflection-getclassannotations" visibility="public" name="getClassAnnotations" returnType="Collection|null" params={[]}>
Returns the annotations found in the class docblock
</ApiItem>
<ApiItem href="#annotationsparserreflection-getconstantsannotations" visibility="public" name="getConstantsAnnotations" returnType="array" params={[]}>
Returns the annotations found as constants
</ApiItem>
<ApiItem href="#annotationsparserreflection-getmethodsannotations" visibility="public" name="getMethodsAnnotations" returnType="array" params={[]}>
Returns the annotations found at methods
</ApiItem>
<ApiItem href="#annotationsparserreflection-getpropertiesannotations" visibility="public" name="getPropertiesAnnotations" returnType="array" params={[]}>
Returns the annotations found at properties
</ApiItem>
<ApiItem href="#annotationsparserreflection-getreflectiondata" visibility="public" name="getReflectionData" returnType="array" params={[]}>
Returns the raw parsing intermediate definitions used to construct the
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="classAnnotations" type="Collection|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="constantAnnotations" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methodAnnotations" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="propertyAnnotations" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="reflectionData" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="annotationsparserreflection-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $reflectionData = [] );
```

Constructor

<h4 id="annotationsparserreflection-getclassannotations"><code>getClassAnnotations()</code></h4>

```php
public function getClassAnnotations(): Collection|null;
```

Returns the annotations found in the class docblock

<h4 id="annotationsparserreflection-getconstantsannotations"><code>getConstantsAnnotations()</code></h4>

```php
public function getConstantsAnnotations(): array;
```

Returns the annotations found as constants

<h4 id="annotationsparserreflection-getmethodsannotations"><code>getMethodsAnnotations()</code></h4>

```php
public function getMethodsAnnotations(): array;
```

Returns the annotations found at methods

<h4 id="annotationsparserreflection-getpropertiesannotations"><code>getPropertiesAnnotations()</code></h4>

```php
public function getPropertiesAnnotations(): array;
```

Returns the annotations found at properties

<h4 id="annotationsparserreflection-getreflectiondata"><code>getReflectionData()</code></h4>

```php
public function getReflectionData(): array;
```

Returns the raw parsing intermediate definitions used to construct the
reflection

## Annotations\Router\Connect

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Connect`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterconnect-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterconnect-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Delete

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Delete`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterdelete-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterdelete-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Get

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Get`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterget-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterget-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Head

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Head`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterhead-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterhead-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Options

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Options`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouteroptions-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouteroptions-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Patch

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Patch`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterpatch-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterpatch-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Post

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Post`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterpost-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterpost-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Purge

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Purge`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterpurge-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterpurge-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Put

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Put`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterput-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsrouterput-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

## Annotations\Router\Route

Class

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

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsrouterroute-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"route","default":null},{"type":"array|string","name":"methods","default":"[...]"},{"type":"string|null","name":"name","default":"null"},{"type":"array","name":"paths","default":"[]"},{"type":"array","name":"converters","default":"[]"},{"type":"array|string|null","name":"beforeMatch","default":"null"}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="public" name="beforeMatch" type="array|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="public" name="converters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="public" name="methods" type="array|string" default="[...]">
</ApiItem>
<ApiItem kind="property" visibility="public" name="name" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="public" name="paths" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="public" name="route" type="string" default="">
</ApiItem>

### Methods

<h4 id="annotationsrouterroute-__construct"><code>__construct()</code></h4>

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

Class

- **`Phalcon\Annotations\Router\RoutePrefix`**

`Attribute`

### Method Summary

<ApiItem href="#annotationsrouterrouteprefix-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"prefix","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="public" name="prefix" type="string" default="">
</ApiItem>

### Methods

<h4 id="annotationsrouterrouteprefix-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $prefix );
```

## Annotations\Router\Trace

Class

- [`Phalcon\Annotations\Router\Route`](#annotationsrouterroute)
- **`Phalcon\Annotations\Router\Trace`**

`Attribute` · `Phalcon\Http\Message\RequestMethodInterface`

### Method Summary

<ApiItem href="#annotationsroutertrace-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"params","default":null}]}>
</ApiItem>

### Methods

<h4 id="annotationsroutertrace-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $params );
```

Source: https://docs.phalcon.io/6.0/api/phalcon_annotations/index.mdx
