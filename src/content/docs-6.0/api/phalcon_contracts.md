---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Contracts\ADR\ADRTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/ADRTypes.php){ .src-btn }

Central registry of the array shapes used across the ADR namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `adr_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `middleware_map` from clashing with an alias
imported from another namespace into the same file.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\ADRTypes`**

</div>


## Contracts\ADR\Action

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Action.php){ .src-btn }

Marker contract for a per-endpoint Action. An Action is a Handler:
`__invoke(request): response`.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\ADR\Handler`](#contractsadrhandler)
    - **`Phalcon\Contracts\ADR\Action`**

</div>


## Contracts\ADR\Application

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Application.php){ .src-btn }

Handles a request end to end: routes it, dispatches the Action and returns
the response, routing any error through the error responder.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Application`**

</div>

__Uses__ `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrapplication-handle">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">handle</span>( <span class="st">AttributeRequest</span> <span class="sv">$request</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `handle()` { #contractsadrapplication-handle }

```php
public function handle( AttributeRequest $request ): ResponseInterface;
```


## Contracts\ADR\Dispatcher

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Dispatcher.php){ .src-btn }

Resolves an Action by class name, builds the middleware pipeline around it and
runs it to produce a response.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Dispatcher`**

</div>

__Uses__ `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrdispatcher-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">dispatch</span>(<span class="prm"><span class="st">string</span> <span class="sv">$actionClass</span>,</span><span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$routeMiddleware</span><span class="sm"> = []</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `dispatch()` { #contractsadrdispatcher-dispatch }

```php
public function dispatch(
    string $actionClass,
    AttributeRequest $request,
    array $routeMiddleware = []
): ResponseInterface;
```


## Contracts\ADR\Emitter\Emitter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Emitter/Emitter.php){ .src-btn }

Sends a response to the client. Called by the front controller only.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Emitter\Emitter`**

</div>

__Uses__ `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadremitteremitter-emit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">emit</span>( <span class="st">ResponseInterface</span> <span class="sv">$response</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `emit()` { #contractsadremitteremitter-emit }

```php
public function emit( ResponseInterface $response ): void;
```


## Contracts\ADR\Exceptions\ADRThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Exceptions/ADRThrowable.php){ .src-btn }

Base throwable contract for the ADR component. Every ADR exception implements
it, so callers can catch all ADR errors with a single type.

<div class="api-tree" markdown>

- `\Throwable`
    - **`Phalcon\Contracts\ADR\Exceptions\ADRThrowable`**

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\ADR\Handler

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Handler.php){ .src-btn }

Receives the request and returns a response. The terminal handler in the
pipeline is the Action.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Handler`**
    - [`Phalcon\Contracts\ADR\Action`](#contractsadraction)

</div>

__Uses__ `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrhandler-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">AttributeRequest</span> <span class="sv">$request</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #contractsadrhandler-__invoke }

```php
public function __invoke( AttributeRequest $request ): ResponseInterface;
```


## Contracts\ADR\Middleware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Middleware.php){ .src-btn }

Wraps the handler chain. Middleware may pass the request through to the next
handler, decorate the response, short-circuit by returning its own response,
or throw to route through the error responder.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Middleware`**

</div>

__Uses__ `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrmiddleware-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">AttributeRequest</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">Handler</span> <span class="sv">$next</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #contractsadrmiddleware-__invoke }

```php
public function __invoke(
    AttributeRequest $request,
    Handler $next
): ResponseInterface;
```


## Contracts\ADR\Payload\Payload

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Payload/Payload.php){ .src-btn }

Contract for the immutable payload produced by the domain layer.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Payload\Payload`**

</div>

__Uses__ `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrpayloadpayload-getexception">
<code class="vis vis-public">public</code>
<code class="ret">Throwable|null</code>
<code class="sig"><span class="sf">getException</span>()</code>
<span class="desc">Gets the exception thrown in the domain layer, if any.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-getextras">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getExtras</span>()</code>
<span class="desc">Gets the arbitrary extra domain information.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-getinput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getInput</span>()</code>
<span class="desc">Gets the domain input.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Gets the domain messages.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-getresult">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getResult</span>()</code>
<span class="desc">Gets the domain result.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-getstatus">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getStatus</span>()</code>
<span class="desc">Gets the payload status.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-withexception">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">withException</span>( <span class="st">Throwable</span> <span class="sv">$exception</span> )</code>
<span class="desc">Returns a copy of the payload with the given exception.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-withextras">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">withExtras</span>( <span class="st">mixed</span> <span class="sv">$extras</span> )</code>
<span class="desc">Returns a copy of the payload with the given extras.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-withinput">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">withInput</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
<span class="desc">Returns a copy of the payload with the given input.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-withmessages">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">withMessages</span>( <span class="st">mixed</span> <span class="sv">$messages</span> )</code>
<span class="desc">Returns a copy of the payload with the given messages.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-withresult">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">withResult</span>( <span class="st">mixed</span> <span class="sv">$result</span> )</code>
<span class="desc">Returns a copy of the payload with the given result.</span>
</a>
<a class="api-item" href="#contractsadrpayloadpayload-withstatus">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">withStatus</span>( <span class="st">mixed</span> <span class="sv">$status</span> )</code>
<span class="desc">Returns a copy of the payload with the given status.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 12</div>

#### `getException()` { #contractsadrpayloadpayload-getexception }

```php
public function getException(): Throwable|null;
```

Gets the exception thrown in the domain layer, if any.

#### `getExtras()` { #contractsadrpayloadpayload-getextras }

```php
public function getExtras(): mixed;
```

Gets the arbitrary extra domain information.

#### `getInput()` { #contractsadrpayloadpayload-getinput }

```php
public function getInput(): mixed;
```

Gets the domain input.

#### `getMessages()` { #contractsadrpayloadpayload-getmessages }

```php
public function getMessages(): mixed;
```

Gets the domain messages.

#### `getResult()` { #contractsadrpayloadpayload-getresult }

```php
public function getResult(): mixed;
```

Gets the domain result.

#### `getStatus()` { #contractsadrpayloadpayload-getstatus }

```php
public function getStatus(): mixed;
```

Gets the payload status.

#### `withException()` { #contractsadrpayloadpayload-withexception }

```php
public function withException( Throwable $exception ): Payload;
```

Returns a copy of the payload with the given exception.

#### `withExtras()` { #contractsadrpayloadpayload-withextras }

```php
public function withExtras( mixed $extras ): Payload;
```

Returns a copy of the payload with the given extras.

#### `withInput()` { #contractsadrpayloadpayload-withinput }

```php
public function withInput( mixed $input ): Payload;
```

Returns a copy of the payload with the given input.

#### `withMessages()` { #contractsadrpayloadpayload-withmessages }

```php
public function withMessages( mixed $messages ): Payload;
```

Returns a copy of the payload with the given messages.

#### `withResult()` { #contractsadrpayloadpayload-withresult }

```php
public function withResult( mixed $result ): Payload;
```

Returns a copy of the payload with the given result.

#### `withStatus()` { #contractsadrpayloadpayload-withstatus }

```php
public function withStatus( mixed $status ): Payload;
```

Returns a copy of the payload with the given status.


## Contracts\ADR\Responder\Formatter\Formatter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Responder/Formatter/Formatter.php){ .src-btn }

Renders a payload into a string for a given content type.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`**

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrresponderformatterformatter-accepts">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">accepts</span>( <span class="st">string</span> <span class="sv">$acceptHeader</span> )</code>
<span class="desc">Whether this formatter can satisfy the given <code>Accept</code> header.</span>
</a>
<a class="api-item" href="#contractsadrresponderformatterformatter-contenttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">contentType</span>()</code>
<span class="desc">The content type this formatter produces.</span>
</a>
<a class="api-item" href="#contractsadrresponderformatterformatter-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Payload</span> <span class="sv">$payload</span> )</code>
<span class="desc">Renders the payload into a string.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `accepts()` { #contractsadrresponderformatterformatter-accepts }

```php
public function accepts( string $acceptHeader ): bool;
```

Whether this formatter can satisfy the given `Accept` header.

#### `contentType()` { #contractsadrresponderformatterformatter-contenttype }

```php
public function contentType(): string;
```

The content type this formatter produces.

#### `format()` { #contractsadrresponderformatterformatter-format }

```php
public function format( Payload $payload ): string;
```

Renders the payload into a string.


## Contracts\ADR\Responder\Responder

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Responder/Responder.php){ .src-btn }

Turns a payload into an HTTP response. The only layer that speaks HTTP.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Responder\Responder`**

</div>

__Uses__ `Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrresponderresponder-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span>,</span><span class="prm"><span class="st">Payload</span> <span class="sv">$payload</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #contractsadrresponderresponder-__invoke }

```php
public function __invoke(
    RequestInterface $request,
    ResponseInterface $response,
    Payload $payload
): ResponseInterface;
```


## Contracts\ADR\Router\AttributeFilter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Router/AttributeFilter.php){ .src-btn }

Validates, casts and converts a router match's positional tail segments into
named request attributes, driven by the matched Action's optional static
`params()` declaration.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Router\AttributeFilter`**

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrrouterattributefilter-filter">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">filter</span>(<span class="prm"><span class="st">string</span> <span class="sv">$actionClass</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `filter()` { #contractsadrrouterattributefilter-filter }

```php
public function filter(
    string $actionClass,
    array $attributes
): array;
```


## Contracts\ADR\Router\Router

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Router/Router.php){ .src-btn }

Maps a request to an Action by convention: the HTTP method and the static
path segments identify the class; trailing segments become positional
request attributes. No route table.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Router\Router`**

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Http\RequestInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrrouterrouter-candidatesfor">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">candidatesFor</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span></span>)</code>
<span class="desc">Every Action class this router would try for the given method and path,</span>
</a>
<a class="api-item" href="#contractsadrrouterrouter-classfor">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">classFor</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span></span>)</code>
<span class="desc">The class this convention names for a fully static path, derived without</span>
</a>
<a class="api-item" href="#contractsadrrouterrouter-match">
<code class="vis vis-public">public</code>
<code class="ret">RouterMatch|null</code>
<code class="sig"><span class="sf">match</span>( <span class="st">RequestInterface</span> <span class="sv">$request</span> )</code>
</a>
<a class="api-item" href="#contractsadrrouterrouter-methodfor">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">methodFor</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">The HTTP method the given Action class answers, uppercased, or null when</span>
</a>
<a class="api-item" href="#contractsadrrouterrouter-pathfor">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">pathFor</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">The canonical static path the given Action class answers, or null when</span>
</a>
<a class="api-item" href="#contractsadrrouterrouter-setactiondirectory">
<code class="vis vis-public">public</code>
<code class="ret">Router</code>
<code class="sig"><span class="sf">setActionDirectory</span>( <span class="st">string</span> <span class="sv">$actionDirectory</span> )</code>
<span class="desc">The filesystem root that backs the base namespace. The router uses it to</span>
</a>
<a class="api-item" href="#contractsadrrouterrouter-setbasenamespace">
<code class="vis vis-public">public</code>
<code class="ret">Router</code>
<code class="sig"><span class="sf">setBaseNamespace</span>( <span class="st">string</span> <span class="sv">$baseNamespace</span> )</code>
</a>
<a class="api-item" href="#contractsadrrouterrouter-setmiddlewaremap">
<code class="vis vis-public">public</code>
<code class="ret">Router</code>
<code class="sig"><span class="sf">setMiddlewareMap</span>( <span class="st">array</span> <span class="sv">$middlewareMap</span> )</code>
</a>
<a class="api-item" href="#contractsadrrouterrouter-setwordseparator">
<code class="vis vis-public">public</code>
<code class="ret">Router</code>
<code class="sig"><span class="sf">setWordSeparator</span>( <span class="st">string</span> <span class="sv">$wordSeparator</span> )</code>
<span class="desc">The single delimiter between words in a path segment. Applied</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `candidatesFor()` { #contractsadrrouterrouter-candidatesfor }

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

#### `classFor()` { #contractsadrrouterrouter-classfor }

```php
public function classFor(
    string $method,
    string $path
): string;
```

The class this convention names for a fully static path, derived without
consulting the filesystem - the exact inverse of pathFor().

For tooling that needs the name before the code exists: generators,
linters, documentation and "no action found; expected X" diagnostics.
Pass the static prefix only; placeholders are the caller's concern.

#### `match()` { #contractsadrrouterrouter-match }

```php
public function match( RequestInterface $request ): RouterMatch|null;
```

#### `methodFor()` { #contractsadrrouterrouter-methodfor }

```php
public function methodFor( string $className ): string|null;
```

The HTTP method the given Action class answers, uppercased, or null when
the class is not one this convention would have produced.

The counterpart to pathFor(): same argument, same null semantics, so a
caller that accepts one answer accepts the other. Together they are the
whole inverse of classFor().

#### `pathFor()` { #contractsadrrouterrouter-pathfor }

```php
public function pathFor( string $className ): string|null;
```

The canonical static path the given Action class answers, or null when
the class is not derivable from the base namespace. Positional
attributes are not part of the canonical path.

#### `setActionDirectory()` { #contractsadrrouterrouter-setactiondirectory }

```php
public function setActionDirectory( string $actionDirectory ): Router;
```

The filesystem root that backs the base namespace. The router uses it to
decide whether a path segment names a sub-namespace.

#### `setBaseNamespace()` { #contractsadrrouterrouter-setbasenamespace }

```php
public function setBaseNamespace( string $baseNamespace ): Router;
```

#### `setMiddlewareMap()` { #contractsadrrouterrouter-setmiddlewaremap }

```php
public function setMiddlewareMap( array $middlewareMap ): Router;
```

#### `setWordSeparator()` { #contractsadrrouterrouter-setwordseparator }

```php
public function setWordSeparator( string $wordSeparator ): Router;
```

The single delimiter between words in a path segment. Applied
symmetrically when deriving a class name from a path and a path from a
class name. Any other character is literal.


## Contracts\ADR\Router\RouterMatch

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/ADR/Router/RouterMatch.php){ .src-btn }

The result of matching a request against the router: the Action class, the
extracted route attributes, the route's middleware and its optional name.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\ADR\Router\RouterMatch`**

</div>

__Uses__ `Phalcon\Contracts\ADR\ADRTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsadrrouterroutermatch-getaction">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAction</span>()</code>
</a>
<a class="api-item" href="#contractsadrrouterroutermatch-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
</a>
<a class="api-item" href="#contractsadrrouterroutermatch-getmiddleware">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMiddleware</span>()</code>
</a>
<a class="api-item" href="#contractsadrrouterroutermatch-getname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getName</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getAction()` { #contractsadrrouterroutermatch-getaction }

```php
public function getAction(): string;
```

#### `getAttributes()` { #contractsadrrouterroutermatch-getattributes }

```php
public function getAttributes(): array;
```

#### `getMiddleware()` { #contractsadrrouterroutermatch-getmiddleware }

```php
public function getMiddleware(): array;
```

#### `getName()` { #contractsadrrouterroutermatch-getname }

```php
public function getName(): string|null;
```


## Contracts\Acl\AclTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/AclTypes.php){ .src-btn }

Central registry of the array shapes used across the Acl namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\AclTypes`**

</div>

__Uses__ `Phalcon\Acl\ComponentAwareInterface` · `Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\RoleAwareInterface` · `Phalcon\Acl\RoleInterface`
{ .api-uses }


## Contracts\Acl\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/Adapter/Adapter.php){ .src-btn }

Canonical contract for Phalcon\Acl adapters

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\Adapter\Adapter`**
    - [`Phalcon\Acl\Adapter\AdapterInterface`](phalcon_acl.md#acladapteradapterinterface)

</div>

__Uses__ `Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\RoleInterface` · `Phalcon\Contracts\Acl\AclTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsacladapteradapter-addcomponent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addComponent</span>(<span class="prm"><span class="st">ComponentInterface|string</span> <span class="sv">$componentObject</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$accessList</span></span>)</code>
<span class="desc">Adds a component to the ACL list</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-addcomponentaccess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addComponentAccess</span>(<span class="prm"><span class="st">string</span> <span class="sv">$componentName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$accessList</span></span>)</code>
<span class="desc">Adds access to components</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-addinherit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addInherit</span>(<span class="prm"><span class="st">string</span> <span class="sv">$roleName</span>,</span><span class="prm"><span class="st">array|RoleInterface|string</span> <span class="sv">$roleToInherit</span></span>)</code>
<span class="desc">Add a role which inherits from an existing role</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-addrole">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addRole</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$roleObject</span>,</span><span class="prm"><span class="st">array|RoleInterface|string|null</span> <span class="sv">$accessInherits</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Adds a role to the ACL list. The second parameter lets to inherit access</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-allow">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">allow</span>(<span class="prm"><span class="st">string</span> <span class="sv">$roleName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$componentName</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$access</span>,</span><span class="prm"><span class="st">callable|null</span> <span class="sv">$function</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Allow access to a role on a component. You can use <code>*</code> as wildcard</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-deny">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">deny</span>(<span class="prm"><span class="st">string</span> <span class="sv">$roleName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$componentName</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$access</span>,</span><span class="prm"><span class="st">callable|null</span> <span class="sv">$function</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Deny access to a role on a component. You can use <code>*</code> as wildcard</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-dropcomponentaccess">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">dropComponentAccess</span>(<span class="prm"><span class="st">string</span> <span class="sv">$componentName</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$accessList</span></span>)</code>
<span class="desc">Removes access from a component</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getactiveaccess">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getActiveAccess</span>()</code>
<span class="desc">Returns the access which the list is checking if a role can access it</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getactivecomponent">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getActiveComponent</span>()</code>
<span class="desc">Returns the component which the list is checking if some role can access</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getactiverole">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getActiveRole</span>()</code>
<span class="desc">Returns the role which the list is checking if it&#039;s allowed to certain</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getcomponents">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getComponents</span>()</code>
<span class="desc">Return an array with every component registered in the list</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getDefaultAction</span>()</code>
<span class="desc">Returns the default action</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getinheritedroles">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getInheritedRoles</span>( <span class="st">string</span> <span class="sv">$roleName</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns the inherited roles for a passed role name. If no role name</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getnoargumentsdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getNoArgumentsDefaultAction</span>()</code>
<span class="desc">Returns the default ACL access level for no arguments provided in</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-getroles">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getRoles</span>()</code>
<span class="desc">Return an array with every role registered in the list</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowed</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$roleName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$componentName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$access</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Check whether a role is allowed to access an action from a component</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-iscomponent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isComponent</span>( <span class="st">string</span> <span class="sv">$componentName</span> )</code>
<span class="desc">Check whether a component exists in the components list</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-isrole">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isRole</span>( <span class="st">string</span> <span class="sv">$roleName</span> )</code>
<span class="desc">Check whether role exist in the roles list</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultAction</span>( <span class="st">int</span> <span class="sv">$defaultAccess</span> )</code>
<span class="desc">Sets the default access level</span>
</a>
<a class="api-item" href="#contractsacladapteradapter-setnoargumentsdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setNoArgumentsDefaultAction</span>( <span class="st">int</span> <span class="sv">$defaultAccess</span> )</code>
<span class="desc">Sets the default access level (Phalcon\Acl\Enum::ALLOW or</span>
</a>
</div>

### Methods

<div class="api-group">Public · 20</div>

#### `addComponent()` { #contractsacladapteradapter-addcomponent }

```php
public function addComponent(
    ComponentInterface|string $componentObject,
    array|string $accessList
): bool;
```

Adds a component to the ACL list

Access names can be a particular action, for instance `search`, `update`
`delete` etc. or a list of them.

#### `addComponentAccess()` { #contractsacladapteradapter-addcomponentaccess }

```php
public function addComponentAccess(
    string $componentName,
    mixed $accessList
): bool;
```

Adds access to components

#### `addInherit()` { #contractsacladapteradapter-addinherit }

```php
public function addInherit(
    string $roleName,
    array|RoleInterface|string $roleToInherit
): bool;
```

Add a role which inherits from an existing role

#### `addRole()` { #contractsacladapteradapter-addrole }

```php
public function addRole(
    mixed $roleObject,
    array|RoleInterface|string|null $accessInherits = null
): bool;
```

Adds a role to the ACL list. The second parameter lets to inherit access
from an existing role

#### `allow()` { #contractsacladapteradapter-allow }

```php
public function allow(
    string $roleName,
    string $componentName,
    array|string $access,
    callable|null $function = null
): void;
```

Allow access to a role on a component. You can use `*` as wildcard

#### `deny()` { #contractsacladapteradapter-deny }

```php
public function deny(
    string $roleName,
    string $componentName,
    array|string $access,
    callable|null $function = null
): void;
```

Deny access to a role on a component. You can use `*` as wildcard

#### `dropComponentAccess()` { #contractsacladapteradapter-dropcomponentaccess }

```php
public function dropComponentAccess(
    string $componentName,
    array|string $accessList
): void;
```

Removes access from a component

#### `getActiveAccess()` { #contractsacladapteradapter-getactiveaccess }

```php
public function getActiveAccess(): string|null;
```

Returns the access which the list is checking if a role can access it

#### `getActiveComponent()` { #contractsacladapteradapter-getactivecomponent }

```php
public function getActiveComponent(): string|null;
```

Returns the component which the list is checking if some role can access
it

#### `getActiveRole()` { #contractsacladapteradapter-getactiverole }

```php
public function getActiveRole(): string|null;
```

Returns the role which the list is checking if it's allowed to certain
component/access

#### `getComponents()` { #contractsacladapteradapter-getcomponents }

```php
public function getComponents(): array|null;
```

Return an array with every component registered in the list

#### `getDefaultAction()` { #contractsacladapteradapter-getdefaultaction }

```php
public function getDefaultAction(): int;
```

Returns the default action

#### `getInheritedRoles()` { #contractsacladapteradapter-getinheritedroles }

```php
public function getInheritedRoles( string $roleName = "" ): array|null;
```

Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array

#### `getNoArgumentsDefaultAction()` { #contractsacladapteradapter-getnoargumentsdefaultaction }

```php
public function getNoArgumentsDefaultAction(): int;
```

Returns the default ACL access level for no arguments provided in
`isAllowed` action if a `function` (callable) exists for `accessKey`

#### `getRoles()` { #contractsacladapteradapter-getroles }

```php
public function getRoles(): array|null;
```

Return an array with every role registered in the list

#### `isAllowed()` { #contractsacladapteradapter-isallowed }

```php
public function isAllowed(
    mixed $roleName,
    mixed $componentName,
    string $access,
    array|null $parameters = null
): bool;
```

Check whether a role is allowed to access an action from a component

#### `isComponent()` { #contractsacladapteradapter-iscomponent }

```php
public function isComponent( string $componentName ): bool;
```

Check whether a component exists in the components list

#### `isRole()` { #contractsacladapteradapter-isrole }

```php
public function isRole( string $roleName ): bool;
```

Check whether role exist in the roles list

#### `setDefaultAction()` { #contractsacladapteradapter-setdefaultaction }

```php
public function setDefaultAction( int $defaultAccess ): void;
```

Sets the default access level
(Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)

#### `setNoArgumentsDefaultAction()` { #contractsacladapteradapter-setnoargumentsdefaultaction }

```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (Phalcon\Acl\Enum::ALLOW or
Phalcon\Acl\Enum::DENY) for no arguments provided in isAllowed action if
there exists func for accessKey


## Contracts\Acl\Adapter\Persistable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/Adapter/Persistable.php){ .src-btn }

Contract for ACL adapters that persist their policy to a backing store as a
whole-policy snapshot (coarse granularity).

NOTE: callable (closure) rules registered via allow()/deny() are NOT
persisted - closures are not serializable. Re-register them in code after
load(). The static rule set and role inheritance are persisted in full.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\Adapter\Persistable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsacladapterpersistable-load">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">load</span>()</code>
<span class="desc">Loads the policy snapshot from the backing store, replacing current</span>
</a>
<a class="api-item" href="#contractsacladapterpersistable-save">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">save</span>()</code>
<span class="desc">Persists the current policy snapshot to the backing store.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `load()` { #contractsacladapterpersistable-load }

```php
public function load(): bool;
```

Loads the policy snapshot from the backing store, replacing current
in-memory state. Returns false if no snapshot was found.

#### `save()` { #contractsacladapterpersistable-save }

```php
public function save(): bool;
```

Persists the current policy snapshot to the backing store.


## Contracts\Acl\Component

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/Component.php){ .src-btn }

Canonical contract for an ACL component entity.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\Component`**
    - [`Phalcon\Acl\ComponentInterface`](phalcon_acl.md#aclcomponentinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsaclcomponent-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Magic method __toString</span>
</a>
<a class="api-item" href="#contractsaclcomponent-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getDescription</span>()</code>
<span class="desc">Returns component description</span>
</a>
<a class="api-item" href="#contractsaclcomponent-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the component name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__toString()` { #contractsaclcomponent-__tostring }

```php
public function __toString(): string;
```

Magic method __toString

#### `getDescription()` { #contractsaclcomponent-getdescription }

```php
public function getDescription(): string|null;
```

Returns component description

#### `getName()` { #contractsaclcomponent-getname }

```php
public function getName(): string;
```

Returns the component name


## Contracts\Acl\ComponentAware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/ComponentAware.php){ .src-btn }

Canonical contract for ACL component-aware objects.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\ComponentAware`**
    - [`Phalcon\Acl\ComponentAwareInterface`](phalcon_acl.md#aclcomponentawareinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsaclcomponentaware-getcomponentname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getComponentName</span>()</code>
<span class="desc">Returns component name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getComponentName()` { #contractsaclcomponentaware-getcomponentname }

```php
public function getComponentName(): string;
```

Returns component name


## Contracts\Acl\Role

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/Role.php){ .src-btn }

Canonical contract for an ACL role entity.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\Role`**
    - [`Phalcon\Acl\RoleInterface`](phalcon_acl.md#aclroleinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsaclrole-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Magic method __toString</span>
</a>
<a class="api-item" href="#contractsaclrole-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getDescription</span>()</code>
<span class="desc">Returns role description</span>
</a>
<a class="api-item" href="#contractsaclrole-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the role name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__toString()` { #contractsaclrole-__tostring }

```php
public function __toString(): string;
```

Magic method __toString

#### `getDescription()` { #contractsaclrole-getdescription }

```php
public function getDescription(): string|null;
```

Returns role description

#### `getName()` { #contractsaclrole-getname }

```php
public function getName(): string;
```

Returns the role name


## Contracts\Acl\RoleAware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Acl/RoleAware.php){ .src-btn }

Canonical contract for ACL role-aware objects.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Acl\RoleAware`**
    - [`Phalcon\Acl\RoleAwareInterface`](phalcon_acl.md#aclroleawareinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsaclroleaware-getrolename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRoleName</span>()</code>
<span class="desc">Returns role name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getRoleName()` { #contractsaclroleaware-getrolename }

```php
public function getRoleName(): string;
```

Returns role name


## Contracts\Application\ApplicationTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Application/ApplicationTypes.php){ .src-btn }

Central registry of the array shapes used across the Application namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Application\ApplicationTypes`**

</div>

__Uses__ `Closure`
{ .api-uses }


## Contracts\Assets\Asset

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Assets/Asset.php){ .src-btn }

Canonical contract for Phalcon\Assets\Asset.

Covers collection membership: an asset's key, type, HTML attributes, and
filter flag. The file-output pipeline (Phalcon\Assets\Manager::output())
requires the concrete Phalcon\Assets\Asset class.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Assets\Asset`**
    - [`Phalcon\Assets\AssetInterface`](phalcon_assets.md#assetsassetinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsassetsasset-getassetkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAssetKey</span>()</code>
<span class="desc">Gets the asset&#039;s key.</span>
</a>
<a class="api-item" href="#contractsassetsasset-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Gets extra HTML attributes.</span>
</a>
<a class="api-item" href="#contractsassetsasset-getfilter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getFilter</span>()</code>
<span class="desc">Gets if the asset must be filtered or not.</span>
</a>
<a class="api-item" href="#contractsassetsasset-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Gets the asset&#039;s type.</span>
</a>
<a class="api-item" href="#contractsassetsasset-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">Asset</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Sets extra HTML attributes.</span>
</a>
<a class="api-item" href="#contractsassetsasset-setfilter">
<code class="vis vis-public">public</code>
<code class="ret">Asset</code>
<code class="sig"><span class="sf">setFilter</span>( <span class="st">bool</span> <span class="sv">$filter</span> )</code>
<span class="desc">Sets if the asset must be filtered or not.</span>
</a>
<a class="api-item" href="#contractsassetsasset-settype">
<code class="vis vis-public">public</code>
<code class="ret">Asset</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets the asset&#039;s type.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `getAssetKey()` { #contractsassetsasset-getassetkey }

```php
public function getAssetKey(): string;
```

Gets the asset's key.

#### `getAttributes()` { #contractsassetsasset-getattributes }

```php
public function getAttributes(): array|null;
```

Gets extra HTML attributes.

#### `getFilter()` { #contractsassetsasset-getfilter }

```php
public function getFilter(): bool;
```

Gets if the asset must be filtered or not.

#### `getType()` { #contractsassetsasset-gettype }

```php
public function getType(): string;
```

Gets the asset's type.

#### `setAttributes()` { #contractsassetsasset-setattributes }

```php
public function setAttributes( array $attributes ): Asset;
```

Sets extra HTML attributes.

#### `setFilter()` { #contractsassetsasset-setfilter }

```php
public function setFilter( bool $filter ): Asset;
```

Sets if the asset must be filtered or not.

#### `setType()` { #contractsassetsasset-settype }

```php
public function setType( string $type ): Asset;
```

Sets the asset's type.


## Contracts\Assets\AssetsTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Assets/AssetsTypes.php){ .src-btn }

Central registry of the array shapes used across the Assets namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Assets\AssetsTypes`**

</div>

__Uses__ `Phalcon\Assets\AssetInterface` · `Phalcon\Assets\Collection` · `Phalcon\Assets\FilterInterface` · `Phalcon\Assets\Manager`
{ .api-uses }


## Contracts\Assets\Filter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Assets/Filter.php){ .src-btn }

Canonical contract for Phalcon\Assets filters (Cssmin, Jsmin, None, and
custom user filters).

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Assets\Filter`**
    - [`Phalcon\Assets\FilterInterface`](phalcon_assets.md#assetsfilterinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsassetsfilter-filter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Filters the content returning a string with the filtered content</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `filter()` { #contractsassetsfilter-filter }

```php
public function filter( string $content ): string;
```

Filters the content returning a string with the filtered content


## Contracts\Auth\Access\Access

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Access/Access.php){ .src-btn }

Access gates are Specifications: policies that decide whether the current
identity may run the given action. The enforcement point passes the
identity (the guard) and the request context on every call; gates hold no
reference to the auth manager.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Access\Access`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthaccessaccess-getexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExceptActions</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-getonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOnlyActions</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowed</span>(<span class="prm"><span class="st">Guard</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$actionName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Whether the identity behind the guard may run the action.</span>
</a>
<a class="api-item" href="#contractsauthaccessaccess-redirectto">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">redirectTo</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-setexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setExceptActions</span>( <span class="st">array</span> <span class="sv">$exceptActions</span><span class="sm"> = []</span> )</code>
<span class="desc">Exempts the listed action names from the gate; every other action is</span>
</a>
<a class="api-item" href="#contractsauthaccessaccess-setonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOnlyActions</span>( <span class="st">array</span> <span class="sv">$onlyActions</span><span class="sm"> = []</span> )</code>
<span class="desc">Restricts the gate to the listed action names.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getExceptActions()` { #contractsauthaccessaccess-getexceptactions }

```php
public function getExceptActions(): array;
```

#### `getOnlyActions()` { #contractsauthaccessaccess-getonlyactions }

```php
public function getOnlyActions(): array;
```

#### `isAllowed()` { #contractsauthaccessaccess-isallowed }

```php
public function isAllowed(
    Guard $guard,
    string $actionName,
    array $context = []
): bool;
```

Whether the identity behind the guard may run the action.

#### `redirectTo()` { #contractsauthaccessaccess-redirectto }

```php
public function redirectTo(): array|null;
```

#### `setExceptActions()` { #contractsauthaccessaccess-setexceptactions }

```php
public function setExceptActions( array $exceptActions = [] ): void;
```

Exempts the listed action names from the gate; every other action is
checked. See setOnlyActions() for the gate-family divergence note.

#### `setOnlyActions()` { #contractsauthaccessaccess-setonlyactions }

```php
public function setOnlyActions( array $onlyActions = [] ): void;
```

Restricts the gate to the listed action names.

Authoritative semantics: the gate applies only to the listed actions; an
action that is not listed passes without a check (and except() is the
inverse - the gate applies to every action except those listed).

NOTE: the implementations currently diverge. The Acl gate follows the
authoritative semantics above, while the binary gates (Auth, Guest)
treat `only` as a whitelist - an unlisted action is denied even when the
base condition holds. The two gate families will be aligned in the next
major version; until then, choose the gate family deliberately, because
for an unlisted action they return opposite answers to the same call.


## Contracts\Auth\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Adapter/Adapter.php){ .src-btn }

Authentication adapter contract.

Adapters look users up by credentials or by identifier and verify the
password against the stored hash. The credential payload is intentionally
unsealed: any user-row field may be used as the lookup key, plus an
optional `password` entry that is ignored during the row match and
consumed only by validateCredentials().

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Adapter\Adapter`**
    - [`Phalcon\Contracts\Auth\Adapter\RememberAdapter`](#contractsauthadapterrememberadapter)

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapteradapter-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">Build an adapter from a flat options map. Used by ManagerFactory to</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-retrievebycredentials">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveByCredentials</span>( <span class="st">array</span> <span class="sv">$credentials</span> )</code>
<span class="desc">Find a user matching the given credentials (e.g. [&#039;email&#039; =&gt; &#039;a@b&#039;]).</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-retrievebyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveById</span>( <span class="st">int|string</span> <span class="sv">$id</span> )</code>
<span class="desc">Find a user by their unique identifier.</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-validatecredentials">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validateCredentials</span>(<span class="prm"><span class="st">AuthUser</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$credentials</span></span>)</code>
<span class="desc">Validate the provided credentials against the given user.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `fromOptions()` { #contractsauthadapteradapter-fromoptions }

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

Build an adapter from a flat options map. Used by ManagerFactory to
wire adapters from the application config; each implementation is
free to interpret the option keys it cares about.

#### `retrieveByCredentials()` { #contractsauthadapteradapter-retrievebycredentials }

```php
public function retrieveByCredentials( array $credentials ): AuthUser|null;
```

Find a user matching the given credentials (e.g. ['email' => 'a@b']).
The 'password' key, if present, is ignored during the lookup.
Returns null if no user matches.

#### `retrieveById()` { #contractsauthadapteradapter-retrievebyid }

```php
public function retrieveById( int|string $id ): AuthUser|null;
```

Find a user by their unique identifier.

#### `validateCredentials()` { #contractsauthadapteradapter-validatecredentials }

```php
public function validateCredentials(
    AuthUser $user,
    array $credentials
): bool;
```

Validate the provided credentials against the given user.
Implementations typically verify the password hash held under the
'password' key.


## Contracts\Auth\Adapter\AdapterConfig

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Adapter/AdapterConfig.php){ .src-btn }

Authentication adapter configuration contract.

Per-adapter config shape is intentionally adapter-specific (e.g. Stream
exposes getFile(), Memory exposes getUsers()); the only field shared across
all adapters is the optional model class used during user hydration.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Adapter\AdapterConfig`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapteradapterconfig-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getModel</span>()</code>
<span class="desc">Returns the user-model class name to hydrate, if configured.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getModel()` { #contractsauthadapteradapterconfig-getmodel }

```php
public function getModel(): string|null;
```

Returns the user-model class name to hydrate, if configured.


## Contracts\Auth\Adapter\RememberAdapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Adapter/RememberAdapter.php){ .src-btn }

Capability extension implemented by adapters that support remember-me.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Auth\Adapter\Adapter`](#contractsauthadapteradapter)
    - **`Phalcon\Contracts\Auth\Adapter\RememberAdapter`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\RememberToken`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapterrememberadapter-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig"><span class="sf">createRememberToken</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
<span class="desc">Create and persist a new remember token for the user.</span>
</a>
<a class="api-item" href="#contractsauthadapterrememberadapter-retrievebytoken">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveByToken</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$token</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$userAgent</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Retrieve a user by the remember-me cookie payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `createRememberToken()` { #contractsauthadapterrememberadapter-createremembertoken }

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

#### `retrieveByToken()` { #contractsauthadapterrememberadapter-retrievebytoken }

```php
public function retrieveByToken(
    int|string $id,
    string $token,
    string|null $userAgent = null
): AuthUser|null;
```

Retrieve a user by the remember-me cookie payload.


## Contracts\Auth\AuthRemember

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/AuthRemember.php){ .src-btn }

Implemented by authenticatable models that support remember-me tokens.
This is intentionally separate from AuthUser so that adapters which do
not support remember-me are not forced to implement it.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\AuthRemember`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthauthremember-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig"><span class="sf">createRememberToken</span>(<span class="prm"><span class="st">string</span> <span class="sv">$token</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$userAgent</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists a new remember token for the user.</span>
</a>
<a class="api-item" href="#contractsauthauthremember-getremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken|null</code>
<code class="sig"><span class="sf">getRememberToken</span>( <span class="st">string</span> <span class="sv">$token</span> )</code>
<span class="desc">Returns the remember token entry matching the given token value,</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `createRememberToken()` { #contractsauthauthremember-createremembertoken }

```php
public function createRememberToken(
    string $token,
    string|null $userAgent = null
): RememberToken;
```

Persists a new remember token for the user.

#### `getRememberToken()` { #contractsauthauthremember-getremembertoken }

```php
public function getRememberToken( string $token ): RememberToken|null;
```

Returns the remember token entry matching the given token value,
or null if not found.


## Contracts\Auth\AuthTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/AuthTypes.php){ .src-btn }

Central registry of the array shapes used across the Auth namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `auth_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `adapter_config` from clashing with an alias
imported from another namespace into the same file.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\AuthTypes`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Access\Access`
{ .api-uses }


## Contracts\Auth\AuthUser

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/AuthUser.php){ .src-btn }

Implemented by user models that can be authenticated.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\AuthUser`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthauthuser-getauthidentifier">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getAuthIdentifier</span>()</code>
<span class="desc">Returns the unique identifier for the authenticatable user</span>
</a>
<a class="api-item" href="#contractsauthauthuser-getauthpassword">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthPassword</span>()</code>
<span class="desc">Returns the hashed password for the authenticatable user.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getAuthIdentifier()` { #contractsauthauthuser-getauthidentifier }

```php
public function getAuthIdentifier(): int|string;
```

Returns the unique identifier for the authenticatable user
(e.g. the primary key). Implementations MUST return a non-null
scalar; if a record cannot produce one, the implementation should
fail at construction time rather than returning null.

#### `getAuthPassword()` { #contractsauthauthuser-getauthpassword }

```php
public function getAuthPassword(): string;
```

Returns the hashed password for the authenticatable user.


## Contracts\Auth\Guard\BasicAuth

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Guard/BasicAuth.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\BasicAuth`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardbasicauth-basic">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">basic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;email&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Authenticate against HTTP Basic credentials. Returns true on success.</span>
</a>
<a class="api-item" href="#contractsauthguardbasicauth-oncebasic">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|false</code>
<code class="sig"><span class="sf">onceBasic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;email&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Like basic() but does not persist; returns the resolved user on success</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `basic()` { #contractsauthguardbasicauth-basic }

```php
public function basic(
    string $field = "email",
    array $extraConditions = []
): bool;
```

Authenticate against HTTP Basic credentials. Returns true on success.

#### `onceBasic()` { #contractsauthguardbasicauth-oncebasic }

```php
public function onceBasic(
    string $field = "email",
    array $extraConditions = []
): AuthUser|false;
```

Like basic() but does not persist; returns the resolved user on success
or false on failure.


## Contracts\Auth\Guard\Guard

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Guard/Guard.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\Guard`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardguard-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">check</span>()</code>
<span class="desc">Whether the current request is authenticated.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">Build a guard from an adapter, the application container, and a flat</span>
</a>
<a class="api-item" href="#contractsauthguardguard-getlastuserattempted">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">getLastUserAttempted</span>()</code>
<span class="desc">Returns the last user the guard tried to authenticate during this</span>
</a>
<a class="api-item" href="#contractsauthguardguard-guest">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">guest</span>()</code>
<span class="desc">Whether the current request is unauthenticated.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-hasuser">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasUser</span>()</code>
<span class="desc">Whether the guard currently holds a resolved user.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">id</span>()</code>
<span class="desc">Returns the authenticated user&#039;s identifier, or null when no</span>
</a>
<a class="api-item" href="#contractsauthguardguard-setuser">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUser</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
<span class="desc">Sets the current user explicitly. Returns $this for fluent chaining.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
<span class="desc">Returns the resolved user for the current request, or null.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
<span class="desc">Validates the given credentials without logging in.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `check()` { #contractsauthguardguard-check }

```php
public function check(): bool;
```

Whether the current request is authenticated.

#### `fromOptions()` { #contractsauthguardguard-fromoptions }

```php
public static function fromOptions(
    Adapter $adapter,
    mixed $container,
    array $options
): static;
```

Build a guard from an adapter, the application container, and a flat
options map. Used by ManagerFactory to wire guards from the
application config; each implementation resolves the framework
services it needs from the container.

The container is Container-first: pass a Phalcon\Container\Container.
The legacy Phalcon\Di\Di is also supported with provisions - its
service definitions must be pre-registered (no autowiring).

#### `getLastUserAttempted()` { #contractsauthguardguard-getlastuserattempted }

```php
public function getLastUserAttempted(): AuthUser|null;
```

Returns the last user the guard tried to authenticate during this
request, regardless of success.

#### `guest()` { #contractsauthguardguard-guest }

```php
public function guest(): bool;
```

Whether the current request is unauthenticated.

#### `hasUser()` { #contractsauthguardguard-hasuser }

```php
public function hasUser(): bool;
```

Whether the guard currently holds a resolved user.

#### `id()` { #contractsauthguardguard-id }

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier, or null when no
authenticated user is present.

#### `setUser()` { #contractsauthguardguard-setuser }

```php
public function setUser( AuthUser $user ): static;
```

Sets the current user explicitly. Returns $this for fluent chaining.

#### `user()` { #contractsauthguardguard-user }

```php
public function user(): AuthUser|null;
```

Returns the resolved user for the current request, or null.

#### `validate()` { #contractsauthguardguard-validate }

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials without logging in.


## Contracts\Auth\Guard\GuardConfig

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Guard/GuardConfig.php){ .src-btn }

Authentication guard configuration contract.

Per-guard config shape is intentionally guard-specific (e.g. Token exposes
getInputKey()/getStorageKey(); Session has no required config today).
The contract carries no methods of its own - it only marks the type so
AbstractGuard can accept any guard config uniformly.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\GuardConfig`**

</div>


## Contracts\Auth\Guard\GuardStateful

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Guard/GuardStateful.php){ .src-btn }

Implemented by guards backed by persistent state (sessions/cookies).

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\GuardStateful`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\AuthUser`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardguardstateful-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Attempts to authenticate the user with the given credentials and, on</span>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-login">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">login</span>(<span class="prm"><span class="st">AuthUser</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-loginbyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|false</code>
<code class="sig"><span class="sf">loginById</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Logs in the user identified by $id. Returns the resolved user on</span>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">logout</span>()</code>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-viaremember">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">viaRemember</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `attempt()` { #contractsauthguardguardstateful-attempt }

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

Attempts to authenticate the user with the given credentials and, on
success, persists the resulting state on the guard.

#### `login()` { #contractsauthguardguardstateful-login }

```php
public function login(
    AuthUser $user,
    bool $remember = false
): void;
```

#### `loginById()` { #contractsauthguardguardstateful-loginbyid }

```php
public function loginById(
    int|string $id,
    bool $remember = false
): AuthUser|false;
```

Logs in the user identified by $id. Returns the resolved user on
success or false when no user matches the id.

#### `logout()` { #contractsauthguardguardstateful-logout }

```php
public function logout(): void;
```

#### `viaRemember()` { #contractsauthguardguardstateful-viaremember }

```php
public function viaRemember(): bool;
```


## Contracts\Auth\Manager

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/Manager.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Manager`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthmanager-access">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">access</span>( <span class="st">string</span> <span class="sv">$accessName</span> )</code>
<span class="desc">Activates the named access gate for the current request and returns the</span>
</a>
<a class="api-item" href="#contractsauthmanager-addaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">addAccessList</span>( <span class="st">array</span> <span class="sv">$accessList</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-addguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">addGuard</span>(<span class="prm"><span class="st">string</span> <span class="sv">$nameGuard</span>,</span><span class="prm"><span class="st">Guard</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$isDefault</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsauthmanager-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsauthmanager-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">check</span>()</code>
<span class="desc">Whether the default guard reports the current request as authenticated.</span>
</a>
<a class="api-item" href="#contractsauthmanager-except">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">except</span>( <span class="st">string</span> <span class="sv">$actions</span> )</code>
<span class="desc">Restricts the active access gate to skip the listed action names.</span>
</a>
<a class="api-item" href="#contractsauthmanager-getaccess">
<code class="vis vis-public">public</code>
<code class="ret">Access|null</code>
<code class="sig"><span class="sf">getAccess</span>()</code>
<span class="desc">Returns the active access gate, or null when none has been activated -</span>
</a>
<a class="api-item" href="#contractsauthmanager-getaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAccessList</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">Guard|null</code>
<code class="sig"><span class="sf">getDefaultGuard</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getguards">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getGuards</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-guard">
<code class="vis vis-public">public</code>
<code class="ret">Guard</code>
<code class="sig"><span class="sf">guard</span>( <span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the named guard, or the default guard when $name is null.</span>
</a>
<a class="api-item" href="#contractsauthmanager-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">id</span>()</code>
<span class="desc">Returns the authenticated user&#039;s identifier from the default guard,</span>
</a>
<a class="api-item" href="#contractsauthmanager-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">logout</span>()</code>
<span class="desc">Logs the current user out via the default guard.</span>
</a>
<a class="api-item" href="#contractsauthmanager-only">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">only</span>( <span class="st">string</span> <span class="sv">$actions</span> )</code>
<span class="desc">Restricts the active access gate to apply only to the listed action names.</span>
</a>
<a class="api-item" href="#contractsauthmanager-setaccess">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setAccess</span>( <span class="st">Access</span> <span class="sv">$access</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-setdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setDefaultGuard</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
<span class="desc">Returns the resolved user from the default guard, or null.</span>
</a>
<a class="api-item" href="#contractsauthmanager-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
<span class="desc">Validates the given credentials against the default guard without</span>
</a>
</div>

### Methods

<div class="api-group">Public · 18</div>

#### `access()` { #contractsauthmanager-access }

```php
public function access( string $accessName ): self;
```

Activates the named access gate for the current request and returns the
manager for fluent only()/except() configuration.

Enforcement is opt-in and fail-open: when no access has been activated
(getAccess() returns null) every dispatch is allowed. An activated gate
stays active for subsequent dispatches in the same request (forwards,
nested handlers) until it is replaced. Under classic FPM this is scoped
to a single request; long-running runtimes must reset it per request.

#### `addAccessList()` { #contractsauthmanager-addaccesslist }

```php
public function addAccessList( array $accessList ): self;
```

#### `addGuard()` { #contractsauthmanager-addguard }

```php
public function addGuard(
    string $nameGuard,
    Guard $guard,
    bool $isDefault = false
): self;
```

#### `attempt()` { #contractsauthmanager-attempt }

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

#### `check()` { #contractsauthmanager-check }

```php
public function check(): bool;
```

Whether the default guard reports the current request as authenticated.

#### `except()` { #contractsauthmanager-except }

```php
public function except( string $actions ): self;
```

Restricts the active access gate to skip the listed action names.

#### `getAccess()` { #contractsauthmanager-getaccess }

```php
public function getAccess(): Access|null;
```

Returns the active access gate, or null when none has been activated -
in which case listener enforcement is a no-op (see access()).

#### `getAccessList()` { #contractsauthmanager-getaccesslist }

```php
public function getAccessList(): array;
```

#### `getDefaultGuard()` { #contractsauthmanager-getdefaultguard }

```php
public function getDefaultGuard(): Guard|null;
```

#### `getGuards()` { #contractsauthmanager-getguards }

```php
public function getGuards(): array;
```

#### `guard()` { #contractsauthmanager-guard }

```php
public function guard( string|null $name = null ): Guard;
```

Returns the named guard, or the default guard when $name is null.

#### `id()` { #contractsauthmanager-id }

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier from the default guard,
or null when no authenticated user is present.

#### `logout()` { #contractsauthmanager-logout }

```php
public function logout(): void;
```

Logs the current user out via the default guard.

#### `only()` { #contractsauthmanager-only }

```php
public function only( string $actions ): self;
```

Restricts the active access gate to apply only to the listed action names.

#### `setAccess()` { #contractsauthmanager-setaccess }

```php
public function setAccess( Access $access ): self;
```

#### `setDefaultGuard()` { #contractsauthmanager-setdefaultguard }

```php
public function setDefaultGuard( Guard $guard ): self;
```

#### `user()` { #contractsauthmanager-user }

```php
public function user(): AuthUser|null;
```

Returns the resolved user from the default guard, or null.

#### `validate()` { #contractsauthmanager-validate }

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials against the default guard without
logging in.


## Contracts\Auth\RememberToken

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Auth/RememberToken.php){ .src-btn }

A persisted remember-me token row.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\RememberToken`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthremembertoken-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>()</code>
<span class="desc">Deletes the token from storage.</span>
</a>
<a class="api-item" href="#contractsauthremembertoken-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getToken</span>()</code>
<span class="desc">Returns the token value stored for this remember entry.</span>
</a>
<a class="api-item" href="#contractsauthremembertoken-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
<span class="desc">Returns the user agent associated with this token, if any.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `delete()` { #contractsauthremembertoken-delete }

```php
public function delete(): bool;
```

Deletes the token from storage.

#### `getToken()` { #contractsauthremembertoken-gettoken }

```php
public function getToken(): string;
```

Returns the token value stored for this remember entry.

#### `getUserAgent()` { #contractsauthremembertoken-getuseragent }

```php
public function getUserAgent(): string|null;
```

Returns the user agent associated with this token, if any.


## Contracts\Autoload\AutoloadTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Autoload/AutoloadTypes.php){ .src-btn }

Central registry of the array shapes used across the Autoload namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Autoload\AutoloadTypes`**

</div>


## Contracts\Cache\Cache

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Cache/Cache.php){ .src-btn }

Canonical contract for Phalcon\Cache\Cache.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Cache\Cache`**
    - [`Phalcon\Cache\CacheInterface`](phalcon_cache.md#cachecacheinterface)

</div>

__Uses__ `DateInterval` · `Phalcon\Cache\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscachecache-clear">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Wipes clean the entire cache&#039;s keys.</span>
</a>
<a class="api-item" href="#contractscachecache-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Delete an item from the cache by its unique key.</span>
</a>
<a class="api-item" href="#contractscachecache-deletemultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">deleteMultiple</span>( <span class="st">iterable</span> <span class="sv">$keys</span> )</code>
<span class="desc">Deletes multiple cache items in a single operation.</span>
</a>
<a class="api-item" href="#contractscachecache-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Fetches a value from the cache.</span>
</a>
<a class="api-item" href="#contractscachecache-getmultiple">
<code class="vis vis-public">public</code>
<code class="ret">iterable</code>
<code class="sig"><span class="sf">getMultiple</span>(<span class="prm"><span class="st">iterable</span> <span class="sv">$keys</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Obtains multiple cache items by their unique keys.</span>
</a>
<a class="api-item" href="#contractscachecache-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Determines whether an item is present in the cache.</span>
</a>
<a class="api-item" href="#contractscachecache-set">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">DateInterval|int|null</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists data in the cache, uniquely referenced by a key with an optional</span>
</a>
<a class="api-item" href="#contractscachecache-setmultiple">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setMultiple</span>(<span class="prm"><span class="st">iterable</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">DateInterval|int|null</span> <span class="sv">$ttl</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists a set of key =&gt; value pairs in the cache, with an optional TTL.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `clear()` { #contractscachecache-clear }

```php
public function clear(): bool;
```

Wipes clean the entire cache's keys.

#### `delete()` { #contractscachecache-delete }

```php
public function delete( string $key ): bool;
```

Delete an item from the cache by its unique key.

#### `deleteMultiple()` { #contractscachecache-deletemultiple }

```php
public function deleteMultiple( iterable $keys ): bool;
```

Deletes multiple cache items in a single operation.

#### `get()` { #contractscachecache-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

#### `getMultiple()` { #contractscachecache-getmultiple }

```php
public function getMultiple(
    iterable $keys,
    mixed $defaultValue = null
): iterable;
```

Obtains multiple cache items by their unique keys.

#### `has()` { #contractscachecache-has }

```php
public function has( string $key ): bool;
```

Determines whether an item is present in the cache.

#### `set()` { #contractscachecache-set }

```php
public function set(
    string $key,
    mixed $value,
    DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

#### `setMultiple()` { #contractscachecache-setmultiple }

```php
public function setMultiple(
    iterable $values,
    DateInterval|int|null $ttl = null
): bool;
```

Persists a set of key => value pairs in the cache, with an optional TTL.


## Contracts\Cli\CliTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Cli/CliTypes.php){ .src-btn }

Central registry of the array shapes used across the Cli namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Cli\CliTypes`**

</div>

__Uses__ `Phalcon\Cli\Router\Route`
{ .api-uses }


## Contracts\Cli\Dispatcher

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Cli/Dispatcher.php){ .src-btn }

Canonical contract for Phalcon\Cli\Dispatcher.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](#contractsdispatcherdispatcher)
    - **`Phalcon\Contracts\Cli\Dispatcher`**
        - [`Phalcon\Cli\DispatcherInterface`](phalcon_cli.md#clidispatcherinterface)

</div>

__Uses__ `Phalcon\Cli\TaskInterface` · `Phalcon\Contracts\Dispatcher\Dispatcher`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsclidispatcher-getactivetask">
<code class="vis vis-public">public</code>
<code class="ret">TaskInterface|null</code>
<code class="sig"><span class="sf">getActiveTask</span>()</code>
<span class="desc">Returns the active task in the dispatcher</span>
</a>
<a class="api-item" href="#contractsclidispatcher-getlasttask">
<code class="vis vis-public">public</code>
<code class="ret">TaskInterface|null</code>
<code class="sig"><span class="sf">getLastTask</span>()</code>
<span class="desc">Returns the latest dispatched controller</span>
</a>
<a class="api-item" href="#contractsclidispatcher-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
</a>
<a class="api-item" href="#contractsclidispatcher-gettaskname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTaskName</span>()</code>
<span class="desc">Gets last dispatched task name</span>
</a>
<a class="api-item" href="#contractsclidispatcher-gettasksuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTaskSuffix</span>()</code>
<span class="desc">Gets default task suffix</span>
</a>
<a class="api-item" href="#contractsclidispatcher-setdefaulttask">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultTask</span>( <span class="st">string</span> <span class="sv">$taskName</span> )</code>
<span class="desc">Sets the default task name</span>
</a>
<a class="api-item" href="#contractsclidispatcher-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
</a>
<a class="api-item" href="#contractsclidispatcher-settaskname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTaskName</span>( <span class="st">string</span> <span class="sv">$taskName</span> )</code>
<span class="desc">Sets the task name to be dispatched</span>
</a>
<a class="api-item" href="#contractsclidispatcher-settasksuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTaskSuffix</span>( <span class="st">string</span> <span class="sv">$taskSuffix</span> )</code>
<span class="desc">Sets the default task suffix</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `getActiveTask()` { #contractsclidispatcher-getactivetask }

```php
public function getActiveTask(): TaskInterface|null;
```

Returns the active task in the dispatcher

#### `getLastTask()` { #contractsclidispatcher-getlasttask }

```php
public function getLastTask(): TaskInterface|null;
```

Returns the latest dispatched controller

#### `getOptions()` { #contractsclidispatcher-getoptions }

```php
public function getOptions(): array;
```

#### `getTaskName()` { #contractsclidispatcher-gettaskname }

```php
public function getTaskName(): string;
```

Gets last dispatched task name

#### `getTaskSuffix()` { #contractsclidispatcher-gettasksuffix }

```php
public function getTaskSuffix(): string;
```

Gets default task suffix

#### `setDefaultTask()` { #contractsclidispatcher-setdefaulttask }

```php
public function setDefaultTask( string $taskName ): void;
```

Sets the default task name

#### `setOptions()` { #contractsclidispatcher-setoptions }

```php
public function setOptions( array $options ): void;
```

#### `setTaskName()` { #contractsclidispatcher-settaskname }

```php
public function setTaskName( string $taskName ): void;
```

Sets the task name to be dispatched

#### `setTaskSuffix()` { #contractsclidispatcher-settasksuffix }

```php
public function setTaskSuffix( string $taskSuffix ): void;
```

Sets the default task suffix


## Contracts\Config\ConfigTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Config/ConfigTypes.php){ .src-btn }

Central registry of the array shapes used across the Config namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Config\ConfigTypes`**

</div>

__Uses__ `Phalcon\Config\ConfigInterface`
{ .api-uses }


## Contracts\Container\Ioc\IocContainer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Ioc/IocContainer.php){ .src-btn }

[_IocContainer_][] affords obtaining services by name.

- Notes:

    - **This interface does not afford service management.** The container
      will need to obtain services somehow, e.g. from a [Service-Interop][]
      implementation.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Ioc\IocContainer`**
    - [`Phalcon\Contracts\Container\Service\Collection`](#contractscontainerservicecollection)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontaineriocioccontainer-getservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$serviceName</span> )</code>
<span class="desc">Returns an instance of the <code>$serviceName</code>.</span>
</a>
<a class="api-item" href="#contractscontaineriocioccontainer-hasservice">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasService</span>( <span class="st">string</span> <span class="sv">$serviceName</span> )</code>
<span class="desc">Is the container able to return an instance of the <code>$serviceName</code>?</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getService()` { #contractscontaineriocioccontainer-getservice }

```php
public function getService( string $serviceName ): object;
```

Returns an instance of the `$serviceName`.

- Directives:

    - Implementations MUST throw [_IocThrowable_][] if the container
      cannot return an instance of the `$serviceName`.

- Notes:

    - **The logic for this method is expressly unspecified.** Retrieval
      may be accomplished via a service management subsystem, or by some
      other means.

    - **The returned instance may be new or shared.** The retrieval
      logic defines the service lifetime, not the container (per se) and
      not the caller requesting the service.

#### `hasService()` { #contractscontaineriocioccontainer-hasservice }

```php
public function hasService( string $serviceName ): bool;
```

Is the container able to return an instance of the `$serviceName`?

- Notes:

    - **The logic for this method is expressly unspecified.** The ability
      check may be accomplished by querying a service management subsystem,
      or by some other means.


## Contracts\Container\Ioc\IocContainerFactory

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Ioc/IocContainerFactory.php){ .src-btn }

[_IocContainerFactory_][] affords obtaining a new instance of
[_IocContainer_][].

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Ioc\IocContainerFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontaineriocioccontainerfactory-newcontainer">
<code class="vis vis-public">public</code>
<code class="ret">IocContainer</code>
<code class="sig"><span class="sf">newContainer</span>()</code>
<span class="desc">Returns a new instance of [_IocContainer_][].</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `newContainer()` { #contractscontaineriocioccontainerfactory-newcontainer }

```php
public function newContainer(): IocContainer;
```

Returns a new instance of [_IocContainer_][].

- Notes:

    - **Container instantiation logic is not specified.** Implementations
      might use providers, configuration files, attribute or annotation
      collection, or some other means to create and populate a container.
      Implementations might also choose to return a compiled or otherwise
      reconstituted container.


## Contracts\Container\Ioc\IocThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Ioc/IocThrowable.php){ .src-btn }

[_IocThrowable_][] extends [_Throwable_][] to mark an [_Exception_][] as
IOC-related.

It adds no class members.

<div class="api-tree" markdown>

- `\Throwable`
    - **`Phalcon\Contracts\Container\Ioc\IocThrowable`**
        - [`Phalcon\Container\Exceptions\ContainerThrowable`](phalcon_container.md#containerexceptionscontainerthrowable)

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\Container\Ioc\IocTypeAliases

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Ioc/IocTypeAliases.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Ioc\IocTypeAliases`**

</div>


## Contracts\Container\Resolver\ReflectionMethodResolver

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Resolver/ReflectionMethodResolver.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Resolver\ReflectionMethodResolver`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverreflectionmethodresolver-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveMethod</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionMethod</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolveMethod()` { #contractscontainerresolverreflectionmethodresolver-resolvemethod }

```php
public function resolveMethod(
    IocContainer $ioc,
    ReflectionMethod $method,
    object $instance
): void;
```


## Contracts\Container\Resolver\ReflectionParameterResolver

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Resolver/ReflectionParameterResolver.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`**
    - [`Phalcon\Contracts\Container\Resolver\ResolverService`](#contractscontainerresolverresolverservice)

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionParameter`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverreflectionparameterresolver-resolveparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveParameter</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionParameter</span> <span class="sv">$parameter</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolveParameter()` { #contractscontainerresolverreflectionparameterresolver-resolveparameter }

```php
public function resolveParameter(
    IocContainer $ioc,
    ReflectionParameter $parameter
): mixed;
```


## Contracts\Container\Resolver\Resolvable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Resolver/Resolvable.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Resolver\Resolvable`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverresolvable-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">IocContainer</span> <span class="sv">$ioc</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolve()` { #contractscontainerresolverresolvable-resolve }

```php
public function resolve( IocContainer $ioc ): mixed;
```


## Contracts\Container\Resolver\ResolverService

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Resolver/ResolverService.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`](#contractscontainerresolverreflectionparameterresolver)
    - **`Phalcon\Contracts\Container\Resolver\ResolverService`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod` · `ReflectionType`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverresolverservice-isresolvableclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isResolvableClass</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvecall">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveCall</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolveclass">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">resolveClass</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveMethod</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionMethod</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolveparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveParameters</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvetype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveType</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionType</span> <span class="sv">$type</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `isResolvableClass()` { #contractscontainerresolverresolverservice-isresolvableclass }

```php
public function isResolvableClass( string $className ): bool;
```

#### `resolveCall()` { #contractscontainerresolverresolverservice-resolvecall }

```php
public function resolveCall(
    IocContainer $ioc,
    callable $callableObject,
    array $arguments
): mixed;
```

#### `resolveClass()` { #contractscontainerresolverresolverservice-resolveclass }

```php
public function resolveClass(
    IocContainer $ioc,
    string $className,
    array $arguments
): object;
```

#### `resolveMethod()` { #contractscontainerresolverresolverservice-resolvemethod }

```php
public function resolveMethod(
    IocContainer $ioc,
    ReflectionMethod $method,
    object $instance
): void;
```

#### `resolveParameters()` { #contractscontainerresolverresolverservice-resolveparameters }

```php
public function resolveParameters(
    IocContainer $ioc,
    array $parameters,
    array $arguments
): array;
```

#### `resolveType()` { #contractscontainerresolverresolverservice-resolvetype }

```php
public function resolveType(
    IocContainer $ioc,
    ReflectionType $type
): mixed;
```


## Contracts\Container\Resolver\ResolverThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Resolver/ResolverThrowable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Throwable`
    - **`Phalcon\Contracts\Container\Resolver\ResolverThrowable`**

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\Container\Service\Collection

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Service/Collection.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Container\Ioc\IocContainer`](#contractscontaineriocioccontainer)
    - **`Phalcon\Contracts\Container\Service\Collection`**

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Container\Resolver\Resolver` · `Phalcon\Contracts\Container\Ioc\IocContainer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerservicecollection-bind">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">string</span> <span class="sv">$interfaceName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$concrete</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-callableget">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig"><span class="sf">callableGet</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-callablenew">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig"><span class="sf">callableNew</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-extend">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">extend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getalias">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getbytag">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getByTag</span>( <span class="st">string</span> <span class="sv">$tag</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">getDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getresolver">
<code class="vis vis-public">public</code>
<code class="ret">Resolver</code>
<code class="sig"><span class="sf">getResolver</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasalias">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasdefinition">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasinstance">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasparameter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-isautowireenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutowireEnabled</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-new">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">new</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-newdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">newDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setalias">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAlias</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$alias</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setautowire">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAutowire</span>( <span class="st">bool</span> <span class="sv">$enabled</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setdefinition">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefinition</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">ServiceDefinition</span> <span class="sv">$definition</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setinstance">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$lifetime</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setParameter</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetalias">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetdefinition">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetinstance">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetinstances">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetInstances</span>( <span class="st">string</span> <span class="sv">$lifetime</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetparameter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 30</div>

#### `bind()` { #contractscontainerservicecollection-bind }

```php
public function bind(
    string $interfaceName,
    string $concrete
): ServiceDefinition;
```

#### `callableGet()` { #contractscontainerservicecollection-callableget }

```php
public function callableGet( string $name ): Closure;
```

#### `callableNew()` { #contractscontainerservicecollection-callablenew }

```php
public function callableNew( string $name ): Closure;
```

#### `extend()` { #contractscontainerservicecollection-extend }

```php
public function extend(
    string $name,
    callable $callableObject
): void;
```

#### `get()` { #contractscontainerservicecollection-get }

```php
public function get( string $name ): mixed;
```

#### `getAlias()` { #contractscontainerservicecollection-getalias }

```php
public function getAlias( string $name ): string;
```

#### `getByTag()` { #contractscontainerservicecollection-getbytag }

```php
public function getByTag( string $tag ): array;
```

#### `getDefinition()` { #contractscontainerservicecollection-getdefinition }

```php
public function getDefinition( string $name ): ServiceDefinition;
```

#### `getInstance()` { #contractscontainerservicecollection-getinstance }

```php
public function getInstance( string $name ): object;
```

#### `getParameter()` { #contractscontainerservicecollection-getparameter }

```php
public function getParameter( string $name ): mixed;
```

#### `getResolver()` { #contractscontainerservicecollection-getresolver }

```php
public function getResolver(): Resolver;
```

#### `has()` { #contractscontainerservicecollection-has }

```php
public function has( string $name ): bool;
```

#### `hasAlias()` { #contractscontainerservicecollection-hasalias }

```php
public function hasAlias( string $name ): bool;
```

#### `hasDefinition()` { #contractscontainerservicecollection-hasdefinition }

```php
public function hasDefinition( string $name ): bool;
```

#### `hasInstance()` { #contractscontainerservicecollection-hasinstance }

```php
public function hasInstance( string $name ): bool;
```

#### `hasParameter()` { #contractscontainerservicecollection-hasparameter }

```php
public function hasParameter( string $name ): bool;
```

#### `isAutowireEnabled()` { #contractscontainerservicecollection-isautowireenabled }

```php
public function isAutowireEnabled(): bool;
```

#### `new()` { #contractscontainerservicecollection-new }

```php
public function new( string $name ): mixed;
```

#### `newDefinition()` { #contractscontainerservicecollection-newdefinition }

```php
public function newDefinition( string $name ): ServiceDefinition;
```

#### `set()` { #contractscontainerservicecollection-set }

```php
public function set(
    string $name,
    mixed $definition
): ServiceDefinition;
```

#### `setAlias()` { #contractscontainerservicecollection-setalias }

```php
public function setAlias(
    string $name,
    string $alias
): static;
```

#### `setAutowire()` { #contractscontainerservicecollection-setautowire }

```php
public function setAutowire( bool $enabled ): static;
```

#### `setDefinition()` { #contractscontainerservicecollection-setdefinition }

```php
public function setDefinition(
    string $name,
    ServiceDefinition $definition
): static;
```

#### `setInstance()` { #contractscontainerservicecollection-setinstance }

```php
public function setInstance(
    string $name,
    object $instance,
    string $lifetime
): static;
```

#### `setParameter()` { #contractscontainerservicecollection-setparameter }

```php
public function setParameter(
    string $name,
    mixed $value
): static;
```

#### `unsetAlias()` { #contractscontainerservicecollection-unsetalias }

```php
public function unsetAlias( string $name ): void;
```

#### `unsetDefinition()` { #contractscontainerservicecollection-unsetdefinition }

```php
public function unsetDefinition( string $name ): void;
```

#### `unsetInstance()` { #contractscontainerservicecollection-unsetinstance }

```php
public function unsetInstance( string $name ): void;
```

#### `unsetInstances()` { #contractscontainerservicecollection-unsetinstances }

```php
public function unsetInstances( string $lifetime ): void;
```

#### `unsetParameter()` { #contractscontainerservicecollection-unsetparameter }

```php
public function unsetParameter( string $name ): void;
```


## Contracts\Container\Service\Definition

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Service/Definition.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Service\Definition`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerservicedefinition-addextender">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addExtender</span>( <span class="st">callable</span> <span class="sv">$extender</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-buildservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">buildService</span>( <span class="st">IocContainer</span> <span class="sv">$ioc</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getClass</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getextenders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExtenders</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getfactory">
<code class="vis vis-public">public</code>
<code class="ret">callable</code>
<code class="sig"><span class="sf">getFactory</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getlifetime">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLifetime</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getservicename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServiceName</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasClass</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasextenders">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasExtenders</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasfactory">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasFactory</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setClass</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setExtenders</span>( <span class="st">array</span> <span class="sv">$extenders</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFactory</span>( <span class="st">callable</span> <span class="sv">$factory</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setlifetime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setLifetime</span>( <span class="st">string</span> <span class="sv">$lifetime</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetClass</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetExtenders</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetFactory</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `addExtender()` { #contractscontainerservicedefinition-addextender }

```php
public function addExtender( callable $extender ): static;
```

#### `buildService()` { #contractscontainerservicedefinition-buildservice }

```php
public function buildService( IocContainer $ioc ): object;
```

#### `getClass()` { #contractscontainerservicedefinition-getclass }

```php
public function getClass(): string;
```

#### `getExtenders()` { #contractscontainerservicedefinition-getextenders }

```php
public function getExtenders(): array;
```

#### `getFactory()` { #contractscontainerservicedefinition-getfactory }

```php
public function getFactory(): callable;
```

#### `getLifetime()` { #contractscontainerservicedefinition-getlifetime }

```php
public function getLifetime(): string;
```

#### `getServiceName()` { #contractscontainerservicedefinition-getservicename }

```php
public function getServiceName(): string;
```

#### `hasClass()` { #contractscontainerservicedefinition-hasclass }

```php
public function hasClass(): bool;
```

#### `hasExtenders()` { #contractscontainerservicedefinition-hasextenders }

```php
public function hasExtenders(): bool;
```

#### `hasFactory()` { #contractscontainerservicedefinition-hasfactory }

```php
public function hasFactory(): bool;
```

#### `setClass()` { #contractscontainerservicedefinition-setclass }

```php
public function setClass( string $className ): static;
```

#### `setExtenders()` { #contractscontainerservicedefinition-setextenders }

```php
public function setExtenders( array $extenders ): static;
```

#### `setFactory()` { #contractscontainerservicedefinition-setfactory }

```php
public function setFactory( callable $factory ): static;
```

#### `setLifetime()` { #contractscontainerservicedefinition-setlifetime }

```php
public function setLifetime( string $lifetime ): static;
```

#### `unsetClass()` { #contractscontainerservicedefinition-unsetclass }

```php
public function unsetClass(): static;
```

#### `unsetExtenders()` { #contractscontainerservicedefinition-unsetextenders }

```php
public function unsetExtenders(): static;
```

#### `unsetFactory()` { #contractscontainerservicedefinition-unsetfactory }

```php
public function unsetFactory(): static;
```


## Contracts\Container\Service\Enumerable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Service/Enumerable.php){ .src-btn }

Optional capability contract for a container that can report the services it
holds. Callers detect support with `instanceof`.

Deliberately separate from Collection rather than a member of it. Collection
mirrors the service-interop surface, which has no notion of enumeration, and
adding a member to a published interface breaks every implementor. A second,
narrow interface states the capability without touching the first.

Carries no interop attribution because nothing here is copied: enumeration is
Phalcon's own addition.

Tooling that reports on a container type-hints this instead of the concrete
Container, so it depends on a published contract rather than on an
implementation detail that is free to change.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Service\Enumerable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerserviceenumerable-getservicenames">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServiceNames</span>()</code>
<span class="desc">Returns the names of every registered service definition. Names that</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getServiceNames()` { #contractscontainerserviceenumerable-getservicenames }

```php
public function getServiceNames(): array;
```

Returns the names of every registered service definition. Names that
only exist as an alias, a pre-set instance or a parameter are not
included.


## Contracts\Container\Service\Lifetime

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Service/Lifetime.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Service\Lifetime`**

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


## Contracts\Container\Service\Provider

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Service/Provider.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Service\Provider`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerserviceprovider-provide">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">provide</span>( <span class="st">Collection</span> <span class="sv">$services</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `provide()` { #contractscontainerserviceprovider-provide }

```php
public function provide( Collection $services ): void;
```


## Contracts\Container\Service\Throwable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Container/Service/Throwable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Throwable`
    - **`Phalcon\Contracts\Container\Service\Throwable`**

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\Db\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Adapter/Adapter.php){ .src-btn }

Canonical contract for Phalcon\Db adapters.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - addCheck()                : bool
             - createMaterializedView()  : bool
             - dropCheck()               : bool
             - dropMaterializedView()    : bool
             - onConflictUpdate()        : string
             - refreshMaterializedView() : bool
             - returning()               : string

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Adapter\Adapter`**
    - [`Phalcon\Db\Adapter\AdapterInterface`](phalcon_db.md#dbadapteradapterinterface)

</div>

__Uses__ `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Db\ResultInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbadapteradapter-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span></span>)</code>
<span class="desc">Adds a column to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ReferenceInterface</span> <span class="sv">$reference</span></span>)</code>
<span class="desc">Adds a foreign key to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Adds an index to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Adds a primary key to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-affectedrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">affectedRows</span>()</code>
<span class="desc">Returns the number of affected rows by the last INSERT/UPDATE/DELETE</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-begin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">begin</span>( <span class="st">bool</span> <span class="sv">$nesting</span><span class="sm"> = true</span> )</code>
<span class="desc">Starts a transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes active connection returning success. Phalcon automatically closes</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">commit</span>( <span class="st">bool</span> <span class="sv">$nesting</span><span class="sm"> = true</span> )</code>
<span class="desc">Commits the active transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">connect</span>( <span class="st">array</span> <span class="sv">$descriptor</span><span class="sm"> = []</span> )</code>
<span class="desc">This method is automatically called in \Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">createSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Creates a new savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createtable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">createTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Creates a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">createView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Creates a view</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$whereCondition</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$dataTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Deletes data from a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">describeColumns</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an array of Phalcon\Db\Column objects describing a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">describeIndexes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Lists table indexes</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">describeReferences</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$columnName</span></span>)</code>
<span class="desc">Drops a column from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$referenceName</span></span>)</code>
<span class="desc">Drops a foreign key from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$indexName</span></span>)</code>
<span class="desc">Drop an index from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span></span>)</code>
<span class="desc">Drops primary key from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-droptable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Drops a table from a schema/database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Drops a view</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-escapeidentifier">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeIdentifier</span>( <span class="st">array|float|int|string</span> <span class="sv">$identifier</span> )</code>
<span class="desc">Escapes a column/table/schema name</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-escapestring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeString</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escapes a value to avoid SQL injections</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">execute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlStatement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAll</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$fetchMode</span><span class="sm"> = 2</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Dumps the complete result of a query into an array</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fetchColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int|string</span> <span class="sv">$column</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Returns the n&#039;th field of first row in a SQL query result</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array|bool</code>
<code class="sig"><span class="sf">fetchOne</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$fetchMode</span><span class="sm"> = 2</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the first row in a SQL query result</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">forUpdate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnDefinition</span>( <span class="st">ColumnInterface</span> <span class="sv">$column</span> )</code>
<span class="desc">Returns the SQL column definition from a column</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnList</span>( <span class="st">array</span> <span class="sv">$columnList</span> )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getconnectionid">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getConnectionId</span>()</code>
<span class="desc">Gets the active connection unique identifier</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdefaultidvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig"><span class="sf">getDefaultIdValue</span>()</code>
<span class="desc">Return the default identity value to insert in an identity column</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue|null</code>
<code class="sig"><span class="sf">getDefaultValue</span>()</code>
<span class="desc">Returns the default value to make the RBDM use the default value declared</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdescriptor">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDescriptor</span>()</code>
<span class="desc">Return descriptor used to connect to the active database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdialect">
<code class="vis vis-public">public</code>
<code class="ret">DialectInterface</code>
<code class="sig"><span class="sf">getDialect</span>()</code>
<span class="desc">Returns internal dialect instance</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdialecttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDialectType</span>()</code>
<span class="desc">Returns the name of the dialect used</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getinternalhandler">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getInternalHandler</span>()</code>
<span class="desc">Return internal PDO handler</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getnestedtransactionsavepointname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getNestedTransactionSavepointName</span>()</code>
<span class="desc">Returns the savepoint name to use for nested transactions</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getrealsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealSQLStatement</span>()</code>
<span class="desc">Active SQL statement in the object without replace bound parameters</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSQLBindTypes</span>()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSQLStatement</span>()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlvariables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSQLVariables</span>()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns type of database system the adapter is used for</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-insert">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">insert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$fields</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$dataTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Inserts data into a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-insertasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">insertAsDict</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$dataTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Inserts data into a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-isnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isNestedTransactionsWithSavepoints</span>()</code>
<span class="desc">Returns if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-isundertransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUnderTransaction</span>()</code>
<span class="desc">Checks whether connection is under database transaction</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">bool|string</code>
<code class="sig"><span class="sf">lastInsertId</span>( <span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns insert id for the auto_increment column inserted in the last SQL</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">limit</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">array|int</span> <span class="sv">$number</span></span>)</code>
<span class="desc">Appends a LIMIT clause to sqlQuery argument</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-listtables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">listTables</span>( <span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span> )</code>
<span class="desc">List all tables on a database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-listviews">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">listViews</span>( <span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span> )</code>
<span class="desc">List all views on a database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">modifyColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">ColumnInterface|null</span> <span class="sv">$currentColumn</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Modifies a table column based on a definition</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-query">
<code class="vis vis-public">public</code>
<code class="ret">bool|ResultInterface</code>
<code class="sig"><span class="sf">query</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlStatement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">releaseSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Releases given savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">rollback</span>( <span class="st">bool</span> <span class="sv">$nesting</span><span class="sm"> = true</span> )</code>
<span class="desc">Rollbacks the active transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">rollbackSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Rollbacks given savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-setnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">\Phalcon\Db\Adapter\AdapterInterface</code>
<code class="sig"><span class="sf">setNestedTransactionsWithSavepoints</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
<span class="desc">Set if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">sharedLock</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a LOCK IN SHARE MODE clause</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-supportsequences">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportSequences</span>()</code>
<span class="desc">Check whether the database system requires a sequence to produce</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-supportsdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportsDefaultValue</span>()</code>
<span class="desc">SQLite does not support the DEFAULT keyword</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">tableExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">tableOptions</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets creation options from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">update</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$fields</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$whereCondition</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$dataTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Updates data on a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-updateasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">updateAsDict</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$whereCondition</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$dataTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Updates data on a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-useexplicitidvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">useExplicitIdValue</span>()</code>
<span class="desc">Check whether the database system requires an explicit value for identity</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">viewExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Methods

<div class="api-group">Public · 67</div>

#### `addColumn()` { #contractsdbadapteradapter-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): bool;
```

Adds a column to a table

#### `addForeignKey()` { #contractsdbadapteradapter-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

#### `addIndex()` { #contractsdbadapteradapter-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds an index to a table

#### `addPrimaryKey()` { #contractsdbadapteradapter-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds a primary key to a table

#### `affectedRows()` { #contractsdbadapteradapter-affectedrows }

```php
public function affectedRows(): int;
```

Returns the number of affected rows by the last INSERT/UPDATE/DELETE
reported by the database system

#### `begin()` { #contractsdbadapteradapter-begin }

```php
public function begin( bool $nesting = true ): bool;
```

Starts a transaction in the connection

#### `close()` { #contractsdbadapteradapter-close }

```php
public function close(): void;
```

Closes active connection returning success. Phalcon automatically closes
and destroys active connections within Phalcon\Db\Pool

#### `commit()` { #contractsdbadapteradapter-commit }

```php
public function commit( bool $nesting = true ): bool;
```

Commits the active transaction in the connection

#### `connect()` { #contractsdbadapteradapter-connect }

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in \Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection

#### `createSavepoint()` { #contractsdbadapteradapter-createsavepoint }

```php
public function createSavepoint( string $name ): bool;
```

Creates a new savepoint

#### `createTable()` { #contractsdbadapteradapter-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): bool;
```

Creates a table

#### `createView()` { #contractsdbadapteradapter-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): bool;
```

Creates a view

#### `delete()` { #contractsdbadapteradapter-delete }

```php
public function delete(
    array|string $tableName,
    string|null $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
): bool;
```

Deletes data from a table using custom RDBMS SQL syntax

#### `describeColumns()` { #contractsdbadapteradapter-describecolumns }

```php
public function describeColumns(
    string $tableName,
    string|null $schemaName = null
): array;
```

Returns an array of Phalcon\Db\Column objects describing a table

#### `describeIndexes()` { #contractsdbadapteradapter-describeindexes }

```php
public function describeIndexes(
    string $tableName,
    string|null $schemaName = null
): array;
```

Lists table indexes

#### `describeReferences()` { #contractsdbadapteradapter-describereferences }

```php
public function describeReferences(
    string $tableName,
    string|null $schemaName = null
): array;
```

Lists table references

#### `dropColumn()` { #contractsdbadapteradapter-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): bool;
```

Drops a column from a table

#### `dropForeignKey()` { #contractsdbadapteradapter-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): bool;
```

Drops a foreign key from a table

#### `dropIndex()` { #contractsdbadapteradapter-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): bool;
```

Drop an index from a table

#### `dropPrimaryKey()` { #contractsdbadapteradapter-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): bool;
```

Drops primary key from a table

#### `dropTable()` { #contractsdbadapteradapter-droptable }

```php
public function dropTable(
    string $tableName,
    string|null $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a table from a schema/database

#### `dropView()` { #contractsdbadapteradapter-dropview }

```php
public function dropView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a view

#### `escapeIdentifier()` { #contractsdbadapteradapter-escapeidentifier }

```php
public function escapeIdentifier( array|float|int|string $identifier ): string;
```

Escapes a column/table/schema name

#### `escapeString()` { #contractsdbadapteradapter-escapestring }

```php
public function escapeString( string $input ): string;
```

Escapes a value to avoid SQL injections

#### `execute()` { #contractsdbadapteradapter-execute }

```php
public function execute(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
): bool;
```

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server does not
return any rows

#### `fetchAll()` { #contractsdbadapteradapter-fetchall }

```php
public function fetchAll(
    string $sqlQuery,
    int $fetchMode = 2,
    array $bindParams = [],
    array $bindTypes = []
): array;
```

Dumps the complete result of a query into an array

#### `fetchColumn()` { #contractsdbadapteradapter-fetchcolumn }

```php
public function fetchColumn(
    string $sqlQuery,
    array $placeholders = [],
    int|string $column = 0
): mixed;
```

Returns the n'th field of first row in a SQL query result

```php
// Getting count of invoices
$invoicesCount = $connection->fetchColumn("SELECT COUNT(*) FROM co_invoices");
print_r($invoicesCount);

// Getting the title of the last created invoice
$invoice = $connection->fetchColumn(
    "SELECT inv_id, inv_title FROM co_invoices ORDER BY inv_created_at DESC",
    1
);
print_r($invoice);
```

#### `fetchOne()` { #contractsdbadapteradapter-fetchone }

```php
public function fetchOne(
    string $sqlQuery,
    int $fetchMode = 2,
    array $bindParams = [],
    array $bindTypes = []
): array|bool;
```

Returns the first row in a SQL query result

#### `forUpdate()` { #contractsdbadapteradapter-forupdate }

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause

#### `getColumnDefinition()` { #contractsdbadapteradapter-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

#### `getColumnList()` { #contractsdbadapteradapter-getcolumnlist }

```php
public function getColumnList( array $columnList ): string;
```

Gets a list of columns

#### `getConnectionId()` { #contractsdbadapteradapter-getconnectionid }

```php
public function getConnectionId(): int;
```

Gets the active connection unique identifier

#### `getDefaultIdValue()` { #contractsdbadapteradapter-getdefaultidvalue }

```php
public function getDefaultIdValue(): RawValue;
```

Return the default identity value to insert in an identity column

#### `getDefaultValue()` { #contractsdbadapteradapter-getdefaultvalue }

```php
public function getDefaultValue(): RawValue|null;
```

Returns the default value to make the RBDM use the default value declared
in the table definition

```php
// Inserting a new invoice with a valid default value for the column 'inv_total'
$success = $connection->insert(
    "co_invoices",
    [
        "Test Invoice",
        $connection->getDefaultValue()
    ],
    [
        "inv_title",
        "inv_total",
    ]
);
```

#### `getDescriptor()` { #contractsdbadapteradapter-getdescriptor }

```php
public function getDescriptor(): array;
```

Return descriptor used to connect to the active database

#### `getDialect()` { #contractsdbadapteradapter-getdialect }

```php
public function getDialect(): DialectInterface;
```

Returns internal dialect instance

#### `getDialectType()` { #contractsdbadapteradapter-getdialecttype }

```php
public function getDialectType(): string;
```

Returns the name of the dialect used

#### `getInternalHandler()` { #contractsdbadapteradapter-getinternalhandler }

```php
public function getInternalHandler(): mixed;
```

Return internal PDO handler

#### `getNestedTransactionSavepointName()` { #contractsdbadapteradapter-getnestedtransactionsavepointname }

```php
public function getNestedTransactionSavepointName(): string;
```

Returns the savepoint name to use for nested transactions

#### `getRealSQLStatement()` { #contractsdbadapteradapter-getrealsqlstatement }

```php
public function getRealSQLStatement(): string;
```

Active SQL statement in the object without replace bound parameters

#### `getSQLBindTypes()` { #contractsdbadapteradapter-getsqlbindtypes }

```php
public function getSQLBindTypes(): array;
```

Active SQL statement in the object

#### `getSQLStatement()` { #contractsdbadapteradapter-getsqlstatement }

```php
public function getSQLStatement(): string;
```

Active SQL statement in the object

#### `getSQLVariables()` { #contractsdbadapteradapter-getsqlvariables }

```php
public function getSQLVariables(): array;
```

Active SQL statement in the object

#### `getType()` { #contractsdbadapteradapter-gettype }

```php
public function getType(): string;
```

Returns type of database system the adapter is used for

#### `insert()` { #contractsdbadapteradapter-insert }

```php
public function insert(
    string $tableName,
    array $values,
    array|null $fields = null,
    array $dataTypes = []
): bool;
```

Inserts data into a table using custom RDBMS SQL syntax

#### `insertAsDict()` { #contractsdbadapteradapter-insertasdict }

```php
public function insertAsDict(
    string $tableName,
    array $data,
    array $dataTypes = []
): bool;
```

Inserts data into a table using custom RBDM SQL syntax

```php
// Inserting a new invoice
$success = $connection->insertAsDict(
    "co_invoices",
    [
        "inv_title" => "Test Invoice",
        "inv_total" => 100,
    ]
);

// Next SQL sentence is sent to the database system
INSERT INTO `co_invoices` (`inv_title`, `inv_total`) VALUES ("Test Invoice", 100);
```

#### `isNestedTransactionsWithSavepoints()` { #contractsdbadapteradapter-isnestedtransactionswithsavepoints }

```php
public function isNestedTransactionsWithSavepoints(): bool;
```

Returns if nested transactions should use savepoints

#### `isUnderTransaction()` { #contractsdbadapteradapter-isundertransaction }

```php
public function isUnderTransaction(): bool;
```

Checks whether connection is under database transaction

#### `lastInsertId()` { #contractsdbadapteradapter-lastinsertid }

```php
public function lastInsertId( string|null $name = null ): bool|string;
```

Returns insert id for the auto_increment column inserted in the last SQL
statement

#### `limit()` { #contractsdbadapteradapter-limit }

```php
public function limit(
    string $sqlQuery,
    array|int $number
): string;
```

Appends a LIMIT clause to sqlQuery argument

#### `listTables()` { #contractsdbadapteradapter-listtables }

```php
public function listTables( string|null $schemaName = null ): array;
```

List all tables on a database

#### `listViews()` { #contractsdbadapteradapter-listviews }

```php
public function listViews( string|null $schemaName = null ): array;
```

List all views on a database

#### `modifyColumn()` { #contractsdbadapteradapter-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): bool;
```

Modifies a table column based on a definition

#### `query()` { #contractsdbadapteradapter-query }

```php
public function query(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
): bool|ResultInterface;
```

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server returns
rows

#### `releaseSavepoint()` { #contractsdbadapteradapter-releasesavepoint }

```php
public function releaseSavepoint( string $name ): bool;
```

Releases given savepoint

#### `rollback()` { #contractsdbadapteradapter-rollback }

```php
public function rollback( bool $nesting = true ): bool;
```

Rollbacks the active transaction in the connection

#### `rollbackSavepoint()` { #contractsdbadapteradapter-rollbacksavepoint }

```php
public function rollbackSavepoint( string $name ): bool;
```

Rollbacks given savepoint

#### `setNestedTransactionsWithSavepoints()` { #contractsdbadapteradapter-setnestedtransactionswithsavepoints }

```php
public function setNestedTransactionsWithSavepoints( bool $flag ): \Phalcon\Db\Adapter\AdapterInterface;
```

Set if nested transactions should use savepoints

#### `sharedLock()` { #contractsdbadapteradapter-sharedlock }

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a LOCK IN SHARE MODE clause

#### `supportSequences()` { #contractsdbadapteradapter-supportsequences }

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

#### `supportsDefaultValue()` { #contractsdbadapteradapter-supportsdefaultvalue }

```php
public function supportsDefaultValue(): bool;
```

SQLite does not support the DEFAULT keyword

#### `tableExists()` { #contractsdbadapteradapter-tableexists }

```php
public function tableExists(
    string $tableName,
    string|null $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.table

#### `tableOptions()` { #contractsdbadapteradapter-tableoptions }

```php
public function tableOptions(
    string $tableName,
    string|null $schemaName = null
): array;
```

Gets creation options from a table

#### `update()` { #contractsdbadapteradapter-update }

```php
public function update(
    string $tableName,
    array $fields,
    array $values,
    array|string $whereCondition = [],
    array $dataTypes = []
): bool;
```

Updates data on a table using custom RDBMS SQL syntax

#### `updateAsDict()` { #contractsdbadapteradapter-updateasdict }

```php
public function updateAsDict(
    string $tableName,
    array $data,
    array|string $whereCondition = [],
    array $dataTypes = []
): bool;
```

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
// Updating existing invoice
$success = $connection->updateAsDict(
    "co_invoices",
    [
        "inv_title" => "New Test Invoice",
    ],
    "inv_id = 101"
);

// Next SQL sentence is sent to the database system
UPDATE `co_invoices` SET `inv_title` = "New Test Invoice" WHERE inv_id = 101
```

#### `useExplicitIdValue()` { #contractsdbadapteradapter-useexplicitidvalue }

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

#### `viewExists()` { #contractsdbadapteradapter-viewexists }

```php
public function viewExists(
    string $viewName,
    string|null $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.view


## Contracts\Db\Check

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Check.php){ .src-btn }

Canonical contract for Phalcon\Db\Check.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Check`**
    - [`Phalcon\Db\CheckInterface`](phalcon_db.md#dbcheckinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbcheck-getexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExpression</span>()</code>
<span class="desc">Gets the CHECK expression (the SQL boolean predicate).</span>
</a>
<a class="api-item" href="#contractsdbcheck-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Gets the constraint name. An empty string indicates an unnamed CHECK</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getExpression()` { #contractsdbcheck-getexpression }

```php
public function getExpression(): string;
```

Gets the CHECK expression (the SQL boolean predicate).

#### `getName()` { #contractsdbcheck-getname }

```php
public function getName(): string;
```

Gets the constraint name. An empty string indicates an unnamed CHECK
constraint - the dialect will emit the clause without a `CONSTRAINT`
prefix in that case.


## Contracts\Db\Column

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Column.php){ .src-btn }

Canonical contract for Phalcon\Db\Column.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getGenerationExpression() : string | null
             - isArray()                 : bool
             - isGenerated()             : bool
             - isGenerationStored()      : bool
             - isInvisible()             : bool

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Column`**
    - [`Phalcon\Db\ColumnInterface`](phalcon_db.md#dbcolumninterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbcolumn-getafterposition">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getAfterPosition</span>()</code>
<span class="desc">Check whether field absolute to position in table</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getbindtype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getBindType</span>()</code>
<span class="desc">Returns the type of bind handling</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getDefault</span>()</code>
<span class="desc">Returns default value of column</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns column name</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getscale">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getScale</span>()</code>
<span class="desc">Returns column scale</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Returns column size</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns column type</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettypereference">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTypeReference</span>()</code>
<span class="desc">Returns column type reference</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettypevalues">
<code class="vis vis-public">public</code>
<code class="ret">array|int|string</code>
<code class="sig"><span class="sf">getTypeValues</span>()</code>
<span class="desc">Returns column type values</span>
</a>
<a class="api-item" href="#contractsdbcolumn-hasdefault">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasDefault</span>()</code>
<span class="desc">Check whether column has default value</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isautoincrement">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutoIncrement</span>()</code>
<span class="desc">Auto-Increment</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isfirst">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isFirst</span>()</code>
<span class="desc">Check whether the column is the first in table</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isnotnull">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isNotNull</span>()</code>
<span class="desc">Not null</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isnumeric">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isNumeric</span>()</code>
<span class="desc">Check whether column have a numeric type</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isprimary">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPrimary</span>()</code>
<span class="desc">Column is part of the primary key?</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isunsigned">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUnsigned</span>()</code>
<span class="desc">Returns true if number column is unsigned</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `getAfterPosition()` { #contractsdbcolumn-getafterposition }

```php
public function getAfterPosition(): string|null;
```

Check whether field absolute to position in table

#### `getBindType()` { #contractsdbcolumn-getbindtype }

```php
public function getBindType(): int;
```

Returns the type of bind handling

#### `getDefault()` { #contractsdbcolumn-getdefault }

```php
public function getDefault(): mixed;
```

Returns default value of column

#### `getName()` { #contractsdbcolumn-getname }

```php
public function getName(): string;
```

Returns column name

#### `getScale()` { #contractsdbcolumn-getscale }

```php
public function getScale(): int;
```

Returns column scale

#### `getSize()` { #contractsdbcolumn-getsize }

```php
public function getSize(): int|string;
```

Returns column size

#### `getType()` { #contractsdbcolumn-gettype }

```php
public function getType(): int|string;
```

Returns column type

#### `getTypeReference()` { #contractsdbcolumn-gettypereference }

```php
public function getTypeReference(): int;
```

Returns column type reference

#### `getTypeValues()` { #contractsdbcolumn-gettypevalues }

```php
public function getTypeValues(): array|int|string;
```

Returns column type values

#### `hasDefault()` { #contractsdbcolumn-hasdefault }

```php
public function hasDefault(): bool;
```

Check whether column has default value

#### `isAutoIncrement()` { #contractsdbcolumn-isautoincrement }

```php
public function isAutoIncrement(): bool;
```

Auto-Increment

#### `isFirst()` { #contractsdbcolumn-isfirst }

```php
public function isFirst(): bool;
```

Check whether the column is the first in table

#### `isNotNull()` { #contractsdbcolumn-isnotnull }

```php
public function isNotNull(): bool;
```

Not null

#### `isNumeric()` { #contractsdbcolumn-isnumeric }

```php
public function isNumeric(): bool;
```

Check whether column have a numeric type

#### `isPrimary()` { #contractsdbcolumn-isprimary }

```php
public function isPrimary(): bool;
```

Column is part of the primary key?

#### `isUnsigned()` { #contractsdbcolumn-isunsigned }

```php
public function isUnsigned(): bool;
```

Returns true if number column is unsigned


## Contracts\Db\Dialect

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Dialect.php){ .src-btn }

Canonical contract for Phalcon\Db dialects.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - addCheck()                : string
             - createMaterializedView()  : string
             - dropCheck()               : string
             - dropMaterializedView()    : string
             - onConflictUpdate()        : string
             - refreshMaterializedView() : string
             - returning()               : string

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Dialect`**
    - [`Phalcon\Db\DialectInterface`](phalcon_db.md#dbdialectinterface)

</div>

__Uses__ `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbdialect-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span></span>)</code>
<span class="desc">Generates SQL to add a column to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ReferenceInterface</span> <span class="sv">$reference</span></span>)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Generates SQL to add the primary key to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">createSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Generate SQL to create a new savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-createtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">createTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Generates SQL to create a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-createview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">createView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to create a view</span>
</a>
<a class="api-item" href="#contractsdbdialect-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">describeColumns</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to describe a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">describeIndexes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to query indexes on a table.</span>
</a>
<a class="api-item" href="#contractsdbdialect-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">describeReferences</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to query foreign keys on a table.</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$columnName</span></span>)</code>
<span class="desc">Generates SQL to delete a column from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$referenceName</span></span>)</code>
<span class="desc">Generates SQL to delete a foreign key from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$indexName</span></span>)</code>
<span class="desc">Generates SQL to delete an index from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span></span>)</code>
<span class="desc">Generates SQL to delete primary key from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-droptable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Generates SQL to drop a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Generates SQL to drop a view</span>
</a>
<a class="api-item" href="#contractsdbdialect-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">forUpdate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnDefinition</span>( <span class="st">ColumnInterface</span> <span class="sv">$column</span> )</code>
<span class="desc">Gets the column name in RDBMS</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnList</span>( <span class="st">array</span> <span class="sv">$columnList</span> )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcustomfunctions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCustomFunctions</span>()</code>
<span class="desc">Returns registered functions</span>
</a>
<a class="api-item" href="#contractsdbdialect-getsqlexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSqlExpression</span>(<span class="prm"><span class="st">array</span> <span class="sv">$expression</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$escapeChar</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindCounts</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Transforms an intermediate representation for an expression into a</span>
</a>
<a class="api-item" href="#contractsdbdialect-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">limit</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">array|int</span> <span class="sv">$number</span></span>)</code>
<span class="desc">Generates the SQL for LIMIT clause</span>
</a>
<a class="api-item" href="#contractsdbdialect-listtables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">listTables</span>( <span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span> )</code>
<span class="desc">List all tables in database</span>
</a>
<a class="api-item" href="#contractsdbdialect-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">modifyColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">ColumnInterface|null</span> <span class="sv">$currentColumn</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to modify a column in a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-registercustomfunction">
<code class="vis vis-public">public</code>
<code class="ret">DbDialect</code>
<code class="sig"><span class="sf">registerCustomFunction</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$customFunction</span></span>)</code>
<span class="desc">Registers custom SQL functions</span>
</a>
<a class="api-item" href="#contractsdbdialect-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">releaseSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Generate SQL to release a savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">rollbackSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Generate SQL to rollback a savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">select</span>( <span class="st">array</span> <span class="sv">$definition</span> )</code>
<span class="desc">Builds a SELECT statement</span>
</a>
<a class="api-item" href="#contractsdbdialect-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">sharedLock</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a LOCK IN SHARE MODE clause</span>
</a>
<a class="api-item" href="#contractsdbdialect-supportsreleasesavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportsReleaseSavepoints</span>()</code>
<span class="desc">Checks whether the platform supports releasing savepoints.</span>
</a>
<a class="api-item" href="#contractsdbdialect-supportssavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportsSavepoints</span>()</code>
<span class="desc">Checks whether the platform supports savepoints</span>
</a>
<a class="api-item" href="#contractsdbdialect-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tableExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#contractsdbdialect-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tableOptions</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates the SQL to describe the table creation options</span>
</a>
<a class="api-item" href="#contractsdbdialect-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">viewExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">LOCK_NONE</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">No row-lock modifier - the default behavior for <code>forUpdate()</code>.</span>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">LOCK_NOWAIT</span><span class="sm"> = &quot;NOWAIT&quot;</span></code>
<span class="desc">Append <code>NOWAIT</code> to the <code>FOR UPDATE</code> clause.</span>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">LOCK_SKIP_LOCKED</span><span class="sm"> = &quot;SKIP LOCKED&quot;</span></code>
<span class="desc">Append <code>SKIP LOCKED</code> to the <code>FOR UPDATE</code> clause.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 34</div>

#### `addColumn()` { #contractsdbdialect-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

#### `addForeignKey()` { #contractsdbdialect-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

#### `addIndex()` { #contractsdbdialect-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

#### `addPrimaryKey()` { #contractsdbdialect-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

#### `createSavepoint()` { #contractsdbdialect-createsavepoint }

```php
public function createSavepoint( string $name ): string;
```

Generate SQL to create a new savepoint

#### `createTable()` { #contractsdbdialect-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

#### `createView()` { #contractsdbdialect-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): string;
```

Generates SQL to create a view

#### `describeColumns()` { #contractsdbdialect-describecolumns }

```php
public function describeColumns(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL to describe a table

#### `describeIndexes()` { #contractsdbdialect-describeindexes }

```php
public function describeIndexes(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL to query indexes on a table.

The base adapter consumes the result as `FETCH_NUM` rows by position:
column index 2 must be the index key name and column index 4 the indexed
column name.

#### `describeReferences()` { #contractsdbdialect-describereferences }

```php
public function describeReferences(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL to query foreign keys on a table.

The base adapter consumes the result as `FETCH_NUM` rows by position:
index 1 the local column, index 2 the constraint name, index 3 the
referenced schema, index 4 the referenced table, and index 5 the
referenced column.

#### `dropColumn()` { #contractsdbdialect-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

#### `dropForeignKey()` { #contractsdbdialect-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

#### `dropIndex()` { #contractsdbdialect-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

#### `dropPrimaryKey()` { #contractsdbdialect-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

#### `dropTable()` { #contractsdbdialect-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

#### `dropView()` { #contractsdbdialect-dropview }

```php
public function dropView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

#### `forUpdate()` { #contractsdbdialect-forupdate }

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause

#### `getColumnDefinition()` { #contractsdbdialect-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in RDBMS

#### `getColumnList()` { #contractsdbdialect-getcolumnlist }

```php
public function getColumnList( array $columnList ): string;
```

Gets a list of columns

#### `getCustomFunctions()` { #contractsdbdialect-getcustomfunctions }

```php
public function getCustomFunctions(): array;
```

Returns registered functions

#### `getSqlExpression()` { #contractsdbdialect-getsqlexpression }

```php
public function getSqlExpression(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a
database system valid expression

#### `limit()` { #contractsdbdialect-limit }

```php
public function limit(
    string $sqlQuery,
    array|int $number
): string;
```

Generates the SQL for LIMIT clause

#### `listTables()` { #contractsdbdialect-listtables }

```php
public function listTables( string|null $schemaName = null ): string;
```

List all tables in database

#### `modifyColumn()` { #contractsdbdialect-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

#### `registerCustomFunction()` { #contractsdbdialect-registercustomfunction }

```php
public function registerCustomFunction(
    string $name,
    callable $customFunction
): DbDialect;
```

Registers custom SQL functions

#### `releaseSavepoint()` { #contractsdbdialect-releasesavepoint }

```php
public function releaseSavepoint( string $name ): string;
```

Generate SQL to release a savepoint

#### `rollbackSavepoint()` { #contractsdbdialect-rollbacksavepoint }

```php
public function rollbackSavepoint( string $name ): string;
```

Generate SQL to rollback a savepoint

#### `select()` { #contractsdbdialect-select }

```php
public function select( array $definition ): string;
```

Builds a SELECT statement

#### `sharedLock()` { #contractsdbdialect-sharedlock }

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a LOCK IN SHARE MODE clause

#### `supportsReleaseSavepoints()` { #contractsdbdialect-supportsreleasesavepoints }

```php
public function supportsReleaseSavepoints(): bool;
```

Checks whether the platform supports releasing savepoints.

#### `supportsSavepoints()` { #contractsdbdialect-supportssavepoints }

```php
public function supportsSavepoints(): bool;
```

Checks whether the platform supports savepoints

#### `tableExists()` { #contractsdbdialect-tableexists }

```php
public function tableExists(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

#### `tableOptions()` { #contractsdbdialect-tableoptions }

```php
public function tableOptions(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates the SQL to describe the table creation options

#### `viewExists()` { #contractsdbdialect-viewexists }

```php
public function viewExists(
    string $viewName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view


## Contracts\Db\Geometry\Geometry

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Geometry/Geometry.php){ .src-btn }

Canonical contract for Phalcon\Db\Geometry value objects.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Geometry\Geometry`**
    - [`Phalcon\Db\Geometry\GeometryInterface`](phalcon_db.md#dbgeometrygeometryinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbgeometrygeometry-getsrid">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getSrid</span>()</code>
<span class="desc">Gets the Spatial Reference System Identifier (SRID).</span>
</a>
<a class="api-item" href="#contractsdbgeometrygeometry-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Gets the geometry type.</span>
</a>
<a class="api-item" href="#contractsdbgeometrygeometry-towkt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toWkt</span>()</code>
<span class="desc">Renders the geometry as a Well-Known Text (WKT) string.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `getSrid()` { #contractsdbgeometrygeometry-getsrid }

```php
public function getSrid(): int;
```

Gets the Spatial Reference System Identifier (SRID).

#### `getType()` { #contractsdbgeometrygeometry-gettype }

```php
public function getType(): int;
```

Gets the geometry type.

#### `toWkt()` { #contractsdbgeometrygeometry-towkt }

```php
public function toWkt(): string;
```

Renders the geometry as a Well-Known Text (WKT) string.


## Contracts\Db\Index

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Index.php){ .src-btn }

Canonical contract for Phalcon\Db\Index.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getDirections() : array
             - getWhere()      : string
             - isConcurrent()  : bool
             - isInvisible()   : bool

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Index`**
    - [`Phalcon\Db\IndexInterface`](phalcon_db.md#dbindexinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbindex-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getColumns</span>()</code>
<span class="desc">Gets the columns that corresponds the index</span>
</a>
<a class="api-item" href="#contractsdbindex-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Gets the index name</span>
</a>
<a class="api-item" href="#contractsdbindex-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Gets the index type</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `getColumns()` { #contractsdbindex-getcolumns }

```php
public function getColumns(): array;
```

Gets the columns that corresponds the index

#### `getName()` { #contractsdbindex-getname }

```php
public function getName(): string;
```

Gets the index name

#### `getType()` { #contractsdbindex-gettype }

```php
public function getType(): string;
```

Gets the index type


## Contracts\Db\Reference

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Reference.php){ .src-btn }

Interface for Phalcon\Db\Reference

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Reference`**
    - [`Phalcon\Db\ReferenceInterface`](phalcon_db.md#dbreferenceinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbreference-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getColumns</span>()</code>
<span class="desc">Gets local columns which reference is based</span>
</a>
<a class="api-item" href="#contractsdbreference-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Gets the index name</span>
</a>
<a class="api-item" href="#contractsdbreference-getondelete">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getOnDelete</span>()</code>
<span class="desc">Gets the referenced on delete</span>
</a>
<a class="api-item" href="#contractsdbreference-getonupdate">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getOnUpdate</span>()</code>
<span class="desc">Gets the referenced on update</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getReferencedColumns</span>()</code>
<span class="desc">Gets referenced columns</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getReferencedSchema</span>()</code>
<span class="desc">Gets the schema where referenced table is</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getReferencedTable</span>()</code>
<span class="desc">Gets the referenced table</span>
</a>
<a class="api-item" href="#contractsdbreference-getschemaname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getSchemaName</span>()</code>
<span class="desc">Gets the schema where referenced table is</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `getColumns()` { #contractsdbreference-getcolumns }

```php
public function getColumns(): array;
```

Gets local columns which reference is based

#### `getName()` { #contractsdbreference-getname }

```php
public function getName(): string;
```

Gets the index name

#### `getOnDelete()` { #contractsdbreference-getondelete }

```php
public function getOnDelete(): string|null;
```

Gets the referenced on delete

#### `getOnUpdate()` { #contractsdbreference-getonupdate }

```php
public function getOnUpdate(): string|null;
```

Gets the referenced on update

#### `getReferencedColumns()` { #contractsdbreference-getreferencedcolumns }

```php
public function getReferencedColumns(): array;
```

Gets referenced columns

#### `getReferencedSchema()` { #contractsdbreference-getreferencedschema }

```php
public function getReferencedSchema(): string|null;
```

Gets the schema where referenced table is

#### `getReferencedTable()` { #contractsdbreference-getreferencedtable }

```php
public function getReferencedTable(): string;
```

Gets the referenced table

#### `getSchemaName()` { #contractsdbreference-getschemaname }

```php
public function getSchemaName(): string|null;
```

Gets the schema where referenced table is


## Contracts\Db\Result

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Db/Result.php){ .src-btn }

Canonical contract for Phalcon\Db result objects.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Result`**
    - [`Phalcon\Db\ResultInterface`](phalcon_db.md#dbresultinterface)

</div>

__Uses__ `PDOStatement`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbresult-dataseek">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">dataSeek</span>( <span class="st">int</span> <span class="sv">$number</span> )</code>
<span class="desc">Moves internal resultset cursor to another position letting us to fetch a</span>
</a>
<a class="api-item" href="#contractsdbresult-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">execute</span>()</code>
<span class="desc">Allows to execute the statement again. Some database systems don&#039;t</span>
</a>
<a class="api-item" href="#contractsdbresult-fetch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fetch</span>()</code>
<span class="desc">Fetches an array/object of strings that corresponds to the fetched row,</span>
</a>
<a class="api-item" href="#contractsdbresult-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAll</span>()</code>
<span class="desc">Returns an array of arrays containing all the records in the result. This</span>
</a>
<a class="api-item" href="#contractsdbresult-fetcharray">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fetchArray</span>()</code>
<span class="desc">Returns an array of strings that corresponds to the fetched row, or FALSE</span>
</a>
<a class="api-item" href="#contractsdbresult-getinternalresult">
<code class="vis vis-public">public</code>
<code class="ret">PDOStatement</code>
<code class="sig"><span class="sf">getInternalResult</span>()</code>
<span class="desc">Gets the internal PDO result object</span>
</a>
<a class="api-item" href="#contractsdbresult-numrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">numRows</span>()</code>
<span class="desc">Gets number of rows returned by a resultset</span>
</a>
<a class="api-item" href="#contractsdbresult-setfetchmode">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setFetchMode</span>( <span class="st">int</span> <span class="sv">$fetchMode</span> )</code>
<span class="desc">Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `dataSeek()` { #contractsdbresult-dataseek }

```php
public function dataSeek( int $number );
```

Moves internal resultset cursor to another position letting us to fetch a
certain row

#### `execute()` { #contractsdbresult-execute }

```php
public function execute(): bool;
```

Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

#### `fetch()` { #contractsdbresult-fetch }

```php
public function fetch(): mixed;
```

Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

#### `fetchAll()` { #contractsdbresult-fetchall }

```php
public function fetchAll(): array;
```

Returns an array of arrays containing all the records in the result. This
method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`

#### `fetchArray()` { #contractsdbresult-fetcharray }

```php
public function fetchArray(): mixed;
```

Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

#### `getInternalResult()` { #contractsdbresult-getinternalresult }

```php
public function getInternalResult(): PDOStatement;
```

Gets the internal PDO result object

#### `numRows()` { #contractsdbresult-numrows }

```php
public function numRows(): int;
```

Gets number of rows returned by a resultset

#### `setFetchMode()` { #contractsdbresult-setfetchmode }

```php
public function setFetchMode( int $fetchMode ): bool;
```

Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()


## Contracts\Dispatcher\Dispatcher

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Dispatcher/Dispatcher.php){ .src-btn }

Canonical contract for Phalcon\Dispatcher\AbstractDispatcher.

Note: The deprecated `getParam()`/`getParams()`/`hasParam()`/`setParam()`/
`setParams()` spellings are still declared for backwards compatibility and
are scheduled to be removed in the next major version in favor of their
`*Parameter` counterparts.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Dispatcher\Dispatcher`**
    - [`Phalcon\Contracts\Cli\Dispatcher`](#contractsclidispatcher)
    - [`Phalcon\Contracts\Mvc\Dispatcher`](#contractsmvcdispatcher)
    - [`Phalcon\Dispatcher\DispatcherInterface`](phalcon_dispatcher.md#dispatcherdispatcherinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdispatcherdispatcher-dispatch">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">dispatch</span>()</code>
<span class="desc">Dispatches a handle action taking into account the routing parameters</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-forward">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">forward</span>( <span class="st">array</span> <span class="sv">$forward</span> )</code>
<span class="desc">Forwards the execution flow to another controller/action</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionName</span>()</code>
<span class="desc">Gets last dispatched action name</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionSuffix</span>()</code>
<span class="desc">Gets the default action suffix</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-gethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHandlerSuffix</span>()</code>
<span class="desc">Gets the default handler suffix</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getparam">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParam</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParameters</span>()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParams</span>()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-getreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getReturnedValue</span>()</code>
<span class="desc">Returns value returned by the latest dispatched action</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-hasparam">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParam</span>( <span class="st">mixed</span> <span class="sv">$param</span> )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-isfinished">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isFinished</span>()</code>
<span class="desc">Checks if the dispatch loop is finished or has more pendent</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setactionname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setActionName</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the action name to be dispatched</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setActionSuffix</span>( <span class="st">string</span> <span class="sv">$actionSuffix</span> )</code>
<span class="desc">Sets the default action suffix</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultAction</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultNamespace</span>( <span class="st">string</span> <span class="sv">$defaultNamespace</span> )</code>
<span class="desc">Sets the default namespace</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-sethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHandlerSuffix</span>( <span class="st">string</span> <span class="sv">$handlerSuffix</span> )</code>
<span class="desc">Sets the default suffix for the handler</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setmodulename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setModuleName</span>( <span class="st">string|null</span> <span class="sv">$moduleName</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the module name which the application belongs to</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setNamespaceName</span>( <span class="st">string</span> <span class="sv">$namespaceName</span> )</code>
<span class="desc">Sets the namespace which the controller belongs to</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setparam">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParam</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#contractsdispatcherdispatcher-setparams">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParams</span>( <span class="st">array</span> <span class="sv">$params</span> )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
</div>

### Methods

<div class="api-group">Public · 21</div>

#### `dispatch()` { #contractsdispatcherdispatcher-dispatch }

```php
public function dispatch();
```

Dispatches a handle action taking into account the routing parameters

#### `forward()` { #contractsdispatcherdispatcher-forward }

```php
public function forward( array $forward ): void;
```

Forwards the execution flow to another controller/action

#### `getActionName()` { #contractsdispatcherdispatcher-getactionname }

```php
public function getActionName(): string;
```

Gets last dispatched action name

#### `getActionSuffix()` { #contractsdispatcherdispatcher-getactionsuffix }

```php
public function getActionSuffix(): string;
```

Gets the default action suffix

#### `getHandlerSuffix()` { #contractsdispatcherdispatcher-gethandlersuffix }

```php
public function getHandlerSuffix(): string;
```

Gets the default handler suffix

#### `getParam()` { #contractsdispatcherdispatcher-getparam }

```php
public function getParam(
    mixed $param,
    mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

Note: This signature omits the `$defaultValue` argument the
implementation accepts; the two will be aligned in the next major
version.

#### `getParameter()` { #contractsdispatcherdispatcher-getparameter }

```php
public function getParameter(
    mixed $param,
    mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

#### `getParameters()` { #contractsdispatcherdispatcher-getparameters }

```php
public function getParameters(): array;
```

Gets action params

#### `getParams()` { #contractsdispatcherdispatcher-getparams }

```php
public function getParams(): array;
```

Gets action params

#### `getReturnedValue()` { #contractsdispatcherdispatcher-getreturnedvalue }

```php
public function getReturnedValue(): mixed;
```

Returns value returned by the latest dispatched action

#### `hasParam()` { #contractsdispatcherdispatcher-hasparam }

```php
public function hasParam( mixed $param ): bool;
```

Check if a param exists

#### `isFinished()` { #contractsdispatcherdispatcher-isfinished }

```php
public function isFinished(): bool;
```

Checks if the dispatch loop is finished or has more pendent
controllers/tasks to dispatch

#### `setActionName()` { #contractsdispatcherdispatcher-setactionname }

```php
public function setActionName( string $actionName ): void;
```

Sets the action name to be dispatched

#### `setActionSuffix()` { #contractsdispatcherdispatcher-setactionsuffix }

```php
public function setActionSuffix( string $actionSuffix ): void;
```

Sets the default action suffix

#### `setDefaultAction()` { #contractsdispatcherdispatcher-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): void;
```

Sets the default action name

#### `setDefaultNamespace()` { #contractsdispatcherdispatcher-setdefaultnamespace }

```php
public function setDefaultNamespace( string $defaultNamespace ): void;
```

Sets the default namespace

#### `setHandlerSuffix()` { #contractsdispatcherdispatcher-sethandlersuffix }

```php
public function setHandlerSuffix( string $handlerSuffix ): void;
```

Sets the default suffix for the handler

#### `setModuleName()` { #contractsdispatcherdispatcher-setmodulename }

```php
public function setModuleName( string|null $moduleName = null ): void;
```

Sets the module name which the application belongs to

#### `setNamespaceName()` { #contractsdispatcherdispatcher-setnamespacename }

```php
public function setNamespaceName( string $namespaceName ): void;
```

Sets the namespace which the controller belongs to

#### `setParam()` { #contractsdispatcherdispatcher-setparam }

```php
public function setParam(
    mixed $param,
    mixed $value
): void;
```

Set a param by its name or numeric index

#### `setParams()` { #contractsdispatcherdispatcher-setparams }

```php
public function setParams( array $params ): void;
```

Sets action params to be dispatched


## Contracts\Dispatcher\DispatcherTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Dispatcher/DispatcherTypes.php){ .src-btn }

Central registry of the array shapes used across the Dispatcher namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Dispatcher\DispatcherTypes`**

</div>


## Contracts\Domain\Payload\Payload

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Domain/Payload/Payload.php){ .src-btn }

Canonical combined read/write contract for a domain payload.

`Payload` extends both `Writeable` and `Readable`, exposing the full
capability set. The intended convention narrows that surface by which side of
the Action-Domain-Responder boundary holds the payload: the domain layer
builds the payload through `Writeable` (the setters), while the responder
consumes the finished payload through `Readable` (the getters). Type-hinting
against the narrower contract at each boundary keeps each side to the
capability it needs, even though the concrete payload implements both.

@see Readable
@see Writeable

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Domain\Payload\Readable`](#contractsdomainpayloadreadable)
    - **`Phalcon\Contracts\Domain\Payload\Payload`** - extends [`Phalcon\Contracts\Domain\Payload\Readable`](#contractsdomainpayloadreadable), [`Phalcon\Contracts\Domain\Payload\Writeable`](#contractsdomainpayloadwriteable)

</div>


## Contracts\Domain\Payload\Readable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Domain/Payload/Readable.php){ .src-btn }

Canonical read-only contract for a domain payload.

Responders consume a finished payload through this contract (the getters),
narrowing the surface to the read side of the Action-Domain-Responder
boundary.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Domain\Payload\Readable`**
    - [`Phalcon\Contracts\Domain\Payload\Payload`](#contractsdomainpayloadpayload)
    - [`Phalcon\Domain\Payload\ReadableInterface`](phalcon_domain.md#domainpayloadreadableinterface)

</div>

__Uses__ `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdomainpayloadreadable-getexception">
<code class="vis vis-public">public</code>
<code class="ret">Throwable|null</code>
<code class="sig"><span class="sf">getException</span>()</code>
<span class="desc">Gets the potential exception thrown in the domain layer</span>
</a>
<a class="api-item" href="#contractsdomainpayloadreadable-getextras">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getExtras</span>()</code>
<span class="desc">Gets arbitrary extra values produced by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadreadable-getinput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getInput</span>()</code>
<span class="desc">Gets the input received by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadreadable-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Gets the messages produced by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadreadable-getoutput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getOutput</span>()</code>
<span class="desc">Gets the output produced from the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadreadable-getstatus">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getStatus</span>()</code>
<span class="desc">Gets the status of this payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getException()` { #contractsdomainpayloadreadable-getexception }

```php
public function getException(): Throwable|null;
```

Gets the potential exception thrown in the domain layer

#### `getExtras()` { #contractsdomainpayloadreadable-getextras }

```php
public function getExtras(): mixed;
```

Gets arbitrary extra values produced by the domain layer.

#### `getInput()` { #contractsdomainpayloadreadable-getinput }

```php
public function getInput(): mixed;
```

Gets the input received by the domain layer.

#### `getMessages()` { #contractsdomainpayloadreadable-getmessages }

```php
public function getMessages(): mixed;
```

Gets the messages produced by the domain layer.

#### `getOutput()` { #contractsdomainpayloadreadable-getoutput }

```php
public function getOutput(): mixed;
```

Gets the output produced from the domain layer.

#### `getStatus()` { #contractsdomainpayloadreadable-getstatus }

```php
public function getStatus(): mixed;
```

Gets the status of this payload.

Status values are drawn from the `Status` vocabulary.

@see \Phalcon\Domain\Payload\Status


## Contracts\Domain\Payload\Writeable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Domain/Payload/Writeable.php){ .src-btn }

Canonical write-only contract for a domain payload.

The domain layer builds a payload through this contract (the setters),
narrowing the surface to the write side of the Action-Domain-Responder
boundary.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Domain\Payload\Writeable`**
    - [`Phalcon\Domain\Payload\WriteableInterface`](phalcon_domain.md#domainpayloadwriteableinterface)

</div>

__Uses__ `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdomainpayloadwriteable-setexception">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">setException</span>( <span class="st">Throwable</span> <span class="sv">$exception</span> )</code>
<span class="desc">Sets an exception produced by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadwriteable-setextras">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">setExtras</span>( <span class="st">mixed</span> <span class="sv">$extras</span> )</code>
<span class="desc">Sets arbitrary extra values produced by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadwriteable-setinput">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">setInput</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
<span class="desc">Sets the input received by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadwriteable-setmessages">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">setMessages</span>( <span class="st">mixed</span> <span class="sv">$messages</span> )</code>
<span class="desc">Sets the messages produced by the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadwriteable-setoutput">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">setOutput</span>( <span class="st">mixed</span> <span class="sv">$output</span> )</code>
<span class="desc">Sets the output produced from the domain layer.</span>
</a>
<a class="api-item" href="#contractsdomainpayloadwriteable-setstatus">
<code class="vis vis-public">public</code>
<code class="ret">Payload</code>
<code class="sig"><span class="sf">setStatus</span>( <span class="st">mixed</span> <span class="sv">$status</span> )</code>
<span class="desc">Sets the status of this payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `setException()` { #contractsdomainpayloadwriteable-setexception }

```php
public function setException( Throwable $exception ): Payload;
```

Sets an exception produced by the domain layer.

#### `setExtras()` { #contractsdomainpayloadwriteable-setextras }

```php
public function setExtras( mixed $extras ): Payload;
```

Sets arbitrary extra values produced by the domain layer.

#### `setInput()` { #contractsdomainpayloadwriteable-setinput }

```php
public function setInput( mixed $input ): Payload;
```

Sets the input received by the domain layer.

#### `setMessages()` { #contractsdomainpayloadwriteable-setmessages }

```php
public function setMessages( mixed $messages ): Payload;
```

Sets the messages produced by the domain layer.

#### `setOutput()` { #contractsdomainpayloadwriteable-setoutput }

```php
public function setOutput( mixed $output ): Payload;
```

Sets the output produced from the domain layer.

#### `setStatus()` { #contractsdomainpayloadwriteable-setstatus }

```php
public function setStatus( mixed $status ): Payload;
```

Sets the status of this payload.

Status values are drawn from the `Status` vocabulary.

@see \Phalcon\Domain\Payload\Status


## Contracts\Encryption\Crypt\Crypt

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Crypt/Crypt.php){ .src-btn }

Canonical contract for Phalcon\Encryption\Crypt.

The encrypted payload produced by `encrypt()` uses the wire format:

    iv ‖ hmac ‖ ciphertext ‖ tag

where `hmac` is present only when signing is enabled (`useSigning(true)`,
the default) and `tag` is present only for AEAD ciphers (`gcm`/`ccm`).

The AEAD parameters (`authData`, `authTag`, `authTagLength`) are instance
state set through the relevant setters and shared across every
`encrypt()`/`decrypt()` call on the instance. A `Crypt` service shared
through the DI container is therefore not safe for interleaved AEAD
operations.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Crypt\Crypt`**
    - [`Phalcon\Encryption\Crypt\CryptInterface`](phalcon_encryption.md#encryptioncryptcryptinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptioncryptcrypt-decrypt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">decrypt</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$key</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Decrypts a text</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-decryptbase64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">decryptBase64</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$key</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Decrypt a text that is coded as a base64 string</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-encrypt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">encrypt</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$key</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Encrypts a text</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-encryptbase64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">encryptBase64</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$key</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Encrypts a text returning the result as a base64 string</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-getauthdata">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthData</span>()</code>
<span class="desc">Returns authentication data</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-getauthtag">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthTag</span>()</code>
<span class="desc">Returns the authentication tag</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-getauthtaglength">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getAuthTagLength</span>()</code>
<span class="desc">Returns the authentication tag length</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-getavailableciphers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAvailableCiphers</span>()</code>
<span class="desc">Returns a list of available cyphers</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-getcipher">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCipher</span>()</code>
<span class="desc">Returns the current cipher</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-getkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getKey</span>()</code>
<span class="desc">Returns the encryption key</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-setauthdata">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">setAuthData</span>( <span class="st">string</span> <span class="sv">$data</span> )</code>
<span class="desc">Sets authentication data</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-setauthtag">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">setAuthTag</span>( <span class="st">string</span> <span class="sv">$tag</span> )</code>
<span class="desc">Sets the authentication tag</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-setauthtaglength">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">setAuthTagLength</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
<span class="desc">Sets the authentication tag length</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-setcipher">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">setCipher</span>( <span class="st">string</span> <span class="sv">$cipher</span> )</code>
<span class="desc">Sets the cipher algorithm</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-setkey">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">setKey</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Sets the encryption key</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-setpadding">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">setPadding</span>( <span class="st">int</span> <span class="sv">$scheme</span> )</code>
<span class="desc">Changes the padding scheme used.</span>
</a>
<a class="api-item" href="#contractsencryptioncryptcrypt-usesigning">
<code class="vis vis-public">public</code>
<code class="ret">Crypt</code>
<code class="sig"><span class="sf">useSigning</span>( <span class="st">bool</span> <span class="sv">$useSigning</span> )</code>
<span class="desc">Sets if the calculating message digest must be used.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `decrypt()` { #contractsencryptioncryptcrypt-decrypt }

```php
public function decrypt(
    string $input,
    string|null $key = null
): string;
```

Decrypts a text

#### `decryptBase64()` { #contractsencryptioncryptcrypt-decryptbase64 }

```php
public function decryptBase64(
    string $input,
    string|null $key = null
): string;
```

Decrypt a text that is coded as a base64 string

#### `encrypt()` { #contractsencryptioncryptcrypt-encrypt }

```php
public function encrypt(
    string $input,
    string|null $key = null
): string;
```

Encrypts a text

#### `encryptBase64()` { #contractsencryptioncryptcrypt-encryptbase64 }

```php
public function encryptBase64(
    string $input,
    string|null $key = null
): string;
```

Encrypts a text returning the result as a base64 string

#### `getAuthData()` { #contractsencryptioncryptcrypt-getauthdata }

```php
public function getAuthData(): string;
```

Returns authentication data

#### `getAuthTag()` { #contractsencryptioncryptcrypt-getauthtag }

```php
public function getAuthTag(): string;
```

Returns the authentication tag

#### `getAuthTagLength()` { #contractsencryptioncryptcrypt-getauthtaglength }

```php
public function getAuthTagLength(): int;
```

Returns the authentication tag length

#### `getAvailableCiphers()` { #contractsencryptioncryptcrypt-getavailableciphers }

```php
public function getAvailableCiphers(): array;
```

Returns a list of available cyphers

#### `getCipher()` { #contractsencryptioncryptcrypt-getcipher }

```php
public function getCipher(): string;
```

Returns the current cipher

#### `getKey()` { #contractsencryptioncryptcrypt-getkey }

```php
public function getKey(): string;
```

Returns the encryption key

#### `setAuthData()` { #contractsencryptioncryptcrypt-setauthdata }

```php
public function setAuthData( string $data ): Crypt;
```

Sets authentication data

#### `setAuthTag()` { #contractsencryptioncryptcrypt-setauthtag }

```php
public function setAuthTag( string $tag ): Crypt;
```

Sets the authentication tag

#### `setAuthTagLength()` { #contractsencryptioncryptcrypt-setauthtaglength }

```php
public function setAuthTagLength( int $length ): Crypt;
```

Sets the authentication tag length

#### `setCipher()` { #contractsencryptioncryptcrypt-setcipher }

```php
public function setCipher( string $cipher ): Crypt;
```

Sets the cipher algorithm

#### `setKey()` { #contractsencryptioncryptcrypt-setkey }

```php
public function setKey( string $key ): Crypt;
```

Sets the encryption key

#### `setPadding()` { #contractsencryptioncryptcrypt-setpadding }

```php
public function setPadding( int $scheme ): Crypt;
```

Changes the padding scheme used.

#### `useSigning()` { #contractsencryptioncryptcrypt-usesigning }

```php
public function useSigning( bool $useSigning ): Crypt;
```

Sets if the calculating message digest must be used.


## Contracts\Encryption\Crypt\Padding\Pad

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Crypt/Padding/Pad.php){ .src-btn }

Canonical contract for Phalcon\Encryption\Crypt\Padding strategies.

The pad/unpad protocol operates on binary (8-bit) data. Implementations
must measure and slice the input with byte-true functions (`strlen`,
`substr`, or the `mb_*` family with the explicit `"8bit"` encoding); using
encoding-sensitive functions such as `mb_strlen()` on the padded plaintext
yields the wrong padding size whenever the bytes form valid multibyte
sequences.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Crypt\Padding\Pad`**
    - [`Phalcon\Encryption\Crypt\Padding\PadInterface`](phalcon_encryption.md#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptioncryptpaddingpad-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">pad</span>( <span class="st">int</span> <span class="sv">$paddingSize</span> )</code>
</a>
<a class="api-item" href="#contractsencryptioncryptpaddingpad-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">unpad</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$blockSize</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #contractsencryptioncryptpaddingpad-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #contractsencryptioncryptpaddingpad-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Contracts\Encryption\Security\CryptoUtils

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/CryptoUtils.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\CryptoUtils`**
    - [`Phalcon\Contracts\Encryption\Security\Security`](#contractsencryptionsecuritysecurity)

</div>

__Uses__ `Phalcon\Encryption\Security\Random`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-computehmac">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">computeHmac</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$algorithm</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getrandom">
<code class="vis vis-public">public</code>
<code class="ret">Random</code>
<code class="sig"><span class="sf">getRandom</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getRandomBytes</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getsaltbytes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSaltBytes</span>( <span class="st">int</span> <span class="sv">$numberBytes</span><span class="sm"> = 0</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-setrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">setRandomBytes</span>( <span class="st">int</span> <span class="sv">$randomBytes</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `computeHmac()` { #contractsencryptionsecuritycryptoutils-computehmac }

```php
public function computeHmac(
    string $data,
    string $key,
    string $algorithm,
    bool $raw = false
): string;
```

#### `getRandom()` { #contractsencryptionsecuritycryptoutils-getrandom }

```php
public function getRandom(): Random;
```

#### `getRandomBytes()` { #contractsencryptionsecuritycryptoutils-getrandombytes }

```php
public function getRandomBytes(): int;
```

#### `getSaltBytes()` { #contractsencryptionsecuritycryptoutils-getsaltbytes }

```php
public function getSaltBytes( int $numberBytes = 0 ): string;
```

#### `setRandomBytes()` { #contractsencryptionsecuritycryptoutils-setrandombytes }

```php
public function setRandomBytes( int $randomBytes ): Security;
```


## Contracts\Encryption\Security\CsrfProtection

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/CsrfProtection.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\CsrfProtection`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-checktoken">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkToken</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$tokenKey</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$tokenValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$destroyIfValid</span><span class="sm"> = true</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-destroytoken">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">destroyToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-getrequesttoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getRequestToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-getsessiontoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getSessionToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-gettokenkey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getTokenKey</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `checkToken()` { #contractsencryptionsecuritycsrfprotection-checktoken }

```php
public function checkToken(
    string|null $tokenKey = null,
    string|null $tokenValue = null,
    bool $destroyIfValid = true
): bool;
```

#### `destroyToken()` { #contractsencryptionsecuritycsrfprotection-destroytoken }

```php
public function destroyToken(): Security;
```

#### `getRequestToken()` { #contractsencryptionsecuritycsrfprotection-getrequesttoken }

```php
public function getRequestToken(): string|null;
```

#### `getSessionToken()` { #contractsencryptionsecuritycsrfprotection-getsessiontoken }

```php
public function getSessionToken(): string|null;
```

#### `getToken()` { #contractsencryptionsecuritycsrfprotection-gettoken }

```php
public function getToken(): string|null;
```

#### `getTokenKey()` { #contractsencryptionsecuritycsrfprotection-gettokenkey }

```php
public function getTokenKey(): string|null;
```


## Contracts\Encryption\Security\JWT\Signer\Signer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/JWT/Signer/Signer.php){ .src-btn }

Canonical contract for JWT Signer classes

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\JWT\Signer\Signer`**
    - [`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`](phalcon_encryption.md#encryptionsecurityjwtsignersignerinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecurityjwtsignersigner-getalgheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAlgHeader</span>()</code>
<span class="desc">Return the value that is used for the &quot;alg&quot; header</span>
</a>
<a class="api-item" href="#contractsencryptionsecurityjwtsignersigner-getalgorithm">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAlgorithm</span>()</code>
<span class="desc">Return the algorithm used</span>
</a>
<a class="api-item" href="#contractsencryptionsecurityjwtsignersigner-sign">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">sign</span>(<span class="prm"><span class="st">string</span> <span class="sv">$payload</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$passphrase</span></span>)</code>
<span class="desc">Sign a payload using the passphrase</span>
</a>
<a class="api-item" href="#contractsencryptionsecurityjwtsignersigner-verify">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">verify</span>(<span class="prm"><span class="st">string</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$payload</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$passphrase</span></span>)</code>
<span class="desc">Verify a passed source with a payload and passphrase</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getAlgHeader()` { #contractsencryptionsecurityjwtsignersigner-getalgheader }

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

#### `getAlgorithm()` { #contractsencryptionsecurityjwtsignersigner-getalgorithm }

```php
public function getAlgorithm(): string;
```

Return the algorithm used

#### `sign()` { #contractsencryptionsecurityjwtsignersigner-sign }

```php
public function sign(
    string $payload,
    string $passphrase
): string;
```

Sign a payload using the passphrase

#### `verify()` { #contractsencryptionsecurityjwtsignersigner-verify }

```php
public function verify(
    string $source,
    string $payload,
    string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase


## Contracts\Encryption\Security\PasswordSecurity

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/PasswordSecurity.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\PasswordSecurity`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-checkhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkHash</span>(<span class="prm"><span class="st">string</span> <span class="sv">$password</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$passwordHash</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$maxPassLength</span><span class="sm"> = 0</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-getdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getDefaultHash</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-gethashinformation">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHashInformation</span>( <span class="st">string</span> <span class="sv">$hash</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-getworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getWorkFactor</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-hash">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">hash</span>(<span class="prm"><span class="st">string</span> <span class="sv">$password</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-islegacyhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isLegacyHash</span>( <span class="st">string</span> <span class="sv">$passwordHash</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-setdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">setDefaultHash</span>( <span class="st">int</span> <span class="sv">$defaultHash</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-setworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">setWorkFactor</span>( <span class="st">int</span> <span class="sv">$workFactor</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `checkHash()` { #contractsencryptionsecuritypasswordsecurity-checkhash }

```php
public function checkHash(
    string $password,
    string $passwordHash,
    int $maxPassLength = 0
): bool;
```

#### `getDefaultHash()` { #contractsencryptionsecuritypasswordsecurity-getdefaulthash }

```php
public function getDefaultHash(): int;
```

#### `getHashInformation()` { #contractsencryptionsecuritypasswordsecurity-gethashinformation }

```php
public function getHashInformation( string $hash ): array;
```

#### `getWorkFactor()` { #contractsencryptionsecuritypasswordsecurity-getworkfactor }

```php
public function getWorkFactor(): int;
```

#### `hash()` { #contractsencryptionsecuritypasswordsecurity-hash }

```php
public function hash(
    string $password,
    array $options = []
): string;
```

#### `isLegacyHash()` { #contractsencryptionsecuritypasswordsecurity-islegacyhash }

```php
public function isLegacyHash( string $passwordHash ): bool;
```

#### `setDefaultHash()` { #contractsencryptionsecuritypasswordsecurity-setdefaulthash }

```php
public function setDefaultHash( int $defaultHash ): Security;
```

#### `setWorkFactor()` { #contractsencryptionsecuritypasswordsecurity-setworkfactor }

```php
public function setWorkFactor( int $workFactor ): Security;
```


## Contracts\Encryption\Security\Security

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/Security.php){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils)
    - **`Phalcon\Contracts\Encryption\Security\Security`** - extends [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils), [`Phalcon\Contracts\Encryption\Security\CsrfProtection`](#contractsencryptionsecuritycsrfprotection), [`Phalcon\Contracts\Encryption\Security\PasswordSecurity`](#contractsencryptionsecuritypasswordsecurity)

</div>


## Contracts\Encryption\Security\Uuid\NodeProvider

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/Uuid/NodeProvider.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\Uuid\NodeProvider`**
    - [`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`](phalcon_encryption.md#encryptionsecurityuuidnodeproviderinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecurityuuidnodeprovider-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getNode</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getNode()` { #contractsencryptionsecurityuuidnodeprovider-getnode }

```php
public function getNode(): string;
```


## Contracts\Encryption\Security\Uuid\TimeBasedUuid

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/Uuid/TimeBasedUuid.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\Uuid\TimeBasedUuid`**
    - [`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`](phalcon_encryption.md#encryptionsecurityuuidtimebaseduuidinterface)

</div>

__Uses__ `DateTimeImmutable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecurityuuidtimebaseduuid-getdatetime">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig"><span class="sf">getDateTime</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecurityuuidtimebaseduuid-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getNode</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDateTime()` { #contractsencryptionsecurityuuidtimebaseduuid-getdatetime }

```php
public function getDateTime(): DateTimeImmutable;
```

#### `getNode()` { #contractsencryptionsecurityuuidtimebaseduuid-getnode }

```php
public function getNode(): string;
```


## Contracts\Encryption\Security\Uuid\Uuid

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Encryption/Security/Uuid/Uuid.php){ .src-btn }

Canonical marker contract for UUID version adapters.

Also carries the standard RFC 4122 namespace UUIDs as constants.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\Uuid\Uuid`**
    - [`Phalcon\Encryption\Security\Uuid\UuidInterface`](phalcon_encryption.md#encryptionsecurityuuiduuidinterface)

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NAMESPACE_DNS</span><span class="sm"> = &quot;6ba7b810-9dad-11d1-80b4-00c04fd430c8&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NAMESPACE_OID</span><span class="sm"> = &quot;6ba7b812-9dad-11d1-80b4-00c04fd430c8&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NAMESPACE_URL</span><span class="sm"> = &quot;6ba7b811-9dad-11d1-80b4-00c04fd430c8&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NAMESPACE_X500</span><span class="sm"> = &quot;6ba7b814-9dad-11d1-80b4-00c04fd430c8&quot;</span></code>
</div>
</div>


## Contracts\Events\Enumerable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Events/Enumerable.php){ .src-btn }

Optional capability contract for an events manager that can report every
attached listener in one call. Callers detect support with `instanceof`.

Deliberately separate from Manager rather than a member of it: adding a
member to a published interface breaks every implementor, so a second,
narrow interface states the capability without touching the first.

Tooling that reports on an events manager type-hints this instead of the
concrete Manager, so it depends on a published contract rather than on an
implementation detail that is free to change.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Enumerable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsenumerable-getlistenermap">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getListenerMap</span>()</code>
<span class="desc">Returns every event type that currently has at least one listener,</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getListenerMap()` { #contractseventsenumerable-getlistenermap }

```php
public function getListenerMap(): array;
```

Returns every event type that currently has at least one listener,
mapped to that type's listeners. Types contributed by subscribers are
included, because addSubscriber() attaches through the regular listener
pipeline.


## Contracts\Events\Event

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Events/Event.php){ .src-btn }

Canonical contract for Phalcon\Events\Event.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Event`**
    - [`Phalcon\Events\EventInterface`](phalcon_events.md#eventseventinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsevent-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getData</span>()</code>
<span class="desc">Gets event data</span>
</a>
<a class="api-item" href="#contractseventsevent-gettype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Gets event type</span>
</a>
<a class="api-item" href="#contractseventsevent-iscancelable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCancelable</span>()</code>
<span class="desc">Check whether the event is cancelable</span>
</a>
<a class="api-item" href="#contractseventsevent-isstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStopped</span>()</code>
<span class="desc">Check whether the event is currently stopped</span>
</a>
<a class="api-item" href="#contractseventsevent-setdata">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig"><span class="sf">setData</span>( <span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets event data</span>
</a>
<a class="api-item" href="#contractseventsevent-settype">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets event type</span>
</a>
<a class="api-item" href="#contractseventsevent-stop">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig"><span class="sf">stop</span>()</code>
<span class="desc">Stops the event preventing propagation</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `getData()` { #contractseventsevent-getdata }

```php
public function getData(): mixed;
```

Gets event data

#### `getType()` { #contractseventsevent-gettype }

```php
public function getType(): mixed;
```

Gets event type

#### `isCancelable()` { #contractseventsevent-iscancelable }

```php
public function isCancelable(): bool;
```

Check whether the event is cancelable

#### `isStopped()` { #contractseventsevent-isstopped }

```php
public function isStopped(): bool;
```

Check whether the event is currently stopped

#### `setData()` { #contractseventsevent-setdata }

```php
public function setData( mixed $data = null ): Event;
```

Sets event data

#### `setType()` { #contractseventsevent-settype }

```php
public function setType( string $type ): Event;
```

Sets event type

#### `stop()` { #contractseventsevent-stop }

```php
public function stop(): Event;
```

Stops the event preventing propagation


## Contracts\Events\EventsAware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Events/EventsAware.php){ .src-btn }

Canonical contract for Phalcon\Events\EventsAwareInterface. Implemented by
components that accept an events manager and dispatch through it.

Cross-references the legacy ManagerInterface (not the canonical Manager
contract) to preserve LSP for the many AbstractEventsAware subclasses that
already type-hint ManagerInterface. ManagerInterface extends Manager, so
this remains type-compatible with any code that needs the canonical surface.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\EventsAware`**
    - [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Events\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventseventsaware-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal events manager</span>
</a>
<a class="api-item" href="#contractseventseventsaware-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getEventsManager()` { #contractseventseventsaware-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal events manager

#### `setEventsManager()` { #contractseventseventsaware-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager


## Contracts\Events\Manager

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Events/Manager.php){ .src-btn }

Canonical contract for Phalcon\Events\Manager.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Manager`**
    - [`Phalcon\Events\ManagerInterface`](phalcon_events.md#eventsmanagerinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsmanager-addsubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">addSubscriber</span>( <span class="st">Subscriber</span> <span class="sv">$subscriber</span> )</code>
<span class="desc">Registers an event subscriber.</span>
</a>
<a class="api-item" href="#contractseventsmanager-areprioritiesenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">arePrioritiesEnabled</span>()</code>
<span class="desc">Returns whether priority ordering is currently enabled.</span>
</a>
<a class="api-item" href="#contractseventsmanager-attach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">attach</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">callable|object</span> <span class="sv">$handler</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span><span class="sm"> = self::DEFAULT_PRIORITY</span></span>)</code>
<span class="desc">Attach a listener to the events manager.</span>
</a>
<a class="api-item" href="#contractseventsmanager-clearsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clearSubscribers</span>()</code>
<span class="desc">Removes every registered subscriber and detaches each listener they</span>
</a>
<a class="api-item" href="#contractseventsmanager-collectresponses">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">collectResponses</span>( <span class="st">bool</span> <span class="sv">$collect</span> )</code>
<span class="desc">Toggle response collection on/off.</span>
</a>
<a class="api-item" href="#contractseventsmanager-detach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">detach</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">callable|object</span> <span class="sv">$handler</span></span>)</code>
<span class="desc">Detach a listener from the events manager.</span>
</a>
<a class="api-item" href="#contractseventsmanager-detachall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">detachAll</span>( <span class="st">string|null</span> <span class="sv">$type</span><span class="sm"> = null</span> )</code>
<span class="desc">Removes all listeners -- globally or for a single event type.</span>
</a>
<a class="api-item" href="#contractseventsmanager-enablepriorities">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">enablePriorities</span>( <span class="st">bool</span> <span class="sv">$enablePriorities</span> )</code>
<span class="desc">Toggle priority ordering on/off.</span>
</a>
<a class="api-item" href="#contractseventsmanager-fire">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fire</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Fires an event, notifying the active listeners.</span>
</a>
<a class="api-item" href="#contractseventsmanager-getlisteners">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getListeners</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Returns all listeners attached to the given event type.</span>
</a>
<a class="api-item" href="#contractseventsmanager-getresponses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getResponses</span>()</code>
<span class="desc">Returns the responses recorded during the last fire (when collecting).</span>
</a>
<a class="api-item" href="#contractseventsmanager-getsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSubscribers</span>()</code>
<span class="desc">Returns the list of registered subscriber instances.</span>
</a>
<a class="api-item" href="#contractseventsmanager-haslisteners">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasListeners</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Check whether the given event type has any listeners.</span>
</a>
<a class="api-item" href="#contractseventsmanager-iscollecting">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCollecting</span>()</code>
<span class="desc">Check whether the manager is currently collecting responses.</span>
</a>
<a class="api-item" href="#contractseventsmanager-isvalidhandler">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isValidHandler</span>( <span class="st">mixed</span> <span class="sv">$handler</span> )</code>
<span class="desc">Returns true when the given handler is an object or callable.</span>
</a>
<a class="api-item" href="#contractseventsmanager-removesubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">removeSubscriber</span>( <span class="st">Subscriber</span> <span class="sv">$subscriber</span> )</code>
<span class="desc">Removes a previously registered subscriber.</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEFAULT_PRIORITY</span><span class="sm"> = 100</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `addSubscriber()` { #contractseventsmanager-addsubscriber }

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber.

#### `arePrioritiesEnabled()` { #contractseventsmanager-areprioritiesenabled }

```php
public function arePrioritiesEnabled(): bool;
```

Returns whether priority ordering is currently enabled.

#### `attach()` { #contractseventsmanager-attach }

```php
public function attach(
    string $eventType,
    callable|object $handler,
    int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager.

#### `clearSubscribers()` { #contractseventsmanager-clearsubscribers }

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed.

#### `collectResponses()` { #contractseventsmanager-collectresponses }

```php
public function collectResponses( bool $collect ): void;
```

Toggle response collection on/off.

#### `detach()` { #contractseventsmanager-detach }

```php
public function detach(
    string $eventType,
    callable|object $handler
): void;
```

Detach a listener from the events manager.

#### `detachAll()` { #contractseventsmanager-detachall }

```php
public function detachAll( string|null $type = null ): void;
```

Removes all listeners -- globally or for a single event type.

#### `enablePriorities()` { #contractseventsmanager-enablepriorities }

```php
public function enablePriorities( bool $enablePriorities ): void;
```

Toggle priority ordering on/off.

#### `fire()` { #contractseventsmanager-fire }

```php
public function fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
): mixed;
```

Fires an event, notifying the active listeners.

#### `getListeners()` { #contractseventsmanager-getlisteners }

```php
public function getListeners( string $type ): array;
```

Returns all listeners attached to the given event type.

#### `getResponses()` { #contractseventsmanager-getresponses }

```php
public function getResponses(): array;
```

Returns the responses recorded during the last fire (when collecting).

#### `getSubscribers()` { #contractseventsmanager-getsubscribers }

```php
public function getSubscribers(): array;
```

Returns the list of registered subscriber instances.

#### `hasListeners()` { #contractseventsmanager-haslisteners }

```php
public function hasListeners( string $type ): bool;
```

Check whether the given event type has any listeners.

#### `isCollecting()` { #contractseventsmanager-iscollecting }

```php
public function isCollecting(): bool;
```

Check whether the manager is currently collecting responses.

#### `isValidHandler()` { #contractseventsmanager-isvalidhandler }

```php
public function isValidHandler( mixed $handler ): bool;
```

Returns true when the given handler is an object or callable.

#### `removeSubscriber()` { #contractseventsmanager-removesubscriber }

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber.


## Contracts\Events\Stoppable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Events/Stoppable.php){ .src-btn }

Phalcon's local mirror of PSR-14 StoppableEventInterface.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Stoppable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsstoppable-ispropagationstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPropagationStopped</span>()</code>
<span class="desc">Returns true when the event must stop propagating to subsequent</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `isPropagationStopped()` { #contractseventsstoppable-ispropagationstopped }

```php
public function isPropagationStopped(): bool;
```

Returns true when the event must stop propagating to subsequent
listeners.


## Contracts\Events\Subscriber

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Events/Subscriber.php){ .src-btn }

Contract for event subscriber classes. A subscriber declares the events it
wants to listen to via a static map; Events\Manager parses the map and
attaches each entry as a regular listener.

Accepted value shapes per event key:

  'event:name' => 'methodName'
  'event:name' => ['methodName', priority]
  'event:name' => [
      ['methodName1'],
      ['methodName2', priority],
  ]

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Subscriber`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventssubscriber-getsubscribedevents">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSubscribedEvents</span>()</code>
<span class="desc">Returns a map of event name =&gt; listener config.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getSubscribedEvents()` { #contractseventssubscriber-getsubscribedevents }

```php
public static function getSubscribedEvents(): array;
```

Returns a map of event name => listener config.


## Contracts\Filter\Sanitizer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Filter/Sanitizer.php){ .src-btn }

The contract for sanitizers registered in Phalcon\Filter\Filter.

A sanitizer is an invokable object: it must expose a public `__invoke()`
method that receives the value to sanitize as its first parameter and
returns the sanitized value. Additional parameters, when a sanitizer
needs them (e.g. `regex`, `replace`), must be declared after the value
parameter; Phalcon\Filter\Filter::sanitize() forwards them in order.

`__invoke()` is intentionally not declared here: implementations type
their value parameter differently (`string` for text-only sanitizers,
untyped for coercing ones), and PHP parameter variance does not allow an
implementation to narrow a parameter declared by an interface.

A sanitizer operates on a single value. Array handling (one level of
recursion by default) is the responsibility of
Phalcon\Filter\Filter::sanitize(), not of the sanitizer.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Filter\Sanitizer`**

</div>


## Contracts\Flash\Flash

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Flash/Flash.php){ .src-btn }

Canonical contract for Phalcon\Flash messengers.

Note: `output()` and `clear()` are part of the concrete `Direct` / `Session`
API and are not declared on this contract; they are scheduled to be added in
the next major version.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Flash\Flash`**
    - [`Phalcon\Flash\FlashInterface`](phalcon_flash.md#flashflashinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsflashflash-error">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">error</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML error message</span>
</a>
<a class="api-item" href="#contractsflashflash-message">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">message</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Outputs a message</span>
</a>
<a class="api-item" href="#contractsflashflash-notice">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">notice</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML notice/information message</span>
</a>
<a class="api-item" href="#contractsflashflash-success">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">success</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML success message</span>
</a>
<a class="api-item" href="#contractsflashflash-warning">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">warning</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML warning message</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `error()` { #contractsflashflash-error }

```php
public function error( string $message ): string|null;
```

Shows a HTML error message

#### `message()` { #contractsflashflash-message }

```php
public function message(
    string $type,
    string $message
): string|null;
```

Outputs a message

Note: the shipped implementations (`Direct`, `Session`) accept
`string|array` for `$message`; this contract declares `string` and is
scheduled to be widened to `mixed` in the next major version. Delivery
semantics differ per implementation: `Direct::message()` renders and
emits the message immediately, while `Session::message()` stores the raw
message for output on a later request.

#### `notice()` { #contractsflashflash-notice }

```php
public function notice( string $message ): string|null;
```

Shows a HTML notice/information message

#### `success()` { #contractsflashflash-success }

```php
public function success( string $message ): string|null;
```

Shows a HTML success message

#### `warning()` { #contractsflashflash-warning }

```php
public function warning( string $message ): string|null;
```

Shows a HTML warning message


## Contracts\Forms\Schema

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Forms/Schema.php){ .src-btn }

Contract for objects that supply a normalized list of form element
definitions. Implementations may source the definitions from a PHP array,
a JSON document, a YAML file, or any other format.

Each returned definition must be an associative array containing at least:
  - 'type' (string)  - element type key (e.g. 'text', 'select', 'checkgroup')
  - 'name' (string)  - the HTML name attribute value

Optional keys per definition:
  - 'label'      (string)          - visible label text
  - 'default'    (mixed)           - pre-populated default value
  - 'attributes' (array)           - additional HTML attributes
  - 'filters'    (array|string)    - filter names applied on bind()
  - 'validators' (array)           - ValidatorInterface instances
  - 'options'    (array)           - choices for select / checkgroup / radiogroup

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Forms\Schema`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsformsschema-load">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">load</span>()</code>
<span class="desc">Returns an ordered list of normalized element definitions.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `load()` { #contractsformsschema-load }

```php
public function load(): array;
```

Returns an ordered list of normalized element definitions.


## Contracts\Front\FrontController

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Front/FrontController.php){ .src-btn }

[_FrontController_][] affords an entry point into the outermost presentation
layer in any execution context (HTTP, CLI, etc.).

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Front\FrontController`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsfrontfrontcontroller-run">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">run</span>()</code>
<span class="desc">Runs the front controller.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `run()` { #contractsfrontfrontcontroller-run }

```php
public function run(): int;
```

Runs the front controller.

- Directives:

    - Implementations MUST report success by returning an integer `0`.

    - Implementations MUST report non-success by returning an integer
      between `1` and `254` (inclusive).

    - Implementations MUST gracefully handle all [_Throwable_][]s.

    - Implementations MUST NOT [`exit()`][], [`die()`][], or otherwise
      avoid returning.

- Notes:

    - **The return value is intended as an exit status code.** Exit
      status codes may be received initially by the in-process logic
      that invoked `run()` (bootstrap scripts, test harnesses, etc.),
      and may ultimately be received by a parent process (shell,
      supervisor, init system, CI runner, monitoring tool, or similar)
      via [`exit()`][]. Whether or not the exit status is consumed by the
      calling code or parent process depends on the execution
      environment: php-fpm and mod_php typically have no consumer,
      whereas worker loops, supervised long-running processes, runtime
      layers, and CI harnesses do.

    - **"Success" and "non-success" are context-dependent.** In an HTTP
      context, "success" typically means that the request was processed
      and a response was emitted regardless of the HTTP status code,
      whereas "non-success" may indicate that a [_Throwable_][] had to be
      handled by the _FrontController_ itself. In a command line context,
      "success" typically means that the command completed without
      errors, whereas "non-success" may be one of several error
      conditions (cf. the [`sysexits.h`][] conventions where applicable).

    - **The exit status code `255` is reserved by PHP itself.** Cf.
      [`exit()`][]: "Exit codes should be in the range 0 to 254, the exit
      code 255 is reserved by PHP and should not be used."

    - **Handle all possible exceptions.** The logic calling the front
      controller should not have to deal with any exceptions bubbling up
      from it.

    - **Graceful handling means returning, not exiting.** A "graceful"
      handler catches the [_Throwable_][], turns it into a non-success
      exit status, and returns that status from `run()` rather than
      calling [`exit()`][].

    - **Return the exit status; leave termination to the caller.** The
      value of an exit status code comes from letting the caller decide
      what to do with it: a worker loop, queue worker, or test harness
      needs `run()` to hand control back so it can continue, retry, or
      assert on the result. An implementation that calls [`exit()`][]
      inside `run()` prevents those uses, terminating the process before
      the caller regains control.


## Contracts\Front\FrontTypeAliases

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Front/FrontTypeAliases.php){ .src-btn }

[_FrontTypeAliases_][] provides custom PHPStan types to aid static analysis.

- ```
  front_exit_status_int int<0,254>
  ```
    - An `int` exit status code: `0` for success, `1` to `254` for
      non-success. The value `255` is reserved by PHP itself.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Front\FrontTypeAliases`**

</div>


## Contracts\Html\Helper\Input\SelectData

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Html/Helper/Input/SelectData.php){ .src-btn }

Interface for SELECT option data providers.

Return format: [value => label] for flat options;
[groupLabel => [value => label, ...]] for optgroups.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Html\Helper\Input\SelectData`**

</div>

__Uses__ `Phalcon\Contracts\Html\HtmlTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractshtmlhelperinputselectdata-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns the per-option attribute map.</span>
</a>
<a class="api-item" href="#contractshtmlhelperinputselectdata-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getAttributes()` { #contractshtmlhelperinputselectdata-getattributes }

```php
public function getAttributes(): array;
```

Returns the per-option attribute map.

Format: [optionValue => [attrName => stringValue, ...]].
Implementations must return resolved string values; no escaping,
ordering, or rendering is performed here.

#### `getOptions()` { #contractshtmlhelperinputselectdata-getoptions }

```php
public function getOptions(): array;
```


## Contracts\Html\HtmlTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Html/HtmlTypes.php){ .src-btn }

Central registry of the array shapes used across the Html namespace.

Attribute values stay scalar here. The array member that PSR-13 allows for
link attributes lives in the Link registry instead, because the helper
pipeline concatenates and escapes every value as a string.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Html\HtmlTypes`**

</div>

__Uses__ `Closure`
{ .api-uses }


## Contracts\Html\Link\LinkTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Html/Link/LinkTypes.php){ .src-btn }

Central registry of the array shapes used across the Html\Link namespace.

PSR-13 states that a link attribute value is "a PHP primitive or an array of
PHP strings", so `link_attributes` keeps the array member that the plain
Html attribute shape drops.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Html\Link\LinkTypes`**

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface`
{ .api-uses }


## Contracts\Http\AttributeRequest

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Http/AttributeRequest.php){ .src-btn }

Extends the request contract with the native attribute bag.

`getAttributes()` already exists on the concrete `Phalcon\Http\Request`; this
interface exposes it as a contract without touching `RequestInterface`
(adding a method there would break userland implementers). It lets consumers
type against the attribute-bearing request without depending on the concrete.

<div class="api-tree" markdown>

- [`Phalcon\Http\RequestInterface`](phalcon_http.md#httprequestinterface)
    - **`Phalcon\Contracts\Http\AttributeRequest`**

</div>

__Uses__ `Phalcon\Http\RequestInterface` · `Phalcon\Http\Request\Bag\AttributeBag`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractshttpattributerequest-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">AttributeBag</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns the request attribute bag.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getAttributes()` { #contractshttpattributerequest-getattributes }

```php
public function getAttributes(): AttributeBag;
```

Returns the request attribute bag.


## Contracts\Http\HttpTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Http/HttpTypes.php){ .src-btn }

Central registry of the array shapes used across the Http namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Http\HttpTypes`**

</div>

__Uses__ `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Request\FileInterface`
{ .api-uses }


## Contracts\Image\ImageTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Image/ImageTypes.php){ .src-btn }

Central registry of the array shapes used across the Image namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `image_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `config` from clashing with an alias imported
from another namespace into the same file.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Image\ImageTypes`**

</div>

__Uses__ `Phalcon\Image\Adapter\AdapterInterface`
{ .api-uses }


## Contracts\Logger\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Logger/Adapter/Adapter.php){ .src-btn }

Canonical contract for Phalcon\Logger adapters.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Logger\Adapter\Adapter`**
    - [`Phalcon\Logger\Adapter\AdapterInterface`](phalcon_logger.md#loggeradapteradapterinterface)

</div>

__Uses__ `Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsloggeradapteradapter-add">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">add</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Adds a message in the queue</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-begin">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">begin</span>()</code>
<span class="desc">Starts a transaction</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the logger</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-commit">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">commit</span>()</code>
<span class="desc">Commits the internal transaction</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-getformatter">
<code class="vis vis-public">public</code>
<code class="ret">FormatterInterface</code>
<code class="sig"><span class="sf">getFormatter</span>()</code>
<span class="desc">Returns the internal formatter</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">inTransaction</span>()</code>
<span class="desc">Returns the whether the logger is currently in an active transaction or</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">process</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Processes the message in the adapter</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-rollback">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">rollback</span>()</code>
<span class="desc">Rollbacks the internal transaction</span>
</a>
<a class="api-item" href="#contractsloggeradapteradapter-setformatter">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">setFormatter</span>( <span class="st">FormatterInterface</span> <span class="sv">$formatter</span> )</code>
<span class="desc">Sets the message formatter</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `add()` { #contractsloggeradapteradapter-add }

```php
public function add( Item $item ): Adapter;
```

Adds a message in the queue

#### `begin()` { #contractsloggeradapteradapter-begin }

```php
public function begin(): Adapter;
```

Starts a transaction

#### `close()` { #contractsloggeradapteradapter-close }

```php
public function close(): bool;
```

Closes the logger

#### `commit()` { #contractsloggeradapteradapter-commit }

```php
public function commit(): Adapter;
```

Commits the internal transaction

#### `getFormatter()` { #contractsloggeradapteradapter-getformatter }

```php
public function getFormatter(): FormatterInterface;
```

Returns the internal formatter

#### `inTransaction()` { #contractsloggeradapteradapter-intransaction }

```php
public function inTransaction(): bool;
```

Returns the whether the logger is currently in an active transaction or
not

#### `process()` { #contractsloggeradapteradapter-process }

```php
public function process( Item $item ): void;
```

Processes the message in the adapter

#### `rollback()` { #contractsloggeradapteradapter-rollback }

```php
public function rollback(): Adapter;
```

Rollbacks the internal transaction

#### `setFormatter()` { #contractsloggeradapteradapter-setformatter }

```php
public function setFormatter( FormatterInterface $formatter ): Adapter;
```

Sets the message formatter


## Contracts\Logger\Formatter\Formatter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Logger/Formatter/Formatter.php){ .src-btn }

Canonical contract for Phalcon\Logger formatters.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Logger\Formatter\Formatter`**
    - [`Phalcon\Logger\Formatter\FormatterInterface`](phalcon_logger.md#loggerformatterformatterinterface)

</div>

__Uses__ `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsloggerformatterformatter-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Applies a format to an item</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `format()` { #contractsloggerformatterformatter-format }

```php
public function format( Item $item ): string;
```

Applies a format to an item


## Contracts\Logger\Logger

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Logger/Logger.php){ .src-btn }

Canonical contract for Phalcon\Logger\Logger.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Logger\Logger`**
    - [`Phalcon\Logger\LoggerInterface`](phalcon_logger.md#loggerloggerinterface)

</div>

__Uses__ `Phalcon\Contracts\Logger\Adapter\Adapter`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsloggerlogger-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">alert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Action must be taken immediately.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">critical</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Critical conditions.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">debug</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Detailed debug information.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">emergency</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">System is unusable.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">error</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Runtime errors that do not require immediate action but should typically</span>
</a>
<a class="api-item" href="#contractsloggerlogger-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">getAdapter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#contractsloggerlogger-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAdapters</span>()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#contractsloggerlogger-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLogLevel</span>()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#contractsloggerlogger-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#contractsloggerlogger-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">info</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Interesting events.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">log</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$level</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Logs with an arbitrary level.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">notice</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Normal but significant events.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">trace</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Extra-verbose diagnostic output.</span>
</a>
<a class="api-item" href="#contractsloggerlogger-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">warning</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Exceptional occurrences that are not errors.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `alert()` { #contractsloggerlogger-alert }

```php
public function alert(
    string $message,
    array $context = []
): void;
```

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.

#### `critical()` { #contractsloggerlogger-critical }

```php
public function critical(
    string $message,
    array $context = []
): void;
```

Critical conditions.

Example: Application component unavailable, unexpected exception.

#### `debug()` { #contractsloggerlogger-debug }

```php
public function debug(
    string $message,
    array $context = []
): void;
```

Detailed debug information.

#### `emergency()` { #contractsloggerlogger-emergency }

```php
public function emergency(
    string $message,
    array $context = []
): void;
```

System is unusable.

#### `error()` { #contractsloggerlogger-error }

```php
public function error(
    string $message,
    array $context = []
): void;
```

Runtime errors that do not require immediate action but should typically
be logged and monitored.

#### `getAdapter()` { #contractsloggerlogger-getadapter }

```php
public function getAdapter( string $name ): Adapter;
```

Returns an adapter from the stack

#### `getAdapters()` { #contractsloggerlogger-getadapters }

```php
public function getAdapters(): array;
```

Returns the adapter stack array

#### `getLogLevel()` { #contractsloggerlogger-getloglevel }

```php
public function getLogLevel(): int;
```

Returns the log level

#### `getName()` { #contractsloggerlogger-getname }

```php
public function getName(): string;
```

Returns the name of the logger

#### `info()` { #contractsloggerlogger-info }

```php
public function info(
    string $message,
    array $context = []
): void;
```

Interesting events.

Example: User logs in, SQL logs.

#### `log()` { #contractsloggerlogger-log }

```php
public function log(
    mixed $level,
    string $message,
    array $context = []
): void;
```

Logs with an arbitrary level.

An unknown level (a typo or an unmapped value) is not rejected; it maps
to the CUSTOM level and is logged, rather than raising an exception.

#### `notice()` { #contractsloggerlogger-notice }

```php
public function notice(
    string $message,
    array $context = []
): void;
```

Normal but significant events.

#### `trace()` { #contractsloggerlogger-trace }

```php
public function trace(
    string $message,
    array $context = []
): void;
```

Extra-verbose diagnostic output.

#### `warning()` { #contractsloggerlogger-warning }

```php
public function warning(
    string $message,
    array $context = []
): void;
```

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things
that are not necessarily wrong.


## Contracts\Logger\LoggerTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Logger/LoggerTypes.php){ .src-btn }

Central registry of the array shapes used across the Logger namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Logger\LoggerTypes`**

</div>

__Uses__ `DateTimeZone` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Item`
{ .api-uses }


## Contracts\Messages\Messages

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Messages/Messages.php){ .src-btn }

Canonical contract for Phalcon\Messages\Messages.

The collection stores Phalcon\Messages\MessageInterface objects and is
iterated by integer position. An entry added under a string key through the
ArrayAccess interface stays reachable by that offset but is not visited
during iteration (`foreach`), which walks the integer sequence only.

@extends ArrayAccess<array-key, mixed>
@extends Iterator<int, MessageInterface>

<div class="api-tree" markdown>

- `\ArrayAccess`
    - **`Phalcon\Contracts\Messages\Messages`** - extends `\ArrayAccess`, `\Countable`, `\Iterator`

</div>

__Uses__ `ArrayAccess` · `Countable` · `Iterator` · `Phalcon\Messages\MessageInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsmessagesmessages-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">appendMessage</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Appends a message to the collection</span>
</a>
<a class="api-item" href="#contractsmessagesmessages-appendmessages">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">appendMessages</span>( <span class="st">mixed</span> <span class="sv">$messages</span> )</code>
<span class="desc">Appends an array of messages to the collection</span>
</a>
<a class="api-item" href="#contractsmessagesmessages-filter">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">string</span> <span class="sv">$fieldName</span> )</code>
<span class="desc">Filters the message collection by field name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `appendMessage()` { #contractsmessagesmessages-appendmessage }

```php
public function appendMessage( MessageInterface $message ): void;
```

Appends a message to the collection

#### `appendMessages()` { #contractsmessagesmessages-appendmessages }

```php
public function appendMessages( mixed $messages );
```

Appends an array of messages to the collection

#### `filter()` { #contractsmessagesmessages-filter }

```php
public function filter( string $fieldName ): array;
```

Filters the message collection by field name


## Contracts\Messages\MessagesTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Messages/MessagesTypes.php){ .src-btn }

Central registry of the array shapes used across the Messages namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `messages_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `metadata` from clashing with an alias imported
from another namespace into the same file.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Messages\MessagesTypes`**

</div>

__Uses__ `Phalcon\Messages\MessageInterface`
{ .api-uses }


## Contracts\Mvc\Dispatcher

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Mvc/Dispatcher.php){ .src-btn }

Canonical contract for Phalcon\Mvc\Dispatcher.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](#contractsdispatcherdispatcher)
    - **`Phalcon\Contracts\Mvc\Dispatcher`**
        - [`Phalcon\Mvc\DispatcherInterface`](phalcon_mvc.md#mvcdispatcherinterface)

</div>

__Uses__ `Phalcon\Contracts\Dispatcher\Dispatcher` · `Phalcon\Mvc\ControllerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsmvcdispatcher-getactivecontroller">
<code class="vis vis-public">public</code>
<code class="ret">ControllerInterface|null</code>
<code class="sig"><span class="sf">getActiveController</span>()</code>
<span class="desc">Returns the active controller in the dispatcher</span>
</a>
<a class="api-item" href="#contractsmvcdispatcher-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getControllerName</span>()</code>
<span class="desc">Gets last dispatched controller name</span>
</a>
<a class="api-item" href="#contractsmvcdispatcher-getlastcontroller">
<code class="vis vis-public">public</code>
<code class="ret">ControllerInterface|null</code>
<code class="sig"><span class="sf">getLastController</span>()</code>
<span class="desc">Returns the latest dispatched controller</span>
</a>
<a class="api-item" href="#contractsmvcdispatcher-setcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherContract</code>
<code class="sig"><span class="sf">setControllerName</span>( <span class="st">string</span> <span class="sv">$controllerName</span> )</code>
<span class="desc">Sets the controller name to be dispatched</span>
</a>
<a class="api-item" href="#contractsmvcdispatcher-setcontrollersuffix">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherContract</code>
<code class="sig"><span class="sf">setControllerSuffix</span>( <span class="st">string</span> <span class="sv">$controllerSuffix</span> )</code>
<span class="desc">Sets the default controller suffix</span>
</a>
<a class="api-item" href="#contractsmvcdispatcher-setdefaultcontroller">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherContract</code>
<code class="sig"><span class="sf">setDefaultController</span>( <span class="st">string</span> <span class="sv">$controllerName</span> )</code>
<span class="desc">Sets the default controller name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getActiveController()` { #contractsmvcdispatcher-getactivecontroller }

```php
public function getActiveController(): ControllerInterface|null;
```

Returns the active controller in the dispatcher

#### `getControllerName()` { #contractsmvcdispatcher-getcontrollername }

```php
public function getControllerName(): string;
```

Gets last dispatched controller name

#### `getLastController()` { #contractsmvcdispatcher-getlastcontroller }

```php
public function getLastController(): ControllerInterface|null;
```

Returns the latest dispatched controller

#### `setControllerName()` { #contractsmvcdispatcher-setcontrollername }

```php
public function setControllerName( string $controllerName ): DispatcherContract;
```

Sets the controller name to be dispatched

#### `setControllerSuffix()` { #contractsmvcdispatcher-setcontrollersuffix }

```php
public function setControllerSuffix( string $controllerSuffix ): DispatcherContract;
```

Sets the default controller suffix

#### `setDefaultController()` { #contractsmvcdispatcher-setdefaultcontroller }

```php
public function setDefaultController( string $controllerName ): DispatcherContract;
```

Sets the default controller name


## Contracts\Mvc\Model\Relation\CacheKeyProvider

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Mvc/Model/Relation/CacheKeyProvider.php){ .src-btn }

Interface for models that provide a custom unique key for the reusable
records cache in the Model Manager. Implement this interface when the
default object-identity based key (unique_key) does not produce stable
cache hits across multiple object instances that represent the same
database record.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Mvc\Model\Relation\CacheKeyProvider`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsmvcmodelrelationcachekeyprovider-getuniquekey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUniqueKey</span>()</code>
<span class="desc">Returns a string that uniquely identifies this model instance for</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getUniqueKey()` { #contractsmvcmodelrelationcachekeyprovider-getuniquekey }

```php
public function getUniqueKey(): string;
```

Returns a string that uniquely identifies this model instance for
use as the key in the reusable records cache.


## Contracts\Mvc\MvcTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Mvc/MvcTypes.php){ .src-btn }

Central registry of the array shapes used across the Mvc namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `mvc_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `model_find_parameters` from clashing with an
alias imported from another namespace into the same file.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Mvc\MvcTypes`**

</div>


## Contracts\Paginator\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Paginator/Adapter.php){ .src-btn }

Interface for Phalcon\Paginator adapters

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Paginator\Adapter`**
    - [`Phalcon\Paginator\Adapter\AdapterInterface`](phalcon_paginator.md#paginatoradapteradapterinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractspaginatoradapter-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLimit</span>()</code>
<span class="desc">Get current rows limit</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-paginate">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig"><span class="sf">paginate</span>()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-setcurrentpage">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">setCurrentPage</span>( <span class="st">int</span> <span class="sv">$page</span> )</code>
<span class="desc">Set the current page number</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-setlimit">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">setLimit</span>( <span class="st">int</span> <span class="sv">$limit</span> )</code>
<span class="desc">Set current rows limit</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getLimit()` { #contractspaginatoradapter-getlimit }

```php
public function getLimit(): int;
```

Get current rows limit

#### `paginate()` { #contractspaginatoradapter-paginate }

```php
public function paginate(): Repository;
```

Returns a slice of the resultset to show in the pagination

#### `setCurrentPage()` { #contractspaginatoradapter-setcurrentpage }

```php
public function setCurrentPage( int $page ): Adapter;
```

Set the current page number

#### `setLimit()` { #contractspaginatoradapter-setlimit }

```php
public function setLimit( int $limit ): Adapter;
```

Set current rows limit


## Contracts\Paginator\PaginatorTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Paginator/PaginatorTypes.php){ .src-btn }

Central registry of the array shapes used across the Paginator namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `paginator_` because PHPStan resolves
imported type names per file and has no namespacing for them: the prefix
is what keeps generic names such as `config` from clashing with an alias
imported from another namespace into the same file.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Paginator\PaginatorTypes`**

</div>

__Uses__ `Phalcon\Mvc\Model\Query\Builder`
{ .api-uses }


## Contracts\Paginator\Repository

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Paginator/Repository.php){ .src-btn }

Interface for the repository of current state
Phalcon\Paginator\AdapterInterface::paginate()

Two adapter dialects fill this repository:

- Offset adapters (Model, NativeArray, QueryBuilder) populate every
  property as a sequential page number / item count.
- Cursor adapters (QueryBuilderCursor) reuse the same properties with a
  different meaning: `getCurrent()`/`getNext()` carry keyset cursor values
  rather than page numbers, and `getTotalItems()`, `getLast()` and
  `getPrevious()` are not computed (they return 0).

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Paginator\Repository`**
    - [`Phalcon\Paginator\RepositoryInterface`](phalcon_paginator.md#paginatorrepositoryinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractspaginatorrepository-getaliases">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAliases</span>()</code>
<span class="desc">Gets the aliases for properties repository</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getcurrent">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCurrent</span>()</code>
<span class="desc">Gets number of the current page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getfirst">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getFirst</span>()</code>
<span class="desc">Gets number of the first page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getitems">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getItems</span>()</code>
<span class="desc">Gets the items on the current page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getlast">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLast</span>()</code>
<span class="desc">Gets number of the last page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLimit</span>()</code>
<span class="desc">Gets current rows limit</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getnext">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getNext</span>()</code>
<span class="desc">Gets number of the next page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getprevious">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPrevious</span>()</code>
<span class="desc">Gets number of the previous page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-gettotalitems">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTotalItems</span>()</code>
<span class="desc">Gets the total number of items</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-setaliases">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig"><span class="sf">setAliases</span>( <span class="st">array</span> <span class="sv">$aliases</span> )</code>
<span class="desc">Sets the aliases for properties repository</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-setproperties">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig"><span class="sf">setProperties</span>( <span class="st">array</span> <span class="sv">$properties</span> )</code>
<span class="desc">Sets values for properties of the repository</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_CURRENT_PAGE</span><span class="sm"> = &quot;current&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_FIRST_PAGE</span><span class="sm"> = &quot;first&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_ITEMS</span><span class="sm"> = &quot;items&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_LAST_PAGE</span><span class="sm"> = &quot;last&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_LIMIT</span><span class="sm"> = &quot;limit&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_NEXT_PAGE</span><span class="sm"> = &quot;next&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_PREVIOUS_PAGE</span><span class="sm"> = &quot;previous&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_TOTAL_ITEMS</span><span class="sm"> = &quot;total_items&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `getAliases()` { #contractspaginatorrepository-getaliases }

```php
public function getAliases(): array;
```

Gets the aliases for properties repository

#### `getCurrent()` { #contractspaginatorrepository-getcurrent }

```php
public function getCurrent(): int;
```

Gets number of the current page

Cursor adapters store the cursor value used for the current page here
(0 on the first page), not a sequential page number.

#### `getFirst()` { #contractspaginatorrepository-getfirst }

```php
public function getFirst(): int;
```

Gets number of the first page

#### `getItems()` { #contractspaginatorrepository-getitems }

```php
public function getItems(): mixed;
```

Gets the items on the current page

#### `getLast()` { #contractspaginatorrepository-getlast }

```php
public function getLast(): int;
```

Gets number of the last page

Cursor adapters do not compute this and return 0.

#### `getLimit()` { #contractspaginatorrepository-getlimit }

```php
public function getLimit(): int;
```

Gets current rows limit

#### `getNext()` { #contractspaginatorrepository-getnext }

```php
public function getNext(): int;
```

Gets number of the next page

Cursor adapters store the next cursor value here rather than a page
number; 0 means there is no next page.

#### `getPrevious()` { #contractspaginatorrepository-getprevious }

```php
public function getPrevious(): int;
```

Gets number of the previous page

Cursor adapters do not compute this and return 0.

#### `getTotalItems()` { #contractspaginatorrepository-gettotalitems }

```php
public function getTotalItems(): int;
```

Gets the total number of items

Cursor adapters do not compute this and return 0.

#### `setAliases()` { #contractspaginatorrepository-setaliases }

```php
public function setAliases( array $aliases ): Repository;
```

Sets the aliases for properties repository

#### `setProperties()` { #contractspaginatorrepository-setproperties }

```php
public function setProperties( array $properties ): Repository;
```

Sets values for properties of the repository


## Contracts\Queue\ConnectionFactory

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/ConnectionFactory.php){ .src-btn }

Builds a Context: the entry point of every adapter.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\ConnectionFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueueconnectionfactory-createcontext">
<code class="vis vis-public">public</code>
<code class="ret">Context</code>
<code class="sig"><span class="sf">createContext</span>()</code>
<span class="desc">Creates a context (a session/connection to the transport).</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createContext()` { #contractsqueueconnectionfactory-createcontext }

```php
public function createContext(): Context;
```

Creates a context (a session/connection to the transport).


## Contracts\Queue\Consumer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Consumer.php){ .src-btn }

Receives messages from a single queue.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Consumer`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueueconsumer-acknowledge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">acknowledge</span>( <span class="st">Message</span> <span class="sv">$message</span> )</code>
<span class="desc">Acknowledges the message; the transport may then discard it.</span>
</a>
<a class="api-item" href="#contractsqueueconsumer-getqueue">
<code class="vis vis-public">public</code>
<code class="ret">Queue</code>
<code class="sig"><span class="sf">getQueue</span>()</code>
<span class="desc">Returns the queue this consumer reads from.</span>
</a>
<a class="api-item" href="#contractsqueueconsumer-receive">
<code class="vis vis-public">public</code>
<code class="ret">Message|null</code>
<code class="sig"><span class="sf">receive</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
<span class="desc">Receives a message, blocking up to timeout milliseconds (0 = block</span>
</a>
<a class="api-item" href="#contractsqueueconsumer-receivenowait">
<code class="vis vis-public">public</code>
<code class="ret">Message|null</code>
<code class="sig"><span class="sf">receiveNoWait</span>()</code>
<span class="desc">Receives a message without blocking, or null when none is ready.</span>
</a>
<a class="api-item" href="#contractsqueueconsumer-reject">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reject</span>(<span class="prm"><span class="st">Message</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$requeue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Rejects the message. When requeue is true the transport redelivers it.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `acknowledge()` { #contractsqueueconsumer-acknowledge }

```php
public function acknowledge( Message $message ): void;
```

Acknowledges the message; the transport may then discard it.

#### `getQueue()` { #contractsqueueconsumer-getqueue }

```php
public function getQueue(): Queue;
```

Returns the queue this consumer reads from.

#### `receive()` { #contractsqueueconsumer-receive }

```php
public function receive( int $timeout = 0 ): Message|null;
```

Receives a message, blocking up to timeout milliseconds (0 = block
until one is available). Returns null when none arrives in time.

#### `receiveNoWait()` { #contractsqueueconsumer-receivenowait }

```php
public function receiveNoWait(): Message|null;
```

Receives a message without blocking, or null when none is ready.

#### `reject()` { #contractsqueueconsumer-reject }

```php
public function reject(
    Message $message,
    bool $requeue = false
): void;
```

Rejects the message. When requeue is true the transport redelivers it.


## Contracts\Queue\Context

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Context.php){ .src-btn }

A session with the transport. Factory for messages, destinations,
producers and consumers.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Context`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueuecontext-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the context and releases its resources.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createconsumer">
<code class="vis vis-public">public</code>
<code class="ret">Consumer</code>
<code class="sig"><span class="sf">createConsumer</span>( <span class="st">Destination</span> <span class="sv">$destination</span> )</code>
<span class="desc">Creates a consumer for the given destination.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createmessage">
<code class="vis vis-public">public</code>
<code class="ret">Message</code>
<code class="sig"><span class="sf">createMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$body</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Creates a message with an optional body, properties and headers.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createproducer">
<code class="vis vis-public">public</code>
<code class="ret">Producer</code>
<code class="sig"><span class="sf">createProducer</span>()</code>
<span class="desc">Creates a producer.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createqueue">
<code class="vis vis-public">public</code>
<code class="ret">Queue</code>
<code class="sig"><span class="sf">createQueue</span>( <span class="st">string</span> <span class="sv">$queueName</span> )</code>
<span class="desc">Creates a queue destination by name.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createsubscriptionconsumer">
<code class="vis vis-public">public</code>
<code class="ret">SubscriptionConsumer</code>
<code class="sig"><span class="sf">createSubscriptionConsumer</span>()</code>
<span class="desc">Creates a subscription consumer for consuming from several queues.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createtemporaryqueue">
<code class="vis vis-public">public</code>
<code class="ret">Queue</code>
<code class="sig"><span class="sf">createTemporaryQueue</span>()</code>
<span class="desc">Creates a temporary queue tied to the lifetime of the context.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-createtopic">
<code class="vis vis-public">public</code>
<code class="ret">Topic</code>
<code class="sig"><span class="sf">createTopic</span>( <span class="st">string</span> <span class="sv">$topicName</span> )</code>
<span class="desc">Creates a topic destination by name.</span>
</a>
<a class="api-item" href="#contractsqueuecontext-purgequeue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">purgeQueue</span>( <span class="st">Queue</span> <span class="sv">$queue</span> )</code>
<span class="desc">Removes all messages from the given queue.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `close()` { #contractsqueuecontext-close }

```php
public function close(): void;
```

Closes the context and releases its resources.

#### `createConsumer()` { #contractsqueuecontext-createconsumer }

```php
public function createConsumer( Destination $destination ): Consumer;
```

Creates a consumer for the given destination.

#### `createMessage()` { #contractsqueuecontext-createmessage }

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): Message;
```

Creates a message with an optional body, properties and headers.

#### `createProducer()` { #contractsqueuecontext-createproducer }

```php
public function createProducer(): Producer;
```

Creates a producer.

#### `createQueue()` { #contractsqueuecontext-createqueue }

```php
public function createQueue( string $queueName ): Queue;
```

Creates a queue destination by name.

#### `createSubscriptionConsumer()` { #contractsqueuecontext-createsubscriptionconsumer }

```php
public function createSubscriptionConsumer(): SubscriptionConsumer;
```

Creates a subscription consumer for consuming from several queues.

#### `createTemporaryQueue()` { #contractsqueuecontext-createtemporaryqueue }

```php
public function createTemporaryQueue(): Queue;
```

Creates a temporary queue tied to the lifetime of the context.

#### `createTopic()` { #contractsqueuecontext-createtopic }

```php
public function createTopic( string $topicName ): Topic;
```

Creates a topic destination by name.

#### `purgeQueue()` { #contractsqueuecontext-purgequeue }

```php
public function purgeQueue( Queue $queue ): void;
```

Removes all messages from the given queue.


## Contracts\Queue\Destination

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Destination.php){ .src-btn }

Marker interface for a message destination: a Queue or a Topic.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Destination`**
    - [`Phalcon\Contracts\Queue\Queue`](#contractsqueuequeue)
    - [`Phalcon\Contracts\Queue\Topic`](#contractsqueuetopic)

</div>


## Contracts\Queue\Inspectable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Inspectable.php){ .src-btn }

Optional capability contract for a transport that can report statistics for
a queue (for example ready, delayed and buried job counts). Callers detect
support with `instanceof`.

The array returned by getStats() is ADAPTER-NATIVE: its keys and their
semantics are defined by the implementing adapter and are NOT guaranteed to
be uniform across adapters. It is an inspection surface, not a portable or
normalized schema. Each implementation documents the exact keys it returns.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Inspectable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueueinspectable-getstats">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getStats</span>( <span class="st">Queue</span> <span class="sv">$queue</span> )</code>
<span class="desc">Returns statistics for the given queue.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getStats()` { #contractsqueueinspectable-getstats }

```php
public function getStats( Queue $queue ): array;
```

Returns statistics for the given queue.


## Contracts\Queue\Message

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Message.php){ .src-btn }

A message exchanged through the transport. Carries a body, application
properties, transport headers and the standard messaging metadata.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Message`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueuemessage-getbody">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBody</span>()</code>
<span class="desc">Returns the message body.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getcorrelationid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getCorrelationId</span>()</code>
<span class="desc">Returns the correlation id used to correlate request/reply messages.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getheader">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a single header value, or the default when it is not set.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns all transport headers.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getmessageid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getMessageId</span>()</code>
<span class="desc">Returns the message id.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getproperties">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getProperties</span>()</code>
<span class="desc">Returns all application properties.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getproperty">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a single property value, or the default when it is not set.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-getreplyto">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getReplyTo</span>()</code>
<span class="desc">Returns the reply-to destination name.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-gettimestamp">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getTimestamp</span>()</code>
<span class="desc">Returns the timestamp (in milliseconds) or null when it is not set.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-isredelivered">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isRedelivered</span>()</code>
<span class="desc">Whether the message has been redelivered.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setbody">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setBody</span>( <span class="st">string</span> <span class="sv">$body</span> )</code>
<span class="desc">Sets the message body.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setcorrelationid">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setCorrelationId</span>( <span class="st">string</span> <span class="sv">$correlationId</span> )</code>
<span class="desc">Sets the correlation id.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setheader">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a single transport header.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setheaders">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHeaders</span>( <span class="st">array</span> <span class="sv">$headers</span> )</code>
<span class="desc">Replaces all transport headers.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setmessageid">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setMessageId</span>( <span class="st">string</span> <span class="sv">$messageId</span> )</code>
<span class="desc">Sets the message id.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setproperties">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setProperties</span>( <span class="st">array</span> <span class="sv">$properties</span> )</code>
<span class="desc">Replaces all application properties.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setproperty">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a single application property.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setredelivered">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setRedelivered</span>( <span class="st">bool</span> <span class="sv">$redelivered</span> )</code>
<span class="desc">Marks the message as redelivered.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-setreplyto">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setReplyTo</span>( <span class="st">string</span> <span class="sv">$replyTo</span> )</code>
<span class="desc">Sets the reply-to destination name.</span>
</a>
<a class="api-item" href="#contractsqueuemessage-settimestamp">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTimestamp</span>( <span class="st">int</span> <span class="sv">$timestamp</span> )</code>
<span class="desc">Sets the timestamp (in milliseconds).</span>
</a>
</div>

### Methods

<div class="api-group">Public · 20</div>

#### `getBody()` { #contractsqueuemessage-getbody }

```php
public function getBody(): string;
```

Returns the message body.

#### `getCorrelationId()` { #contractsqueuemessage-getcorrelationid }

```php
public function getCorrelationId(): string|null;
```

Returns the correlation id used to correlate request/reply messages.

#### `getHeader()` { #contractsqueuemessage-getheader }

```php
public function getHeader(
    string $name,
    mixed $defaultValue = null
): mixed;
```

Returns a single header value, or the default when it is not set.

#### `getHeaders()` { #contractsqueuemessage-getheaders }

```php
public function getHeaders(): array;
```

Returns all transport headers.

#### `getMessageId()` { #contractsqueuemessage-getmessageid }

```php
public function getMessageId(): string|null;
```

Returns the message id.

#### `getProperties()` { #contractsqueuemessage-getproperties }

```php
public function getProperties(): array;
```

Returns all application properties.

#### `getProperty()` { #contractsqueuemessage-getproperty }

```php
public function getProperty(
    string $name,
    mixed $defaultValue = null
): mixed;
```

Returns a single property value, or the default when it is not set.

#### `getReplyTo()` { #contractsqueuemessage-getreplyto }

```php
public function getReplyTo(): string|null;
```

Returns the reply-to destination name.

#### `getTimestamp()` { #contractsqueuemessage-gettimestamp }

```php
public function getTimestamp(): int|null;
```

Returns the timestamp (in milliseconds) or null when it is not set.

#### `isRedelivered()` { #contractsqueuemessage-isredelivered }

```php
public function isRedelivered(): bool;
```

Whether the message has been redelivered.

#### `setBody()` { #contractsqueuemessage-setbody }

```php
public function setBody( string $body ): void;
```

Sets the message body.

#### `setCorrelationId()` { #contractsqueuemessage-setcorrelationid }

```php
public function setCorrelationId( string $correlationId ): void;
```

Sets the correlation id.

#### `setHeader()` { #contractsqueuemessage-setheader }

```php
public function setHeader(
    string $name,
    mixed $value
): void;
```

Sets a single transport header.

#### `setHeaders()` { #contractsqueuemessage-setheaders }

```php
public function setHeaders( array $headers ): void;
```

Replaces all transport headers.

#### `setMessageId()` { #contractsqueuemessage-setmessageid }

```php
public function setMessageId( string $messageId ): void;
```

Sets the message id.

#### `setProperties()` { #contractsqueuemessage-setproperties }

```php
public function setProperties( array $properties ): void;
```

Replaces all application properties.

#### `setProperty()` { #contractsqueuemessage-setproperty }

```php
public function setProperty(
    string $name,
    mixed $value
): void;
```

Sets a single application property.

#### `setRedelivered()` { #contractsqueuemessage-setredelivered }

```php
public function setRedelivered( bool $redelivered ): void;
```

Marks the message as redelivered.

#### `setReplyTo()` { #contractsqueuemessage-setreplyto }

```php
public function setReplyTo( string $replyTo ): void;
```

Sets the reply-to destination name.

#### `setTimestamp()` { #contractsqueuemessage-settimestamp }

```php
public function setTimestamp( int $timestamp ): void;
```

Sets the timestamp (in milliseconds).


## Contracts\Queue\Processor

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Processor.php){ .src-btn }

Processes a single message. The return value tells the consumer what to
do next: acknowledge, reject, or requeue.

The literal constant values are kept compatible with the wider interop
ecosystem.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Processor`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueueprocessor-process">
<code class="vis vis-public">public</code>
<code class="ret">object|string</code>
<code class="sig"><span class="sf">process</span>(<span class="prm"><span class="st">Message</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">Context</span> <span class="sv">$context</span></span>)</code>
<span class="desc">Processes the message and returns one of the ACK / REJECT / REQUEUE</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ACK</span><span class="sm"> = &quot;enqueue.ack&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">REJECT</span><span class="sm"> = &quot;enqueue.reject&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">REQUEUE</span><span class="sm"> = &quot;enqueue.requeue&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `process()` { #contractsqueueprocessor-process }

```php
public function process(
    Message $message,
    Context $context
): object|string;
```

Processes the message and returns one of the ACK / REJECT / REQUEUE
constants, or an object whose string form is one of those values.


## Contracts\Queue\Producer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Producer.php){ .src-btn }

Sends messages to a destination.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\Producer`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueueproducer-getdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getDeliveryDelay</span>()</code>
<span class="desc">Returns the delivery delay (in milliseconds) or null when not set.</span>
</a>
<a class="api-item" href="#contractsqueueproducer-getpriority">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getPriority</span>()</code>
<span class="desc">Returns the message priority or null when not set.</span>
</a>
<a class="api-item" href="#contractsqueueproducer-gettimetolive">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getTimeToLive</span>()</code>
<span class="desc">Returns the time to live (in milliseconds) or null when not set.</span>
</a>
<a class="api-item" href="#contractsqueueproducer-send">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">send</span>(<span class="prm"><span class="st">Destination</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">Message</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Sends a message to the given destination.</span>
</a>
<a class="api-item" href="#contractsqueueproducer-setdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">Producer</code>
<code class="sig"><span class="sf">setDeliveryDelay</span>( <span class="st">mixed</span> <span class="sv">$deliveryDelay</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the delivery delay (in milliseconds). Null clears it.</span>
</a>
<a class="api-item" href="#contractsqueueproducer-setpriority">
<code class="vis vis-public">public</code>
<code class="ret">Producer</code>
<code class="sig"><span class="sf">setPriority</span>( <span class="st">mixed</span> <span class="sv">$priority</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the message priority. Null clears it.</span>
</a>
<a class="api-item" href="#contractsqueueproducer-settimetolive">
<code class="vis vis-public">public</code>
<code class="ret">Producer</code>
<code class="sig"><span class="sf">setTimeToLive</span>( <span class="st">mixed</span> <span class="sv">$timeToLive</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the time to live (in milliseconds). Null clears it.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `getDeliveryDelay()` { #contractsqueueproducer-getdeliverydelay }

```php
public function getDeliveryDelay(): int|null;
```

Returns the delivery delay (in milliseconds) or null when not set.

#### `getPriority()` { #contractsqueueproducer-getpriority }

```php
public function getPriority(): int|null;
```

Returns the message priority or null when not set.

#### `getTimeToLive()` { #contractsqueueproducer-gettimetolive }

```php
public function getTimeToLive(): int|null;
```

Returns the time to live (in milliseconds) or null when not set.

#### `send()` { #contractsqueueproducer-send }

```php
public function send(
    Destination $destination,
    Message $message
): void;
```

Sends a message to the given destination.

#### `setDeliveryDelay()` { #contractsqueueproducer-setdeliverydelay }

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): Producer;
```

Sets the delivery delay (in milliseconds). Null clears it.

#### `setPriority()` { #contractsqueueproducer-setpriority }

```php
public function setPriority( mixed $priority = null ): Producer;
```

Sets the message priority. Null clears it.

#### `setTimeToLive()` { #contractsqueueproducer-settimetolive }

```php
public function setTimeToLive( mixed $timeToLive = null ): Producer;
```

Sets the time to live (in milliseconds). Null clears it.


## Contracts\Queue\Queue

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Queue.php){ .src-btn }

A queue destination (point-to-point).

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Queue\Destination`](#contractsqueuedestination)
    - **`Phalcon\Contracts\Queue\Queue`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueuequeue-getqueuename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getQueueName</span>()</code>
<span class="desc">Returns the queue name.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getQueueName()` { #contractsqueuequeue-getqueuename }

```php
public function getQueueName(): string;
```

Returns the queue name.


## Contracts\Queue\QueueTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/QueueTypes.php){ .src-btn }

Central registry of the array shapes used across the Queue namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\QueueTypes`**

</div>


## Contracts\Queue\SubscriptionConsumer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/SubscriptionConsumer.php){ .src-btn }

Consumes from several queues at once, dispatching each message to the
callback registered for its consumer.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\SubscriptionConsumer`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueuesubscriptionconsumer-consume">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">consume</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
<span class="desc">Starts consuming, blocking up to timeout milliseconds (0 = block</span>
</a>
<a class="api-item" href="#contractsqueuesubscriptionconsumer-subscribe">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">subscribe</span>(<span class="prm"><span class="st">Consumer</span> <span class="sv">$consumer</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callback</span></span>)</code>
<span class="desc">Subscribes a consumer; the callback receives each delivered message.</span>
</a>
<a class="api-item" href="#contractsqueuesubscriptionconsumer-unsubscribe">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsubscribe</span>( <span class="st">Consumer</span> <span class="sv">$consumer</span> )</code>
<span class="desc">Removes a previously subscribed consumer.</span>
</a>
<a class="api-item" href="#contractsqueuesubscriptionconsumer-unsubscribeall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsubscribeAll</span>()</code>
<span class="desc">Removes every subscribed consumer.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `consume()` { #contractsqueuesubscriptionconsumer-consume }

```php
public function consume( int $timeout = 0 ): void;
```

Starts consuming, blocking up to timeout milliseconds (0 = block
until a message is available).

#### `subscribe()` { #contractsqueuesubscriptionconsumer-subscribe }

```php
public function subscribe(
    Consumer $consumer,
    callable $callback
): void;
```

Subscribes a consumer; the callback receives each delivered message.

#### `unsubscribe()` { #contractsqueuesubscriptionconsumer-unsubscribe }

```php
public function unsubscribe( Consumer $consumer ): void;
```

Removes a previously subscribed consumer.

#### `unsubscribeAll()` { #contractsqueuesubscriptionconsumer-unsubscribeall }

```php
public function unsubscribeAll(): void;
```

Removes every subscribed consumer.


## Contracts\Queue\Topic

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/Topic.php){ .src-btn }

A topic destination (publish/subscribe).

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Queue\Destination`](#contractsqueuedestination)
    - **`Phalcon\Contracts\Queue\Topic`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsqueuetopic-gettopicname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTopicName</span>()</code>
<span class="desc">Returns the topic name.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getTopicName()` { #contractsqueuetopic-gettopicname }

```php
public function getTopicName(): string;
```

Returns the topic name.


## Contracts\Queue\VisibilityAware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Queue/VisibilityAware.php){ .src-btn }

Marker contract for a consumer that supports a visibility timeout
(for example Beanstalk TTR or an SQS visibility timeout). Callers detect
support with `instanceof`. It carries no behavior and commits to no class
shape.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Queue\VisibilityAware`**

</div>


## Contracts\Session\SessionTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Session/SessionTypes.php){ .src-btn }

Central registry of the array shapes used across the Session namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Session\SessionTypes`**

</div>

__Uses__ `Phalcon\Storage\Serializer\SerializerInterface`
{ .api-uses }


## Contracts\Storage\StorageTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Storage/StorageTypes.php){ .src-btn }

Central registry of the array shapes used across the Storage namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Storage\StorageTypes`**

</div>

__Uses__ `Phalcon\Storage\Serializer\SerializerInterface` · `WeakReference`
{ .api-uses }


## Contracts\Support\Collection

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Support/Collection.php){ .src-btn }

Canonical contract for Phalcon\Support\Collection.

@extends ArrayAccess<int|string, mixed>
@extends IteratorAggregate<int|string, mixed>

<div class="api-tree" markdown>

- `\ArrayAccess`
    - **`Phalcon\Contracts\Support\Collection`** - extends `\ArrayAccess`, `\IteratorAggregate`
        - [`Phalcon\Support\Collection\CollectionInterface`](phalcon_support.md#supportcollectioncollectioninterface)

</div>

__Uses__ `ArrayAccess` · `IteratorAggregate`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractssupportcollection-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#contractssupportcollection-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#contractssupportcollection-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#contractssupportcollection-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#contractssupportcollection-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears the internal collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-column">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">column</span>( <span class="st">string</span> <span class="sv">$propertyOrMethod</span> )</code>
<span class="desc">Returns the values from a single property/method extracted from every</span>
</a>
<a class="api-item" href="#contractssupportcollection-each">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">each</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Invokes the callback for every item in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-filter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Returns a new collection of items for which the callback returns true.</span>
</a>
<a class="api-item" href="#contractssupportcollection-first">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">first</span>()</code>
<span class="desc">Returns the first value in the collection or null when empty.</span>
</a>
<a class="api-item" href="#contractssupportcollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an element from the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span> )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns the configured runtime type guard, or null when not set.</span>
</a>
<a class="api-item" href="#contractssupportcollection-getvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValues</span>()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Checks whether an element exists in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Initializes the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-isempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isEmpty</span>()</code>
<span class="desc">Returns true when the collection has no entries.</span>
</a>
<a class="api-item" href="#contractssupportcollection-keys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">keys</span>( <span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span> )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-last">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">last</span>()</code>
<span class="desc">Returns the last value in the collection or null when empty.</span>
</a>
<a class="api-item" href="#contractssupportcollection-map">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">map</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Returns a new collection with the callback applied to every value.</span>
</a>
<a class="api-item" href="#contractssupportcollection-reduce">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">reduce</span>(<span class="prm"><span class="st">callable</span> <span class="sv">$callback</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$initial</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reduces the collection to a single value using the callback.</span>
</a>
<a class="api-item" href="#contractssupportcollection-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Removes the element from the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-replace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">replace</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Replaces the collection data with a new array, clearing first.</span>
</a>
<a class="api-item" href="#contractssupportcollection-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores an element in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-sort">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">sort</span>(<span class="prm"><span class="st">callable|null</span> <span class="sv">$callback</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$order</span><span class="sm"> = SORT_ASC</span></span>)</code>
<span class="desc">Returns a new collection sorted by value, preserving keys.</span>
</a>
<a class="api-item" href="#contractssupportcollection-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the collection as an array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-tojson">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toJson</span>( <span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 4194383</span> )</code>
<span class="desc">Returns the collection serialized as a JSON string.</span>
</a>
<a class="api-item" href="#contractssupportcollection-values">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">values</span>()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-where">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">where</span>(<span class="prm"><span class="st">string</span> <span class="sv">$propertyOrMethod</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Returns a new collection containing only the items whose</span>
</a>
</div>

### Methods

<div class="api-group">Public · 28</div>

#### `__get()` { #contractssupportcollection-__get }

```php
public function __get( string $element ): mixed;
```

#### `__isset()` { #contractssupportcollection-__isset }

```php
public function __isset( string $element ): bool;
```

#### `__set()` { #contractssupportcollection-__set }

```php
public function __set(
    string $element,
    mixed $value
): void;
```

#### `__unset()` { #contractssupportcollection-__unset }

```php
public function __unset( string $element ): void;
```

#### `clear()` { #contractssupportcollection-clear }

```php
public function clear(): void;
```

Clears the internal collection.

#### `column()` { #contractssupportcollection-column }

```php
public function column( string $propertyOrMethod ): array;
```

Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.

#### `each()` { #contractssupportcollection-each }

```php
public function each( callable $callback ): static;
```

Invokes the callback for every item in the collection.

#### `filter()` { #contractssupportcollection-filter }

```php
public function filter( callable $callback ): static;
```

Returns a new collection of items for which the callback returns true.

#### `first()` { #contractssupportcollection-first }

```php
public function first(): mixed;
```

Returns the first value in the collection or null when empty.

#### `get()` { #contractssupportcollection-get }

```php
public function get(
    string $element,
    mixed $defaultValue = null,
    string|null $cast = null
): mixed;
```

Returns an element from the collection.

#### `getKeys()` { #contractssupportcollection-getkeys }

```php
public function getKeys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

#### `getType()` { #contractssupportcollection-gettype }

```php
public function getType(): string|null;
```

Returns the configured runtime type guard, or null when not set.

#### `getValues()` { #contractssupportcollection-getvalues }

```php
public function getValues(): array;
```

Returns the values of the internal array.

#### `has()` { #contractssupportcollection-has }

```php
public function has( string $element ): bool;
```

Checks whether an element exists in the collection.

#### `init()` { #contractssupportcollection-init }

```php
public function init( array $data = [] ): void;
```

Initializes the internal array.

#### `isEmpty()` { #contractssupportcollection-isempty }

```php
public function isEmpty(): bool;
```

Returns true when the collection has no entries.

#### `keys()` { #contractssupportcollection-keys }

```php
public function keys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

#### `last()` { #contractssupportcollection-last }

```php
public function last(): mixed;
```

Returns the last value in the collection or null when empty.

#### `map()` { #contractssupportcollection-map }

```php
public function map( callable $callback ): static;
```

Returns a new collection with the callback applied to every value.

#### `reduce()` { #contractssupportcollection-reduce }

```php
public function reduce(
    callable $callback,
    mixed $initial = null
): mixed;
```

Reduces the collection to a single value using the callback.

#### `remove()` { #contractssupportcollection-remove }

```php
public function remove( string $element ): void;
```

Removes the element from the collection.

#### `replace()` { #contractssupportcollection-replace }

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array, clearing first.

#### `set()` { #contractssupportcollection-set }

```php
public function set(
    string $element,
    mixed $value
): void;
```

Stores an element in the collection.

#### `sort()` { #contractssupportcollection-sort }

```php
public function sort(
    callable|null $callback = null,
    int $order = SORT_ASC
): static;
```

Returns a new collection sorted by value, preserving keys.

#### `toArray()` { #contractssupportcollection-toarray }

```php
public function toArray(): array;
```

Returns the collection as an array.

#### `toJson()` { #contractssupportcollection-tojson }

```php
public function toJson( int $options = 4194383 ): string;
```

Returns the collection serialized as a JSON string.

#### `values()` { #contractssupportcollection-values }

```php
public function values(): array;
```

Returns the values of the internal array.

#### `where()` { #contractssupportcollection-where }

```php
public function where(
    string $propertyOrMethod,
    mixed $value
): static;
```

Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.


## Contracts\Support\Debug\Renderer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Support/Debug/Renderer.php){ .src-btn }

Canonical contract for Phalcon\Support\Debug renderers. Turns an
ExceptionReport into output.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Support\Debug\TemplateAware`](#contractssupportdebugtemplateaware)
    - **`Phalcon\Contracts\Support\Debug\Renderer`**

</div>

__Uses__ `Phalcon\Support\Debug\Report\ExceptionReport`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractssupportdebugrenderer-getcsssources">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCssSources</span>( <span class="st">string</span> <span class="sv">$uri</span> )</code>
<span class="desc">Returns the CSS sources block for the given base URI.</span>
</a>
<a class="api-item" href="#contractssupportdebugrenderer-getjssources">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getJsSources</span>( <span class="st">string</span> <span class="sv">$uri</span> )</code>
<span class="desc">Returns the JavaScript sources block for the given base URI.</span>
</a>
<a class="api-item" href="#contractssupportdebugrenderer-getversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
<span class="desc">Returns the framework version block.</span>
</a>
<a class="api-item" href="#contractssupportdebugrenderer-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">ExceptionReport</span> <span class="sv">$report</span> )</code>
<span class="desc">Renders the report.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getCssSources()` { #contractssupportdebugrenderer-getcsssources }

```php
public function getCssSources( string $uri ): string;
```

Returns the CSS sources block for the given base URI.

#### `getJsSources()` { #contractssupportdebugrenderer-getjssources }

```php
public function getJsSources( string $uri ): string;
```

Returns the JavaScript sources block for the given base URI.

#### `getVersion()` { #contractssupportdebugrenderer-getversion }

```php
public function getVersion(): string;
```

Returns the framework version block.

#### `render()` { #contractssupportdebugrenderer-render }

```php
public function render( ExceptionReport $report ): string;
```

Renders the report.


## Contracts\Support\Debug\TemplateAware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Support/Debug/TemplateAware.php){ .src-btn }

Canonical contract for components that render through named, overridable
template strings.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Support\Debug\TemplateAware`**
    - [`Phalcon\Contracts\Support\Debug\Renderer`](#contractssupportdebugrenderer)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractssupportdebugtemplateaware-gettemplate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTemplate</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the template for the given name (override if set, default</span>
</a>
<a class="api-item" href="#contractssupportdebugtemplateaware-settemplate">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTemplate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$template</span></span>)</code>
<span class="desc">Overrides the template for the given name.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getTemplate()` { #contractssupportdebugtemplateaware-gettemplate }

```php
public function getTemplate( string $name ): string;
```

Returns the template for the given name (override if set, default
otherwise).

#### `setTemplate()` { #contractssupportdebugtemplateaware-settemplate }

```php
public function setTemplate(
    string $name,
    string $template
): static;
```

Overrides the template for the given name.


## Contracts\Support\SupportTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Support/SupportTypes.php){ .src-btn }

Central registry of the array shapes used across the Support namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Support\SupportTypes`**

</div>


## Contracts\Translate\TranslateTypes

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/Translate/TranslateTypes.php){ .src-btn }

Central registry of the array shapes used across the Translate namespace.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Translate\TranslateTypes`**

</div>


## Contracts\View\Renderer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Contracts/View/Renderer.php){ .src-btn }

Renders a template with the given data and returns the result as a string.

A neutral abstraction: it is not tied to MVC, to ADR, or to any particular
template engine. `Phalcon\Mvc\View\Simple` satisfies it out of the box, and
userland engines only need this one method to become a drop-in renderer.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\View\Renderer`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsviewrenderer-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$params</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Renders the template and returns the output.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `render()` { #contractsviewrenderer-render }

```php
public function render(
    string $path,
    array $params = []
): string;
```

Renders the template and returns the output.
