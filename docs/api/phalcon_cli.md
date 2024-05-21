---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Cli\Console 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    
    - `Phalcon\Application\AbstractApplication`
    - `Phalcon\Cli\Console\Exception`
    - `Phalcon\Cli\Router\Route`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Events\ManagerInterface`

-   __Extends__
    
    `AbstractApplication`

-   __Implements__
    

This component allows to create CLI applications using Phalcon


### Properties
```php
/**
 * @var array
 */
protected $arguments;

/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function handle( array $arguments = null );
```
Handle the whole command-line tasks


```php
public function setArgument( array $arguments = null, bool $str = bool, bool $shift = bool ): Console;
```
Set an specific argument




## Cli\Console\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exception.zep)


-   __Namespace__

    - `Phalcon\Cli\Console`

-   __Uses__
    

-   __Extends__
    
    `\Phalcon\Application\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cli\Console will use this class



## Cli\Dispatcher 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Dispatcher.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    
    - `Phalcon\Cli\Dispatcher\Exception`
    - `Phalcon\Dispatcher\AbstractDispatcher`
    - `Phalcon\Events\ManagerInterface`
    - `Phalcon\Filter\FilterInterface`

-   __Extends__
    
    `CliDispatcher`

-   __Implements__
    
    - `DispatcherInterface`

Dispatching is the process of taking the command-line arguments, extracting
the module name, task name, action name, and optional parameters contained in
it, and then instantiating a task and calling an action on it.

```php
use Phalcon\Di\Di;
use Phalcon\Cli\Dispatcher;

$di = new Di();

$dispatcher = new Dispatcher();

$dispatcher->setDi($di);

$dispatcher->setTaskName("posts");
$dispatcher->setActionName("index");
$dispatcher->setParams([]);

$handle = $dispatcher->dispatch();
```


### Properties
```php
/**
 * @var string
 */
protected $defaultHandler = main;

/**
 * @var string
 */
protected $defaultAction = main;

/**
 * @var string
 */
protected $handlerSuffix = Task;

/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function callActionMethod( mixed $handler, string $actionMethod, array $params = [] ): mixed;
```
Calls the action method.


```php
public function getActiveTask(): TaskInterface;
```
Returns the active task in the dispatcher


```php
public function getLastTask(): TaskInterface;
```
Returns the latest dispatched controller


```php
public function getOption( mixed $option, mixed $filters = null, mixed $defaultValue = null ): mixed;
```
Gets an option by its name or numeric index


```php
public function getOptions(): array;
```
Get dispatched options


```php
public function getTaskName(): string;
```
Gets last dispatched task name


```php
public function getTaskSuffix(): string;
```
Gets the default task suffix


```php
public function hasOption( mixed $option ): bool;
```
Check if an option exists


```php
public function setDefaultTask( string $taskName ): void;
```
Sets the default task name


```php
public function setOptions( array $options ): void;
```
Set the options to be dispatched


```php
public function setTaskName( string $taskName ): void;
```
Sets the task name to be dispatched


```php
public function setTaskSuffix( string $taskSuffix ): void;
```
Sets the default task suffix


```php
protected function handleException( \Exception $exception );
```
Handles a user exception


```php
protected function throwDispatchException( string $message, int $exceptionCode = int );
```
Throws an internal exception




## Cli\Dispatcher\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Dispatcher/Exception.zep)


-   __Namespace__

    - `Phalcon\Cli\Dispatcher`

-   __Uses__
    

-   __Extends__
    
    `\Phalcon\Dispatcher\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cli\Dispatcher will use this class



## Cli\DispatcherInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/DispatcherInterface.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    
    - `Phalcon\Dispatcher\DispatcherInterface`

-   __Extends__
    
    `DispatcherInterfaceBase`

-   __Implements__
    

Interface for Phalcon\Cli\Dispatcher


### Methods

```php
public function getActiveTask(): TaskInterface;
```
Returns the active task in the dispatcher


```php
public function getLastTask(): TaskInterface;
```
Returns the latest dispatched controller


```php
public function getOptions(): array;
```
Get dispatched options


```php
public function getTaskName(): string;
```
Gets last dispatched task name


```php
public function getTaskSuffix(): string;
```
Gets default task suffix


```php
public function setDefaultTask( string $taskName ): void;
```
Sets the default task name


```php
public function setOptions( array $options ): void;
```
Set the options to be dispatched


```php
public function setTaskName( string $taskName ): void;
```
Sets the task name to be dispatched


```php
public function setTaskSuffix( string $taskSuffix ): void;
```
Sets the default task suffix




## Cli\Router 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    
    - `Phalcon\Cli\RouterInterface`
    - `Phalcon\Cli\Router\Exception`
    - `Phalcon\Cli\Router\Route`
    - `Phalcon\Cli\Router\RouteInterface`
    - `Phalcon\Di\AbstractInjectionAware`
    - `Phalcon\Di\DiInterface`

-   __Extends__
    
    `AbstractInjectionAware`

-   __Implements__
    
    - `RouterInterface`

Phalcon\Cli\Router is the standard framework router. Routing is the process
of taking a command-line arguments and decomposing it into parameters to
determine which module, task, and action of that task should receive the
request.

```php
$router = new \Phalcon\Cli\Router();

$router->handle(
    [
        "module" => "main",
        "task"   => "videos",
        "action" => "process",
    ]
);

echo $router->getTaskName();
```


### Properties
```php
/**
 * @var string
 */
protected $action = ;

/**
 * @var string
 */
protected $defaultAction = ;

/**
 * @var string
 */
protected $defaultModule = ;

/**
 * @var array
 */
protected $defaultParams;

/**
 * @var string
 */
protected $defaultTask = ;

/**
 * @var RouteInterface|null
 */
protected $matchedRoute;

/**
 * @var array
 */
protected $matches;

/**
 * @var string
 */
protected $module = ;

/**
 * @var array
 */
protected $params;

/**
 * @var array
 */
protected $routes;

/**
 * @var string
 */
protected $task = ;

/**
 * @var bool
 */
protected $wasMatched = false;

```

### Methods

```php
public function __construct( bool $defaultRoutes = bool );
```
Phalcon\Cli\Router constructor


```php
public function add( string $pattern, mixed $paths = null ): RouteInterface;
```
Adds a route to the router

```php
$router->add("/about", "About::main");
```


```php
public function getActionName(): string;
```
Returns processed action name


```php
public function getMatchedRoute(): RouteInterface | null;
```
Returns the route that matches the handled URI


```php
public function getMatches(): array;
```
Returns the sub expressions in the regular expression matched


```php
public function getModuleName(): string;
```
Returns processed module name


```php
public function getParameters(): array;
```
Returns processed extra params


```php
public function getParams(): array;
```
Returns processed extra params

@todo deprecate this in future versions


```php
public function getRouteById( mixed $id ): RouteInterface | bool;
```
Returns a route object by its id


```php
public function getRouteByName( string $name ): RouteInterface | bool;
```
Returns a route object by its name


```php
public function getRoutes(): Route[];
```
Returns all the routes defined in the router


```php
public function getTaskName(): string;
```
Returns processed task name


```php
public function handle( mixed $arguments = null );
```
Handles routing information received from command-line arguments


```php
public function setDefaultAction( string $actionName ): RouterInterface;
```
Sets the default action name


```php
public function setDefaultModule( string $moduleName ): RouterInterface;
```
Sets the name of the default module


```php
public function setDefaultTask( string $taskName ): void;
```
Sets the default controller name


```php
public function setDefaults( array $defaults ): RouterInterface;
```
Sets an array of default paths. If a route is missing a path the router
will use the defined here. This method must not be used to set a 404
route

```php
$router->setDefaults(
    [
        "module" => "common",
        "action" => "index",
    ]
);
```


```php
public function wasMatched(): bool;
```
Checks if the router matches any of the defined routes




## Cli\Router\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exception.zep)


-   __Namespace__

    - `Phalcon\Cli\Router`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Cli\Router will use this class



## Cli\Router\Route 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Route.zep)


-   __Namespace__

    - `Phalcon\Cli\Router`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `RouteInterface`

This class represents every route added to the router


### Constants
```php
const DEFAULT_DELIMITER =  ;
```

### Properties
```php
/**
 * @var mixed|null
 */
protected $beforeMatch;

/**
 * @var string
 */
protected $compiledPattern = ;

/**
 * @var array
 */
protected $converters;

/**
 * @var string
 */
protected $delimiter;

/**
 * @var string
 */
protected static $delimiterPath;

/**
 * @var string
 */
protected $description = ;

/**
 * @var string
 */
protected $routeId;

/**
 * @var string
 */
protected $name = ;

/**
 * @var array
 */
protected $paths;

/**
 * @var string
 */
protected $pattern = ;

/**
 * @var int
 */
protected static $uniqueId = ;

```

### Methods

```php
public function __construct( string $pattern, mixed $paths = null );
```



```php
public function beforeMatch( mixed $callback ): RouteInterface;
```
Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched


```php
public function compilePattern( string $pattern ): string;
```
Replaces placeholders from pattern returning a valid PCRE regular
expression


```php
public function convert( string $name, mixed $converter ): RouteInterface;
```
Adds a converter to perform an additional transformation for certain
parameter


```php
public static function delimiter( string $delimiter = null ): void;
```
Set the routing delimiter


```php
public function extractNamedParams( string $pattern ): array | bool;
```
Extracts parameters from a string


```php
public function getBeforeMatch(): mixed;
```
Returns the 'before match' callback if any


```php
public function getCompiledPattern(): string;
```
Returns the route's compiled pattern


```php
public function getConverters(): array;
```
Returns the router converter


```php
public static function getDelimiter(): string;
```
Get routing delimiter


```php
public function getDescription(): string;
```
Returns the route's description


```php
public function getName(): string;
```
Returns the route's name


```php
public function getPaths(): array;
```
Returns the paths


```php
public function getPattern(): string;
```
Returns the route's pattern


```php
public function getReversedPaths(): array;
```
Returns the paths using positions as keys and names as values


```php
public function getRouteId(): string;
```
Returns the route's id


```php
public function reConfigure( string $pattern, mixed $paths = null ): void;
```
Reconfigure the route adding a new pattern and a set of paths


```php
public static function reset(): void;
```
Resets the internal route id generator


```php
public function setDescription( string $description ): RouteInterface;
```
Sets the route's description


```php
public function setName( string $name ): RouteInterface;
```
Sets the route's name

```php
$router->add(
    "/about",
    [
        "controller" => "about",
    ]
)->setName("about");
```




## Cli\Router\RouteInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/RouteInterface.zep)


-   __Namespace__

    - `Phalcon\Cli\Router`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Cli\Router\Route


### Methods

```php
public function compilePattern( string $pattern ): string;
```
Replaces placeholders from pattern returning a valid PCRE regular
expression


```php
public static function delimiter( string $delimiter = null );
```
Set the routing delimiter


```php
public function getCompiledPattern(): string;
```
Returns the route's pattern


```php
public static function getDelimiter(): string;
```
Get routing delimiter


```php
public function getDescription(): string;
```
Returns the route's description


```php
public function getName(): string;
```
Returns the route's name


```php
public function getPaths(): array;
```
Returns the paths


```php
public function getPattern(): string;
```
Returns the route's pattern


```php
public function getReversedPaths(): array;
```
Returns the paths using positions as keys and names as values


```php
public function getRouteId(): string;
```
Returns the route's id


```php
public function reConfigure( string $pattern, mixed $paths = null ): void;
```
Reconfigure the route adding a new pattern and a set of paths


```php
public static function reset(): void;
```
Resets the internal route id generator


```php
public function setDescription( string $description ): RouteInterface;
```
Sets the route's description


```php
public function setName( string $name ): RouteInterface;
```
Sets the route's name




## Cli\RouterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/RouterInterface.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    
    - `Phalcon\Cli\Router\RouteInterface`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Cli\Router


### Methods

```php
public function add( string $pattern, mixed $paths = null ): RouteInterface;
```
Adds a route to the router on any HTTP method


```php
public function getActionName(): string;
```
Returns processed action name


```php
public function getMatchedRoute(): RouteInterface | null;
```
Returns the route that matches the handled URI


```php
public function getMatches(): array;
```
Return the sub expressions in the regular expression matched


```php
public function getModuleName(): string;
```
Returns processed module name


```php
public function getParameters(): array;
```
Returns processed extra params


```php
public function getParams(): array;
```
Returns processed extra params
@todo deprecate this in the future


```php
public function getRouteById( mixed $id ): RouteInterface | bool;
```
Returns a route object by its id


```php
public function getRouteByName( string $name ): RouteInterface | bool;
```
Returns a route object by its name


```php
public function getRoutes(): RouteInterface[];
```
Return all the routes defined in the router


```php
public function getTaskName(): string;
```
Returns processed task name


```php
public function handle( mixed $arguments = null );
```
Handles routing information received from the rewrite engine


```php
public function setDefaultAction( string $actionName ): RouterInterface;
```
Sets the default action name


```php
public function setDefaultModule( string $moduleName ): RouterInterface;
```
Sets the name of the default module


```php
public function setDefaultTask( string $taskName ): void;
```
Sets the default task name


```php
public function setDefaults( array $defaults ): RouterInterface;
```
Sets an array of default paths


```php
public function wasMatched(): bool;
```
Check if the router matches any of the defined routes




## Cli\Task 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Task.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    
    - `Phalcon\Di\Injectable`
    - `Phalcon\Events\EventsAwareInterface`
    - `Phalcon\Events\ManagerInterface`

-   __Extends__
    
    `Injectable`

-   __Implements__
    
    - `EventsAwareInterface`
    - `TaskInterface`

Every command-line task should extend this class that encapsulates all the
task functionality

A task can be used to run "tasks" such as migrations, cronjobs, unit-tests,
or anything that you want. The Task class should at least have a "mainAction"
method.

```php
class HelloTask extends \Phalcon\Cli\Task
{
    // This action will be executed by default
    public function mainAction()
    {

    }

    public function findAction()
    {

    }
}
```


### Properties
```php
/**
 * @var ManagerInterface
 */
protected $eventsManager;

```

### Methods

```php
final public function __construct();
```
Phalcon\Cli\Task constructor


```php
public function getEventsManager(): ManagerInterface | null;
```
Returns the internal event manager


```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the events manager




## Cli\TaskInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/TaskInterface.zep)


-   __Namespace__

    - `Phalcon\Cli`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for task handlers

