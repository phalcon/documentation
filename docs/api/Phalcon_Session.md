---
layout: default
title: 'Phalcon\Session\Adapter'
---
# Abstract class **Phalcon\Session\Adapter**

*implements* [Phalcon\Session\AdapterInterface](Phalcon_Session.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Base class for Phalcon\Session adapters


## Constants
*integer* **SESSION_ACTIVE**

*integer* **SESSION_NONE**

*integer* **SESSION_DISABLED**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Session\Adapter constructor



public  **start** ()

Starts the session (if headers are already sent the session will not be started)



public  **setOptions** (*array* $options)

Sets session's options

```php
<?php

$session->setOptions(
    [
        "uniqueId" => "my-private-app",
    ]
);

```



public  **getOptions** ()

Get internal options



public  **setName** (*mixed* $name)

Set session name



public  **getName** ()

Get session name



public  **regenerateId** ([*mixed* $deleteOldSession])





public  **get** (*mixed* $index, [*mixed* $defaultValue], [*mixed* $remove])

Gets a session variable from an application context

```php
<?php

$session->get("auth", "yes");

```



public  **set** (*mixed* $index, *mixed* $value)

Sets a session variable in an application context

```php
<?php

$session->set("auth", "yes");

```



public  **has** (*mixed* $index)

Check whether a session variable is set in an application context

```php
<?php

var_dump(
    $session->has("auth")
);

```



public  **remove** (*mixed* $index)

Removes a session variable from an application context

```php
<?php

$session->remove("auth");

```



public  **getId** ()

Returns active session id

```php
<?php

echo $session->getId();

```



public  **setId** (*mixed* $id)

Set the current session id

```php
<?php

$session->setId($id);

```



public  **isStarted** ()

Check whether the session has been started

```php
<?php

var_dump(
    $session->isStarted()
);

```



public  **destroy** ([*mixed* $removeData])

Destroys the active session

```php
<?php

var_dump(
    $session->destroy()
);

var_dump(
    $session->destroy(true)
);

```



public  **status** ()

Returns the status of the current session.

```php
<?php

var_dump(
    $session->status()
);

if ($session->status() !== $session::SESSION_ACTIVE) {
    $session->start();
}

```



public  **__get** (*mixed* $index)

Alias: Gets a session variable from an application context



public  **__set** (*mixed* $index, *mixed* $value)

Alias: Sets a session variable in an application context



public  **__isset** (*mixed* $index)

Alias: Check whether a session variable is set in an application context



public  **__unset** (*mixed* $index)

Alias: Removes a session variable from an application context

```php
<?php

unset($session->auth);

```



public  **__destruct** ()

...


protected  **removeSessionData** ()

...



<hr>

# Class **Phalcon\Session\Adapter\Files**

*extends* abstract class [Phalcon\Session\Adapter](Phalcon_Session.md)

*implements* [Phalcon\Session\AdapterInterface](Phalcon_Session.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/adapter/files.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Constants
*integer* **SESSION_ACTIVE**

*integer* **SESSION_NONE**

*integer* **SESSION_DISABLED**

## Methods
public  **__construct** ([*array* $options]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Phalcon\Session\Adapter constructor



public  **start** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Starts the session (if headers are already sent the session will not be started)



public  **setOptions** (*array* $options) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets session's options

```php
<?php

$session->setOptions(
    [
        "uniqueId" => "my-private-app",
    ]
);

```



public  **getOptions** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get internal options



public  **setName** (*mixed* $name) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set session name



public  **getName** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get session name



public  **regenerateId** ([*mixed* $deleteOldSession]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)





public  **get** (*mixed* $index, [*mixed* $defaultValue], [*mixed* $remove]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Gets a session variable from an application context

```php
<?php

$session->get("auth", "yes");

```



public  **set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets a session variable in an application context

```php
<?php

$session->set("auth", "yes");

```



public  **has** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether a session variable is set in an application context

```php
<?php

var_dump(
    $session->has("auth")
);

```



public  **remove** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Removes a session variable from an application context

```php
<?php

$session->remove("auth");

```



public  **getId** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns active session id

```php
<?php

echo $session->getId();

```



public  **setId** (*mixed* $id) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set the current session id

```php
<?php

$session->setId($id);

```



public  **isStarted** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether the session has been started

```php
<?php

var_dump(
    $session->isStarted()
);

```



public  **destroy** ([*mixed* $removeData]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Destroys the active session

```php
<?php

var_dump(
    $session->destroy()
);

var_dump(
    $session->destroy(true)
);

```



public  **status** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns the status of the current session.

```php
<?php

var_dump(
    $session->status()
);

if ($session->status() !== $session::SESSION_ACTIVE) {
    $session->start();
}

```



public  **__get** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Gets a session variable from an application context



public  **__set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Sets a session variable in an application context



public  **__isset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Check whether a session variable is set in an application context



public  **__unset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Removes a session variable from an application context

```php
<?php

unset($session->auth);

```



public  **__destruct** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...


protected  **removeSessionData** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...



<hr>

# Class **Phalcon\Session\Adapter\Libmemcached**

*extends* abstract class [Phalcon\Session\Adapter](Phalcon_Session.md)

*implements* [Phalcon\Session\AdapterInterface](Phalcon_Session.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/adapter/libmemcached.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This adapter store sessions in libmemcached

```php
<?php

use Phalcon\Session\Adapter\Libmemcached;

$session = new Libmemcached(
    [
        "servers" => [
            [
                "host"   => "localhost",
                "port"   => 11211,
                "weight" => 1,
            ],
        ],
        "client" => [
            \Memcached::OPT_HASH       => \Memcached::HASH_MD5,
            \Memcached::OPT_PREFIX_KEY => "prefix.",
        ],
        "lifetime" => 3600,
        "prefix"   => "my_",
    ]
);

$session->start();

$session->set("var", "some-value");

echo $session->get("var");

```


## Constants
*integer* **SESSION_ACTIVE**

*integer* **SESSION_NONE**

*integer* **SESSION_DISABLED**

## Methods
public  **getLibmemcached** ()

...


public  **getLifetime** ()

...


public  **__construct** (*array* $options)

Phalcon\Session\Adapter\Libmemcached constructor



public  **open** ()

...


public  **close** ()

...


public  **read** (*mixed* $sessionId)





public  **write** (*mixed* $sessionId, *mixed* $data)





public  **destroy** ([*mixed* $sessionId])





public  **gc** ()





public  **start** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Starts the session (if headers are already sent the session will not be started)



public  **setOptions** (*array* $options) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets session's options

```php
<?php

$session->setOptions(
    [
        "uniqueId" => "my-private-app",
    ]
);

```



public  **getOptions** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get internal options



public  **setName** (*mixed* $name) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set session name



public  **getName** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get session name



public  **regenerateId** ([*mixed* $deleteOldSession]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)





public  **get** (*mixed* $index, [*mixed* $defaultValue], [*mixed* $remove]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Gets a session variable from an application context

```php
<?php

$session->get("auth", "yes");

```



public  **set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets a session variable in an application context

```php
<?php

$session->set("auth", "yes");

```



public  **has** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether a session variable is set in an application context

```php
<?php

var_dump(
    $session->has("auth")
);

```



public  **remove** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Removes a session variable from an application context

```php
<?php

$session->remove("auth");

```



public  **getId** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns active session id

```php
<?php

echo $session->getId();

```



public  **setId** (*mixed* $id) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set the current session id

```php
<?php

$session->setId($id);

```



public  **isStarted** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether the session has been started

```php
<?php

var_dump(
    $session->isStarted()
);

```



public  **status** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns the status of the current session.

```php
<?php

var_dump(
    $session->status()
);

if ($session->status() !== $session::SESSION_ACTIVE) {
    $session->start();
}

```



public  **__get** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Gets a session variable from an application context



public  **__set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Sets a session variable in an application context



public  **__isset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Check whether a session variable is set in an application context



public  **__unset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Removes a session variable from an application context

```php
<?php

unset($session->auth);

```



public  **__destruct** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...


protected  **removeSessionData** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...



<hr>

# Class **Phalcon\Session\Adapter\Memcache**

*extends* abstract class [Phalcon\Session\Adapter](Phalcon_Session.md)

*implements* [Phalcon\Session\AdapterInterface](Phalcon_Session.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/adapter/memcache.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This adapter store sessions in memcache

```php
<?php

use Phalcon\Session\Adapter\Memcache;

$session = new Memcache(
    [
        "uniqueId"   => "my-private-app",
        "host"       => "127.0.0.1",
        "port"       => 11211,
        "persistent" => true,
        "lifetime"   => 3600,
        "prefix"     => "my_",
    ]
);

$session->start();

$session->set("var", "some-value");

echo $session->get("var");

```


## Constants
*integer* **SESSION_ACTIVE**

*integer* **SESSION_NONE**

*integer* **SESSION_DISABLED**

## Methods
public  **getMemcache** ()

...


public  **getLifetime** ()

...


public  **__construct** ([*array* $options])

Phalcon\Session\Adapter\Memcache constructor



public  **open** ()

...


public  **close** ()

...


public  **read** (*mixed* $sessionId)





public  **write** (*mixed* $sessionId, *mixed* $data)





public  **destroy** ([*mixed* $sessionId])





public  **gc** ()





public  **start** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Starts the session (if headers are already sent the session will not be started)



public  **setOptions** (*array* $options) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets session's options

```php
<?php

$session->setOptions(
    [
        "uniqueId" => "my-private-app",
    ]
);

```



public  **getOptions** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get internal options



public  **setName** (*mixed* $name) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set session name



public  **getName** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get session name



public  **regenerateId** ([*mixed* $deleteOldSession]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)





public  **get** (*mixed* $index, [*mixed* $defaultValue], [*mixed* $remove]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Gets a session variable from an application context

```php
<?php

$session->get("auth", "yes");

```



public  **set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets a session variable in an application context

```php
<?php

$session->set("auth", "yes");

```



public  **has** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether a session variable is set in an application context

```php
<?php

var_dump(
    $session->has("auth")
);

```



public  **remove** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Removes a session variable from an application context

```php
<?php

$session->remove("auth");

```



public  **getId** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns active session id

```php
<?php

echo $session->getId();

```



public  **setId** (*mixed* $id) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set the current session id

```php
<?php

$session->setId($id);

```



public  **isStarted** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether the session has been started

```php
<?php

var_dump(
    $session->isStarted()
);

```



public  **status** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns the status of the current session.

```php
<?php

var_dump(
    $session->status()
);

if ($session->status() !== $session::SESSION_ACTIVE) {
    $session->start();
}

```



public  **__get** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Gets a session variable from an application context



public  **__set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Sets a session variable in an application context



public  **__isset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Check whether a session variable is set in an application context



public  **__unset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Removes a session variable from an application context

```php
<?php

unset($session->auth);

```



public  **__destruct** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...


protected  **removeSessionData** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...



<hr>

# Class **Phalcon\Session\Adapter\Redis**

*extends* abstract class [Phalcon\Session\Adapter](Phalcon_Session.md)

*implements* [Phalcon\Session\AdapterInterface](Phalcon_Session.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/adapter/redis.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This adapter store sessions in Redis

```php
<?php

use Phalcon\Session\Adapter\Redis;

$session = new Redis(
    [
        "uniqueId"   => "my-private-app",
        "host"       => "localhost",
        "port"       => 6379,
        "auth"       => "foobared",
        "persistent" => false,
        "lifetime"   => 3600,
        "prefix"     => "my",
        "index"      => 1,
    ]
);

$session->start();

$session->set("var", "some-value");

echo $session->get("var");

```


## Constants
*integer* **SESSION_ACTIVE**

*integer* **SESSION_NONE**

*integer* **SESSION_DISABLED**

## Methods
public  **getRedis** ()

...


public  **getLifetime** ()

...


public  **__construct** ([*array* $options])

Phalcon\Session\Adapter\Redis constructor



public  **open** ()





public  **close** ()





public  **read** (*mixed* $sessionId)





public  **write** (*mixed* $sessionId, *mixed* $data)





public  **destroy** ([*mixed* $sessionId])





public  **gc** ()





public  **start** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Starts the session (if headers are already sent the session will not be started)



public  **setOptions** (*array* $options) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets session's options

```php
<?php

$session->setOptions(
    [
        "uniqueId" => "my-private-app",
    ]
);

```



public  **getOptions** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get internal options



public  **setName** (*mixed* $name) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set session name



public  **getName** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Get session name



public  **regenerateId** ([*mixed* $deleteOldSession]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)





public  **get** (*mixed* $index, [*mixed* $defaultValue], [*mixed* $remove]) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Gets a session variable from an application context

```php
<?php

$session->get("auth", "yes");

```



public  **set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Sets a session variable in an application context

```php
<?php

$session->set("auth", "yes");

```



public  **has** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether a session variable is set in an application context

```php
<?php

var_dump(
    $session->has("auth")
);

```



public  **remove** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Removes a session variable from an application context

```php
<?php

$session->remove("auth");

```



public  **getId** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns active session id

```php
<?php

echo $session->getId();

```



public  **setId** (*mixed* $id) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Set the current session id

```php
<?php

$session->setId($id);

```



public  **isStarted** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Check whether the session has been started

```php
<?php

var_dump(
    $session->isStarted()
);

```



public  **status** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Returns the status of the current session.

```php
<?php

var_dump(
    $session->status()
);

if ($session->status() !== $session::SESSION_ACTIVE) {
    $session->start();
}

```



public  **__get** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Gets a session variable from an application context



public  **__set** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Sets a session variable in an application context



public  **__isset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Check whether a session variable is set in an application context



public  **__unset** (*mixed* $index) inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

Alias: Removes a session variable from an application context

```php
<?php

unset($session->auth);

```



public  **__destruct** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...


protected  **removeSessionData** () inherited from [Phalcon\Session\Adapter](Phalcon_Session.md)

...



<hr>

# Interface **Phalcon\Session\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **start** ()

...


abstract public  **setOptions** (*array* $options)

...


abstract public  **getOptions** ()

...


abstract public  **get** (*mixed* $index, [*mixed* $defaultValue])

...


abstract public  **set** (*mixed* $index, *mixed* $value)

...


abstract public  **has** (*mixed* $index)

...


abstract public  **remove** (*mixed* $index)

...


abstract public  **getId** ()

...


abstract public  **isStarted** ()

...


abstract public  **destroy** ([*mixed* $removeData])

...


abstract public  **regenerateId** ([*mixed* $deleteOldSession])

...


abstract public  **setName** (*mixed* $name)

...


abstract public  **getName** ()

...



<hr>

# Class **Phalcon\Session\Bag**

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Session\BagInterface](Phalcon_Session.md), [IteratorAggregate](https://php.net/manual/en/class.iteratoraggregate.php), [Traversable](https://php.net/manual/en/class.traversable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Countable](https://php.net/manual/en/class.countable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/bag.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component helps to separate session data into "namespaces". Working by this way
you can easily create groups of session variables into the application

```php
<?php

$user = new \Phalcon\Session\Bag("user");

$user->name = "Kimbra Johnson";
$user->age  = 22;

```


## Methods
public  **__construct** (*mixed* $name)

Phalcon\Session\Bag constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the DependencyInjector container



public  **getDI** ()

Returns the DependencyInjector container



public  **initialize** ()

Initializes the session bag. This method must not be called directly, the
class calls it when its internal data is accessed



public  **destroy** ()

Destroys the session bag

```php
<?php

$user->destroy();

```



public  **set** (*mixed* $property, *mixed* $value)

Sets a value in the session bag

```php
<?php

$user->set("name", "Kimbra");

```



public  **__set** (*mixed* $property, *mixed* $value)

Magic setter to assign values to the session bag

```php
<?php

$user->name = "Kimbra";

```



public  **get** (*mixed* $property, [*mixed* $defaultValue])

Obtains a value from the session bag optionally setting a default value

```php
<?php

echo $user->get("name", "Kimbra");

```



public  **__get** (*mixed* $property)

Magic getter to obtain values from the session bag

```php
<?php

echo $user->name;

```



public  **has** (*mixed* $property)

Check whether a property is defined in the internal bag

```php
<?php

var_dump(
    $user->has("name")
);

```



public  **__isset** (*mixed* $property)

Magic isset to check whether a property is defined in the bag

```php
<?php

var_dump(
    isset($user["name"])
);

```



public  **remove** (*mixed* $property)

Removes a property from the internal bag

```php
<?php

$user->remove("name");

```



public  **__unset** (*mixed* $property)

Magic unset to remove items using the array syntax

```php
<?php

unset($user["name"]);

```



final public  **count** ()

Return length of bag

```php
<?php

echo $user->count();

```



final public  **getIterator** ()

 Returns the bag iterator



final public  **offsetSet** (*mixed* $property, *mixed* $value)

...


final public  **offsetExists** (*mixed* $property)

...


final public  **offsetUnset** (*mixed* $property)

...


final public  **offsetGet** (*mixed* $property)

...



<hr>

# Interface **Phalcon\Session\BagInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/baginterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **initialize** ()

...


abstract public  **destroy** ()

...


abstract public  **set** (*mixed* $property, *mixed* $value)

...


abstract public  **get** (*mixed* $property, [*mixed* $defaultValue])

...


abstract public  **has** (*mixed* $property)

...


abstract public  **__set** (*mixed* $property, *mixed* $value)

...


abstract public  **__get** (*mixed* $property)

...


abstract public  **__isset** (*mixed* $property)

...



<hr>

# Class **Phalcon\Session\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Session\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/session/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Session Adapter class using 'adapter' option

```php
<?php

use Phalcon\Session\Factory;

$options = [
    "uniqueId"   => "my-private-app",
    "host"       => "127.0.0.1",
    "port"       => 11211,
    "persistent" => true,
    "lifetime"   => 3600,
    "prefix"     => "my_",
    "adapter"    => "memcache",
];
$session = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config) inherited from [Phalcon\Factory](Phalcon_Factory.md)

...
