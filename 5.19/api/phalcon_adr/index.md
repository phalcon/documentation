---
title: "Phalcon Adr"
version: "5.19"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Adr

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## ADR\Application

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Application.zep">Source on GitHub</a>

ADR composition root. Owns (or accepts) a container, exposes a small
registration surface that hides the container's definition API, configures
the convention router, and handles the request through the ADR flow.

When no container is supplied one is created with the ADR defaults
(`AdrProvider`) registered. Type-hinted dependencies autowire; only scalar
parameters need to be declared via `define()`.

<div class="api-tree">

- **`Phalcon\ADR\Application`** - implements [`Phalcon\Contracts\ADR\Application`](/5.19/api/phalcon_contracts/#contractsadrapplication)

</div>

__Uses__ `Closure` · `Phalcon\ADR\Container\AdrProvider` · `Phalcon\ADR\Events\Event` · `Phalcon\ADR\Exceptions\RouteNotFound` · `Phalcon\Container\Container` · `Phalcon\Container\ContainerFactory` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Application` · `Phalcon\Contracts\ADR\Dispatcher` · `Phalcon\Contracts\ADR\Router\AttributeFilter` · `Phalcon\Contracts\ADR\Router\Router` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\Request\Bag\AttributeBag` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrapplication-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">Container|null</span> <span class="sv">$container</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#adrapplication-bind">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">string</span> <span class="sv">$interfaceName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$concrete</span></span>)</code>
<span class="desc">Bind an interface to a concrete class.</span>
</a>
<a class="api-item" href="#adrapplication-define">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">define</span>(<span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameters</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Register a class together with explicit values for its constructor</span>
</a>
<a class="api-item" href="#adrapplication-extend">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">extend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">Closure</span> <span class="sv">$extender</span></span>)</code>
<span class="desc">Register a post-build extender (decorator) for a service.</span>
</a>
<a class="api-item" href="#adrapplication-factory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">factory</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">Closure</span> <span class="sv">$factory</span></span>)</code>
<span class="desc">Register a factory closure for a service.</span>
</a>
<a class="api-item" href="#adrapplication-getcontainer">
<code class="vis vis-public">public</code>
<code class="ret">Container</code>
<code class="sig"><span class="sf">getContainer</span>()</code>
<span class="desc">Returns the underlying container for definition-level access.</span>
</a>
<a class="api-item" href="#adrapplication-handle">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">handle</span>( <span class="st">AttributeRequest</span> <span class="sv">$request</span> )</code>
<span class="desc">Routes the request, writes the matched attributes onto it, dispatches</span>
</a>
<a class="api-item" href="#adrapplication-securewith">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">secureWith</span>(<span class="prm"><span class="st">string</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$prefix</span></span>)</code>
<span class="desc">Attach a guard (middleware) to every Action under a namespace prefix.</span>
</a>
<a class="api-item" href="#adrapplication-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Register a service with a raw definition (class-string, closure or value).</span>
</a>
<a class="api-item" href="#adrapplication-setactiondirectory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setActionDirectory</span>( <span class="st">string</span> <span class="sv">$actionDirectory</span> )</code>
<span class="desc">Set the filesystem root that backs the base namespace.</span>
</a>
<a class="api-item" href="#adrapplication-setbasenamespace">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setBaseNamespace</span>( <span class="st">string</span> <span class="sv">$baseNamespace</span> )</code>
<span class="desc">Set the base namespace the convention router derives Actions from.</span>
</a>
<a class="api-item" href="#adrapplication-setwordseparator">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setWordSeparator</span>( <span class="st">string</span> <span class="sv">$wordSeparator</span> )</code>
<span class="desc">Set the single delimiter between words in a path segment.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$actionDirectory</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$baseNamespace</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Container</code>
<code class="sig"><span class="sv">$container</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$middlewareMap</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$wordSeparator</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 12</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Container/AdrProvider.zep">Source on GitHub</a>

Registers the ADR seams in the container; concretes autowire.

Used instead of `Phalcon\Container\Provider\Web` for ADR applications. It
shares the short aliases (`request`/`response`/`router`/`eventsManager`) but
binds the ADR contracts behind them.

<div class="api-tree">

- **`Phalcon\ADR\Container\AdrProvider`** - implements [`Phalcon\Contracts\Container\Service\Provider`](/5.19/api/phalcon_contracts/#contractscontainerserviceprovider)

</div>

__Uses__ `Phalcon\ADR\Dispatcher` · `Phalcon\ADR\Emitter\SapiEmitter` · `Phalcon\ADR\Responder\JsonResponder` · `Phalcon\ADR\Router\AttributeFilter` · `Phalcon\ADR\Router\Router` · `Phalcon\Contracts\ADR\Dispatcher` · `Phalcon\Contracts\ADR\Emitter\Emitter` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Contracts\ADR\Router\AttributeFilter` · `Phalcon\Contracts\ADR\Router\Router` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Contracts\Container\Service\Provider` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Contracts\Logger\Logger` · `Phalcon\Events\Manager` · `Phalcon\Html\Escaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Http\Request` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Logger`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrcontaineradrprovider-provide">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">provide</span>( <span class="st">Collection</span> <span class="sv">$services</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrcontaineradrprovider-provide"><code>provide()</code></h4>

```php
public function provide( Collection $services ): void;
```

## ADR\Dispatcher

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Dispatcher.zep">Source on GitHub</a>

Resolves the Action (and middleware) through the container, wraps it in the
pipeline and runs it, firing the `pipeline:*` events. Global middleware is
resolved once and cached; only route middleware resolves per request.

The container resolution is the one deliberate Service Locator: it uses the
resolve-only `IocContainer` contract, so a container swap is a two-method
adapter. Everything else is constructor-injected.

<div class="api-tree">

- **`Phalcon\ADR\Dispatcher`** - implements [`Phalcon\Contracts\ADR\Dispatcher`](/5.19/api/phalcon_contracts/#contractsadrdispatcher)

</div>

__Uses__ `Phalcon\ADR\Events\Event` · `Phalcon\ADR\Exceptions\NotAnAction` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Action` · `Phalcon\Contracts\ADR\Dispatcher` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Container\Ioc\IocContainer` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrdispatcher-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">Manager</span> <span class="sv">$events</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$globalMiddleware</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#adrdispatcher-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">dispatch</span>(<span class="prm"><span class="st">string</span> <span class="sv">$actionClass</span>,</span><span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$routeMiddleware</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#adrdispatcher-resolveall">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveAll</span>( <span class="st">array</span> <span class="sv">$classes</span> )</code>
</a>
<a class="api-item" href="#adrdispatcher-resolveglobal">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveGlobal</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">IocContainer</code>
<code class="sig"><span class="sv">$container</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Manager</code>
<code class="sig"><span class="sv">$events</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$globalMiddleware</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">list&lt;Middleware&gt;|null</code>
<code class="sig"><span class="sv">$resolvedGlobal</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<div class="api-group">Protected · 2</div>

<h4 id="adrdispatcher-resolveall"><code>resolveAll()</code></h4>

```php
protected function resolveAll( array $classes ): array;
```

<h4 id="adrdispatcher-resolveglobal"><code>resolveGlobal()</code></h4>

```php
protected function resolveGlobal(): array;
```

## ADR\Emitter\SapiEmitter

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Emitter/SapiEmitter.zep">Source on GitHub</a>

Emits a response through the SAPI (headers + body via `Response::send()`).
Refuses to emit once headers have already been sent.

<div class="api-tree">

- **`Phalcon\ADR\Emitter\SapiEmitter`** - implements [`Phalcon\Contracts\ADR\Emitter\Emitter`](/5.19/api/phalcon_contracts/#contractsadremitteremitter)

</div>

__Uses__ `Phalcon\ADR\Exceptions\HeadersAlreadySent` · `Phalcon\Contracts\ADR\Emitter\Emitter` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adremittersapiemitter-emit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">emit</span>( <span class="st">ResponseInterface</span> <span class="sv">$response</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adremittersapiemitter-emit"><code>emit()</code></h4>

```php
public function emit( ResponseInterface $response ): void;
```

## ADR\ErrorResponder

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/ErrorResponder.zep">Source on GitHub</a>

Turns a thrown exception into a response through the responder chain.

The full diagnostic (class, message, file:line and the exception itself) goes
to the log with a correlation reference; the client receives only a generic
message plus that same reference, unless debug mode is on. Exceptions are
mapped to statuses deterministically: an exact class match first, then the
ancestor chain, so map ordering never matters.

<div class="api-tree">

- **`Phalcon\ADR\ErrorResponder`**

</div>

__Uses__ `Phalcon\ADR\Exceptions\MethodNotAllowed` · `Phalcon\ADR\Exceptions\RouteNotFound` · `Phalcon\ADR\Payload\Payload` · `Phalcon\ADR\Payload\Status` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Contracts\Logger\Logger` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrerrorresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Responder</span> <span class="sv">$chain</span>,</span><span class="prm"><span class="st">Logger</span> <span class="sv">$logger</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$debug</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$exceptionMap</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#adrerrorresponder-handle">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">handle</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Throwable</span> <span class="sv">$exception</span></span>)</code>
</a>
<a class="api-item" href="#adrerrorresponder-correlationid">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">correlationId</span>( <span class="st">RequestInterface</span> <span class="sv">$request</span> )</code>
</a>
<a class="api-item" href="#adrerrorresponder-defaultmap">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">defaultMap</span>()</code>
</a>
<a class="api-item" href="#adrerrorresponder-details">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">details</span>(<span class="prm"><span class="st">Throwable</span> <span class="sv">$exception</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$ref</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$status</span><span class="sm"> = Status::ERROR</span></span>)</code>
</a>
<a class="api-item" href="#adrerrorresponder-reason">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">reason</span>( <span class="st">string</span> <span class="sv">$status</span> )</code>
<span class="desc">The message that goes with the status. Reporting <code>Internal Server Error</code></span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Responder</code>
<code class="sig"><span class="sv">$chain</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$debug</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$exceptionMap</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Logger</code>
<code class="sig"><span class="sv">$logger</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<div class="api-group">Protected · 4</div>

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

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/EventfulHandler.zep">Source on GitHub</a>

The terminal handler of the pipeline: fires the `adr:*` events around the
Action's execution.

<div class="api-tree">

- **`Phalcon\ADR\EventfulHandler`** - implements [`Phalcon\Contracts\ADR\Handler`](/5.19/api/phalcon_contracts/#contractsadrhandler)

</div>

__Uses__ `Phalcon\ADR\Events\Event` · `Phalcon\Contracts\ADR\Action` · `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\Events\Manager` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adreventfulhandler-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Action</span> <span class="sv">$action</span>,</span><span class="prm"><span class="st">Manager</span> <span class="sv">$events</span></span>)</code>
</a>
<a class="api-item" href="#adreventfulhandler-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">AttributeRequest</span> <span class="sv">$request</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Action</code>
<code class="sig"><span class="sv">$action</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Manager</code>
<code class="sig"><span class="sv">$events</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Events/Event.zep">Source on GitHub</a>

The ADR event vocabulary, fired through the native events manager.

<div class="api-tree">

- **`Phalcon\ADR\Events\Event`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ADR_AFTER_EXECUTE_ACTION</span><span class="sm"> = &quot;adr:afterExecuteAction&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ADR_BEFORE_EXECUTE_ACTION</span><span class="sm"> = &quot;adr:beforeExecuteAction&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">APPLICATION_AFTER_HANDLE</span><span class="sm"> = &quot;application:afterHandle&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">APPLICATION_BEFORE_HANDLE</span><span class="sm"> = &quot;application:beforeHandle&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PIPELINE_AFTER_DISPATCH</span><span class="sm"> = &quot;pipeline:afterDispatch&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PIPELINE_BEFORE_DISPATCH</span><span class="sm"> = &quot;pipeline:beforeDispatch&quot;</span></code>
</div>
</div>

## ADR\Exceptions\ActionDirectoryNotSet

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/ActionDirectoryNotSet.zep">Source on GitHub</a>

Thrown when the router is asked to match without an action directory; the
convention cannot resolve sub-namespaces without one.

<div class="api-tree">

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\ActionDirectoryNotSet`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrexceptionsactiondirectorynotset-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrexceptionsactiondirectorynotset-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/Exception.zep">Source on GitHub</a>

Generic exception for the ADR component, and the base for every typed ADR
exception.

<div class="api-tree">

- `\Exception`
- **`Phalcon\ADR\Exceptions\Exception`** - implements [`Phalcon\Contracts\ADR\Exceptions\ADRThrowable`](/5.19/api/phalcon_contracts/#contractsadrexceptionsadrthrowable)
- [`Phalcon\ADR\Exceptions\ActionDirectoryNotSet`](#adrexceptionsactiondirectorynotset)
- [`Phalcon\ADR\Exceptions\HeadersAlreadySent`](#adrexceptionsheadersalreadysent)
- [`Phalcon\ADR\Exceptions\MethodNotAllowed`](#adrexceptionsmethodnotallowed)
- [`Phalcon\ADR\Exceptions\NotAnAction`](#adrexceptionsnotanaction)
- [`Phalcon\ADR\Exceptions\OutputAlreadySent`](#adrexceptionsoutputalreadysent)
- [`Phalcon\ADR\Exceptions\RouteNotFound`](#adrexceptionsroutenotfound)

</div>

__Uses__ `Exception` · `Phalcon\Contracts\ADR\Exceptions\ADRThrowable`

## ADR\Exceptions\HeadersAlreadySent

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/HeadersAlreadySent.zep">Source on GitHub</a>

Thrown when the emitter is asked to send a response after headers have
already been sent.

<div class="api-tree">

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\HeadersAlreadySent`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrexceptionsheadersalreadysent-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrexceptionsheadersalreadysent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\MethodNotAllowed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/MethodNotAllowed.zep">Source on GitHub</a>

Thrown when a route matches the path but not the request method.

<div class="api-tree">

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\MethodNotAllowed`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrexceptionsmethodnotallowed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrexceptionsmethodnotallowed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\NotAnAction

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/NotAnAction.zep">Source on GitHub</a>

Thrown when the dispatcher resolves a class that is not an ADR Action.

<div class="api-tree">

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\NotAnAction`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrexceptionsnotanaction-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$className</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrexceptionsnotanaction-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className = "" );
```

## ADR\Exceptions\OutputAlreadySent

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/OutputAlreadySent.zep">Source on GitHub</a>

Thrown when the emitter is asked to send a response after output has already
been sent.

<div class="api-tree">

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\OutputAlreadySent`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrexceptionsoutputalreadysent-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrexceptionsoutputalreadysent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Exceptions\RouteNotFound

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Exceptions/RouteNotFound.zep">Source on GitHub</a>

Thrown when no route matches the request.

<div class="api-tree">

- `\Exception`
- [`Phalcon\ADR\Exceptions\Exception`](#adrexceptionsexception)
- **`Phalcon\ADR\Exceptions\RouteNotFound`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrexceptionsroutenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrexceptionsroutenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Front\AbstractHttpFront

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Front/AbstractHttpFront.zep">Source on GitHub</a>

Boots a container, builds the Application, handles the request and emits the
response. Userland front controllers override `loadEnvironment()`,
`registerProviders()` and optionally `getApplication()`; bootstrap is
`exit((new AppFront(dirname(__DIR__)))->run());`.

<div class="api-tree">

- **`Phalcon\ADR\Front\AbstractHttpFront`** - implements [`Phalcon\Contracts\Front\FrontController`](/5.19/api/phalcon_contracts/#contractsfrontfrontcontroller)
- [`Phalcon\ADR\Front\HttpFront`](#adrfronthttpfront)

</div>

__Uses__ `Phalcon\ADR\Application` · `Phalcon\ADR\Container\AdrProvider` · `Phalcon\Container\Container` · `Phalcon\Contracts\ADR\Application` · `Phalcon\Contracts\ADR\Emitter\Emitter` · `Phalcon\Contracts\Front\FrontController` · `Phalcon\Contracts\Http\AttributeRequest` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrfrontabstracthttpfront-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$projectRoot</span> )</code>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-boot">
<code class="vis vis-public">public</code>
<code class="ret">Container</code>
<code class="sig"><span class="sf">boot</span>()</code>
<span class="desc">Builds the container, loads the environment and registers the providers,</span>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-run">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">run</span>()</code>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-buildcontainer">
<code class="vis vis-protected">protected</code>
<code class="ret">Container</code>
<code class="sig"><span class="sf">buildContainer</span>()</code>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-getapplication">
<code class="vis vis-protected">protected</code>
<code class="ret">ApplicationInterface</code>
<code class="sig"><span class="sf">getApplication</span>( <span class="st">Container</span> <span class="sv">$container</span> )</code>
<span class="desc">Builds the Application the front will hand the request to. Override to</span>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-handlebooterror">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">handleBootError</span>( <span class="st">\Throwable</span> <span class="sv">$exception</span> )</code>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-loadenvironment">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">loadEnvironment</span>( <span class="st">Container</span> <span class="sv">$container</span> )</code>
</a>
<a class="api-item" href="#adrfrontabstracthttpfront-registerproviders">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">registerProviders</span>( <span class="st">Container</span> <span class="sv">$container</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Container|null</code>
<code class="sig"><span class="sv">$container</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$projectRoot</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<div class="api-group">Protected · 5</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Front/HttpFront.zep">Source on GitHub</a>

Concrete default HTTP front controller. Boots the ADR provider and runs the
application with the framework defaults; subclass to override
`loadEnvironment()` or `registerProviders()`.

<div class="api-tree">

- [`Phalcon\ADR\Front\AbstractHttpFront`](#adrfrontabstracthttpfront)
- **`Phalcon\ADR\Front\HttpFront`**

</div>

## ADR\Input\Input

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Input/Input.zep">Source on GitHub</a>

Generic, string-keyed input bag for an Action.

`fromRequest()` merges the request query, parsed body and route attributes
into a single bag (later sources win). Extend it to build a typed, per-domain
input value object: the factories use late static binding, so a subclass's
`fromRequest()` / `fromArray()` return that subclass.

<div class="api-tree">

- **`Phalcon\ADR\Input\Input`**

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\Request\Bag\AttributeBag`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrinputinput-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#adrinputinput-fromarray">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromArray</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
</a>
<a class="api-item" href="#adrinputinput-fromrequest">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromRequest</span>( <span class="st">AttributeRequest</span> <span class="sv">$request</span> )</code>
</a>
<a class="api-item" href="#adrinputinput-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#adrinputinput-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#adrinputinput-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Middleware/CorsMiddleware.zep">Source on GitHub</a>

CORS middleware. Inert by default: it emits nothing until an origin allowlist
is configured, and only for requests whose `Origin` is on it. The allowed
origin is always echoed back explicitly, so credentials are never paired with
a wildcard origin. Preflight `OPTIONS` requests are answered directly.

<div class="api-tree">

- **`Phalcon\ADR\Middleware\CorsMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/5.19/api/phalcon_contracts/#contractsadrmiddleware)

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\Response` · `Phalcon\Http\ResponseInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrmiddlewarecorsmiddleware-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$config</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#adrmiddlewarecorsmiddleware-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">Handler</span> <span class="sv">$next</span></span>)</code>
</a>
<a class="api-item" href="#adrmiddlewarecorsmiddleware-applyheaders">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">applyHeaders</span>(<span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$origin</span></span>)</code>
</a>
<a class="api-item" href="#adrmiddlewarecorsmiddleware-isallowed">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowed</span>( <span class="st">string</span> <span class="sv">$origin</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$allowCredentials</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">list&lt;string&gt;</code>
<code class="sig"><span class="sv">$allowedHeaders</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">list&lt;string&gt;</code>
<code class="sig"><span class="sv">$allowedMethods</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">list&lt;string&gt;</code>
<code class="sig"><span class="sv">$allowedOrigins</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$maxAge</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Middleware/MethodOverrideMiddleware.zep">Source on GitHub</a>

Thin enabler for the native `_method` override.

`Request::getMethod()` already honors `X-HTTP-Method-Override` and, when the
parameter-override flag is on, the `_method` field. This middleware only
turns that flag on, and only for a `POST` request whose `_method` names a
safe verb (`PUT`/`PATCH`/`DELETE`), so `_method` cannot spoof an arbitrary
method.

<div class="api-tree">

- **`Phalcon\ADR\Middleware\MethodOverrideMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/5.19/api/phalcon_contracts/#contractsadrmiddleware)

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrmiddlewaremethodoverridemiddleware-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">Handler</span> <span class="sv">$next</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$allowed</span><span class="sm"> = [...]</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrmiddlewaremethodoverridemiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## ADR\Middleware\RequestIdMiddleware

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Middleware/RequestIdMiddleware.zep">Source on GitHub</a>

Ensures every request carries an `X-Request-Id`, reusing an incoming one or
generating it, exposing it on the request attributes and the response.

<div class="api-tree">

- **`Phalcon\ADR\Middleware\RequestIdMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/5.19/api/phalcon_contracts/#contractsadrmiddleware)

</div>

__Uses__ `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\Request\Bag\AttributeBag` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrmiddlewarerequestidmiddleware-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">Handler</span> <span class="sv">$next</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrmiddlewarerequestidmiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## ADR\Middleware\TimingMiddleware

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Middleware/TimingMiddleware.zep">Source on GitHub</a>

Adds an `X-Response-Time` header measuring how long the rest of the pipeline
took to produce the response.

<div class="api-tree">

- **`Phalcon\ADR\Middleware\TimingMiddleware`** - implements [`Phalcon\Contracts\ADR\Middleware`](/5.19/api/phalcon_contracts/#contractsadrmiddleware)

</div>

__Uses__ `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\ADR\Middleware` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrmiddlewaretimingmiddleware-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">Handler</span> <span class="sv">$next</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrmiddlewaretimingmiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## ADR\Payload\Payload

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Payload/Payload.zep">Source on GitHub</a>

Immutable payload produced by the domain layer.

Every `with*()` method returns a new instance, leaving the receiver
unchanged. Named factories provide a concise way to create a payload for the
commonly used statuses.

<div class="api-tree">

- **`Phalcon\ADR\Payload\Payload`** - implements [`Phalcon\Contracts\ADR\Payload\Payload`](/5.19/api/phalcon_contracts/#contractsadrpayloadpayload)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrpayloadpayload-accepted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">accepted</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>ACCEPTED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-authenticated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">authenticated</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>AUTHENTICATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-authorized">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">authorized</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>AUTHORIZED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-created">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">created</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>CREATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-deleted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">deleted</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>DELETED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-error">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">error</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>ERROR</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-forbidden">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">forbidden</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_AUTHORIZED</code> status (authenticated but</span>
</a>
<a class="api-item" href="#adrpayloadpayload-found">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">found</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>FOUND</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-getexception">
<code class="vis vis-public">public</code>
<code class="ret">Throwable|null</code>
<code class="sig"><span class="sf">getException</span>()</code>
<span class="desc">Gets the exception thrown in the domain layer, if any.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-getextras">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getExtras</span>()</code>
<span class="desc">Gets the arbitrary extra domain information.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-getinput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getInput</span>()</code>
<span class="desc">Gets the domain input.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Gets the domain messages.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-getresult">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getResult</span>()</code>
<span class="desc">Gets the domain result.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-getstatus">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getStatus</span>()</code>
<span class="desc">Gets the payload status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-invalid">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">invalid</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_VALID</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-notaccepted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">notAccepted</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_ACCEPTED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-notcreated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">notCreated</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_CREATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-notdeleted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">notDeleted</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_DELETED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-notfound">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">notFound</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_FOUND</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-notupdated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">notUpdated</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_UPDATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-processing">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">processing</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>PROCESSING</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-success">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">success</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>SUCCESS</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-unauthenticated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">unauthenticated</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_AUTHENTICATED</code> status (identity not</span>
</a>
<a class="api-item" href="#adrpayloadpayload-updated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">updated</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>UPDATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-valid">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">valid</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>VALID</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-withexception">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">withException</span>( <span class="st">Throwable</span> <span class="sv">$exception</span> )</code>
<span class="desc">Returns a copy of the payload with the given exception.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-withextras">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">withExtras</span>( <span class="st">mixed</span> <span class="sv">$extras</span> )</code>
<span class="desc">Returns a copy of the payload with the given extras.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-withinput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">withInput</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
<span class="desc">Returns a copy of the payload with the given input.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-withmessages">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">withMessages</span>( <span class="st">mixed</span> <span class="sv">$messages</span> )</code>
<span class="desc">Returns a copy of the payload with the given messages.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-withresult">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">withResult</span>( <span class="st">mixed</span> <span class="sv">$result</span> )</code>
<span class="desc">Returns a copy of the payload with the given result.</span>
</a>
<a class="api-item" href="#adrpayloadpayload-withstatus">
<code class="vis vis-public">public</code>
<code class="ret">PayloadContract</code>
<code class="sig"><span class="sf">withStatus</span>( <span class="st">mixed</span> <span class="sv">$status</span> )</code>
<span class="desc">Returns a copy of the payload with the given status.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Throwable|null</code>
<code class="sig"><span class="sv">$exception</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$extras</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$input</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$messages</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$result</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$status</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 31</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Payload/PayloadFactory.zep">Source on GitHub</a>

Thin, injectable factory mirroring the `Payload` named factories.

It exists so that payload creation can be registered as a service in the DI
container and substituted in tests, rather than calling the static factories
directly.

<div class="api-tree">

- **`Phalcon\ADR\Payload\PayloadFactory`**

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrpayloadpayloadfactory-accepted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">accepted</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>ACCEPTED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-authenticated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">authenticated</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>AUTHENTICATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-authorized">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">authorized</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>AUTHORIZED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-created">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">created</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>CREATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-deleted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">deleted</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>DELETED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-error">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">error</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>ERROR</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-forbidden">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">forbidden</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_AUTHORIZED</code> status (HTTP 403).</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-found">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">found</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>FOUND</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-invalid">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">invalid</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_VALID</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-notaccepted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">notAccepted</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_ACCEPTED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-notcreated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">notCreated</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_CREATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-notdeleted">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">notDeleted</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_DELETED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-notfound">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">notFound</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_FOUND</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-notupdated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">notUpdated</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_UPDATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-processing">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">processing</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>PROCESSING</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-success">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">success</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>SUCCESS</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-unauthenticated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">unauthenticated</span>( <span class="st">mixed</span> <span class="sv">$messages</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>NOT_AUTHENTICATED</code> status (HTTP 401).</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-updated">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">updated</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>UPDATED</code> status.</span>
</a>
<a class="api-item" href="#adrpayloadpayloadfactory-valid">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">valid</span>( <span class="st">mixed</span> <span class="sv">$result</span><span class="sm"> = null</span> )</code>
<span class="desc">Creates a payload with the <code>VALID</code> status.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 19</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Payload/Status.zep">Source on GitHub</a>

Holds the status codes for the payload.

The two failure-related statuses are distinct, following the Aura.Payload
lineage:

- `ERROR` means an exception was raised while the domain layer was running.
  By convention, `Payload::withException()` pairs with the `ERROR` status.
- `FAILURE` means the domain layer ran to completion but declined the
  request (for example, a business rule was not satisfied); no exception
  was raised.

@see Payload

<div class="api-tree">

- **`Phalcon\ADR\Payload\Status`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ACCEPTED</span><span class="sm"> = &quot;ACCEPTED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AUTHENTICATED</span><span class="sm"> = &quot;AUTHENTICATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AUTHORIZED</span><span class="sm"> = &quot;AUTHORIZED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">CREATED</span><span class="sm"> = &quot;CREATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">DELETED</span><span class="sm"> = &quot;DELETED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ERROR</span><span class="sm"> = &quot;ERROR&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FAILURE</span><span class="sm"> = &quot;FAILURE&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FOUND</span><span class="sm"> = &quot;FOUND&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_NOT_ALLOWED</span><span class="sm"> = &quot;METHOD_NOT_ALLOWED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_ACCEPTED</span><span class="sm"> = &quot;NOT_ACCEPTED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_AUTHENTICATED</span><span class="sm"> = &quot;NOT_AUTHENTICATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_AUTHORIZED</span><span class="sm"> = &quot;NOT_AUTHORIZED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_CREATED</span><span class="sm"> = &quot;NOT_CREATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_DELETED</span><span class="sm"> = &quot;NOT_DELETED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_FOUND</span><span class="sm"> = &quot;NOT_FOUND&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_UPDATED</span><span class="sm"> = &quot;NOT_UPDATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_VALID</span><span class="sm"> = &quot;NOT_VALID&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROCESSING</span><span class="sm"> = &quot;PROCESSING&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">SUCCESS</span><span class="sm"> = &quot;SUCCESS&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">UPDATED</span><span class="sm"> = &quot;UPDATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">VALID</span><span class="sm"> = &quot;VALID&quot;</span></code>
</div>
</div>

## ADR\Pipeline

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Pipeline.zep">Source on GitHub</a>

Self-recursive middleware runner. It is itself a Handler: it carries an index
and hands a new Pipeline (advanced by one) forward as the `next` handler, so
`next` is always a real Handler - no anonymous classes or callables.

When the middleware is exhausted it invokes the terminal handler (the Action).

<div class="api-tree">

- **`Phalcon\ADR\Pipeline`** - implements [`Phalcon\Contracts\ADR\Handler`](/5.19/api/phalcon_contracts/#contractsadrhandler)

</div>

__Uses__ `Phalcon\Contracts\ADR\Handler` · `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrpipeline-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$middleware</span>,</span><span class="prm"><span class="st">Handler</span> <span class="sv">$terminal</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$index</span><span class="sm"> = 0</span></span>)</code>
</a>
<a class="api-item" href="#adrpipeline-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">AttributeRequest</span> <span class="sv">$request</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$index</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$middleware</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Handler</code>
<code class="sig"><span class="sv">$terminal</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/AbstractFormattedResponder.zep">Source on GitHub</a>

Base for content-type responders: composes Status, Redirect and Format
responders into a chain. Subclasses bind the formatter(s).

<div class="api-tree">

- [`Phalcon\ADR\Responder\ChainResponder`](#adrresponderchainresponder)
- **`Phalcon\ADR\Responder\AbstractFormattedResponder`**
- [`Phalcon\ADR\Responder\JsonResponder`](#adrresponderjsonresponder)
- [`Phalcon\ADR\Responder\TextResponder`](#adrrespondertextresponder)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderabstractformattedresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$formatters</span><span class="sm"> = []</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrresponderabstractformattedresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $formatters = [] );
```

## ADR\Responder\ChainResponder

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/ChainResponder.zep">Source on GitHub</a>

Composes single-purpose responders. Each link receives the request, the
response threaded so far, and the payload, and returns the response.

<div class="api-tree">

- **`Phalcon\ADR\Responder\ChainResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/5.19/api/phalcon_contracts/#contractsadrresponderresponder)
- [`Phalcon\ADR\Responder\AbstractFormattedResponder`](#adrresponderabstractformattedresponder)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderchainresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$links</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#adrresponderchainresponder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Payload</span> <span class="sv">$payload</span></span>)</code>
</a>
<a class="api-item" href="#adrresponderchainresponder-with">
<code class="vis vis-public">public</code>
<code class="ret">ChainResponder</code>
<code class="sig"><span class="sf">with</span>( <span class="st">Responder</span> <span class="sv">$link</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Responder[]</code>
<code class="sig"><span class="sv">$links</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/FormatResponder.zep">Source on GitHub</a>

Negotiates a formatter against the request `Accept` header and renders the
payload as the response body + content type.

If no formatter accepts the header it falls back to the first (default)
formatter, so the content type and body are never left unset.

<div class="api-tree">

- **`Phalcon\ADR\Responder\FormatResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/5.19/api/phalcon_contracts/#contractsadrresponderresponder)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderformatresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$formatters</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#adrresponderformatresponder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Payload</span> <span class="sv">$payload</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$formatters</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/Formatter/JsonFormatter.zep">Source on GitHub</a>

Renders a payload as JSON.

<div class="api-tree">

- **`Phalcon\ADR\Responder\Formatter\JsonFormatter`** - implements [`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`](/5.19/api/phalcon_contracts/#contractsadrresponderformatterformatter)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Formatter\Formatter`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderformatterjsonformatter-accepts">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">accepts</span>( <span class="st">string</span> <span class="sv">$acceptHeader</span> )</code>
</a>
<a class="api-item" href="#adrresponderformatterjsonformatter-contenttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">contentType</span>()</code>
</a>
<a class="api-item" href="#adrresponderformatterjsonformatter-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Payload</span> <span class="sv">$payload</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/Formatter/TextFormatter.zep">Source on GitHub</a>

Renders a payload as plain text.

<div class="api-tree">

- **`Phalcon\ADR\Responder\Formatter\TextFormatter`** - implements [`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`](/5.19/api/phalcon_contracts/#contractsadrresponderformatterformatter)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Formatter\Formatter`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderformattertextformatter-accepts">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">accepts</span>( <span class="st">string</span> <span class="sv">$acceptHeader</span> )</code>
</a>
<a class="api-item" href="#adrresponderformattertextformatter-contenttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">contentType</span>()</code>
</a>
<a class="api-item" href="#adrresponderformattertextformatter-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Payload</span> <span class="sv">$payload</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/JsonResponder.zep">Source on GitHub</a>

A formatted responder bound to the JSON formatter.

<div class="api-tree">

- [`Phalcon\ADR\Responder\ChainResponder`](#adrresponderchainresponder)
- [`Phalcon\ADR\Responder\AbstractFormattedResponder`](#adrresponderabstractformattedresponder)
- **`Phalcon\ADR\Responder\JsonResponder`**

</div>

__Uses__ `Phalcon\ADR\Responder\Formatter\JsonFormatter`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderjsonresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrresponderjsonresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Responder\Redirect

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/Redirect.zep">Source on GitHub</a>

Value object describing a redirect. An Action sets it on the payload; the
RedirectResponder turns it into a `Location` header and status code.

<div class="api-tree">

- **`Phalcon\ADR\Responder\Redirect`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderredirect-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$status</span><span class="sm"> = 302</span></span>)</code>
</a>
<a class="api-item" href="#adrresponderredirect-permanent">
<code class="vis vis-public">public</code>
<code class="ret">Redirect</code>
<code class="sig"><span class="sf">permanent</span>( <span class="st">string</span> <span class="sv">$url</span> )</code>
</a>
<a class="api-item" href="#adrresponderredirect-seeother">
<code class="vis vis-public">public</code>
<code class="ret">Redirect</code>
<code class="sig"><span class="sf">seeOther</span>( <span class="st">string</span> <span class="sv">$url</span> )</code>
</a>
<a class="api-item" href="#adrresponderredirect-status">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">status</span>()</code>
</a>
<a class="api-item" href="#adrresponderredirect-temporary">
<code class="vis vis-public">public</code>
<code class="ret">Redirect</code>
<code class="sig"><span class="sf">temporary</span>( <span class="st">string</span> <span class="sv">$url</span> )</code>
</a>
<a class="api-item" href="#adrresponderredirect-url">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">url</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$status</span><span class="sm"> = 302</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$url</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="adrresponderredirect-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $url,
int $status = 302
);
```

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/RedirectResponder.zep">Source on GitHub</a>

Applies a `Redirect` value object carried on the payload result: sets the
status code and the `Location` header. A no-op when the result is not a
redirect.

<div class="api-tree">

- **`Phalcon\ADR\Responder\RedirectResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/5.19/api/phalcon_contracts/#contractsadrresponderresponder)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderredirectresponder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Payload</span> <span class="sv">$payload</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrresponderredirectresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

## ADR\Responder\StatusMapper

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/StatusMapper.zep">Source on GitHub</a>

Maps a domain `Status` to an HTTP status code.

`Status` is the single source of truth: the default map covers every
`Status` constant. Any status that is not mapped resolves to 500, never a
silent 200. Every entry can be overridden through the constructor.

<div class="api-tree">

- **`Phalcon\ADR\Responder\StatusMapper`**

</div>

__Uses__ `Phalcon\ADR\Payload\Status` · `Phalcon\Contracts\ADR\ADRTypes`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderstatusmapper-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$overrides</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#adrresponderstatusmapper-tohttpcode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">toHttpCode</span>( <span class="st">string</span> <span class="sv">$status</span> )</code>
<span class="desc">Returns the HTTP status code for the given domain status.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$map</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/StatusResponder.zep">Source on GitHub</a>

Sets the response HTTP status code from the payload status, via StatusMapper.

<div class="api-tree">

- **`Phalcon\ADR\Responder\StatusResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/5.19/api/phalcon_contracts/#contractsadrresponderresponder)

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderstatusresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">StatusMapper|null</span> <span class="sv">$mapper</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#adrresponderstatusresponder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Payload</span> <span class="sv">$payload</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StatusMapper</code>
<code class="sig"><span class="sv">$mapper</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/TextResponder.zep">Source on GitHub</a>

A formatted responder bound to the text formatter.

<div class="api-tree">

- [`Phalcon\ADR\Responder\ChainResponder`](#adrresponderchainresponder)
- [`Phalcon\ADR\Responder\AbstractFormattedResponder`](#adrresponderabstractformattedresponder)
- **`Phalcon\ADR\Responder\TextResponder`**

</div>

__Uses__ `Phalcon\ADR\Responder\Formatter\TextFormatter`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrrespondertextresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrrespondertextresponder-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## ADR\Responder\ViewResponder

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Responder/ViewResponder.zep">Source on GitHub</a>

Renders a template from the payload and returns it as an HTML response.

The HTML sibling of `JsonResponder`: serialization is swapped for rendering,
the status mapping and the `Responder` contract stay the same. It depends on
the neutral `Renderer` contract only, so the ADR component never imports the
MVC view.

<div class="api-tree">

- **`Phalcon\ADR\Responder\ViewResponder`** - implements [`Phalcon\Contracts\ADR\Responder\Responder`](/5.19/api/phalcon_contracts/#contractsadrresponderresponder)

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Contracts\ADR\Responder\Responder` · `Phalcon\Contracts\View\Renderer` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrresponderviewresponder-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Renderer</span> <span class="sv">$renderer</span>,</span><span class="prm"><span class="st">StatusMapper</span> <span class="sv">$statusMapper</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$template</span><span class="sm"> = &quot;&quot;</span></span>)</code>
</a>
<a class="api-item" href="#adrresponderviewresponder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Payload</span> <span class="sv">$payload</span></span>)</code>
</a>
<a class="api-item" href="#adrresponderviewresponder-withtemplate">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withTemplate</span>( <span class="st">string</span> <span class="sv">$template</span> )</code>
<span class="desc">Returns a copy of the responder bound to the given template. The action</span>
</a>
<a class="api-item" href="#adrresponderviewresponder-viewdata">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">viewData</span>( <span class="st">Payload</span> <span class="sv">$payload</span> )</code>
<span class="desc">Flattens the payload into the variables handed to the template. The</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Renderer</code>
<code class="sig"><span class="sv">$renderer</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StatusMapper</code>
<code class="sig"><span class="sv">$statusMapper</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<div class="api-group">Protected · 1</div>

<h4 id="adrresponderviewresponder-viewdata"><code>viewData()</code></h4>

```php
protected function viewData( Payload $payload ): array;
```

Flattens the payload into the variables handed to the template. The
extras travel as they are, so an action can hand the view whatever the
result should not carry.

## ADR\Router\AttributeFilter

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Router/AttributeFilter.zep">Source on GitHub</a>

Reads an Action's optional static `params()` declaration and transforms the
router's positional tail segments: regex match (miss => RouteNotFound), cast
to a scalar type, then an optional converter closure. Declaration order names
the attributes; a declared parameter with no segment is skipped; surplus
segments pass through under their positional keys. An Action without
`params()` is returned unchanged.

<div class="api-tree">

- **`Phalcon\ADR\Router\AttributeFilter`** - implements [`Phalcon\Contracts\ADR\Router\AttributeFilter`](/5.19/api/phalcon_contracts/#contractsadrrouterattributefilter)

</div>

__Uses__ `Phalcon\ADR\Exceptions\RouteNotFound` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Router\AttributeFilter`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrrouterattributefilter-filter">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">filter</span>(<span class="prm"><span class="st">string</span> <span class="sv">$actionClass</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
</a>
<a class="api-item" href="#adrrouterattributefilter-cast">
<code class="vis vis-protected">protected</code>
<code class="ret">float|int|string</code>
<code class="sig"><span class="sf">cast</span>(<span class="prm"><span class="st">string</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="adrrouterattributefilter-filter"><code>filter()</code></h4>

```php
public function filter(
string $actionClass,
array $attributes
): array;
```

<div class="api-group">Protected · 1</div>

<h4 id="adrrouterattributefilter-cast"><code>cast()</code></h4>

```php
protected function cast(
string $value,
string $type
): float|int|string;
```

## ADR\Router\Router

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Router/Router.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\ADR\Router\Router`** - implements [`Phalcon\Contracts\ADR\Router\Router`](/5.19/api/phalcon_contracts/#contractsadrrouterrouter)

</div>

__Uses__ `Phalcon\ADR\Exceptions\ActionDirectoryNotSet` · `Phalcon\ADR\Exceptions\MethodNotAllowed` · `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Router\Router` · `Phalcon\Contracts\ADR\Router\RouterMatch` · `Phalcon\Http\RequestInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrrouterrouter-candidatesfor">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">candidatesFor</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span></span>)</code>
<span class="desc">Every Action class this router would try for the given method and path,</span>
</a>
<a class="api-item" href="#adrrouterrouter-classfor">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">classFor</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span></span>)</code>
<span class="desc">The class this convention names for a fully static path, derived without</span>
</a>
<a class="api-item" href="#adrrouterrouter-match">
<code class="vis vis-public">public</code>
<code class="ret">RouterMatchInterface|null</code>
<code class="sig"><span class="sf">match</span>( <span class="st">RequestInterface</span> <span class="sv">$request</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-methodfor">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">methodFor</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-pathfor">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">pathFor</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-setactiondirectory">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setActionDirectory</span>( <span class="st">string</span> <span class="sv">$actionDirectory</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-setbasenamespace">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setBaseNamespace</span>( <span class="st">string</span> <span class="sv">$baseNamespace</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-setmiddlewaremap">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setMiddlewareMap</span>( <span class="st">array</span> <span class="sv">$middlewareMap</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-setwordseparator">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setWordSeparator</span>( <span class="st">string</span> <span class="sv">$wordSeparator</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-actionparams">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">actionParams</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">An Action&#039;s declared positional parameters, or an empty array when it</span>
</a>
<a class="api-item" href="#adrrouterrouter-camelize">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">camelize</span>( <span class="st">string</span> <span class="sv">$segment</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-decamelize">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">decamelize</span>( <span class="st">string</span> <span class="sv">$part</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-derivecandidates">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">deriveCandidates</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span></span>)</code>
<span class="desc">The single derivation of the routing convention.</span>
</a>
<a class="api-item" href="#adrrouterrouter-hassubnamespace">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasSubNamespace</span>( <span class="st">string</span> <span class="sv">$subNamespace</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-locate">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">locate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span></span>)</code>
</a>
<a class="api-item" href="#adrrouterrouter-middlewarefor">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">middlewareFor</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#adrrouterrouter-verbof">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">verbOf</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">The class-name-form verb the given Action class carries, or null when the</span>
</a>
<a class="api-item" href="#adrrouterrouter-verbs">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">verbs</span>()</code>
<span class="desc">The HTTP verbs the convention recognizes, in class-name form.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$actionDirectory</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$baseNamespace</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$middlewareMap</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$wordSeparator</span><span class="sm"> = &quot;-&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 9</div>

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

<div class="api-group">Protected · 9</div>

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

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/ADR/Router/RouterMatch.zep">Source on GitHub</a>

Immutable result of a successful route match.

<div class="api-tree">

- **`Phalcon\ADR\Router\RouterMatch`** - implements [`Phalcon\Contracts\ADR\Router\RouterMatch`](/5.19/api/phalcon_contracts/#contractsadrrouterroutermatch)

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Contracts\ADR\Router\RouterMatch`

### Method Summary

<div class="api-list">
<a class="api-item" href="#adrrouterroutermatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$action</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$middleware</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#adrrouterroutermatch-getaction">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAction</span>()</code>
</a>
<a class="api-item" href="#adrrouterroutermatch-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
</a>
<a class="api-item" href="#adrrouterroutermatch-getmiddleware">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMiddleware</span>()</code>
</a>
<a class="api-item" href="#adrrouterroutermatch-getname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getName</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$action</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$middleware</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

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

Source: https://docs.phalcon.io/5.19/api/phalcon_adr/index.mdx
