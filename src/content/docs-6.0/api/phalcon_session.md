---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Session\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/AbstractAdapter.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Session\Adapter\AbstractAdapter`** - implements `\SessionHandlerInterface`, `\SessionUpdateTimestampHandlerInterface`
    - [`Phalcon\Session\Adapter\Libmemcached`](#sessionadapterlibmemcached)
    - [`Phalcon\Session\Adapter\Redis`](#sessionadapterredis)

</div>

__Uses__ `Phalcon\Storage\Adapter\AdapterInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `SessionHandlerInterface` · `SessionUpdateTimestampHandlerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapterabstractadapter-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Close</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-destroy">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">destroy</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Destroy</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-gc">
<code class="vis vis-public">public</code>
<code class="ret">false|int</code>
<code class="sig"><span class="sf">gc</span>( <span class="st">int</span> <span class="sv">$max_lifetime</span> )</code>
<span class="desc">Garbage Collector</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-open">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">open</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Open</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Read</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-updatetimestamp">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">updateTimestamp</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Refresh the session lifetime without changing the session data</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-validateid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validateId</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Validate the session id (used when strict mode is enabled)</span>
</a>
<a class="api-item" href="#sessionadapterabstractadapter-write">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Write</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sv">$adapter</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `close()` { #sessionadapterabstractadapter-close }

```php
public function close(): bool;
```

Close

#### `destroy()` { #sessionadapterabstractadapter-destroy }

```php
public function destroy( string $id ): bool;
```

Destroy

#### `gc()` { #sessionadapterabstractadapter-gc }

```php
public function gc( int $max_lifetime ): false|int;
```

Garbage Collector

#### `open()` { #sessionadapterabstractadapter-open }

```php
public function open(
    string $path,
    string $name
): bool;
```

Open

#### `read()` { #sessionadapterabstractadapter-read }

```php
public function read( string $id ): string;
```

Read

#### `updateTimestamp()` { #sessionadapterabstractadapter-updatetimestamp }

```php
public function updateTimestamp(
    string $id,
    string $data
): bool;
```

Refresh the session lifetime without changing the session data

#### `validateId()` { #sessionadapterabstractadapter-validateid }

```php
public function validateId( string $id ): bool;
```

Validate the session id (used when strict mode is enabled)

#### `write()` { #sessionadapterabstractadapter-write }

```php
public function write(
    string $id,
    string $data
): bool;
```

Write


## Session\Adapter\Exceptions\AdapterRuntimeError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Exceptions/AdapterRuntimeError.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }


## Session\Adapter\Exceptions\InvalidSavePath

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Exceptions/InvalidSavePath.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Adapter\Exceptions\InvalidSavePath`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapterexceptionsinvalidsavepath-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionadapterexceptionsinvalidsavepath-__construct }

```php
public function __construct();
```


## Session\Adapter\Exceptions\SavePathUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Exceptions/SavePathUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Adapter\Exceptions\SavePathUnavailable`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapterexceptionssavepathunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionadapterexceptionssavepathunavailable-__construct }

```php
public function __construct( string $path );
```


## Session\Adapter\Libmemcached

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Libmemcached.php){ .src-btn }

Phalcon\Session\Adapter\Libmemcached

<div class="api-tree" markdown>

- [`Phalcon\Session\Adapter\AbstractAdapter`](#sessionadapterabstractadapter)
    - **`Phalcon\Session\Adapter\Libmemcached`**

</div>

__Uses__ `Exception` · `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Storage\AdapterFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapterlibmemcached-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">AdapterFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Libmemcached constructor.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionadapterlibmemcached-__construct }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Noop.php){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Session\Adapter\Noop`** - implements `\SessionHandlerInterface`, `\SessionUpdateTimestampHandlerInterface`
    - [`Phalcon\Session\Adapter\Stream`](#sessionadapterstream)

</div>

__Uses__ `SessionHandlerInterface` · `SessionUpdateTimestampHandlerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapternoop-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Close</span>
</a>
<a class="api-item" href="#sessionadapternoop-destroy">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">destroy</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Destroy</span>
</a>
<a class="api-item" href="#sessionadapternoop-gc">
<code class="vis vis-public">public</code>
<code class="ret">false|int</code>
<code class="sig"><span class="sf">gc</span>( <span class="st">int</span> <span class="sv">$max_lifetime</span> )</code>
<span class="desc">Garbage Collector</span>
</a>
<a class="api-item" href="#sessionadapternoop-open">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">open</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Open</span>
</a>
<a class="api-item" href="#sessionadapternoop-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Read</span>
</a>
<a class="api-item" href="#sessionadapternoop-updatetimestamp">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">updateTimestamp</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Refresh the session lifetime without changing the session data</span>
</a>
<a class="api-item" href="#sessionadapternoop-validateid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validateId</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Validate the session id (used when strict mode is enabled)</span>
</a>
<a class="api-item" href="#sessionadapternoop-write">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Write</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `close()` { #sessionadapternoop-close }

```php
public function close(): bool;
```

Close

#### `destroy()` { #sessionadapternoop-destroy }

```php
public function destroy( string $id ): bool;
```

Destroy

#### `gc()` { #sessionadapternoop-gc }

```php
public function gc( int $max_lifetime ): false|int;
```

Garbage Collector

#### `open()` { #sessionadapternoop-open }

```php
public function open(
    string $path,
    string $name
): bool;
```

Open

#### `read()` { #sessionadapternoop-read }

```php
public function read( string $id ): string;
```

Read

#### `updateTimestamp()` { #sessionadapternoop-updatetimestamp }

```php
public function updateTimestamp(
    string $id,
    string $data
): bool;
```

Refresh the session lifetime without changing the session data

#### `validateId()` { #sessionadapternoop-validateid }

```php
public function validateId( string $id ): bool;
```

Validate the session id (used when strict mode is enabled)

#### `write()` { #sessionadapternoop-write }

```php
public function write(
    string $id,
    string $data
): bool;
```

Write


## Session\Adapter\Redis

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Redis.php){ .src-btn }

Phalcon\Session\Adapter\Redis

<div class="api-tree" markdown>

- [`Phalcon\Session\Adapter\AbstractAdapter`](#sessionadapterabstractadapter)
    - **`Phalcon\Session\Adapter\Redis`**

</div>

__Uses__ `Exception` · `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError` · `Phalcon\Storage\AdapterFactory` · `Redis`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapterredis-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">AdapterFactory</span> <span class="sv">$factory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#sessionadapterredis-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Close - releases the session lock if one is held</span>
</a>
<a class="api-item" href="#sessionadapterredis-destroy">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">destroy</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Destroy</span>
</a>
<a class="api-item" href="#sessionadapterredis-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Read</span>
</a>
<a class="api-item" href="#sessionadapterredis-acquirelock">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">acquireLock</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Tries to acquire the session lock, pausing <code>lockWaitTime</code> microseconds</span>
</a>
<a class="api-item" href="#sessionadapterredis-releaselock">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">releaseLock</span>()</code>
<span class="desc">Releases the session lock - only when this instance still owns it</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$lockAcquired</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$lockExpiry</span><span class="sm"> = 30</span></code>
<span class="desc">Lock time-to-live in seconds. The lock is not refreshed during the
request: a request that runs longer than this expiry loses its lock
silently and a concurrent request may then acquire it (the token-guarded
release still avoids deleting the newer lock). Raise this above the
longest expected request to retain the lock for the whole request.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$lockKey</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$lockRetries</span><span class="sm"> = 100</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$lockToken</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$lockWaitTime</span><span class="sm"> = 50000</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$lockingEnabled</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #sessionadapterredis-__construct }

```php
public function __construct(
    AdapterFactory $factory,
    array $options = []
);
```

Constructor

#### `close()` { #sessionadapterredis-close }

```php
public function close(): bool;
```

Close - releases the session lock if one is held

#### `destroy()` { #sessionadapterredis-destroy }

```php
public function destroy( string $id ): bool;
```

Destroy

#### `read()` { #sessionadapterredis-read }

```php
public function read( string $id ): string;
```

Read

<div class="api-group">Protected · 2</div>

#### `acquireLock()` { #sessionadapterredis-acquirelock }

```php
protected function acquireLock( string $id ): bool;
```

Tries to acquire the session lock, pausing `lockWaitTime` microseconds
between attempts, up to `lockRetries` times

#### `releaseLock()` { #sessionadapterredis-releaselock }

```php
protected function releaseLock(): void;
```

Releases the session lock - only when this instance still owns it


## Session\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Adapter/Stream.php){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Session\Adapter\Noop`](#sessionadapternoop)
    - **`Phalcon\Session\Adapter\Stream`**

</div>

__Uses__ `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Session\Adapter\Exceptions\AdapterRuntimeError` · `Phalcon\Session\Adapter\Exceptions\InvalidSavePath` · `Phalcon\Session\Adapter\Exceptions\SavePathUnavailable` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Php\IniTrait` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionadapterstream-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#sessionadapterstream-destroy">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">destroy</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#sessionadapterstream-gc">
<code class="vis vis-public">public</code>
<code class="ret">false|int</code>
<code class="sig"><span class="sf">gc</span>( <span class="st">int</span> <span class="sv">$max_lifetime</span> )</code>
<span class="desc">Garbage Collector</span>
</a>
<a class="api-item" href="#sessionadapterstream-open">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">open</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Ignore the savePath and use local defined path</span>
</a>
<a class="api-item" href="#sessionadapterstream-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Reads data from the adapter</span>
</a>
<a class="api-item" href="#sessionadapterstream-updatetimestamp">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">updateTimestamp</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Refresh the session file modification time without changing its data</span>
</a>
<a class="api-item" href="#sessionadapterstream-validateid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validateId</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Validate the session id (used when strict mode is enabled)</span>
</a>
<a class="api-item" href="#sessionadapterstream-write">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">write</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span></span>)</code>
</a>
<a class="api-item" href="#sessionadapterstream-getglobfiles">
<code class="vis vis-protected">protected</code>
<code class="ret">array|false</code>
<code class="sig"><span class="sf">getGlobFiles</span>( <span class="st">string</span> <span class="sv">$pattern</span> )</code>
<span class="desc">Gets the glob array or returns false on failure</span>
</a>
<a class="api-item" href="#sessionadapterstream-getprefixedname">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPrefixedName</span>( <span class="st">mixed</span> <span class="sv">$name</span> )</code>
<span class="desc">Helper method to get the name prefixed</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
<span class="desc">Session options</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Session prefix</span>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #sessionadapterstream-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `destroy()` { #sessionadapterstream-destroy }

```php
public function destroy( string $id ): bool;
```

#### `gc()` { #sessionadapterstream-gc }

```php
public function gc( int $max_lifetime ): false|int;
```

Garbage Collector

#### `open()` { #sessionadapterstream-open }

```php
public function open(
    string $path,
    string $name
): bool;
```

Ignore the savePath and use local defined path

#### `read()` { #sessionadapterstream-read }

```php
public function read( string $id ): string;
```

Reads data from the adapter

#### `updateTimestamp()` { #sessionadapterstream-updatetimestamp }

```php
public function updateTimestamp(
    string $id,
    string $data
): bool;
```

Refresh the session file modification time without changing its data

#### `validateId()` { #sessionadapterstream-validateid }

```php
public function validateId( string $id ): bool;
```

Validate the session id (used when strict mode is enabled)

#### `write()` { #sessionadapterstream-write }

```php
public function write(
    string $id,
    string $data
): bool;
```

<div class="api-group">Protected · 2</div>

#### `getGlobFiles()` { #sessionadapterstream-getglobfiles }

```php
protected function getGlobFiles( string $pattern ): array|false;
```

Gets the glob array or returns false on failure

#### `getPrefixedName()` { #sessionadapterstream-getprefixedname }

```php
protected function getPrefixedName( mixed $name ): string;
```

Helper method to get the name prefixed


## Session\Bag

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Bag.php){ .src-btn }

This component helps to separate session data into "namespaces". Working by
this way you can easily create groups of session variables into the
application

```php
$user = new \Phalcon\Session\Bag("user");

$user->name = "Kimbra Johnson";
$user->age  = 22;
```

@property string           $name
@property ManagerInterface $session;

@extends Collection<mixed>

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - **`Phalcon\Session\Bag`** - implements [`Phalcon\Session\BagInterface`](#sessionbaginterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)

</div>

__Uses__ `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionbag-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">ManagerInterface</span> <span class="sv">$session</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
</a>
<a class="api-item" href="#sessionbag-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Destroys the session bag</span>
</a>
<a class="api-item" href="#sessionbag-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Initialize internal array</span>
</a>
<a class="api-item" href="#sessionbag-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Removes a property from the internal bag</span>
</a>
<a class="api-item" href="#sessionbag-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a value in the session bag</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #sessionbag-__construct }

```php
public function __construct(
    ManagerInterface $session,
    string $name
);
```

#### `clear()` { #sessionbag-clear }

```php
public function clear(): void;
```

Destroys the session bag

#### `init()` { #sessionbag-init }

```php
public function init( array $data = [] ): void;
```

Initialize internal array

#### `remove()` { #sessionbag-remove }

```php
public function remove( string $element ): void;
```

Removes a property from the internal bag

#### `set()` { #sessionbag-set }

```php
public function set(
    string $element,
    mixed $value
): void;
```

Sets a value in the session bag


## Session\BagInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/BagInterface.php){ .src-btn }

Interface for Phalcon\Session\Bag

<div class="api-tree" markdown>

- **`Phalcon\Session\BagInterface`**

</div>

__Uses__ `Phalcon\Contracts\Session\SessionTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionbaginterface-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#sessionbaginterface-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#sessionbaginterface-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#sessionbaginterface-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#sessionbaginterface-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
</a>
<a class="api-item" href="#sessionbaginterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#sessionbaginterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#sessionbaginterface-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#sessionbaginterface-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#sessionbaginterface-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__get()` { #sessionbaginterface-__get }

```php
public function __get( string $element ): mixed;
```

#### `__isset()` { #sessionbaginterface-__isset }

```php
public function __isset( string $element ): bool;
```

#### `__set()` { #sessionbaginterface-__set }

```php
public function __set(
    string $element,
    mixed $value
): void;
```

#### `__unset()` { #sessionbaginterface-__unset }

```php
public function __unset( string $element ): void;
```

#### `clear()` { #sessionbaginterface-clear }

```php
public function clear(): void;
```

#### `get()` { #sessionbaginterface-get }

```php
public function get(
    string $element,
    mixed $defaultValue = null,
    string|null $cast = null
): mixed;
```

#### `has()` { #sessionbaginterface-has }

```php
public function has( string $element ): bool;
```

#### `init()` { #sessionbaginterface-init }

```php
public function init( array $data = [] ): void;
```

#### `remove()` { #sessionbaginterface-remove }

```php
public function remove( string $element ): void;
```

#### `set()` { #sessionbaginterface-set }

```php
public function set(
    string $element,
    mixed $value
): void;
```


## Session\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Exception.php){ .src-btn }

Phalcon\Session\Exception

Exceptions thrown in Phalcon\Session will use this class

<div class="api-tree" markdown>

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

</div>


## Session\Exceptions\InvalidSessionAdapter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Exceptions/InvalidSessionAdapter.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Exceptions\InvalidSessionAdapter`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionexceptionsinvalidsessionadapter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionexceptionsinvalidsessionadapter-__construct }

```php
public function __construct();
```


## Session\Exceptions\InvalidSessionId

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Exceptions/InvalidSessionId.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Exceptions\InvalidSessionId`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionexceptionsinvalidsessionid-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionexceptionsinvalidsessionid-__construct }

```php
public function __construct();
```


## Session\Exceptions\InvalidSessionName

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Exceptions/InvalidSessionName.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Exceptions\InvalidSessionName`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionexceptionsinvalidsessionname-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionexceptionsinvalidsessionname-__construct }

```php
public function __construct();
```


## Session\Exceptions\SessionAlreadyStarted

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Exceptions/SessionAlreadyStarted.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Exceptions\SessionAlreadyStarted`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionexceptionssessionalreadystarted-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionexceptionssessionalreadystarted-__construct }

```php
public function __construct();
```


## Session\Exceptions\SessionModificationDenied

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Exceptions/SessionModificationDenied.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Session\Exception`](#sessionexception)
        - **`Phalcon\Session\Exceptions\SessionModificationDenied`**

</div>

__Uses__ `Phalcon\Session\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionexceptionssessionmodificationdenied-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #sessionexceptionssessionmodificationdenied-__construct }

```php
public function __construct();
```


## Session\Manager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/Manager.php){ .src-btn }

Session manager class

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Session\Manager`** - implements [`Phalcon\Session\ManagerInterface`](#sessionmanagerinterface)

</div>

__Uses__ `Phalcon\Contracts\Session\SessionTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Session\Exceptions\InvalidSessionAdapter` · `Phalcon\Session\Exceptions\InvalidSessionId` · `Phalcon\Session\Exceptions\InvalidSessionName` · `Phalcon\Session\Exceptions\SessionAlreadyStarted` · `Phalcon\Session\Exceptions\SessionModificationDenied` · `Phalcon\Traits\Php\HeaderTrait` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `SessionHandlerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Manager constructor.</span>
</a>
<a class="api-item" href="#sessionmanager-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Alias: Gets a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanager-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Alias: Check whether a session variable is set in an application context</span>
</a>
<a class="api-item" href="#sessionmanager-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Alias: Sets a session variable in an application context</span>
</a>
<a class="api-item" href="#sessionmanager-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Alias: Removes a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanager-destroy">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">destroy</span>()</code>
<span class="desc">Destroy/end a session</span>
</a>
<a class="api-item" href="#sessionmanager-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">exists</span>()</code>
<span class="desc">Check whether the session has been started</span>
</a>
<a class="api-item" href="#sessionmanager-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remove</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanager-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">SessionHandlerInterface|null</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the stored session adapter</span>
</a>
<a class="api-item" href="#sessionmanager-getid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getId</span>()</code>
<span class="desc">Returns the session id</span>
</a>
<a class="api-item" href="#sessionmanager-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the name of the session</span>
</a>
<a class="api-item" href="#sessionmanager-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Get internal options</span>
</a>
<a class="api-item" href="#sessionmanager-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Check whether a session variable is set in an application context</span>
</a>
<a class="api-item" href="#sessionmanager-regenerateid">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">regenerateId</span>( <span class="st">bool</span> <span class="sv">$deleteOldSession</span><span class="sm"> = true</span> )</code>
<span class="desc">Regenerates the session id via <code>session_regenerate_id()</code> (when the</span>
</a>
<a class="api-item" href="#sessionmanager-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Removes a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanager-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a session variable in an application context</span>
</a>
<a class="api-item" href="#sessionmanager-setadapter">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">setAdapter</span>( <span class="st">SessionHandlerInterface</span> <span class="sv">$adapter</span> )</code>
<span class="desc">Set the adapter for the session</span>
</a>
<a class="api-item" href="#sessionmanager-setid">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">setId</span>( <span class="st">string</span> <span class="sv">$sessionId</span> )</code>
<span class="desc">Set session Id</span>
</a>
<a class="api-item" href="#sessionmanager-setname">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">setName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Set the session name. Throw exception if the session has started</span>
</a>
<a class="api-item" href="#sessionmanager-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets session&#039;s options</span>
</a>
<a class="api-item" href="#sessionmanager-start">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">start</span>()</code>
<span class="desc">Starts the session (if headers are already sent the session will not be</span>
</a>
<a class="api-item" href="#sessionmanager-status">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">status</span>()</code>
<span class="desc">Returns the status of the current session.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 22</div>

#### `__construct()` { #sessionmanager-__construct }

```php
public function __construct( array $options = [] );
```

Manager constructor.

#### `__get()` { #sessionmanager-__get }

```php
public function __get( string $key ): mixed;
```

Alias: Gets a session variable from an application context

#### `__isset()` { #sessionmanager-__isset }

```php
public function __isset( string $key ): bool;
```

Alias: Check whether a session variable is set in an application context

#### `__set()` { #sessionmanager-__set }

```php
public function __set(
    string $key,
    mixed $value
): void;
```

Alias: Sets a session variable in an application context

#### `__unset()` { #sessionmanager-__unset }

```php
public function __unset( string $key ): void;
```

Alias: Removes a session variable from an application context

#### `destroy()` { #sessionmanager-destroy }

```php
public function destroy(): void;
```

Destroy/end a session

#### `exists()` { #sessionmanager-exists }

```php
public function exists(): bool;
```

Check whether the session has been started

#### `get()` { #sessionmanager-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null,
    bool $remove = false
): mixed;
```

Gets a session variable from an application context

#### `getAdapter()` { #sessionmanager-getadapter }

```php
public function getAdapter(): SessionHandlerInterface|null;
```

Returns the stored session adapter

#### `getId()` { #sessionmanager-getid }

```php
public function getId(): string;
```

Returns the session id

#### `getName()` { #sessionmanager-getname }

```php
public function getName(): string;
```

Returns the name of the session

#### `getOptions()` { #sessionmanager-getoptions }

```php
public function getOptions(): array;
```

Get internal options

#### `has()` { #sessionmanager-has }

```php
public function has( string $key ): bool;
```

Check whether a session variable is set in an application context

#### `regenerateId()` { #sessionmanager-regenerateid }

```php
public function regenerateId( bool $deleteOldSession = true ): ManagerInterface;
```

Regenerates the session id via `session_regenerate_id()` (when the
session is active). The registered save handler persists the data
under the new id.

#### `remove()` { #sessionmanager-remove }

```php
public function remove( string $key ): void;
```

Removes a session variable from an application context

#### `set()` { #sessionmanager-set }

```php
public function set(
    string $key,
    mixed $value
): void;
```

Sets a session variable in an application context

#### `setAdapter()` { #sessionmanager-setadapter }

```php
public function setAdapter( SessionHandlerInterface $adapter ): ManagerInterface;
```

Set the adapter for the session

#### `setId()` { #sessionmanager-setid }

```php
public function setId( string $sessionId ): ManagerInterface;
```

Set session Id

#### `setName()` { #sessionmanager-setname }

```php
public function setName( string $name ): ManagerInterface;
```

Set the session name. Throw exception if the session has started
and do not allow poop names

#### `setOptions()` { #sessionmanager-setoptions }

```php
public function setOptions( array $options ): void;
```

Sets session's options

#### `start()` { #sessionmanager-start }

```php
public function start(): bool;
```

Starts the session (if headers are already sent the session will not be
started)

#### `status()` { #sessionmanager-status }

```php
public function status(): int;
```

Returns the status of the current session.


## Session\ManagerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Session/ManagerInterface.php){ .src-btn }

Interface for the Phalcon\Session\Manager

<div class="api-tree" markdown>

- **`Phalcon\Session\ManagerInterface`**

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Contracts\Session\SessionTypes` · `SessionHandlerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#sessionmanagerinterface-__get">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Alias: Gets a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Alias: Check whether a session variable is set in an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Alias: Sets a session variable in an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Alias: Removes a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-destroy">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">destroy</span>()</code>
<span class="desc">Destroy/end a session</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">exists</span>()</code>
<span class="desc">Check whether the session has been started</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remove</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">SessionHandlerInterface|null</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Returns the stored session adapter</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-getid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getId</span>()</code>
<span class="desc">Returns the session id</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the name of the session</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Get internal options</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Check whether a session variable is set in an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-regenerateid">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">regenerateId</span>( <span class="st">bool</span> <span class="sv">$deleteOldSession</span><span class="sm"> = true</span> )</code>
<span class="desc">Regenerates the session id using the adapter.</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Removes a session variable from an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a session variable in an application context</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-setadapter">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">setAdapter</span>( <span class="st">SessionHandlerInterface</span> <span class="sv">$adapter</span> )</code>
<span class="desc">Set the adapter for the session</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-setid">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">setId</span>( <span class="st">string</span> <span class="sv">$sessionId</span> )</code>
<span class="desc">Set session Id</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-setname">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">setName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Set the session name. Throw exception if the session has started</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets session&#039;s options</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-start">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">start</span>()</code>
<span class="desc">Starts the session (if headers are already sent the session will not be</span>
</a>
<a class="api-item" href="#sessionmanagerinterface-status">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">status</span>()</code>
<span class="desc">Returns the status of the current session.</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">SESSION_ACTIVE</span><span class="sm"> = 2</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">SESSION_DISABLED</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">SESSION_NONE</span><span class="sm"> = 1</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 21</div>

#### `__get()` { #sessionmanagerinterface-__get }

```php
public function __get( string $key );
```

Alias: Gets a session variable from an application context

#### `__isset()` { #sessionmanagerinterface-__isset }

```php
public function __isset( string $key ): bool;
```

Alias: Check whether a session variable is set in an application context

#### `__set()` { #sessionmanagerinterface-__set }

```php
public function __set(
    string $key,
    mixed $value
): void;
```

Alias: Sets a session variable in an application context

#### `__unset()` { #sessionmanagerinterface-__unset }

```php
public function __unset( string $key ): void;
```

Alias: Removes a session variable from an application context

#### `destroy()` { #sessionmanagerinterface-destroy }

```php
public function destroy(): void;
```

Destroy/end a session

#### `exists()` { #sessionmanagerinterface-exists }

```php
public function exists(): bool;
```

Check whether the session has been started

#### `get()` { #sessionmanagerinterface-get }

```php
public function get(
    string $key,
    mixed $defaultValue = null,
    bool $remove = false
): mixed;
```

Gets a session variable from an application context

#### `getAdapter()` { #sessionmanagerinterface-getadapter }

```php
public function getAdapter(): SessionHandlerInterface|null;
```

Returns the stored session adapter

#### `getId()` { #sessionmanagerinterface-getid }

```php
public function getId(): string;
```

Returns the session id

#### `getName()` { #sessionmanagerinterface-getname }

```php
public function getName(): string;
```

Returns the name of the session

#### `getOptions()` { #sessionmanagerinterface-getoptions }

```php
public function getOptions(): array;
```

Get internal options

#### `has()` { #sessionmanagerinterface-has }

```php
public function has( string $key ): bool;
```

Check whether a session variable is set in an application context

#### `regenerateId()` { #sessionmanagerinterface-regenerateid }

```php
public function regenerateId( bool $deleteOldSession = true ): ManagerInterface;
```

Regenerates the session id using the adapter.

#### `remove()` { #sessionmanagerinterface-remove }

```php
public function remove( string $key ): void;
```

Removes a session variable from an application context

#### `set()` { #sessionmanagerinterface-set }

```php
public function set(
    string $key,
    mixed $value
): void;
```

Sets a session variable in an application context

#### `setAdapter()` { #sessionmanagerinterface-setadapter }

```php
public function setAdapter( SessionHandlerInterface $adapter ): ManagerInterface;
```

Set the adapter for the session

#### `setId()` { #sessionmanagerinterface-setid }

```php
public function setId( string $sessionId ): ManagerInterface;
```

Set session Id

#### `setName()` { #sessionmanagerinterface-setname }

```php
public function setName( string $name ): ManagerInterface;
```

Set the session name. Throw exception if the session has started
and do not allow poop names

#### `setOptions()` { #sessionmanagerinterface-setoptions }

```php
public function setOptions( array $options ): void;
```

Sets session's options

#### `start()` { #sessionmanagerinterface-start }

```php
public function start(): bool;
```

Starts the session (if headers are already sent the session will not be
started)

#### `status()` { #sessionmanagerinterface-status }

```php
public function status(): int;
```

Returns the status of the current session.
