---
title: "Phalcon Di"
version: "6.0"
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
- [`Phalcon\Assets\Manager`](../phalcon_assets/#assetsmanager)
- [`Phalcon\Cli\Router`](../phalcon_cli/#clirouter)
- [`Phalcon\Dispatcher\AbstractDispatcher`](../phalcon_dispatcher/#dispatcherabstractdispatcher)
- [`Phalcon\Encryption\Security`](../phalcon_encryption/#encryptionsecurity)
- [`Phalcon\Http\Cookie`](../phalcon_http/#httpcookie)
- [`Phalcon\Http\Request`](../phalcon_http/#httprequest)
- [`Phalcon\Http\Response\Cookies`](../phalcon_http/#httpresponsecookies)
- [`Phalcon\Mvc\Model`](../phalcon_mvc/#mvcmodel)
- [`Phalcon\Mvc\Router`](../phalcon_mvc/#mvcrouter)
- [`Phalcon\Mvc\Url`](../phalcon_mvc/#mvcurl)
- [`Phalcon\Session\Manager`](../phalcon_session/#sessionmanager)

`Phalcon\Di\Traits\InjectionAwareTrait` · `stdClass`

## Di\Di

Class

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

- `\stdClass`
- **`Phalcon\Di\Di`** - implements [`Phalcon\Di\DiInterface`](#didiinterface)
- [`Phalcon\Di\FactoryDefault`](#difactorydefault)

`Phalcon\Di\Exception` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\AliasAlreadyInUse` · `Phalcon\Di\Exceptions\AliasNameMustBeString` · `Phalcon\Di\Exceptions\CircularAliasReference` · `Phalcon\Di\Traits\DiArrayAccessTrait` · `Phalcon\Di\Traits\DiEventsTrait` · `Phalcon\Di\Traits\DiExceptionsTrait` · `Phalcon\Di\Traits\DiInstanceTrait` · `Phalcon\Di\Traits\DiLoadTrait` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `stdClass`

### Method Summary

<ApiItem href="#didi-__call" visibility="public" name="__call" returnType="" params={[{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":"[]"}]}>
Magic method to get or set services using setters/getters
</ApiItem>
<ApiItem href="#didi-__construct" visibility="public" name="__construct" returnType="" params={[]}>
Phalcon\Di\Di constructor
</ApiItem>
<ApiItem href="#didi-attempt" visibility="public" name="attempt" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Attempts to register a service in the services container
</ApiItem>
<ApiItem href="#didi-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Resolves the service based on its configuration
</ApiItem>
<ApiItem href="#didi-getalias" visibility="public" name="getAlias" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Return the alias based on a passed key. Returns an empty string if
</ApiItem>
<ApiItem href="#didi-getdefault" visibility="public" name="getDefault" returnType="object|null" params={[]}>
Return the latest DI created
</ApiItem>
<ApiItem href="#didi-getinternaleventsmanager" visibility="public" name="getInternalEventsManager" returnType="ManagerInterface|null" params={[]}>
Returns the internal event manager
</ApiItem>
<ApiItem href="#didi-getraw" visibility="public" name="getRaw" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns a service definition without resolving
</ApiItem>
<ApiItem href="#didi-getservice" visibility="public" name="getService" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns a Phalcon\Di\Service instance
</ApiItem>
<ApiItem href="#didi-getservices" visibility="public" name="getServices" returnType="array" params={[]}>
Return the services registered in the DI
</ApiItem>
<ApiItem href="#didi-getshared" visibility="public" name="getShared" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Resolves a service, the resolved service is stored in the DI, subsequent
</ApiItem>
<ApiItem href="#didi-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI contains a service by a name
</ApiItem>
<ApiItem href="#didi-hasshared" visibility="public" name="hasShared" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI has a cached shared instance for a service name.
</ApiItem>
<ApiItem href="#didi-register" visibility="public" name="register" returnType="void" params={[{"type":"ServiceProviderInterface","name":"provider","default":null}]}>
Registers a service provider.
</ApiItem>
<ApiItem href="#didi-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
Removes a service in the services container
</ApiItem>
<ApiItem href="#didi-removeshared" visibility="public" name="removeShared" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
Removes the cached shared instance for a service, leaving the service
</ApiItem>
<ApiItem href="#didi-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets the internal default DI
</ApiItem>
<ApiItem href="#didi-set" visibility="public" name="set" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Registers a service in the services container
</ApiItem>
<ApiItem href="#didi-setalias" visibility="public" name="setAlias" returnType="self" params={[{"type":"string","name":"name","default":null},{"type":"array|string","name":"aliases","default":null}]}>
Sets one or more aliases to the given name.
</ApiItem>
<ApiItem href="#didi-setdefault" visibility="public" name="setDefault" returnType="void" params={[{"type":"object","name":"container","default":null}]}>
Set a default dependency injection container to be obtained into static
</ApiItem>
<ApiItem href="#didi-setinternaleventsmanager" visibility="public" name="setInternalEventsManager" returnType="void" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the internal event manager
</ApiItem>
<ApiItem href="#didi-setservice" visibility="public" name="setService" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"ServiceInterface","name":"rawDefinition","default":null}]}>
Sets a service using a raw Phalcon\Di\Service definition
</ApiItem>
<ApiItem href="#didi-setshared" visibility="public" name="setShared" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Registers an "always shared" service in the services container
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="aliases" type="array&lt;string, string&gt;" default="[]">
List of service aliases
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultContainer" type="object|null" default="null">
Latest DI build
</ApiItem>
<ApiItem kind="property" visibility="protected" name="services" type="ServiceInterface[]" default="[]">
List of registered services
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sharedInstances" type="array" default="[]">
List of shared instances
</ApiItem>

### Methods

<h4 id="didi-__call"><code>__call()</code></h4>

```php
public function __call(
string $method,
array $arguments = []
);
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
);
```

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name

<h4 id="didi-get"><code>get()</code></h4>

```php
public function get(
string $name,
array|null $parameters = null
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
public static function getDefault(): object|null;
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
public function getServices(): array;
```

Return the services registered in the DI

<h4 id="didi-getshared"><code>getShared()</code></h4>

```php
public function getShared(
string $name,
array|null $parameters = null
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
array|string $aliases
): self;
```

Sets one or more aliases to the given name.

<h4 id="didi-setdefault"><code>setDefault()</code></h4>

```php
public static function setDefault( object $container ): void;
```

Set a default dependency injection container to be obtained into static
methods

<h4 id="didi-setinternaleventsmanager"><code>setInternalEventsManager()</code></h4>

```php
public function setInternalEventsManager( ManagerInterface $eventsManager ): void;
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

## Di\DiInterface

Interface

Interface for Phalcon\Di

- `\ArrayAccess`
- **`Phalcon\Di\DiInterface`**

`ArrayAccess`

### Method Summary

<ApiItem href="#didiinterface-attempt" visibility="public" name="attempt" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Attempts to register a service in the services container
</ApiItem>
<ApiItem href="#didiinterface-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Resolves the service based on its configuration
</ApiItem>
<ApiItem href="#didiinterface-getdefault" visibility="public" name="getDefault" returnType="object|null" params={[]}>
Return the last DI created
</ApiItem>
<ApiItem href="#didiinterface-getraw" visibility="public" name="getRaw" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns a service definition without resolving
</ApiItem>
<ApiItem href="#didiinterface-getservice" visibility="public" name="getService" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns the corresponding Phalcon\Di\Service instance for a service
</ApiItem>
<ApiItem href="#didiinterface-getservices" visibility="public" name="getServices" returnType="array" params={[]}>
Return the services registered in the DI
</ApiItem>
<ApiItem href="#didiinterface-getshared" visibility="public" name="getShared" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Returns a shared service based on their configuration
</ApiItem>
<ApiItem href="#didiinterface-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI contains a service by a name
</ApiItem>
<ApiItem href="#didiinterface-hasshared" visibility="public" name="hasShared" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI has a cached shared instance for a service name.
</ApiItem>
<ApiItem href="#didiinterface-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
Removes a service in the services container
</ApiItem>
<ApiItem href="#didiinterface-removeshared" visibility="public" name="removeShared" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
Removes the cached shared instance for a service, leaving the service
</ApiItem>
<ApiItem href="#didiinterface-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets the internal default DI
</ApiItem>
<ApiItem href="#didiinterface-set" visibility="public" name="set" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Registers a service in the services container
</ApiItem>
<ApiItem href="#didiinterface-setdefault" visibility="public" name="setDefault" returnType="void" params={[{"type":"object","name":"container","default":null}]}>
Set a default dependency injection container to be obtained into static
</ApiItem>
<ApiItem href="#didiinterface-setservice" visibility="public" name="setService" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"ServiceInterface","name":"rawDefinition","default":null}]}>
Sets a service using a raw Phalcon\Di\Service definition
</ApiItem>
<ApiItem href="#didiinterface-setshared" visibility="public" name="setShared" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Registers an "always shared" service in the services container
</ApiItem>

### Methods

<h4 id="didiinterface-attempt"><code>attempt()</code></h4>

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

<h4 id="didiinterface-get"><code>get()</code></h4>

```php
public function get(
string $name,
array|null $parameters = null
): mixed;
```

Resolves the service based on its configuration

<h4 id="didiinterface-getdefault"><code>getDefault()</code></h4>

```php
public static function getDefault(): object|null;
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
public function getServices(): array;
```

Return the services registered in the DI

<h4 id="didiinterface-getshared"><code>getShared()</code></h4>

```php
public function getShared(
string $name,
array|null $parameters = null
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
public static function setDefault( object $container ): void;
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

## Di\Exception\ServiceResolutionException

Class

Phalcon\Di\Exception\ServiceResolutionException

- `\Exception`
- [`Phalcon\Di\Exception`](#diexception)
- **`Phalcon\Di\Exception\ServiceResolutionException`**

`Phalcon\Di\Exception`

## Di\Exceptions\AliasAlreadyInUse

Class

- `\Exception`
- [`Phalcon\Di\Exception`](#diexception)
- **`Phalcon\Di\Exceptions\AliasAlreadyInUse`**

`Phalcon\Di\Exception`

### Method Summary

<ApiItem href="#diexceptionsaliasalreadyinuse-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"alias","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionsaliasnamemustbestring-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionsargumenttyperequired-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionscallargumentsmustbearray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionscircularaliasreference-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionscontainerrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionsdefinitionmustbearrayforread-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionsdefinitionmustbearrayforupdate-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionsmethodcallmustbearray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionsmethodnamerequired-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionsmissingclassnameparameter-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionsmissingparameterkey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null},{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionspropertyinjectionrequiresinstance-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionspropertymustbearray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionspropertynamerequired-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionspropertyvaluerequired-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionsservicecannotberesolved-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

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

<ApiItem href="#diexceptionssetterinjectionrequiresinstance-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionssetterparametersmustbearray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#diexceptionsunknownservicetype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

- `\stdClass`
- [`Phalcon\Di\Di`](#didi)
- **`Phalcon\Di\FactoryDefault`**
- [`Phalcon\Di\FactoryDefault\Cli`](#difactorydefaultcli)

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Annotations` · `Phalcon\Assets\Manager` · `Phalcon\Db\Event\Factory` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterFactory` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\Response` · `Phalcon\Http\Response\Cookies` · `Phalcon\Mvc\Dispatcher` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\Url` · `Phalcon\Queue\QueueFactory` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#difactorydefault-__construct" visibility="public" name="__construct" returnType="" params={[]}>
Phalcon\Di\FactoryDefault constructor
</ApiItem>

### Methods

<h4 id="difactorydefault-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Phalcon\Di\FactoryDefault constructor

## Di\FactoryDefault\Cli

Class

Phalcon\Di\FactoryDefault\Cli

This is a variant of the standard Phalcon\Di. By default, it automatically
registers all the services provided by the framework.
Thanks to this, the developer does not need to register each service individually.
This class is specially suitable for CLI applications

- `\stdClass`
- [`Phalcon\Di\Di`](#didi)
- [`Phalcon\Di\FactoryDefault`](#difactorydefault)
- **`Phalcon\Di\FactoryDefault\Cli`**

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Annotations` · `Phalcon\Cli\Dispatcher` · `Phalcon\Cli\Router` · `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Service` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\FilterFactory` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Queue\QueueFactory` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#difactorydefaultcli-__construct" visibility="public" name="__construct" returnType="" params={[]}>
Phalcon\Di\FactoryDefault\Cli constructor
</ApiItem>

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

<ApiItem href="#diinitializationawareinterface-initialize" visibility="public" name="initialize" returnType="void" params={[]}>
</ApiItem>

### Methods

<h4 id="diinitializationawareinterface-initialize"><code>initialize()</code></h4>

```php
public function initialize(): void;
```

## Di\Injectable

Abstract

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

- `\stdClass`
- **`Phalcon\Di\Injectable`** - implements [`Phalcon\Di\InjectionAwareInterface`](#diinjectionawareinterface)
- [`Phalcon\Application\AbstractApplication`](../phalcon_application/#applicationabstractapplication)
- [`Phalcon\Cli\Task`](../phalcon_cli/#clitask)
- [`Phalcon\Filter\Validation`](../phalcon_filter/#filtervalidation)
- [`Phalcon\Forms\Form`](../phalcon_forms/#formsform)
- [`Phalcon\Mvc\Controller`](../phalcon_mvc/#mvccontroller)
- [`Phalcon\Mvc\Micro`](../phalcon_mvc/#mvcmicro)
- [`Phalcon\Mvc\Model\MetaData`](../phalcon_mvc/#mvcmodelmetadata)
- [`Phalcon\Mvc\View`](../phalcon_mvc/#mvcview)
- [`Phalcon\Mvc\View\Engine\AbstractEngine`](../phalcon_mvc/#mvcviewengineabstractengine)
- [`Phalcon\Mvc\View\Simple`](../phalcon_mvc/#mvcviewsimple)

`Phalcon\Annotations\Adapter\AdapterInterface` · `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Assets\Manager` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterInterface` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Http\Request` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Http\Response\Cookies` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Url` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Session\Bag` · `Phalcon\Session\BagInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings` · `stdClass`

### Method Summary

<ApiItem href="#diinjectable-__get" visibility="public" name="__get" returnType="" params={[{"type":"string","name":"propertyName","default":null}]}>
Magic method __get
</ApiItem>
<ApiItem href="#diinjectable-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Magic method __isset
</ApiItem>
<ApiItem href="#diinjectable-getdi" visibility="public" name="getDI" returnType="DiInterface|null" params={[]}>
Returns the internal dependency injector
</ApiItem>

### Methods

<h4 id="diinjectable-__get"><code>__get()</code></h4>

```php
public function __get( string $propertyName );
```

Magic method __get

<h4 id="diinjectable-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $name ): bool;
```

Magic method __isset

<h4 id="diinjectable-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface|null;
```

Returns the internal dependency injector

## Di\InjectionAwareInterface

Interface

This interface must be implemented in those classes that uses internally the
Phalcon\Di that creates them

- **`Phalcon\Di\InjectionAwareInterface`**

### Method Summary

<ApiItem href="#diinjectionawareinterface-getdi" visibility="public" name="getDI" returnType="DiInterface|null" params={[]}>
Returns the internal dependency injector
</ApiItem>
<ApiItem href="#diinjectionawareinterface-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injector
</ApiItem>

### Methods

<h4 id="diinjectionawareinterface-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface|null;
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

@property array $definition
@property bool  $resolved
@property bool  $shared
@property mixed $sharedInstance

- **`Phalcon\Di\Service`** - implements [`Phalcon\Di\ServiceInterface`](#diserviceinterface)

`Closure` · `Phalcon\Di\Exception\ServiceResolutionException` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForRead` · `Phalcon\Di\Exceptions\DefinitionMustBeArrayForUpdate` · `Phalcon\Di\Service\Builder` · `Phalcon\Di\Traits\DiInstanceTrait`

### Method Summary

<ApiItem href="#diservice-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Service constructor.
</ApiItem>
<ApiItem href="#diservice-getdefinition" visibility="public" name="getDefinition" returnType="mixed" params={[]}>
Returns the service definition
</ApiItem>
<ApiItem href="#diservice-getparameter" visibility="public" name="getParameter" returnType="mixed" params={[{"type":"int","name":"position","default":null}]}>
Returns a parameter in a specific position
</ApiItem>
<ApiItem href="#diservice-isresolved" visibility="public" name="isResolved" returnType="bool" params={[]}>
Returns true if the service was resolved
</ApiItem>
<ApiItem href="#diservice-isshared" visibility="public" name="isShared" returnType="bool" params={[]}>
Check whether the service is shared or not
</ApiItem>
<ApiItem href="#diservice-resolve" visibility="public" name="resolve" returnType="mixed" params={[{"type":"array|null","name":"parameters","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"}]}>
Resolves the service
</ApiItem>
<ApiItem href="#diservice-setdefinition" visibility="public" name="setDefinition" returnType="void" params={[{"type":"mixed","name":"definition","default":null}]}>
Set the service definition
</ApiItem>
<ApiItem href="#diservice-setparameter" visibility="public" name="setParameter" returnType="ServiceInterface" params={[{"type":"int","name":"position","default":null},{"type":"array","name":"parameter","default":null}]}>
Changes a parameter in the definition without resolve the service
</ApiItem>
<ApiItem href="#diservice-setshared" visibility="public" name="setShared" returnType="void" params={[{"type":"bool","name":"shared","default":null}]}>
Sets if the service is shared or not
</ApiItem>
<ApiItem href="#diservice-setsharedinstance" visibility="public" name="setSharedInstance" returnType="void" params={[{"type":"mixed","name":"sharedInstance","default":null}]}>
Sets/Resets the shared instance related to the service
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="definition" type="mixed" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resolved" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="shared" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sharedInstance" type="mixed" default="">
</ApiItem>

### Methods

<h4 id="diservice-__construct"><code>__construct()</code></h4>

```php
final public function __construct(
mixed $definition,
bool $shared = false
);
```

Service constructor.

<h4 id="diservice-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition(): mixed;
```

Returns the service definition

<h4 id="diservice-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( int $position ): mixed;
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
array|null $parameters = null,
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

<ApiItem href="#diserviceinterface-getdefinition" visibility="public" name="getDefinition" returnType="mixed" params={[]}>
Returns the service definition
</ApiItem>
<ApiItem href="#diserviceinterface-getparameter" visibility="public" name="getParameter" returnType="mixed" params={[{"type":"int","name":"position","default":null}]}>
Returns a parameter in a specific position
</ApiItem>
<ApiItem href="#diserviceinterface-isresolved" visibility="public" name="isResolved" returnType="bool" params={[]}>
Returns true if the service was resolved
</ApiItem>
<ApiItem href="#diserviceinterface-isshared" visibility="public" name="isShared" returnType="bool" params={[]}>
Check whether the service is shared or not
</ApiItem>
<ApiItem href="#diserviceinterface-resolve" visibility="public" name="resolve" returnType="mixed" params={[{"type":"array|null","name":"parameters","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"}]}>
Resolves the service
</ApiItem>
<ApiItem href="#diserviceinterface-setdefinition" visibility="public" name="setDefinition" returnType="" params={[{"type":"mixed","name":"definition","default":null}]}>
Set the service definition
</ApiItem>
<ApiItem href="#diserviceinterface-setparameter" visibility="public" name="setParameter" returnType="ServiceInterface" params={[{"type":"int","name":"position","default":null},{"type":"array","name":"parameter","default":null}]}>
Changes a parameter in the definition without resolve the service
</ApiItem>
<ApiItem href="#diserviceinterface-setshared" visibility="public" name="setShared" returnType="" params={[{"type":"bool","name":"shared","default":null}]}>
Sets if the service is shared or not
</ApiItem>

### Methods

<h4 id="diserviceinterface-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition(): mixed;
```

Returns the service definition

<h4 id="diserviceinterface-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( int $position ): mixed;
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
array|null $parameters = null,
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

<ApiItem href="#diserviceproviderinterface-register" visibility="public" name="register" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Registers a service provider.
</ApiItem>

### Methods

<h4 id="diserviceproviderinterface-register"><code>register()</code></h4>

```php
public function register( DiInterface $container ): void;
```

Registers a service provider.

## Di\Service\Builder

Class

This class builds instances based on complex definitions

- **`Phalcon\Di\Service\Builder`**

`Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Traits\DiExceptionsTrait` · `Phalcon\Di\Traits\DiInstanceTrait`

### Method Summary

<ApiItem href="#diservicebuilder-build" visibility="public" name="build" returnType="" params={[{"type":"DiInterface","name":"container","default":null},{"type":"array","name":"definition","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Builds a service using a complex service definition
</ApiItem>

### Methods

<h4 id="diservicebuilder-build"><code>build()</code></h4>

```php
public function build(
DiInterface $container,
array $definition,
array|null $parameters = null
);
```

Builds a service using a complex service definition

## Di\Traits\DiArrayAccessTrait

Trait

- **`Phalcon\Di\Traits\DiArrayAccessTrait`**

`Phalcon\Di\Exception` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\ServiceInterface` · `ReturnTypeWillChange`

[`Phalcon\Di\Di`](#didi)

### Method Summary

<ApiItem href="#ditraitsdiarrayaccesstrait-getshared" visibility="public" name="getShared" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Resolves a service, the resolved service is stored in the DI, subsequent
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI contains a service by a name
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"name","default":null}]}>
Check if a service is registered using the array syntax
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-offsetget" visibility="public" name="offsetGet" returnType="" params={[{"type":"mixed","name":"name","default":null}]}>
Allows to obtain a shared service using the array syntax
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Allows to register a shared service using the array syntax
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"name","default":null}]}>
Removes a service from the services container using the array syntax
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
Removes a service in the services container
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-set" visibility="public" name="set" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Registers a service in the services container
</ApiItem>
<ApiItem href="#ditraitsdiarrayaccesstrait-setshared" visibility="public" name="setShared" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Registers an "always shared" service in the services container
</ApiItem>

### Methods

<h4 id="ditraitsdiarrayaccesstrait-getshared"><code>getShared()</code></h4>

```php
abstract public function getShared(
string $name,
array|null $parameters = null
);
```

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance

<h4 id="ditraitsdiarrayaccesstrait-has"><code>has()</code></h4>

```php
abstract public function has( string $name ): bool;
```

Check whether the DI contains a service by a name

<h4 id="ditraitsdiarrayaccesstrait-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $name ): bool;
```

Check if a service is registered using the array syntax

<h4 id="ditraitsdiarrayaccesstrait-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $name );
```

Allows to obtain a shared service using the array syntax

```php
var_dump($di["request"]);
```

<h4 id="ditraitsdiarrayaccesstrait-offsetset"><code>offsetSet()</code></h4>

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

<h4 id="ditraitsdiarrayaccesstrait-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $name ): void;
```

Removes a service from the services container using the array syntax

<h4 id="ditraitsdiarrayaccesstrait-remove"><code>remove()</code></h4>

```php
abstract public function remove( string $name ): void;
```

Removes a service in the services container
It also removes any shared instance created for the service

<h4 id="ditraitsdiarrayaccesstrait-set"><code>set()</code></h4>

```php
abstract public function set(
string $name,
mixed $definition,
bool $shared = false
): ServiceInterface;
```

Registers a service in the services container

<h4 id="ditraitsdiarrayaccesstrait-setshared"><code>setShared()</code></h4>

```php
public function setShared(
string $name,
mixed $definition
): ServiceInterface;
```

Registers an "always shared" service in the services container

## Di\Traits\DiEventsTrait

Trait

Trait DiEventsTrait

- **`Phalcon\Di\Traits\DiEventsTrait`**

`Phalcon\Events\ManagerInterface`

[`Phalcon\Di\Di`](#didi)

## Di\Traits\DiExceptionsTrait

Trait

Trait DiExceptionsTrait

@package Phalcon\Di\Traits

- **`Phalcon\Di\Traits\DiExceptionsTrait`**

`Phalcon\Di\Exception` · `Phalcon\Di\Exceptions\MissingParameterKey`

[`Phalcon\Di\Di`](#didi) · [`Phalcon\Di\Service\Builder`](#diservicebuilder)

## Di\Traits\DiInstanceTrait

Trait

Trait DiInstanceTrait

@package Phalcon\Di\Traits

- **`Phalcon\Di\Traits\DiInstanceTrait`**

[`Phalcon\Di\Di`](#didi) · [`Phalcon\Di\Service`](#diservice) · [`Phalcon\Di\Service\Builder`](#diservicebuilder)

## Di\Traits\DiLoadTrait

Trait

Trait DiLoadTrait

@package Phalcon\Di\Traits

- **`Phalcon\Di\Traits\DiLoadTrait`**

`Phalcon\Config\Adapter\Php` · `Phalcon\Config\Adapter\Yaml` · `Phalcon\Config\ConfigInterface`

[`Phalcon\Di\Di`](#didi)

### Method Summary

<ApiItem href="#ditraitsdiloadtrait-loadfromphp" visibility="public" name="loadFromPhp" returnType="void" params={[{"type":"string","name":"filePath","default":null}]}>
Loads services from a php config file.
</ApiItem>
<ApiItem href="#ditraitsdiloadtrait-loadfromyaml" visibility="public" name="loadFromYaml" returnType="void" params={[{"type":"string","name":"filePath","default":null},{"type":"array|null","name":"callbacks","default":"null"}]}>
Loads services from a yaml file.
</ApiItem>
<ApiItem href="#ditraitsdiloadtrait-loadfromconfig" visibility="protected" name="loadFromConfig" returnType="void" params={[{"type":"ConfigInterface","name":"config","default":null}]}>
Loads services from a Config object.
</ApiItem>

### Methods

<h4 id="ditraitsdiloadtrait-loadfromphp"><code>loadFromPhp()</code></h4>

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

<h4 id="ditraitsdiloadtrait-loadfromyaml"><code>loadFromYaml()</code></h4>

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

<h4 id="ditraitsdiloadtrait-loadfromconfig"><code>loadFromConfig()</code></h4>

```php
protected function loadFromConfig( ConfigInterface $config ): void;
```

Loads services from a Config object.

## Di\Traits\InjectionAwareTrait

Trait

This abstract class offers common access to the DI in a class

Class AbstractInjectionAware

@package Phalcon\Di

@property object $container

- **`Phalcon\Di\Traits\InjectionAwareTrait`**

`Phalcon\Di\DiInterface`

[`Phalcon\Di\AbstractInjectionAware`](#diabstractinjectionaware) · [`Phalcon\Di\Injectable`](#diinjectable) · [`Phalcon\Flash\AbstractFlash`](../phalcon_flash/#flashabstractflash) · [`Phalcon\Mvc\Model\Manager`](../phalcon_mvc/#mvcmodelmanager) · [`Phalcon\Mvc\Model\Query`](../phalcon_mvc/#mvcmodelquery) · [`Phalcon\Mvc\View\Engine\Volt\Compiler`](../phalcon_mvc/#mvcviewenginevoltcompiler) · [`Phalcon\Session\Bag`](../phalcon_session/#sessionbag)

### Method Summary

<ApiItem href="#ditraitsinjectionawaretrait-getdi" visibility="public" name="getDI" returnType="DiInterface|null" params={[]}>
Returns the internal dependency injector
</ApiItem>
<ApiItem href="#ditraitsinjectionawaretrait-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injector
</ApiItem>
<ApiItem href="#ditraitsinjectionawaretrait-checkcontainer" visibility="protected" name="checkContainer" returnType="void" params={[{"type":"string","name":"exceptionClass","default":null},{"type":"string","name":"message","default":null},{"type":"int","name":"code","default":"0"}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="object|null" default="null">
Dependency Injector
</ApiItem>

### Methods

<h4 id="ditraitsinjectionawaretrait-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface|null;
```

Returns the internal dependency injector

<h4 id="ditraitsinjectionawaretrait-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector

<h4 id="ditraitsinjectionawaretrait-checkcontainer"><code>checkContainer()</code></h4>

```php
protected function checkContainer(
string $exceptionClass,
string $message,
int $code = 0
): void;
```

Source: https://docs.phalcon.io/6.0/api/phalcon_di/index.mdx
