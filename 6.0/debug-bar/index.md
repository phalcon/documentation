---
title: "Debug Bar"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Debug Bar

## Overview

`phalcon/debugbar` is a separate package that provides two things from one install:

- **The debug bar** - a status bar injected into your application's HTML that surfaces per-request diagnostics through collectors.
- **The debug page** - the framework's exception and error page, migrated out of [Phalcon\Support\Debug][support-debug] into this package as `Phalcon\Debug`.

The bar runs only in development. It refuses to boot when the environment is undefined or blocked, and it renders nothing on non-HTML responses.

:::danger[DANGER]
The debug bar and the debug page reveal information about your application and server. Never enable either in a production environment.
:::

## Requirements

- PHP 8.1 or later.
- A Phalcon runtime: the Phalcon 5 C extension, or the Phalcon 6 PHP implementation (`phalcon/phalcon`).
- `matthiasmullie/minify`, pulled in automatically by Composer. It minifies the bar's CSS and JavaScript before they are inlined.

## Installation

```bash
composer require phalcon/debugbar
```

## The Debug Page

The debug page is `Phalcon\Debug`, migrated from [Phalcon\Support\Debug][support-debug] with its public API unchanged. An existing application moves over by swapping the namespace:

```php
<?php

use Phalcon\Debug;

(new Debug())->listen();
```

The remainder of this document covers the debug bar.

## Registering the Debug Bar

The bar is booted by `Phalcon\DebugBar\Provider`. It takes the MVC application and an optional configuration array. Its only coupling to the application is the application's events manager, so the application must have one set before the bar boots.

```php
<?php

use Phalcon\DebugBar\Provider;
use Phalcon\Events\Manager as EventsManager;
use Phalcon\Mvc\Application;

$application = new Application($container);
$application->setEventsManager(new EventsManager());

(new Provider($application))->boot();

echo $application->handle($_SERVER['REQUEST_URI'])->getContent();
```

:::warning[WARNING]
Outside a permitted environment the bar does nothing: `boot()` returns without registering anything, so it is safe to call unconditionally. Set `env.strict` to `true` to make it throw `Phalcon\DebugBar\Exceptions\CannotUseInProduction` instead. The environment is read from `APP_ENV` (`getenv()`, then `$_ENV`, then `$_SERVER`); the default blocked list is `production` and `prod`.
:::

If the application has no events manager, `boot()` still registers the `Debug` facade but attaches no response listener, so nothing is injected. Set an events manager to enable the bar.

## Configuration

The second argument to `Provider` is a nested array. Every key is optional.

| Key                | Type                      | Default                  | Purpose                                                          |
|--------------------|---------------------------|--------------------------|------------------------------------------------------------------|
| `access.allow_ips` | `list<string>`            | `[]` (any client)        | Client IP allowlist. Empty allows any address.                   |
| `access.callback`  | `(Closure(): bool)\|null` | `null`                   | Extra gate. When present, it must also return `true`.            |
| `assets.nonce`     | `string\|null`            | `null`                   | CSP nonce stamped on the injected `<style>` and `<script>` tags. |
| `collectors`       | `array<string, bool>`     | all enabled              | Per-collector switch, keyed by collector name.                   |
| `enabled`          | `bool`                    | `true`                   | Master switch. When `false`, `boot()` returns after the gate.    |
| `env.blocked`      | `list<string>`            | `['production', 'prod']` | Environment values that block the bar (case-insensitive).        |
| `env.strict`       | `bool`                    | `false`                  | When `true`, `boot()` throws in a blocked/undefined environment instead of returning silently. |
| `env.var`          | `string`                  | `APP_ENV`                | Environment variable inspected by the gate.                      |
| `headers`          | `bool`                    | `true`                   | Emit the `X-Debug-Bar` diagnostic header.                        |
| `redact.hidden`    | `list<string>`            | `[]`                     | Keys dropped from the output entirely.                           |
| `redact.mask`      | `list<string>`            | `[]`                     | Extra keys whose values are masked (added to the defaults).      |

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
'env'        => ['var' => 'APP_ENV', 'blocked' => ['production', 'staging']],
'access'     => ['allow_ips' => ['127.0.0.1', '10.0.0.5']],
'collectors' => ['cache' => false, 'view' => false],
'redact'     => ['mask' => ['api_key'], 'hidden' => ['secret_question']],
]))->boot();
```

## Collectors

Each collector contributes one tab. A collector reads its data in one of four ways:

- **Snapshot** - reads state when the response is assembled.
- **Streamed** - subscribes to framework events and accumulates as they fire.
- **Manual** - fed through the `Debug` facade.
- **Adapter** - captured from a `Phalcon\Logger` through the debug bar's logger adapter.

| Name         | Source                                                   | Inflow            |
|--------------|----------------------------------------------------------|-------------------|
| `cache`      | Cache operations and their keys                          | streamed          |
| `config`     | The `config` service, flattened and redacted             | snapshot          |
| `database`   | SQL statements, bound parameters, and timings            | streamed          |
| `exceptions` | Throwables, with stack traces                            | manual + streamed |
| `logger`     | Log entries captured from a `Phalcon\Logger` adapter     | adapter           |
| `messages`   | Messages recorded through the facade                     | manual            |
| `request`    | Request method, URI, query, post, and headers (redacted) | snapshot          |
| `route`      | Matched module, controller, action, and parameters       | streamed          |
| `session`    | `$_SESSION`, flattened and redacted                      | snapshot          |
| `version`    | PHP and Phalcon versions                                 | snapshot          |
| `time`       | Total request time and named measures                    | manual + snapshot |
| `view`       | Rendered view paths and timings                          | streamed          |

Streamed collectors read their data off the event source (the connection, view, router, or cache handed to them by the event). They never resolve a service from the container.

## Sharing the Events Manager

Streamed collectors only receive events from components that fire on the same events manager the bar is subscribed to. Phalcon components fire events only on an events manager set on them explicitly; they do not read one from the container. Register a single events manager as a shared service and hand it to the application and to each component whose events you want.

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$container->setShared('eventsManager', function () {
return new EventsManager();
});

// On the application, so the bar can attach its response listener.
$application->setEventsManager($container->getShared('eventsManager'));

// On each component whose events feed a collector.
$connection->setEventsManager($container->getShared('eventsManager')); // database
$view->setEventsManager($container->getShared('eventsManager'));       // view
$router->setEventsManager($container->getShared('eventsManager'));     // route
$dispatcher->setEventsManager($container->getShared('eventsManager')); // exceptions
```

A collector whose component does not share the events manager reports nothing. Snapshot and manual collectors are unaffected.

## Manual Instrumentation

`Phalcon\DebugBar\Debug` is a static facade. It forwards to the active bar and no-ops when the bar was never registered, so instrumentation left in the code is safe in any environment.

```php
<?php

use Phalcon\DebugBar\Debug;

Debug::message('user resolved', 'auth');
Debug::warning($payload);

Debug::startMeasure('render');
// ... work ...
Debug::stopMeasure('render');

try {
$service->charge($order);
} catch (\Throwable $exception) {
Debug::addException($exception);
}
```

| Method                                                      | Collector    | Effect                                         |
|-------------------------------------------------------------|--------------|------------------------------------------------|
| `addException(\Throwable $throwable)`                       | `exceptions` | Records a throwable and its trace.             |
| `info()` / `debug()` / `notice()` / `warning()` / `error()` | `messages`   | Record one message per argument at that level. |
| `message(mixed $value, string $label = 'info')`             | `messages`   | Records a labelled message.                    |
| `startMeasure(string $name, ?string $label = null)`         | `time`       | Opens a named measure.                         |
| `stopMeasure(string $name)`                                 | `time`       | Closes the named measure.                      |

The `exceptions` collector also captures throwables automatically. It subscribes to `dispatch:beforeException`, records the throwable, and leaves it to bubble - the bar never handles or swallows it. A throwable appears in the panel only when the request still finishes with a rendered response; a caught exception, or one the application forwards to an error page, qualifies, while a fully unhandled one aborts before the bar renders.

## Capturing Logs

`Phalcon\DebugBar\Logger\Adapter` is a `Phalcon\Logger` adapter. Attach it to the application logger and every logged item is captured in the bar's `logger` collector, shown in the "Logs" tab. This is separate from the `messages` collector: `logger` is the automatic application log, while `messages` is what the code records by hand through the `Debug` facade.

- Phalcon 5 (the C extension) exposes the `Phalcon\Logger` adapter contract the adapter builds on.
- Phalcon 6 (`phalcon/phalcon`) exposes the same contract. The adapter attaches the same way on either runtime.

The adapter forwards each `Phalcon\Logger\Item` to the active bar through `Phalcon\DebugBar\Debug::getBar()`, reading the item's level name, message, and PSR-3 context. Forwarding no-ops when the `logger` collector is absent or disabled, so the adapter is safe to leave attached. The adapter also accepts a `null` bar - which `Debug::getBar()` returns until the bar boots - so it can be attached unconditionally.

```php
<?php

use Phalcon\DebugBar\Debug;
use Phalcon\DebugBar\Logger\Adapter;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Logger;

$logger = new Logger('messages', ['main' => new Stream('/var/log/app.log')]);
$logger->addAdapter('debugbar', new Adapter(Debug::getBar()));

$logger->info('user login', ['user_id' => 42]);
$logger->error('payment declined', ['order_id' => 1001]);
```

Each entry keeps its log level as the label and its message beside it. An entry logged with PSR-3 context becomes collapsible: the level and message stay visible and expand to the context, rendered as pretty-printed JSON. An entry logged without context renders as a plain row.

The `logger` collector is registered by default. Disable it, like any collector, through the `collectors` key:

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
'collectors' => ['logger' => false],
]))->boot();
```

## Redaction and Access Control

`Phalcon\DebugBar\Security\Redactor` guards data before it leaves PHP. It matches keys case-insensitively through nested arrays and applies two tiers:

- **Masked** keys keep their key but replace the value with `***`.
- **Hidden** keys are dropped entirely.

The default masked keys are `authorization`, `cookie`, `csrf`, `key`, `password`, `secret`, and `token`. The `request`, `config`, and `session` collectors run their data through the redactor. The `session` collector also omits the raw session id and every `$PHALCON/*` internal key, including the CSRF token.

`Phalcon\DebugBar\Security\AccessGate` decides who receives the bar within an allowed environment. An empty IP allowlist admits any client. When both an allowlist and a callback are given, both must pass.

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
'access' => [
    'allow_ips' => ['127.0.0.1'],
    'callback'  => fn (): bool => 'admin' === ($_SESSION['role'] ?? null),
],
'redact' => ['hidden' => ['card_number']],
]))->boot();
```

## The Bar in the Browser

The bar's CSS and JavaScript are minified and injected inline; the bar has no external asset to host or serve. On CSP-restricted pages, set `assets.nonce` so the inline tags carry a nonce.

The bar sits at the bottom of the page. Each collector is a tab; a tab shows a badge when the collector reports a count or a summary value. Clicking a tab opens its panel:

- **grid** panels (version, request, config, session, route) render a key and value table.
- **list** panels (time, messages, database, view, cache) render labelled rows.
- **exceptions** panels render one collapsible entry per throwable; the summary line stays visible and expands to the stack trace.
- **logs** panels (logger) render one entry per logged item; an entry with context is collapsible - the level and message stay visible and expand to the context.

A handle at the right of the tab row collapses the whole bar to a corner button, so it never covers the host page's own controls. The collapsed state is remembered across page loads.

## Example: Vökuró

The [Vökuró][vokuro] sample application wires the debug bar end to end: a shared events manager registered as a service, handed to the database, view, router, and dispatcher providers, and a provider that boots the bar against the MVC application. It is a working reference for the setup described above.

[support-debug]: /6.0/support-debug/
[vokuro]: /6.0/tutorial-vokuro/

Source: https://docs.phalcon.io/6.0/debug-bar/index.mdx
