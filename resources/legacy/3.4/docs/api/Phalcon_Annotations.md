---
layout: default
title: 'Phalcon\Annotations'
---
# Abstract class **Phalcon\Annotations\Adapter**

*implements* [Phalcon\Annotations\AdapterInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is the base class for Phalcon\Annotations adapters


## Methods
public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader)

Sets the annotations parser



public  **getReader** ()

Returns the annotation reader



public  **get** (*string* | *object* $className)

Parses or retrieves all the annotations found in a class



public  **getMethods** (*mixed* $className)

Returns the annotations found in all the class' methods



public  **getMethod** (*mixed* $className, *mixed* $methodName)

Returns the annotations found in a specific method



public  **getProperties** (*mixed* $className)

Returns the annotations found in all the class' methods



public  **getProperty** (*mixed* $className, *mixed* $propertyName)

Returns the annotations found in a specific property


<hr>

# Class **Phalcon\Annotations\Adapter\Apc**

*extends* abstract class [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

*implements* [Phalcon\Annotations\AdapterInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapter/apc.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores the parsed annotations in APC. This adapter is suitable for production

```php
<?php

use Phalcon\Annotations\Adapter\Apc;

$annotations = new Apc();

```


## Methods
public  **__construct** ([*array* $options])

Phalcon\Annotations\Adapter\Apc constructor



public  **read** (*mixed* $key)

Reads parsed annotations from APC



public  **write** (*mixed* $key, [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) $data)

Writes parsed annotations to APC



public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Sets the annotations parser



public  **getReader** () inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotation reader



public  **get** (*string* | *object* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Parses or retrieves all the annotations found in a class



public  **getMethods** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getMethod** (*mixed* $className, *mixed* $methodName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific method



public  **getProperties** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getProperty** (*mixed* $className, *mixed* $propertyName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific property


<hr>


# Class **Phalcon\Annotations\Adapter\Apcu**

*extends* abstract class [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

*implements* [Phalcon\Annotations\AdapterInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapter/apcu.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores the parsed annotations in APCu. This adapter is suitable for production

```php
<?php

use Phalcon\Annotations\Adapter\Apcu;

$annotations = new Apcu();

```


## Methods
public  **__construct** ([*array* $options])

Phalcon\Annotations\Adapter\Apcu constructor



public  **read** (*mixed* $key)

Reads parsed annotations from APCu



public  **write** (*mixed* $key, [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) $data)

Writes parsed annotations to APCu



public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Sets the annotations parser



public  **getReader** () inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotation reader



public  **get** (*string* | *object* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Parses or retrieves all the annotations found in a class



public  **getMethods** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getMethod** (*mixed* $className, *mixed* $methodName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific method



public  **getProperties** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getProperty** (*mixed* $className, *mixed* $propertyName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific property


<hr>


# Class **Phalcon\Annotations\Adapter\Files**

*extends* abstract class [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

*implements* [Phalcon\Annotations\AdapterInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapter/files.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores the parsed annotations in files. This adapter is suitable for production

```php
<?php

use Phalcon\Annotations\Adapter\Files;

$annotations = new Files(
    [
        "annotationsDir" => "app/cache/annotations/",
    ]
);

```


## Methods
public  **__construct** ([*array* $options])

Phalcon\Annotations\Adapter\Files constructor



public [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) **read** (*string* $key)

Reads parsed annotations from files



public  **write** (*mixed* $key, [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) $data)

Writes parsed annotations to files



public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Sets the annotations parser



public  **getReader** () inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotation reader



public  **get** (*string* | *object* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Parses or retrieves all the annotations found in a class



public  **getMethods** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getMethod** (*mixed* $className, *mixed* $methodName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific method



public  **getProperties** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getProperty** (*mixed* $className, *mixed* $propertyName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific property


<hr>


# Class **Phalcon\Annotations\Adapter\Memory**

*extends* abstract class [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

*implements* [Phalcon\Annotations\AdapterInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapter/memory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores the parsed annotations in memory. This adapter is the suitable development/testing


## Methods
public  **read** (*mixed* $key)

Reads parsed annotations from memory



public  **write** (*mixed* $key, [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) $data)

Writes parsed annotations to memory



public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Sets the annotations parser



public  **getReader** () inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotation reader



public  **get** (*string* | *object* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Parses or retrieves all the annotations found in a class



public  **getMethods** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getMethod** (*mixed* $className, *mixed* $methodName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific method



public  **getProperties** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getProperty** (*mixed* $className, *mixed* $propertyName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific property


<hr>


# Class **Phalcon\Annotations\Adapter\Xcache**

*extends* abstract class [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

*implements* [Phalcon\Annotations\AdapterInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapter/xcache.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores the parsed annotations to XCache. This adapter is suitable for production

```php
<?php

$annotations = new \Phalcon\Annotations\Adapter\Xcache();

```


## Methods
public [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) **read** (*string* $key)

Reads parsed annotations from XCache



public  **write** (*mixed* $key, [Phalcon\Annotations\Reflection](Phalcon_Annotations.md) $data)

Writes parsed annotations to XCache



public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Sets the annotations parser



public  **getReader** () inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotation reader



public  **get** (*string* | *object* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Parses or retrieves all the annotations found in a class



public  **getMethods** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getMethod** (*mixed* $className, *mixed* $methodName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific method



public  **getProperties** (*mixed* $className) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in all the class' methods



public  **getProperty** (*mixed* $className, *mixed* $propertyName) inherited from [Phalcon\Annotations\Adapter](Phalcon_Annotations.md)

Returns the annotations found in a specific property


<hr>


# Interface **Phalcon\Annotations\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This interface must be implemented by adapters in Phalcon\Annotations

## Methods
abstract public  **setReader** ([Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md) $reader)

Sets the annotations parser


abstract public  **getReader** ()

Returns the annotation reader


abstract public  **get** (*string|object* $className)

Parses or retrieves all the annotations found in a class


abstract public  **getMethods** (*string* $className)

Returns the annotations found in all the class methods


abstract public  **getMethod** (*string* $className, *string* $methodName)

Returns the annotations found in a specific method


abstract public  **getProperties** (*string* $className)

Returns the annotations found in all the class methods


abstract public  **getProperty** (*string* $className, *string* $propertyName)

Returns the annotations found in a specific property

<hr>


# Class **Phalcon\Annotations\Annotation**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/annotation.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents a single annotation in an annotations collection


## Methods
public  **__construct** (*array* $reflectionData)

Phalcon\Annotations\Annotation constructor



public  **getName** ()

Returns the annotation's name



public *mixed* **getExpression** (*array* $expr)

Resolves an annotation expression



public *array* **getExprArguments** ()

Returns the expression arguments without resolving



public *array* **getArguments** ()

Returns the expression arguments



public  **numberArguments** ()

Returns the number of arguments that the annotation has



public *mixed* **getArgument** (*int* | *string* $position)

Returns an argument in a specific position



public *boolean* **hasArgument** (*int* | *string* $position)

Returns an argument in a specific position



public *mixed* **getNamedArgument** (*mixed* $name)

Returns a named argument



public *mixed* **getNamedParameter** (*mixed* $name)

Returns a named parameter


<hr>


# Class **Phalcon\Annotations\Collection**

*implements* [Iterator](https://php.net/manual/en/class.iterator.php), [Traversable](https://php.net/manual/en/class.traversable.php), [Countable](https://php.net/manual/en/class.countable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/collection.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents a collection of annotations. This class allows to traverse a group of annotations easily

```php
<?php

//Traverse annotations
foreach ($classAnnotations as $annotation) {
    echo "Name=", $annotation->getName(), PHP_EOL;
}

//Check if the annotations has a specific
var_dump($classAnnotations->has("Cacheable"));

//Get an specific annotation in the collection
$annotation = $classAnnotations->get("Cacheable");

```


## Methods
public  **__construct** ([*array* $reflectionData])

Phalcon\Annotations\Collection constructor



public  **count** ()

Returns the number of annotations in the collection



public  **rewind** ()

Rewinds the internal iterator



public [Phalcon\Annotations\Annotation](Phalcon_Annotations.md) **current** ()

Returns the current annotation in the iterator



public  **key** ()

Returns the current position/key in the iterator



public  **next** ()

Moves the internal iteration pointer to the next position



public  **valid** ()

Check if the current annotation in the iterator is valid



public  **getAnnotations** ()

Returns the internal annotations as an array



public  **get** (*string* $name)

Returns the first annotation that match a name



public  **getAll** (*string* $name)

Returns all the annotations that match a name



public  **has** (*string* $name)

Check if an annotation exists in a collection


<hr>


# Class **Phalcon\Annotations\Exception**

*extends* class [Exception](https://php.net/manual/en/class.exception.php)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception


<hr>


# Class **Phalcon\Annotations\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Annotations Adapter class using 'adapter' option

```php
<?php

use Phalcon\Annotations\Factory;

$options = [
    "prefix"   => "annotations",
    "lifetime" => "3600",
    "adapter"  => "apc",
];
$annotations = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config) inherited from [Phalcon\Factory](Phalcon_Factory.md)

...


<hr>


# Class **Phalcon\Annotations\Reader**

*implements* [Phalcon\Annotations\ReaderInterface](Phalcon_Annotations.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/reader.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Parses docblocks returning an array with the found annotations


## Methods
public  **parse** (*mixed* $className)

Reads annotations from the class dockblocks, its methods and/or properties



public static  **parseDocBlock** (*mixed* $docBlock, [*mixed* $file], [*mixed* $line])

Parses a raw doc block returning the annotations found


<hr>

# Interface **Phalcon\Annotations\ReaderInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/readerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **parse** (*mixed* $className)

Reads annotations from the class dockblocks, its methods and/or properties


abstract public static  **parseDocBlock** (*mixed* $docBlock, [*mixed* $file], [*mixed* $line])

Parses a raw doc block returning the annotations found


<hr>


# Class **Phalcon\Annotations\Reflection**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/annotations/reflection.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to manipulate the annotations reflection in an OO manner

```php
<?php

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


## Methods
public  **__construct** ([*array* $reflectionData])

Phalcon\Annotations\Reflection constructor



public  **getClassAnnotations** ()

Returns the annotations found in the class docblock



public  **getMethodsAnnotations** ()

Returns the annotations found in the methods' docblocks



public  **getPropertiesAnnotations** ()

Returns the annotations found in the properties' docblocks



public *array* **getReflectionData** ()

Returns the raw parsing intermediate definitions used to construct the reflection



public static *array data* **__set_state** (*mixed* $data)

Restores the state of a Phalcon\Annotations\Reflection variable export
