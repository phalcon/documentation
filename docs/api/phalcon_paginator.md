---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Paginator\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/AbstractAdapter.zep){ .src-btn }

Phalcon\Paginator\Adapter\AbstractAdapter

<div class="api-tree" markdown>

- **`Phalcon\Paginator\Adapter\AbstractAdapter`** - implements [`Phalcon\Paginator\Adapter\AdapterInterface`](#paginatoradapteradapterinterface)
    - [`Phalcon\Paginator\Adapter\Model`](#paginatoradaptermodel)
    - [`Phalcon\Paginator\Adapter\NativeArray`](#paginatoradapternativearray)
    - [`Phalcon\Paginator\Adapter\QueryBuilder`](#paginatoradapterquerybuilder)
    - [`Phalcon\Paginator\Adapter\QueryBuilderCursor`](#paginatoradapterquerybuildercursor)

</div>

__Uses__ `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\InvalidLimit` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\Repository` · `Phalcon\Paginator\RepositoryInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatoradapterabstractadapter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$config</span> )</code>
<span class="desc">Phalcon\Paginator\Adapter\AbstractAdapter constructor</span>
</a>
<a class="api-item" href="#paginatoradapterabstractadapter-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLimit</span>()</code>
<span class="desc">Get current rows limit</span>
</a>
<a class="api-item" href="#paginatoradapterabstractadapter-setcurrentpage">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setCurrentPage</span>( <span class="st">int</span> <span class="sv">$page</span> )</code>
<span class="desc">Set the current page number</span>
</a>
<a class="api-item" href="#paginatoradapterabstractadapter-setlimit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setLimit</span>( <span class="st">int</span> <span class="sv">$limit</span> )</code>
<span class="desc">Set current rows limit</span>
</a>
<a class="api-item" href="#paginatoradapterabstractadapter-setrepository">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setRepository</span>( <span class="st">RepositoryInterface</span> <span class="sv">$repository</span> )</code>
<span class="desc">Sets current repository for pagination</span>
</a>
<a class="api-item" href="#paginatoradapterabstractadapter-getrepository">
<code class="vis vis-protected">protected</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">getRepository</span>( <span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = null</span> )</code>
<span class="desc">Gets current repository for pagination</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$config</span></code>
<span class="desc">Configuration of paginator</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sv">$limitRows</span><span class="sm"> = null</span></code>
<span class="desc">Number of rows to show in the paginator. By default is null</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sv">$page</span><span class="sm"> = null</span></code>
<span class="desc">Current page in paginate</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sv">$repository</span></code>
<span class="desc">Repository for pagination</span>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #paginatoradapterabstractadapter-__construct }

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\AbstractAdapter constructor

#### `getLimit()` { #paginatoradapterabstractadapter-getlimit }

```php
public function getLimit(): int;
```

Get current rows limit

#### `setCurrentPage()` { #paginatoradapterabstractadapter-setcurrentpage }

```php
public function setCurrentPage( int $page ): AdapterInterface;
```

Set the current page number

#### `setLimit()` { #paginatoradapterabstractadapter-setlimit }

```php
public function setLimit( int $limit ): AdapterInterface;
```

Set current rows limit

#### `setRepository()` { #paginatoradapterabstractadapter-setrepository }

```php
public function setRepository( RepositoryInterface $repository ): AdapterInterface;
```

Sets current repository for pagination

<div class="api-group">Protected · 1</div>

#### `getRepository()` { #paginatoradapterabstractadapter-getrepository }

```php
protected function getRepository( array $properties = null ): RepositoryInterface;
```

Gets current repository for pagination


## Paginator\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/AdapterInterface.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Paginator\Adapter`](phalcon_contracts.md#contractspaginatoradapter)
    - **`Phalcon\Paginator\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Contracts\Paginator\Adapter`
{ .api-uses }


## Paginator\Adapter\Model

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/Model.zep){ .src-btn }

Phalcon\Paginator\Adapter\Model

This adapter allows to paginate data using a Phalcon\Mvc\Model resultset as a
base.

```php
use Phalcon\Paginator\Adapter\Model;

$paginator = new Model(
    [
        "model" => Robots::class,
        "limit" => 25,
        "page"  => $currentPage,
    ]
);

$paginator = new Model(
    [
        "model" => Robots::class,
        "parameters" => [
             "columns" => "id, name"
        ],
        "limit" => 12,
        "page"  => $currentPage,
    ]
);

$paginator = new Model(
    [
        "model" => Robots::class,
        "parameters" => [
             "type = :type:",
             "bind" => [
                 "type" => "mechanical"
             ],
             "order" => "name"
        ],
        "limit" => 16,
        "page"  => $currentPage,
    ]
);

$paginator = new Model(
    [
        "model" => Robots::class,
        "parameters" => "(id % 2) = 0",
        "limit" => 8,
        "page"  => $currentPage,
    ]
);

$paginator = new Model(
    [
        "model" => Robots::class,
        "parameters" => [ "(id % 2) = 0" ],
        "limit" => 8,
        "page"  => $currentPage,
    ]
);

$paginate = $paginator->paginate();
```

<div class="api-tree" markdown>

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
    - **`Phalcon\Paginator\Adapter\Model`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\RepositoryInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatoradaptermodel-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$config</span> )</code>
<span class="desc">Phalcon\Paginator\Adapter\Model constructor</span>
</a>
<a class="api-item" href="#paginatoradaptermodel-paginate">
<code class="vis vis-public">public</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">paginate</span>()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #paginatoradaptermodel-__construct }

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\Model constructor

#### `paginate()` { #paginatoradaptermodel-paginate }

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination


## Paginator\Adapter\NativeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/NativeArray.zep){ .src-btn }

Phalcon\Paginator\Adapter\NativeArray

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

<div class="api-tree" markdown>

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
    - **`Phalcon\Paginator\Adapter\NativeArray`**

</div>

__Uses__ `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\PaginatorDataNotArray` · `Phalcon\Paginator\RepositoryInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatoradapternativearray-paginate">
<code class="vis vis-public">public</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">paginate</span>()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `paginate()` { #paginatoradapternativearray-paginate }

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination


## Paginator\Adapter\QueryBuilder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/QueryBuilder.zep){ .src-btn }

Phalcon\Paginator\Adapter\QueryBuilder

Pagination using a PHQL query builder as source of data

```php
use Phalcon\Paginator\Adapter\QueryBuilder;

$builder = $this->modelsManager->createBuilder()
                ->columns("id, name")
                ->from(Robots::class)
                ->orderBy("name");

$paginator = new QueryBuilder(
    [
        "builder" => $builder,
        "limit"   => 20,
        "page"    => 1,
    ]
);
```

<div class="api-tree" markdown>

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
    - **`Phalcon\Paginator\Adapter\QueryBuilder`**

</div>

__Uses__ `Phalcon\Db\Enum` · `Phalcon\Mvc\Model\Query\Builder` · `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\BuilderModelNotDefined` · `Phalcon\Paginator\Exceptions\InvalidBuilderInstance` · `Phalcon\Paginator\Exceptions\MissingColumnsForHaving` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\RepositoryInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatoradapterquerybuilder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$config</span> )</code>
<span class="desc">Phalcon\Paginator\Adapter\QueryBuilder</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuilder-getcurrentpage">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCurrentPage</span>()</code>
<span class="desc">Get the current page number</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuilder-getquerybuilder">
<code class="vis vis-public">public</code>
<code class="ret">Builder</code>
<code class="sig"><span class="sf">getQueryBuilder</span>()</code>
<span class="desc">Get query builder object</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuilder-paginate">
<code class="vis vis-public">public</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">paginate</span>()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuilder-setquerybuilder">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setQueryBuilder</span>( <span class="st">Builder</span> <span class="sv">$builder</span> )</code>
<span class="desc">Set query builder object</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Builder</code>
<code class="sig"><span class="sv">$builder</span></code>
<span class="desc">Paginator&#039;s data</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array|string</code>
<code class="sig"><span class="sv">$columns</span></code>
<span class="desc">Column list used only for COUNT rewriting when the builder carries a
HAVING or GROUP BY clause. It supplies the columns for the subquery
that counts the grouped/having result set and is ignored otherwise.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #paginatoradapterquerybuilder-__construct }

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\QueryBuilder

The `columns` option is not a projection for the paginated rows; it is
consumed solely by the total-count rewrite when the builder has a
HAVING or GROUP BY clause (it becomes the column list of the counting
subquery). It has no effect on plain queries.

#### `getCurrentPage()` { #paginatoradapterquerybuilder-getcurrentpage }

```php
public function getCurrentPage(): int;
```

Get the current page number

#### `getQueryBuilder()` { #paginatoradapterquerybuilder-getquerybuilder }

```php
public function getQueryBuilder(): Builder;
```

Get query builder object

#### `paginate()` { #paginatoradapterquerybuilder-paginate }

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination

#### `setQueryBuilder()` { #paginatoradapterquerybuilder-setquerybuilder }

```php
public function setQueryBuilder( Builder $builder ): static;
```

Set query builder object


## Paginator\Adapter\QueryBuilderCursor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/QueryBuilderCursor.zep){ .src-btn }

Phalcon\Paginator\Adapter\QueryBuilderCursor

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

<div class="api-tree" markdown>

- [`Phalcon\Paginator\Adapter\AbstractAdapter`](#paginatoradapterabstractadapter)
    - **`Phalcon\Paginator\Adapter\QueryBuilderCursor`**

</div>

__Uses__ `Phalcon\Mvc\Model\Query\Builder` · `Phalcon\Paginator\Exception` · `Phalcon\Paginator\Exceptions\InvalidBuilderInstance` · `Phalcon\Paginator\Exceptions\InvalidCursorColumn` · `Phalcon\Paginator\Exceptions\MissingRequiredParameter` · `Phalcon\Paginator\RepositoryInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatoradapterquerybuildercursor-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$config</span> )</code>
<span class="desc">Phalcon\Paginator\Adapter\QueryBuilderCursor</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-getcurrentpage">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCurrentPage</span>()</code>
<span class="desc">Get the current page number</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-getcursor">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getCursor</span>()</code>
<span class="desc">Get the cursor value for the current page (null on first page)</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-getcursorcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCursorColumn</span>()</code>
<span class="desc">Get the cursor column name</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-getquerybuilder">
<code class="vis vis-public">public</code>
<code class="ret">Builder</code>
<code class="sig"><span class="sf">getQueryBuilder</span>()</code>
<span class="desc">Get query builder object</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-paginate">
<code class="vis vis-public">public</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">paginate</span>()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-setcursor">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setCursor</span>( <span class="st">mixed</span> <span class="sv">$cursor</span> )</code>
<span class="desc">Set the cursor value for the next paginate() call</span>
</a>
<a class="api-item" href="#paginatoradapterquerybuildercursor-setquerybuilder">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setQueryBuilder</span>( <span class="st">Builder</span> <span class="sv">$builder</span> )</code>
<span class="desc">Set query builder object</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Builder</code>
<code class="sig"><span class="sv">$builder</span></code>
<span class="desc">Paginator&#039;s data</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$cursor</span><span class="sm"> = null</span></code>
<span class="desc">The cursor value for the current page (null = first page)</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$cursorColumn</span></code>
<span class="desc">The column used as the cursor (must be unique and indexed)</span>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #paginatoradapterquerybuildercursor-__construct }

```php
public function __construct( array $config );
```

Phalcon\Paginator\Adapter\QueryBuilderCursor

#### `getCurrentPage()` { #paginatoradapterquerybuildercursor-getcurrentpage }

```php
public function getCurrentPage(): int;
```

Get the current page number

Returns the cursor value used for this page cast to int, or 0 for the
first page. Use getCursor() to retrieve the raw cursor value.

#### `getCursor()` { #paginatoradapterquerybuildercursor-getcursor }

```php
public function getCursor(): mixed;
```

Get the cursor value for the current page (null on first page)

#### `getCursorColumn()` { #paginatoradapterquerybuildercursor-getcursorcolumn }

```php
public function getCursorColumn(): string;
```

Get the cursor column name

#### `getQueryBuilder()` { #paginatoradapterquerybuildercursor-getquerybuilder }

```php
public function getQueryBuilder(): Builder;
```

Get query builder object

#### `paginate()` { #paginatoradapterquerybuildercursor-paginate }

```php
public function paginate(): RepositoryInterface;
```

Returns a slice of the resultset to show in the pagination

Fetches `limit + 1` rows from the builder. If the extra row is present
a next page exists; it is discarded and the cursor value of the last
included row is stored in the `next` repository property.

#### `setCursor()` { #paginatoradapterquerybuildercursor-setcursor }

```php
public function setCursor( mixed $cursor ): static;
```

Set the cursor value for the next paginate() call

Pass the value returned by Repository::getNext() to advance to the
next page, or null to restart from the first page.

#### `setQueryBuilder()` { #paginatoradapterquerybuildercursor-setquerybuilder }

```php
public function setQueryBuilder( Builder $builder ): static;
```

Set query builder object


## Paginator\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exception.zep){ .src-btn }

Phalcon\Paginator\Exception

Exceptions thrown in Phalcon\Paginator will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Paginator\Exception`**
        - [`Phalcon\Paginator\Exceptions\BuilderModelNotDefined`](#paginatorexceptionsbuildermodelnotdefined)
        - [`Phalcon\Paginator\Exceptions\InvalidBuilderInstance`](#paginatorexceptionsinvalidbuilderinstance)
        - [`Phalcon\Paginator\Exceptions\InvalidCursorColumn`](#paginatorexceptionsinvalidcursorcolumn)
        - [`Phalcon\Paginator\Exceptions\InvalidLimit`](#paginatorexceptionsinvalidlimit)
        - [`Phalcon\Paginator\Exceptions\MissingColumnsForHaving`](#paginatorexceptionsmissingcolumnsforhaving)
        - [`Phalcon\Paginator\Exceptions\MissingRequiredParameter`](#paginatorexceptionsmissingrequiredparameter)
        - [`Phalcon\Paginator\Exceptions\PaginatorDataNotArray`](#paginatorexceptionspaginatordatanotarray)

</div>


## Paginator\Exceptions\BuilderModelNotDefined

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/BuilderModelNotDefined.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\BuilderModelNotDefined`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionsbuildermodelnotdefined-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #paginatorexceptionsbuildermodelnotdefined-__construct }

```php
public function __construct();
```


## Paginator\Exceptions\InvalidBuilderInstance

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/InvalidBuilderInstance.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\InvalidBuilderInstance`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionsinvalidbuilderinstance-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #paginatorexceptionsinvalidbuilderinstance-__construct }

```php
public function __construct();
```


## Paginator\Exceptions\InvalidCursorColumn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/InvalidCursorColumn.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\InvalidCursorColumn`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionsinvalidcursorcolumn-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #paginatorexceptionsinvalidcursorcolumn-__construct }

```php
public function __construct();
```


## Paginator\Exceptions\InvalidLimit

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/InvalidLimit.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\InvalidLimit`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionsinvalidlimit-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #paginatorexceptionsinvalidlimit-__construct }

```php
public function __construct();
```


## Paginator\Exceptions\MissingColumnsForHaving

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/MissingColumnsForHaving.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\MissingColumnsForHaving`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionsmissingcolumnsforhaving-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #paginatorexceptionsmissingcolumnsforhaving-__construct }

```php
public function __construct();
```


## Paginator\Exceptions\MissingRequiredParameter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/MissingRequiredParameter.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\MissingRequiredParameter`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionsmissingrequiredparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$parameter</span> )</code>
</a>
<a class="api-item" href="#paginatorexceptionsmissingrequiredparameter-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getParameter</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #paginatorexceptionsmissingrequiredparameter-__construct }

```php
public function __construct( string $parameter );
```

#### `getParameter()` { #paginatorexceptionsmissingrequiredparameter-getparameter }

```php
public function getParameter(): string;
```


## Paginator\Exceptions\PaginatorDataNotArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/PaginatorDataNotArray.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Paginator\Exception`](#paginatorexception)
        - **`Phalcon\Paginator\Exceptions\PaginatorDataNotArray`**

</div>

__Uses__ `Phalcon\Paginator\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorexceptionspaginatordatanotarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #paginatorexceptionspaginatordatanotarray-__construct }

```php
public function __construct();
```


## Paginator\PaginatorFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/PaginatorFactory.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Paginator\PaginatorFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Paginator\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorpaginatorfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#paginatorpaginatorfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#paginatorpaginatorfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#paginatorpaginatorfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#paginatorpaginatorfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #paginatorpaginatorfactory-__construct }

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

#### `load()` { #paginatorpaginatorfactory-load }

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

```php
use Phalcon\Paginator\PaginatorFactory;

$builder = $this
     ->modelsManager
     ->createBuilder()
     ->columns("id, name")
     ->from(Robots::class)
     ->orderBy("name");

$options = [
    "builder" => $builder,
    "limit"   => 20,
    "page"    => 1,
    "adapter" => "queryBuilder",
];

$paginator = (new PaginatorFactory())->load($options);
```

#### `newInstance()` { #paginatorpaginatorfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #paginatorpaginatorfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #paginatorpaginatorfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Paginator\Repository

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Repository.zep){ .src-btn }

Phalcon\Paginator\Repository

Repository of current state Phalcon\Paginator\AdapterInterface::paginate()

<div class="api-tree" markdown>

- **`Phalcon\Paginator\Repository`** - implements [`Phalcon\Paginator\RepositoryInterface`](#paginatorrepositoryinterface), `JsonSerializable`

</div>

__Uses__ `JsonSerializable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#paginatorrepository-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$property</span> )</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getaliases">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAliases</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getcurrent">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCurrent</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getfirst">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getFirst</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getitems">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getItems</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getlast">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLast</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLimit</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getnext">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getNext</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getprevious">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPrevious</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-gettotalitems">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTotalItems</span>()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">jsonSerialize</span>()</code>
<span class="desc">See [jsonSerialize](https://php.net/manual/en/jsonserializable.jsonserialize.php)</span>
</a>
<a class="api-item" href="#paginatorrepository-setaliases">
<code class="vis vis-public">public</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">setAliases</span>( <span class="st">array</span> <span class="sv">$aliases</span> )</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-setproperties">
<code class="vis vis-public">public</code>
<code class="ret">RepositoryInterface</code>
<code class="sig"><span class="sf">setProperties</span>( <span class="st">array</span> <span class="sv">$properties</span> )</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#paginatorrepository-getproperty">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$property</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets value of property by name</span>
</a>
<a class="api-item" href="#paginatorrepository-getrealnameproperty">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealNameProperty</span>( <span class="st">string</span> <span class="sv">$property</span> )</code>
<span class="desc">Resolve alias property name</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$aliases</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$properties</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `__get()` { #paginatorrepository-__get }

```php
public function __get( string $property ): mixed|null;
```

{@inheritdoc}

#### `getAliases()` { #paginatorrepository-getaliases }

```php
public function getAliases(): array;
```

{@inheritdoc}

#### `getCurrent()` { #paginatorrepository-getcurrent }

```php
public function getCurrent(): int;
```

{@inheritdoc}

#### `getFirst()` { #paginatorrepository-getfirst }

```php
public function getFirst(): int;
```

{@inheritdoc}

#### `getItems()` { #paginatorrepository-getitems }

```php
public function getItems(): mixed;
```

{@inheritdoc}

#### `getLast()` { #paginatorrepository-getlast }

```php
public function getLast(): int;
```

{@inheritdoc}

#### `getLimit()` { #paginatorrepository-getlimit }

```php
public function getLimit(): int;
```

{@inheritdoc}

#### `getNext()` { #paginatorrepository-getnext }

```php
public function getNext(): int;
```

{@inheritdoc}

#### `getPrevious()` { #paginatorrepository-getprevious }

```php
public function getPrevious(): int;
```

{@inheritdoc}

#### `getTotalItems()` { #paginatorrepository-gettotalitems }

```php
public function getTotalItems(): int;
```

{@inheritdoc}

#### `jsonSerialize()` { #paginatorrepository-jsonserialize }

```php
public function jsonSerialize(): array;
```

See [jsonSerialize](https://php.net/manual/en/jsonserializable.jsonserialize.php)

#### `setAliases()` { #paginatorrepository-setaliases }

```php
public function setAliases( array $aliases ): RepositoryInterface;
```

{@inheritdoc}

#### `setProperties()` { #paginatorrepository-setproperties }

```php
public function setProperties( array $properties ): RepositoryInterface;
```

{@inheritdoc}

<div class="api-group">Protected · 2</div>

#### `getProperty()` { #paginatorrepository-getproperty }

```php
protected function getProperty(
    string $property,
    mixed $defaultValue = null
): mixed;
```

Gets value of property by name

#### `getRealNameProperty()` { #paginatorrepository-getrealnameproperty }

```php
protected function getRealNameProperty( string $property ): string;
```

Resolve alias property name


## Paginator\RepositoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/RepositoryInterface.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Paginator\Repository`](phalcon_contracts.md#contractspaginatorrepository)
    - **`Phalcon\Paginator\RepositoryInterface`**

</div>

__Uses__ `Phalcon\Contracts\Paginator\Repository`
{ .api-uses }
