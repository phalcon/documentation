---
title: "Phalcon Contracts"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Contracts

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Contracts\ADR\ADRTypes

Interface

Central registry of the array shapes used across the ADR namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `adr_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `middleware_map` from clashing with an alias
imported from another namespace into the same file.

- **`Phalcon\Contracts\ADR\ADRTypes`**

## Contracts\ADR\Action

Interface

Marker contract for a per-endpoint Action. An Action is a Handler:
`__invoke(request): response`.

- [`Phalcon\Contracts\ADR\Handler`](#contractsadrhandler)
- **`Phalcon\Contracts\ADR\Action`**

## Contracts\ADR\Application

Interface

Handles a request end to end: routes it, dispatches the Action and returns
the response, routing any error through the error responder.

- **`Phalcon\Contracts\ADR\Application`**

`Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#contractsadrapplication-handle" visibility="public" name="handle" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsadrapplication-handle"><code>handle()</code></h4>

```php
public function handle( AttributeRequest $request ): ResponseInterface;
```

## Contracts\ADR\Dispatcher

Interface

Resolves an Action by class name, builds the middleware pipeline around it and
runs it to produce a response.

- **`Phalcon\Contracts\ADR\Dispatcher`**

`Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#contractsadrdispatcher-dispatch" visibility="public" name="dispatch" returnType="ResponseInterface" params={[{"type":"string","name":"actionClass","default":null},{"type":"AttributeRequest","name":"request","default":null},{"type":"array","name":"routeMiddleware","default":"[]"}]}>
</ApiItem>

### Methods

<h4 id="contractsadrdispatcher-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch(
string $actionClass,
AttributeRequest $request,
array $routeMiddleware = []
): ResponseInterface;
```

## Contracts\ADR\Emitter\Emitter

Interface

Sends a response to the client. Called by the front controller only.

- **`Phalcon\Contracts\ADR\Emitter\Emitter`**

`Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#contractsadremitteremitter-emit" visibility="public" name="emit" returnType="void" params={[{"type":"ResponseInterface","name":"response","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsadremitteremitter-emit"><code>emit()</code></h4>

```php
public function emit( ResponseInterface $response ): void;
```

## Contracts\ADR\Exceptions\ADRThrowable

Interface

Base throwable contract for the ADR component. Every ADR exception implements
it, so callers can catch all ADR errors with a single type.

- `\Throwable`
- **`Phalcon\Contracts\ADR\Exceptions\ADRThrowable`**

`Throwable`

## Contracts\ADR\Handler

Interface

Receives the request and returns a response. The terminal handler in the
pipeline is the Action.

- **`Phalcon\Contracts\ADR\Handler`**
- [`Phalcon\Contracts\ADR\Action`](#contractsadraction)

`Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#contractsadrhandler-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsadrhandler-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( AttributeRequest $request ): ResponseInterface;
```

## Contracts\ADR\Middleware

Interface

Wraps the handler chain. Middleware may pass the request through to the next
handler, decorate the response, short-circuit by returning its own response,
or throw to route through the error responder.

- **`Phalcon\Contracts\ADR\Middleware`**

`Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#contractsadrmiddleware-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"AttributeRequest","name":"request","default":null},{"type":"Handler","name":"next","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsadrmiddleware-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
AttributeRequest $request,
Handler $next
): ResponseInterface;
```

## Contracts\ADR\Payload\Payload

Interface

Contract for the immutable payload produced by the domain layer.

- **`Phalcon\Contracts\ADR\Payload\Payload`**

`Throwable`

### Method Summary

<ApiItem href="#contractsadrpayloadpayload-getexception" visibility="public" name="getException" returnType="Throwable|null" params={[]}>
Gets the exception thrown in the domain layer, if any.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-getextras" visibility="public" name="getExtras" returnType="mixed" params={[]}>
Gets the arbitrary extra domain information.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-getinput" visibility="public" name="getInput" returnType="mixed" params={[]}>
Gets the domain input.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-getmessages" visibility="public" name="getMessages" returnType="mixed" params={[]}>
Gets the domain messages.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-getresult" visibility="public" name="getResult" returnType="mixed" params={[]}>
Gets the domain result.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-getstatus" visibility="public" name="getStatus" returnType="mixed" params={[]}>
Gets the payload status.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-withexception" visibility="public" name="withException" returnType="Payload" params={[{"type":"Throwable","name":"exception","default":null}]}>
Returns a copy of the payload with the given exception.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-withextras" visibility="public" name="withExtras" returnType="Payload" params={[{"type":"mixed","name":"extras","default":null}]}>
Returns a copy of the payload with the given extras.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-withinput" visibility="public" name="withInput" returnType="Payload" params={[{"type":"mixed","name":"input","default":null}]}>
Returns a copy of the payload with the given input.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-withmessages" visibility="public" name="withMessages" returnType="Payload" params={[{"type":"mixed","name":"messages","default":null}]}>
Returns a copy of the payload with the given messages.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-withresult" visibility="public" name="withResult" returnType="Payload" params={[{"type":"mixed","name":"result","default":null}]}>
Returns a copy of the payload with the given result.
</ApiItem>
<ApiItem href="#contractsadrpayloadpayload-withstatus" visibility="public" name="withStatus" returnType="Payload" params={[{"type":"mixed","name":"status","default":null}]}>
Returns a copy of the payload with the given status.
</ApiItem>

### Methods

<h4 id="contractsadrpayloadpayload-getexception"><code>getException()</code></h4>

```php
public function getException(): Throwable|null;
```

Gets the exception thrown in the domain layer, if any.

<h4 id="contractsadrpayloadpayload-getextras"><code>getExtras()</code></h4>

```php
public function getExtras(): mixed;
```

Gets the arbitrary extra domain information.

<h4 id="contractsadrpayloadpayload-getinput"><code>getInput()</code></h4>

```php
public function getInput(): mixed;
```

Gets the domain input.

<h4 id="contractsadrpayloadpayload-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): mixed;
```

Gets the domain messages.

<h4 id="contractsadrpayloadpayload-getresult"><code>getResult()</code></h4>

```php
public function getResult(): mixed;
```

Gets the domain result.

<h4 id="contractsadrpayloadpayload-getstatus"><code>getStatus()</code></h4>

```php
public function getStatus(): mixed;
```

Gets the payload status.

<h4 id="contractsadrpayloadpayload-withexception"><code>withException()</code></h4>

```php
public function withException( Throwable $exception ): Payload;
```

Returns a copy of the payload with the given exception.

<h4 id="contractsadrpayloadpayload-withextras"><code>withExtras()</code></h4>

```php
public function withExtras( mixed $extras ): Payload;
```

Returns a copy of the payload with the given extras.

<h4 id="contractsadrpayloadpayload-withinput"><code>withInput()</code></h4>

```php
public function withInput( mixed $input ): Payload;
```

Returns a copy of the payload with the given input.

<h4 id="contractsadrpayloadpayload-withmessages"><code>withMessages()</code></h4>

```php
public function withMessages( mixed $messages ): Payload;
```

Returns a copy of the payload with the given messages.

<h4 id="contractsadrpayloadpayload-withresult"><code>withResult()</code></h4>

```php
public function withResult( mixed $result ): Payload;
```

Returns a copy of the payload with the given result.

<h4 id="contractsadrpayloadpayload-withstatus"><code>withStatus()</code></h4>

```php
public function withStatus( mixed $status ): Payload;
```

Returns a copy of the payload with the given status.

## Contracts\ADR\Responder\Formatter\Formatter

Interface

Renders a payload into a string for a given content type.

- **`Phalcon\Contracts\ADR\Responder\Formatter\Formatter`**

`Phalcon\Contracts\ADR\Payload\Payload`

### Method Summary

<ApiItem href="#contractsadrresponderformatterformatter-accepts" visibility="public" name="accepts" returnType="bool" params={[{"type":"string","name":"acceptHeader","default":null}]}>
Whether this formatter can satisfy the given `Accept` header.
</ApiItem>
<ApiItem href="#contractsadrresponderformatterformatter-contenttype" visibility="public" name="contentType" returnType="string" params={[]}>
The content type this formatter produces.
</ApiItem>
<ApiItem href="#contractsadrresponderformatterformatter-format" visibility="public" name="format" returnType="string" params={[{"type":"Payload","name":"payload","default":null}]}>
Renders the payload into a string.
</ApiItem>

### Methods

<h4 id="contractsadrresponderformatterformatter-accepts"><code>accepts()</code></h4>

```php
public function accepts( string $acceptHeader ): bool;
```

Whether this formatter can satisfy the given `Accept` header.

<h4 id="contractsadrresponderformatterformatter-contenttype"><code>contentType()</code></h4>

```php
public function contentType(): string;
```

The content type this formatter produces.

<h4 id="contractsadrresponderformatterformatter-format"><code>format()</code></h4>

```php
public function format( Payload $payload ): string;
```

Renders the payload into a string.

## Contracts\ADR\Responder\Responder

Interface

Turns a payload into an HTTP response. The only layer that speaks HTTP.

- **`Phalcon\Contracts\ADR\Responder\Responder`**

`Phalcon\Contracts\ADR\Payload\Payload` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#contractsadrresponderresponder-__invoke" visibility="public" name="__invoke" returnType="ResponseInterface" params={[{"type":"RequestInterface","name":"request","default":null},{"type":"ResponseInterface","name":"response","default":null},{"type":"Payload","name":"payload","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsadrresponderresponder-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
RequestInterface $request,
ResponseInterface $response,
Payload $payload
): ResponseInterface;
```

## Contracts\ADR\Router\AttributeFilter

Interface

Validates, casts and converts a router match's positional tail segments into
named request attributes, driven by the matched Action's optional static
`params()` declaration.

- **`Phalcon\Contracts\ADR\Router\AttributeFilter`**

`Phalcon\Contracts\ADR\ADRTypes`

### Method Summary

<ApiItem href="#contractsadrrouterattributefilter-filter" visibility="public" name="filter" returnType="array" params={[{"type":"string","name":"actionClass","default":null},{"type":"array","name":"attributes","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsadrrouterattributefilter-filter"><code>filter()</code></h4>

```php
public function filter(
string $actionClass,
array $attributes
): array;
```

## Contracts\ADR\Router\Router

Interface

Maps a request to an Action by convention: the HTTP method and the static
path segments identify the class; trailing segments become positional
request attributes. No route table.

- **`Phalcon\Contracts\ADR\Router\Router`**

`Phalcon\Contracts\ADR\ADRTypes` · `Phalcon\Http\RequestInterface`

### Method Summary

<ApiItem href="#contractsadrrouterrouter-candidatesfor" visibility="public" name="candidatesFor" returnType="array" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"path","default":null}]}>
Every Action class this router would try for the given method and path,
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-classfor" visibility="public" name="classFor" returnType="string" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"path","default":null}]}>
The class this convention names for a fully static path, derived without
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-match" visibility="public" name="match" returnType="RouterMatch|null" params={[{"type":"RequestInterface","name":"request","default":null}]}>
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-methodfor" visibility="public" name="methodFor" returnType="string|null" params={[{"type":"string","name":"className","default":null}]}>
The HTTP method the given Action class answers, uppercased, or null when
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-pathfor" visibility="public" name="pathFor" returnType="string|null" params={[{"type":"string","name":"className","default":null}]}>
The canonical static path the given Action class answers, or null when
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-setactiondirectory" visibility="public" name="setActionDirectory" returnType="Router" params={[{"type":"string","name":"actionDirectory","default":null}]}>
The filesystem root that backs the base namespace. The router uses it to
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-setbasenamespace" visibility="public" name="setBaseNamespace" returnType="Router" params={[{"type":"string","name":"baseNamespace","default":null}]}>
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-setmiddlewaremap" visibility="public" name="setMiddlewareMap" returnType="Router" params={[{"type":"array","name":"middlewareMap","default":null}]}>
</ApiItem>
<ApiItem href="#contractsadrrouterrouter-setwordseparator" visibility="public" name="setWordSeparator" returnType="Router" params={[{"type":"string","name":"wordSeparator","default":null}]}>
The single delimiter between words in a path segment. Applied
</ApiItem>

### Methods

<h4 id="contractsadrrouterrouter-candidatesfor"><code>candidatesFor()</code></h4>

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

<h4 id="contractsadrrouterrouter-classfor"><code>classFor()</code></h4>

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

<h4 id="contractsadrrouterrouter-match"><code>match()</code></h4>

```php
public function match( RequestInterface $request ): RouterMatch|null;
```

<h4 id="contractsadrrouterrouter-methodfor"><code>methodFor()</code></h4>

```php
public function methodFor( string $className ): string|null;
```

The HTTP method the given Action class answers, uppercased, or null when
the class is not one this convention would have produced.

The counterpart to pathFor(): same argument, same null semantics, so a
caller that accepts one answer accepts the other. Together they are the
whole inverse of classFor().

<h4 id="contractsadrrouterrouter-pathfor"><code>pathFor()</code></h4>

```php
public function pathFor( string $className ): string|null;
```

The canonical static path the given Action class answers, or null when
the class is not derivable from the base namespace. Positional
attributes are not part of the canonical path.

<h4 id="contractsadrrouterrouter-setactiondirectory"><code>setActionDirectory()</code></h4>

```php
public function setActionDirectory( string $actionDirectory ): Router;
```

The filesystem root that backs the base namespace. The router uses it to
decide whether a path segment names a sub-namespace.

<h4 id="contractsadrrouterrouter-setbasenamespace"><code>setBaseNamespace()</code></h4>

```php
public function setBaseNamespace( string $baseNamespace ): Router;
```

<h4 id="contractsadrrouterrouter-setmiddlewaremap"><code>setMiddlewareMap()</code></h4>

```php
public function setMiddlewareMap( array $middlewareMap ): Router;
```

<h4 id="contractsadrrouterrouter-setwordseparator"><code>setWordSeparator()</code></h4>

```php
public function setWordSeparator( string $wordSeparator ): Router;
```

The single delimiter between words in a path segment. Applied
symmetrically when deriving a class name from a path and a path from a
class name. Any other character is literal.

## Contracts\ADR\Router\RouterMatch

Interface

The result of matching a request against the router: the Action class, the
extracted route attributes, the route's middleware and its optional name.

- **`Phalcon\Contracts\ADR\Router\RouterMatch`**

`Phalcon\Contracts\ADR\ADRTypes`

### Method Summary

<ApiItem href="#contractsadrrouterroutermatch-getaction" visibility="public" name="getAction" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#contractsadrrouterroutermatch-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsadrrouterroutermatch-getmiddleware" visibility="public" name="getMiddleware" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsadrrouterroutermatch-getname" visibility="public" name="getName" returnType="string|null" params={[]}>
</ApiItem>

### Methods

<h4 id="contractsadrrouterroutermatch-getaction"><code>getAction()</code></h4>

```php
public function getAction(): string;
```

<h4 id="contractsadrrouterroutermatch-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

<h4 id="contractsadrrouterroutermatch-getmiddleware"><code>getMiddleware()</code></h4>

```php
public function getMiddleware(): array;
```

<h4 id="contractsadrrouterroutermatch-getname"><code>getName()</code></h4>

```php
public function getName(): string|null;
```

## Contracts\Acl\AclTypes

Interface

Central registry of the array shapes used across the Acl namespace.

- **`Phalcon\Contracts\Acl\AclTypes`**

`Phalcon\Acl\ComponentAwareInterface` · `Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\RoleAwareInterface` · `Phalcon\Acl\RoleInterface`

## Contracts\Acl\Adapter\Adapter

Interface

Canonical contract for Phalcon\Acl adapters

- **`Phalcon\Contracts\Acl\Adapter\Adapter`**
- [`Phalcon\Acl\Adapter\AdapterInterface`](/6.0/api/phalcon_acl/#acladapteradapterinterface)

`Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\RoleInterface` · `Phalcon\Contracts\Acl\AclTypes`

### Method Summary

<ApiItem href="#contractsacladapteradapter-addcomponent" visibility="public" name="addComponent" returnType="bool" params={[{"type":"ComponentInterface|string","name":"componentObject","default":null},{"type":"array|string","name":"accessList","default":null}]}>
Adds a component to the ACL list
</ApiItem>
<ApiItem href="#contractsacladapteradapter-addcomponentaccess" visibility="public" name="addComponentAccess" returnType="bool" params={[{"type":"string","name":"componentName","default":null},{"type":"mixed","name":"accessList","default":null}]}>
Adds access to components
</ApiItem>
<ApiItem href="#contractsacladapteradapter-addinherit" visibility="public" name="addInherit" returnType="bool" params={[{"type":"string","name":"roleName","default":null},{"type":"array|RoleInterface|string","name":"roleToInherit","default":null}]}>
Add a role which inherits from an existing role
</ApiItem>
<ApiItem href="#contractsacladapteradapter-addrole" visibility="public" name="addRole" returnType="bool" params={[{"type":"mixed","name":"roleObject","default":null},{"type":"array|RoleInterface|string|null","name":"accessInherits","default":"null"}]}>
Adds a role to the ACL list. The second parameter lets to inherit access
</ApiItem>
<ApiItem href="#contractsacladapteradapter-allow" visibility="public" name="allow" returnType="void" params={[{"type":"string","name":"roleName","default":null},{"type":"string","name":"componentName","default":null},{"type":"array|string","name":"access","default":null},{"type":"callable|null","name":"function","default":"null"}]}>
Allow access to a role on a component. You can use `*` as wildcard
</ApiItem>
<ApiItem href="#contractsacladapteradapter-deny" visibility="public" name="deny" returnType="void" params={[{"type":"string","name":"roleName","default":null},{"type":"string","name":"componentName","default":null},{"type":"array|string","name":"access","default":null},{"type":"callable|null","name":"function","default":"null"}]}>
Deny access to a role on a component. You can use `*` as wildcard
</ApiItem>
<ApiItem href="#contractsacladapteradapter-dropcomponentaccess" visibility="public" name="dropComponentAccess" returnType="void" params={[{"type":"string","name":"componentName","default":null},{"type":"array|string","name":"accessList","default":null}]}>
Removes access from a component
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getactiveaccess" visibility="public" name="getActiveAccess" returnType="string|null" params={[]}>
Returns the access which the list is checking if a role can access it
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getactivecomponent" visibility="public" name="getActiveComponent" returnType="string|null" params={[]}>
Returns the component which the list is checking if some role can access
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getactiverole" visibility="public" name="getActiveRole" returnType="string|null" params={[]}>
Returns the role which the list is checking if it's allowed to certain
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getcomponents" visibility="public" name="getComponents" returnType="array|null" params={[]}>
Return an array with every component registered in the list
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getdefaultaction" visibility="public" name="getDefaultAction" returnType="int" params={[]}>
Returns the default action
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getinheritedroles" visibility="public" name="getInheritedRoles" returnType="array|null" params={[{"type":"string","name":"roleName","default":"\"\""}]}>
Returns the inherited roles for a passed role name. If no role name
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getnoargumentsdefaultaction" visibility="public" name="getNoArgumentsDefaultAction" returnType="int" params={[]}>
Returns the default ACL access level for no arguments provided in
</ApiItem>
<ApiItem href="#contractsacladapteradapter-getroles" visibility="public" name="getRoles" returnType="array|null" params={[]}>
Return an array with every role registered in the list
</ApiItem>
<ApiItem href="#contractsacladapteradapter-isallowed" visibility="public" name="isAllowed" returnType="bool" params={[{"type":"mixed","name":"roleName","default":null},{"type":"mixed","name":"componentName","default":null},{"type":"string","name":"access","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Check whether a role is allowed to access an action from a component
</ApiItem>
<ApiItem href="#contractsacladapteradapter-iscomponent" visibility="public" name="isComponent" returnType="bool" params={[{"type":"string","name":"componentName","default":null}]}>
Check whether a component exists in the components list
</ApiItem>
<ApiItem href="#contractsacladapteradapter-isrole" visibility="public" name="isRole" returnType="bool" params={[{"type":"string","name":"roleName","default":null}]}>
Check whether role exist in the roles list
</ApiItem>
<ApiItem href="#contractsacladapteradapter-setdefaultaction" visibility="public" name="setDefaultAction" returnType="void" params={[{"type":"int","name":"defaultAccess","default":null}]}>
Sets the default access level
</ApiItem>
<ApiItem href="#contractsacladapteradapter-setnoargumentsdefaultaction" visibility="public" name="setNoArgumentsDefaultAction" returnType="void" params={[{"type":"int","name":"defaultAccess","default":null}]}>
Sets the default access level (Phalcon\Acl\Enum::ALLOW or
</ApiItem>

### Methods

<h4 id="contractsacladapteradapter-addcomponent"><code>addComponent()</code></h4>

```php
public function addComponent(
ComponentInterface|string $componentObject,
array|string $accessList
): bool;
```

Adds a component to the ACL list

Access names can be a particular action, for instance `search`, `update`
`delete` etc. or a list of them.

<h4 id="contractsacladapteradapter-addcomponentaccess"><code>addComponentAccess()</code></h4>

```php
public function addComponentAccess(
string $componentName,
mixed $accessList
): bool;
```

Adds access to components

<h4 id="contractsacladapteradapter-addinherit"><code>addInherit()</code></h4>

```php
public function addInherit(
string $roleName,
array|RoleInterface|string $roleToInherit
): bool;
```

Add a role which inherits from an existing role

<h4 id="contractsacladapteradapter-addrole"><code>addRole()</code></h4>

```php
public function addRole(
mixed $roleObject,
array|RoleInterface|string|null $accessInherits = null
): bool;
```

Adds a role to the ACL list. The second parameter lets to inherit access
from an existing role

<h4 id="contractsacladapteradapter-allow"><code>allow()</code></h4>

```php
public function allow(
string $roleName,
string $componentName,
array|string $access,
callable|null $function = null
): void;
```

Allow access to a role on a component. You can use `*` as wildcard

<h4 id="contractsacladapteradapter-deny"><code>deny()</code></h4>

```php
public function deny(
string $roleName,
string $componentName,
array|string $access,
callable|null $function = null
): void;
```

Deny access to a role on a component. You can use `*` as wildcard

<h4 id="contractsacladapteradapter-dropcomponentaccess"><code>dropComponentAccess()</code></h4>

```php
public function dropComponentAccess(
string $componentName,
array|string $accessList
): void;
```

Removes access from a component

<h4 id="contractsacladapteradapter-getactiveaccess"><code>getActiveAccess()</code></h4>

```php
public function getActiveAccess(): string|null;
```

Returns the access which the list is checking if a role can access it

<h4 id="contractsacladapteradapter-getactivecomponent"><code>getActiveComponent()</code></h4>

```php
public function getActiveComponent(): string|null;
```

Returns the component which the list is checking if some role can access
it

<h4 id="contractsacladapteradapter-getactiverole"><code>getActiveRole()</code></h4>

```php
public function getActiveRole(): string|null;
```

Returns the role which the list is checking if it's allowed to certain
component/access

<h4 id="contractsacladapteradapter-getcomponents"><code>getComponents()</code></h4>

```php
public function getComponents(): array|null;
```

Return an array with every component registered in the list

<h4 id="contractsacladapteradapter-getdefaultaction"><code>getDefaultAction()</code></h4>

```php
public function getDefaultAction(): int;
```

Returns the default action

<h4 id="contractsacladapteradapter-getinheritedroles"><code>getInheritedRoles()</code></h4>

```php
public function getInheritedRoles( string $roleName = "" ): array|null;
```

Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array

<h4 id="contractsacladapteradapter-getnoargumentsdefaultaction"><code>getNoArgumentsDefaultAction()</code></h4>

```php
public function getNoArgumentsDefaultAction(): int;
```

Returns the default ACL access level for no arguments provided in
`isAllowed` action if a `function` (callable) exists for `accessKey`

<h4 id="contractsacladapteradapter-getroles"><code>getRoles()</code></h4>

```php
public function getRoles(): array|null;
```

Return an array with every role registered in the list

<h4 id="contractsacladapteradapter-isallowed"><code>isAllowed()</code></h4>

```php
public function isAllowed(
mixed $roleName,
mixed $componentName,
string $access,
array|null $parameters = null
): bool;
```

Check whether a role is allowed to access an action from a component

<h4 id="contractsacladapteradapter-iscomponent"><code>isComponent()</code></h4>

```php
public function isComponent( string $componentName ): bool;
```

Check whether a component exists in the components list

<h4 id="contractsacladapteradapter-isrole"><code>isRole()</code></h4>

```php
public function isRole( string $roleName ): bool;
```

Check whether role exist in the roles list

<h4 id="contractsacladapteradapter-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( int $defaultAccess ): void;
```

Sets the default access level
(Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)

<h4 id="contractsacladapteradapter-setnoargumentsdefaultaction"><code>setNoArgumentsDefaultAction()</code></h4>

```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (Phalcon\Acl\Enum::ALLOW or
Phalcon\Acl\Enum::DENY) for no arguments provided in isAllowed action if
there exists func for accessKey

## Contracts\Acl\Adapter\Persistable

Interface

Contract for ACL adapters that persist their policy to a backing store as a
whole-policy snapshot (coarse granularity).

NOTE: callable (closure) rules registered via allow()/deny() are NOT
persisted - closures are not serializable. Re-register them in code after
load(). The static rule set and role inheritance are persisted in full.

- **`Phalcon\Contracts\Acl\Adapter\Persistable`**

### Method Summary

<ApiItem href="#contractsacladapterpersistable-load" visibility="public" name="load" returnType="bool" params={[]}>
Loads the policy snapshot from the backing store, replacing current
</ApiItem>
<ApiItem href="#contractsacladapterpersistable-save" visibility="public" name="save" returnType="bool" params={[]}>
Persists the current policy snapshot to the backing store.
</ApiItem>

### Methods

<h4 id="contractsacladapterpersistable-load"><code>load()</code></h4>

```php
public function load(): bool;
```

Loads the policy snapshot from the backing store, replacing current
in-memory state. Returns false if no snapshot was found.

<h4 id="contractsacladapterpersistable-save"><code>save()</code></h4>

```php
public function save(): bool;
```

Persists the current policy snapshot to the backing store.

## Contracts\Acl\Component

Interface

Canonical contract for an ACL component entity.

- **`Phalcon\Contracts\Acl\Component`**
- [`Phalcon\Acl\ComponentInterface`](/6.0/api/phalcon_acl/#aclcomponentinterface)

### Method Summary

<ApiItem href="#contractsaclcomponent-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
Magic method __toString
</ApiItem>
<ApiItem href="#contractsaclcomponent-getdescription" visibility="public" name="getDescription" returnType="string|null" params={[]}>
Returns component description
</ApiItem>
<ApiItem href="#contractsaclcomponent-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the component name
</ApiItem>

### Methods

<h4 id="contractsaclcomponent-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Magic method __toString

<h4 id="contractsaclcomponent-getdescription"><code>getDescription()</code></h4>

```php
public function getDescription(): string|null;
```

Returns component description

<h4 id="contractsaclcomponent-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the component name

## Contracts\Acl\ComponentAware

Interface

Canonical contract for ACL component-aware objects.

- **`Phalcon\Contracts\Acl\ComponentAware`**
- [`Phalcon\Acl\ComponentAwareInterface`](/6.0/api/phalcon_acl/#aclcomponentawareinterface)

### Method Summary

<ApiItem href="#contractsaclcomponentaware-getcomponentname" visibility="public" name="getComponentName" returnType="string" params={[]}>
Returns component name
</ApiItem>

### Methods

<h4 id="contractsaclcomponentaware-getcomponentname"><code>getComponentName()</code></h4>

```php
public function getComponentName(): string;
```

Returns component name

## Contracts\Acl\Role

Interface

Canonical contract for an ACL role entity.

- **`Phalcon\Contracts\Acl\Role`**
- [`Phalcon\Acl\RoleInterface`](/6.0/api/phalcon_acl/#aclroleinterface)

### Method Summary

<ApiItem href="#contractsaclrole-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
Magic method __toString
</ApiItem>
<ApiItem href="#contractsaclrole-getdescription" visibility="public" name="getDescription" returnType="string|null" params={[]}>
Returns role description
</ApiItem>
<ApiItem href="#contractsaclrole-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the role name
</ApiItem>

### Methods

<h4 id="contractsaclrole-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Magic method __toString

<h4 id="contractsaclrole-getdescription"><code>getDescription()</code></h4>

```php
public function getDescription(): string|null;
```

Returns role description

<h4 id="contractsaclrole-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the role name

## Contracts\Acl\RoleAware

Interface

Canonical contract for ACL role-aware objects.

- **`Phalcon\Contracts\Acl\RoleAware`**
- [`Phalcon\Acl\RoleAwareInterface`](/6.0/api/phalcon_acl/#aclroleawareinterface)

### Method Summary

<ApiItem href="#contractsaclroleaware-getrolename" visibility="public" name="getRoleName" returnType="string" params={[]}>
Returns role name
</ApiItem>

### Methods

<h4 id="contractsaclroleaware-getrolename"><code>getRoleName()</code></h4>

```php
public function getRoleName(): string;
```

Returns role name

## Contracts\Application\ApplicationTypes

Interface

Central registry of the array shapes used across the Application namespace.

- **`Phalcon\Contracts\Application\ApplicationTypes`**

`Closure`

## Contracts\Assets\Asset

Interface

Canonical contract for Phalcon\Assets\Asset.

Covers collection membership: an asset's key, type, HTML attributes, and
filter flag. The file-output pipeline (Phalcon\Assets\Manager::output())
requires the concrete Phalcon\Assets\Asset class.

- **`Phalcon\Contracts\Assets\Asset`**
- [`Phalcon\Assets\AssetInterface`](/6.0/api/phalcon_assets/#assetsassetinterface)

### Method Summary

<ApiItem href="#contractsassetsasset-getassetkey" visibility="public" name="getAssetKey" returnType="string" params={[]}>
Gets the asset's key.
</ApiItem>
<ApiItem href="#contractsassetsasset-getattributes" visibility="public" name="getAttributes" returnType="array|null" params={[]}>
Gets extra HTML attributes.
</ApiItem>
<ApiItem href="#contractsassetsasset-getfilter" visibility="public" name="getFilter" returnType="bool" params={[]}>
Gets if the asset must be filtered or not.
</ApiItem>
<ApiItem href="#contractsassetsasset-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Gets the asset's type.
</ApiItem>
<ApiItem href="#contractsassetsasset-setattributes" visibility="public" name="setAttributes" returnType="Asset" params={[{"type":"array","name":"attributes","default":null}]}>
Sets extra HTML attributes.
</ApiItem>
<ApiItem href="#contractsassetsasset-setfilter" visibility="public" name="setFilter" returnType="Asset" params={[{"type":"bool","name":"filter","default":null}]}>
Sets if the asset must be filtered or not.
</ApiItem>
<ApiItem href="#contractsassetsasset-settype" visibility="public" name="setType" returnType="Asset" params={[{"type":"string","name":"type","default":null}]}>
Sets the asset's type.
</ApiItem>

### Methods

<h4 id="contractsassetsasset-getassetkey"><code>getAssetKey()</code></h4>

```php
public function getAssetKey(): string;
```

Gets the asset's key.

<h4 id="contractsassetsasset-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array|null;
```

Gets extra HTML attributes.

<h4 id="contractsassetsasset-getfilter"><code>getFilter()</code></h4>

```php
public function getFilter(): bool;
```

Gets if the asset must be filtered or not.

<h4 id="contractsassetsasset-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Gets the asset's type.

<h4 id="contractsassetsasset-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): Asset;
```

Sets extra HTML attributes.

<h4 id="contractsassetsasset-setfilter"><code>setFilter()</code></h4>

```php
public function setFilter( bool $filter ): Asset;
```

Sets if the asset must be filtered or not.

<h4 id="contractsassetsasset-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): Asset;
```

Sets the asset's type.

## Contracts\Assets\AssetsTypes

Interface

Central registry of the array shapes used across the Assets namespace.

- **`Phalcon\Contracts\Assets\AssetsTypes`**

`Phalcon\Assets\AssetInterface` · `Phalcon\Assets\Collection` · `Phalcon\Assets\FilterInterface` · `Phalcon\Assets\Manager`

## Contracts\Assets\Filter

Interface

Canonical contract for Phalcon\Assets filters (Cssmin, Jsmin, None, and
custom user filters).

- **`Phalcon\Contracts\Assets\Filter`**
- [`Phalcon\Assets\FilterInterface`](/6.0/api/phalcon_assets/#assetsfilterinterface)

### Method Summary

<ApiItem href="#contractsassetsfilter-filter" visibility="public" name="filter" returnType="string" params={[{"type":"string","name":"content","default":null}]}>
Filters the content returning a string with the filtered content
</ApiItem>

### Methods

<h4 id="contractsassetsfilter-filter"><code>filter()</code></h4>

```php
public function filter( string $content ): string;
```

Filters the content returning a string with the filtered content

## Contracts\Auth\Access\Access

Interface

Access gates are Specifications: policies that decide whether the current
identity may run the given action. The enforcement point passes the
identity (the guard) and the request context on every call; gates hold no
reference to the auth manager.

- **`Phalcon\Contracts\Auth\Access\Access`**

`Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

<ApiItem href="#contractsauthaccessaccess-getexceptactions" visibility="public" name="getExceptActions" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthaccessaccess-getonlyactions" visibility="public" name="getOnlyActions" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthaccessaccess-isallowed" visibility="public" name="isAllowed" returnType="bool" params={[{"type":"Guard","name":"guard","default":null},{"type":"string","name":"actionName","default":null},{"type":"array","name":"context","default":"[]"}]}>
Whether the identity behind the guard may run the action.
</ApiItem>
<ApiItem href="#contractsauthaccessaccess-redirectto" visibility="public" name="redirectTo" returnType="array|null" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthaccessaccess-setexceptactions" visibility="public" name="setExceptActions" returnType="void" params={[{"type":"array","name":"exceptActions","default":"[]"}]}>
Exempts the listed action names from the gate; every other action is
</ApiItem>
<ApiItem href="#contractsauthaccessaccess-setonlyactions" visibility="public" name="setOnlyActions" returnType="void" params={[{"type":"array","name":"onlyActions","default":"[]"}]}>
Restricts the gate to the listed action names.
</ApiItem>

### Methods

<h4 id="contractsauthaccessaccess-getexceptactions"><code>getExceptActions()</code></h4>

```php
public function getExceptActions(): array;
```

<h4 id="contractsauthaccessaccess-getonlyactions"><code>getOnlyActions()</code></h4>

```php
public function getOnlyActions(): array;
```

<h4 id="contractsauthaccessaccess-isallowed"><code>isAllowed()</code></h4>

```php
public function isAllowed(
Guard $guard,
string $actionName,
array $context = []
): bool;
```

Whether the identity behind the guard may run the action.

<h4 id="contractsauthaccessaccess-redirectto"><code>redirectTo()</code></h4>

```php
public function redirectTo(): array|null;
```

<h4 id="contractsauthaccessaccess-setexceptactions"><code>setExceptActions()</code></h4>

```php
public function setExceptActions( array $exceptActions = [] ): void;
```

Exempts the listed action names from the gate; every other action is
checked. See setOnlyActions() for the gate-family divergence note.

<h4 id="contractsauthaccessaccess-setonlyactions"><code>setOnlyActions()</code></h4>

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

Interface

Authentication adapter contract.

Adapters look users up by credentials or by identifier and verify the
password against the stored hash. The credential payload is intentionally
unsealed: any user-row field may be used as the lookup key, plus an
optional `password` entry that is ignored during the row match and
consumed only by validateCredentials().

- **`Phalcon\Contracts\Auth\Adapter\Adapter`**
- [`Phalcon\Contracts\Auth\Adapter\RememberAdapter`](#contractsauthadapterrememberadapter)

`Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`

### Method Summary

<ApiItem href="#contractsauthadapteradapter-fromoptions" visibility="public" name="fromOptions" returnType="static" params={[{"type":"Security","name":"hasher","default":null},{"type":"array","name":"options","default":null}]}>
Build an adapter from a flat options map. Used by ManagerFactory to
</ApiItem>
<ApiItem href="#contractsauthadapteradapter-retrievebycredentials" visibility="public" name="retrieveByCredentials" returnType="AuthUser|null" params={[{"type":"array","name":"credentials","default":null}]}>
Find a user matching the given credentials (e.g. ['email' => 'a@b']).
</ApiItem>
<ApiItem href="#contractsauthadapteradapter-retrievebyid" visibility="public" name="retrieveById" returnType="AuthUser|null" params={[{"type":"int|string","name":"id","default":null}]}>
Find a user by their unique identifier.
</ApiItem>
<ApiItem href="#contractsauthadapteradapter-validatecredentials" visibility="public" name="validateCredentials" returnType="bool" params={[{"type":"AuthUser","name":"user","default":null},{"type":"array","name":"credentials","default":null}]}>
Validate the provided credentials against the given user.
</ApiItem>

### Methods

<h4 id="contractsauthadapteradapter-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
Security $hasher,
array $options
): static;
```

Build an adapter from a flat options map. Used by ManagerFactory to
wire adapters from the application config; each implementation is
free to interpret the option keys it cares about.

<h4 id="contractsauthadapteradapter-retrievebycredentials"><code>retrieveByCredentials()</code></h4>

```php
public function retrieveByCredentials( array $credentials ): AuthUser|null;
```

Find a user matching the given credentials (e.g. ['email' => 'a@b']).
The 'password' key, if present, is ignored during the lookup.
Returns null if no user matches.

<h4 id="contractsauthadapteradapter-retrievebyid"><code>retrieveById()</code></h4>

```php
public function retrieveById( int|string $id ): AuthUser|null;
```

Find a user by their unique identifier.

<h4 id="contractsauthadapteradapter-validatecredentials"><code>validateCredentials()</code></h4>

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

Interface

Authentication adapter configuration contract.

Per-adapter config shape is intentionally adapter-specific (e.g. Stream
exposes getFile(), Memory exposes getUsers()); the only field shared across
all adapters is the optional model class used during user hydration.

- **`Phalcon\Contracts\Auth\Adapter\AdapterConfig`**

### Method Summary

<ApiItem href="#contractsauthadapteradapterconfig-getmodel" visibility="public" name="getModel" returnType="string|null" params={[]}>
Returns the user-model class name to hydrate, if configured.
</ApiItem>

### Methods

<h4 id="contractsauthadapteradapterconfig-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): string|null;
```

Returns the user-model class name to hydrate, if configured.

## Contracts\Auth\Adapter\RememberAdapter

Interface

Capability extension implemented by adapters that support remember-me.

- [`Phalcon\Contracts\Auth\Adapter\Adapter`](#contractsauthadapteradapter)
- **`Phalcon\Contracts\Auth\Adapter\RememberAdapter`**

`Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\RememberToken`

### Method Summary

<ApiItem href="#contractsauthadapterrememberadapter-createremembertoken" visibility="public" name="createRememberToken" returnType="RememberToken" params={[{"type":"AuthUser","name":"user","default":null}]}>
Create and persist a new remember token for the user.
</ApiItem>
<ApiItem href="#contractsauthadapterrememberadapter-retrievebytoken" visibility="public" name="retrieveByToken" returnType="AuthUser|null" params={[{"type":"int|string","name":"id","default":null},{"type":"string","name":"token","default":null},{"type":"string|null","name":"userAgent","default":"null"}]}>
Retrieve a user by the remember-me cookie payload.
</ApiItem>

### Methods

<h4 id="contractsauthadapterrememberadapter-createremembertoken"><code>createRememberToken()</code></h4>

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

<h4 id="contractsauthadapterrememberadapter-retrievebytoken"><code>retrieveByToken()</code></h4>

```php
public function retrieveByToken(
int|string $id,
string $token,
string|null $userAgent = null
): AuthUser|null;
```

Retrieve a user by the remember-me cookie payload.

## Contracts\Auth\AuthRemember

Interface

Implemented by authenticatable models that support remember-me tokens.
This is intentionally separate from AuthUser so that adapters which do
not support remember-me are not forced to implement it.

- **`Phalcon\Contracts\Auth\AuthRemember`**

### Method Summary

<ApiItem href="#contractsauthauthremember-createremembertoken" visibility="public" name="createRememberToken" returnType="RememberToken" params={[{"type":"string","name":"token","default":null},{"type":"string|null","name":"userAgent","default":"null"}]}>
Persists a new remember token for the user.
</ApiItem>
<ApiItem href="#contractsauthauthremember-getremembertoken" visibility="public" name="getRememberToken" returnType="RememberToken|null" params={[{"type":"string","name":"token","default":null}]}>
Returns the remember token entry matching the given token value,
</ApiItem>

### Methods

<h4 id="contractsauthauthremember-createremembertoken"><code>createRememberToken()</code></h4>

```php
public function createRememberToken(
string $token,
string|null $userAgent = null
): RememberToken;
```

Persists a new remember token for the user.

<h4 id="contractsauthauthremember-getremembertoken"><code>getRememberToken()</code></h4>

```php
public function getRememberToken( string $token ): RememberToken|null;
```

Returns the remember token entry matching the given token value,
or null if not found.

## Contracts\Auth\AuthTypes

Interface

Central registry of the array shapes used across the Auth namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `auth_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `adapter_config` from clashing with an alias
imported from another namespace into the same file.

- **`Phalcon\Contracts\Auth\AuthTypes`**

`Phalcon\Contracts\Auth\Access\Access`

## Contracts\Auth\AuthUser

Interface

Implemented by user models that can be authenticated.

- **`Phalcon\Contracts\Auth\AuthUser`**

### Method Summary

<ApiItem href="#contractsauthauthuser-getauthidentifier" visibility="public" name="getAuthIdentifier" returnType="int|string" params={[]}>
Returns the unique identifier for the authenticatable user
</ApiItem>
<ApiItem href="#contractsauthauthuser-getauthpassword" visibility="public" name="getAuthPassword" returnType="string" params={[]}>
Returns the hashed password for the authenticatable user.
</ApiItem>

### Methods

<h4 id="contractsauthauthuser-getauthidentifier"><code>getAuthIdentifier()</code></h4>

```php
public function getAuthIdentifier(): int|string;
```

Returns the unique identifier for the authenticatable user
(e.g. the primary key). Implementations MUST return a non-null
scalar; if a record cannot produce one, the implementation should
fail at construction time rather than returning null.

<h4 id="contractsauthauthuser-getauthpassword"><code>getAuthPassword()</code></h4>

```php
public function getAuthPassword(): string;
```

Returns the hashed password for the authenticatable user.

## Contracts\Auth\Guard\BasicAuth

Interface

- **`Phalcon\Contracts\Auth\Guard\BasicAuth`**

`Phalcon\Contracts\Auth\AuthUser`

### Method Summary

<ApiItem href="#contractsauthguardbasicauth-basic" visibility="public" name="basic" returnType="bool" params={[{"type":"string","name":"field","default":"\"email\""},{"type":"array","name":"extraConditions","default":"[]"}]}>
Authenticate against HTTP Basic credentials. Returns true on success.
</ApiItem>
<ApiItem href="#contractsauthguardbasicauth-oncebasic" visibility="public" name="onceBasic" returnType="AuthUser|false" params={[{"type":"string","name":"field","default":"\"email\""},{"type":"array","name":"extraConditions","default":"[]"}]}>
Like basic() but does not persist; returns the resolved user on success
</ApiItem>

### Methods

<h4 id="contractsauthguardbasicauth-basic"><code>basic()</code></h4>

```php
public function basic(
string $field = "email",
array $extraConditions = []
): bool;
```

Authenticate against HTTP Basic credentials. Returns true on success.

<h4 id="contractsauthguardbasicauth-oncebasic"><code>onceBasic()</code></h4>

```php
public function onceBasic(
string $field = "email",
array $extraConditions = []
): AuthUser|false;
```

Like basic() but does not persist; returns the resolved user on success
or false on failure.

## Contracts\Auth\Guard\Guard

Interface

- **`Phalcon\Contracts\Auth\Guard\Guard`**

`Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface`

### Method Summary

<ApiItem href="#contractsauthguardguard-check" visibility="public" name="check" returnType="bool" params={[]}>
Whether the current request is authenticated.
</ApiItem>
<ApiItem href="#contractsauthguardguard-fromoptions" visibility="public" name="fromOptions" returnType="static" params={[{"type":"Adapter","name":"adapter","default":null},{"type":"mixed","name":"container","default":null},{"type":"array","name":"options","default":null}]}>
Build a guard from an adapter, the application container, and a flat
</ApiItem>
<ApiItem href="#contractsauthguardguard-getlastuserattempted" visibility="public" name="getLastUserAttempted" returnType="AuthUser|null" params={[]}>
Returns the last user the guard tried to authenticate during this
</ApiItem>
<ApiItem href="#contractsauthguardguard-guest" visibility="public" name="guest" returnType="bool" params={[]}>
Whether the current request is unauthenticated.
</ApiItem>
<ApiItem href="#contractsauthguardguard-hasuser" visibility="public" name="hasUser" returnType="bool" params={[]}>
Whether the guard currently holds a resolved user.
</ApiItem>
<ApiItem href="#contractsauthguardguard-id" visibility="public" name="id" returnType="int|string|null" params={[]}>
Returns the authenticated user's identifier, or null when no
</ApiItem>
<ApiItem href="#contractsauthguardguard-setuser" visibility="public" name="setUser" returnType="static" params={[{"type":"AuthUser","name":"user","default":null}]}>
Sets the current user explicitly. Returns $this for fluent chaining.
</ApiItem>
<ApiItem href="#contractsauthguardguard-user" visibility="public" name="user" returnType="AuthUser|null" params={[]}>
Returns the resolved user for the current request, or null.
</ApiItem>
<ApiItem href="#contractsauthguardguard-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"array","name":"credentials","default":"[]"}]}>
Validates the given credentials without logging in.
</ApiItem>

### Methods

<h4 id="contractsauthguardguard-check"><code>check()</code></h4>

```php
public function check(): bool;
```

Whether the current request is authenticated.

<h4 id="contractsauthguardguard-fromoptions"><code>fromOptions()</code></h4>

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

<h4 id="contractsauthguardguard-getlastuserattempted"><code>getLastUserAttempted()</code></h4>

```php
public function getLastUserAttempted(): AuthUser|null;
```

Returns the last user the guard tried to authenticate during this
request, regardless of success.

<h4 id="contractsauthguardguard-guest"><code>guest()</code></h4>

```php
public function guest(): bool;
```

Whether the current request is unauthenticated.

<h4 id="contractsauthguardguard-hasuser"><code>hasUser()</code></h4>

```php
public function hasUser(): bool;
```

Whether the guard currently holds a resolved user.

<h4 id="contractsauthguardguard-id"><code>id()</code></h4>

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier, or null when no
authenticated user is present.

<h4 id="contractsauthguardguard-setuser"><code>setUser()</code></h4>

```php
public function setUser( AuthUser $user ): static;
```

Sets the current user explicitly. Returns $this for fluent chaining.

<h4 id="contractsauthguardguard-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

Returns the resolved user for the current request, or null.

<h4 id="contractsauthguardguard-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials without logging in.

## Contracts\Auth\Guard\GuardConfig

Interface

Authentication guard configuration contract.

Per-guard config shape is intentionally guard-specific (e.g. Token exposes
getInputKey()/getStorageKey(); Session has no required config today).
The contract carries no methods of its own - it only marks the type so
AbstractGuard can accept any guard config uniformly.

- **`Phalcon\Contracts\Auth\Guard\GuardConfig`**

## Contracts\Auth\Guard\GuardStateful

Interface

Implemented by guards backed by persistent state (sessions/cookies).

- **`Phalcon\Contracts\Auth\Guard\GuardStateful`**

`Phalcon\Contracts\Auth\AuthTypes` · `Phalcon\Contracts\Auth\AuthUser`

### Method Summary

<ApiItem href="#contractsauthguardguardstateful-attempt" visibility="public" name="attempt" returnType="bool" params={[{"type":"array","name":"credentials","default":"[]"},{"type":"bool","name":"remember","default":"false"}]}>
Attempts to authenticate the user with the given credentials and, on
</ApiItem>
<ApiItem href="#contractsauthguardguardstateful-login" visibility="public" name="login" returnType="void" params={[{"type":"AuthUser","name":"user","default":null},{"type":"bool","name":"remember","default":"false"}]}>
</ApiItem>
<ApiItem href="#contractsauthguardguardstateful-loginbyid" visibility="public" name="loginById" returnType="AuthUser|false" params={[{"type":"int|string","name":"id","default":null},{"type":"bool","name":"remember","default":"false"}]}>
Logs in the user identified by $id. Returns the resolved user on
</ApiItem>
<ApiItem href="#contractsauthguardguardstateful-logout" visibility="public" name="logout" returnType="void" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthguardguardstateful-viaremember" visibility="public" name="viaRemember" returnType="bool" params={[]}>
</ApiItem>

### Methods

<h4 id="contractsauthguardguardstateful-attempt"><code>attempt()</code></h4>

```php
public function attempt(
array $credentials = [],
bool $remember = false
): bool;
```

Attempts to authenticate the user with the given credentials and, on
success, persists the resulting state on the guard.

<h4 id="contractsauthguardguardstateful-login"><code>login()</code></h4>

```php
public function login(
AuthUser $user,
bool $remember = false
): void;
```

<h4 id="contractsauthguardguardstateful-loginbyid"><code>loginById()</code></h4>

```php
public function loginById(
int|string $id,
bool $remember = false
): AuthUser|false;
```

Logs in the user identified by $id. Returns the resolved user on
success or false when no user matches the id.

<h4 id="contractsauthguardguardstateful-logout"><code>logout()</code></h4>

```php
public function logout(): void;
```

<h4 id="contractsauthguardguardstateful-viaremember"><code>viaRemember()</code></h4>

```php
public function viaRemember(): bool;
```

## Contracts\Auth\Manager

Interface

- **`Phalcon\Contracts\Auth\Manager`**

`Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

<ApiItem href="#contractsauthmanager-access" visibility="public" name="access" returnType="self" params={[{"type":"string","name":"accessName","default":null}]}>
Activates the named access gate for the current request and returns the
</ApiItem>
<ApiItem href="#contractsauthmanager-addaccesslist" visibility="public" name="addAccessList" returnType="self" params={[{"type":"array","name":"accessList","default":null}]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-addguard" visibility="public" name="addGuard" returnType="self" params={[{"type":"string","name":"nameGuard","default":null},{"type":"Guard","name":"guard","default":null},{"type":"bool","name":"isDefault","default":"false"}]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-attempt" visibility="public" name="attempt" returnType="bool" params={[{"type":"array","name":"credentials","default":"[]"},{"type":"bool","name":"remember","default":"false"}]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-check" visibility="public" name="check" returnType="bool" params={[]}>
Whether the default guard reports the current request as authenticated.
</ApiItem>
<ApiItem href="#contractsauthmanager-except" visibility="public" name="except" returnType="self" params={[{"type":"string","name":"actions","default":null}]}>
Restricts the active access gate to skip the listed action names.
</ApiItem>
<ApiItem href="#contractsauthmanager-getaccess" visibility="public" name="getAccess" returnType="Access|null" params={[]}>
Returns the active access gate, or null when none has been activated -
</ApiItem>
<ApiItem href="#contractsauthmanager-getaccesslist" visibility="public" name="getAccessList" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-getdefaultguard" visibility="public" name="getDefaultGuard" returnType="Guard|null" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-getguards" visibility="public" name="getGuards" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-guard" visibility="public" name="guard" returnType="Guard" params={[{"type":"string|null","name":"name","default":"null"}]}>
Returns the named guard, or the default guard when $name is null.
</ApiItem>
<ApiItem href="#contractsauthmanager-id" visibility="public" name="id" returnType="int|string|null" params={[]}>
Returns the authenticated user's identifier from the default guard,
</ApiItem>
<ApiItem href="#contractsauthmanager-logout" visibility="public" name="logout" returnType="void" params={[]}>
Logs the current user out via the default guard.
</ApiItem>
<ApiItem href="#contractsauthmanager-only" visibility="public" name="only" returnType="self" params={[{"type":"string","name":"actions","default":null}]}>
Restricts the active access gate to apply only to the listed action names.
</ApiItem>
<ApiItem href="#contractsauthmanager-setaccess" visibility="public" name="setAccess" returnType="self" params={[{"type":"Access","name":"access","default":null}]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-setdefaultguard" visibility="public" name="setDefaultGuard" returnType="self" params={[{"type":"Guard","name":"guard","default":null}]}>
</ApiItem>
<ApiItem href="#contractsauthmanager-user" visibility="public" name="user" returnType="AuthUser|null" params={[]}>
Returns the resolved user from the default guard, or null.
</ApiItem>
<ApiItem href="#contractsauthmanager-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"array","name":"credentials","default":"[]"}]}>
Validates the given credentials against the default guard without
</ApiItem>

### Methods

<h4 id="contractsauthmanager-access"><code>access()</code></h4>

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

<h4 id="contractsauthmanager-addaccesslist"><code>addAccessList()</code></h4>

```php
public function addAccessList( array $accessList ): self;
```

<h4 id="contractsauthmanager-addguard"><code>addGuard()</code></h4>

```php
public function addGuard(
string $nameGuard,
Guard $guard,
bool $isDefault = false
): self;
```

<h4 id="contractsauthmanager-attempt"><code>attempt()</code></h4>

```php
public function attempt(
array $credentials = [],
bool $remember = false
): bool;
```

<h4 id="contractsauthmanager-check"><code>check()</code></h4>

```php
public function check(): bool;
```

Whether the default guard reports the current request as authenticated.

<h4 id="contractsauthmanager-except"><code>except()</code></h4>

```php
public function except( string $actions ): self;
```

Restricts the active access gate to skip the listed action names.

<h4 id="contractsauthmanager-getaccess"><code>getAccess()</code></h4>

```php
public function getAccess(): Access|null;
```

Returns the active access gate, or null when none has been activated -
in which case listener enforcement is a no-op (see access()).

<h4 id="contractsauthmanager-getaccesslist"><code>getAccessList()</code></h4>

```php
public function getAccessList(): array;
```

<h4 id="contractsauthmanager-getdefaultguard"><code>getDefaultGuard()</code></h4>

```php
public function getDefaultGuard(): Guard|null;
```

<h4 id="contractsauthmanager-getguards"><code>getGuards()</code></h4>

```php
public function getGuards(): array;
```

<h4 id="contractsauthmanager-guard"><code>guard()</code></h4>

```php
public function guard( string|null $name = null ): Guard;
```

Returns the named guard, or the default guard when $name is null.

<h4 id="contractsauthmanager-id"><code>id()</code></h4>

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier from the default guard,
or null when no authenticated user is present.

<h4 id="contractsauthmanager-logout"><code>logout()</code></h4>

```php
public function logout(): void;
```

Logs the current user out via the default guard.

<h4 id="contractsauthmanager-only"><code>only()</code></h4>

```php
public function only( string $actions ): self;
```

Restricts the active access gate to apply only to the listed action names.

<h4 id="contractsauthmanager-setaccess"><code>setAccess()</code></h4>

```php
public function setAccess( Access $access ): self;
```

<h4 id="contractsauthmanager-setdefaultguard"><code>setDefaultGuard()</code></h4>

```php
public function setDefaultGuard( Guard $guard ): self;
```

<h4 id="contractsauthmanager-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

Returns the resolved user from the default guard, or null.

<h4 id="contractsauthmanager-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials against the default guard without
logging in.

## Contracts\Auth\RememberToken

Interface

A persisted remember-me token row.

- **`Phalcon\Contracts\Auth\RememberToken`**

### Method Summary

<ApiItem href="#contractsauthremembertoken-delete" visibility="public" name="delete" returnType="bool" params={[]}>
Deletes the token from storage.
</ApiItem>
<ApiItem href="#contractsauthremembertoken-gettoken" visibility="public" name="getToken" returnType="string" params={[]}>
Returns the token value stored for this remember entry.
</ApiItem>
<ApiItem href="#contractsauthremembertoken-getuseragent" visibility="public" name="getUserAgent" returnType="string|null" params={[]}>
Returns the user agent associated with this token, if any.
</ApiItem>

### Methods

<h4 id="contractsauthremembertoken-delete"><code>delete()</code></h4>

```php
public function delete(): bool;
```

Deletes the token from storage.

<h4 id="contractsauthremembertoken-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string;
```

Returns the token value stored for this remember entry.

<h4 id="contractsauthremembertoken-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string|null;
```

Returns the user agent associated with this token, if any.

## Contracts\Autoload\AutoloadTypes

Interface

Central registry of the array shapes used across the Autoload namespace.

- **`Phalcon\Contracts\Autoload\AutoloadTypes`**

## Contracts\Cache\Cache

Interface

Canonical contract for Phalcon\Cache\Cache.

- **`Phalcon\Contracts\Cache\Cache`**
- [`Phalcon\Cache\CacheInterface`](/6.0/api/phalcon_cache/#cachecacheinterface)

`DateInterval` · `Phalcon\Cache\Exception\InvalidArgumentException`

### Method Summary

<ApiItem href="#contractscachecache-clear" visibility="public" name="clear" returnType="bool" params={[]}>
Wipes clean the entire cache's keys.
</ApiItem>
<ApiItem href="#contractscachecache-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Delete an item from the cache by its unique key.
</ApiItem>
<ApiItem href="#contractscachecache-deletemultiple" visibility="public" name="deleteMultiple" returnType="bool" params={[{"type":"iterable","name":"keys","default":null}]}>
Deletes multiple cache items in a single operation.
</ApiItem>
<ApiItem href="#contractscachecache-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Fetches a value from the cache.
</ApiItem>
<ApiItem href="#contractscachecache-getmultiple" visibility="public" name="getMultiple" returnType="iterable" params={[{"type":"iterable","name":"keys","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Obtains multiple cache items by their unique keys.
</ApiItem>
<ApiItem href="#contractscachecache-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Determines whether an item is present in the cache.
</ApiItem>
<ApiItem href="#contractscachecache-set" visibility="public" name="set" returnType="bool" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null},{"type":"DateInterval|int|null","name":"ttl","default":"null"}]}>
Persists data in the cache, uniquely referenced by a key with an optional
</ApiItem>
<ApiItem href="#contractscachecache-setmultiple" visibility="public" name="setMultiple" returnType="bool" params={[{"type":"iterable","name":"values","default":null},{"type":"DateInterval|int|null","name":"ttl","default":"null"}]}>
Persists a set of key => value pairs in the cache, with an optional TTL.
</ApiItem>

### Methods

<h4 id="contractscachecache-clear"><code>clear()</code></h4>

```php
public function clear(): bool;
```

Wipes clean the entire cache's keys.

<h4 id="contractscachecache-delete"><code>delete()</code></h4>

```php
public function delete( string $key ): bool;
```

Delete an item from the cache by its unique key.

<h4 id="contractscachecache-deletemultiple"><code>deleteMultiple()</code></h4>

```php
public function deleteMultiple( iterable $keys ): bool;
```

Deletes multiple cache items in a single operation.

<h4 id="contractscachecache-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

Fetches a value from the cache.

<h4 id="contractscachecache-getmultiple"><code>getMultiple()</code></h4>

```php
public function getMultiple(
iterable $keys,
mixed $defaultValue = null
): iterable;
```

Obtains multiple cache items by their unique keys.

<h4 id="contractscachecache-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Determines whether an item is present in the cache.

<h4 id="contractscachecache-set"><code>set()</code></h4>

```php
public function set(
string $key,
mixed $value,
DateInterval|int|null $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

<h4 id="contractscachecache-setmultiple"><code>setMultiple()</code></h4>

```php
public function setMultiple(
iterable $values,
DateInterval|int|null $ttl = null
): bool;
```

Persists a set of key => value pairs in the cache, with an optional TTL.

## Contracts\Cli\CliTypes

Interface

Central registry of the array shapes used across the Cli namespace.

- **`Phalcon\Contracts\Cli\CliTypes`**

`Phalcon\Cli\Router\Route`

## Contracts\Cli\Dispatcher

Interface

Canonical contract for Phalcon\Cli\Dispatcher.

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](#contractsdispatcherdispatcher)
- **`Phalcon\Contracts\Cli\Dispatcher`**
- [`Phalcon\Cli\DispatcherInterface`](/6.0/api/phalcon_cli/#clidispatcherinterface)

`Phalcon\Cli\TaskInterface` · `Phalcon\Contracts\Dispatcher\Dispatcher`

### Method Summary

<ApiItem href="#contractsclidispatcher-getactivetask" visibility="public" name="getActiveTask" returnType="TaskInterface|null" params={[]}>
Returns the active task in the dispatcher
</ApiItem>
<ApiItem href="#contractsclidispatcher-getlasttask" visibility="public" name="getLastTask" returnType="TaskInterface|null" params={[]}>
Returns the latest dispatched controller
</ApiItem>
<ApiItem href="#contractsclidispatcher-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractsclidispatcher-gettaskname" visibility="public" name="getTaskName" returnType="string" params={[]}>
Gets last dispatched task name
</ApiItem>
<ApiItem href="#contractsclidispatcher-gettasksuffix" visibility="public" name="getTaskSuffix" returnType="string" params={[]}>
Gets default task suffix
</ApiItem>
<ApiItem href="#contractsclidispatcher-setdefaulttask" visibility="public" name="setDefaultTask" returnType="void" params={[{"type":"string","name":"taskName","default":null}]}>
Sets the default task name
</ApiItem>
<ApiItem href="#contractsclidispatcher-setoptions" visibility="public" name="setOptions" returnType="void" params={[{"type":"array","name":"options","default":null}]}>
</ApiItem>
<ApiItem href="#contractsclidispatcher-settaskname" visibility="public" name="setTaskName" returnType="void" params={[{"type":"string","name":"taskName","default":null}]}>
Sets the task name to be dispatched
</ApiItem>
<ApiItem href="#contractsclidispatcher-settasksuffix" visibility="public" name="setTaskSuffix" returnType="void" params={[{"type":"string","name":"taskSuffix","default":null}]}>
Sets the default task suffix
</ApiItem>

### Methods

<h4 id="contractsclidispatcher-getactivetask"><code>getActiveTask()</code></h4>

```php
public function getActiveTask(): TaskInterface|null;
```

Returns the active task in the dispatcher

<h4 id="contractsclidispatcher-getlasttask"><code>getLastTask()</code></h4>

```php
public function getLastTask(): TaskInterface|null;
```

Returns the latest dispatched controller

<h4 id="contractsclidispatcher-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

<h4 id="contractsclidispatcher-gettaskname"><code>getTaskName()</code></h4>

```php
public function getTaskName(): string;
```

Gets last dispatched task name

<h4 id="contractsclidispatcher-gettasksuffix"><code>getTaskSuffix()</code></h4>

```php
public function getTaskSuffix(): string;
```

Gets default task suffix

<h4 id="contractsclidispatcher-setdefaulttask"><code>setDefaultTask()</code></h4>

```php
public function setDefaultTask( string $taskName ): void;
```

Sets the default task name

<h4 id="contractsclidispatcher-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): void;
```

<h4 id="contractsclidispatcher-settaskname"><code>setTaskName()</code></h4>

```php
public function setTaskName( string $taskName ): void;
```

Sets the task name to be dispatched

<h4 id="contractsclidispatcher-settasksuffix"><code>setTaskSuffix()</code></h4>

```php
public function setTaskSuffix( string $taskSuffix ): void;
```

Sets the default task suffix

## Contracts\Config\ConfigTypes

Interface

Central registry of the array shapes used across the Config namespace.

- **`Phalcon\Contracts\Config\ConfigTypes`**

`Phalcon\Config\ConfigInterface`

## Contracts\Container\ContainerTypes

Interface

Central registry of the array shapes used across the Container namespace.

- **`Phalcon\Contracts\Container\ContainerTypes`**

`Phalcon\Container\Definition\Processor\Processor` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Contracts\Container\Service\Provider` · `ReflectionParameter`

## Contracts\Container\Ioc\IocContainer

Interface

[_IocContainer_][] affords obtaining services by name.

- Notes:

- **This interface does not afford service management.** The container
      will need to obtain services somehow, e.g. from a [Service-Interop][]
      implementation.

- **`Phalcon\Contracts\Container\Ioc\IocContainer`**
- [`Phalcon\Contracts\Container\Service\Collection`](#contractscontainerservicecollection)

### Method Summary

<ApiItem href="#contractscontaineriocioccontainer-getservice" visibility="public" name="getService" returnType="object" params={[{"type":"string","name":"serviceName","default":null}]}>
Returns an instance of the `$serviceName`.
</ApiItem>
<ApiItem href="#contractscontaineriocioccontainer-hasservice" visibility="public" name="hasService" returnType="bool" params={[{"type":"string","name":"serviceName","default":null}]}>
Is the container able to return an instance of the `$serviceName`?
</ApiItem>

### Methods

<h4 id="contractscontaineriocioccontainer-getservice"><code>getService()</code></h4>

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

<h4 id="contractscontaineriocioccontainer-hasservice"><code>hasService()</code></h4>

```php
public function hasService( string $serviceName ): bool;
```

Is the container able to return an instance of the `$serviceName`?

- Notes:

- **The logic for this method is expressly unspecified.** The ability
      check may be accomplished by querying a service management subsystem,
      or by some other means.

## Contracts\Container\Ioc\IocContainerFactory

Interface

[_IocContainerFactory_][] affords obtaining a new instance of
[_IocContainer_][].

- **`Phalcon\Contracts\Container\Ioc\IocContainerFactory`**

### Method Summary

<ApiItem href="#contractscontaineriocioccontainerfactory-newcontainer" visibility="public" name="newContainer" returnType="IocContainer" params={[]}>
Returns a new instance of [_IocContainer_][].
</ApiItem>

### Methods

<h4 id="contractscontaineriocioccontainerfactory-newcontainer"><code>newContainer()</code></h4>

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

Interface

[_IocThrowable_][] extends [_Throwable_][] to mark an [_Exception_][] as
IOC-related.

It adds no class members.

- `\Throwable`
- **`Phalcon\Contracts\Container\Ioc\IocThrowable`**
- [`Phalcon\Container\Exceptions\ContainerThrowable`](/6.0/api/phalcon_container/#containerexceptionscontainerthrowable)

`Throwable`

## Contracts\Container\Ioc\IocTypeAliases

Interface

- **`Phalcon\Contracts\Container\Ioc\IocTypeAliases`**

## Contracts\Container\Resolver\ReflectionMethodResolver

Interface

- **`Phalcon\Contracts\Container\Resolver\ReflectionMethodResolver`**

`Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod`

### Method Summary

<ApiItem href="#contractscontainerresolverreflectionmethodresolver-resolvemethod" visibility="public" name="resolveMethod" returnType="void" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"ReflectionMethod","name":"method","default":null},{"type":"object","name":"instance","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractscontainerresolverreflectionmethodresolver-resolvemethod"><code>resolveMethod()</code></h4>

```php
public function resolveMethod(
IocContainer $ioc,
ReflectionMethod $method,
object $instance
): void;
```

## Contracts\Container\Resolver\ReflectionParameterResolver

Interface

- **`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`**
- [`Phalcon\Contracts\Container\Resolver\ResolverService`](#contractscontainerresolverresolverservice)

`Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionParameter`

### Method Summary

<ApiItem href="#contractscontainerresolverreflectionparameterresolver-resolveparameter" visibility="public" name="resolveParameter" returnType="mixed" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"ReflectionParameter","name":"parameter","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractscontainerresolverreflectionparameterresolver-resolveparameter"><code>resolveParameter()</code></h4>

```php
public function resolveParameter(
IocContainer $ioc,
ReflectionParameter $parameter
): mixed;
```

## Contracts\Container\Resolver\Resolvable

Interface

- **`Phalcon\Contracts\Container\Resolver\Resolvable`**

`Phalcon\Contracts\Container\Ioc\IocContainer`

### Method Summary

<ApiItem href="#contractscontainerresolverresolvable-resolve" visibility="public" name="resolve" returnType="mixed" params={[{"type":"IocContainer","name":"ioc","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractscontainerresolverresolvable-resolve"><code>resolve()</code></h4>

```php
public function resolve( IocContainer $ioc ): mixed;
```

## Contracts\Container\Resolver\ResolverService

Interface

- [`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`](#contractscontainerresolverreflectionparameterresolver)
- **`Phalcon\Contracts\Container\Resolver\ResolverService`**

`Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod` · `ReflectionType`

### Method Summary

<ApiItem href="#contractscontainerresolverresolverservice-isresolvableclass" visibility="public" name="isResolvableClass" returnType="bool" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerresolverresolverservice-resolvecall" visibility="public" name="resolveCall" returnType="mixed" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"callable","name":"callableObject","default":null},{"type":"array","name":"arguments","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerresolverresolverservice-resolveclass" visibility="public" name="resolveClass" returnType="object" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"string","name":"className","default":null},{"type":"array","name":"arguments","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerresolverresolverservice-resolvemethod" visibility="public" name="resolveMethod" returnType="void" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"ReflectionMethod","name":"method","default":null},{"type":"object","name":"instance","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerresolverresolverservice-resolveparameters" visibility="public" name="resolveParameters" returnType="array" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"array","name":"parameters","default":null},{"type":"array","name":"arguments","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerresolverresolverservice-resolvetype" visibility="public" name="resolveType" returnType="mixed" params={[{"type":"IocContainer","name":"ioc","default":null},{"type":"ReflectionType","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractscontainerresolverresolverservice-isresolvableclass"><code>isResolvableClass()</code></h4>

```php
public function isResolvableClass( string $className ): bool;
```

<h4 id="contractscontainerresolverresolverservice-resolvecall"><code>resolveCall()</code></h4>

```php
public function resolveCall(
IocContainer $ioc,
callable $callableObject,
array $arguments
): mixed;
```

<h4 id="contractscontainerresolverresolverservice-resolveclass"><code>resolveClass()</code></h4>

```php
public function resolveClass(
IocContainer $ioc,
string $className,
array $arguments
): object;
```

<h4 id="contractscontainerresolverresolverservice-resolvemethod"><code>resolveMethod()</code></h4>

```php
public function resolveMethod(
IocContainer $ioc,
ReflectionMethod $method,
object $instance
): void;
```

<h4 id="contractscontainerresolverresolverservice-resolveparameters"><code>resolveParameters()</code></h4>

```php
public function resolveParameters(
IocContainer $ioc,
array $parameters,
array $arguments
): array;
```

<h4 id="contractscontainerresolverresolverservice-resolvetype"><code>resolveType()</code></h4>

```php
public function resolveType(
IocContainer $ioc,
ReflectionType $type
): mixed;
```

## Contracts\Container\Resolver\ResolverThrowable

Interface

- `\Throwable`
- **`Phalcon\Contracts\Container\Resolver\ResolverThrowable`**

`Throwable`

## Contracts\Container\Service\Collection

Interface

- [`Phalcon\Contracts\Container\Ioc\IocContainer`](#contractscontaineriocioccontainer)
- **`Phalcon\Contracts\Container\Service\Collection`**

`Closure` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Container\Resolver\Resolver` · `Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Ioc\IocContainer`

### Method Summary

<ApiItem href="#contractscontainerservicecollection-bind" visibility="public" name="bind" returnType="ServiceDefinition" params={[{"type":"string","name":"interfaceName","default":null},{"type":"string","name":"concrete","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-callableget" visibility="public" name="callableGet" returnType="Closure" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-callablenew" visibility="public" name="callableNew" returnType="Closure" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-extend" visibility="public" name="extend" returnType="void" params={[{"type":"string","name":"name","default":null},{"type":"callable","name":"callableObject","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-getalias" visibility="public" name="getAlias" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-getbytag" visibility="public" name="getByTag" returnType="array" params={[{"type":"string","name":"tag","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-getdefinition" visibility="public" name="getDefinition" returnType="ServiceDefinition" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-getinstance" visibility="public" name="getInstance" returnType="object" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-getparameter" visibility="public" name="getParameter" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-getresolver" visibility="public" name="getResolver" returnType="Resolver" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-hasalias" visibility="public" name="hasAlias" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-hasdefinition" visibility="public" name="hasDefinition" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-hasinstance" visibility="public" name="hasInstance" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-hasparameter" visibility="public" name="hasParameter" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-isautowireenabled" visibility="public" name="isAutowireEnabled" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-new" visibility="public" name="new" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-newdefinition" visibility="public" name="newDefinition" returnType="ServiceDefinition" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-set" visibility="public" name="set" returnType="ServiceDefinition" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-setalias" visibility="public" name="setAlias" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"alias","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-setautowire" visibility="public" name="setAutowire" returnType="static" params={[{"type":"bool","name":"enabled","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-setdefinition" visibility="public" name="setDefinition" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"ServiceDefinition","name":"definition","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-setinstance" visibility="public" name="setInstance" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"object","name":"instance","default":null},{"type":"string","name":"lifetime","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-setparameter" visibility="public" name="setParameter" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-unsetalias" visibility="public" name="unsetAlias" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-unsetdefinition" visibility="public" name="unsetDefinition" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-unsetinstance" visibility="public" name="unsetInstance" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-unsetinstances" visibility="public" name="unsetInstances" returnType="void" params={[{"type":"string","name":"lifetime","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicecollection-unsetparameter" visibility="public" name="unsetParameter" returnType="void" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractscontainerservicecollection-bind"><code>bind()</code></h4>

```php
public function bind(
string $interfaceName,
string $concrete
): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-callableget"><code>callableGet()</code></h4>

```php
public function callableGet( string $name ): Closure;
```

<h4 id="contractscontainerservicecollection-callablenew"><code>callableNew()</code></h4>

```php
public function callableNew( string $name ): Closure;
```

<h4 id="contractscontainerservicecollection-extend"><code>extend()</code></h4>

```php
public function extend(
string $name,
callable $callableObject
): void;
```

<h4 id="contractscontainerservicecollection-get"><code>get()</code></h4>

```php
public function get( string $name ): mixed;
```

<h4 id="contractscontainerservicecollection-getalias"><code>getAlias()</code></h4>

```php
public function getAlias( string $name ): string;
```

<h4 id="contractscontainerservicecollection-getbytag"><code>getByTag()</code></h4>

```php
public function getByTag( string $tag ): array;
```

<h4 id="contractscontainerservicecollection-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition( string $name ): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-getinstance"><code>getInstance()</code></h4>

```php
public function getInstance( string $name ): object;
```

<h4 id="contractscontainerservicecollection-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( string $name ): mixed;
```

<h4 id="contractscontainerservicecollection-getresolver"><code>getResolver()</code></h4>

```php
public function getResolver(): Resolver;
```

<h4 id="contractscontainerservicecollection-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasalias"><code>hasAlias()</code></h4>

```php
public function hasAlias( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasdefinition"><code>hasDefinition()</code></h4>

```php
public function hasDefinition( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasinstance"><code>hasInstance()</code></h4>

```php
public function hasInstance( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasparameter"><code>hasParameter()</code></h4>

```php
public function hasParameter( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-isautowireenabled"><code>isAutowireEnabled()</code></h4>

```php
public function isAutowireEnabled(): bool;
```

<h4 id="contractscontainerservicecollection-new"><code>new()</code></h4>

```php
public function new( string $name ): mixed;
```

<h4 id="contractscontainerservicecollection-newdefinition"><code>newDefinition()</code></h4>

```php
public function newDefinition( string $name ): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-set"><code>set()</code></h4>

```php
public function set(
string $name,
mixed $definition
): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-setalias"><code>setAlias()</code></h4>

```php
public function setAlias(
string $name,
string $alias
): static;
```

<h4 id="contractscontainerservicecollection-setautowire"><code>setAutowire()</code></h4>

```php
public function setAutowire( bool $enabled ): static;
```

<h4 id="contractscontainerservicecollection-setdefinition"><code>setDefinition()</code></h4>

```php
public function setDefinition(
string $name,
ServiceDefinition $definition
): static;
```

<h4 id="contractscontainerservicecollection-setinstance"><code>setInstance()</code></h4>

```php
public function setInstance(
string $name,
object $instance,
string $lifetime
): static;
```

<h4 id="contractscontainerservicecollection-setparameter"><code>setParameter()</code></h4>

```php
public function setParameter(
string $name,
mixed $value
): static;
```

<h4 id="contractscontainerservicecollection-unsetalias"><code>unsetAlias()</code></h4>

```php
public function unsetAlias( string $name ): void;
```

<h4 id="contractscontainerservicecollection-unsetdefinition"><code>unsetDefinition()</code></h4>

```php
public function unsetDefinition( string $name ): void;
```

<h4 id="contractscontainerservicecollection-unsetinstance"><code>unsetInstance()</code></h4>

```php
public function unsetInstance( string $name ): void;
```

<h4 id="contractscontainerservicecollection-unsetinstances"><code>unsetInstances()</code></h4>

```php
public function unsetInstances( string $lifetime ): void;
```

<h4 id="contractscontainerservicecollection-unsetparameter"><code>unsetParameter()</code></h4>

```php
public function unsetParameter( string $name ): void;
```

## Contracts\Container\Service\Definition

Interface

- **`Phalcon\Contracts\Container\Service\Definition`**

`Phalcon\Contracts\Container\ContainerTypes` · `Phalcon\Contracts\Container\Ioc\IocContainer`

### Method Summary

<ApiItem href="#contractscontainerservicedefinition-addextender" visibility="public" name="addExtender" returnType="static" params={[{"type":"callable","name":"extender","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-buildservice" visibility="public" name="buildService" returnType="object" params={[{"type":"IocContainer","name":"ioc","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-getclass" visibility="public" name="getClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-getextenders" visibility="public" name="getExtenders" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-getfactory" visibility="public" name="getFactory" returnType="callable" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-getlifetime" visibility="public" name="getLifetime" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-getservicename" visibility="public" name="getServiceName" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-hasclass" visibility="public" name="hasClass" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-hasextenders" visibility="public" name="hasExtenders" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-hasfactory" visibility="public" name="hasFactory" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-setclass" visibility="public" name="setClass" returnType="static" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-setextenders" visibility="public" name="setExtenders" returnType="static" params={[{"type":"array","name":"extenders","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-setfactory" visibility="public" name="setFactory" returnType="static" params={[{"type":"callable","name":"factory","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-setlifetime" visibility="public" name="setLifetime" returnType="static" params={[{"type":"string","name":"lifetime","default":null}]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-unsetclass" visibility="public" name="unsetClass" returnType="static" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-unsetextenders" visibility="public" name="unsetExtenders" returnType="static" params={[]}>
</ApiItem>
<ApiItem href="#contractscontainerservicedefinition-unsetfactory" visibility="public" name="unsetFactory" returnType="static" params={[]}>
</ApiItem>

### Methods

<h4 id="contractscontainerservicedefinition-addextender"><code>addExtender()</code></h4>

```php
public function addExtender( callable $extender ): static;
```

<h4 id="contractscontainerservicedefinition-buildservice"><code>buildService()</code></h4>

```php
public function buildService( IocContainer $ioc ): object;
```

<h4 id="contractscontainerservicedefinition-getclass"><code>getClass()</code></h4>

```php
public function getClass(): string;
```

<h4 id="contractscontainerservicedefinition-getextenders"><code>getExtenders()</code></h4>

```php
public function getExtenders(): array;
```

<h4 id="contractscontainerservicedefinition-getfactory"><code>getFactory()</code></h4>

```php
public function getFactory(): callable;
```

<h4 id="contractscontainerservicedefinition-getlifetime"><code>getLifetime()</code></h4>

```php
public function getLifetime(): string;
```

<h4 id="contractscontainerservicedefinition-getservicename"><code>getServiceName()</code></h4>

```php
public function getServiceName(): string;
```

<h4 id="contractscontainerservicedefinition-hasclass"><code>hasClass()</code></h4>

```php
public function hasClass(): bool;
```

<h4 id="contractscontainerservicedefinition-hasextenders"><code>hasExtenders()</code></h4>

```php
public function hasExtenders(): bool;
```

<h4 id="contractscontainerservicedefinition-hasfactory"><code>hasFactory()</code></h4>

```php
public function hasFactory(): bool;
```

<h4 id="contractscontainerservicedefinition-setclass"><code>setClass()</code></h4>

```php
public function setClass( string $className ): static;
```

<h4 id="contractscontainerservicedefinition-setextenders"><code>setExtenders()</code></h4>

```php
public function setExtenders( array $extenders ): static;
```

<h4 id="contractscontainerservicedefinition-setfactory"><code>setFactory()</code></h4>

```php
public function setFactory( callable $factory ): static;
```

<h4 id="contractscontainerservicedefinition-setlifetime"><code>setLifetime()</code></h4>

```php
public function setLifetime( string $lifetime ): static;
```

<h4 id="contractscontainerservicedefinition-unsetclass"><code>unsetClass()</code></h4>

```php
public function unsetClass(): static;
```

<h4 id="contractscontainerservicedefinition-unsetextenders"><code>unsetExtenders()</code></h4>

```php
public function unsetExtenders(): static;
```

<h4 id="contractscontainerservicedefinition-unsetfactory"><code>unsetFactory()</code></h4>

```php
public function unsetFactory(): static;
```

## Contracts\Container\Service\Enumerable

Interface

- **`Phalcon\Contracts\Container\Service\Enumerable`**

`Phalcon\Contracts\Container\ContainerTypes`

### Method Summary

<ApiItem href="#contractscontainerserviceenumerable-getservicenames" visibility="public" name="getServiceNames" returnType="array" params={[]}>
Returns the names of every registered service definition. Names that
</ApiItem>

### Methods

<h4 id="contractscontainerserviceenumerable-getservicenames"><code>getServiceNames()</code></h4>

```php
public function getServiceNames(): array;
```

Returns the names of every registered service definition. Names that
only exist as an alias, a pre-set instance or a parameter are not
included.

## Contracts\Container\Service\Lifetime

Class

- **`Phalcon\Contracts\Container\Service\Lifetime`**

### Constants

<ApiItem kind="constant" name="SCOPED" type="string" default="&quot;SCOPED&quot;">
</ApiItem>
<ApiItem kind="constant" name="SINGLETON" type="string" default="&quot;SINGLETON&quot;">
</ApiItem>
<ApiItem kind="constant" name="TRANSIENT" type="string" default="&quot;TRANSIENT&quot;">
</ApiItem>

## Contracts\Container\Service\Provider

Interface

- **`Phalcon\Contracts\Container\Service\Provider`**

### Method Summary

<ApiItem href="#contractscontainerserviceprovider-provide" visibility="public" name="provide" returnType="void" params={[{"type":"Collection","name":"services","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractscontainerserviceprovider-provide"><code>provide()</code></h4>

```php
public function provide( Collection $services ): void;
```

## Contracts\Container\Service\Throwable

Interface

- `\Throwable`
- **`Phalcon\Contracts\Container\Service\Throwable`**

`Throwable`

## Contracts\Db\Adapter\Adapter

Interface

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

- **`Phalcon\Contracts\Db\Adapter\Adapter`**
- [`Phalcon\Db\Adapter\AdapterInterface`](/6.0/api/phalcon_db/#dbadapteradapterinterface)

`Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Db\ResultInterface`

### Method Summary

<ApiItem href="#contractsdbadapteradapter-addcolumn" visibility="public" name="addColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null}]}>
Adds a column to a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-addforeignkey" visibility="public" name="addForeignKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Adds a foreign key to a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-addindex" visibility="public" name="addIndex" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Adds an index to a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-addprimarykey" visibility="public" name="addPrimaryKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Adds a primary key to a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-affectedrows" visibility="public" name="affectedRows" returnType="int" params={[]}>
Returns the number of affected rows by the last INSERT/UPDATE/DELETE
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-begin" visibility="public" name="begin" returnType="bool" params={[{"type":"bool","name":"nesting","default":"true"}]}>
Starts a transaction in the connection
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-close" visibility="public" name="close" returnType="void" params={[]}>
Closes active connection returning success. Phalcon automatically closes
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-commit" visibility="public" name="commit" returnType="bool" params={[{"type":"bool","name":"nesting","default":"true"}]}>
Commits the active transaction in the connection
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-connect" visibility="public" name="connect" returnType="void" params={[{"type":"array","name":"descriptor","default":"[]"}]}>
This method is automatically called in \Phalcon\Db\Adapter\Pdo
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-createsavepoint" visibility="public" name="createSavepoint" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Creates a new savepoint
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-createtable" visibility="public" name="createTable" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Creates a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-createview" visibility="public" name="createView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Creates a view
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"array|string","name":"tableName","default":null},{"type":"string|null","name":"whereCondition","default":"null"},{"type":"array","name":"placeholders","default":"[]"},{"type":"array","name":"dataTypes","default":"[]"}]}>
Deletes data from a table using custom RDBMS SQL syntax
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-describecolumns" visibility="public" name="describeColumns" returnType="array" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Returns an array of Phalcon\Db\Column objects describing a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-describeindexes" visibility="public" name="describeIndexes" returnType="array" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Lists table indexes
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-describereferences" visibility="public" name="describeReferences" returnType="array" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Lists table references
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-dropcolumn" visibility="public" name="dropColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"columnName","default":null}]}>
Drops a column from a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-dropforeignkey" visibility="public" name="dropForeignKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"referenceName","default":null}]}>
Drops a foreign key from a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-dropindex" visibility="public" name="dropIndex" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"indexName","default":null}]}>
Drop an index from a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-dropprimarykey" visibility="public" name="dropPrimaryKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Drops primary key from a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-droptable" visibility="public" name="dropTable" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Drops a table from a schema/database
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-dropview" visibility="public" name="dropView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Drops a view
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-escapeidentifier" visibility="public" name="escapeIdentifier" returnType="string" params={[{"type":"array|float|int|string","name":"identifier","default":null}]}>
Escapes a column/table/schema name
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-escapestring" visibility="public" name="escapeString" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escapes a value to avoid SQL injections
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-execute" visibility="public" name="execute" returnType="bool" params={[{"type":"string","name":"sqlStatement","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sends SQL statements to the database server returning the success state.
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-fetchall" visibility="public" name="fetchAll" returnType="array" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"int","name":"fetchMode","default":"2"},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Dumps the complete result of a query into an array
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-fetchcolumn" visibility="public" name="fetchColumn" returnType="mixed" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"placeholders","default":"[]"},{"type":"int|string","name":"column","default":"0"}]}>
Returns the n'th field of first row in a SQL query result
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-fetchone" visibility="public" name="fetchOne" returnType="array|bool" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"int","name":"fetchMode","default":"2"},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Returns the first row in a SQL query result
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-forupdate" visibility="public" name="forUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a FOR UPDATE clause
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getcolumndefinition" visibility="public" name="getColumnDefinition" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Returns the SQL column definition from a column
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getcolumnlist" visibility="public" name="getColumnList" returnType="string" params={[{"type":"array","name":"columnList","default":null}]}>
Gets a list of columns
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getconnectionid" visibility="public" name="getConnectionId" returnType="int" params={[]}>
Gets the active connection unique identifier
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getdefaultidvalue" visibility="public" name="getDefaultIdValue" returnType="RawValue" params={[]}>
Return the default identity value to insert in an identity column
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getdefaultvalue" visibility="public" name="getDefaultValue" returnType="RawValue|null" params={[]}>
Returns the default value to make the RBDM use the default value declared
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getdescriptor" visibility="public" name="getDescriptor" returnType="array" params={[]}>
Return descriptor used to connect to the active database
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getdialect" visibility="public" name="getDialect" returnType="DialectInterface" params={[]}>
Returns internal dialect instance
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getdialecttype" visibility="public" name="getDialectType" returnType="string" params={[]}>
Returns the name of the dialect used
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getinternalhandler" visibility="public" name="getInternalHandler" returnType="mixed" params={[]}>
Return internal PDO handler
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getnestedtransactionsavepointname" visibility="public" name="getNestedTransactionSavepointName" returnType="string" params={[]}>
Returns the savepoint name to use for nested transactions
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getrealsqlstatement" visibility="public" name="getRealSQLStatement" returnType="string" params={[]}>
Active SQL statement in the object without replace bound parameters
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getsqlbindtypes" visibility="public" name="getSQLBindTypes" returnType="array" params={[]}>
Active SQL statement in the object
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getsqlstatement" visibility="public" name="getSQLStatement" returnType="string" params={[]}>
Active SQL statement in the object
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-getsqlvariables" visibility="public" name="getSQLVariables" returnType="array" params={[]}>
Active SQL statement in the object
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Returns type of database system the adapter is used for
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-insert" visibility="public" name="insert" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"array","name":"values","default":null},{"type":"array|null","name":"fields","default":"null"},{"type":"array","name":"dataTypes","default":"[]"}]}>
Inserts data into a table using custom RDBMS SQL syntax
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-insertasdict" visibility="public" name="insertAsDict" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"array","name":"data","default":null},{"type":"array","name":"dataTypes","default":"[]"}]}>
Inserts data into a table using custom RBDM SQL syntax
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-isnestedtransactionswithsavepoints" visibility="public" name="isNestedTransactionsWithSavepoints" returnType="bool" params={[]}>
Returns if nested transactions should use savepoints
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-isundertransaction" visibility="public" name="isUnderTransaction" returnType="bool" params={[]}>
Checks whether connection is under database transaction
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-lastinsertid" visibility="public" name="lastInsertId" returnType="bool|string" params={[{"type":"string|null","name":"name","default":"null"}]}>
Returns insert id for the auto_increment column inserted in the last SQL
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-limit" visibility="public" name="limit" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array|int","name":"number","default":null}]}>
Appends a LIMIT clause to sqlQuery argument
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-listtables" visibility="public" name="listTables" returnType="array" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all tables on a database
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-listviews" visibility="public" name="listViews" returnType="array" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all views on a database
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-modifycolumn" visibility="public" name="modifyColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Modifies a table column based on a definition
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-query" visibility="public" name="query" returnType="bool|ResultInterface" params={[{"type":"string","name":"sqlStatement","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sends SQL statements to the database server returning the success state.
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-releasesavepoint" visibility="public" name="releaseSavepoint" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Releases given savepoint
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-rollback" visibility="public" name="rollback" returnType="bool" params={[{"type":"bool","name":"nesting","default":"true"}]}>
Rollbacks the active transaction in the connection
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-rollbacksavepoint" visibility="public" name="rollbackSavepoint" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Rollbacks given savepoint
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-setnestedtransactionswithsavepoints" visibility="public" name="setNestedTransactionsWithSavepoints" returnType="\Phalcon\Db\Adapter\AdapterInterface" params={[{"type":"bool","name":"flag","default":null}]}>
Set if nested transactions should use savepoints
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-sharedlock" visibility="public" name="sharedLock" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a LOCK IN SHARE MODE clause
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-supportsequences" visibility="public" name="supportSequences" returnType="bool" params={[]}>
Check whether the database system requires a sequence to produce
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-supportsdefaultvalue" visibility="public" name="supportsDefaultValue" returnType="bool" params={[]}>
SQLite does not support the DEFAULT keyword
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-tableexists" visibility="public" name="tableExists" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-tableoptions" visibility="public" name="tableOptions" returnType="array" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Gets creation options from a table
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-update" visibility="public" name="update" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"array","name":"fields","default":null},{"type":"array","name":"values","default":null},{"type":"array|string","name":"whereCondition","default":"[]"},{"type":"array","name":"dataTypes","default":"[]"}]}>
Updates data on a table using custom RDBMS SQL syntax
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-updateasdict" visibility="public" name="updateAsDict" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"array","name":"data","default":null},{"type":"array|string","name":"whereCondition","default":"[]"},{"type":"array","name":"dataTypes","default":"[]"}]}>
Updates data on a table using custom RBDM SQL syntax
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-useexplicitidvalue" visibility="public" name="useExplicitIdValue" returnType="bool" params={[]}>
Check whether the database system requires an explicit value for identity
</ApiItem>
<ApiItem href="#contractsdbadapteradapter-viewexists" visibility="public" name="viewExists" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.view
</ApiItem>

### Methods

<h4 id="contractsdbadapteradapter-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
string $tableName,
string $schemaName,
ColumnInterface $column
): bool;
```

Adds a column to a table

<h4 id="contractsdbadapteradapter-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
string $tableName,
string $schemaName,
ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

<h4 id="contractsdbadapteradapter-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
string $tableName,
string $schemaName,
IndexInterface $index
): bool;
```

Adds an index to a table

<h4 id="contractsdbadapteradapter-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
string $tableName,
string $schemaName,
IndexInterface $index
): bool;
```

Adds a primary key to a table

<h4 id="contractsdbadapteradapter-affectedrows"><code>affectedRows()</code></h4>

```php
public function affectedRows(): int;
```

Returns the number of affected rows by the last INSERT/UPDATE/DELETE
reported by the database system

<h4 id="contractsdbadapteradapter-begin"><code>begin()</code></h4>

```php
public function begin( bool $nesting = true ): bool;
```

Starts a transaction in the connection

<h4 id="contractsdbadapteradapter-close"><code>close()</code></h4>

```php
public function close(): void;
```

Closes active connection returning success. Phalcon automatically closes
and destroys active connections within Phalcon\Db\Pool

<h4 id="contractsdbadapteradapter-commit"><code>commit()</code></h4>

```php
public function commit( bool $nesting = true ): bool;
```

Commits the active transaction in the connection

<h4 id="contractsdbadapteradapter-connect"><code>connect()</code></h4>

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in \Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection

<h4 id="contractsdbadapteradapter-createsavepoint"><code>createSavepoint()</code></h4>

```php
public function createSavepoint( string $name ): bool;
```

Creates a new savepoint

<h4 id="contractsdbadapteradapter-createtable"><code>createTable()</code></h4>

```php
public function createTable(
string $tableName,
string $schemaName,
array $definition
): bool;
```

Creates a table

<h4 id="contractsdbadapteradapter-createview"><code>createView()</code></h4>

```php
public function createView(
string $viewName,
array $definition,
string|null $schemaName = null
): bool;
```

Creates a view

<h4 id="contractsdbadapteradapter-delete"><code>delete()</code></h4>

```php
public function delete(
array|string $tableName,
string|null $whereCondition = null,
array $placeholders = [],
array $dataTypes = []
): bool;
```

Deletes data from a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
string $tableName,
string|null $schemaName = null
): array;
```

Returns an array of Phalcon\Db\Column objects describing a table

<h4 id="contractsdbadapteradapter-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
string $tableName,
string|null $schemaName = null
): array;
```

Lists table indexes

<h4 id="contractsdbadapteradapter-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
string $tableName,
string|null $schemaName = null
): array;
```

Lists table references

<h4 id="contractsdbadapteradapter-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
string $tableName,
string $schemaName,
string $columnName
): bool;
```

Drops a column from a table

<h4 id="contractsdbadapteradapter-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
string $tableName,
string $schemaName,
string $referenceName
): bool;
```

Drops a foreign key from a table

<h4 id="contractsdbadapteradapter-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
string $tableName,
string $schemaName,
string $indexName
): bool;
```

Drop an index from a table

<h4 id="contractsdbadapteradapter-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
string $tableName,
string $schemaName
): bool;
```

Drops primary key from a table

<h4 id="contractsdbadapteradapter-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
string $tableName,
string|null $schemaName = null,
bool $ifExists = true
): bool;
```

Drops a table from a schema/database

<h4 id="contractsdbadapteradapter-dropview"><code>dropView()</code></h4>

```php
public function dropView(
string $viewName,
string|null $schemaName = null,
bool $ifExists = true
): bool;
```

Drops a view

<h4 id="contractsdbadapteradapter-escapeidentifier"><code>escapeIdentifier()</code></h4>

```php
public function escapeIdentifier( array|float|int|string $identifier ): string;
```

Escapes a column/table/schema name

<h4 id="contractsdbadapteradapter-escapestring"><code>escapeString()</code></h4>

```php
public function escapeString( string $input ): string;
```

Escapes a value to avoid SQL injections

<h4 id="contractsdbadapteradapter-execute"><code>execute()</code></h4>

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

<h4 id="contractsdbadapteradapter-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(
string $sqlQuery,
int $fetchMode = 2,
array $bindParams = [],
array $bindTypes = []
): array;
```

Dumps the complete result of a query into an array

<h4 id="contractsdbadapteradapter-fetchcolumn"><code>fetchColumn()</code></h4>

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

<h4 id="contractsdbadapteradapter-fetchone"><code>fetchOne()</code></h4>

```php
public function fetchOne(
string $sqlQuery,
int $fetchMode = 2,
array $bindParams = [],
array $bindTypes = []
): array|bool;
```

Returns the first row in a SQL query result

<h4 id="contractsdbadapteradapter-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause

<h4 id="contractsdbadapteradapter-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

<h4 id="contractsdbadapteradapter-getcolumnlist"><code>getColumnList()</code></h4>

```php
public function getColumnList( array $columnList ): string;
```

Gets a list of columns

<h4 id="contractsdbadapteradapter-getconnectionid"><code>getConnectionId()</code></h4>

```php
public function getConnectionId(): int;
```

Gets the active connection unique identifier

<h4 id="contractsdbadapteradapter-getdefaultidvalue"><code>getDefaultIdValue()</code></h4>

```php
public function getDefaultIdValue(): RawValue;
```

Return the default identity value to insert in an identity column

<h4 id="contractsdbadapteradapter-getdefaultvalue"><code>getDefaultValue()</code></h4>

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

<h4 id="contractsdbadapteradapter-getdescriptor"><code>getDescriptor()</code></h4>

```php
public function getDescriptor(): array;
```

Return descriptor used to connect to the active database

<h4 id="contractsdbadapteradapter-getdialect"><code>getDialect()</code></h4>

```php
public function getDialect(): DialectInterface;
```

Returns internal dialect instance

<h4 id="contractsdbadapteradapter-getdialecttype"><code>getDialectType()</code></h4>

```php
public function getDialectType(): string;
```

Returns the name of the dialect used

<h4 id="contractsdbadapteradapter-getinternalhandler"><code>getInternalHandler()</code></h4>

```php
public function getInternalHandler(): mixed;
```

Return internal PDO handler

<h4 id="contractsdbadapteradapter-getnestedtransactionsavepointname"><code>getNestedTransactionSavepointName()</code></h4>

```php
public function getNestedTransactionSavepointName(): string;
```

Returns the savepoint name to use for nested transactions

<h4 id="contractsdbadapteradapter-getrealsqlstatement"><code>getRealSQLStatement()</code></h4>

```php
public function getRealSQLStatement(): string;
```

Active SQL statement in the object without replace bound parameters

<h4 id="contractsdbadapteradapter-getsqlbindtypes"><code>getSQLBindTypes()</code></h4>

```php
public function getSQLBindTypes(): array;
```

Active SQL statement in the object

<h4 id="contractsdbadapteradapter-getsqlstatement"><code>getSQLStatement()</code></h4>

```php
public function getSQLStatement(): string;
```

Active SQL statement in the object

<h4 id="contractsdbadapteradapter-getsqlvariables"><code>getSQLVariables()</code></h4>

```php
public function getSQLVariables(): array;
```

Active SQL statement in the object

<h4 id="contractsdbadapteradapter-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Returns type of database system the adapter is used for

<h4 id="contractsdbadapteradapter-insert"><code>insert()</code></h4>

```php
public function insert(
string $tableName,
array $values,
array|null $fields = null,
array $dataTypes = []
): bool;
```

Inserts data into a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-insertasdict"><code>insertAsDict()</code></h4>

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

<h4 id="contractsdbadapteradapter-isnestedtransactionswithsavepoints"><code>isNestedTransactionsWithSavepoints()</code></h4>

```php
public function isNestedTransactionsWithSavepoints(): bool;
```

Returns if nested transactions should use savepoints

<h4 id="contractsdbadapteradapter-isundertransaction"><code>isUnderTransaction()</code></h4>

```php
public function isUnderTransaction(): bool;
```

Checks whether connection is under database transaction

<h4 id="contractsdbadapteradapter-lastinsertid"><code>lastInsertId()</code></h4>

```php
public function lastInsertId( string|null $name = null ): bool|string;
```

Returns insert id for the auto_increment column inserted in the last SQL
statement

<h4 id="contractsdbadapteradapter-limit"><code>limit()</code></h4>

```php
public function limit(
string $sqlQuery,
array|int $number
): string;
```

Appends a LIMIT clause to sqlQuery argument

<h4 id="contractsdbadapteradapter-listtables"><code>listTables()</code></h4>

```php
public function listTables( string|null $schemaName = null ): array;
```

List all tables on a database

<h4 id="contractsdbadapteradapter-listviews"><code>listViews()</code></h4>

```php
public function listViews( string|null $schemaName = null ): array;
```

List all views on a database

<h4 id="contractsdbadapteradapter-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
string $tableName,
string $schemaName,
ColumnInterface $column,
ColumnInterface|null $currentColumn = null
): bool;
```

Modifies a table column based on a definition

<h4 id="contractsdbadapteradapter-query"><code>query()</code></h4>

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

<h4 id="contractsdbadapteradapter-releasesavepoint"><code>releaseSavepoint()</code></h4>

```php
public function releaseSavepoint( string $name ): bool;
```

Releases given savepoint

<h4 id="contractsdbadapteradapter-rollback"><code>rollback()</code></h4>

```php
public function rollback( bool $nesting = true ): bool;
```

Rollbacks the active transaction in the connection

<h4 id="contractsdbadapteradapter-rollbacksavepoint"><code>rollbackSavepoint()</code></h4>

```php
public function rollbackSavepoint( string $name ): bool;
```

Rollbacks given savepoint

<h4 id="contractsdbadapteradapter-setnestedtransactionswithsavepoints"><code>setNestedTransactionsWithSavepoints()</code></h4>

```php
public function setNestedTransactionsWithSavepoints( bool $flag ): \Phalcon\Db\Adapter\AdapterInterface;
```

Set if nested transactions should use savepoints

<h4 id="contractsdbadapteradapter-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a LOCK IN SHARE MODE clause

<h4 id="contractsdbadapteradapter-supportsequences"><code>supportSequences()</code></h4>

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

<h4 id="contractsdbadapteradapter-supportsdefaultvalue"><code>supportsDefaultValue()</code></h4>

```php
public function supportsDefaultValue(): bool;
```

SQLite does not support the DEFAULT keyword

<h4 id="contractsdbadapteradapter-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
string $tableName,
string|null $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.table

<h4 id="contractsdbadapteradapter-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
string $tableName,
string|null $schemaName = null
): array;
```

Gets creation options from a table

<h4 id="contractsdbadapteradapter-update"><code>update()</code></h4>

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

<h4 id="contractsdbadapteradapter-updateasdict"><code>updateAsDict()</code></h4>

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

<h4 id="contractsdbadapteradapter-useexplicitidvalue"><code>useExplicitIdValue()</code></h4>

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<h4 id="contractsdbadapteradapter-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
string $viewName,
string|null $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.view

## Contracts\Db\Check

Interface

Canonical contract for Phalcon\Db\Check.

- **`Phalcon\Contracts\Db\Check`**
- [`Phalcon\Db\CheckInterface`](/6.0/api/phalcon_db/#dbcheckinterface)

### Method Summary

<ApiItem href="#contractsdbcheck-getexpression" visibility="public" name="getExpression" returnType="string" params={[]}>
Gets the CHECK expression (the SQL boolean predicate).
</ApiItem>
<ApiItem href="#contractsdbcheck-getname" visibility="public" name="getName" returnType="string" params={[]}>
Gets the constraint name. An empty string indicates an unnamed CHECK
</ApiItem>

### Methods

<h4 id="contractsdbcheck-getexpression"><code>getExpression()</code></h4>

```php
public function getExpression(): string;
```

Gets the CHECK expression (the SQL boolean predicate).

<h4 id="contractsdbcheck-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Gets the constraint name. An empty string indicates an unnamed CHECK
constraint - the dialect will emit the clause without a `CONSTRAINT`
prefix in that case.

## Contracts\Db\Column

Interface

Canonical contract for Phalcon\Db\Column.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getGenerationExpression() : string | null
             - isArray()                 : bool
             - isGenerated()             : bool
             - isGenerationStored()      : bool
             - isInvisible()             : bool

- **`Phalcon\Contracts\Db\Column`**
- [`Phalcon\Db\ColumnInterface`](/6.0/api/phalcon_db/#dbcolumninterface)

### Method Summary

<ApiItem href="#contractsdbcolumn-getafterposition" visibility="public" name="getAfterPosition" returnType="string|null" params={[]}>
Check whether field absolute to position in table
</ApiItem>
<ApiItem href="#contractsdbcolumn-getbindtype" visibility="public" name="getBindType" returnType="int" params={[]}>
Returns the type of bind handling
</ApiItem>
<ApiItem href="#contractsdbcolumn-getdefault" visibility="public" name="getDefault" returnType="mixed" params={[]}>
Returns default value of column
</ApiItem>
<ApiItem href="#contractsdbcolumn-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns column name
</ApiItem>
<ApiItem href="#contractsdbcolumn-getscale" visibility="public" name="getScale" returnType="int" params={[]}>
Returns column scale
</ApiItem>
<ApiItem href="#contractsdbcolumn-getsize" visibility="public" name="getSize" returnType="int|string" params={[]}>
Returns column size
</ApiItem>
<ApiItem href="#contractsdbcolumn-gettype" visibility="public" name="getType" returnType="int|string" params={[]}>
Returns column type
</ApiItem>
<ApiItem href="#contractsdbcolumn-gettypereference" visibility="public" name="getTypeReference" returnType="int" params={[]}>
Returns column type reference
</ApiItem>
<ApiItem href="#contractsdbcolumn-gettypevalues" visibility="public" name="getTypeValues" returnType="array|int|string" params={[]}>
Returns column type values
</ApiItem>
<ApiItem href="#contractsdbcolumn-hasdefault" visibility="public" name="hasDefault" returnType="bool" params={[]}>
Check whether column has default value
</ApiItem>
<ApiItem href="#contractsdbcolumn-isautoincrement" visibility="public" name="isAutoIncrement" returnType="bool" params={[]}>
Auto-Increment
</ApiItem>
<ApiItem href="#contractsdbcolumn-isfirst" visibility="public" name="isFirst" returnType="bool" params={[]}>
Check whether the column is the first in table
</ApiItem>
<ApiItem href="#contractsdbcolumn-isnotnull" visibility="public" name="isNotNull" returnType="bool" params={[]}>
Not null
</ApiItem>
<ApiItem href="#contractsdbcolumn-isnumeric" visibility="public" name="isNumeric" returnType="bool" params={[]}>
Check whether column have a numeric type
</ApiItem>
<ApiItem href="#contractsdbcolumn-isprimary" visibility="public" name="isPrimary" returnType="bool" params={[]}>
Column is part of the primary key?
</ApiItem>
<ApiItem href="#contractsdbcolumn-isunsigned" visibility="public" name="isUnsigned" returnType="bool" params={[]}>
Returns true if number column is unsigned
</ApiItem>

### Methods

<h4 id="contractsdbcolumn-getafterposition"><code>getAfterPosition()</code></h4>

```php
public function getAfterPosition(): string|null;
```

Check whether field absolute to position in table

<h4 id="contractsdbcolumn-getbindtype"><code>getBindType()</code></h4>

```php
public function getBindType(): int;
```

Returns the type of bind handling

<h4 id="contractsdbcolumn-getdefault"><code>getDefault()</code></h4>

```php
public function getDefault(): mixed;
```

Returns default value of column

<h4 id="contractsdbcolumn-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns column name

<h4 id="contractsdbcolumn-getscale"><code>getScale()</code></h4>

```php
public function getScale(): int;
```

Returns column scale

<h4 id="contractsdbcolumn-getsize"><code>getSize()</code></h4>

```php
public function getSize(): int|string;
```

Returns column size

<h4 id="contractsdbcolumn-gettype"><code>getType()</code></h4>

```php
public function getType(): int|string;
```

Returns column type

<h4 id="contractsdbcolumn-gettypereference"><code>getTypeReference()</code></h4>

```php
public function getTypeReference(): int;
```

Returns column type reference

<h4 id="contractsdbcolumn-gettypevalues"><code>getTypeValues()</code></h4>

```php
public function getTypeValues(): array|int|string;
```

Returns column type values

<h4 id="contractsdbcolumn-hasdefault"><code>hasDefault()</code></h4>

```php
public function hasDefault(): bool;
```

Check whether column has default value

<h4 id="contractsdbcolumn-isautoincrement"><code>isAutoIncrement()</code></h4>

```php
public function isAutoIncrement(): bool;
```

Auto-Increment

<h4 id="contractsdbcolumn-isfirst"><code>isFirst()</code></h4>

```php
public function isFirst(): bool;
```

Check whether the column is the first in table

<h4 id="contractsdbcolumn-isnotnull"><code>isNotNull()</code></h4>

```php
public function isNotNull(): bool;
```

Not null

<h4 id="contractsdbcolumn-isnumeric"><code>isNumeric()</code></h4>

```php
public function isNumeric(): bool;
```

Check whether column have a numeric type

<h4 id="contractsdbcolumn-isprimary"><code>isPrimary()</code></h4>

```php
public function isPrimary(): bool;
```

Column is part of the primary key?

<h4 id="contractsdbcolumn-isunsigned"><code>isUnsigned()</code></h4>

```php
public function isUnsigned(): bool;
```

Returns true if number column is unsigned

## Contracts\Db\Dialect

Interface

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

- **`Phalcon\Contracts\Db\Dialect`**
- [`Phalcon\Db\DialectInterface`](/6.0/api/phalcon_db/#dbdialectinterface)

`Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<ApiItem href="#contractsdbdialect-addcolumn" visibility="public" name="addColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null}]}>
Generates SQL to add a column to a table
</ApiItem>
<ApiItem href="#contractsdbdialect-addforeignkey" visibility="public" name="addForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#contractsdbdialect-addindex" visibility="public" name="addIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#contractsdbdialect-addprimarykey" visibility="public" name="addPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add the primary key to a table
</ApiItem>
<ApiItem href="#contractsdbdialect-createsavepoint" visibility="public" name="createSavepoint" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Generate SQL to create a new savepoint
</ApiItem>
<ApiItem href="#contractsdbdialect-createtable" visibility="public" name="createTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Generates SQL to create a table
</ApiItem>
<ApiItem href="#contractsdbdialect-createview" visibility="public" name="createView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to create a view
</ApiItem>
<ApiItem href="#contractsdbdialect-describecolumns" visibility="public" name="describeColumns" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to describe a table
</ApiItem>
<ApiItem href="#contractsdbdialect-describeindexes" visibility="public" name="describeIndexes" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to query indexes on a table.
</ApiItem>
<ApiItem href="#contractsdbdialect-describereferences" visibility="public" name="describeReferences" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to query foreign keys on a table.
</ApiItem>
<ApiItem href="#contractsdbdialect-dropcolumn" visibility="public" name="dropColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"columnName","default":null}]}>
Generates SQL to delete a column from a table
</ApiItem>
<ApiItem href="#contractsdbdialect-dropforeignkey" visibility="public" name="dropForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"referenceName","default":null}]}>
Generates SQL to delete a foreign key from a table
</ApiItem>
<ApiItem href="#contractsdbdialect-dropindex" visibility="public" name="dropIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"indexName","default":null}]}>
Generates SQL to delete an index from a table
</ApiItem>
<ApiItem href="#contractsdbdialect-dropprimarykey" visibility="public" name="dropPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to delete primary key from a table
</ApiItem>
<ApiItem href="#contractsdbdialect-droptable" visibility="public" name="dropTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a table
</ApiItem>
<ApiItem href="#contractsdbdialect-dropview" visibility="public" name="dropView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a view
</ApiItem>
<ApiItem href="#contractsdbdialect-forupdate" visibility="public" name="forUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a FOR UPDATE clause
</ApiItem>
<ApiItem href="#contractsdbdialect-getcolumndefinition" visibility="public" name="getColumnDefinition" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Gets the column name in RDBMS
</ApiItem>
<ApiItem href="#contractsdbdialect-getcolumnlist" visibility="public" name="getColumnList" returnType="string" params={[{"type":"array","name":"columnList","default":null}]}>
Gets a list of columns
</ApiItem>
<ApiItem href="#contractsdbdialect-getcustomfunctions" visibility="public" name="getCustomFunctions" returnType="array" params={[]}>
Returns registered functions
</ApiItem>
<ApiItem href="#contractsdbdialect-getsqlexpression" visibility="public" name="getSqlExpression" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string","name":"escapeChar","default":"\"\""},{"type":"array","name":"bindCounts","default":"[]"}]}>
Transforms an intermediate representation for an expression into a
</ApiItem>
<ApiItem href="#contractsdbdialect-limit" visibility="public" name="limit" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array|int","name":"number","default":null}]}>
Generates the SQL for LIMIT clause
</ApiItem>
<ApiItem href="#contractsdbdialect-listtables" visibility="public" name="listTables" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all tables in database
</ApiItem>
<ApiItem href="#contractsdbdialect-modifycolumn" visibility="public" name="modifyColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Generates SQL to modify a column in a table
</ApiItem>
<ApiItem href="#contractsdbdialect-registercustomfunction" visibility="public" name="registerCustomFunction" returnType="DbDialect" params={[{"type":"string","name":"name","default":null},{"type":"callable","name":"customFunction","default":null}]}>
Registers custom SQL functions
</ApiItem>
<ApiItem href="#contractsdbdialect-releasesavepoint" visibility="public" name="releaseSavepoint" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Generate SQL to release a savepoint
</ApiItem>
<ApiItem href="#contractsdbdialect-rollbacksavepoint" visibility="public" name="rollbackSavepoint" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Generate SQL to rollback a savepoint
</ApiItem>
<ApiItem href="#contractsdbdialect-select" visibility="public" name="select" returnType="string" params={[{"type":"array","name":"definition","default":null}]}>
Builds a SELECT statement
</ApiItem>
<ApiItem href="#contractsdbdialect-sharedlock" visibility="public" name="sharedLock" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a LOCK IN SHARE MODE clause
</ApiItem>
<ApiItem href="#contractsdbdialect-supportsreleasesavepoints" visibility="public" name="supportsReleaseSavepoints" returnType="bool" params={[]}>
Checks whether the platform supports releasing savepoints.
</ApiItem>
<ApiItem href="#contractsdbdialect-supportssavepoints" visibility="public" name="supportsSavepoints" returnType="bool" params={[]}>
Checks whether the platform supports savepoints
</ApiItem>
<ApiItem href="#contractsdbdialect-tableexists" visibility="public" name="tableExists" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.table
</ApiItem>
<ApiItem href="#contractsdbdialect-tableoptions" visibility="public" name="tableOptions" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates the SQL to describe the table creation options
</ApiItem>
<ApiItem href="#contractsdbdialect-viewexists" visibility="public" name="viewExists" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.view
</ApiItem>

### Constants

<ApiItem kind="constant" name="LOCK_NONE" type="string" default="&quot;&quot;">
No row-lock modifier - the default behavior for `forUpdate()`.
</ApiItem>
<ApiItem kind="constant" name="LOCK_NOWAIT" type="string" default="&quot;NOWAIT&quot;">
Append `NOWAIT` to the `FOR UPDATE` clause.
</ApiItem>
<ApiItem kind="constant" name="LOCK_SKIP_LOCKED" type="string" default="&quot;SKIP LOCKED&quot;">
Append `SKIP LOCKED` to the `FOR UPDATE` clause.
</ApiItem>

### Methods

<h4 id="contractsdbdialect-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
string $tableName,
string $schemaName,
ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

<h4 id="contractsdbdialect-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
string $tableName,
string $schemaName,
ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

<h4 id="contractsdbdialect-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
string $tableName,
string $schemaName,
IndexInterface $index
): string;
```

Generates SQL to add an index to a table

<h4 id="contractsdbdialect-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
string $tableName,
string $schemaName,
IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

<h4 id="contractsdbdialect-createsavepoint"><code>createSavepoint()</code></h4>

```php
public function createSavepoint( string $name ): string;
```

Generate SQL to create a new savepoint

<h4 id="contractsdbdialect-createtable"><code>createTable()</code></h4>

```php
public function createTable(
string $tableName,
string $schemaName,
array $definition
): string;
```

Generates SQL to create a table

<h4 id="contractsdbdialect-createview"><code>createView()</code></h4>

```php
public function createView(
string $viewName,
array $definition,
string|null $schemaName = null
): string;
```

Generates SQL to create a view

<h4 id="contractsdbdialect-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
string $tableName,
string|null $schemaName = null
): string;
```

Generates SQL to describe a table

<h4 id="contractsdbdialect-describeindexes"><code>describeIndexes()</code></h4>

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

<h4 id="contractsdbdialect-describereferences"><code>describeReferences()</code></h4>

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

<h4 id="contractsdbdialect-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
string $tableName,
string $schemaName,
string $columnName
): string;
```

Generates SQL to delete a column from a table

<h4 id="contractsdbdialect-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
string $tableName,
string $schemaName,
string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

<h4 id="contractsdbdialect-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
string $tableName,
string $schemaName,
string $indexName
): string;
```

Generates SQL to delete an index from a table

<h4 id="contractsdbdialect-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
string $tableName,
string $schemaName
): string;
```

Generates SQL to delete primary key from a table

<h4 id="contractsdbdialect-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
string $tableName,
string $schemaName,
bool $ifExists = true
): string;
```

Generates SQL to drop a table

<h4 id="contractsdbdialect-dropview"><code>dropView()</code></h4>

```php
public function dropView(
string $viewName,
string|null $schemaName = null,
bool $ifExists = true
): string;
```

Generates SQL to drop a view

<h4 id="contractsdbdialect-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause

<h4 id="contractsdbdialect-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in RDBMS

<h4 id="contractsdbdialect-getcolumnlist"><code>getColumnList()</code></h4>

```php
public function getColumnList( array $columnList ): string;
```

Gets a list of columns

<h4 id="contractsdbdialect-getcustomfunctions"><code>getCustomFunctions()</code></h4>

```php
public function getCustomFunctions(): array;
```

Returns registered functions

<h4 id="contractsdbdialect-getsqlexpression"><code>getSqlExpression()</code></h4>

```php
public function getSqlExpression(
array $expression,
string $escapeChar = "",
array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a
database system valid expression

<h4 id="contractsdbdialect-limit"><code>limit()</code></h4>

```php
public function limit(
string $sqlQuery,
array|int $number
): string;
```

Generates the SQL for LIMIT clause

<h4 id="contractsdbdialect-listtables"><code>listTables()</code></h4>

```php
public function listTables( string|null $schemaName = null ): string;
```

List all tables in database

<h4 id="contractsdbdialect-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
string $tableName,
string $schemaName,
ColumnInterface $column,
ColumnInterface|null $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

<h4 id="contractsdbdialect-registercustomfunction"><code>registerCustomFunction()</code></h4>

```php
public function registerCustomFunction(
string $name,
callable $customFunction
): DbDialect;
```

Registers custom SQL functions

<h4 id="contractsdbdialect-releasesavepoint"><code>releaseSavepoint()</code></h4>

```php
public function releaseSavepoint( string $name ): string;
```

Generate SQL to release a savepoint

<h4 id="contractsdbdialect-rollbacksavepoint"><code>rollbackSavepoint()</code></h4>

```php
public function rollbackSavepoint( string $name ): string;
```

Generate SQL to rollback a savepoint

<h4 id="contractsdbdialect-select"><code>select()</code></h4>

```php
public function select( array $definition ): string;
```

Builds a SELECT statement

<h4 id="contractsdbdialect-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a LOCK IN SHARE MODE clause

<h4 id="contractsdbdialect-supportsreleasesavepoints"><code>supportsReleaseSavepoints()</code></h4>

```php
public function supportsReleaseSavepoints(): bool;
```

Checks whether the platform supports releasing savepoints.

<h4 id="contractsdbdialect-supportssavepoints"><code>supportsSavepoints()</code></h4>

```php
public function supportsSavepoints(): bool;
```

Checks whether the platform supports savepoints

<h4 id="contractsdbdialect-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
string $tableName,
string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

<h4 id="contractsdbdialect-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
string $tableName,
string|null $schemaName = null
): string;
```

Generates the SQL to describe the table creation options

<h4 id="contractsdbdialect-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
string $viewName,
string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view

## Contracts\Db\Geometry\Geometry

Interface

Canonical contract for Phalcon\Db\Geometry value objects.

- **`Phalcon\Contracts\Db\Geometry\Geometry`**
- [`Phalcon\Db\Geometry\GeometryInterface`](/6.0/api/phalcon_db/#dbgeometrygeometryinterface)

### Method Summary

<ApiItem href="#contractsdbgeometrygeometry-getsrid" visibility="public" name="getSrid" returnType="int" params={[]}>
Gets the Spatial Reference System Identifier (SRID).
</ApiItem>
<ApiItem href="#contractsdbgeometrygeometry-gettype" visibility="public" name="getType" returnType="int" params={[]}>
Gets the geometry type.
</ApiItem>
<ApiItem href="#contractsdbgeometrygeometry-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
Renders the geometry as a Well-Known Text (WKT) string.
</ApiItem>

### Methods

<h4 id="contractsdbgeometrygeometry-getsrid"><code>getSrid()</code></h4>

```php
public function getSrid(): int;
```

Gets the Spatial Reference System Identifier (SRID).

<h4 id="contractsdbgeometrygeometry-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

Gets the geometry type.

<h4 id="contractsdbgeometrygeometry-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```

Renders the geometry as a Well-Known Text (WKT) string.

## Contracts\Db\Index

Interface

Canonical contract for Phalcon\Db\Index.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getDirections() : array
             - getWhere()      : string
             - isConcurrent()  : bool
             - isInvisible()   : bool

- **`Phalcon\Contracts\Db\Index`**
- [`Phalcon\Db\IndexInterface`](/6.0/api/phalcon_db/#dbindexinterface)

### Method Summary

<ApiItem href="#contractsdbindex-getcolumns" visibility="public" name="getColumns" returnType="array" params={[]}>
Gets the columns that corresponds the index
</ApiItem>
<ApiItem href="#contractsdbindex-getname" visibility="public" name="getName" returnType="string" params={[]}>
Gets the index name
</ApiItem>
<ApiItem href="#contractsdbindex-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Gets the index type
</ApiItem>

### Methods

<h4 id="contractsdbindex-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array;
```

Gets the columns that corresponds the index

<h4 id="contractsdbindex-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Gets the index name

<h4 id="contractsdbindex-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Gets the index type

## Contracts\Db\Reference

Interface

Interface for Phalcon\Db\Reference

- **`Phalcon\Contracts\Db\Reference`**
- [`Phalcon\Db\ReferenceInterface`](/6.0/api/phalcon_db/#dbreferenceinterface)

### Method Summary

<ApiItem href="#contractsdbreference-getcolumns" visibility="public" name="getColumns" returnType="array" params={[]}>
Gets local columns which reference is based
</ApiItem>
<ApiItem href="#contractsdbreference-getname" visibility="public" name="getName" returnType="string" params={[]}>
Gets the index name
</ApiItem>
<ApiItem href="#contractsdbreference-getondelete" visibility="public" name="getOnDelete" returnType="string|null" params={[]}>
Gets the referenced on delete
</ApiItem>
<ApiItem href="#contractsdbreference-getonupdate" visibility="public" name="getOnUpdate" returnType="string|null" params={[]}>
Gets the referenced on update
</ApiItem>
<ApiItem href="#contractsdbreference-getreferencedcolumns" visibility="public" name="getReferencedColumns" returnType="array" params={[]}>
Gets referenced columns
</ApiItem>
<ApiItem href="#contractsdbreference-getreferencedschema" visibility="public" name="getReferencedSchema" returnType="string|null" params={[]}>
Gets the schema where referenced table is
</ApiItem>
<ApiItem href="#contractsdbreference-getreferencedtable" visibility="public" name="getReferencedTable" returnType="string" params={[]}>
Gets the referenced table
</ApiItem>
<ApiItem href="#contractsdbreference-getschemaname" visibility="public" name="getSchemaName" returnType="string|null" params={[]}>
Gets the schema where referenced table is
</ApiItem>

### Methods

<h4 id="contractsdbreference-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array;
```

Gets local columns which reference is based

<h4 id="contractsdbreference-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Gets the index name

<h4 id="contractsdbreference-getondelete"><code>getOnDelete()</code></h4>

```php
public function getOnDelete(): string|null;
```

Gets the referenced on delete

<h4 id="contractsdbreference-getonupdate"><code>getOnUpdate()</code></h4>

```php
public function getOnUpdate(): string|null;
```

Gets the referenced on update

<h4 id="contractsdbreference-getreferencedcolumns"><code>getReferencedColumns()</code></h4>

```php
public function getReferencedColumns(): array;
```

Gets referenced columns

<h4 id="contractsdbreference-getreferencedschema"><code>getReferencedSchema()</code></h4>

```php
public function getReferencedSchema(): string|null;
```

Gets the schema where referenced table is

<h4 id="contractsdbreference-getreferencedtable"><code>getReferencedTable()</code></h4>

```php
public function getReferencedTable(): string;
```

Gets the referenced table

<h4 id="contractsdbreference-getschemaname"><code>getSchemaName()</code></h4>

```php
public function getSchemaName(): string|null;
```

Gets the schema where referenced table is

## Contracts\Db\Result

Interface

Canonical contract for Phalcon\Db result objects.

- **`Phalcon\Contracts\Db\Result`**
- [`Phalcon\Db\ResultInterface`](/6.0/api/phalcon_db/#dbresultinterface)

`PDOStatement`

### Method Summary

<ApiItem href="#contractsdbresult-dataseek" visibility="public" name="dataSeek" returnType="" params={[{"type":"int","name":"number","default":null}]}>
Moves internal resultset cursor to another position letting us to fetch a
</ApiItem>
<ApiItem href="#contractsdbresult-execute" visibility="public" name="execute" returnType="bool" params={[]}>
Allows to execute the statement again. Some database systems don't
</ApiItem>
<ApiItem href="#contractsdbresult-fetch" visibility="public" name="fetch" returnType="mixed" params={[]}>
Fetches an array/object of strings that corresponds to the fetched row,
</ApiItem>
<ApiItem href="#contractsdbresult-fetchall" visibility="public" name="fetchAll" returnType="array" params={[]}>
Returns an array of arrays containing all the records in the result. This
</ApiItem>
<ApiItem href="#contractsdbresult-fetcharray" visibility="public" name="fetchArray" returnType="mixed" params={[]}>
Returns an array of strings that corresponds to the fetched row, or FALSE
</ApiItem>
<ApiItem href="#contractsdbresult-getinternalresult" visibility="public" name="getInternalResult" returnType="PDOStatement" params={[]}>
Gets the internal PDO result object
</ApiItem>
<ApiItem href="#contractsdbresult-numrows" visibility="public" name="numRows" returnType="int" params={[]}>
Gets number of rows returned by a resultset
</ApiItem>
<ApiItem href="#contractsdbresult-setfetchmode" visibility="public" name="setFetchMode" returnType="bool" params={[{"type":"int","name":"fetchMode","default":null}]}>
Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()
</ApiItem>

### Methods

<h4 id="contractsdbresult-dataseek"><code>dataSeek()</code></h4>

```php
public function dataSeek( int $number );
```

Moves internal resultset cursor to another position letting us to fetch a
certain row

<h4 id="contractsdbresult-execute"><code>execute()</code></h4>

```php
public function execute(): bool;
```

Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

<h4 id="contractsdbresult-fetch"><code>fetch()</code></h4>

```php
public function fetch(): mixed;
```

Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

<h4 id="contractsdbresult-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(): array;
```

Returns an array of arrays containing all the records in the result. This
method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`

<h4 id="contractsdbresult-fetcharray"><code>fetchArray()</code></h4>

```php
public function fetchArray(): mixed;
```

Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

<h4 id="contractsdbresult-getinternalresult"><code>getInternalResult()</code></h4>

```php
public function getInternalResult(): PDOStatement;
```

Gets the internal PDO result object

<h4 id="contractsdbresult-numrows"><code>numRows()</code></h4>

```php
public function numRows(): int;
```

Gets number of rows returned by a resultset

<h4 id="contractsdbresult-setfetchmode"><code>setFetchMode()</code></h4>

```php
public function setFetchMode( int $fetchMode ): bool;
```

Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()

## Contracts\Dispatcher\Dispatcher

Interface

Canonical contract for Phalcon\Dispatcher\AbstractDispatcher.

Note: The deprecated `getParam()`/`getParams()`/`hasParam()`/`setParam()`/
`setParams()` spellings are still declared for backwards compatibility and
are scheduled to be removed in the next major version in favor of their
`*Parameter` counterparts.

- **`Phalcon\Contracts\Dispatcher\Dispatcher`**
- [`Phalcon\Contracts\Cli\Dispatcher`](#contractsclidispatcher)
- [`Phalcon\Contracts\Mvc\Dispatcher`](#contractsmvcdispatcher)
- [`Phalcon\Dispatcher\DispatcherInterface`](/6.0/api/phalcon_dispatcher/#dispatcherdispatcherinterface)

### Method Summary

<ApiItem href="#contractsdispatcherdispatcher-dispatch" visibility="public" name="dispatch" returnType="" params={[]}>
Dispatches a handle action taking into account the routing parameters
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-forward" visibility="public" name="forward" returnType="void" params={[{"type":"array","name":"forward","default":null}]}>
Forwards the execution flow to another controller/action
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Gets last dispatched action name
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getactionsuffix" visibility="public" name="getActionSuffix" returnType="string" params={[]}>
Gets the default action suffix
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-gethandlersuffix" visibility="public" name="getHandlerSuffix" returnType="string" params={[]}>
Gets the default handler suffix
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getparam" visibility="public" name="getParam" returnType="mixed" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"filters","default":"null"}]}>
Gets a param by its name or numeric index
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getparameter" visibility="public" name="getParameter" returnType="mixed" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"filters","default":"null"}]}>
Gets a param by its name or numeric index
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getparameters" visibility="public" name="getParameters" returnType="array" params={[]}>
Gets action params
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Gets action params
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-getreturnedvalue" visibility="public" name="getReturnedValue" returnType="mixed" params={[]}>
Returns value returned by the latest dispatched action
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-hasparam" visibility="public" name="hasParam" returnType="bool" params={[{"type":"mixed","name":"param","default":null}]}>
Check if a param exists
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-isfinished" visibility="public" name="isFinished" returnType="bool" params={[]}>
Checks if the dispatch loop is finished or has more pendent
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setactionname" visibility="public" name="setActionName" returnType="void" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the action name to be dispatched
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setactionsuffix" visibility="public" name="setActionSuffix" returnType="void" params={[{"type":"string","name":"actionSuffix","default":null}]}>
Sets the default action suffix
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setdefaultaction" visibility="public" name="setDefaultAction" returnType="void" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the default action name
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setdefaultnamespace" visibility="public" name="setDefaultNamespace" returnType="void" params={[{"type":"string","name":"defaultNamespace","default":null}]}>
Sets the default namespace
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-sethandlersuffix" visibility="public" name="setHandlerSuffix" returnType="void" params={[{"type":"string","name":"handlerSuffix","default":null}]}>
Sets the default suffix for the handler
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setmodulename" visibility="public" name="setModuleName" returnType="void" params={[{"type":"string|null","name":"moduleName","default":"null"}]}>
Sets the module name which the application belongs to
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setnamespacename" visibility="public" name="setNamespaceName" returnType="void" params={[{"type":"string","name":"namespaceName","default":null}]}>
Sets the namespace which the controller belongs to
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setparam" visibility="public" name="setParam" returnType="void" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"value","default":null}]}>
Set a param by its name or numeric index
</ApiItem>
<ApiItem href="#contractsdispatcherdispatcher-setparams" visibility="public" name="setParams" returnType="void" params={[{"type":"array","name":"params","default":null}]}>
Sets action params to be dispatched
</ApiItem>

### Methods

<h4 id="contractsdispatcherdispatcher-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch();
```

Dispatches a handle action taking into account the routing parameters

<h4 id="contractsdispatcherdispatcher-forward"><code>forward()</code></h4>

```php
public function forward( array $forward ): void;
```

Forwards the execution flow to another controller/action

<h4 id="contractsdispatcherdispatcher-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Gets last dispatched action name

<h4 id="contractsdispatcherdispatcher-getactionsuffix"><code>getActionSuffix()</code></h4>

```php
public function getActionSuffix(): string;
```

Gets the default action suffix

<h4 id="contractsdispatcherdispatcher-gethandlersuffix"><code>getHandlerSuffix()</code></h4>

```php
public function getHandlerSuffix(): string;
```

Gets the default handler suffix

<h4 id="contractsdispatcherdispatcher-getparam"><code>getParam()</code></h4>

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

<h4 id="contractsdispatcherdispatcher-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter(
mixed $param,
mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

<h4 id="contractsdispatcherdispatcher-getparameters"><code>getParameters()</code></h4>

```php
public function getParameters(): array;
```

Gets action params

<h4 id="contractsdispatcherdispatcher-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Gets action params

<h4 id="contractsdispatcherdispatcher-getreturnedvalue"><code>getReturnedValue()</code></h4>

```php
public function getReturnedValue(): mixed;
```

Returns value returned by the latest dispatched action

<h4 id="contractsdispatcherdispatcher-hasparam"><code>hasParam()</code></h4>

```php
public function hasParam( mixed $param ): bool;
```

Check if a param exists

<h4 id="contractsdispatcherdispatcher-isfinished"><code>isFinished()</code></h4>

```php
public function isFinished(): bool;
```

Checks if the dispatch loop is finished or has more pendent
controllers/tasks to dispatch

<h4 id="contractsdispatcherdispatcher-setactionname"><code>setActionName()</code></h4>

```php
public function setActionName( string $actionName ): void;
```

Sets the action name to be dispatched

<h4 id="contractsdispatcherdispatcher-setactionsuffix"><code>setActionSuffix()</code></h4>

```php
public function setActionSuffix( string $actionSuffix ): void;
```

Sets the default action suffix

<h4 id="contractsdispatcherdispatcher-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): void;
```

Sets the default action name

<h4 id="contractsdispatcherdispatcher-setdefaultnamespace"><code>setDefaultNamespace()</code></h4>

```php
public function setDefaultNamespace( string $defaultNamespace ): void;
```

Sets the default namespace

<h4 id="contractsdispatcherdispatcher-sethandlersuffix"><code>setHandlerSuffix()</code></h4>

```php
public function setHandlerSuffix( string $handlerSuffix ): void;
```

Sets the default suffix for the handler

<h4 id="contractsdispatcherdispatcher-setmodulename"><code>setModuleName()</code></h4>

```php
public function setModuleName( string|null $moduleName = null ): void;
```

Sets the module name which the application belongs to

<h4 id="contractsdispatcherdispatcher-setnamespacename"><code>setNamespaceName()</code></h4>

```php
public function setNamespaceName( string $namespaceName ): void;
```

Sets the namespace which the controller belongs to

<h4 id="contractsdispatcherdispatcher-setparam"><code>setParam()</code></h4>

```php
public function setParam(
mixed $param,
mixed $value
): void;
```

Set a param by its name or numeric index

<h4 id="contractsdispatcherdispatcher-setparams"><code>setParams()</code></h4>

```php
public function setParams( array $params ): void;
```

Sets action params to be dispatched

## Contracts\Dispatcher\DispatcherTypes

Interface

Central registry of the array shapes used across the Dispatcher namespace.

- **`Phalcon\Contracts\Dispatcher\DispatcherTypes`**

## Contracts\Domain\Payload\Payload

Interface

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

- [`Phalcon\Contracts\Domain\Payload\Readable`](#contractsdomainpayloadreadable)
- **`Phalcon\Contracts\Domain\Payload\Payload`** - extends [`Phalcon\Contracts\Domain\Payload\Readable`](#contractsdomainpayloadreadable), [`Phalcon\Contracts\Domain\Payload\Writeable`](#contractsdomainpayloadwriteable)

## Contracts\Domain\Payload\Readable

Interface

Canonical read-only contract for a domain payload.

Responders consume a finished payload through this contract (the getters),
narrowing the surface to the read side of the Action-Domain-Responder
boundary.

- **`Phalcon\Contracts\Domain\Payload\Readable`**
- [`Phalcon\Contracts\Domain\Payload\Payload`](#contractsdomainpayloadpayload)
- [`Phalcon\Domain\Payload\ReadableInterface`](/6.0/api/phalcon_domain/#domainpayloadreadableinterface)

`Throwable`

### Method Summary

<ApiItem href="#contractsdomainpayloadreadable-getexception" visibility="public" name="getException" returnType="Throwable|null" params={[]}>
Gets the potential exception thrown in the domain layer
</ApiItem>
<ApiItem href="#contractsdomainpayloadreadable-getextras" visibility="public" name="getExtras" returnType="mixed" params={[]}>
Gets arbitrary extra values produced by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadreadable-getinput" visibility="public" name="getInput" returnType="mixed" params={[]}>
Gets the input received by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadreadable-getmessages" visibility="public" name="getMessages" returnType="mixed" params={[]}>
Gets the messages produced by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadreadable-getoutput" visibility="public" name="getOutput" returnType="mixed" params={[]}>
Gets the output produced from the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadreadable-getstatus" visibility="public" name="getStatus" returnType="mixed" params={[]}>
Gets the status of this payload.
</ApiItem>

### Methods

<h4 id="contractsdomainpayloadreadable-getexception"><code>getException()</code></h4>

```php
public function getException(): Throwable|null;
```

Gets the potential exception thrown in the domain layer

<h4 id="contractsdomainpayloadreadable-getextras"><code>getExtras()</code></h4>

```php
public function getExtras(): mixed;
```

Gets arbitrary extra values produced by the domain layer.

<h4 id="contractsdomainpayloadreadable-getinput"><code>getInput()</code></h4>

```php
public function getInput(): mixed;
```

Gets the input received by the domain layer.

<h4 id="contractsdomainpayloadreadable-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): mixed;
```

Gets the messages produced by the domain layer.

<h4 id="contractsdomainpayloadreadable-getoutput"><code>getOutput()</code></h4>

```php
public function getOutput(): mixed;
```

Gets the output produced from the domain layer.

<h4 id="contractsdomainpayloadreadable-getstatus"><code>getStatus()</code></h4>

```php
public function getStatus(): mixed;
```

Gets the status of this payload.

Status values are drawn from the `Status` vocabulary.

@see \Phalcon\Domain\Payload\Status

## Contracts\Domain\Payload\Writeable

Interface

Canonical write-only contract for a domain payload.

The domain layer builds a payload through this contract (the setters),
narrowing the surface to the write side of the Action-Domain-Responder
boundary.

- **`Phalcon\Contracts\Domain\Payload\Writeable`**
- [`Phalcon\Domain\Payload\WriteableInterface`](/6.0/api/phalcon_domain/#domainpayloadwriteableinterface)

`Throwable`

### Method Summary

<ApiItem href="#contractsdomainpayloadwriteable-setexception" visibility="public" name="setException" returnType="Payload" params={[{"type":"Throwable","name":"exception","default":null}]}>
Sets an exception produced by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadwriteable-setextras" visibility="public" name="setExtras" returnType="Payload" params={[{"type":"mixed","name":"extras","default":null}]}>
Sets arbitrary extra values produced by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadwriteable-setinput" visibility="public" name="setInput" returnType="Payload" params={[{"type":"mixed","name":"input","default":null}]}>
Sets the input received by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadwriteable-setmessages" visibility="public" name="setMessages" returnType="Payload" params={[{"type":"mixed","name":"messages","default":null}]}>
Sets the messages produced by the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadwriteable-setoutput" visibility="public" name="setOutput" returnType="Payload" params={[{"type":"mixed","name":"output","default":null}]}>
Sets the output produced from the domain layer.
</ApiItem>
<ApiItem href="#contractsdomainpayloadwriteable-setstatus" visibility="public" name="setStatus" returnType="Payload" params={[{"type":"mixed","name":"status","default":null}]}>
Sets the status of this payload.
</ApiItem>

### Methods

<h4 id="contractsdomainpayloadwriteable-setexception"><code>setException()</code></h4>

```php
public function setException( Throwable $exception ): Payload;
```

Sets an exception produced by the domain layer.

<h4 id="contractsdomainpayloadwriteable-setextras"><code>setExtras()</code></h4>

```php
public function setExtras( mixed $extras ): Payload;
```

Sets arbitrary extra values produced by the domain layer.

<h4 id="contractsdomainpayloadwriteable-setinput"><code>setInput()</code></h4>

```php
public function setInput( mixed $input ): Payload;
```

Sets the input received by the domain layer.

<h4 id="contractsdomainpayloadwriteable-setmessages"><code>setMessages()</code></h4>

```php
public function setMessages( mixed $messages ): Payload;
```

Sets the messages produced by the domain layer.

<h4 id="contractsdomainpayloadwriteable-setoutput"><code>setOutput()</code></h4>

```php
public function setOutput( mixed $output ): Payload;
```

Sets the output produced from the domain layer.

<h4 id="contractsdomainpayloadwriteable-setstatus"><code>setStatus()</code></h4>

```php
public function setStatus( mixed $status ): Payload;
```

Sets the status of this payload.

Status values are drawn from the `Status` vocabulary.

@see \Phalcon\Domain\Payload\Status

## Contracts\Encryption\Crypt\Crypt

Interface

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

- **`Phalcon\Contracts\Encryption\Crypt\Crypt`**
- [`Phalcon\Encryption\Crypt\CryptInterface`](/6.0/api/phalcon_encryption/#encryptioncryptcryptinterface)

### Method Summary

<ApiItem href="#contractsencryptioncryptcrypt-decrypt" visibility="public" name="decrypt" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"string|null","name":"key","default":"null"}]}>
Decrypts a text
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-decryptbase64" visibility="public" name="decryptBase64" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"string|null","name":"key","default":"null"}]}>
Decrypt a text that is coded as a base64 string
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-encrypt" visibility="public" name="encrypt" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"string|null","name":"key","default":"null"}]}>
Encrypts a text
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-encryptbase64" visibility="public" name="encryptBase64" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"string|null","name":"key","default":"null"}]}>
Encrypts a text returning the result as a base64 string
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-getauthdata" visibility="public" name="getAuthData" returnType="string" params={[]}>
Returns authentication data
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-getauthtag" visibility="public" name="getAuthTag" returnType="string" params={[]}>
Returns the authentication tag
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-getauthtaglength" visibility="public" name="getAuthTagLength" returnType="int" params={[]}>
Returns the authentication tag length
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-getavailableciphers" visibility="public" name="getAvailableCiphers" returnType="array" params={[]}>
Returns a list of available cyphers
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-getcipher" visibility="public" name="getCipher" returnType="string" params={[]}>
Returns the current cipher
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-getkey" visibility="public" name="getKey" returnType="string" params={[]}>
Returns the encryption key
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-setauthdata" visibility="public" name="setAuthData" returnType="Crypt" params={[{"type":"string","name":"data","default":null}]}>
Sets authentication data
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-setauthtag" visibility="public" name="setAuthTag" returnType="Crypt" params={[{"type":"string","name":"tag","default":null}]}>
Sets the authentication tag
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-setauthtaglength" visibility="public" name="setAuthTagLength" returnType="Crypt" params={[{"type":"int","name":"length","default":null}]}>
Sets the authentication tag length
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-setcipher" visibility="public" name="setCipher" returnType="Crypt" params={[{"type":"string","name":"cipher","default":null}]}>
Sets the cipher algorithm
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-setkey" visibility="public" name="setKey" returnType="Crypt" params={[{"type":"string","name":"key","default":null}]}>
Sets the encryption key
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-setpadding" visibility="public" name="setPadding" returnType="Crypt" params={[{"type":"int","name":"scheme","default":null}]}>
Changes the padding scheme used.
</ApiItem>
<ApiItem href="#contractsencryptioncryptcrypt-usesigning" visibility="public" name="useSigning" returnType="Crypt" params={[{"type":"bool","name":"useSigning","default":null}]}>
Sets if the calculating message digest must be used.
</ApiItem>

### Methods

<h4 id="contractsencryptioncryptcrypt-decrypt"><code>decrypt()</code></h4>

```php
public function decrypt(
string $input,
string|null $key = null
): string;
```

Decrypts a text

<h4 id="contractsencryptioncryptcrypt-decryptbase64"><code>decryptBase64()</code></h4>

```php
public function decryptBase64(
string $input,
string|null $key = null
): string;
```

Decrypt a text that is coded as a base64 string

<h4 id="contractsencryptioncryptcrypt-encrypt"><code>encrypt()</code></h4>

```php
public function encrypt(
string $input,
string|null $key = null
): string;
```

Encrypts a text

<h4 id="contractsencryptioncryptcrypt-encryptbase64"><code>encryptBase64()</code></h4>

```php
public function encryptBase64(
string $input,
string|null $key = null
): string;
```

Encrypts a text returning the result as a base64 string

<h4 id="contractsencryptioncryptcrypt-getauthdata"><code>getAuthData()</code></h4>

```php
public function getAuthData(): string;
```

Returns authentication data

<h4 id="contractsencryptioncryptcrypt-getauthtag"><code>getAuthTag()</code></h4>

```php
public function getAuthTag(): string;
```

Returns the authentication tag

<h4 id="contractsencryptioncryptcrypt-getauthtaglength"><code>getAuthTagLength()</code></h4>

```php
public function getAuthTagLength(): int;
```

Returns the authentication tag length

<h4 id="contractsencryptioncryptcrypt-getavailableciphers"><code>getAvailableCiphers()</code></h4>

```php
public function getAvailableCiphers(): array;
```

Returns a list of available cyphers

<h4 id="contractsencryptioncryptcrypt-getcipher"><code>getCipher()</code></h4>

```php
public function getCipher(): string;
```

Returns the current cipher

<h4 id="contractsencryptioncryptcrypt-getkey"><code>getKey()</code></h4>

```php
public function getKey(): string;
```

Returns the encryption key

<h4 id="contractsencryptioncryptcrypt-setauthdata"><code>setAuthData()</code></h4>

```php
public function setAuthData( string $data ): Crypt;
```

Sets authentication data

<h4 id="contractsencryptioncryptcrypt-setauthtag"><code>setAuthTag()</code></h4>

```php
public function setAuthTag( string $tag ): Crypt;
```

Sets the authentication tag

<h4 id="contractsencryptioncryptcrypt-setauthtaglength"><code>setAuthTagLength()</code></h4>

```php
public function setAuthTagLength( int $length ): Crypt;
```

Sets the authentication tag length

<h4 id="contractsencryptioncryptcrypt-setcipher"><code>setCipher()</code></h4>

```php
public function setCipher( string $cipher ): Crypt;
```

Sets the cipher algorithm

<h4 id="contractsencryptioncryptcrypt-setkey"><code>setKey()</code></h4>

```php
public function setKey( string $key ): Crypt;
```

Sets the encryption key

<h4 id="contractsencryptioncryptcrypt-setpadding"><code>setPadding()</code></h4>

```php
public function setPadding( int $scheme ): Crypt;
```

Changes the padding scheme used.

<h4 id="contractsencryptioncryptcrypt-usesigning"><code>useSigning()</code></h4>

```php
public function useSigning( bool $useSigning ): Crypt;
```

Sets if the calculating message digest must be used.

## Contracts\Encryption\Crypt\Padding\Pad

Interface

Canonical contract for Phalcon\Encryption\Crypt\Padding strategies.

The pad/unpad protocol operates on binary (8-bit) data. Implementations
must measure and slice the input with byte-true functions (`strlen`,
`substr`, or the `mb_*` family with the explicit `"8bit"` encoding); using
encoding-sensitive functions such as `mb_strlen()` on the padded plaintext
yields the wrong padding size whenever the bytes form valid multibyte
sequences.

- **`Phalcon\Contracts\Encryption\Crypt\Padding\Pad`**
- [`Phalcon\Encryption\Crypt\Padding\PadInterface`](/6.0/api/phalcon_encryption/#encryptioncryptpaddingpadinterface)

### Method Summary

<ApiItem href="#contractsencryptioncryptpaddingpad-pad" visibility="public" name="pad" returnType="string" params={[{"type":"int","name":"paddingSize","default":null}]}>
</ApiItem>
<ApiItem href="#contractsencryptioncryptpaddingpad-unpad" visibility="public" name="unpad" returnType="int" params={[{"type":"string","name":"input","default":null},{"type":"int","name":"blockSize","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsencryptioncryptpaddingpad-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="contractsencryptioncryptpaddingpad-unpad"><code>unpad()</code></h4>

```php
public function unpad(
string $input,
int $blockSize
): int;
```

## Contracts\Encryption\Security\CryptoUtils

Interface

- **`Phalcon\Contracts\Encryption\Security\CryptoUtils`**
- [`Phalcon\Contracts\Encryption\Security\Security`](#contractsencryptionsecuritysecurity)

`Phalcon\Encryption\Security\Random`

### Method Summary

<ApiItem href="#contractsencryptionsecuritycryptoutils-computehmac" visibility="public" name="computeHmac" returnType="string" params={[{"type":"string","name":"data","default":null},{"type":"string","name":"key","default":null},{"type":"string","name":"algorithm","default":null},{"type":"bool","name":"raw","default":"false"}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycryptoutils-getrandom" visibility="public" name="getRandom" returnType="Random" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycryptoutils-getrandombytes" visibility="public" name="getRandomBytes" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycryptoutils-getsaltbytes" visibility="public" name="getSaltBytes" returnType="string" params={[{"type":"int","name":"numberBytes","default":"0"}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycryptoutils-setrandombytes" visibility="public" name="setRandomBytes" returnType="Security" params={[{"type":"int","name":"randomBytes","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsencryptionsecuritycryptoutils-computehmac"><code>computeHmac()</code></h4>

```php
public function computeHmac(
string $data,
string $key,
string $algorithm,
bool $raw = false
): string;
```

<h4 id="contractsencryptionsecuritycryptoutils-getrandom"><code>getRandom()</code></h4>

```php
public function getRandom(): Random;
```

<h4 id="contractsencryptionsecuritycryptoutils-getrandombytes"><code>getRandomBytes()</code></h4>

```php
public function getRandomBytes(): int;
```

<h4 id="contractsencryptionsecuritycryptoutils-getsaltbytes"><code>getSaltBytes()</code></h4>

```php
public function getSaltBytes( int $numberBytes = 0 ): string;
```

<h4 id="contractsencryptionsecuritycryptoutils-setrandombytes"><code>setRandomBytes()</code></h4>

```php
public function setRandomBytes( int $randomBytes ): Security;
```

## Contracts\Encryption\Security\CsrfProtection

Interface

- **`Phalcon\Contracts\Encryption\Security\CsrfProtection`**

### Method Summary

<ApiItem href="#contractsencryptionsecuritycsrfprotection-checktoken" visibility="public" name="checkToken" returnType="bool" params={[{"type":"string|null","name":"tokenKey","default":"null"},{"type":"string|null","name":"tokenValue","default":"null"},{"type":"bool","name":"destroyIfValid","default":"true"}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycsrfprotection-destroytoken" visibility="public" name="destroyToken" returnType="Security" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycsrfprotection-getrequesttoken" visibility="public" name="getRequestToken" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycsrfprotection-getsessiontoken" visibility="public" name="getSessionToken" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycsrfprotection-gettoken" visibility="public" name="getToken" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritycsrfprotection-gettokenkey" visibility="public" name="getTokenKey" returnType="string|null" params={[]}>
</ApiItem>

### Methods

<h4 id="contractsencryptionsecuritycsrfprotection-checktoken"><code>checkToken()</code></h4>

```php
public function checkToken(
string|null $tokenKey = null,
string|null $tokenValue = null,
bool $destroyIfValid = true
): bool;
```

<h4 id="contractsencryptionsecuritycsrfprotection-destroytoken"><code>destroyToken()</code></h4>

```php
public function destroyToken(): Security;
```

<h4 id="contractsencryptionsecuritycsrfprotection-getrequesttoken"><code>getRequestToken()</code></h4>

```php
public function getRequestToken(): string|null;
```

<h4 id="contractsencryptionsecuritycsrfprotection-getsessiontoken"><code>getSessionToken()</code></h4>

```php
public function getSessionToken(): string|null;
```

<h4 id="contractsencryptionsecuritycsrfprotection-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string|null;
```

<h4 id="contractsencryptionsecuritycsrfprotection-gettokenkey"><code>getTokenKey()</code></h4>

```php
public function getTokenKey(): string|null;
```

## Contracts\Encryption\Security\JWT\Signer\Signer

Interface

Canonical contract for JWT Signer classes

- **`Phalcon\Contracts\Encryption\Security\JWT\Signer\Signer`**
- [`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`](/6.0/api/phalcon_encryption/#encryptionsecurityjwtsignersignerinterface)

### Method Summary

<ApiItem href="#contractsencryptionsecurityjwtsignersigner-getalgheader" visibility="public" name="getAlgHeader" returnType="string" params={[]}>
Return the value that is used for the "alg" header
</ApiItem>
<ApiItem href="#contractsencryptionsecurityjwtsignersigner-getalgorithm" visibility="public" name="getAlgorithm" returnType="string" params={[]}>
Return the algorithm used
</ApiItem>
<ApiItem href="#contractsencryptionsecurityjwtsignersigner-sign" visibility="public" name="sign" returnType="string" params={[{"type":"string","name":"payload","default":null},{"type":"string","name":"passphrase","default":null}]}>
Sign a payload using the passphrase
</ApiItem>
<ApiItem href="#contractsencryptionsecurityjwtsignersigner-verify" visibility="public" name="verify" returnType="bool" params={[{"type":"string","name":"source","default":null},{"type":"string","name":"payload","default":null},{"type":"string","name":"passphrase","default":null}]}>
Verify a passed source with a payload and passphrase
</ApiItem>

### Methods

<h4 id="contractsencryptionsecurityjwtsignersigner-getalgheader"><code>getAlgHeader()</code></h4>

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

<h4 id="contractsencryptionsecurityjwtsignersigner-getalgorithm"><code>getAlgorithm()</code></h4>

```php
public function getAlgorithm(): string;
```

Return the algorithm used

<h4 id="contractsencryptionsecurityjwtsignersigner-sign"><code>sign()</code></h4>

```php
public function sign(
string $payload,
string $passphrase
): string;
```

Sign a payload using the passphrase

<h4 id="contractsencryptionsecurityjwtsignersigner-verify"><code>verify()</code></h4>

```php
public function verify(
string $source,
string $payload,
string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase

## Contracts\Encryption\Security\PasswordSecurity

Interface

- **`Phalcon\Contracts\Encryption\Security\PasswordSecurity`**

### Method Summary

<ApiItem href="#contractsencryptionsecuritypasswordsecurity-checkhash" visibility="public" name="checkHash" returnType="bool" params={[{"type":"string","name":"password","default":null},{"type":"string","name":"passwordHash","default":null},{"type":"int","name":"maxPassLength","default":"0"}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-getdefaulthash" visibility="public" name="getDefaultHash" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-gethashinformation" visibility="public" name="getHashInformation" returnType="array" params={[{"type":"string","name":"hash","default":null}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-getworkfactor" visibility="public" name="getWorkFactor" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-hash" visibility="public" name="hash" returnType="string" params={[{"type":"string","name":"password","default":null},{"type":"array","name":"options","default":"[]"}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-islegacyhash" visibility="public" name="isLegacyHash" returnType="bool" params={[{"type":"string","name":"passwordHash","default":null}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-setdefaulthash" visibility="public" name="setDefaultHash" returnType="Security" params={[{"type":"int","name":"defaultHash","default":null}]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecuritypasswordsecurity-setworkfactor" visibility="public" name="setWorkFactor" returnType="Security" params={[{"type":"int","name":"workFactor","default":null}]}>
</ApiItem>

### Methods

<h4 id="contractsencryptionsecuritypasswordsecurity-checkhash"><code>checkHash()</code></h4>

```php
public function checkHash(
string $password,
string $passwordHash,
int $maxPassLength = 0
): bool;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-getdefaulthash"><code>getDefaultHash()</code></h4>

```php
public function getDefaultHash(): int;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-gethashinformation"><code>getHashInformation()</code></h4>

```php
public function getHashInformation( string $hash ): array;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-getworkfactor"><code>getWorkFactor()</code></h4>

```php
public function getWorkFactor(): int;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-hash"><code>hash()</code></h4>

```php
public function hash(
string $password,
array $options = []
): string;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-islegacyhash"><code>isLegacyHash()</code></h4>

```php
public function isLegacyHash( string $passwordHash ): bool;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-setdefaulthash"><code>setDefaultHash()</code></h4>

```php
public function setDefaultHash( int $defaultHash ): Security;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-setworkfactor"><code>setWorkFactor()</code></h4>

```php
public function setWorkFactor( int $workFactor ): Security;
```

## Contracts\Encryption\Security\Security

Interface

- [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils)
- **`Phalcon\Contracts\Encryption\Security\Security`** - extends [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils), [`Phalcon\Contracts\Encryption\Security\CsrfProtection`](#contractsencryptionsecuritycsrfprotection), [`Phalcon\Contracts\Encryption\Security\PasswordSecurity`](#contractsencryptionsecuritypasswordsecurity)

## Contracts\Encryption\Security\Uuid\NodeProvider

Interface

- **`Phalcon\Contracts\Encryption\Security\Uuid\NodeProvider`**
- [`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`](/6.0/api/phalcon_encryption/#encryptionsecurityuuidnodeproviderinterface)

### Method Summary

<ApiItem href="#contractsencryptionsecurityuuidnodeprovider-getnode" visibility="public" name="getNode" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="contractsencryptionsecurityuuidnodeprovider-getnode"><code>getNode()</code></h4>

```php
public function getNode(): string;
```

## Contracts\Encryption\Security\Uuid\TimeBasedUuid

Interface

- **`Phalcon\Contracts\Encryption\Security\Uuid\TimeBasedUuid`**
- [`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`](/6.0/api/phalcon_encryption/#encryptionsecurityuuidtimebaseduuidinterface)

`DateTimeImmutable`

### Method Summary

<ApiItem href="#contractsencryptionsecurityuuidtimebaseduuid-getdatetime" visibility="public" name="getDateTime" returnType="DateTimeImmutable" params={[]}>
</ApiItem>
<ApiItem href="#contractsencryptionsecurityuuidtimebaseduuid-getnode" visibility="public" name="getNode" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="contractsencryptionsecurityuuidtimebaseduuid-getdatetime"><code>getDateTime()</code></h4>

```php
public function getDateTime(): DateTimeImmutable;
```

<h4 id="contractsencryptionsecurityuuidtimebaseduuid-getnode"><code>getNode()</code></h4>

```php
public function getNode(): string;
```

## Contracts\Encryption\Security\Uuid\Uuid

Interface

Canonical marker contract for UUID version adapters.

Also carries the standard RFC 4122 namespace UUIDs as constants.

- **`Phalcon\Contracts\Encryption\Security\Uuid\Uuid`**
- [`Phalcon\Encryption\Security\Uuid\UuidInterface`](/6.0/api/phalcon_encryption/#encryptionsecurityuuiduuidinterface)

### Constants

<ApiItem kind="constant" name="NAMESPACE_DNS" type="string" default="&quot;6ba7b810-9dad-11d1-80b4-00c04fd430c8&quot;">
</ApiItem>
<ApiItem kind="constant" name="NAMESPACE_OID" type="string" default="&quot;6ba7b812-9dad-11d1-80b4-00c04fd430c8&quot;">
</ApiItem>
<ApiItem kind="constant" name="NAMESPACE_URL" type="string" default="&quot;6ba7b811-9dad-11d1-80b4-00c04fd430c8&quot;">
</ApiItem>
<ApiItem kind="constant" name="NAMESPACE_X500" type="string" default="&quot;6ba7b814-9dad-11d1-80b4-00c04fd430c8&quot;">
</ApiItem>

## Contracts\Events\Enumerable

Interface

Optional capability contract for an events manager that can report every
attached listener in one call. Callers detect support with `instanceof`.

Deliberately separate from Manager rather than a member of it: adding a
member to a published interface breaks every implementor, so a second,
narrow interface states the capability without touching the first.

Tooling that reports on an events manager type-hints this instead of the
concrete Manager, so it depends on a published contract rather than on an
implementation detail that is free to change.

- **`Phalcon\Contracts\Events\Enumerable`**

### Method Summary

<ApiItem href="#contractseventsenumerable-getlistenermap" visibility="public" name="getListenerMap" returnType="array" params={[]}>
Returns every event type that currently has at least one listener,
</ApiItem>

### Methods

<h4 id="contractseventsenumerable-getlistenermap"><code>getListenerMap()</code></h4>

```php
public function getListenerMap(): array;
```

Returns every event type that currently has at least one listener,
mapped to that type's listeners. Types contributed by subscribers are
included, because addSubscriber() attaches through the regular listener
pipeline.

## Contracts\Events\Event

Interface

Canonical contract for Phalcon\Events\Event.

- **`Phalcon\Contracts\Events\Event`**
- [`Phalcon\Events\EventInterface`](/6.0/api/phalcon_events/#eventseventinterface)

### Method Summary

<ApiItem href="#contractseventsevent-getdata" visibility="public" name="getData" returnType="mixed" params={[]}>
Gets event data
</ApiItem>
<ApiItem href="#contractseventsevent-gettype" visibility="public" name="getType" returnType="mixed" params={[]}>
Gets event type
</ApiItem>
<ApiItem href="#contractseventsevent-iscancelable" visibility="public" name="isCancelable" returnType="bool" params={[]}>
Check whether the event is cancelable
</ApiItem>
<ApiItem href="#contractseventsevent-isstopped" visibility="public" name="isStopped" returnType="bool" params={[]}>
Check whether the event is currently stopped
</ApiItem>
<ApiItem href="#contractseventsevent-setdata" visibility="public" name="setData" returnType="Event" params={[{"type":"mixed","name":"data","default":"null"}]}>
Sets event data
</ApiItem>
<ApiItem href="#contractseventsevent-settype" visibility="public" name="setType" returnType="Event" params={[{"type":"string","name":"type","default":null}]}>
Sets event type
</ApiItem>
<ApiItem href="#contractseventsevent-stop" visibility="public" name="stop" returnType="Event" params={[]}>
Stops the event preventing propagation
</ApiItem>

### Methods

<h4 id="contractseventsevent-getdata"><code>getData()</code></h4>

```php
public function getData(): mixed;
```

Gets event data

<h4 id="contractseventsevent-gettype"><code>getType()</code></h4>

```php
public function getType(): mixed;
```

Gets event type

<h4 id="contractseventsevent-iscancelable"><code>isCancelable()</code></h4>

```php
public function isCancelable(): bool;
```

Check whether the event is cancelable

<h4 id="contractseventsevent-isstopped"><code>isStopped()</code></h4>

```php
public function isStopped(): bool;
```

Check whether the event is currently stopped

<h4 id="contractseventsevent-setdata"><code>setData()</code></h4>

```php
public function setData( mixed $data = null ): Event;
```

Sets event data

<h4 id="contractseventsevent-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): Event;
```

Sets event type

<h4 id="contractseventsevent-stop"><code>stop()</code></h4>

```php
public function stop(): Event;
```

Stops the event preventing propagation

## Contracts\Events\EventsAware

Interface

Canonical contract for Phalcon\Events\EventsAwareInterface. Implemented by
components that accept an events manager and dispatch through it.

Cross-references the legacy ManagerInterface (not the canonical Manager
contract) to preserve LSP for the many AbstractEventsAware subclasses that
already type-hint ManagerInterface. ManagerInterface extends Manager, so
this remains type-compatible with any code that needs the canonical surface.

- **`Phalcon\Contracts\Events\EventsAware`**
- [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`Phalcon\Events\ManagerInterface`

### Method Summary

<ApiItem href="#contractseventseventsaware-geteventsmanager" visibility="public" name="getEventsManager" returnType="ManagerInterface|null" params={[]}>
Returns the internal events manager
</ApiItem>
<ApiItem href="#contractseventseventsaware-seteventsmanager" visibility="public" name="setEventsManager" returnType="void" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the events manager
</ApiItem>

### Methods

<h4 id="contractseventseventsaware-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal events manager

<h4 id="contractseventseventsaware-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

## Contracts\Events\Manager

Interface

Canonical contract for Phalcon\Events\Manager.

- **`Phalcon\Contracts\Events\Manager`**
- [`Phalcon\Events\ManagerInterface`](/6.0/api/phalcon_events/#eventsmanagerinterface)

### Method Summary

<ApiItem href="#contractseventsmanager-addsubscriber" visibility="public" name="addSubscriber" returnType="void" params={[{"type":"Subscriber","name":"subscriber","default":null}]}>
Registers an event subscriber.
</ApiItem>
<ApiItem href="#contractseventsmanager-areprioritiesenabled" visibility="public" name="arePrioritiesEnabled" returnType="bool" params={[]}>
Returns whether priority ordering is currently enabled.
</ApiItem>
<ApiItem href="#contractseventsmanager-attach" visibility="public" name="attach" returnType="void" params={[{"type":"string","name":"eventType","default":null},{"type":"callable|object","name":"handler","default":null},{"type":"int","name":"priority","default":"self::DEFAULT_PRIORITY"}]}>
Attach a listener to the events manager.
</ApiItem>
<ApiItem href="#contractseventsmanager-clearsubscribers" visibility="public" name="clearSubscribers" returnType="void" params={[]}>
Removes every registered subscriber and detaches each listener they
</ApiItem>
<ApiItem href="#contractseventsmanager-collectresponses" visibility="public" name="collectResponses" returnType="void" params={[{"type":"bool","name":"collect","default":null}]}>
Toggle response collection on/off.
</ApiItem>
<ApiItem href="#contractseventsmanager-detach" visibility="public" name="detach" returnType="void" params={[{"type":"string","name":"eventType","default":null},{"type":"callable|object","name":"handler","default":null}]}>
Detach a listener from the events manager.
</ApiItem>
<ApiItem href="#contractseventsmanager-detachall" visibility="public" name="detachAll" returnType="void" params={[{"type":"string|null","name":"type","default":"null"}]}>
Removes all listeners -- globally or for a single event type.
</ApiItem>
<ApiItem href="#contractseventsmanager-enablepriorities" visibility="public" name="enablePriorities" returnType="void" params={[{"type":"bool","name":"enablePriorities","default":null}]}>
Toggle priority ordering on/off.
</ApiItem>
<ApiItem href="#contractseventsmanager-fire" visibility="public" name="fire" returnType="mixed" params={[{"type":"string","name":"eventType","default":null},{"type":"object","name":"source","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancelable","default":"true"}]}>
Fires an event, notifying the active listeners.
</ApiItem>
<ApiItem href="#contractseventsmanager-getlisteners" visibility="public" name="getListeners" returnType="array" params={[{"type":"string","name":"type","default":null}]}>
Returns all listeners attached to the given event type.
</ApiItem>
<ApiItem href="#contractseventsmanager-getresponses" visibility="public" name="getResponses" returnType="array" params={[]}>
Returns the responses recorded during the last fire (when collecting).
</ApiItem>
<ApiItem href="#contractseventsmanager-getsubscribers" visibility="public" name="getSubscribers" returnType="array" params={[]}>
Returns the list of registered subscriber instances.
</ApiItem>
<ApiItem href="#contractseventsmanager-haslisteners" visibility="public" name="hasListeners" returnType="bool" params={[{"type":"string","name":"type","default":null}]}>
Check whether the given event type has any listeners.
</ApiItem>
<ApiItem href="#contractseventsmanager-iscollecting" visibility="public" name="isCollecting" returnType="bool" params={[]}>
Check whether the manager is currently collecting responses.
</ApiItem>
<ApiItem href="#contractseventsmanager-isvalidhandler" visibility="public" name="isValidHandler" returnType="bool" params={[{"type":"mixed","name":"handler","default":null}]}>
Returns true when the given handler is an object or callable.
</ApiItem>
<ApiItem href="#contractseventsmanager-removesubscriber" visibility="public" name="removeSubscriber" returnType="void" params={[{"type":"Subscriber","name":"subscriber","default":null}]}>
Removes a previously registered subscriber.
</ApiItem>

### Constants

<ApiItem kind="constant" name="DEFAULT_PRIORITY" type="int" default="100">
</ApiItem>

### Methods

<h4 id="contractseventsmanager-addsubscriber"><code>addSubscriber()</code></h4>

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber.

<h4 id="contractseventsmanager-areprioritiesenabled"><code>arePrioritiesEnabled()</code></h4>

```php
public function arePrioritiesEnabled(): bool;
```

Returns whether priority ordering is currently enabled.

<h4 id="contractseventsmanager-attach"><code>attach()</code></h4>

```php
public function attach(
string $eventType,
callable|object $handler,
int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager.

<h4 id="contractseventsmanager-clearsubscribers"><code>clearSubscribers()</code></h4>

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed.

<h4 id="contractseventsmanager-collectresponses"><code>collectResponses()</code></h4>

```php
public function collectResponses( bool $collect ): void;
```

Toggle response collection on/off.

<h4 id="contractseventsmanager-detach"><code>detach()</code></h4>

```php
public function detach(
string $eventType,
callable|object $handler
): void;
```

Detach a listener from the events manager.

<h4 id="contractseventsmanager-detachall"><code>detachAll()</code></h4>

```php
public function detachAll( string|null $type = null ): void;
```

Removes all listeners -- globally or for a single event type.

<h4 id="contractseventsmanager-enablepriorities"><code>enablePriorities()</code></h4>

```php
public function enablePriorities( bool $enablePriorities ): void;
```

Toggle priority ordering on/off.

<h4 id="contractseventsmanager-fire"><code>fire()</code></h4>

```php
public function fire(
string $eventType,
object $source,
mixed $data = null,
bool $cancelable = true
): mixed;
```

Fires an event, notifying the active listeners.

<h4 id="contractseventsmanager-getlisteners"><code>getListeners()</code></h4>

```php
public function getListeners( string $type ): array;
```

Returns all listeners attached to the given event type.

<h4 id="contractseventsmanager-getresponses"><code>getResponses()</code></h4>

```php
public function getResponses(): array;
```

Returns the responses recorded during the last fire (when collecting).

<h4 id="contractseventsmanager-getsubscribers"><code>getSubscribers()</code></h4>

```php
public function getSubscribers(): array;
```

Returns the list of registered subscriber instances.

<h4 id="contractseventsmanager-haslisteners"><code>hasListeners()</code></h4>

```php
public function hasListeners( string $type ): bool;
```

Check whether the given event type has any listeners.

<h4 id="contractseventsmanager-iscollecting"><code>isCollecting()</code></h4>

```php
public function isCollecting(): bool;
```

Check whether the manager is currently collecting responses.

<h4 id="contractseventsmanager-isvalidhandler"><code>isValidHandler()</code></h4>

```php
public function isValidHandler( mixed $handler ): bool;
```

Returns true when the given handler is an object or callable.

<h4 id="contractseventsmanager-removesubscriber"><code>removeSubscriber()</code></h4>

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber.

## Contracts\Events\Stoppable

Interface

Phalcon's local mirror of PSR-14 StoppableEventInterface.

- **`Phalcon\Contracts\Events\Stoppable`**

### Method Summary

<ApiItem href="#contractseventsstoppable-ispropagationstopped" visibility="public" name="isPropagationStopped" returnType="bool" params={[]}>
Returns true when the event must stop propagating to subsequent
</ApiItem>

### Methods

<h4 id="contractseventsstoppable-ispropagationstopped"><code>isPropagationStopped()</code></h4>

```php
public function isPropagationStopped(): bool;
```

Returns true when the event must stop propagating to subsequent
listeners.

## Contracts\Events\Subscriber

Interface

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

- **`Phalcon\Contracts\Events\Subscriber`**

### Method Summary

<ApiItem href="#contractseventssubscriber-getsubscribedevents" visibility="public" name="getSubscribedEvents" returnType="array" params={[]}>
Returns a map of event name => listener config.
</ApiItem>

### Methods

<h4 id="contractseventssubscriber-getsubscribedevents"><code>getSubscribedEvents()</code></h4>

```php
public static function getSubscribedEvents(): array;
```

Returns a map of event name => listener config.

## Contracts\Filter\FilterTypes

Interface

Central registry of the array shapes used across the Filter namespace.

- **`Phalcon\Contracts\Filter\FilterTypes`**

`Phalcon\Filter\Validation\ValidatorInterface`

## Contracts\Filter\Sanitizer

Interface

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

@method mixed __invoke(mixed $value, mixed ...$params)

- **`Phalcon\Contracts\Filter\Sanitizer`**

## Contracts\Flash\Flash

Interface

Canonical contract for Phalcon\Flash messengers.

Note: `output()` and `clear()` are part of the concrete `Direct` / `Session`
API and are not declared on this contract; they are scheduled to be added in
the next major version.

- **`Phalcon\Contracts\Flash\Flash`**
- [`Phalcon\Flash\FlashInterface`](/6.0/api/phalcon_flash/#flashflashinterface)

### Method Summary

<ApiItem href="#contractsflashflash-error" visibility="public" name="error" returnType="string|null" params={[{"type":"string","name":"message","default":null}]}>
Shows a HTML error message
</ApiItem>
<ApiItem href="#contractsflashflash-message" visibility="public" name="message" returnType="string|null" params={[{"type":"string","name":"type","default":null},{"type":"string","name":"message","default":null}]}>
Outputs a message
</ApiItem>
<ApiItem href="#contractsflashflash-notice" visibility="public" name="notice" returnType="string|null" params={[{"type":"string","name":"message","default":null}]}>
Shows a HTML notice/information message
</ApiItem>
<ApiItem href="#contractsflashflash-success" visibility="public" name="success" returnType="string|null" params={[{"type":"string","name":"message","default":null}]}>
Shows a HTML success message
</ApiItem>
<ApiItem href="#contractsflashflash-warning" visibility="public" name="warning" returnType="string|null" params={[{"type":"string","name":"message","default":null}]}>
Shows a HTML warning message
</ApiItem>

### Methods

<h4 id="contractsflashflash-error"><code>error()</code></h4>

```php
public function error( string $message ): string|null;
```

Shows a HTML error message

<h4 id="contractsflashflash-message"><code>message()</code></h4>

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

<h4 id="contractsflashflash-notice"><code>notice()</code></h4>

```php
public function notice( string $message ): string|null;
```

Shows a HTML notice/information message

<h4 id="contractsflashflash-success"><code>success()</code></h4>

```php
public function success( string $message ): string|null;
```

Shows a HTML success message

<h4 id="contractsflashflash-warning"><code>warning()</code></h4>

```php
public function warning( string $message ): string|null;
```

Shows a HTML warning message

## Contracts\Flash\FlashTypes

Interface

Central registry of the array shapes used across the Flash namespace.

- **`Phalcon\Contracts\Flash\FlashTypes`**

## Contracts\Forms\FormsTypes

Interface

Central registry of the array shapes used across the Forms namespace.

- **`Phalcon\Contracts\Forms\FormsTypes`**

`Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Forms\Element\ElementInterface` · `Phalcon\Forms\Form`

## Contracts\Forms\Schema

Interface

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

- **`Phalcon\Contracts\Forms\Schema`**

### Method Summary

<ApiItem href="#contractsformsschema-load" visibility="public" name="load" returnType="array" params={[]}>
Returns an ordered list of normalized element definitions.
</ApiItem>

### Methods

<h4 id="contractsformsschema-load"><code>load()</code></h4>

```php
public function load(): array;
```

Returns an ordered list of normalized element definitions.

## Contracts\Front\FrontController

Interface

[_FrontController_][] affords an entry point into the outermost presentation
layer in any execution context (HTTP, CLI, etc.).

- **`Phalcon\Contracts\Front\FrontController`**

### Method Summary

<ApiItem href="#contractsfrontfrontcontroller-run" visibility="public" name="run" returnType="int" params={[]}>
Runs the front controller.
</ApiItem>

### Methods

<h4 id="contractsfrontfrontcontroller-run"><code>run()</code></h4>

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

Interface

[_FrontTypeAliases_][] provides custom PHPStan types to aid static analysis.

- ```
  front_exit_status_int int<0,254>
```
    - An `int` exit status code: `0` for success, `1` to `254` for
      non-success. The value `255` is reserved by PHP itself.

- **`Phalcon\Contracts\Front\FrontTypeAliases`**

## Contracts\Html\Helper\Input\SelectData

Interface

Interface for SELECT option data providers.

Return format: [value => label] for flat options;
[groupLabel => [value => label, ...]] for optgroups.

- **`Phalcon\Contracts\Html\Helper\Input\SelectData`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#contractshtmlhelperinputselectdata-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Returns the per-option attribute map.
</ApiItem>
<ApiItem href="#contractshtmlhelperinputselectdata-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
</ApiItem>

### Methods

<h4 id="contractshtmlhelperinputselectdata-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns the per-option attribute map.

Format: [optionValue => [attrName => stringValue, ...]].
Implementations must return resolved string values; no escaping,
ordering, or rendering is performed here.

<h4 id="contractshtmlhelperinputselectdata-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

## Contracts\Html\HtmlTypes

Interface

Central registry of the array shapes used across the Html namespace.

Attribute values stay scalar here. The array member that PSR-13 allows for
link attributes lives in the Link registry instead, because the helper
pipeline concatenates and escapes every value as a string.

- **`Phalcon\Contracts\Html\HtmlTypes`**

`Closure`

## Contracts\Html\Link\LinkTypes

Interface

Central registry of the array shapes used across the Html\Link namespace.

PSR-13 states that a link attribute value is "a PHP primitive or an array of
PHP strings", so `link_attributes` keeps the array member that the plain
Html attribute shape drops.

- **`Phalcon\Contracts\Html\Link\LinkTypes`**

`Phalcon\Html\Link\Interfaces\LinkInterface`

## Contracts\Http\AttributeRequest

Interface

Extends the request contract with the native attribute bag.

`getAttributes()` already exists on the concrete `Phalcon\Http\Request`; this
interface exposes it as a contract without touching `RequestInterface`
(adding a method there would break userland implementers). It lets consumers
type against the attribute-bearing request without depending on the concrete.

- [`Phalcon\Http\RequestInterface`](/6.0/api/phalcon_http/#httprequestinterface)
- **`Phalcon\Contracts\Http\AttributeRequest`**

`Phalcon\Http\RequestInterface` · `Phalcon\Http\Request\Bag\AttributeBag`

### Method Summary

<ApiItem href="#contractshttpattributerequest-getattributes" visibility="public" name="getAttributes" returnType="AttributeBag" params={[]}>
Returns the request attribute bag.
</ApiItem>

### Methods

<h4 id="contractshttpattributerequest-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): AttributeBag;
```

Returns the request attribute bag.

## Contracts\Http\HttpTypes

Interface

Central registry of the array shapes used across the Http namespace.

- **`Phalcon\Contracts\Http\HttpTypes`**

`Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Request\FileInterface`

## Contracts\Image\ImageTypes

Interface

Central registry of the array shapes used across the Image namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `image_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `config` from clashing with an alias imported
from another namespace into the same file.

- **`Phalcon\Contracts\Image\ImageTypes`**

`Phalcon\Image\Adapter\AdapterInterface`

## Contracts\Logger\Adapter\Adapter

Interface

Canonical contract for Phalcon\Logger adapters.

- **`Phalcon\Contracts\Logger\Adapter\Adapter`**
- [`Phalcon\Logger\Adapter\AdapterInterface`](/6.0/api/phalcon_logger/#loggeradapteradapterinterface)

`Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Item`

### Method Summary

<ApiItem href="#contractsloggeradapteradapter-add" visibility="public" name="add" returnType="Adapter" params={[{"type":"Item","name":"item","default":null}]}>
Adds a message in the queue
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-begin" visibility="public" name="begin" returnType="Adapter" params={[]}>
Starts a transaction
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-close" visibility="public" name="close" returnType="bool" params={[]}>
Closes the logger
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-commit" visibility="public" name="commit" returnType="Adapter" params={[]}>
Commits the internal transaction
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-getformatter" visibility="public" name="getFormatter" returnType="FormatterInterface" params={[]}>
Returns the internal formatter
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-intransaction" visibility="public" name="inTransaction" returnType="bool" params={[]}>
Returns the whether the logger is currently in an active transaction or
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-process" visibility="public" name="process" returnType="void" params={[{"type":"Item","name":"item","default":null}]}>
Processes the message in the adapter
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-rollback" visibility="public" name="rollback" returnType="Adapter" params={[]}>
Rollbacks the internal transaction
</ApiItem>
<ApiItem href="#contractsloggeradapteradapter-setformatter" visibility="public" name="setFormatter" returnType="Adapter" params={[{"type":"FormatterInterface","name":"formatter","default":null}]}>
Sets the message formatter
</ApiItem>

### Methods

<h4 id="contractsloggeradapteradapter-add"><code>add()</code></h4>

```php
public function add( Item $item ): Adapter;
```

Adds a message in the queue

<h4 id="contractsloggeradapteradapter-begin"><code>begin()</code></h4>

```php
public function begin(): Adapter;
```

Starts a transaction

<h4 id="contractsloggeradapteradapter-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Closes the logger

<h4 id="contractsloggeradapteradapter-commit"><code>commit()</code></h4>

```php
public function commit(): Adapter;
```

Commits the internal transaction

<h4 id="contractsloggeradapteradapter-getformatter"><code>getFormatter()</code></h4>

```php
public function getFormatter(): FormatterInterface;
```

Returns the internal formatter

<h4 id="contractsloggeradapteradapter-intransaction"><code>inTransaction()</code></h4>

```php
public function inTransaction(): bool;
```

Returns the whether the logger is currently in an active transaction or
not

<h4 id="contractsloggeradapteradapter-process"><code>process()</code></h4>

```php
public function process( Item $item ): void;
```

Processes the message in the adapter

<h4 id="contractsloggeradapteradapter-rollback"><code>rollback()</code></h4>

```php
public function rollback(): Adapter;
```

Rollbacks the internal transaction

<h4 id="contractsloggeradapteradapter-setformatter"><code>setFormatter()</code></h4>

```php
public function setFormatter( FormatterInterface $formatter ): Adapter;
```

Sets the message formatter

## Contracts\Logger\Formatter\Formatter

Interface

Canonical contract for Phalcon\Logger formatters.

- **`Phalcon\Contracts\Logger\Formatter\Formatter`**
- [`Phalcon\Logger\Formatter\FormatterInterface`](/6.0/api/phalcon_logger/#loggerformatterformatterinterface)

`Phalcon\Logger\Item`

### Method Summary

<ApiItem href="#contractsloggerformatterformatter-format" visibility="public" name="format" returnType="string" params={[{"type":"Item","name":"item","default":null}]}>
Applies a format to an item
</ApiItem>

### Methods

<h4 id="contractsloggerformatterformatter-format"><code>format()</code></h4>

```php
public function format( Item $item ): string;
```

Applies a format to an item

## Contracts\Logger\Logger

Interface

Canonical contract for Phalcon\Logger\Logger.

- **`Phalcon\Contracts\Logger\Logger`**
- [`Phalcon\Logger\LoggerInterface`](/6.0/api/phalcon_logger/#loggerloggerinterface)

`Phalcon\Contracts\Logger\Adapter\Adapter`

### Method Summary

<ApiItem href="#contractsloggerlogger-alert" visibility="public" name="alert" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Action must be taken immediately.
</ApiItem>
<ApiItem href="#contractsloggerlogger-critical" visibility="public" name="critical" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Critical conditions.
</ApiItem>
<ApiItem href="#contractsloggerlogger-debug" visibility="public" name="debug" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Detailed debug information.
</ApiItem>
<ApiItem href="#contractsloggerlogger-emergency" visibility="public" name="emergency" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
System is unusable.
</ApiItem>
<ApiItem href="#contractsloggerlogger-error" visibility="public" name="error" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Runtime errors that do not require immediate action but should typically
</ApiItem>
<ApiItem href="#contractsloggerlogger-getadapter" visibility="public" name="getAdapter" returnType="Adapter" params={[{"type":"string","name":"name","default":null}]}>
Returns an adapter from the stack
</ApiItem>
<ApiItem href="#contractsloggerlogger-getadapters" visibility="public" name="getAdapters" returnType="array" params={[]}>
Returns the adapter stack array
</ApiItem>
<ApiItem href="#contractsloggerlogger-getloglevel" visibility="public" name="getLogLevel" returnType="int" params={[]}>
Returns the log level
</ApiItem>
<ApiItem href="#contractsloggerlogger-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the name of the logger
</ApiItem>
<ApiItem href="#contractsloggerlogger-info" visibility="public" name="info" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Interesting events.
</ApiItem>
<ApiItem href="#contractsloggerlogger-log" visibility="public" name="log" returnType="void" params={[{"type":"mixed","name":"level","default":null},{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Logs with an arbitrary level.
</ApiItem>
<ApiItem href="#contractsloggerlogger-notice" visibility="public" name="notice" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Normal but significant events.
</ApiItem>
<ApiItem href="#contractsloggerlogger-trace" visibility="public" name="trace" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Extra-verbose diagnostic output.
</ApiItem>
<ApiItem href="#contractsloggerlogger-warning" visibility="public" name="warning" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Exceptional occurrences that are not errors.
</ApiItem>

### Methods

<h4 id="contractsloggerlogger-alert"><code>alert()</code></h4>

```php
public function alert(
string $message,
array $context = []
): void;
```

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.

<h4 id="contractsloggerlogger-critical"><code>critical()</code></h4>

```php
public function critical(
string $message,
array $context = []
): void;
```

Critical conditions.

Example: Application component unavailable, unexpected exception.

<h4 id="contractsloggerlogger-debug"><code>debug()</code></h4>

```php
public function debug(
string $message,
array $context = []
): void;
```

Detailed debug information.

<h4 id="contractsloggerlogger-emergency"><code>emergency()</code></h4>

```php
public function emergency(
string $message,
array $context = []
): void;
```

System is unusable.

<h4 id="contractsloggerlogger-error"><code>error()</code></h4>

```php
public function error(
string $message,
array $context = []
): void;
```

Runtime errors that do not require immediate action but should typically
be logged and monitored.

<h4 id="contractsloggerlogger-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter( string $name ): Adapter;
```

Returns an adapter from the stack

<h4 id="contractsloggerlogger-getadapters"><code>getAdapters()</code></h4>

```php
public function getAdapters(): array;
```

Returns the adapter stack array

<h4 id="contractsloggerlogger-getloglevel"><code>getLogLevel()</code></h4>

```php
public function getLogLevel(): int;
```

Returns the log level

<h4 id="contractsloggerlogger-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the name of the logger

<h4 id="contractsloggerlogger-info"><code>info()</code></h4>

```php
public function info(
string $message,
array $context = []
): void;
```

Interesting events.

Example: User logs in, SQL logs.

<h4 id="contractsloggerlogger-log"><code>log()</code></h4>

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

<h4 id="contractsloggerlogger-notice"><code>notice()</code></h4>

```php
public function notice(
string $message,
array $context = []
): void;
```

Normal but significant events.

<h4 id="contractsloggerlogger-trace"><code>trace()</code></h4>

```php
public function trace(
string $message,
array $context = []
): void;
```

Extra-verbose diagnostic output.

<h4 id="contractsloggerlogger-warning"><code>warning()</code></h4>

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

Interface

Central registry of the array shapes used across the Logger namespace.

- **`Phalcon\Contracts\Logger\LoggerTypes`**

`DateTimeZone` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Item`

## Contracts\Messages\Messages

Interface

Canonical contract for Phalcon\Messages\Messages.

The collection stores Phalcon\Messages\MessageInterface objects and is
iterated by integer position. An entry added under a string key through the
ArrayAccess interface stays reachable by that offset but is not visited
during iteration (`foreach`), which walks the integer sequence only.

@extends ArrayAccess&lt;array-key, mixed>
@extends Iterator&lt;int, MessageInterface>

- `\ArrayAccess`
- **`Phalcon\Contracts\Messages\Messages`** - extends `\ArrayAccess`, `\Countable`, `\Iterator`

`ArrayAccess` · `Countable` · `Iterator` · `Phalcon\Messages\MessageInterface`

### Method Summary

<ApiItem href="#contractsmessagesmessages-appendmessage" visibility="public" name="appendMessage" returnType="void" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a message to the collection
</ApiItem>
<ApiItem href="#contractsmessagesmessages-appendmessages" visibility="public" name="appendMessages" returnType="" params={[{"type":"mixed","name":"messages","default":null}]}>
Appends an array of messages to the collection
</ApiItem>
<ApiItem href="#contractsmessagesmessages-filter" visibility="public" name="filter" returnType="array" params={[{"type":"string","name":"fieldName","default":null}]}>
Filters the message collection by field name
</ApiItem>

### Methods

<h4 id="contractsmessagesmessages-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): void;
```

Appends a message to the collection

<h4 id="contractsmessagesmessages-appendmessages"><code>appendMessages()</code></h4>

```php
public function appendMessages( mixed $messages );
```

Appends an array of messages to the collection

<h4 id="contractsmessagesmessages-filter"><code>filter()</code></h4>

```php
public function filter( string $fieldName ): array;
```

Filters the message collection by field name

## Contracts\Messages\MessagesTypes

Interface

Central registry of the array shapes used across the Messages namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `messages_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `metadata` from clashing with an alias imported
from another namespace into the same file.

- **`Phalcon\Contracts\Messages\MessagesTypes`**

`Phalcon\Messages\MessageInterface`

## Contracts\Mvc\Dispatcher

Interface

Canonical contract for Phalcon\Mvc\Dispatcher.

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](#contractsdispatcherdispatcher)
- **`Phalcon\Contracts\Mvc\Dispatcher`**
- [`Phalcon\Mvc\DispatcherInterface`](/6.0/api/phalcon_mvc/#mvcdispatcherinterface)

`Phalcon\Contracts\Dispatcher\Dispatcher` · `Phalcon\Mvc\ControllerInterface`

### Method Summary

<ApiItem href="#contractsmvcdispatcher-getactivecontroller" visibility="public" name="getActiveController" returnType="ControllerInterface|null" params={[]}>
Returns the active controller in the dispatcher
</ApiItem>
<ApiItem href="#contractsmvcdispatcher-getcontrollername" visibility="public" name="getControllerName" returnType="string" params={[]}>
Gets last dispatched controller name
</ApiItem>
<ApiItem href="#contractsmvcdispatcher-getlastcontroller" visibility="public" name="getLastController" returnType="ControllerInterface|null" params={[]}>
Returns the latest dispatched controller
</ApiItem>
<ApiItem href="#contractsmvcdispatcher-setcontrollername" visibility="public" name="setControllerName" returnType="DispatcherContract" params={[{"type":"string","name":"controllerName","default":null}]}>
Sets the controller name to be dispatched
</ApiItem>
<ApiItem href="#contractsmvcdispatcher-setcontrollersuffix" visibility="public" name="setControllerSuffix" returnType="DispatcherContract" params={[{"type":"string","name":"controllerSuffix","default":null}]}>
Sets the default controller suffix
</ApiItem>
<ApiItem href="#contractsmvcdispatcher-setdefaultcontroller" visibility="public" name="setDefaultController" returnType="DispatcherContract" params={[{"type":"string","name":"controllerName","default":null}]}>
Sets the default controller name
</ApiItem>

### Methods

<h4 id="contractsmvcdispatcher-getactivecontroller"><code>getActiveController()</code></h4>

```php
public function getActiveController(): ControllerInterface|null;
```

Returns the active controller in the dispatcher

<h4 id="contractsmvcdispatcher-getcontrollername"><code>getControllerName()</code></h4>

```php
public function getControllerName(): string;
```

Gets last dispatched controller name

<h4 id="contractsmvcdispatcher-getlastcontroller"><code>getLastController()</code></h4>

```php
public function getLastController(): ControllerInterface|null;
```

Returns the latest dispatched controller

<h4 id="contractsmvcdispatcher-setcontrollername"><code>setControllerName()</code></h4>

```php
public function setControllerName( string $controllerName ): DispatcherContract;
```

Sets the controller name to be dispatched

<h4 id="contractsmvcdispatcher-setcontrollersuffix"><code>setControllerSuffix()</code></h4>

```php
public function setControllerSuffix( string $controllerSuffix ): DispatcherContract;
```

Sets the default controller suffix

<h4 id="contractsmvcdispatcher-setdefaultcontroller"><code>setDefaultController()</code></h4>

```php
public function setDefaultController( string $controllerName ): DispatcherContract;
```

Sets the default controller name

## Contracts\Mvc\Model\Relation\CacheKeyProvider

Interface

Interface for models that provide a custom unique key for the reusable
records cache in the Model Manager. Implement this interface when the
default object-identity based key (unique_key) does not produce stable
cache hits across multiple object instances that represent the same
database record.

- **`Phalcon\Contracts\Mvc\Model\Relation\CacheKeyProvider`**

### Method Summary

<ApiItem href="#contractsmvcmodelrelationcachekeyprovider-getuniquekey" visibility="public" name="getUniqueKey" returnType="string" params={[]}>
Returns a string that uniquely identifies this model instance for
</ApiItem>

### Methods

<h4 id="contractsmvcmodelrelationcachekeyprovider-getuniquekey"><code>getUniqueKey()</code></h4>

```php
public function getUniqueKey(): string;
```

Returns a string that uniquely identifies this model instance for
use as the key in the reusable records cache.

## Contracts\Mvc\MvcTypes

Interface

Central registry of the array shapes used across the Mvc namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `mvc_` because PHPStan resolves imported
type names per file and has no namespacing for them: the prefix is what
keeps generic names such as `model_find_parameters` from clashing with an
alias imported from another namespace into the same file.

- **`Phalcon\Contracts\Mvc\MvcTypes`**

## Contracts\Paginator\Adapter

Interface

Interface for Phalcon\Paginator adapters

- **`Phalcon\Contracts\Paginator\Adapter`**
- [`Phalcon\Paginator\Adapter\AdapterInterface`](/6.0/api/phalcon_paginator/#paginatoradapteradapterinterface)

### Method Summary

<ApiItem href="#contractspaginatoradapter-getlimit" visibility="public" name="getLimit" returnType="int" params={[]}>
Get current rows limit
</ApiItem>
<ApiItem href="#contractspaginatoradapter-paginate" visibility="public" name="paginate" returnType="Repository" params={[]}>
Returns a slice of the resultset to show in the pagination
</ApiItem>
<ApiItem href="#contractspaginatoradapter-setcurrentpage" visibility="public" name="setCurrentPage" returnType="Adapter" params={[{"type":"int","name":"page","default":null}]}>
Set the current page number
</ApiItem>
<ApiItem href="#contractspaginatoradapter-setlimit" visibility="public" name="setLimit" returnType="Adapter" params={[{"type":"int","name":"limit","default":null}]}>
Set current rows limit
</ApiItem>

### Methods

<h4 id="contractspaginatoradapter-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): int;
```

Get current rows limit

<h4 id="contractspaginatoradapter-paginate"><code>paginate()</code></h4>

```php
public function paginate(): Repository;
```

Returns a slice of the resultset to show in the pagination

<h4 id="contractspaginatoradapter-setcurrentpage"><code>setCurrentPage()</code></h4>

```php
public function setCurrentPage( int $page ): Adapter;
```

Set the current page number

<h4 id="contractspaginatoradapter-setlimit"><code>setLimit()</code></h4>

```php
public function setLimit( int $limit ): Adapter;
```

Set current rows limit

## Contracts\Paginator\PaginatorTypes

Interface

Central registry of the array shapes used across the Paginator namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `paginator_` because PHPStan resolves
imported type names per file and has no namespacing for them: the prefix
is what keeps generic names such as `config` from clashing with an alias
imported from another namespace into the same file.

- **`Phalcon\Contracts\Paginator\PaginatorTypes`**

`Phalcon\Mvc\Model\Query\Builder`

## Contracts\Paginator\Repository

Interface

Interface for the repository of current state
Phalcon\Paginator\AdapterInterface::paginate()

Two adapter dialects fill this repository:

- Offset adapters (Model, NativeArray, QueryBuilder) populate every
  property as a sequential page number / item count.
- Cursor adapters (QueryBuilderCursor) reuse the same properties with a
  different meaning: `getCurrent()`/`getNext()` carry keyset cursor values
  rather than page numbers, and `getTotalItems()`, `getLast()` and
  `getPrevious()` are not computed (they return 0).

- **`Phalcon\Contracts\Paginator\Repository`**
- [`Phalcon\Paginator\RepositoryInterface`](/6.0/api/phalcon_paginator/#paginatorrepositoryinterface)

### Method Summary

<ApiItem href="#contractspaginatorrepository-getaliases" visibility="public" name="getAliases" returnType="array" params={[]}>
Gets the aliases for properties repository
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getcurrent" visibility="public" name="getCurrent" returnType="int" params={[]}>
Gets number of the current page
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getfirst" visibility="public" name="getFirst" returnType="int" params={[]}>
Gets number of the first page
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getitems" visibility="public" name="getItems" returnType="mixed" params={[]}>
Gets the items on the current page
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getlast" visibility="public" name="getLast" returnType="int" params={[]}>
Gets number of the last page
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getlimit" visibility="public" name="getLimit" returnType="int" params={[]}>
Gets current rows limit
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getnext" visibility="public" name="getNext" returnType="int" params={[]}>
Gets number of the next page
</ApiItem>
<ApiItem href="#contractspaginatorrepository-getprevious" visibility="public" name="getPrevious" returnType="int" params={[]}>
Gets number of the previous page
</ApiItem>
<ApiItem href="#contractspaginatorrepository-gettotalitems" visibility="public" name="getTotalItems" returnType="int" params={[]}>
Gets the total number of items
</ApiItem>
<ApiItem href="#contractspaginatorrepository-setaliases" visibility="public" name="setAliases" returnType="Repository" params={[{"type":"array","name":"aliases","default":null}]}>
Sets the aliases for properties repository
</ApiItem>
<ApiItem href="#contractspaginatorrepository-setproperties" visibility="public" name="setProperties" returnType="Repository" params={[{"type":"array","name":"properties","default":null}]}>
Sets values for properties of the repository
</ApiItem>

### Constants

<ApiItem kind="constant" name="PROPERTY_CURRENT_PAGE" type="string" default="&quot;current&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_FIRST_PAGE" type="string" default="&quot;first&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_ITEMS" type="string" default="&quot;items&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_LAST_PAGE" type="string" default="&quot;last&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_LIMIT" type="string" default="&quot;limit&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_NEXT_PAGE" type="string" default="&quot;next&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_PREVIOUS_PAGE" type="string" default="&quot;previous&quot;">
</ApiItem>
<ApiItem kind="constant" name="PROPERTY_TOTAL_ITEMS" type="string" default="&quot;total_items&quot;">
</ApiItem>

### Methods

<h4 id="contractspaginatorrepository-getaliases"><code>getAliases()</code></h4>

```php
public function getAliases(): array;
```

Gets the aliases for properties repository

<h4 id="contractspaginatorrepository-getcurrent"><code>getCurrent()</code></h4>

```php
public function getCurrent(): int;
```

Gets number of the current page

Cursor adapters store the cursor value used for the current page here
(0 on the first page), not a sequential page number.

<h4 id="contractspaginatorrepository-getfirst"><code>getFirst()</code></h4>

```php
public function getFirst(): int;
```

Gets number of the first page

<h4 id="contractspaginatorrepository-getitems"><code>getItems()</code></h4>

```php
public function getItems(): mixed;
```

Gets the items on the current page

<h4 id="contractspaginatorrepository-getlast"><code>getLast()</code></h4>

```php
public function getLast(): int;
```

Gets number of the last page

Cursor adapters do not compute this and return 0.

<h4 id="contractspaginatorrepository-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): int;
```

Gets current rows limit

<h4 id="contractspaginatorrepository-getnext"><code>getNext()</code></h4>

```php
public function getNext(): int;
```

Gets number of the next page

Cursor adapters store the next cursor value here rather than a page
number; 0 means there is no next page.

<h4 id="contractspaginatorrepository-getprevious"><code>getPrevious()</code></h4>

```php
public function getPrevious(): int;
```

Gets number of the previous page

Cursor adapters do not compute this and return 0.

<h4 id="contractspaginatorrepository-gettotalitems"><code>getTotalItems()</code></h4>

```php
public function getTotalItems(): int;
```

Gets the total number of items

Cursor adapters do not compute this and return 0.

<h4 id="contractspaginatorrepository-setaliases"><code>setAliases()</code></h4>

```php
public function setAliases( array $aliases ): Repository;
```

Sets the aliases for properties repository

<h4 id="contractspaginatorrepository-setproperties"><code>setProperties()</code></h4>

```php
public function setProperties( array $properties ): Repository;
```

Sets values for properties of the repository

## Contracts\Queue\ConnectionFactory

Interface

Builds a Context: the entry point of every adapter.

- **`Phalcon\Contracts\Queue\ConnectionFactory`**

### Method Summary

<ApiItem href="#contractsqueueconnectionfactory-createcontext" visibility="public" name="createContext" returnType="Context" params={[]}>
Creates a context (a session/connection to the transport).
</ApiItem>

### Methods

<h4 id="contractsqueueconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): Context;
```

Creates a context (a session/connection to the transport).

## Contracts\Queue\Consumer

Interface

Receives messages from a single queue.

- **`Phalcon\Contracts\Queue\Consumer`**

### Method Summary

<ApiItem href="#contractsqueueconsumer-acknowledge" visibility="public" name="acknowledge" returnType="void" params={[{"type":"Message","name":"message","default":null}]}>
Acknowledges the message; the transport may then discard it.
</ApiItem>
<ApiItem href="#contractsqueueconsumer-getqueue" visibility="public" name="getQueue" returnType="Queue" params={[]}>
Returns the queue this consumer reads from.
</ApiItem>
<ApiItem href="#contractsqueueconsumer-receive" visibility="public" name="receive" returnType="Message|null" params={[{"type":"int","name":"timeout","default":"0"}]}>
Receives a message, blocking up to timeout milliseconds (0 = block
</ApiItem>
<ApiItem href="#contractsqueueconsumer-receivenowait" visibility="public" name="receiveNoWait" returnType="Message|null" params={[]}>
Receives a message without blocking, or null when none is ready.
</ApiItem>
<ApiItem href="#contractsqueueconsumer-reject" visibility="public" name="reject" returnType="void" params={[{"type":"Message","name":"message","default":null},{"type":"bool","name":"requeue","default":"false"}]}>
Rejects the message. When requeue is true the transport redelivers it.
</ApiItem>

### Methods

<h4 id="contractsqueueconsumer-acknowledge"><code>acknowledge()</code></h4>

```php
public function acknowledge( Message $message ): void;
```

Acknowledges the message; the transport may then discard it.

<h4 id="contractsqueueconsumer-getqueue"><code>getQueue()</code></h4>

```php
public function getQueue(): Queue;
```

Returns the queue this consumer reads from.

<h4 id="contractsqueueconsumer-receive"><code>receive()</code></h4>

```php
public function receive( int $timeout = 0 ): Message|null;
```

Receives a message, blocking up to timeout milliseconds (0 = block
until one is available). Returns null when none arrives in time.

<h4 id="contractsqueueconsumer-receivenowait"><code>receiveNoWait()</code></h4>

```php
public function receiveNoWait(): Message|null;
```

Receives a message without blocking, or null when none is ready.

<h4 id="contractsqueueconsumer-reject"><code>reject()</code></h4>

```php
public function reject(
Message $message,
bool $requeue = false
): void;
```

Rejects the message. When requeue is true the transport redelivers it.

## Contracts\Queue\Context

Interface

A session with the transport. Factory for messages, destinations,
producers and consumers.

- **`Phalcon\Contracts\Queue\Context`**

### Method Summary

<ApiItem href="#contractsqueuecontext-close" visibility="public" name="close" returnType="void" params={[]}>
Closes the context and releases its resources.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createconsumer" visibility="public" name="createConsumer" returnType="Consumer" params={[{"type":"Destination","name":"destination","default":null}]}>
Creates a consumer for the given destination.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createmessage" visibility="public" name="createMessage" returnType="Message" params={[{"type":"string","name":"body","default":"\"\""},{"type":"array","name":"properties","default":"[]"},{"type":"array","name":"headers","default":"[]"}]}>
Creates a message with an optional body, properties and headers.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createproducer" visibility="public" name="createProducer" returnType="Producer" params={[]}>
Creates a producer.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createqueue" visibility="public" name="createQueue" returnType="Queue" params={[{"type":"string","name":"queueName","default":null}]}>
Creates a queue destination by name.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createsubscriptionconsumer" visibility="public" name="createSubscriptionConsumer" returnType="SubscriptionConsumer" params={[]}>
Creates a subscription consumer for consuming from several queues.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createtemporaryqueue" visibility="public" name="createTemporaryQueue" returnType="Queue" params={[]}>
Creates a temporary queue tied to the lifetime of the context.
</ApiItem>
<ApiItem href="#contractsqueuecontext-createtopic" visibility="public" name="createTopic" returnType="Topic" params={[{"type":"string","name":"topicName","default":null}]}>
Creates a topic destination by name.
</ApiItem>
<ApiItem href="#contractsqueuecontext-purgequeue" visibility="public" name="purgeQueue" returnType="void" params={[{"type":"Queue","name":"queue","default":null}]}>
Removes all messages from the given queue.
</ApiItem>

### Methods

<h4 id="contractsqueuecontext-close"><code>close()</code></h4>

```php
public function close(): void;
```

Closes the context and releases its resources.

<h4 id="contractsqueuecontext-createconsumer"><code>createConsumer()</code></h4>

```php
public function createConsumer( Destination $destination ): Consumer;
```

Creates a consumer for the given destination.

<h4 id="contractsqueuecontext-createmessage"><code>createMessage()</code></h4>

```php
public function createMessage(
string $body = "",
array $properties = [],
array $headers = []
): Message;
```

Creates a message with an optional body, properties and headers.

<h4 id="contractsqueuecontext-createproducer"><code>createProducer()</code></h4>

```php
public function createProducer(): Producer;
```

Creates a producer.

<h4 id="contractsqueuecontext-createqueue"><code>createQueue()</code></h4>

```php
public function createQueue( string $queueName ): Queue;
```

Creates a queue destination by name.

<h4 id="contractsqueuecontext-createsubscriptionconsumer"><code>createSubscriptionConsumer()</code></h4>

```php
public function createSubscriptionConsumer(): SubscriptionConsumer;
```

Creates a subscription consumer for consuming from several queues.

<h4 id="contractsqueuecontext-createtemporaryqueue"><code>createTemporaryQueue()</code></h4>

```php
public function createTemporaryQueue(): Queue;
```

Creates a temporary queue tied to the lifetime of the context.

<h4 id="contractsqueuecontext-createtopic"><code>createTopic()</code></h4>

```php
public function createTopic( string $topicName ): Topic;
```

Creates a topic destination by name.

<h4 id="contractsqueuecontext-purgequeue"><code>purgeQueue()</code></h4>

```php
public function purgeQueue( Queue $queue ): void;
```

Removes all messages from the given queue.

## Contracts\Queue\Destination

Interface

Marker interface for a message destination: a Queue or a Topic.

- **`Phalcon\Contracts\Queue\Destination`**
- [`Phalcon\Contracts\Queue\Queue`](#contractsqueuequeue)
- [`Phalcon\Contracts\Queue\Topic`](#contractsqueuetopic)

## Contracts\Queue\Inspectable

Interface

Optional capability contract for a transport that can report statistics for
a queue (for example ready, delayed and buried job counts). Callers detect
support with `instanceof`.

The array returned by getStats() is ADAPTER-NATIVE: its keys and their
semantics are defined by the implementing adapter and are NOT guaranteed to
be uniform across adapters. It is an inspection surface, not a portable or
normalized schema. Each implementation documents the exact keys it returns.

- **`Phalcon\Contracts\Queue\Inspectable`**

### Method Summary

<ApiItem href="#contractsqueueinspectable-getstats" visibility="public" name="getStats" returnType="array" params={[{"type":"Queue","name":"queue","default":null}]}>
Returns statistics for the given queue.
</ApiItem>

### Methods

<h4 id="contractsqueueinspectable-getstats"><code>getStats()</code></h4>

```php
public function getStats( Queue $queue ): array;
```

Returns statistics for the given queue.

## Contracts\Queue\Message

Interface

A message exchanged through the transport. Carries a body, application
properties, transport headers and the standard messaging metadata.

- **`Phalcon\Contracts\Queue\Message`**

### Method Summary

<ApiItem href="#contractsqueuemessage-getbody" visibility="public" name="getBody" returnType="string" params={[]}>
Returns the message body.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getcorrelationid" visibility="public" name="getCorrelationId" returnType="string|null" params={[]}>
Returns the correlation id used to correlate request/reply messages.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getheader" visibility="public" name="getHeader" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns a single header value, or the default when it is not set.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getheaders" visibility="public" name="getHeaders" returnType="array" params={[]}>
Returns all transport headers.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getmessageid" visibility="public" name="getMessageId" returnType="string|null" params={[]}>
Returns the message id.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getproperties" visibility="public" name="getProperties" returnType="array" params={[]}>
Returns all application properties.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getproperty" visibility="public" name="getProperty" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns a single property value, or the default when it is not set.
</ApiItem>
<ApiItem href="#contractsqueuemessage-getreplyto" visibility="public" name="getReplyTo" returnType="string|null" params={[]}>
Returns the reply-to destination name.
</ApiItem>
<ApiItem href="#contractsqueuemessage-gettimestamp" visibility="public" name="getTimestamp" returnType="int|null" params={[]}>
Returns the timestamp (in milliseconds) or null when it is not set.
</ApiItem>
<ApiItem href="#contractsqueuemessage-isredelivered" visibility="public" name="isRedelivered" returnType="bool" params={[]}>
Whether the message has been redelivered.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setbody" visibility="public" name="setBody" returnType="void" params={[{"type":"string","name":"body","default":null}]}>
Sets the message body.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setcorrelationid" visibility="public" name="setCorrelationId" returnType="void" params={[{"type":"string","name":"correlationId","default":null}]}>
Sets the correlation id.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setheader" visibility="public" name="setHeader" returnType="void" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets a single transport header.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setheaders" visibility="public" name="setHeaders" returnType="void" params={[{"type":"array","name":"headers","default":null}]}>
Replaces all transport headers.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setmessageid" visibility="public" name="setMessageId" returnType="void" params={[{"type":"string","name":"messageId","default":null}]}>
Sets the message id.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setproperties" visibility="public" name="setProperties" returnType="void" params={[{"type":"array","name":"properties","default":null}]}>
Replaces all application properties.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setproperty" visibility="public" name="setProperty" returnType="void" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets a single application property.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setredelivered" visibility="public" name="setRedelivered" returnType="void" params={[{"type":"bool","name":"redelivered","default":null}]}>
Marks the message as redelivered.
</ApiItem>
<ApiItem href="#contractsqueuemessage-setreplyto" visibility="public" name="setReplyTo" returnType="void" params={[{"type":"string","name":"replyTo","default":null}]}>
Sets the reply-to destination name.
</ApiItem>
<ApiItem href="#contractsqueuemessage-settimestamp" visibility="public" name="setTimestamp" returnType="void" params={[{"type":"int","name":"timestamp","default":null}]}>
Sets the timestamp (in milliseconds).
</ApiItem>

### Methods

<h4 id="contractsqueuemessage-getbody"><code>getBody()</code></h4>

```php
public function getBody(): string;
```

Returns the message body.

<h4 id="contractsqueuemessage-getcorrelationid"><code>getCorrelationId()</code></h4>

```php
public function getCorrelationId(): string|null;
```

Returns the correlation id used to correlate request/reply messages.

<h4 id="contractsqueuemessage-getheader"><code>getHeader()</code></h4>

```php
public function getHeader(
string $name,
mixed $defaultValue = null
): mixed;
```

Returns a single header value, or the default when it is not set.

<h4 id="contractsqueuemessage-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): array;
```

Returns all transport headers.

<h4 id="contractsqueuemessage-getmessageid"><code>getMessageId()</code></h4>

```php
public function getMessageId(): string|null;
```

Returns the message id.

<h4 id="contractsqueuemessage-getproperties"><code>getProperties()</code></h4>

```php
public function getProperties(): array;
```

Returns all application properties.

<h4 id="contractsqueuemessage-getproperty"><code>getProperty()</code></h4>

```php
public function getProperty(
string $name,
mixed $defaultValue = null
): mixed;
```

Returns a single property value, or the default when it is not set.

<h4 id="contractsqueuemessage-getreplyto"><code>getReplyTo()</code></h4>

```php
public function getReplyTo(): string|null;
```

Returns the reply-to destination name.

<h4 id="contractsqueuemessage-gettimestamp"><code>getTimestamp()</code></h4>

```php
public function getTimestamp(): int|null;
```

Returns the timestamp (in milliseconds) or null when it is not set.

<h4 id="contractsqueuemessage-isredelivered"><code>isRedelivered()</code></h4>

```php
public function isRedelivered(): bool;
```

Whether the message has been redelivered.

<h4 id="contractsqueuemessage-setbody"><code>setBody()</code></h4>

```php
public function setBody( string $body ): void;
```

Sets the message body.

<h4 id="contractsqueuemessage-setcorrelationid"><code>setCorrelationId()</code></h4>

```php
public function setCorrelationId( string $correlationId ): void;
```

Sets the correlation id.

<h4 id="contractsqueuemessage-setheader"><code>setHeader()</code></h4>

```php
public function setHeader(
string $name,
mixed $value
): void;
```

Sets a single transport header.

<h4 id="contractsqueuemessage-setheaders"><code>setHeaders()</code></h4>

```php
public function setHeaders( array $headers ): void;
```

Replaces all transport headers.

<h4 id="contractsqueuemessage-setmessageid"><code>setMessageId()</code></h4>

```php
public function setMessageId( string $messageId ): void;
```

Sets the message id.

<h4 id="contractsqueuemessage-setproperties"><code>setProperties()</code></h4>

```php
public function setProperties( array $properties ): void;
```

Replaces all application properties.

<h4 id="contractsqueuemessage-setproperty"><code>setProperty()</code></h4>

```php
public function setProperty(
string $name,
mixed $value
): void;
```

Sets a single application property.

<h4 id="contractsqueuemessage-setredelivered"><code>setRedelivered()</code></h4>

```php
public function setRedelivered( bool $redelivered ): void;
```

Marks the message as redelivered.

<h4 id="contractsqueuemessage-setreplyto"><code>setReplyTo()</code></h4>

```php
public function setReplyTo( string $replyTo ): void;
```

Sets the reply-to destination name.

<h4 id="contractsqueuemessage-settimestamp"><code>setTimestamp()</code></h4>

```php
public function setTimestamp( int $timestamp ): void;
```

Sets the timestamp (in milliseconds).

## Contracts\Queue\Processor

Interface

Processes a single message. The return value tells the consumer what to
do next: acknowledge, reject, or requeue.

The literal constant values are kept compatible with the wider interop
ecosystem.

- **`Phalcon\Contracts\Queue\Processor`**

### Method Summary

<ApiItem href="#contractsqueueprocessor-process" visibility="public" name="process" returnType="object|string" params={[{"type":"Message","name":"message","default":null},{"type":"Context","name":"context","default":null}]}>
Processes the message and returns one of the ACK / REJECT / REQUEUE
</ApiItem>

### Constants

<ApiItem kind="constant" name="ACK" type="string" default="&quot;enqueue.ack&quot;">
</ApiItem>
<ApiItem kind="constant" name="REJECT" type="string" default="&quot;enqueue.reject&quot;">
</ApiItem>
<ApiItem kind="constant" name="REQUEUE" type="string" default="&quot;enqueue.requeue&quot;">
</ApiItem>

### Methods

<h4 id="contractsqueueprocessor-process"><code>process()</code></h4>

```php
public function process(
Message $message,
Context $context
): object|string;
```

Processes the message and returns one of the ACK / REJECT / REQUEUE
constants, or an object whose string form is one of those values.

## Contracts\Queue\Producer

Interface

Sends messages to a destination.

- **`Phalcon\Contracts\Queue\Producer`**

### Method Summary

<ApiItem href="#contractsqueueproducer-getdeliverydelay" visibility="public" name="getDeliveryDelay" returnType="int|null" params={[]}>
Returns the delivery delay (in milliseconds) or null when not set.
</ApiItem>
<ApiItem href="#contractsqueueproducer-getpriority" visibility="public" name="getPriority" returnType="int|null" params={[]}>
Returns the message priority or null when not set.
</ApiItem>
<ApiItem href="#contractsqueueproducer-gettimetolive" visibility="public" name="getTimeToLive" returnType="int|null" params={[]}>
Returns the time to live (in milliseconds) or null when not set.
</ApiItem>
<ApiItem href="#contractsqueueproducer-send" visibility="public" name="send" returnType="void" params={[{"type":"Destination","name":"destination","default":null},{"type":"Message","name":"message","default":null}]}>
Sends a message to the given destination.
</ApiItem>
<ApiItem href="#contractsqueueproducer-setdeliverydelay" visibility="public" name="setDeliveryDelay" returnType="Producer" params={[{"type":"mixed","name":"deliveryDelay","default":"null"}]}>
Sets the delivery delay (in milliseconds). Null clears it.
</ApiItem>
<ApiItem href="#contractsqueueproducer-setpriority" visibility="public" name="setPriority" returnType="Producer" params={[{"type":"mixed","name":"priority","default":"null"}]}>
Sets the message priority. Null clears it.
</ApiItem>
<ApiItem href="#contractsqueueproducer-settimetolive" visibility="public" name="setTimeToLive" returnType="Producer" params={[{"type":"mixed","name":"timeToLive","default":"null"}]}>
Sets the time to live (in milliseconds). Null clears it.
</ApiItem>

### Methods

<h4 id="contractsqueueproducer-getdeliverydelay"><code>getDeliveryDelay()</code></h4>

```php
public function getDeliveryDelay(): int|null;
```

Returns the delivery delay (in milliseconds) or null when not set.

<h4 id="contractsqueueproducer-getpriority"><code>getPriority()</code></h4>

```php
public function getPriority(): int|null;
```

Returns the message priority or null when not set.

<h4 id="contractsqueueproducer-gettimetolive"><code>getTimeToLive()</code></h4>

```php
public function getTimeToLive(): int|null;
```

Returns the time to live (in milliseconds) or null when not set.

<h4 id="contractsqueueproducer-send"><code>send()</code></h4>

```php
public function send(
Destination $destination,
Message $message
): void;
```

Sends a message to the given destination.

<h4 id="contractsqueueproducer-setdeliverydelay"><code>setDeliveryDelay()</code></h4>

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): Producer;
```

Sets the delivery delay (in milliseconds). Null clears it.

<h4 id="contractsqueueproducer-setpriority"><code>setPriority()</code></h4>

```php
public function setPriority( mixed $priority = null ): Producer;
```

Sets the message priority. Null clears it.

<h4 id="contractsqueueproducer-settimetolive"><code>setTimeToLive()</code></h4>

```php
public function setTimeToLive( mixed $timeToLive = null ): Producer;
```

Sets the time to live (in milliseconds). Null clears it.

## Contracts\Queue\Queue

Interface

A queue destination (point-to-point).

- [`Phalcon\Contracts\Queue\Destination`](#contractsqueuedestination)
- **`Phalcon\Contracts\Queue\Queue`**

### Method Summary

<ApiItem href="#contractsqueuequeue-getqueuename" visibility="public" name="getQueueName" returnType="string" params={[]}>
Returns the queue name.
</ApiItem>

### Methods

<h4 id="contractsqueuequeue-getqueuename"><code>getQueueName()</code></h4>

```php
public function getQueueName(): string;
```

Returns the queue name.

## Contracts\Queue\QueueTypes

Interface

Central registry of the array shapes used across the Queue namespace.

- **`Phalcon\Contracts\Queue\QueueTypes`**

## Contracts\Queue\SubscriptionConsumer

Interface

Consumes from several queues at once, dispatching each message to the
callback registered for its consumer.

- **`Phalcon\Contracts\Queue\SubscriptionConsumer`**

### Method Summary

<ApiItem href="#contractsqueuesubscriptionconsumer-consume" visibility="public" name="consume" returnType="void" params={[{"type":"int","name":"timeout","default":"0"}]}>
Starts consuming, blocking up to timeout milliseconds (0 = block
</ApiItem>
<ApiItem href="#contractsqueuesubscriptionconsumer-subscribe" visibility="public" name="subscribe" returnType="void" params={[{"type":"Consumer","name":"consumer","default":null},{"type":"callable","name":"callback","default":null}]}>
Subscribes a consumer; the callback receives each delivered message.
</ApiItem>
<ApiItem href="#contractsqueuesubscriptionconsumer-unsubscribe" visibility="public" name="unsubscribe" returnType="void" params={[{"type":"Consumer","name":"consumer","default":null}]}>
Removes a previously subscribed consumer.
</ApiItem>
<ApiItem href="#contractsqueuesubscriptionconsumer-unsubscribeall" visibility="public" name="unsubscribeAll" returnType="void" params={[]}>
Removes every subscribed consumer.
</ApiItem>

### Methods

<h4 id="contractsqueuesubscriptionconsumer-consume"><code>consume()</code></h4>

```php
public function consume( int $timeout = 0 ): void;
```

Starts consuming, blocking up to timeout milliseconds (0 = block
until a message is available).

<h4 id="contractsqueuesubscriptionconsumer-subscribe"><code>subscribe()</code></h4>

```php
public function subscribe(
Consumer $consumer,
callable $callback
): void;
```

Subscribes a consumer; the callback receives each delivered message.

<h4 id="contractsqueuesubscriptionconsumer-unsubscribe"><code>unsubscribe()</code></h4>

```php
public function unsubscribe( Consumer $consumer ): void;
```

Removes a previously subscribed consumer.

<h4 id="contractsqueuesubscriptionconsumer-unsubscribeall"><code>unsubscribeAll()</code></h4>

```php
public function unsubscribeAll(): void;
```

Removes every subscribed consumer.

## Contracts\Queue\Topic

Interface

A topic destination (publish/subscribe).

- [`Phalcon\Contracts\Queue\Destination`](#contractsqueuedestination)
- **`Phalcon\Contracts\Queue\Topic`**

### Method Summary

<ApiItem href="#contractsqueuetopic-gettopicname" visibility="public" name="getTopicName" returnType="string" params={[]}>
Returns the topic name.
</ApiItem>

### Methods

<h4 id="contractsqueuetopic-gettopicname"><code>getTopicName()</code></h4>

```php
public function getTopicName(): string;
```

Returns the topic name.

## Contracts\Queue\VisibilityAware

Interface

Marker contract for a consumer that supports a visibility timeout
(for example Beanstalk TTR or an SQS visibility timeout). Callers detect
support with `instanceof`. It carries no behavior and commits to no class
shape.

- **`Phalcon\Contracts\Queue\VisibilityAware`**

## Contracts\Session\SessionTypes

Interface

Central registry of the array shapes used across the Session namespace.

- **`Phalcon\Contracts\Session\SessionTypes`**

`Phalcon\Storage\Serializer\SerializerInterface`

## Contracts\Storage\StorageTypes

Interface

Central registry of the array shapes used across the Storage namespace.

- **`Phalcon\Contracts\Storage\StorageTypes`**

`Phalcon\Storage\Serializer\SerializerInterface` · `WeakReference`

## Contracts\Support\Collection

Interface

Canonical contract for Phalcon\Support\Collection.

@extends ArrayAccess&lt;int|string, mixed>
@extends IteratorAggregate&lt;int|string, mixed>

- `\ArrayAccess`
- **`Phalcon\Contracts\Support\Collection`** - extends `\ArrayAccess`, `\IteratorAggregate`
- [`Phalcon\Support\Collection\CollectionInterface`](/6.0/api/phalcon_support/#supportcollectioncollectioninterface)

`ArrayAccess` · `IteratorAggregate`

### Method Summary

<ApiItem href="#contractssupportcollection-__get" visibility="public" name="__get" returnType="mixed" params={[{"type":"string","name":"element","default":null}]}>
</ApiItem>
<ApiItem href="#contractssupportcollection-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
</ApiItem>
<ApiItem href="#contractssupportcollection-__set" visibility="public" name="__set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
</ApiItem>
<ApiItem href="#contractssupportcollection-__unset" visibility="public" name="__unset" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
</ApiItem>
<ApiItem href="#contractssupportcollection-clear" visibility="public" name="clear" returnType="void" params={[]}>
Clears the internal collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-column" visibility="public" name="column" returnType="array" params={[{"type":"string","name":"propertyOrMethod","default":null}]}>
Returns the values from a single property/method extracted from every
</ApiItem>
<ApiItem href="#contractssupportcollection-each" visibility="public" name="each" returnType="static" params={[{"type":"callable","name":"callback","default":null}]}>
Invokes the callback for every item in the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-filter" visibility="public" name="filter" returnType="static" params={[{"type":"callable","name":"callback","default":null}]}>
Returns a new collection of items for which the callback returns true.
</ApiItem>
<ApiItem href="#contractssupportcollection-first" visibility="public" name="first" returnType="mixed" params={[]}>
Returns the first value in the collection or null when empty.
</ApiItem>
<ApiItem href="#contractssupportcollection-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
Returns an element from the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-getkeys" visibility="public" name="getKeys" returnType="array" params={[{"type":"bool","name":"insensitive","default":"true"}]}>
Returns the keys (insensitive or not) of the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-gettype" visibility="public" name="getType" returnType="string|null" params={[]}>
Returns the configured runtime type guard, or null when not set.
</ApiItem>
<ApiItem href="#contractssupportcollection-getvalues" visibility="public" name="getValues" returnType="array" params={[]}>
Returns the values of the internal array.
</ApiItem>
<ApiItem href="#contractssupportcollection-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"element","default":null}]}>
Checks whether an element exists in the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-init" visibility="public" name="init" returnType="void" params={[{"type":"array","name":"data","default":"[]"}]}>
Initializes the internal array.
</ApiItem>
<ApiItem href="#contractssupportcollection-isempty" visibility="public" name="isEmpty" returnType="bool" params={[]}>
Returns true when the collection has no entries.
</ApiItem>
<ApiItem href="#contractssupportcollection-keys" visibility="public" name="keys" returnType="array" params={[{"type":"bool","name":"insensitive","default":"true"}]}>
Returns the keys (insensitive or not) of the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-last" visibility="public" name="last" returnType="mixed" params={[]}>
Returns the last value in the collection or null when empty.
</ApiItem>
<ApiItem href="#contractssupportcollection-map" visibility="public" name="map" returnType="static" params={[{"type":"callable","name":"callback","default":null}]}>
Returns a new collection with the callback applied to every value.
</ApiItem>
<ApiItem href="#contractssupportcollection-reduce" visibility="public" name="reduce" returnType="mixed" params={[{"type":"callable","name":"callback","default":null},{"type":"mixed","name":"initial","default":"null"}]}>
Reduces the collection to a single value using the callback.
</ApiItem>
<ApiItem href="#contractssupportcollection-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"element","default":null}]}>
Removes the element from the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-replace" visibility="public" name="replace" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
Replaces the collection data with a new array, clearing first.
</ApiItem>
<ApiItem href="#contractssupportcollection-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"element","default":null},{"type":"mixed","name":"value","default":null}]}>
Stores an element in the collection.
</ApiItem>
<ApiItem href="#contractssupportcollection-sort" visibility="public" name="sort" returnType="static" params={[{"type":"callable|null","name":"callback","default":"null"},{"type":"int","name":"order","default":"SORT_ASC"}]}>
Returns a new collection sorted by value, preserving keys.
</ApiItem>
<ApiItem href="#contractssupportcollection-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the collection as an array.
</ApiItem>
<ApiItem href="#contractssupportcollection-tojson" visibility="public" name="toJson" returnType="string" params={[{"type":"int","name":"options","default":"4194383"}]}>
Returns the collection serialized as a JSON string.
</ApiItem>
<ApiItem href="#contractssupportcollection-values" visibility="public" name="values" returnType="array" params={[]}>
Returns the values of the internal array.
</ApiItem>
<ApiItem href="#contractssupportcollection-where" visibility="public" name="where" returnType="static" params={[{"type":"string","name":"propertyOrMethod","default":null},{"type":"mixed","name":"value","default":null}]}>
Returns a new collection containing only the items whose
</ApiItem>

### Methods

<h4 id="contractssupportcollection-__get"><code>__get()</code></h4>

```php
public function __get( string $element ): mixed;
```

<h4 id="contractssupportcollection-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $element ): bool;
```

<h4 id="contractssupportcollection-__set"><code>__set()</code></h4>

```php
public function __set(
string $element,
mixed $value
): void;
```

<h4 id="contractssupportcollection-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $element ): void;
```

<h4 id="contractssupportcollection-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clears the internal collection.

<h4 id="contractssupportcollection-column"><code>column()</code></h4>

```php
public function column( string $propertyOrMethod ): array;
```

Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.

<h4 id="contractssupportcollection-each"><code>each()</code></h4>

```php
public function each( callable $callback ): static;
```

Invokes the callback for every item in the collection.

<h4 id="contractssupportcollection-filter"><code>filter()</code></h4>

```php
public function filter( callable $callback ): static;
```

Returns a new collection of items for which the callback returns true.

<h4 id="contractssupportcollection-first"><code>first()</code></h4>

```php
public function first(): mixed;
```

Returns the first value in the collection or null when empty.

<h4 id="contractssupportcollection-get"><code>get()</code></h4>

```php
public function get(
string $element,
mixed $defaultValue = null,
string|null $cast = null
): mixed;
```

Returns an element from the collection.

<h4 id="contractssupportcollection-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

<h4 id="contractssupportcollection-gettype"><code>getType()</code></h4>

```php
public function getType(): string|null;
```

Returns the configured runtime type guard, or null when not set.

<h4 id="contractssupportcollection-getvalues"><code>getValues()</code></h4>

```php
public function getValues(): array;
```

Returns the values of the internal array.

<h4 id="contractssupportcollection-has"><code>has()</code></h4>

```php
public function has( string $element ): bool;
```

Checks whether an element exists in the collection.

<h4 id="contractssupportcollection-init"><code>init()</code></h4>

```php
public function init( array $data = [] ): void;
```

Initializes the internal array.

<h4 id="contractssupportcollection-isempty"><code>isEmpty()</code></h4>

```php
public function isEmpty(): bool;
```

Returns true when the collection has no entries.

<h4 id="contractssupportcollection-keys"><code>keys()</code></h4>

```php
public function keys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

<h4 id="contractssupportcollection-last"><code>last()</code></h4>

```php
public function last(): mixed;
```

Returns the last value in the collection or null when empty.

<h4 id="contractssupportcollection-map"><code>map()</code></h4>

```php
public function map( callable $callback ): static;
```

Returns a new collection with the callback applied to every value.

<h4 id="contractssupportcollection-reduce"><code>reduce()</code></h4>

```php
public function reduce(
callable $callback,
mixed $initial = null
): mixed;
```

Reduces the collection to a single value using the callback.

<h4 id="contractssupportcollection-remove"><code>remove()</code></h4>

```php
public function remove( string $element ): void;
```

Removes the element from the collection.

<h4 id="contractssupportcollection-replace"><code>replace()</code></h4>

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array, clearing first.

<h4 id="contractssupportcollection-set"><code>set()</code></h4>

```php
public function set(
string $element,
mixed $value
): void;
```

Stores an element in the collection.

<h4 id="contractssupportcollection-sort"><code>sort()</code></h4>

```php
public function sort(
callable|null $callback = null,
int $order = SORT_ASC
): static;
```

Returns a new collection sorted by value, preserving keys.

<h4 id="contractssupportcollection-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the collection as an array.

<h4 id="contractssupportcollection-tojson"><code>toJson()</code></h4>

```php
public function toJson( int $options = 4194383 ): string;
```

Returns the collection serialized as a JSON string.

<h4 id="contractssupportcollection-values"><code>values()</code></h4>

```php
public function values(): array;
```

Returns the values of the internal array.

<h4 id="contractssupportcollection-where"><code>where()</code></h4>

```php
public function where(
string $propertyOrMethod,
mixed $value
): static;
```

Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.

## Contracts\Support\Debug\Renderer

Interface

Canonical contract for Phalcon\Support\Debug renderers. Turns an
ExceptionReport into output.

- [`Phalcon\Contracts\Support\Debug\TemplateAware`](#contractssupportdebugtemplateaware)
- **`Phalcon\Contracts\Support\Debug\Renderer`**

`Phalcon\Support\Debug\Report\ExceptionReport`

### Method Summary

<ApiItem href="#contractssupportdebugrenderer-getcsssources" visibility="public" name="getCssSources" returnType="string" params={[{"type":"string","name":"uri","default":null}]}>
Returns the CSS sources block for the given base URI.
</ApiItem>
<ApiItem href="#contractssupportdebugrenderer-getjssources" visibility="public" name="getJsSources" returnType="string" params={[{"type":"string","name":"uri","default":null}]}>
Returns the JavaScript sources block for the given base URI.
</ApiItem>
<ApiItem href="#contractssupportdebugrenderer-getversion" visibility="public" name="getVersion" returnType="string" params={[]}>
Returns the framework version block.
</ApiItem>
<ApiItem href="#contractssupportdebugrenderer-render" visibility="public" name="render" returnType="string" params={[{"type":"ExceptionReport","name":"report","default":null}]}>
Renders the report.
</ApiItem>

### Methods

<h4 id="contractssupportdebugrenderer-getcsssources"><code>getCssSources()</code></h4>

```php
public function getCssSources( string $uri ): string;
```

Returns the CSS sources block for the given base URI.

<h4 id="contractssupportdebugrenderer-getjssources"><code>getJsSources()</code></h4>

```php
public function getJsSources( string $uri ): string;
```

Returns the JavaScript sources block for the given base URI.

<h4 id="contractssupportdebugrenderer-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string;
```

Returns the framework version block.

<h4 id="contractssupportdebugrenderer-render"><code>render()</code></h4>

```php
public function render( ExceptionReport $report ): string;
```

Renders the report.

## Contracts\Support\Debug\TemplateAware

Interface

Canonical contract for components that render through named, overridable
template strings.

- **`Phalcon\Contracts\Support\Debug\TemplateAware`**
- [`Phalcon\Contracts\Support\Debug\Renderer`](#contractssupportdebugrenderer)

### Method Summary

<ApiItem href="#contractssupportdebugtemplateaware-gettemplate" visibility="public" name="getTemplate" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns the template for the given name (override if set, default
</ApiItem>
<ApiItem href="#contractssupportdebugtemplateaware-settemplate" visibility="public" name="setTemplate" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"template","default":null}]}>
Overrides the template for the given name.
</ApiItem>

### Methods

<h4 id="contractssupportdebugtemplateaware-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate( string $name ): string;
```

Returns the template for the given name (override if set, default
otherwise).

<h4 id="contractssupportdebugtemplateaware-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate(
string $name,
string $template
): static;
```

Overrides the template for the given name.

## Contracts\Support\SupportTypes

Interface

Central registry of the array shapes used across the Support namespace.

- **`Phalcon\Contracts\Support\SupportTypes`**

## Contracts\Translate\TranslateTypes

Interface

Central registry of the array shapes used across the Translate namespace.

- **`Phalcon\Contracts\Translate\TranslateTypes`**

## Contracts\View\Renderer

Interface

Renders a template with the given data and returns the result as a string.

A neutral abstraction: it is not tied to MVC, to ADR, or to any particular
template engine. `Phalcon\Mvc\View\Simple` satisfies it out of the box, and
userland engines only need this one method to become a drop-in renderer.

- **`Phalcon\Contracts\View\Renderer`**

### Method Summary

<ApiItem href="#contractsviewrenderer-render" visibility="public" name="render" returnType="string" params={[{"type":"string","name":"path","default":null},{"type":"array","name":"params","default":"[]"}]}>
Renders the template and returns the output.
</ApiItem>

### Methods

<h4 id="contractsviewrenderer-render"><code>render()</code></h4>

```php
public function render(
string $path,
array $params = []
): string;
```

Renders the template and returns the output.

Source: https://docs.phalcon.io/6.0/api/phalcon_contracts/index.mdx
