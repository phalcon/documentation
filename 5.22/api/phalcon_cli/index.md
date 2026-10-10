---
title: "Phalcon Cli"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Cli

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Cli\Console

Class

This component allows to create CLI applications using Phalcon

- `\stdClass`
  - [`Phalcon\Di\Injectable`](/5.22/api/phalcon_di/#diinjectable)
    - [`Phalcon\Application\AbstractApplication`](/5.22/api/phalcon_application/#applicationabstractapplication)
      - **`Phalcon\Cli\Console`**

`Closure` · `Phalcon\Application\AbstractApplication` · `Phalcon\Cli\Console\Exceptions\ContainerRequired` · `Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition` · `Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound` · `Phalcon\Cli\Router\Route` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\ModuleDefinitionInterface` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public handle(array|null $arguments = null)` — Handle the whole command-line tasks

- `public setArgument(array|null $arguments = null, bool $str = true, bool $shift = true): static` — Set a specific argument

### Properties

- `protected mixed $arguments = []`

- `protected array $options = []`

### Methods

<h4 id="cliconsole-handle"><code>handle()</code></h4>

```php
public function handle( array|null $arguments = null );
```

Handle the whole command-line tasks

<h4 id="cliconsole-setargument"><code>setArgument()</code></h4>

```php
public function setArgument(
    array|null $arguments = null,
    bool $str = true,
    bool $shift = true
): static;
```

Set a specific argument


## Cli\Console\Exception

Class

Exceptions thrown in Phalcon\Cli\Console will use this class

- `\Exception`
  - [`Phalcon\Application\Exception`](/5.22/api/phalcon_application/#applicationexception)
    - **`Phalcon\Cli\Console\Exception`**
      - [`Phalcon\Cli\Console\Exceptions\ContainerRequired`](#cliconsoleexceptionscontainerrequired)
      - [`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`](#cliconsoleexceptionsinvalidmoduledefinition)
      - [`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`](#cliconsoleexceptionsmoduledefinitionpathnotfound)


## Cli\Console\Exceptions\ContainerRequired

Class

- `\Exception`
  - [`Phalcon\Application\Exception`](/5.22/api/phalcon_application/#applicationexception)
    - [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
      - **`Phalcon\Cli\Console\Exceptions\ContainerRequired`**

`Phalcon\Cli\Console\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="cliconsoleexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Cli\Console\Exceptions\InvalidModuleDefinition

Class

- `\Exception`
  - [`Phalcon\Application\Exception`](/5.22/api/phalcon_application/#applicationexception)
    - [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
      - **`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`**

`Phalcon\Cli\Console\Exception`

### Method Summary

- `public __construct(string|null $name = null, string|null $reason = null)`

### Methods

<h4 id="cliconsoleexceptionsinvalidmoduledefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string|null $name = null,
    string|null $reason = null
);
```


## Cli\Console\Exceptions\ModuleDefinitionPathNotFound

Class

- `\Exception`
  - [`Phalcon\Application\Exception`](/5.22/api/phalcon_application/#applicationexception)
    - [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
      - **`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`**

`Phalcon\Cli\Console\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="cliconsoleexceptionsmoduledefinitionpathnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Cli\Dispatcher

Class

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

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.22/api/phalcon_di/#diabstractinjectionaware)
    - [`Phalcon\Dispatcher\AbstractDispatcher`](/5.22/api/phalcon_dispatcher/#dispatcherabstractdispatcher)
      - **`Phalcon\Cli\Dispatcher`** - implements [`Phalcon\Cli\DispatcherInterface`](#clidispatcherinterface)

`Phalcon\Cli\Dispatcher\Exception` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Dispatcher\AbstractDispatcher` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterInterface`

### Method Summary

- `public callActionMethod(mixed $handler, string $actionMethod, array $params = []): mixed` — Calls the action method.

- `public getActiveTask(): TaskInterface` — Returns the active task in the dispatcher

- `public getLastTask(): TaskInterface` — Returns the latest dispatched controller

- `public getOption(mixed $option, mixed $filters = null, mixed $defaultValue = null): mixed` — Gets an option by its name or numeric index

- `public getOptions(): array` — Get dispatched options

- `public getTaskName(): string` — Gets last dispatched task name

- `public getTaskSuffix(): string` — Gets the default task suffix

- `public hasOption(mixed $option): bool` — Check if an option exists

- `public setDefaultTask(string $taskName): void` — Sets the default task name

- `public setOptions(array $options): void` — Set the options to be dispatched

- `public setTaskName(string $taskName): void` — Sets the task name to be dispatched

- `public setTaskSuffix(string $taskSuffix): void` — Sets the default task suffix

- `protected handleException(\Exception $exception)` — Handles a user exception

- `protected throwDispatchException(string $message, int $exceptionCode = 0)` — Throws an internal exception

### Properties

- `protected string $defaultAction = "main"`

- `protected string $defaultHandler = "main"`

- `protected string $handlerSuffix = "Task"`

- `protected array $options = []`

### Methods

<h4 id="clidispatcher-callactionmethod"><code>callActionMethod()</code></h4>

```php
public function callActionMethod(
    mixed $handler,
    string $actionMethod,
    array $params = []
): mixed;
```

Calls the action method.

The CLI options collected by the dispatcher are appended to the
positional `parameters` before the call, so a task action receives any
options as trailing arguments after its declared parameters.

<h4 id="clidispatcher-getactivetask"><code>getActiveTask()</code></h4>

```php
public function getActiveTask(): TaskInterface;
```

Returns the active task in the dispatcher

<h4 id="clidispatcher-getlasttask"><code>getLastTask()</code></h4>

```php
public function getLastTask(): TaskInterface;
```

Returns the latest dispatched controller

<h4 id="clidispatcher-getoption"><code>getOption()</code></h4>

```php
public function getOption(
    mixed $option,
    mixed $filters = null,
    mixed $defaultValue = null
): mixed;
```

Gets an option by its name or numeric index

<h4 id="clidispatcher-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Get dispatched options

<h4 id="clidispatcher-gettaskname"><code>getTaskName()</code></h4>

```php
public function getTaskName(): string;
```

Gets last dispatched task name

<h4 id="clidispatcher-gettasksuffix"><code>getTaskSuffix()</code></h4>

```php
public function getTaskSuffix(): string;
```

Gets the default task suffix

<h4 id="clidispatcher-hasoption"><code>hasOption()</code></h4>

```php
public function hasOption( mixed $option ): bool;
```

Check if an option exists

<h4 id="clidispatcher-setdefaulttask"><code>setDefaultTask()</code></h4>

```php
public function setDefaultTask( string $taskName ): void;
```

Sets the default task name

<h4 id="clidispatcher-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): void;
```

Set the options to be dispatched

<h4 id="clidispatcher-settaskname"><code>setTaskName()</code></h4>

```php
public function setTaskName( string $taskName ): void;
```

Sets the task name to be dispatched

<h4 id="clidispatcher-settasksuffix"><code>setTaskSuffix()</code></h4>

```php
public function setTaskSuffix( string $taskSuffix ): void;
```

Sets the default task suffix

<h4 id="clidispatcher-handleexception"><code>handleException()</code></h4>

```php
protected function handleException( \Exception $exception );
```

Handles a user exception

<h4 id="clidispatcher-throwdispatchexception"><code>throwDispatchException()</code></h4>

```php
protected function throwDispatchException(
    string $message,
    int $exceptionCode = 0
);
```

Throws an internal exception


## Cli\DispatcherInterface

Interface

Interface for Phalcon\Cli\Dispatcher

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](/5.22/api/phalcon_contracts/#contractsdispatcherdispatcher)
  - [`Phalcon\Contracts\Cli\Dispatcher`](/5.22/api/phalcon_contracts/#contractsclidispatcher)
    - **`Phalcon\Cli\DispatcherInterface`**

`Phalcon\Contracts\Cli\Dispatcher`


## Cli\Dispatcher\Exception

Class

Exceptions thrown in Phalcon\Cli\Dispatcher will use this class

- `\Exception`
  - [`Phalcon\Dispatcher\Exception`](/5.22/api/phalcon_dispatcher/#dispatcherexception)
    - **`Phalcon\Cli\Dispatcher\Exception`**


## Cli\Router

Class

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

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.22/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Cli\Router`** - implements [`Phalcon\Cli\RouterInterface`](#clirouterinterface)

`Phalcon\Cli\Router\Exception` · `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType` · `Phalcon\Cli\Router\Route` · `Phalcon\Cli\Router\RouteInterface` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface`

### Method Summary

- `public __construct(bool $defaultRoutes = true)` — Phalcon\Cli\Router constructor

- `public add(string $pattern, mixed $paths = null): RouteInterface` — Adds a route to the router

- `public getActionName(): string` — Returns processed action name

- `public getMatchedRoute(): RouteInterface|null` — Returns the route that matches the handled URI

- `public getMatches(): array` — Returns the sub expressions in the regular expression matched

- `public getModuleName(): string` — Returns processed module name

- `public getParameters(): array` — Returns processed extra params

- `public getParams(): array` — Returns processed extra params

- `public getRouteById(mixed $id): bool|RouteInterface` — Returns a route object by its id

- `public getRouteByName(string $name): bool|RouteInterface` — Returns a route object by its name

- `public getRoutes(): Route[]` — Returns all the routes defined in the router

- `public getTaskName(): string` — Returns processed task name

- `public handle(mixed $arguments = null)` — Handles routing information received from command-line arguments

- `public setDefaultAction(string $actionName): static` — Sets the default action name

- `public setDefaultModule(string $moduleName): static` — Sets the name of the default module

- `public setDefaultTask(string $taskName): static` — Sets the default controller name

- `public setDefaults(array $defaults): static` — Sets an array of default paths. If a route is missing a path the router

- `public wasMatched(): bool` — Checks if the router matches any of the defined routes

### Properties

- `protected string $action = ""`

- `protected string $defaultAction = ""`

- `protected string $defaultModule = ""`

- `protected array $defaultParams = []`

- `protected string $defaultTask = ""`

- `protected RouteInterface|null $matchedRoute = null`

- `protected array<array-key, string> $matches = []`

- `protected string $module = ""`

- `protected array $params = []`

- `protected array $routes = []`

- `protected string $task = ""`

- `protected bool $wasMatched = false`

### Methods

<h4 id="clirouter-__construct"><code>__construct()</code></h4>

```php
public function __construct( bool $defaultRoutes = true );
```

Phalcon\Cli\Router constructor

<h4 id="clirouter-add"><code>add()</code></h4>

```php
public function add(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router

```php
$router->add("/about", "About::main");
```

<h4 id="clirouter-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Returns processed action name

<h4 id="clirouter-getmatchedroute"><code>getMatchedRoute()</code></h4>

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

<h4 id="clirouter-getmatches"><code>getMatches()</code></h4>

```php
public function getMatches(): array;
```

Returns the sub expressions in the regular expression matched

<h4 id="clirouter-getmodulename"><code>getModuleName()</code></h4>

```php
public function getModuleName(): string;
```

Returns processed module name

<h4 id="clirouter-getparameters"><code>getParameters()</code></h4>

```php
public function getParameters(): array;
```

Returns processed extra params

<h4 id="clirouter-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Returns processed extra params

<h4 id="clirouter-getroutebyid"><code>getRouteById()</code></h4>

```php
public function getRouteById( mixed $id ): bool|RouteInterface;
```

Returns a route object by its id

<h4 id="clirouter-getroutebyname"><code>getRouteByName()</code></h4>

```php
public function getRouteByName( string $name ): bool|RouteInterface;
```

Returns a route object by its name

<h4 id="clirouter-getroutes"><code>getRoutes()</code></h4>

```php
public function getRoutes(): Route[];
```

Returns all the routes defined in the router

<h4 id="clirouter-gettaskname"><code>getTaskName()</code></h4>

```php
public function getTaskName(): string;
```

Returns processed task name

<h4 id="clirouter-handle"><code>handle()</code></h4>

```php
public function handle( mixed $arguments = null );
```

Handles routing information received from command-line arguments

<h4 id="clirouter-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): static;
```

Sets the default action name

<h4 id="clirouter-setdefaultmodule"><code>setDefaultModule()</code></h4>

```php
public function setDefaultModule( string $moduleName ): static;
```

Sets the name of the default module

<h4 id="clirouter-setdefaulttask"><code>setDefaultTask()</code></h4>

```php
public function setDefaultTask( string $taskName ): static;
```

Sets the default controller name

<h4 id="clirouter-setdefaults"><code>setDefaults()</code></h4>

```php
public function setDefaults( array $defaults ): static;
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

<h4 id="clirouter-wasmatched"><code>wasMatched()</code></h4>

```php
public function wasMatched(): bool;
```

Checks if the router matches any of the defined routes


## Cli\RouterInterface

Interface

Interface for Phalcon\Cli\Router

- **`Phalcon\Cli\RouterInterface`**

`Phalcon\Cli\Router\RouteInterface` · `Phalcon\Contracts\Cli\CliTypes`

### Method Summary

- `public add(string $pattern, mixed $paths = null): RouteInterface` — Adds a route to the router on any HTTP method

- `public getActionName(): string` — Returns processed action name

- `public getMatchedRoute(): RouteInterface|null` — Returns the route that matches the handled URI

- `public getMatches(): array` — Return the sub expressions in the regular expression matched

- `public getModuleName(): string` — Returns processed module name

- `public getParameters(): array` — Returns processed extra params

- `public getParams(): array` — Returns processed extra params

- `public getRouteById(mixed $id): bool|RouteInterface` — Returns a route object by its id

- `public getRouteByName(string $name): bool|RouteInterface` — Returns a route object by its name

- `public getRoutes(): RouteInterface[]` — Return all the routes defined in the router

- `public getTaskName(): string` — Returns processed task name

- `public handle(mixed $arguments = null)` — Handles routing information received from the rewrite engine.

- `public setDefaultAction(string $actionName): RouterInterface` — Sets the default action name

- `public setDefaultModule(string $moduleName): RouterInterface` — Sets the name of the default module

- `public setDefaultTask(string $taskName): RouterInterface` — Sets the default task name

- `public setDefaults(array $defaults): RouterInterface` — Sets an array of default paths

- `public wasMatched(): bool` — Check if the router matches any of the defined routes

### Methods

<h4 id="clirouterinterface-add"><code>add()</code></h4>

```php
public function add(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router on any HTTP method

<h4 id="clirouterinterface-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Returns processed action name

<h4 id="clirouterinterface-getmatchedroute"><code>getMatchedRoute()</code></h4>

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

<h4 id="clirouterinterface-getmatches"><code>getMatches()</code></h4>

```php
public function getMatches(): array;
```

Return the sub expressions in the regular expression matched

<h4 id="clirouterinterface-getmodulename"><code>getModuleName()</code></h4>

```php
public function getModuleName(): string;
```

Returns processed module name

<h4 id="clirouterinterface-getparameters"><code>getParameters()</code></h4>

```php
public function getParameters(): array;
```

Returns processed extra params

<h4 id="clirouterinterface-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Returns processed extra params

<h4 id="clirouterinterface-getroutebyid"><code>getRouteById()</code></h4>

```php
public function getRouteById( mixed $id ): bool|RouteInterface;
```

Returns a route object by its id

@todo change param type to string

<h4 id="clirouterinterface-getroutebyname"><code>getRouteByName()</code></h4>

```php
public function getRouteByName( string $name ): bool|RouteInterface;
```

Returns a route object by its name

<h4 id="clirouterinterface-getroutes"><code>getRoutes()</code></h4>

```php
public function getRoutes(): RouteInterface[];
```

Return all the routes defined in the router

<h4 id="clirouterinterface-gettaskname"><code>getTaskName()</code></h4>

```php
public function getTaskName(): string;
```

Returns processed task name

<h4 id="clirouterinterface-handle"><code>handle()</code></h4>

```php
public function handle( mixed $arguments = null );
```

Handles routing information received from the rewrite engine.

When `arguments` is a string (or null), it is matched against the
registered routes. When it is an array, matching is bypassed entirely:
the array is treated as the already-resolved module/task/action/params,
so `wasMatched()` stays false and `getMatchedRoute()` returns null even
though routing succeeded.

<h4 id="clirouterinterface-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): RouterInterface;
```

Sets the default action name

<h4 id="clirouterinterface-setdefaultmodule"><code>setDefaultModule()</code></h4>

```php
public function setDefaultModule( string $moduleName ): RouterInterface;
```

Sets the name of the default module

<h4 id="clirouterinterface-setdefaulttask"><code>setDefaultTask()</code></h4>

```php
public function setDefaultTask( string $taskName ): RouterInterface;
```

Sets the default task name

<h4 id="clirouterinterface-setdefaults"><code>setDefaults()</code></h4>

```php
public function setDefaults( array $defaults ): RouterInterface;
```

Sets an array of default paths

<h4 id="clirouterinterface-wasmatched"><code>wasMatched()</code></h4>

```php
public function wasMatched(): bool;
```

Check if the router matches any of the defined routes


## Cli\Router\Exception

Class

Exceptions thrown in Phalcon\Cli\Router will use this class

- `\Exception`
  - **`Phalcon\Cli\Router\Exception`**
    - [`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`](#clirouterexceptionsbeforematchnotcallable)
    - [`Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`](#clirouterexceptionsinvalidroutepaths)
    - [`Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`](#clirouterexceptionsrouterargumentsinvalidtype)


## Cli\Router\Exceptions\BeforeMatchNotCallable

Class

- `\Exception`
  - [`Phalcon\Cli\Router\Exception`](#clirouterexception)
    - **`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`**

`Phalcon\Cli\Router\Exception`

### Method Summary

- `public __construct(string $route = "")`

### Methods

<h4 id="clirouterexceptionsbeforematchnotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $route = "" );
```


## Cli\Router\Exceptions\InvalidRoutePaths

Class

- `\Exception`
  - [`Phalcon\Cli\Router\Exception`](#clirouterexception)
    - **`Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`**

`Phalcon\Cli\Router\Exception`

### Method Summary

- `public __construct(string $route = "")`

### Methods

<h4 id="clirouterexceptionsinvalidroutepaths-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $route = "" );
```


## Cli\Router\Exceptions\RouterArgumentsInvalidType

Class

- `\Exception`
  - [`Phalcon\Cli\Router\Exception`](#clirouterexception)
    - **`Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`**

`Phalcon\Cli\Router\Exception`

### Method Summary

- `public __construct(string $type = "")`

### Methods

<h4 id="clirouterexceptionsrouterargumentsinvalidtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type = "" );
```


## Cli\Router\Route

Class

This class represents every route added to the router

- **`Phalcon\Cli\Router\Route`** - implements [`Phalcon\Cli\Router\RouteInterface`](#clirouterrouteinterface)

`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\InvalidRoutePaths` · `Phalcon\Contracts\Cli\CliTypes`

### Method Summary

- `public __construct(string $pattern, mixed $paths = null)` — Constructor

- `public beforeMatch(mixed $callback): RouteInterface` — Sets a callback that is called if the route is matched.

- `public compilePattern(string $pattern): string` — Replaces placeholders from pattern returning a valid PCRE regular

- `public convert(string $name, mixed $converter): RouteInterface` — Adds a converter to perform an additional transformation for certain

- `public delimiter(string|null $delimiter = null): void` — Set the routing delimiter.

- `public extractNamedParams(string $pattern): array|bool` — Extracts parameters from a string

- `public getBeforeMatch(): mixed` — Returns the 'before match' callback if any

- `public getCompiledPattern(): string` — Returns the route's compiled pattern

- `public getConverters(): array` — Returns the router converter

- `public getDelimiter(): string` — Get routing delimiter

- `public getDescription(): string` — Returns the route's description

- `public getName(): string` — Returns the route's name

- `public getPaths(): array` — Returns the paths

- `public getPattern(): string` — Returns the route's pattern

- `public getReversedPaths(): array` — Returns the paths using positions as keys and names as values

- `public getRouteId(): string` — Returns the route's id

- `public reConfigure(string $pattern, mixed $paths = null): void` — Reconfigure the route adding a new pattern and a set of paths

- `public reset(): void` — Resets the internal route id generator.

- `public setDescription(string $description): RouteInterface` — Sets the route's description

- `public setName(string $name): RouteInterface` — Sets the route's name

### Constants

- `const string DEFAULT_DELIMITER = " "`

### Properties

- `protected mixed|null $beforeMatch = null`

- `protected string $compiledPattern = ""`

- `protected array $converters = []`

- `protected string $delimiter`

- `protected string $delimiterPath = self::DEFAULT_DELIMITER`

- `protected string $description = ""`

- `protected string $name = ""`

- `protected array $paths = []`

- `protected string $pattern = ""`

- `protected string $routeId`

- `protected int $uniqueId = 0`

### Methods

<h4 id="clirouterroute-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $pattern,
    mixed $paths = null
);
```

Constructor

<h4 id="clirouterroute-beforematch"><code>beforeMatch()</code></h4>

```php
public function beforeMatch( mixed $callback ): RouteInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

<h4 id="clirouterroute-compilepattern"><code>compilePattern()</code></h4>

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular
expression

<h4 id="clirouterroute-convert"><code>convert()</code></h4>

```php
public function convert(
    string $name,
    mixed $converter
): RouteInterface;
```

Adds a converter to perform an additional transformation for certain
parameter

<h4 id="clirouterroute-delimiter"><code>delimiter()</code></h4>

```php
public static function delimiter( string|null $delimiter = null ): void;
```

Set the routing delimiter.

This sets a process-global delimiter that each route captures at
construction time. Configure it once during bootstrap, before any routes
are created: routes built before and after a change keep their own
delimiter, and `Console::setArgument()` reads the current value when it
parses arguments.

<h4 id="clirouterroute-extractnamedparams"><code>extractNamedParams()</code></h4>

```php
public function extractNamedParams( string $pattern ): array|bool;
```

Extracts parameters from a string

<h4 id="clirouterroute-getbeforematch"><code>getBeforeMatch()</code></h4>

```php
public function getBeforeMatch(): mixed;
```

Returns the 'before match' callback if any

<h4 id="clirouterroute-getcompiledpattern"><code>getCompiledPattern()</code></h4>

```php
public function getCompiledPattern(): string;
```

Returns the route's compiled pattern

<h4 id="clirouterroute-getconverters"><code>getConverters()</code></h4>

```php
public function getConverters(): array;
```

Returns the router converter

<h4 id="clirouterroute-getdelimiter"><code>getDelimiter()</code></h4>

```php
public static function getDelimiter(): string;
```

Get routing delimiter

<h4 id="clirouterroute-getdescription"><code>getDescription()</code></h4>

```php
public function getDescription(): string;
```

Returns the route's description

<h4 id="clirouterroute-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the route's name

<h4 id="clirouterroute-getpaths"><code>getPaths()</code></h4>

```php
public function getPaths(): array;
```

Returns the paths

<h4 id="clirouterroute-getpattern"><code>getPattern()</code></h4>

```php
public function getPattern(): string;
```

Returns the route's pattern

<h4 id="clirouterroute-getreversedpaths"><code>getReversedPaths()</code></h4>

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

<h4 id="clirouterroute-getrouteid"><code>getRouteId()</code></h4>

```php
public function getRouteId(): string;
```

Returns the route's id

<h4 id="clirouterroute-reconfigure"><code>reConfigure()</code></h4>

```php
public function reConfigure(
    string $pattern,
    mixed $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

<h4 id="clirouterroute-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Resets the internal route id generator.

Intended for test isolation only. The router keys its route map by the
route id, so resetting the sequence while a router still holds routes
makes newly created routes overwrite existing entries.

<h4 id="clirouterroute-setdescription"><code>setDescription()</code></h4>

```php
public function setDescription( string $description ): RouteInterface;
```

Sets the route's description

<h4 id="clirouterroute-setname"><code>setName()</code></h4>

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


## Cli\Router\RouteInterface

Interface

Interface for Phalcon\Cli\Router\Route

Note: `Phalcon\Cli\Router` always constructs and returns the concrete
`Phalcon\Cli\Router\Route`, and there is no injection point for an externally
built route, so this interface is a marker for type hints rather than an
implementable contract. The fluent route API used in practice -
`beforeMatch()`, `getBeforeMatch()`, `convert()`, and `getConverters()` - is
declared on the concrete `Route` class, not here.

- **`Phalcon\Cli\Router\RouteInterface`**

`Phalcon\Contracts\Cli\CliTypes`

### Method Summary

- `public compilePattern(string $pattern): string` — Replaces placeholders from pattern returning a valid PCRE regular

- `public delimiter(string|null $delimiter = null)` — Set the routing delimiter

- `public getCompiledPattern(): string` — Returns the route's pattern

- `public getDelimiter(): string` — Get routing delimiter

- `public getDescription(): string` — Returns the route's description

- `public getName(): string` — Returns the route's name

- `public getPaths(): array` — Returns the paths

- `public getPattern(): string` — Returns the route's pattern

- `public getReversedPaths(): array` — Returns the paths using positions as keys and names as values

- `public getRouteId(): string` — Returns the route's id

- `public reConfigure(string $pattern, mixed $paths = null): void` — Reconfigure the route adding a new pattern and a set of paths

- `public reset(): void` — Resets the internal route id generator

- `public setDescription(string $description): RouteInterface` — Sets the route's description

- `public setName(string $name): RouteInterface` — Sets the route's name

### Methods

<h4 id="clirouterrouteinterface-compilepattern"><code>compilePattern()</code></h4>

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular
expression

<h4 id="clirouterrouteinterface-delimiter"><code>delimiter()</code></h4>

```php
public static function delimiter( string|null $delimiter = null );
```

Set the routing delimiter

<h4 id="clirouterrouteinterface-getcompiledpattern"><code>getCompiledPattern()</code></h4>

```php
public function getCompiledPattern(): string;
```

Returns the route's pattern

<h4 id="clirouterrouteinterface-getdelimiter"><code>getDelimiter()</code></h4>

```php
public static function getDelimiter(): string;
```

Get routing delimiter

<h4 id="clirouterrouteinterface-getdescription"><code>getDescription()</code></h4>

```php
public function getDescription(): string;
```

Returns the route's description

<h4 id="clirouterrouteinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the route's name

<h4 id="clirouterrouteinterface-getpaths"><code>getPaths()</code></h4>

```php
public function getPaths(): array;
```

Returns the paths

<h4 id="clirouterrouteinterface-getpattern"><code>getPattern()</code></h4>

```php
public function getPattern(): string;
```

Returns the route's pattern

<h4 id="clirouterrouteinterface-getreversedpaths"><code>getReversedPaths()</code></h4>

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

<h4 id="clirouterrouteinterface-getrouteid"><code>getRouteId()</code></h4>

```php
public function getRouteId(): string;
```

Returns the route's id

<h4 id="clirouterrouteinterface-reconfigure"><code>reConfigure()</code></h4>

```php
public function reConfigure(
    string $pattern,
    mixed $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

<h4 id="clirouterrouteinterface-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Resets the internal route id generator

<h4 id="clirouterrouteinterface-setdescription"><code>setDescription()</code></h4>

```php
public function setDescription( string $description ): RouteInterface;
```

Sets the route's description

<h4 id="clirouterrouteinterface-setname"><code>setName()</code></h4>

```php
public function setName( string $name ): RouteInterface;
```

Sets the route's name


## Cli\Task

Class

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

Action methods receive the routed parameters as positional arguments,
followed by any CLI options the dispatcher collected (appended as trailing
arguments). Declare optional trailing parameters to read those options.

- `\stdClass`
  - [`Phalcon\Di\Injectable`](/5.22/api/phalcon_di/#diinjectable)
    - **`Phalcon\Cli\Task`** - implements [`Phalcon\Cli\TaskInterface`](#clitaskinterface), [`Phalcon\Events\EventsAwareInterface`](/5.22/api/phalcon_events/#eventseventsawareinterface)
      - [`Phalcon\Queue\Cli\ConsumerTask`](/5.22/api/phalcon_queue/#queuecliconsumertask)

`Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

- `public __construct()` — Phalcon\Cli\Task constructor

### Methods

<h4 id="clitask-__construct"><code>__construct()</code></h4>

```php
final public function __construct();
```

Phalcon\Cli\Task constructor


## Cli\TaskInterface

Interface

Interface for task handlers

- **`Phalcon\Cli\TaskInterface`**

Source: https://docs.phalcon.io/5.22/api/phalcon_cli/index.mdx
