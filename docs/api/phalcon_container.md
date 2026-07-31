---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Container\Container

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Container.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Container`** - implements [`Phalcon\Contracts\Container\Service\Collection`](phalcon_contracts.md#contractscontainerservicecollection), [`Phalcon\Contracts\Container\Service\Enumerable`](phalcon_contracts.md#contractscontainerserviceenumerable)

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\Processor\ClosureProcessor` · `Phalcon\Container\Definition\Processor\ObjectProcessor` · `Phalcon\Container\Definition\Processor\Processor` · `Phalcon\Container\Definition\Processor\StringProcessor` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Container\Definition\ServiceLifetime` · `Phalcon\Container\Exceptions\CannotExtendResolved` · `Phalcon\Container\Exceptions\CircularAliasFound` · `Phalcon\Container\Exceptions\InstanceNotFound` · `Phalcon\Container\Exceptions\NoProcessorFound` · `Phalcon\Container\Exceptions\ParameterNotFound` · `Phalcon\Container\Exceptions\ServiceNotFound` · `Phalcon\Container\Exceptions\ServiceNotRegistered` · `Phalcon\Container\Resolver\Lazy\Lazy` · `Phalcon\Container\Resolver\Resolver` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Enumerable` · `Phalcon\Di\InjectionAwareInterface` · `ReflectionException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containercontainer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
<a class="api-item" href="#containercontainer-bind">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">string</span> <span class="sv">$interfaceName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$concrete</span></span>)</code>
<span class="desc">Bind an interface to a concrete class</span>
</a>
<a class="api-item" href="#containercontainer-callableget">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig"><span class="sf">callableGet</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Resolve to a closure on a get()</span>
</a>
<a class="api-item" href="#containercontainer-callablenew">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig"><span class="sf">callableNew</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Resolve to a closure on a new()</span>
</a>
<a class="api-item" href="#containercontainer-extend">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">extend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
<span class="desc">Extends the definition</span>
</a>
<a class="api-item" href="#containercontainer-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Resolve and return an element registerd in the container</span>
</a>
<a class="api-item" href="#containercontainer-getalias">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return an alias</span>
</a>
<a class="api-item" href="#containercontainer-getbytag">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getByTag</span>( <span class="st">string</span> <span class="sv">$tag</span> )</code>
<span class="desc">Return services by tag</span>
</a>
<a class="api-item" href="#containercontainer-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">getDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return the service definition</span>
</a>
<a class="api-item" href="#containercontainer-getinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return a stored instance</span>
</a>
<a class="api-item" href="#containercontainer-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return a parameter</span>
</a>
<a class="api-item" href="#containercontainer-getresolver">
<code class="vis vis-public">public</code>
<code class="ret">Resolver</code>
<code class="sig"><span class="sf">getResolver</span>()</code>
<span class="desc">Return the resolver</span>
</a>
<a class="api-item" href="#containercontainer-getservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$serviceName</span> )</code>
<span class="desc">Resolve an return a service</span>
</a>
<a class="api-item" href="#containercontainer-getservicenames">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServiceNames</span>()</code>
<span class="desc">Returns the names of every registered service definition. Names that</span>
</a>
<a class="api-item" href="#containercontainer-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Does the container have a particular service</span>
</a>
<a class="api-item" href="#containercontainer-hasalias">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Does the service have an alias</span>
</a>
<a class="api-item" href="#containercontainer-hasdefinition">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Does the service have a definition</span>
</a>
<a class="api-item" href="#containercontainer-hasinstance">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Does the service have an instance</span>
</a>
<a class="api-item" href="#containercontainer-hasparameter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Does the service have a parameter</span>
</a>
<a class="api-item" href="#containercontainer-hasservice">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasService</span>( <span class="st">string</span> <span class="sv">$serviceName</span> )</code>
<span class="desc">Does the container have a particular service</span>
</a>
<a class="api-item" href="#containercontainer-isautowireenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutowireEnabled</span>()</code>
<span class="desc">Is AutoWiring enabled</span>
</a>
<a class="api-item" href="#containercontainer-new">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">new</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Resolve and return a new service</span>
</a>
<a class="api-item" href="#containercontainer-newdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">newDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return a new service definition</span>
</a>
<a class="api-item" href="#containercontainer-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Set a service</span>
</a>
<a class="api-item" href="#containercontainer-setalias">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAlias</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$alias</span></span>)</code>
<span class="desc">Set an alias</span>
</a>
<a class="api-item" href="#containercontainer-setautowire">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAutowire</span>( <span class="st">bool</span> <span class="sv">$enabled</span> )</code>
<span class="desc">Set AutoWire</span>
</a>
<a class="api-item" href="#containercontainer-setdefinition">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefinition</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">ServiceDefinition</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Set a definition</span>
</a>
<a class="api-item" href="#containercontainer-setinstance">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$lifetime</span></span>)</code>
<span class="desc">Set an instance</span>
</a>
<a class="api-item" href="#containercontainer-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setParameter</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a parameter</span>
</a>
<a class="api-item" href="#containercontainer-settag">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTag</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$serviceName</span></span>)</code>
<span class="desc">Register a tag with a service</span>
</a>
<a class="api-item" href="#containercontainer-unsetalias">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Remove an alias</span>
</a>
<a class="api-item" href="#containercontainer-unsetdefinition">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Remove a definition</span>
</a>
<a class="api-item" href="#containercontainer-unsetinstance">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Remove an instance</span>
</a>
<a class="api-item" href="#containercontainer-unsetinstances">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetInstances</span>( <span class="st">string</span> <span class="sv">$lifetime</span> )</code>
<span class="desc">Remove instances based on lifetime</span>
</a>
<a class="api-item" href="#containercontainer-unsetparameter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Remove a parameter</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, string&gt;</code>
<code class="sig"><span class="sv">$aliases</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$autowire</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, string&gt;</code>
<code class="sig"><span class="sv">$instanceLifetimes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, object&gt;</code>
<code class="sig"><span class="sv">$instances</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, mixed&gt;</code>
<code class="sig"><span class="sv">$parameters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, Processor&gt;</code>
<code class="sig"><span class="sv">$processors</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Resolver</code>
<code class="sig"><span class="sv">$resolver</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, ServiceDefinition&gt;</code>
<code class="sig"><span class="sv">$services</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, list&lt;string&gt;&gt;</code>
<code class="sig"><span class="sv">$tags</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 35</div>

#### `__construct()` { #containercontainer-__construct }

```php
public function __construct();
```

#### `bind()` { #containercontainer-bind }

```php
public function bind(
    string $interfaceName,
    string $concrete
): ServiceDefinition;
```

Bind an interface to a concrete class

#### `callableGet()` { #containercontainer-callableget }

```php
public function callableGet( string $name ): Closure;
```

Resolve to a closure on a get()

#### `callableNew()` { #containercontainer-callablenew }

```php
public function callableNew( string $name ): Closure;
```

Resolve to a closure on a new()

#### `extend()` { #containercontainer-extend }

```php
public function extend(
    string $name,
    callable $callableObject
): void;
```

Extends the definition

#### `get()` { #containercontainer-get }

```php
public function get( string $name ): mixed;
```

Resolve and return an element registerd in the container

#### `getAlias()` { #containercontainer-getalias }

```php
public function getAlias( string $name ): string;
```

Return an alias

#### `getByTag()` { #containercontainer-getbytag }

```php
public function getByTag( string $tag ): array;
```

Return services by tag

#### `getDefinition()` { #containercontainer-getdefinition }

```php
public function getDefinition( string $name ): ServiceDefinition;
```

Return the service definition

#### `getInstance()` { #containercontainer-getinstance }

```php
public function getInstance( string $name ): object;
```

Return a stored instance

#### `getParameter()` { #containercontainer-getparameter }

```php
public function getParameter( string $name ): mixed;
```

Return a parameter

#### `getResolver()` { #containercontainer-getresolver }

```php
public function getResolver(): Resolver;
```

Return the resolver

#### `getService()` { #containercontainer-getservice }

```php
public function getService( string $serviceName ): object;
```

Resolve an return a service

#### `getServiceNames()` { #containercontainer-getservicenames }

```php
public function getServiceNames(): array;
```

Returns the names of every registered service definition. Names that
only exist as an alias, a pre-set instance or a parameter are not
included.

#### `has()` { #containercontainer-has }

```php
public function has( string $name ): bool;
```

Does the container have a particular service

#### `hasAlias()` { #containercontainer-hasalias }

```php
public function hasAlias( string $name ): bool;
```

Does the service have an alias

#### `hasDefinition()` { #containercontainer-hasdefinition }

```php
public function hasDefinition( string $name ): bool;
```

Does the service have a definition

#### `hasInstance()` { #containercontainer-hasinstance }

```php
public function hasInstance( string $name ): bool;
```

Does the service have an instance

#### `hasParameter()` { #containercontainer-hasparameter }

```php
public function hasParameter( string $name ): bool;
```

Does the service have a parameter

#### `hasService()` { #containercontainer-hasservice }

```php
public function hasService( string $serviceName ): bool;
```

Does the container have a particular service

#### `isAutowireEnabled()` { #containercontainer-isautowireenabled }

```php
public function isAutowireEnabled(): bool;
```

Is AutoWiring enabled

#### `new()` { #containercontainer-new }

```php
public function new( string $name ): mixed;
```

Resolve and return a new service

#### `newDefinition()` { #containercontainer-newdefinition }

```php
public function newDefinition( string $name ): ServiceDefinition;
```

Return a new service definition

#### `set()` { #containercontainer-set }

```php
public function set(
    string $name,
    mixed $definition
): ServiceDefinition;
```

Set a service

#### `setAlias()` { #containercontainer-setalias }

```php
public function setAlias(
    string $name,
    string $alias
): static;
```

Set an alias

#### `setAutowire()` { #containercontainer-setautowire }

```php
public function setAutowire( bool $enabled ): static;
```

Set AutoWire

#### `setDefinition()` { #containercontainer-setdefinition }

```php
public function setDefinition(
    string $name,
    ServiceDefinition $definition
): static;
```

Set a definition

#### `setInstance()` { #containercontainer-setinstance }

```php
public function setInstance(
    string $name,
    object $instance,
    string $lifetime
): static;
```

Set an instance

#### `setParameter()` { #containercontainer-setparameter }

```php
public function setParameter(
    string $name,
    mixed $value
): static;
```

Set a parameter

#### `setTag()` { #containercontainer-settag }

```php
public function setTag(
    string $tag,
    string $serviceName
): void;
```

Register a tag with a service

#### `unsetAlias()` { #containercontainer-unsetalias }

```php
public function unsetAlias( string $name ): void;
```

Remove an alias

#### `unsetDefinition()` { #containercontainer-unsetdefinition }

```php
public function unsetDefinition( string $name ): void;
```

Remove a definition

#### `unsetInstance()` { #containercontainer-unsetinstance }

```php
public function unsetInstance( string $name ): void;
```

Remove an instance

#### `unsetInstances()` { #containercontainer-unsetinstances }

```php
public function unsetInstances( string $lifetime ): void;
```

Remove instances based on lifetime

#### `unsetParameter()` { #containercontainer-unsetparameter }

```php
public function unsetParameter( string $name ): void;
```

Remove a parameter


## Container\ContainerFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/ContainerFactory.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\ContainerFactory`** - implements [`Phalcon\Contracts\Container\Ioc\IocContainerFactory`](phalcon_contracts.md#contractscontaineriocioccontainerfactory)

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainerFactory` · `Phalcon\Contracts\Container\Service\Provider`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containercontainerfactory-addprovider">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addProvider</span>( <span class="st">Provider</span> <span class="sv">$provider</span> )</code>
<span class="desc">Adds a provider</span>
</a>
<a class="api-item" href="#containercontainerfactory-newcontainer">
<code class="vis vis-public">public</code>
<code class="ret">Container</code>
<code class="sig"><span class="sf">newContainer</span>()</code>
<span class="desc">Returns a new container</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, Provider&gt;</code>
<code class="sig"><span class="sv">$providers</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `addProvider()` { #containercontainerfactory-addprovider }

```php
public function addProvider( Provider $provider ): static;
```

Adds a provider

#### `newContainer()` { #containercontainerfactory-newcontainer }

```php
public function newContainer(): Container;
```

Returns a new container


## Container\Definition\DefinitionType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/DefinitionType.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\DefinitionType`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">CLOSURE_TYPE</span><span class="sm"> = &quot;closure&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">OBJECT_TYPE</span><span class="sm"> = &quot;object&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PARAMETER_TYPE</span><span class="sm"> = &quot;parameter&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">STRING_TYPE</span><span class="sm"> = &quot;string&quot;</span></code>
</div>
</div>


## Container\Definition\Processor\ClosureProcessor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/ClosureProcessor.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\Processor\ClosureProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerdefinitionprocessorclosureprocessor-canprocess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">canProcess</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Wheteher the definition is a Closure</span>
</a>
<a class="api-item" href="#containerdefinitionprocessorclosureprocessor-process">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">process</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$container</span></span>)</code>
<span class="desc">Process the Closure</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `canProcess()` { #containerdefinitionprocessorclosureprocessor-canprocess }

```php
public function canProcess( mixed $definition ): bool;
```

Wheteher the definition is a Closure

#### `process()` { #containerdefinitionprocessorclosureprocessor-process }

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the Closure


## Container\Definition\Processor\ObjectProcessor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/ObjectProcessor.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\Processor\ObjectProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerdefinitionprocessorobjectprocessor-canprocess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">canProcess</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Whether the definition is an Object (not Closure)</span>
</a>
<a class="api-item" href="#containerdefinitionprocessorobjectprocessor-process">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">process</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$container</span></span>)</code>
<span class="desc">Process the Object</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `canProcess()` { #containerdefinitionprocessorobjectprocessor-canprocess }

```php
public function canProcess( mixed $definition ): bool;
```

Whether the definition is an Object (not Closure)

#### `process()` { #containerdefinitionprocessorobjectprocessor-process }

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the Object


## Container\Definition\Processor\ParameterProcessor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/ParameterProcessor.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\Processor\ParameterProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerdefinitionprocessorparameterprocessor-canprocess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">canProcess</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Whetehr the definition is a parameter</span>
</a>
<a class="api-item" href="#containerdefinitionprocessorparameterprocessor-process">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">process</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$container</span></span>)</code>
<span class="desc">Process the parameter</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `canProcess()` { #containerdefinitionprocessorparameterprocessor-canprocess }

```php
public function canProcess( mixed $definition ): bool;
```

Whetehr the definition is a parameter

#### `process()` { #containerdefinitionprocessorparameterprocessor-process }

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the parameter


## Container\Definition\Processor\Processor

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/Processor.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\Processor\Processor`**

</div>

__Uses__ `Phalcon\Container\Definition\ServiceDefinition`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerdefinitionprocessorprocessor-canprocess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">canProcess</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Can this definition be processed?</span>
</a>
<a class="api-item" href="#containerdefinitionprocessorprocessor-process">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">process</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$container</span></span>)</code>
<span class="desc">Process the definition</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `canProcess()` { #containerdefinitionprocessorprocessor-canprocess }

```php
public function canProcess( mixed $definition ): bool;
```

Can this definition be processed?

#### `process()` { #containerdefinitionprocessorprocessor-process }

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the definition


## Container\Definition\Processor\StringProcessor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/Processor/StringProcessor.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\Processor\StringProcessor`** - implements [`Phalcon\Container\Definition\Processor\Processor`](#containerdefinitionprocessorprocessor)

</div>

__Uses__ `Phalcon\Container\Definition\DefinitionType` · `Phalcon\Container\Definition\ServiceDefinition`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerdefinitionprocessorstringprocessor-canprocess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">canProcess</span>( <span class="st">mixed</span> <span class="sv">$definition</span> )</code>
<span class="desc">Whether the definition is a class string</span>
</a>
<a class="api-item" href="#containerdefinitionprocessorstringprocessor-process">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">process</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$container</span></span>)</code>
<span class="desc">Process the class string</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `canProcess()` { #containerdefinitionprocessorstringprocessor-canprocess }

```php
public function canProcess( mixed $definition ): bool;
```

Whether the definition is a class string

#### `process()` { #containerdefinitionprocessorstringprocessor-process }

```php
public function process(
    string $name,
    mixed $definition,
    object $container
): ServiceDefinition;
```

Process the class string


## Container\Definition\ServiceDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/ServiceDefinition.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\ServiceDefinition`**

</div>

__Uses__ `Phalcon\Container\Exceptions\FrozenDefinition` · `Phalcon\Container\Exceptions\InvalidExtender` · `Phalcon\Container\Exceptions\NoClassSet` · `Phalcon\Container\Exceptions\NoFactorySet` · `Phalcon\Contracts\Container\Resolver\Resolvable` · `ReflectionClass` · `ReflectionException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerdefinitionservicedefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$serviceName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$raw</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-addextender">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addExtender</span>( <span class="st">callable</span> <span class="sv">$extender</span> )</code>
<span class="desc">Adds an extender</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-addtag">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addTag</span>( <span class="st">string</span> <span class="sv">$tag</span> )</code>
<span class="desc">Adds a tag</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-buildservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">buildService</span>( <span class="st">object</span> <span class="sv">$container</span> )</code>
<span class="desc">Builds a service and returns the instance back</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-freeze">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">freeze</span>( <span class="st">object</span> <span class="sv">$container</span> )</code>
<span class="desc">Freezes the container</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getarguments">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getArguments</span>()</code>
<span class="desc">Returns the arguments</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getClass</span>()</code>
<span class="desc">Returns the class</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getconstructorargs">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getConstructorArgs</span>()</code>
<span class="desc">Returns the constructor arguments</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getextenders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExtenders</span>()</code>
<span class="desc">Returns the extenders</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getfactory">
<code class="vis vis-public">public</code>
<code class="ret">callable</code>
<code class="sig"><span class="sf">getFactory</span>()</code>
<span class="desc">Returns the factory</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getlifetime">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLifetime</span>()</code>
<span class="desc">Returns the lifetime</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-getservicename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServiceName</span>()</code>
<span class="desc">Returns the name of the service</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-gettags">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getTags</span>()</code>
<span class="desc">Returns the tags</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns the type</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-hasclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasClass</span>()</code>
<span class="desc">Does it have a class</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-hasextenders">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasExtenders</span>()</code>
<span class="desc">Do we have extenders</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-hasfactory">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasFactory</span>()</code>
<span class="desc">Does it have a factory</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-iscacheable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCacheable</span>()</code>
<span class="desc">Is it cacheable</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-isfrozen">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isFrozen</span>()</code>
<span class="desc">Is it frozen</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setargument">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setArgument</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set an argument</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setClass</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Set a class</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setcontainer">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setContainer</span>( <span class="st">object</span> <span class="sv">$container</span> )</code>
<span class="desc">Set the container</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setExtenders</span>( <span class="st">array</span> <span class="sv">$extenders</span> )</code>
<span class="desc">Set extenders</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFactory</span>( <span class="st">callable</span> <span class="sv">$factory</span> )</code>
<span class="desc">Set a factory</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setiscacheable">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setIsCacheable</span>( <span class="st">bool</span> <span class="sv">$isCacheable</span> )</code>
<span class="desc">Set cachable</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-setlifetime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setLifetime</span>( <span class="st">string</span> <span class="sv">$lifetime</span> )</code>
<span class="desc">Set lifetime</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-unsetclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetClass</span>()</code>
<span class="desc">Unset class</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-unsetextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetExtenders</span>()</code>
<span class="desc">Unset extenders</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-unsetfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetFactory</span>()</code>
<span class="desc">Unset the factory</span>
</a>
<a class="api-item" href="#containerdefinitionservicedefinition-checkfrozen">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkFrozen</span>()</code>
<span class="desc">Check if frozen</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$arguments</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string | null</code>
<code class="sig"><span class="sv">$className</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$constructorArgs</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object | null</code>
<code class="sig"><span class="sv">$container</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, callable&gt;</code>
<code class="sig"><span class="sv">$extenders</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">callable | null</code>
<code class="sig"><span class="sv">$factory</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$frozen</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isCacheable</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$lifetime</span><span class="sm"> = ServiceLifetime::SCOPED</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$raw</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$serviceName</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$tags</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$type</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 29</div>

#### `__construct()` { #containerdefinitionservicedefinition-__construct }

```php
public function __construct(
    string $serviceName,
    string $type,
    mixed $raw = null
);
```

#### `addExtender()` { #containerdefinitionservicedefinition-addextender }

```php
public function addExtender( callable $extender ): static;
```

Adds an extender

#### `addTag()` { #containerdefinitionservicedefinition-addtag }

```php
public function addTag( string $tag ): static;
```

Adds a tag

#### `buildService()` { #containerdefinitionservicedefinition-buildservice }

```php
public function buildService( object $container ): object;
```

Builds a service and returns the instance back

#### `freeze()` { #containerdefinitionservicedefinition-freeze }

```php
public function freeze( object $container ): void;
```

Freezes the container

#### `getArguments()` { #containerdefinitionservicedefinition-getarguments }

```php
public function getArguments(): array;
```

Returns the arguments

#### `getClass()` { #containerdefinitionservicedefinition-getclass }

```php
public function getClass(): string;
```

Returns the class

#### `getConstructorArgs()` { #containerdefinitionservicedefinition-getconstructorargs }

```php
public function getConstructorArgs(): array;
```

Returns the constructor arguments

#### `getExtenders()` { #containerdefinitionservicedefinition-getextenders }

```php
public function getExtenders(): array;
```

Returns the extenders

#### `getFactory()` { #containerdefinitionservicedefinition-getfactory }

```php
public function getFactory(): callable;
```

Returns the factory

#### `getLifetime()` { #containerdefinitionservicedefinition-getlifetime }

```php
public function getLifetime(): string;
```

Returns the lifetime

#### `getServiceName()` { #containerdefinitionservicedefinition-getservicename }

```php
public function getServiceName(): string;
```

Returns the name of the service

#### `getTags()` { #containerdefinitionservicedefinition-gettags }

```php
public function getTags(): array;
```

Returns the tags

#### `getType()` { #containerdefinitionservicedefinition-gettype }

```php
public function getType(): string;
```

Returns the type

#### `hasClass()` { #containerdefinitionservicedefinition-hasclass }

```php
public function hasClass(): bool;
```

Does it have a class

#### `hasExtenders()` { #containerdefinitionservicedefinition-hasextenders }

```php
public function hasExtenders(): bool;
```

Do we have extenders

#### `hasFactory()` { #containerdefinitionservicedefinition-hasfactory }

```php
public function hasFactory(): bool;
```

Does it have a factory

#### `isCacheable()` { #containerdefinitionservicedefinition-iscacheable }

```php
public function isCacheable(): bool;
```

Is it cacheable

#### `isFrozen()` { #containerdefinitionservicedefinition-isfrozen }

```php
public function isFrozen(): bool;
```

Is it frozen

#### `setArgument()` { #containerdefinitionservicedefinition-setargument }

```php
public function setArgument(
    mixed $param,
    mixed $value
): static;
```

Set an argument

#### `setClass()` { #containerdefinitionservicedefinition-setclass }

```php
public function setClass( string $className ): static;
```

Set a class

#### `setContainer()` { #containerdefinitionservicedefinition-setcontainer }

```php
public function setContainer( object $container ): static;
```

Set the container

#### `setExtenders()` { #containerdefinitionservicedefinition-setextenders }

```php
public function setExtenders( array $extenders ): static;
```

Set extenders

#### `setFactory()` { #containerdefinitionservicedefinition-setfactory }

```php
public function setFactory( callable $factory ): static;
```

Set a factory

#### `setIsCacheable()` { #containerdefinitionservicedefinition-setiscacheable }

```php
public function setIsCacheable( bool $isCacheable ): static;
```

Set cachable

#### `setLifetime()` { #containerdefinitionservicedefinition-setlifetime }

```php
public function setLifetime( string $lifetime ): static;
```

Set lifetime

#### `unsetClass()` { #containerdefinitionservicedefinition-unsetclass }

```php
public function unsetClass(): static;
```

Unset class

#### `unsetExtenders()` { #containerdefinitionservicedefinition-unsetextenders }

```php
public function unsetExtenders(): static;
```

Unset extenders

#### `unsetFactory()` { #containerdefinitionservicedefinition-unsetfactory }

```php
public function unsetFactory(): static;
```

Unset the factory

<div class="api-group">Protected · 1</div>

#### `checkFrozen()` { #containerdefinitionservicedefinition-checkfrozen }

```php
protected function checkFrozen(): void;
```

Check if frozen


## Container\Definition\ServiceLifetime

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Definition/ServiceLifetime.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Definition\ServiceLifetime`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">SCOPED</span><span class="sm"> = &quot;SCOPED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">SINGLETON</span><span class="sm"> = &quot;SINGLETON&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">TRANSIENT</span><span class="sm"> = &quot;TRANSIENT&quot;</span></code>
</div>
</div>


## Container\Exceptions\CannotExtendResolved

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/CannotExtendResolved.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\CannotExtendResolved`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionscannotextendresolved-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Cannot extend a resolved service</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionscannotextendresolved-__construct }

```php
public function __construct( string $name );
```

Cannot extend a resolved service


## Container\Exceptions\CannotResolveParameter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/CannotResolveParameter.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\CannotResolveParameter`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionscannotresolveparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span></span>)</code>
<span class="desc">Cannot resolve a parameter</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionscannotresolveparameter-__construct }

```php
public function __construct(
    string $param,
    string $className
);
```

Cannot resolve a parameter


## Container\Exceptions\CircularAliasFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/CircularAliasFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\CircularAliasFound`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionscircularaliasfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Circular Alias found</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionscircularaliasfound-__construct }

```php
public function __construct( string $name );
```

Circular Alias found


## Container\Exceptions\ContainerThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ContainerThrowable.zep){ .src-btn }

<div class="api-tree" markdown>

- `Throwable`
    - [`Phalcon\Contracts\Container\Ioc\IocThrowable`](phalcon_contracts.md#contractscontaineriociocthrowable)
        - **`Phalcon\Container\Exceptions\ContainerThrowable`** - extends [`Phalcon\Contracts\Container\Ioc\IocThrowable`](phalcon_contracts.md#contractscontaineriociocthrowable), [`Phalcon\Contracts\Container\Resolver\ResolverThrowable`](phalcon_contracts.md#contractscontainerresolverresolverthrowable), [`Phalcon\Contracts\Container\Service\Throwable`](phalcon_contracts.md#contractscontainerservicethrowable)

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocThrowable` · `Phalcon\Contracts\Container\Resolver\ResolverThrowable` · `Phalcon\Contracts\Container\Service\Throwable`
{ .api-uses }


## Container\Exceptions\EnvNotDefined

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/EnvNotDefined.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\EnvNotDefined`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsenvnotdefined-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$varname</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsenvnotdefined-__construct }

```php
public function __construct( string $varname );
```


## Container\Exceptions\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/Exception.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
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

</div>

__Uses__ `Exception`
{ .api-uses }


## Container\Exceptions\FrozenDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/FrozenDefinition.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\FrozenDefinition`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsfrozendefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Definition is frozen</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsfrozendefinition-__construct }

```php
public function __construct( string $name );
```

Definition is frozen


## Container\Exceptions\InstanceNotFound

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/InstanceNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\InstanceNotFound`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsinstancenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsinstancenotfound-__construct }

```php
public function __construct( string $name );
```


## Container\Exceptions\InvalidExtender

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/InvalidExtender.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\InvalidExtender`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsinvalidextender-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$service</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span></span>)</code>
<span class="desc">Invalid extender (not callable)</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsinvalidextender-__construct }

```php
public function __construct(
    string $service,
    string $key
);
```

Invalid extender (not callable)


## Container\Exceptions\NoClassSet

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/NoClassSet.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\NoClassSet`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsnoclassset-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">No set for service</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsnoclassset-__construct }

```php
public function __construct( string $name );
```

No set for service


## Container\Exceptions\NoFactorySet

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/NoFactorySet.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\NoFactorySet`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsnofactoryset-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">No factory for service</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsnofactoryset-__construct }

```php
public function __construct( string $name );
```

No factory for service


## Container\Exceptions\NoProcessorFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/NoProcessorFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\NoProcessorFound`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsnoprocessorfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
<span class="desc">No processor found</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsnoprocessorfound-__construct }

```php
public function __construct();
```

No processor found


## Container\Exceptions\ParameterNotFound

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ParameterNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\ParameterNotFound`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsparameternotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsparameternotfound-__construct }

```php
public function __construct( string $name );
```


## Container\Exceptions\ServiceNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ServiceNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\ServiceNotFound`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsservicenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Service not found</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsservicenotfound-__construct }

```php
public function __construct( string $name );
```

Service not found


## Container\Exceptions\ServiceNotRegistered

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Exceptions/ServiceNotRegistered.zep){ .src-btn }

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Container\Exceptions\Exception`](#containerexceptionsexception)
        - **`Phalcon\Container\Exceptions\ServiceNotRegistered`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerexceptionsservicenotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Service not registered</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #containerexceptionsservicenotregistered-__construct }

```php
public function __construct( string $name );
```

Service not registered


## Container\Provider\Cli

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Provider/Cli.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Provider\Cli`** - implements [`Phalcon\Contracts\Container\Service\Provider`](phalcon_contracts.md#contractscontainerserviceprovider)

</div>

__Uses__ `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Auth\Access\AccessLocator` · `Phalcon\Cli\Dispatcher` · `Phalcon\Cli\DispatcherInterface` · `Phalcon\Cli\Router` · `Phalcon\Cli\RouterInterface` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Provider` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterFactory` · `Phalcon\Filter\FilterInterface` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Model\Transaction\ManagerInterface` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerprovidercli-provide">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">provide</span>( <span class="st">Collection</span> <span class="sv">$services</span> )</code>
<span class="desc">Provider for commonly used CLI applications</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `provide()` { #containerprovidercli-provide }

```php
public function provide( Collection $services ): void;
```

Provider for commonly used CLI applications


## Container\Provider\Web

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Provider/Web.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Provider\Web`** - implements [`Phalcon\Contracts\Container\Service\Provider`](phalcon_contracts.md#contractscontainerserviceprovider)

</div>

__Uses__ `Phalcon\Annotations\Adapter\Memory` · `Phalcon\Assets\Manager` · `Phalcon\Auth\Access\AccessLocator` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Provider` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Encryption\Security` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterFactory` · `Phalcon\Filter\FilterInterface` · `Phalcon\Flash\Direct` · `Phalcon\Flash\Session` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Http\Response\Cookies` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Mvc\Dispatcher` · `Phalcon\Mvc\DispatcherInterface` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\MetaData\Memory` · `Phalcon\Mvc\Model\Transaction\Manager` · `Phalcon\Mvc\Model\Transaction\ManagerInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Url` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Storage\SerializerFactory` · `Phalcon\Support\HelperFactory` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerproviderweb-provide">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">provide</span>( <span class="st">Collection</span> <span class="sv">$services</span> )</code>
<span class="desc">Provider for commonly used Web applications</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `provide()` { #containerproviderweb-provide }

```php
public function provide( Collection $services ): void;
```

Provider for commonly used Web applications


## Container\Resolver\Lazy\ArrayValues

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/ArrayValues.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\ArrayValues`** - implements `ArrayAccess`, `Countable`, `IteratorAggregate`

</div>

__Uses__ `ArrayAccess` · `ArrayIterator` · `Countable` · `IteratorAggregate`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazyarrayvalues-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">ArrayIterator</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-merge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">merge</span>( <span class="st">mixed</span> <span class="sv">$values</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$offset</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-resolve">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve to an array, where each element has itself been lazy-resolved.</span>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-resolvevalue">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveValue</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazyarrayvalues-resolvevalues">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveValues</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, mixed&gt;</code>
<code class="sig"><span class="sv">$values</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #containerresolverlazyarrayvalues-__construct }

```php
public function __construct( array $values = [] );
```

#### `count()` { #containerresolverlazyarrayvalues-count }

```php
public function count(): int;
```

#### `getIterator()` { #containerresolverlazyarrayvalues-getiterator }

```php
public function getIterator(): ArrayIterator;
```

#### `merge()` { #containerresolverlazyarrayvalues-merge }

```php
public function merge( mixed $values ): void;
```

#### `offsetExists()` { #containerresolverlazyarrayvalues-offsetexists }

```php
public function offsetExists( mixed $offset ): bool;
```

#### `offsetGet()` { #containerresolverlazyarrayvalues-offsetget }

```php
public function offsetGet( mixed $offset ): mixed;
```

#### `offsetSet()` { #containerresolverlazyarrayvalues-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

#### `offsetUnset()` { #containerresolverlazyarrayvalues-offsetunset }

```php
public function offsetUnset( mixed $offset ): void;
```

#### `resolve()` { #containerresolverlazyarrayvalues-resolve }

```php
public function resolve( object $ioc ): array;
```

Resolve to an array, where each element has itself been lazy-resolved.

<div class="api-group">Protected · 2</div>

#### `resolveValue()` { #containerresolverlazyarrayvalues-resolvevalue }

```php
protected function resolveValue(
    object $ioc,
    mixed $value
): mixed;
```

#### `resolveValues()` { #containerresolverlazyarrayvalues-resolvevalues }

```php
protected function resolveValues(
    object $ioc,
    array $values
): array;
```


## Container\Resolver\Lazy\Call

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Call.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\Call`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazycall-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">callable</span> <span class="sv">$callableObject</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazycall-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve the callable</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$callableObject</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazycall-__construct }

```php
public function __construct( callable $callableObject );
```

#### `resolve()` { #containerresolverlazycall-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve the callable


## Container\Resolver\Lazy\CallableGet

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/CallableGet.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\CallableGet`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazycallableget-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazycallableget-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve to a closure on a get()</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazycallableget-__construct }

```php
public function __construct( mixed $id );
```

#### `resolve()` { #containerresolverlazycallableget-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve to a closure on a get()


## Container\Resolver\Lazy\CallableNew

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/CallableNew.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\CallableNew`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazycallablenew-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazycallablenew-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve to a closure on a new()</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazycallablenew-__construct }

```php
public function __construct( mixed $id );
```

#### `resolve()` { #containerresolverlazycallablenew-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve to a closure on a new()


## Container\Resolver\Lazy\CsEnv

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/CsEnv.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - [`Phalcon\Container\Resolver\Lazy\Env`](#containerresolverlazyenv)
        - **`Phalcon\Container\Resolver\Lazy\CsEnv`**

</div>

__Uses__ `Phalcon\Container\Exceptions\EnvNotDefined`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazycsenv-resolve">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve the getEnv() from keys as a comma separated list</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolve()` { #containerresolverlazycsenv-resolve }

```php
public function resolve( object $ioc ): array;
```

Resolve the getEnv() from keys as a comma separated list


## Container\Resolver\Lazy\Env

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Env.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\Env`**
        - [`Phalcon\Container\Resolver\Lazy\CsEnv`](#containerresolverlazycsenv)
        - [`Phalcon\Container\Resolver\Lazy\EnvDefault`](#containerresolverlazyenvdefault)

</div>

__Uses__ `Phalcon\Container\Exceptions\EnvNotDefined`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazyenv-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$varname</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$vartype</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazyenv-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve an environment variable</span>
</a>
<a class="api-item" href="#containerresolverlazyenv-cast">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">cast</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Cast a value to the defined type (if any)</span>
</a>
<a class="api-item" href="#containerresolverlazyenv-getenv">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getEnv</span>()</code>
<span class="desc">Return the env value</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$varname</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$vartype</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazyenv-__construct }

```php
public function __construct(
    string $varname,
    string $vartype = null
);
```

#### `resolve()` { #containerresolverlazyenv-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve an environment variable

<div class="api-group">Protected · 2</div>

#### `cast()` { #containerresolverlazyenv-cast }

```php
protected function cast( mixed $value ): mixed;
```

Cast a value to the defined type (if any)

#### `getEnv()` { #containerresolverlazyenv-getenv }

```php
protected function getEnv(): string;
```

Return the env value


## Container\Resolver\Lazy\EnvDefault

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/EnvDefault.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - [`Phalcon\Container\Resolver\Lazy\Env`](#containerresolverlazyenv)
        - **`Phalcon\Container\Resolver\Lazy\EnvDefault`**

</div>

__Uses__ `Phalcon\Container\Exceptions\EnvNotDefined`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazyenvdefault-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$varname</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$vartype</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazyenvdefault-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve an environment variable, returning the default if not defined</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazyenvdefault-__construct }

```php
public function __construct(
    string $varname,
    mixed $defaultValue,
    string $vartype = null
);
```

#### `resolve()` { #containerresolverlazyenvdefault-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve an environment variable, returning the default if not defined


## Container\Resolver\Lazy\FunctionCall

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/FunctionCall.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\FunctionCall`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazyfunctioncall-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$functionName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazyfunctioncall-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve a function</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, mixed&gt;</code>
<code class="sig"><span class="sv">$arguments</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$functionName</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazyfunctioncall-__construct }

```php
public function __construct(
    string $functionName,
    array $arguments
);
```

#### `resolve()` { #containerresolverlazyfunctioncall-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve a function


## Container\Resolver\Lazy\Get

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Get.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\Get`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazyget-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazyget-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve a shared instance</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazyget-__construct }

```php
public function __construct( mixed $id );
```

#### `resolve()` { #containerresolverlazyget-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve a shared instance


## Container\Resolver\Lazy\GetCall

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/GetCall.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\GetCall`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazygetcall-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazygetcall-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve a shared instance method call</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, mixed&gt;</code>
<code class="sig"><span class="sv">$arguments</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazygetcall-__construct }

```php
public function __construct(
    mixed $id,
    string $method,
    array $arguments
);
```

#### `resolve()` { #containerresolverlazygetcall-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve a shared instance method call


## Container\Resolver\Lazy\Lazy

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/Lazy.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Resolver\Lazy\Lazy`** - implements [`Phalcon\Contracts\Container\Resolver\Resolvable`](phalcon_contracts.md#contractscontainerresolverresolvable)
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

</div>

__Uses__ `Phalcon\Contracts\Container\Resolver\Resolvable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazylazy-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazy-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazy-resolveargument">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveArgument</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$argument</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazy-resolvearguments">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveArguments</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #containerresolverlazylazy-__invoke }

```php
public function __invoke( object $ioc ): mixed;
```

#### `resolve()` { #containerresolverlazylazy-resolve }

```php
abstract public function resolve( object $ioc ): mixed;
```

<div class="api-group">Protected · 2</div>

#### `resolveArgument()` { #containerresolverlazylazy-resolveargument }

```php
protected function resolveArgument(
    object $ioc,
    mixed $argument
): mixed;
```

#### `resolveArguments()` { #containerresolverlazylazy-resolvearguments }

```php
protected function resolveArguments(
    object $ioc,
    array $arguments
): array;
```


## Container\Resolver\Lazy\LazyFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/LazyFactory.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Resolver\Lazy\LazyFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazylazyfactory-arrayvalues">
<code class="vis vis-public">public</code>
<code class="ret">ArrayValues</code>
<code class="sig"><span class="sf">arrayValues</span>( <span class="st">array</span> <span class="sv">$values</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-call">
<code class="vis vis-public">public</code>
<code class="ret">Call</code>
<code class="sig"><span class="sf">call</span>( <span class="st">callable</span> <span class="sv">$callableObject</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-callableget">
<code class="vis vis-public">public</code>
<code class="ret">CallableGet</code>
<code class="sig"><span class="sf">callableGet</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-callablenew">
<code class="vis vis-public">public</code>
<code class="ret">CallableNew</code>
<code class="sig"><span class="sf">callableNew</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-csenv">
<code class="vis vis-public">public</code>
<code class="ret">CsEnv</code>
<code class="sig"><span class="sf">csEnv</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-env">
<code class="vis vis-public">public</code>
<code class="ret">Env</code>
<code class="sig"><span class="sf">env</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-envdefault">
<code class="vis vis-public">public</code>
<code class="ret">EnvDefault</code>
<code class="sig"><span class="sf">envDefault</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-functioncall">
<code class="vis vis-public">public</code>
<code class="ret">FunctionCall</code>
<code class="sig"><span class="sf">functionCall</span>(<span class="prm"><span class="st">string</span> <span class="sv">$functionName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$args</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-get">
<code class="vis vis-public">public</code>
<code class="ret">Get</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-getcall">
<code class="vis vis-public">public</code>
<code class="ret">GetCall</code>
<code class="sig"><span class="sf">getCall</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$args</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-newcall">
<code class="vis vis-public">public</code>
<code class="ret">NewCall</code>
<code class="sig"><span class="sf">newCall</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$args</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">NewInstance</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazylazyfactory-staticcall">
<code class="vis vis-public">public</code>
<code class="ret">StaticCall</code>
<code class="sig"><span class="sf">staticCall</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$args</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `arrayValues()` { #containerresolverlazylazyfactory-arrayvalues }

```php
public static function arrayValues( array $values ): ArrayValues;
```

#### `call()` { #containerresolverlazylazyfactory-call }

```php
public static function call( callable $callableObject ): Call;
```

#### `callableGet()` { #containerresolverlazylazyfactory-callableget }

```php
public static function callableGet( string $id ): CallableGet;
```

#### `callableNew()` { #containerresolverlazylazyfactory-callablenew }

```php
public static function callableNew( string $id ): CallableNew;
```

#### `csEnv()` { #containerresolverlazylazyfactory-csenv }

```php
public static function csEnv(
    string $name,
    string $type = null
): CsEnv;
```

#### `env()` { #containerresolverlazylazyfactory-env }

```php
public static function env(
    string $name,
    string $type = null
): Env;
```

#### `envDefault()` { #containerresolverlazylazyfactory-envdefault }

```php
public static function envDefault(
    string $name,
    mixed $defaultValue,
    string $type = null
): EnvDefault;
```

#### `functionCall()` { #containerresolverlazylazyfactory-functioncall }

```php
public static function functionCall(
    string $functionName,
    array $args
): FunctionCall;
```

#### `get()` { #containerresolverlazylazyfactory-get }

```php
public static function get( string $id ): Get;
```

#### `getCall()` { #containerresolverlazylazyfactory-getcall }

```php
public static function getCall(
    string $id,
    string $method,
    array $args
): GetCall;
```

#### `newCall()` { #containerresolverlazylazyfactory-newcall }

```php
public static function newCall(
    string $id,
    string $method,
    array $args
): NewCall;
```

#### `newInstance()` { #containerresolverlazylazyfactory-newinstance }

```php
public static function newInstance( string $id ): NewInstance;
```

#### `staticCall()` { #containerresolverlazylazyfactory-staticcall }

```php
public static function staticCall(
    string $className,
    string $method,
    array $args
): StaticCall;
```


## Container\Resolver\Lazy\NewCall

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/NewCall.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\NewCall`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazynewcall-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazynewcall-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve a new instance method call</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, mixed&gt;</code>
<code class="sig"><span class="sv">$arguments</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazynewcall-__construct }

```php
public function __construct(
    mixed $id,
    string $method,
    array $arguments
);
```

#### `resolve()` { #containerresolverlazynewcall-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve a new instance method call


## Container\Resolver\Lazy\NewInstance

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/NewInstance.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\NewInstance`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazynewinstance-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#containerresolverlazynewinstance-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve a new instance</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazynewinstance-__construct }

```php
public function __construct( mixed $id );
```

#### `resolve()` { #containerresolverlazynewinstance-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve a new instance


## Container\Resolver\Lazy\StaticCall

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Lazy/StaticCall.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Container\Resolver\Lazy\Lazy`](#containerresolverlazylazy)
    - **`Phalcon\Container\Resolver\Lazy\StaticCall`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverlazystaticcall-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverlazystaticcall-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">object</span> <span class="sv">$ioc</span> )</code>
<span class="desc">Resolve a static method call</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, mixed&gt;</code>
<code class="sig"><span class="sv">$arguments</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|Lazy</code>
<code class="sig"><span class="sv">$className</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #containerresolverlazystaticcall-__construct }

```php
public function __construct(
    mixed $className,
    string $method,
    array $arguments
);
```

#### `resolve()` { #containerresolverlazystaticcall-resolve }

```php
public function resolve( object $ioc ): mixed;
```

Resolve a static method call


## Container\Resolver\Resolver

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Container/Resolver/Resolver.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Container\Resolver\Resolver`** - implements [`Phalcon\Contracts\Container\Resolver\ResolverService`](phalcon_contracts.md#contractscontainerresolverresolverservice)

</div>

__Uses__ `Closure` · `Phalcon\Container\Exceptions\CannotResolveParameter` · `Phalcon\Container\Resolver\Lazy\Lazy` · `Phalcon\Contracts\Container\Resolver\ResolverService` · `ReflectionClass` · `ReflectionException` · `ReflectionFunction` · `ReflectionMethod` · `ReflectionNamedType` · `ReflectionParameter` · `ReflectionType`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#containerresolverresolver-isresolvableclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isResolvableClass</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Is this a resolvable class?</span>
</a>
<a class="api-item" href="#containerresolverresolver-resolvecall">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveCall</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
<span class="desc">Resolve a call</span>
</a>
<a class="api-item" href="#containerresolverresolver-resolveclass">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">resolveClass</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
<span class="desc">Resolve a class</span>
</a>
<a class="api-item" href="#containerresolverresolver-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveMethod</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionMethod</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span></span>)</code>
<span class="desc">Resolve a method</span>
</a>
<a class="api-item" href="#containerresolverresolver-resolveparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveParameter</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionParameter</span> <span class="sv">$parameter</span></span>)</code>
<span class="desc">Resolve parameters</span>
</a>
<a class="api-item" href="#containerresolverresolver-resolveparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveParameters</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#containerresolverresolver-resolvetype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveType</span>(<span class="prm"><span class="st">object</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$type</span></span>)</code>
<span class="desc">type is ReflectionType</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `isResolvableClass()` { #containerresolverresolver-isresolvableclass }

```php
public function isResolvableClass( string $className ): bool;
```

Is this a resolvable class?

#### `resolveCall()` { #containerresolverresolver-resolvecall }

```php
public function resolveCall(
    object $ioc,
    callable $callableObject,
    array $arguments
): mixed;
```

Resolve a call

#### `resolveClass()` { #containerresolverresolver-resolveclass }

```php
public function resolveClass(
    object $ioc,
    string $className,
    array $arguments
): object;
```

Resolve a class

#### `resolveMethod()` { #containerresolverresolver-resolvemethod }

```php
public function resolveMethod(
    object $ioc,
    ReflectionMethod $method,
    object $instance
): void;
```

Resolve a method

#### `resolveParameter()` { #containerresolverresolver-resolveparameter }

```php
public function resolveParameter(
    object $ioc,
    ReflectionParameter $parameter
): mixed;
```

Resolve parameters

#### `resolveParameters()` { #containerresolverresolver-resolveparameters }

```php
public function resolveParameters(
    object $ioc,
    array $parameters,
    array $arguments
): array;
```

#### `resolveType()` { #containerresolverresolver-resolvetype }

```php
public function resolveType(
    object $ioc,
    mixed $type
): mixed;
```

type is ReflectionType
