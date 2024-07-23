---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Support\Collection 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    
    - `ArrayAccess`
    - `ArrayIterator`
    - `Countable`
    - `InvalidArgumentException`
    - `IteratorAggregate`
    - `JsonSerializable`
    - `Phalcon\Support\Collection\CollectionInterface`
    - `Serializable`
    - `Traversable`

-   __Extends__
    

-   __Implements__
    
    - `ArrayAccess`
    - `CollectionInterface`
    - `Countable`
    - `IteratorAggregate`
    - `JsonSerializable`
    - `Serializable`

`Phalcon\Support\Collection` is a supercharged object oriented array. It implements:
- [ArrayAccess](https://www.php.net/manual/en/class.arrayaccess.php)
- [Countable](https://www.php.net/manual/en/class.countable.php)
- [IteratorAggregate](https://www.php.net/manual/en/class.iteratoraggregate.php)
- [JsonSerializable](https://www.php.net/manual/en/class.jsonserializable.php)
- [Serializable](https://www.php.net/manual/en/class.serializable.php)

It can be used in any part of the application that needs collection of data
Such implementations are for instance accessing globals `$_GET`, `$_POST`
etc.

@property array $data
@property bool  $insensitive
@property array $lowerKeys


### Properties
```php
/**
 * @var array
 */
protected $data;

/**
 * @var bool
 */
protected $insensitive = true;

/**
 * @var array
 */
protected $lowerKeys;

```

### Methods

```php
public function __construct( array $data = [], bool $insensitive = bool );
```
Collection constructor.


```php
public function __get( string $element ): mixed;
```
Magic getter to get an element from the collection


```php
public function __isset( string $element ): bool;
```
Magic isset to check whether an element exists or not


```php
public function __serialize(): array;
```



```php
public function __set( string $element, mixed $value ): void;
```
Magic setter to assign values to an element


```php
public function __unserialize( array $data ): void;
```



```php
public function __unset( string $element ): void;
```
Magic unset to remove an element from the collection


```php
public function clear(): void;
```
Clears the internal collection


```php
public function count(): int;
```
Count elements of an object.
See [count](https://php.net/manual/en/countable.count.php)


```php
public function get( string $element, mixed $defaultValue = null, string $cast = null ): mixed;
```
Get the element from the collection


```php
public function getIterator(): Traversable;
```
Returns the iterator of the class


```php
public function getKeys( bool $insensitive = bool ): array;
```
Return the keys as an array


```php
public function getValues(): array;
```
Return the values as an array


```php
public function has( string $element ): bool;
```
Determines whether an element is present in the collection.


```php
public function init( array $data = [] ): void;
```
Initialize internal array


```php
public function jsonSerialize(): array;
```
Specify data which should be serialized to JSON
See [jsonSerialize](https://php.net/manual/en/jsonserializable.jsonserialize.php)


```php
public function offsetExists( mixed $element ): bool;
```
Whether a offset exists
See [offsetExists](https://php.net/manual/en/arrayaccess.offsetexists.php)


```php
public function offsetGet( mixed $element ): mixed;
```
Offset to retrieve
See [offsetGet](https://php.net/manual/en/arrayaccess.offsetget.php)


```php
public function offsetSet( mixed $offset, mixed $value ): void;
```
Offset to set
See [offsetSet](https://php.net/manual/en/arrayaccess.offsetset.php)


```php
public function offsetUnset( mixed $element ): void;
```
Offset to unset
See [offsetUnset](https://php.net/manual/en/arrayaccess.offsetunset.php)


```php
public function remove( string $element ): void;
```
Delete the element from the collection


```php
public function serialize(): string | null;
```
String representation of object
See [serialize](https://php.net/manual/en/serializable.serialize.php)


```php
public function set( string $element, mixed $value ): void;
```
Set an element in the collection


```php
public function toArray(): array;
```
Returns the object in an array format


```php
public function toJson( int $options = int ): string;
```
Returns the object in a JSON format

The default string uses the following options for json_encode

`JSON_HEX_TAG`, `JSON_HEX_APOS`, `JSON_HEX_AMP`, `JSON_HEX_QUOT`,
`JSON_UNESCAPED_SLASHES`

See [rfc4627](https://www.ietf.org/rfc/rfc4627.txt)


```php
public function unserialize( string $data ): void;
```
Constructs the object
See [unserialize](https://php.net/manual/en/serializable.unserialize.php)


```php
protected function phpJsonEncode( mixed $value, int $flags = int, int $depth = int );
```
@todo to be removed when we get traits


```php
protected function processKey( string $element ): string;
```
Checks if we need insensitive keys and if so, converts the element to
lowercase


```php
protected function setData( string $element, mixed $value ): void;
```
Internal method to set data




## Support\Collection\CollectionInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/CollectionInterface.zep)


-   __Namespace__

    - `Phalcon\Support\Collection`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Support\Collection\CollectionInterface

Interface for Phalcon\Support\Collection class


### Methods

```php
public function __get( string $element ): mixed;
```



```php
public function __isset( string $element ): bool;
```



```php
public function __set( string $element, mixed $value ): void;
```



```php
public function __unset( string $element ): void;
```



```php
public function clear(): void;
```



```php
public function get( string $element, mixed $defaultValue = null, string $cast = null ): mixed;
```



```php
public function getKeys( bool $insensitive = bool ): array;
```



```php
public function getValues(): array;
```



```php
public function has( string $element ): bool;
```



```php
public function init( array $data = [] ): void;
```



```php
public function remove( string $element ): void;
```



```php
public function set( string $element, mixed $value ): void;
```



```php
public function toArray(): array;
```



```php
public function toJson( int $options = int ): string;
```





## Support\Collection\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/Exception.zep)


-   __Namespace__

    - `Phalcon\Support\Collection`

-   __Uses__
    
    - `Throwable`

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions for the Collection object



## Support\Collection\ReadOnlyCollection 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Collection/ReadOnlyCollection.zep)


-   __Namespace__

    - `Phalcon\Support\Collection`

-   __Uses__
    
    - `Phalcon\Support\Collection`

-   __Extends__
    
    `Collection`

-   __Implements__
    

A read only Collection object


### Methods

```php
public function remove( string $element ): void;
```
Delete the element from the collection


```php
public function set( string $element, mixed $value ): void;
```
Set an element in the collection




## Support\Debug 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    
    - `ErrorException`
    - `Phalcon\Support\Debug\Exception`
    - `ReflectionClass`
    - `ReflectionException`
    - `ReflectionFunction`
    - `Throwable`

-   __Extends__
    

-   __Implements__
    

Provides debug capabilities to Phalcon applications


### Properties
```php
/**
 * @var array
 */
protected $blacklist;

/**
 * @var array
 */
protected $data;

/**
 * @var bool
 */
protected $hideDocumentRoot = false;

/**
 * @var bool
 */
protected static $isActive = false;

/**
 * @var bool
 */
protected $showBackTrace = true;

/**
 * @var bool
 */
protected $showFileFragment = false;

/**
 * @var bool
 */
protected $showFiles = true;

/**
 * @var string
    */
protected $uri = https://assets.phalcon.io/debug/5.0.x/;

/**
 * @var Version
 */
private $version;

```

### Methods

```php
public function __construct();
```
Constructor setting a reusable version object


```php
public function clearVars(): Debug;
```
Clears are variables added previously


```php
public function debugVar( mixed $varz ): Debug;
```
Adds a variable to the debug output


```php
public function getCssSources(): string;
```
Returns the CSS sources


```php
public function getJsSources(): string;
```
Returns the JavaScript sources


```php
public function getVersion(): string;
```
Generates a link to the current version documentation


```php
public function halt(): void;
```
Halts the request showing a backtrace

@throws Exception


```php
public function listen( bool $exceptions = bool, bool $lowSeverity = bool ): Debug;
```
Listen for uncaught exceptions and non silent notices or warnings


```php
public function listenExceptions(): Debug;
```
Listen for uncaught exceptions


```php
public function listenLowSeverity(): Debug;
```
Listen for non silent notices or warnings


```php
public function onUncaughtException( \Throwable $exception ): bool;
```
Handles uncaught exceptions


```php
public function onUncaughtLowSeverity( mixed $severity, mixed $message, mixed $file, mixed $line, mixed $context ): void;
```
Throws an exception when a notice or warning is raised


```php
public function renderHtml( \Throwable $exception ): string;
```
Render exception to html format.


```php
public function setBlacklist( array $blacklist ): Debug;
```
Sets if files the exception's backtrace must be showed


```php
public function setShowBackTrace( bool $showBackTrace ): Debug;
```
Sets if files the exception's backtrace must be showed


```php
public function setShowFileFragment( bool $showFileFragment ): Debug;
```
Sets if files must be completely opened and showed in the output
or just the fragment related to the exception


```php
public function setShowFiles( bool $showFiles ): Debug;
```
Set if files part of the backtrace must be shown in the output


```php
public function setUri( string $uri ): Debug;
```
Change the base URI for static resources


```php
protected function escapeString( string $value ): string;
```
Escapes a string with htmlentities


```php
protected function getArrayDump( array $argument, mixed $n = int ): string | null;
```
Produces a recursive representation of an array


```php
protected function getVarDump( mixed $variable ): string;
```
Produces an string representation of a variable


```php
final protected function showTraceItem( int $n, array $trace ): string;
```
Shows a backtrace item




## Support\Debug\Dump 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Dump.zep)


-   __Namespace__

    - `Phalcon\Support\Debug`

-   __Uses__
    
    - `Phalcon\Di\Di`
    - `Phalcon\Support\Helper\Json\Encode`
    - `Reflection`
    - `ReflectionClass`
    - `ReflectionProperty`
    - `stdClass`

-   __Extends__
    

-   __Implements__
    

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


### Properties
```php
/**
 * @var bool
 */
protected $detailed = false;

/**
 * @var array
 */
protected $methods;

/**
 * @var array
 */
protected $styles;

/**
 * @var Encode
 */
private $encode;

```

### Methods

```php
public function __construct( array $styles = [], bool $detailed = bool );
```
Phalcon\Debug\Dump constructor


```php
public function all(): string;
```
Alias of variables() method


```php
public function getDetailed(): bool;
```



```php
public function one( mixed $variable, string $name = null ): string;
```
Alias of variable() method


```php
public function setDetailed( bool $detailed ): void;
```



```php
public function setStyles( array $styles = [] ): array;
```
Set styles for vars type


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


```php
public function variable( mixed $variable, string $name = null ): string;
```
Returns an HTML string of information about a single variable.

```php
echo (new \Phalcon\Debug\Dump())->variable($foo, "foo");
```


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


```php
protected function getStyle( string $type ): string;
```
Get style for type


```php
protected function output( mixed $variable, string $name = null, int $tab = int ): string;
```
Prepare an HTML string of information about a single variable.




## Support\Debug\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Debug/Exception.zep)


-   __Namespace__

    - `Phalcon\Support\Debug`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Debug will use this class



## Support\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Exception.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Support\Exception



## Support\Helper\Arr\AbstractArr ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/AbstractArr.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Abstract class offering methods to help with the Arr namespace. This can
be moved to a trait once Zephir supports it.

@todo move to trait when there is support for it


### Methods

```php
protected function toFilter( array $collection, mixed $method = null ): array;
```
Helper method to filter the collection




## Support\Helper\Arr\Blacklist 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Blacklist.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Black list filter by key: exclude elements of an array
by the keys obtained from the elements of a blacklist


### Methods

```php
public function __invoke( array $collection, array $blackList ): array;
```





## Support\Helper\Arr\Chunk 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Chunk.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Chunks an array into smaller arrays of a specified size.


### Methods

```php
public function __invoke( array $collection, int $size, bool $preserveKeys = bool ): array;
```





## Support\Helper\Arr\Filter 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Filter.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Filters a collection using array_filter and using the callable (if defined)


### Methods

```php
public function __invoke( array $collection, mixed $method = null ): mixed;
```





## Support\Helper\Arr\First 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/First.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Returns the first element of the collection. If a callable is passed, the
element returned is the first that validates true


### Methods

```php
public function __invoke( array $collection, mixed $method = null ): mixed;
```





## Support\Helper\Arr\FirstKey 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/FirstKey.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Returns the key of the first element of the collection. If a callable
is passed, the element returned is the first that validates true


### Methods

```php
public function __invoke( array $collection, mixed $method = null ): mixed;
```





## Support\Helper\Arr\Flatten 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Flatten.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Flattens an array up to the one level depth, unless `$deep` is set to
`true`


### Methods

```php
public function __invoke( array $collection, bool $deep = bool ): array;
```





## Support\Helper\Arr\Get 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Get.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally


### Methods

```php
public function __invoke( array $collection, mixed $index, mixed $defaultValue = null, string $cast = null ): mixed;
```





## Support\Helper\Arr\Group 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Group.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Groups the elements of an array based on the passed callable


### Methods

```php
public function __invoke( array $collection, mixed $method ): array;
```





## Support\Helper\Arr\Has 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Has.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Checks an array if it has an element with a specific key and returns
`true`/`false` accordingly


### Methods

```php
public function __invoke( array $collection, mixed $index ): bool;
```





## Support\Helper\Arr\IsUnique 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/IsUnique.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Checks a flat list for duplicate values. Returns true if duplicate
values exist and false if values are all unique.


### Methods

```php
public function __invoke( array $collection ): bool;
```





## Support\Helper\Arr\Last 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Last.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Returns the last element of the collection. If a callable is passed, the
element returned is the first that validates true


### Methods

```php
public function __invoke( array $collection, mixed $method = null ): mixed;
```





## Support\Helper\Arr\LastKey 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/LastKey.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Returns the key of the last element of the collection. If a callable is
passed, the element returned is the first that validates true


### Methods

```php
public function __invoke( array $collection, mixed $method = null ): mixed;
```





## Support\Helper\Arr\Order 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Order.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Sorts a collection of arrays or objects by an attribute of the object. It
supports ascending/descending sorts but also flags that are identical to
the ones used by `ksort` and `krsort`


### Constants
```php
const ORDER_ASC = 1;
const ORDER_DESC = 2;
```

### Methods

```php
public function __invoke( array $collection, mixed $attribute, int $order = static-constant-access, int $flags = int ): array;
```





## Support\Helper\Arr\Pluck 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Pluck.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns a subset of the collection based on the values of the collection


### Methods

```php
public function __invoke( array $collection, string $element ): array;
```





## Support\Helper\Arr\Set 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Set.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Sets an array element. Using a key is optional


### Methods

```php
public function __invoke( array $collection, mixed $value, mixed $index = null ): array;
```





## Support\Helper\Arr\SliceLeft 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/SliceLeft.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns a new array with n elements removed from the left.


### Methods

```php
public function __invoke( array $collection, int $elements = int ): array;
```





## Support\Helper\Arr\SliceRight 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/SliceRight.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns a new array with n elements removed from the right.


### Methods

```php
public function __invoke( array $collection, int $elements = int ): array;
```





## Support\Helper\Arr\Split 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Split.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns a new array with keys of the collection as one element and values
as another


### Methods

```php
public function __invoke( array $collection ): array;
```





## Support\Helper\Arr\ToObject 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ToObject.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns the passed array as an object.


### Methods

```php
public function __invoke( array $collection ): object;
```





## Support\Helper\Arr\ValidateAll 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ValidateAll.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Returns `true` if the provided function returns `true` for all elements of
the collection, `false` otherwise.


### Methods

```php
public function __invoke( array $collection, mixed $method ): bool;
```





## Support\Helper\Arr\ValidateAny 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/ValidateAny.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

Returns `true` if the provided function returns `true` for at least one
element of the collection, `false` otherwise.


### Methods

```php
public function __invoke( array $collection, mixed $method ): bool;
```





## Support\Helper\Arr\Whitelist 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Arr/Whitelist.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Arr`

-   __Uses__
    

-   __Extends__
    
    `AbstractArr`

-   __Implements__
    

White list filter by key: obtain elements of an array filtering by the keys
obtained from the elements of a whitelist


### Methods

```php
public function __invoke( array $collection, array $whiteList ): array;
```





## Support\Helper\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Exception.zep)


-   __Namespace__

    - `Phalcon\Support\Helper`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

* Phalcon\Support\Exception
*/


## Support\Helper\File\Basename 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/File/Basename.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\File`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Gets the filename from a given path, Same as PHP's `basename()` but has
non-ASCII support. PHP's `basename()` does not properly support streams or
filenames beginning with a non-US-ASCII character.


### Methods

```php
public function __invoke( string $uri, string $suffix = null ): string;
```
@see https://bugs.php.net/bug.php?id=37738




## Support\Helper\Json\Decode 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Decode.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Json`

-   __Uses__
    
    - `InvalidArgumentException`

-   __Extends__
    

-   __Implements__
    

Decodes a string using `json_decode` and throws an exception if the
JSON data cannot be decoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
InvalidArgumentException


### Methods

```php
public function __invoke( string $data, bool $associative = bool, int $depth = int, int $options = int );
```





## Support\Helper\Json\Encode 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Json/Encode.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Json`

-   __Uses__
    
    - `InvalidArgumentException`

-   __Extends__
    

-   __Implements__
    

Encodes a string using `json_encode` and throws an exception if the
JSON data cannot be encoded

The following options are used if none specified for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT,
JSON_UNESCAPED_SLASHES

If JSON_THROW_ON_ERROR is defined in the options a JsonException will be
thrown in the case of an error. Otherwise, any error will throw
InvalidArgumentException

@see  https://www.ietf.org/rfc/rfc4627.txt


### Methods

```php
public function __invoke( mixed $data, int $options = int, int $depth = int ): string;
```





## Support\Helper\Number\IsBetween 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Number/IsBetween.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Number`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Checks if a number is within a range


### Methods

```php
public function __invoke( int $value, int $start, int $end ): bool;
```





## Support\Helper\Str\AbstractStr ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/AbstractStr.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Abstract class offering methods to help with the Str namespace. This can
be moved to a trait once Zephir supports it.

@todo move to trait when there is support for it


### Methods

```php
protected function toEndsWith( string $haystack, string $needle, bool $ignoreCase = bool ): bool;
```
Check if a string ends with a given string


```php
protected function toInterpolate( string $input, array $context = [], string $left = string, string $right = string ): string;
```
Interpolates context values into the message placeholders

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message


```php
protected function toLower( string $text, string $encoding = string ): string;
```
Lowercases a string using mbstring


```php
protected function toStartsWith( string $haystack, string $needle, bool $ignoreCase = bool ): bool;
```
Check if a string starts with a given string


```php
protected function toUpper( string $text, string $encoding = string ): string;
```
Uppercases a string using mbstring




## Support\Helper\Str\Camelize 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Camelize.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `PascalCase`

-   __Implements__
    

Converts strings to upperCamelCase or lowerCamelCase


### Methods

```php
public function __invoke( string $text, string $delimiters = null, bool $lowerFirst = bool ): string;
```





## Support\Helper\Str\Concat 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Concat.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    
    - `Phalcon\Support\Helper\Exception`

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Concatenates strings using the separator only once without duplication in
places concatenation


### Methods

```php
public function __invoke(): string;
```





## Support\Helper\Str\CountVowels 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/CountVowels.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns number of vowels in provided string. Uses a regular expression
to count the number of vowels (A, E, I, O, U) in a string.


### Methods

```php
public function __invoke( string $text ): int;
```





## Support\Helper\Str\Decapitalize 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Decapitalize.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Decapitalizes the first letter of the string and then adds it with rest
of the string. Omit the upperRest parameter to keep the rest of the
string intact, or set it to true to convert to uppercase.


### Methods

```php
public function __invoke( string $text, bool $upperRest = bool, string $encoding = string ): string;
```





## Support\Helper\Str\Decrement 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Decrement.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Removes a number from the end of a string or decrements that number if it
is already defined


### Methods

```php
public function __invoke( string $text, string $separator = string ): string;
```





## Support\Helper\Str\DirFromFile 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/DirFromFile.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end


### Methods

```php
public function __invoke( string $file ): string;
```





## Support\Helper\Str\DirSeparator 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/DirSeparator.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR


### Methods

```php
public function __invoke( string $directory ): string;
```





## Support\Helper\Str\Dynamic 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Dynamic.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    
    - `RuntimeException`

-   __Extends__
    

-   __Implements__
    

Generates random text in accordance with the template. The template is
defined by the left and right delimiter and it can contain values separated
by the separator


### Methods

```php
public function __invoke( string $text, string $leftDelimiter = string, string $rightDelimiter = string, string $separator = string ): string;
```





## Support\Helper\Str\EndsWith 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/EndsWith.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Check if a string ends with a given string


### Methods

```php
public function __invoke( string $haystack, string $needle, bool $ignoreCase = bool ): bool;
```





## Support\Helper\Str\FirstBetween 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/FirstBetween.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns the first string there is between the strings from the
parameter start and end.


### Methods

```php
public function __invoke( string $text, string $start, string $end ): string;
```





## Support\Helper\Str\Friendly 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Friendly.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    
    - `Phalcon\Support\Helper\Exception`

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Changes a text to a URL friendly one. Replaces commonly known accented
characters with their Latin equivalents. If a `replace` string or array
is passed, it will also be used to replace those characters with a space.


### Methods

```php
public function __invoke( string $text, string $separator = string, bool $lowercase = bool, mixed $replace = null ): string;
```





## Support\Helper\Str\Humanize 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Humanize.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Makes an underscored or dashed text human-readable


### Methods

```php
public function __invoke( string $text ): string;
```





## Support\Helper\Str\Includes 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Includes.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Determines whether a string includes another string or not.


### Methods

```php
public function __invoke( string $haystack, string $needle ): bool;
```





## Support\Helper\Str\Increment 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Increment.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Adds a number to the end of a string or increments that number if it
is already defined


### Methods

```php
public function __invoke( string $text, string $separator = string ): string;
```





## Support\Helper\Str\Interpolate 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Interpolate.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interpolates context values into the message placeholders. By default, the
right and left tokens are `%`

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message


### Methods

```php
public function __invoke( string $message, array $context = [], string $leftToken = string, string $rightToken = string ): string;
```





## Support\Helper\Str\IsAnagram 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsAnagram.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Compare two strings and returns `true` if both strings are anagram,
`false` otherwise.


### Methods

```php
public function __invoke( string $first, string $second ): bool;
```





## Support\Helper\Str\IsLower 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsLower.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Returns `true` if the given string is in lower case, `false` otherwise.


### Methods

```php
public function __invoke( string $text, string $encoding = string ): bool;
```





## Support\Helper\Str\IsPalindrome 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsPalindrome.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Returns `true` if the given string is a palindrome, `false` otherwise.


### Methods

```php
public function __invoke( string $text ): bool;
```





## Support\Helper\Str\IsUpper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/IsUpper.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Returns `true` if the given string is in upper case, `false` otherwise.


### Methods

```php
public function __invoke( string $text, string $encoding = string ): bool;
```





## Support\Helper\Str\KebabCase 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/KebabCase.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `PascalCase`

-   __Implements__
    

Converts strings to kebab-case style


### Methods

```php
public function __invoke( string $text, string $delimiters = null ): string;
```





## Support\Helper\Str\Len 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Len.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Calculates the length of the string using `mb_strlen`


### Methods

```php
public function __invoke( string $text, string $encoding = string ): int;
```





## Support\Helper\Str\Lower 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Lower.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Converts a string to lowercase using mbstring


### Methods

```php
public function __invoke( string $text, string $encoding = string ): string;
```





## Support\Helper\Str\PascalCase 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/PascalCase.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Converts strings to PascalCase style


### Methods

```php
public function __invoke( string $text, string $delimiters = null ): string;
```



```php
protected function processArray( string $text, string $delimiters = null ): array;
```





## Support\Helper\Str\Prefix 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Prefix.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Prefixes the text with the supplied prefix


### Methods

```php
public function __invoke( mixed $text, string $prefix ): string;
```





## Support\Helper\Str\Random 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Random.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Generates a random string based on the given type. Type is one of the
RANDOM_* constants


### Constants
```php
const RANDOM_ALNUM = 0;
const RANDOM_ALPHA = 1;
const RANDOM_DISTINCT = 5;
const RANDOM_HEXDEC = 2;
const RANDOM_NOZERO = 4;
const RANDOM_NUMERIC = 3;
```

### Methods

```php
public function __invoke( int $type = static-constant-access, int $length = int ): string;
```





## Support\Helper\Str\ReduceSlashes 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/ReduceSlashes.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Reduces multiple slashes in a string to single slashes


### Methods

```php
public function __invoke( string $text ): string;
```





## Support\Helper\Str\SnakeCase 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/SnakeCase.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `PascalCase`

-   __Implements__
    

Converts strings to snake_case style


### Methods

```php
public function __invoke( string $text, string $delimiters = null ): string;
```





## Support\Helper\Str\StartsWith 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/StartsWith.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Check if a string starts with a given string


### Methods

```php
public function __invoke( string $haystack, string $needle, bool $ignoreCase = bool ): bool;
```





## Support\Helper\Str\Suffix 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Suffix.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Suffixes the text with the supplied suffix


### Methods

```php
public function __invoke( mixed $text, string $suffix ): string;
```





## Support\Helper\Str\Ucwords 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Ucwords.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Capitalizes the first letter of each word


### Methods

```php
public function __invoke( string $text, string $encoding = string ): string;
```





## Support\Helper\Str\Uncamelize 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Uncamelize.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Converts strings to non camelized style


### Methods

```php
public function __invoke( string $text, string $delimiter = string ): string;
```





## Support\Helper\Str\Underscore 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Underscore.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Makes a text underscored instead of spaced


### Methods

```php
public function __invoke( string $text ): string;
```





## Support\Helper\Str\Upper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Helper/Str/Upper.zep)


-   __Namespace__

    - `Phalcon\Support\Helper\Str`

-   __Uses__
    

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    

Converts a string to uppercase using mbstring


### Methods

```php
public function __invoke( string $text, string $encoding = string ): string;
```





## Support\HelperFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/HelperFactory.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

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
@method string dynamic(string $text, string $leftDelimiter = "{", string $rightDelimiter = "}", string $separator = "|")
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
@method string prefix($text, string $prefix)
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


### Methods

```php
public function __call( string $name, array $arguments );
```



```php
public function __construct( array $services = [] );
```
FactoryTrait constructor.


```php
public function newInstance( string $name );
```



```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available adapters




## Support\Registry ![Final](../assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Registry.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    
    - `Phalcon\Support\Collection`
    - `Traversable`

-   __Extends__
    
    `Collection`

-   __Implements__
    

Phalcon\Registry

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


### Methods

```php
final public function __construct( array $data = [] );
```
Constructor


```php
final public function __get( string $element ): mixed;
```
Magic getter to get an element from the collection


```php
final public function __isset( string $element ): bool;
```
Magic isset to check whether an element exists or not


```php
final public function __set( string $element, mixed $value ): void;
```
Magic setter to assign values to an element


```php
final public function __unset( string $element ): void;
```
Magic unset to remove an element from the collection


```php
final public function clear(): void;
```
Clears the internal collection


```php
final public function count(): int;
```
Count elements of an object

@link https://php.net/manual/en/countable.count.php


```php
final public function get( string $element, mixed $defaultValue = null, string $cast = null ): mixed;
```
Get the element from the collection


```php
final public function getIterator(): Traversable;
```
Returns the iterator of the class


```php
final public function has( string $element ): bool;
```
Determines whether an element is present in the collection.


```php
final public function init( array $data = [] ): void;
```
Initialize internal array


```php
final public function jsonSerialize(): array;
```
Specify data which should be serialized to JSON

@link https://php.net/manual/en/jsonserializable.jsonserialize.php


```php
final public function offsetExists( mixed $element ): bool;
```
Whether a offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php


```php
final public function offsetGet( mixed $element ): mixed;
```
Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php


```php
final public function offsetSet( mixed $offset, mixed $value ): void;
```
Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php


```php
final public function offsetUnset( mixed $element ): void;
```
Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php


```php
final public function remove( string $element ): void;
```
Delete the element from the collection


```php
final public function serialize(): string | null;
```
String representation of object

@link https://php.net/manual/en/serializable.serialize.php


```php
final public function set( string $element, mixed $value ): void;
```
Set an element in the collection


```php
final public function toArray(): array;
```
Returns the object in an array format


```php
final public function toJson( int $options = int ): string;
```
Returns the object in a JSON format

The default string uses the following options for json_encode

JSON_HEX_TAG, JSON_HEX_APOS, JSON_HEX_AMP, JSON_HEX_QUOT, JSON_UNESCAPED_SLASHES

@see https://www.ietf.org/rfc/rfc4627.txt


```php
final public function unserialize( string $data ): void;
```
Constructs the object

@link https://php.net/manual/en/serializable.unserialize.php




## Support\Version 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Support/Version.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This class allows to get the installed version of the framework


### Constants
```php
const VERSION_MAJOR = 0;
const VERSION_MEDIUM = 1;
const VERSION_MINOR = 2;
const VERSION_SPECIAL = 3;
const VERSION_SPECIAL_NUMBER = 4;
```

### Methods

```php
public function get(): string;
```
Returns the active version (string)

```php
echo (new Phalcon\Version())->get();
```


```php
public function getId(): string;
```
Returns the numeric active version

```php
echo (new Phalcon\Version())->getId();
```


```php
public function getPart( int $part ): string;
```
Returns a specific part of the version. If the wrong parameter is passed
it will return the full version

```php
echo (new Phalcon\Version())->getPart(Phalcon\Version::VERSION_MAJOR);
```


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


