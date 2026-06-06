---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Di\AbstractInjectionAware

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/AbstractInjectionAware.zep){ .src-btn }

This abstract class offers common access to the DI in a class

<div class="api-tree" markdown>

- `stdClass`
    - **`Phalcon\Di\AbstractInjectionAware`** — implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
        - [`Phalcon\Assets\Manager`](phalcon_assets.md#assetsmanager)
        - [`Phalcon\Cli\Router`](phalcon_cli.md#clirouter)
        - [`Phalcon\Dispatcher\AbstractDispatcher`](phalcon_dispatcher.md#dispatcherabstractdispatcher)
        - [`Phalcon\Encryption\Security`](phalcon_encryption.md#encryptionsecurity)
        - [`Phalcon\Flash\AbstractFlash`](phalcon_flash.md#flashabstractflash)
        - [`Phalcon\Http\Cookie`](phalcon_http.md#httpcookie)
        - [`Phalcon\Http\Request`](phalcon_http.md#httprequest)
        - [`Phalcon\Http\Response\Cookies`](phalcon_http.md#httpresponsecookies)
        - [`Phalcon\Mvc\Model`](phalcon_mvc.md#mvcmodel)
        - [`Phalcon\Mvc\Router`](phalcon_mvc.md#mvcrouter)
        - [`Phalcon\Mvc\Url`](phalcon_mvc.md#mvcurl)
        - [`Phalcon\Session\Manager`](phalcon_session.md#sessionmanager)

</div>

__Uses__ `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diabstractinjectionaware-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#diabstractinjectionaware-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injector</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$container` `DiInterface`

    Dependency Injector

</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDI()` { #diabstractinjectionaware-getdi }

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

#### `setDI()` { #diabstractinjectionaware-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\Di

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Di.zep){ .src-btn }

Phalcon\Di\Di is a component that implements Dependency Injection/Service
Location of services and it's itself a container for them.

Since Phalcon is highly decoupled, Phalcon\Di\Di is essential to integrate the
different components of the framework. The developer can also use this
component to inject dependencies and manage global instances of the different
classes used in the application.

Basically, this component implements the `Inversion of Control` pattern.
Applying this, the objects do not receive their dependencies using setters or
constructors, but requesting a service dependency injector. This reduces the
overall complexity, since there is only one way to get the required
dependencies within a component.

Additionally, this pattern increases testability in the code, thus making it
less prone to errors.

```php
use Phalcon\Di\Di;
use Phalcon\Http\Request;

$di = new Di();

// Using a string definition
$di->set("request", Request::class, true);

// Using an anonymous function
$di->setShared(
    "request",
    function () {
        return new Request();
    }
);

$request = $di->getRequest();
```

<div class="api-tree" markdown>

- **`Phalcon\Di\Di`** — implements [`Phalcon\Di\DiInterface`](#didiinterface)
    - [`Phalcon\Di\FactoryDefault`](#difactorydefault)

</div>

__Uses__ `Phalcon\Config\Adapter\Php` · `Phalcon\Config\Adapter\Yaml` · `Phalcon\Config\ConfigInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\AliasAlreadyInUse` · `Phalcon\Di\Exceptions\AliasNameMustBeString` · `Phalcon\Di\Exceptions\CircularAliasReference` · `Phalcon\Di\Exceptions\ServiceCannotBeResolved` · `Phalcon\Di\InitializationAwareInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Service` · `Phalcon\Di\ServiceInterface` · `Phalcon\Di\ServiceProviderInterface` · `Phalcon\Events\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#didi-__call">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">__call(
    string $method,
    array $arguments = []
)</code>
<span class="desc">Magic method to get or set services using setters/getters</span>
</a>
<a class="api-item" href="#didi-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
<span class="desc">Phalcon\Di\Di constructor</span>
</a>
<a class="api-item" href="#didi-attempt">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface|bool</code>
<code class="sig">attempt(
    string $name,
    mixed $definition,
    bool $shared = false
)</code>
<span class="desc">Attempts to register a service in the services container</span>
</a>
<a class="api-item" href="#didi-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">get(
    string $name,
    mixed $parameters = null
)</code>
<span class="desc">Resolves the service based on its configuration</span>
</a>
<a class="api-item" href="#didi-getalias">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlias( string $name )</code>
<span class="desc">Return the alias based on a passed key. Returns an empty string if</span>
</a>
<a class="api-item" href="#didi-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface|null</code>
<code class="sig">getDefault()</code>
<span class="desc">Return the latest DI created</span>
</a>
<a class="api-item" href="#didi-getinternaleventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getInternalEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#didi-getraw">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getRaw( string $name )</code>
<span class="desc">Returns a service definition without resolving</span>
</a>
<a class="api-item" href="#didi-getservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">getService( string $name )</code>
<span class="desc">Returns a Phalcon\Di\Service instance</span>
</a>
<a class="api-item" href="#didi-getservices">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface[]</code>
<code class="sig">getServices()</code>
<span class="desc">Return the services registered in the DI</span>
</a>
<a class="api-item" href="#didi-getshared">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getShared(
    string $name,
    mixed $parameters = null
)</code>
<span class="desc">Resolves a service, the resolved service is stored in the DI, subsequent</span>
</a>
<a class="api-item" href="#didi-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $name )</code>
<span class="desc">Check whether the DI contains a service by a name</span>
</a>
<a class="api-item" href="#didi-hasshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasShared( string $name )</code>
<span class="desc">Check whether the DI has a cached shared instance for a service name.</span>
</a>
<a class="api-item" href="#didi-loadfromphp">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">loadFromPhp( string $filePath )</code>
<span class="desc">Loads services from a php config file.</span>
</a>
<a class="api-item" href="#didi-loadfromyaml">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">loadFromYaml(
    string $filePath,
    array $callbacks = null
)</code>
<span class="desc">Loads services from a yaml file.</span>
</a>
<a class="api-item" href="#didi-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">offsetExists( mixed $name )</code>
<span class="desc">Check if a service is registered using the array syntax</span>
</a>
<a class="api-item" href="#didi-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">offsetGet( mixed $name )</code>
<span class="desc">Allows to obtain a shared service using the array syntax</span>
</a>
<a class="api-item" href="#didi-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetSet(
    mixed $offset,
    mixed $value
)</code>
<span class="desc">Allows to register a shared service using the array syntax</span>
</a>
<a class="api-item" href="#didi-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetUnset( mixed $name )</code>
<span class="desc">Removes a service from the services container using the array syntax</span>
</a>
<a class="api-item" href="#didi-register">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">register( ServiceProviderInterface $provider )</code>
<span class="desc">Registers a service provider.</span>
</a>
<a class="api-item" href="#didi-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">remove( string $name )</code>
<span class="desc">Removes a service in the services container</span>
</a>
<a class="api-item" href="#didi-removeshared">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">removeShared( string $name )</code>
<span class="desc">Removes the cached shared instance for a service, leaving the service</span>
</a>
<a class="api-item" href="#didi-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal default DI</span>
</a>
<a class="api-item" href="#didi-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">set(
    string $name,
    mixed $definition,
    bool $shared = false
)</code>
<span class="desc">Registers a service in the services container</span>
</a>
<a class="api-item" href="#didi-setalias">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setAlias(
    string $name,
    mixed $aliases
)</code>
<span class="desc">Sets one or more aliases to the given name.</span>
</a>
<a class="api-item" href="#didi-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefault( DiInterface $container )</code>
<span class="desc">Set a default dependency injection container to be obtained into static</span>
</a>
<a class="api-item" href="#didi-setinternaleventsmanager">
<code class="vis vis-public">public</code>
<code class="sig">setInternalEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the internal event manager</span>
</a>
<a class="api-item" href="#didi-setservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setService(
    string $name,
    ServiceInterface $rawDefinition
)</code>
<span class="desc">Sets a service using a raw Phalcon\Di\Service definition</span>
</a>
<a class="api-item" href="#didi-setshared">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setShared(
    string $name,
    mixed $definition
)</code>
<span class="desc">Registers an &quot;always shared&quot; service in the services container</span>
</a>
<a class="api-item" href="#didi-loadfromconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">loadFromConfig( ConfigInterface $config )</code>
<span class="desc">Loads services from a Config object.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$aliases = []` `array`

    List of service aliases

-   `protected`{ .vis-protected } `$defaultContainer = null` `DiInterface|null`

    Latest DI build

-   `protected`{ .vis-protected } `$eventsManager = null` `ManagerInterface|null`

    Events Manager

-   `protected`{ .vis-protected } `$services = []` `ServiceInterface[]`

    List of registered services

-   `protected`{ .vis-protected } `$sharedInstances = []` `array`

    List of shared instances

</div>

### Methods

<div class="api-group">Public · 29</div>

#### `__call()` { #didi-__call }

```php
public function __call(
    string $method,
    array $arguments = []
): mixed|null;
```

Magic method to get or set services using setters/getters

#### `__construct()` { #didi-__construct }

```php
public function __construct();
```

Phalcon\Di\Di constructor

#### `attempt()` { #didi-attempt }

```php
public function attempt(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface|bool;
```

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name

#### `get()` { #didi-get }

```php
public function get(
    string $name,
    mixed $parameters = null
): mixed;
```

Resolves the service based on its configuration

#### `getAlias()` { #didi-getalias }

```php
public function getAlias( string $name ): string;
```

Return the alias based on a passed key. Returns an empty string if
the alias does not exist

#### `getDefault()` { #didi-getdefault }

```php
public static function getDefault(): DiInterface|null;
```

Return the latest DI created

#### `getInternalEventsManager()` { #didi-getinternaleventsmanager }

```php
public function getInternalEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getRaw()` { #didi-getraw }

```php
public function getRaw( string $name ): mixed;
```

Returns a service definition without resolving

#### `getService()` { #didi-getservice }

```php
public function getService( string $name ): ServiceInterface;
```

Returns a Phalcon\Di\Service instance

#### `getServices()` { #didi-getservices }

```php
public function getServices(): ServiceInterface[];
```

Return the services registered in the DI

#### `getShared()` { #didi-getshared }

```php
public function getShared(
    string $name,
    mixed $parameters = null
): mixed;
```

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance

#### `has()` { #didi-has }

```php
public function has( string $name ): bool;
```

Check whether the DI contains a service by a name

#### `hasShared()` { #didi-hasshared }

```php
public function hasShared( string $name ): bool;
```

Check whether the DI has a cached shared instance for a service name.

Unlike `has()`, which reports on the service *definition* registry,
this method reports only on the resolved-instance cache populated by
`getShared()`.

#### `loadFromPhp()` { #didi-loadfromphp }

```php
public function loadFromPhp( string $filePath ): void;
```

Loads services from a php config file.

```php
$di->loadFromPhp("path/services.php");
```

And the services can be specified in the file as:

```php
return [
     'myComponent' => [
         'className' => '\Acme\Components\MyComponent',
         'shared' => true,
     ],
     'group' => [
         'className' => '\Acme\Group',
         'arguments' => [
             [
                 'type' => 'service',
                 'service' => 'myComponent',
             ],
         ],
     ],
     'user' => [
         'className' => '\Acme\User',
     ],
];
```

@link https://docs.phalcon.io/latest/di/

#### `loadFromYaml()` { #didi-loadfromyaml }

```php
public function loadFromYaml(
    string $filePath,
    array $callbacks = null
): void;
```

Loads services from a yaml file.

```php
$di->loadFromYaml(
    "path/services.yaml",
    [
        "!approot" => function ($value) {
            return dirname(__DIR__) . $value;
        }
    ]
);
```

And the services can be specified in the file as:

```php
myComponent:
    className: \Acme\Components\MyComponent
    shared: true

group:
    className: \Acme\Group
    arguments:
        - type: service
          name: myComponent

user:
   className: \Acme\User
```

@link https://docs.phalcon.io/latest/di/

#### `offsetExists()` { #didi-offsetexists }

```php
public function offsetExists( mixed $name ): bool;
```

Check if a service is registered using the array syntax

#### `offsetGet()` { #didi-offsetget }

```php
public function offsetGet( mixed $name ): mixed;
```

Allows to obtain a shared service using the array syntax

```php
var_dump($di["request"]);
```

#### `offsetSet()` { #didi-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Allows to register a shared service using the array syntax

```php
$di["request"] = new \Phalcon\Http\Request();
```

#### `offsetUnset()` { #didi-offsetunset }

```php
public function offsetUnset( mixed $name ): void;
```

Removes a service from the services container using the array syntax

#### `register()` { #didi-register }

```php
public function register( ServiceProviderInterface $provider ): void;
```

Registers a service provider.

```php
use Phalcon\Di\DiInterface;
use Phalcon\Di\ServiceProviderInterface;

class SomeServiceProvider implements ServiceProviderInterface
{
    public function register(DiInterface $di)
    {
        $di->setShared(
            'service',
            function () {
                // ...
            }
        );
    }
}
```

#### `remove()` { #didi-remove }

```php
public function remove( string $name ): void;
```

Removes a service in the services container
It also removes any shared instance created for the service

#### `removeShared()` { #didi-removeshared }

```php
public function removeShared( string $name ): void;
```

Removes the cached shared instance for a service, leaving the service
definition intact so the next `getShared()` call rebuilds it.

#### `reset()` { #didi-reset }

```php
public static function reset(): void;
```

Resets the internal default DI

#### `set()` { #didi-set }

```php
public function set(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface;
```

Registers a service in the services container

#### `setAlias()` { #didi-setalias }

```php
public function setAlias(
    string $name,
    mixed $aliases
): self;
```

Sets one or more aliases to the given name.

#### `setDefault()` { #didi-setdefault }

```php
public static function setDefault( DiInterface $container ): void;
```

Set a default dependency injection container to be obtained into static
methods

#### `setInternalEventsManager()` { #didi-setinternaleventsmanager }

```php
public function setInternalEventsManager( ManagerInterface $eventsManager );
```

Sets the internal event manager

#### `setService()` { #didi-setservice }

```php
public function setService(
    string $name,
    ServiceInterface $rawDefinition
): ServiceInterface;
```

Sets a service using a raw Phalcon\Di\Service definition

#### `setShared()` { #didi-setshared }

```php
public function setShared(
    string $name,
    mixed $definition
): ServiceInterface;
```

Registers an "always shared" service in the services container

<div class="api-group">Protected · 1</div>

#### `loadFromConfig()` { #didi-loadfromconfig }

```php
protected function loadFromConfig( ConfigInterface $config ): void;
```

Loads services from a Config object.


## Di\DiInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/DiInterface.zep){ .src-btn }

Interface for Phalcon\Di\Di

<div class="api-tree" markdown>

- `ArrayAccess`
    - **`Phalcon\Di\DiInterface`**

</div>

__Uses__ `ArrayAccess`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#didiinterface-attempt">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface|bool</code>
<code class="sig">attempt(
    string $name,
    mixed $definition,
    bool $shared = false
)</code>
<span class="desc">Attempts to register a service in the services container</span>
</a>
<a class="api-item" href="#didiinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">get(
    string $name,
    mixed $parameters = null
)</code>
<span class="desc">Resolves the service based on its configuration</span>
</a>
<a class="api-item" href="#didiinterface-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface|null</code>
<code class="sig">getDefault()</code>
<span class="desc">Return the last DI created</span>
</a>
<a class="api-item" href="#didiinterface-getraw">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getRaw( string $name )</code>
<span class="desc">Returns a service definition without resolving</span>
</a>
<a class="api-item" href="#didiinterface-getservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">getService( string $name )</code>
<span class="desc">Returns the corresponding Phalcon\Di\Service instance for a service</span>
</a>
<a class="api-item" href="#didiinterface-getservices">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface[]</code>
<code class="sig">getServices()</code>
<span class="desc">Return the services registered in the DI</span>
</a>
<a class="api-item" href="#didiinterface-getshared">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getShared(
    string $name,
    mixed $parameters = null
)</code>
<span class="desc">Returns a shared service based on their configuration</span>
</a>
<a class="api-item" href="#didiinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $name )</code>
<span class="desc">Check whether the DI contains a service by a name</span>
</a>
<a class="api-item" href="#didiinterface-hasshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasShared( string $name )</code>
<span class="desc">Check whether the DI has a cached shared instance for a service name.</span>
</a>
<a class="api-item" href="#didiinterface-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">remove( string $name )</code>
<span class="desc">Removes a service in the services container</span>
</a>
<a class="api-item" href="#didiinterface-removeshared">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">removeShared( string $name )</code>
<span class="desc">Removes the cached shared instance for a service, leaving the service</span>
</a>
<a class="api-item" href="#didiinterface-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal default DI</span>
</a>
<a class="api-item" href="#didiinterface-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">set(
    string $name,
    mixed $definition,
    bool $shared = false
)</code>
<span class="desc">Registers a service in the services container</span>
</a>
<a class="api-item" href="#didiinterface-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefault( DiInterface $container )</code>
<span class="desc">Set a default dependency injection container to be obtained into static</span>
</a>
<a class="api-item" href="#didiinterface-setservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setService(
    string $name,
    ServiceInterface $rawDefinition
)</code>
<span class="desc">Sets a service using a raw Phalcon\Di\Service definition</span>
</a>
<a class="api-item" href="#didiinterface-setshared">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setShared(
    string $name,
    mixed $definition
)</code>
<span class="desc">Registers an &quot;always shared&quot; service in the services container</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `attempt()` { #didiinterface-attempt }

```php
public function attempt(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface|bool;
```

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name

#### `get()` { #didiinterface-get }

```php
public function get(
    string $name,
    mixed $parameters = null
): mixed;
```

Resolves the service based on its configuration

#### `getDefault()` { #didiinterface-getdefault }

```php
public static function getDefault(): DiInterface|null;
```

Return the last DI created

#### `getRaw()` { #didiinterface-getraw }

```php
public function getRaw( string $name ): mixed;
```

Returns a service definition without resolving

#### `getService()` { #didiinterface-getservice }

```php
public function getService( string $name ): ServiceInterface;
```

Returns the corresponding Phalcon\Di\Service instance for a service

#### `getServices()` { #didiinterface-getservices }

```php
public function getServices(): ServiceInterface[];
```

Return the services registered in the DI

#### `getShared()` { #didiinterface-getshared }

```php
public function getShared(
    string $name,
    mixed $parameters = null
): mixed;
```

Returns a shared service based on their configuration

#### `has()` { #didiinterface-has }

```php
public function has( string $name ): bool;
```

Check whether the DI contains a service by a name

#### `hasShared()` { #didiinterface-hasshared }

```php
public function hasShared( string $name ): bool;
```

Check whether the DI has a cached shared instance for a service name.

Unlike `has()`, which reports on the service *definition* registry,
this method reports only on the resolved-instance cache populated by
`getShared()`. A service can be registered (`has()` returns true)
without yet having a shared instance (`hasShared()` returns false).

#### `remove()` { #didiinterface-remove }

```php
public function remove( string $name ): void;
```

Removes a service in the services container

#### `removeShared()` { #didiinterface-removeshared }

```php
public function removeShared( string $name ): void;
```

Removes the cached shared instance for a service, leaving the service
definition intact so the next `getShared()` call rebuilds it.

Useful in fork-based multi-process setups where a child inherits the
parent's resource handle (e.g. a database connection) and needs to
discard the cached instance without re-registering the service.

#### `reset()` { #didiinterface-reset }

```php
public static function reset(): void;
```

Resets the internal default DI

#### `set()` { #didiinterface-set }

```php
public function set(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface;
```

Registers a service in the services container

#### `setDefault()` { #didiinterface-setdefault }

```php
public static function setDefault( DiInterface $container ): void;
```

Set a default dependency injection container to be obtained into static
methods

#### `setService()` { #didiinterface-setservice }

```php
public function setService(
    string $name,
    ServiceInterface $rawDefinition
): ServiceInterface;
```

Sets a service using a raw Phalcon\Di\Service definition

#### `setShared()` { #didiinterface-setshared }

```php
public function setShared(
    string $name,
    mixed $definition
): ServiceInterface;
```

Registers an "always shared" service in the services container


## Di\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Di will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Di\Exception`**
        - [`Phalcon\Di\Exception\ServiceResolutionException`](#diexceptionserviceresolutionexception)
        - [`Phalcon\Di\Exceptions\AliasAlreadyInUse`](#diexceptionsaliasalreadyinuse)
        - [`Phalcon\Di\Exceptions\AliasNameMustBeString`](#diexceptionsaliasnamemustbestring)
        - [`Phalcon\Di\Exceptions\ArgumentTypeRequired`](#diexceptionsargumenttyperequired)
        - [`Phalcon\Di\Exceptions\CallArgumentsMustBeArray`](#diexceptionscallargumentsmustbearray)
        - [`Phalcon\Di\Exceptions\CircularAliasReference`](#diexceptionscircularaliasreference)
        - [`Phalcon\Di\Exceptions\ContainerRequired`](#diexceptionscontainerrequired)
        - [`Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead`](#diexceptionsdefinitionmustbearrayforread)
        - [`Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate`](#diexceptionsdefinitionmustbearrayforupdate)
        - [`Phalcon\Di\Exceptions\MethodCallMustBeArray`](#diexceptionsmethodcallmustbearray)
        - [`Phalcon\Di\Exceptions\MethodNameRequired`](#diexceptionsmethodnamerequired)
        - [`Phalcon\Di\Exceptions\MissingClassNameParameter`](#diexceptionsmissingclassnameparameter)
        - [`Phalcon\Di\Exceptions\MissingParameterKey`](#diexceptionsmissingparameterkey)
        - [`Phalcon\Di\Exceptions\PropertyInjectionRequiresInstance`](#diexceptionspropertyinjectionrequiresinstance)
        - [`Phalcon\Di\Exceptions\PropertyMustBeArray`](#diexceptionspropertymustbearray)
        - [`Phalcon\Di\Exceptions\PropertyNameRequired`](#diexceptionspropertynamerequired)
        - [`Phalcon\Di\Exceptions\PropertyValueRequired`](#diexceptionspropertyvaluerequired)
        - [`Phalcon\Di\Exceptions\ServiceCannotBeResolved`](#diexceptionsservicecannotberesolved)
        - [`Phalcon\Di\Exceptions\SetterInjectionRequiresInstance`](#diexceptionssetterinjectionrequiresinstance)
        - [`Phalcon\Di\Exceptions\SetterParametersMustBeArray`](#diexceptionssetterparametersmustbearray)
        - [`Phalcon\Di\Exceptions\UnknownServiceType`](#diexceptionsunknownservicetype)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexception-servicecannotberesolved">
<code class="vis vis-public">public</code>
<code class="ret">Exception</code>
<code class="sig">serviceCannotBeResolved( string $name )</code>
</a>
<a class="api-item" href="#diexception-servicenotfound">
<code class="vis vis-public">public</code>
<code class="ret">Exception</code>
<code class="sig">serviceNotFound( string $name )</code>
</a>
<a class="api-item" href="#diexception-undefinedmethod">
<code class="vis vis-public">public</code>
<code class="ret">Exception</code>
<code class="sig">undefinedMethod( string $method )</code>
</a>
<a class="api-item" href="#diexception-unknownserviceinparameter">
<code class="vis vis-public">public</code>
<code class="ret">Exception</code>
<code class="sig">unknownServiceInParameter( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `serviceCannotBeResolved()` { #diexception-servicecannotberesolved }

```php
public static function serviceCannotBeResolved( string $name ): Exception;
```

#### `serviceNotFound()` { #diexception-servicenotfound }

```php
public static function serviceNotFound( string $name ): Exception;
```

#### `undefinedMethod()` { #diexception-undefinedmethod }

```php
public static function undefinedMethod( string $method ): Exception;
```

#### `unknownServiceInParameter()` { #diexception-unknownserviceinparameter }

```php
public static function unknownServiceInParameter( int $position ): Exception;
```


## Di\Exception\ServiceResolutionException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exception/ServiceResolutionException.zep){ .src-btn }

Phalcon\Di\Exception\ServiceResolutionException

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exception\ServiceResolutionException`**

</div>


## Di\Exceptions\AliasAlreadyInUse

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/AliasAlreadyInUse.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\AliasAlreadyInUse`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsaliasalreadyinuse-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $alias )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsaliasalreadyinuse-__construct }

```php
public function __construct( string $alias );
```


## Di\Exceptions\AliasNameMustBeString

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/AliasNameMustBeString.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\AliasNameMustBeString`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsaliasnamemustbestring-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsaliasnamemustbestring-__construct }

```php
public function __construct();
```


## Di\Exceptions\ArgumentTypeRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/ArgumentTypeRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\ArgumentTypeRequired`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsargumenttyperequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsargumenttyperequired-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\CallArgumentsMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/CallArgumentsMustBeArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\CallArgumentsMustBeArray`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionscallargumentsmustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionscallargumentsmustbearray-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\CircularAliasReference

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/CircularAliasReference.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\CircularAliasReference`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionscircularaliasreference-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionscircularaliasreference-__construct }

```php
public function __construct( string $name );
```


## Di\Exceptions\ContainerRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/ContainerRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\ContainerRequired`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionscontainerrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionscontainerrequired-__construct }

```php
public function __construct();
```


## Di\Exceptions\DefinitionMustBeArrayForRead

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/DefinitionMustBeArrayForRead.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsdefinitionmustbearrayforread-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsdefinitionmustbearrayforread-__construct }

```php
public function __construct();
```


## Di\Exceptions\DefinitionMustBeArrayForUpdate

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/DefinitionMustBeArrayForUpdate.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsdefinitionmustbearrayforupdate-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsdefinitionmustbearrayforupdate-__construct }

```php
public function __construct();
```


## Di\Exceptions\MethodCallMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/MethodCallMustBeArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\MethodCallMustBeArray`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsmethodcallmustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsmethodcallmustbearray-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\MethodNameRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/MethodNameRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\MethodNameRequired`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsmethodnamerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsmethodnamerequired-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\MissingClassNameParameter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/MissingClassNameParameter.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\MissingClassNameParameter`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsmissingclassnameparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsmissingclassnameparameter-__construct }

```php
public function __construct();
```


## Di\Exceptions\MissingParameterKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/MissingParameterKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\MissingParameterKey`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsmissingparameterkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $key,
    int $position
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsmissingparameterkey-__construct }

```php
public function __construct(
    string $key,
    int $position
);
```


## Di\Exceptions\PropertyInjectionRequiresInstance

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/PropertyInjectionRequiresInstance.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\PropertyInjectionRequiresInstance`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionspropertyinjectionrequiresinstance-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionspropertyinjectionrequiresinstance-__construct }

```php
public function __construct();
```


## Di\Exceptions\PropertyMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/PropertyMustBeArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\PropertyMustBeArray`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionspropertymustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionspropertymustbearray-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\PropertyNameRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/PropertyNameRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\PropertyNameRequired`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionspropertynamerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionspropertynamerequired-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\PropertyValueRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/PropertyValueRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\PropertyValueRequired`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionspropertyvaluerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionspropertyvaluerequired-__construct }

```php
public function __construct( int $position );
```


## Di\Exceptions\ServiceCannotBeResolved

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/ServiceCannotBeResolved.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\ServiceCannotBeResolved`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsservicecannotberesolved-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsservicecannotberesolved-__construct }

```php
public function __construct( string $name );
```


## Di\Exceptions\SetterInjectionRequiresInstance

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/SetterInjectionRequiresInstance.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\SetterInjectionRequiresInstance`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionssetterinjectionrequiresinstance-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionssetterinjectionrequiresinstance-__construct }

```php
public function __construct();
```


## Di\Exceptions\SetterParametersMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/SetterParametersMustBeArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\SetterParametersMustBeArray`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionssetterparametersmustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionssetterparametersmustbearray-__construct }

```php
public function __construct();
```


## Di\Exceptions\UnknownServiceType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Exceptions/UnknownServiceType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exceptions\UnknownServiceType`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diexceptionsunknownservicetype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( int $position )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #diexceptionsunknownservicetype-__construct }

```php
public function __construct( int $position );
```


## Di\FactoryDefault

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/FactoryDefault.zep){ .src-btn }

This is a variant of the standard Phalcon\Di\Di. By default it automatically
registers all the services provided by the framework. Thanks to this, the
developer does not need to register each service individually providing a
full stack framework

<div class="api-tree" markdown>

- [`Phalcon\Di\Di`](#didi)
    - **`Phalcon\Di\FactoryDefault`**
        - [`Phalcon\Di\FactoryDefault\Cli`](#difactorydefaultcli)

</div>

__Uses__ `Phalcon\Filter\FilterFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#difactorydefault-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
<span class="desc">Phalcon\Di\FactoryDefault constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #difactorydefault-__construct }

```php
public function __construct();
```

Phalcon\Di\FactoryDefault constructor


## Di\FactoryDefault\Cli

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/FactoryDefault/Cli.zep){ .src-btn }

Phalcon\Di\FactoryDefault\Cli

This is a variant of the standard Phalcon\Di. By default it automatically
registers all the services provided by the framework.
Thanks to this, the developer does not need to register each service individually.
This class is specially suitable for CLI applications

<div class="api-tree" markdown>

- [`Phalcon\Di\Di`](#didi)
    - [`Phalcon\Di\FactoryDefault`](#difactorydefault)
        - **`Phalcon\Di\FactoryDefault\Cli`**

</div>

__Uses__ `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Service` · `Phalcon\Filter\FilterFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#difactorydefaultcli-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
<span class="desc">Phalcon\Di\FactoryDefault\Cli constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #difactorydefaultcli-__construct }

```php
public function __construct();
```

Phalcon\Di\FactoryDefault\Cli constructor


## Di\InitializationAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/InitializationAwareInterface.zep){ .src-btn }

Interface for components that have `initialize()`

<div class="api-tree" markdown>

- **`Phalcon\Di\InitializationAwareInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diinitializationawareinterface-initialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">initialize()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `initialize()` { #diinitializationawareinterface-initialize }

```php
public function initialize(): void;
```


## Di\Injectable

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Injectable.zep){ .src-btn }

This class allows to access services in the services container by just only
accessing a public property with the same name of a registered service

@property \Phalcon\Mvc\Dispatcher|\Phalcon\Mvc\DispatcherInterface $dispatcher
@property \Phalcon\Mvc\Router|\Phalcon\Mvc\RouterInterface $router
@property \Phalcon\Mvc\Url|\Phalcon\Mvc\Url\UrlInterface $url
@property \Phalcon\Http\Request|\Phalcon\Http\RequestInterface $request
@property \Phalcon\Http\Response|\Phalcon\Http\ResponseInterface $response
@property \Phalcon\Http\Response\Cookies|\Phalcon\Http\Response\CookiesInterface $cookies
@property \Phalcon\Filter\Filter $filter
@property \Phalcon\Flash\Direct $flash
@property \Phalcon\Flash\Session $flashSession
@property \Phalcon\Session\ManagerInterface $session
@property \Phalcon\Events\Manager|\Phalcon\Events\ManagerInterface $eventsManager
@property \Phalcon\Db\Adapter\AdapterInterface $db
@property \Phalcon\Encryption\Security $security
@property \Phalcon\Encryption\Crypt|\Phalcon\Encryption\Crypt\CryptInterface $crypt
@property \Phalcon\Html\TagFactory $tag
@property \Phalcon\Html\Escaper|\Phalcon\Html\Escaper\EscaperInterface $escaper
@property \Phalcon\Annotations\Adapter\Memory|\Phalcon\Annotations\Adapter $annotations
@property \Phalcon\Mvc\Model\Manager|\Phalcon\Mvc\Model\ManagerInterface $modelsManager
@property \Phalcon\Mvc\Model\MetaData\Memory|\Phalcon\Mvc\Model\MetadataInterface $modelsMetadata
@property \Phalcon\Mvc\Model\Transaction\Manager|\Phalcon\Mvc\Model\Transaction\ManagerInterface $transactionManager
@property \Phalcon\Support\Settings $settings
@property \Phalcon\Assets\Manager $assets
@property \Phalcon\Di\Di|\Phalcon\Di\DiInterface $di
@property \Phalcon\Session\Bag|\Phalcon\Session\BagInterface $persistent
@property \Phalcon\Mvc\View|\Phalcon\Mvc\ViewInterface $view

<div class="api-tree" markdown>

- `stdClass`
    - **`Phalcon\Di\Injectable`** — implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
        - [`Phalcon\Application\AbstractApplication`](phalcon_application.md#applicationabstractapplication)
        - [`Phalcon\Cli\Task`](phalcon_cli.md#clitask)
        - [`Phalcon\Filter\Validation`](phalcon_filter.md#filtervalidation)
        - [`Phalcon\Forms\Form`](phalcon_forms.md#formsform)
        - [`Phalcon\Mvc\Controller`](phalcon_mvc.md#mvccontroller)
        - [`Phalcon\Mvc\Micro`](phalcon_mvc.md#mvcmicro)
        - [`Phalcon\Mvc\View`](phalcon_mvc.md#mvcview)
        - [`Phalcon\Mvc\View\Engine\AbstractEngine`](phalcon_mvc.md#mvcviewengineabstractengine)
        - [`Phalcon\Mvc\View\Simple`](phalcon_mvc.md#mvcviewsimple)

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\Exceptions\ContainerRequired` · `Phalcon\Session\BagInterface` · `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diinjectable-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">__get( string $propertyName )</code>
<span class="desc">Magic method __get</span>
</a>
<a class="api-item" href="#diinjectable-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">__isset( string $name )</code>
<span class="desc">Magic method __isset</span>
</a>
<a class="api-item" href="#diinjectable-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#diinjectable-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injector</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

    Dependency Injector

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__get()` { #diinjectable-__get }

```php
public function __get( string $propertyName ): mixed|null;
```

Magic method __get

#### `__isset()` { #diinjectable-__isset }

```php
public function __isset( string $name ): bool;
```

Magic method __isset

#### `getDI()` { #diinjectable-getdi }

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

#### `setDI()` { #diinjectable-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\InjectionAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/InjectionAwareInterface.zep){ .src-btn }

This interface must be implemented in those classes that uses internally the
Phalcon\Di\Di that creates them

<div class="api-tree" markdown>

- **`Phalcon\Di\InjectionAwareInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diinjectionawareinterface-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#diinjectionawareinterface-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injector</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDI()` { #diinjectionawareinterface-getdi }

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

#### `setDI()` { #diinjectionawareinterface-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\Service

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Service.zep){ .src-btn }

Represents individually a service in the services container

```php
$service = new \Phalcon\Di\Service(
    "request",
    \Phalcon\Http\Request::class
);

$request = service->resolve();
```

<div class="api-tree" markdown>

- **`Phalcon\Di\Service`** — implements [`Phalcon\Di\ServiceInterface`](#diserviceinterface)

</div>

__Uses__ `Closure` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate` · `Phalcon\Di\Service\Builder`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    mixed $definition,
    bool $shared = false
)</code>
<span class="desc">Phalcon\Di\Service</span>
</a>
<a class="api-item" href="#diservice-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getDefinition()</code>
<span class="desc">Returns the service definition</span>
</a>
<a class="api-item" href="#diservice-getparameter">
<code class="vis vis-public">public</code>
<code class="sig">getParameter( int $position )</code>
<span class="desc">Returns a parameter in a specific position</span>
</a>
<a class="api-item" href="#diservice-isresolved">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isResolved()</code>
<span class="desc">Returns true if the service was resolved</span>
</a>
<a class="api-item" href="#diservice-isshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isShared()</code>
<span class="desc">Check whether the service is shared or not</span>
</a>
<a class="api-item" href="#diservice-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">resolve(
    mixed $parameters = null,
    DiInterface $container = null
)</code>
<span class="desc">Resolves the service</span>
</a>
<a class="api-item" href="#diservice-setdefinition">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefinition( mixed $definition )</code>
<span class="desc">Set the service definition</span>
</a>
<a class="api-item" href="#diservice-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setParameter(
    int $position,
    array $parameter
)</code>
<span class="desc">Changes a parameter in the definition without resolve the service</span>
</a>
<a class="api-item" href="#diservice-setshared">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setShared( bool $shared )</code>
<span class="desc">Sets if the service is shared or not</span>
</a>
<a class="api-item" href="#diservice-setsharedinstance">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setSharedInstance( mixed $sharedInstance )</code>
<span class="desc">Sets/Resets the shared instance related to the service</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$definition` `mixed`

-   `protected`{ .vis-protected } `$resolved = false` `bool`

-   `protected`{ .vis-protected } `$shared = false` `bool`

-   `protected`{ .vis-protected } `$sharedInstance = null` `mixed|null`

</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #diservice-__construct }

```php
final public function __construct(
    mixed $definition,
    bool $shared = false
);
```

Phalcon\Di\Service

#### `getDefinition()` { #diservice-getdefinition }

```php
public function getDefinition(): mixed;
```

Returns the service definition

#### `getParameter()` { #diservice-getparameter }

```php
public function getParameter( int $position );
```

Returns a parameter in a specific position

#### `isResolved()` { #diservice-isresolved }

```php
public function isResolved(): bool;
```

Returns true if the service was resolved

#### `isShared()` { #diservice-isshared }

```php
public function isShared(): bool;
```

Check whether the service is shared or not

#### `resolve()` { #diservice-resolve }

```php
public function resolve(
    mixed $parameters = null,
    DiInterface $container = null
): mixed;
```

Resolves the service

#### `setDefinition()` { #diservice-setdefinition }

```php
public function setDefinition( mixed $definition ): void;
```

Set the service definition

#### `setParameter()` { #diservice-setparameter }

```php
public function setParameter(
    int $position,
    array $parameter
): ServiceInterface;
```

Changes a parameter in the definition without resolve the service

#### `setShared()` { #diservice-setshared }

```php
public function setShared( bool $shared ): void;
```

Sets if the service is shared or not

#### `setSharedInstance()` { #diservice-setsharedinstance }

```php
public function setSharedInstance( mixed $sharedInstance ): void;
```

Sets/Resets the shared instance related to the service


## Di\ServiceInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/ServiceInterface.zep){ .src-btn }

Represents a service in the services container

<div class="api-tree" markdown>

- **`Phalcon\Di\ServiceInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diserviceinterface-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getDefinition()</code>
<span class="desc">Returns the service definition</span>
</a>
<a class="api-item" href="#diserviceinterface-getparameter">
<code class="vis vis-public">public</code>
<code class="sig">getParameter( int $position )</code>
<span class="desc">Returns a parameter in a specific position</span>
</a>
<a class="api-item" href="#diserviceinterface-isresolved">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isResolved()</code>
<span class="desc">Returns true if the service was resolved</span>
</a>
<a class="api-item" href="#diserviceinterface-isshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isShared()</code>
<span class="desc">Check whether the service is shared or not</span>
</a>
<a class="api-item" href="#diserviceinterface-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">resolve(
    mixed $parameters = null,
    DiInterface $container = null
)</code>
<span class="desc">Resolves the service</span>
</a>
<a class="api-item" href="#diserviceinterface-setdefinition">
<code class="vis vis-public">public</code>
<code class="sig">setDefinition( mixed $definition )</code>
<span class="desc">Set the service definition</span>
</a>
<a class="api-item" href="#diserviceinterface-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setParameter(
    int $position,
    array $parameter
)</code>
<span class="desc">Changes a parameter in the definition without resolve the service</span>
</a>
<a class="api-item" href="#diserviceinterface-setshared">
<code class="vis vis-public">public</code>
<code class="sig">setShared( bool $shared )</code>
<span class="desc">Sets if the service is shared or not</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `getDefinition()` { #diserviceinterface-getdefinition }

```php
public function getDefinition(): mixed;
```

Returns the service definition

#### `getParameter()` { #diserviceinterface-getparameter }

```php
public function getParameter( int $position );
```

Returns a parameter in a specific position

#### `isResolved()` { #diserviceinterface-isresolved }

```php
public function isResolved(): bool;
```

Returns true if the service was resolved

#### `isShared()` { #diserviceinterface-isshared }

```php
public function isShared(): bool;
```

Check whether the service is shared or not

#### `resolve()` { #diserviceinterface-resolve }

```php
public function resolve(
    mixed $parameters = null,
    DiInterface $container = null
): mixed;
```

Resolves the service

#### `setDefinition()` { #diserviceinterface-setdefinition }

```php
public function setDefinition( mixed $definition );
```

Set the service definition

#### `setParameter()` { #diserviceinterface-setparameter }

```php
public function setParameter(
    int $position,
    array $parameter
): ServiceInterface;
```

Changes a parameter in the definition without resolve the service

#### `setShared()` { #diserviceinterface-setshared }

```php
public function setShared( bool $shared );
```

Sets if the service is shared or not


## Di\ServiceProviderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/ServiceProviderInterface.zep){ .src-btn }

Should be implemented by service providers, or such components, which
register a service in the service container.

```php
namespace Acme;

use Phalcon\Di\DiInterface;
use Phalcon\Di\ServiceProviderInterface;

class SomeServiceProvider implements ServiceProviderInterface
{
    public function register(DiInterface $di)
    {
        $di->setShared(
            'service',
            function () {
                // ...
            }
        );
    }
}
```

<div class="api-tree" markdown>

- **`Phalcon\Di\ServiceProviderInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diserviceproviderinterface-register">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">register( DiInterface $di )</code>
<span class="desc">Registers a service provider.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `register()` { #diserviceproviderinterface-register }

```php
public function register( DiInterface $di ): void;
```

Registers a service provider.


## Di\Service\Builder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Di/Service/Builder.zep){ .src-btn }

Phalcon\Di\Service\Builder

This class builds instances based on complex definitions

<div class="api-tree" markdown>

- **`Phalcon\Di\Service\Builder`**

</div>

__Uses__ `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Exceptions\ArgumentTypeRequired` · `Phalcon\Di\Exceptions\CallArgumentsMustBeArray` · `Phalcon\Di\Exceptions\MethodCallMustBeArray` · `Phalcon\Di\Exceptions\MethodNameRequired` · `Phalcon\Di\Exceptions\MissingClassNameParameter` · `Phalcon\Di\Exceptions\MissingParameterKey` · `Phalcon\Di\Exceptions\PropertyInjectionRequiresInstance` · `Phalcon\Di\Exceptions\PropertyMustBeArray` · `Phalcon\Di\Exceptions\PropertyNameRequired` · `Phalcon\Di\Exceptions\PropertyValueRequired` · `Phalcon\Di\Exceptions\SetterInjectionRequiresInstance` · `Phalcon\Di\Exceptions\SetterParametersMustBeArray` · `Phalcon\Di\Exceptions\UnknownServiceType`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diservicebuilder-build">
<code class="vis vis-public">public</code>
<code class="sig">build(
    DiInterface $container,
    array $definition,
    mixed $parameters = null
)</code>
<span class="desc">Builds a service using a complex service definition</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `build()` { #diservicebuilder-build }

```php
public function build(
    DiInterface $container,
    array $definition,
    mixed $parameters = null
);
```

Builds a service using a complex service definition
