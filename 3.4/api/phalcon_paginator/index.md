---
title: "Abstract class **Phalcon\\Paginator\\Adapter**"
version: "3.4"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Abstract class **Phalcon\Paginator\Adapter**

*implements* [Phalcon\Paginator\AdapterInterface](/3.4/api/phalcon_paginator/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
public  **setCurrentPage** (*mixed* $page)

Set the current page number

public  **setLimit** (*mixed* $limitRows)

Set current rows limit

public  **getLimit** ()

Get current rows limit

abstract public  **getPaginate** () inherited from [Phalcon\Paginator\AdapterInterface](/3.4/api/phalcon_paginator/)

...

<hr />

# Class **Phalcon\Paginator\Adapter\Model**

*extends* abstract class [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

*implements* [Phalcon\Paginator\AdapterInterface](/3.4/api/phalcon_paginator/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/adapter/model.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This adapter allows to paginate data using a Phalcon\Mvc\Model resultset as a base.

```php
<?php

use Phalcon\Paginator\Adapter\Model;

$paginator = new Model(
[
    "data"  => Robots::find(),
    "limit" => 25,
    "page"  => $currentPage,
]
);

$paginate = $paginator->getPaginate();

```

## Methods
public  **__construct** (*array* $config)

Phalcon\Paginator\Adapter\Model constructor

public  **getPaginate** ()

Returns a slice of the resultset to show in the pagination

public  **setCurrentPage** (*mixed* $page) inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Set the current page number

public  **setLimit** (*mixed* $limitRows) inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Set current rows limit

public  **getLimit** () inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Get current rows limit

<hr />

# Class **Phalcon\Paginator\Adapter\NativeArray**

*extends* abstract class [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

*implements* [Phalcon\Paginator\AdapterInterface](/3.4/api/phalcon_paginator/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/adapter/nativearray.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Pagination using a PHP array as source of data

```php
<?php

use Phalcon\Paginator\Adapter\NativeArray;

$paginator = new NativeArray(
[
    "data"  => [
        ["id" => 1, "name" => "Artichoke"],
        ["id" => 2, "name" => "Carrots"],
        ["id" => 3, "name" => "Beet"],
        ["id" => 4, "name" => "Lettuce"],
        ["id" => 5, "name" => ""],
    ],
    "limit" => 2,
    "page"  => $currentPage,
]
);

```

## Methods
public  **__construct** (*array* $config)

Phalcon\Paginator\Adapter\NativeArray constructor

public  **getPaginate** ()

Returns a slice of the resultset to show in the pagination

public  **setCurrentPage** (*mixed* $page) inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Set the current page number

public  **setLimit** (*mixed* $limitRows) inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Set current rows limit

public  **getLimit** () inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Get current rows limit

<hr />

# Class **Phalcon\Paginator\Adapter\QueryBuilder**

*extends* abstract class [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

*implements* [Phalcon\Paginator\AdapterInterface](/3.4/api/phalcon_paginator/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/adapter/querybuilder.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Pagination using a PHQL query builder as source of data

```php
<?php

use Phalcon\Paginator\Adapter\QueryBuilder;

$builder = $this->modelsManager->createBuilder()
            ->columns("id, name")
            ->from("Robots")
            ->orderBy("name");

$paginator = new QueryBuilder(
[
    "builder" => $builder,
    "limit"   => 20,
    "page"    => 1,
]
);

```

## Methods
public  **__construct** (*array* $config)

public  **getCurrentPage** ()

Get the current page number

public  **setQueryBuilder** ([Phalcon\Mvc\Model\Query\Builder](/3.4/api/phalcon_mvc_model_query/) $builder)

Set query builder object

public  **getQueryBuilder** ()

Get query builder object

public  **getPaginate** ()

Returns a slice of the resultset to show in the pagination

public  **setCurrentPage** (*mixed* $page) inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Set the current page number

public  **setLimit** (*mixed* $limitRows) inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Set current rows limit

public  **getLimit** () inherited from [Phalcon\Paginator\Adapter](/3.4/api/phalcon_paginator/)

Get current rows limit

<hr />

# Interface **Phalcon\Paginator\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setCurrentPage** (*mixed* $page)

...

abstract public  **getPaginate** ()

...

abstract public  **setLimit** (*mixed* $limit)

...

abstract public  **getLimit** ()

...

<hr />

# Class **Phalcon\Paginator\Exception**

*extends* class [Phalcon\Exception](/3.4/api/phalcon_exception/)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

<hr />

# Class **Phalcon\Paginator\Factory**

*extends* abstract class [Phalcon\Factory](/3.4/api/phalcon_factory/)

*implements* [Phalcon\FactoryInterface](/3.4/api/phalcon_factory/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/paginator/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Paginator Adapter class using 'adapter' option

```php
<?php

use Phalcon\Paginator\Factory;

/**
 * The `modelsManager` is automatically created when you instantiate your DI
 * container using the `FactoryDefault` class. It returns a 
 * [Phalcon\Mvc\Model\Manager](Phalcon_Mvc_Model_Manager.md) object
 */

$builder = $this->modelsManager->createBuilder()
            ->columns("id, name")
            ->from("Robots")
            ->orderBy("name");

$options = [
"builder" => $builder,
"limit"   => 20,
"page"    => 1,
"adapter" => "queryBuilder",
];
$paginator = Factory::load($options);

```

## Methods
public static  **load** ([Phalcon\Config](/3.4/api/phalcon_config/) | *array* $config)

protected static  **loadClass** (*mixed* $namespace, *mixed* $config) inherited from [Phalcon\Factory](/3.4/api/phalcon_factory/)

...

Source: https://docs.phalcon.io/3.4/api/phalcon_paginator/index.mdx
