---
title: "Phalcon Adr"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Adr

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## ADR\Application

Final

ADR composition root. Owns (or accepts) a container, exposes a small
registration surface that hides the container's definition API, configures
the convention router, and handles the request through the ADR flow.

When no container is supplied one is created with the ADR defaults
(`AdrProvider`) registered. Type-hinted dependencies autowire; only scalar
parameters need to be declared via `define()`.

- **`Phalcon\ADR\Application`** - implements [`Phalcon\Contracts\ADR\Application`](/6.0/api/phalcon_contracts/#contractsadrapplication)

`Closure` · `Phalcon\ADR\Container\AdrProvider` · `Phalcon\ADR\Events\Event` · `Phalcon\ADR\Exceptions\RouteNotFound` · `Phalcon\Container\Container` · `Phalcon\Container\ContainerFactory` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Application` · `Phalcon\Contracts\ADR\Dispatcher` · `Phalcon\Contracts\ADR\Router\AttributeFilter` · `Phalcon\Contracts\ADR\Router\Router` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrapplication-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"Container|null","name":"container","default":"null"}]}>
</ApiItem>
<ApiItem href="#adrapplication-bind" visibility="public" name="bind" returnType="static" params={[{"type":"string","name":"interfaceName","default":null},{"type":"string","name":"concrete","default":null}]}>
Bind an interface to a concrete class.
</ApiItem>
<ApiItem href="#adrapplication-define" visibility="public" name="define" returnType="static" params={[{"type":"string","name":"className","default":null},{"type":"array","name":"parameters","default":"[]"}]}>
Register a class together with explicit values for its constructor
</ApiItem>
<ApiItem href="#adrapplication-extend" visibility="public" name="extend" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"Closure","name":"extender","default":null}]}>
Register a post-build extender (decorator) for a service.
</ApiItem>
<ApiItem href="#adrapplication-factory" visibility="public" name="factory" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"Closure","name":"factory","default":null}]}>
Register a factory closure for a service.
</ApiItem>
<ApiItem href="#adrapplication-getcontainer" visibility="public" name="getContainer" returnType="Container" params={[]}>
Returns the underlying container for definition-level access.
</ApiItem>
<ApiItem href="#adrapplication-handle" visibility="public" name="handle" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null}]}>
Routes the request, writes the matched attributes onto it, dispatches
</ApiItem>
<ApiItem href="#adrapplication-securewith" visibility="public" name="secureWith" returnType="static" params={[{"type":"string","name":"guard","default":null},{"type":"string","name":"prefix","default":null}]}>
Attach a guard (middleware) to every Action under a namespace prefix.
</ApiItem>
<ApiItem href="#adrapplication-set" visibility="public" name="set" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Register a service with a raw definition (class-string, closure or value).
</ApiItem>
<ApiItem href="#adrapplication-setactiondirectory" visibility="public" name="setActionDirectory" returnType="static" params={[{"type":"string","name":"actionDirectory","default":null}]}>
Set the filesystem root that backs the base namespace.
</ApiItem>
<ApiItem href="#adrapplication-setbasenamespace" visibility="public" name="setBaseNamespace" returnType="static" params={[{"type":"string","name":"baseNamespace","default":null}]}>
Set the base namespace the convention router derives Actions from.
</ApiItem>
<ApiItem href="#adrapplication-setwordseparator" visibility="public" name="setWordSeparator" returnType="static" params={[{"type":"string","name":"wordSeparator","default":null}]}>
Set the single delimiter between words in a path segment.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="actionDirectory" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="baseNamespace" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="container" type="Container" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="middlewareMap" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="wordSeparator" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="adrapplication-__construct"><code>__construct()</code></h4>

```php
public function __construct( Container|null $container = null );
```

<h4 id="adrapplication-bind"><code>bind()</code></h4>

```php
public function bind(
string $interfaceName,
string $concrete
): static;
```

Bind an interface to a concrete class.

<h4 id="adrapplication-define"><code>define()</code></h4>

```php
public function define(
string $className,
array $parameters = []
): static;
```

Register a class together with explicit values for its constructor
parameters. Type-hinted dependencies autowire; only the supplied
(usually scalar) parameters are declared. Lazy values (e.g.
`new Phalcon\Container\Resolver\Lazy\Env(...)`) may be passed as values.

<h4 id="adrapplication-extend"><code>extend()</code></h4>

```php
public function extend(
string $name,
Closure $extender
): static;
```

Register a post-build extender (decorator) for a service.

<h4 id="adrapplication-factory"><code>factory()</code></h4>

```php
public function factory(
string $name,
Closure $factory
): static;
```

Register a factory closure for a service.

<h4 id="adrapplication-getcontainer"><code>getContainer()</code></h4>

```php
public function getContainer(): Container;
```

Returns the underlying container for definition-level access.

<h4 id="adrapplication-handle"><code>handle()</code></h4>

```php
public function handle( AttributeRequest $request ): ResponseInterface;
```

Routes the request, writes the matched attributes onto it, dispatches
the Action and returns the response. A single try/catch routes any error
through the error responder; if that itself fails, a bare 500 is returned
so nothing escapes uncaught.

<h4 id="adrapplication-securewith"><code>secureWith()</code></h4>

```php
public function secureWith(
string $guard,
string $prefix
): static;
```

Attach a guard (middleware) to every Action under a namespace prefix.

<h4 id="adrapplication-set"><code>set()</code></h4>

```php
public function set(
string $name,
mixed $definition
): static;
```

Register a service with a raw definition (class-string, closure or value).

<h4 id="adrapplication-setactiondirectory"><code>setActionDirectory()</code></h4>

```php
public function setActionDirectory( string $actionDirectory ): static;
```

Set the filesystem root that backs the base namespace.

<h4 id="adrapplication-setbasenamespace"><code>setBaseNamespace()</code></h4>

```php
public function setBaseNamespace( string $baseNamespace ): static;
```

Set the base namespace the convention router derives Actions from.

<h4 id="adrapplication-setwordseparator"><code>setWordSeparator()</code></h4>

```php
public function setWordSeparator( string $wordSeparator ): static;
```

Set the single delimiter between words in a path segment.

## ADR\Container\AdrProvider

Class

Registers the ADR seams in the container; concretes autowire.

Used instead of `Phalcon\Container\Provider\Web` for ADR applications. It
shares the short aliases (`request`/`response`/`router`/`eventsManager`) but
binds the ADR contracts behind them.

- **`Phalcon\ADR\Container\AdrProvider`** - implements [`Phalcon\Contracts\Container\Service\Provider`](/6.0/api/phalcon_contracts/#contractscontainerserviceprovider)

`Phalcon\ADR\Dispatcher` · `Phalcon\ADR\Emitter\SapiEmitter` · `Phalcon\ADR\Responder\JsonResponder` · `Phalcon\ADR\Router\AttributeFilter` · `Phalcon\ADR\Router\Router` · `Phalcon\Contracts\ADR\Dispatcher` · `Phalcon\Contracts\ADR\Emitter\Emitter` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Contracts\ADR\Router\AttributeFilter` · `Phalcon\Contracts\ADR\Router\Router` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Provider` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Contracts\Logger\Logger` · `Phalcon\Events\Manager` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Logger`

### Method Summary

<ApiItem href="#adrcontaineradrprovider-provide" visibility="public" name="provide" returnType="void" params={[{"type":"Collection","name":"services","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrcontaineradrprovider-provide"><code>provide()</code></h4>

```php
public function provide( Collection $services ): void;
```

## ADR\Dispatcher

Final

Resolves the Action (and middleware) through the container, wraps it in the
pipeline and runs it, firing the `pipeline:*` events. Global middleware is
resolved once and cached; only route middleware resolves per request.

The container resolution is the one deliberate Service Locator: it uses the
resolve-only `IocContainer` contract, so a container swap is a two-method
adapter. Everything else is constructor-injected.

- **`Phalcon\ADR\Dispatcher`** - implements [`Phalcon\Contracts\ADR\Dispatcher`](/6.0/api/phalcon_contracts/#contractsadrdispatcher)

`Phalcon\ADR\Events\Event` · `Phalcon\ADR\Exceptions\NotAnAction` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Action` · `Phalcon\Contracts\ADR\Dispatcher` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Container\Ioc\IocContainer` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrdispatcher-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"IocContainer","name":"container","default":null},{"type":"Manager","name":"events","default":null},{"type":"array","name":"globalMiddleware","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrdispatcher-dispatch" visibility="public" name="dispatch" returnType="ResponseInterface" params={[{"type":"string","name":"actionClass","default":null},{"type":"AttributeRequest","name":"request","default":null},{"type":"array","name":"routeMiddleware","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrdispatcher-resolveall" visibility="protected" name="resolveAll" returnType="array" params={[{"type":"array","name":"classes","default":null}]}>
</ApiItem>
<ApiItem href="#adrdispatcher-resolveglobal" visibility="protected" name="resolveGlobal" returnType="array" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="IocContainer" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="events" type="Manager" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="globalMiddleware" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resolvedGlobal" type="list&lt;Middleware&gt;|null" default="null">
</ApiItem>

### Methods

<h4 id="adrdispatcher-__construct"><code>__construct()</code></h4>

```php
public function __construct(
IocContainer $container,
Manager $events,
array $globalMiddleware = []
);
```

<h4 id="adrdispatcher-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch(
string $actionClass,
AttributeRequest $request,
array $routeMiddleware = []
): ResponseInterface;
```

<h4 id="adrdispatcher-resolveall"><code>resolveAll()</code></h4>

```php
protected function resolveAll( array $classes ): array;
```

<h4 id="adrdispatcher-resolveglobal"><code>resolveGlobal()</code></h4>

```php
protected function resolveGlobal(): array;
```

## ADR\Emitter\SapiEmitter

Class

Emits a response through the SAPI (headers + body via `Response::send()`).
Refuses to emit once headers have already been sent.

- **`Phalcon\ADR\Emitter\SapiEmitter`** - implements [`Phalcon\Contracts\ADR\Emitter\Emitter`](/6.0/api/phalcon_contracts/#contractsadremitteremitter)

`Phalcon\ADR\Exceptions\HeadersAlreadySent` · `Phalcon\Contracts\ADR\Emitter\Emitter` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adremittersapiemitter-emit" visibility="public" name="emit" returnType="void" params={[{"type":"ResponseInterface","name":"response","default":null}]}>
</ApiItem>

### Methods

<h4 id="adremittersapiemitter-emit"><code>emit()</code></h4>

```php
public function emit( ResponseInterface $response ): void;
```

## ADR\ErrorResponder

Final

Turns a thrown exception into a response through the responder chain.

The full diagnostic (class, message, file:line and the exception itself) goes
to the log with a correlation reference; the client receives only a generic
message plus that same reference, unless debug mode is on. Exceptions are
mapped to statuses deterministically: an exact class match first, then the
ancestor chain, so map ordering never matters.

- **`Phalcon\ADR\ErrorResponder`**

`Phalcon\ADR\Exceptions\MethodNotAllowed` · `Phalcon\ADR\Exceptions\RouteNotFound` · `Phalcon\ADR\Payload\Payload` · `Phalcon\ADR\Payload\Status` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Contracts\Logger\Logger` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface` · `Throwable`

### Method Summary

<ApiItem href="#adrerrorresponder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"Responder","name":"chain","default":null},{"type":"Logger","name":"logger","default":null},{"type":"bool","name":"debug","default":"false"},{"type":"array","name":"exceptionMap","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrerrorresponder-handle" visibility="public" name="handle" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Throwable","name":"exception","default":null}]}>
</ApiItem>
<ApiItem href="#adrerrorresponder-correlationid" visibility="protected" name="correlationId" returnType="string" params={[{"type":"RequestInterface","name":"request","default":null}]}>
</ApiItem>
<ApiItem href="#adrerrorresponder-defaultmap" visibility="protected" name="defaultMap" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#adrerrorresponder-details" visibility="protected" name="details" returnType="array" params={[{"type":"Throwable","name":"exception","default":null},{"type":"string","name":"ref","default":null},{"type":"string","name":"status","default":"Status::ERROR"}]}>
</ApiItem>
<ApiItem href="#adrerrorresponder-reason" visibility="protected" name="reason" returnType="string" params={[{"type":"string","name":"status","default":null}]}>
The message that goes with the status. Reporting `Internal Server Error`
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="chain" type="Responder" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="debug" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="exceptionMap" type="array" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="logger" type="Logger" default="">
</ApiItem>

### Methods

<h4 id="adrerrorresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Responder $chain,
Logger $logger,
bool $debug = false,
array $exceptionMap = []
);
```

<h4 id="adrerrorresponder-handle"><code>handle()</code></h4>

```php
public function handle(
RequestInterface $request,
ResponseInterface $response,
Throwable $exception
): ResponseInterface;
```

<h4 id="adrerrorresponder-correlationid"><code>correlationId()</code></h4>

```php
protected function correlationId( RequestInterface $request ): string;
```

<h4 id="adrerrorresponder-defaultmap"><code>defaultMap()</code></h4>

```php
protected function defaultMap(): array;
```

<h4 id="adrerrorresponder-details"><code>details()</code></h4>

```php
protected function details(
Throwable $exception,
string $ref,
string $status = Status::ERROR
): array;
```

<h4 id="adrerrorresponder-reason"><code>reason()</code></h4>

```php
protected function reason( string $status ): string;
```

The message that goes with the status. Reporting `Internal Server Error`
next to a `404` tells the client the opposite of what happened.

## ADR\EventfulHandler

Final

The terminal handler of the pipeline: fires the `adr:*` events around the
Action's execution.

- **`Phalcon\ADR\EventfulHandler`** - implements [`Phalcon\Contracts\ADR\Handler`](/6.0/api/phalcon_contracts/#contractsadrhandler)

`Phalcon\ADR\Events\Event` · `Phalcon\Contracts\ADR\Action` · `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adreventfulhandler-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"Action","name":"action","default":null},{"type":"Manager","name":"events","default":null}]}>
</ApiItem>
<ApiItem href="#adreventfulhandler-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="action" type="Action" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="events" type="Manager" default="">
</ApiItem>

### Methods

<h4 id="adreventfulhandler-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Action $action,
Manager $events
);
```

<h4 id="adreventfulhandler-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( AttributeRequest $request ): ResponseInterface;
```

## ADR\Events\Event

Class

The ADR event vocabulary, fired through the native events manager.

- **`Phalcon\ADR\Events\Event`**

### Constants

<ApiItem kind="constant" name="ADR_AFTER_EXECUTE_ACTION" type="string" default="&quot;adr:afterExecuteAction&quot;">
</ApiItem>
<ApiItem kind="constant" name="ADR_BEFORE_EXECUTE_ACTION" type="string" default="&quot;adr:beforeExecuteAction&quot;">
</ApiItem>
<ApiItem kind="constant" name="APPLICATION_AFTER_HANDLE" type="string" default="&quot;application:afterHandle&quot;">
</ApiItem>
<ApiItem kind="constant" name="APPLICATION_BEFORE_HANDLE" type="string" default="&quot;application:beforeHandle&quot;">
</ApiItem>
<ApiItem kind="constant" name="PIPELINE_AFTER_DISPATCH" type="string" default="&quot;pipeline:afterDispatch&quot;">
</ApiItem>
<ApiItem kind="constant" name="PIPELINE_BEFORE_DISPATCH" type="string" default="&quot;pipeline:beforeDispatch&quot;">
</ApiItem>

## ADR\Exceptions\ActionDirectoryNotSet

Class

Thrown when the router is asked to match without an action directory; the
convention cannot resolve sub-namespaces without one.

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\ActionDirectoryNotSet`**

### Method Summary

<ApiItem href="#adrexceptionsactiondirectorynotset-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrexceptionsactiondirectorynotset-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\Exception

Class

Generic exception for the ADR component, and the base for every typed ADR
exception.

- `\Exception`
- **`Phalcon\ADR\Exceptions\Exception`** - implements [`Phalcon\Contracts\ADR\Exceptions\ADRThrowable`](/6.0/api/phalcon_contracts/#contractsadrexceptionsadrthrowable)
- [`Phalcon\ADR\Exceptions\ActionDirectoryNotSet`](#adrexceptionsactiondirectorynotset)
- [`Phalcon\ADR\Exceptions\HeadersAlreadySent`](#adrexceptionsheadersalreadysent)
- [`Phalcon\ADR\Exceptions\MethodNotAllowed`](#adrexceptionsmethodnotallowed)
- [`Phalcon\ADR\Exceptions\NotAnAction`](#adrexceptionsnotanaction)
- [`Phalcon\ADR\Exceptions\OutputAlreadySent`](#adrexceptionsoutputalreadysent)
- [`Phalcon\ADR\Exceptions\RouteNotFound`](#adrexceptionsroutenotfound)

`Exception` · `Phalcon\Contracts\ADR\Exceptions\ADRThrowable`

## ADR\Exceptions\HeadersAlreadySent

Class

Thrown when the emitter is asked to send a response after headers have
already been sent.

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\HeadersAlreadySent`**

### Method Summary

<ApiItem href="#adrexceptionsheadersalreadysent-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrexceptionsheadersalreadysent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\MethodNotAllowed

Class

Thrown when a route matches the path but not the request method.

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\MethodNotAllowed`**

### Method Summary

<ApiItem href="#adrexceptionsmethodnotallowed-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrexceptionsmethodnotallowed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\NotAnAction

Class

Thrown when the dispatcher resolves a class that is not an ADR Action.

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\NotAnAction`**

### Method Summary

<ApiItem href="#adrexceptionsnotanaction-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":"\"\""}]}>
</ApiItem>

### Methods

<h4 id="adrexceptionsnotanaction-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className = "" );
```

## ADR\Exceptions\OutputAlreadySent

Class

Thrown when the emitter is asked to send a response after output has already
been sent.

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\OutputAlreadySent`**

### Method Summary

<ApiItem href="#adrexceptionsoutputalreadysent-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrexceptionsoutputalreadysent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\RouteNotFound

Class

Thrown when no route matches the request.

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\RouteNotFound`**

### Method Summary

<ApiItem href="#adrexceptionsroutenotfound-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrexceptionsroutenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Front\AbstractHttpFront

Abstract

Boots a container, builds the Application, handles the request and emits the
response. Userland front controllers override `loadEnvironment()`,
`registerProviders()` and optionally `getApplication()`; bootstrap is
`exit((new AppFront(dirname(__DIR__)))->run());`.

- **`Phalcon\ADR\Front\AbstractHttpFront`** - implements [`Phalcon\Contracts\Front\FrontController`](/6.0/api/phalcon_contracts/#contractsfrontfrontcontroller)
- [`Phalcon\ADR\Front\HttpFront`](#adrfronthttpfront)

`Phalcon\ADR\Application` · `Phalcon\ADR\Container\AdrProvider` · `Phalcon\Container\Container` · `Phalcon\Contracts\ADR\Application` · `Phalcon\Contracts\ADR\Emitter\Emitter` · `Phalcon\Contracts\Front\FrontController` · `Phalcon\Contracts\Http\AttributeRequest` · `Throwable`

### Method Summary

<ApiItem href="#adrfrontabstracthttpfront-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"projectRoot","default":null}]}>
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-boot" visibility="public" name="boot" returnType="Container" params={[]}>
Builds the container, loads the environment and registers the providers,
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-run" visibility="public" name="run" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-buildcontainer" visibility="protected" name="buildContainer" returnType="Container" params={[]}>
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-getapplication" visibility="protected" name="getApplication" returnType="ApplicationInterface" params={[{"type":"Container","name":"container","default":null}]}>
Builds the Application the front will hand the request to. Override to
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-handlebooterror" visibility="protected" name="handleBootError" returnType="int" params={[{"type":"\\Throwable","name":"exception","default":null}]}>
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-loadenvironment" visibility="protected" name="loadEnvironment" returnType="void" params={[{"type":"Container","name":"container","default":null}]}>
</ApiItem>
<ApiItem href="#adrfrontabstracthttpfront-registerproviders" visibility="protected" name="registerProviders" returnType="void" params={[{"type":"Container","name":"container","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="Container|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="projectRoot" type="string" default="">
</ApiItem>

### Methods

<h4 id="adrfrontabstracthttpfront-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $projectRoot );
```

<h4 id="adrfrontabstracthttpfront-boot"><code>boot()</code></h4>

```php
final public function boot(): Container;
```

Builds the container, loads the environment and registers the providers,
returning the container for consumers that need it before (or instead
of) `run()`. The container is built once and cached, so calling `boot()`
and then `run()` reuses the same instance.

<h4 id="adrfrontabstracthttpfront-run"><code>run()</code></h4>

```php
final public function run(): int;
```

<h4 id="adrfrontabstracthttpfront-buildcontainer"><code>buildContainer()</code></h4>

```php
protected function buildContainer(): Container;
```

<h4 id="adrfrontabstracthttpfront-getapplication"><code>getApplication()</code></h4>

```php
protected function getApplication( Container $container ): ApplicationInterface;
```

Builds the Application the front will hand the request to. Override to
configure it (`setBaseNamespace()`/`secureWith()`) or to wire a different
`Phalcon\Contracts\ADR\Application` implementation.

<h4 id="adrfrontabstracthttpfront-handlebooterror"><code>handleBootError()</code></h4>

```php
protected function handleBootError( \Throwable $exception ): int;
```

<h4 id="adrfrontabstracthttpfront-loadenvironment"><code>loadEnvironment()</code></h4>

```php
protected function loadEnvironment( Container $container ): void;
```

<h4 id="adrfrontabstracthttpfront-registerproviders"><code>registerProviders()</code></h4>

```php
protected function registerProviders( Container $container ): void;
```

## ADR\Front\HttpFront

Class

Concrete default HTTP front controller. Boots the ADR provider and runs the
application with the framework defaults; subclass to override
`loadEnvironment()` or `registerProviders()`.

- [`Phalcon\ADR\Front\AbstractHttpFront`](#adrfrontabstracthttpfront)
- **`Phalcon\ADR\Front\HttpFront`**

## ADR\Input\Input

Class

Generic, string-keyed input bag for an Action.

`fromRequest()` merges the request query, parsed body and route attributes
into a single bag (later sources win). Extend it to build a typed, per-domain
input value object: the factories use late static binding, so a subclass's
`fromRequest()` / `fromArray()` return that subclass.

- **`Phalcon\ADR\Input\Input`**

`Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\Http\AttributeRequest`

### Method Summary

<ApiItem href="#adrinputinput-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"data","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrinputinput-fromarray" visibility="public" name="fromArray" returnType="static" params={[{"type":"array","name":"data","default":null}]}>
</ApiItem>
<ApiItem href="#adrinputinput-fromrequest" visibility="public" name="fromRequest" returnType="static" params={[{"type":"AttributeRequest","name":"request","default":null}]}>
</ApiItem>
<ApiItem href="#adrinputinput-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
</ApiItem>
<ApiItem href="#adrinputinput-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>
<ApiItem href="#adrinputinput-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="data" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="adrinputinput-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $data = [] );
```

<h4 id="adrinputinput-fromarray"><code>fromArray()</code></h4>

```php
public static function fromArray( array $data ): static;
```

<h4 id="adrinputinput-fromrequest"><code>fromRequest()</code></h4>

```php
public static function fromRequest( AttributeRequest $request ): static;
```

<h4 id="adrinputinput-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

<h4 id="adrinputinput-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

<h4 id="adrinputinput-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

## ADR\Middleware\CorsMiddleware

Class

CORS middleware. Inert by default: it emits nothing until an origin allowlist
is configured, and only for requests whose `Origin` is on it. The allowed
origin is always echoed back explicitly, so credentials are never paired with
a wildcard origin. Preflight `OPTIONS` requests are answered directly.

- **`Phalcon\ADR\Middleware\CorsMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/6.0/api/phalcon_contracts/#contractsadrmiddleware)

`Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<ApiItem href="#adrmiddlewarecorsmiddleware-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"config","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrmiddlewarecorsmiddleware-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null},{"type":"Handler","name":"next","default":null}]}>
</ApiItem>
<ApiItem href="#adrmiddlewarecorsmiddleware-applyheaders" visibility="protected" name="applyHeaders" returnType="void" params={[{"type":"ResponseInterface","name":"response","default":null},{"type":"string","name":"origin","default":null}]}>
</ApiItem>
<ApiItem href="#adrmiddlewarecorsmiddleware-isallowed" visibility="protected" name="isAllowed" returnType="bool" params={[{"type":"string","name":"origin","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="allowCredentials" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="allowedHeaders" type="list&lt;string&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="allowedMethods" type="list&lt;string&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="allowedOrigins" type="list&lt;string&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="maxAge" type="int" default="0">
</ApiItem>

### Methods

<h4 id="adrmiddlewarecorsmiddleware-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $config = [] );
```

<h4 id="adrmiddlewarecorsmiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

<h4 id="adrmiddlewarecorsmiddleware-applyheaders"><code>applyHeaders()</code></h4>

```php
protected function applyHeaders(
ResponseInterface $response,
string $origin
): void;
```

<h4 id="adrmiddlewarecorsmiddleware-isallowed"><code>isAllowed()</code></h4>

```php
protected function isAllowed( string $origin ): bool;
```

## ADR\Middleware\MethodOverrideMiddleware

Class

Thin enabler for the native `_method` override.

`Request::getMethod()` already honors `X-HTTP-Method-Override` and, when the
parameter-override flag is on, the `_method` field. This middleware only
turns that flag on, and only for a `POST` request whose `_method` names a
safe verb (`PUT`/`PATCH`/`DELETE`), so `_method` cannot spoof an arbitrary
method.

The flag lives on `Phalcon\Http\Request`, not on the request contract, so a
request implementation that does not carry it is simply passed through.

- **`Phalcon\ADR\Middleware\MethodOverrideMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/6.0/api/phalcon_contracts/#contractsadrmiddleware)

`Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrmiddlewaremethodoverridemiddleware-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null},{"type":"Handler","name":"next","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="allowed" type="array" default="[...]">
</ApiItem>

### Methods

<h4 id="adrmiddlewaremethodoverridemiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## ADR\Middleware\RequestIdMiddleware

Class

Ensures every request carries an `X-Request-Id`, reusing an incoming one or
generating it, exposing it on the request attributes and the response.

- **`Phalcon\ADR\Middleware\RequestIdMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/6.0/api/phalcon_contracts/#contractsadrmiddleware)

`Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrmiddlewarerequestidmiddleware-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null},{"type":"Handler","name":"next","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrmiddlewarerequestidmiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## ADR\Middleware\TimingMiddleware

Class

Adds an `X-Response-Time` header measuring how long the rest of the pipeline
took to produce the response.

- **`Phalcon\ADR\Middleware\TimingMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/6.0/api/phalcon_contracts/#contractsadrmiddleware)

`Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrmiddlewaretimingmiddleware-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null},{"type":"Handler","name":"next","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrmiddlewaretimingmiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## ADR\Payload\Payload

Class

Immutable payload produced by the domain layer.

Every `with*()` method returns a new instance, leaving the receiver
unchanged. Named factories provide a concise way to create a payload for the
commonly used statuses.

- **`Phalcon\ADR\Payload\Payload`** - implements [`Phalcon\Contracts\ADR\Payload\Payload`](/6.0/api/phalcon_contracts/#contractsadrpayloadpayload)

`Phalcon\Contracts\ADR\Payload\Payload` · `Throwable`

### Method Summary

<ApiItem href="#adrpayloadpayload-accepted" visibility="public" name="accepted" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `ACCEPTED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-authenticated" visibility="public" name="authenticated" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `AUTHENTICATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-authorized" visibility="public" name="authorized" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `AUTHORIZED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-created" visibility="public" name="created" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `CREATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-deleted" visibility="public" name="deleted" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `DELETED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-error" visibility="public" name="error" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `ERROR` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-forbidden" visibility="public" name="forbidden" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_AUTHORIZED` status (authenticated but
</ApiItem>
<ApiItem href="#adrpayloadpayload-found" visibility="public" name="found" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `FOUND` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-getexception" visibility="public" name="getException" returnType="Throwable|null" params={[]}>
Gets the exception thrown in the domain layer, if any.
</ApiItem>
<ApiItem href="#adrpayloadpayload-getextras" visibility="public" name="getExtras" returnType="mixed" params={[]}>
Gets the arbitrary extra domain information.
</ApiItem>
<ApiItem href="#adrpayloadpayload-getinput" visibility="public" name="getInput" returnType="mixed" params={[]}>
Gets the domain input.
</ApiItem>
<ApiItem href="#adrpayloadpayload-getmessages" visibility="public" name="getMessages" returnType="mixed" params={[]}>
Gets the domain messages.
</ApiItem>
<ApiItem href="#adrpayloadpayload-getresult" visibility="public" name="getResult" returnType="mixed" params={[]}>
Gets the domain result.
</ApiItem>
<ApiItem href="#adrpayloadpayload-getstatus" visibility="public" name="getStatus" returnType="mixed" params={[]}>
Gets the payload status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-invalid" visibility="public" name="invalid" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_VALID` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-notaccepted" visibility="public" name="notAccepted" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_ACCEPTED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-notcreated" visibility="public" name="notCreated" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_CREATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-notdeleted" visibility="public" name="notDeleted" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_DELETED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-notfound" visibility="public" name="notFound" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_FOUND` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-notupdated" visibility="public" name="notUpdated" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_UPDATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-processing" visibility="public" name="processing" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `PROCESSING` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-success" visibility="public" name="success" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `SUCCESS` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-unauthenticated" visibility="public" name="unauthenticated" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_AUTHENTICATED` status (identity not
</ApiItem>
<ApiItem href="#adrpayloadpayload-updated" visibility="public" name="updated" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `UPDATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-valid" visibility="public" name="valid" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `VALID` status.
</ApiItem>
<ApiItem href="#adrpayloadpayload-withexception" visibility="public" name="withException" returnType="PayloadContract" params={[{"type":"Throwable","name":"exception","default":null}]}>
Returns a copy of the payload with the given exception.
</ApiItem>
<ApiItem href="#adrpayloadpayload-withextras" visibility="public" name="withExtras" returnType="PayloadContract" params={[{"type":"mixed","name":"extras","default":null}]}>
Returns a copy of the payload with the given extras.
</ApiItem>
<ApiItem href="#adrpayloadpayload-withinput" visibility="public" name="withInput" returnType="PayloadContract" params={[{"type":"mixed","name":"input","default":null}]}>
Returns a copy of the payload with the given input.
</ApiItem>
<ApiItem href="#adrpayloadpayload-withmessages" visibility="public" name="withMessages" returnType="PayloadContract" params={[{"type":"mixed","name":"messages","default":null}]}>
Returns a copy of the payload with the given messages.
</ApiItem>
<ApiItem href="#adrpayloadpayload-withresult" visibility="public" name="withResult" returnType="PayloadContract" params={[{"type":"mixed","name":"result","default":null}]}>
Returns a copy of the payload with the given result.
</ApiItem>
<ApiItem href="#adrpayloadpayload-withstatus" visibility="public" name="withStatus" returnType="PayloadContract" params={[{"type":"mixed","name":"status","default":null}]}>
Returns a copy of the payload with the given status.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="exception" type="Throwable|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="extras" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="input" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messages" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="result" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="status" type="mixed" default="null">
</ApiItem>

### Methods

<h4 id="adrpayloadpayload-accepted"><code>accepted()</code></h4>

```php
public static function accepted( mixed $result = null ): PayloadContract;
```

Creates a payload with the `ACCEPTED` status.

<h4 id="adrpayloadpayload-authenticated"><code>authenticated()</code></h4>

```php
public static function authenticated( mixed $result = null ): PayloadContract;
```

Creates a payload with the `AUTHENTICATED` status.

<h4 id="adrpayloadpayload-authorized"><code>authorized()</code></h4>

```php
public static function authorized( mixed $result = null ): PayloadContract;
```

Creates a payload with the `AUTHORIZED` status.

<h4 id="adrpayloadpayload-created"><code>created()</code></h4>

```php
public static function created( mixed $result = null ): PayloadContract;
```

Creates a payload with the `CREATED` status.

<h4 id="adrpayloadpayload-deleted"><code>deleted()</code></h4>

```php
public static function deleted( mixed $result = null ): PayloadContract;
```

Creates a payload with the `DELETED` status.

<h4 id="adrpayloadpayload-error"><code>error()</code></h4>

```php
public static function error( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `ERROR` status.

<h4 id="adrpayloadpayload-forbidden"><code>forbidden()</code></h4>

```php
public static function forbidden( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_AUTHORIZED` status (authenticated but
not allowed - HTTP 403).

<h4 id="adrpayloadpayload-found"><code>found()</code></h4>

```php
public static function found( mixed $result = null ): PayloadContract;
```

Creates a payload with the `FOUND` status.

<h4 id="adrpayloadpayload-getexception"><code>getException()</code></h4>

```php
public function getException(): Throwable|null;
```

Gets the exception thrown in the domain layer, if any.

<h4 id="adrpayloadpayload-getextras"><code>getExtras()</code></h4>

```php
public function getExtras(): mixed;
```

Gets the arbitrary extra domain information.

<h4 id="adrpayloadpayload-getinput"><code>getInput()</code></h4>

```php
public function getInput(): mixed;
```

Gets the domain input.

<h4 id="adrpayloadpayload-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): mixed;
```

Gets the domain messages.

<h4 id="adrpayloadpayload-getresult"><code>getResult()</code></h4>

```php
public function getResult(): mixed;
```

Gets the domain result.

<h4 id="adrpayloadpayload-getstatus"><code>getStatus()</code></h4>

```php
public function getStatus(): mixed;
```

Gets the payload status.

<h4 id="adrpayloadpayload-invalid"><code>invalid()</code></h4>

```php
public static function invalid( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_VALID` status.

<h4 id="adrpayloadpayload-notaccepted"><code>notAccepted()</code></h4>

```php
public static function notAccepted( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_ACCEPTED` status.

<h4 id="adrpayloadpayload-notcreated"><code>notCreated()</code></h4>

```php
public static function notCreated( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_CREATED` status.

<h4 id="adrpayloadpayload-notdeleted"><code>notDeleted()</code></h4>

```php
public static function notDeleted( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_DELETED` status.

<h4 id="adrpayloadpayload-notfound"><code>notFound()</code></h4>

```php
public static function notFound( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_FOUND` status.

<h4 id="adrpayloadpayload-notupdated"><code>notUpdated()</code></h4>

```php
public static function notUpdated( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_UPDATED` status.

<h4 id="adrpayloadpayload-processing"><code>processing()</code></h4>

```php
public static function processing( mixed $result = null ): PayloadContract;
```

Creates a payload with the `PROCESSING` status.

<h4 id="adrpayloadpayload-success"><code>success()</code></h4>

```php
public static function success( mixed $result = null ): PayloadContract;
```

Creates a payload with the `SUCCESS` status.

<h4 id="adrpayloadpayload-unauthenticated"><code>unauthenticated()</code></h4>

```php
public static function unauthenticated( mixed $messages = null ): PayloadContract;
```

Creates a payload with the `NOT_AUTHENTICATED` status (identity not
established - HTTP 401).

<h4 id="adrpayloadpayload-updated"><code>updated()</code></h4>

```php
public static function updated( mixed $result = null ): PayloadContract;
```

Creates a payload with the `UPDATED` status.

<h4 id="adrpayloadpayload-valid"><code>valid()</code></h4>

```php
public static function valid( mixed $result = null ): PayloadContract;
```

Creates a payload with the `VALID` status.

<h4 id="adrpayloadpayload-withexception"><code>withException()</code></h4>

```php
public function withException( Throwable $exception ): PayloadContract;
```

Returns a copy of the payload with the given exception.

<h4 id="adrpayloadpayload-withextras"><code>withExtras()</code></h4>

```php
public function withExtras( mixed $extras ): PayloadContract;
```

Returns a copy of the payload with the given extras.

<h4 id="adrpayloadpayload-withinput"><code>withInput()</code></h4>

```php
public function withInput( mixed $input ): PayloadContract;
```

Returns a copy of the payload with the given input.

<h4 id="adrpayloadpayload-withmessages"><code>withMessages()</code></h4>

```php
public function withMessages( mixed $messages ): PayloadContract;
```

Returns a copy of the payload with the given messages.

<h4 id="adrpayloadpayload-withresult"><code>withResult()</code></h4>

```php
public function withResult( mixed $result ): PayloadContract;
```

Returns a copy of the payload with the given result.

<h4 id="adrpayloadpayload-withstatus"><code>withStatus()</code></h4>

```php
public function withStatus( mixed $status ): PayloadContract;
```

Returns a copy of the payload with the given status.

## ADR\Payload\PayloadFactory

Class

Thin, injectable factory mirroring the `Payload` named factories.

It exists so that payload creation can be registered as a service in the DI
container and substituted in tests, rather than calling the static factories
directly.

- **`Phalcon\ADR\Payload\PayloadFactory`**

`Phalcon\Contracts\ADR\Payload\Payload`

### Method Summary

<ApiItem href="#adrpayloadpayloadfactory-accepted" visibility="public" name="accepted" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `ACCEPTED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-authenticated" visibility="public" name="authenticated" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `AUTHENTICATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-authorized" visibility="public" name="authorized" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `AUTHORIZED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-created" visibility="public" name="created" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `CREATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-deleted" visibility="public" name="deleted" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `DELETED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-error" visibility="public" name="error" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `ERROR` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-forbidden" visibility="public" name="forbidden" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_AUTHORIZED` status (HTTP 403).
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-found" visibility="public" name="found" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `FOUND` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-invalid" visibility="public" name="invalid" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_VALID` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-notaccepted" visibility="public" name="notAccepted" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_ACCEPTED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-notcreated" visibility="public" name="notCreated" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_CREATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-notdeleted" visibility="public" name="notDeleted" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_DELETED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-notfound" visibility="public" name="notFound" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_FOUND` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-notupdated" visibility="public" name="notUpdated" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_UPDATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-processing" visibility="public" name="processing" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `PROCESSING` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-success" visibility="public" name="success" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `SUCCESS` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-unauthenticated" visibility="public" name="unauthenticated" returnType="PayloadInterface" params={[{"type":"mixed","name":"messages","default":"null"}]}>
Creates a payload with the `NOT_AUTHENTICATED` status (HTTP 401).
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-updated" visibility="public" name="updated" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `UPDATED` status.
</ApiItem>
<ApiItem href="#adrpayloadpayloadfactory-valid" visibility="public" name="valid" returnType="PayloadInterface" params={[{"type":"mixed","name":"result","default":"null"}]}>
Creates a payload with the `VALID` status.
</ApiItem>

### Methods

<h4 id="adrpayloadpayloadfactory-accepted"><code>accepted()</code></h4>

```php
public function accepted( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `ACCEPTED` status.

<h4 id="adrpayloadpayloadfactory-authenticated"><code>authenticated()</code></h4>

```php
public function authenticated( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `AUTHENTICATED` status.

<h4 id="adrpayloadpayloadfactory-authorized"><code>authorized()</code></h4>

```php
public function authorized( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `AUTHORIZED` status.

<h4 id="adrpayloadpayloadfactory-created"><code>created()</code></h4>

```php
public function created( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `CREATED` status.

<h4 id="adrpayloadpayloadfactory-deleted"><code>deleted()</code></h4>

```php
public function deleted( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `DELETED` status.

<h4 id="adrpayloadpayloadfactory-error"><code>error()</code></h4>

```php
public function error( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `ERROR` status.

<h4 id="adrpayloadpayloadfactory-forbidden"><code>forbidden()</code></h4>

```php
public function forbidden( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_AUTHORIZED` status (HTTP 403).

<h4 id="adrpayloadpayloadfactory-found"><code>found()</code></h4>

```php
public function found( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `FOUND` status.

<h4 id="adrpayloadpayloadfactory-invalid"><code>invalid()</code></h4>

```php
public function invalid( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_VALID` status.

<h4 id="adrpayloadpayloadfactory-notaccepted"><code>notAccepted()</code></h4>

```php
public function notAccepted( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_ACCEPTED` status.

<h4 id="adrpayloadpayloadfactory-notcreated"><code>notCreated()</code></h4>

```php
public function notCreated( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_CREATED` status.

<h4 id="adrpayloadpayloadfactory-notdeleted"><code>notDeleted()</code></h4>

```php
public function notDeleted( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_DELETED` status.

<h4 id="adrpayloadpayloadfactory-notfound"><code>notFound()</code></h4>

```php
public function notFound( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_FOUND` status.

<h4 id="adrpayloadpayloadfactory-notupdated"><code>notUpdated()</code></h4>

```php
public function notUpdated( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_UPDATED` status.

<h4 id="adrpayloadpayloadfactory-processing"><code>processing()</code></h4>

```php
public function processing( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `PROCESSING` status.

<h4 id="adrpayloadpayloadfactory-success"><code>success()</code></h4>

```php
public function success( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `SUCCESS` status.

<h4 id="adrpayloadpayloadfactory-unauthenticated"><code>unauthenticated()</code></h4>

```php
public function unauthenticated( mixed $messages = null ): PayloadInterface;
```

Creates a payload with the `NOT_AUTHENTICATED` status (HTTP 401).

<h4 id="adrpayloadpayloadfactory-updated"><code>updated()</code></h4>

```php
public function updated( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `UPDATED` status.

<h4 id="adrpayloadpayloadfactory-valid"><code>valid()</code></h4>

```php
public function valid( mixed $result = null ): PayloadInterface;
```

Creates a payload with the `VALID` status.

## ADR\Payload\Status

Class

Holds the status codes for the payload.

The two failure-related statuses are distinct, following the Aura.Payload
lineage:

- `ERROR` means an exception was raised while the domain layer was running.
  By convention, `Payload::withException()` pairs with the `ERROR` status.
- `FAILURE` means the domain layer ran to completion but declined the
  request (for example, a business rule was not satisfied); no exception
  was raised.

@see Payload

- **`Phalcon\ADR\Payload\Status`**

### Constants

<ApiItem kind="constant" name="ACCEPTED" type="string" default="&quot;ACCEPTED&quot;">
</ApiItem>
<ApiItem kind="constant" name="AUTHENTICATED" type="string" default="&quot;AUTHENTICATED&quot;">
</ApiItem>
<ApiItem kind="constant" name="AUTHORIZED" type="string" default="&quot;AUTHORIZED&quot;">
</ApiItem>
<ApiItem kind="constant" name="CREATED" type="string" default="&quot;CREATED&quot;">
</ApiItem>
<ApiItem kind="constant" name="DELETED" type="string" default="&quot;DELETED&quot;">
</ApiItem>
<ApiItem kind="constant" name="ERROR" type="string" default="&quot;ERROR&quot;">
</ApiItem>
<ApiItem kind="constant" name="FAILURE" type="string" default="&quot;FAILURE&quot;">
</ApiItem>
<ApiItem kind="constant" name="FOUND" type="string" default="&quot;FOUND&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_NOT_ALLOWED" type="string" default="&quot;METHOD_NOT_ALLOWED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_ACCEPTED" type="string" default="&quot;NOT_ACCEPTED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_AUTHENTICATED" type="string" default="&quot;NOT_AUTHENTICATED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_AUTHORIZED" type="string" default="&quot;NOT_AUTHORIZED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_CREATED" type="string" default="&quot;NOT_CREATED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_DELETED" type="string" default="&quot;NOT_DELETED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_FOUND" type="string" default="&quot;NOT_FOUND&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_UPDATED" type="string" default="&quot;NOT_UPDATED&quot;">
</ApiItem>
<ApiItem kind="constant" name="NOT_VALID" type="string" default="&quot;NOT_VALID&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROCESSING" type="string" default="&quot;PROCESSING&quot;">
</ApiItem>
<ApiItem kind="constant" name="SUCCESS" type="string" default="&quot;SUCCESS&quot;">
</ApiItem>
<ApiItem kind="constant" name="UPDATED" type="string" default="&quot;UPDATED&quot;">
</ApiItem>
<ApiItem kind="constant" name="VALID" type="string" default="&quot;VALID&quot;">
</ApiItem>

## ADR\Pipeline

Final

Self-recursive middleware runner. It is itself a Handler: it carries an index
and hands a new Pipeline (advanced by one) forward as the `next` handler, so
`next` is always a real Handler - no anonymous classes or callables.

When the middleware is exhausted it invokes the terminal handler (the Action).

- **`Phalcon\ADR\Pipeline`** - implements [`Phalcon\Contracts\ADR\Handler`](/6.0/api/phalcon_contracts/#contractsadrhandler)

`Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrpipeline-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"middleware","default":null},{"type":"Handler","name":"terminal","default":null},{"type":"int","name":"index","default":"0"}]}>
</ApiItem>
<ApiItem href="#adrpipeline-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="index" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="middleware" type="array" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="terminal" type="Handler" default="">
</ApiItem>

### Methods

<h4 id="adrpipeline-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $middleware,
Handler $terminal,
int $index = 0
);
```

<h4 id="adrpipeline-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( AttributeRequest $request ): ResponseInterface;
```

## ADR\Responder\AbstractFormattedResponder

Abstract

Base for content-type responders: composes Status, Redirect and Format
responders into a chain. Subclasses bind the formatter(s).

- [`Phalcon\ADR\Responder\ChainResponder`](#adrresponderchainresponder)
- **`Phalcon\ADR\Responder\AbstractFormattedResponder`**
- [`Phalcon\ADR\Responder\JsonResponder`](#adrresponderjsonresponder)
- [`Phalcon\ADR\Responder\TextResponder`](#adrrespondertextresponder)

`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`

### Method Summary

<ApiItem href="#adrresponderabstractformattedresponder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"formatters","default":"[]"}]}>
</ApiItem>

### Methods

<h4 id="adrresponderabstractformattedresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $formatters = [] );
```

## ADR\Responder\ChainResponder

Class

Composes single-purpose responders. Each link receives the request, the
response threaded so far, and the payload, and returns the response.

- **`Phalcon\ADR\Responder\ChainResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/6.0/api/phalcon_contracts/#contractsadrresponderresponder)
- [`Phalcon\ADR\Responder\AbstractFormattedResponder`](#adrresponderabstractformattedresponder)

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrresponderchainresponder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"links","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrresponderchainresponder-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderchainresponder-with" visibility="public" name="with" returnType="ChainResponder" params={[{"type":"Responder","name":"link","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="links" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="adrresponderchainresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $links = [] );
```

<h4 id="adrresponderchainresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

<h4 id="adrresponderchainresponder-with"><code>with()</code></h4>

```php
public function with( Responder $link ): ChainResponder;
```

## ADR\Responder\FormatResponder

Class

Negotiates a formatter against the request `Accept` header and renders the
payload as the response body + content type.

If no formatter accepts the header it falls back to the first (default)
formatter, so the content type and body are never left unset.

- **`Phalcon\ADR\Responder\FormatResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/6.0/api/phalcon_contracts/#contractsadrresponderresponder)

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Formatter\Formatter` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrresponderformatresponder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"formatters","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrresponderformatresponder-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="formatters" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="adrresponderformatresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $formatters = [] );
```

<h4 id="adrresponderformatresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

## ADR\Responder\Formatter\JsonFormatter

Class

Renders a payload as JSON.

- **`Phalcon\ADR\Responder\Formatter\JsonFormatter`** - implements [`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`](/6.0/api/phalcon_contracts/#contractsadrresponderformatterformatter)

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Formatter\Formatter`

### Method Summary

<ApiItem href="#adrresponderformatterjsonformatter-accepts" visibility="public" name="accepts" returnType="bool" params={[{"type":"string","name":"acceptHeader","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderformatterjsonformatter-contenttype" visibility="public" name="contentType" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#adrresponderformatterjsonformatter-format" visibility="public" name="format" returnType="string" params={[{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrresponderformatterjsonformatter-accepts"><code>accepts()</code></h4>

```php
public function accepts( string $acceptHeader ): bool;
```

<h4 id="adrresponderformatterjsonformatter-contenttype"><code>contentType()</code></h4>

```php
public function contentType(): string;
```

<h4 id="adrresponderformatterjsonformatter-format"><code>format()</code></h4>

```php
public function format( Payload $payload ): string;
```

## ADR\Responder\Formatter\TextFormatter

Class

Renders a payload as plain text.

The payload is untyped, so anything that cannot be expressed as a string -
an object without `__toString()`, for instance - renders as an empty body.

- **`Phalcon\ADR\Responder\Formatter\TextFormatter`** - implements [`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`](/6.0/api/phalcon_contracts/#contractsadrresponderformatterformatter)

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Formatter\Formatter` · `Stringable`

### Method Summary

<ApiItem href="#adrresponderformattertextformatter-accepts" visibility="public" name="accepts" returnType="bool" params={[{"type":"string","name":"acceptHeader","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderformattertextformatter-contenttype" visibility="public" name="contentType" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#adrresponderformattertextformatter-format" visibility="public" name="format" returnType="string" params={[{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrresponderformattertextformatter-accepts"><code>accepts()</code></h4>

```php
public function accepts( string $acceptHeader ): bool;
```

<h4 id="adrresponderformattertextformatter-contenttype"><code>contentType()</code></h4>

```php
public function contentType(): string;
```

<h4 id="adrresponderformattertextformatter-format"><code>format()</code></h4>

```php
public function format( Payload $payload ): string;
```

## ADR\Responder\JsonResponder

Class

A formatted responder bound to the JSON formatter.

- [`Phalcon\ADR\Responder\ChainResponder`](#adrresponderchainresponder)
- [`Phalcon\ADR\Responder\AbstractFormattedResponder`](#adrresponderabstractformattedresponder)
- **`Phalcon\ADR\Responder\JsonResponder`**

`Phalcon\ADR\Responder\Formatter\JsonFormatter`

### Method Summary

<ApiItem href="#adrresponderjsonresponder-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrresponderjsonresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Responder\Redirect

Class

Value object describing a redirect. An Action sets it on the payload; the
RedirectResponder turns it into a `Location` header and status code.

- **`Phalcon\ADR\Responder\Redirect`**

### Method Summary

<ApiItem href="#adrresponderredirect-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"url","default":null},{"type":"int","name":"status","default":"302"},{"type":"bool","name":"external","default":"false"}]}>
</ApiItem>
<ApiItem href="#adrresponderredirect-external" visibility="public" name="external" returnType="bool" params={[]}>
Whether the target is an explicit external redirect. Internal (the
</ApiItem>
<ApiItem href="#adrresponderredirect-permanent" visibility="public" name="permanent" returnType="Redirect" params={[{"type":"string","name":"url","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderredirect-seeother" visibility="public" name="seeOther" returnType="Redirect" params={[{"type":"string","name":"url","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderredirect-status" visibility="public" name="status" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#adrresponderredirect-temporary" visibility="public" name="temporary" returnType="Redirect" params={[{"type":"string","name":"url","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderredirect-url" visibility="public" name="url" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="external" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="status" type="int" default="302">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="url" type="string" default="">
</ApiItem>

### Methods

<h4 id="adrresponderredirect-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $url,
int $status = 302,
bool $external = false
);
```

<h4 id="adrresponderredirect-external"><code>external()</code></h4>

```php
public function external(): bool;
```

Whether the target is an explicit external redirect. Internal (the
default) redirects refuse an absolute or protocol-relative target so a
request-derived value cannot become an open redirect (CWE-601).

<h4 id="adrresponderredirect-permanent"><code>permanent()</code></h4>

```php
public static function permanent( string $url ): Redirect;
```

<h4 id="adrresponderredirect-seeother"><code>seeOther()</code></h4>

```php
public static function seeOther( string $url ): Redirect;
```

<h4 id="adrresponderredirect-status"><code>status()</code></h4>

```php
public function status(): int;
```

<h4 id="adrresponderredirect-temporary"><code>temporary()</code></h4>

```php
public static function temporary( string $url ): Redirect;
```

<h4 id="adrresponderredirect-url"><code>url()</code></h4>

```php
public function url(): string;
```

## ADR\Responder\RedirectResponder

Class

Applies a `Redirect` value object carried on the payload result: sets the
status code and the `Location` header. A no-op when the result is not a
redirect.

- **`Phalcon\ADR\Responder\RedirectResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/6.0/api/phalcon_contracts/#contractsadrresponderresponder)

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrresponderredirectresponder-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrresponderredirectresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

## ADR\Responder\StatusMapper

Final

Maps a domain `Status` to an HTTP status code.

`Status` is the single source of truth: the default map covers every
`Status` constant. Any status that is not mapped resolves to 500, never a
silent 200. Every entry can be overridden through the constructor.

- **`Phalcon\ADR\Responder\StatusMapper`**

`Phalcon\ADR\Payload\Status` · `Phalcon\Contracts\ADR\ADRTypes`

### Method Summary

<ApiItem href="#adrresponderstatusmapper-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"overrides","default":"[]"}]}>
</ApiItem>
<ApiItem href="#adrresponderstatusmapper-tohttpcode" visibility="public" name="toHttpCode" returnType="int" params={[{"type":"string","name":"status","default":null}]}>
Returns the HTTP status code for the given domain status.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="map" type="array" default="">
</ApiItem>

### Methods

<h4 id="adrresponderstatusmapper-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $overrides = [] );
```

<h4 id="adrresponderstatusmapper-tohttpcode"><code>toHttpCode()</code></h4>

```php
public function toHttpCode( string $status ): int;
```

Returns the HTTP status code for the given domain status.

An unmapped status resolves to 500 (server error), never a silent 200.

## ADR\Responder\StatusResponder

Class

Sets the response HTTP status code from the payload status, via StatusMapper.

The payload status is untyped, so anything that cannot be expressed as a
string - an array, an object - leaves the response status code untouched.

- **`Phalcon\ADR\Responder\StatusResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/6.0/api/phalcon_contracts/#contractsadrresponderresponder)

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrresponderstatusresponder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"StatusMapper|null","name":"mapper","default":"null"}]}>
</ApiItem>
<ApiItem href="#adrresponderstatusresponder-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="mapper" type="StatusMapper" default="">
</ApiItem>

### Methods

<h4 id="adrresponderstatusresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct( StatusMapper|null $mapper = null );
```

<h4 id="adrresponderstatusresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

## ADR\Responder\TextResponder

Class

A formatted responder bound to the text formatter.

- [`Phalcon\ADR\Responder\ChainResponder`](#adrresponderchainresponder)
- [`Phalcon\ADR\Responder\AbstractFormattedResponder`](#adrresponderabstractformattedresponder)
- **`Phalcon\ADR\Responder\TextResponder`**

`Phalcon\ADR\Responder\Formatter\TextFormatter`

### Method Summary

<ApiItem href="#adrrespondertextresponder-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="adrrespondertextresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Responder\ViewResponder

Final

Renders a template from the payload and returns it as an HTML response.

The HTML sibling of `JsonResponder`: serialization is swapped for rendering,
the status mapping and the `Responder` contract stay the same. It depends on
the neutral `Renderer` contract only, so the ADR component never imports the
MVC view.

- **`Phalcon\ADR\Responder\ViewResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/6.0/api/phalcon_contracts/#contractsadrresponderresponder)

`Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Contracts\View\Renderer` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#adrresponderviewresponder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"Renderer","name":"renderer","default":null},{"type":"StatusMapper","name":"statusMapper","default":null},{"type":"string","name":"template","default":"\"\""}]}>
</ApiItem>
<ApiItem href="#adrresponderviewresponder-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>
<ApiItem href="#adrresponderviewresponder-withtemplate" visibility="public" name="withTemplate" returnType="static" params={[{"type":"string","name":"template","default":null}]}>
Returns a copy of the responder bound to the given template. The action
</ApiItem>
<ApiItem href="#adrresponderviewresponder-viewdata" visibility="protected" name="viewData" returnType="array" params={[{"type":"Payload","name":"payload","default":null}]}>
Flattens the payload into the variables handed to the template. The
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="renderer" type="Renderer" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="statusMapper" type="StatusMapper" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="template" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="adrresponderviewresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Renderer $renderer,
StatusMapper $statusMapper,
string $template = ""
);
```

<h4 id="adrresponderviewresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

<h4 id="adrresponderviewresponder-withtemplate"><code>withTemplate()</code></h4>

```php
public function withTemplate( string $template ): static;
```

Returns a copy of the responder bound to the given template. The action
names the view; the payload stays free of presentation concerns.

<h4 id="adrresponderviewresponder-viewdata"><code>viewData()</code></h4>

```php
protected function viewData( Payload $payload ): array;
```

Flattens the payload into the variables handed to the template. The
extras travel as they are, so an action can hand the view whatever the
result should not carry.

## ADR\Router\AttributeFilter

Final

Reads an Action's optional static `params()` declaration and transforms the
router's positional tail segments: regex match (miss => RouteNotFound), cast
to a scalar type, then an optional converter closure. Declaration order names
the attributes; a declared parameter with no segment is skipped; surplus
segments pass through under their positional keys. An Action without
`params()` is returned unchanged.

- **`Phalcon\ADR\Router\AttributeFilter`** - implements [`Phalcon\Contracts\ADR\Router\AttributeFilter`](/6.0/api/phalcon_contracts/#contractsadrrouterattributefilter)

`Phalcon\ADR\Exceptions\RouteNotFound` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Router\AttributeFilter`

### Method Summary

<ApiItem href="#adrrouterattributefilter-filter" visibility="public" name="filter" returnType="array" params={[{"type":"string","name":"actionClass","default":null},{"type":"array","name":"attributes","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterattributefilter-cast" visibility="protected" name="cast" returnType="float|int|string" params={[{"type":"string","name":"value","default":null},{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="adrrouterattributefilter-filter"><code>filter()</code></h4>

```php
public function filter(
string $actionClass,
array $attributes
): array;
```

<h4 id="adrrouterattributefilter-cast"><code>cast()</code></h4>

```php
protected function cast(
string $value,
string $type
): float|int|string;
```

## ADR\Router\Router

Final

Convention router. `method + static path -> Action class`; the path tail
becomes positional request attributes. Middleware is resolved from a
namespace-prefix map (group semantics); global middleware stays on the
pipeline. No route table.

## The convention

Every static path segment is a namespace segment, and the class name is the
verb followed by all of those segments concatenated:

    GET  /                      -> Get
    GET  /profiles              -> Profiles\GetProfiles
    GET  /company/all           -> Company\All\GetCompanyAll
    GET  /company/all/7         -> Company\All\GetCompanyAll  with ["7"]
    POST /session/forgot-password -> Session\ForgotPassword\PostSessionForgotPassword

## Guarantees

- One path names exactly one class; that class names exactly one path.
- The derived name must equal the declared class name byte for byte. A
  class that only resolves case-insensitively is not a match.
- `classFor()` and `pathFor()` are pure functions of their input. Neither
  touches the filesystem, and neither consults any Action but the one it was
  given, so adding or deleting an Action can never move another one's URL.
- There is no candidate list and no first-that-exists. Nothing can be
  shadowed.

## Constraints - these are load-bearing, not style

- **Arguments always trail the static path.** `/album/edit/1`, never
  `/album/1/edit`. A class name encodes which segments exist, not where a
  value sits among them; putting an argument in the middle would require
  consulting some other Action to find the boundary, and that is exactly the
  coupling this convention exists to avoid.
- **`params()` never affects routing.** It constrains, casts and converts
  attributes after a match. A wrong declaration is a validation bug, never a
  404.
- **No route table, no compile step, no cache.** Resolution is a string
  derivation plus one `class_exists`. In PHP's shared-nothing model a table
  must be rebuilt or reloaded on every request, and that cost dominates
  matching - which is why this router is faster in practice than a cached
  table-driven one.
- **Nothing may be layered onto the naming convention** to express argument
  position, arity or ordering. Any such declaration is a path template in
  disguise, and a path template belongs in a declared-route router, not here.

The cost of all of this is `/album/edit/1` rather than `/album/1/edit`. That
is a spelling difference, not a capability one - and it is not a deviation
from any standard. REST is Fielding's dissertation, not an RFC; RFC 3986 and
RFC 9110 both leave path structure entirely to the origin server.

- **`Phalcon\ADR\Router\Router`** - implements [`Phalcon\Contracts\ADR\Router\Router`](/6.0/api/phalcon_contracts/#contractsadrrouterrouter)

`Phalcon\ADR\Exceptions\ActionDirectoryNotSet` · `Phalcon\ADR\Exceptions\MethodNotAllowed` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Router\Router` · `Phalcon\Contracts\ADR\Router\RouterMatch` · `Phalcon\Http\RequestInterface` · `ReflectionClass`

### Method Summary

<ApiItem href="#adrrouterrouter-candidatesfor" visibility="public" name="candidatesFor" returnType="array" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"path","default":null}]}>
Every Action class this router would try for the given method and path,
</ApiItem>
<ApiItem href="#adrrouterrouter-classfor" visibility="public" name="classFor" returnType="string" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"path","default":null}]}>
The class this convention names for a fully static path, derived without
</ApiItem>
<ApiItem href="#adrrouterrouter-match" visibility="public" name="match" returnType="RouterMatchInterface|null" params={[{"type":"RequestInterface","name":"request","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-methodfor" visibility="public" name="methodFor" returnType="string|null" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-pathfor" visibility="public" name="pathFor" returnType="string|null" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-setactiondirectory" visibility="public" name="setActionDirectory" returnType="RouterInterface" params={[{"type":"string","name":"actionDirectory","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-setbasenamespace" visibility="public" name="setBaseNamespace" returnType="RouterInterface" params={[{"type":"string","name":"baseNamespace","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-setmiddlewaremap" visibility="public" name="setMiddlewareMap" returnType="RouterInterface" params={[{"type":"array","name":"middlewareMap","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-setwordseparator" visibility="public" name="setWordSeparator" returnType="RouterInterface" params={[{"type":"string","name":"wordSeparator","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-actionparams" visibility="protected" name="actionParams" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
An Action's declared positional parameters, or an empty array when it
</ApiItem>
<ApiItem href="#adrrouterrouter-camelize" visibility="protected" name="camelize" returnType="string" params={[{"type":"string","name":"segment","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-decamelize" visibility="protected" name="decamelize" returnType="string" params={[{"type":"string","name":"part","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-derivecandidates" visibility="protected" name="deriveCandidates" returnType="array" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"path","default":null}]}>
The single derivation of the routing convention.
</ApiItem>
<ApiItem href="#adrrouterrouter-hassubnamespace" visibility="protected" name="hasSubNamespace" returnType="bool" params={[{"type":"string","name":"subNamespace","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-locate" visibility="protected" name="locate" returnType="array|null" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"path","default":null}]}>
The first derived candidate whose class actually exists, together with
</ApiItem>
<ApiItem href="#adrrouterrouter-middlewarefor" visibility="protected" name="middlewareFor" returnType="array" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>
<ApiItem href="#adrrouterrouter-verbof" visibility="protected" name="verbOf" returnType="string|null" params={[{"type":"string","name":"className","default":null}]}>
The class-name-form verb the given Action class carries, or null when the
</ApiItem>
<ApiItem href="#adrrouterrouter-verbs" visibility="protected" name="verbs" returnType="array" params={[]}>
The HTTP verbs the convention recognizes, in class-name form.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="actionDirectory" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="baseNamespace" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="middlewareMap" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="wordSeparator" type="string" default="&quot;-&quot;">
</ApiItem>

### Methods

<h4 id="adrrouterrouter-candidatesfor"><code>candidatesFor()</code></h4>

```php
public function candidatesFor(
string $method,
string $path
): array;
```

Every Action class this router would try for the given method and path,
in the order it tries them. The first that exists wins at match time.
Namespace descent consults the filesystem, so the list depends on the
action directory.

The names are derived, not resolved: a candidate is what the convention
would call the class, whether or not that class exists.

<h4 id="adrrouterrouter-classfor"><code>classFor()</code></h4>

```php
public function classFor(
string $method,
string $path
): string;
```

The class this convention names for a fully static path, derived without
consulting the filesystem.

candidatesFor() cannot answer this. It walks the action directory to find
where static segments end, so a path whose directories do not exist yet
yields nothing - and a generator needs the name precisely in order to
create them. Every static segment is a namespace segment, so the answer
is unambiguous and pathFor() inverts it exactly.

Placeholders are the caller's concern: pass the static prefix only.

<h4 id="adrrouterrouter-match"><code>match()</code></h4>

```php
public function match( RequestInterface $request ): RouterMatchInterface|null;
```

<h4 id="adrrouterrouter-methodfor"><code>methodFor()</code></h4>

```php
public function methodFor( string $className ): string|null;
```

<h4 id="adrrouterrouter-pathfor"><code>pathFor()</code></h4>

```php
public function pathFor( string $className ): string|null;
```

<h4 id="adrrouterrouter-setactiondirectory"><code>setActionDirectory()</code></h4>

```php
public function setActionDirectory( string $actionDirectory ): RouterInterface;
```

<h4 id="adrrouterrouter-setbasenamespace"><code>setBaseNamespace()</code></h4>

```php
public function setBaseNamespace( string $baseNamespace ): RouterInterface;
```

<h4 id="adrrouterrouter-setmiddlewaremap"><code>setMiddlewareMap()</code></h4>

```php
public function setMiddlewareMap( array $middlewareMap ): RouterInterface;
```

<h4 id="adrrouterrouter-setwordseparator"><code>setWordSeparator()</code></h4>

```php
public function setWordSeparator( string $wordSeparator ): RouterInterface;
```

<h4 id="adrrouterrouter-actionparams"><code>actionParams()</code></h4>

```php
protected function actionParams( string $className ): array;
```

An Action's declared positional parameters, or an empty array when it
declares none.

This is what lets an argument sit *between* two static segments: the
walk needs to know how many segments a level consumes before it can
carry on matching. `params()` is static and already exists for filtering
and casting, so nothing new is asked of an Action - but declaring it now
decides routing, not just validation.

<h4 id="adrrouterrouter-camelize"><code>camelize()</code></h4>

```php
protected function camelize( string $segment ): string;
```

<h4 id="adrrouterrouter-decamelize"><code>decamelize()</code></h4>

```php
protected function decamelize( string $part ): string;
```

<h4 id="adrrouterrouter-derivecandidates"><code>deriveCandidates()</code></h4>

```php
protected function deriveCandidates(
string $method,
string $path
): array;
```

The single derivation of the routing convention.

Every static path segment becomes a namespace segment, and the class name
is the verb followed by all of those segments concatenated - so
`/company/all` is `Company\All\GetCompanyAll` and nothing else. One path
yields exactly one class, and pathFor() inverts it exactly.

Segments are consumed while the matching directory exists; whatever
remains is a dynamic argument. That walk decides where static ends and
dynamic begins - it no longer chooses between competing class shapes,
because there is only one.

<h4 id="adrrouterrouter-hassubnamespace"><code>hasSubNamespace()</code></h4>

```php
protected function hasSubNamespace( string $subNamespace ): bool;
```

<h4 id="adrrouterrouter-locate"><code>locate()</code></h4>

```php
protected function locate(
string $method,
string $path
): array|null;
```

The first derived candidate whose class actually exists, together with
the segments the walk did not consume.

<h4 id="adrrouterrouter-middlewarefor"><code>middlewareFor()</code></h4>

```php
protected function middlewareFor( string $className ): array;
```

<h4 id="adrrouterrouter-verbof"><code>verbOf()</code></h4>

```php
protected function verbOf( string $className ): string|null;
```

The class-name-form verb the given Action class carries, or null when the
class is not one this convention would have produced.

The class name is the verb followed by every namespace segment, so the
namespace alone reconstructs the static path and the class name only has
to agree with it. Anything that does not agree is not a class this
convention would ever have produced.

Shared by pathFor() and methodFor() so that rule is stated once.

<h4 id="adrrouterrouter-verbs"><code>verbs()</code></h4>

```php
protected function verbs(): array;
```

The HTTP verbs the convention recognizes, in class-name form.

## ADR\Router\RouterMatch

Final

Immutable result of a successful route match.

- **`Phalcon\ADR\Router\RouterMatch`** - implements [`Phalcon\Contracts\ADR\Router\RouterMatch`](/6.0/api/phalcon_contracts/#contractsadrrouterroutermatch)

`Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Router\RouterMatch`

### Method Summary

<ApiItem href="#adrrouterroutermatch-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"action","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"array","name":"middleware","default":"[]"},{"type":"string|null","name":"name","default":"null"}]}>
</ApiItem>
<ApiItem href="#adrrouterroutermatch-getaction" visibility="public" name="getAction" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#adrrouterroutermatch-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#adrrouterroutermatch-getmiddleware" visibility="public" name="getMiddleware" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#adrrouterroutermatch-getname" visibility="public" name="getName" returnType="string|null" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="action" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="middleware" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string|null" default="null">
</ApiItem>

### Methods

<h4 id="adrrouterroutermatch-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $action,
array $attributes = [],
array $middleware = [],
string|null $name = null
);
```

<h4 id="adrrouterroutermatch-getaction"><code>getAction()</code></h4>

```php
public function getAction(): string;
```

<h4 id="adrrouterroutermatch-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

<h4 id="adrrouterroutermatch-getmiddleware"><code>getMiddleware()</code></h4>

```php
public function getMiddleware(): array;
```

<h4 id="adrrouterroutermatch-getname"><code>getName()</code></h4>

```php
public function getName(): string|null;
```

Source: https://docs.phalcon.io/6.0/api/phalcon_adr/index.mdx
