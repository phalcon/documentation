---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`

## Url 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Url.zep)


-   __Namespace__

    - `Phalcon\Mvc`

-   __Uses__
    
    - `Phalcon\Di\AbstractInjectionAware`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Mvc\RouterInterface`
    - `Phalcon\Mvc\Router\RouteInterface`
    - `Phalcon\Mvc\Url\Exception`
    - `Phalcon\Mvc\Url\UrlInterface`

-   __Extends__
    
    `AbstractInjectionAware`

-   __Implements__
    
    - `UrlInterface`

This components helps in the generation of: URIs, URLs and Paths

```php
// Generate a URL appending the URI to the base URI
echo $url->get("products/edit/1");

// Generate a URL for a predefined route
echo $url->get(
    [
        "for"   => "blog-post",
        "title" => "some-cool-stuff",
        "year"  => "2012",
    ]
);
```


### Properties
```php
/**
 * @var null | string
 */
protected $baseUri;

/**
 * @var null | string
 */
protected $basePath;

/**
 * @var RouterInterface | null
 */
protected $router;

/**
 * @var null | string
 */
protected $staticBaseUri;

```

### Methods

```php
public function __construct( RouterInterface $router = null );
```



```php
public function get( mixed $uri = null, mixed $args = null, bool $local = null, mixed $baseUri = null ): string;
```
Generates a URL

```php
// Generate a URL appending the URI to the base URI
echo $url->get("products/edit/1");

// Generate a URL for a predefined route
echo $url->get(
    [
        "for"   => "blog-post",
        "title" => "some-cool-stuff",
        "year"  => "2015",
    ]
);

// Generate a URL with GET arguments (/show/products?id=1&name=Carrots)
echo $url->get(
    "show/products",
    [
        "id"   => 1,
        "name" => "Carrots",
    ]
);

// Generate an absolute URL by setting the third parameter as false.
echo $url->get(
    "https://phalcon.io/",
    null,
    false
);
```


```php
public function getBasePath(): string;
```
Returns the base path


```php
public function getBaseUri(): string;
```
Returns the prefix for all the generated urls. By default /


```php
public function getStatic( mixed $uri = null ): string;
```
Generates a URL for a static resource

```php
// Generate a URL for a static resource
echo $url->getStatic("img/logo.png");

// Generate a URL for a static predefined route
echo $url->getStatic(
    [
        "for" => "logo-cdn",
    ]
);
```


```php
public function getStaticBaseUri(): string;
```
Returns the prefix for all the generated static urls. By default /


```php
public function path( string $path = null ): string;
```
Generates a local path


```php
public function setBasePath( string $basePath ): UrlInterface;
```
Sets a base path for all the generated paths

```php
$url->setBasePath("/var/www/htdocs/");
```


```php
public function setBaseUri( string $baseUri ): UrlInterface;
```
Sets a prefix for all the URIs to be generated

```php
$url->setBaseUri("/invo/");

$url->setBaseUri("/invo/index.php/");
```


```php
public function setStaticBaseUri( string $staticBaseUri ): UrlInterface;
```
Sets a prefix for all static URLs generated

```php
$url->setStaticBaseUri("/invo/");
```




## Mvc\Url\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Mvc/Url/Exception.zep)


-   __Namespace__

    - `Phalcon\Mvc\Url`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Mvc\Url\Exception

Exceptions thrown in Phalcon\Url will use this class



## Mvc\Url\UrlInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Mvc/Url/UrlInterface.zep)


-   __Namespace__

    - `Phalcon\Mvc\Url`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Mvc\Url\UrlInterface


### Methods

```php
public function get( mixed $uri = null, mixed $args = null, bool $local = null ): string;
```
Generates a URL


```php
public function getBasePath(): string;
```
Returns a base path


```php
public function getBaseUri(): string;
```
Returns the prefix for all the generated urls. By default /


```php
public function path( string $path = null ): string;
```
Generates a local path


```php
public function setBasePath( string $basePath ): UrlInterface;
```
Sets a base paths for all the generated paths


```php
public function setBaseUri( string $baseUri ): UrlInterface;
```
Sets a prefix to all the urls generated
