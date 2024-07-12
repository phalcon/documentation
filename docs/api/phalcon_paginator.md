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
    
    - `Phalcon\Paginator\RepositoryInterface`

-   __Extends__
    

-   __Implements__
    

Phalcon\Paginator\AdapterInterface

Interface for Phalcon\Paginator adapters


### Methods

```php
public function getLimit(): int;
```
Get current rows limit


```php
public function paginate(): RepositoryInterface;
```
Returns a slice of the resultset to show in the pagination


```php
public function setCurrentPage( int $page );
```
Set the current page number


```php
public function setLimit( int $limit );
```
Set current rows limit




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
 * Columns for count query if builder has having
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
public function setQueryBuilder( Builder $builder ): QueryBuilder;
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
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Paginator\RepositoryInterface

Interface for the repository of current state
Phalcon\Paginator\AdapterInterface::paginate()


### Constants
```php
const PROPERTY_CURRENT_PAGE = current;
const PROPERTY_FIRST_PAGE = first;
const PROPERTY_ITEMS = items;
const PROPERTY_LAST_PAGE = last;
const PROPERTY_LIMIT = limit;
const PROPERTY_NEXT_PAGE = next;
const PROPERTY_PREVIOUS_PAGE = previous;
const PROPERTY_TOTAL_ITEMS = total_items;
```

### Methods

```php
public function getAliases(): array;
```
Gets the aliases for properties repository


```php
public function getCurrent(): int;
```
Gets number of the current page


```php
public function getFirst(): int;
```
Gets number of the first page


```php
public function getItems(): mixed;
```
Gets the items on the current page


```php
public function getLast(): int;
```
Gets number of the last page


```php
public function getLimit(): int;
```
Gets current rows limit


```php
public function getNext(): int;
```
Gets number of the next page


```php
public function getPrevious(): int;
```
Gets number of the previous page


```php
public function getTotalItems(): int;
```
Gets the total number of items


```php
public function setAliases( array $aliases ): RepositoryInterface;
```
Sets the aliases for properties repository


```php
public function setProperties( array $properties ): RepositoryInterface;
```
Sets values for properties of the repository


