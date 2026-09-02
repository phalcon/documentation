---
title: "Phalcon Di"
version: "5.20"
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
- [`Phalcon\Assets\Manager`](/5.20/api/phalcon_assets/#assetsmanager)
- [`Phalcon\Cli\Router`](/5.20/api/phalcon_cli/#clirouter)
- [`Phalcon\Dispatcher\AbstractDispatcher`](/5.20/api/phalcon_dispatcher/#dispatcherabstractdispatcher)
- [`Phalcon\Encryption\Security`](/5.20/api/phalcon_encryption/#encryptionsecurity)
- [`Phalcon\Flash\AbstractFlash`](/5.20/api/phalcon_flash/#flashabstractflash)
- [`Phalcon\Http\Cookie`](/5.20/api/phalcon_http/#httpcookie)
- [`Phalcon\Http\Request`](/5.20/api/phalcon_http/#httprequest)
- [`Phalcon\Http\Response\Cookies`](/5.20/api/phalcon_http/#httpresponsecookies)
- [`Phalcon\Mvc\Model`](/5.20/api/phalcon_mvc/#mvcmodel)
- [`Phalcon\Mvc\Router`](/5.20/api/phalcon_mvc/#mvcrouter)
- [`Phalcon\Mvc\Url`](/5.20/api/phalcon_mvc/#mvcurl)
- [`Phalcon\Session\Manager`](/5.20/api/phalcon_session/#sessionmanager)

`stdClass`

### Method Summary

<ApiItem href="#diabstractinjectionaware-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the internal dependency injector
</ApiItem>
<ApiItem href="#diabstractinjectionaware-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injector
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="DiInterface" default="">
Dependency Injector
</ApiItem>

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

<ApiItem href="#didi-__call" visibility="public" name="__call" returnType="mixed|null" params={[{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":"[]"}]}>
Magic method to get or set services using setters/getters
</ApiItem>
<ApiItem href="#didi-__construct" visibility="public" name="__construct" returnType="" params={[]}>
Phalcon\Di\Di constructor
</ApiItem>
<ApiItem href="#didi-attempt" visibility="public" name="attempt" returnType="ServiceInterface|bool" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Attempts to register a service in the services container
</ApiItem>
<ApiItem href="#didi-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"parameters","default":"null"}]}>
Resolves the service based on its configuration
</ApiItem>
<ApiItem href="#didi-getalias" visibility="public" name="getAlias" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Return the alias based on a passed key. Returns an empty string if
</ApiItem>
<ApiItem href="#didi-getdefault" visibility="public" name="getDefault" returnType="DiInterface|null" params={[]}>
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
<ApiItem href="#didi-getservices" visibility="public" name="getServices" returnType="ServiceInterface[]" params={[]}>
Return the services registered in the DI
</ApiItem>
<ApiItem href="#didi-getshared" visibility="public" name="getShared" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"parameters","default":"null"}]}>
Resolves a service, the resolved service is stored in the DI, subsequent
</ApiItem>
<ApiItem href="#didi-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI contains a service by a name
</ApiItem>
<ApiItem href="#didi-hasshared" visibility="public" name="hasShared" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check whether the DI has a cached shared instance for a service name.
</ApiItem>
<ApiItem href="#didi-loadfromphp" visibility="public" name="loadFromPhp" returnType="void" params={[{"type":"string","name":"filePath","default":null}]}>
Loads services from a php config file.
</ApiItem>
<ApiItem href="#didi-loadfromyaml" visibility="public" name="loadFromYaml" returnType="void" params={[{"type":"string","name":"filePath","default":null},{"type":"array|null","name":"callbacks","default":"null"}]}>
Loads services from a yaml file.
</ApiItem>
<ApiItem href="#didi-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"name","default":null}]}>
Check if a service is registered using the array syntax
</ApiItem>
<ApiItem href="#didi-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"name","default":null}]}>
Allows to obtain a shared service using the array syntax
</ApiItem>
<ApiItem href="#didi-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"offset","default":null},{"type":"mixed","name":"value","default":null}]}>
Allows to register a shared service using the array syntax
</ApiItem>
<ApiItem href="#didi-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"name","default":null}]}>
Removes a service from the services container using the array syntax
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
<ApiItem href="#didi-setalias" visibility="public" name="setAlias" returnType="self" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"aliases","default":null}]}>
Sets one or more aliases to the given name.
</ApiItem>
<ApiItem href="#didi-setdefault" visibility="public" name="setDefault" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Set a default dependency injection container to be obtained into static
</ApiItem>
<ApiItem href="#didi-setinternaleventsmanager" visibility="public" name="setInternalEventsManager" returnType="" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the internal event manager
</ApiItem>
<ApiItem href="#didi-setservice" visibility="public" name="setService" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"ServiceInterface","name":"rawDefinition","default":null}]}>
Sets a service using a raw Phalcon\Di\Service definition
</ApiItem>
<ApiItem href="#didi-setshared" visibility="public" name="setShared" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Registers an "always shared" service in the services container
</ApiItem>
<ApiItem href="#didi-loadfromconfig" visibility="protected" name="loadFromConfig" returnType="void" params={[{"type":"ConfigInterface","name":"config","default":null}]}>
Loads services from a Config object.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="aliases" type="array" default="[]">
List of service aliases
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultContainer" type="DiInterface|null" default="null">
Latest DI build
</ApiItem>
<ApiItem kind="property" visibility="protected" name="eventsManager" type="ManagerInterface|null" default="null">
Events Manager
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

<ApiItem href="#didiinterface-attempt" visibility="public" name="attempt" returnType="ServiceInterface|bool" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Attempts to register a service in the services container
</ApiItem>
<ApiItem href="#didiinterface-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"parameters","default":"null"}]}>
Resolves the service based on its configuration
</ApiItem>
<ApiItem href="#didiinterface-getdefault" visibility="public" name="getDefault" returnType="DiInterface|null" params={[]}>
Return the last DI created
</ApiItem>
<ApiItem href="#didiinterface-getraw" visibility="public" name="getRaw" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns a service definition without resolving
</ApiItem>
<ApiItem href="#didiinterface-getservice" visibility="public" name="getService" returnType="ServiceInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns the corresponding Phalcon\Di\Service instance for a service
</ApiItem>
<ApiItem href="#didiinterface-getservices" visibility="public" name="getServices" returnType="ServiceInterface[]" params={[]}>
Return the services registered in the DI
</ApiItem>
<ApiItem href="#didiinterface-getshared" visibility="public" name="getShared" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"parameters","default":"null"}]}>
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
<ApiItem href="#didiinterface-setdefault" visibility="public" name="setDefault" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
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

<ApiItem href="#diexception-servicecannotberesolved" visibility="public" name="serviceCannotBeResolved" returnType="Exception" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#diexception-servicenotfound" visibility="public" name="serviceNotFound" returnType="Exception" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#diexception-undefinedmethod" visibility="public" name="undefinedMethod" returnType="Exception" params={[{"type":"string","name":"method","default":null}]}>
</ApiItem>
<ApiItem href="#diexception-unknownserviceinparameter" visibility="public" name="unknownServiceInParameter" returnType="Exception" params={[{"type":"int","name":"position","default":null}]}>
</ApiItem>

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

- [`Phalcon\Di\Di`](#didi)
- **`Phalcon\Di\FactoryDefault`**
- [`Phalcon\Di\FactoryDefault\Cli`](#difactorydefaultcli)

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Assets\Manager` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\FilterFactory` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\Response` · `Phalcon\Http\Response\Cookies` · `Phalcon\Mvc\Dispatcher` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\Url` · `Phalcon\Queue\QueueFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

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

This is a variant of the standard Phalcon\Di. By default it automatically
registers all the services provided by the framework.
Thanks to this, the developer does not need to register each service individually.
This class is specially suitable for CLI applications

- [`Phalcon\Di\Di`](#didi)
- [`Phalcon\Di\FactoryDefault`](#difactorydefault)
- **`Phalcon\Di\FactoryDefault\Cli`**

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Cli\Dispatcher` · `Phalcon\Cli\Router` · `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Service` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Filter\FilterFactory` · `Phalcon\Html\Escaper` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Queue\QueueFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

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
- [`Phalcon\Application\AbstractApplication`](/5.20/api/phalcon_application/#applicationabstractapplication)
- [`Phalcon\Cli\Task`](/5.20/api/phalcon_cli/#clitask)
- [`Phalcon\Filter\Validation`](/5.20/api/phalcon_filter/#filtervalidation)
- [`Phalcon\Forms\Form`](/5.20/api/phalcon_forms/#formsform)
- [`Phalcon\Mvc\Controller`](/5.20/api/phalcon_mvc/#mvccontroller)
- [`Phalcon\Mvc\Micro`](/5.20/api/phalcon_mvc/#mvcmicro)
- [`Phalcon\Mvc\View`](/5.20/api/phalcon_mvc/#mvcview)
- [`Phalcon\Mvc\View\Engine\AbstractEngine`](/5.20/api/phalcon_mvc/#mvcviewengineabstractengine)
- [`Phalcon\Mvc\View\Simple`](/5.20/api/phalcon_mvc/#mvcviewsimple)

`Phalcon\Di\Di` · `Phalcon\Di\Exceptions\ContainerRequired` · `Phalcon\Session\BagInterface` · `stdClass`

### Method Summary

<ApiItem href="#diinjectable-__get" visibility="public" name="__get" returnType="mixed|null" params={[{"type":"string","name":"propertyName","default":null}]}>
Magic method __get
</ApiItem>
<ApiItem href="#diinjectable-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Magic method __isset
</ApiItem>
<ApiItem href="#diinjectable-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the internal dependency injector
</ApiItem>
<ApiItem href="#diinjectable-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injector
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="DiInterface|null" default="null">
Dependency Injector
</ApiItem>

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

<ApiItem href="#diinjectionawareinterface-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the internal dependency injector
</ApiItem>
<ApiItem href="#diinjectionawareinterface-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injector
</ApiItem>

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

<ApiItem href="#diservice-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"shared","default":"false"}]}>
Phalcon\Di\Service
</ApiItem>
<ApiItem href="#diservice-getdefinition" visibility="public" name="getDefinition" returnType="mixed" params={[]}>
Returns the service definition
</ApiItem>
<ApiItem href="#diservice-getparameter" visibility="public" name="getParameter" returnType="" params={[{"type":"int","name":"position","default":null}]}>
Returns a parameter in a specific position
</ApiItem>
<ApiItem href="#diservice-isresolved" visibility="public" name="isResolved" returnType="bool" params={[]}>
Returns true if the service was resolved
</ApiItem>
<ApiItem href="#diservice-isshared" visibility="public" name="isShared" returnType="bool" params={[]}>
Check whether the service is shared or not
</ApiItem>
<ApiItem href="#diservice-resolve" visibility="public" name="resolve" returnType="mixed" params={[{"type":"mixed","name":"parameters","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"}]}>
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
<ApiItem kind="property" visibility="protected" name="sharedInstance" type="mixed|null" default="null">
</ApiItem>

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

<ApiItem href="#diserviceinterface-getdefinition" visibility="public" name="getDefinition" returnType="mixed" params={[]}>
Returns the service definition
</ApiItem>
<ApiItem href="#diserviceinterface-getparameter" visibility="public" name="getParameter" returnType="" params={[{"type":"int","name":"position","default":null}]}>
Returns a parameter in a specific position
</ApiItem>
<ApiItem href="#diserviceinterface-isresolved" visibility="public" name="isResolved" returnType="bool" params={[]}>
Returns true if the service was resolved
</ApiItem>
<ApiItem href="#diserviceinterface-isshared" visibility="public" name="isShared" returnType="bool" params={[]}>
Check whether the service is shared or not
</ApiItem>
<ApiItem href="#diserviceinterface-resolve" visibility="public" name="resolve" returnType="mixed" params={[{"type":"mixed","name":"parameters","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"}]}>
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

<ApiItem href="#diserviceproviderinterface-register" visibility="public" name="register" returnType="void" params={[{"type":"DiInterface","name":"di","default":null}]}>
Registers a service provider.
</ApiItem>

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

<ApiItem href="#diservicebuilder-build" visibility="public" name="build" returnType="" params={[{"type":"DiInterface","name":"container","default":null},{"type":"array","name":"definition","default":null},{"type":"mixed","name":"parameters","default":"null"}]}>
Builds a service using a complex service definition
</ApiItem>

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

Source: https://docs.phalcon.io/5.20/api/phalcon_di/index.mdx
