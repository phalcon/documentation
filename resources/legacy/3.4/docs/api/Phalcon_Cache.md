---
layout: default
title: 'Phalcon\Cache\Backend'
---
# Abstract class **Phalcon\Cache\Backend**

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class implements common functionality for backend adapters. A backend cache adapter may extend this class


## Methods
public  **getFrontend** ()

...


public  **setFrontend** (*mixed* $frontend)

...


public  **getOptions** ()

...


public  **setOptions** (*mixed* $options)

...


public  **getLastKey** ()

...


public  **setLastKey** (*mixed* $lastKey)

...


public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options])

Phalcon\Cache\Backend constructor



public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime])

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer])

Stops the frontend without store any cached content



public  **isFresh** ()

Checks whether the last cache is fresh or cached



public  **isStarted** ()

Checks whether the cache has starting buffering or not



public *int* **getLifetime** ()

Gets the last lifetime set



abstract public  **get** (*mixed* $keyName, [*mixed* $lifetime]) inherited from [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

...


abstract public  **save** ([*mixed* $keyName], [*mixed* $content], [*mixed* $lifetime], [*mixed* $stopBuffer]) inherited from [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

...


abstract public  **delete** (*mixed* $keyName) inherited from [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

...


abstract public  **queryKeys** ([*mixed* $prefix]) inherited from [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

...


abstract public  **exists** ([*mixed* $keyName], [*mixed* $lifetime]) inherited from [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

...



<hr>

# Class **Phalcon\Cache\Backend\Apc**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/apc.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data and raw data using an APC backend

```php
<?php

use Phalcon\Cache\Backend\Apc;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data for 2 days
$frontCache = new FrontData(
    [
        "lifetime" => 172800,
    ]
);

$cache = new Apc(
    $frontCache,
    [
        "prefix" => "app-data",
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*string* | *int* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the APC backend and stops the frontend



public  **increment** ([*string* $keyName], [*mixed* $value])

Increment of a given key, by number $value



public  **decrement** ([*string* $keyName], [*mixed* $value])

Decrement of a given key, by number $value



public  **delete** (*mixed* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* | *int* $keyName], [*int* $lifetime])

Checks if cache exists and it hasn't expired



public  **flush** ()

Immediately invalidates all existing items.

```php
<?php

use Phalcon\Cache\Backend\Apc;

$cache = new Apc($frontCache, ["prefix" => "app-data"]);

$cache->save("my-data", [1, 2, 3, 4, 5]);

// 'my-data' and all other used keys are deleted
$cache->flush();

```



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Phalcon\Cache\Backend constructor



public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Apcu**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/apcu.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data and raw data using an APCu backend

```php
<?php

use Phalcon\Cache\Backend\Apcu;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data for 2 days
$frontCache = new FrontData(
    [
        "lifetime" => 172800,
    ]
);

$cache = new Apcu(
    $frontCache,
    [
        "prefix" => "app-data",
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*string* | *int* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the APCu backend and stops the frontend



public  **increment** ([*string* $keyName], [*mixed* $value])

Increment of a given key, by number $value



public  **decrement** ([*string* $keyName], [*mixed* $value])

Decrement of a given key, by number $value



public  **delete** (*mixed* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* | *int* $keyName], [*int* $lifetime])

Checks if cache exists and it hasn't expired



public  **flush** ()

Immediately invalidates all existing items.

```php
<?php

use Phalcon\Cache\Backend\Apcu;

$cache = new Apcu($frontCache, ["prefix" => "app-data"]);

$cache->save("my-data", [1, 2, 3, 4, 5]);

// 'my-data' and all other used keys are deleted
$cache->flush();

```



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Phalcon\Cache\Backend constructor



public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Backend Cache Adapter class using 'adapter' option, if frontend will be provided as array it will call Frontend Cache Factory

```php
<?php

use Phalcon\Cache\Backend\Factory;
use Phalcon\Cache\Frontend\Data;

$options = [
    "prefix"   => "app-data",
    "frontend" => new Data(),
    "adapter"  => "apc",
];
$backendCache = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config)

...



<hr>

# Class **Phalcon\Cache\Backend\File**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/file.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments using a file backend

```php
<?php

use Phalcon\Cache\Backend\File;
use Phalcon\Cache\Frontend\Output as FrontOutput;

// Cache the file for 2 days
$frontendOptions = [
    "lifetime" => 172800,
];

// Create an output cache
$frontCache = FrontOutput($frontOptions);

// Set the cache directory
$backendOptions = [
    "cacheDir" => "../app/cache/",
];

// Create the File backend
$cache = new File($frontCache, $backendOptions);

$content = $cache->start("my-cache");

if ($content === null) {
    echo "<h1>", time(), "</h1>";

    $cache->save();
} else {
    echo $content;
}

```


## Methods
public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, *array* $options)

Phalcon\Cache\Backend\File constructor



public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*int* | *string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the file backend and stops the frontend



public  **delete** (*int* | *string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* | *int* $keyName], [*int* $lifetime])

Checks if cache exists and it isn't expired



public  **increment** ([*string* | *int* $keyName], [*mixed* $value])

Increment of a given key, by number $value



public  **decrement** ([*string* | *int* $keyName], [*mixed* $value])

Decrement of a given key, by number $value



public  **flush** ()

Immediately invalidates all existing items.



public  **getKey** (*mixed* $key)

Return a file-system safe identifier for a given key



public  **useSafeKey** (*mixed* $useSafeKey)

Set whether to use the safekey or not



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Libmemcached**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/libmemcached.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data or raw data to a libmemcached backend.
Per default persistent memcached connection pools are used.

```php
<?php

use Phalcon\Cache\Backend\Libmemcached;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data for 2 days
$frontCache = new FrontData(
    [
        "lifetime" => 172800,
    ]
);

// Create the Cache setting memcached connection options
$cache = new Libmemcached(
    $frontCache,
    [
        "servers" => [
            [
                "host"   => "127.0.0.1",
                "port"   => 11211,
                "weight" => 1,
            ],
        ],
        "client" => [
            \Memcached::OPT_HASH       => \Memcached::HASH_MD5,
            \Memcached::OPT_PREFIX_KEY => "prefix.",
        ],
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options])

Phalcon\Cache\Backend\Memcache constructor



public  **_connect** ()

Create internal connection to memcached



public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*int* | *string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the file backend and stops the frontend



public *boolean* **delete** (*int* | *string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* $keyName], [*int* $lifetime])

Checks if cache exists and it isn't expired



public  **increment** ([*string* $keyName], [*mixed* $value])

Increment of given $keyName by $value



public  **decrement** ([*string* $keyName], [*mixed* $value])

Decrement of $keyName by given $value



public  **flush** ()

Immediately invalidates all existing items.
Memcached does not support flush() per default. If you require flush() support, set $config["statsKey"].
All modified keys are stored in "statsKey". Note: statsKey has a negative performance impact.

```php
<?php

$cache = new \Phalcon\Cache\Backend\Libmemcached(
    $frontCache,
    [
        "statsKey" => "_PHCM",
    ]
);

$cache->save("my-data", [1, 2, 3, 4, 5]);

// 'my-data' and all other used keys are deleted
$cache->flush();

```



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Memcache**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/memcache.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data or raw data to a memcache backend

This adapter uses the special memcached key "_PHCM" to store all the keys internally used by the adapter

```php
<?php

use Phalcon\Cache\Backend\Memcache;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data for 2 days
$frontCache = new FrontData(
    [
        "lifetime" => 172800,
    ]
);

// Create the Cache setting memcached connection options
$cache = new Memcache(
    $frontCache,
    [
        "host"       => "localhost",
        "port"       => 11211,
        "persistent" => false,
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options])

Phalcon\Cache\Backend\Memcache constructor



public  **_connect** ()

Create internal connection to memcached



public  **addServers** (*mixed* $host, *mixed* $port, [*mixed* $persistent])

Add servers to memcache pool



public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*int* | *string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the file backend and stops the frontend



public *boolean* **delete** (*int* | *string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* $keyName], [*int* $lifetime])

Checks if cache exists and it isn't expired



public  **increment** ([*string* $keyName], [*mixed* $value])

Increment of given $keyName by $value



public  **decrement** ([*string* $keyName], [*mixed* $value])

Decrement of $keyName by given $value



public  **flush** ()

Immediately invalidates all existing items.



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Memory**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md), [Serializable](https://php.net/manual/en/class.serializable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/memory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores content in memory. Data is lost when the request is finished

```php
<?php

use Phalcon\Cache\Backend\Memory;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data
$frontCache = new FrontData();

$cache = new Memory($frontCache);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the backend and stops the frontend



public *boolean* **delete** (*string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* | *int* $keyName], [*int* $lifetime])

Checks if cache exists and it hasn't expired



public  **increment** ([*string* $keyName], [*mixed* $value])

Increment of given $keyName by $value



public  **decrement** ([*string* $keyName], [*mixed* $value])

Decrement of $keyName by given $value



public  **flush** ()

Immediately invalidates all existing items.



public  **serialize** ()

Required for interface \Serializable



public  **unserialize** (*mixed* $data)

Required for interface \Serializable



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Phalcon\Cache\Backend constructor



public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Mongo**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/mongo.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data or raw data to a MongoDb backend

```php
<?php

use Phalcon\Cache\Backend\Mongo;
use Phalcon\Cache\Frontend\Base64;

// Cache data for 2 days
$frontCache = new Base64(
    [
        "lifetime" => 172800,
    ]
);

// Create a MongoDB cache
$cache = new Mongo(
    $frontCache,
    [
        "server"     => "mongodb://localhost",
        "db"         => "caches",
        "collection" => "images",
    ]
);

// Cache arbitrary data
$cache->save(
    "my-data",
    file_get_contents("some-image.jpg")
);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options])

Phalcon\Cache\Backend\Mongo constructor



final protected *MongoCollection* **_getCollection** ()

Returns a MongoDb collection based on the backend parameters



public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*int* | *string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the file backend and stops the frontend



public *boolean* **delete** (*int* | *string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* $keyName], [*int* $lifetime])

Checks if cache exists and it isn't expired



public *collection->remove(...)* **gc** ()

gc



public  **increment** (*int* | *string* $keyName, [*mixed* $value])

Increment of a given key by $value



public  **decrement** (*int* | *string* $keyName, [*mixed* $value])

Decrement of a given key by $value



public  **flush** ()

Immediately invalidates all existing items.



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Redis**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/redis.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data or raw data to a redis backend

This adapter uses the special redis key "_PHCR" to store all the keys internally used by the adapter

```php
<?php

use Phalcon\Cache\Backend\Redis;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data for 2 days
$frontCache = new FrontData(
    [
        "lifetime" => 172800,
    ]
);

// Create the Cache setting redis connection options
$cache = new Redis(
    $frontCache,
    [
        "host"       => "localhost",
        "port"       => 6379,
        "auth"       => "foobared",
        "persistent" => false,
        "index"      => 0,
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options])

Phalcon\Cache\Backend\Redis constructor



public  **_connect** ()

Create internal connection to redis



public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*int* | *string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the file backend and stops the frontend

```php
<?php

$cache->save("my-key", $data);

// Save data termlessly
$cache->save("my-key", $data, -1);

```



public  **delete** (*int* | *string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* $keyName], [*int* $lifetime])

Checks if cache exists and it isn't expired



public  **increment** ([*string* $keyName], [*mixed* $value])

Increment of given $keyName by $value



public  **decrement** ([*string* $keyName], [*mixed* $value])

Decrement of $keyName by given $value



public  **flush** ()

Immediately invalidates all existing items.



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Class **Phalcon\Cache\Backend\Xcache**

*extends* abstract class [Phalcon\Cache\Backend](Phalcon_Cache.md)

*implements* [Phalcon\Cache\BackendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backend/xcache.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments, PHP data and raw data using an XCache backend

```php
<?php

use Phalcon\Cache\Backend\Xcache;
use Phalcon\Cache\Frontend\Data as FrontData;

// Cache data for 2 days
$frontCache = new FrontData(
    [
       "lifetime" => 172800,
    ]
);

$cache = new Xcache(
    $frontCache,
    [
        "prefix" => "app-data",
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **__construct** ([Phalcon\Cache\FrontendInterface](Phalcon_Cache.md) $frontend, [*array* $options])

Phalcon\Cache\Backend\Xcache constructor



public  **get** (*mixed* $keyName, [*mixed* $lifetime])

Returns a cached content



public  **save** ([*int* | *string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into the file backend and stops the frontend



public *boolean* **delete** (*int* | *string* $keyName)

Deletes a value from the cache by its key



public  **queryKeys** ([*mixed* $prefix])

Query the existing cached keys.

```php
<?php

$cache->save("users-ids", [1, 2, 3]);
$cache->save("projects-ids", [4, 5, 6]);

var_dump($cache->queryKeys("users")); // ["users-ids"]

```



public  **exists** ([*string* $keyName], [*int* $lifetime])

Checks if cache exists and it isn't expired



public  **increment** (*string* $keyName, [*mixed* $value])

Atomic increment of a given key, by number $value



public  **decrement** (*string* $keyName, [*mixed* $value])

Atomic decrement of a given key, by number $value



public  **flush** ()

Immediately invalidates all existing items.



public  **getFrontend** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setFrontend** (*mixed* $frontend) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getOptions** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setOptions** (*mixed* $options) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **getLastKey** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public  **setLastKey** (*mixed* $lastKey) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

...


public *mixed* **start** (*int* | *string* $keyName, [*int* $lifetime]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Starts a cache. The keyname allows to identify the created fragment



public  **stop** ([*mixed* $stopBuffer]) inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Stops the frontend without store any cached content



public  **isFresh** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the last cache is fresh or cached



public  **isStarted** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Checks whether the cache has starting buffering or not



public *int* **getLifetime** () inherited from [Phalcon\Cache\Backend](Phalcon_Cache.md)

Gets the last lifetime set




<hr>

# Interface **Phalcon\Cache\BackendInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/backendinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **start** (*mixed* $keyName, [*mixed* $lifetime])

...


abstract public  **stop** ([*mixed* $stopBuffer])

...


abstract public  **getFrontend** ()

...


abstract public  **getOptions** ()

...


abstract public  **isFresh** ()

...


abstract public  **isStarted** ()

...


abstract public  **setLastKey** (*mixed* $lastKey)

...


abstract public  **getLastKey** ()

...


abstract public  **get** (*mixed* $keyName, [*mixed* $lifetime])

...


abstract public  **save** ([*mixed* $keyName], [*mixed* $content], [*mixed* $lifetime], [*mixed* $stopBuffer])

...


abstract public  **delete** (*mixed* $keyName)

...


abstract public  **queryKeys** ([*mixed* $prefix])

...


abstract public  **exists** ([*mixed* $keyName], [*mixed* $lifetime])

...



<hr>

# Class **Phalcon\Cache\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Cache\Frontend\Base64**

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/base64.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache data converting/deconverting them to base64.

This adapter uses the base64_encode/base64_decode PHP's functions

```php
<?php

<?php

// Cache the files for 2 days using a Base64 frontend
$frontCache = new \Phalcon\Cache\Frontend\Base64(
    [
        "lifetime" => 172800,
    ]
);

//Create a MongoDB cache
$cache = new \Phalcon\Cache\Backend\Mongo(
    $frontCache,
    [
        "server"     => "mongodb://localhost",
        "db"         => "caches",
        "collection" => "images",
    ]
);

$cacheKey = "some-image.jpg.cache";

// Try to get cached image
$image = $cache->get($cacheKey);

if ($image === null) {
    // Store the image in the cache
    $cache->save(
        $cacheKey,
        file_get_contents("tmp-dir/some-image.jpg")
    );
}

header("Content-Type: image/jpeg");

echo $image;

```


## Methods
public  **__construct** ([*array* $frontendOptions])

Phalcon\Cache\Frontend\Base64 constructor



public  **getLifetime** ()

Returns the cache lifetime



public  **isBuffering** ()

Check whether if frontend is buffering output



public  **start** ()

Starts output frontend. Actually, does nothing in this adapter



public *string* **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Serializes data before storing them



public  **afterRetrieve** (*mixed* $data)

Unserializes data after retrieval




<hr>

# Class **Phalcon\Cache\Frontend\Data**

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/data.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache native PHP data in a serialized form

```php
<?php

use Phalcon\Cache\Backend\File;
use Phalcon\Cache\Frontend\Data;

// Cache the files for 2 days using a Data frontend
$frontCache = new Data(
    [
        "lifetime" => 172800,
    ]
);

// Create the component that will cache "Data" to a 'File' backend
// Set the cache file directory - important to keep the '/' at the end of
// of the value for the folder
$cache = new File(
    $frontCache,
    [
        "cacheDir" => "../app/cache/",
    ]
);

$cacheKey = "robots_order_id.cache";

// Try to get cached records
$robots = $cache->get($cacheKey);

if ($robots === null) {
    // $robots is null due to cache expiration or data does not exist
    // Make the database call and populate the variable
    $robots = Robots::find(
        [
            "order" => "id",
        ]
    );

    // Store it in the cache
    $cache->save($cacheKey, $robots);
}

// Use $robots :)
foreach ($robots as $robot) {
    echo $robot->name, "\n";
}

```


## Methods
public  **__construct** ([*array* $frontendOptions])

Phalcon\Cache\Frontend\Data constructor



public  **getLifetime** ()

Returns the cache lifetime



public  **isBuffering** ()

Check whether if frontend is buffering output



public  **start** ()

Starts output frontend. Actually, does nothing



public *string* **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Serializes data before storing them



public  **afterRetrieve** (*mixed* $data)

Unserializes data after retrieval




<hr>

# Class **Phalcon\Cache\Frontend\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Frontend Cache Adapter class using 'adapter' option

```php
<?php

use Phalcon\Cache\Frontend\Factory;

$options = [
    "lifetime" => 172800,
    "adapter"  => "data",
];
$frontendCache = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config)

...



<hr>

# Class **Phalcon\Cache\Frontend\Igbinary**

*extends* class [Phalcon\Cache\Frontend\Data](Phalcon_Cache.md)

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/igbinary.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache native PHP data in a serialized form using igbinary extension

```php
<?php

// Cache the files for 2 days using Igbinary frontend
$frontCache = new \Phalcon\Cache\Frontend\Igbinary(
    [
        "lifetime" => 172800,
    ]
);

// Create the component that will cache "Igbinary" to a "File" backend
// Set the cache file directory - important to keep the "/" at the end of
// of the value for the folder
$cache = new \Phalcon\Cache\Backend\File(
    $frontCache,
    [
        "cacheDir" => "../app/cache/",
    ]
);

$cacheKey = "robots_order_id.cache";

// Try to get cached records
$robots = $cache->get($cacheKey);

if ($robots === null) {
    // $robots is null due to cache expiration or data do not exist
    // Make the database call and populate the variable
    $robots = Robots::find(
        [
            "order" => "id",
        ]
    );

    // Store it in the cache
    $cache->save($cacheKey, $robots);
}

// Use $robots :)
foreach ($robots as $robot) {
    echo $robot->name, "\n";
}

```


## Methods
public  **__construct** ([*array* $frontendOptions])

Phalcon\Cache\Frontend\Data constructor



public  **getLifetime** ()

Returns the cache lifetime



public  **isBuffering** ()

Check whether if frontend is buffering output



public  **start** ()

Starts output frontend. Actually, does nothing



public *string* **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Serializes data before storing them



public  **afterRetrieve** (*mixed* $data)

Unserializes data after retrieval




<hr>

# Class **Phalcon\Cache\Frontend\Json**

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/json.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache data converting/deconverting them to JSON.

This adapter uses the json_encode/json_decode PHP's functions

As the data is encoded in JSON other systems accessing the same backend could
process them

```php
<?php

<?php

// Cache the data for 2 days
$frontCache = new \Phalcon\Cache\Frontend\Json(
    [
        "lifetime" => 172800,
    ]
);

// Create the Cache setting memcached connection options
$cache = new \Phalcon\Cache\Backend\Memcache(
    $frontCache,
    [
        "host"       => "localhost",
        "port"       => 11211,
        "persistent" => false,
    ]
);

// Cache arbitrary data
$cache->save("my-data", [1, 2, 3, 4, 5]);

// Get data
$data = $cache->get("my-data");

```


## Methods
public  **__construct** ([*array* $frontendOptions])

Phalcon\Cache\Frontend\Base64 constructor



public  **getLifetime** ()

Returns the cache lifetime



public  **isBuffering** ()

Check whether if frontend is buffering output



public  **start** ()

Starts output frontend. Actually, does nothing



public *string* **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Serializes data before storing them



public  **afterRetrieve** (*mixed* $data)

Unserializes data after retrieval




<hr>

# Class **Phalcon\Cache\Frontend\Msgpack**

*extends* class [Phalcon\Cache\Frontend\Data](Phalcon_Cache.md)

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/msgpack.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache native PHP data in a serialized form using msgpack extension
This adapter uses a Msgpack frontend to store the cached content and requires msgpack extension.

```php
<?php

use Phalcon\Cache\Backend\File;
use Phalcon\Cache\Frontend\Msgpack;

// Cache the files for 2 days using Msgpack frontend
$frontCache = new Msgpack(
    [
        "lifetime" => 172800,
    ]
);

// Create the component that will cache "Msgpack" to a "File" backend
// Set the cache file directory - important to keep the "/" at the end of
// of the value for the folder
$cache = new File(
    $frontCache,
    [
        "cacheDir" => "../app/cache/",
    ]
);

$cacheKey = "robots_order_id.cache";

// Try to get cached records
$robots = $cache->get($cacheKey);

if ($robots === null) {
    // $robots is null due to cache expiration or data do not exist
    // Make the database call and populate the variable
    $robots = Robots::find(
        [
            "order" => "id",
        ]
    );

    // Store it in the cache
    $cache->save($cacheKey, $robots);
}

// Use $robots
foreach ($robots as $robot) {
    echo $robot->name, "\n";
}

```


## Methods
public  **__construct** ([*array* $frontendOptions])

Phalcon\Cache\Frontend\Msgpack constructor



public  **getLifetime** ()

Returns the cache lifetime



public  **isBuffering** ()

Check whether if frontend is buffering output



public  **start** ()

Starts output frontend. Actually, does nothing



public  **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Serializes data before storing them



public  **afterRetrieve** (*mixed* $data)

Unserializes data after retrieval




<hr>

# Class **Phalcon\Cache\Frontend\None**

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/none.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Discards any kind of frontend data input. This frontend does not have expiration time or any other options

```php
<?php

<?php

//Create a None Cache
$frontCache = new \Phalcon\Cache\Frontend\None();

// Create the component that will cache "Data" to a "Memcached" backend
// Memcached connection settings
$cache = new \Phalcon\Cache\Backend\Memcache(
    $frontCache,
    [
        "host" => "localhost",
        "port" => "11211",
    ]
);

$cacheKey = "robots_order_id.cache";

// This Frontend always return the data as it's returned by the backend
$robots = $cache->get($cacheKey);

if ($robots === null) {
    // This cache doesn't perform any expiration checking, so the data is always expired
    // Make the database call and populate the variable
    $robots = Robots::find(
        [
            "order" => "id",
        ]
    );

    $cache->save($cacheKey, $robots);
}

// Use $robots :)
foreach ($robots as $robot) {
    echo $robot->name, "\n";
}

```


## Methods
public  **getLifetime** ()

Returns cache lifetime, always one second expiring content



public  **isBuffering** ()

Check whether if frontend is buffering output, always false



public  **start** ()

Starts output frontend



public *string* **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Prepare data to be stored



public  **afterRetrieve** (*mixed* $data)

Prepares data to be retrieved to user




<hr>

# Class **Phalcon\Cache\Frontend\Output**

*implements* [Phalcon\Cache\FrontendInterface](Phalcon_Cache.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontend/output.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to cache output fragments captured with ob_* functions

```php
<?php


use Phalcon\Tag;
use Phalcon\Cache\Backend\File;
use Phalcon\Cache\Frontend\Output;

// Create an Output frontend. Cache the files for 2 days
$frontCache = new Output(
    [
        "lifetime" => 172800,
    ]
);

// Create the component that will cache from the "Output" to a "File" backend
// Set the cache file directory - it's important to keep the "/" at the end of
// the value for the folder
$cache = new File(
    $frontCache,
    [
        "cacheDir" => "../app/cache/",
    ]
);

// Get/Set the cache file to ../app/cache/my-cache.html
$content = $cache->start("my-cache.html");

// If $content is null then the content will be generated for the cache
if (null === $content) {
    // Print date and time
    echo date("r");

    // Generate a link to the sign-up action
    echo Tag::linkTo(
        [
            "user/signup",
            "Sign Up",
            "class" => "signup-button",
        ]
    );

    // Store the output into the cache file
    $cache->save();
} else {
    // Echo the cached output
    echo $content;
}

```


## Methods
public  **__construct** ([*array* $frontendOptions])

Phalcon\Cache\Frontend\Output constructor



public  **getLifetime** ()

Returns the cache lifetime



public  **isBuffering** ()

Check whether if frontend is buffering output



public  **start** ()

Starts output frontend. Currently, does nothing



public *string* **getContent** ()

Returns output cached content



public  **stop** ()

Stops output frontend



public  **beforeStore** (*mixed* $data)

Serializes data before storing them



public  **afterRetrieve** (*mixed* $data)

Unserializes data after retrieval




<hr>

# Interface **Phalcon\Cache\FrontendInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/frontendinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getLifetime** ()

...


abstract public  **isBuffering** ()

...


abstract public  **start** ()

...


abstract public  **getContent** ()

...


abstract public  **stop** ()

...


abstract public  **beforeStore** (*mixed* $data)

...


abstract public  **afterRetrieve** (*mixed* $data)

...



<hr>

# Class **Phalcon\Cache\Multiple**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cache/multiple.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to read to chained backend adapters writing to multiple backends

```php
<?php

use Phalcon\Cache\Frontend\Data as DataFrontend;
use Phalcon\Cache\Multiple;
use Phalcon\Cache\Backend\Apc as ApcCache;
use Phalcon\Cache\Backend\Memcache as MemcacheCache;
use Phalcon\Cache\Backend\File as FileCache;

$ultraFastFrontend = new DataFrontend(
    [
        "lifetime" => 3600,
    ]
);

$fastFrontend = new DataFrontend(
    [
        "lifetime" => 86400,
    ]
);

$slowFrontend = new DataFrontend(
    [
        "lifetime" => 604800,
    ]
);

//Backends are registered from the fastest to the slower
$cache = new Multiple(
    [
        new ApcCache(
            $ultraFastFrontend,
            [
                "prefix" => "cache",
            ]
        ),
        new MemcacheCache(
            $fastFrontend,
            [
                "prefix" => "cache",
                "host"   => "localhost",
                "port"   => "11211",
            ]
        ),
        new FileCache(
            $slowFrontend,
            [
                "prefix"   => "cache",
                "cacheDir" => "../app/cache/",
            ]
        ),
    ]
);

//Save, saves in every backend
$cache->save("my-key", $data);

```


## Methods
public  **__construct** ([[Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $backends])

Phalcon\Cache\Multiple constructor



public  **push** ([Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $backend)

Adds a backend



public *mixed* **get** (*string* | *int* $keyName, [*int* $lifetime])

Returns a cached content reading the internal backends



public  **start** (*string* | *int* $keyName, [*int* $lifetime])

Starts every backend



public  **save** ([*string* $keyName], [*string* $content], [*int* $lifetime], [*boolean* $stopBuffer])

Stores cached content into all backends and stops the frontend



public *boolean* **delete** (*string* | *int* $keyName)

Deletes a value from each backend



public  **exists** ([*string* | *int* $keyName], [*int* $lifetime])

Checks if cache exists in at least one backend



public  **flush** ()

Flush all backend(s)
