---
title: "Phalcon Cli"
version: "5.15"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Cli

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Cli\Console

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console.zep">Source on GitHub</a>

This component allows to create CLI applications using Phalcon

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\Injectable`](/5.15/api/phalcon_di/#diinjectable)
- [`Phalcon\Application\AbstractApplication`](/5.15/api/phalcon_application/#applicationabstractapplication)
- **`Phalcon\Cli\Console`**

</div>

__Uses__ `Closure` · `Phalcon\Application\AbstractApplication` · `Phalcon\Cli\Console\Exceptions\ContainerRequired` · `Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition` · `Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound` · `Phalcon\Cli\Router\Route` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\ModuleDefinitionInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsole-handle">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">handle</span>( <span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = null</span> )</code>
<span class="desc">Handle the whole command-line tasks</span>
</a>
<a class="api-item" href="#cliconsole-setargument">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setArgument</span>(<span class="prm"><span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$str</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$shift</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Set an specific argument</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array|string</code>
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

<h4 id="cliconsole-handle"><code>handle()</code></h4>

```php
public function handle( array $arguments = null );
```

Handle the whole command-line tasks

<h4 id="cliconsole-setargument"><code>setArgument()</code></h4>

```php
public function setArgument(
array $arguments = null,
bool $str = true,
bool $shift = true
): static;
```

Set an specific argument

## Cli\Console\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Cli\Console will use this class

<div class="api-tree">

- `\Exception`
- [`Phalcon\Application\Exception`](/5.15/api/phalcon_application/#applicationexception)
- **`Phalcon\Cli\Console\Exception`**
- [`Phalcon\Cli\Console\Exceptions\ContainerRequired`](#cliconsoleexceptionscontainerrequired)
- [`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`](#cliconsoleexceptionsinvalidmoduledefinition)
- [`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`](#cliconsoleexceptionsmoduledefinitionpathnotfound)

</div>

## Cli\Console\Exceptions\ContainerRequired

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exceptions/ContainerRequired.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Application\Exception`](/5.15/api/phalcon_application/#applicationexception)
- [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
- **`Phalcon\Cli\Console\Exceptions\ContainerRequired`**

</div>

__Uses__ `Phalcon\Cli\Console\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsoleexceptionscontainerrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="cliconsoleexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Cli\Console\Exceptions\InvalidModuleDefinition

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exceptions/InvalidModuleDefinition.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Application\Exception`](/5.15/api/phalcon_application/#applicationexception)
- [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
- **`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`**

</div>

__Uses__ `Phalcon\Cli\Console\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsoleexceptionsinvalidmoduledefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$reason</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="cliconsoleexceptionsinvalidmoduledefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name = null,
string $reason = null
);
```

## Cli\Console\Exceptions\ModuleDefinitionPathNotFound

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Console/Exceptions/ModuleDefinitionPathNotFound.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Application\Exception`](/5.15/api/phalcon_application/#applicationexception)
- [`Phalcon\Cli\Console\Exception`](#cliconsoleexception)
- **`Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound`**

</div>

__Uses__ `Phalcon\Cli\Console\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#cliconsoleexceptionsmoduledefinitionpathnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="cliconsoleexceptionsmoduledefinitionpathnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```

## Cli\Dispatcher

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Dispatcher.zep">Source on GitHub</a>

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

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/5.15/api/phalcon_di/#diabstractinjectionaware)
- [`Phalcon\Dispatcher\AbstractDispatcher`](/5.15/api/phalcon_dispatcher/#dispatcherabstractdispatcher)
- **`Phalcon\Cli\Dispatcher`** — implements [`Phalcon\Cli\DispatcherInterface`](#clidispatcherinterface)

</div>

__Uses__ `Phalcon\Cli\Dispatcher\Exception` · `Phalcon\Dispatcher\AbstractDispatcher` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterInterface`

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
positional `params` before the call, so a task action receives any
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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/DispatcherInterface.zep">Source on GitHub</a>

Interface for Phalcon\Cli\Dispatcher

<div class="api-tree">

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](/5.15/api/phalcon_contracts/#contractsdispatcherdispatcher)
- [`Phalcon\Contracts\Cli\Dispatcher`](/5.15/api/phalcon_contracts/#contractsclidispatcher)
- **`Phalcon\Cli\DispatcherInterface`**

</div>

__Uses__ `Phalcon\Contracts\Cli\Dispatcher`

## Cli\Dispatcher\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Dispatcher/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Cli\Dispatcher will use this class

<div class="api-tree">

- `\Exception`
- [`Phalcon\Dispatcher\Exception`](/5.15/api/phalcon_dispatcher/#dispatcherexception)
- **`Phalcon\Cli\Dispatcher\Exception`**

</div>

## Cli\Router

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router.zep">Source on GitHub</a>

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

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/5.15/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Cli\Router`** — implements [`Phalcon\Cli\RouterInterface`](#clirouterinterface)

</div>

__Uses__ `Phalcon\Cli\Router\Exception` · `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType` · `Phalcon\Cli\Router\Route` · `Phalcon\Cli\Router\RouteInterface` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface`

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
<code class="ret">RouteInterface|bool</code>
<code class="sig"><span class="sf">getRouteById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Returns a route object by its id</span>
</a>
<a class="api-item" href="#clirouter-getroutebyname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|bool</code>
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
<code class="ret">array</code>
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
public function getRouteById( mixed $id ): RouteInterface|bool;
```

Returns a route object by its id

<h4 id="clirouter-getroutebyname"><code>getRouteByName()</code></h4>

```php
public function getRouteByName( string $name ): RouteInterface|bool;
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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/RouterInterface.zep">Source on GitHub</a>

Interface for Phalcon\Cli\Router

<div class="api-tree">

- **`Phalcon\Cli\RouterInterface`**

</div>

__Uses__ `Phalcon\Cli\Router\RouteInterface`

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
<code class="ret">RouteInterface|bool</code>
<code class="sig"><span class="sf">getRouteById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Returns a route object by its id</span>
</a>
<a class="api-item" href="#clirouterinterface-getroutebyname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|bool</code>
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
public function getRouteById( mixed $id ): RouteInterface|bool;
```

Returns a route object by its id

@todo change param type to string

<h4 id="clirouterinterface-getroutebyname"><code>getRouteByName()</code></h4>

```php
public function getRouteByName( string $name ): RouteInterface|bool;
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Cli\Router will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Cli\Router\Exception`**
- [`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`](#clirouterexceptionsbeforematchnotcallable)
- [`Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`](#clirouterexceptionsinvalidroutepaths)
- [`Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`](#clirouterexceptionsrouterargumentsinvalidtype)

</div>

## Cli\Router\Exceptions\BeforeMatchNotCallable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exceptions/BeforeMatchNotCallable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Cli\Router\Exception`](#clirouterexception)
- **`Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`**

</div>

__Uses__ `Phalcon\Cli\Router\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterexceptionsbeforematchnotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$route</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="clirouterexceptionsbeforematchnotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $route = "" );
```

## Cli\Router\Exceptions\InvalidRoutePaths

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exceptions/InvalidRoutePaths.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Cli\Router\Exception`](#clirouterexception)
- **`Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`**

</div>

__Uses__ `Phalcon\Cli\Router\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterexceptionsinvalidroutepaths-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$route</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="clirouterexceptionsinvalidroutepaths-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $route = "" );
```

## Cli\Router\Exceptions\RouterArgumentsInvalidType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Exceptions/RouterArgumentsInvalidType.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Cli\Router\Exception`](#clirouterexception)
- **`Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`**

</div>

__Uses__ `Phalcon\Cli\Router\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterexceptionsrouterargumentsinvalidtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$type</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="clirouterexceptionsrouterargumentsinvalidtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type = "" );
```

## Cli\Router\Route

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/Route.zep">Source on GitHub</a>

This class represents every route added to the router

<div class="api-tree">

- **`Phalcon\Cli\Router\Route`** — implements [`Phalcon\Cli\Router\RouteInterface`](#clirouterrouteinterface)

</div>

__Uses__ `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`

### Method Summary

<div class="api-list">
<a class="api-item" href="#clirouterroute-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$paths</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">delimiter</span>( <span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span> )</code>
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

<h4 id="clirouterroute-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $pattern,
mixed $paths = null
);
```

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
public static function delimiter( string $delimiter = null ): void;
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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Router/RouteInterface.zep">Source on GitHub</a>

Interface for Phalcon\Cli\Router\Route

Note: `Phalcon\Cli\Router` always constructs and returns the concrete
`Phalcon\Cli\Router\Route`, and there is no injection point for an externally
built route, so this interface is a marker for type hints rather than an
implementable contract. The fluent route API used in practice -
`beforeMatch()`, `getBeforeMatch()`, `convert()`, and `getConverters()` - is
declared on the concrete `Route` class, not here.

<div class="api-tree">

- **`Phalcon\Cli\Router\RouteInterface`**

</div>

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
<code class="sig"><span class="sf">delimiter</span>( <span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span> )</code>
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

<h4 id="clirouterrouteinterface-compilepattern"><code>compilePattern()</code></h4>

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular
expression

<h4 id="clirouterrouteinterface-delimiter"><code>delimiter()</code></h4>

```php
public static function delimiter( string $delimiter = null );
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/Task.zep">Source on GitHub</a>

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

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\Injectable`](/5.15/api/phalcon_di/#diinjectable)
- **`Phalcon\Cli\Task`** — implements [`Phalcon\Cli\TaskInterface`](#clitaskinterface), [`Phalcon\Events\EventsAwareInterface`](/5.15/api/phalcon_events/#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#clitask-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
<span class="desc">Phalcon\Cli\Task constructor</span>
</a>
<a class="api-item" href="#clitask-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#clitask-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sv">$eventsManager</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="clitask-__construct"><code>__construct()</code></h4>

```php
final public function __construct();
```

Phalcon\Cli\Task constructor

<h4 id="clitask-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

<h4 id="clitask-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

## Cli\TaskInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Cli/TaskInterface.zep">Source on GitHub</a>

Interface for task handlers

<div class="api-tree">

- **`Phalcon\Cli\TaskInterface`**

</div>

Source: https://docs.phalcon.io/5.15/api/phalcon_cli/index.mdx
