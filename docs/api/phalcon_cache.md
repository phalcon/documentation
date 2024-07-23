---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Cache\AbstractCache ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/AbstractCache.zep)


-   __Namespace__

    - `Phalcon\Cache`

-   __Uses__
    
    - `DateInterval`
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Cache\Exception\InvalidArgumentException`
    - `Phalcon\Events\EventsAwareInterface`
    - `Phalcon\Events\ManagerInterface`
    - `Traversable`

-   __Extends__
    

-   __Implements__
    
    - `CacheInterface`
    - `EventsAwareInterface`

This component offers caching capabilities for your application.


### Properties
```php
/**
 * The adapter
 *
 * @var AdapterInterface
 */
protected $adapter;

/**
 * Event Manager
 *
 * @var ManagerInterface|null
 */
protected $eventsManager;

```

### Methods

```php
public function __construct( AdapterInterface $adapter );
```
Constructor.


```php
public function getAdapter(): AdapterInterface;
```
Returns the current adapter


```php
public function getEventsManager(): ManagerInterface | null;
```
Get the event manager


```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the event manager


```php
protected function checkKey( string $key ): void;
```
Checks the key. If it contains invalid characters an exception is thrown


```php
protected function checkKeys( mixed $keys ): void;
```
Checks the key. If it contains invalid characters an exception is thrown


```php
protected function doClear(): bool;
```
Wipes clean the entire cache's keys.


```php
protected function doDelete( string $key ): bool;
```
Delete an item from the cache by its unique key.


```php
protected function doDeleteMultiple( mixed $keys ): bool;
```
Deletes multiple cache items in a single operation.


```php
protected function doGet( string $key, mixed $defaultValue = null ): mixed;
```
Fetches a value from the cache.


```php
protected function doGetMultiple( mixed $keys, mixed $defaultValue = null ): array;
```
Obtains multiple cache items by their unique keys.


```php
protected function doHas( string $key ): bool;
```
Determines whether an item is present in the cache.


```php
protected function doSet( string $key, mixed $value, mixed $ttl = null ): bool;
```
Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.


```php
protected function doSetMultiple( mixed $values, mixed $ttl = null ): bool;
```
Persists a set of key => value pairs in the cache, with an optional TTL.


```php
protected function fire( string $eventName, mixed $keys ): void;
```
Trigger an event for the eventsManager.


```php
abstract protected function getExceptionClass(): string;
```
Returns the exception class that will be used for exceptions thrown




## Cache\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\Adapter\AdapterInterface`

-   __Extends__
    
    `StorageAdapterInterface`

-   __Implements__
    

Interface for Phalcon\Cache adapters



## Cache\Adapter\Apcu 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Apcu.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Storage\Adapter\Apcu`

-   __Extends__
    
    `StorageApcu`

-   __Implements__
    
    - `CacheAdapterInterface`

Apcu adapter


### Properties
```php
//
protected $eventType = 'cache';

```


## Cache\Adapter\Libmemcached 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Libmemcached.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Storage\Adapter\Libmemcached`

-   __Extends__
    
    `StorageLibmemcached`

-   __Implements__
    
    - `CacheAdapterInterface`

Libmemcached adapter


### Properties
```php
//
protected $eventType = 'cache';

```


## Cache\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Memory.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Storage\Adapter\Memory`

-   __Extends__
    
    `StorageMemory`

-   __Implements__
    
    - `CacheAdapterInterface`

Memory adapter


### Properties
```php
//
protected $eventType = 'cache';

```


## Cache\Adapter\Redis 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Redis.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Storage\Adapter\Redis`

-   __Extends__
    
    `StorageRedis`

-   __Implements__
    
    - `CacheAdapterInterface`

Redis adapter


### Properties
```php
//
protected $eventType = 'cache';

```


## Cache\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Storage\Adapter\Stream`

-   __Extends__
    
    `StorageStream`

-   __Implements__
    
    - `CacheAdapterInterface`

Stream adapter


### Properties
```php
//
protected $eventType = 'cache';

```


## Cache\Adapter\Weak 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Adapter/Weak.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Storage\Adapter\Weak`

-   __Extends__
    
    `StorageWeak`

-   __Implements__
    
    - `CacheAdapterInterface`

* WeakCache implementation based on WeakReference
*/

### Properties
```php
//
protected $eventType = 'cache';

```


## Cache\AdapterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/AdapterFactory.zep)


-   __Namespace__

    - `Phalcon\Cache`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Cache\Exception\Exception`
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Storage\SerializerFactory`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

Factory to create Cache adapters


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




## Cache\Cache 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Cache.zep)


-   __Namespace__

    - `Phalcon\Cache`

-   __Uses__
    
    - `DateInterval`
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Cache\Exception\InvalidArgumentException`

-   __Extends__
    
    `AbstractCache`

-   __Implements__
    

This component offers caching capabilities for your application.


### Methods

```php
public function clear(): bool;
```
Wipes clean the entire cache's keys.


```php
public function delete( string $key ): bool;
```
Delete an item from the cache by its unique key.


```php
public function deleteMultiple( mixed $keys ): bool;
```
Deletes multiple cache items in a single operation.


```php
public function get( string $key, mixed $defaultValue = null );
```
Fetches a value from the cache.


```php
public function getMultiple( mixed $keys, mixed $defaultValue = null );
```
Obtains multiple cache items by their unique keys.


```php
public function has( string $key ): bool;
```
Determines whether an item is present in the cache.


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.


```php
public function setMultiple( mixed $values, mixed $ttl = null ): bool;
```
Persists a set of key => value pairs in the cache, with an optional TTL.


```php
protected function getExceptionClass(): string;
```
Returns the exception class that will be used for exceptions thrown




## Cache\CacheFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/CacheFactory.zep)


-   __Namespace__

    - `Phalcon\Cache`

-   __Uses__
    
    - `Phalcon\Cache\Adapter\AdapterInterface`
    - `Phalcon\Cache\Cache`
    - `Phalcon\Cache\Exception\Exception`
    - `Phalcon\Config\ConfigInterface`
    - `Phalcon\Factory\AbstractConfigFactory`

-   __Extends__
    
    `AbstractConfigFactory`

-   __Implements__
    

Creates a new Cache class


### Properties
```php
/**
 * @var AdapterFactory
 */
protected $adapterFactory;

```

### Methods

```php
public function __construct( AdapterFactory $factory );
```
Constructor


```php
public function load( mixed $config ): CacheInterface;
```
Factory to create an instance from a Config object


```php
public function newInstance( string $name, array $options = [] ): CacheInterface;
```
Constructs a new Cache instance.


```php
protected function getExceptionClass(): string;
```





## Cache\CacheInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/CacheInterface.zep)


-   __Namespace__

    - `Phalcon\Cache`

-   __Uses__
    
    - `DateInterval`
    - `Phalcon\Cache\Exception\InvalidArgumentException`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Cache\Cache


### Methods

```php
public function clear(): bool;
```
Wipes clean the entire cache's keys.


```php
public function delete( string $key ): bool;
```
Delete an item from the cache by its unique key.


```php
public function deleteMultiple( mixed $keys ): bool;
```
Deletes multiple cache items in a single operation.


```php
public function get( string $key, mixed $defaultValue = null );
```
Fetches a value from the cache.


```php
public function getMultiple( mixed $keys, mixed $defaultValue = null );
```
Obtains multiple cache items by their unique keys.


```php
public function has( string $key ): bool;
```
Determines whether an item is present in the cache.


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Persists data in the cache, uniquely referenced by a key with an optional
expiration TTL time.


```php
public function setMultiple( mixed $values, mixed $ttl = null ): bool;
```
Persists a set of key => value pairs in the cache, with an optional TTL.




## Cache\Exception\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Exception/Exception.zep)


-   __Namespace__

    - `Phalcon\Cache\Exception`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cache will use this class



## Cache\Exception\InvalidArgumentException 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cache/Exception/InvalidArgumentException.zep)


-   __Namespace__

    - `Phalcon\Cache\Exception`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cache will use this class
