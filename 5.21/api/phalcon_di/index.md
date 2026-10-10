---
title: "Phalcon Di"
version: "5.21"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Di

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Di\AbstractInjectionAware

Abstract

This abstract class offers common access to the DI in a class

- `\stdClass`
  - **`Phalcon\Di\AbstractInjectionAware`** - implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
    - [`Phalcon\Assets\Manager`](/5.21/api/phalcon_assets/#assetsmanager)
    - [`Phalcon\Cli\Router`](/5.21/api/phalcon_cli/#clirouter)
    - [`Phalcon\Dispatcher\AbstractDispatcher`](/5.21/api/phalcon_dispatcher/#dispatcherabstractdispatcher)
    - [`Phalcon\Encryption\Security`](/5.21/api/phalcon_encryption/#encryptionsecurity)
    - [`Phalcon\Flash\AbstractFlash`](/5.21/api/phalcon_flash/#flashabstractflash)
    - [`Phalcon\Http\Cookie`](/5.21/api/phalcon_http/#httpcookie)
    - [`Phalcon\Http\Request`](/5.21/api/phalcon_http/#httprequest)
    - [`Phalcon\Http\Response\Cookies`](/5.21/api/phalcon_http/#httpresponsecookies)
    - [`Phalcon\Mvc\Model`](/5.21/api/phalcon_mvc/#mvcmodel)
    - [`Phalcon\Mvc\Router`](/5.21/api/phalcon_mvc/#mvcrouter)
    - [`Phalcon\Mvc\Url`](/5.21/api/phalcon_mvc/#mvcurl)
    - [`Phalcon\Session\Manager`](/5.21/api/phalcon_session/#sessionmanager)

`stdClass`

### Method Summary

- `public getDI(): DiInterface` — Returns the internal dependency injector

- `public setDI(DiInterface $container): void` — Sets the dependency injector

### Properties

- `protected DiInterface $container` — Dependency Injector

### Methods

<h4 id="diabstractinjectionaware-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

<h4 id="diabstractinjectionaware-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\Di

Class

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

- **`Phalcon\Di\Di`** - implements [`Phalcon\Di\DiInterface`](#didiinterface)
  - [`Phalcon\Di\FactoryDefault`](#difactorydefault)

`Phalcon\Config\Adapter\Php` · `Phalcon\Config\Adapter\Yaml` · `Phalcon\Config\ConfigInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\AliasAlreadyInUse` · `Phalcon\Di\Exceptions\AliasNameMustBeString` · `Phalcon\Di\Exceptions\CircularAliasReference` · `Phalcon\Di\Exceptions\ServiceCannotBeResolved` · `Phalcon\Di\InitializationAwareInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Service` · `Phalcon\Di\ServiceInterface` · `Phalcon\Di\ServiceProviderInterface` · `Phalcon\Events\ManagerInterface`

### Method Summary

- `public __call(string $method, array $arguments = []): mixed|null` — Magic method to get or set services using setters/getters

- `public __construct()` — Phalcon\Di\Di constructor

- `public attempt(string $name, mixed $definition, bool $shared = false): ServiceInterface|bool` — Attempts to register a service in the services container

- `public get(string $name, mixed $parameters = null): mixed` — Resolves the service based on its configuration

- `public getAlias(string $name): string` — Return the alias based on a passed key. Returns an empty string if

- `public getDefault(): DiInterface|null` — Return the latest DI created

- `public getInternalEventsManager(): ManagerInterface|null` — Returns the internal event manager

- `public getRaw(string $name): mixed` — Returns a service definition without resolving

- `public getService(string $name): ServiceInterface` — Returns a Phalcon\Di\Service instance

- `public getServices(): ServiceInterface[]` — Return the services registered in the DI

- `public getShared(string $name, mixed $parameters = null): mixed` — Resolves a service, the resolved service is stored in the DI, subsequent

- `public has(string $name): bool` — Check whether the DI contains a service by a name

- `public hasShared(string $name): bool` — Check whether the DI has a cached shared instance for a service name.

- `public loadFromPhp(string $filePath): void` — Loads services from a php config file.

- `public loadFromYaml(string $filePath, array|null $callbacks = null): void` — Loads services from a yaml file.

- `public offsetExists(mixed $name): bool` — Check if a service is registered using the array syntax

- `public offsetGet(mixed $name): mixed` — Allows to obtain a shared service using the array syntax

- `public offsetSet(mixed $offset, mixed $value): void` — Allows to register a shared service using the array syntax

- `public offsetUnset(mixed $name): void` — Removes a service from the services container using the array syntax

- `public register(ServiceProviderInterface $provider): void` — Registers a service provider.

- `public remove(string $name): void` — Removes a service in the services container

- `public removeShared(string $name): void` — Removes the cached shared instance for a service, leaving the service

- `public reset(): void` — Resets the internal default DI

- `public set(string $name, mixed $definition, bool $shared = false): ServiceInterface` — Registers a service in the services container

- `public setAlias(string $name, mixed $aliases): self` — Sets one or more aliases to the given name.

- `public setDefault(DiInterface $container): void` — Set a default dependency injection container to be obtained into static

- `public setInternalEventsManager(ManagerInterface $eventsManager)` — Sets the internal event manager

- `public setService(string $name, ServiceInterface $rawDefinition): ServiceInterface` — Sets a service using a raw Phalcon\Di\Service definition

- `public setShared(string $name, mixed $definition): ServiceInterface` — Registers an "always shared" service in the services container

- `protected loadFromConfig(ConfigInterface $config): void` — Loads services from a Config object.

### Properties

- `protected array $aliases = []` — List of service aliases

- `protected DiInterface|null $defaultContainer = null` — Latest DI build

- `protected ManagerInterface|null $eventsManager = null` — Events Manager

- `protected ServiceInterface[] $services = []` — List of registered services

- `protected array $sharedInstances = []` — List of shared instances

### Methods

<h4 id="didi-__call"><code>__call()</code></h4>

```php
public function __call(
    string $method,
    array $arguments = []
): mixed|null;
```

Magic method to get or set services using setters/getters

<h4 id="didi-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Phalcon\Di\Di constructor

<h4 id="didi-attempt"><code>attempt()</code></h4>

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

<h4 id="didi-get"><code>get()</code></h4>

```php
public function get(
    string $name,
    mixed $parameters = null
): mixed;
```

Resolves the service based on its configuration

<h4 id="didi-getalias"><code>getAlias()</code></h4>

```php
public function getAlias( string $name ): string;
```

Return the alias based on a passed key. Returns an empty string if
the alias does not exist

<h4 id="didi-getdefault"><code>getDefault()</code></h4>

```php
public static function getDefault(): DiInterface|null;
```

Return the latest DI created

<h4 id="didi-getinternaleventsmanager"><code>getInternalEventsManager()</code></h4>

```php
public function getInternalEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

<h4 id="didi-getraw"><code>getRaw()</code></h4>

```php
public function getRaw( string $name ): mixed;
```

Returns a service definition without resolving

<h4 id="didi-getservice"><code>getService()</code></h4>

```php
public function getService( string $name ): ServiceInterface;
```

Returns a Phalcon\Di\Service instance

<h4 id="didi-getservices"><code>getServices()</code></h4>

```php
public function getServices(): ServiceInterface[];
```

Return the services registered in the DI

<h4 id="didi-getshared"><code>getShared()</code></h4>

```php
public function getShared(
    string $name,
    mixed $parameters = null
): mixed;
```

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance

<h4 id="didi-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check whether the DI contains a service by a name

<h4 id="didi-hasshared"><code>hasShared()</code></h4>

```php
public function hasShared( string $name ): bool;
```

Check whether the DI has a cached shared instance for a service name.

Unlike `has()`, which reports on the service *definition* registry,
this method reports only on the resolved-instance cache populated by
`getShared()`.

<h4 id="didi-loadfromphp"><code>loadFromPhp()</code></h4>

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

<h4 id="didi-loadfromyaml"><code>loadFromYaml()</code></h4>

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

@link https://docs.phalcon.io/latest/di/

<h4 id="didi-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $name ): bool;
```

Check if a service is registered using the array syntax

<h4 id="didi-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $name ): mixed;
```

Allows to obtain a shared service using the array syntax

```php
var_dump($di["request"]);
```

<h4 id="didi-offsetset"><code>offsetSet()</code></h4>

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

<h4 id="didi-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $name ): void;
```

Removes a service from the services container using the array syntax

<h4 id="didi-register"><code>register()</code></h4>

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

<h4 id="didi-remove"><code>remove()</code></h4>

```php
public function remove( string $name ): void;
```

Removes a service in the services container
It also removes any shared instance created for the service

<h4 id="didi-removeshared"><code>removeShared()</code></h4>

```php
public function removeShared( string $name ): void;
```

Removes the cached shared instance for a service, leaving the service
definition intact so the next `getShared()` call rebuilds it.

<h4 id="didi-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Resets the internal default DI

<h4 id="didi-set"><code>set()</code></h4>

```php
public function set(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface;
```

Registers a service in the services container

<h4 id="didi-setalias"><code>setAlias()</code></h4>

```php
public function setAlias(
    string $name,
    mixed $aliases
): self;
```

Sets one or more aliases to the given name.

<h4 id="didi-setdefault"><code>setDefault()</code></h4>

```php
public static function setDefault( DiInterface $container ): void;
```

Set a default dependency injection container to be obtained into static
methods

<h4 id="didi-setinternaleventsmanager"><code>setInternalEventsManager()</code></h4>

```php
public function setInternalEventsManager( ManagerInterface $eventsManager );
```

Sets the internal event manager

<h4 id="didi-setservice"><code>setService()</code></h4>

```php
public function setService(
    string $name,
    ServiceInterface $rawDefinition
): ServiceInterface;
```

Sets a service using a raw Phalcon\Di\Service definition

<h4 id="didi-setshared"><code>setShared()</code></h4>

```php
public function setShared(
    string $name,
    mixed $definition
): ServiceInterface;
```

Registers an "always shared" service in the services container

<h4 id="didi-loadfromconfig"><code>loadFromConfig()</code></h4>

```php
protected function loadFromConfig( ConfigInterface $config ): void;
```

Loads services from a Config object.


## Di\DiInterface

Interface

Interface for Phalcon\Di\Di

- `\ArrayAccess`
  - **`Phalcon\Di\DiInterface`**

`ArrayAccess`

### Method Summary

- `public attempt(string $name, mixed $definition, bool $shared = false): ServiceInterface|bool` — Attempts to register a service in the services container

- `public get(string $name, mixed $parameters = null): mixed` — Resolves the service based on its configuration

- `public getDefault(): DiInterface|null` — Return the last DI created

- `public getRaw(string $name): mixed` — Returns a service definition without resolving

- `public getService(string $name): ServiceInterface` — Returns the corresponding Phalcon\Di\Service instance for a service

- `public getServices(): ServiceInterface[]` — Return the services registered in the DI

- `public getShared(string $name, mixed $parameters = null): mixed` — Returns a shared service based on their configuration

- `public has(string $name): bool` — Check whether the DI contains a service by a name

- `public hasShared(string $name): bool` — Check whether the DI has a cached shared instance for a service name.

- `public remove(string $name): void` — Removes a service in the services container

- `public removeShared(string $name): void` — Removes the cached shared instance for a service, leaving the service

- `public reset(): void` — Resets the internal default DI

- `public set(string $name, mixed $definition, bool $shared = false): ServiceInterface` — Registers a service in the services container

- `public setDefault(DiInterface $container): void` — Set a default dependency injection container to be obtained into static

- `public setService(string $name, ServiceInterface $rawDefinition): ServiceInterface` — Sets a service using a raw Phalcon\Di\Service definition

- `public setShared(string $name, mixed $definition): ServiceInterface` — Registers an "always shared" service in the services container

### Methods

<h4 id="didiinterface-attempt"><code>attempt()</code></h4>

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

<h4 id="didiinterface-get"><code>get()</code></h4>

```php
public function get(
    string $name,
    mixed $parameters = null
): mixed;
```

Resolves the service based on its configuration

<h4 id="didiinterface-getdefault"><code>getDefault()</code></h4>

```php
public static function getDefault(): DiInterface|null;
```

Return the last DI created

<h4 id="didiinterface-getraw"><code>getRaw()</code></h4>

```php
public function getRaw( string $name ): mixed;
```

Returns a service definition without resolving

<h4 id="didiinterface-getservice"><code>getService()</code></h4>

```php
public function getService( string $name ): ServiceInterface;
```

Returns the corresponding Phalcon\Di\Service instance for a service

<h4 id="didiinterface-getservices"><code>getServices()</code></h4>

```php
public function getServices(): ServiceInterface[];
```

Return the services registered in the DI

<h4 id="didiinterface-getshared"><code>getShared()</code></h4>

```php
public function getShared(
    string $name,
    mixed $parameters = null
): mixed;
```

Returns a shared service based on their configuration

<h4 id="didiinterface-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check whether the DI contains a service by a name

<h4 id="didiinterface-hasshared"><code>hasShared()</code></h4>

```php
public function hasShared( string $name ): bool;
```

Check whether the DI has a cached shared instance for a service name.

Unlike `has()`, which reports on the service *definition* registry,
this method reports only on the resolved-instance cache populated by
`getShared()`. A service can be registered (`has()` returns true)
without yet having a shared instance (`hasShared()` returns false).

<h4 id="didiinterface-remove"><code>remove()</code></h4>

```php
public function remove( string $name ): void;
```

Removes a service in the services container

<h4 id="didiinterface-removeshared"><code>removeShared()</code></h4>

```php
public function removeShared( string $name ): void;
```

Removes the cached shared instance for a service, leaving the service
definition intact so the next `getShared()` call rebuilds it.

Useful in fork-based multi-process setups where a child inherits the
parent's resource handle (e.g. a database connection) and needs to
discard the cached instance without re-registering the service.

<h4 id="didiinterface-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Resets the internal default DI

<h4 id="didiinterface-set"><code>set()</code></h4>

```php
public function set(
    string $name,
    mixed $definition,
    bool $shared = false
): ServiceInterface;
```

Registers a service in the services container

<h4 id="didiinterface-setdefault"><code>setDefault()</code></h4>

```php
public static function setDefault( DiInterface $container ): void;
```

Set a default dependency injection container to be obtained into static
methods

<h4 id="didiinterface-setservice"><code>setService()</code></h4>

```php
public function setService(
    string $name,
    ServiceInterface $rawDefinition
): ServiceInterface;
```

Sets a service using a raw Phalcon\Di\Service definition

<h4 id="didiinterface-setshared"><code>setShared()</code></h4>

```php
public function setShared(
    string $name,
    mixed $definition
): ServiceInterface;
```

Registers an "always shared" service in the services container


## Di\Exception

Class

Exceptions thrown in Phalcon\Di will use this class

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

### Method Summary

- `public serviceCannotBeResolved(string $name): Exception`

- `public serviceNotFound(string $name): Exception`

- `public undefinedMethod(string $method): Exception`

- `public unknownServiceInParameter(int $position): Exception`

### Methods

<h4 id="diexception-servicecannotberesolved"><code>serviceCannotBeResolved()</code></h4>

```php
public static function serviceCannotBeResolved( string $name ): Exception;
```

<h4 id="diexception-servicenotfound"><code>serviceNotFound()</code></h4>

```php
public static function serviceNotFound( string $name ): Exception;
```

<h4 id="diexception-undefinedmethod"><code>undefinedMethod()</code></h4>

```php
public static function undefinedMethod( string $method ): Exception;
```

<h4 id="diexception-unknownserviceinparameter"><code>unknownServiceInParameter()</code></h4>

```php
public static function unknownServiceInParameter( int $position ): Exception;
```


## Di\Exception\ServiceResolutionException

Class

Phalcon\Di\Exception\ServiceResolutionException

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exception\ServiceResolutionException`**


## Di\Exceptions\AliasAlreadyInUse

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\AliasAlreadyInUse`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(string $alias)`

### Methods

<h4 id="diexceptionsaliasalreadyinuse-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $alias );
```


## Di\Exceptions\AliasNameMustBeString

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\AliasNameMustBeString`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionsaliasnamemustbestring-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\ArgumentTypeRequired

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\ArgumentTypeRequired`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionsargumenttyperequired-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\CallArgumentsMustBeArray

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\CallArgumentsMustBeArray`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionscallargumentsmustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\CircularAliasReference

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\CircularAliasReference`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="diexceptionscircularaliasreference-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Di\Exceptions\ContainerRequired

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\ContainerRequired`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\DefinitionMustBeArrayForRead

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionsdefinitionmustbearrayforread-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\DefinitionMustBeArrayForUpdate

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionsdefinitionmustbearrayforupdate-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\MethodCallMustBeArray

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\MethodCallMustBeArray`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionsmethodcallmustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\MethodNameRequired

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\MethodNameRequired`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionsmethodnamerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\MissingClassNameParameter

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\MissingClassNameParameter`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionsmissingclassnameparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\MissingParameterKey

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\MissingParameterKey`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(string $key, int $position)`

### Methods

<h4 id="diexceptionsmissingparameterkey-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $key,
    int $position
);
```


## Di\Exceptions\PropertyInjectionRequiresInstance

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\PropertyInjectionRequiresInstance`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionspropertyinjectionrequiresinstance-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\PropertyMustBeArray

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\PropertyMustBeArray`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionspropertymustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\PropertyNameRequired

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\PropertyNameRequired`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionspropertynamerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\PropertyValueRequired

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\PropertyValueRequired`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionspropertyvaluerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\Exceptions\ServiceCannotBeResolved

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\ServiceCannotBeResolved`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="diexceptionsservicecannotberesolved-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Di\Exceptions\SetterInjectionRequiresInstance

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\SetterInjectionRequiresInstance`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionssetterinjectionrequiresinstance-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\SetterParametersMustBeArray

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\SetterParametersMustBeArray`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="diexceptionssetterparametersmustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Di\Exceptions\UnknownServiceType

Class

- `\Exception`
  - [`Phalcon\Di\Exception`](#diexception)
    - **`Phalcon\Di\Exceptions\UnknownServiceType`**

`Phalcon\Di\Exception`

### Method Summary

- `public __construct(int $position)`

### Methods

<h4 id="diexceptionsunknownservicetype-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $position );
```


## Di\FactoryDefault

Class

This is a variant of the standard Phalcon\Di\Di. By default it automatically
registers all the services provided by the framework. Thanks to this, the
developer does not need to register each service individually providing a
full stack framework

- [`Phalcon\Di\Di`](#didi)
  - **`Phalcon\Di\FactoryDefault`**
    - [`Phalcon\Di\FactoryDefault\Cli`](#difactorydefaultcli)

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Assets\Manager` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\FilterFactory` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\Response` · `Phalcon\Http\Response\Cookies` · `Phalcon\Mvc\Dispatcher` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\Url` · `Phalcon\Queue\QueueFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

### Method Summary

- `public __construct()` — Phalcon\Di\FactoryDefault constructor

### Methods

<h4 id="difactorydefault-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Phalcon\Di\FactoryDefault constructor


## Di\FactoryDefault\Cli

Class

Phalcon\Di\FactoryDefault\Cli

This is a variant of the standard Phalcon\Di. By default it automatically
registers all the services provided by the framework.
Thanks to this, the developer does not need to register each service individually.
This class is specially suitable for CLI applications

- [`Phalcon\Di\Di`](#didi)
  - [`Phalcon\Di\FactoryDefault`](#difactorydefault)
    - **`Phalcon\Di\FactoryDefault\Cli`**

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Cli\Dispatcher` · `Phalcon\Cli\Router` · `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Service` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\FilterFactory` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Queue\QueueFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

### Method Summary

- `public __construct()` — Phalcon\Di\FactoryDefault\Cli constructor

### Methods

<h4 id="difactorydefaultcli-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Phalcon\Di\FactoryDefault\Cli constructor


## Di\InitializationAwareInterface

Interface

Interface for components that have `initialize()`

- **`Phalcon\Di\InitializationAwareInterface`**

### Method Summary

- `public initialize(): void`

### Methods

<h4 id="diinitializationawareinterface-initialize"><code>initialize()</code></h4>

```php
public function initialize(): void;
```


## Di\Injectable

Abstract

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

- `\stdClass`
  - **`Phalcon\Di\Injectable`** - implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
    - [`Phalcon\Application\AbstractApplication`](/5.21/api/phalcon_application/#applicationabstractapplication)
    - [`Phalcon\Cli\Task`](/5.21/api/phalcon_cli/#clitask)
    - [`Phalcon\Filter\Validation`](/5.21/api/phalcon_filter/#filtervalidation)
    - [`Phalcon\Forms\Form`](/5.21/api/phalcon_forms/#formsform)
    - [`Phalcon\Mvc\Controller`](/5.21/api/phalcon_mvc/#mvccontroller)
    - [`Phalcon\Mvc\Micro`](/5.21/api/phalcon_mvc/#mvcmicro)
    - [`Phalcon\Mvc\View`](/5.21/api/phalcon_mvc/#mvcview)
    - [`Phalcon\Mvc\View\Engine\AbstractEngine`](/5.21/api/phalcon_mvc/#mvcviewengineabstractengine)
    - [`Phalcon\Mvc\View\Simple`](/5.21/api/phalcon_mvc/#mvcviewsimple)

`Phalcon\Di\Di` · `Phalcon\Di\Exceptions\ContainerRequired` · `Phalcon\Session\BagInterface` · `stdClass`

### Method Summary

- `public __get(string $propertyName): mixed|null` — Magic method \_\_get

- `public __isset(string $name): bool` — Magic method \_\_isset

- `public getDI(): DiInterface` — Returns the internal dependency injector

- `public setDI(DiInterface $container): void` — Sets the dependency injector

### Properties

- `protected DiInterface|null $container = null` — Dependency Injector

### Methods

<h4 id="diinjectable-__get"><code>__get()</code></h4>

```php
public function __get( string $propertyName ): mixed|null;
```

Magic method __get

<h4 id="diinjectable-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $name ): bool;
```

Magic method __isset

<h4 id="diinjectable-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

<h4 id="diinjectable-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\InjectionAwareInterface

Interface

This interface must be implemented in those classes that uses internally the
Phalcon\Di\Di that creates them

- **`Phalcon\Di\InjectionAwareInterface`**

### Method Summary

- `public getDI(): DiInterface` — Returns the internal dependency injector

- `public setDI(DiInterface $container): void` — Sets the dependency injector

### Methods

<h4 id="diinjectionawareinterface-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

<h4 id="diinjectionawareinterface-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector


## Di\Service

Class

Represents individually a service in the services container

```php
$service = new \Phalcon\Di\Service(
    "request",
    \Phalcon\Http\Request::class
);

$request = service->resolve();
```

- **`Phalcon\Di\Service`** - implements [`Phalcon\Di\ServiceInterface`](#diserviceinterface)

`Closure` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate` · `Phalcon\Di\Service\Builder`

### Method Summary

- `public __construct(mixed $definition, bool $shared = false)` — Phalcon\Di\Service

- `public getDefinition(): mixed` — Returns the service definition

- `public getParameter(int $position)` — Returns a parameter in a specific position

- `public isResolved(): bool` — Returns true if the service was resolved

- `public isShared(): bool` — Check whether the service is shared or not

- `public resolve(mixed $parameters = null, DiInterface|null $container = null): mixed` — Resolves the service

- `public setDefinition(mixed $definition): void` — Set the service definition

- `public setParameter(int $position, array $parameter): ServiceInterface` — Changes a parameter in the definition without resolve the service

- `public setShared(bool $shared): void` — Sets if the service is shared or not

- `public setSharedInstance(mixed $sharedInstance): void` — Sets/Resets the shared instance related to the service

### Properties

- `protected mixed $definition`

- `protected bool $resolved = false`

- `protected bool $shared = false`

- `protected mixed|null $sharedInstance = null`

### Methods

<h4 id="diservice-__construct"><code>__construct()</code></h4>

```php
final public function __construct(
    mixed $definition,
    bool $shared = false
);
```

Phalcon\Di\Service

<h4 id="diservice-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition(): mixed;
```

Returns the service definition

<h4 id="diservice-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( int $position );
```

Returns a parameter in a specific position

<h4 id="diservice-isresolved"><code>isResolved()</code></h4>

```php
public function isResolved(): bool;
```

Returns true if the service was resolved

<h4 id="diservice-isshared"><code>isShared()</code></h4>

```php
public function isShared(): bool;
```

Check whether the service is shared or not

<h4 id="diservice-resolve"><code>resolve()</code></h4>

```php
public function resolve(
    mixed $parameters = null,
    DiInterface|null $container = null
): mixed;
```

Resolves the service

<h4 id="diservice-setdefinition"><code>setDefinition()</code></h4>

```php
public function setDefinition( mixed $definition ): void;
```

Set the service definition

<h4 id="diservice-setparameter"><code>setParameter()</code></h4>

```php
public function setParameter(
    int $position,
    array $parameter
): ServiceInterface;
```

Changes a parameter in the definition without resolve the service

<h4 id="diservice-setshared"><code>setShared()</code></h4>

```php
public function setShared( bool $shared ): void;
```

Sets if the service is shared or not

<h4 id="diservice-setsharedinstance"><code>setSharedInstance()</code></h4>

```php
public function setSharedInstance( mixed $sharedInstance ): void;
```

Sets/Resets the shared instance related to the service


## Di\ServiceInterface

Interface

Represents a service in the services container

- **`Phalcon\Di\ServiceInterface`**

### Method Summary

- `public getDefinition(): mixed` — Returns the service definition

- `public getParameter(int $position)` — Returns a parameter in a specific position

- `public isResolved(): bool` — Returns true if the service was resolved

- `public isShared(): bool` — Check whether the service is shared or not

- `public resolve(mixed $parameters = null, DiInterface|null $container = null): mixed` — Resolves the service

- `public setDefinition(mixed $definition)` — Set the service definition

- `public setParameter(int $position, array $parameter): ServiceInterface` — Changes a parameter in the definition without resolve the service

- `public setShared(bool $shared)` — Sets if the service is shared or not

### Methods

<h4 id="diserviceinterface-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition(): mixed;
```

Returns the service definition

<h4 id="diserviceinterface-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( int $position );
```

Returns a parameter in a specific position

<h4 id="diserviceinterface-isresolved"><code>isResolved()</code></h4>

```php
public function isResolved(): bool;
```

Returns true if the service was resolved

<h4 id="diserviceinterface-isshared"><code>isShared()</code></h4>

```php
public function isShared(): bool;
```

Check whether the service is shared or not

<h4 id="diserviceinterface-resolve"><code>resolve()</code></h4>

```php
public function resolve(
    mixed $parameters = null,
    DiInterface|null $container = null
): mixed;
```

Resolves the service

<h4 id="diserviceinterface-setdefinition"><code>setDefinition()</code></h4>

```php
public function setDefinition( mixed $definition );
```

Set the service definition

<h4 id="diserviceinterface-setparameter"><code>setParameter()</code></h4>

```php
public function setParameter(
    int $position,
    array $parameter
): ServiceInterface;
```

Changes a parameter in the definition without resolve the service

<h4 id="diserviceinterface-setshared"><code>setShared()</code></h4>

```php
public function setShared( bool $shared );
```

Sets if the service is shared or not


## Di\ServiceProviderInterface

Interface

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

- **`Phalcon\Di\ServiceProviderInterface`**

### Method Summary

- `public register(DiInterface $di): void` — Registers a service provider.

### Methods

<h4 id="diserviceproviderinterface-register"><code>register()</code></h4>

```php
public function register( DiInterface $di ): void;
```

Registers a service provider.


## Di\Service\Builder

Class

Phalcon\Di\Service\Builder

This class builds instances based on complex definitions

- **`Phalcon\Di\Service\Builder`**

`Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Exceptions\ArgumentTypeRequired` · `Phalcon\Di\Exceptions\CallArgumentsMustBeArray` · `Phalcon\Di\Exceptions\MethodCallMustBeArray` · `Phalcon\Di\Exceptions\MethodNameRequired` · `Phalcon\Di\Exceptions\MissingClassNameParameter` · `Phalcon\Di\Exceptions\MissingParameterKey` · `Phalcon\Di\Exceptions\PropertyInjectionRequiresInstance` · `Phalcon\Di\Exceptions\PropertyMustBeArray` · `Phalcon\Di\Exceptions\PropertyNameRequired` · `Phalcon\Di\Exceptions\PropertyValueRequired` · `Phalcon\Di\Exceptions\SetterInjectionRequiresInstance` · `Phalcon\Di\Exceptions\SetterParametersMustBeArray` · `Phalcon\Di\Exceptions\UnknownServiceType`

### Method Summary

- `public build(DiInterface $container, array $definition, mixed $parameters = null)` — Builds a service using a complex service definition

### Methods

<h4 id="diservicebuilder-build"><code>build()</code></h4>

```php
public function build(
    DiInterface $container,
    array $definition,
    mixed $parameters = null
);
```

Builds a service using a complex service definition

Source: https://docs.phalcon.io/5.21/api/phalcon_di/index.mdx
