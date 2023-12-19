---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Application\AbstractApplication ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Application/AbstractApplication.zep)


-   __Namespace__

    - `Phalcon\Application`

-   __Uses__
    
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Di\Injectable`
    - `Phalcon\Events\EventsAwareInterface`
    - `Phalcon\Events\ManagerInterface`

-   __Extends__
    
    `Injectable`

-   __Implements__
    
    - `EventsAwareInterface`

Base class for Phalcon\Cli\Console and Phalcon\Mvc\Application.


### Properties
```php
/**
 * @var DiInterface|null
 */
protected $container;

/**
 * @var string
 */
protected $defaultModule = ;

/**
 * @var ManagerInterface|null
 */
protected $eventsManager;

/**
 * @var array
 */
protected $modules;

```

### Methods

```php
public function __construct( DiInterface $container = null );
```
Phalcon\AbstractApplication constructor


```php
public function getDefaultModule(): string;
```
Returns the default module name


```php
public function getEventsManager(): ManagerInterface | null;
```
Returns the internal event manager


```php
public function getModule( string $name ): array | object;
```
Gets the module definition registered in the application via module name


```php
public function getModules(): array;
```
Return the modules registered in the application


```php
public function registerModules( array $modules, bool $merge = bool ): AbstractApplication;
```
Register an array of modules present in the application

```php
$this->registerModules(
    [
        "frontend" => [
            "className" => \Multiple\Frontend\Module::class,
            "path"      => "../apps/frontend/Module.php",
        ],
        "backend" => [
            "className" => \Multiple\Backend\Module::class,
            "path"      => "../apps/backend/Module.php",
        ],
    ]
);
```


```php
public function setDefaultModule( string $defaultModule ): AbstractApplication;
```
Sets the module name to be used if the router doesn't return a valid module


```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the events manager




## Application\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Application/Exception.zep)


-   __Namespace__

    - `Phalcon\Application`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Application class will use this class

