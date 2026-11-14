---
title: "Debug Bar"
version: "5.24"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Debug Bar

## Overview

`phalcon/debugbar` is a separate Composer package. It gives you two tools for development:

- **The debug bar** - a bar at the bottom of each HTML page. It shows data about the request: queries, views, cache operations, the route, logs, exceptions, time, memory and more. Each source of data is a collector.
- **The debug page** - the exception and error page of the framework. It was [Phalcon\Support\Debug][support-debug]. In this package, it is `Phalcon\Debug`.

The bar runs only in development. It does not boot when the environment is not set or is blocked. `production` and `prod` are always blocked. The bar changes only HTML pages. It does not change JSON responses, file downloads, redirects, AJAX responses or compressed responses.

:::danger[DANGER]
The debug bar and the debug page show data about your application and your server. Do not enable them in a production environment.
:::

## Requirements

- PHP 8.1 or later, with the `mbstring` extension.
- A Phalcon runtime: the Phalcon 5 C extension (`ext-phalcon`) `v5.17.0` or later, or Phalcon 6 (the `phalcon/phalcon` package). Some features need a later Phalcon 5 release. Refer to the table below.
- `matthiasmullie/minify` and `phalcon/traits`. Composer installs them. The package ships the CSS and the JavaScript of the bar minified. The renderer uses `matthiasmullie/minify` only when a custom assets directory has no minified files. The debug page uses the traits of `phalcon/traits`.

| Feature                                                    | Phalcon 5          | Phalcon 6 |
|------------------------------------------------------------|--------------------|-----------|
| MVC applications, `Phalcon\DebugBar\Core`, the debug page  | `v5.17.0` or later | Yes       |
| ADR applications (`Phalcon\DebugBar\ADR\Provider`)         | `v5.18.0` or later | Yes       |
| The `database` panel in an ADR application                 | `v5.19.0` or later | Yes       |

## Installation

```bash
composer require phalcon/debugbar
```

## How the Bar Works

The bar does its work in two steps: the boot step and the response step.

**The boot step.** A provider boots the bar when the application starts:

1. The provider reads the environment. If the environment is not set or is blocked, the bar stops.
2. The provider makes the bar and each collector that is enabled.
3. The provider gives the bar to the `Phalcon\DebugBar\Debug` facade.
4. The provider attaches the bridges to the events manager. A bridge sends framework events (queries, views, cache operations, the route, exceptions) to the collectors.
5. The provider attaches the response listener to the response event of the application.

**The response step.** Before the application sends the response, the response listener:

1. Asks the access gate if the client can get the bar. If the answer is no, the response does not change.
2. Collects the data of each collector.
3. Stores the data in [request history](#request-history), if history is on.
4. Sets the `X-Debug-Bar` header. Its value is the number of collectors.
5. Puts the bar into the response, if the response is an HTML page.

The listener puts the bar into the response only when all these conditions are true:

- The request is not an AJAX request.
- The response has no `Content-Encoding` header.
- The status code is not a redirect (`3xx`).
- The response has no `Content-Type` header, or the header contains `text/html`.
- The content has a `</body>` tag.

The bar goes before the last `</body>` tag. If the response has a `Content-Length` header, the listener sets the header to the new length. A file download, an empty response, JSON and an HTML fragment have no `</body>` tag, so they do not change.

If the access gate callback or a collector throws an exception, the response gets no bar. The page of the application does not change.

## The Debug Page

The debug page is `Phalcon\Debug`. It moved from [Phalcon\Support\Debug][support-debug], and its public API did not change. To use it in an existing application, change the namespace:

```php
<?php

use Phalcon\Debug;

(new Debug())->listen();
```

Create the `Debug` instance before the application starts its own output buffers. The page discards each output buffer that starts after you create `Debug`.

`listen()` does not get the exceptions of an ADR application, because the application catches them first. For an ADR application, refer to [Debug Page for Server Errors](#debug-page-for-server-errors).

The page:

- Escapes each value that it shows, including quotes, the class name and file paths.
- Shows a byte that is not valid UTF-8 as `�` (U+FFFD). The remaining text of the message still shows.
- Shows each previous exception (`getPrevious()`) under the message, with its class, message, file and line.
- Links a framework class to its API page on docs.phalcon.io, for the Phalcon version that runs.
- Shows no source lines for a frame from `eval()` code, or from a file that it cannot read.
- Shows only the escaped message of an exception that occurs while the page renders.

`Phalcon\Debug\Dump` prints `*RECURSION*` for an object or an array that contains itself. It prints `[uninitialized]` for a typed property that has no value. To show an object, the page calls the `dump()` method of the object only if the method is public, is not static and has no required parameters.

`setBlacklist()` removes a matching key at all levels, so `user[password]` does not show. `debugVar()` keeps the backtrace frames, but not their arguments and objects.

Each exception of the debug page (`Exceptions\Exception`, `Exceptions\RequestHalted` and `Exceptions\RuntimeWarning`) implements `Phalcon\Debug\Contracts\DebugThrowable`. One `catch` block catches all of them.

The remaining sections of this document are about the debug bar.

## Registering the Debug Bar

`Phalcon\DebugBar\Provider` boots the bar in an MVC application. It takes the application and an optional configuration array. Set an events manager on the application before you call `boot()`. The provider does not add or change application routes. For other applications, refer to [ADR Applications](#adr-applications) and [Hosts with No Events Manager](#hosts-with-no-events-manager).

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

The provider:

- Reads the `request` and `config` services from the container, if they exist. When request history is on, it also reads the `url` service.
- Attaches the response listener to the `application:beforeSendResponse` event.
- Attaches `Phalcon\DebugBar\Mvc\Bridge` and `Phalcon\DebugBar\ServiceBridge` to the events manager.

If the application has no events manager, `boot()` gives the bar to the `Debug` facade, but it attaches no listener. The bar does not show. Set an events manager to show the bar.

### The Environment

The bar reads the environment from the `APP_ENV` variable. It looks in `getenv()`, then in `$_ENV`, then in `$_SERVER`. It uses the first value that is not empty. To use a different variable, set `env.var`.

- If the variable is not set or is empty, the bar does not boot.
- `production` and `prod` are always blocked. `env.blocked` adds more values. It cannot remove `production` or `prod`.
- The compare trims the values and is not case-sensitive. `Production` and `" prod "` are blocked.

:::warning[WARNING]
When the environment is not set or is blocked, `boot()` returns and registers nothing. You can call it in all environments. Set `env.strict` to `true` to make it throw `Phalcon\DebugBar\Exceptions\CannotUseInProduction` instead.
:::

When `enabled` is `false`, `boot()` returns after the environment check. It registers nothing and it does not throw.

## ADR Applications

### Registering the ADR Provider

`Phalcon\DebugBar\ADR\Provider` boots the bar in a [Phalcon\ADR][adr] application. It is a container service provider, and it takes an optional configuration array. It needs Phalcon `v5.18.0` or later, or Phalcon 6.

```php
<?php

use Phalcon\ADR\Front\AbstractHttpFront;
use Phalcon\Container\Container;
use Phalcon\DebugBar\ADR\Provider as DebugBarProvider;

class AppFront extends AbstractHttpFront
{
    protected function registerProviders(Container $container): void
    {
        parent::registerProviders($container);

        // Register the services of the application here.

        // The debug bar provider must be the last provider.
        (new DebugBarProvider())->provide($container);
    }
}
```

The provider reads the events manager (`Phalcon\Contracts\Events\Manager`) and the request (`Phalcon\Contracts\Http\AttributeRequest`) from the container. It attaches the response listener to the `application:afterHandle` event. The application fires this event for a successful response and for an error response. It sends the response after this event. The provider also attaches `Phalcon\DebugBar\ADR\Bridge` and `Phalcon\DebugBar\ServiceBridge` to the events manager.

:::warning[NOTE]
Register the provider after all other providers. It resolves the events manager and the request during registration. After that, `extend()` on these services throws `CannotExtendResolved`, and `set()` has no effect. In a blocked environment, the provider resolves no service.
:::

### The Database Panel in ADR

The `database` panel reads the `dm:*` events of `Phalcon\DataMapper\Pdo\Connection`. It needs Phalcon `v5.19.0` or later, or Phalcon 6. A connection fires these events only when it has an events manager. In `registerProviders()`, give the events manager of the container to the connection:

```php
<?php

use Phalcon\Contracts\Events\Manager as EventsManager;
use Phalcon\DataMapper\Pdo\Connection;

$container->set(
    Connection::class,
    function () use ($container): Connection {
        $connection = new Connection('mysql:host=localhost;dbname=app', 'user', 'secret');
        $connection->setEventsManager($container->get(EventsManager::class));

        return $connection;
    }
);
```

The panel shows the values that you give to `perform()` and to the `fetch*()` methods. `exec()` and `query()` take no values, so the panel shows only their statements. For more information about the connection, refer to [DataMapper][datamapper].

### The Route Panel in ADR

The `route` panel shows the Action class and the request attributes. The application gives this data in the `adr:beforeExecuteAction` event, so you do not have to do anything. The redactor changes the request attributes before the panel shows them. The panel is empty when a middleware returns a response before the Action runs, and when no route matches the URL.

### The View and Cache Panels in ADR

The `view` and `cache` panels also need the events manager. In `registerProviders()`, give it to the `Phalcon\Mvc\View\Simple` instance and to the `Phalcon\Cache\Cache` instance:

```php
<?php

use Phalcon\Cache\Adapter\Memory;
use Phalcon\Cache\Cache;
use Phalcon\Contracts\Events\Manager as EventsManager;
use Phalcon\Contracts\View\Renderer;
use Phalcon\Mvc\View\Simple;
use Phalcon\Storage\SerializerFactory;

$container->set(
    Renderer::class,
    function () use ($container): Renderer {
        $view = new Simple();
        $view->setViewsDir('/path/to/views/');
        $view->setEventsManager($container->get(EventsManager::class));

        return $view;
    }
);

$container->set(
    Cache::class,
    function () use ($container): Cache {
        $cache = new Cache(new Memory(new SerializerFactory()));
        $cache->setEventsManager($container->get(EventsManager::class));

        return $cache;
    }
);
```

Give the events manager to the cache and not to its adapter. If you give it to both, the `cache` panel shows each operation two times. The panel shows `get()`, `set()`, `has()` and `delete()`. It also shows the keys of `getMultiple()` and `setMultiple()`. It does not show `deleteMultiple()` or `clear()`.

### The Exceptions Panel in ADR

The `exceptions` panel reads the logger. `Phalcon\ADR\ErrorResponder` logs each exception that it handles, and it fires no event. Add `Phalcon\DebugBar\Logger\ExceptionAdapter` to your logger. The bar cannot do this for you, because `Phalcon\Contracts\Logger\Logger` has no `addAdapter()` method.

The bar goes only into HTML responses, and the default error response is JSON. To see the panel on an error page, give the [error responder][adr-error-responder] a responder that returns HTML:

```php
<?php

use Phalcon\ADR\ErrorResponder;
use Phalcon\ADR\Responder\StatusMapper;
use Phalcon\ADR\Responder\ViewResponder;
use Phalcon\Contracts\Logger\Logger as LoggerContract;
use Phalcon\Contracts\View\Renderer;
use Phalcon\DebugBar\Logger\ExceptionAdapter;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Logger;

$container->set(
    LoggerContract::class,
    function (): LoggerContract {
        return new Logger(
            'app',
            [
                'main'     => new Stream('/var/log/app.log'),
                'debugbar' => new ExceptionAdapter(),
            ]
        );
    }
);

$container->set(
    ErrorResponder::class,
    function () use ($container): ErrorResponder {
        return new ErrorResponder(
            new ViewResponder($container->get(Renderer::class), new StatusMapper(), 'errors/error'),
            $container->get(LoggerContract::class)
        );
    }
);
```

The adapter reads the active bar each time the logger writes. You can create the logger before the provider boots the bar. The bar does not get an exception that the logger writes before the boot.

The adapter does not change the response, and it does not stop the error responder. The panel also shows `RouteNotFound` for a URL with no route, because the error responder logs this exception too. If the error responder fails, the application returns an empty 500 response and logs nothing. Then the panel does not show the exception.

### Request History in ADR

The `history` keys turn on [request history](#request-history). You do not have to add a route. An ADR application has no `url` service by default. Set `history.base_uri` when the application is not at the root of the host. The history URL wins over an application route with the same path, for each HTTP method.

```php
<?php

use Phalcon\DebugBar\ADR\Provider as DebugBarProvider;

(new DebugBarProvider([
    'history' => [
        'enabled'  => true,
        'path'     => dirname(__DIR__) . '/runtime/debugbar',
        'base_uri' => '/',
    ],
]))->provide($container);
```

The provider decorates the router (`Phalcon\Contracts\ADR\Router\Router`) with `extend()`. The history URL goes to `Phalcon\DebugBar\ADR\HistoryAction`. All other URLs go to the router of the application. The global middleware of the application also runs for this Action. Route middleware does not run.

:::warning[NOTE]
Do not resolve the router during registration. `extend()` on a resolved service throws `CannotExtendResolved`. In a blocked environment, the provider does not change the router.
:::

### Debug Page for Server Errors

The `debug_page` key shows the debug page (`Phalcon\Debug`) for a server error. It is off by default. The provider reads the exception from the bar, so add `ExceptionAdapter` to your logger. Refer to [The Exceptions Panel in ADR](#the-exceptions-panel-in-adr).

```php
<?php

use Phalcon\DebugBar\ADR\Provider as DebugBarProvider;

(new DebugBarProvider(['debug_page' => true]))->provide($container);
```

Only an exception logged at `error` level or higher opens the debug page. An exception logged at a lower level shows only in the `exceptions` panel. Log an exception that your application handles at `warning` level or lower.

The debug page replaces the content of the response when all these conditions are true:

- The status code is 500 or higher.
- The response is an HTML page.
- The access gate lets the client through.

The status code does not change. A JSON response, an AJAX request and a 404 response keep their content. The bar is not in the debug page. If the debug page fails, the response keeps the error page of the application.

:::warning[NOTE]
The debug page shows `$_SERVER`, which can contain passwords and keys. To remove these values, give a configured `Phalcon\Debug` instance to the provider.
:::

```php
<?php

use Phalcon\Debug;
use Phalcon\DebugBar\ADR\Provider as DebugBarProvider;

$debug = (new Debug())->setBlacklist(['server' => ['DB_PASSWORD', 'APP_CRYPT_SALT']]);

(new DebugBarProvider(['debug_page' => $debug]))->provide($container);
```

### Limits in ADR

These limits apply in an ADR application:

- **One request for each process.** `Phalcon\ADR\Application::handle()` supports a reused request in a long-lived worker, but the collectors have no reset method. In a worker, their data grows from request to request. `HistoryCookie::fromGlobals()` reads the cookie only at boot, so history uses the cookie of the first browser for all requests in the worker. The request data of one browser can then show in the history of a different browser.
- **Events manager.** The events manager must implement `Phalcon\Events\ManagerInterface`. The default manager does. A manager that implements only `Phalcon\Contracts\Events\Manager` gets no listener, so the bar does not show.
- **Empty panels.** The `database`, `view` and `cache` panels get data only when the application gives the events manager to these services. The `exceptions` panel gets data only when the application adds `ExceptionAdapter` to its logger. The provider reads no `config` service, so the `config` panel is empty.

## Hosts with No Events Manager

`Phalcon\DebugBar\Core` boots the bar with no framework application. It takes the configuration array. All the arguments of `boot()` are optional: the events manager, the request and the config source. Call `handle()` when you have the response. The response must implement `Phalcon\Http\ResponseInterface`.

```php
<?php

use Phalcon\DebugBar\Core;

$core = new Core(['access' => ['allow_ips' => ['127.0.0.1']]]);
$core->boot(null, $request);

// The application creates the response here.

$core->handle($response);
```

Give a request when you set `access.allow_ips`. With no request, the client address is not known, so the access gate stops the bar.

If the host has an events manager, attach the listener that `boot()` returns to the response event of the host. `boot()` returns `null` when the bar cannot boot. In this example, `host:response` is a placeholder, and Phalcon does not fire it. Replace it with the event that your host fires with the response as the event data.

```php
<?php

$listener = $core->boot($eventsManager, $request);
if (null !== $listener) {
    // "host:response" is a placeholder. Replace it with the response event of your host.
    $eventsManager->attach('host:response', $listener);
}
```

To use request history, create the recorder from the `history` keys and give it to `boot()`. `createHistory()` returns `null` when the bar cannot boot or history is off. It does not route the URL. Send `history.url` to `Phalcon\DebugBar\History\HistoryHandler` in your host, with `$recorder->history()` and `$core->getAccessGate()`.

```php
<?php

$recorder = $core->createHistory(fn () => $request);
$core->boot(null, $request, null, $recorder);
```

## Configuration

The second argument of `Provider` is a nested array. All keys are optional. `Phalcon\DebugBar\ADR\Provider` and `Phalcon\DebugBar\Core` take the same array as their only argument. `Core` does not read the `debug_page` key.

| Key                    | Type                      | Default                | Purpose                                                                                                                                         |
|------------------------|---------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `access.allow_ips`     | `list<string>`            | `[]` (any client)      | Client IP allowlist. An empty list lets any address through.                                                                                    |
| `access.callback`      | `(Closure(): bool)\|null` | `null`                 | An extra gate. When you set it, it must also return `true`.                                                                                     |
| `assets.nonce`         | `string\|null`            | `null`                 | CSP nonce for the `<style>` and `<script>` tags of the bar.                                                                                     |
| `collectors`           | `array<string, bool>`     | all enabled            | Enables or disables each collector, by the name of the collector.                                                                               |
| `debug_page`           | `bool\|Phalcon\Debug`     | `false`                | Shows the debug page for a server error. Only the ADR provider reads it.                                                                        |
| `enabled`              | `bool`                    | `true`                 | Main switch. When `false`, `boot()` returns after the environment check.                                                                        |
| `env.blocked`          | `list<string>`            | `[]`                   | More environment values that block the bar. `production` and `prod` are always blocked. The compare trims the values and is not case-sensitive. |
| `env.strict`           | `bool`                    | `false`                | When `true`, `boot()` throws in a blocked or undefined environment. When `false`, it returns.                                                   |
| `env.var`              | `string`                  | `APP_ENV`              | The environment variable that the bar reads.                                                                                                    |
| `headers`              | `bool`                    | `true`                 | Sets the `X-Debug-Bar` header. Its value is the number of collectors.                                                                           |
| `history.base_uri`     | `string`                  | `/`                    | Base URI of an ADR application or a `Core` host. The MVC provider reads the `url` service.                                                      |
| `history.enabled`      | `bool`                    | `false`                | Stores the recent requests of each browser, and shows them in the bar.                                                                          |
| `history.max_browsers` | `int`                     | `10`                   | Maximum number of browsers with stored requests. The bar first removes the browser with the oldest update.                                      |
| `history.max_requests` | `int`                     | `100`                  | Maximum number of stored requests for each browser.                                                                                             |
| `history.path`         | `string`                  | required when enabled  | Absolute directory for the stored requests. The web server user must be able to write to it. Keep it outside the document root.                 |
| `history.ttl_seconds`  | `int`                     | `86400`                | Time in seconds that the bar keeps a stored request.                                                                                            |
| `history.url`          | `string`                  | `/_debugbar/open`      | Path of the history endpoint, relative to the base URI of the application.                                                                      |
| `max_rows`             | `int`                     | `1000`                 | Maximum number of rows in each of the `cache`, `database`, `exceptions`, `logger`, `messages` and `view` collectors.                            |
| `redact.hidden`        | `list<string>`            | `[]`                   | Keys that the bar removes from the output.                                                                                                      |
| `redact.mask`          | `list<string>`            | `[]`                   | More keys with masked values. The bar adds them to the default keys.                                                                            |
| `redact.unmask`        | `list<string>`            | `[]`                   | Patterns for masked keys whose values show. `*` matches zero or more characters.                                                                |

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
    // `production` and `prod` are always blocked. The bar adds `staging` to them.
    'env'        => ['var' => 'APP_ENV', 'blocked' => ['staging']],
    'access'     => ['allow_ips' => ['127.0.0.1', '::1']],
    'collectors' => ['cache' => false, 'view' => false],
    'history'    => [
        'enabled'      => true,
        'path'         => dirname(__DIR__) . '/runtime/debugbar',
        'max_requests' => 100,
        'max_browsers' => 10,
        'ttl_seconds'  => 86400,
    ],
    'max_rows'   => 500,
    'redact'     => [
        'mask'   => ['iban'],
        'hidden' => ['secret_question'],
        'unmask' => ['primary_key'],
    ],
]))->boot();
```

## Collectors

A collector gives data to the bar. Most collectors show as tabs on the left side of the bar. `time` and `memory` show as indicators on the right side. Each collector gets its data in one of four ways:

- **Snapshot** - reads the state when the response listener collects the data.
- **Streamed** - gets data from framework events, through a bridge.
- **Manual** - gets data from the `Debug` facade.
- **Adapter** - gets data from a `Phalcon\Logger` adapter.

| Name         | Label      | Data                                                     | Source            | Panel        |
|--------------|------------|----------------------------------------------------------|-------------------|--------------|
| `cache`      | Cache      | Cache operations and their keys                          | streamed          | `list`       |
| `config`     | Config     | The `config` service, flattened and redacted             | snapshot          | `grid`       |
| `database`   | Database   | SQL statements, bindings, timings and a query summary    | streamed          | `list`       |
| `exceptions` | Exceptions | Throwables, with stack traces                            | manual + streamed | `exceptions` |
| `logger`     | Logs       | Log entries from a `Phalcon\Logger` adapter              | adapter           | `logs`       |
| `memory`     | Memory     | Current and peak memory of the PHP request               | snapshot          | `grid`       |
| `messages`   | Messages   | Messages from the `Debug` facade                         | manual            | `list`       |
| `request`    | Request    | Method, URI, query, post and headers, redacted           | snapshot          | `grid`       |
| `route`      | Route      | Matched module, controller, action and parameters        | streamed          | `grid`       |
| `session`    | Session    | `$_SESSION`, flattened and redacted                      | snapshot          | `grid`       |
| `time`       | Time       | Total request time and named measures                    | manual + snapshot | `list`       |
| `version`    | Version    | PHP and Phalcon versions                                 | snapshot          | `grid`       |
| `view`       | View       | Rendered view paths and timings                          | streamed          | `list`       |

All collectors are enabled by default. To disable a collector, set its name to `false` in the `collectors` key:

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
    'collectors' => ['config' => false, 'session' => false],
]))->boot();
```

The `history` collector is the request control on the right side of the bar. It is active only when `history.enabled` is `true`. Set `collectors` to `['history' => false]` to turn off history.

### Bridges

A bridge reads framework events and sends their data to the collectors. A bridge reads the data from the event source (the connection, the view, the router or the cache that the event gives). It does not resolve a service from the container.

| Bridge                           | Events                                                                       | Collector    |
|----------------------------------|------------------------------------------------------------------------------|--------------|
| `Phalcon\DebugBar\ServiceBridge` | `db:beforeQuery`, `db:afterQuery`                                            | `database`   |
| `Phalcon\DebugBar\ServiceBridge` | `view:beforeRenderView`, `view:afterRenderView`                              | `view`       |
| `Phalcon\DebugBar\ServiceBridge` | `cache:afterGet`, `cache:afterSet`, `cache:afterHas`, `cache:afterDelete`    | `cache`      |
| `Phalcon\DebugBar\Mvc\Bridge`    | `router:matchedRoute`                                                        | `route`      |
| `Phalcon\DebugBar\Mvc\Bridge`    | `dispatch:beforeException`                                                   | `exceptions` |
| `Phalcon\DebugBar\ADR\Bridge`    | `dm:beforeExec`, `dm:beforePerform`, `dm:beforeQuery`                        | `database`   |
| `Phalcon\DebugBar\ADR\Bridge`    | `dm:afterExec`, `dm:afterPerform`, `dm:afterQuery`                           | `database`   |
| `Phalcon\DebugBar\ADR\Bridge`    | `adr:beforeExecuteAction`                                                    | `route`      |

`ServiceBridge` runs in all applications. `Mvc\Bridge` and `ADR\Bridge` run only in their application type.

### Row Limit

The `cache`, `database`, `exceptions`, `logger`, `messages` and `view` collectors keep at most `max_rows` rows. The default is `1000`. A collector keeps the first rows. The badge counts all the rows, and a last row shows the number of rows that the collector dropped.

### Database Summary

The `database` panel shows a summary above the queries: the total number of queries, the duplicate runs and the total SQL time. A duplicate run is each run of a normalized statement after its first run. A statement that runs three times gives two duplicate runs. The summary shows zero values when the request runs no queries. The duplicate count does not compare the binding values. The panel highlights the repeated statements and shows how many times each one ran.

## Sharing the Events Manager

This section is about MVC applications. A streamed collector gets events only from a component that fires them on the events manager of the bar. A Phalcon component fires events only on an events manager that you set on it. It does not read an events manager from the container. Register one events manager as a shared service. Give it to the application and to each component whose events you want.

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$container->setShared('eventsManager', function () {
    return new EventsManager();
});

// On the application, so that the bar can attach its response listener.
$application->setEventsManager($container->getShared('eventsManager'));

// On each component whose events go to a collector.
$connection->setEventsManager($container->getShared('eventsManager')); // database
$view->setEventsManager($container->getShared('eventsManager'));       // view
$router->setEventsManager($container->getShared('eventsManager'));     // route
$dispatcher->setEventsManager($container->getShared('eventsManager')); // exceptions
$cache->setEventsManager($container->getShared('eventsManager'));      // cache
```

A collector whose component does not use this events manager shows no data. This does not change the snapshot and manual collectors.

## Manual Instrumentation

`Phalcon\DebugBar\Debug` is a static facade. It sends each call to the active bar. When no bar is active, a call does nothing. You can keep these calls in your code in all environments.

```php
<?php

use Phalcon\DebugBar\Debug;

Debug::message('user resolved', 'auth');
Debug::warning($payload);

Debug::startMeasure('render');
// The work to measure.
Debug::stopMeasure('render');

try {
    $service->charge($order);
} catch (\Throwable $exception) {
    Debug::addException($exception);
}
```

| Method                                                      | Collector    | Effect                                       |
|-------------------------------------------------------------|--------------|----------------------------------------------|
| `addException(\Throwable $throwable)`                       | `exceptions` | Adds a throwable and its trace.              |
| `info()` / `debug()` / `notice()` / `warning()` / `error()` | `messages`   | Adds each argument at that level.            |
| `message(mixed $message, string $label = 'info')`           | `messages`   | Adds a message with a label.                 |
| `startMeasure(string $name, ?string $label = null)`         | `time`       | Starts a named measure.                      |
| `stopMeasure(string $name)`                                 | `time`       | Stops the named measure.                     |
| `getBar()`                                                  | -            | Returns the active bar, or `null`.           |

The `exceptions` collector also gets throwables automatically. In an MVC application, `Phalcon\DebugBar\Mvc\Bridge` listens to `dispatch:beforeException`. It adds the throwable and lets it continue. The bar does not handle or stop the throwable. The throwable shows in the panel only when the request still ends with a rendered response. A caught exception, or an exception that the application sends to an error page, shows. An exception that nothing handles stops the request before the bar renders.

## Capturing Logs

`Phalcon\DebugBar\Logger\Adapter` is a [Phalcon\Logger][logger] adapter. Attach it to the logger of the application. The bar then shows each logged item in the `Logs` panel of the `logger` collector. This collector is different from the `messages` collector: `logger` shows the log of the application, and `messages` shows the messages that your code adds through the `Debug` facade.

The adapter works the same with Phalcon 5 (the C extension) and with Phalcon 6 (`phalcon/phalcon`).

```php
<?php

use Phalcon\DebugBar\Logger\Adapter;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Logger;

$logger = new Logger('messages', ['main' => new Stream('/var/log/app.log')]);
$logger->addAdapter('debugbar', new Adapter());

$logger->info('user login', ['user_id' => 42]);
$logger->error('payment declined', ['order_id' => 1001]);
```

The adapter sends the level name, the message and the PSR-3 context of each `Phalcon\Logger\Item` to the active bar. It reads the active bar each time the logger writes, so you can attach it before the bar boots. The bar does not get the items that the logger writes before the boot. When the `logger` collector is disabled, the adapter does nothing. You can keep it attached.

Each entry shows its log level as the label, and its message next to it:

- An entry with PSR-3 context can expand. The level and the message stay visible. The entry expands to the context, in formatted JSON.
- An entry with no context shows as one row.
- The bar redacts the context. It changes objects in the context to arrays first, the same as `json_encode()`, so it also redacts their keys.
- A `Throwable` in the context shows its class, message, file and line.
- A value that JSON cannot hold, such as `INF`, shows as `0`. The remaining context still shows.

The `logger` collector is enabled by default. To disable it, use the `collectors` key:

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
    'collectors' => ['logger' => false],
]))->boot();
```

## Request History

Request history stores the data of recent requests for each browser. You can open a stored request in the bar of the current page. History is off by default.

### Enabling History

Set `history.enabled` to `true` and set `history.path`:

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
    'history' => [
        'enabled' => true,
        'path'    => dirname(__DIR__) . '/runtime/debugbar',
    ],
]))->boot();
```

`history.path` must be an absolute path. The web server user must be able to write to it. The provider creates the directory if it does not exist. It checks the directory during boot, after the environment check and the collector check.

- A history option that is not valid throws `Phalcon\DebugBar\Exceptions\InvalidConfig`.
- A `history.path` that the web server user cannot write to throws `Phalcon\DebugBar\Exceptions\StorageNotWritable`.

Both exceptions implement `Phalcon\DebugBar\Contracts\DebugBarThrowable`, as all exceptions of the bar do.

When `collectors` sets `history` to `false`, history is off. The provider then registers no endpoint and no storage.

### The History Endpoint

In an MVC application, the provider registers an internal history controller in the container. It selects this controller in the `application:beforeHandleRequest` event for `GET` and `DELETE` requests to `history.url`. It registers no other services or routes.

- A `GET` request with no `id` returns the metadata of the recent requests.
- A `GET` request with `?id=<request-id>` returns a stored payload.
- A `DELETE` request removes the stored requests of the active browser. Only a real HTTP `DELETE` request removes them. The endpoint does not accept a method override, such as `_method=DELETE`.

The provider reads the `url` service when the application handles a request. If the base URI is `/app1/` or `https://example.test/app1/`, the endpoint path is `/app1/_debugbar/open`. The endpoint uses the normal MVC lifecycle, so module initialization and the event listeners of the application still run.

`history.url` must start with `/`. It cannot contain a scheme, a host, a query or a fragment. It cannot be `/`, because the endpoint then replaces the home page of the application. The endpoint wins over an application route with the same path, for each HTTP method. Use a path that the application does not use.

The endpoint responses have the `X-Content-Type-Options: nosniff` header. The bar does not collect them, does not set its header on them, does not put the bar into them and does not store them.

### ACL Plugins

A dispatcher ACL plugin also sees the internal history controller. Let its namespace through before you apply the rules for the controllers of the application:

```php
<?php

use Phalcon\DebugBar\Mvc\HistoryListener;

if (HistoryListener::CONTROLLER_NAMESPACE === $dispatcher->getNamespaceName()) {
    return true;
}
```

### Storage and the History Cookie

The bar keeps the history of each browser apart. It uses a random `phalcon-debugbar-history` cookie, and it names the storage of the browser with a SHA-256 hash of the cookie.

- The cookie is `HttpOnly` and `SameSite=Lax`. On HTTPS, it is also `Secure`. It lasts for the browser session.
- The bar sets the cookie with the cookie functions of PHP, so it does not replace the cookies of the application.
- The bar does not read, start or change the PHP session of the application. Session ID regeneration does not hide earlier requests.
- The first response to a browser sets the cookie, but the bar does not store it. Storage starts with the next request that has the cookie.
- If output starts before the response, the bar cannot set the cookie. Request history does not start for that browser.
- When the browser closes, the cookie goes. The stored files stay until `history.ttl_seconds` ends. Then the bar removes them.
- A client that does not keep cookies creates no storage.

A browser is one history cookie. All the windows and tabs of a browser use the same cookie, so they count as one browser. A private window gets its own cookie, so it counts as a different browser.

`history.max_browsers` sets the maximum number of browser directories. To add a new browser at the limit, the bar first removes the browser with the oldest update. It removes the old browser only after it stores the first request of the new browser. A request that the bar cannot store does not remove the history of a different browser. This limit applies also to forged cookies and to cookies that change again and again, when the IP allowlist is empty.

Each stored entry has two times: the start time of the request (`requested_at`) and the time that the bar stored it (`stored_at`). If the server does not give `REQUEST_TIME_FLOAT`, the bar uses the store time for the two values.

Each payload has a small metadata file. The list of requests reads only the metadata files. If a metadata file is missing, the bar reads the versioned payload. The bar does not accept a stored payload from an incompatible version.

When the bar reads history, it removes the expired entries of the active browser only. This keeps the history fast on network file systems. When the bar stores a request, it also removes the expired entries, the old temporary files and the empty directories of all browsers. It does this at most one time each hour, or one time for each `history.ttl_seconds` when that time is shorter.

:::warning[WARNING]
If other users can get to the debug host, limit history with `access.allow_ips`, `access.callback` or both.
:::

### History in the Browser

The request control is on the right side of the bar. It shows a search icon, the HTTP method and the URI of the current request.

- Click the control to open the history browser. Click it again to close it.
- The history browser has refresh and clear controls.
- Click a stored request to show its data. The bar closes the history browser and replaces all collector data with the data of that request. It also updates the request time, the memory, the method and the URI. The page does not change.
- The collector panel that was open before you opened history opens again, with the data of the selected request.
- The history browser and the collector panels do not show at the same time. When one opens, the other closes.

With no `request` panel, for example with `'collectors' => ['request' => false]`, the control shows the method and the URI from the request metadata. If the request metadata is not available, the control shows `History`. An empty history shows `No stored requests`, and the clear control is disabled.

## Redaction and Access Control

### Redaction

`Phalcon\DebugBar\Security\Redactor` changes the data before it leaves PHP. It finds keys in nested arrays. The compare is not case-sensitive. It has two tiers:

- **Masked** keys keep their key, but the value changes to `***`.
- **Hidden** keys are removed.

A key matches an entry when it has the same name, or when it contains the word parts of the entry next to each other. The redactor splits a name into word parts at `_`, `-`, `.` and at camelCase. For example, `token` matches `reset_token` and `accessToken`, and `card_number` matches `customer_card_number`. `token` does not match `tokens`, and `key` does not match `monkey`.

The default masked keys are `authorization`, `cookie`, `csrf`, `key`, `passwd`, `password`, `php-auth`, `pw`, `pwd`, `secret` and `token`. `php-auth` masks the `Php-Auth-User`, `Php-Auth-Pw` and `Php-Auth-Digest` headers that Phalcon adds for Basic and Digest authentication. Add more keys to `redact.mask`. Add the keys to remove to `redact.hidden`.

These collectors use the redactor:

- `request`, `config`, `session` and `logger`.
- `route`, for the request attributes in an ADR application.
- `request` and request history also redact the query of the URI. When the redactor changes a value in a query, it builds the query again, so the encoding of the other values can change.

The `session` collector also removes the session ID and each `$PHALCON/*` internal key, which includes the CSRF token. This also applies when the session manager has a `uniqueId`, which adds `uniqueId#` before each key.

The `database` panel and request history show and store the query bindings as they are, because generated names such as `:APL0` do not match a key. The redactor does not change log messages, exception messages or stack traces. The redactor does not change the data of a [custom collector](#custom-collectors).

### Showing Masked Values

A word part can mask a key that is not sensitive, such as `primary_key`. To show its value, add a pattern to `redact.unmask`.

- A pattern must match the full key. The compare is not case-sensitive.
- `*` matches zero or more characters. Each other character matches only itself.
- A pattern does not use word parts.
- A hidden key stays hidden, also when a pattern matches it.
- A pattern of `*` alone shows all masked values.

For example, `card` matches only `card`, `card*` also matches `card_number`, and `*card*` also matches `customer_card_number` and `discard`.

### Access Control

`Phalcon\DebugBar\Security\AccessGate` decides which clients get the bar in an allowed environment.

- An empty IP allowlist lets any client through.
- The allowlist compares the address exactly. On a host with IPv4 and IPv6, a local client can come as `::1`. Add `::1` next to `127.0.0.1`.
- The gate reads `REMOTE_ADDR`. Behind a proxy on the same host, `REMOTE_ADDR` is the address of the proxy, for example `127.0.0.1`, for each client. The allowlist then lets each client through.
- When you set an allowlist and a callback, both must pass.
- Only `true` from the callback lets the client through.
- When the callback or a collector throws an exception, the response gets no bar, and the page of the application does not change.
- The callback can run more than one time for a request, for example for a server error in an ADR application with `debug_page` on. Do not put side effects in the callback.

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
    'access' => [
        'allow_ips' => ['127.0.0.1', '::1'],
        'callback'  => fn (): bool => 'admin' === ($_SESSION['role'] ?? null),
    ],
    'redact' => ['hidden' => ['card_number']],
]))->boot();
```

## Custom Collectors

To add a panel, extend `Phalcon\DebugBar\Collector\AbstractCollector`. Set the `NAME` constant and the `$label` and `$panel` properties. `collect()` returns the data of the panel and the badge. To get data from events, also implement `Phalcon\DebugBar\Contracts\Subscriber`, and attach your listeners in `subscribe()`.

```php
<?php

use Phalcon\DebugBar\Collector\AbstractCollector;
use Phalcon\DebugBar\Contracts\Subscriber;
use Phalcon\Events\EventInterface;
use Phalcon\Events\ManagerInterface;

final class OrdersCollector extends AbstractCollector implements Subscriber
{
    public const NAME = 'orders';

    protected string $label = 'Orders';

    protected string $panel = 'list';

    /**
     * @var list<array{label: string, message: string}>
     */
    private array $rows = [];

    public function collect(): array
    {
        return ['panel' => $this->rows, 'badge' => count($this->rows)];
    }

    public function subscribe(ManagerInterface $eventsManager): void
    {
        $eventsManager->attach(
            'orders:afterCreate',
            function (EventInterface $event, mixed $source, mixed $id): void {
                $this->rows[] = ['label' => 'Created', 'message' => is_string($id) ? $id : ''];
            }
        );
    }
}
```

Add the collector after the provider boots and before the response event. `getBar()` returns `null` when the bar did not boot, for example in a blocked environment.

```php
<?php

use Phalcon\DebugBar\Debug;

Debug::getBar()?->addCollector(new OrdersCollector());
```

`addCollector()` calls `subscribe()` when the bar has an events manager. Do not call `subscribe()` yourself, because then the listeners attach two times. A collector with no events does not implement `Subscriber`. You add it the same way. A collector with the name of a built-in collector replaces it. The bridges do not send data to the replacement, so it must attach its own listeners.

The bar does not redact the data of a custom collector. Send sensitive data through `Phalcon\DebugBar\Security\Redactor` in the collector. The collector does not get the `redact.mask`, `redact.hidden` and `redact.unmask` values, so give them to its `Redactor`.

The `$panel` property sets the panel type. The types are `code`, `exceptions`, `grid`, `history`, `html`, `list` and `logs`. Refer to [The Bar in the Browser](#the-bar-in-the-browser).

:::danger[WARNING]
The `html` panel type puts the string of the panel into the page as HTML, with no escaping. Use it only for HTML that your collector builds. Escape each value that comes from the request, the session or the database, for example with `htmlspecialchars()`. Request history shows the panel again later. No other panel type puts HTML into the page. A collector that declares no panel type (it does not implement `Phalcon\DebugBar\Contracts\Renderable`) shows a string panel as text.
:::

## The Bar in the Browser

The bar puts its CSS and JavaScript into the page. You do not have to host or serve asset files. On a page with a Content Security Policy, set `assets.nonce` to add a nonce to the `<style>` and `<script>` tags.

The bar is at the bottom of the page:

- The collectors show as tabs on the left side. A tab shows a badge when the collector gives a count or a summary value. Click a tab to open its panel.
- `time` and `memory` show as indicators on the right side. Click an indicator to open or close its panel. The indicators show also when history is off.
- The request control is at the far right. It opens and closes [request history](#history-in-the-browser).
- A handle at the right side of the tab row makes the bar small, as a button in the corner. Then the bar does not cover the controls of the page. The browser keeps this state between page loads.
- `Escape` closes the open panel or the history browser. Screen readers read the names of the collapse handle and of the tabs.

An indicator icon must be `clock`, `cogs` or `search`. With a different name, the indicator shows its value and no icon.

The panels use these types:

- **grid** panels (`version`, `request`, `config`, `session`, `route`, `memory`) show a table of keys and values.
- **list** panels (`time`, `messages`, `database`, `view`, `cache`) show rows with labels.
- **exceptions** panels show one entry for each throwable. The summary line stays visible, and the entry expands to the stack trace.
- **logs** panels (`logger`) show one entry for each logged item. An entry with context can expand. The level and the message stay visible, and the entry expands to the context.
- **code** panels show text in a `<pre>` block. A string panel with no panel type shows as `code`.
- **html** panels put a string into the page as trusted HTML. Only custom collectors use this type. Refer to [Custom Collectors](#custom-collectors).

A byte that is not valid UTF-8 shows as `�` (U+FFFD). The other data of the request still shows, and request history still stores it. The bar keeps the CSS of the page out of its tables, code blocks and buttons. A history request stops after 10 seconds. A history row that does not load shows `Unable to load`.

## Upgrading from 0.4 to 1.0.0

Version 1.0.0 has breaking changes. Read this section before you update. For the full list of changes, refer to the [changelog][changelog].

| Area                  | 0.4                                                       | 1.0.0                                                                     | Action                                                                     |
|-----------------------|-----------------------------------------------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Phalcon 5             | `^5`                                                      | `v5.17.0` or later                                                        | Update Phalcon, or stay on 0.4.                                            |
| PHP extensions        | -                                                         | `ext-mbstring` is required                                                | Install `mbstring`.                                                        |
| `Logger\Adapter`      | `new Adapter(Debug::getBar())`                            | `new Adapter()`                                                           | Remove the argument.                                                       |
| Built-in collectors   | Implement `Subscriber` and have `subscribe()`             | Bridges send the events. No `subscribe()`.                                | Remove calls to `subscribe()` on built-in collectors.                      |
| `addCollector()`      | Does not subscribe the collector                          | Calls `subscribe()` when the bar has an events manager                    | Remove your own `subscribe()` call for a custom collector.                 |
| `LoggerCollector`     | No constructor arguments                                  | Takes a `Security\Redactor`                                               | Give a `Redactor`, if you create the collector yourself.                   |
| String panels         | Shown as HTML                                             | Shown as text                                                             | Set `$panel` to `html` in a custom collector that returns HTML.            |
| `$icon`               | `AbstractCollector::$icon`, sent as `widget.icon`         | Removed                                                                   | Remove `$icon` from a custom collector.                                    |
| `env.blocked`         | Replaces `['production', 'prod']`                         | Adds to `production` and `prod`                                           | Check your blocked environments.                                           |
| Redaction             | Matches the full key                                      | Also matches word parts. More default keys.                               | Check the panels. Use `redact.unmask` for keys that must show.             |
| `access.callback`     | An exception goes to the application                      | Only `true` lets the client through. An exception gives no bar.           | No action.                                                                 |
| Rows                  | No limit                                                  | `max_rows` (`1000`) for each list collector                               | Set `max_rows`, if you need more rows.                                     |
| Injection             | Also compressed pages and pages with no `</body>`         | Only HTML pages with `</body>` that are not compressed                    | No action. `Content-Length` changes to the new length.                     |
| Time panel            | A tab                                                     | An indicator on the right side                                            | No action.                                                                 |
| `logger` tab          | `Logger`                                                  | `Logs`                                                                    | No action.                                                                 |
| Version class         | `Phalcon\DebugBar\Version`                                | Removed                                                                   | Remove references to it.                                                   |
| `getMode()`           | `Phalcon\Debug\Report\CodeFragment::getMode()`            | Removed                                                                   | Remove calls to it.                                                        |
| Debug page buffers    | Discards one output buffer                                | Discards all output buffers that start after `Debug` is created           | Create `Debug` before the application starts its output buffers.           |

### Logger Adapter Constructor

In 0.4, the adapter kept the bar that you gave to its constructor. `Debug::getBar()` returns `null` before the bar boots. An adapter that you created before the boot kept `null`, and the bar got no log entries. In 1.0.0, the adapter has no constructor argument. It reads the active bar each time the logger writes.

```php
<?php

use Phalcon\DebugBar\Debug;
use Phalcon\DebugBar\Logger\Adapter;

// 0.4
$logger->addAdapter('debugbar', new Adapter(Debug::getBar()));
```

```php
<?php

use Phalcon\DebugBar\Logger\Adapter;

// 1.0.0
$logger->addAdapter('debugbar', new Adapter());
```

### Built-in Collector Events

In 0.4, the `cache`, `database`, `exceptions`, `route` and `view` collectors implemented `Contracts\Subscriber`, and the provider called their `subscribe()` methods. In 1.0.0, these collectors have no `subscribe()` method and no framework event names. The bridges read the events and send the data to the collectors. The providers attach the bridges. If you use a provider, you do not have to do anything.

If you used a built-in collector without a provider, attach the bridges to your events manager:

```php
<?php

use Phalcon\DebugBar\Mvc\Bridge;
use Phalcon\DebugBar\ServiceBridge;

(new ServiceBridge($bar))->subscribe($eventsManager);
(new Bridge($bar))->subscribe($eventsManager);
```

You can also send data to these collectors through their public methods. They do not need an events manager:

| Collector             | Methods                                                                   |
|-----------------------|---------------------------------------------------------------------------|
| `CacheCollector`      | `addOperation(string $operation, string $key)`                            |
| `DatabaseCollector`   | `startQuery()`, `finishQuery(string $sql, array $bindings = [])`          |
| `RouteCollector`      | `setRoute(array\|Closure $route)`                                         |
| `ViewCollector`       | `startRender(string $path)`, `finishRender()`                             |

For the `exceptions` collector, use `Debug::addException()`.

### Custom Collector Changes

`DebugBar::addCollector()` now calls `subscribe()` on a collector that implements `Contracts\Subscriber`, when the bar has an events manager. If your 0.4 code called `subscribe()` on a custom collector, remove that call. If you do not remove it, the listeners attach two times, and the panel shows each row two times.

```php
<?php

use Phalcon\DebugBar\Debug;

// 0.4
$collector = new OrdersCollector();
$collector->subscribe($eventsManager);
Debug::getBar()?->addCollector($collector);

// 1.0.0
Debug::getBar()?->addCollector(new OrdersCollector());
```

In 0.4, the bar put a string panel into the page as HTML. In 1.0.0, it shows a string panel as text. A custom collector that returns HTML must set the `html` panel type. Escape each value in the HTML.

```php
<?php

use Phalcon\DebugBar\Collector\AbstractCollector;

final class ReportCollector extends AbstractCollector
{
    public const NAME = 'report';

    protected string $label = 'Report';

    protected string $panel = 'html';

    public function collect(): array
    {
        return [
            'panel' => '<strong>' . htmlspecialchars('Orders: 12', ENT_QUOTES, 'UTF-8') . '</strong>',
            'badge' => null,
        ];
    }
}
```

`AbstractCollector` has no `$icon` property, and a collector does not send `widget.icon`. The browser did not read them in 0.4. A property `$icon` in your collector has no effect. Remove it.

### Blocked Environments

In 0.4, `env.blocked` replaced the default list (`production` and `prod`). A configuration of `['blocked' => ['staging']]` did not block `production`. In 1.0.0, `production` and `prod` are always blocked, and `env.blocked` adds values to them. The compare trims the values and is not case-sensitive.

```php
<?php

use Phalcon\DebugBar\Provider;

// 0.4: this blocks only `staging`.
// 1.0.0: this blocks `production`, `prod` and `staging`.
(new Provider($application, [
    'env' => ['blocked' => ['staging']],
]))->boot();
```

You cannot show the bar in an environment named `production` or `prod`.

### Wider Redaction

In 0.4, a masked or hidden key matched only a key with the same name. In 1.0.0, it also matches the word parts of a key. For example, `token` now masks `reset_token` and `accessToken`. The default masked keys now also include `passwd`, `php-auth`, `pw` and `pwd`. The `logger` collector redacts the log context, and the `request` panel redacts the query of the URI.

Some values that showed in 0.4 now show `***`. To show a value again, add a pattern to `redact.unmask`. Refer to [Showing Masked Values](#showing-masked-values).

```php
<?php

use Phalcon\DebugBar\Provider;

(new Provider($application, [
    'redact' => ['unmask' => ['primary_key', 'cache_key*']],
]))->boot();
```

### New in 1.0.0

These features are new. They need no change to your 0.4 code:

- [ADR applications](#adr-applications), with the `database`, `route`, `view`, `cache` and `exceptions` panels.
- The [debug page for server errors](#debug-page-for-server-errors) in ADR applications, with the `debug_page` key.
- [Hosts with no events manager](#hosts-with-no-events-manager), with `Phalcon\DebugBar\Core`.
- [Request history](#request-history).
- The `memory` collector, and the `time` and `memory` indicators.
- The [database summary](#database-summary).
- The [row limit](#row-limit), with the `max_rows` key.
- The `redact.unmask` key.
- `Phalcon\DebugBar\Logger\ExceptionAdapter`.
- `Phalcon\DebugBar\Exceptions\InvalidConfig` and `Phalcon\DebugBar\Exceptions\StorageNotWritable`. All exceptions of the bar implement `Phalcon\DebugBar\Contracts\DebugBarThrowable`.
- The exceptions of the debug page implement `Phalcon\Debug\Contracts\DebugThrowable`.

## Example: Vökuró

The [Vökuró][vokuro] sample application uses the debug bar. It registers one events manager as a shared service, and it gives this events manager to the database, view, router and dispatcher providers. A provider then boots the bar for the MVC application. Use it as a working example of the MVC setup.

[adr]: /5.24/adr/
[adr-error-responder]: /5.24/adr-error-responder/
[changelog]: https://github.com/phalcon/debugbar/blob/master/CHANGELOG.md
[datamapper]: /5.24/datamapper/
[logger]: /5.24/logger/
[support-debug]: /5.24/support-debug/
[vokuro]: /5.24/tutorial-vokuro/

Source: https://docs.phalcon.io/5.24/debug-bar/index.mdx
