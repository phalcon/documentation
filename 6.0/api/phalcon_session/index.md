---
title: "Phalcon Session"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Session

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Session\Adapter\AbstractAdapter

Abstract

- **`Phalcon\Session\Adapter\AbstractAdapter`** - implements `\SessionHandlerInterface`, `\SessionUpdateTimestampHandlerInterface`
  - [`Phalcon\Session\Adapter\Libmemcached`](#sessionadapterlibmemcached)
  - [`Phalcon\Session\Adapter\Redis`](#sessionadapterredis)

`Phalcon\Storage\Adapter\AdapterInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `SessionHandlerInterface` · `SessionUpdateTimestampHandlerInterface`

### Method Summary

- `public close(): bool` — Close

- `public destroy(string $id): bool` — Destroy

- `public gc(int $max_lifetime): false|int` — Garbage Collector

- `public open(string $path, string $name): bool` — Open

- `public read(string $id): string` — Read

- `public updateTimestamp(string $id, string $data): bool` — Refresh the session lifetime without changing the session data

- `public validateId(string $id): bool` — Validate the session id (used when strict mode is enabled)

- `public write(string $id, string $data): bool` — Write

### Properties

- `protected AdapterInterface $adapter`

### Methods

<h4 id="sessionadapterabstractadapter-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Close

<h4 id="sessionadapterabstractadapter-destroy"><code>destroy()</code></h4>

```php
public function destroy( string $id ): bool;
```

Destroy

<h4 id="sessionadapterabstractadapter-gc"><code>gc()</code></h4>

```php
public function gc( int $max_lifetime ): false|int;
```

Garbage Collector

<h4 id="sessionadapterabstractadapter-open"><code>open()</code></h4>

```php
public function open(
    string $path,
    string $name
): bool;
```

Open

<h4 id="sessionadapterabstractadapter-read"><code>read()</code></h4>

```php
public function read( string $id ): string;
```

Read

<h4 id="sessionadapterabstractadapter-updatetimestamp"><code>updateTimestamp()</code></h4>

```php
public function updateTimestamp(
    string $id,
    string $data
): bool;
```

Refresh the session lifetime without changing the session data

<h4 id="sessionadapterabstractadapter-validateid"><code>validateId()</code></h4>

```php
public function validateId( string $id ): bool;
```

Validate the session id (used when strict mode is enabled)

<h4 id="sessionadapterabstractadapter-write"><code>write()</code></h4>

```php
public function write(
    string $id,
    string $data
): bool;
```

Write


## Session\Adapter\Exceptions\AdapterRuntimeError

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError`**

`Phalcon\Session\Exception`


## Session\Adapter\Exceptions\InvalidSavePath

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Adapter\Exceptions\InvalidSavePath`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="sessionadapterexceptionsinvalidsavepath-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Session\Adapter\Exceptions\SavePathUnavailable

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Adapter\Exceptions\SavePathUnavailable`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="sessionadapterexceptionssavepathunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Session\Adapter\Libmemcached

Class

Phalcon\Session\Adapter\Libmemcached

- [`Phalcon\Session\Adapter\AbstractAdapter`](#sessionadapterabstractadapter)
  - **`Phalcon\Session\Adapter\Libmemcached`**

`Exception` · `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Storage\AdapterFactory`

### Method Summary

- `public __construct(AdapterFactory $factory, array $options = [])` — Libmemcached constructor.

### Methods

<h4 id="sessionadapterlibmemcached-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    AdapterFactory $factory,
    array $options = []
);
```

Libmemcached constructor.

]
],
'defaultSerializer' => 'Php',
'lifetime' => 3600,
'serializer' => null,
'prefix' => 'sess-memc-',
'stripPrefix' => false
]


## Session\Adapter\Noop

Class

Phalcon\Session\Adapter\Noop

This is an "empty" or null adapter. It can be used for testing or any
other purpose that no session needs to be invoked

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Noop;

$session = new Manager();
$session->setAdapter(new Noop());
```

- **`Phalcon\Session\Adapter\Noop`** - implements `\SessionHandlerInterface`, `\SessionUpdateTimestampHandlerInterface`
  - [`Phalcon\Session\Adapter\Stream`](#sessionadapterstream)

`SessionHandlerInterface` · `SessionUpdateTimestampHandlerInterface`

### Method Summary

- `public close(): bool` — Close

- `public destroy(string $id): bool` — Destroy

- `public gc(int $max_lifetime): false|int` — Garbage Collector

- `public open(string $path, string $name): bool` — Open

- `public read(string $id): string` — Read

- `public updateTimestamp(string $id, string $data): bool` — Refresh the session lifetime without changing the session data

- `public validateId(string $id): bool` — Validate the session id (used when strict mode is enabled)

- `public write(string $id, string $data): bool` — Write

### Methods

<h4 id="sessionadapternoop-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Close

<h4 id="sessionadapternoop-destroy"><code>destroy()</code></h4>

```php
public function destroy( string $id ): bool;
```

Destroy

<h4 id="sessionadapternoop-gc"><code>gc()</code></h4>

```php
public function gc( int $max_lifetime ): false|int;
```

Garbage Collector

<h4 id="sessionadapternoop-open"><code>open()</code></h4>

```php
public function open(
    string $path,
    string $name
): bool;
```

Open

<h4 id="sessionadapternoop-read"><code>read()</code></h4>

```php
public function read( string $id ): string;
```

Read

<h4 id="sessionadapternoop-updatetimestamp"><code>updateTimestamp()</code></h4>

```php
public function updateTimestamp(
    string $id,
    string $data
): bool;
```

Refresh the session lifetime without changing the session data

<h4 id="sessionadapternoop-validateid"><code>validateId()</code></h4>

```php
public function validateId( string $id ): bool;
```

Validate the session id (used when strict mode is enabled)

<h4 id="sessionadapternoop-write"><code>write()</code></h4>

```php
public function write(
    string $id,
    string $data
): bool;
```

Write


## Session\Adapter\Redis

Class

Phalcon\Session\Adapter\Redis

- [`Phalcon\Session\Adapter\AbstractAdapter`](#sessionadapterabstractadapter)
  - **`Phalcon\Session\Adapter\Redis`**

`Exception` · `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError` · `Phalcon\Storage\AdapterFactory` · `Redis`

### Method Summary

- `public __construct(AdapterFactory $factory, array $options = [])` — Constructor

- `public close(): bool` — Close - releases the session lock if one is held

- `public destroy(string $id): bool` — Destroy

- `public read(string $id): string` — Read

- `protected acquireLock(string $id): bool` — Tries to acquire the session lock, pausing `lockWaitTime` microseconds

- `protected releaseLock(): void` — Releases the session lock - only when this instance still owns it

### Properties

- `protected bool $lockAcquired = false`

- `protected int $lockExpiry = 30` — Lock time-to-live in seconds. The lock is not refreshed during the
  request: a request that runs longer than this expiry loses its lock
  silently and a concurrent request may then acquire it (the token-guarded
  release still avoids deleting the newer lock). Raise this above the
  longest expected request to retain the lock for the whole request.

- `protected string $lockKey = ""`

- `protected int $lockRetries = 100`

- `protected string $lockToken = ""`

- `protected int $lockWaitTime = 50000`

- `protected bool $lockingEnabled = false`

- `protected string $prefix = ""`

### Methods

<h4 id="sessionadapterredis-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    AdapterFactory $factory,
    array $options = []
);
```

Constructor

<h4 id="sessionadapterredis-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Close - releases the session lock if one is held

<h4 id="sessionadapterredis-destroy"><code>destroy()</code></h4>

```php
public function destroy( string $id ): bool;
```

Destroy

<h4 id="sessionadapterredis-read"><code>read()</code></h4>

```php
public function read( string $id ): string;
```

Read

<h4 id="sessionadapterredis-acquirelock"><code>acquireLock()</code></h4>

```php
protected function acquireLock( string $id ): bool;
```

Tries to acquire the session lock, pausing `lockWaitTime` microseconds
between attempts, up to `lockRetries` times

<h4 id="sessionadapterredis-releaselock"><code>releaseLock()</code></h4>

```php
protected function releaseLock(): void;
```

Releases the session lock - only when this instance still owns it


## Session\Adapter\Stream

Class

Phalcon\Session\Adapter\Stream

This is the file based adapter. It stores sessions in a file based system

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

- [`Phalcon\Session\Adapter\Noop`](#sessionadapternoop)
  - **`Phalcon\Session\Adapter\Stream`**

`Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError` · `Phalcon\Session\Adapter\Exceptions\InvalidSavePath` · `Phalcon\Session\Adapter\Exceptions\SavePathUnavailable` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Php\IniTrait` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`

### Method Summary

- `public __construct(array $options = [])` — Constructor

- `public destroy(string $id): bool`

- `public gc(int $max_lifetime): false|int` — Garbage Collector

- `public open(string $path, string $name): bool` — Ignore the savePath and use local defined path

- `public read(string $id): string` — Reads data from the adapter

- `public updateTimestamp(string $id, string $data): bool` — Refresh the session file modification time without changing its data

- `public validateId(string $id): bool` — Validate the session id (used when strict mode is enabled)

- `public write(string $id, string $data): bool`

- `protected getGlobFiles(string $pattern): array|false` — Gets the glob array or returns false on failure

- `protected getPrefixedName(mixed $name): string` — Helper method to get the name prefixed

### Properties

- `protected array $options = []` — Session options

- `protected string $prefix = ""` — Session prefix

### Methods

<h4 id="sessionadapterstream-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="sessionadapterstream-destroy"><code>destroy()</code></h4>

```php
public function destroy( string $id ): bool;
```

<h4 id="sessionadapterstream-gc"><code>gc()</code></h4>

```php
public function gc( int $max_lifetime ): false|int;
```

Garbage Collector

<h4 id="sessionadapterstream-open"><code>open()</code></h4>

```php
public function open(
    string $path,
    string $name
): bool;
```

Ignore the savePath and use local defined path

<h4 id="sessionadapterstream-read"><code>read()</code></h4>

```php
public function read( string $id ): string;
```

Reads data from the adapter

<h4 id="sessionadapterstream-updatetimestamp"><code>updateTimestamp()</code></h4>

```php
public function updateTimestamp(
    string $id,
    string $data
): bool;
```

Refresh the session file modification time without changing its data

<h4 id="sessionadapterstream-validateid"><code>validateId()</code></h4>

```php
public function validateId( string $id ): bool;
```

Validate the session id (used when strict mode is enabled)

<h4 id="sessionadapterstream-write"><code>write()</code></h4>

```php
public function write(
    string $id,
    string $data
): bool;
```

<h4 id="sessionadapterstream-getglobfiles"><code>getGlobFiles()</code></h4>

```php
protected function getGlobFiles( string $pattern ): array|false;
```

Gets the glob array or returns false on failure

<h4 id="sessionadapterstream-getprefixedname"><code>getPrefixedName()</code></h4>

```php
protected function getPrefixedName( mixed $name ): string;
```

Helper method to get the name prefixed


## Session\Bag

Class

This component helps to separate session data into "namespaces". Working by
this way you can easily create groups of session variables into the
application

```php
$user = new \Phalcon\Session\Bag("user");

$user->name = "Kimbra Johnson";
$user->age  = 22;
```

@property DiInterface|null $container
@property string           $name
@property ManagerInterface $session;

@extends Collection&lt;mixed>

- [`Phalcon\Support\Collection`](/6.0/api/phalcon_support/#supportcollection)
  - **`Phalcon\Session\Bag`** - implements [`Phalcon\Session\BagInterface`](#sessionbaginterface), [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface)

`Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Support\Collection`

### Method Summary

- `public __construct(ManagerInterface $session, string $name)`

- `public clear(): void` — Destroys the session bag

- `public getDI(): DiInterface|null` — Returns the DependencyInjector container

- `public init(array $data = []): void` — Initialize internal array

- `public remove(string $element): void` — Removes a property from the internal bag

- `public set(string $element, mixed $value): void` — Sets a value in the session bag

- `public setDI(DiInterface $container): void` — Sets the DependencyInjector container

### Methods

<h4 id="sessionbag-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    ManagerInterface $session,
    string $name
);
```

<h4 id="sessionbag-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Destroys the session bag

<h4 id="sessionbag-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface|null;
```

Returns the DependencyInjector container

<h4 id="sessionbag-init"><code>init()</code></h4>

```php
public function init( array $data = [] ): void;
```

Initialize internal array

<h4 id="sessionbag-remove"><code>remove()</code></h4>

```php
public function remove( string $element ): void;
```

Removes a property from the internal bag

<h4 id="sessionbag-set"><code>set()</code></h4>

```php
public function set(
    string $element,
    mixed $value
): void;
```

Sets a value in the session bag

<h4 id="sessionbag-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container


## Session\BagInterface

Interface

Interface for Phalcon\Session\Bag

- **`Phalcon\Session\BagInterface`**

`Phalcon\Contracts\Session\SessionTypes`

### Method Summary

- `public __get(string $element): mixed`

- `public __isset(string $element): bool`

- `public __set(string $element, mixed $value): void`

- `public __unset(string $element): void`

- `public clear(): void`

- `public get(string $element, mixed $defaultValue = null, string|null $cast = null): mixed`

- `public has(string $element): bool`

- `public init(array $data = []): void`

- `public remove(string $element): void`

- `public set(string $element, mixed $value): void`

### Methods

<h4 id="sessionbaginterface-__get"><code>__get()</code></h4>

```php
public function __get( string $element ): mixed;
```

<h4 id="sessionbaginterface-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $element ): bool;
```

<h4 id="sessionbaginterface-__set"><code>__set()</code></h4>

```php
public function __set(
    string $element,
    mixed $value
): void;
```

<h4 id="sessionbaginterface-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $element ): void;
```

<h4 id="sessionbaginterface-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

<h4 id="sessionbaginterface-get"><code>get()</code></h4>

```php
public function get(
    string $element,
    mixed $defaultValue = null,
    string|null $cast = null
): mixed;
```

<h4 id="sessionbaginterface-has"><code>has()</code></h4>

```php
public function has( string $element ): bool;
```

<h4 id="sessionbaginterface-init"><code>init()</code></h4>

```php
public function init( array $data = [] ): void;
```

<h4 id="sessionbaginterface-remove"><code>remove()</code></h4>

```php
public function remove( string $element ): void;
```

<h4 id="sessionbaginterface-set"><code>set()</code></h4>

```php
public function set(
    string $element,
    mixed $value
): void;
```


## Session\Exception

Class

Phalcon\Session\Exception

Exceptions thrown in Phalcon\Session will use this class

- `\Exception`
  - **`Phalcon\Session\Exception`**
    - [`Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError`](#sessionadapterexceptionsadapterruntimeerror)
    - [`Phalcon\Session\Adapter\Exceptions\InvalidSavePath`](#sessionadapterexceptionsinvalidsavepath)
    - [`Phalcon\Session\Adapter\Exceptions\SavePathUnavailable`](#sessionadapterexceptionssavepathunavailable)
    - [`Phalcon\Session\Exceptions\InvalidSessionAdapter`](#sessionexceptionsinvalidsessionadapter)
    - [`Phalcon\Session\Exceptions\InvalidSessionId`](#sessionexceptionsinvalidsessionid)
    - [`Phalcon\Session\Exceptions\InvalidSessionName`](#sessionexceptionsinvalidsessionname)
    - [`Phalcon\Session\Exceptions\SessionAlreadyStarted`](#sessionexceptionssessionalreadystarted)
    - [`Phalcon\Session\Exceptions\SessionModificationDenied`](#sessionexceptionssessionmodificationdenied)


## Session\Exceptions\InvalidSessionAdapter

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Exceptions\InvalidSessionAdapter`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="sessionexceptionsinvalidsessionadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Session\Exceptions\InvalidSessionId

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Exceptions\InvalidSessionId`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="sessionexceptionsinvalidsessionid-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Session\Exceptions\InvalidSessionName

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Exceptions\InvalidSessionName`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="sessionexceptionsinvalidsessionname-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Session\Exceptions\SessionAlreadyStarted

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Exceptions\SessionAlreadyStarted`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="sessionexceptionssessionalreadystarted-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Session\Exceptions\SessionModificationDenied

Class

- `\Exception`
  - [`Phalcon\Session\Exception`](#sessionexception)
    - **`Phalcon\Session\Exceptions\SessionModificationDenied`**

`Phalcon\Session\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="sessionexceptionssessionmodificationdenied-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Session\Manager

Class

Session manager class

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Session\Manager`** - implements [`Phalcon\Session\ManagerInterface`](#sessionmanagerinterface)

`Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Session\Exceptions\InvalidSessionAdapter` · `Phalcon\Session\Exceptions\InvalidSessionId` · `Phalcon\Session\Exceptions\InvalidSessionName` · `Phalcon\Session\Exceptions\SessionAlreadyStarted` · `Phalcon\Session\Exceptions\SessionModificationDenied` · `Phalcon\Traits\Php\HeaderTrait` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `SessionHandlerInterface`

### Method Summary

- `public __construct(array $options = [])` — Manager constructor.

- `public __get(string $key): mixed` — Alias: Gets a session variable from an application context

- `public __isset(string $key): bool` — Alias: Check whether a session variable is set in an application context

- `public __set(string $key, mixed $value): void` — Alias: Sets a session variable in an application context

- `public __unset(string $key): void` — Alias: Removes a session variable from an application context

- `public destroy(): void` — Destroy/end a session

- `public exists(): bool` — Check whether the session has been started

- `public get(string $key, mixed $defaultValue = null, bool $remove = false): mixed` — Gets a session variable from an application context

- `public getAdapter(): SessionHandlerInterface|null` — Returns the stored session adapter

- `public getId(): string` — Returns the session id

- `public getName(): string` — Returns the name of the session

- `public getOptions(): array` — Get internal options

- `public has(string $key): bool` — Check whether a session variable is set in an application context

- `public regenerateId(bool $deleteOldSession = true): ManagerInterface` — Regenerates the session id via `session_regenerate_id()` (when the

- `public remove(string $key): void` — Removes a session variable from an application context

- `public set(string $key, mixed $value): void` — Sets a session variable in an application context

- `public setAdapter(SessionHandlerInterface $adapter): ManagerInterface` — Set the adapter for the session

- `public setId(string $sessionId): ManagerInterface` — Set session Id

- `public setName(string $name): ManagerInterface` — Set the session name. Throw exception if the session has started

- `public setOptions(array $options): void` — Sets session's options

- `public start(): bool` — Starts the session (if headers are already sent the session will not be

- `public status(): int` — Returns the status of the current session.

### Methods

<h4 id="sessionmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Manager constructor.

<h4 id="sessionmanager-__get"><code>__get()</code></h4>

```php
public function __get( string $key ): mixed;
```

Alias: Gets a session variable from an application context

<h4 id="sessionmanager-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $key ): bool;
```

Alias: Check whether a session variable is set in an application context

<h4 id="sessionmanager-__set"><code>__set()</code></h4>

```php
public function __set(
    string $key,
    mixed $value
): void;
```

Alias: Sets a session variable in an application context

<h4 id="sessionmanager-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $key ): void;
```

Alias: Removes a session variable from an application context

<h4 id="sessionmanager-destroy"><code>destroy()</code></h4>

```php
public function destroy(): void;
```

Destroy/end a session

<h4 id="sessionmanager-exists"><code>exists()</code></h4>

```php
public function exists(): bool;
```

Check whether the session has been started

<h4 id="sessionmanager-get"><code>get()</code></h4>

```php
public function get(
    string $key,
    mixed $defaultValue = null,
    bool $remove = false
): mixed;
```

Gets a session variable from an application context

<h4 id="sessionmanager-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): SessionHandlerInterface|null;
```

Returns the stored session adapter

<h4 id="sessionmanager-getid"><code>getId()</code></h4>

```php
public function getId(): string;
```

Returns the session id

<h4 id="sessionmanager-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the name of the session

<h4 id="sessionmanager-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Get internal options

<h4 id="sessionmanager-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Check whether a session variable is set in an application context

<h4 id="sessionmanager-regenerateid"><code>regenerateId()</code></h4>

```php
public function regenerateId( bool $deleteOldSession = true ): ManagerInterface;
```

Regenerates the session id via `session_regenerate_id()` (when the
session is active). The registered save handler persists the data
under the new id.

<h4 id="sessionmanager-remove"><code>remove()</code></h4>

```php
public function remove( string $key ): void;
```

Removes a session variable from an application context

<h4 id="sessionmanager-set"><code>set()</code></h4>

```php
public function set(
    string $key,
    mixed $value
): void;
```

Sets a session variable in an application context

<h4 id="sessionmanager-setadapter"><code>setAdapter()</code></h4>

```php
public function setAdapter( SessionHandlerInterface $adapter ): ManagerInterface;
```

Set the adapter for the session

<h4 id="sessionmanager-setid"><code>setId()</code></h4>

```php
public function setId( string $sessionId ): ManagerInterface;
```

Set session Id

<h4 id="sessionmanager-setname"><code>setName()</code></h4>

```php
public function setName( string $name ): ManagerInterface;
```

Set the session name. Throw exception if the session has started
and do not allow poop names

<h4 id="sessionmanager-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): void;
```

Sets session's options

<h4 id="sessionmanager-start"><code>start()</code></h4>

```php
public function start(): bool;
```

Starts the session (if headers are already sent the session will not be
started)

<h4 id="sessionmanager-status"><code>status()</code></h4>

```php
public function status(): int;
```

Returns the status of the current session.


## Session\ManagerInterface

Interface

Interface for the Phalcon\Session\Manager

- **`Phalcon\Session\ManagerInterface`**

`InvalidArgumentException` · `Phalcon\Contracts\Session\SessionTypes` · `SessionHandlerInterface`

### Method Summary

- `public __get(string $key)` — Alias: Gets a session variable from an application context

- `public __isset(string $key): bool` — Alias: Check whether a session variable is set in an application context

- `public __set(string $key, mixed $value): void` — Alias: Sets a session variable in an application context

- `public __unset(string $key): void` — Alias: Removes a session variable from an application context

- `public destroy(): void` — Destroy/end a session

- `public exists(): bool` — Check whether the session has been started

- `public get(string $key, mixed $defaultValue = null, bool $remove = false): mixed` — Gets a session variable from an application context

- `public getAdapter(): SessionHandlerInterface|null` — Returns the stored session adapter

- `public getId(): string` — Returns the session id

- `public getName(): string` — Returns the name of the session

- `public getOptions(): array` — Get internal options

- `public has(string $key): bool` — Check whether a session variable is set in an application context

- `public regenerateId(bool $deleteOldSession = true): ManagerInterface` — Regenerates the session id using the adapter.

- `public remove(string $key): void` — Removes a session variable from an application context

- `public set(string $key, mixed $value): void` — Sets a session variable in an application context

- `public setAdapter(SessionHandlerInterface $adapter): ManagerInterface` — Set the adapter for the session

- `public setId(string $sessionId): ManagerInterface` — Set session Id

- `public setName(string $name): ManagerInterface` — Set the session name. Throw exception if the session has started

- `public setOptions(array $options): void` — Sets session's options

- `public start(): bool` — Starts the session (if headers are already sent the session will not be

- `public status(): int` — Returns the status of the current session.

### Constants

- `const int SESSION_ACTIVE = 2`

- `const int SESSION_DISABLED = 0`

- `const int SESSION_NONE = 1`

### Methods

<h4 id="sessionmanagerinterface-__get"><code>__get()</code></h4>

```php
public function __get( string $key );
```

Alias: Gets a session variable from an application context

<h4 id="sessionmanagerinterface-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $key ): bool;
```

Alias: Check whether a session variable is set in an application context

<h4 id="sessionmanagerinterface-__set"><code>__set()</code></h4>

```php
public function __set(
    string $key,
    mixed $value
): void;
```

Alias: Sets a session variable in an application context

<h4 id="sessionmanagerinterface-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $key ): void;
```

Alias: Removes a session variable from an application context

<h4 id="sessionmanagerinterface-destroy"><code>destroy()</code></h4>

```php
public function destroy(): void;
```

Destroy/end a session

<h4 id="sessionmanagerinterface-exists"><code>exists()</code></h4>

```php
public function exists(): bool;
```

Check whether the session has been started

<h4 id="sessionmanagerinterface-get"><code>get()</code></h4>

```php
public function get(
    string $key,
    mixed $defaultValue = null,
    bool $remove = false
): mixed;
```

Gets a session variable from an application context

<h4 id="sessionmanagerinterface-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): SessionHandlerInterface|null;
```

Returns the stored session adapter

<h4 id="sessionmanagerinterface-getid"><code>getId()</code></h4>

```php
public function getId(): string;
```

Returns the session id

<h4 id="sessionmanagerinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the name of the session

<h4 id="sessionmanagerinterface-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Get internal options

<h4 id="sessionmanagerinterface-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Check whether a session variable is set in an application context

<h4 id="sessionmanagerinterface-regenerateid"><code>regenerateId()</code></h4>

```php
public function regenerateId( bool $deleteOldSession = true ): ManagerInterface;
```

Regenerates the session id using the adapter.

<h4 id="sessionmanagerinterface-remove"><code>remove()</code></h4>

```php
public function remove( string $key ): void;
```

Removes a session variable from an application context

<h4 id="sessionmanagerinterface-set"><code>set()</code></h4>

```php
public function set(
    string $key,
    mixed $value
): void;
```

Sets a session variable in an application context

<h4 id="sessionmanagerinterface-setadapter"><code>setAdapter()</code></h4>

```php
public function setAdapter( SessionHandlerInterface $adapter ): ManagerInterface;
```

Set the adapter for the session

<h4 id="sessionmanagerinterface-setid"><code>setId()</code></h4>

```php
public function setId( string $sessionId ): ManagerInterface;
```

Set session Id

<h4 id="sessionmanagerinterface-setname"><code>setName()</code></h4>

```php
public function setName( string $name ): ManagerInterface;
```

Set the session name. Throw exception if the session has started
and do not allow poop names

<h4 id="sessionmanagerinterface-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): void;
```

Sets session's options

<h4 id="sessionmanagerinterface-start"><code>start()</code></h4>

```php
public function start(): bool;
```

Starts the session (if headers are already sent the session will not be
started)

<h4 id="sessionmanagerinterface-status"><code>status()</code></h4>

```php
public function status(): int;
```

Returns the status of the current session.

Source: https://docs.phalcon.io/6.0/api/phalcon_session/index.mdx
