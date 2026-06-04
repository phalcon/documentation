---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Container\Container 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Container.zep)


-   __Namespace__

    - `Phalcon\Container`

-   __Uses__
    
    - `Closure`
    - `Phalcon\Container\Definition\Processor\ClosureProcessor`
    - `Phalcon\Container\Definition\Processor\ObjectProcessor`
    - `Phalcon\Container\Definition\Processor\Processor`
    - `Phalcon\Container\Definition\Processor\StringProcessor`
    - `Phalcon\Container\Definition\ServiceDefinition`
    - `Phalcon\Container\Definition\ServiceLifetime`
    - `Phalcon\Container\Exceptions\CannotExtendResolved`
    - `Phalcon\Container\Exceptions\CircularAliasFound`
    - `Phalcon\Container\Exceptions\InstanceNotFound`
    - `Phalcon\Container\Exceptions\NoProcessorFound`
    - `Phalcon\Container\Exceptions\ParameterNotFound`
    - `Phalcon\Container\Exceptions\ServiceNotFound`
    - `Phalcon\Container\Exceptions\ServiceNotRegistered`
    - `Phalcon\Container\Resolver\Lazy\Lazy`
    - `Phalcon\Container\Resolver\Resolver`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Di\InjectionAwareInterface`
    - `ReflectionException`

-   __Extends__
    

-   __Implements__
    
    - `Collection`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<string, string>
 */
protected $aliases;

/**
 * @var bool
 */
protected $autowire = true;

/**
 * @var array<string, string>
 */
protected $instanceLifetimes;

/**
 * @var array<string, object>
 */
protected $instances;

/**
 * @var array<string, mixed>
 */
protected $parameters;

/**
 * @var array<string, Processor>
 */
protected $processors;

/**
 * @var Resolver
 */
protected $resolver;

/**
 * @var array<string, ServiceDefinition>
 */
protected $services;

/**
 * @var array<string, list<string>>
 */
protected $tags;

```

### Methods

```php
public function __construct();
```



```php
public function bind( string $interfaceName, string $concrete ): ServiceDefinition;
```
Bind an interface to a concrete class


```php
public function callableGet( string $name ): Closure;
```
Resolve to a closure on a get()


```php
public function callableNew( string $name ): Closure;
```
Resolve to a closure on a new()


```php
public function extend( string $name, callable $callableObject ): void;
```
Extends the definition


```php
public function get( string $name ): mixed;
```
Resolve and return an element registerd in the container


```php
public function getAlias( string $name ): string;
```
Return an alias


```php
public function getByTag( string $tag ): array;
```
Return services by tag


```php
public function getDefinition( string $name ): ServiceDefinition;
```
Return the service definition


```php
public function getInstance( string $name ): object;
```
Return a stored instance


```php
public function getParameter( string $name ): mixed;
```
Return a parameter


```php
public function getResolver(): Resolver;
```
Return the resolver


```php
public function getService( string $serviceName ): object;
```
Resolve an return a service


```php
public function has( string $name ): bool;
```
Does the container have a particular service


```php
public function hasAlias( string $name ): bool;
```
Does the service have an alias


```php
public function hasDefinition( string $name ): bool;
```
Does the service have a definition


```php
public function hasInstance( string $name ): bool;
```
Does the service have an instance


```php
public function hasParameter( string $name ): bool;
```
Does the service have a parameter


```php
public function hasService( string $serviceName ): bool;
```
Does the container have a particular service


```php
public function isAutowireEnabled(): bool;
```
Is AutoWiring enabled


```php
public function new( string $name ): mixed;
```
Resolve and return a new service


```php
public function newDefinition( string $name ): ServiceDefinition;
```
Return a new service definition


```php
public function set( string $name, mixed $definition ): ServiceDefinition;
```
Set a service


```php
public function setAlias( string $name, string $alias ): static;
```
Set an alias


```php
public function setAutowire( bool $enabled ): static;
```
Set AutoWire


```php
public function setDefinition( string $name, ServiceDefinition $definition ): static;
```
Set a definition


```php
public function setInstance( string $name, object $instance, string $lifetime ): static;
```
Set an instance


```php
public function setParameter( string $name, mixed $value ): static;
```
Set a parameter


```php
public function setTag( string $tag, string $serviceName ): void;
```
Register a tag with a service


```php
public function unsetAlias( string $name ): void;
```
Remove an alias


```php
public function unsetDefinition( string $name ): void;
```
Remove a definition


```php
public function unsetInstance( string $name ): void;
```
Remove an instance


```php
public function unsetInstances( string $lifetime ): void;
```
Remove instances based on lifetime


```php
public function unsetParameter( string $name ): void;
```
Remove a parameter




## Container\ContainerFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/ContainerFactory.zep)


-   __Namespace__

    - `Phalcon\Container`

-   __Uses__
    
    - `Phalcon\Contracts\Container\Ioc\IocContainerFactory`
    - `Phalcon\Contracts\Container\Service\Provider`

-   __Extends__
    

-   __Implements__
    
    - `IocContainerFactory`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<array-key, Provider>
 */
protected $providers;

```

### Methods

```php
public function addProvider( Provider $provider ): static;
```
Adds a provider


```php
public function newContainer(): Container;
```
Returns a new container




## Container\Definition\DefinitionType 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/DefinitionType.zep)


-   __Namespace__

    - `Phalcon\Container\Definition`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Constants
```php
const CLOSURE_TYPE = closure;
const OBJECT_TYPE = object;
const PARAMETER_TYPE = parameter;
const STRING_TYPE = string;
```


## Container\Definition\Processor\ClosureProcessor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/ClosureProcessor.zep)


-   __Namespace__

    - `Phalcon\Container\Definition\Processor`

-   __Uses__
    
    - `Closure`
    - `Phalcon\Container\Definition\DefinitionType`
    - `Phalcon\Container\Definition\ServiceDefinition`

-   __Extends__
    

-   __Implements__
    
    - `Processor`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function canProcess( mixed $definition ): bool;
```
Wheteher the definition is a Closure


```php
public function process( string $name, mixed $definition, object $container ): ServiceDefinition;
```
Process the Closure




## Container\Definition\Processor\ObjectProcessor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/ObjectProcessor.zep)


-   __Namespace__

    - `Phalcon\Container\Definition\Processor`

-   __Uses__
    
    - `Closure`
    - `Phalcon\Container\Definition\DefinitionType`
    - `Phalcon\Container\Definition\ServiceDefinition`

-   __Extends__
    

-   __Implements__
    
    - `Processor`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function canProcess( mixed $definition ): bool;
```
Whether the definition is an Object (not Closure)


```php
public function process( string $name, mixed $definition, object $container ): ServiceDefinition;
```
Process the Object




## Container\Definition\Processor\ParameterProcessor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/ParameterProcessor.zep)


-   __Namespace__

    - `Phalcon\Container\Definition\Processor`

-   __Uses__
    
    - `Closure`
    - `Phalcon\Container\Definition\DefinitionType`
    - `Phalcon\Container\Definition\ServiceDefinition`

-   __Extends__
    

-   __Implements__
    
    - `Processor`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function canProcess( mixed $definition ): bool;
```
Whetehr the definition is a parameter


```php
public function process( string $name, mixed $definition, object $container ): ServiceDefinition;
```
Process the parameter




## Container\Definition\Processor\Processor ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/Processor.zep)


-   __Namespace__

    - `Phalcon\Container\Definition\Processor`

-   __Uses__
    
    - `Phalcon\Container\Definition\ServiceDefinition`

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function canProcess( mixed $definition ): bool;
```
Can this definition be processed?


```php
public function process( string $name, mixed $definition, object $container ): ServiceDefinition;
```
Process the definition




## Container\Definition\Processor\StringProcessor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/StringProcessor.zep)


-   __Namespace__

    - `Phalcon\Container\Definition\Processor`

-   __Uses__
    
    - `Phalcon\Container\Definition\DefinitionType`
    - `Phalcon\Container\Definition\ServiceDefinition`

-   __Extends__
    

-   __Implements__
    
    - `Processor`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function canProcess( mixed $definition ): bool;
```
Whether the definition is a class string


```php
public function process( string $name, mixed $definition, object $container ): ServiceDefinition;
```
Process the class string




## Container\Definition\ServiceDefinition 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/ServiceDefinition.zep)


-   __Namespace__

    - `Phalcon\Container\Definition`

-   __Uses__
    
    - `Phalcon\Container\Exceptions\FrozenDefinition`
    - `Phalcon\Container\Exceptions\InvalidExtender`
    - `Phalcon\Container\Exceptions\NoClassSet`
    - `Phalcon\Container\Exceptions\NoFactorySet`
    - `ReflectionClass`
    - `ReflectionException`

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @phpstan-var array<array-key, mixed>
 * @var array
 */
protected $arguments;

/**
 * @var object | null
 */
protected $container;

/**
 * @var string | null
 */
protected $className;

/**
 * @var array
 */
protected $constructorArgs;

/**
 * @var array<array-key, callable>
 */
protected $extenders;

/**
 * @var callable | null
 */
protected $factory;

/**
 * @var bool
 */
protected $frozen = false;

/**
 * @var bool
 */
protected $isCacheable = false;

/**
 * @var string
 */
protected $lifetime;

/**
 *  @var mixed
 */
protected $raw;

/**
 *  @var string
 */
protected $serviceName;

/**
 * @phpstan-var array<array-key, string>
 * @var array
 */
protected $tags;

/**
 *  @var string
 */
protected $type;

```

### Methods

```php
public function __construct( string $serviceName, string $type, mixed $raw = null );
```



```php
public function addExtender( callable $extender ): static;
```
Adds an extender


```php
public function addTag( string $tag ): static;
```
Adds a tag


```php
public function buildService( object $container ): object;
```
Builds a service and returns the instance back


```php
public function freeze( object $container ): void;
```
Freezes the container


```php
public function getArguments(): array;
```
Returns the arguments


```php
public function getClass(): string;
```
Returns the class


```php
public function getConstructorArgs(): array;
```
Returns the constructor arguments


```php
public function getExtenders(): array;
```
Returns the extenders


```php
public function getFactory(): callable;
```
Returns the factory


```php
public function getLifetime(): string;
```
Returns the lifetime


```php
public function getServiceName(): string;
```
Returns the name of the service


```php
public function getTags(): array;
```
Returns the tags


```php
public function getType(): string;
```
Returns the type


```php
public function hasClass(): bool;
```
Does it have a class


```php
public function hasExtenders(): bool;
```
Do we have extenders


```php
public function hasFactory(): bool;
```
Does it have a factory


```php
public function isCacheable(): bool;
```
Is it cacheable


```php
public function isFrozen(): bool;
```
Is it frozen


```php
public function setArgument( mixed $param, mixed $value ): static;
```
Set an argument


```php
public function setClass( string $className ): static;
```
Set a class


```php
public function setContainer( object $container ): static;
```
Set the container


```php
public function setExtenders( array $extenders ): static;
```
Set extenders


```php
public function setFactory( callable $factory ): static;
```
Set a factory


```php
public function setIsCacheable( bool $isCacheable ): static;
```
Set cachable


```php
public function setLifetime( string $lifetime ): static;
```
Set lifetime


```php
public function unsetClass(): static;
```
Unset class


```php
public function unsetExtenders(): static;
```
Unset extenders


```php
public function unsetFactory(): static;
```
Unset the factory


```php
protected function checkFrozen(): void;
```
Check if frozen




## Container\Definition\ServiceLifetime 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/ServiceLifetime.zep)


-   __Namespace__

    - `Phalcon\Container\Definition`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Constants
```php
const SCOPED = SCOPED;
const SINGLETON = SINGLETON;
const TRANSIENT = TRANSIENT;
```


## Container\Exceptions\CannotExtendResolved 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/CannotExtendResolved.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
Cannot extend a resolved service




## Container\Exceptions\CannotResolveParameter 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/CannotResolveParameter.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $param, string $className );
```
Cannot resolve a parameter




## Container\Exceptions\CircularAliasFound 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/CircularAliasFound.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
Circular Alias found




## Container\Exceptions\ContainerThrowable ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ContainerThrowable.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    
    - `Phalcon\Contracts\Container\Ioc\IocThrowable`
    - `Phalcon\Contracts\Container\Resolver\ResolverThrowable`
    - `Phalcon\Contracts\Container\Service\Throwable`

-   __Extends__
    
    `IocThrowable`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md



## Container\Exceptions\EnvNotDefined ![Final](../assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/EnvNotDefined.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $varname );
```





## Container\Exceptions\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/Exception.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    
    - `Exception`

-   __Extends__
    
    `BaseException`

-   __Implements__
    
    - `ContainerThrowable`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md



## Container\Exceptions\FrozenDefinition 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/FrozenDefinition.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
Definition is frozen




## Container\Exceptions\InstanceNotFound ![Final](../assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/InstanceNotFound.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```





## Container\Exceptions\InvalidExtender 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/InvalidExtender.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $service, string $key );
```
Invalid extender (not callable)




## Container\Exceptions\NoClassSet 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/NoClassSet.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
No set for service




## Container\Exceptions\NoFactorySet 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/NoFactorySet.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
No factory for service




## Container\Exceptions\NoProcessorFound 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/NoProcessorFound.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct();
```
No processor found




## Container\Exceptions\ParameterNotFound ![Final](../assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ParameterNotFound.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```





## Container\Exceptions\ServiceNotFound 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ServiceNotFound.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
Service not found




## Container\Exceptions\ServiceNotRegistered 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ServiceNotRegistered.zep)


-   __Namespace__

    - `Phalcon\Container\Exceptions`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __construct( string $name );
```
Service not registered




## Container\Provider\Cli 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Provider/Cli.zep)


-   __Namespace__

    - `Phalcon\Container\Provider`

-   __Uses__
    
    - `Phalcon\Auth\Access\AccessLocator`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Contracts\Container\Service\Provider`
    - `Phalcon\Filter\Filter`
    - `Phalcon\Filter\FilterFactory`

-   __Extends__
    

-   __Implements__
    
    - `Provider`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function provide( Collection $services ): void;
```
Provider for commonly used CLI applications




## Container\Provider\Web 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Provider/Web.zep)


-   __Namespace__

    - `Phalcon\Container\Provider`

-   __Uses__
    
    - `Phalcon\Auth\Access\AccessLocator`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Contracts\Container\Service\Provider`
    - `Phalcon\Filter\Filter`
    - `Phalcon\Filter\FilterFactory`

-   __Extends__
    

-   __Implements__
    
    - `Provider`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function provide( Collection $services ): void;
```
Provider for commonly used Web applications




## Container\Resolver\Lazy\ArrayValues 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/ArrayValues.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    
    - `ArrayAccess`
    - `ArrayIterator`
    - `Countable`
    - `IteratorAggregate`

-   __Extends__
    
    `Lazy`

-   __Implements__
    
    - `ArrayAccess`
    - `Countable`
    - `IteratorAggregate`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<array-key, mixed>
 */
protected $values;

```

### Methods

```php
public function __construct( array $values = [] );
```



```php
public function count(): int;
```



```php
public function getIterator(): ArrayIterator;
```



```php
public function merge( mixed $values ): void;
```



```php
public function offsetExists( mixed $offset ): bool;
```



```php
public function offsetGet( mixed $offset ): mixed;
```



```php
public function offsetSet( mixed $offset, mixed $value ): void;
```



```php
public function offsetUnset( mixed $offset ): void;
```



```php
public function resolve( object $ioc ): array;
```
Resolve to an array, where each element has itself been lazy-resolved.


```php
protected function resolveValue( object $ioc, mixed $value ): mixed;
```



```php
protected function resolveValues( object $ioc, array $values ): array;
```





## Container\Resolver\Lazy\Call 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Call.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var mixed
 */
protected $callableObject;

```

### Methods

```php
public function __construct( callable $callableObject );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve the callable




## Container\Resolver\Lazy\CallableGet 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/CallableGet.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var string|Lazy
 */
protected $id;

```

### Methods

```php
public function __construct( mixed $id );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve to a closure on a get()




## Container\Resolver\Lazy\CallableNew 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/CallableNew.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var string|Lazy
 */
protected $id;

```

### Methods

```php
public function __construct( mixed $id );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve to a closure on a new()




## Container\Resolver\Lazy\CsEnv 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/CsEnv.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    
    - `Phalcon\Container\Exceptions\EnvNotDefined`

-   __Extends__
    
    `Env`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function resolve( object $ioc ): array;
```
Resolve the getEnv() from keys as a comma separated list




## Container\Resolver\Lazy\Env 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Env.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    
    - `Phalcon\Container\Exceptions\EnvNotDefined`

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var string
 */
protected $varname;

/**
 * @var string|null
 */
protected $vartype;

```

### Methods

```php
public function __construct( string $varname, string $vartype = null );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve an environment variable


```php
protected function cast( mixed $value ): mixed;
```
Cast a value to the defined type (if any)


```php
protected function getEnv(): string;
```
Return the env value




## Container\Resolver\Lazy\EnvDefault 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/EnvDefault.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    
    - `Phalcon\Container\Exceptions\EnvNotDefined`

-   __Extends__
    
    `Env`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var mixed
 */
private $defaultValue;

```

### Methods

```php
public function __construct( string $varname, mixed $defaultValue, string $vartype = null );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve an environment variable, returning the default if not defined




## Container\Resolver\Lazy\FunctionCall 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/FunctionCall.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<array-key, mixed>
 */
protected $arguments;

/**
 * @var string
 */
protected $functionName;

```

### Methods

```php
public function __construct( string $functionName, array $arguments );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve a function




## Container\Resolver\Lazy\Get 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Get.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var string|Lazy
 */
protected $id;

```

### Methods

```php
public function __construct( mixed $id );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve a shared instance




## Container\Resolver\Lazy\GetCall 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/GetCall.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<array-key, mixed>
 */
protected $arguments;

/**
 * @var string|Lazy
 */
protected $id;

/**
 * @var string
 */
protected $method;

```

### Methods

```php
public function __construct( mixed $id, string $method, array $arguments );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve a shared instance method call




## Container\Resolver\Lazy\Lazy ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Lazy.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    
    - `Phalcon\Contracts\Container\Resolver\Resolvable`

-   __Extends__
    

-   __Implements__
    
    - `Resolvable`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function __invoke( object $ioc ): mixed;
```



```php
abstract public function resolve( object $ioc ): mixed;
```



```php
protected function resolveArgument( object $ioc, mixed $argument ): mixed;
```



```php
protected function resolveArguments( object $ioc, array $arguments ): array;
```





## Container\Resolver\Lazy\LazyFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/LazyFactory.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public static function arrayValues( array $values ): ArrayValues;
```



```php
public static function call( callable $callableObject ): Call;
```



```php
public static function callableGet( string $id ): CallableGet;
```



```php
public static function callableNew( string $id ): CallableNew;
```



```php
public static function csEnv( string $name, string $type = null ): CsEnv;
```



```php
public static function env( string $name, string $type = null ): Env;
```



```php
public static function envDefault( string $name, mixed $defaultValue, string $type = null ): EnvDefault;
```



```php
public static function functionCall( string $functionName, array $args ): FunctionCall;
```



```php
public static function get( string $id ): Get;
```



```php
public static function getCall( string $id, string $method, array $args ): GetCall;
```



```php
public static function newCall( string $id, string $method, array $args ): NewCall;
```



```php
public static function newInstance( string $id ): NewInstance;
```



```php
public static function staticCall( string $className, string $method, array $args ): StaticCall;
```





## Container\Resolver\Lazy\NewCall 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/NewCall.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<array-key, mixed>
 */
protected $arguments;

/**
 * @var string|Lazy
 */
protected $id;

/**
 * @var string
 */
protected $method;

```

### Methods

```php
public function __construct( mixed $id, string $method, array $arguments );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve a new instance method call




## Container\Resolver\Lazy\NewInstance 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/NewInstance.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var string|Lazy
 */
protected $id;

```

### Methods

```php
public function __construct( mixed $id );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve a new instance




## Container\Resolver\Lazy\StaticCall 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/StaticCall.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver\Lazy`

-   __Uses__
    

-   __Extends__
    
    `Lazy`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Properties
```php
/**
 * @var array<array-key, mixed>
 */
protected $arguments;

/**
 * @var string|Lazy
 */
protected $className;

/**
 * @var string
 */
protected $method;

```

### Methods

```php
public function __construct( mixed $className, string $method, array $arguments );
```



```php
public function resolve( object $ioc ): mixed;
```
Resolve a static method call




## Container\Resolver\Resolver 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Resolver.zep)


-   __Namespace__

    - `Phalcon\Container\Resolver`

-   __Uses__
    
    - `Closure`
    - `Phalcon\Container\Exceptions\CannotResolveParameter`
    - `Phalcon\Container\Resolver\Lazy\Lazy`
    - `Phalcon\Contracts\Container\Resolver\ResolverService`
    - `ReflectionClass`
    - `ReflectionException`
    - `ReflectionFunction`
    - `ReflectionMethod`
    - `ReflectionNamedType`
    - `ReflectionParameter`
    - `ReflectionType`

-   __Extends__
    

-   __Implements__
    
    - `ResolverService`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. The
latter two are copied and re-implemented here: service-interop is not yet
published on Packagist, and resolver-interop requires PHP 8.4 (this project
targets PHP 8.1). Once both packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md


### Methods

```php
public function isResolvableClass( string $className ): bool;
```
Is this a resolvable class?


```php
public function resolveCall( object $ioc, callable $callableObject, array $arguments ): mixed;
```
Resolve a call


```php
public function resolveClass( object $ioc, string $className, array $arguments ): object;
```
Resolve a class


```php
public function resolveMethod( object $ioc, ReflectionMethod $method, object $instance ): void;
```
Resolve a method


```php
public function resolveParameter( object $ioc, ReflectionParameter $parameter ): mixed;
```
Resolve parameters


```php
public function resolveParameters( object $ioc, array $parameters, array $arguments ): array;
```



```php
public function resolveType( object $ioc, mixed $type ): mixed;
```
type is ReflectionType


