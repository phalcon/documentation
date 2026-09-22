---
title: "Annotations"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Annotations

## Overview

Phalcon has introduced the first annotations parser component written in C for PHP. The `Phalcon\Annotations` namespace encompasses general-purpose components that provide a way to parse and cache annotations in PHP applications.

## Usage

Annotations are extracted from docblocks in classes, methods, and properties. An annotation can be placed at any position in the docblock:

```php
<?php

/**
 * This is the class description
 *
 * @AmazingClass(true)
 */
class Example
{
/**
 * This is a property with a special feature
 *
 * @SpecialFeature
 */
protected $someProperty;

/**
 * This is a method
 *
 * @SpecialFeature
 */
public function someMethod()
{
    // ...
}
}
```

An annotation has the following syntax:

```php
/**
 * @Annotation-Name
 * @Annotation-Name(param1, param2, ...)
 */
```

Additionally, an annotation can be placed at any part of a docblock:

```php
<?php

/**
 * This is a property with a special feature
 *
 * @SpecialFeature
 *
 * More comments
 *
 * @AnotherSpecialFeature(true)
 */
```

While the parser is highly flexible, it is recommended for code maintainability and understanding to place annotations at the end of the docblock:

```php
<?php

/**
 * This is a property with a special feature
 * More comments
 *
 * @SpecialFeature({someParameter='the value', false})
 * @AnotherSpecialFeature(true)
```

An example for a model is:

```php
<?php

use Phalcon\Mvc\Model;

/**
 * Customers
 *
 * Represents a customer record
 *
 * @Source('co_customers');
 * @HasMany("cst_id", "Invoices", "inv_cst_id")
 */
class Customers extends Model
{
/**
 * @Primary
 * @Identity
 * @Column(type="integer", nullable=false, column="cst_id")
 */
public $id;

/**
 * @Column(type="string", nullable=false, column="cst_name_first")
 */
public $nameFirst;

/**
 * @Column(type="string", nullable=false, column="cst_name_last")
 */
public $nameLast;
}
```

## Types

Annotations may or may not have parameters. A parameter could be a simple literal (`strings`, `number`, `boolean`, `null`), an `array`, a hashed list, or another annotation:

```php
/**
 * @SomeAnnotation
 */
```

Simple Annotation

```php
/**
 * @SomeAnnotation('hello', 'world', 1, 2, 3, false, true)
 */
```

Annotation with parameters

```php
/**
 * @SomeAnnotation(first='hello', second='world', third=1)
 * @SomeAnnotation(first: 'hello', second: 'world', third: 1)
 */
```

Annotation with named parameters

```php
/**
 * @SomeAnnotation([1, 2, 3, 4])
 * @SomeAnnotation({1, 2, 3, 4})
 */
```

Passing an array

```php
/**
 * @SomeAnnotation({first=1, second=2, third=3})
 * @SomeAnnotation({'first'=1, 'second'=2, 'third'=3})
 * @SomeAnnotation({'first': 1, 'second': 2, 'third': 3})
 * @SomeAnnotation(['first': 1, 'second': 2, 'third': 3])
 */
```

Passing a hash as a parameter

```php
/**
 * @SomeAnnotation({'name'='SomeName', 'other'={
 *     'foo1': 'bar1', 'foo2': 'bar2', {1, 2, 3},
 * }})
 */
```

Nested arrays/hashes

```php
/**
 * @SomeAnnotation(first=@AnotherAnnotation(1, 2, 3))
 */
```

Nested Annotations

## Readers

A reader finds the annotations of a class and returns them as an array. The component has two readers, and both give the same array, so the adapter, [Phalcon\Annotations\Reflection][annotations-reflection], [Phalcon\Annotations\Collection][annotations-collection] and [Phalcon\Annotations\Annotation][annotations-annotation] do not know which one made it.

| Reader                                                                     | Reads                             | Available          |
|----------------------------------------------------------------------------|-----------------------------------|--------------------|
| [Phalcon\Annotations\Reader][annotations-reader]                           | docblocks, with the syntax above  | all versions       |
| [Phalcon\Annotations\AttributesReader][annotations-attributesreader]       | PHP attributes, through Reflection | 5.22 and later     |

Both readers implement [Phalcon\Annotations\ReaderInterface][annotations-readerinterface], which declares one method, `parse()`. A reader of your own implements the same interface.

Both readers work on every PHP version that Phalcon supports, because PHP attributes exist from PHP 8.0 and the minimum version of Phalcon 5 is PHP 8.1.

[Phalcon\Annotations\Reader][annotations-reader] is the default. An application that does not select a reader keeps the behavior it has today.

### Selecting a Reader

Call `setReader()` on the annotations adapter. The call replaces the reader for that adapter only.

```php
<?php

use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Annotations\AttributesReader;

$adapter = new Memory();
$adapter->setReader(new AttributesReader());
```

To change the reader of the `annotations` service of the container:

```php
<?php

use Phalcon\Annotations\AttributesReader;
use Phalcon\Di\FactoryDefault;

$container = new FactoryDefault();

$container
->getShared('annotations')
->setReader(new AttributesReader())
;
```

`getReader()` returns the reader in use.

:::caution[Clear the cache after a change of reader]
The `Apcu` and `Stream` adapters key their entries on the class name only. The key does not name the reader. After a change of reader, clear the APCu cache or the `annotationsDir` folder, or the adapter returns the entries that the previous reader wrote.
:::

### Attribute Classes

`Phalcon\Annotations\Router` and `Phalcon\Annotations\Models\MetaData` hold the attribute form of the annotations that the router and the model metadata strategy read.

| Class                                                                            | Target   | Docblock form  |
|----------------------------------------------------------------------------------|----------|----------------|
| [Phalcon\Annotations\Router\Route][annotations-router-route]                     | method   | `@Route`       |
| [Phalcon\Annotations\Router\Connect][annotations-router-connect]                 | method   | `@Connect`     |
| [Phalcon\Annotations\Router\Delete][annotations-router-delete]                   | method   | `@Delete`      |
| [Phalcon\Annotations\Router\Get][annotations-router-get]                         | method   | `@Get`         |
| [Phalcon\Annotations\Router\Head][annotations-router-head]                       | method   | `@Head`        |
| [Phalcon\Annotations\Router\Options][annotations-router-options]                 | method   | `@Options`     |
| [Phalcon\Annotations\Router\Patch][annotations-router-patch]                     | method   | `@Patch`       |
| [Phalcon\Annotations\Router\Post][annotations-router-post]                       | method   | `@Post`        |
| [Phalcon\Annotations\Router\Purge][annotations-router-purge]                     | method   | `@Purge`       |
| [Phalcon\Annotations\Router\Put][annotations-router-put]                         | method   | `@Put`         |
| [Phalcon\Annotations\Router\Trace][annotations-router-trace]                     | method   | `@Trace`       |
| [Phalcon\Annotations\Router\RoutePrefix][annotations-router-routeprefix]         | class    | `@RoutePrefix` |
| [Phalcon\Annotations\Models\MetaData\Column][annotations-models-metadata-column] | property | `@Column`      |
| [Phalcon\Annotations\Models\MetaData\Identity][annotations-models-metadata-identity] | property | `@Identity` |
| [Phalcon\Annotations\Models\MetaData\Primary][annotations-models-metadata-primary] | property | `@Primary`   |
| [Phalcon\Annotations\Models\MetaData\Source][annotations-models-metadata-source] | class    | `@Source`      |

The route classes accept more than one attribute on one method, in the same way that a docblock accepts more than one `@Get` line. The other classes accept one.

The service does not make an instance of these classes. It reads the name and the arguments with `ReflectionAttribute`. The classes give the name, the target and the signature that an IDE and a static analyzer read. Because no instance is made, the parameter types are not checked when the application runs. `#[Column(length: 'seventy')]` reaches the metadata strategy as a string, and only a static analyzer reports it.

`Source` is available for an application that reads it, and no component of the framework reads it.

The model of the Usage section, written with attributes:

```php
<?php

use Phalcon\Annotations\Models\MetaData\Column;
use Phalcon\Annotations\Models\MetaData\Identity;
use Phalcon\Annotations\Models\MetaData\Primary;
use Phalcon\Mvc\Model;

class Customers extends Model
{
#[Primary]
#[Identity]
#[Column(type: 'integer', nullable: false, column: 'cst_id')]
public $id;

#[Column(type: 'string', nullable: false, column: 'cst_name_first')]
public $nameFirst;

#[Column(type: 'string', nullable: false, column: 'cst_name_last')]
public $nameLast;
}
```

### Argument Values

The parser stores every literal of a docblock as a string. PHP resolves the argument of an attribute to its own type. The two readers agree on the value and not on the type.

| Source                        | `getNamedArgument('length')` |
|-------------------------------|------------------------------|
| `@Column(length=70)`          | `'70'`                       |
| `#[Column(length: 70)]`       | `70`                         |

Use a loose comparison, or cast the value, when the code must accept the two readers.

### Your Own Annotations

The two readers return every annotation that they find. The classes above are the names that the router and the metadata strategy read, and they are not a list of the names that a reader accepts. An annotation of your own travels through the reader, the reflection and the collection with no special case:

```php
<?php

use Phalcon\Annotations\Adapter\Memory;

/**
 * @Cacheable(lifetime=3600)
 */
class Invoices
{
}

$adapter    = new Memory();
$reflection = $adapter->get('Invoices');
$collection = $reflection->getClassAnnotations();

var_dump($collection->has('Cacheable'));                          // bool(true)
echo $collection->get('Cacheable')->getNamedArgument('lifetime'); // 3600
```

The name is not the same for the two readers. A docblock name is text, and the parser gives it back as written. An attribute name is a class name, and [Phalcon\Annotations\AttributesReader][annotations-attributesreader] gives the short name only to an attribute of the `Phalcon\Annotations` namespace. Every other attribute keeps the full class name.

| Source                                    | `getName()`                | `has('Cacheable')` |
|-------------------------------------------|----------------------------|--------------------|
| `/** @Cacheable(lifetime=3600) */`        | `Cacheable`                | `true`             |
| `#[\App\Attributes\Cacheable(3600)]`      | `App\Attributes\Cacheable` | `false`            |

The rule keeps the attribute of another library away from the name of a Phalcon one. Without it, `#[Doctrine\ORM\Mapping\Column]` becomes `Column` and the metadata strategy reads it as its own.

With attributes, match on the full class name:

```php
<?php

use App\Attributes\Cacheable;
use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Annotations\AttributesReader;

$adapter = new Memory();
$adapter->setReader(new AttributesReader());

$collection = $adapter->get('Invoices')->getClassAnnotations();

var_dump($collection->has(Cacheable::class));             // bool(true)
echo $collection->get(Cacheable::class)->getArgument(0);  // 3600
```

To give the short name to your own namespace as well, extend the reader and override `resolveName()`:

```php
<?php

use Phalcon\Annotations\AttributesReader;

use function array_pop;
use function explode;
use function str_starts_with;

class AppAttributesReader extends AttributesReader
{
protected function resolveName(string $name): string
{
    if (str_starts_with($name, 'App\\Attributes\\')) {
        $parts = explode('\\', $name);

        return (string) array_pop($parts);
    }

    return parent::resolveName($name);
}
}
```

```php
<?php

use Phalcon\Annotations\Adapter\Memory;

$adapter = new Memory();
$adapter->setReader(new AppAttributesReader());

$collection = $adapter->get('Invoices')->getClassAnnotations();

var_dump($collection->has('Cacheable')); // bool(true)
```

The call to `parent::resolveName()` keeps the rule for the `Phalcon\Annotations` namespace. Without it, every Phalcon attribute keeps its full class name, and the router and the metadata strategy find nothing.

## Adapters

This component employs adapters to cache or not cache the parsed and processed annotations, thereby improving performance:

| Adapter                                                          | Description                                                                  |
|------------------------------------------------------------------|------------------------------------------------------------------------------|
| [Phalcon\Annotations\Adapter\Apcu][annotations-adapter-apcu]     | Use APCu to store parsed and processed annotations (production)              |
| [Phalcon\Annotations\Adapter\Memory][annotations-adapter-memory] | Use memory to store annotations (development)                                |
| [Phalcon\Annotations\Adapter\Stream][annotations-adapter-stream] | Use a file stream to store annotations. Must be used with a byte-code cache. |

### Apcu

[Phalcon\Annotations\Adapter\Apcu][annotations-adapter-apcu] stores the parsed and processed annotations using the APCu cache. This adapter is suitable for production systems. However, once the web server restarts, the cache will be cleared and will have to be rebuilt. The adapter accepts two parameters in the constructor's options array:

- `prefix` - the prefix for the key stored
- `lifetime` - the cache lifetime

```php
<?php

use Phalcon\Annotations\Adapter\Apcu;

$adapter = new Apcu(
[
    'prefix'   => 'my-prefix',
    'lifetime' => 3600,
]
);
```

Internally, the adapter stores data prefixing every key with _`PHAN`. This setting cannot be changed. It, however, gives you the option to scan APCu for keys that are prefixed with _`PHAN` and clear them if needed.

```php
<?php

use APCuIterator;

$result   = true;
$pattern  = "/^_PHAN/";
$iterator = new APCuIterator($pattern);

if (true === is_object($iterator)) {
return false;
}

foreach ($iterator as $item) {
if (true !== apcu_delete($item["key"])) {
    $result = false;
}
}

return $result;
```

### Memory

[Phalcon\Annotations\Adapter\Memory][annotations-adapter-memory] stores the parsed and processed annotations in memory. This adapter is suitable for development systems. The cache is rebuilt on every request, and therefore can immediately reflect changes while developing your application.

```php
<?php

use Phalcon\Annotations\Adapter\Memory;

$adapter = new Memory();
```

### Stream

[Phalcon\Annotations\Adapter\Stream][annotations-adapter-stream] stores the parsed and processed annotations in a file on the server. This adapter can be used in production systems, but it will increase the I/O since for every request the annotations cache files will need to be read from the file system. The adapter accepts one parameter in the constructor's `$options` array:

- `annotationsDir` - the directory to store the annotations cache

```php
<?php

use Phalcon\Annotations\Adapter\Stream;

$adapter = new Stream(
[
    'annotationsDir' => '/app/storage/cache/annotations',
]
);
```

:::danger[Keep the cache directory outside the document root]
The adapter writes one file per class, named after the class, containing the serialized annotation data. The files have a `.php` extension but no PHP opening tag, so a web server that can reach the directory returns their content verbatim. Point `annotationsDir` to a directory outside the document root (for example `/app/storage/cache/annotations`), never to `./` or a public path, and do not make it writable by other users.
:::

If there is a problem with storing the data in the folder due to permissions or any other reason, a [Phalcon\Annotations\Exception][annotations-exception] will be thrown.

### Custom

[Phalcon\Annotations\Adapter\AdapterInterface][annotations-adapter-adapterinterface] is available

## Limiting the In-Memory Cache

Each adapter caches parsed [Phalcon\Annotations\Reflection][annotations-reflection] results keyed by class name. The cache lives for the adapter instance lifetime and is bounded in practice by the number of annotated classes in the application.

For long-running processes that load classes dynamically (test runners, code generators, multi-tenant workers) call `setAnnotationsLimit()` to clear the cache when adding a new class would exceed the cap; the cache repopulates lazily on subsequent reads.

```php
<?php

use Phalcon\Annotations\Adapter\Memory;

$adapter = new Memory();
$adapter->setAnnotationsLimit(500);
```

The default value `0` preserves the original unbounded behavior. `getAnnotationsLimit()` returns the current cap. The cap applies uniformly to every adapter (`Apcu`, `Memory`, `Stream`, custom) because the methods live on [Phalcon\Annotations\Adapter\AbstractAdapter][annotations-adapter-abstractadapter].

## Examples

### Controller-based Access

You can use annotations to define which areas are controlled by the ACL. This can be achieved by registering a plugin in the events manager listening to the `beforeExecuteRoute` event, or by implementing the method in your base controller.

First, set the annotations manager in your DI container:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Annotations\Adapter\Apcu;

$container = new FactoryDefault();

$container->set(
'annotations',
function () {
    return new Apcu(
        [
            'lifetime' => 86400
        ]
    );
}
);
```

Now, in the base controller, implement the `beforeExecuteRoute` method:

```php
<?php

namespace MyApp\Controllers;

use Phalcon\Annotations\Adapter\Apcu;
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\Controller;
use MyApp\Components\Auth;

/**
 * @property Apcu $annotations
 * @property Auth $auth 
 */
class BaseController extends Controller
{
/**
 * @param Event $event
 * @param Dispatcher $dispatcher
 *
 * @return bool
 */
public function beforeExecuteRoute(
    Dispatcher $dispatcher
) {
    $controllerName = $dispatcher->getControllerClass();

    $annotations = $this
        ->annotations
        ->get($controllerName)
    ;

    $exists = $annotations
        ->getClassAnnotations()
        ->has('Private')
    ;

    if (!$exists) {
        return true;
    }

    if ($this->auth->isLoggedIn()) {
        return true;
    }

    $dispatcher->forward(
        [
            'controller' => 'session',
            'action'     => 'login',
        ]
    );

    return false;
}
}
```

In your controllers, specify:

```php
<?php

namespace MyApp\Controllers;

use MyApp\Controllers\BaseController;

/**
 * @Private(true) 
 */
class Invoices extends BaseController
{
public function indexAction()
{
}
}
```

### Group-based Access

You might want to expand on the above and offer more granular access control for your application. For this, also use the `beforeExecuteRoute` in the controller but add the access metadata on each action. If you need a specific controller to be "locked," you can also use the initialize method.

First, set the annotations manager in your DI container:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Annotations\Adapter\Apcu;

$container = new FactoryDefault();

$container->set(
'annotations',
function () {
    return new Apcu(
        [
            'lifetime' => 86400
        ]
    );
}
);
```

Now, in the base controller, implement the `beforeExecuteRoute` method:

```php
<?php

namespace MyApp\Controllers;

use Phalcon\Annotations\Adapter\Apcu;
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\Controller;
use MyApp\Components\Auth;

/**
 * @property Apcu $annotations
 * @property Auth $auth 
 */
class BaseController extends Controller
{
/**
 * @param Event $event
 * @param Dispatcher $dispatcher
 *
 * @return bool
 */
public function beforeExecuteRoute(
    Dispatcher $dispatcher
) {
    $controllerName = $dispatcher->getControllerClass();
    $actionName     = $dispatcher->getActionName() . 'Action';

    $data = $this
        ->annotations
        ->getMethod($controllerName, $actionName)
    ;
    $access    = $data->get('Access');
    $aclGroups = $access->getArguments();

    $user   = $this->acl->getUser();
    $groups = $user->getRelated('groups');

    $userGroups = [];
    foreach ($groups as $group) {
        $userGroups[] = $group->grp_name;
    }

    $allowed = array_intersect($userGroups, $aclGroups);
    $allowed = (count($allowed) > 0);

    if ($allowed) {
        return true;
    }

    $dispatcher->forward(
        [
            'controller' => 'session',
            'action'     => 'login',
        ]
    );

    return false;
}
}
```

In your controllers:

```php
<?php

namespace MyApp\Controllers;

use MyApp\Controllers\BaseController;

/**
 * @Private(true) 
 */
class Invoices extends BaseController
{
/**
 * @Access(
 *     'Administrators',
 *     'Accounting',
 *     'Users',
 *     'Guests'
 * )
 */
public function indexAction()
{
}

/**
 * @Access(
 *     'Administrators',
 *     'Accounting',
 * )
 */
public function listAction()
{
}

/**
 * @Access(
 *     'Administrators',
 *     'Accounting',
 * )
 */
public function viewAction()
{
}
}
```

## Additional Resources

* [Tutorial: Creating a custom model's initializer with Annotations](https://blog.phalcon.io/post/tutorial-creating-a-custom-models-initializer)

## Exceptions

Any exceptions thrown in the `Phalcon\Annotations` namespace will be of type [Phalcon\Annotations\Exception][annotations-exception]. You can use these exceptions to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Annotations\Adapter\Memory;
use Phalcon\Annotations\Exception;
use Phalcon\Mvc\Controller;

class IndexController extends Controller
{
public function index()
{
    try {
        $adapter = new Memory();

        $reflector   = $adapter->get('Invoices');
        $annotations = $reflector->getClassAnnotations();

        foreach ($annotations as $annotation) {
            echo $annotation->getExpression('unknown-expression');
        }
    } catch (Exception $ex) {
        echo $ex->getMessage();
    }
}
}
```

### Granular Exceptions

As of 5.14 the component raises granular subclasses so callers can catch a specific failure mode. Three subclasses extend `Phalcon\Annotations\Exception`; one keeps its original SPL parent (`RuntimeException`) because the historical throw site used that type.

| Class                                                            | Parent                          | Thrown when                                                                   |
|------------------------------------------------------------------|---------------------------------|-------------------------------------------------------------------------------|
| `Phalcon\Annotations\Exceptions\AnnotationNotFound`              | `Phalcon\Annotations\Exception` | A named annotation is requested from a `Collection` that does not contain it. |
| `Phalcon\Annotations\Exceptions\AnnotationsDirectoryNotWritable` | `Phalcon\Annotations\Exception` | The `Stream` adapter fails to write a serialized annotation file.             |
| `Phalcon\Annotations\Exceptions\CannotReadAnnotationData`        | `RuntimeException`              | The `Stream` adapter cannot read a serialized annotation file.                |
| `Phalcon\Annotations\Exceptions\UnknownAnnotationExpression`     | `Phalcon\Annotations\Exception` | An annotation expression has an unrecognized AST type.                        |

[annotations-adapter-abstractadapter]: /5.22/api/phalcon_annotations/#annotationsadapterabstractadapter
[annotations-adapter-adapterinterface]: /5.22/api/phalcon_annotations/#annotationsadapteradapterinterface
[annotations-adapter-apcu]: /5.22/api/phalcon_annotations/#annotationsadapterapcu
[annotations-adapter-memory]: /5.22/api/phalcon_annotations/#annotationsadaptermemory
[annotations-adapter-stream]: /5.22/api/phalcon_annotations/#annotationsadapterstream
[annotations-annotation]: /5.22/api/phalcon_annotations/#annotationsannotation
[annotations-annotationsfactory]: /5.22/api/phalcon_annotations/#annotationsannotationsfactory
[annotations-attributesreader]: /5.22/api/phalcon_annotations/#annotationsattributesreader
[annotations-collection]: /5.22/api/phalcon_annotations/#annotationscollection
[annotations-exception]: /5.22/api/phalcon_annotations/#annotationsexception
[annotations-models-metadata-column]: /5.22/api/phalcon_annotations/#annotationsmodelsmetadatacolumn
[annotations-models-metadata-identity]: /5.22/api/phalcon_annotations/#annotationsmodelsmetadataidentity
[annotations-models-metadata-primary]: /5.22/api/phalcon_annotations/#annotationsmodelsmetadataprimary
[annotations-models-metadata-source]: /5.22/api/phalcon_annotations/#annotationsmodelsmetadatasource
[annotations-reader]: /5.22/api/phalcon_annotations/#annotationsreader
[annotations-readerinterface]: /5.22/api/phalcon_annotations/#annotationsreaderinterface
[annotations-reflection]: /5.22/api/phalcon_annotations/#annotationsreflection
[annotations-router-connect]: /5.22/api/phalcon_annotations/#annotationsrouterconnect
[annotations-router-delete]: /5.22/api/phalcon_annotations/#annotationsrouterdelete
[annotations-router-get]: /5.22/api/phalcon_annotations/#annotationsrouterget
[annotations-router-head]: /5.22/api/phalcon_annotations/#annotationsrouterhead
[annotations-router-options]: /5.22/api/phalcon_annotations/#annotationsrouteroptions
[annotations-router-patch]: /5.22/api/phalcon_annotations/#annotationsrouterpatch
[annotations-router-post]: /5.22/api/phalcon_annotations/#annotationsrouterpost
[annotations-router-purge]: /5.22/api/phalcon_annotations/#annotationsrouterpurge
[annotations-router-put]: /5.22/api/phalcon_annotations/#annotationsrouterput
[annotations-router-route]: /5.22/api/phalcon_annotations/#annotationsrouterroute
[annotations-router-routeprefix]: /5.22/api/phalcon_annotations/#annotationsrouterrouteprefix
[annotations-router-trace]: /5.22/api/phalcon_annotations/#annotationsroutertrace
[config]: /5.22/config/

Source: https://docs.phalcon.io/5.22/annotations/index.mdx
