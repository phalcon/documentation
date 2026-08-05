---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Di\AbstractInjectionAware

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/AbstractInjectionAware.php){ .src-btn }

This abstract class offers common access to the DI in a class

<div class="api-tree" markdown>

- `\stdClass`
    - **`Phalcon\Di\AbstractInjectionAware`** - implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
        - [`Phalcon\Cli\Router`](phalcon_cli.md#clirouter)
        - [`Phalcon\Dispatcher\AbstractDispatcher`](phalcon_dispatcher.md#dispatcherabstractdispatcher)
        - [`Phalcon\Encryption\Security`](phalcon_encryption.md#encryptionsecurity)
        - [`Phalcon\Http\Cookie`](phalcon_http.md#httpcookie)
        - [`Phalcon\Http\Request`](phalcon_http.md#httprequest)
        - [`Phalcon\Http\Response\Cookies`](phalcon_http.md#httpresponsecookies)
        - [`Phalcon\Mvc\Model`](phalcon_mvc.md#mvcmodel)
        - [`Phalcon\Mvc\Router`](phalcon_mvc.md#mvcrouter)
        - [`Phalcon\Mvc\Url`](phalcon_mvc.md#mvcurl)

</div>

__Uses__ `Phalcon\Di\Traits\InjectionAwareTrait` · `stdClass`
{ .api-uses }


## Di\Di

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Di.php){ .src-btn }

Phalcon\Di\Di is a component that implements Dependency Injection/Service
Location of services, and it's itself a container for them.

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

- `\stdClass`
    - **`Phalcon\Di\Di`** - implements [`Phalcon\Di\DiInterface`](#didiinterface)
        - [`Phalcon\Di\FactoryDefault`](#difactorydefault)

</div>

__Uses__ `Phalcon\Di\Exception` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\AliasAlreadyInUse` · `Phalcon\Di\Exceptions\AliasNameMustBeString` · `Phalcon\Di\Exceptions\CircularAliasReference` · `Phalcon\Di\Traits\DiArrayAccessTrait` · `Phalcon\Di\Traits\DiEventsTrait` · `Phalcon\Di\Traits\DiExceptionsTrait` · `Phalcon\Di\Traits\DiInstanceTrait` · `Phalcon\Di\Traits\DiLoadTrait` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#didi-__call">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__call</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Magic method to get or set services using setters/getters</span>
</a>
<a class="api-item" href="#didi-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
<span class="desc">Phalcon\Di\Di constructor</span>
</a>
<a class="api-item" href="#didi-attempt">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shared</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Attempts to register a service in the services container</span>
</a>
<a class="api-item" href="#didi-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Resolves the service based on its configuration</span>
</a>
<a class="api-item" href="#didi-getalias">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return the alias based on a passed key. Returns an empty string if</span>
</a>
<a class="api-item" href="#didi-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sf">getDefault</span>()</code>
<span class="desc">Return the latest DI created</span>
</a>
<a class="api-item" href="#didi-getinternaleventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getInternalEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#didi-getraw">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getRaw</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a service definition without resolving</span>
</a>
<a class="api-item" href="#didi-getservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a Phalcon\Di\Service instance</span>
</a>
<a class="api-item" href="#didi-getservices">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Return the services registered in the DI</span>
</a>
<a class="api-item" href="#didi-getshared">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getShared</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Resolves a service, the resolved service is stored in the DI, subsequent</span>
</a>
<a class="api-item" href="#didi-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check whether the DI contains a service by a name</span>
</a>
<a class="api-item" href="#didi-hasshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasShared</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check whether the DI has a cached shared instance for a service name.</span>
</a>
<a class="api-item" href="#didi-register">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">register</span>( <span class="st">ServiceProviderInterface</span> <span class="sv">$provider</span> )</code>
<span class="desc">Registers a service provider.</span>
</a>
<a class="api-item" href="#didi-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes a service in the services container</span>
</a>
<a class="api-item" href="#didi-removeshared">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">removeShared</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes the cached shared instance for a service, leaving the service</span>
</a>
<a class="api-item" href="#didi-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal default DI</span>
</a>
<a class="api-item" href="#didi-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shared</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Registers a service in the services container</span>
</a>
<a class="api-item" href="#didi-setalias">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setAlias</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$aliases</span></span>)</code>
<span class="desc">Sets one or more aliases to the given name.</span>
</a>
<a class="api-item" href="#didi-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefault</span>( <span class="st">object</span> <span class="sv">$container</span> )</code>
<span class="desc">Set a default dependency injection container to be obtained into static</span>
</a>
<a class="api-item" href="#didi-setinternaleventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setInternalEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the internal event manager</span>
</a>
<a class="api-item" href="#didi-setservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setService</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">ServiceInterface</span> <span class="sv">$rawDefinition</span></span>)</code>
<span class="desc">Sets a service using a raw Phalcon\Di\Service definition</span>
</a>
<a class="api-item" href="#didi-setshared">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setShared</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Registers an &quot;always shared&quot; service in the services container</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, string&gt;</code>
<code class="sig"><span class="sv">$aliases</span><span class="sm"> = []</span></code>
<span class="desc">List of service aliases</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sv">$defaultContainer</span><span class="sm"> = null</span></code>
<span class="desc">Latest DI build</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ServiceInterface[]</code>
<code class="sig"><span class="sv">$services</span><span class="sm"> = []</span></code>
<span class="desc">List of registered services</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$sharedInstances</span><span class="sm"> = []</span></code>
<span class="desc">List of shared instances</span>
</div>
</div>

### Methods

<div class="api-group">Public · 23</div>

#### `__call()` { #didi-__call }

```php
public function __call(
    string $method,
    array $arguments = []
);
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
);
```

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name

#### `get()` { #didi-get }

```php
public function get(
    string $name,
    array|null $parameters = null
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
public static function getDefault(): object|null;
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
public function getServices(): array;
```

Return the services registered in the DI

#### `getShared()` { #didi-getshared }

```php
public function getShared(
    string $name,
    array|null $parameters = null
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
    array|string $aliases
): self;
```

Sets one or more aliases to the given name.

#### `setDefault()` { #didi-setdefault }

```php
public static function setDefault( object $container ): void;
```

Set a default dependency injection container to be obtained into static
methods

#### `setInternalEventsManager()` { #didi-setinternaleventsmanager }

```php
public function setInternalEventsManager( ManagerInterface $eventsManager ): void;
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


## Di\DiInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/DiInterface.php){ .src-btn }

Interface for Phalcon\Di

<div class="api-tree" markdown>

- `\ArrayAccess`
    - **`Phalcon\Di\DiInterface`**

</div>

__Uses__ `ArrayAccess`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#didiinterface-attempt">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shared</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Attempts to register a service in the services container</span>
</a>
<a class="api-item" href="#didiinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Resolves the service based on its configuration</span>
</a>
<a class="api-item" href="#didiinterface-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sf">getDefault</span>()</code>
<span class="desc">Return the last DI created</span>
</a>
<a class="api-item" href="#didiinterface-getraw">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getRaw</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a service definition without resolving</span>
</a>
<a class="api-item" href="#didiinterface-getservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the corresponding Phalcon\Di\Service instance for a service</span>
</a>
<a class="api-item" href="#didiinterface-getservices">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Return the services registered in the DI</span>
</a>
<a class="api-item" href="#didiinterface-getshared">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getShared</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a shared service based on their configuration</span>
</a>
<a class="api-item" href="#didiinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check whether the DI contains a service by a name</span>
</a>
<a class="api-item" href="#didiinterface-hasshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasShared</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check whether the DI has a cached shared instance for a service name.</span>
</a>
<a class="api-item" href="#didiinterface-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes a service in the services container</span>
</a>
<a class="api-item" href="#didiinterface-removeshared">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">removeShared</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes the cached shared instance for a service, leaving the service</span>
</a>
<a class="api-item" href="#didiinterface-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal default DI</span>
</a>
<a class="api-item" href="#didiinterface-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shared</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Registers a service in the services container</span>
</a>
<a class="api-item" href="#didiinterface-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefault</span>( <span class="st">object</span> <span class="sv">$container</span> )</code>
<span class="desc">Set a default dependency injection container to be obtained into static</span>
</a>
<a class="api-item" href="#didiinterface-setservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setService</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">ServiceInterface</span> <span class="sv">$rawDefinition</span></span>)</code>
<span class="desc">Sets a service using a raw Phalcon\Di\Service definition</span>
</a>
<a class="api-item" href="#didiinterface-setshared">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setShared</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
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
);
```

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name

#### `get()` { #didiinterface-get }

```php
public function get(
    string $name,
    array|null $parameters = null
): mixed;
```

Resolves the service based on its configuration

#### `getDefault()` { #didiinterface-getdefault }

```php
public static function getDefault(): object|null;
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
public function getServices(): array;
```

Return the services registered in the DI

#### `getShared()` { #didiinterface-getshared }

```php
public function getShared(
    string $name,
    array|null $parameters = null
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
public static function setDefault( object $container ): void;
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exception.php){ .src-btn }

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


## Di\Exception\ServiceResolutionException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exception/ServiceResolutionException.php){ .src-btn }

Phalcon\Di\Exception\ServiceResolutionException

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Di\Exception`](#diexception)
        - **`Phalcon\Di\Exception\ServiceResolutionException`**

</div>

__Uses__ `Phalcon\Di\Exception`
{ .api-uses }


## Di\Exceptions\AliasAlreadyInUse

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/AliasAlreadyInUse.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$alias</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/AliasNameMustBeString.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/ArgumentTypeRequired.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/CallArgumentsMustBeArray.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/CircularAliasReference.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/ContainerRequired.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/DefinitionMustBeArrayForRead.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/DefinitionMustBeArrayForUpdate.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/MethodCallMustBeArray.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/MethodNameRequired.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/MissingClassNameParameter.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/MissingParameterKey.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span></span>)</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/PropertyInjectionRequiresInstance.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/PropertyMustBeArray.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/PropertyNameRequired.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/PropertyValueRequired.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/ServiceCannotBeResolved.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/SetterInjectionRequiresInstance.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/SetterParametersMustBeArray.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Exceptions/UnknownServiceType.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/FactoryDefault.php){ .src-btn }

This is a variant of the standard Phalcon\Di\Di. By default it automatically
registers all the services provided by the framework. Thanks to this, the
developer does not need to register each service individually providing a
full stack framework

@property Annotations        $annotations
@property AnnotationsMemory  $annotationsMemory
@property AssetsManager      $assets
@property Crypt              $crypt
@property Cookies            $cookies
@property Dispatcher         $dispatcher
@property Escaper            $escaper
@property EventsManager      $eventsManager
@property Factory            $modelsEventFactory
@property Direct             $flash
@property Session            $flashSession
@property Filter             $filter
@property HelperFactory      $helper
@property ModelsManager      $modelsManager
@property MetadataManager    $modelsMetadata
@property QueueFactory       $queueFactory
@property Request            $request
@property Response           $response
@property Router             $router
@property Security           $security
@property Settings           $settings
@property SerializerFactory  $storageSerializer
@property TagFactory         $tag
@property TransactionManager $transactionManager
@property Url                $url

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\Di`](#didi)
        - **`Phalcon\Di\FactoryDefault`**
            - [`Phalcon\Di\FactoryDefault\Cli`](#difactorydefaultcli)

</div>

__Uses__ `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Annotations` · `Phalcon\Assets\Manager` · `Phalcon\Db\Event\Factory` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterFactory` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\Response` · `Phalcon\Http\Response\Cookies` · `Phalcon\Mvc\Dispatcher` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\Url` · `Phalcon\Queue\QueueFactory` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#difactorydefault-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/FactoryDefault/Cli.php){ .src-btn }

Phalcon\Di\FactoryDefault\Cli

This is a variant of the standard Phalcon\Di. By default, it automatically
registers all the services provided by the framework.
Thanks to this, the developer does not need to register each service individually.
This class is specially suitable for CLI applications

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\Di`](#didi)
        - [`Phalcon\Di\FactoryDefault`](#difactorydefault)
            - **`Phalcon\Di\FactoryDefault\Cli`**

</div>

__Uses__ `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Annotations` · `Phalcon\Cli\Dispatcher` · `Phalcon\Cli\Router` · `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Service` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\FilterFactory` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Queue\QueueFactory` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#difactorydefaultcli-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/InitializationAwareInterface.php){ .src-btn }

Interface for components that have `initialize()`

<div class="api-tree" markdown>

- **`Phalcon\Di\InitializationAwareInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diinitializationawareinterface-initialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">initialize</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Injectable.php){ .src-btn }

This class allows to access services in the services container by just only
accessing a public property with the same name of a registered service

@property AnnotationsAdapterInterface|AnnotationsMemory $annotations
@property AssetsManager                                 $assets
@property DiInterface|null                              $container
@property DbAdapterInterface                            $db
@property DiInterface|null                              $di
@property Cookies|CookiesInterface                      $cookies
@property Crypt|CryptInterface                          $crypt
@property EventsManager|EventsManagerInterface          $eventsManager
@property Escaper|EscaperInterface                      $escaper
@property Direct                                        $flash
@property Session                                       $flashSession
@property Filter|FilterInterface                        $filter
@property HelperFactory                                 $helper
@property Bag|BagInterface                              $persistent
@property Request|RequestInterface                      $request
@property Response|ResponseInterface                    $response
@property Router|RouterInterface                        $router
@property Security                                      $security
@property SessionManager                                $session
@property Settings                                      $settings
@property Url|UrlInterface                              $url

// * @property Manager|ManagerInterface $modelsManager
// * @property AnnotationsMemory|MetadataInterface $modelsMetadata
// * @property ManagerInterface $transactionManager
// * @property View|ViewInterface $view

<div class="api-tree" markdown>

- `\stdClass`
    - **`Phalcon\Di\Injectable`** - implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
        - [`Phalcon\Application\AbstractApplication`](phalcon_application.md#applicationabstractapplication)
        - [`Phalcon\Cli\Task`](phalcon_cli.md#clitask)
        - [`Phalcon\Filter\Validation`](phalcon_filter.md#filtervalidation)
        - [`Phalcon\Forms\Form`](phalcon_forms.md#formsform)
        - [`Phalcon\Http\Response`](phalcon_http.md#httpresponse)
        - [`Phalcon\Mvc\Controller`](phalcon_mvc.md#mvccontroller)
        - [`Phalcon\Mvc\Micro`](phalcon_mvc.md#mvcmicro)
        - [`Phalcon\Mvc\Model\MetaData`](phalcon_mvc.md#mvcmodelmetadata)
        - [`Phalcon\Mvc\View`](phalcon_mvc.md#mvcview)
        - [`Phalcon\Mvc\View\Engine\AbstractEngine`](phalcon_mvc.md#mvcviewengineabstractengine)
        - [`Phalcon\Mvc\View\Simple`](phalcon_mvc.md#mvcviewsimple)

</div>

__Uses__ `Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Assets\Manager` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterInterface` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Http\Request` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Http\Response\Cookies` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Url` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Session\Bag` · `Phalcon\Session\BagInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings` · `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diinjectable-__get">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$propertyName</span> )</code>
<span class="desc">Magic method __get</span>
</a>
<a class="api-item" href="#diinjectable-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Magic method __isset</span>
</a>
<a class="api-item" href="#diinjectable-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface|null</code>
<code class="sig"><span class="sf">getDI</span>()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__get()` { #diinjectable-__get }

```php
public function __get( string $propertyName );
```

Magic method __get

#### `__isset()` { #diinjectable-__isset }

```php
public function __isset( string $name ): bool;
```

Magic method __isset

#### `getDI()` { #diinjectable-getdi }

```php
public function getDI(): DiInterface|null;
```

Returns the internal dependency injector


## Di\InjectionAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/InjectionAwareInterface.php){ .src-btn }

This interface must be implemented in those classes that uses internally the
Phalcon\Di that creates them

<div class="api-tree" markdown>

- **`Phalcon\Di\InjectionAwareInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diinjectionawareinterface-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface|null</code>
<code class="sig"><span class="sf">getDI</span>()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#diinjectionawareinterface-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDI</span>( <span class="st">DiInterface</span> <span class="sv">$container</span> )</code>
<span class="desc">Sets the dependency injector</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDI()` { #diinjectionawareinterface-getdi }

```php
public function getDI(): DiInterface|null;
```

Returns the internal dependency injector

#### `setDI()` { #diinjectionawareinterface-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\Service

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Service.php){ .src-btn }

Represents individually a service in the services container

```php
$service = new \Phalcon\Di\Service(
    "request",
    \Phalcon\Http\Request::class
);

$request = service->resolve();
```

@property array $definition
@property bool  $resolved
@property bool  $shared
@property mixed $sharedInstance

<div class="api-tree" markdown>

- **`Phalcon\Di\Service`** - implements [`Phalcon\Di\ServiceInterface`](#diserviceinterface)

</div>

__Uses__ `Closure` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate` · `Phalcon\Di\Service\Builder` · `Phalcon\Di\Traits\DiInstanceTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shared</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Service constructor.</span>
</a>
<a class="api-item" href="#diservice-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getDefinition</span>()</code>
<span class="desc">Returns the service definition</span>
</a>
<a class="api-item" href="#diservice-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
<span class="desc">Returns a parameter in a specific position</span>
</a>
<a class="api-item" href="#diservice-isresolved">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isResolved</span>()</code>
<span class="desc">Returns true if the service was resolved</span>
</a>
<a class="api-item" href="#diservice-isshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isShared</span>()</code>
<span class="desc">Check whether the service is shared or not</span>
</a>
<a class="api-item" href="#diservice-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>(<span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">DiInterface|null</span> <span class="sv">$container</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Resolves the service</span>
</a>
<a class="api-item" href="#diservice-setdefinition">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefinition</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Set the service definition</span>
</a>
<a class="api-item" href="#diservice-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setParameter</span>(<span class="prm"><span class="st">int</span> <span class="sv">$position</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameter</span></span>)</code>
<span class="desc">Changes a parameter in the definition without resolve the service</span>
</a>
<a class="api-item" href="#diservice-setshared">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setShared</span>( <span class="st">bool</span> <span class="sv">$shared</span> )</code>
<span class="desc">Sets if the service is shared or not</span>
</a>
<a class="api-item" href="#diservice-setsharedinstance">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setSharedInstance</span>( <span class="st">mixed</span> <span class="sv">$sharedInstance</span> )</code>
<span class="desc">Sets/Resets the shared instance related to the service</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$definition</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$resolved</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$shared</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$sharedInstance</span></code>
</div>
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

Service constructor.

#### `getDefinition()` { #diservice-getdefinition }

```php
public function getDefinition(): mixed;
```

Returns the service definition

#### `getParameter()` { #diservice-getparameter }

```php
public function getParameter( int $position ): mixed;
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
    array|null $parameters = null,
    DiInterface|null $container = null
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/ServiceInterface.php){ .src-btn }

Represents a service in the services container

<div class="api-tree" markdown>

- **`Phalcon\Di\ServiceInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#diserviceinterface-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getDefinition</span>()</code>
<span class="desc">Returns the service definition</span>
</a>
<a class="api-item" href="#diserviceinterface-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>( <span class="st">int</span> <span class="sv">$position</span> )</code>
<span class="desc">Returns a parameter in a specific position</span>
</a>
<a class="api-item" href="#diserviceinterface-isresolved">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isResolved</span>()</code>
<span class="desc">Returns true if the service was resolved</span>
</a>
<a class="api-item" href="#diserviceinterface-isshared">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isShared</span>()</code>
<span class="desc">Check whether the service is shared or not</span>
</a>
<a class="api-item" href="#diserviceinterface-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>(<span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">DiInterface|null</span> <span class="sv">$container</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Resolves the service</span>
</a>
<a class="api-item" href="#diserviceinterface-setdefinition">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">setDefinition</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Set the service definition</span>
</a>
<a class="api-item" href="#diserviceinterface-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setParameter</span>(<span class="prm"><span class="st">int</span> <span class="sv">$position</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameter</span></span>)</code>
<span class="desc">Changes a parameter in the definition without resolve the service</span>
</a>
<a class="api-item" href="#diserviceinterface-setshared">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">setShared</span>( <span class="st">bool</span> <span class="sv">$shared</span> )</code>
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
public function getParameter( int $position ): mixed;
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
    array|null $parameters = null,
    DiInterface|null $container = null
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/ServiceProviderInterface.php){ .src-btn }

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
<code class="sig"><span class="sf">register</span>( <span class="st">DiInterface</span> <span class="sv">$container</span> )</code>
<span class="desc">Registers a service provider.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `register()` { #diserviceproviderinterface-register }

```php
public function register( DiInterface $container ): void;
```

Registers a service provider.


## Di\Service\Builder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Service/Builder.php){ .src-btn }

This class builds instances based on complex definitions

<div class="api-tree" markdown>

- **`Phalcon\Di\Service\Builder`**

</div>

__Uses__ `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Traits\DiExceptionsTrait` · `Phalcon\Di\Traits\DiInstanceTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#diservicebuilder-build">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">build</span>(<span class="prm"><span class="st">DiInterface</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
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
    array|null $parameters = null
);
```

Builds a service using a complex service definition


## Di\Traits\DiArrayAccessTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Traits/DiArrayAccessTrait.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Di\Traits\DiArrayAccessTrait`**

</div>

__Uses__ `Phalcon\Di\Exception` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\ServiceInterface` · `ReturnTypeWillChange`
{ .api-uses }

__Used by__ [`Phalcon\Di\Di`](#didi)
{ .api-used-by }

### Method Summary

<div class="api-list">
<a class="api-item" href="#ditraitsdiarrayaccesstrait-getshared">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getShared</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Resolves a service, the resolved service is stored in the DI, subsequent</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check whether the DI contains a service by a name</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if a service is registered using the array syntax</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-offsetget">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$name</span> )</code>
<span class="desc">Allows to obtain a shared service using the array syntax</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Allows to register a shared service using the array syntax</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes a service from the services container using the array syntax</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes a service in the services container</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shared</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Registers a service in the services container</span>
</a>
<a class="api-item" href="#ditraitsdiarrayaccesstrait-setshared">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig"><span class="sf">setShared</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Registers an &quot;always shared&quot; service in the services container</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `getShared()` { #ditraitsdiarrayaccesstrait-getshared }

```php
abstract public function getShared(
    string $name,
    array|null $parameters = null
);
```

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance

#### `has()` { #ditraitsdiarrayaccesstrait-has }

```php
abstract public function has( string $name ): bool;
```

Check whether the DI contains a service by a name

#### `offsetExists()` { #ditraitsdiarrayaccesstrait-offsetexists }

```php
public function offsetExists( mixed $name ): bool;
```

Check if a service is registered using the array syntax

#### `offsetGet()` { #ditraitsdiarrayaccesstrait-offsetget }

```php
public function offsetGet( mixed $name );
```

Allows to obtain a shared service using the array syntax

```php
var_dump($di["request"]);
```

#### `offsetSet()` { #ditraitsdiarrayaccesstrait-offsetset }

```php
public function offsetSet(
    mixed $name,
    mixed $definition
): void;
```

Allows to register a shared service using the array syntax

```php
$di["request"] = new \Phalcon\Http\Request();
```

#### `offsetUnset()` { #ditraitsdiarrayaccesstrait-offsetunset }

```php
public function offsetUnset( mixed $name ): void;
```

Removes a service from the services container using the array syntax

#### `remove()` { #ditraitsdiarrayaccesstrait-remove }

```php
abstract public function remove( string $name ): void;
```

Removes a service in the services container
It also removes any shared instance created for the service

#### `set()` { #ditraitsdiarrayaccesstrait-set }

```php
abstract public function set(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface;
```

Registers a service in the services container

#### `setShared()` { #ditraitsdiarrayaccesstrait-setshared }

```php
public function setShared(
    string $name,
    mixed $definition
): ServiceInterface;
```

Registers an "always shared" service in the services container


## Di\Traits\DiEventsTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Traits/DiEventsTrait.php){ .src-btn }

Trait DiEventsTrait

<div class="api-tree" markdown>

- **`Phalcon\Di\Traits\DiEventsTrait`**

</div>

__Uses__ `Phalcon\Events\ManagerInterface`
{ .api-uses }

__Used by__ [`Phalcon\Di\Di`](#didi)
{ .api-used-by }


## Di\Traits\DiExceptionsTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Traits/DiExceptionsTrait.php){ .src-btn }

Trait DiExceptionsTrait

@package Phalcon\Di\Traits

<div class="api-tree" markdown>

- **`Phalcon\Di\Traits\DiExceptionsTrait`**

</div>

__Uses__ `Phalcon\Di\Exception` · `Phalcon\Di\Exceptions\MissingParameterKey`
{ .api-uses }

__Used by__ [`Phalcon\Di\Di`](#didi) · [`Phalcon\Di\Service\Builder`](#diservicebuilder)
{ .api-used-by }


## Di\Traits\DiInstanceTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Traits/DiInstanceTrait.php){ .src-btn }

Trait DiInstanceTrait

@package Phalcon\Di\Traits

<div class="api-tree" markdown>

- **`Phalcon\Di\Traits\DiInstanceTrait`**

</div>

__Used by__ [`Phalcon\Di\Di`](#didi) · [`Phalcon\Di\Service`](#diservice) · [`Phalcon\Di\Service\Builder`](#diservicebuilder)
{ .api-used-by }


## Di\Traits\DiLoadTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Traits/DiLoadTrait.php){ .src-btn }

Trait DiLoadTrait

@package Phalcon\Di\Traits

<div class="api-tree" markdown>

- **`Phalcon\Di\Traits\DiLoadTrait`**

</div>

__Uses__ `Phalcon\Config\Adapter\Php` · `Phalcon\Config\Adapter\Yaml` · `Phalcon\Config\ConfigInterface`
{ .api-uses }

__Used by__ [`Phalcon\Di\Di`](#didi)
{ .api-used-by }

### Method Summary

<div class="api-list">
<a class="api-item" href="#ditraitsdiloadtrait-loadfromphp">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">loadFromPhp</span>( <span class="st">string</span> <span class="sv">$filePath</span> )</code>
<span class="desc">Loads services from a php config file.</span>
</a>
<a class="api-item" href="#ditraitsdiloadtrait-loadfromyaml">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">loadFromYaml</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$callbacks</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Loads services from a yaml file.</span>
</a>
<a class="api-item" href="#ditraitsdiloadtrait-loadfromconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">loadFromConfig</span>( <span class="st">ConfigInterface</span> <span class="sv">$config</span> )</code>
<span class="desc">Loads services from a Config object.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `loadFromPhp()` { #ditraitsdiloadtrait-loadfromphp }

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

@link https://docs.phalcon.io/en/latest/di

#### `loadFromYaml()` { #ditraitsdiloadtrait-loadfromyaml }

```php
public function loadFromYaml(
    string $filePath,
    array|null $callbacks = null
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

@link https://docs.phalcon.io/latest/di

<div class="api-group">Protected · 1</div>

#### `loadFromConfig()` { #ditraitsdiloadtrait-loadfromconfig }

```php
protected function loadFromConfig( ConfigInterface $config ): void;
```

Loads services from a Config object.


## Di\Traits\InjectionAwareTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Di/Traits/InjectionAwareTrait.php){ .src-btn }

This abstract class offers common access to the DI in a class

Class AbstractInjectionAware

@package Phalcon\Di

@property object $container

<div class="api-tree" markdown>

- **`Phalcon\Di\Traits\InjectionAwareTrait`**

</div>

__Uses__ `Phalcon\Di\DiInterface`
{ .api-uses }

__Used by__ [`Phalcon\Assets\Manager`](phalcon_assets.md#assetsmanager) · [`Phalcon\Di\AbstractInjectionAware`](#diabstractinjectionaware) · [`Phalcon\Di\Injectable`](#diinjectable) · [`Phalcon\Flash\AbstractFlash`](phalcon_flash.md#flashabstractflash) · [`Phalcon\Mvc\Model\Manager`](phalcon_mvc.md#mvcmodelmanager) · [`Phalcon\Mvc\Model\Query`](phalcon_mvc.md#mvcmodelquery) · [`Phalcon\Mvc\View\Engine\Volt\Compiler`](phalcon_mvc.md#mvcviewenginevoltcompiler) · [`Phalcon\Session\Bag`](phalcon_session.md#sessionbag) · [`Phalcon\Session\Manager`](phalcon_session.md#sessionmanager)
{ .api-used-by }

### Method Summary

<div class="api-list">
<a class="api-item" href="#ditraitsinjectionawaretrait-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface|null</code>
<code class="sig"><span class="sf">getDI</span>()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#ditraitsinjectionawaretrait-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDI</span>( <span class="st">DiInterface</span> <span class="sv">$container</span> )</code>
<span class="desc">Sets the dependency injector</span>
</a>
<a class="api-item" href="#ditraitsinjectionawaretrait-checkcontainer">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkContainer</span>(<span class="prm"><span class="st">string</span> <span class="sv">$exceptionClass</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 0</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sv">$container</span><span class="sm"> = null</span></code>
<span class="desc">Dependency Injector</span>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDI()` { #ditraitsinjectionawaretrait-getdi }

```php
public function getDI(): DiInterface|null;
```

Returns the internal dependency injector

#### `setDI()` { #ditraitsinjectionawaretrait-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector

<div class="api-group">Protected · 1</div>

#### `checkContainer()` { #ditraitsinjectionawaretrait-checkcontainer }

```php
protected function checkContainer(
    string $exceptionClass,
    string $message,
    int $code = 0
): void;
```
