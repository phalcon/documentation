---
title: "Phalcon Cli"
version: "6.0"
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
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Application\AbstractApplication`](/6.0/api/phalcon_application/#applicationabstractapplication)
- **`Phalcon\Cli\Console`**

`Closure` · `Phalcon\Application\AbstractApplication` · `Phalcon\Cli\Console\Exceptions\ContainerRequired` · `Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition` · `Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound` · `Phalcon\Cli\Router\Route` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Mvc\ModuleDefinitionInterface` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

<ApiItem href="#cliconsole-handle" visibility="public" name="handle" returnType="" params={[{"type":"array|null","name":"arguments","default":"null"}]}>
Handle the whole command-line tasks
</ApiItem>
<ApiItem href="#cliconsole-setargument" visibility="public" name="setArgument" returnType="static" params={[{"type":"array|null","name":"arguments","default":"null"},{"type":"bool","name":"str","default":"true"},{"type":"bool","name":"shift","default":"true"}]}>
Set a specific argument
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="arguments" type="mixed" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>

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
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- **`Phalcon\Cli\Console\Exception`**
- [`Phalcon\Cli\Console\Exceptions\ContainerRequired`](#cliconsoleexceptionscontainerrequired)
- [`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`](#cliconsoleexceptionsinvalidmoduledefinition)
- [`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`](#cliconsoleexceptionsmoduledefinitionpathnotfound)

## Cli\Console\Exceptions\ContainerRequired

Class

- `\Exception`
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
- **`Phalcon\Cli\Console\Exceptions\ContainerRequired`**

`Phalcon\Cli\Console\Exception`

### Method Summary

<ApiItem href="#cliconsoleexceptionscontainerrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="cliconsoleexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Cli\Console\Exceptions\InvalidModuleDefinition

Class

- `\Exception`
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
- **`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`**

`Phalcon\Cli\Console\Exception`

### Method Summary

<ApiItem href="#cliconsoleexceptionsinvalidmoduledefinition-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string|null","name":"name","default":"null"},{"type":"string|null","name":"reason","default":"null"}]}>
</ApiItem>

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
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
- **`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`**

`Phalcon\Cli\Console\Exception`

### Method Summary

<ApiItem href="#cliconsoleexceptionsmoduledefinitionpathnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"path","default":null}]}>
</ApiItem>

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
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- [`Phalcon\Dispatcher\AbstractDispatcher`](/6.0/api/phalcon_dispatcher/#dispatcherabstractdispatcher)
- **`Phalcon\Cli\Dispatcher`** - implements [`Phalcon\Cli\DispatcherInterface`](#clidispatcherinterface)

`Exception` · `Phalcon\Cli\Dispatcher\Exception` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\AbstractDispatcher` · `Phalcon\Filter\FilterInterface`

### Method Summary

<ApiItem href="#clidispatcher-callactionmethod" visibility="public" name="callActionMethod" returnType="mixed" params={[{"type":"mixed","name":"handler","default":null},{"type":"string","name":"actionMethod","default":null},{"type":"array","name":"parameters","default":"[]"}]}>
Calls the action method.
</ApiItem>
<ApiItem href="#clidispatcher-getactivetask" visibility="public" name="getActiveTask" returnType="TaskInterface" params={[]}>
Returns the active task in the dispatcher
</ApiItem>
<ApiItem href="#clidispatcher-getlasttask" visibility="public" name="getLastTask" returnType="TaskInterface" params={[]}>
Returns the latest dispatched controller
</ApiItem>
<ApiItem href="#clidispatcher-getoption" visibility="public" name="getOption" returnType="mixed" params={[{"type":"mixed","name":"option","default":null},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Gets an option by its name or numeric index
</ApiItem>
<ApiItem href="#clidispatcher-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Get dispatched options
</ApiItem>
<ApiItem href="#clidispatcher-gettaskname" visibility="public" name="getTaskName" returnType="string" params={[]}>
Gets last dispatched task name
</ApiItem>
<ApiItem href="#clidispatcher-gettasksuffix" visibility="public" name="getTaskSuffix" returnType="string" params={[]}>
Gets the default task suffix
</ApiItem>
<ApiItem href="#clidispatcher-hasoption" visibility="public" name="hasOption" returnType="bool" params={[{"type":"mixed","name":"option","default":null}]}>
Check if an option exists
</ApiItem>
<ApiItem href="#clidispatcher-setdefaulttask" visibility="public" name="setDefaultTask" returnType="void" params={[{"type":"string","name":"taskName","default":null}]}>
Sets the default task name
</ApiItem>
<ApiItem href="#clidispatcher-setoptions" visibility="public" name="setOptions" returnType="void" params={[{"type":"array","name":"options","default":null}]}>
Set the options to be dispatched
</ApiItem>
<ApiItem href="#clidispatcher-settaskname" visibility="public" name="setTaskName" returnType="void" params={[{"type":"string","name":"taskName","default":null}]}>
Sets the task name to be dispatched
</ApiItem>
<ApiItem href="#clidispatcher-settasksuffix" visibility="public" name="setTaskSuffix" returnType="void" params={[{"type":"string","name":"taskSuffix","default":null}]}>
Sets the default task suffix
</ApiItem>
<ApiItem href="#clidispatcher-handleexception" visibility="protected" name="handleException" returnType="" params={[{"type":"Exception","name":"exception","default":null}]}>
Handles a user exception
</ApiItem>
<ApiItem href="#clidispatcher-throwdispatchexception" visibility="protected" name="throwDispatchException" returnType="" params={[{"type":"string","name":"message","default":null},{"type":"int","name":"exceptionCode","default":"0"}]}>
Throws an internal exception
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="defaultAction" type="string" default="&quot;main&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultHandler" type="string" default="&quot;main&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlerSuffix" type="string" default="&quot;Task&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="clidispatcher-callactionmethod"><code>callActionMethod()</code></h4>

```php
public function callActionMethod(
mixed $handler,
string $actionMethod,
array $parameters = []
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
protected function handleException( Exception $exception );
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

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](/6.0/api/phalcon_contracts/#contractsdispatcherdispatcher)
- [`Phalcon\Contracts\Cli\Dispatcher`](/6.0/api/phalcon_contracts/#contractsclidispatcher)
- **`Phalcon\Cli\DispatcherInterface`**

`Phalcon\Contracts\Cli\Dispatcher`

## Cli\Dispatcher\Exception

Class

Exceptions thrown in Phalcon\Cli\Dispatcher will use this class

- `\Exception`
- [`Phalcon\Dispatcher\Exception`](/6.0/api/phalcon_dispatcher/#dispatcherexception)
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
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Cli\Router`** - implements [`Phalcon\Cli\RouterInterface`](#clirouterinterface)

`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType` · `Phalcon\Cli\Router\Route` · `Phalcon\Cli\Router\RouteInterface` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Di\AbstractInjectionAware`

### Method Summary

<ApiItem href="#clirouter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"bool","name":"defaultRoutes","default":"true"}]}>
Phalcon\Cli\Router constructor
</ApiItem>
<ApiItem href="#clirouter-add" visibility="public" name="add" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"mixed","name":"paths","default":"null"}]}>
Adds a route to the router
</ApiItem>
<ApiItem href="#clirouter-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Returns processed action name
</ApiItem>
<ApiItem href="#clirouter-getmatchedroute" visibility="public" name="getMatchedRoute" returnType="RouteInterface|null" params={[]}>
Returns the route that matches the handled URI
</ApiItem>
<ApiItem href="#clirouter-getmatches" visibility="public" name="getMatches" returnType="array" params={[]}>
Returns the sub expressions in the regular expression matched
</ApiItem>
<ApiItem href="#clirouter-getmodulename" visibility="public" name="getModuleName" returnType="string" params={[]}>
Returns processed module name
</ApiItem>
<ApiItem href="#clirouter-getparameters" visibility="public" name="getParameters" returnType="array" params={[]}>
Returns processed extra params
</ApiItem>
<ApiItem href="#clirouter-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Returns processed extra params
</ApiItem>
<ApiItem href="#clirouter-getroutebyid" visibility="public" name="getRouteById" returnType="bool|RouteInterface" params={[{"type":"mixed","name":"id","default":null}]}>
Returns a route object by its id
</ApiItem>
<ApiItem href="#clirouter-getroutebyname" visibility="public" name="getRouteByName" returnType="bool|RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns a route object by its name
</ApiItem>
<ApiItem href="#clirouter-getroutes" visibility="public" name="getRoutes" returnType="array" params={[]}>
Returns all the routes defined in the router
</ApiItem>
<ApiItem href="#clirouter-gettaskname" visibility="public" name="getTaskName" returnType="string" params={[]}>
Returns processed task name
</ApiItem>
<ApiItem href="#clirouter-handle" visibility="public" name="handle" returnType="" params={[{"type":"mixed","name":"arguments","default":"null"}]}>
Handles routing information received from command-line arguments
</ApiItem>
<ApiItem href="#clirouter-setdefaultaction" visibility="public" name="setDefaultAction" returnType="static" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the default action name
</ApiItem>
<ApiItem href="#clirouter-setdefaultmodule" visibility="public" name="setDefaultModule" returnType="static" params={[{"type":"string","name":"moduleName","default":null}]}>
Sets the name of the default module
</ApiItem>
<ApiItem href="#clirouter-setdefaulttask" visibility="public" name="setDefaultTask" returnType="static" params={[{"type":"string","name":"taskName","default":null}]}>
Sets the default controller name
</ApiItem>
<ApiItem href="#clirouter-setdefaults" visibility="public" name="setDefaults" returnType="static" params={[{"type":"array","name":"defaults","default":null}]}>
Sets an array of default paths. If a route is missing a path the router
</ApiItem>
<ApiItem href="#clirouter-wasmatched" visibility="public" name="wasMatched" returnType="bool" params={[]}>
Checks if the router matches any of the defined routes
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="action" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultAction" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultModule" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultParams" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultTask" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="matchedRoute" type="RouteInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="matches" type="array&lt;array-key, string&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="module" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="parameters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="task" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="wasMatched" type="bool" default="false">
</ApiItem>

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
public function getRoutes(): array;
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

<ApiItem href="#clirouterinterface-add" visibility="public" name="add" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"mixed","name":"paths","default":"null"}]}>
Adds a route to the router on any HTTP method
</ApiItem>
<ApiItem href="#clirouterinterface-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Returns processed action name
</ApiItem>
<ApiItem href="#clirouterinterface-getmatchedroute" visibility="public" name="getMatchedRoute" returnType="RouteInterface|null" params={[]}>
Returns the route that matches the handled URI
</ApiItem>
<ApiItem href="#clirouterinterface-getmatches" visibility="public" name="getMatches" returnType="array" params={[]}>
Return the sub expressions in the regular expression matched
</ApiItem>
<ApiItem href="#clirouterinterface-getmodulename" visibility="public" name="getModuleName" returnType="string" params={[]}>
Returns processed module name
</ApiItem>
<ApiItem href="#clirouterinterface-getparameters" visibility="public" name="getParameters" returnType="array" params={[]}>
Returns processed extra params
</ApiItem>
<ApiItem href="#clirouterinterface-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Returns processed extra params
</ApiItem>
<ApiItem href="#clirouterinterface-getroutebyid" visibility="public" name="getRouteById" returnType="bool|RouteInterface" params={[{"type":"mixed","name":"id","default":null}]}>
Returns a route object by its id
</ApiItem>
<ApiItem href="#clirouterinterface-getroutebyname" visibility="public" name="getRouteByName" returnType="bool|RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns a route object by its name
</ApiItem>
<ApiItem href="#clirouterinterface-getroutes" visibility="public" name="getRoutes" returnType="array" params={[]}>
Return all the routes defined in the router
</ApiItem>
<ApiItem href="#clirouterinterface-gettaskname" visibility="public" name="getTaskName" returnType="string" params={[]}>
Returns processed task name
</ApiItem>
<ApiItem href="#clirouterinterface-handle" visibility="public" name="handle" returnType="" params={[{"type":"mixed","name":"arguments","default":"null"}]}>
Handles routing information received from the rewrite engine.
</ApiItem>
<ApiItem href="#clirouterinterface-setdefaultaction" visibility="public" name="setDefaultAction" returnType="RouterInterface" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the default action name
</ApiItem>
<ApiItem href="#clirouterinterface-setdefaultmodule" visibility="public" name="setDefaultModule" returnType="RouterInterface" params={[{"type":"string","name":"moduleName","default":null}]}>
Sets the name of the default module
</ApiItem>
<ApiItem href="#clirouterinterface-setdefaulttask" visibility="public" name="setDefaultTask" returnType="RouterInterface" params={[{"type":"string","name":"taskName","default":null}]}>
Sets the default task name
</ApiItem>
<ApiItem href="#clirouterinterface-setdefaults" visibility="public" name="setDefaults" returnType="RouterInterface" params={[{"type":"array","name":"defaults","default":null}]}>
Sets an array of default paths
</ApiItem>
<ApiItem href="#clirouterinterface-wasmatched" visibility="public" name="wasMatched" returnType="bool" params={[]}>
Check if the router matches any of the defined routes
</ApiItem>

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
public function getRoutes(): array;
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

<ApiItem href="#clirouterexceptionsbeforematchnotcallable-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"route","default":"\"\""}]}>
</ApiItem>

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

<ApiItem href="#clirouterexceptionsinvalidroutepaths-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"route","default":"\"\""}]}>
</ApiItem>

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

<ApiItem href="#clirouterexceptionsrouterargumentsinvalidtype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":"\"\""}]}>
</ApiItem>

### Methods

<h4 id="clirouterexceptionsrouterargumentsinvalidtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type = "" );
```

## Cli\Router\Route

Class

This class represents every route added to the router

- **`Phalcon\Cli\Router\Route`** - implements [`Phalcon\Cli\Router\RouteInterface`](#clirouterrouteinterface)

`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\InvalidRoutePaths` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`

### Method Summary

<ApiItem href="#clirouterroute-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"pattern","default":null},{"type":"mixed","name":"paths","default":"null"}]}>
Constructor
</ApiItem>
<ApiItem href="#clirouterroute-beforematch" visibility="public" name="beforeMatch" returnType="RouteInterface" params={[{"type":"mixed","name":"callback","default":null}]}>
Sets a callback that is called if the route is matched.
</ApiItem>
<ApiItem href="#clirouterroute-compilepattern" visibility="public" name="compilePattern" returnType="string" params={[{"type":"string","name":"pattern","default":null}]}>
Replaces placeholders from pattern returning a valid PCRE regular
</ApiItem>
<ApiItem href="#clirouterroute-convert" visibility="public" name="convert" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"converter","default":null}]}>
Adds a converter to perform an additional transformation for certain
</ApiItem>
<ApiItem href="#clirouterroute-delimiter" visibility="public" name="delimiter" returnType="void" params={[{"type":"string|null","name":"delimiter","default":"null"}]}>
Set the routing delimiter.
</ApiItem>
<ApiItem href="#clirouterroute-extractnamedparams" visibility="public" name="extractNamedParams" returnType="array|bool" params={[{"type":"string","name":"pattern","default":null}]}>
Extracts parameters from a string
</ApiItem>
<ApiItem href="#clirouterroute-getbeforematch" visibility="public" name="getBeforeMatch" returnType="mixed" params={[]}>
Returns the 'before match' callback if any
</ApiItem>
<ApiItem href="#clirouterroute-getcompiledpattern" visibility="public" name="getCompiledPattern" returnType="string" params={[]}>
Returns the route's compiled pattern
</ApiItem>
<ApiItem href="#clirouterroute-getconverters" visibility="public" name="getConverters" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#clirouterroute-getdelimiter" visibility="public" name="getDelimiter" returnType="string|null" params={[]}>
Get routing delimiter
</ApiItem>
<ApiItem href="#clirouterroute-getdescription" visibility="public" name="getDescription" returnType="string" params={[]}>
Returns the route's description
</ApiItem>
<ApiItem href="#clirouterroute-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the route's name
</ApiItem>
<ApiItem href="#clirouterroute-getpaths" visibility="public" name="getPaths" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#clirouterroute-getpattern" visibility="public" name="getPattern" returnType="string" params={[]}>
Returns the route's pattern
</ApiItem>
<ApiItem href="#clirouterroute-getreversedpaths" visibility="public" name="getReversedPaths" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#clirouterroute-getrouteid" visibility="public" name="getRouteId" returnType="string" params={[]}>
Returns the route's id
</ApiItem>
<ApiItem href="#clirouterroute-reconfigure" visibility="public" name="reConfigure" returnType="void" params={[{"type":"string","name":"pattern","default":null},{"type":"mixed","name":"paths","default":"null"}]}>
Reconfigure the route adding a new pattern and a set of paths
</ApiItem>
<ApiItem href="#clirouterroute-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets the internal route id generator.
</ApiItem>
<ApiItem href="#clirouterroute-setdescription" visibility="public" name="setDescription" returnType="RouteInterface" params={[{"type":"string","name":"description","default":null}]}>
Sets the route's description
</ApiItem>
<ApiItem href="#clirouterroute-setname" visibility="public" name="setName" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Sets the route's name
</ApiItem>

### Constants

<ApiItem kind="constant" name="DEFAULT_DELIMITER" type="string" default="&quot; &quot;">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="beforeMatch" type="mixed|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="compiledPattern" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="converters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="delimiter" type="string|null" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="delimiterPath" type="string|null" default="self::DEFAULT_DELIMITER">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="description" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="paths" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pattern" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routeId" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uniqueId" type="int" default="0">
</ApiItem>

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

<h4 id="clirouterroute-getdelimiter"><code>getDelimiter()</code></h4>

```php
public static function getDelimiter(): string|null;
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

<h4 id="clirouterroute-getpattern"><code>getPattern()</code></h4>

```php
public function getPattern(): string;
```

Returns the route's pattern

<h4 id="clirouterroute-getreversedpaths"><code>getReversedPaths()</code></h4>

```php
public function getReversedPaths(): array;
```

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

<ApiItem href="#clirouterrouteinterface-compilepattern" visibility="public" name="compilePattern" returnType="string" params={[{"type":"string","name":"pattern","default":null}]}>
Replaces placeholders from pattern returning a valid PCRE regular
</ApiItem>
<ApiItem href="#clirouterrouteinterface-delimiter" visibility="public" name="delimiter" returnType="" params={[{"type":"string|null","name":"delimiter","default":"null"}]}>
Set the routing delimiter
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getcompiledpattern" visibility="public" name="getCompiledPattern" returnType="string" params={[]}>
Returns the route's pattern
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getdelimiter" visibility="public" name="getDelimiter" returnType="string|null" params={[]}>
Get routing delimiter
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getdescription" visibility="public" name="getDescription" returnType="string" params={[]}>
Returns the route's description
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the route's name
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getpaths" visibility="public" name="getPaths" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getpattern" visibility="public" name="getPattern" returnType="string" params={[]}>
Returns the route's pattern
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getreversedpaths" visibility="public" name="getReversedPaths" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#clirouterrouteinterface-getrouteid" visibility="public" name="getRouteId" returnType="string" params={[]}>
Returns the route's id
</ApiItem>
<ApiItem href="#clirouterrouteinterface-reconfigure" visibility="public" name="reConfigure" returnType="void" params={[{"type":"string","name":"pattern","default":null},{"type":"mixed","name":"paths","default":"null"}]}>
Reconfigure the route adding a new pattern and a set of paths
</ApiItem>
<ApiItem href="#clirouterrouteinterface-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets the internal route id generator
</ApiItem>
<ApiItem href="#clirouterrouteinterface-setdescription" visibility="public" name="setDescription" returnType="RouteInterface" params={[{"type":"string","name":"description","default":null}]}>
Sets the route's description
</ApiItem>
<ApiItem href="#clirouterrouteinterface-setname" visibility="public" name="setName" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Sets the route's name
</ApiItem>

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
public static function getDelimiter(): string|null;
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

<h4 id="clirouterrouteinterface-getpattern"><code>getPattern()</code></h4>

```php
public function getPattern(): string;
```

Returns the route's pattern

<h4 id="clirouterrouteinterface-getreversedpaths"><code>getReversedPaths()</code></h4>

```php
public function getReversedPaths(): array;
```

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
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Cli\Task`** - implements [`Phalcon\Cli\TaskInterface`](#clitaskinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Queue\Cli\ConsumerTask`](/6.0/api/phalcon_queue/#queuecliconsumertask)

`Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

<ApiItem href="#clitask-__construct" visibility="public" name="__construct" returnType="" params={[]}>
Phalcon\Cli\Task constructor
</ApiItem>

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

Source: https://docs.phalcon.io/6.0/api/phalcon_cli/index.mdx
