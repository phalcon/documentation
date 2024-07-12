# Annotations
- - -

## Overview
Phalcon has introduced the first annotations parser component written in C for PHP. The `Phalcon\Annotations` namespace encompasses general-purpose components that provide an easy way to parse and cache annotations in PHP applications.

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
```
Simple Annotation

```php
/**
 * @SomeAnnotation('hello', 'world', 1, 2, 3, false, true)
```
Annotation with parameters

```php
/**
 * @SomeAnnotation(first='hello', second='world', third=1)
 * @SomeAnnotation(first: 'hello', second: 'world', third: 1)
```
Annotation with named parameters

```php
/**
 * @SomeAnnotation([1, 2, 3, 4])
 * @SomeAnnotation({1, 2, 3, 4})
```
Passing an array

```php
/**
 * @SomeAnnotation({first=1, second=2, third=3})
 * @SomeAnnotation({'first'=1, 'second'=2, 'third'=3})
 * @SomeAnnotation({'first': 1, 'second': 2, 'third': 3})
 * @SomeAnnotation(['first': 1, 'second': 2, 'third': 3])
```
Passing a hash as a parameter

```php
/**
 * @SomeAnnotation({'name'='SomeName', 'other'={
 *     'foo1': 'bar1', 'foo2': 'bar2', {1, 2, 3},
 * }})
```
Nested arrays/hashes

```php
/**
 * @SomeAnnotation(first=@AnotherAnnotation(1, 2, 3))
```
Nested Annotations

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

If there is a problem with storing the data in the folder due to permissions or any other reason, a [Phalcon\Annotations\Exception][annotations-exception] will be thrown.

### Custom
[Phalcon\Annotations\Adapter\AdapterInterface][annotations-adapter-adapterinterface] is available

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

## Examples
### Controller-based Access
You can use annotations to define which areas are controlled by the ACL. This can be achieved by registering a plugin in the events manager listening to the `beforeExecuteRoute` event, or simply by implementing the method in your base controller.

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

$container = a FactoryDefault();

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

[annotations-adapter-abstractadapter]: api/phalcon_annotations.md#annotationsadapterabstractadapter
[annotations-adapter-adapterinterface]: api/phalcon_annotations.md#annotationsadapteradapterinterface
[annotations-adapter-apcu]: api/phalcon_annotations.md#annotationsadapterapcu
[annotations-adapter-memory]: api/phalcon_annotations.md#annotationsadaptermemory
[annotations-adapter-stream]: api/phalcon_annotations.md#annotationsadapterstream
[annotations-annotation]: api/phalcon_annotations.md#annotationsannotation
[annotations-annotationsfactory]: api/phalcon_annotations.md#annotationsannotationsfactory
[annotations-collection]: api/phalcon_annotations.md#annotationscollection
[annotations-exception]: api/phalcon_annotations.md#annotationsexception
[annotations-reader]: api/phalcon_annotations.md#annotationsreader
[annotations-readerinterface]: api/phalcon_annotations.md#annotationsreaderinterface
[annotations-reflection]: api/phalcon_annotations.md#annotationsreflection
[config]: config.md
