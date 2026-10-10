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

- `public handle(AttributeRequest $request): ResponseInterface`

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

- `public dispatch(string $actionClass, AttributeRequest $request, array $routeMiddleware = []): ResponseInterface`

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

- `public emit(ResponseInterface $response): void`

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

- `public __invoke(AttributeRequest $request): ResponseInterface`

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

- `public __invoke(AttributeRequest $request, Handler $next): ResponseInterface`

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

- `public getException(): Throwable|null` — Gets the exception thrown in the domain layer, if any.

- `public getExtras(): mixed` — Gets the arbitrary extra domain information.

- `public getInput(): mixed` — Gets the domain input.

- `public getMessages(): mixed` — Gets the domain messages.

- `public getResult(): mixed` — Gets the domain result.

- `public getStatus(): mixed` — Gets the payload status.

- `public withException(Throwable $exception): Payload` — Returns a copy of the payload with the given exception.

- `public withExtras(mixed $extras): Payload` — Returns a copy of the payload with the given extras.

- `public withInput(mixed $input): Payload` — Returns a copy of the payload with the given input.

- `public withMessages(mixed $messages): Payload` — Returns a copy of the payload with the given messages.

- `public withResult(mixed $result): Payload` — Returns a copy of the payload with the given result.

- `public withStatus(mixed $status): Payload` — Returns a copy of the payload with the given status.

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

- `public accepts(string $acceptHeader): bool` — Whether this formatter can satisfy the given `Accept` header.

- `public contentType(): string` — The content type this formatter produces.

- `public format(Payload $payload): string` — Renders the payload into a string.

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

- `public __invoke(RequestInterface $request, ResponseInterface $response, Payload $payload): ResponseInterface`

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

- `public filter(string $actionClass, array $attributes): array`

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

- `public candidatesFor(string $method, string $path): array` — Every Action class this router would try for the given method and path,

- `public classFor(string $method, string $path): string` — The class this convention names for a fully static path, derived without

- `public match(RequestInterface $request): RouterMatch|null`

- `public methodFor(string $className): string|null` — The HTTP method the given Action class answers, uppercased, or null when

- `public pathFor(string $className): string|null` — The canonical static path the given Action class answers, or null when

- `public setActionDirectory(string $actionDirectory): Router` — The filesystem root that backs the base namespace. The router uses it to

- `public setBaseNamespace(string $baseNamespace): Router`

- `public setMiddlewareMap(array $middlewareMap): Router`

- `public setWordSeparator(string $wordSeparator): Router` — The single delimiter between words in a path segment. Applied

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

- `public getAction(): string`

- `public getAttributes(): array`

- `public getMiddleware(): array`

- `public getName(): string|null`

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

- `public addComponent(mixed $componentValue, mixed $accessList): bool` — Adds a component to the ACL list

- `public addComponentAccess(string $componentName, mixed $accessList): bool` — Adds access to components

- `public addInherit(string $roleName, mixed $roleToInherits): bool` — Add a role which inherits from an existing role

- `public addRole(mixed $role, mixed $accessInherits = null): bool` — Adds a role to the ACL list. The second parameter lets to inherit access

- `public allow(string $roleName, string $componentName, mixed $access, mixed $func = null): void` — Allow access to a role on a component. You can use `*` as wildcard

- `public deny(string $roleName, string $componentName, mixed $access, mixed $func = null): void` — Deny access to a role on a component. You can use `*` as wildcard

- `public dropComponentAccess(string $componentName, mixed $accessList): void` — Removes access from a component

- `public getActiveAccess(): string|null` — Returns the access which the list is checking if a role can access it

- `public getActiveComponent(): string|null` — Returns the component which the list is checking if some role can access

- `public getActiveRole(): string|null` — Returns the role which the list is checking if it's allowed to certain

- `public getComponents(): array` — Return an array with every component registered in the list

- `public getDefaultAction(): int` — Returns the default action

- `public getInheritedRoles(string $roleName = ""): array` — Returns the inherited roles for a passed role name. If no role name

- `public getNoArgumentsDefaultAction(): int` — Returns the default ACL access level for no arguments provided in

- `public getRoles(): array` — Return an array with every role registered in the list

- `public isAllowed(mixed $roleName, mixed $componentName, string $access, array|null $parameters = null): bool` — Check whether a role is allowed to access an action from a component

- `public isComponent(string $componentName): bool` — Check whether a component exists in the components list

- `public isRole(string $roleName): bool` — Check whether role exist in the roles list

- `public setDefaultAction(int $defaultAccess): void` — Sets the default access level

- `public setNoArgumentsDefaultAction(int $defaultAccess): void` — Sets the default access level (Phalcon\Acl\Enum::ALLOW or

### Methods

<h4 id="contractsacladapteradapter-addcomponent"><code>addComponent()</code></h4>

```php
public function addComponent(
    mixed $componentValue,
    mixed $accessList
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
    mixed $roleToInherits
): bool;
```

Add a role which inherits from an existing role

<h4 id="contractsacladapteradapter-addrole"><code>addRole()</code></h4>

```php
public function addRole(
    mixed $role,
    mixed $accessInherits = null
): bool;
```

Adds a role to the ACL list. The second parameter lets to inherit access
from an existing role

<h4 id="contractsacladapteradapter-allow"><code>allow()</code></h4>

```php
public function allow(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
): void;
```

Allow access to a role on a component. You can use `*` as wildcard

<h4 id="contractsacladapteradapter-deny"><code>deny()</code></h4>

```php
public function deny(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
): void;
```

Deny access to a role on a component. You can use `*` as wildcard

<h4 id="contractsacladapteradapter-dropcomponentaccess"><code>dropComponentAccess()</code></h4>

```php
public function dropComponentAccess(
    string $componentName,
    mixed $accessList
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
public function getComponents(): array;
```

Return an array with every component registered in the list

<h4 id="contractsacladapteradapter-getdefaultaction"><code>getDefaultAction()</code></h4>

```php
public function getDefaultAction(): int;
```

Returns the default action

<h4 id="contractsacladapteradapter-getinheritedroles"><code>getInheritedRoles()</code></h4>

```php
public function getInheritedRoles( string $roleName = "" ): array;
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
public function getRoles(): array;
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

- `public load(): bool` — Loads the policy snapshot from the backing store, replacing current

- `public save(): bool` — Persists the current policy snapshot to the backing store.

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

- `public __toString(): string` — Magic method \_\_toString

- `public getDescription(): string|null` — Returns component description

- `public getName(): string` — Returns the component name

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

- `public getComponentName(): string` — Returns component name

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

- `public __toString(): string` — Magic method \_\_toString

- `public getDescription(): string|null` — Returns role description

- `public getName(): string` — Returns the role name

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

- `public getRoleName(): string` — Returns role name

### Methods

<h4 id="contractsaclroleaware-getrolename"><code>getRoleName()</code></h4>

```php
public function getRoleName(): string;
```

Returns role name


## Contracts\Annotations\AnnotationsTypes

Interface

Central registry of the array shapes used across the Annotations namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `annotations_` because PHPStan resolves
imported type names per file and has no namespacing for them: the prefix is
what keeps generic names such as `arguments` or `options` from clashing with
an alias imported from another namespace into the same file.

The list is alphabetical, with one exception: an alias that another alias
names must be defined before it. Psalm reads the aliases in file order and
cannot resolve a forward reference; it reports the name as a missing class
instead. PHPStan does not care about the order, so a forward reference is
invisible until the stubs are analyzed. `annotations_expression` is hoisted
for that reason.

The node shapes below are what `ext/phalcon/annotations/parser.php.inc.h`
builds: `phannot_ret_annotation()`, `phannot_ret_named_item()`,
`phannot_ret_literal_zval()` and `phannot_ret_array()`.

An expression is one of a literal node (`type` plus an optional string
`value`), an array node (`type` plus optional `items`) or a nested
annotation node, and `getExpression()` walks into `items` and into nested
annotations. That makes the shape recursive, which neither PHPStan nor Psalm
accepts, so the alias stays an untyped map, as `db_expression` does for the
dialect intermediate. Each read narrows the value it needs.

- **`Phalcon\Contracts\Annotations\AnnotationsTypes`**

`Phalcon\Annotations\Annotation` · `Phalcon\Annotations\Collection` · `Phalcon\Annotations\Reflection`


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

- `public getAssetKey(): string` — Gets the asset's key.

- `public getAttributes(): array|null` — Gets extra HTML attributes.

- `public getFilter(): bool` — Gets if the asset must be filtered or not.

- `public getType(): string` — Gets the asset's type.

- `public setAttributes(array $attributes): Asset` — Sets extra HTML attributes.

- `public setFilter(bool $filter): Asset` — Sets if the asset must be filtered or not.

- `public setType(string $type): Asset` — Sets the asset's type.

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

- `public filter(string $content): string` — Filters the content returning a string with the filtered content

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

- `public getExceptActions(): array`

- `public getOnlyActions(): array`

- `public isAllowed(Guard $guard, string $actionName, array $context = []): bool` — Whether the identity behind the guard may run the action.

- `public redirectTo(): array|null`

- `public setExceptActions(array $exceptActions = []): void` — Exempts the listed action names from the gate; every other action is

- `public setOnlyActions(array $onlyActions = []): void` — Restricts the gate to the listed action names.

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

- `public fromOptions(Security $hasher, array $options): static` — Build an adapter from a flat options map. Used by ManagerFactory to

- `public retrieveByCredentials(array $credentials): AuthUser|null` — Find a user matching the given credentials (e.g. \['email' => 'a\@b']).

- `public retrieveById(int|string $id): AuthUser|null` — Find a user by their unique identifier.

- `public validateCredentials(AuthUser $user, array $credentials): bool` — Validate the provided credentials against the given user.

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

- `public getModel(): string|null` — Returns the user-model class name to hydrate, if configured.

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

- `public createRememberToken(AuthUser $user): RememberToken` — Create and persist a new remember token for the user.

- `public retrieveByToken(mixed $id, string $token, string|null $userAgent = null): AuthUser|null` — Retrieve a user by the remember-me cookie payload.

### Methods

<h4 id="contractsauthadapterrememberadapter-createremembertoken"><code>createRememberToken()</code></h4>

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

<h4 id="contractsauthadapterrememberadapter-retrievebytoken"><code>retrieveByToken()</code></h4>

```php
public function retrieveByToken(
    mixed $id,
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

- `public createRememberToken(string $token, string|null $userAgent = null): RememberToken` — Persists a new remember token for the user.

- `public getRememberToken(string $token): RememberToken|null` — Returns the remember token entry matching the given token value,

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

- `public getAuthIdentifier(): int|string` — Returns the unique identifier for the authenticatable user

- `public getAuthPassword(): string` — Returns the hashed password for the authenticatable user.

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

- `public basic(string $field = "email", array $extraConditions = []): bool` — Authenticate against HTTP Basic credentials. Returns true on success.

- `public onceBasic(string $field = "email", array $extraConditions = []): AuthUser|false` — Like basic() but does not persist; returns the resolved user on success

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

- `public check(): bool` — Whether the current request is authenticated.

- `public fromOptions(Adapter $adapter, mixed $container, array $options): static` — Build a guard from an adapter, the application container, and a flat

- `public getLastUserAttempted(): AuthUser|null` — Returns the last user the guard tried to authenticate during this

- `public guest(): bool` — Whether the current request is unauthenticated.

- `public hasUser(): bool` — Whether the guard currently holds a resolved user.

- `public id(): int|string|null` — Returns the authenticated user's identifier, or null when no

- `public setUser(AuthUser $user): static` — Sets the current user explicitly. Returns $this for fluent chaining.

- `public user(): AuthUser|null` — Returns the resolved user for the current request, or null.

- `public validate(array $credentials = []): bool` — Validates the given credentials without logging in.

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

- `public attempt(array $credentials = [], bool $remember = false): bool` — Attempts to authenticate the user with the given credentials and, on

- `public login(AuthUser $user, bool $remember = false): void`

- `public loginById(int|string $id, bool $remember = false): AuthUser|false` — Logs in the user identified by $id. Returns the resolved user on

- `public logout(): void`

- `public viaRemember(): bool`

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

- `public access(string $accessName): self` — Activates the named access gate for the current request and returns the

- `public addAccessList(array $accessList): self`

- `public addGuard(string $nameGuard, Guard $guard, bool $isDefault = false): self`

- `public attempt(array $credentials = [], bool $remember = false): bool`

- `public check(): bool` — Whether the default guard reports the current request as authenticated.

- `public except(string $actions): self` — Restricts the active access gate to skip the listed action names.

- `public getAccess(): Access|null` — Returns the active access gate, or null when none has been activated -

- `public getAccessList(): array`

- `public getDefaultGuard(): Guard|null`

- `public getGuards(): array`

- `public guard(string|null $name = null): Guard` — Returns the named guard, or the default guard when $name is null.

- `public id(): int|string|null` — Returns the authenticated user's identifier from the default guard,

- `public logout(): void` — Logs the current user out via the default guard.

- `public only(string $actions): self` — Restricts the active access gate to apply only to the listed action names.

- `public setAccess(Access $access): self`

- `public setDefaultGuard(Guard $guard): self`

- `public user(): AuthUser|null` — Returns the resolved user from the default guard, or null.

- `public validate(array $credentials = []): bool` — Validates the given credentials against the default guard without

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

- `public delete(): bool` — Deletes the token from storage.

- `public getToken(): string` — Returns the token value stored for this remember entry.

- `public getUserAgent(): string|null` — Returns the user agent associated with this token, if any.

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

- `public clear(): bool` — Wipes clean the entire cache's keys.

- `public delete(string $key): bool` — Delete an item from the cache by its unique key.

- `public deleteMultiple(mixed $keys): bool` — Deletes multiple cache items in a single operation.

- `public get(string $key, mixed $defaultValue = null): mixed` — Fetches a value from the cache.

- `public getMultiple(mixed $keys, mixed $defaultValue = null): mixed` — Obtains multiple cache items by their unique keys.

- `public has(string $key): bool` — Determines whether an item is present in the cache.

- `public set(string $key, mixed $value, mixed $ttl = null): bool` — Persists data in the cache, uniquely referenced by a key with an optional

- `public setMultiple(mixed $values, mixed $ttl = null): bool` — Persists a set of key => value pairs in the cache, with an optional TTL.

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
public function deleteMultiple( mixed $keys ): bool;
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
    mixed $keys,
    mixed $defaultValue = null
): mixed;
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
    mixed $ttl = null
): bool;
```

Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.

<h4 id="contractscachecache-setmultiple"><code>setMultiple()</code></h4>

```php
public function setMultiple(
    mixed $values,
    mixed $ttl = null
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

- `public getActiveTask(): TaskInterface|null` — Returns the active task in the dispatcher

- `public getLastTask(): TaskInterface|null` — Returns the latest dispatched controller

- `public getOptions(): array` — Get dispatched options

- `public getTaskName(): string` — Gets last dispatched task name

- `public getTaskSuffix(): string` — Gets default task suffix

- `public setDefaultTask(string $taskName): void` — Sets the default task name

- `public setOptions(array $options): void` — Set the options to be dispatched

- `public setTaskName(string $taskName): void` — Sets the task name to be dispatched

- `public setTaskSuffix(string $taskSuffix): void` — Sets the default task suffix

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

Get dispatched options

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

Set the options to be dispatched

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

- `public getService(string $serviceName): object` — Returns an instance of the `$serviceName`.

- `public hasService(string $serviceName): bool` — Is the container able to return an instance of the `$serviceName`?

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

- `public newContainer(): IocContainer` — Returns a new instance of \[*IocContainer*]\[].

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

- `public resolveMethod(IocContainer $ioc, ReflectionMethod $method, object $instance): void`

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

- `public resolveParameter(IocContainer $ioc, ReflectionParameter $parameter): mixed`

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

- `public resolve(IocContainer $ioc): mixed`

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

- `public isResolvableClass(string $className): bool`

- `public resolveCall(IocContainer $ioc, callable $callableObject, array $arguments): mixed`

- `public resolveClass(IocContainer $ioc, string $className, array $arguments): object`

- `public resolveMethod(IocContainer $ioc, ReflectionMethod $method, object $instance): void`

- `public resolveParameters(IocContainer $ioc, array $parameters, array $arguments): array`

- `public resolveType(IocContainer $ioc, ReflectionType $type): mixed`

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

- `public bind(string $interfaceName, string $concrete): ServiceDefinition`

- `public callableGet(string $name): Closure`

- `public callableNew(string $name): Closure`

- `public extend(string $name, callable $callableObject): void`

- `public get(string $name): mixed`

- `public getAlias(string $name): string`

- `public getByTag(string $tag): array`

- `public getDefinition(string $name): ServiceDefinition`

- `public getInstance(string $name): object`

- `public getParameter(string $name): mixed`

- `public getResolver(): Resolver`

- `public has(string $name): bool`

- `public hasAlias(string $name): bool`

- `public hasDefinition(string $name): bool`

- `public hasInstance(string $name): bool`

- `public hasParameter(string $name): bool`

- `public isAutowireEnabled(): bool`

- `public new(string $name): mixed`

- `public newDefinition(string $name): ServiceDefinition`

- `public set(string $name, mixed $definition): ServiceDefinition`

- `public setAlias(string $name, string $alias): static`

- `public setAutowire(bool $enabled): static`

- `public setDefinition(string $name, ServiceDefinition $definition): static`

- `public setInstance(string $name, object $instance, string $lifetime): static`

- `public setParameter(string $name, mixed $value): static`

- `public unsetAlias(string $name): void`

- `public unsetDefinition(string $name): void`

- `public unsetInstance(string $name): void`

- `public unsetInstances(string $lifetime): void`

- `public unsetParameter(string $name): void`

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

- `public addExtender(callable $extender): static`

- `public buildService(IocContainer $ioc): object`

- `public getClass(): string`

- `public getExtenders(): array`

- `public getFactory(): callable`

- `public getLifetime(): string`

- `public getServiceName(): string`

- `public hasClass(): bool`

- `public hasExtenders(): bool`

- `public hasFactory(): bool`

- `public setClass(string $className): static`

- `public setExtenders(array $extenders): static`

- `public setFactory(callable $factory): static`

- `public setLifetime(string $lifetime): static`

- `public unsetClass(): static`

- `public unsetExtenders(): static`

- `public unsetFactory(): static`

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

- `public getServiceNames(): array` — Returns the names of every registered service definition. Names that

### Methods

<h4 id="contractscontainerserviceenumerable-getservicenames"><code>getServiceNames()</code></h4>

```php
public function getServiceNames(): array;
```

Returns the names of every registered service definition. Names that
only exist as an alias, a pre-set instance or a parameter are not
included.


## Contracts\Container\Service\Provider

Interface

- **`Phalcon\Contracts\Container\Service\Provider`**

### Method Summary

- `public provide(Collection $services): void`

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


## Contracts\DataMapper\DataMapperTypes

Interface

Central registry of the array shapes used across the DataMapper namespace.

- **`Phalcon\Contracts\DataMapper\DataMapperTypes`**

`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface` · `Stringable`


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
- executePrepared()         : PDOStatement
- onConflictUpdate()        : string
- prepare()                 : PDOStatement
- refreshMaterializedView() : bool
- returning()               : string

The PDO adapters carry the two statement members above and the framework
calls them on the interface. They join the interface in the next major;
until then the tags below record what they provide.

@method PDOStatement executePrepared(PDOStatement $statement, db_bind_params $placeholders, db_bind_types $dataTypes)
@method PDOStatement prepare(string $sqlStatement)

- **`Phalcon\Contracts\Db\Adapter\Adapter`**
  - [`Phalcon\Db\Adapter\AdapterInterface`](/6.0/api/phalcon_db/#dbadapteradapterinterface)

`PDOStatement` · `Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Db\ResultInterface`

### Method Summary

- `public addColumn(string $tableName, string $schemaName, ColumnInterface $column): bool` — Adds a column to a table

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): bool` — Adds a foreign key to a table

- `public addIndex(string $tableName, string $schemaName, IndexInterface $index): bool` — Adds an index to a table

- `public addPrimaryKey(string $tableName, string $schemaName, IndexInterface $index): bool` — Adds a primary key to a table

- `public affectedRows(): int` — Returns the number of affected rows by the last INSERT/UPDATE/DELETE

- `public begin(bool $nesting = true): bool` — Starts a transaction in the connection

- `public close(): void` — Closes active connection returning success. Phalcon automatically closes

- `public commit(bool $nesting = true): bool` — Commits the active transaction in the connection

- `public connect(array $descriptor = []): void` — This method is automatically called in \Phalcon\Db\Adapter\Pdo

- `public createSavepoint(string $name): bool` — Creates a new savepoint

- `public createTable(string $tableName, string $schemaName, array $definition): bool` — Creates a table

- `public createView(string $viewName, array $definition, string|null $schemaName = null): bool` — Creates a view

- `public delete(mixed $table, string|null $whereCondition = null, array $placeholders = [], array $dataTypes = []): bool` — Deletes data from a table using custom RDBMS SQL syntax

- `public describeColumns(string $table, string|null $schema = null): array` — Returns an array of Phalcon\Db\Column objects describing a table

- `public describeIndexes(string $table, string|null $schema = null): array` — Lists table indexes

- `public describeReferences(string $table, string|null $schema = null): array` — Lists table references

- `public dropColumn(string $tableName, string $schemaName, string $columnName): bool` — Drops a column from a table

- `public dropForeignKey(string $tableName, string $schemaName, string $referenceName): bool` — Drops a foreign key from a table

- `public dropIndex(string $tableName, string $schemaName, string $indexName): bool` — Drop an index from a table

- `public dropPrimaryKey(string $tableName, string $schemaName): bool` — Drops primary key from a table

- `public dropTable(string $tableName, string|null $schemaName = null, bool $ifExists = true): bool` — Drops a table from a schema/database

- `public dropView(string $viewName, string|null $schemaName = null, bool $ifExists = true): bool` — Drops a view

- `public escapeIdentifier(mixed $identifier): string` — Escapes a column/table/schema name

- `public escapeString(string $str): string` — Escapes a value to avoid SQL injections

- `public execute(string $sqlStatement, array $bindParams = [], array $bindTypes = []): bool` — Sends SQL statements to the database server returning the success state.

- `public fetchAll(string $sqlQuery, int $fetchMode = 2, array $bindParams = [], array $bindTypes = []): array` — Dumps the complete result of a query into an array

- `public fetchColumn(string $sqlQuery, array $placeholders = [], mixed $column = 0): mixed` — Returns the n'th field of first row in a SQL query result

- `public fetchOne(string $sqlQuery, int $fetchMode = 2, array $bindParams = [], array $bindTypes = []): array|bool` — Returns the first row in a SQL query result

- `public forUpdate(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`

- `public getColumnDefinition(ColumnInterface $column): string` — Returns the SQL column definition from a column

- `public getColumnList(mixed $columnList): string` — Gets a list of columns

- `public getConnectionId(): int` — Gets the active connection unique identifier

- `public getDefaultIdValue(): RawValue` — Return the default identity value to insert in an identity column

- `public getDefaultValue(): RawValue|null` — Returns the default value to make the RBDM use the default value declared

- `public getDescriptor(): array` — Return descriptor used to connect to the active database

- `public getDialect(): DialectInterface` — Returns internal dialect instance

- `public getDialectType(): string` — Returns the name of the dialect used

- `public getInternalHandler(): mixed` — Return internal PDO handler

- `public getNestedTransactionSavepointName(): string` — Returns the savepoint name to use for nested transactions

- `public getRealSQLStatement(): string` — Active SQL statement in the object without replace bound parameters

- `public getSQLBindTypes(): array` — Active SQL statement in the object

- `public getSQLStatement(): string` — Active SQL statement in the object

- `public getSQLVariables(): array` — Active SQL statement in the object

- `public getType(): string` — Returns type of database system the adapter is used for

- `public insert(string $table, array $values, mixed $fields = null, mixed $dataTypes = null): bool` — Inserts data into a table using custom RDBMS SQL syntax

- `public insertAsDict(string $table, mixed $data, mixed $dataTypes = null): bool` — Inserts data into a table using custom RBDM SQL syntax

- `public isNestedTransactionsWithSavepoints(): bool` — Returns if nested transactions should use savepoints

- `public isUnderTransaction(): bool` — Checks whether connection is under database transaction

- `public lastInsertId(string|null $name = null): bool|string` — Returns insert id for the auto\_increment column inserted in the last SQL

- `public limit(string $sqlQuery, mixed $number): string` — Appends a LIMIT clause to sqlQuery argument

- `public listTables(string|null $schemaName = null): array` — List all tables on a database

- `public listViews(string|null $schemaName = null): array` — List all views on a database

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): bool` — Modifies a table column based on a definition

- `public query(string $sqlStatement, array $bindParams = [], array $bindTypes = []): bool|ResultInterface` — Sends SQL statements to the database server returning the success state.

- `public releaseSavepoint(string $name): bool` — Releases given savepoint

- `public rollback(bool $nesting = true): bool` — Rollbacks the active transaction in the connection

- `public rollbackSavepoint(string $name): bool` — Rollbacks given savepoint

- `public setNestedTransactionsWithSavepoints(bool $nestedTransactionsWithSavepoints): \Phalcon\Db\Adapter\AdapterInterface` — Set if nested transactions should use savepoints

- `public sharedLock(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a shared-lock clause. See the dialect's

- `public supportSequences(): bool` — Check whether the database system requires a sequence to produce

- `public supportsDefaultValue(): bool` — SQLite does not support the DEFAULT keyword

- `public tableExists(string $tableName, string|null $schemaName = null): bool` — Generates SQL checking for the existence of a schema.table

- `public tableOptions(string $tableName, string|null $schemaName = null): array` — Gets creation options from a table

- `public update(string $table, mixed $fields, mixed $values, mixed $whereCondition = null, mixed $dataTypes = null): bool` — Updates data on a table using custom RDBMS SQL syntax

- `public updateAsDict(string $table, mixed $data, mixed $whereCondition = null, mixed $dataTypes = null): bool` — Updates data on a table using custom RBDM SQL syntax

- `public useExplicitIdValue(): bool` — Check whether the database system requires an explicit value for identity

- `public viewExists(string $viewName, string|null $schemaName = null): bool` — Generates SQL checking for the existence of a schema.view

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
    mixed $table,
    string|null $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
): bool;
```

Deletes data from a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): array;
```

Returns an array of Phalcon\Db\Column objects describing a table

<h4 id="contractsdbadapteradapter-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): array;
```

Lists table indexes

<h4 id="contractsdbadapteradapter-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
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
public function escapeIdentifier( mixed $identifier ): string;
```

Escapes a column/table/schema name

<h4 id="contractsdbadapteradapter-escapestring"><code>escapeString()</code></h4>

```php
public function escapeString( string $str ): string;
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
    mixed $column = 0
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

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword - pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).

<h4 id="contractsdbadapteradapter-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

<h4 id="contractsdbadapteradapter-getcolumnlist"><code>getColumnList()</code></h4>

```php
public function getColumnList( mixed $columnList ): string;
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

@todo Return NULL if this is not supported by the adapter

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
    string $table,
    array $values,
    mixed $fields = null,
    mixed $dataTypes = null
): bool;
```

Inserts data into a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-insertasdict"><code>insertAsDict()</code></h4>

```php
public function insertAsDict(
    string $table,
    mixed $data,
    mixed $dataTypes = null
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
    mixed $number
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
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): \Phalcon\Db\Adapter\AdapterInterface;
```

Set if nested transactions should use savepoints

<h4 id="contractsdbadapteradapter-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a shared-lock clause. See the dialect's
`sharedLock()` for per-engine semantics. The optional `modifier` is
passed straight through (use `Dialect::LOCK_NOWAIT` /
`Dialect::LOCK_SKIP_LOCKED` for PostgreSQL).

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
    string $table,
    mixed $fields,
    mixed $values,
    mixed $whereCondition = null,
    mixed $dataTypes = null
): bool;
```

Updates data on a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-updateasdict"><code>updateAsDict()</code></h4>

```php
public function updateAsDict(
    string $table,
    mixed $data,
    mixed $whereCondition = null,
    mixed $dataTypes = null
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

- `public getExpression(): string` — Gets the CHECK expression (the SQL boolean predicate).

- `public getName(): string` — Gets the constraint name. An empty string indicates an unnamed CHECK

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
- getComment()              : string | null
- getGenerationExpression() : string | null
- isArray()                 : bool
- isGenerated()             : bool
- isGenerationStored()      : bool
- isInvisible()             : bool

The dialects call the members above on the interface. They join the
interface in the next major; until then the tags below record what all
implementations provide.

@method string|null getComment()
@method string|null getGenerationExpression()
@method bool        isArray()
@method bool        isGenerated()
@method bool        isGenerationStored()
@method bool        isInvisible()

- **`Phalcon\Contracts\Db\Column`**
  - [`Phalcon\Db\ColumnInterface`](/6.0/api/phalcon_db/#dbcolumninterface)

### Method Summary

- `public getAfterPosition(): string|null` — Check whether field absolute to position in table

- `public getBindType(): int` — Returns the type of bind handling

- `public getDefault(): mixed` — Returns default value of column

- `public getName(): string` — Returns column name

- `public getScale(): int` — Returns column scale

- `public getSize(): int|string` — Returns column size

- `public getType(): int|string` — Returns column type

- `public getTypeReference(): int` — Returns column type reference

- `public getTypeValues(): array|int|string` — Returns column type values

- `public hasDefault(): bool` — Check whether column has default value

- `public isAutoIncrement(): bool` — Auto-Increment

- `public isFirst(): bool` — Check whether the column is the first in table

- `public isNotNull(): bool` — Not null

- `public isNumeric(): bool` — Check whether column have a numeric type

- `public isPrimary(): bool` — Column is part of the primary key?

- `public isUnsigned(): bool` — Returns true if number column is unsigned

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


## Contracts\Db\DbTypes

Interface

Central registry of the array shapes used across the Db namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `db_` because PHPStan resolves imported type
names per file and has no namespacing for them: the prefix is what keeps
generic names such as `row` or `options` from clashing with an alias
imported from another namespace into the same file.

The list is alphabetical, with one exception: an alias that another alias
names must be defined before it. Psalm reads the aliases in file order and
cannot resolve a forward reference; it reports the name as a missing class
instead. PHPStan does not care about the order, so a forward reference is
invisible until the cphalcon stubs are analyzed.

The intermediate representation the dialects consume.

`getSqlExpression()` dispatches on the `type` key and each branch reads
only the keys its own node kind carries, so a single array shape cannot
describe the tree. The alias therefore stays an untyped map, as
`mvc_query_ir` does for the PHQL intermediate, and each read narrows the
value it needs. A recursive alias is not an option either: PHPStan rejects
one.

- **`Phalcon\Contracts\Db\DbTypes`**

`Phalcon\Db\CheckInterface` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\Profiler\Item` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`


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
- escape()                  : string
- escapeSchema()            : string
- listViews()               : string
- onConflictUpdate()        : string
- refreshMaterializedView() : string
- returning()               : string

The adapters call the members above on the interface. They join the
interface in the next major; until then the tags below record what all
implementations provide.

@method string addCheck(string $tableName, string $schemaName, \Phalcon\Db\CheckInterface $check)
@method string createMaterializedView(string $view, db_view_definition $definition, string|null $schema = null)
@method string dropCheck(string $tableName, string $schemaName, string $checkName)
@method string dropMaterializedView(string $viewName, string|null $schemaName = null, bool $ifExists = true)
@method string escape(string $input, string $escapeChar = '')
@method string escapeSchema(string $input, string $escapeChar = '')
@method string listViews(string|null $schemaName = null)
@method string onConflictUpdate(string $sqlQuery, db_column_names $conflictColumns, db_column_names $updateColumns)
@method string refreshMaterializedView(string $viewName, string|null $schemaName = null, bool $concurrent = false)
@method string returning(string $sqlQuery, db_column_names $columns)

- **`Phalcon\Contracts\Db\Dialect`**
  - [`Phalcon\Db\DialectInterface`](/6.0/api/phalcon_db/#dbdialectinterface)

`Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\ReferenceInterface`

### Method Summary

- `public addColumn(string $tableName, string $schemaName, ColumnInterface $column): string` — Generates SQL to add a column to a table

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): string` — Generates SQL to add an index to a table

- `public addIndex(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add an index to a table

- `public addPrimaryKey(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add the primary key to a table

- `public createSavepoint(string $name): string` — Generate SQL to create a new savepoint

- `public createTable(string $tableName, string $schemaName, array $definition): string` — Generates SQL to create a table

- `public createView(string $viewName, array $definition, string|null $schemaName = null): string` — Generates SQL to create a view

- `public describeColumns(string $table, string|null $schema = null): string` — Generates SQL to describe a table

- `public describeIndexes(string $table, string|null $schema = null): string` — Generates SQL to query indexes on a table.

- `public describeReferences(string $table, string|null $schema = null): string` — Generates SQL to query foreign keys on a table.

- `public dropColumn(string $tableName, string $schemaName, string $columnName): string` — Generates SQL to delete a column from a table

- `public dropForeignKey(string $tableName, string $schemaName, string $referenceName): string` — Generates SQL to delete a foreign key from a table

- `public dropIndex(string $tableName, string $schemaName, string $indexName): string` — Generates SQL to delete an index from a table

- `public dropPrimaryKey(string $tableName, string $schemaName): string` — Generates SQL to delete primary key from a table

- `public dropTable(string $tableName, string $schemaName, bool $ifExists = true): string` — Generates SQL to drop a table. Every bundled dialect widens

- `public dropView(string $viewName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a view

- `public forUpdate(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`

- `public getColumnDefinition(ColumnInterface $column): string` — Gets the column name in RDBMS

- `public getColumnList(array $columnList): string` — Gets a list of columns

- `public getCustomFunctions(): array` — Returns registered functions

- `public getSqlExpression(array $expression, string|null $escapeChar = null, array $bindCounts = []): string` — Transforms an intermediate representation for an expression into a

- `public limit(string $sqlQuery, mixed $number): string` — Generates the SQL for LIMIT clause

- `public listTables(string|null $schemaName = null): string` — List all tables in database

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): string` — Generates SQL to modify a column in a table

- `public registerCustomFunction(string $name, callable $customFunction): DbDialect` — Registers custom SQL functions

- `public releaseSavepoint(string $name): string` — Generate SQL to release a savepoint

- `public rollbackSavepoint(string $name): string` — Generate SQL to rollback a savepoint

- `public select(array $definition): string` — Builds a SELECT statement

- `public sharedLock(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a shared-lock clause. MySQL emits

- `public supportsReleaseSavepoints(): bool` — Checks whether the platform supports releasing savepoints.

- `public supportsSavepoints(): bool` — Checks whether the platform supports savepoints

- `public tableExists(string $tableName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.table

- `public tableOptions(string $table, string|null $schema = null): string` — Generates the SQL to describe the table creation options

- `public viewExists(string $viewName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.view

### Constants

- `const string LOCK_NONE = ""` — No row-lock modifier - the default behavior for `forUpdate()`.

- `const string LOCK_NOWAIT = "NOWAIT"` — Append `NOWAIT` to the `FOR UPDATE` clause - the query fails immediately
  if a row it needs is locked instead of blocking. MySQL 8.0+ and
  PostgreSQL 9.5+ recognize this. SQLite has no row-level locking and
  silently ignores the modifier.

- `const string LOCK_SKIP_LOCKED = "SKIP LOCKED"` — Append `SKIP LOCKED` to the `FOR UPDATE` clause - the query returns
  rows that are not currently locked and silently skips ones that are.
  MySQL 8.0+ and PostgreSQL 9.5+ recognize this. SQLite ignores it.

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
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to describe a table

<h4 id="contractsdbdialect-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query indexes on a table.

The base adapter consumes the result as `FETCH_NUM` rows by position:
column index 2 must be the index key name and column index 4 the indexed
column name.

<h4 id="contractsdbdialect-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
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

Generates SQL to drop a table. Every bundled dialect widens
`schemaName` to `string|null` and defaults it to null; widening the
contract itself is a next major change.

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

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword - pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).

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
    string|null $escapeChar = null,
    array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a
database system valid expression

<h4 id="contractsdbdialect-limit"><code>limit()</code></h4>

```php
public function limit(
    string $sqlQuery,
    mixed $number
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

Returns a SQL modified with a shared-lock clause. MySQL emits
`LOCK IN SHARE MODE`; PostgreSQL emits `FOR SHARE`; SQLite returns the
original query unchanged. The optional `modifier` appends a row-lock
disposition keyword (`Dialect::LOCK_NOWAIT` / `Dialect::LOCK_SKIP_LOCKED`)
for PostgreSQL - MySQL's legacy `LOCK IN SHARE MODE` does not support
modifiers, so non-empty values are silently ignored on MySQL.

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
    string $table,
    string|null $schema = null
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

- `public getSrid(): int` — Gets the Spatial Reference System Identifier (SRID).

- `public getType(): int` — Gets the geometry type.

- `public toWkt(): string` — Renders the geometry as a Well-Known Text (WKT) string.

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

The dialects call the members above on the interface. They join the
interface in the next major; until then the tags below record what all
implementations provide.

@method db_index_directions getDirections()
@method string              getWhere()
@method bool                isConcurrent()
@method bool                isInvisible()

- **`Phalcon\Contracts\Db\Index`**
  - [`Phalcon\Db\IndexInterface`](/6.0/api/phalcon_db/#dbindexinterface)

### Method Summary

- `public getColumns(): array` — Gets the columns that corresponds the index

- `public getName(): string` — Gets the index name

- `public getType(): string` — Gets the index type

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

- `public getColumns(): array` — Gets local columns which reference is based

- `public getName(): string` — Gets the index name

- `public getOnDelete(): string|null` — Gets the referenced on delete

- `public getOnUpdate(): string|null` — Gets the referenced on update

- `public getReferencedColumns(): array` — Gets referenced columns

- `public getReferencedSchema(): string|null` — Gets the schema where referenced table is

- `public getReferencedTable(): string` — Gets the referenced table

- `public getSchemaName(): string|null` — Gets the schema where referenced table is

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

- `public dataSeek(int $number)` — Moves internal resultset cursor to another position letting us to fetch a

- `public execute(): bool` — Allows to execute the statement again. Some database systems don't

- `public fetch(): mixed` — Fetches an array/object of strings that corresponds to the fetched row,

- `public fetchAll(): array` — Returns an array of arrays containing all the records in the result. This

- `public fetchArray(): mixed` — Returns an array of strings that corresponds to the fetched row, or FALSE

- `public getInternalResult(): PDOStatement` — Gets the internal PDO result object

- `public numRows(): int` — Gets number of rows returned by a resultset

- `public setFetchMode(int $fetchMode): bool` — Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()

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


## Contracts\Di\DiTypes

Interface

Central registry of the array shapes used across the Di namespace.

- **`Phalcon\Contracts\Di\DiTypes`**


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

- `public dispatch()` — Dispatches a handle action taking into account the routing parameters

- `public forward(array $forward): void` — Forwards the execution flow to another controller/action

- `public getActionName(): string` — Gets last dispatched action name

- `public getActionSuffix(): string` — Gets the default action suffix

- `public getHandlerSuffix(): string` — Gets the default handler suffix

- `public getParam(mixed $param, mixed $filters = null): mixed` — Gets a param by its name or numeric index

- `public getParameter(mixed $param, mixed $filters = null): mixed` — Gets a param by its name or numeric index

- `public getParameters(): array` — Gets action params

- `public getParams(): array` — Gets action params

- `public getReturnedValue(): mixed` — Returns value returned by the latest dispatched action

- `public hasParam(mixed $param): bool` — Check if a param exists

- `public isFinished(): bool` — Checks if the dispatch loop is finished or has more pendent

- `public setActionName(string $actionName): void` — Sets the action name to be dispatched

- `public setActionSuffix(string $actionSuffix): void` — Sets the default action suffix

- `public setDefaultAction(string $actionName): void` — Sets the default action name

- `public setDefaultNamespace(string $defaultNamespace): void` — Sets the default namespace

- `public setHandlerSuffix(string $handlerSuffix): void` — Sets the default suffix for the handler

- `public setModuleName(string|null $moduleName = null): void` — Sets the module name which the application belongs to

- `public setNamespaceName(string $namespaceName): void` — Sets the namespace which the controller belongs to

- `public setParam(mixed $param, mixed $value): void` — Set a param by its name or numeric index

- `public setParams(array $params): void` — Sets action params to be dispatched

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

- `public getException(): Throwable|null` — Gets the potential exception thrown in the domain layer

- `public getExtras(): mixed` — Gets arbitrary extra values produced by the domain layer.

- `public getInput(): mixed` — Gets the input received by the domain layer.

- `public getMessages(): mixed` — Gets the messages produced by the domain layer.

- `public getOutput(): mixed` — Gets the output produced from the domain layer.

- `public getStatus(): mixed` — Gets the status of this payload.

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

- `public setException(Throwable $exception): Payload` — Sets an exception produced by the domain layer.

- `public setExtras(mixed $extras): Payload` — Sets arbitrary extra values produced by the domain layer.

- `public setInput(mixed $input): Payload` — Sets the input received by the domain layer.

- `public setMessages(mixed $messages): Payload` — Sets the messages produced by the domain layer.

- `public setOutput(mixed $output): Payload` — Sets the output produced from the domain layer.

- `public setStatus(mixed $status): Payload` — Sets the status of this payload.

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

- `public decrypt(string $input, string|null $key = null): string` — Decrypts a text

- `public decryptBase64(string $input, string|null $key = null): string` — Decrypt a text that is coded as a base64 string

- `public encrypt(string $input, string|null $key = null): string` — Encrypts a text

- `public encryptBase64(string $input, string|null $key = null): string` — Encrypts a text returning the result as a base64 string

- `public getAuthData(): string` — Returns authentication data

- `public getAuthTag(): string` — Returns the authentication tag

- `public getAuthTagLength(): int` — Returns the authentication tag length

- `public getAvailableCiphers(): array` — Returns a list of available cyphers

- `public getCipher(): string` — Returns the current cipher

- `public getKey(): string` — Returns the encryption key

- `public setAuthData(string $data): Crypt` — Sets authentication data

- `public setAuthTag(string $tag): Crypt` — Sets the authentication tag

- `public setAuthTagLength(int $length): Crypt` — Sets the authentication tag length

- `public setCipher(string $cipher): Crypt` — Sets the cipher algorithm

- `public setKey(string $key): Crypt` — Sets the encryption key

- `public setPadding(int $scheme): Crypt` — Changes the padding scheme used.

- `public useSigning(bool $useSigning): Crypt` — Sets if the calculating message digest must be used.

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

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

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


## Contracts\Encryption\EncryptionTypes

Interface

Central registry of the array shapes used across the Encryption namespace.

This is a type registry, not a contract. It declares no members and must
not be implemented; it exists only so that every shape below has a single
definition, imported where it is needed with a phpstan-import-type tag
naming this interface as the source.

Alias names are prefixed with `encryption_` because PHPStan resolves
imported type names per file and has no namespacing for them: the prefix is
what keeps generic names such as `options` or `claims` from clashing with an
alias imported from another namespace into the same file.

The list is alphabetical, with one exception: an alias that another alias
names must be defined before it.

- **`Phalcon\Contracts\Encryption\EncryptionTypes`**


## Contracts\Encryption\Security\CryptoUtils

Interface

- **`Phalcon\Contracts\Encryption\Security\CryptoUtils`**
  - [`Phalcon\Contracts\Encryption\Security\Security`](#contractsencryptionsecuritysecurity)

`Phalcon\Encryption\Security\Random`

### Method Summary

- `public computeHmac(string $data, string $key, string $algorithm, bool $raw = false): string`

- `public getRandom(): Random`

- `public getRandomBytes(): int`

- `public getSaltBytes(int $numberBytes = 0): string`

- `public setRandomBytes(int $randomBytes): Security`

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

- `public checkToken(string|null $tokenKey = null, mixed $tokenValue = null, bool $destroyIfValid = true): bool`

- `public destroyToken(): Security`

- `public getRequestToken(): string|null`

- `public getSessionToken(): string|null`

- `public getToken(): string|null`

- `public getTokenKey(): string|null`

### Methods

<h4 id="contractsencryptionsecuritycsrfprotection-checktoken"><code>checkToken()</code></h4>

```php
public function checkToken(
    string|null $tokenKey = null,
    mixed $tokenValue = null,
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

- `public getAlgHeader(): string` — Return the value that is used for the "alg" header

- `public getAlgorithm(): string` — Return the algorithm used

- `public sign(string $payload, string $passphrase): string` — Sign a payload using the passphrase

- `public verify(string $source, string $payload, string $passphrase): bool` — Verify a passed source with a payload and passphrase

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

`Phalcon\Contracts\Encryption\EncryptionTypes`

### Method Summary

- `public checkHash(string $password, string $passwordHash, int $maxPassLength = 0): bool`

- `public getDefaultHash(): int`

- `public getHashInformation(string $hash): array`

- `public getWorkFactor(): int`

- `public hash(string $password, array $options = []): string`

- `public isLegacyHash(string $passwordHash): bool`

- `public setDefaultHash(int $defaultHash): Security`

- `public setWorkFactor(int $workFactor): Security`

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

- `public getNode(): string`

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

- `public getDateTime(): DateTimeImmutable`

- `public getNode(): string`

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

- `const string NAMESPACE_DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"`

- `const string NAMESPACE_OID = "6ba7b812-9dad-11d1-80b4-00c04fd430c8"`

- `const string NAMESPACE_URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"`

- `const string NAMESPACE_X500 = "6ba7b814-9dad-11d1-80b4-00c04fd430c8"`


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

- `public getListenerMap(): array` — Returns every event type that currently has at least one listener,

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

- `public getData(): mixed` — Gets event data

- `public getType(): mixed` — Gets event type

- `public isCancelable(): bool` — Check whether the event is cancelable

- `public isStopped(): bool` — Check whether the event is currently stopped

- `public setData(mixed $data = null): Event` — Sets event data

- `public setType(string $type): Event` — Sets event type

- `public stop(): Event` — Stops the event preventing propagation

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

- `public getEventsManager(): ManagerInterface|null` — Returns the internal events manager

- `public setEventsManager(ManagerInterface $eventsManager): void` — Sets the events manager

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


## Contracts\Events\EventsTypes

Interface

Central registry of the array shapes used across the Events namespace.

- **`Phalcon\Contracts\Events\EventsTypes`**


## Contracts\Events\Manager

Interface

Canonical contract for Phalcon\Events\Manager.

- **`Phalcon\Contracts\Events\Manager`**
  - [`Phalcon\Events\ManagerInterface`](/6.0/api/phalcon_events/#eventsmanagerinterface)

### Method Summary

- `public addSubscriber(Subscriber $subscriber): void` — Registers an event subscriber. The subscriber's getSubscribedEvents()

- `public arePrioritiesEnabled(): bool` — Returns whether priority ordering is currently enabled.

- `public attach(string $eventType, mixed $handler, int $priority = self::DEFAULT_PRIORITY): void` — Attach a listener to the events manager.

- `public clearSubscribers(): void` — Removes every registered subscriber and detaches each listener they

- `public collectResponses(bool $collect): void` — Toggle response collection on/off.

- `public detach(string $eventType, mixed $handler): void` — Detach a listener from the events manager.

- `public detachAll(string|null $type = null): void` — Removes all listeners -- globally or for a single event type.

- `public enablePriorities(bool $enablePriorities): void` — Toggle priority ordering on/off.

- `public fire(string $eventType, object $source, mixed $data = null, bool $cancelable = true): mixed` — Fires an event, notifying the active listeners.

- `public getListeners(string $type): array` — Returns all listeners attached to the given event type.

- `public getResponses(): array` — Returns the responses recorded during the last fire (when collecting).

- `public getSubscribers(): array` — Returns the list of registered subscriber instances.

- `public hasListeners(string $type): bool` — Check whether the given event type has any listeners.

- `public isCollecting(): bool` — Check whether the manager is currently collecting responses.

- `public isValidHandler(mixed $handler): bool` — Returns true when the given handler is an object or callable.

- `public removeSubscriber(Subscriber $subscriber): void` — Removes a previously registered subscriber. Detaches every listener the

### Constants

- `const int DEFAULT_PRIORITY = 100`

### Methods

<h4 id="contractseventsmanager-addsubscriber"><code>addSubscriber()</code></h4>

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber. The subscriber's getSubscribedEvents()
map is parsed and each entry is attached through the regular listener
pipeline.

<h4 id="contractseventsmanager-areprioritiesenabled"><code>arePrioritiesEnabled()</code></h4>

```php
public function arePrioritiesEnabled(): bool;
```

Returns whether priority ordering is currently enabled.

<h4 id="contractseventsmanager-attach"><code>attach()</code></h4>

```php
public function attach(
    string $eventType,
    mixed $handler,
    int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager.

<h4 id="contractseventsmanager-clearsubscribers"><code>clearSubscribers()</code></h4>

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.

<h4 id="contractseventsmanager-collectresponses"><code>collectResponses()</code></h4>

```php
public function collectResponses( bool $collect ): void;
```

Toggle response collection on/off.

<h4 id="contractseventsmanager-detach"><code>detach()</code></h4>

```php
public function detach(
    string $eventType,
    mixed $handler
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

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent.


## Contracts\Events\Stoppable

Interface

Phalcon's local mirror of PSR-14 StoppableEventInterface. Identical shape;
not extended from the PSR interface because the Zephir extension cannot
reference Composer-loaded interfaces at build time. A separate bridge
package exposes a PSR-14 adapter.

- **`Phalcon\Contracts\Events\Stoppable`**

### Method Summary

- `public isPropagationStopped(): bool` — Returns true when the event must stop propagating to subsequent

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

Keys can be either a Phalcon event string (e.g. "db:beforeQuery") or a
fully qualified event class name.

Wildcard subscriptions: Phalcon's manager fires both the prefix queue and
the full-name queue (e.g. "db" is fired before "db:beforeQuery"). To
subscribe to every event of a component, use the prefix as the key:

  'db' => 'onAnyDbEvent'   // fires for db:beforeQuery, db:afterQuery, ...

- **`Phalcon\Contracts\Events\Subscriber`**

### Method Summary

- `public getSubscribedEvents(): array` — Returns a map of event name => listener config. Called once per

### Methods

<h4 id="contractseventssubscriber-getsubscribedevents"><code>getSubscribedEvents()</code></h4>

```php
public static function getSubscribedEvents(): array;
```

Returns a map of event name => listener config. Called once per
Manager::addSubscriber() / removeSubscriber() call.


## Contracts\Factory\FactoryTypes

Interface

Central registry of the array shapes used across the Factory namespace.

- **`Phalcon\Contracts\Factory\FactoryTypes`**


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

- `public error(string $message): string|null` — Shows a HTML error message

- `public message(string $type, string $message): string|null` — Outputs a message

- `public notice(string $message): string|null` — Shows a HTML notice/information message

- `public success(string $message): string|null` — Shows a HTML success message

- `public warning(string $message): string|null` — Shows a HTML warning message

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

- `public load(): array` — Returns an ordered list of normalized element definitions.

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

- `public run(): int` — Runs the front controller.

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

- `public getAttributes(): array` — Returns the per-option attribute map.

- `public getOptions(): array`

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

- `public getAttributes(): AttributeBag` — Returns the request attribute bag.

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

- `public add(Item $item): Adapter` — Adds a message in the queue

- `public begin(): Adapter` — Starts a transaction

- `public close(): bool` — Closes the logger

- `public commit(): Adapter` — Commits the internal transaction

- `public getFormatter(): FormatterInterface` — Returns the internal formatter

- `public inTransaction(): bool` — Returns the whether the logger is currently in an active transaction or

- `public process(Item $item): void` — Processes the message in the adapter

- `public rollback(): Adapter` — Rollbacks the internal transaction

- `public setFormatter(FormatterInterface $formatter): Adapter` — Sets the message formatter

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

- `public format(Item $item): string` — Applies a format to an item

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

- `public alert(string $message, array $context = []): void` — Action must be taken immediately.

- `public critical(string $message, array $context = []): void` — Critical conditions.

- `public debug(string $message, array $context = []): void` — Detailed debug information.

- `public emergency(string $message, array $context = []): void` — System is unusable.

- `public error(string $message, array $context = []): void` — Runtime errors that do not require immediate action but should typically

- `public getAdapter(string $name): Adapter` — Returns an adapter from the stack

- `public getAdapters(): array` — Returns the adapter stack array

- `public getLogLevel(): int` — Returns the log level

- `public getName(): string` — Returns the name of the logger

- `public info(string $message, array $context = []): void` — Interesting events.

- `public log(mixed $level, string $message, array $context = []): void` — Logs with an arbitrary level.

- `public notice(string $message, array $context = []): void` — Normal but significant events.

- `public trace(string $message, array $context = []): void` — Extra-verbose diagnostic output.

- `public warning(string $message, array $context = []): void` — Exceptional occurrences that are not errors.

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

- `public appendMessage(MessageInterface $message): void` — Appends a message to the collection

- `public appendMessages(mixed $messages)` — Appends an array of messages to the collection

- `public filter(string $fieldName): array` — Filters the message collection by field name

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

- `public getActiveController(): ControllerInterface|null` — Returns the active controller in the dispatcher

- `public getControllerName(): string` — Gets last dispatched controller name

- `public getLastController(): ControllerInterface|null` — Returns the latest dispatched controller

- `public setControllerName(string $controllerName): DispatcherContract` — Sets the controller name to be dispatched

- `public setControllerSuffix(string $controllerSuffix): DispatcherContract` — Sets the default controller suffix

- `public setDefaultController(string $controllerName): DispatcherContract` — Sets the default controller name

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

- `public getUniqueKey(): string` — Returns a string that uniquely identifies this model instance for

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

`Phalcon\Di\DiInterface` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Router\RouteInterface`


## Contracts\Paginator\Adapter

Interface

Interface for Phalcon\Paginator adapters

- **`Phalcon\Contracts\Paginator\Adapter`**
  - [`Phalcon\Paginator\Adapter\AdapterInterface`](/6.0/api/phalcon_paginator/#paginatoradapteradapterinterface)

### Method Summary

- `public getLimit(): int` — Get current rows limit

- `public paginate(): Repository` — Returns a slice of the resultset to show in the pagination

- `public setCurrentPage(int $page): Adapter` — Set the current page number

- `public setLimit(int $limit): Adapter` — Set current rows limit

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

- `public getAliases(): array` — Gets the aliases for properties repository

- `public getCurrent(): int` — Gets number of the current page

- `public getFirst(): int` — Gets number of the first page

- `public getItems(): mixed` — Gets the items on the current page

- `public getLast(): int` — Gets number of the last page

- `public getLimit(): int` — Gets current rows limit

- `public getNext(): int` — Gets number of the next page

- `public getPrevious(): int` — Gets number of the previous page

- `public getTotalItems(): int` — Gets the total number of items

- `public setAliases(array $aliases): Repository` — Sets the aliases for properties repository

- `public setProperties(array $properties): Repository` — Sets values for properties of the repository

### Constants

- `const string PROPERTY_CURRENT_PAGE = "current"`

- `const string PROPERTY_FIRST_PAGE = "first"`

- `const string PROPERTY_ITEMS = "items"`

- `const string PROPERTY_LAST_PAGE = "last"`

- `const string PROPERTY_LIMIT = "limit"`

- `const string PROPERTY_NEXT_PAGE = "next"`

- `const string PROPERTY_PREVIOUS_PAGE = "previous"`

- `const string PROPERTY_TOTAL_ITEMS = "total_items"`

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

- `public createContext(): Context` — Creates a context (a session/connection to the transport).

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

- `public acknowledge(Message $message): void` — Acknowledges the message; the transport may then discard it.

- `public getQueue(): Queue` — Returns the queue this consumer reads from.

- `public receive(int $timeout = 0): Message|null` — Receives a message, blocking up to timeout milliseconds (0 = block

- `public receiveNoWait(): Message|null` — Receives a message without blocking, or null when none is ready.

- `public reject(Message $message, bool $requeue = false): void` — Rejects the message. When requeue is true the transport redelivers it.

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

- `public close(): void` — Closes the context and releases its resources.

- `public createConsumer(Destination $destination): Consumer` — Creates a consumer for the given destination.

- `public createMessage(string $body = "", array $properties = [], array $headers = []): Message` — Creates a message with an optional body, properties and headers.

- `public createProducer(): Producer` — Creates a producer.

- `public createQueue(string $queueName): Queue` — Creates a queue destination by name.

- `public createSubscriptionConsumer(): SubscriptionConsumer` — Creates a subscription consumer for consuming from several queues.

- `public createTemporaryQueue(): Queue` — Creates a temporary queue tied to the lifetime of the context.

- `public createTopic(string $topicName): Topic` — Creates a topic destination by name.

- `public purgeQueue(Queue $queue): void` — Removes all messages from the given queue.

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

- `public getStats(Queue $queue): array` — Returns statistics for the given queue.

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

- `public getBody(): string` — Returns the message body.

- `public getCorrelationId(): string|null` — Returns the correlation id used to correlate request/reply messages.

- `public getHeader(string $name, mixed $defaultValue = null): mixed` — Returns a single header value, or the default when it is not set.

- `public getHeaders(): array` — Returns all transport headers.

- `public getMessageId(): string|null` — Returns the message id.

- `public getProperties(): array` — Returns all application properties.

- `public getProperty(string $name, mixed $defaultValue = null): mixed` — Returns a single property value, or the default when it is not set.

- `public getReplyTo(): string|null` — Returns the reply-to destination name.

- `public getTimestamp(): int|null` — Returns the timestamp (in milliseconds) or null when it is not set.

- `public isRedelivered(): bool` — Whether the message has been redelivered.

- `public setBody(string $body): void` — Sets the message body.

- `public setCorrelationId(string $correlationId): void` — Sets the correlation id.

- `public setHeader(string $name, mixed $value): void` — Sets a single transport header.

- `public setHeaders(array $headers): void` — Replaces all transport headers.

- `public setMessageId(string $messageId): void` — Sets the message id.

- `public setProperties(array $properties): void` — Replaces all application properties.

- `public setProperty(string $name, mixed $value): void` — Sets a single application property.

- `public setRedelivered(bool $redelivered): void` — Marks the message as redelivered.

- `public setReplyTo(string $replyTo): void` — Sets the reply-to destination name.

- `public setTimestamp(int $timestamp): void` — Sets the timestamp (in milliseconds).

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

- `public process(Message $message, Context $context): object|string` — Processes the message and returns one of the ACK / REJECT / REQUEUE

### Constants

- `const string ACK = "enqueue.ack"`

- `const string REJECT = "enqueue.reject"`

- `const string REQUEUE = "enqueue.requeue"`

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

- `public getDeliveryDelay(): int|null` — Returns the delivery delay (in milliseconds) or null when not set.

- `public getPriority(): int|null` — Returns the message priority or null when not set.

- `public getTimeToLive(): int|null` — Returns the time to live (in milliseconds) or null when not set.

- `public send(Destination $destination, Message $message): void` — Sends a message to the given destination.

- `public setDeliveryDelay(mixed $deliveryDelay = null): Producer` — Sets the delivery delay (in milliseconds). Null clears it.

- `public setPriority(mixed $priority = null): Producer` — Sets the message priority. Null clears it.

- `public setTimeToLive(mixed $timeToLive = null): Producer` — Sets the time to live (in milliseconds). Null clears it.

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

- `public getQueueName(): string` — Returns the queue name.

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

- `public consume(int $timeout = 0): void` — Starts consuming, blocking up to timeout milliseconds (0 = block

- `public subscribe(Consumer $consumer, callable $callback): void` — Subscribes a consumer; the callback receives each delivered message.

- `public unsubscribe(Consumer $consumer): void` — Removes a previously subscribed consumer.

- `public unsubscribeAll(): void` — Removes every subscribed consumer.

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

- `public getTopicName(): string` — Returns the topic name.

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

- `public __get(string $element): mixed`

- `public __isset(string $element): bool`

- `public __set(string $element, mixed $value): void`

- `public __unset(string $element): void`

- `public clear(): void` — Clears the internal collection.

- `public column(string $propertyOrMethod): array` — Returns the values from a single property/method extracted from every

- `public each(callable $callback): static` — Invokes the callback for every item in the collection.

- `public filter(callable $callback): static` — Returns a new collection of items for which the callback returns true.

- `public first(): mixed` — Returns the first value in the collection or null when empty.

- `public get(string $element, mixed $defaultValue = null, string|null $cast = null): mixed` — Returns an element from the collection.

- `public getKeys(bool $insensitive = true): array` — Returns the keys (insensitive or not) of the collection.

- `public getType(): string|null` — Returns the configured runtime type guard, or null when not set.

- `public getValues(): array` — Returns the values of the internal array.

- `public has(string $element): bool` — Checks whether an element exists in the collection.

- `public init(array $data = []): void` — Initializes the internal array.

- `public isEmpty(): bool` — Returns true when the collection has no entries.

- `public keys(bool $insensitive = true): array` — Returns the keys (insensitive or not) of the collection.

- `public last(): mixed` — Returns the last value in the collection or null when empty.

- `public map(callable $callback): static` — Returns a new collection with the callback applied to every value.

- `public reduce(callable $callback, mixed $initial = null): mixed` — Reduces the collection to a single value using the callback.

- `public remove(string $element): void` — Removes the element from the collection.

- `public replace(array $data): void` — Replaces the collection data with a new array, clearing first.

- `public set(string $element, mixed $value): void` — Stores an element in the collection.

- `public sort(callable|null $callback = null, int $order = SORT_ASC): static` — Returns a new collection sorted by value, preserving keys.

- `public toArray(): array` — Returns the collection as an array.

- `public toJson(int $options = 4194383): string` — Returns the collection serialized as a JSON string.

- `public values(): array` — Returns the values of the internal array.

- `public where(string $propertyOrMethod, mixed $value): static` — Returns a new collection containing only the items whose

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

- `public getCssSources(string $uri): string` — Returns the CSS sources block for the given base URI.

- `public getJsSources(string $uri): string` — Returns the JavaScript sources block for the given base URI.

- `public getVersion(): string` — Returns the framework version block.

- `public render(ExceptionReport $report): string` — Renders the report.

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

- `public getTemplate(string $name): string` — Returns the template for the given name (override if set, default

- `public setTemplate(string $name, string $template): static` — Overrides the template for the given name.

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

- `public render(string $path, array $params = []): string` — Renders the template and returns the output.

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
