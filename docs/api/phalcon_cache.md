---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Cache\Cache 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Cache.zep)


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
Phalcon\Cache implements PSR-16.


## Properties
```php
/**
 * The adapter
 *
 * @var AdapterInterface
 */
protected $adapter;

```

## Methods

```php
public function __construct( AdapterInterface $adapter );
```
Constructor.


```php
public function clear(): bool;
```
Wipes clean the entire cache's keys.


```php
public function delete( mixed $key ): bool;
```
Delete an item from the cache by its unique key.


```php
public function deleteMultiple( mixed $keys ): bool;
```
Deletes multiple cache items in a single operation.


```php
public function get( mixed $key, mixed $defaultValue = null ): mixed;
```
Fetches a value from the cache.


```php
public function getAdapter(): AdapterInterface
```



```php
public function getMultiple( mixed $keys, mixed $defaultValue = null ): mixed;
```
Obtains multiple cache items by their unique keys.


```php
public function has( mixed $key ): bool;
```
Determines whether an item is present in the cache.


```php
public function set( mixed $key, mixed $value, mixed $ttl = null ): bool;
```
Persists data in the cache, uniquely referenced by a key with an optional expiration TTL time.


```php
public function setMultiple( mixed $values, mixed $ttl = null ): bool;
```
Persists a set of key => value pairs in the cache, with an optional TTL.


```php
protected function checkKey( mixed $key ): void;
```
Checks the key. If it contains invalid characters an exception is thrown


```php
protected function checkKeys( mixed $keys ): void;
```
Checks the key. If it contains invalid characters an exception is thrown




## Cache\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Cache\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\Adapter\AdapterInterface`

-   __Extends__
    
    `StorageAdapterInterface`

-   __Implements__
    

Interface for Phalcon\Cache adapters



## Cache\Adapter\Apcu 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Adapter/Apcu.zep)


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



## Cache\Adapter\Libmemcached 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Adapter/Libmemcached.zep)


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



## Cache\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Adapter/Memory.zep)


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



## Cache\Adapter\Redis 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Adapter/Redis.zep)


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



## Cache\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Adapter/Stream.zep)


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



## Cache\AdapterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/AdapterFactory.zep)


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
public function __construct( SerializerFactory $factory = null, array $services = [] );
```
AdapterFactory constructor.


```php
public function newInstance( string $name, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter


```php
protected function getAdapters(): array;
```
Returns the available adapters




## Cache\CacheFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/CacheFactory.zep)


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
public function load( mixed $config ): mixed;
```
Factory to create an instance from a Config object


```php
public function newInstance( string $name, array $options = [] ): CacheInterface;
```
Constructs a new Cache instance.




## Cache\Exception\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Exception/Exception.zep)


-   __Namespace__

    - `Phalcon\Cache\Exception`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cache will use this class



## Cache\Exception\InvalidArgumentException 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Cache/Exception/InvalidArgumentException.zep)


-   __Namespace__

    - `Phalcon\Cache\Exception`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cache will use this class
