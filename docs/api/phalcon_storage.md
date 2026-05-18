---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Storage\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `DateTime`
    - `Exception`
    - `Phalcon\Events\EventsAwareInterface`
    - `Phalcon\Events\ManagerInterface`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Storage\Serializer\SerializerInterface`
    - `Phalcon\Support\Exception`

-   __Extends__
    

-   __Implements__
    
    - `AdapterInterface`
    - `EventsAwareInterface`

Class AbstractAdapter

@package Phalcon\Storage\Adapter

@property mixed               $adapter
@property string              $defaultSerializer
@property int                 $lifetime
@property array               $options
@property string              $prefix
@property SerializerInterface $serializer
@property SerializerFactory   $serializerFactory


### Properties
```php
/**
 * @var mixed
 */
protected $adapter;

/**
 * Name of the default serializer class
 *
 * @var string
 */
protected $defaultSerializer = php;

/**
 * Name of the default TTL (time to live)
 *
 * @var int
 */
protected $lifetime = 3600;

/**
 * @var array
 */
protected $options;

/**
 * @var string
 */
protected $prefix = ph-memo-;

/**
 * Serializer
 *
 * @var SerializerInterface|null
 */
protected $serializer;

/**
 * Serializer Factory
 *
 * @var SerializerFactory
 */
protected $serializerFactory;

/**
 * Event Manager
 *
 * @var ManagerInterface|null
 */
protected $eventsManager;

/**
 * EventType prefix.
 *
 * @var string
 */
protected $eventType = storage;

```

### Methods

```php
protected function __construct( SerializerFactory $factory, array $options = [] );
```
AbstractAdapter constructor.


```php
abstract public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Deletes data from the adapter


```php
public function deleteMultiple( array $keys ): bool;
```
Deletes data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Returns the adapter - connects to the storage if not connected


```php
public function getDefaultSerializer(): string;
```
Name of the default serializer class


```php
public function getEventsManager(): ManagerInterface | null;
```
Get the event manager


```php
abstract public function getKeys( string $prefix = string ): array;
```
Returns all the keys stored


```php
public function getLifetime(): int;
```
Returns the lifetime


```php
public function getPrefix(): string;
```
Returns the prefix


```php
public function getSerializer(): SerializerInterface;
```
Get the serializer


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


```php
public function setDefaultSerializer( string $serializer ): void;
```



```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the event manager


```php
abstract protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
abstract protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doDeleteMultiple( array $keys ): bool;
```
Deletes multiple keys from the adapter


```php
protected function doGet( string $key, mixed $defaultValue = null ): mixed;
```



```php
protected function doGetData( string $key ): mixed;
```



```php
abstract protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache


```php
abstract protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
abstract protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


```php
protected function fire( string $eventName, mixed $keys ): void;
```
Trigger an event for the eventsManager.

@var string $eventName
@var mixed $keys


```php
protected function getArrVal( array $collection, mixed $index, mixed $defaultValue = null, string $cast = null ): mixed;
```
@todo Remove this when we get traits


```php
protected function getFilteredKeys( mixed $keys, string $prefix ): array;
```
Filters the keys array based on global and passed prefix


```php
protected function getPrefixedKey( mixed $key ): string;
```
Returns the key requested, prefixed


```php
protected function getSerializedData( mixed $content ): mixed;
```
Returns serialized data


```php
protected function getTtl( mixed $ttl ): int;
```
Calculates the TTL for a cache item


```php
protected function getUnserializedData( mixed $content, mixed $defaultValue = null ): mixed;
```
Returns unserialized data


```php
protected function initSerializer(): void;
```
Initializes the serializer

@throws SupportException




## Storage\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\Serializer\SerializerInterface`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Logger adapters


### Methods

```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Deletes data from the adapter


```php
public function deleteMultiple( array $keys ): bool;
```
Deletes multiple data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the backend
server(s)


```php
public function getKeys( string $prefix = string ): array;
```
Returns all the keys stored


```php
public function getPrefix(): string;
```
Returns the prefix for the keys


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


```php
public function setForever( string $key, mixed $value ): bool;
```
Stores data in the adapter forever. The key needs to manually deleted
from the adapter.




## Storage\Adapter\Apcu 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Apcu.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `APCUIterator`
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Support\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Apcu adapter

@property array $options


### Properties
```php
/**
 * @var string
 */
protected $prefix = ph-apcu-;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Apcu constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function setForever( string $key, mixed $value ): bool;
```
Stores data in the adapter forever. The key needs to manually deleted
from the adapter.


```php
protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doDeleteMultiple( array $keys ): bool;
```
Deletes multiple keys from APCu in a single call


```php
protected function doGetData( string $key );
```



```php
protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache


```php
protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


```php
protected function phpApcuDec( mixed $key, int $step = int ): bool | int;
```
@todo Remove the below once we get traits


```php
protected function phpApcuDelete( mixed $key ): bool | array;
```



```php
protected function phpApcuExists( mixed $key ): bool | array;
```



```php
protected function phpApcuFetch( mixed $key ): mixed;
```



```php
protected function phpApcuInc( mixed $key, int $step = int ): bool | int;
```



```php
protected function phpApcuIterator( string $pattern ): APCUIterator | bool;
```



```php
protected function phpApcuStore( mixed $key, mixed $payload, int $ttl = int ): bool | array;
```





## Storage\Adapter\Libmemcached 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Libmemcached.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Support\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Libmemcached adapter


### Properties
```php
/**
 * @var string
 */
protected $prefix = ph-memc-;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Libmemcached constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the Memcached
server(s)


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function setForever( string $key, mixed $value ): bool;
```
Stores data in the adapter forever. The key needs to manually deleted
from the adapter.


```php
protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doDeleteMultiple( array $keys ): bool;
```
Deletes multiple keys from Memcached using a single deleteMulti call


```php
protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache


```php
protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.




## Storage\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Memory.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Support\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Memory adapter

@property array $data
@property array $options


### Properties
```php
/**
 * @var array
 */
protected $data;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Memory constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function setForever( string $key, mixed $value ): bool;
```
Stores data in the adapter forever. The key needs to manually deleted
from the adapter.


```php
protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doGetData( string $key );
```



```php
protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache


```php
protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.




## Storage\Adapter\Redis 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Redis.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Support\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Redis adapter

@property array $options


### Properties
```php
/**
 * @var string
 */
protected $prefix = ph-reds-;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Redis constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the Redis
server(s)


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function setForever( string $key, mixed $value ): bool;
```
Stores data in the adapter forever. The key needs to manually deleted
from the adapter.


```php
protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doDeleteMultiple( array $keys ): bool;
```
Deletes multiple keys from Redis using a single unlink call


```php
protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache


```php
protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.




## Storage\Adapter\RedisCluster 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/RedisCluster.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`

-   __Extends__
    
    `Redis`

-   __Implements__
    

RedisCluster adapter

@property array $options


### Properties
```php
/**
 * @var string
 */
protected $prefix = ph-redc-;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
You can create and connect to a cluster either by passing it one or more
'seed' nodes, or by defining these in redis.ini as a 'named' cluster.

If you are connecting with the cluster by offering a name, that is
configured in redis.ini:

     ```
     # In redis.ini
     redis.clusters.seeds = "mycluster[]=localhost:7000&test[]=localhost:7001"
     redis.clusters.timeout = "mycluster=5"
     redis.clusters.read_timeout = "mycluster=10"
     redis.clusters.auth = "mycluster=password"
     ```
you can use `$options = ["name" => "mycluster"]`.

If you don't have cluster seeds configured in your redis.ini,
you should pass hosts as an array,
eg. `$options = ["hosts" => ["a-host:7000", "b-host:7001"]]`.

You can provide authentication data offering a string `user=password`
or array `["user" => "name", "password" => "secret"]`.

The `timeout` is the amount of time library will wait when connecting
or writing to the cluster. `readTimeout` is the amount of time library
will wait for a result from the cluster.

The `context` is an array of values used for ssl/tls stream context
options eg `["verify_peer" => 0, "local_cert" => "file:///path/to/cert.pem"]`


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the Redis
Cluster server(s)




## Storage\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `FilesystemIterator`
    - `Iterator`
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Storage\Traits\StorageErrorHandlerTrait`
    - `Phalcon\Support\Exception`
    - `RecursiveDirectoryIterator`
    - `RecursiveIteratorIterator`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Stream adapter

@property string $storageDir
@property array  $options


### Properties
```php
/**
 * @var string
 */
protected $prefix = ph-strm;

/**
 * @var string
 */
protected $storageDir = ;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Stream constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function setForever( string $key, mixed $value ): bool;
```
Stores data in the adapter forever. The key needs to manually deleted
from the adapter.


```php
protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doGet( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache and is not expired


```php
protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.


```php
protected function phpFileExists( string $filename ): bool;
```
@todo Remove the methods below when we get traits


```php
protected function phpFileGetContents( string $filename ): string | bool;
```



```php
protected function phpFilePutContents( string $filename, mixed $data, int $flags = int, mixed $context = null ): int | bool;
```



```php
protected function phpFopen( string $filename, string $mode ): mixed;
```



```php
protected function phpUnlink( string $filename ): bool;
```





## Storage\Adapter\Weak 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Adapter/Weak.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Storage\Serializer\SerializerInterface`
    - `Phalcon\Support\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

* Weak Adapter
*/

### Properties
```php
/**
 *
 *
 * @var int|null
 */
protected $fetching;

/**
 * @var array
 */
protected $weakList;

/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Constructor, there are no options


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function setDefaultSerializer( string $serializer ): void;
```
will never set a serializer, WeakReference cannot be serialized


```php
public function setForever( string $key, mixed $value ): bool;
```
For compatiblity only, there is no Forever with WeakReference.


```php
protected function doDecrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number — not supported for WeakReference


```php
protected function doDelete( string $key ): bool;
```
Deletes data from the adapter


```php
protected function doGet( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
protected function doHas( string $key ): bool;
```
Checks if an element exists in the cache


```php
protected function doIncrement( string $key, int $value = int ): int | bool;
```
Increments a stored number — not supported for WeakReference


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If the TTL is `null` (default) or not defined
then the default TTL will be used, as set in this adapter. If the TTL
is `0` or a negative number, a `delete()` will be issued, since this
item has expired. If you need to set this key forever, you should use
the `setForever()` method.




## Storage\AdapterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/AdapterFactory.zep)


-   __Namespace__

    - `Phalcon\Storage`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Storage\Adapter\AdapterInterface`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Properties
```php
/**
 * @var SerializerFactory
 */
private $serializerFactory;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $services = [] );
```
AdapterFactory constructor.


```php
public function newInstance( string $name, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter


```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available adapters




## Storage\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Exception.zep)


-   __Namespace__

    - `Phalcon\Storage`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Storage\Exception

Exceptions thrown in Phalcon\Storage will use this class




## Storage\Serializer\AbstractSerializer ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/AbstractSerializer.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `SerializerInterface`

@property mixed $data
@property bool  $isSuccess


### Properties
```php
/**
 * @var mixed
 */
protected $data;

/**
 * @var bool
 */
protected $isSuccess = true;

```

### Methods

```php
public function __construct( mixed $data = null );
```
AbstractSerializer constructor.


```php
public function __serialize(): array;
```
Serialize data


```php
public function __unserialize( array $data ): void;
```
Unserialize data


```php
public function getData(): mixed;
```



```php
public function isSuccess(): bool;
```
Returns `true` if the serialize/unserialize operation was successful;
`false` otherwise


```php
public function setData( mixed $data ): void;
```



```php
protected function isSerializable( mixed $data ): bool;
```
If this returns true, then the data is returned as is




## Storage\Serializer\Base64 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Base64.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `InvalidArgumentException`

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function serialize(): string;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data


```php
protected function phpBase64Decode( string $input, bool $strict = bool );
```
Wrapper for base64_decode




## Storage\Serializer\Igbinary 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Igbinary.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function serialize(): mixed;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data


```php
protected function doSerialize( mixed $value ): string | null;
```
Serialize


```php
protected function doUnserialize( mixed $value );
```
Unserialize


```php
protected function phpIgbinarySerialize( mixed $value ): string | null;
```
Wrapper for `igbinary_serialize`




## Storage\Serializer\Json 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Json.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `InvalidArgumentException`
    - `Phalcon\Support\Helper\Json\Decode`
    - `Phalcon\Support\Helper\Json\Encode`

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Properties
```php
/**
 * @var Decode
 */
private $decode;

/**
 * @var Encode
 */
private $encode;

```

### Methods

```php
public function __construct( mixed $data = null );
```
AbstractSerializer constructor.


```php
public function serialize(): mixed;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\MemcachedIgbinary 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedIgbinary.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Memcached 'igbinary' serializer



## Storage\Serializer\MemcachedJson 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedJson.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Memcached 'json' serializer



## Storage\Serializer\MemcachedPhp 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/MemcachedPhp.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Memcached 'php' serializer



## Storage\Serializer\Msgpack 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Msgpack.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `Igbinary`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
protected function doSerialize( mixed $value ): string;
```
Serializes data


```php
protected function doUnserialize( mixed $value );
```





## Storage\Serializer\None 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/None.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function serialize(): mixed;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\Php 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/Php.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `InvalidArgumentException`

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function serialize(): mixed;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\RedisIgbinary 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisIgbinary.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Redis 'igbinary' serializer



## Storage\Serializer\RedisJson 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisJson.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Redis 'json' serializer



## Storage\Serializer\RedisMsgpack 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisMsgpack.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Redis 'msgpack' serializer



## Storage\Serializer\RedisNone 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisNone.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Redis 'none' serializer



## Storage\Serializer\RedisPhp 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/RedisPhp.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `None`

-   __Implements__
    

Serializer using the built-in Redis 'php' serializer



## Storage\Serializer\SerializerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/Serializer/SerializerInterface.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `Serializable`

-   __Extends__
    
    `Serializable`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function getData(): mixed;
```



```php
public function setData( mixed $data ): void;
```





## Storage\SerializerFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Storage/SerializerFactory.zep)


-   __Namespace__

    - `Phalcon\Storage`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Storage\Serializer\SerializerInterface`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( array $services = [] );
```
SerializerFactory constructor.


```php
public function newInstance( string $name ): SerializerInterface;
```



```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available adapters


