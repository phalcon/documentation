---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Filter\Filter 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Filter.zep)


-   __Namespace__

    - `Closure`
    - `Phalcon\Filter\Exception`
    - `Phalcon\Filter\FilterInterface`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `FilterInterface`

Lazy loads, stores and exposes sanitizer objects


### Constants
```php
const FILTER_ABSINT = absint;
const FILTER_ALNUM = alnum;
const FILTER_ALPHA = alpha;
const FILTER_BOOL = bool;
const FILTER_EMAIL = email;
const FILTER_FLOAT = float;
const FILTER_INT = int;
const FILTER_LOWER = lower;
const FILTER_LOWERFIRST = lowerFirst;
const FILTER_REGEX = regex;
const FILTER_REMOVE = remove;
const FILTER_REPLACE = replace;
const FILTER_SPECIAL = special;
const FILTER_SPECIALFULL = specialFull;
const FILTER_STRING = string;
const FILTER_STRIPTAGS = striptags;
const FILTER_TRIM = trim;
const FILTER_UPPER = upper;
const FILTER_UPPERFIRST = upperFirst;
const FILTER_UPPERWORDS = upperWords;
const FILTER_URL = url;
```

### Properties
```php
/**
 * @var array
 */
protected $mapper;

/**
 * @var array
 */
protected $services;

```

### Methods

```php
public function __construct( array $mapper = [] );
```
Key value pairs with name as the key and a callable as the value for
the service object


```php
public function get( string $name ): mixed;
```
Get a service. If it is not in the mapper array, create a new object,
set it and then return it.


```php
public function has( string $name ): bool;
```
Checks if a service exists in the map array


```php
public function sanitize( mixed $value, mixed $sanitizers, bool $noRecursive = bool ): mixed;
```
Sanitizes a value with a specified single or set of sanitizers


```php
public function set( string $name, callable $service ): void;
```
Set a new service to the mapper array


```php
protected function init( array $mapper ): void;
```
Loads the objects in the internal mapper array




## Filter\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Exception.zep)


-   __Namespace__

    - `Phalcon\Filter`

-   __Uses__
    

-   __Extends__
    
    `Phalcon\Exception`

-   __Implements__
    

Phalcon\Filter\Exception

Exceptions thrown in Phalcon\Filter will use this class



## Filter\FilterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/FilterFactory.zep)


-   __Namespace__

    - `Phalcon\Filter`

-   __Uses__
    
    - `Phalcon\Filter`

-   __Extends__
    

-   __Implements__
    

Class FilterFactory


### Methods

```php
public function newInstance(): FilterInterface;
```
Returns a Locator object with all the helpers defined in anonymous
functions


```php
protected function getAdapters(): array;
```





## Filter\FilterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/FilterInterface.zep)


-   __Namespace__

    - `Phalcon\Filter`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Lazy loads, stores and exposes sanitizer objects


### Methods

```php
public function sanitize( mixed $value, mixed $sanitizers, bool $noRecursive = bool ): mixed;
```
Sanitizes a value with a specified single or set of sanitizers




## Filter\Sanitize\AbsInt 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/AbsInt.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\AbsInt

Sanitizes a value to absolute integer


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\Alnum 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Alnum.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Alnum

Sanitizes a value to an alphanumeric value


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\Alpha 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Alpha.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Alpha

Sanitizes a value to an alpha value


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\BoolVal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/BoolVal.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\BoolVal

Sanitizes a value to boolean


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\Email 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Email.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Email

Sanitizes an email string


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\FloatVal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/FloatVal.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\FloatVal

Sanitizes a value to float


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\IntVal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/IntVal.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\IntVal

Sanitizes a value to integer


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\Lower 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Lower.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Lower

Sanitizes a value to lowercase


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\LowerFirst 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/LowerFirst.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\LowerFirst

Sanitizes a value to lcfirst


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\Regex 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Regex.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Regex

Sanitizes a value performing preg_replace


### Methods

```php
public function __invoke( mixed $input, mixed $pattern, mixed $replace );
```





## Filter\Sanitize\Remove 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Remove.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Remove

Sanitizes a value removing parts of a string


### Methods

```php
public function __invoke( mixed $input, mixed $replace );
```





## Filter\Sanitize\Replace 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Replace.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Replace

Sanitizes a value replacing parts of a string


### Methods

```php
public function __invoke( mixed $input, mixed $from, mixed $to );
```





## Filter\Sanitize\Special 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Special.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Special

Sanitizes a value special characters


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\SpecialFull 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/SpecialFull.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\SpecialFull

Sanitizes a value special characters (htmlspecialchars() and ENT_QUOTES)


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\StringVal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/StringVal.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Sanitizes a value to string


### Methods

```php
public function __invoke( mixed $input );
```





## Filter\Sanitize\Striptags 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Striptags.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Striptags

Sanitizes a value striptags


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\Trim 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Trim.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Trim

Sanitizes a value removing leading and trailing spaces


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\Upper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Upper.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Upper

Sanitizes a value to uppercase


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\UpperFirst 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/UpperFirst.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\UpperFirst

Sanitizes a value to ucfirst


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\UpperWords 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/UpperWords.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\UpperWords

Sanitizes a value to uppercase the first character of each word


### Methods

```php
public function __invoke( string $input );
```





## Filter\Sanitize\Url 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Sanitize/Url.zep)


-   __Namespace__

    - `Phalcon\Filter\Sanitize`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Filter\Sanitize\Url

Sanitizes a value url


### Methods

```php
public function __invoke( mixed $input );
```
