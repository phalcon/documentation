# ADR - Container and Provider

- - -

## Overview

An ADR application is wired by the framework's autowiring [container][container]. Almost every class (actions, domains, middleware) is resolved automatically by type, so you rarely register anything by hand. What you do register are the *seams*: the handful of services the framework itself needs to run a request.

`Phalcon\ADR\Container\AdrProvider` registers exactly those seams. It is the ADR counterpart to `Phalcon\Container\Provider\Web`, and you use it *instead of* Web for an ADR application.

## Registered seams

| Service (alias) | Bound to |
| --------------- | -------- |
| `eventsManager` | `Phalcon\Events\Manager` |
| `request`       | `Phalcon\Http\Request` (as `AttributeRequest`) |
| `response`      | `Phalcon\Http\Response` |
| `responder`     | `Phalcon\ADR\Responder\JsonResponder` (the default responder) |
| `router`        | `Phalcon\ADR\Router\Router` |
| `dispatcher`    | `Phalcon\ADR\Dispatcher` |
| `emitter`       | `Phalcon\ADR\Emitter\SapiEmitter` |

It also registers a default logger (a null logger, until you bind your own). Everything else (the application, the pipeline, your actions, your middleware) is autowired and needs no registration.

## Registering the provider

The [front controller][front] registers the provider for you in its default `registerProviders()`. When you supply your own front controller you call the parent first, then add anything of your own:

```php
protected function registerProviders(Container $container): void
{
    parent::registerProviders($container);   // registers the ADR seams above

    // your services, router configuration, etc.
    $container->get('router')->setBaseNamespace('MyApp\\Action');
}
```

## Overriding a seam

Because each seam is just a container binding, you replace one by binding your own implementation after the provider has run. For example, to swap the default JSON responder for a text responder, or to provide your own emitter, bind a different class to the same contract. See [Responders][responders] and [Emitter][emitter].

[container]: container.md
[front]: adr-front-controller.md
[responders]: adr-responders.md
[emitter]: adr-emitter.md
