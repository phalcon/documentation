# Annotations

- - -

## Overview

`Phalcon\Annotations` reads native PHP attributes from a class, its methods, properties and constants, and caches the parsed result. In Phalcon the annotations are standard [PHP attributes][php-attributes] (`#[...]`) read through reflection. There is no separate annotation language or parser to learn.

The component is used internally by two features, and can also read any attribute you define yourself:

- **Routing** - the `Phalcon\Annotations\Router\*` attributes (`#[Route]`, `#[Get]`, `#[Post]`, `#[RoutePrefix]`, ...) consumed by [Phalcon\Mvc\Router\Annotations][mvc-router-annotations]. See [Annotation-Based Routing](#annotation-based-routing).
- **Model metadata** - the `Phalcon\Annotations\Models\MetaData\*` attributes (`#[Source]`, `#[Column]`, `#[Primary]`, `#[Identity]`) consumed by the model metadata `Annotations` strategy. See [Attribute-Based Model Metadata](#attribute-based-model-metadata).

!!! info "NOTE"

    Attributes are a PHP language feature, so they require PHP 8.1 or above. Reading them relies on PHP's reflection API (`ReflectionAttribute`).

## The Annotations Service

[Phalcon\Annotations\Annotations][annotations] is the entry point. It parses a class once with reflection and caches the resulting [Phalcon\Annotations\Parser\Reflection][annotations-reflection] object. The constructor takes a storage adapter used as the cache backend:

```php
public function __construct(
    Phalcon\Storage\Adapter\AdapterInterface $adapter
)
```

If you use the [Phalcon\Di\FactoryDefault][di-factorydefault] container, the service is registered for you under the name `annotations`, backed by the in-memory [Memory](#adapters) adapter (parsed once per request). Any component that extends [Phalcon\Di\Injectable][di-injectable] can reach it through `$this->annotations`.

```php
<?php

use Phalcon\Di\FactoryDefault;

$container = new FactoryDefault();

// Pre-registered, backed by the Memory adapter
$annotations = $container->get('annotations');
```

To build it yourself, pass any [storage adapter](#adapters):

```php
<?php

use Phalcon\Annotations\Annotations;
use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Storage\SerializerFactory;

$annotations = new Annotations(
    new Memory(new SerializerFactory())
);
```

### Reading Methods

The service exposes the following methods. `get()` returns a [Reflection](#reflection); the `get*` accessors return a [Collection](#collection) or an array of collections keyed by member name.

```php
public function get(mixed $className): Reflection
```

Parses (or returns the cached) reflection for a class. Accepts a class-string or an object.

```php
public function getMethod(string $className, string $methodName): Collection
```

Returns the attributes declared on a method. The method name is matched case-insensitively. Returns an empty `Collection` if the method has no attributes.

```php
public function getMethods(string $className): array
```

Returns a `Collection` per method that has attributes, keyed by method name.

```php
public function getProperty(string $className, string $propertyName): Collection
```

Returns the attributes declared on a property. Returns an empty `Collection` if the property has none.

```php
public function getProperties(string $className): array
```

Returns a `Collection` per property that has attributes, keyed by property name.

```php
public function getConstant(string $className, string $constantName): Collection
```

Returns the attributes declared on a class constant. Returns an empty `Collection` if the constant has none.

```php
public function getConstants(string $className): array
```

Returns a `Collection` per constant that has attributes, keyed by constant name.

```php
public function getReader(): ReaderInterface
public function setReader(ReaderInterface $reader): void
```

Get or replace the reader used to parse a class. The default is [Phalcon\Annotations\Parser\Reader][annotations-reader], which reads through `ReflectionClass`.

```php
public function read(string $key): Reflection | bool
public function write(string $key, Reflection $data): bool
```

Low-level access to the cache backend. Cache keys are prefixed with `_PHATN` and lower-cased before they reach the adapter. You rarely call these directly.

### Reflection

[Phalcon\Annotations\Parser\Reflection][annotations-reflection] wraps the parsed data for a single class:

```php
public function getClassAnnotations(): Collection | null
public function getConstantsAnnotations(): array   // Collection[] keyed by constant
public function getMethodsAnnotations(): array      // Collection[] keyed by method
public function getPropertiesAnnotations(): array   // Collection[] keyed by property
public function getReflectionData(): array
```

### Collection

[Phalcon\Annotations\Parser\Collection][annotations-collection] is an iterable group of attributes. It implements `IteratorAggregate`, so you can `foreach` over it directly.

```php
public function get(string $name): Annotation      // first match; throws if absent
public function getAll(string $name): array         // every match by name
public function has(string $name): bool
public function getAnnotations(): Traversable
public function getIterator(): Traversable
```

`get()` throws a [Phalcon\Annotations\Parser\Exception][annotations-exception] when the named attribute is not present, so guard it with `has()` (or catch the exception).

### Annotation

[Phalcon\Annotations\Parser\Annotation][annotations-annotation] represents one attribute usage.

```php
public function getName(): string                          // short class name, e.g. "Route"
public function getCleanName(): string
public function getArguments(): array
public function getArgument(int | string $position): mixed
public function getNamedArgument(string $name): mixed
public function getNamedParameter(string $name): mixed     // alias of getNamedArgument()
public function hasArgument(int | string $position): bool
public function numberArguments(): int
```

!!! info "NOTE"

    `getName()` returns the attribute's short class name (`Route`, `Column`, ...), not its fully-qualified name. The arguments are the raw values as written in the attribute - positional arguments keyed by integer (`0`, `1`, ...) and named arguments keyed by the name written. They are **not** validated against the attribute class constructor, so a named argument is readable even if the attribute class does not declare a matching parameter.

### Reading Attributes Directly

Any attribute, including your own, can be read through the service. The example below defines a custom class-level attribute and reads it back:

```php
<?php

use Attribute;
use Phalcon\Annotations\Annotations;
use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Storage\SerializerFactory;

#[Attribute(Attribute::TARGET_CLASS)]
class Cacheable
{
    public function __construct(
        public int $lifetime = 3600
    ) {
    }
}

#[Cacheable(lifetime: 86400)]
class Invoices
{
}

$annotations = new Annotations(new Memory(new SerializerFactory()));

$reflection = $annotations->get(Invoices::class);
$class      = $reflection->getClassAnnotations();

if (null !== $class && $class->has('Cacheable')) {
    $annotation = $class->get('Cacheable');

    echo $annotation->getName();                       // "Cacheable"
    echo $annotation->getNamedParameter('lifetime');   // 86400
}
```

Iterating over the attributes of every property:

```php
<?php

$reflection = $annotations->get(Invoices::class);

foreach ($reflection->getPropertiesAnnotations() as $property => $collection) {
    foreach ($collection as $annotation) {
        echo $property, ' => ', $annotation->getName(), PHP_EOL;
    }
}
```

## Adapters

The service caches parsed reflections through a storage adapter so a class is only reflected once. Every adapter under `Phalcon\Annotations\Adapter` extends the matching [Phalcon\Storage][storage] adapter and is constructed like one - with a `Phalcon\Storage\SerializerFactory` and an options array.

| Adapter                                                                     | Backing store             | Suitable for                                             |
|-----------------------------------------------------------------------------|---------------------------|----------------------------------------------------------|
| [Phalcon\Annotations\Adapter\Memory][annotations-adapter-memory]            | Process memory            | Development (rebuilt on every request)                   |
| [Phalcon\Annotations\Adapter\Stream][annotations-adapter-stream]            | File system               | Production (increases I/O; pair with an opcode cache)    |
| [Phalcon\Annotations\Adapter\Apcu][annotations-adapter-apcu]                | APCu                      | Production                                               |
| [Phalcon\Annotations\Adapter\Redis][annotations-adapter-redis]              | Redis                     | Production, shared across processes                      |
| [Phalcon\Annotations\Adapter\Libmemcached][annotations-adapter-libmemcached]| Memcached                 | Production, shared across processes                      |
| [Phalcon\Annotations\Adapter\Weak][annotations-adapter-weak]                | Weak references           | Long-running processes                                   |

```php
<?php

use Phalcon\Annotations\Adapter\Stream;
use Phalcon\Storage\SerializerFactory;

$adapter = new Stream(
    new SerializerFactory(),
    [
        'storageDir' => '/app/storage/cache/annotations',
    ]
);
```

!!! danger "Keep the cache directory outside the document root"

    The adapter writes one file per class, named after the class, containing the serialized annotation data. The files have a `.php` extension but no PHP opening tag, so a web server that can reach the directory returns their content verbatim. Point `storageDir` to a directory outside the document root (for example `/app/storage/cache/annotations`), never to `./` or a public path, and do not make it writable by other users.

The default `annotations` service uses the `Memory` adapter, which is rebuilt on every request. This reflects source changes immediately while you develop. For production, register the service against a persistent adapter so classes are reflected only once.

```php
<?php

use Phalcon\Annotations\Annotations;
use Phalcon\Annotations\Adapter\Stream;
use Phalcon\Storage\SerializerFactory;

$container->setShared(
    'annotations',
    function () {
        return new Annotations(
            new Stream(
                new SerializerFactory(),
                [
                    'storageDir' => '/app/storage/cache/annotations',
                ]
            )
        );
    }
);
```

### AdapterFactory

[Phalcon\Annotations\AdapterFactory][annotations-adapterfactory] builds an adapter by name. The registered names are `apcu`, `libmemcached`, `memory`, `redis`, `stream`, and `weak`.

```php
<?php

use Phalcon\Annotations\AdapterFactory;
use Phalcon\Storage\SerializerFactory;

$factory = new AdapterFactory(new SerializerFactory());

$adapter = $factory->newInstance(
    'stream',
    [
        'storageDir' => '/app/storage/cache/annotations',
    ]
);
```

### Custom

Implement [Phalcon\Annotations\Adapter\AdapterInterface][annotations-adapter-adapterinterface] - which extends `Phalcon\Storage\Adapter\AdapterInterface` - to create your own cache backend.

## Annotation-Based Routing

[Phalcon\Mvc\Router\Annotations][mvc-router-annotations] extends [Phalcon\Mvc\Router][mvc-router] and registers routes by reading routing attributes from your controllers. It reads the class-level `#[RoutePrefix]` attribute and the method-level route attributes.

### Routing Attributes

All routing attributes live in `Phalcon\Annotations\Router`.

| Attribute        | Target  | Effect                                                     |
|------------------|---------|------------------------------------------------------------|
| `#[RoutePrefix]`  | Class   | Prefix prepended to every route in the controller          |
| `#[Route]`        | Method  | Register a route for one or more HTTP methods              |
| `#[Get]`          | Method  | Register a route constrained to `GET`                     |
| `#[Post]`         | Method  | Register a route constrained to `POST`                    |
| `#[Put]`          | Method  | Register a route constrained to `PUT`                     |
| `#[Patch]`        | Method  | Register a route constrained to `PATCH`                   |
| `#[Delete]`       | Method  | Register a route constrained to `DELETE`                  |
| `#[Head]`         | Method  | Register a route constrained to `HEAD`                    |
| `#[Options]`      | Method  | Register a route constrained to `OPTIONS`                 |
| `#[Connect]`      | Method  | Register a route constrained to `CONNECT`                 |
| `#[Purge]`        | Method  | Register a route constrained to `PURGE`                   |
| `#[Trace]`        | Method  | Register a route constrained to `TRACE`                   |

**`#[RoutePrefix]`** takes a single `prefix` argument:

```php
#[RoutePrefix('/invoices')]
```

**`#[Route]`** is the general form. Its constructor is:

```php
public function __construct(
    string $route,
    string | array $methods = [/* all HTTP methods */],
    string | null $name = null,
    array $paths = [],
    array $converters = []
)
```

| Argument     | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `route`      | The URL pattern (the first, positional argument). Prefixed by `#[RoutePrefix]` if present.               |
| `methods`    | HTTP method or list of methods the route accepts. When omitted, the route matches any method.            |
| `name`       | Route name, so it can be retrieved with `Router::getRouteByName()` and used to build URLs.               |
| `paths`      | Extra paths merged into the route (for example `['module' => 'admin']`).                                  |
| `converters` | Map of parameter name to a callable that converts the matched value before dispatch.                     |

The method shortcuts (`#[Get]`, `#[Post]`, ...) accept the same arguments and force the HTTP method regardless of any `methods` argument.

!!! info "NOTE"

    The router reads the attribute arguments through reflection rather than instantiating the attribute. Two extra keys are recognized beyond the constructor parameters above: `beforeMatch` (a callable applied as the route's `beforeMatch` guard) and `converts` (accepted as an alias for `converters`).

### Registering Controllers

Create the router with `false` to skip the default catch-all routes, then register each annotated controller as a *resource*:

```php
<?php

use Phalcon\Mvc\Router\Annotations;

$container->setShared(
    'router',
    function () {
        $router = new Annotations(false);

        // Read annotations from InvoicesController when the URI starts with /invoices
        $router->addResource('Invoices', '/invoices');

        return $router;
    }
);
```

`addResource()` takes the controller name **without** the class suffix (`Invoices`, not `InvoicesController`); the suffix is appended internally. Pass a fully-qualified name (`MyApp\Controllers\Invoices`) to target a namespaced controller. For multi-module applications use `addModuleResource()`:

```php
$router->addModuleResource('admin', 'Invoices', '/invoices');
```

| Method                                    | Description                                                          |
|-------------------------------------------|----------------------------------------------------------------------|
| `addResource(string $handler, ?string $prefix = null)`             | Register a controller as a routing resource        |
| `addModuleResource(string $module, string $handler, ?string $prefix = null)` | Register a controller resource in a module |
| `getResources(): array`                   | Return the registered resources                                     |
| `setControllerSuffix(string $suffix)`     | Change the controller class suffix (default `Controller`)           |
| `setActionSuffix(string $suffix)`         | Change the action method suffix (default `Action`)                  |
| `setActionPreformatCallback(callable\|string\|null $callback)`     | Transform the action name before it becomes the route path |

The `prefix` passed to `addResource()`/`addModuleResource()` restricts scanning: the controller's annotations are only read when the request URI matches that prefix. It is independent of the `#[RoutePrefix]` attribute, which prepends to each generated pattern.

### Controller Example

```php
<?php

namespace MyApp\Controllers;

use Phalcon\Annotations\Router\Delete;
use Phalcon\Annotations\Router\Get;
use Phalcon\Annotations\Router\Route;
use Phalcon\Annotations\Router\RoutePrefix;
use Phalcon\Mvc\Controller;

#[RoutePrefix('/invoices')]
class InvoicesController extends Controller
{
    // GET /invoices/
    #[Get('/')]
    public function indexAction()
    {
    }

    // GET /invoices/view/{id}
    #[Get('/view/{id:[0-9]+}', name: 'invoices-view')]
    public function viewAction(int $id)
    {
    }

    // POST or PUT /invoices/save
    #[Route('/save', methods: ['POST', 'PUT'], name: 'invoices-save')]
    public function saveAction()
    {
    }

    // DELETE /invoices/delete/{id} with a parameter converter
    #[Delete(
        '/delete/{id:[0-9]+}',
        converters: ['id' => 'MyApp\Converters::toInt']
    )]
    public function deleteAction(int $id)
    {
    }
}
```

The action name (with the action suffix removed and lower-cased) is used as the `action` path. When a route pattern is not supplied, the action name becomes the route path, prefixed by `#[RoutePrefix]`.

## Attribute-Based Model Metadata

Instead of reading table metadata from the database, a model can declare its metadata with attributes and have it read by the `Annotations` metadata strategy. This removes the need for the metadata component to introspect the database.

### Model Attributes

The model attributes live in `Phalcon\Annotations\Models\MetaData`.

| Attribute      | Target    | Description                                                    |
|----------------|-----------|---------------------------------------------------------------|
| `#[Source]`     | Class     | The table the model maps to                                   |
| `#[Column]`     | Property  | Marks a property as a mapped column and describes it          |
| `#[Primary]`    | Property  | Marks the column as part of the primary key                   |
| `#[Identity]`   | Property  | Marks the column as the auto-increment identity column        |

**`#[Source]`** takes the table name:

```php
#[Source('co_invoices')]
```

**`#[Column]`** describes a mapped column. Its constructor is:

```php
public function __construct(
    string | null $column = null,
    string $type = 'string',
    int | null $length = null,
    bool $nullable = false,
    bool $skipOnInsert = false,
    bool $skipOnUpdate = false,
    bool $allowEmptyString = false,
    mixed $default = null,
)
```

| Argument     | Description                                                                                          |
|--------------|------------------------------------------------------------------------------------------------------|
| `column`     | Database column name. Defaults to the property name when omitted.                                    |
| `type`       | Column type keyword (see below). Defaults to `string` (rendered as `VARCHAR`).                       |
| `nullable`   | Whether the column accepts `null`. Non-nullable columns are added to the not-null list.              |
| `default`    | Default value used when the column is skipped or nullable.                                           |
| `skipOnInsert` | Omit the column from generated `INSERT` statements.                 |
| `skipOnUpdate` | Omit the column from generated `UPDATE` statements.                 |
| `allowEmptyString` | Allow empty strings for the column during validation.           |

The `type` keyword maps to a `Phalcon\Db\Column` type. Recognized keywords: `biginteger`, `bit`, `blob`, `boolean`, `char`, `date`, `datetime`, `decimal`, `double`, `enum`, `float`, `integer`, `json`, `jsonb`, `longblob`, `longtext`, `mediumblob`, `mediumint`, `mediumtext`, `smallint`, `text`, `time`, `timestamp`, `tinyblob`, `tinyint`, `tinytext`. Any other value is treated as `VARCHAR`. The numeric keywords (`biginteger`, `bit`, `decimal`, `double`, `enum`, `float`, `integer`, `mediumint`, `smallint`, `tinyint`) also flag the column as numeric.

**`#[Primary]`** and **`#[Identity]`** take no arguments:

```php
#[Primary]
#[Identity]
```

!!! info "NOTE"

    Pass `#[Column]` arguments as named arguments. The metadata strategy reads them by name, so positional values are not seen. The `length` argument is accepted by the attribute but is not consumed by the metadata strategy.

### Enabling the Strategy

Assign the `Annotations` strategy to your metadata adapter and register it as the `modelsMetadata` service. The strategy reads through the `annotations` service, so both must be present in the container.

```php
<?php

use Phalcon\Mvc\Model\MetaData\Memory as MetaData;
use Phalcon\Mvc\Model\MetaData\Strategy\Annotations as AnnotationsStrategy;

$container->setShared(
    'modelsMetadata',
    function () {
        $metaData = new MetaData();

        $metaData->setStrategy(
            new AnnotationsStrategy()
        );

        return $metaData;
    }
);
```

### Model Example

```php
<?php

namespace MyApp\Models;

use Phalcon\Annotations\Models\MetaData\Column;
use Phalcon\Annotations\Models\MetaData\Identity;
use Phalcon\Annotations\Models\MetaData\Primary;
use Phalcon\Annotations\Models\MetaData\Source;
use Phalcon\Mvc\Model;

#[Source('co_invoices')]
class Invoices extends Model
{
    #[Primary]
    #[Identity]
    #[Column(column: 'inv_id', type: 'integer', nullable: false)]
    public int $id;

    #[Column(column: 'inv_cst_id', type: 'integer', nullable: false)]
    public int $customerId;

    #[Column(column: 'inv_title', type: 'string', nullable: false)]
    public string $title;

    #[Column(column: 'inv_total', type: 'double', nullable: false, default: 0)]
    public float $total;

    #[Column(column: 'inv_created_at', type: 'datetime', skipOnUpdate: true)]
    public string $createdAt;
}
```

See the [Models Metadata][db-models-metadata] document for the metadata component itself.

## Exceptions

Exceptions thrown by the annotations component are of type [Phalcon\Annotations\Parser\Exception][annotations-exception]. The most common cause is requesting a named attribute from a `Collection` that does not contain it.

```php
<?php

use Phalcon\Annotations\Annotations;
use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Annotations\Parser\Exception;
use Phalcon\Storage\SerializerFactory;

$annotations = new Annotations(new Memory(new SerializerFactory()));

try {
    $class = $annotations->get(Invoices::class)->getClassAnnotations();

    // Throws if the "Cacheable" attribute is not present
    $annotation = $class->get('Cacheable');
} catch (Exception $ex) {
    echo $ex->getMessage();
}
```

Guard `Collection::get()` with `Collection::has()` to avoid the exception:

```php
if (null !== $class && $class->has('Cacheable')) {
    $annotation = $class->get('Cacheable');
}
```

[annotations]: api/phalcon_annotations.md#annotationsannotations
[annotations-adapterfactory]: api/phalcon_annotations.md#annotationsadapterfactory
[annotations-adapter-adapterinterface]: api/phalcon_annotations.md#annotationsadapteradapterinterface
[annotations-adapter-apcu]: api/phalcon_annotations.md#annotationsadapterapcu
[annotations-adapter-libmemcached]: api/phalcon_annotations.md#annotationsadapterlibmemcached
[annotations-adapter-memory]: api/phalcon_annotations.md#annotationsadaptermemory
[annotations-adapter-redis]: api/phalcon_annotations.md#annotationsadapterredis
[annotations-adapter-stream]: api/phalcon_annotations.md#annotationsadapterstream
[annotations-adapter-weak]: api/phalcon_annotations.md#annotationsadapterweak
[annotations-annotation]: api/phalcon_annotations.md#annotationsparserannotation
[annotations-collection]: api/phalcon_annotations.md#annotationsparsercollection
[annotations-exception]: api/phalcon_annotations.md#annotationsparserexception
[annotations-reader]: api/phalcon_annotations.md#annotationsparserreader
[annotations-reflection]: api/phalcon_annotations.md#annotationsparserreflection
[db-models-metadata]: db-models-metadata.md
[di-factorydefault]: api/phalcon_di.md#difactorydefault
[di-injectable]: api/phalcon_di.md#diinjectable
[mvc-router]: api/phalcon_mvc.md#mvcrouter
[mvc-router-annotations]: api/phalcon_mvc.md#mvcrouterannotations
[php-attributes]: https://www.php.net/manual/en/language.attributes.php
[storage]: storage.md
