# Annotations

- - -

!!! warning "Changed in v6"

    The annotations component has been rewritten. In v5 and earlier, annotations were read from class, method, and property **docblocks** (for example `@Column(type="integer")`) by a dedicated parser written in C. In v6 the component reads native [PHP 8 attributes][php-attributes] (`#[Column(type: 'integer')]`) through the Reflection API. Docblock annotations are no longer supported. Any code or template that relied on the docblock syntax must be migrated to attributes.

## Overview

The `Phalcon\Annotations` namespace reads [PHP 8 attributes][php-attributes] from classes, methods, properties, and
class constants. It returns them as objects you can inspect at runtime.

Despite the historical name, the component does not parse anything. There is no lexer and no grammar. `Phalcon\Annotations\Parser\Reader` calls `ReflectionClass::getAttributes()` and wraps each `ReflectionAttribute` in a
`Phalcon\Annotations\Parser\Annotation` object. It is an attributes reader.

The component is used internally by two framework features:

- The model metadata strategy reads model-mapping attributes (`Column`, `Primary`, `Identity`).
- The annotations router reads routing attributes (`Route`, `RoutePrefix`, and the HTTP verb attributes).

You can also read your own attributes with the same API.

## Reading Attributes

`Phalcon\Annotations\Annotations` is the entry point. Its constructor requires a cache adapter that implements
`Phalcon\Annotations\Adapter\AdapterInterface`. The adapter stores the reflected results so a class is only reflected
once.

```php
<?php

use MyApp\Models\Invoices;
use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Annotations\Annotations;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();
$adapter           = new Memory($serializerFactory);

$annotations = new Annotations($adapter);

$reflection = $annotations->get(Invoices::class);
```

`get()` accepts a class name or an object and returns a `Phalcon\Annotations\Parser\Reflection`. From the reflection
you read the attributes grouped by location:

```php
$classAttributes      = $reflection->getClassAnnotations();      // Collection | null
$methodAttributes     = $reflection->getMethodsAnnotations();    // array of Collection, keyed by method
$propertyAttributes   = $reflection->getPropertiesAnnotations(); // array of Collection, keyed by property
$constantAttributes   = $reflection->getConstantsAnnotations();  // array of Collection, keyed by constant
```

For a single method, property, or constant, the component offers direct accessors that return a
`Phalcon\Annotations\Parser\Collection`:

```php
$methodAttributes   = $annotations->getMethod(Invoices::class, 'viewAction');
$propertyAttributes = $annotations->getProperty(Invoices::class, 'id');
$constantAttributes = $annotations->getConstant(Invoices::class, 'STATUS_PAID');
```

### Collection

A `Collection` holds the attributes found at one location. Attribute names are stored as the **short class name**, so
`#[Phalcon\Annotations\Models\MetaData\Column]` is looked up as `Column`.

```php
$propertyAttributes = $annotations->getProperty(Invoices::class, 'id');

if ($propertyAttributes->has('Column')) {
    $column = $propertyAttributes->get('Column'); // Annotation

    echo $column->getNamedArgument('type');
}

foreach ($propertyAttributes as $attribute) {
    echo $attribute->getName();
}
```

`get()` throws a `Phalcon\Annotations\Parser\Exception` when the requested name is not present. Call `has()` first, or
use `getAll()` to retrieve every attribute of a given name.

### Annotation

Each entry in a collection is a `Phalcon\Annotations\Parser\Annotation`. It exposes the attribute name and the
arguments it was constructed with.

| Method                       | Returns                                                |
|------------------------------|--------------------------------------------------------|
| `getName()`                  | The short attribute name (for example `Column`)        |
| `getArguments()`             | All arguments as an array                              |
| `getArgument($position)`     | A single argument by integer position or string name  |
| `getNamedArgument($name)`    | A single argument by name                              |
| `hasArgument($position)`     | Whether an argument exists at that position or name    |
| `numberArguments()`          | The number of arguments                                |

```php
$methodAttributes = $annotations->getMethod(Invoices::class, 'viewAction');
$route            = $methodAttributes->get('Get');

echo $route->getArgument(0);            // the route pattern, passed positionally
echo $route->getNamedArgument('name');  // the route name, passed by name
```

Positional arguments are keyed by integer (`getArgument(0)`); named arguments are keyed by name
(`getNamedArgument('name')`). This mirrors how the attribute was written in the source.

## Defining Attributes

An attribute is a plain PHP class marked with the `#[Attribute]` attribute. Declare the targets it applies to, and
declare its arguments as constructor parameters.

```php
<?php

namespace MyApp\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class Cacheable
{
    public function __construct(
        public int $lifetime = 3600
    ) {
    }
}
```

Apply it, then read it back with the component:

```php
<?php

namespace MyApp\Controllers;

use MyApp\Attributes\Cacheable;
use Phalcon\Mvc\Controller;

class ReportsController extends Controller
{
    #[Cacheable(lifetime: 86400)]
    public function yearlyAction(): void
    {
    }
}
```

```php
$attributes = $annotations->getMethod(ReportsController::class, 'yearlyAction');

if ($attributes->has('Cacheable')) {
    $lifetime = $attributes->get('Cacheable')->getNamedArgument('lifetime');
}
```

## Model Metadata Attributes

Phalcon ships attributes that describe how a model maps to a database table. They live in the
`Phalcon\Annotations\Models\MetaData` namespace.

| Attribute   | Target    | Arguments                                                                                              |
|-------------|-----------|--------------------------------------------------------------------------------------------------------|
| `Column`    | property  | `column`, `type`, `length`, `nullable`, `skipOnInsert`, `skipOnUpdate`, `allowEmptyString`, `default`  |
| `Primary`   | property  | none                                                                                                   |
| `Identity`  | property  | none                                                                                                   |

The model metadata strategy reads `Column`, `Primary`, and `Identity` to build the table column map. The model's table
name is set with the `getSource()` method, shown below.

```php
<?php

namespace MyApp\Models;

use Phalcon\Annotations\Models\MetaData\Column;
use Phalcon\Annotations\Models\MetaData\Identity;
use Phalcon\Annotations\Models\MetaData\Primary;
use Phalcon\Mvc\Model;

class Invoices extends Model
{
    #[Primary]
    #[Identity]
    #[Column(column: 'inv_id', type: 'integer', nullable: false)]
    public int $id;

    #[Column(column: 'inv_title', type: 'string', nullable: false)]
    public string $title;

    #[Column(column: 'inv_total', type: 'decimal', nullable: false)]
    public float $total;

    public function getSource(): string
    {
        return 'co_invoices';
    }
}
```

The `column` argument sets the database column name. The `type` argument maps to a `Phalcon\Db\Column` type. To make a
model use these attributes, configure its metadata component with the annotations strategy. See
[Models Metadata][db-models] for details.

## Routing Attributes

Phalcon ships attributes that declare routes on a controller. They live in the `Phalcon\Annotations\Router` namespace
and are read by `Phalcon\Mvc\Router\Annotations`.

| Attribute      | Target  | Description                                                          |
|----------------|---------|---------------------------------------------------------------------|
| `RoutePrefix`  | class   | Prefixes every route in the controller. Argument: `prefix`          |
| `Route`        | method  | Declares a route. Arguments: `route`, `methods`, `name`, `paths`, `converters` |
| `Get`          | method  | A `Route` restricted to the `GET` method                            |
| `Post`         | method  | A `Route` restricted to the `POST` method                           |
| `Put`          | method  | A `Route` restricted to the `PUT` method                            |
| `Patch`        | method  | A `Route` restricted to the `PATCH` method                          |
| `Delete`       | method  | A `Route` restricted to the `DELETE` method                         |
| `Head`         | method  | A `Route` restricted to the `HEAD` method                           |
| `Options`      | method  | A `Route` restricted to the `OPTIONS` method                        |
| `Connect`      | method  | A `Route` restricted to the `CONNECT` method                        |
| `Purge`        | method  | A `Route` restricted to the `PURGE` method                          |
| `Trace`        | method  | A `Route` restricted to the `TRACE` method                          |

The verb attributes are thin subclasses of `Route` that preset the HTTP method. Use `Route` directly when a route
answers more than one method.

```php
<?php

namespace MyApp\Controllers;

use Phalcon\Annotations\Router\Get;
use Phalcon\Annotations\Router\Post;
use Phalcon\Annotations\Router\RoutePrefix;
use Phalcon\Mvc\Controller;

#[RoutePrefix('/invoices')]
class InvoicesController extends Controller
{
    #[Get('/')]
    public function indexAction(): void
    {
    }

    #[Get('/view/{id:[0-9]+}', name: 'invoices-view')]
    public function viewAction(int $id): void
    {
    }

    #[Post('/')]
    public function createAction(): void
    {
    }
}
```

For registering the controllers with the annotations router, see [Routing][routing].

## Adapters

The adapter passed to `Phalcon\Annotations\Annotations` caches the reflected attributes. The following adapters are
available in the `Phalcon\Annotations\Adapter` namespace. Each extends the matching `Phalcon\Storage\Adapter` class, so
its constructor accepts a `Phalcon\Storage\SerializerFactory` and an options array.

| Adapter        | Description                                                  |
|----------------|-------------------------------------------------------------|
| `Apcu`         | Stores the cache in APCu. Suitable for production.          |
| `Libmemcached` | Stores the cache in Memcached.                              |
| `Memory`       | Stores the cache in memory. Rebuilt per request. Suitable for development. |
| `Redis`        | Stores the cache in Redis.                                  |
| `Stream`       | Stores the cache in files on disk.                          |
| `Weak`         | Stores the cache using weak references.                     |

Construct an adapter directly:

```php
<?php

use Phalcon\Annotations\Adapter\Stream;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();

$adapter = new Stream(
    $serializerFactory,
    [
        'storageDir' => '/app/storage/cache/annotations',
    ]
);
```

Or create one through `Phalcon\Annotations\AdapterFactory`, which resolves the adapter by name:

```php
<?php

use Phalcon\Annotations\AdapterFactory;
use Phalcon\Annotations\Annotations;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();
$adapterFactory    = new AdapterFactory($serializerFactory);

$adapter     = $adapterFactory->newInstance('apcu', ['lifetime' => 86400]);
$annotations = new Annotations($adapter);
```

The factory accepts the names `apcu`, `libmemcached`, `memory`, `redis`, `stream`, and `weak`.

When you register the component in the DI container under the name `annotations`, both the model metadata strategy and
the annotations router resolve it from there.

```php
<?php

use Phalcon\Annotations\Adapter\Apcu;
use Phalcon\Annotations\Annotations;
use Phalcon\Di\FactoryDefault;
use Phalcon\Storage\SerializerFactory;

$container = new FactoryDefault();

$container->set(
    'annotations',
    function () {
        $serializerFactory = new SerializerFactory();
        $adapter           = new Apcu($serializerFactory, ['lifetime' => 86400]);

        return new Annotations($adapter);
    }
);
```

## Exceptions

Exceptions thrown by this component are of type `Phalcon\Annotations\Parser\Exception`, which extends the SPL
`\Exception`. The most common case is calling `Collection::get()` with a name that does not exist.

```php
<?php

use MyApp\Models\Invoices;
use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Annotations\Annotations;
use Phalcon\Annotations\Parser\Exception;
use Phalcon\Storage\SerializerFactory;

$serializerFactory = new SerializerFactory();
$annotations       = new Annotations(new Memory($serializerFactory));

try {
    $attributes = $annotations->getProperty(Invoices::class, 'id');
    $column     = $attributes->get('Column');
} catch (Exception $ex) {
    echo $ex->getMessage();
}
```

[php-attributes]: https://www.php.net/manual/en/language.attributes.php

[db-models]: db-models.md

[routing]: routing.md
