---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Translate\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Translate\Adapter`

-   __Uses__
    
    - `Phalcon\Helper\Arr\Get`
    - `Phalcon\Translate\Exception`
    - `Phalcon\Translate\InterpolatorFactory`

-   __Extends__
    

-   __Implements__
    
    - `AdapterInterface`




### Properties
```php
/**
 * @var string
 */
protected $defaultInterpolator = ;

/**
    * @var InterpolatorFactory
    */
protected $interpolatorFactory;

```

### Methods

```php
public function __construct( InterpolatorFactory $interpolator, array $options );
```



```php
public function _( string $translateKey, array $placeholders = [] ): string;
```
Returns the translation string of the given key (alias of method 't')


```php
public function offsetExists( mixed $translateKey ): bool;
```
Check whether a translation key exists


```php
public function offsetGet( mixed $translateKey ): mixed;
```
Returns the translation related to the given key


```php
public function offsetSet( mixed $offset, mixed $value ): void;
```
Sets a translation value


```php
public function offsetUnset( mixed $offset ): void;
```
Unsets a translation from the dictionary


```php
public function t( string $translateKey, array $placeholders = [] ): string;
```
Returns the translation string of the given key


```php
protected function replacePlaceholders( string $translation, array $placeholders = [] ): string;
```
Replaces placeholders by the values passed




## Translate\Adapter\AdapterInterface ![Abstract](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Translate\Adapter`

Phalcon\Translate\Adapter\AdapterInterface

Interface for Phalcon\Translate adapters


### Methods

```php
public function exists( string $index ): bool;
```
Check whether is defined a translation key in the internal array


```php
public function query( string $translateKey, array $placeholders = [] ): string;
```
Returns the translation related to the given key


```php
public function t( string $translateKey, array $placeholders = [] ): string;
```
Returns the translation string of the given key




## Translate\Adapter\Csv 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Adapter/Csv.zep)


-   __Namespace__

    - `Phalcon\Translate\Adapter`

-   __Uses__
    
    - `ArrayAccess`
    - `Phalcon\Translate\Exception`
    - `Phalcon\Translate\InterpolatorFactory`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    
    - `ArrayAccess`


Allows to define translation lists using CSV file


### Properties
```php
/**
 * @var array
 */
protected $translate;

```

### Methods

```php
public function __construct( InterpolatorFactory $interpolator, array $options );
```
Phalcon\Translate\Adapter\Csv constructor


```php
public function exists( string $index ): bool;
```
Check whether is defined a translation key in the internal array


```php
public function query( string $index, array $placeholders = [] ): string;
```
Returns the translation related to the given key




## Translate\Adapter\Gettext 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Adapter/Gettext.zep)


-   __Namespace__

    - `Phalcon\Translate\Adapter`

-   __Uses__
    
    - `ArrayAccess`
    - `Phalcon\Translate\Exception`
    - `Phalcon\Translate\InterpolatorFactory`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    
    - `ArrayAccess`

Phalcon\Translate\Adapter\Gettext

```php
use Phalcon\Translate\Adapter\Gettext;

$adapter = new Gettext(
    [
        "locale"        => "de_DE.UTF-8",
        "defaultDomain" => "translations",
        "directory"     => "/path/to/application/locales",
        "category"      => LC_MESSAGES,
    ]
);
```

Allows translate using gettext



### Properties
```php
/**
 * @var int
 */
protected $category;

/**
 * @var string
 */
protected $defaultDomain;

/**
 * @var $string|array
 */
protected $directory;

/**
 * @var string
 */
protected $locale;

```

### Methods

```php
public function __construct( InterpolatorFactory $interpolator, array $options );
```
Phalcon\Translate\Adapter\Gettext constructor


```php
public function exists( string $index ): bool;
```
Check whether is defined a translation key in the internal array


```php
public function getCategory(): int;
```



```php
public function getDefaultDomain(): string;
```



```php
public function getDirectory(): string|array;
```



```php
public function getLocale(): string;
```



```php
public function nquery( string $msgid1, string $msgid2, int $count, array $placeholders = [], string $domain = null ): string;
```
The plural version of gettext().
Some languages have more than one form for plural messages dependent on
the count.


```php
public function query( string $index, array $placeholders = [] ): string;
```
Returns the translation related to the given key.

```php
$translator->query("你好 %name%！", ["name" => "Phalcon"]);
```


```php
public function resetDomain(): string;
```
Sets the default domain


```php
public function setDefaultDomain( string $domain ): void;
```
Sets the domain default to search within when calls are made to gettext()


```php
public function setDirectory( mixed $directory ): void;
```
Sets the path for a domain

```php
// Set the directory path
$gettext->setDirectory("/path/to/the/messages");

// Set the domains and directories path
$gettext->setDirectory(
    [
        "messages" => "/path/to/the/messages",
        "another"  => "/path/to/the/another",
    ]
);
```


```php
public function setDomain( mixed $domain ): string;
```
Changes the current domain (i.e. the translation file)


```php
public function setLocale( int $category, string $locale ): string | bool;
```
Sets locale information

```php
// Set locale to Dutch
$gettext->setLocale(LC_ALL, "nl_NL");

// Try different possible locale names for German
$gettext->setLocale(LC_ALL, "de_DE@euro", "de_DE", "de", "ge");
```


```php
protected function getOptionsDefault(): array;
```
Gets default options


```php
protected function prepareOptions( array $options ): void;
```
Validator for constructor




## Translate\Adapter\NativeArray 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Adapter/NativeArray.zep)


-   __Namespace__

    - `Phalcon\Translate\Adapter`

-   __Uses__
    
    - `ArrayAccess`
    - `Phalcon\Translate\Exception`
    - `Phalcon\Translate\InterpolatorFactory`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    
    - `ArrayAccess`

Allows to define translation lists using PHP arrays


### Properties
```php
/**
 * @var array
 */
private translate;

/**
 * @var bool
 */
private triggerError = false;

```

### Methods

```php
public function __construct( InterpolatorFactory $interpolator, array $options );
```
Phalcon\Translate\Adapter\NativeArray constructor


```php
public function exists( string $index ): bool;
```
Check whether is defined a translation key in the internal array


```php
public function notFound( string $index ): string;
```
Whenever a key is not found this method will be called


```php
public function query( string $index, array $placeholders = [] ): string;
```
Returns the translation related to the given key






## Translate\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Exception.zep)


-   __Namespace__

    - `Phalcon\Translate`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Translate\Exception

Class for exceptions thrown by Phalcon\Translate



## Translate\Interpolator\AssociativeArray 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Interpolator/AssociativeArray.zep)


-   __Namespace__

    - `Phalcon\Translate\Interpolator`

-   __Uses__
    
    - `Phalcon\Helper\Str\Interpolate`

-   __Extends__
    

-   __Implements__
    
    - `InterpolatorInterface`


### Methods

```php
public function replacePlaceholders( string $translation, array $placeholders = [] ): string;
```
Replaces placeholders by the values passed




## Translate\Interpolator\IndexedArray 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Interpolator/IndexedArray.zep)


-   __Namespace__

    - `Phalcon\Translate\Interpolator`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `InterpolatorInterface`


### Methods

```php
public function replacePlaceholders( string $translation, array $placeholders = [] ): string;
```
Replaces placeholders by the values passed




## Translate\Interpolator\InterpolatorInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/Interpolator/InterpolatorInterface.zep)


-   __Namespace__

    - `Phalcon\Translate\Interpolator`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Translate\InterpolatorInterface

Interface for Phalcon\Translate interpolators


### Methods

```php
public function replacePlaceholders( string $translation, array $placeholders = [] ): string;
```
Replaces placeholders by the values passed




## Translate\InterpolatorFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/InterpolatorFactory.zep)


-   __Namespace__

    - `Phalcon\Translate`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Translate\Interpolator\InterpolatorInterface`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    


### Methods

```php
public function __construct( array $services = [] );
```
AdapterFactory constructor.


```php
public function newInstance( string $name ): InterpolatorInterface;
```
Create a new instance of the adapter


```php
protected function getAdapters(): array;
```





<h1 id="translate-translatefactory">Class Phalcon\Translate\TranslateFactory</h1>

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Translate/TranslateFactory.zep)

| Namespace  | Phalcon\Translate |
| Uses       | Phalcon\Config, Phalcon\Factory\AbstractFactory, Phalcon\Helper\Arr, Phalcon\Translate\Adapter\AdapterInterface |
| Extends    | AbstractFactory |

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


## Properties
```php
/**
 * @var InterpolatorFactory
 */
private interpolator;

```

## Methods

```php
public function __construct( InterpolatorFactory $interpolator, array $services = [] );
```
AdapterFactory constructor.


```php
public function load( mixed $config ): mixed;
```
Factory to create an instance from a Config object


```php
public function newInstance( string $name, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter


```php
protected function getAdapters(): array;
```
