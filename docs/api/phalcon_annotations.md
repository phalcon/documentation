---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Annotations\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Annotations\Adapter`

-   __Uses__
    
    - `Phalcon\Annotations\Collection`
    - `Phalcon\Annotations\Exception`
    - `Phalcon\Annotations\Reader`
    - `Phalcon\Annotations\ReaderInterface`
    - `Phalcon\Annotations\Reflection`

-   __Extends__
    

-   __Implements__
    
    - `AdapterInterface`

This is the base class for Phalcon\Annotations adapters


### Properties
```php
/**
 * @var array
 */
protected $annotations;

/**
 * Maximum number of class annotation entries retained in the
 * in-memory cache. 0 (default) keeps the original unbounded
 * behavior; a positive value clears the cache when adding a new
 * class would exceed it.
 *
 * @var int
 */
protected $annotationsLimit = 0;

/**
 * @var Reader
 */
protected $reader;

```

### Methods

```php
public function get( mixed $className ): Reflection;
```
Parses or retrieves all the annotations found in a class


```php
public function getAnnotationsLimit(): int;
```
Returns the configured annotations-cache cap (0 = unlimited).
See setAnnotationsLimit().


```php
public function getConstant( string $className, string $constantName ): Collection;
```
Returns the annotations found in a specific constant


```php
public function getConstants( string $className ): array;
```
Returns the annotations found in all the class' constants


```php
public function getMethod( string $className, string $methodName ): Collection;
```
Returns the annotations found in a specific method


```php
public function getMethods( string $className ): array;
```
Returns the annotations found in all the class' methods


```php
public function getProperties( string $className ): array;
```
Returns the annotations found in all the class' properties


```php
public function getProperty( string $className, string $propertyName ): Collection;
```
Returns the annotations found in a specific property


```php
public function getReader(): ReaderInterface;
```
Returns the annotation reader


```php
public function setAnnotationsLimit( int $annotationsLimit );
```
Caps the number of class entries retained in the annotations
cache. 0 disables the cap (the default; preserves the original
unbounded behavior). When the cap is exceeded, the cache is
cleared and repopulated on subsequent reads.


```php
public function setReader( ReaderInterface $reader );
```
Sets the annotations parser




## Annotations\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Annotations\Adapter`

-   __Uses__
    
    - `Phalcon\Annotations\Collection`
    - `Phalcon\Annotations\ReaderInterface`
    - `Phalcon\Annotations\Reflection`

-   __Extends__
    

-   __Implements__
    

This interface must be implemented by adapters in Phalcon\Annotations


### Methods

```php
public function get( string $className ): Reflection;
```
Parses or retrieves all the annotations found in a class


```php
public function getConstant( string $className, string $constantName ): Collection;
```
Returns the annotations found in a specific constant


```php
public function getConstants( string $className ): array;
```
Returns the annotations found in all the class' constants


```php
public function getMethod( string $className, string $methodName ): Collection;
```
Returns the annotations found in a specific method


```php
public function getMethods( string $className ): array;
```
Returns the annotations found in all the class' methods


```php
public function getProperties( string $className ): array;
```
Returns the annotations found in all the class' methods


```php
public function getProperty( string $className, string $propertyName ): Collection;
```
Returns the annotations found in a specific property


```php
public function getReader(): ReaderInterface;
```
Returns the annotation reader


```php
public function setReader( ReaderInterface $reader );
```
Sets the annotations parser




## Annotations\Adapter\Apcu 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/Apcu.zep)


-   __Namespace__

    - `Phalcon\Annotations\Adapter`

-   __Uses__
    
    - `Phalcon\Annotations\Reflection`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Stores the parsed annotations in APCu. This adapter is suitable for production

```php
use Phalcon\Annotations\Adapter\Apcu;

$annotations = new Apcu();
```


### Properties
```php
/**
 * @var string
 */
protected $prefix = ;

/**
 * @var int
 */
protected $ttl = 172800;

```

### Methods

```php
public function __construct( array $options = [] );
```



```php
public function read( string $key ): Reflection | bool;
```
Reads parsed annotations from APCu


```php
public function write( string $key, Reflection $data ): bool;
```
Writes parsed annotations to APCu




## Annotations\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/Memory.zep)


-   __Namespace__

    - `Phalcon\Annotations\Adapter`

-   __Uses__
    
    - `Phalcon\Annotations\Reflection`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Stores the parsed annotations in memory. This adapter is the suitable
development/testing


### Properties
```php
/**
 * @var mixed
 */
protected $data;

```

### Methods

```php
public function __construct( array $options = [] );
```



```php
public function read( string $key ): Reflection | bool;
```
Reads parsed annotations from memory


```php
public function write( string $key, Reflection $data ): void;
```
Writes parsed annotations to memory




## Annotations\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Annotations\Adapter`

-   __Uses__
    
    - `Phalcon\Annotations\Exception`
    - `Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable`
    - `Phalcon\Annotations\Exceptions\CannotReadAnnotationData`
    - `Phalcon\Annotations\Reflection`
    - `RuntimeException`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Stores the parsed annotations in files. This adapter is suitable for production

```php
use Phalcon\Annotations\Adapter\Stream;

$annotations = new Stream(
    [
        "annotationsDir" => "app/cache/annotations/",
    ]
);
```


### Properties
```php
/**
 * @var string
 */
protected $annotationsDir = ./;

```

### Methods

```php
public function __construct( array $options = [] );
```



```php
public function read( string $key ): Reflection | bool | int;
```
Reads parsed annotations from files


```php
public function write( string $key, Reflection $data ): void;
```
Writes parsed annotations to files




## Annotations\Annotation 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Annotation.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    
    - `Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`

-   __Extends__
    

-   __Implements__
    

Represents a single annotation in an annotations collection


### Properties
```php
/**
 * Annotation Arguments
 *
 * @var array
 */
protected $arguments;

/**
 * Annotation ExprArguments
 *
 * @var array
 */
protected $exprArguments;

/**
 * Annotation Name
 *
 * @var string|null
 */
protected $name;

```

### Methods

```php
public function __construct( array $reflectionData );
```
Phalcon\Annotations\Annotation constructor


```php
public function getArgument( mixed $position ): mixed | null;
```
Returns an argument in a specific position


```php
public function getArguments(): array;
```
Returns the expression arguments


```php
public function getExprArguments(): array;
```
Returns the expression arguments without resolving


```php
public function getExpression( array $expr ): mixed;
```
Resolves an annotation expression


```php
public function getName(): null | string;
```
Returns the annotation's name


```php
public function getNamedArgument( string $name ): mixed | null;
```
Returns a named argument


```php
public function getNamedParameter( string $name ): mixed;
```
Returns a named parameter


```php
public function hasArgument( mixed $position ): bool;
```
Returns an argument in a specific position


```php
public function numberArguments(): int;
```
Returns the number of arguments that the annotation has




## Annotations\AnnotationsFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/AnnotationsFactory.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    
    - `Phalcon\Annotations\Adapter\AdapterInterface`
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Support\Helper\Arr\Get`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

Factory to create annotations components


### Methods

```php
public function __construct( array $services = [] );
```
AdapterFactory constructor.


```php
public function load( mixed $config ): mixed;
```



```php
public function newInstance( string $name, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter


```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available adapters




## Annotations\Collection 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Collection.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    
    - `Countable`
    - `Iterator`
    - `Phalcon\Annotations\Exceptions\AnnotationNotFound`

-   __Extends__
    

-   __Implements__
    
    - `Countable`
    - `Iterator`

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


### Properties
```php
/**
 * @var array
 */
protected $annotations;

/**
 * @var int
 */
protected $position = ;

```

### Methods

```php
public function __construct( array $reflectionData = [] );
```
Phalcon\Annotations\Collection constructor


```php
public function count(): int;
```
Returns the number of annotations in the collection


```php
public function current(): mixed;
```
Returns the current annotation in the iterator


```php
public function get( string $name ): Annotation;
```
Returns the first annotation that match a name


```php
public function getAll( string $name ): Annotation[];
```
Returns all the annotations that match a name


```php
public function getAnnotations(): Annotation[];
```
Returns the internal annotations as an array


```php
public function has( string $name ): bool;
```
Check if an annotation exists in a collection


```php
public function key(): int;
```
Returns the current position/key in the iterator


```php
public function next(): void;
```
Moves the internal iteration pointer to the next position


```php
public function rewind(): void;
```
Rewinds the internal iterator


```php
public function valid(): bool;
```
Check if the current annotation in the iterator is valid




## Annotations\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exception.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Class for exceptions thrown by Phalcon\Annotations



## Annotations\Exceptions\AnnotationNotFound 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/AnnotationNotFound.zep)


-   __Namespace__

    - `Phalcon\Annotations\Exceptions`

-   __Uses__
    
    - `Phalcon\Annotations\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $name );
```





## Annotations\Exceptions\AnnotationsDirectoryNotWritable 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/AnnotationsDirectoryNotWritable.zep)


-   __Namespace__

    - `Phalcon\Annotations\Exceptions`

-   __Uses__
    
    - `Phalcon\Annotations\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct();
```





## Annotations\Exceptions\CannotReadAnnotationData 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/CannotReadAnnotationData.zep)


-   __Namespace__

    - `Phalcon\Annotations\Exceptions`

-   __Uses__
    
    - `RuntimeException`

-   __Extends__
    
    `RuntimeException`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct();
```





## Annotations\Exceptions\UnknownAnnotationExpression 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Exceptions/UnknownAnnotationExpression.zep)


-   __Namespace__

    - `Phalcon\Annotations\Exceptions`

-   __Uses__
    
    - `Phalcon\Annotations\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $type );
```





## Annotations\Reader 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Reader.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    
    - `ReflectionClass`

-   __Extends__
    

-   __Implements__
    
    - `ReaderInterface`

Parses docblocks returning an array with the found annotations


### Methods

```php
public function parse( string $className ): array;
```
Reads annotations from the class docblocks, its methods and/or properties


```php
public static function parseDocBlock( string $docBlock, mixed $file = null, mixed $line = null ): array;
```
Parses a raw doc block returning the annotations found




## Annotations\ReaderInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/ReaderInterface.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Parses docblocks returning an array with the found annotations


### Methods

```php
public function parse( string $className ): array;
```
Reads annotations from the class docblocks, its constants, properties and methods


```php
public static function parseDocBlock( string $docBlock, mixed $file = null, mixed $line = null ): array;
```
Parses a raw docblock returning the annotations found




## Annotations\Reflection 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Annotations/Reflection.zep)


-   __Namespace__

    - `Phalcon\Annotations`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

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


### Properties
```php
/**
 * @var Collection|null
 */
protected $classAnnotations;

/**
 * @var array
 */
protected $constantAnnotations;

/**
 * @var array
 */
protected $propertyAnnotations;

/**
 * @var array
 */
protected $methodAnnotations;

/**
 * @var array
 */
protected $reflectionData;

```

### Methods

```php
public function __construct( array $reflectionData = [] );
```



```php
public function getClassAnnotations(): Collection | null;
```
Returns the annotations found in the class docblock


```php
public function getConstantsAnnotations(): Collection[];
```
Returns the annotations found in the constants' docblocks


```php
public function getMethodsAnnotations(): Collection[];
```
Returns the annotations found in the methods' docblocks


```php
public function getPropertiesAnnotations(): Collection[];
```
Returns the annotations found in the properties' docblocks


```php
public function getReflectionData(): array;
```
Returns the raw parsing intermediate definitions used to construct the
reflection


