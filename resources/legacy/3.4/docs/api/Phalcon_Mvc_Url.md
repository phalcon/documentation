---
layout: default
title: 'Phalcon\Mvc\Url'
---
# Class **Phalcon\Mvc\Url**

*implements* [Phalcon\Mvc\UrlInterface](Phalcon_Mvc_Url.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/url.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This components helps in the generation of: URIs, URLs and Paths

```php
<?php

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


## Methods
public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the DependencyInjector container



public  **getDI** ()

Returns the DependencyInjector container



public  **setBaseUri** (*mixed* $baseUri)

Sets a prefix for all the URIs to be generated

```php
<?php

$url->setBaseUri("/invo/");

$url->setBaseUri("/invo/index.php/");

```



public  **setStaticBaseUri** (*mixed* $staticBaseUri)

Sets a prefix for all static URLs generated

```php
<?php

$url->setStaticBaseUri("/invo/");

```



public  **getBaseUri** ()

Returns the prefix for all the generated urls. By default /



public  **getStaticBaseUri** ()

Returns the prefix for all the generated static urls. By default /



public  **setBasePath** (*mixed* $basePath)

Sets a base path for all the generated paths

```php
<?php

$url->setBasePath("/var/www/htdocs/");

```



public  **getBasePath** ()

Returns the base path



public  **get** ([*mixed* $uri], [*mixed* $args], [*mixed* $local], [*mixed* $baseUri])

Generates a URL

```php
<?php

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



public  **getStatic** ([*mixed* $uri])

Generates a URL for a static resource

```php
<?php

// Generate a URL for a static resource
echo $url->getStatic("img/logo.png");

// Generate a URL for a static predefined route
echo $url->getStatic(
    [
        "for" => "logo-cdn",
    ]
);

```



public  **path** ([*mixed* $path])

Generates a local path




<hr>

# Class **Phalcon\Mvc\Url\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/url/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Interface **Phalcon\Mvc\UrlInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/urlinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setBaseUri** (*mixed* $baseUri)

...


abstract public  **getBaseUri** ()

...


abstract public  **setBasePath** (*mixed* $basePath)

...


abstract public  **getBasePath** ()

...


abstract public  **get** ([*mixed* $uri], [*mixed* $args], [*mixed* $local])

...


abstract public  **path** ([*mixed* $path])

...
