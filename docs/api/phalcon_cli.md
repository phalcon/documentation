---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Cli\Console

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console.zep){ .src-btn }

This component allows to create CLI applications using Phalcon

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - [`Phalcon\Application\AbstractApplication`](phalcon_application.md#applicationabstractapplication)
            - **`Phalcon\Cli\Console`**

</div>

__Uses__ `Closure` · `Phalcon\Application\AbstractApplication` · `Phalcon\Cli\Console\Exceptions\ContainerRequired` · `Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition` · `Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound` · `Phalcon\Cli\Router\Route` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\ModuleDefinitionInterface` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsole-handle">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">handle</span>( <span class="st">array|null</span> <span class="sv">$arguments</span><span class="sm"> = null</span> )</code>
<span class="desc">Handle the whole command-line tasks</span>
</a>
<a class="api-item" href="#cliconsole-setargument">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setArgument</span>(<span class="prm"><span class="st">array|null</span> <span class="sv">$arguments</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$str</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shift</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Set a specific argument</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$arguments</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `handle()` { #cliconsole-handle }

```php
public function handle( array|null $arguments = null );
```

Handle the whole command-line tasks

#### `setArgument()` { #cliconsole-setargument }

```php
public function setArgument(
    array|null $arguments = null,
    bool $str = true,
    bool $shift = true
): static;
```

Set a specific argument


## Cli\Console\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Cli\Console will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - **`Phalcon\Cli\Console\Exception`**
            - [`Phalcon\Cli\Console\Exceptions\ContainerRequired`](#cliconsoleexceptionscontainerrequired)
            - [`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`](#cliconsoleexceptionsinvalidmoduledefinition)
            - [`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`](#cliconsoleexceptionsmoduledefinitionpathnotfound)

</div>


## Cli\Console\Exceptions\ContainerRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exceptions/ContainerRequired.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
            - **`Phalcon\Cli\Console\Exceptions\ContainerRequired`**

</div>

__Uses__ `Phalcon\Cli\Console\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsoleexceptionscontainerrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #cliconsoleexceptionscontainerrequired-__construct }

```php
public function __construct();
```


## Cli\Console\Exceptions\InvalidModuleDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exceptions/InvalidModuleDefinition.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
            - **`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`**

</div>

__Uses__ `Phalcon\Cli\Console\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsoleexceptionsinvalidmoduledefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$reason</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #cliconsoleexceptionsinvalidmoduledefinition-__construct }

```php
public function __construct(
    string|null $name = null,
    string|null $reason = null
);
```


## Cli\Console\Exceptions\ModuleDefinitionPathNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exceptions/ModuleDefinitionPathNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
            - **`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`**

</div>

__Uses__ `Phalcon\Cli\Console\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsoleexceptionsmoduledefinitionpathnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #cliconsoleexceptionsmoduledefinitionpathnotfound-__construct }

```php
public function __construct( string $path );
```


## Cli\Dispatcher

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Dispatcher.zep){ .src-btn }

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

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - [`Phalcon\Dispatcher\AbstractDispatcher`](phalcon_dispatcher.md#dispatcherabstractdispatcher)
            - **`Phalcon\Cli\Dispatcher`** - implements [`Phalcon\Cli\DispatcherInterface`](#clidispatcherinterface)

</div>

__Uses__ `Phalcon\Cli\Dispatcher\Exception` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Dispatcher\AbstractDispatcher` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clidispatcher-callactionmethod">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">callActionMethod</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$handler</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$actionMethod</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$params</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Calls the action method.</span>
</a>
<a class="api-item" href="#clidispatcher-getactivetask">
<code class="vis vis-public">public</code>
<code class="ret">TaskInterface</code>
<code class="sig"><span class="sf">getActiveTask</span>()</code>
<span class="desc">Returns the active task in the dispatcher</span>
</a>
<a class="api-item" href="#clidispatcher-getlasttask">
<code class="vis vis-public">public</code>
<code class="ret">TaskInterface</code>
<code class="sig"><span class="sf">getLastTask</span>()</code>
<span class="desc">Returns the latest dispatched controller</span>
</a>
<a class="api-item" href="#clidispatcher-getoption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getOption</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets an option by its name or numeric index</span>
</a>
<a class="api-item" href="#clidispatcher-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Get dispatched options</span>
</a>
<a class="api-item" href="#clidispatcher-gettaskname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTaskName</span>()</code>
<span class="desc">Gets last dispatched task name</span>
</a>
<a class="api-item" href="#clidispatcher-gettasksuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTaskSuffix</span>()</code>
<span class="desc">Gets the default task suffix</span>
</a>
<a class="api-item" href="#clidispatcher-hasoption">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasOption</span>( <span class="st">mixed</span> <span class="sv">$option</span> )</code>
<span class="desc">Check if an option exists</span>
</a>
<a class="api-item" href="#clidispatcher-setdefaulttask">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultTask</span>( <span class="st">string</span> <span class="sv">$taskName</span> )</code>
<span class="desc">Sets the default task name</span>
</a>
<a class="api-item" href="#clidispatcher-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Set the options to be dispatched</span>
</a>
<a class="api-item" href="#clidispatcher-settaskname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTaskName</span>( <span class="st">string</span> <span class="sv">$taskName</span> )</code>
<span class="desc">Sets the task name to be dispatched</span>
</a>
<a class="api-item" href="#clidispatcher-settasksuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTaskSuffix</span>( <span class="st">string</span> <span class="sv">$taskSuffix</span> )</code>
<span class="desc">Sets the default task suffix</span>
</a>
<a class="api-item" href="#clidispatcher-handleexception">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">handleException</span>( <span class="st">\Exception</span> <span class="sv">$exception</span> )</code>
<span class="desc">Handles a user exception</span>
</a>
<a class="api-item" href="#clidispatcher-throwdispatchexception">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">throwDispatchException</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$exceptionCode</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Throws an internal exception</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultAction</span><span class="sm"> = &quot;main&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultHandler</span><span class="sm"> = &quot;main&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$handlerSuffix</span><span class="sm"> = &quot;Task&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 12</div>

#### `callActionMethod()` { #clidispatcher-callactionmethod }

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

#### `getActiveTask()` { #clidispatcher-getactivetask }

```php
public function getActiveTask(): TaskInterface;
```

Returns the active task in the dispatcher

#### `getLastTask()` { #clidispatcher-getlasttask }

```php
public function getLastTask(): TaskInterface;
```

Returns the latest dispatched controller

#### `getOption()` { #clidispatcher-getoption }

```php
public function getOption(
    mixed $option,
    mixed $filters = null,
    mixed $defaultValue = null
): mixed;
```

Gets an option by its name or numeric index

#### `getOptions()` { #clidispatcher-getoptions }

```php
public function getOptions(): array;
```

Get dispatched options

#### `getTaskName()` { #clidispatcher-gettaskname }

```php
public function getTaskName(): string;
```

Gets last dispatched task name

#### `getTaskSuffix()` { #clidispatcher-gettasksuffix }

```php
public function getTaskSuffix(): string;
```

Gets the default task suffix

#### `hasOption()` { #clidispatcher-hasoption }

```php
public function hasOption( mixed $option ): bool;
```

Check if an option exists

#### `setDefaultTask()` { #clidispatcher-setdefaulttask }

```php
public function setDefaultTask( string $taskName ): void;
```

Sets the default task name

#### `setOptions()` { #clidispatcher-setoptions }

```php
public function setOptions( array $options ): void;
```

Set the options to be dispatched

#### `setTaskName()` { #clidispatcher-settaskname }

```php
public function setTaskName( string $taskName ): void;
```

Sets the task name to be dispatched

#### `setTaskSuffix()` { #clidispatcher-settasksuffix }

```php
public function setTaskSuffix( string $taskSuffix ): void;
```

Sets the default task suffix

<div class="api-group">Protected · 2</div>

#### `handleException()` { #clidispatcher-handleexception }

```php
protected function handleException( \Exception $exception );
```

Handles a user exception

#### `throwDispatchException()` { #clidispatcher-throwdispatchexception }

```php
protected function throwDispatchException(
    string $message,
    int $exceptionCode = 0
);
```

Throws an internal exception


## Cli\DispatcherInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/DispatcherInterface.zep){ .src-btn }

Interface for Phalcon\Cli\Dispatcher

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](phalcon_contracts.md#contractsdispatcherdispatcher)
    - [`Phalcon\Contracts\Cli\Dispatcher`](phalcon_contracts.md#contractsclidispatcher)
        - **`Phalcon\Cli\DispatcherInterface`**

</div>

__Uses__ `Phalcon\Contracts\Cli\Dispatcher`
{ .api-uses }


## Cli\Dispatcher\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Dispatcher/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Cli\Dispatcher will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Dispatcher\Exception`](phalcon_dispatcher.md#dispatcherexception)
        - **`Phalcon\Cli\Dispatcher\Exception`**

</div>


## Cli\Router

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router.zep){ .src-btn }

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

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Cli\Router`** - implements [`Phalcon\Cli\RouterInterface`](#clirouterinterface)

</div>

__Uses__ `Phalcon\Cli\Router\Exception` · `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType` · `Phalcon\Cli\Router\Route` · `Phalcon\Cli\Router\RouteInterface` · `Phalcon\Contracts\Cli\CliTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">bool</span> <span class="sv">$defaultRoutes</span><span class="sm"> = true</span> )</code>
<span class="desc">Phalcon\Cli\Router constructor</span>
</a>
<a class="api-item" href="#clirouter-add">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$paths</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Adds a route to the router</span>
</a>
<a class="api-item" href="#clirouter-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionName</span>()</code>
<span class="desc">Returns processed action name</span>
</a>
<a class="api-item" href="#clirouter-getmatchedroute">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|null</code>
<code class="sig"><span class="sf">getMatchedRoute</span>()</code>
<span class="desc">Returns the route that matches the handled URI</span>
</a>
<a class="api-item" href="#clirouter-getmatches">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMatches</span>()</code>
<span class="desc">Returns the sub expressions in the regular expression matched</span>
</a>
<a class="api-item" href="#clirouter-getmodulename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getModuleName</span>()</code>
<span class="desc">Returns processed module name</span>
</a>
<a class="api-item" href="#clirouter-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParameters</span>()</code>
<span class="desc">Returns processed extra params</span>
</a>
<a class="api-item" href="#clirouter-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParams</span>()</code>
<span class="desc">Returns processed extra params</span>
</a>
<a class="api-item" href="#clirouter-getroutebyid">
<code class="vis vis-public">public</code>
<code class="ret">bool|RouteInterface</code>
<code class="sig"><span class="sf">getRouteById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Returns a route object by its id</span>
</a>
<a class="api-item" href="#clirouter-getroutebyname">
<code class="vis vis-public">public</code>
<code class="ret">bool|RouteInterface</code>
<code class="sig"><span class="sf">getRouteByName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a route object by its name</span>
</a>
<a class="api-item" href="#clirouter-getroutes">
<code class="vis vis-public">public</code>
<code class="ret">Route[]</code>
<code class="sig"><span class="sf">getRoutes</span>()</code>
<span class="desc">Returns all the routes defined in the router</span>
</a>
<a class="api-item" href="#clirouter-gettaskname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTaskName</span>()</code>
<span class="desc">Returns processed task name</span>
</a>
<a class="api-item" href="#clirouter-handle">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">handle</span>( <span class="st">mixed</span> <span class="sv">$arguments</span><span class="sm"> = null</span> )</code>
<span class="desc">Handles routing information received from command-line arguments</span>
</a>
<a class="api-item" href="#clirouter-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefaultAction</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#clirouter-setdefaultmodule">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefaultModule</span>( <span class="st">string</span> <span class="sv">$moduleName</span> )</code>
<span class="desc">Sets the name of the default module</span>
</a>
<a class="api-item" href="#clirouter-setdefaulttask">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefaultTask</span>( <span class="st">string</span> <span class="sv">$taskName</span> )</code>
<span class="desc">Sets the default controller name</span>
</a>
<a class="api-item" href="#clirouter-setdefaults">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefaults</span>( <span class="st">array</span> <span class="sv">$defaults</span> )</code>
<span class="desc">Sets an array of default paths. If a route is missing a path the router</span>
</a>
<a class="api-item" href="#clirouter-wasmatched">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">wasMatched</span>()</code>
<span class="desc">Checks if the router matches any of the defined routes</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$action</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultAction</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultModule</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$defaultParams</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultTask</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RouteInterface|null</code>
<code class="sig"><span class="sv">$matchedRoute</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, string&gt;</code>
<code class="sig"><span class="sv">$matches</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$module</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$params</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$routes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$task</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$wasMatched</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 18</div>

#### `__construct()` { #clirouter-__construct }

```php
public function __construct( bool $defaultRoutes = true );
```

Phalcon\Cli\Router constructor

#### `add()` { #clirouter-add }

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

#### `getActionName()` { #clirouter-getactionname }

```php
public function getActionName(): string;
```

Returns processed action name

#### `getMatchedRoute()` { #clirouter-getmatchedroute }

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

#### `getMatches()` { #clirouter-getmatches }

```php
public function getMatches(): array;
```

Returns the sub expressions in the regular expression matched

#### `getModuleName()` { #clirouter-getmodulename }

```php
public function getModuleName(): string;
```

Returns processed module name

#### `getParameters()` { #clirouter-getparameters }

```php
public function getParameters(): array;
```

Returns processed extra params

#### `getParams()` { #clirouter-getparams }

```php
public function getParams(): array;
```

Returns processed extra params

#### `getRouteById()` { #clirouter-getroutebyid }

```php
public function getRouteById( mixed $id ): bool|RouteInterface;
```

Returns a route object by its id

#### `getRouteByName()` { #clirouter-getroutebyname }

```php
public function getRouteByName( string $name ): bool|RouteInterface;
```

Returns a route object by its name

#### `getRoutes()` { #clirouter-getroutes }

```php
public function getRoutes(): Route[];
```

Returns all the routes defined in the router

#### `getTaskName()` { #clirouter-gettaskname }

```php
public function getTaskName(): string;
```

Returns processed task name

#### `handle()` { #clirouter-handle }

```php
public function handle( mixed $arguments = null );
```

Handles routing information received from command-line arguments

#### `setDefaultAction()` { #clirouter-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): static;
```

Sets the default action name

#### `setDefaultModule()` { #clirouter-setdefaultmodule }

```php
public function setDefaultModule( string $moduleName ): static;
```

Sets the name of the default module

#### `setDefaultTask()` { #clirouter-setdefaulttask }

```php
public function setDefaultTask( string $taskName ): static;
```

Sets the default controller name

#### `setDefaults()` { #clirouter-setdefaults }

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

#### `wasMatched()` { #clirouter-wasmatched }

```php
public function wasMatched(): bool;
```

Checks if the router matches any of the defined routes


## Cli\RouterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/RouterInterface.zep){ .src-btn }

Interface for Phalcon\Cli\Router

<div class="api-tree" markdown>

- **`Phalcon\Cli\RouterInterface`**

</div>

__Uses__ `Phalcon\Cli\Router\RouteInterface` · `Phalcon\Contracts\Cli\CliTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterinterface-add">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$paths</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Adds a route to the router on any HTTP method</span>
</a>
<a class="api-item" href="#clirouterinterface-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionName</span>()</code>
<span class="desc">Returns processed action name</span>
</a>
<a class="api-item" href="#clirouterinterface-getmatchedroute">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|null</code>
<code class="sig"><span class="sf">getMatchedRoute</span>()</code>
<span class="desc">Returns the route that matches the handled URI</span>
</a>
<a class="api-item" href="#clirouterinterface-getmatches">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMatches</span>()</code>
<span class="desc">Return the sub expressions in the regular expression matched</span>
</a>
<a class="api-item" href="#clirouterinterface-getmodulename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getModuleName</span>()</code>
<span class="desc">Returns processed module name</span>
</a>
<a class="api-item" href="#clirouterinterface-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParameters</span>()</code>
<span class="desc">Returns processed extra params</span>
</a>
<a class="api-item" href="#clirouterinterface-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParams</span>()</code>
<span class="desc">Returns processed extra params</span>
</a>
<a class="api-item" href="#clirouterinterface-getroutebyid">
<code class="vis vis-public">public</code>
<code class="ret">bool|RouteInterface</code>
<code class="sig"><span class="sf">getRouteById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Returns a route object by its id</span>
</a>
<a class="api-item" href="#clirouterinterface-getroutebyname">
<code class="vis vis-public">public</code>
<code class="ret">bool|RouteInterface</code>
<code class="sig"><span class="sf">getRouteByName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a route object by its name</span>
</a>
<a class="api-item" href="#clirouterinterface-getroutes">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface[]</code>
<code class="sig"><span class="sf">getRoutes</span>()</code>
<span class="desc">Return all the routes defined in the router</span>
</a>
<a class="api-item" href="#clirouterinterface-gettaskname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTaskName</span>()</code>
<span class="desc">Returns processed task name</span>
</a>
<a class="api-item" href="#clirouterinterface-handle">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">handle</span>( <span class="st">mixed</span> <span class="sv">$arguments</span><span class="sm"> = null</span> )</code>
<span class="desc">Handles routing information received from the rewrite engine.</span>
</a>
<a class="api-item" href="#clirouterinterface-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setDefaultAction</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#clirouterinterface-setdefaultmodule">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setDefaultModule</span>( <span class="st">string</span> <span class="sv">$moduleName</span> )</code>
<span class="desc">Sets the name of the default module</span>
</a>
<a class="api-item" href="#clirouterinterface-setdefaulttask">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setDefaultTask</span>( <span class="st">string</span> <span class="sv">$taskName</span> )</code>
<span class="desc">Sets the default task name</span>
</a>
<a class="api-item" href="#clirouterinterface-setdefaults">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig"><span class="sf">setDefaults</span>( <span class="st">array</span> <span class="sv">$defaults</span> )</code>
<span class="desc">Sets an array of default paths</span>
</a>
<a class="api-item" href="#clirouterinterface-wasmatched">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">wasMatched</span>()</code>
<span class="desc">Check if the router matches any of the defined routes</span>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `add()` { #clirouterinterface-add }

```php
public function add(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router on any HTTP method

#### `getActionName()` { #clirouterinterface-getactionname }

```php
public function getActionName(): string;
```

Returns processed action name

#### `getMatchedRoute()` { #clirouterinterface-getmatchedroute }

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

#### `getMatches()` { #clirouterinterface-getmatches }

```php
public function getMatches(): array;
```

Return the sub expressions in the regular expression matched

#### `getModuleName()` { #clirouterinterface-getmodulename }

```php
public function getModuleName(): string;
```

Returns processed module name

#### `getParameters()` { #clirouterinterface-getparameters }

```php
public function getParameters(): array;
```

Returns processed extra params

#### `getParams()` { #clirouterinterface-getparams }

```php
public function getParams(): array;
```

Returns processed extra params

#### `getRouteById()` { #clirouterinterface-getroutebyid }

```php
public function getRouteById( mixed $id ): bool|RouteInterface;
```

Returns a route object by its id

@todo change param type to string

#### `getRouteByName()` { #clirouterinterface-getroutebyname }

```php
public function getRouteByName( string $name ): bool|RouteInterface;
```

Returns a route object by its name

#### `getRoutes()` { #clirouterinterface-getroutes }

```php
public function getRoutes(): RouteInterface[];
```

Return all the routes defined in the router

#### `getTaskName()` { #clirouterinterface-gettaskname }

```php
public function getTaskName(): string;
```

Returns processed task name

#### `handle()` { #clirouterinterface-handle }

```php
public function handle( mixed $arguments = null );
```

Handles routing information received from the rewrite engine.

When `arguments` is a string (or null), it is matched against the
registered routes. When it is an array, matching is bypassed entirely:
the array is treated as the already-resolved module/task/action/params,
so `wasMatched()` stays false and `getMatchedRoute()` returns null even
though routing succeeded.

#### `setDefaultAction()` { #clirouterinterface-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): RouterInterface;
```

Sets the default action name

#### `setDefaultModule()` { #clirouterinterface-setdefaultmodule }

```php
public function setDefaultModule( string $moduleName ): RouterInterface;
```

Sets the name of the default module

#### `setDefaultTask()` { #clirouterinterface-setdefaulttask }

```php
public function setDefaultTask( string $taskName ): RouterInterface;
```

Sets the default task name

#### `setDefaults()` { #clirouterinterface-setdefaults }

```php
public function setDefaults( array $defaults ): RouterInterface;
```

Sets an array of default paths

#### `wasMatched()` { #clirouterinterface-wasmatched }

```php
public function wasMatched(): bool;
```

Check if the router matches any of the defined routes


## Cli\Router\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Cli\Router will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Cli\Router\Exception`**
        - [`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`](#clirouterexceptionsbeforematchnotcallable)
        - [`Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`](#clirouterexceptionsinvalidroutepaths)
        - [`Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`](#clirouterexceptionsrouterargumentsinvalidtype)

</div>


## Cli\Router\Exceptions\BeforeMatchNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exceptions/BeforeMatchNotCallable.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Cli\Router\Exception`](#clirouterexception)
        - **`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`**

</div>

__Uses__ `Phalcon\Cli\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterexceptionsbeforematchnotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$route</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #clirouterexceptionsbeforematchnotcallable-__construct }

```php
public function __construct( string $route = "" );
```


## Cli\Router\Exceptions\InvalidRoutePaths

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exceptions/InvalidRoutePaths.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Cli\Router\Exception`](#clirouterexception)
        - **`Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`**

</div>

__Uses__ `Phalcon\Cli\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterexceptionsinvalidroutepaths-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$route</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #clirouterexceptionsinvalidroutepaths-__construct }

```php
public function __construct( string $route = "" );
```


## Cli\Router\Exceptions\RouterArgumentsInvalidType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exceptions/RouterArgumentsInvalidType.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Cli\Router\Exception`](#clirouterexception)
        - **`Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`**

</div>

__Uses__ `Phalcon\Cli\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterexceptionsrouterargumentsinvalidtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$type</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #clirouterexceptionsrouterargumentsinvalidtype-__construct }

```php
public function __construct( string $type = "" );
```


## Cli\Router\Route

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Route.zep){ .src-btn }

This class represents every route added to the router

<div class="api-tree" markdown>

- **`Phalcon\Cli\Router\Route`** - implements [`Phalcon\Cli\Router\RouteInterface`](#clirouterrouteinterface)

</div>

__Uses__ `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\InvalidRoutePaths` · `Phalcon\Contracts\Cli\CliTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterroute-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$paths</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#clirouterroute-beforematch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">beforeMatch</span>( <span class="st">mixed</span> <span class="sv">$callback</span> )</code>
<span class="desc">Sets a callback that is called if the route is matched.</span>
</a>
<a class="api-item" href="#clirouterroute-compilepattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">compilePattern</span>( <span class="st">string</span> <span class="sv">$pattern</span> )</code>
<span class="desc">Replaces placeholders from pattern returning a valid PCRE regular</span>
</a>
<a class="api-item" href="#clirouterroute-convert">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">convert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$converter</span></span>)</code>
<span class="desc">Adds a converter to perform an additional transformation for certain</span>
</a>
<a class="api-item" href="#clirouterroute-delimiter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">delimiter</span>( <span class="st">string|null</span> <span class="sv">$delimiter</span><span class="sm"> = null</span> )</code>
<span class="desc">Set the routing delimiter.</span>
</a>
<a class="api-item" href="#clirouterroute-extractnamedparams">
<code class="vis vis-public">public</code>
<code class="ret">array|bool</code>
<code class="sig"><span class="sf">extractNamedParams</span>( <span class="st">string</span> <span class="sv">$pattern</span> )</code>
<span class="desc">Extracts parameters from a string</span>
</a>
<a class="api-item" href="#clirouterroute-getbeforematch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getBeforeMatch</span>()</code>
<span class="desc">Returns the &#039;before match&#039; callback if any</span>
</a>
<a class="api-item" href="#clirouterroute-getcompiledpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCompiledPattern</span>()</code>
<span class="desc">Returns the route&#039;s compiled pattern</span>
</a>
<a class="api-item" href="#clirouterroute-getconverters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getConverters</span>()</code>
<span class="desc">Returns the router converter</span>
</a>
<a class="api-item" href="#clirouterroute-getdelimiter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDelimiter</span>()</code>
<span class="desc">Get routing delimiter</span>
</a>
<a class="api-item" href="#clirouterroute-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDescription</span>()</code>
<span class="desc">Returns the route&#039;s description</span>
</a>
<a class="api-item" href="#clirouterroute-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the route&#039;s name</span>
</a>
<a class="api-item" href="#clirouterroute-getpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getPaths</span>()</code>
<span class="desc">Returns the paths</span>
</a>
<a class="api-item" href="#clirouterroute-getpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPattern</span>()</code>
<span class="desc">Returns the route&#039;s pattern</span>
</a>
<a class="api-item" href="#clirouterroute-getreversedpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getReversedPaths</span>()</code>
<span class="desc">Returns the paths using positions as keys and names as values</span>
</a>
<a class="api-item" href="#clirouterroute-getrouteid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRouteId</span>()</code>
<span class="desc">Returns the route&#039;s id</span>
</a>
<a class="api-item" href="#clirouterroute-reconfigure">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reConfigure</span>(<span class="prm"><span class="st">string</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$paths</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reconfigure the route adding a new pattern and a set of paths</span>
</a>
<a class="api-item" href="#clirouterroute-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal route id generator.</span>
</a>
<a class="api-item" href="#clirouterroute-setdescription">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">setDescription</span>( <span class="st">string</span> <span class="sv">$description</span> )</code>
<span class="desc">Sets the route&#039;s description</span>
</a>
<a class="api-item" href="#clirouterroute-setname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">setName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Sets the route&#039;s name</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">DEFAULT_DELIMITER</span><span class="sm"> = &quot; &quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sv">$beforeMatch</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$compiledPattern</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$converters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$delimiter</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$delimiterPath</span><span class="sm"> = self::DEFAULT_DELIMITER</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$description</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$paths</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$pattern</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$routeId</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$uniqueId</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 20</div>

#### `__construct()` { #clirouterroute-__construct }

```php
public function __construct(
    string $pattern,
    mixed $paths = null
);
```

Constructor

#### `beforeMatch()` { #clirouterroute-beforematch }

```php
public function beforeMatch( mixed $callback ): RouteInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

#### `compilePattern()` { #clirouterroute-compilepattern }

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular
expression

#### `convert()` { #clirouterroute-convert }

```php
public function convert(
    string $name,
    mixed $converter
): RouteInterface;
```

Adds a converter to perform an additional transformation for certain
parameter

#### `delimiter()` { #clirouterroute-delimiter }

```php
public static function delimiter( string|null $delimiter = null ): void;
```

Set the routing delimiter.

This sets a process-global delimiter that each route captures at
construction time. Configure it once during bootstrap, before any routes
are created: routes built before and after a change keep their own
delimiter, and `Console::setArgument()` reads the current value when it
parses arguments.

#### `extractNamedParams()` { #clirouterroute-extractnamedparams }

```php
public function extractNamedParams( string $pattern ): array|bool;
```

Extracts parameters from a string

#### `getBeforeMatch()` { #clirouterroute-getbeforematch }

```php
public function getBeforeMatch(): mixed;
```

Returns the 'before match' callback if any

#### `getCompiledPattern()` { #clirouterroute-getcompiledpattern }

```php
public function getCompiledPattern(): string;
```

Returns the route's compiled pattern

#### `getConverters()` { #clirouterroute-getconverters }

```php
public function getConverters(): array;
```

Returns the router converter

#### `getDelimiter()` { #clirouterroute-getdelimiter }

```php
public static function getDelimiter(): string;
```

Get routing delimiter

#### `getDescription()` { #clirouterroute-getdescription }

```php
public function getDescription(): string;
```

Returns the route's description

#### `getName()` { #clirouterroute-getname }

```php
public function getName(): string;
```

Returns the route's name

#### `getPaths()` { #clirouterroute-getpaths }

```php
public function getPaths(): array;
```

Returns the paths

#### `getPattern()` { #clirouterroute-getpattern }

```php
public function getPattern(): string;
```

Returns the route's pattern

#### `getReversedPaths()` { #clirouterroute-getreversedpaths }

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

#### `getRouteId()` { #clirouterroute-getrouteid }

```php
public function getRouteId(): string;
```

Returns the route's id

#### `reConfigure()` { #clirouterroute-reconfigure }

```php
public function reConfigure(
    string $pattern,
    mixed $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

#### `reset()` { #clirouterroute-reset }

```php
public static function reset(): void;
```

Resets the internal route id generator.

Intended for test isolation only. The router keys its route map by the
route id, so resetting the sequence while a router still holds routes
makes newly created routes overwrite existing entries.

#### `setDescription()` { #clirouterroute-setdescription }

```php
public function setDescription( string $description ): RouteInterface;
```

Sets the route's description

#### `setName()` { #clirouterroute-setname }

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

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/RouteInterface.zep){ .src-btn }

Interface for Phalcon\Cli\Router\Route

Note: `Phalcon\Cli\Router` always constructs and returns the concrete
`Phalcon\Cli\Router\Route`, and there is no injection point for an externally
built route, so this interface is a marker for type hints rather than an
implementable contract. The fluent route API used in practice -
`beforeMatch()`, `getBeforeMatch()`, `convert()`, and `getConverters()` - is
declared on the concrete `Route` class, not here.

<div class="api-tree" markdown>

- **`Phalcon\Cli\Router\RouteInterface`**

</div>

__Uses__ `Phalcon\Contracts\Cli\CliTypes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterrouteinterface-compilepattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">compilePattern</span>( <span class="st">string</span> <span class="sv">$pattern</span> )</code>
<span class="desc">Replaces placeholders from pattern returning a valid PCRE regular</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-delimiter">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">delimiter</span>( <span class="st">string|null</span> <span class="sv">$delimiter</span><span class="sm"> = null</span> )</code>
<span class="desc">Set the routing delimiter</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getcompiledpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCompiledPattern</span>()</code>
<span class="desc">Returns the route&#039;s pattern</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getdelimiter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDelimiter</span>()</code>
<span class="desc">Get routing delimiter</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDescription</span>()</code>
<span class="desc">Returns the route&#039;s description</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the route&#039;s name</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getPaths</span>()</code>
<span class="desc">Returns the paths</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPattern</span>()</code>
<span class="desc">Returns the route&#039;s pattern</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getreversedpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getReversedPaths</span>()</code>
<span class="desc">Returns the paths using positions as keys and names as values</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-getrouteid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRouteId</span>()</code>
<span class="desc">Returns the route&#039;s id</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-reconfigure">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reConfigure</span>(<span class="prm"><span class="st">string</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$paths</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reconfigure the route adding a new pattern and a set of paths</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal route id generator</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-setdescription">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">setDescription</span>( <span class="st">string</span> <span class="sv">$description</span> )</code>
<span class="desc">Sets the route&#039;s description</span>
</a>
<a class="api-item" href="#clirouterrouteinterface-setname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig"><span class="sf">setName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Sets the route&#039;s name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `compilePattern()` { #clirouterrouteinterface-compilepattern }

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular
expression

#### `delimiter()` { #clirouterrouteinterface-delimiter }

```php
public static function delimiter( string|null $delimiter = null );
```

Set the routing delimiter

#### `getCompiledPattern()` { #clirouterrouteinterface-getcompiledpattern }

```php
public function getCompiledPattern(): string;
```

Returns the route's pattern

#### `getDelimiter()` { #clirouterrouteinterface-getdelimiter }

```php
public static function getDelimiter(): string;
```

Get routing delimiter

#### `getDescription()` { #clirouterrouteinterface-getdescription }

```php
public function getDescription(): string;
```

Returns the route's description

#### `getName()` { #clirouterrouteinterface-getname }

```php
public function getName(): string;
```

Returns the route's name

#### `getPaths()` { #clirouterrouteinterface-getpaths }

```php
public function getPaths(): array;
```

Returns the paths

#### `getPattern()` { #clirouterrouteinterface-getpattern }

```php
public function getPattern(): string;
```

Returns the route's pattern

#### `getReversedPaths()` { #clirouterrouteinterface-getreversedpaths }

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

#### `getRouteId()` { #clirouterrouteinterface-getrouteid }

```php
public function getRouteId(): string;
```

Returns the route's id

#### `reConfigure()` { #clirouterrouteinterface-reconfigure }

```php
public function reConfigure(
    string $pattern,
    mixed $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

#### `reset()` { #clirouterrouteinterface-reset }

```php
public static function reset(): void;
```

Resets the internal route id generator

#### `setDescription()` { #clirouterrouteinterface-setdescription }

```php
public function setDescription( string $description ): RouteInterface;
```

Sets the route's description

#### `setName()` { #clirouterrouteinterface-setname }

```php
public function setName( string $name ): RouteInterface;
```

Sets the route's name


## Cli\Task

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Task.zep){ .src-btn }

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

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Cli\Task`** - implements [`Phalcon\Cli\TaskInterface`](#clitaskinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
            - [`Phalcon\Queue\Cli\ConsumerTask`](phalcon_queue.md#queuecliconsumertask)

</div>

__Uses__ `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#clitask-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
<span class="desc">Phalcon\Cli\Task constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #clitask-__construct }

```php
final public function __construct();
```

Phalcon\Cli\Task constructor


## Cli\TaskInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/TaskInterface.zep){ .src-btn }

Interface for task handlers

<div class="api-tree" markdown>

- **`Phalcon\Cli\TaskInterface`**

</div>
