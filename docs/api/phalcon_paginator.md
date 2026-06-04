---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Paginator\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Paginator\Adapter`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`
    - `Phalcon\Paginator\Exceptions\InvalidLimit`
    - `Phalcon\Paginator\Repository`
    - `Phalcon\Paginator\RepositoryInterface`

-   __Extends__
    

-   __Implements__
    
    - `AdapterInterface`

Phalcon\Paginator\Adapter\AbstractAdapter


### Properties
```php
/**
 * Configuration of paginator
 *
 * @var array
 */
protected $config;

/**
 * Number of rows to show in the paginator. By default is null
 *
 * @var int|null
 */
protected $limitRows;

/**
 * Current page in paginate
 *
 * @var int|null
 */
protected $page;

/**
 * Repository for pagination
 *
 * @var RepositoryInterface
 */
protected $repository;

```

### Methods

```php
public function __construct( array $config );
```
Phalcon\Paginator\Adapter\AbstractAdapter constructor


```php
public function getLimit(): int;
```
Get current rows limit


```php
public function setCurrentPage( int $page ): AdapterInterface;
```
Set the current page number


```php
public function setLimit( int $limit ): AdapterInterface;
```
Set current rows limit


```php
public function setRepository( RepositoryInterface $repository ): AdapterInterface;
```
Sets current repository for pagination


```php
protected function getRepository( array $properties = null ): RepositoryInterface;
```
Gets current repository for pagination




## Paginator\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Paginator\Adapter`

-   __Uses__
    
    - `Phalcon\Contracts\Paginator\Adapter`

-   __Extends__
    
    `AdapterContract`

-   __Implements__
    

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Paginator\Adapter} instead.



## Paginator\Adapter\Model 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/Model.zep)


-   __Namespace__

    - `Phalcon\Paginator\Adapter`

-   __Uses__
    
    - `Phalcon\Mvc\ModelInterface`
    - `Phalcon\Mvc\Model\ResultsetInterface`
    - `Phalcon\Paginator\Exception`
    - `Phalcon\Paginator\RepositoryInterface`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

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


### Methods

```php
public function paginate(): RepositoryInterface;
```
Returns a slice of the resultset to show in the pagination




## Paginator\Adapter\NativeArray 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/NativeArray.zep)


-   __Namespace__

    - `Phalcon\Paginator\Adapter`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`
    - `Phalcon\Paginator\Exceptions\PaginatorDataNotArray`
    - `Phalcon\Paginator\RepositoryInterface`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

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


### Methods

```php
public function paginate(): RepositoryInterface;
```
Returns a slice of the resultset to show in the pagination




## Paginator\Adapter\QueryBuilder 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/QueryBuilder.zep)


-   __Namespace__

    - `Phalcon\Paginator\Adapter`

-   __Uses__
    
    - `Phalcon\Db\Enum`
    - `Phalcon\Mvc\Model\Query\Builder`
    - `Phalcon\Paginator\Exception`
    - `Phalcon\Paginator\Exceptions\BuilderModelNotDefined`
    - `Phalcon\Paginator\Exceptions\InvalidBuilderInstance`
    - `Phalcon\Paginator\Exceptions\MissingColumnsForHaving`
    - `Phalcon\Paginator\Exceptions\MissingRequiredParameter`
    - `Phalcon\Paginator\RepositoryInterface`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

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


### Properties
```php
/**
 * Paginator's data
 *
 * @var Builder
 */
protected $builder;

/**
 * Columns for count query if builder has having or group by
 *
 * @var array|string
 */
protected $columns;

```

### Methods

```php
public function __construct( array $config );
```
Phalcon\Paginator\Adapter\QueryBuilder


```php
public function getCurrentPage(): int;
```
Get the current page number


```php
public function getQueryBuilder(): Builder;
```
Get query builder object


```php
public function paginate(): RepositoryInterface;
```
Returns a slice of the resultset to show in the pagination


```php
public function setQueryBuilder( Builder $builder ): static;
```
Set query builder object




## Paginator\Adapter\QueryBuilderCursor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Adapter/QueryBuilderCursor.zep)


-   __Namespace__

    - `Phalcon\Paginator\Adapter`

-   __Uses__
    
    - `Phalcon\Mvc\Model\Query\Builder`
    - `Phalcon\Paginator\Exception`
    - `Phalcon\Paginator\Exceptions\InvalidBuilderInstance`
    - `Phalcon\Paginator\Exceptions\InvalidCursorColumn`
    - `Phalcon\Paginator\Exceptions\MissingRequiredParameter`
    - `Phalcon\Paginator\RepositoryInterface`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

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


### Properties
```php
/**
 * Paginator's data
 *
 * @var Builder
 */
protected $builder;

/**
 * The cursor value for the current page (null = first page)
 *
 * @var mixed
 */
protected $cursor;

/**
 * The column used as the cursor (must be unique and indexed)
 *
 * @var string
 */
protected $cursorColumn;

```

### Methods

```php
public function __construct( array $config );
```
Phalcon\Paginator\Adapter\QueryBuilderCursor


```php
public function getCurrentPage(): int;
```
Get the current page number

Returns the cursor value used for this page cast to int, or 0 for the
first page. Use getCursor() to retrieve the raw cursor value.


```php
public function getCursor(): mixed;
```
Get the cursor value for the current page (null on first page)


```php
public function getCursorColumn(): string;
```
Get the cursor column name


```php
public function getQueryBuilder(): Builder;
```
Get query builder object


```php
public function paginate(): RepositoryInterface;
```
Returns a slice of the resultset to show in the pagination

Fetches `limit + 1` rows from the builder. If the extra row is present
a next page exists; it is discarded and the cursor value of the last
included row is stored in the `next` repository property.


```php
public function setCursor( mixed $cursor ): static;
```
Set the cursor value for the next paginate() call

Pass the value returned by Repository::getNext() to advance to the
next page, or null to restart from the first page.


```php
public function setQueryBuilder( Builder $builder ): static;
```
Set query builder object




## Paginator\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exception.zep)


-   __Namespace__

    - `Phalcon\Paginator`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Paginator\Exception

Exceptions thrown in Phalcon\Paginator will use this class



## Paginator\Exceptions\BuilderModelNotDefined 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/BuilderModelNotDefined.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

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





## Paginator\Exceptions\InvalidBuilderInstance 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/InvalidBuilderInstance.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

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





## Paginator\Exceptions\InvalidCursorColumn 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/InvalidCursorColumn.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

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





## Paginator\Exceptions\InvalidLimit 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/InvalidLimit.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

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





## Paginator\Exceptions\MissingColumnsForHaving 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/MissingColumnsForHaving.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

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





## Paginator\Exceptions\MissingRequiredParameter 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/MissingRequiredParameter.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Properties
```php
/**
 * @var string
 */
private $parameter;

```

### Methods

```php
public function __construct( string $parameter );
```



```php
public function getParameter(): string;
```





## Paginator\Exceptions\PaginatorDataNotArray 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Exceptions/PaginatorDataNotArray.zep)


-   __Namespace__

    - `Phalcon\Paginator\Exceptions`

-   __Uses__
    
    - `Phalcon\Paginator\Exception`

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





## Paginator\PaginatorFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/PaginatorFactory.zep)


-   __Namespace__

    - `Phalcon\Paginator`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Paginator\Adapter\AdapterInterface`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( array $services = [] );
```
AdapterFactory constructor.


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




## Paginator\Repository 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/Repository.zep)


-   __Namespace__

    - `Phalcon\Paginator`

-   __Uses__
    
    - `JsonSerializable`

-   __Extends__
    

-   __Implements__
    
    - `JsonSerializable`
    - `RepositoryInterface`

Phalcon\Paginator\Repository

Repository of current state Phalcon\Paginator\AdapterInterface::paginate()


### Properties
```php
/**
 * @var array
 */
protected $aliases;

/**
 * @var array
 */
protected $properties;

```

### Methods

```php
public function __get( string $property ): mixed | null;
```
{@inheritdoc}


```php
public function getAliases(): array;
```
{@inheritdoc}


```php
public function getCurrent(): int;
```
{@inheritdoc}


```php
public function getFirst(): int;
```
{@inheritdoc}


```php
public function getItems(): mixed;
```
{@inheritdoc}


```php
public function getLast(): int;
```
{@inheritdoc}


```php
public function getLimit(): int;
```
{@inheritdoc}


```php
public function getNext(): int;
```
{@inheritdoc}


```php
public function getPrevious(): int;
```
{@inheritdoc}


```php
public function getTotalItems(): int;
```
{@inheritdoc}


```php
public function jsonSerialize(): array;
```
See [jsonSerialize](https://php.net/manual/en/jsonserializable.jsonserialize.php)


```php
public function setAliases( array $aliases ): RepositoryInterface;
```
{@inheritdoc}


```php
public function setProperties( array $properties ): RepositoryInterface;
```
{@inheritdoc}


```php
protected function getProperty( string $property, mixed $defaultValue = null ): mixed;
```
Gets value of property by name


```php
protected function getRealNameProperty( string $property ): string;
```
Resolve alias property name




## Paginator\RepositoryInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Paginator/RepositoryInterface.zep)


-   __Namespace__

    - `Phalcon\Paginator`

-   __Uses__
    
    - `Phalcon\Contracts\Paginator\Repository`

-   __Extends__
    
    `RepositoryContract`

-   __Implements__
    

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Paginator\Repository} instead.

