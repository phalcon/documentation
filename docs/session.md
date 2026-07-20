# Session

- - -

## Overview

Sessions are used in PHP to persist data between requests. This enables developers to build better applications and increase the user experience. A very common usage of sessions is to keep whether a user is logged in or not. [Phalcon\Session\Manager][session-manager] is an object-oriented approach to handling sessions using Phalcon. There are several reasons to use this component instead of raw sessions or accessing the `$_SESSION` superglobal:

- You can isolate session data across applications on the same domain
- Intercept where session data is set/get in your application
- Change the session adapter according to the application needs

## Manager

[Phalcon\Session\Manager][session-manager] is a component that allows you to manipulate sessions in your application. This manager accepts an adapter which is the way the data will be communicated to a particular store.

!!! warning "WARNING"

    PHP uses the term `handler` for the component that will be responsible for storing and retrieving the data. In `Phalcon\Session\Manager` we use the term `adapter`. So in order to set a _handler_ in your session, for `Phalcon\Session\Manager` you need to call `setAdapter()`. The functionality is the same.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session->setAdapter($files);
```

First, we need to create an adapter object. The object can be one of the adapters distributed with Phalcon (see below) but it can also be an object that implements [SessionHandlerInterface][sessionhandlerinterface]. Once we instantiate the new [Phalcon\Session\Manager][session-manager] object and pass the adapter in it. After that, you can start working with the session.

### Constructor

```php
public function __construct(array $options = [])
```

The constructor accepts an array of options that relate to the session. You can set a unique ID for your session using `uniqueId` as a key and your chosen ID string. This allows you to create more than one of these objects, each with its own unique ID, if necessary. This parameter is optional, but it is advisable to set it always. Doing so will help you with potential session leaks.

### Start

In order to work with the session, you need to start it. `start()` performs this task. Usually, this call is made when the component is registered or at the very top of your application's workflow. `start()` returns a boolean value indicating success or failure.

!!! info "NOTE"

    - If the session has already started, the call will return `true`.
    - If any headers have been sent, it will return `false`
    - If the adapter is not set, it will throw an exception
    - It will return the result of `session_start()`

Before starting the session, `start()` checks the session cookie sent by the client. A cookie value containing characters outside the PHP session ID alphabet (`a-z`, `A-Z`, `0-9`, `,`, `-`) is discarded, so `session_start()` generates a new ID.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session->setAdapter($files);

$session->start();
```

### Destroy

Similarly, you can call `destroy()` to kill the session. Usually, this happens when a user logs out.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session
    ->setAdapter($files)
    ->start();

// ....

$session->destroy();
```

### Exists

To check if your session has started, you can use `exists()`

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

var_dump(
    $session->exists()
);
// `false`

$session
    ->setAdapter($files)
    ->start();

var_dump(
    $session->exists()
);
// `true`
```

### Regenerate Id

[Phalcon\Session\Manager][session-manager] supports regenerating the session id. This allows you to replace the current session ID with a new one and keep the current session information intact. To achieve this you can call `regenerateId()`. The method also accepts a `bool` parameter, which if `true` will instruct the component to remove the old session file.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();

$session->regenerateId();
```

### Get

You can use `get()` to retrieve the contents stored in the session for a particular element passed as a string parameter. The component also supports the magic getter, so you can retrieve it as a property of the manager.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();

echo $session->get('userId');
echo $session->userId;
```

### Has

You can use `has()` to check whether a particular element is stored in your session. The component also supports the magic `__isset`, allowing you to use PHP's `isset()` method if you want.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();

echo $session->has('userId');
var_dump(
    isset($session->userId)
);
```

### Id

You can also set the session id. The session id is set in an HTTP cookie. You can set the name by calling `setId()`. `getId()` is used to retrieve the session id.

!!! info "NOTE"

    You need to call this method before calling `start()` for the id to take effect

The id must use the PHP session ID alphabet (`a-z`, `A-Z`, `0-9`, `,`, `-`). An id containing any other character is rejected with `Phalcon\Session\Exceptions\InvalidSessionId`, matching the validation `start()` already performs on the session cookie.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session
    ->setAdapter($files)
    ->setId('phalcon-id')
    ->start();

echo $session->getId(); // 'phalcon-id'
```

### Name

Each session can have a name. The session name is set in an HTTP cookie. If this is not set, the `session.name` `php.ini` setting is used. You can set the name by calling `setName()`. `getName()` is used to retrieve the session name.

!!! info "NOTE"

    You need to call this method before calling `start()` for the name to take effect

The name must contain only letters, numbers, underscores, or hyphens, and cannot consist only of digits. A name that breaks either rule is rejected with `Phalcon\Session\Exceptions\InvalidSessionName`.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session
    ->setAdapter($files)
    ->setName('phalcon-app')
    ->start();

echo $session->getName(); // 'phalcon-app'
```

### Options

You can set options for the manager by using `setOptions()`. The method accepts an array and in it, you can set the `uniqueId` for the session. To get the options you can call `getOptions()` which will return the array of options stored in the manager.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager('id-1');
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session
    ->setAdapter($files)
    ->start();

$session->setOptions(
    [
        'uniqueId' => 'id-2'
    ]   
);
```

In the above example, after `setOptions()` is called with a new `uniqueId`, data will be stored using `id-2` now and anything stored before that will not be accessible until you change the key back to `id-1`.

### Set

You can use `set()` to store contents in your session. The method accepts a `string` as the name of the element and the value to be stored. The component also supports the magic setter, so you can set it as a property of the manager.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();

$session->set('userId', 12345);
$session->userId = 12345;
```

### Remove

To remove a stored element in the session, you need to call `remove()` with the name of the element. The component also supports the magic `__unset` so you can use PHP's `unset()` method if you want.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();

$session->remove('userId');
unset($session->userId);
```

## Adapters

### Libmemcached

[Phalcon\Session\Adapter\Libmemcached][session-adapter-libmemcached] uses the [Phalcon\Storage\Adapter\Libmemcached][storage-adapter-libmemcached] internally to store data in Memcached. In order to use this adapter you need the settings for Memcached and a [Phalcon\Storage\AdapterFactory][storage-adapter] object in order for the adapter to be created internally.

The adapter sets the storage key prefix to `sess-memc-` and disables the storage adapters' prefix stripping (`stripPrefix` is set to `false` unless supplied): session ids are externally generated, so an id that happens to start with the prefix text must not address the same record as another session.

The available options for Memcached are:

| Name      | Description          |
|-----------|----------------------|
| `client`  | client settings      |
| `servers` | array of server data |

The `servers` option is an array that contains the following options:

| Name     | Description               |
|----------|---------------------------|
| `host`   | the host                  |
| `port`   | the port                  |
| `weight` | the weight for the server | 

```php
<?php

use Phalcon\Session\Adapter\Libmemcached;
use Phalcon\Session\Manager;
use Phalcon\Storage\AdapterFactory;
use Phalcon\Storage\SerializerFactory;

$options = [
    'client'  => [],
    'servers' => [
        [
            'host'   => '127.0.0.1',
            'port'   => 11211,
            'weight' => 0,
        ],
    ],
];

$session           = new Manager();
$serializerFactory = new SerializerFactory();
$factory           = new AdapterFactory($serializerFactory);
$libmemcached      = new Libmemcached($factory, $options);

$session
    ->setAdapter($libmemcached)
    ->start();
```

### Noop

[Phalcon\Session\Adapter\Noop][session-adapter-noop] is an "empty" or `null` adapter. It can be used for testing, a joke for your colleagues, or any other purpose that no session needs to be invoked.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Noop;

$session = new Manager();
$session
    ->setAdapter(new Noop())
    ->start();
```

### Redis

[Phalcon\Session\Adapter\Redis][session-adapter-redis] uses the [Phalcon\Storage\Adapter\Redis][storage-adapter-redis] internally to store data in Redis. In order to use this adapter you need the settings for Redis and a [Phalcon\Storage\AdapterFactory][storage-adapter] object in order for the adapter to be created internally.

The adapter sets the storage key prefix to `sess-reds-` and disables the storage adapters' prefix stripping (`stripPrefix` is set to `false` unless supplied): session ids are externally generated, so an id that happens to start with the prefix text must not address the same record as another session.

The available options for Redis are:

| Name             | Description                                                      |
|------------------|------------------------------------------------------------------|
| `host`           | the host                                                         |
| `port`           | the port                                                         |
| `index`          | the index                                                        |
| `persistent`     | whether to persist connections or not                            |
| `auth`           | authentication parameters                                        |
| `socket`         | socket connection                                                |
| `lockingEnabled` | enable session locking (see [Session Locking](#session-locking)) |
| `lockExpiry`     | lifetime of the session lock in seconds                          |
| `lockRetries`    | maximum number of lock acquisition attempts                      |
| `lockWaitTime`   | microseconds to pause between lock acquisition attempts          |

```php
<?php

use Phalcon\Session\Adapter\Redis;
use Phalcon\Session\Manager;
use Phalcon\Storage\AdapterFactory;
use Phalcon\Storage\SerializerFactory;

$options = [
    'host'  => '127.0.0.1',
    'port'  => 6379,
    'index' => '1',
];

$session           = new Manager();
$serializerFactory = new SerializerFactory();
$factory           = new AdapterFactory($serializerFactory);
$redis             = new Redis($factory, $options);

$session
    ->setAdapter($redis)
    ->start();
```

### Stream

This adapter is the most common one, storing the session files on the file system. You need to create a [Phalcon\Session\Adapter\Stream][session-adapter-stream] adapter with the `savePath` defined in the options. The path needs to be writeable by the web server, otherwise your sessions will not work.

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();
```

### Custom

The adapters implement PHP's [SessionHandlerInterface][sessionhandlerinterface] and [SessionUpdateTimestampHandlerInterface][sessionupdatetimestamphandlerinterface] (see [Lazy Write](#lazy-write)). You can create any adapter you need by implementing [SessionHandlerInterface][sessionhandlerinterface], and you can set any adapter that implements this interface to [Phalcon\Session\Manager][session-manager]. There are more adapters available for this component in the [Phalcon Incubator][incubator].

```php
<?php

namespace MyApp\Session\Adapter;

use SessionHandlerInterface;

class Custom implements SessionHandlerInterface
{
    public function close(): bool
    {
        // ...
    }

    public function destroy(string $id): bool
    {
        // ...
    }

    public function gc(int $max_lifetime): int | false
    {
        // ...
    }

    public function open(string $path, string $name): bool
    {
        // ...
    }

    public function read(string $id): string
    {
        // ...
    }

    public function write(string $id, string $data): bool
    {
        // ...
    }
}
```

### Lazy Write

Every adapter shipped with the component also implements PHP's [SessionUpdateTimestampHandlerInterface][sessionupdatetimestamphandlerinterface]. The interface adds two methods, `updateTimestamp()` and `validateId()`, and PHP activates two session features when the registered handler provides them.

`session.lazy_write` (enabled by default in PHP): when the session data has not changed by the end of the request, PHP calls `updateTimestamp()` instead of `write()`.

- `Stream` touches the session file: the modification time is refreshed without rewriting the data, so `gc()` does not remove sessions that are active but unchanged
- `Redis` and `Libmemcached` delegate to `write()`, refreshing the lifetime of the stored entry
- `Noop` returns `true` without storing anything

`session.use_strict_mode`: when enabled, PHP calls `validateId()` for a session id supplied by the client before accepting it. An id with no stored session is rejected and PHP generates a new one, preventing session fixation through attacker-chosen ids.

- `Stream` reports whether the session file exists
- `Redis` and `Libmemcached` report whether the storage entry exists
- `Noop` accepts every id

```php
<?php

use Phalcon\Session\Adapter\Stream;
use Phalcon\Session\Manager;

ini_set('session.lazy_write', '1');
ini_set('session.use_strict_mode', '1');

$session = new Manager();
$files   = new Stream(
    [
        'savePath' => '/tmp',
    ]
);

$session
    ->setAdapter($files)
    ->start();

// Read-only request: the data is unchanged at shutdown, so PHP calls
// updateTimestamp() - the session file is touched, not rewritten.
$userId = $session->get('userId');
```

To change how an adapter refreshes an unchanged session, extend it and override `updateTimestamp()`. Returning `true` without touching the storage leaves the last-modified time under the control of your application. Note that the `Stream` adapter's `gc()` removes session files whose modification time is older than the configured lifetime; an overridden `updateTimestamp()` that does not touch the file must account for that.

### Session Locking

The [Phalcon\Session\Adapter\Redis][session-adapter-redis] adapter can serialize concurrent requests that share a session id. Without locking, two requests arriving with the same session cookie both read the session data when they start and both write it back when they finish; the request finishing last overwrites whatever the other one wrote. PHP's `files` handler prevents this by locking the session file for the duration of the request; a storage backend such as Redis offers no equivalent protection by default.

- `Redis` supports locking through the constructor options listed below
- `Libmemcached`, `Stream` and `Noop` do not implement locking
- The session locking offered by the phpredis extension (`redis.session.locking_enabled`) applies only to its own handler (`session.save_handler = redis`) and has no effect on this adapter

Locking is disabled by default and is enabled with the `lockingEnabled` constructor option. When enabled, `read()` acquires a per-session lock before returning the session data, and `close()` or `destroy()` releases it, so the lock is held for the lifetime of the request. A second request for the same session id waits at `read()` until the lock is released or its retries run out. The available options are:

| Name             | Default | Description                                        |
|------------------|---------|----------------------------------------------------|
| `lockingEnabled` | `false` | enable session locking                             |
| `lockExpiry`     | `30`    | lifetime of the lock in seconds                    |
| `lockRetries`    | `100`   | maximum number of acquisition attempts             |
| `lockWaitTime`   | `50000` | microseconds to pause between acquisition attempts |

```php
<?php

use Phalcon\Session\Adapter\Redis;
use Phalcon\Session\Manager;
use Phalcon\Storage\AdapterFactory;
use Phalcon\Storage\SerializerFactory;

$options = [
    'host'           => '127.0.0.1',
    'port'           => 6379,
    'index'          => '1',
    'lockingEnabled' => true,
    'lockExpiry'     => 60,
];

$session           = new Manager();
$serializerFactory = new SerializerFactory();
$factory           = new AdapterFactory($serializerFactory);
$redis             = new Redis($factory, $options);

$session
    ->setAdapter($redis)
    ->start();
```

The lock is a Redis key derived from the session id - `sess-reds-<id>-lock` with the default prefix - created with `SET NX EX`. The key carries a lifetime of `lockExpiry` seconds, so a process that dies without releasing the lock cannot block the session past that point. The lock is not refreshed while the request runs, so a request that outlives `lockExpiry` loses its lock silently. Set `lockExpiry` higher than the longest expected request time: when the lock expires while its request is still running, another request can acquire it and the protection lapses for that overlap.

Each acquisition stores a unique token in the lock key and the release deletes the key only when the token still matches. An adapter whose lock has already expired therefore cannot remove a lock acquired by another request in the meantime.

When the lock cannot be acquired after `lockRetries` attempts - five seconds in total with the default values - `read()` throws `Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError` and the session does not start.

## Bag

[Phalcon\Session\Bag][session-bag] is a component that helps to separate session data into `namespaces`. This way you can create groups of session variables for your application. Setting data in the bag stores them automatically in the session:

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Session\Bag as SessionBag;
use Phalcon\Session\Manager as SessionManager;
use Phalcon\Session\Adapter\Stream as SessionAdapter;

$container = new Di();
$adapter = new SessionAdapter();
$session = new SessionManager();
$session->setAdapter($adapter);
$user      = new SessionBag($session, 'user');

$user->setDI($container);

$user->name     = 'Dark Helmet';
$user->password = 12345;
```

The bag accepts any [Phalcon\Session\ManagerInterface][session-managerinterface] implementation. The DI container is captured from the manager only when the manager provides a `getDI()` method - the supplied [Phalcon\Session\Manager][session-manager] does - so managers implementing only the interface can be used as well. A container can always be assigned explicitly with `setDI()`, as shown above.

!!! warning "NOTE"

    The bag reads its data from the session once, when it is constructed, and writes the whole group back on every change. Construct the bag after the session has started; a bag constructed before `start()` begins empty and its writes are not persisted.

## Dependency Injection

If you use the [Phalcon\Di\FactoryDefault][di-factorydefault] container you can register your session manager. An example of the registration of the service as well as accessing it is below:

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$container = new Di();

$container->set(
    'session',
    function () {
        $session = new Manager();
        $files = new Stream(
            [
                'savePath' => '/tmp',
            ]
        );

        $session
            ->setAdapter($files)
            ->start();

        return $session;
    }
);
```

After registering the manager you can access your session from controllers, views, or any other components that extend [Phalcon\Di\Injectable][di-injectable] as follows:

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Session\Manager;

/**
 * @property Manager $session
 */
class InvoicesController extends Controller
{
    public function indexAction()
    {
        // Set a session variable
        $this->session->set('user-name', 'Dark Helmet');
    }
}
```

## Persistent Data

You can also inject the [Phalcon\Session\Bag][session-bag] component. Doing so will help you isolate variables for every class without polluting the session. The component is registered automatically using the `persistent` property name. Anything set in `$this->persist` will only be available in each class itself, whereas if data is set in the session manager will be available throughout the application.

In a controller:

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Session\Bag;
use Phalcon\Session\Manager;

/**
 * @property Bag     $persistent
 * @property Manager $session
 */
class InvoicesController extends Controller
{
    public function indexAction()
    {
        // Set a session variable
        $this->persistent->name = 'Dark Helmet';
        $this->session->name    = 'Princess Vespa';
    }

    public function echoAction()
    {
        // Set a session variable
        echo $this->persistent->name; // 'Dark Helmet';
        echo $this->session->name;    // 'Princess Vespa';
    }
}
```

In a component:

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Session\Bag;
use Phalcon\Session\Manager;

/**
 * @property Bag     $persistent
 * @property Manager $session
 */
class InvoicesController extends Controller
{
    public function indexAction()
    {
        // Set a session variable
        $this->persistent->name = 'President Skroob';
    }

    public function echoAction()
    {
        // Set a session variable
        echo $this->persistent->name; // 'President Skroob';
        echo $this->session->name;    // 'Princess Vespa';
    }
}
```

## Exceptions

Any exceptions thrown in the Session component will be of type [Phalcon\Session\Exception][session-exception]. You can use these exceptions to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Session\Exception;
use Phalcon\Session\Manager;
use Phalcon\Mvc\Controller;

/**
 * @property Manager $session
 */
class IndexController extends Controller
{
    public function index()
    {
        try {
            $this->session->set('key', 'value');
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }
}
```

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Session\Exception` so callers can catch a specific failure mode. Existing `catch (Phalcon\Session\Exception $e)` blocks continue to work unchanged.

| Class                                                    | Parent                      | Thrown when                                                                |
|----------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------|
| `Phalcon\Session\Exceptions\InvalidSessionAdapter`       | `Phalcon\Session\Exception` | The configured adapter does not implement `SessionHandlerInterface`.       |
| `Phalcon\Session\Exceptions\InvalidSessionId`            | `Phalcon\Session\Exception` | The session id passed to `setId()` contains invalid characters.            |
| `Phalcon\Session\Exceptions\InvalidSessionName`          | `Phalcon\Session\Exception` | The session name passed to `setName()` is not a valid identifier.          |
| `Phalcon\Session\Exceptions\SessionAlreadyStarted`       | `Phalcon\Session\Exception` | `start()` is called while a session is already active.                     |
| `Phalcon\Session\Exceptions\SessionModificationDenied`   | `Phalcon\Session\Exception` | A write is attempted on a session whose state does not allow modification. |
| `Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError` | `Phalcon\Session\Exception` | The underlying session adapter raises an unrecoverable I/O error, or the session lock cannot be acquired (see [Session Locking](#session-locking)). |
| `Phalcon\Session\Adapter\Exceptions\InvalidSavePath`     | `Phalcon\Session\Exception` | The configured save path is not a writable directory.                      |
| `Phalcon\Session\Adapter\Exceptions\SavePathUnavailable` | `Phalcon\Session\Exception` | The save path cannot be determined for the configured adapter.             |

[di-factorydefault]: api/phalcon_di.md#difactorydefault
[di-injectable]: api/phalcon_di.md#diinjectable
[incubator]: https://github.com/phalcon/incubator-session
[session-adapter-abstractadapter]: api/phalcon_session.md#sessionadapterabstractadapter
[session-adapter-libmemcached]: api/phalcon_session.md#sessionadapterlibmemcached
[session-adapter-noop]: api/phalcon_session.md#sessionadapternoop
[session-adapter-redis]: api/phalcon_session.md#sessionadapterredis
[session-adapter-stream]: api/phalcon_session.md#sessionadapterstream
[session-bag]: api/phalcon_session.md#sessionbag
[session-exception]: api/phalcon_session.md#sessionexception
[session-manager]: api/phalcon_session.md#sessionmanager
[session-managerinterface]: api/phalcon_session.md#sessionmanagerinterface
[sessionhandlerinterface]: https://www.php.net/manual/en/class.sessionhandlerinterface.php
[sessionupdatetimestamphandlerinterface]: https://www.php.net/manual/en/class.sessionupdatetimestamphandlerinterface.php
[storage-adapter]: api/phalcon_storage.md#storageadapterabstractadapter
[storage-adapter-libmemcached]: api/phalcon_storage.md#storageadapterlibmemcached
[storage-adapter-redis]: api/phalcon_storage.md#storageadapterredis
