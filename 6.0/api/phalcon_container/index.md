---
title: "Phalcon Container"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Container

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Container\Container

Class

- **`Phalcon\Container\Container`** - implements [`Phalcon\Contracts\Container\Service\Collection`](/6.0/api/phalcon_contracts/#contractscontainerservicecollection), [`Phalcon\Contracts\Container\Service\Enumerable`](/6.0/api/phalcon_contracts/#contractscontainerserviceenumerable)

`Closure` · `Phalcon\Container\Definition\Processor\ClosureProcessor` · `Phalcon\Container\Definition\Processor\ObjectProcessor` · `Phalcon\Container\Definition\Processor\Processor` · `Phalcon\Container\Definition\Processor\StringProcessor` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Container\Definition\ServiceLifetime` · `Phalcon\Container\Exceptions\CannotExtendResolved` · `Phalcon\Container\Exceptions\CircularAliasFound` · `Phalcon\Container\Exceptions\InstanceNotFound` · `Phalcon\Container\Exceptions\NoProcessorFound` · `Phalcon\Container\Exceptions\ParameterNotFound` · `Phalcon\Container\Exceptions\ServiceNotFound` · `Phalcon\Container\Exceptions\ServiceNotRegistered` · `Phalcon\Container\Resolver\Lazy\Lazy` · `Phalcon\Container\Resolver\Resolver` · `Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Enumerable` · `Phalcon\Di\InjectionAwareInterface` · `ReflectionException`

### Method Summary

- `public __construct()`

- `public bind(string $interfaceName, string $concrete): ServiceDefinition` — Bind an interface to a concrete class

- `public callableGet(string $name): Closure` — Resolve to a closure on a get()

- `public callableNew(string $name): Closure` — Resolve to a closure on a new()

- `public extend(string $name, callable $callableObject): void` — Extends the definition

- `public get(string $name): mixed` — Resolve and return an element registerd in the container

- `public getAlias(string $name): string` — Return an alias

- `public getByTag(string $tag): array` — Return services by tag

- `public getDefinition(string $name): ServiceDefinition` — Return the service definition

- `public getInstance(string $name): object` — Return a stored instance

- `public getParameter(string $name): mixed` — Return a parameter

- `public getResolver(): Resolver` — Return the resolver

- `public getService(string $serviceName): object` — Resolve an return a service

- `public getServiceNames(): array` — Returns the names of every registered service definition. Names that

- `public has(string $name): bool` — Does the container have a particular service

- `public hasAlias(string $name): bool` — Does the service have an alias

- `public hasDefinition(string $name): bool` — Does the service have a definition

- `public hasInstance(string $name): bool` — Does the service have an instance

- `public hasParameter(string $name): bool` — Does the service have a parameter

- `public hasService(string $serviceName): bool` — Does the container have a particular service

- `public isAutowireEnabled(): bool` — Is AutoWiring enabled

- `public new(string $name): mixed` — Resolve and return a new service

- `public newDefinition(string $name): ServiceDefinition` — Return a new service definition

- `public set(string $name, mixed $definition): ServiceDefinition` — Set a service

- `public setAlias(string $name, string $alias): static` — Set an alias

- `public setAutowire(bool $enabled): static` — Set AutoWire

- `public setDefinition(string $name, ServiceDefinition $definition): static` — Set a definition

- `public setInstance(string $name, object $instance, string $lifetime): static` — Set an instance

- `public setParameter(string $name, mixed $value): static` — Set a parameter

- `public setTag(string $tag, string $serviceName): void` — Register a tag with a service

- `public unsetAlias(string $name): void` — Remove an alias

- `public unsetDefinition(string $name): void` — Remove a definition

- `public unsetInstance(string $name): void` — Remove an instance

- `public unsetInstances(string $lifetime): void` — Remove instances based on lifetime

- `public unsetParameter(string $name): void` — Remove a parameter

### Properties

- `protected array $aliases = []`

- `protected bool $autowire = true`

- `protected array $instanceLifetimes = []`

- `protected array $instances = []`

- `protected array $parameters = []`

- `protected array $processors = []`

- `protected Resolver $resolver`

- `protected array $services = []`

- `protected array $tags = []`

### Methods

<h4 id="containercontainer-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

<h4 id="containercontainer-bind"><code>bind()</code></h4>

```php
public function bind(
    string $interfaceName,
    string $concrete
): ServiceDefinition;
```

Bind an interface to a concrete class

<h4 id="containercontainer-callableget"><code>callableGet()</code></h4>

```php
public function callableGet( string $name ): Closure;
```

Resolve to a closure on a get()

<h4 id="containercontainer-callablenew"><code>callableNew()</code></h4>

```php
public function callableNew( string $name ): Closure;
```

Resolve to a closure on a new()

<h4 id="containercontainer-extend"><code>extend()</code></h4>

```php
public function extend(
    string $name,
    callable $callableObject
): void;
```

Extends the definition

<h4 id="containercontainer-get"><code>get()</code></h4>

```php
public function get( string $name ): mixed;
```

Resolve and return an element registerd in the container

<h4 id="containercontainer-getalias"><code>getAlias()</code></h4>

```php
public function getAlias( string $name ): string;
```

Return an alias

<h4 id="containercontainer-getbytag"><code>getByTag()</code></h4>

```php
public function getByTag( string $tag ): array;
```

Return services by tag

<h4 id="containercontainer-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition( string $name ): ServiceDefinition;
```

Return the service definition

<h4 id="containercontainer-getinstance"><code>getInstance()</code></h4>

```php
public function getInstance( string $name ): object;
```

Return a stored instance

<h4 id="containercontainer-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( string $name ): mixed;
```

Return a parameter

<h4 id="containercontainer-getresolver"><code>getResolver()</code></h4>

```php
public function getResolver(): Resolver;
```

Return the resolver

<h4 id="containercontainer-getservice"><code>getService()</code></h4>

```php
public function getService( string $serviceName ): object;
```

Resolve an return a service

<h4 id="containercontainer-getservicenames"><code>getServiceNames()</code></h4>

```php
public function getServiceNames(): array;
```

Returns the names of every registered service definition. Names that
only exist as an alias, a pre-set instance or a parameter are not
included.

<h4 id="containercontainer-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Does the container have a particular service

<h4 id="containercontainer-hasalias"><code>hasAlias()</code></h4>

```php
public function hasAlias( string $name ): bool;
```

Does the service have an alias

<h4 id="containercontainer-hasdefinition"><code>hasDefinition()</code></h4>

```php
public function hasDefinition( string $name ): bool;
```

Does the service have a definition

<h4 id="containercontainer-hasinstance"><code>hasInstance()</code></h4>

```php
public function hasInstance( string $name ): bool;
```

Does the service have an instance

<h4 id="containercontainer-hasparameter"><code>hasParameter()</code></h4>

```php
public function hasParameter( string $name ): bool;
```

Does the service have a parameter

<h4 id="containercontainer-hasservice"><code>hasService()</code></h4>

```php
public function hasService( string $serviceName ): bool;
```

Does the container have a particular service

<h4 id="containercontainer-isautowireenabled"><code>isAutowireEnabled()</code></h4>

```php
public function isAutowireEnabled(): bool;
```

Is AutoWiring enabled

<h4 id="containercontainer-new"><code>new()</code></h4>

```php
public function new( string $name ): mixed;
```

Resolve and return a new service

<h4 id="containercontainer-newdefinition"><code>newDefinition()</code></h4>

```php
public function newDefinition( string $name ): ServiceDefinition;
```

Return a new service definition

<h4 id="containercontainer-set"><code>set()</code></h4>

```php
public function set(
    string $name,
    mixed $definition
): ServiceDefinition;
```

Set a service

<h4 id="containercontainer-setalias"><code>setAlias()</code></h4>

```php
public function setAlias(
    string $name,
    string $alias
): static;
```

Set an alias

<h4 id="containercontainer-setautowire"><code>setAutowire()</code></h4>

```php
public function setAutowire( bool $enabled ): static;
```

Set AutoWire

<h4 id="containercontainer-setdefinition"><code>setDefinition()</code></h4>

```php
public function setDefinition(
    string $name,
    ServiceDefinition $definition
): static;
```

Set a definition

<h4 id="containercontainer-setinstance"><code>setInstance()</code></h4>

```php
public function setInstance(
    string $name,
    object $instance,
    string $lifetime
): static;
```

Set an instance

<h4 id="containercontainer-setparameter"><code>setParameter()</code></h4>

```php
public function setParameter(
    string $name,
    mixed $value
): static;
```

Set a parameter

<h4 id="containercontainer-settag"><code>setTag()</code></h4>

```php
public function setTag(
    string $tag,
    string $serviceName
): void;
```

Register a tag with a service

<h4 id="containercontainer-unsetalias"><code>unsetAlias()</code></h4>

```php
public function unsetAlias( string $name ): void;
```

Remove an alias

<h4 id="containercontainer-unsetdefinition"><code>unsetDefinition()</code></h4>

```php
public function unsetDefinition( string $name ): void;
```

Remove a definition

<h4 id="containercontainer-unsetinstance"><code>unsetInstance()</code></h4>

```php
public function unsetInstance( string $name ): void;
```

Remove an instance

<h4 id="containercontainer-unsetinstances"><code>unsetInstances()</code></h4>

```php
public function unsetInstances( string $lifetime ): void;
```

Remove instances based on lifetime

<h4 id="containercontainer-unsetparameter"><code>unsetParameter()</code></h4>

```php
public function unsetParameter( string $name ): void;
```

Remove a parameter


## Container\ContainerFactory

Class

- **`Phalcon\Container\ContainerFactory`** - implements [`Phalcon\Contracts\Container\Ioc\IocContainerFactory`](/6.0/api/phalcon_contracts/#contractscontaineriocioccontainerfactory)

`Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Ioc\IocContainerFactory` · `Phalcon\Contracts\Container\Service\Provider`

### Method Summary

- `public addProvider(Provider $provider): static` — Adds a provider

- `public newContainer(): Container` — Returns a new container

### Properties

- `protected array $providers = []`

### Methods

<h4 id="containercontainerfactory-addprovider"><code>addProvider()</code></h4>

```php
public function addProvider( Provider $provider ): static;
```

Adds a provider

<h4 id="containercontainerfactory-newcontainer"><code>newContainer()</code></h4>

```php
public function newContainer(): Container;
```

Returns a new container


## Container\Definition\DefinitionType

Class

- **`Phalcon\Container\Definition\DefinitionType`**

### Constants

- `const string CLOSURE_TYPE = "closure"`

- `const string OBJECT_TYPE = "object"`

- `const string PARAMETER_TYPE = "parameter"`

- `const string STRING_TYPE = "string"`


## Container\Definition\Processor\ClosureProcessor

Class

- **`Phalcon\Container\Definition\Processor\ClosureProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

`Closure` · `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`

### Method Summary

- `public canProcess(mixed $definition): bool` — Wheteher the definition is a Closure

- `public process(string $name, mixed $definition, object $container): ServiceDefinition` — Process the Closure

### Methods

<h4 id="containerdefinitionprocessorclosureprocessor-canprocess"><code>canProcess()</code></h4>

```php
public function canProcess( mixed $definition ): bool;
```

Wheteher the definition is a Closure

<h4 id="containerdefinitionprocessorclosureprocessor-process"><code>process()</code></h4>

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the Closure


## Container\Definition\Processor\ObjectProcessor

Class

- **`Phalcon\Container\Definition\Processor\ObjectProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

`Closure` · `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`

### Method Summary

- `public canProcess(mixed $definition): bool` — Whether the definition is an Object (not Closure)

- `public process(string $name, mixed $definition, object $container): ServiceDefinition` — Process the Object

### Methods

<h4 id="containerdefinitionprocessorobjectprocessor-canprocess"><code>canProcess()</code></h4>

```php
public function canProcess( mixed $definition ): bool;
```

Whether the definition is an Object (not Closure)

<h4 id="containerdefinitionprocessorobjectprocessor-process"><code>process()</code></h4>

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the Object


## Container\Definition\Processor\ParameterProcessor

Class

- **`Phalcon\Container\Definition\Processor\ParameterProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

`Closure` · `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`

### Method Summary

- `public canProcess(mixed $definition): bool` — Whetehr the definition is a parameter

- `public process(string $name, mixed $definition, object $container): ServiceDefinition` — Process the parameter

### Methods

<h4 id="containerdefinitionprocessorparameterprocessor-canprocess"><code>canProcess()</code></h4>

```php
public function canProcess( mixed $definition ): bool;
```

Whetehr the definition is a parameter

<h4 id="containerdefinitionprocessorparameterprocessor-process"><code>process()</code></h4>

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the parameter


## Container\Definition\Processor\Processor

Interface

- **`Phalcon\Container\Definition\Processor\Processor`**

`Phalcon\Container\Definition\ServiceDefinition`

### Method Summary

- `public canProcess(mixed $definition): bool` — Can this definition be processed?

- `public process(string $name, mixed $definition, object $container): ServiceDefinition` — Process the definition

### Methods

<h4 id="containerdefinitionprocessorprocessor-canprocess"><code>canProcess()</code></h4>

```php
public function canProcess( mixed $definition ): bool;
```

Can this definition be processed?

<h4 id="containerdefinitionprocessorprocessor-process"><code>process()</code></h4>

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the definition


## Container\Definition\Processor\StringProcessor

Class

- **`Phalcon\Container\Definition\Processor\StringProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

`Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`

### Method Summary

- `public canProcess(mixed $definition): bool` — Whether the definition is a class string

- `public process(string $name, mixed $definition, object $container): ServiceDefinition` — Process the class string

### Methods

<h4 id="containerdefinitionprocessorstringprocessor-canprocess"><code>canProcess()</code></h4>

```php
public function canProcess( mixed $definition ): bool;
```

Whether the definition is a class string

<h4 id="containerdefinitionprocessorstringprocessor-process"><code>process()</code></h4>

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the class string


## Container\Definition\ServiceDefinition

Class

- **`Phalcon\Container\Definition\ServiceDefinition`**

`Phalcon\Container\Exceptions\FrozenDefinition` · `Phalcon\Container\Exceptions\InvalidExtender` · `Phalcon\Container\Exceptions\NoClassSet` · `Phalcon\Container\Exceptions\NoFactorySet` · `Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Ioc\IocContainer` · `Phalcon\Contracts\Container\Resolver\Resolvable` · `Phalcon\Contracts\Container\Service\Collection` · `ReflectionClass` · `ReflectionException`

### Method Summary

- `public __construct(string $serviceName, string $type, mixed $raw = null)`

- `public addExtender(callable $extender): static` — Adds an extender

- `public addTag(string $tag): static` — Adds a tag

- `public buildService(object $container): object` — Builds a service and returns the instance back

- `public freeze(object $container): void` — Freezes the container

- `public getArguments(): array` — Returns the arguments

- `public getClass(): string` — Returns the class

- `public getConstructorArgs(): array` — Returns the constructor arguments

- `public getExtenders(): array` — Returns the extenders

- `public getFactory(): callable` — Returns the factory

- `public getLifetime(): string` — Returns the lifetime

- `public getServiceName(): string` — Returns the name of the service

- `public getTags(): array` — Returns the tags

- `public getType(): string` — Returns the type

- `public hasClass(): bool` — Does it have a class

- `public hasExtenders(): bool` — Do we have extenders

- `public hasFactory(): bool` — Does it have a factory

- `public isCacheable(): bool` — Is it cacheable

- `public isFrozen(): bool` — Is it frozen

- `public setArgument(mixed $param, mixed $value): static` — Set an argument

- `public setClass(string $className): static` — Set a class

- `public setContainer(object $container): static` — Set the container

- `public setExtenders(array $extenders): static` — Set extenders

- `public setFactory(callable $factory): static` — Set a factory

- `public setIsCacheable(bool $isCacheable): static` — Set cachable

- `public setLifetime(string $lifetime): static` — Set lifetime

- `public unsetClass(): static` — Unset class

- `public unsetExtenders(): static` — Unset extenders

- `public unsetFactory(): static` — Unset the factory

- `protected checkFrozen(): void` — Check if frozen

### Properties

- `protected array $arguments = []`

- `protected string|null $className = null`

- `protected array $constructorArgs = []`

- `protected object|null $container = null`

- `protected array $extenders = []`

- `protected callable|null $factory = null`

- `protected bool $frozen = false`

- `protected bool $isCacheable = false`

- `protected string $lifetime = ServiceLifetime::SCOPED`

- `protected mixed $raw = null`

- `protected string $serviceName`

- `protected array $tags = []`

- `protected string $type`

### Methods

<h4 id="containerdefinitionservicedefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $serviceName,
    string $type,
    mixed $raw = null
);
```

<h4 id="containerdefinitionservicedefinition-addextender"><code>addExtender()</code></h4>

```php
public function addExtender( callable $extender ): static;
```

Adds an extender

<h4 id="containerdefinitionservicedefinition-addtag"><code>addTag()</code></h4>

```php
public function addTag( string $tag ): static;
```

Adds a tag

<h4 id="containerdefinitionservicedefinition-buildservice"><code>buildService()</code></h4>

```php
public function buildService( object $container ): object;
```

Builds a service and returns the instance back

<h4 id="containerdefinitionservicedefinition-freeze"><code>freeze()</code></h4>

```php
public function freeze( object $container ): void;
```

Freezes the container

<h4 id="containerdefinitionservicedefinition-getarguments"><code>getArguments()</code></h4>

```php
public function getArguments(): array;
```

Returns the arguments

<h4 id="containerdefinitionservicedefinition-getclass"><code>getClass()</code></h4>

```php
public function getClass(): string;
```

Returns the class

<h4 id="containerdefinitionservicedefinition-getconstructorargs"><code>getConstructorArgs()</code></h4>

```php
public function getConstructorArgs(): array;
```

Returns the constructor arguments

<h4 id="containerdefinitionservicedefinition-getextenders"><code>getExtenders()</code></h4>

```php
public function getExtenders(): array;
```

Returns the extenders

<h4 id="containerdefinitionservicedefinition-getfactory"><code>getFactory()</code></h4>

```php
public function getFactory(): callable;
```

Returns the factory

<h4 id="containerdefinitionservicedefinition-getlifetime"><code>getLifetime()</code></h4>

```php
public function getLifetime(): string;
```

Returns the lifetime

<h4 id="containerdefinitionservicedefinition-getservicename"><code>getServiceName()</code></h4>

```php
public function getServiceName(): string;
```

Returns the name of the service

<h4 id="containerdefinitionservicedefinition-gettags"><code>getTags()</code></h4>

```php
public function getTags(): array;
```

Returns the tags

<h4 id="containerdefinitionservicedefinition-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Returns the type

<h4 id="containerdefinitionservicedefinition-hasclass"><code>hasClass()</code></h4>

```php
public function hasClass(): bool;
```

Does it have a class

<h4 id="containerdefinitionservicedefinition-hasextenders"><code>hasExtenders()</code></h4>

```php
public function hasExtenders(): bool;
```

Do we have extenders

<h4 id="containerdefinitionservicedefinition-hasfactory"><code>hasFactory()</code></h4>

```php
public function hasFactory(): bool;
```

Does it have a factory

<h4 id="containerdefinitionservicedefinition-iscacheable"><code>isCacheable()</code></h4>

```php
public function isCacheable(): bool;
```

Is it cacheable

<h4 id="containerdefinitionservicedefinition-isfrozen"><code>isFrozen()</code></h4>

```php
public function isFrozen(): bool;
```

Is it frozen

<h4 id="containerdefinitionservicedefinition-setargument"><code>setArgument()</code></h4>

```php
public function setArgument(
    mixed $param,
    mixed $value
): static;
```

Set an argument

<h4 id="containerdefinitionservicedefinition-setclass"><code>setClass()</code></h4>

```php
public function setClass( string $className ): static;
```

Set a class

<h4 id="containerdefinitionservicedefinition-setcontainer"><code>setContainer()</code></h4>

```php
public function setContainer( object $container ): static;
```

Set the container

<h4 id="containerdefinitionservicedefinition-setextenders"><code>setExtenders()</code></h4>

```php
public function setExtenders( array $extenders ): static;
```

Set extenders

<h4 id="containerdefinitionservicedefinition-setfactory"><code>setFactory()</code></h4>

```php
public function setFactory( callable $factory ): static;
```

Set a factory

<h4 id="containerdefinitionservicedefinition-setiscacheable"><code>setIsCacheable()</code></h4>

```php
public function setIsCacheable( bool $isCacheable ): static;
```

Set cachable

<h4 id="containerdefinitionservicedefinition-setlifetime"><code>setLifetime()</code></h4>

```php
public function setLifetime( string $lifetime ): static;
```

Set lifetime

<h4 id="containerdefinitionservicedefinition-unsetclass"><code>unsetClass()</code></h4>

```php
public function unsetClass(): static;
```

Unset class

<h4 id="containerdefinitionservicedefinition-unsetextenders"><code>unsetExtenders()</code></h4>

```php
public function unsetExtenders(): static;
```

Unset extenders

<h4 id="containerdefinitionservicedefinition-unsetfactory"><code>unsetFactory()</code></h4>

```php
public function unsetFactory(): static;
```

Unset the factory

<h4 id="containerdefinitionservicedefinition-checkfrozen"><code>checkFrozen()</code></h4>

```php
protected function checkFrozen(): void;
```

Check if frozen


## Container\Definition\ServiceLifetime

Class

- **`Phalcon\Container\Definition\ServiceLifetime`**

### Constants

- `const string SCOPED = "SCOPED"`

- `const string SINGLETON = "SINGLETON"`

- `const string TRANSIENT = "TRANSIENT"`


## Container\Exceptions\CannotExtendResolved

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\CannotExtendResolved`**

### Method Summary

- `public __construct(string $name)` — Cannot extend a resolved service

### Methods

<h4 id="containerexceptionscannotextendresolved-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

Cannot extend a resolved service


## Container\Exceptions\CannotResolveParameter

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\CannotResolveParameter`**

### Method Summary

- `public __construct(string $param, string $className)` — Cannot resolve a parameter

### Methods

<h4 id="containerexceptionscannotresolveparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $param,
    string $className
);
```

Cannot resolve a parameter


## Container\Exceptions\CircularAliasFound

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\CircularAliasFound`**

### Method Summary

- `public __construct(string $name)` — Circular Alias found

### Methods

<h4 id="containerexceptionscircularaliasfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

Circular Alias found


## Container\Exceptions\ContainerThrowable

Interface

- `\Throwable`
  - [`Phalcon\Contracts\Container\Ioc\IocThrowable`](/6.0/api/phalcon_contracts/#contractscontaineriociocthrowable)
    - **`Phalcon\Container\Exceptions\ContainerThrowable`** - extends [`Phalcon\Contracts\Container\Ioc\IocThrowable`](/6.0/api/phalcon_contracts/#contractscontaineriociocthrowable), [`Phalcon\Contracts\Container\Resolver\ResolverThrowable`](/6.0/api/phalcon_contracts/#contractscontainerresolverresolverthrowable), [`Phalcon\Contracts\Container\Service\Throwable`](/6.0/api/phalcon_contracts/#contractscontainerservicethrowable)

`Phalcon\Contracts\Container\Ioc\IocThrowable` · `Phalcon\Contracts\Container\Resolver\ResolverThrowable` · `Phalcon\Contracts\Container\Service\Throwable`


## Container\Exceptions\EnvNotDefined

Final

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\EnvNotDefined`**

### Method Summary

- `public __construct(string $varname)`

### Methods

<h4 id="containerexceptionsenvnotdefined-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $varname );
```


## Container\Exceptions\Exception

Class

- `\Exception`
  - **`Phalcon\Container\Exceptions\Exception`** - implements [`Phalcon\Container\Exceptions\ContainerThrowable`](#containerexceptionscontainerthrowable)
    - [`Phalcon\Container\Exceptions\CannotExtendResolved`](#containerexceptionscannotextendresolved)
    - [`Phalcon\Container\Exceptions\CannotResolveParameter`](#containerexceptionscannotresolveparameter)
    - [`Phalcon\Container\Exceptions\CircularAliasFound`](#containerexceptionscircularaliasfound)
    - [`Phalcon\Container\Exceptions\EnvNotDefined`](#containerexceptionsenvnotdefined)
    - [`Phalcon\Container\Exceptions\FrozenDefinition`](#containerexceptionsfrozendefinition)
    - [`Phalcon\Container\Exceptions\InstanceNotFound`](#containerexceptionsinstancenotfound)
    - [`Phalcon\Container\Exceptions\InvalidExtender`](#containerexceptionsinvalidextender)
    - [`Phalcon\Container\Exceptions\NoClassSet`](#containerexceptionsnoclassset)
    - [`Phalcon\Container\Exceptions\NoFactorySet`](#containerexceptionsnofactoryset)
    - [`Phalcon\Container\Exceptions\NoProcessorFound`](#containerexceptionsnoprocessorfound)
    - [`Phalcon\Container\Exceptions\ParameterNotFound`](#containerexceptionsparameternotfound)
    - [`Phalcon\Container\Exceptions\ServiceNotFound`](#containerexceptionsservicenotfound)
    - [`Phalcon\Container\Exceptions\ServiceNotRegistered`](#containerexceptionsservicenotregistered)

`Exception`


## Container\Exceptions\FrozenDefinition

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\FrozenDefinition`**

### Method Summary

- `public __construct(string $name)` — Definition is frozen

### Methods

<h4 id="containerexceptionsfrozendefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

Definition is frozen


## Container\Exceptions\InstanceNotFound

Final

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\InstanceNotFound`**

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="containerexceptionsinstancenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Container\Exceptions\InvalidExtender

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\InvalidExtender`**

### Method Summary

- `public __construct(string $service, string $key)` — Invalid extender (not callable)

### Methods

<h4 id="containerexceptionsinvalidextender-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $service,
    string $key
);
```

Invalid extender (not callable)


## Container\Exceptions\NoClassSet

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\NoClassSet`**

### Method Summary

- `public __construct(string $name)` — No set for service

### Methods

<h4 id="containerexceptionsnoclassset-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

No set for service


## Container\Exceptions\NoFactorySet

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\NoFactorySet`**

### Method Summary

- `public __construct(string $name)` — No factory for service

### Methods

<h4 id="containerexceptionsnofactoryset-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

No factory for service


## Container\Exceptions\NoProcessorFound

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\NoProcessorFound`**

### Method Summary

- `public __construct()` — No processor found

### Methods

<h4 id="containerexceptionsnoprocessorfound-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

No processor found


## Container\Exceptions\ParameterNotFound

Final

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\ParameterNotFound`**

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="containerexceptionsparameternotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Container\Exceptions\ServiceNotFound

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\ServiceNotFound`**

### Method Summary

- `public __construct(string $name)` — Service not found

### Methods

<h4 id="containerexceptionsservicenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

Service not found


## Container\Exceptions\ServiceNotRegistered

Class

- `\Exception`
  - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
    - **`Phalcon\Container\Exceptions\ServiceNotRegistered`**

### Method Summary

- `public __construct(string $name)` — Service not registered

### Methods

<h4 id="containerexceptionsservicenotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

Service not registered


## Container\Provider\Cli

Class

- **`Phalcon\Container\Provider\Cli`** - implements [`Phalcon\Contracts\Container\Service\Provider`](/6.0/api/phalcon_contracts/#contractscontainerserviceprovider)

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Auth\Access\AccessLocator` · `Phalcon\Cli\Dispatcher` · `Phalcon\Cli\DispatcherInterface` · `Phalcon\Cli\Router` · `Phalcon\Cli\RouterInterface` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Provider` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterFactory` · `Phalcon\Filter\FilterInterface` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Model\Transaction\ManagerInterface` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

### Method Summary

- `public provide(Collection $services): void` — Provider for commonly used CLI applications

### Methods

<h4 id="containerprovidercli-provide"><code>provide()</code></h4>

```php
public function provide( Collection $services ): void;
```

Provider for commonly used CLI applications


## Container\Provider\Web

Class

- **`Phalcon\Container\Provider\Web`** - implements [`Phalcon\Contracts\Container\Service\Provider`](/6.0/api/phalcon_contracts/#contractscontainerserviceprovider)

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Assets\Manager` · `Phalcon\Auth\Access\AccessLocator` · `Phalcon\Container\Resolver\Lazy\LazyFactory` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Provider` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterFactory` · `Phalcon\Filter\FilterInterface` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Http\Response\Cookies` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Mvc\Dispatcher` · `Phalcon\Mvc\DispatcherInterface` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Model\Transaction\ManagerInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Url` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`

### Method Summary

- `public provide(Collection $services): void` — Provider for commonly used Web applications

### Methods

<h4 id="containerproviderweb-provide"><code>provide()</code></h4>

```php
public function provide( Collection $services ): void;
```

Provider for commonly used Web applications


## Container\Resolver\Lazy\ArrayValues

Class

@implements ArrayAccess&lt;array-key, mixed>
@implements IteratorAggregate&lt;array-key, mixed>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\ArrayValues`** - implements `\ArrayAccess`, `\Countable`, `\IteratorAggregate`

`ArrayAccess` · `ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Contracts\Container\ContainerTypes`

### Method Summary

- `public __construct(array $values = [])`

- `public count(): int`

- `public getIterator(): ArrayIterator`

- `public merge(iterable $values): void`

- `public offsetExists(mixed $offset): bool`

- `public offsetGet(mixed $offset): mixed`

- `public offsetSet(mixed $offset, mixed $value): void`

- `public offsetUnset(mixed $offset): void`

- `public resolve(object $ioc): array` — Resolve to an array, where each element has itself been lazy-resolved.

- `protected resolveValue(object $ioc, mixed $value): mixed`

- `protected resolveValues(object $ioc, array $values): array`

### Properties

- `protected array $values = []`

### Methods

<h4 id="containerresolverlazyarrayvalues-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $values = [] );
```

<h4 id="containerresolverlazyarrayvalues-count"><code>count()</code></h4>

```php
public function count(): int;
```

<h4 id="containerresolverlazyarrayvalues-getiterator"><code>getIterator()</code></h4>

```php
public function getIterator(): ArrayIterator;
```

<h4 id="containerresolverlazyarrayvalues-merge"><code>merge()</code></h4>

```php
public function merge( iterable $values ): void;
```

<h4 id="containerresolverlazyarrayvalues-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

<h4 id="containerresolverlazyarrayvalues-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $offset ): mixed;
```

<h4 id="containerresolverlazyarrayvalues-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

<h4 id="containerresolverlazyarrayvalues-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

<h4 id="containerresolverlazyarrayvalues-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): array;
```

Resolve to an array, where each element has itself been lazy-resolved.

<h4 id="containerresolverlazyarrayvalues-resolvevalue"><code>resolveValue()</code></h4>

```php
protected function resolveValue(
    object $ioc,
    mixed $value
): mixed;
```

<h4 id="containerresolverlazyarrayvalues-resolvevalues"><code>resolveValues()</code></h4>

```php
protected function resolveValues(
    object $ioc,
    array $values
): array;
```


## Container\Resolver\Lazy\Call

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\Call`**

### Method Summary

- `public __construct(mixed $callableObject)`

- `public resolve(object $ioc): mixed` — Resolve the callable

### Properties

- `protected mixed $callableObject`

### Methods

<h4 id="containerresolverlazycall-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $callableObject );
```

<h4 id="containerresolverlazycall-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve the callable


## Container\Resolver\Lazy\CallableGet

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\CallableGet`**

`Phalcon\Contracts\Container\Service\Collection`

### Method Summary

- `public __construct(Lazy|string $id)`

- `public resolve(object $ioc): mixed` — Resolve to a closure on a get()

### Properties

- `protected Lazy|string $id`

### Methods

<h4 id="containerresolverlazycallableget-__construct"><code>__construct()</code></h4>

```php
public function __construct( Lazy|string $id );
```

<h4 id="containerresolverlazycallableget-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve to a closure on a get()


## Container\Resolver\Lazy\CallableNew

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\CallableNew`**

`Phalcon\Contracts\Container\Service\Collection`

### Method Summary

- `public __construct(Lazy|string $id)`

- `public resolve(object $ioc): mixed` — Resolve to a closure on a new()

### Properties

- `protected Lazy|string $id`

### Methods

<h4 id="containerresolverlazycallablenew-__construct"><code>__construct()</code></h4>

```php
public function __construct( Lazy|string $id );
```

<h4 id="containerresolverlazycallablenew-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve to a closure on a new()


## Container\Resolver\Lazy\CsEnv

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - [`Phalcon\Container\Resolver\Lazy\Env`](#containerresolverlazyenv)
    - **`Phalcon\Container\Resolver\Lazy\CsEnv`**

`Phalcon\Container\Exceptions\EnvNotDefined` · `Phalcon\Contracts\Container\ContainerTypes`

### Method Summary

- `public resolve(object $ioc): array` — Resolve the getEnv() from keys as a comma separated list

### Methods

<h4 id="containerresolverlazycsenv-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): array;
```

Resolve the getEnv() from keys as a comma separated list


## Container\Resolver\Lazy\Env

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\Env`**
    - [`Phalcon\Container\Resolver\Lazy\CsEnv`](#containerresolverlazycsenv)
    - [`Phalcon\Container\Resolver\Lazy\EnvDefault`](#containerresolverlazyenvdefault)

`Phalcon\Container\Exceptions\EnvNotDefined`

### Method Summary

- `public __construct(string $varname, string|null $vartype = null)`

- `public resolve(object $ioc): mixed` — Resolve an environment variable

- `protected cast(mixed $value): mixed` — Cast a value to the defined type (if any)

- `protected getEnv(): string` — Return the env value

### Properties

- `protected string $varname`

- `protected string|null $vartype = null`

### Methods

<h4 id="containerresolverlazyenv-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $varname,
    string|null $vartype = null
);
```

<h4 id="containerresolverlazyenv-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve an environment variable

<h4 id="containerresolverlazyenv-cast"><code>cast()</code></h4>

```php
protected function cast( mixed $value ): mixed;
```

Cast a value to the defined type (if any)

<h4 id="containerresolverlazyenv-getenv"><code>getEnv()</code></h4>

```php
protected function getEnv(): string;
```

Return the env value


## Container\Resolver\Lazy\EnvDefault

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - [`Phalcon\Container\Resolver\Lazy\Env`](#containerresolverlazyenv)
    - **`Phalcon\Container\Resolver\Lazy\EnvDefault`**

`Phalcon\Container\Exceptions\EnvNotDefined`

### Method Summary

- `public __construct(string $varname, mixed $defaultValue, string|null $vartype = null)`

- `public resolve(object $ioc): mixed` — Resolve an environment variable, returning the default if not defined

### Methods

<h4 id="containerresolverlazyenvdefault-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $varname,
    mixed $defaultValue,
    string|null $vartype = null
);
```

<h4 id="containerresolverlazyenvdefault-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve an environment variable, returning the default if not defined


## Container\Resolver\Lazy\FunctionCall

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\FunctionCall`**

`Phalcon\Contracts\Container\ContainerTypes`

### Method Summary

- `public __construct(string $functionName, array $arguments)`

- `public resolve(object $ioc): mixed` — Resolve a function

### Properties

- `protected array $arguments`

- `protected string $functionName`

### Methods

<h4 id="containerresolverlazyfunctioncall-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $functionName,
    array $arguments
);
```

<h4 id="containerresolverlazyfunctioncall-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve a function


## Container\Resolver\Lazy\Get

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\Get`**

`Phalcon\Contracts\Container\Service\Collection`

### Method Summary

- `public __construct(Lazy|string $id)`

- `public resolve(object $ioc): mixed` — Resolve a shared instance

### Properties

- `protected Lazy|string $id`

### Methods

<h4 id="containerresolverlazyget-__construct"><code>__construct()</code></h4>

```php
public function __construct( Lazy|string $id );
```

<h4 id="containerresolverlazyget-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve a shared instance


## Container\Resolver\Lazy\GetCall

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\GetCall`**

`Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Service\Collection`

### Method Summary

- `public __construct(Lazy|string $id, string $method, array $arguments)`

- `public resolve(object $ioc): mixed` — Resolve a shared instance method call

### Properties

- `protected array $arguments`

- `protected Lazy|string $id`

- `protected string $method`

### Methods

<h4 id="containerresolverlazygetcall-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Lazy|string $id,
    string $method,
    array $arguments
);
```

<h4 id="containerresolverlazygetcall-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve a shared instance method call


## Container\Resolver\Lazy\Lazy

Abstract

- **`Phalcon\Container\Resolver\Lazy\Lazy`** - implements [`Phalcon\Contracts\Container\Resolver\Resolvable`](/6.0/api/phalcon_contracts/#contractscontainerresolverresolvable)
  - [`Phalcon\Container\Resolver\Lazy\ArrayValues`](#containerresolverlazyarrayvalues)
  - [`Phalcon\Container\Resolver\Lazy\Call`](#containerresolverlazycall)
  - [`Phalcon\Container\Resolver\Lazy\CallableGet`](#containerresolverlazycallableget)
  - [`Phalcon\Container\Resolver\Lazy\CallableNew`](#containerresolverlazycallablenew)
  - [`Phalcon\Container\Resolver\Lazy\Env`](#containerresolverlazyenv)
  - [`Phalcon\Container\Resolver\Lazy\FunctionCall`](#containerresolverlazyfunctioncall)
  - [`Phalcon\Container\Resolver\Lazy\Get`](#containerresolverlazyget)
  - [`Phalcon\Container\Resolver\Lazy\GetCall`](#containerresolverlazygetcall)
  - [`Phalcon\Container\Resolver\Lazy\NewCall`](#containerresolverlazynewcall)
  - [`Phalcon\Container\Resolver\Lazy\NewInstance`](#containerresolverlazynewinstance)
  - [`Phalcon\Container\Resolver\Lazy\StaticCall`](#containerresolverlazystaticcall)

`Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Resolver\Resolvable`

### Method Summary

- `public __invoke(object $ioc): mixed`

- `public resolve(object $ioc): mixed`

- `protected resolveArgument(object $ioc, mixed $argument): mixed`

- `protected resolveArguments(object $ioc, array $arguments): array`

### Methods

<h4 id="containerresolverlazylazy-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( object $ioc ): mixed;
```

<h4 id="containerresolverlazylazy-resolve"><code>resolve()</code></h4>

```php
abstract public function resolve( object $ioc ): mixed;
```

<h4 id="containerresolverlazylazy-resolveargument"><code>resolveArgument()</code></h4>

```php
protected function resolveArgument(
    object $ioc,
    mixed $argument
): mixed;
```

<h4 id="containerresolverlazylazy-resolvearguments"><code>resolveArguments()</code></h4>

```php
protected function resolveArguments(
    object $ioc,
    array $arguments
): array;
```


## Container\Resolver\Lazy\LazyFactory

Class

- **`Phalcon\Container\Resolver\Lazy\LazyFactory`**

`Phalcon\Contracts\Container\ContainerTypes`

### Method Summary

- `public arrayValues(array $values): ArrayValues`

- `public call(callable $callableObject): Call`

- `public callableGet(string $id): CallableGet`

- `public callableNew(string $id): CallableNew`

- `public csEnv(string $name, string|null $type = null): CsEnv`

- `public env(string $name, string|null $type = null): Env`

- `public envDefault(string $name, mixed $defaultValue, string|null $type = null): EnvDefault`

- `public functionCall(string $functionName, array $args): FunctionCall`

- `public get(string $id): Get`

- `public getCall(string $id, string $method, array $args): GetCall`

- `public newCall(string $id, string $method, array $args): NewCall`

- `public newInstance(string $id): NewInstance`

- `public staticCall(string $className, string $method, array $args): StaticCall`

### Methods

<h4 id="containerresolverlazylazyfactory-arrayvalues"><code>arrayValues()</code></h4>

```php
public static function arrayValues( array $values ): ArrayValues;
```

<h4 id="containerresolverlazylazyfactory-call"><code>call()</code></h4>

```php
public static function call( callable $callableObject ): Call;
```

<h4 id="containerresolverlazylazyfactory-callableget"><code>callableGet()</code></h4>

```php
public static function callableGet( string $id ): CallableGet;
```

<h4 id="containerresolverlazylazyfactory-callablenew"><code>callableNew()</code></h4>

```php
public static function callableNew( string $id ): CallableNew;
```

<h4 id="containerresolverlazylazyfactory-csenv"><code>csEnv()</code></h4>

```php
public static function csEnv(
    string $name,
    string|null $type = null
): CsEnv;
```

<h4 id="containerresolverlazylazyfactory-env"><code>env()</code></h4>

```php
public static function env(
    string $name,
    string|null $type = null
): Env;
```

<h4 id="containerresolverlazylazyfactory-envdefault"><code>envDefault()</code></h4>

```php
public static function envDefault(
    string $name,
    mixed $defaultValue,
    string|null $type = null
): EnvDefault;
```

<h4 id="containerresolverlazylazyfactory-functioncall"><code>functionCall()</code></h4>

```php
public static function functionCall(
    string $functionName,
    array $args
): FunctionCall;
```

<h4 id="containerresolverlazylazyfactory-get"><code>get()</code></h4>

```php
public static function get( string $id ): Get;
```

<h4 id="containerresolverlazylazyfactory-getcall"><code>getCall()</code></h4>

```php
public static function getCall(
    string $id,
    string $method,
    array $args
): GetCall;
```

<h4 id="containerresolverlazylazyfactory-newcall"><code>newCall()</code></h4>

```php
public static function newCall(
    string $id,
    string $method,
    array $args
): NewCall;
```

<h4 id="containerresolverlazylazyfactory-newinstance"><code>newInstance()</code></h4>

```php
public static function newInstance( string $id ): NewInstance;
```

<h4 id="containerresolverlazylazyfactory-staticcall"><code>staticCall()</code></h4>

```php
public static function staticCall(
    string $className,
    string $method,
    array $args
): StaticCall;
```


## Container\Resolver\Lazy\NewCall

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\NewCall`**

`Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Service\Collection`

### Method Summary

- `public __construct(Lazy|string $id, string $method, array $arguments)`

- `public resolve(object $ioc): mixed` — Resolve a new instance method call

### Properties

- `protected array $arguments`

- `protected Lazy|string $id`

- `protected string $method`

### Methods

<h4 id="containerresolverlazynewcall-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Lazy|string $id,
    string $method,
    array $arguments
);
```

<h4 id="containerresolverlazynewcall-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve a new instance method call


## Container\Resolver\Lazy\NewInstance

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\NewInstance`**

`Phalcon\Contracts\Container\Service\Collection`

### Method Summary

- `public __construct(Lazy|string $id)`

- `public resolve(object $ioc): mixed` — Resolve a new instance

### Properties

- `protected Lazy|string $id`

### Methods

<h4 id="containerresolverlazynewinstance-__construct"><code>__construct()</code></h4>

```php
public function __construct( Lazy|string $id );
```

<h4 id="containerresolverlazynewinstance-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve a new instance


## Container\Resolver\Lazy\StaticCall

Class

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
  - **`Phalcon\Container\Resolver\Lazy\StaticCall`**

`Phalcon\Contracts\Container\ContainerTypes`

### Method Summary

- `public __construct(Lazy|string $className, string $method, array $arguments)`

- `public resolve(object $ioc): mixed` — Resolve a static method call

### Properties

- `protected array $arguments`

- `protected Lazy|string $className`

- `protected string $method`

### Methods

<h4 id="containerresolverlazystaticcall-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Lazy|string $className,
    string $method,
    array $arguments
);
```

<h4 id="containerresolverlazystaticcall-resolve"><code>resolve()</code></h4>

```php
public function resolve( object $ioc ): mixed;
```

Resolve a static method call


## Container\Resolver\Resolver

Class

- **`Phalcon\Container\Resolver\Resolver`** - implements [`Phalcon\Contracts\Container\Resolver\ResolverService`](/6.0/api/phalcon_contracts/#contractscontainerresolverresolverservice)

`Closure` · `Phalcon\Container\Exceptions\CannotResolveParameter` · `Phalcon\Container\Resolver\Lazy\Lazy` · `Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Resolver\ResolverService` · `Phalcon\Contracts\Container\Service\Collection` · `ReflectionClass` · `ReflectionException` · `ReflectionFunction` · `ReflectionMethod` · `ReflectionNamedType` · `ReflectionParameter` · `ReflectionType`

### Method Summary

- `public isResolvableClass(string $className): bool` — Is this a resolvable class?

- `public resolveCall(object $ioc, callable $callableObject, array $arguments): mixed` — Resolve a call

- `public resolveClass(object $ioc, string $className, array $arguments): object` — Resolve a class

- `public resolveMethod(object $ioc, ReflectionMethod $method, object $instance): void` — Resolve a method

- `public resolveParameter(object $ioc, ReflectionParameter $parameter): mixed` — Resolve parameters

- `public resolveParameters(object $ioc, array $parameters, array $arguments): array` — Resolve parameters

- `public resolveType(object $ioc, mixed $type): mixed` — type is ReflectionType

### Methods

<h4 id="containerresolverresolver-isresolvableclass"><code>isResolvableClass()</code></h4>

```php
public function isResolvableClass( string $className ): bool;
```

Is this a resolvable class?

<h4 id="containerresolverresolver-resolvecall"><code>resolveCall()</code></h4>

```php
public function resolveCall(
    object $ioc,
    callable $callableObject,
    array $arguments
): mixed;
```

Resolve a call

<h4 id="containerresolverresolver-resolveclass"><code>resolveClass()</code></h4>

```php
public function resolveClass(
    object $ioc,
    string $className,
    array $arguments
): object;
```

Resolve a class

<h4 id="containerresolverresolver-resolvemethod"><code>resolveMethod()</code></h4>

```php
public function resolveMethod(
    object $ioc,
    ReflectionMethod $method,
    object $instance
): void;
```

Resolve a method

<h4 id="containerresolverresolver-resolveparameter"><code>resolveParameter()</code></h4>

```php
public function resolveParameter(
    object $ioc,
    ReflectionParameter $parameter
): mixed;
```

Resolve parameters

<h4 id="containerresolverresolver-resolveparameters"><code>resolveParameters()</code></h4>

```php
public function resolveParameters(
    object $ioc,
    array $parameters,
    array $arguments
): array;
```

Resolve parameters

<h4 id="containerresolverresolver-resolvetype"><code>resolveType()</code></h4>

```php
public function resolveType(
    object $ioc,
    mixed $type
): mixed;
```

type is ReflectionType

Source: https://docs.phalcon.io/6.0/api/phalcon_container/index.mdx
