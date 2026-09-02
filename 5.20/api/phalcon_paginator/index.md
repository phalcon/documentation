---
title: "Phalcon Paginator"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Paginator

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Paginator\Adapter\AbstractAdapter

Abstract

Phalcon\Paginator\Adapter\AbstractAdapter

- **`Phalcon\Paginator\Adapter\AbstractAdapter`** - implements [`Phalcon\Paginator\Adapter\AdapterInterface`](#paginatoradapteradapterinterface)
- [`Phalcon\Paginator\Adapter\Model`](#paginatoradaptermodel)
- [`Phalcon\Paginator\Adapter\NativeArray`](#paginatoradapternativearray)
- [`Phalcon\Paginator\Adapter\QueryBuilder`](#paginatoradapterquerybuilder)
- [`Phalcon\Paginator\Adapter\QueryBuilderCursor`](#paginatoradapterquerybuildercursor)

`Phalcon\Contracts\Paginator\PaginatorTypes` · `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\InvalidLimit` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\Repository` · `Phalcon\Paginator\RepositoryInterface`

### Method Summary

<ApiItem href="#paginatoradapterabstractadapter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"config","default":null}]}>
Constructor
</ApiItem>
<ApiItem href="#paginatoradapterabstractadapter-getlimit" visibility="public" name="getLimit" returnType="int" params={[]}>
Get current rows limit
</ApiItem>
<ApiItem href="#paginatoradapterabstractadapter-setcurrentpage" visibility="public" name="setCurrentPage" returnType="AdapterInterface" params={[{"type":"int","name":"page","default":null}]}>
Set the current page number
</ApiItem>
<ApiItem href="#paginatoradapterabstractadapter-setlimit" visibility="public" name="setLimit" returnType="AdapterInterface" params={[{"type":"int","name":"limit","default":null}]}>
Set current rows limit
</ApiItem>
<ApiItem href="#paginatoradapterabstractadapter-setrepository" visibility="public" name="setRepository" returnType="AdapterInterface" params={[{"type":"RepositoryInterface","name":"repository","default":null}]}>
Sets current repository for pagination
</ApiItem>
<ApiItem href="#paginatoradapterabstractadapter-getrepository" visibility="protected" name="getRepository" returnType="RepositoryInterface" params={[{"type":"array|null","name":"properties","default":"null"}]}>
Gets current repository for pagination
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="config" type="array" default="">
Configuration of paginator
</ApiItem>
<ApiItem kind="property" visibility="protected" name="limitRows" type="int|null" default="null">
Number of rows to show in the paginator. By default is null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="page" type="int|null" default="null">
Current page in paginate
</ApiItem>
<ApiItem kind="property" visibility="protected" name="repository" type="RepositoryInterface" default="">
Repository for pagination
</ApiItem>

### Methods

<h4 id="paginatoradapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $config );
```

Constructor

<h4 id="paginatoradapterabstractadapter-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): int;
```

Get current rows limit

<h4 id="paginatoradapterabstractadapter-setcurrentpage"><code>setCurrentPage()</code></h4>

```php
public function setCurrentPage( int $page ): AdapterInterface;
```

Set the current page number

<h4 id="paginatoradapterabstractadapter-setlimit"><code>setLimit()</code></h4>

```php
public function setLimit( int $limit ): AdapterInterface;
```

Set current rows limit

<h4 id="paginatoradapterabstractadapter-setrepository"><code>setRepository()</code></h4>

```php
public function setRepository( RepositoryInterface $repository ): AdapterInterface;
```

Sets current repository for pagination

<h4 id="paginatoradapterabstractadapter-getrepository"><code>getRepository()</code></h4>

```php
protected function getRepository( array|null $properties = null ): RepositoryInterface;
```

Gets current repository for pagination

## Paginator\Adapter\AdapterInterface

Interface

- [`Phalcon\Contracts\Paginator\Adapter`](/5.20/api/phalcon_contracts/#contractspaginatoradapter)
- **`Phalcon\Paginator\Adapter\AdapterInterface`**

`Phalcon\Contracts\Paginator\Adapter`

## Paginator\Adapter\Model

Class

This adapter allows to paginate data using a Phalcon\Mvc\Model resultset as a
base.

```php
use Phalcon\Paginator\Adapter\Model;

$paginator = new Model(
[
    "model" => Invoices::class,
    "limit" => 25,
    "page"  => $currentPage,
]
);

$paginator = new Model(
[
    "model" => Invoices::class,
    "parameters" => [
         "columns" => "inv_id, inv_title"
    ],
    "limit" => 12,
    "page"  => $currentPage,
]
);

$paginator = new Model(
[
    "model" => Invoices::class,
    "parameters" => [
         "inv_status_flag = :flag:",
         "bind" => [
             "flag" => 1
         ],
         "order" => "inv_title"
    ],
    "limit" => 16,
    "page"  => $currentPage,
]
);

$paginator = new Model(
[
    "model" => Invoices::class,
    "parameters" => "(inv_id % 2) = 0",
    "limit" => 8,
    "page"  => $currentPage,
]
);

$paginator = new Model(
[
    "model" => Invoices::class,
    "parameters" => [ "(inv_id % 2) = 0" ],
    "limit" => 8,
    "page"  => $currentPage,
]
);

$paginate = $paginator->paginate();
```

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
- **`Phalcon\Paginator\Adapter\Model`**

`Phalcon\Contracts\Paginator\PaginatorTypes` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\RepositoryInterface`

### Method Summary

<ApiItem href="#paginatoradaptermodel-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"config","default":null}]}>
Phalcon\Paginator\Adapter\Model constructor
</ApiItem>
<ApiItem href="#paginatoradaptermodel-paginate" visibility="public" name="paginate" returnType="RepositoryInterface" params={[]}>
Returns a slice of the resultset to show in the pagination
</ApiItem>

### Methods

<h4 id="paginatoradaptermodel-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\Model constructor

<h4 id="paginatoradaptermodel-paginate"><code>paginate()</code></h4>

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination

## Paginator\Adapter\NativeArray

Class

Pagination using a PHP array as source of data

```php
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

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
- **`Phalcon\Paginator\Adapter\NativeArray`**

`Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\PaginatorDataNotArray` · `Phalcon\Paginator\RepositoryInterface`

### Method Summary

<ApiItem href="#paginatoradapternativearray-paginate" visibility="public" name="paginate" returnType="RepositoryInterface" params={[]}>
Returns a slice of the resultset to show in the pagination
</ApiItem>

### Methods

<h4 id="paginatoradapternativearray-paginate"><code>paginate()</code></h4>

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination

## Paginator\Adapter\QueryBuilder

Class

Pagination using a PHQL query builder as source of data

```php
use Phalcon\Paginator\Adapter\QueryBuilder;

$builder = $this->modelsManager->createBuilder()
            ->columns("inv_id, inv_title")
            ->from(Invoices::class)
            ->orderBy("inv_title");

$paginator = new QueryBuilder(
[
    "builder" => $builder,
    "limit"   => 20,
    "page"    => 1,
]
);
```

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
- **`Phalcon\Paginator\Adapter\QueryBuilder`**

`Phalcon\Contracts\Db\Adapter\Adapter` · `Phalcon\Contracts\Paginator\PaginatorTypes` · `Phalcon\Db\Enum` · `Phalcon\Mvc\Model\Query\Builder` · `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\BuilderModelNotDefined` · `Phalcon\Paginator\Exceptions\InvalidBuilderInstance` · `Phalcon\Paginator\Exceptions\MissingColumnsForHaving` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\RepositoryInterface`

### Method Summary

<ApiItem href="#paginatoradapterquerybuilder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"config","default":null}]}>
Phalcon\Paginator\Adapter\QueryBuilder
</ApiItem>
<ApiItem href="#paginatoradapterquerybuilder-getcurrentpage" visibility="public" name="getCurrentPage" returnType="int" params={[]}>
Get the current page number
</ApiItem>
<ApiItem href="#paginatoradapterquerybuilder-getquerybuilder" visibility="public" name="getQueryBuilder" returnType="Builder" params={[]}>
Get query builder object
</ApiItem>
<ApiItem href="#paginatoradapterquerybuilder-paginate" visibility="public" name="paginate" returnType="RepositoryInterface" params={[]}>
Returns a slice of the resultset to show in the pagination
</ApiItem>
<ApiItem href="#paginatoradapterquerybuilder-setquerybuilder" visibility="public" name="setQueryBuilder" returnType="static" params={[{"type":"Builder","name":"builder","default":null}]}>
Set query builder object
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="builder" type="Builder" default="">
Paginator's data
</ApiItem>
<ApiItem kind="property" visibility="protected" name="columns" type="paginator_columns|null" default="">
Column list used only for COUNT rewriting when the builder carries a
HAVING or GROUP BY clause. It supplies the columns for the subquery
that counts the grouped/having result set and is ignored otherwise.
</ApiItem>

### Methods

<h4 id="paginatoradapterquerybuilder-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\QueryBuilder

The `columns` option is not a projection for the paginated rows; it is
consumed solely by the total-count rewrite when the builder has a
HAVING or GROUP BY clause (it becomes the column list of the counting
subquery). It has no effect on plain queries.

<h4 id="paginatoradapterquerybuilder-getcurrentpage"><code>getCurrentPage()</code></h4>

```php
public function getCurrentPage(): int;
```

Get the current page number

<h4 id="paginatoradapterquerybuilder-getquerybuilder"><code>getQueryBuilder()</code></h4>

```php
public function getQueryBuilder(): Builder;
```

Get query builder object

<h4 id="paginatoradapterquerybuilder-paginate"><code>paginate()</code></h4>

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination

<h4 id="paginatoradapterquerybuilder-setquerybuilder"><code>setQueryBuilder()</code></h4>

```php
public function setQueryBuilder( Builder $builder ): static;
```

Set query builder object

## Paginator\Adapter\QueryBuilderCursor

Class

Cursor-based (keyset) pagination using a PHQL query builder as source of
data.

Unlike offset pagination, this adapter does not use an ever-growing OFFSET.
It appends a WHERE condition on a unique, indexed cursor column so that each
page is an O(1) index seek regardless of depth.

Limitations:
- No total count: `getTotalItems()` always returns 0.
- No random access: `getLast()` always returns 0. Pages must be traversed
  in order by following the cursor value returned in `getNext()`.
- The cursor column must be unique and indexed (e.g. a primary key).
- Items are returned as an array of associative arrays (via
  `Resultset::toArray()`), not as model objects.
- `cursorColumn` must match the PHQL-accessible column name exactly
  (e.g. `"inv_id"`).

```php
use Phalcon\Paginator\Adapter\QueryBuilderCursor;

$builder = $this->modelsManager->createBuilder()
            ->columns("inv_id, inv_title")
            ->from(Invoices::class)
            ->orderBy("inv_id");

$paginator = new QueryBuilderCursor(
[
    "builder"      => $builder,
    "limit"        => 20,
    "cursorColumn" => "inv_id",
    "cursor"       => null,  // first page; pass $page->getNext() for subsequent pages
]
);

$page = $paginator->paginate();
// $page->getItems()   - array of rows for this page
// $page->getNext()    - cursor value to pass for the next page (0 means no more pages)
// $page->getCurrent() - cursor value used for this page (0 on first page)
```

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
- **`Phalcon\Paginator\Adapter\QueryBuilderCursor`**

`Phalcon\Contracts\Paginator\PaginatorTypes` · `Phalcon\Mvc\Model\Query\Builder` · `Phalcon\Paginator\Exceptions\InvalidBuilderInstance` · `Phalcon\Paginator\Exceptions\InvalidCursorColumn` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\RepositoryInterface`

### Method Summary

<ApiItem href="#paginatoradapterquerybuildercursor-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"config","default":null}]}>
Phalcon\Paginator\Adapter\QueryBuilderCursor
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-getcurrentpage" visibility="public" name="getCurrentPage" returnType="int" params={[]}>
Get the current page number
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-getcursor" visibility="public" name="getCursor" returnType="mixed" params={[]}>
Get the cursor value for the current page (null on first page)
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-getcursorcolumn" visibility="public" name="getCursorColumn" returnType="string" params={[]}>
Get the cursor column name
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-getquerybuilder" visibility="public" name="getQueryBuilder" returnType="Builder" params={[]}>
Get query builder object
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-paginate" visibility="public" name="paginate" returnType="RepositoryInterface" params={[]}>
Returns a slice of the resultset to show in the pagination
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-setcursor" visibility="public" name="setCursor" returnType="static" params={[{"type":"mixed","name":"cursor","default":null}]}>
Set the cursor value for the next paginate() call
</ApiItem>
<ApiItem href="#paginatoradapterquerybuildercursor-setquerybuilder" visibility="public" name="setQueryBuilder" returnType="static" params={[{"type":"Builder","name":"builder","default":null}]}>
Set query builder object
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="builder" type="Builder" default="">
Paginator's data
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cursor" type="mixed" default="null">
The cursor value for the current page (null = first page)
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cursorColumn" type="string" default="">
The column used as the cursor (must be unique and indexed)
</ApiItem>

### Methods

<h4 id="paginatoradapterquerybuildercursor-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\QueryBuilderCursor

<h4 id="paginatoradapterquerybuildercursor-getcurrentpage"><code>getCurrentPage()</code></h4>

```php
public function getCurrentPage(): int;
```

Get the current page number

Returns the cursor value used for this page cast to int, or 0 for the
first page. Use getCursor() to retrieve the raw cursor value.

<h4 id="paginatoradapterquerybuildercursor-getcursor"><code>getCursor()</code></h4>

```php
public function getCursor(): mixed;
```

Get the cursor value for the current page (null on first page)

<h4 id="paginatoradapterquerybuildercursor-getcursorcolumn"><code>getCursorColumn()</code></h4>

```php
public function getCursorColumn(): string;
```

Get the cursor column name

<h4 id="paginatoradapterquerybuildercursor-getquerybuilder"><code>getQueryBuilder()</code></h4>

```php
public function getQueryBuilder(): Builder;
```

Get query builder object

<h4 id="paginatoradapterquerybuildercursor-paginate"><code>paginate()</code></h4>

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination

Fetches `limit + 1` rows from the builder. If the extra row is present
a next page exists; it is discarded and the cursor value of the last
included row is stored in the `next` repository property.

<h4 id="paginatoradapterquerybuildercursor-setcursor"><code>setCursor()</code></h4>

```php
public function setCursor( mixed $cursor ): static;
```

Set the cursor value for the next paginate() call

Pass the value returned by Repository::getNext() to advance to the
next page, or null to restart from the first page.

<h4 id="paginatoradapterquerybuildercursor-setquerybuilder"><code>setQueryBuilder()</code></h4>

```php
public function setQueryBuilder( Builder $builder ): static;
```

Set query builder object

## Paginator\Exception

Class

Exceptions thrown in Phalcon\Paginator will use this class

- `\Exception`
- **`Phalcon\Paginator\Exception`**
- [`Phalcon\Paginator\Exceptions\BuilderModelNotDefined`](#paginatorexceptionsbuildermodelnotdefined)
- [`Phalcon\Paginator\Exceptions\InvalidBuilderInstance`](#paginatorexceptionsinvalidbuilderinstance)
- [`Phalcon\Paginator\Exceptions\InvalidCursorColumn`](#paginatorexceptionsinvalidcursorcolumn)
- [`Phalcon\Paginator\Exceptions\InvalidLimit`](#paginatorexceptionsinvalidlimit)
- [`Phalcon\Paginator\Exceptions\MissingColumnsForHaving`](#paginatorexceptionsmissingcolumnsforhaving)
- [`Phalcon\Paginator\Exceptions\MissingRequiredParameter`](#paginatorexceptionsmissingrequiredparameter)
- [`Phalcon\Paginator\Exceptions\PaginatorDataNotArray`](#paginatorexceptionspaginatordatanotarray)

## Paginator\Exceptions\BuilderModelNotDefined

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\BuilderModelNotDefined`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionsbuildermodelnotdefined-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionsbuildermodelnotdefined-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Paginator\Exceptions\InvalidBuilderInstance

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\InvalidBuilderInstance`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionsinvalidbuilderinstance-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionsinvalidbuilderinstance-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Paginator\Exceptions\InvalidCursorColumn

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\InvalidCursorColumn`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionsinvalidcursorcolumn-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionsinvalidcursorcolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Paginator\Exceptions\InvalidLimit

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\InvalidLimit`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionsinvalidlimit-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionsinvalidlimit-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Paginator\Exceptions\MissingColumnsForHaving

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\MissingColumnsForHaving`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionsmissingcolumnsforhaving-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionsmissingcolumnsforhaving-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Paginator\Exceptions\MissingRequiredParameter

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\MissingRequiredParameter`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionsmissingrequiredparameter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"parameter","default":null}]}>
</ApiItem>
<ApiItem href="#paginatorexceptionsmissingrequiredparameter-getparameter" visibility="public" name="getParameter" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionsmissingrequiredparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $parameter );
```

<h4 id="paginatorexceptionsmissingrequiredparameter-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter(): string;
```

## Paginator\Exceptions\PaginatorDataNotArray

Class

- `\Exception`
- [`Phalcon\Paginator\Exception`](#paginatorexception)
- **`Phalcon\Paginator\Exceptions\PaginatorDataNotArray`**

`Phalcon\Paginator\Exception`

### Method Summary

<ApiItem href="#paginatorexceptionspaginatordatanotarray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="paginatorexceptionspaginatordatanotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Paginator\PaginatorFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.20/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Paginator\PaginatorFactory`**

`Phalcon\Config\Config` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Paginator\PaginatorTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Paginator\Adapter\AdapterInterface` · `Phalcon\Paginator\Adapter\Model` · `Phalcon\Paginator\Adapter\NativeArray` · `Phalcon\Paginator\Adapter\QueryBuilder` · `Phalcon\Paginator\Adapter\QueryBuilderCursor` · `Throwable`

### Method Summary

<ApiItem href="#paginatorpaginatorfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"services","default":"[]"}]}>
AdapterFactory constructor.
</ApiItem>
<ApiItem href="#paginatorpaginatorfactory-load" visibility="public" name="load" returnType="AdapterInterface" params={[{"type":"mixed","name":"config","default":null}]}>
Factory to create an instance from a Config object
</ApiItem>
<ApiItem href="#paginatorpaginatorfactory-newinstance" visibility="public" name="newInstance" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Create a new instance of the adapter
</ApiItem>
<ApiItem href="#paginatorpaginatorfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#paginatorpaginatorfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Methods

<h4 id="paginatorpaginatorfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

<h4 id="paginatorpaginatorfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

```php
use Phalcon\Paginator\PaginatorFactory;

$builder = $this
 ->modelsManager
 ->createBuilder()
 ->columns("inv_id, inv_title")
 ->from(Invoices::class)
 ->orderBy("inv_title");

$options = [
"builder" => $builder,
"limit"   => 20,
"page"    => 1,
"adapter" => "queryBuilder",
];

$paginator = (new PaginatorFactory())->load($options);
```

<h4 id="paginatorpaginatorfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
string $name,
array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="paginatorpaginatorfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="paginatorpaginatorfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Paginator\Repository

Class

Repository of current state Phalcon\Paginator\AdapterInterface::paginate()

- **`Phalcon\Paginator\Repository`** - implements [`Phalcon\Paginator\RepositoryInterface`](#paginatorrepositoryinterface), `\JsonSerializable`

`JsonSerializable` · `Phalcon\Contracts\Paginator\PaginatorTypes`

### Method Summary

<ApiItem href="#paginatorrepository-__get" visibility="public" name="__get" returnType="mixed|null" params={[{"type":"string","name":"property","default":null}]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getaliases" visibility="public" name="getAliases" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getcurrent" visibility="public" name="getCurrent" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getfirst" visibility="public" name="getFirst" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getitems" visibility="public" name="getItems" returnType="mixed" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getlast" visibility="public" name="getLast" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getlimit" visibility="public" name="getLimit" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getnext" visibility="public" name="getNext" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getprevious" visibility="public" name="getPrevious" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-gettotalitems" visibility="public" name="getTotalItems" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-jsonserialize" visibility="public" name="jsonSerialize" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#paginatorrepository-setaliases" visibility="public" name="setAliases" returnType="RepositoryInterface" params={[{"type":"array","name":"aliases","default":null}]}>
</ApiItem>
<ApiItem href="#paginatorrepository-setproperties" visibility="public" name="setProperties" returnType="RepositoryInterface" params={[{"type":"array","name":"properties","default":null}]}>
</ApiItem>
<ApiItem href="#paginatorrepository-getproperty" visibility="protected" name="getProperty" returnType="mixed" params={[{"type":"string","name":"property","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Gets value of property by name
</ApiItem>
<ApiItem href="#paginatorrepository-getrealnameproperty" visibility="protected" name="getRealNameProperty" returnType="string" params={[{"type":"string","name":"property","default":null}]}>
Resolve alias property name
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="aliases" type="paginator_aliases" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="properties" type="paginator_properties" default="[]">
</ApiItem>

### Methods

<h4 id="paginatorrepository-__get"><code>__get()</code></h4>

```php
public function __get( string $property ): mixed|null;
```

<h4 id="paginatorrepository-getaliases"><code>getAliases()</code></h4>

```php
public function getAliases(): array;
```

<h4 id="paginatorrepository-getcurrent"><code>getCurrent()</code></h4>

```php
public function getCurrent(): int;
```

<h4 id="paginatorrepository-getfirst"><code>getFirst()</code></h4>

```php
public function getFirst(): int;
```

<h4 id="paginatorrepository-getitems"><code>getItems()</code></h4>

```php
public function getItems(): mixed;
```

<h4 id="paginatorrepository-getlast"><code>getLast()</code></h4>

```php
public function getLast(): int;
```

<h4 id="paginatorrepository-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): int;
```

<h4 id="paginatorrepository-getnext"><code>getNext()</code></h4>

```php
public function getNext(): int;
```

<h4 id="paginatorrepository-getprevious"><code>getPrevious()</code></h4>

```php
public function getPrevious(): int;
```

<h4 id="paginatorrepository-gettotalitems"><code>getTotalItems()</code></h4>

```php
public function getTotalItems(): int;
```

<h4 id="paginatorrepository-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

<h4 id="paginatorrepository-setaliases"><code>setAliases()</code></h4>

```php
public function setAliases( array $aliases ): RepositoryInterface;
```

<h4 id="paginatorrepository-setproperties"><code>setProperties()</code></h4>

```php
public function setProperties( array $properties ): RepositoryInterface;
```

<h4 id="paginatorrepository-getproperty"><code>getProperty()</code></h4>

```php
protected function getProperty(
string $property,
mixed $defaultValue = null
): mixed;
```

Gets value of property by name

The repository is filled by the adapters, which store an int under every
property that has an int default, so callers passing one are handed an
int back.

<h4 id="paginatorrepository-getrealnameproperty"><code>getRealNameProperty()</code></h4>

```php
protected function getRealNameProperty( string $property ): string;
```

Resolve alias property name

## Paginator\RepositoryInterface

Interface

- [`Phalcon\Contracts\Paginator\Repository`](/5.20/api/phalcon_contracts/#contractspaginatorrepository)
- **`Phalcon\Paginator\RepositoryInterface`**

`Phalcon\Contracts\Paginator\Repository`

Source: https://docs.phalcon.io/5.20/api/phalcon_paginator/index.mdx
