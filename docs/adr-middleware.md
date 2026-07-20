# ADR - Middleware

- - -

## Overview

Middleware wraps an action, running code before and after it, or replacing it entirely. It is where cross-cutting concerns live: authentication, CORS, request identifiers, timing, and so on. The action stays focused on its one job while middleware handles everything around it.

Every middleware implements `Phalcon\Contracts\ADR\Middleware`:

```php
public function __invoke(
    Phalcon\Contracts\Http\AttributeRequestInterface $request,
    Phalcon\Contracts\ADR\Handler $next
): Phalcon\Http\ResponseInterface;
```

A middleware receives the request and the `$next` handler in the chain. It can act before calling `$next`, act on the response afterwards, or skip `$next` altogether to short-circuit the request.

```php
<?php

namespace MyApp\Middleware;

use Phalcon\Contracts\ADR\Handler;
use Phalcon\Contracts\ADR\Middleware;
use Phalcon\Contracts\Http\AttributeRequestInterface;
use Phalcon\Http\ResponseInterface;

final class ApiVersion implements Middleware
{
    public function __invoke(AttributeRequestInterface $request, Handler $next): ResponseInterface
    {
        // run the rest of the pipeline, then act on the response
        return $next($request)->setHeader('X-Api-Version', '1');
    }
}
```

Stopping a request short (authentication, authorization) is covered in [Halting execution](#halting-execution) below.

## The pipeline

The [dispatcher][dispatcher] runs middleware through `Phalcon\ADR\Pipeline`, a self-recursive `Handler`. Each step hands the next middleware a fresh pipeline advanced by one as its `$next`, so `$next` is always a real handler, never a closure. When the middleware is exhausted, the pipeline invokes the terminal handler: the action itself.

Middleware runs in two scopes:

* **Global** middleware, configured on the [dispatcher][dispatcher], wraps every request.
* **Namespace** middleware, configured on the [router][router]'s middleware map, wraps only the actions under a namespace prefix.

## Halting execution

A middleware stops a request before the action runs by not calling `$next`. It could build and return a response itself, but for a failure such as "forbidden" the cleaner path is to **throw**: the exception unwinds out of the pipeline to the application's error responder, which turns it into a response with the same machinery the rest of the app uses. The middleware never touches a status code or a response body, and the [payload][payload] stays where it belongs, inside the domain and error paths.

The exception is a small class of your own, extending the ADR exception base:

```php
<?php

namespace MyApp\Exception;

use Phalcon\ADR\Exceptions\Exception;

final class Forbidden extends Exception
{
}
```

Map it to a status on the [error responder][error-responder] so it renders as a `403`. This step is not optional: the error responder catches every thrown exception, but any it does not recognize renders as a `500`, so an unmapped `Forbidden` would reach the client as a server error.

A minimal superadmin gate then reads:

```php
final class RequireSuperadmin implements Middleware
{
    public function __construct(private Identity $identity)
    {
    }

    public function __invoke(AttributeRequestInterface $request, Handler $next): ResponseInterface
    {
        if (! $this->identity->isSuperadmin()) {
            throw new Forbidden();     // the error responder renders the 403
        }

        return $next($request);
    }
}
```

For real rules, lean on the [ACL][acl] component. Build the policy once (in a provider) and inject it:

```php
use Phalcon\Acl\Adapter\Memory;

$acl = new Memory();                                     // defaults to DENY
$acl->addRole('superadmin');
$acl->addRole('customer');
$acl->addComponent('invoices', ['list', 'view', 'void']);
$acl->allow('superadmin', 'invoices', '*');
$acl->allow('customer', 'invoices', ['list', 'view']);   // note: not 'void'
```

The middleware reads the caller's role (established by your auth layer) and the resource and operation this route touches, and throws when the ACL says no:

```php
final class Authorize implements Middleware
{
    public function __construct(
        private Memory $acl,
        private Identity $identity
    ) {
    }

    public function __invoke(AttributeRequestInterface $request, Handler $next): ResponseInterface
    {
        $role      = $this->identity->role();                               // 'customer'
        $component = (string) $request->getAttributes()->get('resource');   // 'invoices'
        $action    = (string) $request->getAttributes()->get('operation');  // 'void'

        if (! $this->acl->isAllowed($role, $component, $action)) {
            throw new Forbidden();
        }

        return $next($request);
    }
}
```

A `customer` reaching `POST /accounting/invoices/void/42` throws `Forbidden`, the error responder renders it as a `403`, and the void action is never dispatched; a `superadmin` passes straight through. Attach each guard to the namespaces it should protect through the [router][router]'s middleware map:

```php
$router->setMiddlewareMap([
    '\\Admin\\'      => [RequireSuperadmin::class],
    '\\Accounting\\' => [Authorize::class],
]);
```

## Bundled middleware

Phalcon ships a handful of common middleware:

| Middleware | Effect |
| ---------- | ------ |
| `Phalcon\ADR\Middleware\RequestIdMiddleware` | ensures every request carries an `X-Request-Id`, reusing an incoming one or generating a fresh value |
| `Phalcon\ADR\Middleware\TimingMiddleware` | adds an `X-Response-Time` header measuring the rest of the pipeline |
| `Phalcon\ADR\Middleware\MethodOverrideMiddleware` | enables the native `_method` override, only on `POST` and only for a safe verb (`PUT`/`PATCH`/`DELETE`) |
| `Phalcon\ADR\Middleware\CorsMiddleware` | config-driven CORS headers and preflight handling; ships inert until you configure an origin allowlist |

[acl]: acl.md
[dispatcher]: adr-dispatcher.md
[error-responder]: adr-error-responder.md
[payload]: adr-payload.md
[router]: adr-router.md
