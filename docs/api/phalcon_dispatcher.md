---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Dispatcher\AbstractDispatcher

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/AbstractDispatcher.zep){ .src-btn }

This is the base class for Phalcon\Mvc\Dispatcher and Phalcon\Cli\Dispatcher.
This class can't be instantiated directly, you can use it to create your own
dispatchers.

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Dispatcher\AbstractDispatcher`** — implements [`Phalcon\Dispatcher\DispatcherInterface`](#dispatcherdispatcherinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
            - [`Phalcon\Cli\Dispatcher`](phalcon_cli.md#clidispatcher)
            - [`Phalcon\Mvc\Dispatcher`](phalcon_mvc.md#mvcdispatcher)

</div>

__Uses__ `Exception` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\Exception` · `Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterInterface` · `Phalcon\Mvc\Model\Binder` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherabstractdispatcher-callactionmethod">
<code class="vis vis-public">public</code>
<code class="sig">callActionMethod(
    mixed $handler,
    string $actionMethod,
    array $params = []
)</code>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed|bool</code>
<code class="sig">dispatch()</code>
<span class="desc">Process the results of the router by calling into the appropriate</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-forward">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">forward( array $forward )</code>
<span class="desc">Forwards the execution flow to another controller/action.</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionName()</code>
<span class="desc">Gets the latest dispatched action name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionSuffix()</code>
<span class="desc">Gets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getactivemethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActiveMethod()</code>
<span class="desc">Returns the current method to be/executed in the dispatcher</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getboundmodels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBoundModels()</code>
<span class="desc">Returns bound models from binder instance</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDefaultNamespace()</code>
<span class="desc">Returns the default namespace</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-gethandlerclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getHandlerClass()</code>
<span class="desc">Possible class name that will be located to dispatch the request</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-gethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getHandlerSuffix()</code>
<span class="desc">Gets the default handler suffix</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getmodelbinder">
<code class="vis vis-public">public</code>
<code class="ret">BinderInterface|null</code>
<code class="sig">getModelBinder()</code>
<span class="desc">Gets model binder</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getmodulename">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getModuleName()</code>
<span class="desc">Gets the module where the controller class is</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNamespaceName()</code>
<span class="desc">Gets a namespace to be prepended to the current handler name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparam">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getParam(
    mixed $param,
    mixed $filters = null,
    mixed $defaultValue = null
)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getParameter(
    mixed $param,
    mixed $filters = null,
    mixed $defaultValue = null
)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParameters()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParams()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getReturnedValue()</code>
<span class="desc">Returns value returned by the latest dispatched action</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-hasparam">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasParam( mixed $param )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-hasparameter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasParameter( mixed $param )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-isfinished">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isFinished()</code>
<span class="desc">Checks if the dispatch loop is finished or has more pendent</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setactionname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setActionName( string $actionName )</code>
<span class="desc">Sets the action name to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setActionSuffix( string $actionSuffix )</code>
<span class="desc">Sets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultAction( string $actionName )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultNamespace( string $defaultNamespace )</code>
<span class="desc">Sets the default namespace</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-sethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setHandlerSuffix( string $handlerSuffix )</code>
<span class="desc">Sets the default suffix for the handler</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setmodelbinder">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterface</code>
<code class="sig">setModelBinder(
    BinderInterface $modelBinder,
    mixed $cache = null
)</code>
<span class="desc">Enable model binding during dispatch</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setmodulename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModuleName( string $moduleName = null )</code>
<span class="desc">Sets the module where the controller is (only informative)</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setNamespaceName( string $namespaceName )</code>
<span class="desc">Sets the namespace where the controller class is</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparam">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setParam(
    mixed $param,
    mixed $value
)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setParameter(
    mixed $param,
    mixed $value
)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparameters">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setParameters( array $params )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparams">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setParams( array $params )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReturnedValue( mixed $value )</code>
<span class="desc">Sets the latest returned value by an action manually</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-wasforwarded">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">wasForwarded()</code>
<span class="desc">Check if the current executed action was forwarded by another one</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-resolveemptyproperties">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">resolveEmptyProperties()</code>
<span class="desc">Set empty properties to their defaults (where defaults are available)</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-tocamelcase">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">toCamelCase( string $input )</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$actionName = ""` `string`

-   `protected`{ .vis-protected } `$actionSuffix = "Action"` `string`

-   `protected`{ .vis-protected } `$activeHandler = null` `object|null`

-   `protected`{ .vis-protected } `$activeMethodMap = []` `array`

-   `protected`{ .vis-protected } `$camelCaseMap = []` `array`

-   `protected`{ .vis-protected } `$defaultAction = ""` `string`

-   `protected`{ .vis-protected } `$defaultHandler = ""` `string`

-   `protected`{ .vis-protected } `$defaultNamespace = ""` `string`

-   `protected`{ .vis-protected } `$eventsManager = null` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$finished = false` `bool`

-   `protected`{ .vis-protected } `$forwarded = false` `bool`

-   `protected`{ .vis-protected } `$handlerHashes = []` `array`

-   `protected`{ .vis-protected } `$handlerHookCache = []` `array`

-   `protected`{ .vis-protected } `$handlerName = ""` `string`

-   `protected`{ .vis-protected } `$handlerSuffix = ""` `string`

-   `protected`{ .vis-protected } `$isControllerInitialize = false` `bool`

-   `protected`{ .vis-protected } `$lastHandler = null` `mixed|null`

-   `protected`{ .vis-protected } `$modelBinder = null` `BinderInterface|null`

-   `protected`{ .vis-protected } `$modelBinding = false` `bool`

-   `protected`{ .vis-protected } `$moduleName = ""` `string`

-   `protected`{ .vis-protected } `$namespaceName = ""` `string`

-   `protected`{ .vis-protected } `$params = []` `array`

-   `protected`{ .vis-protected } `$previousActionName = ""` `string|null`

-   `protected`{ .vis-protected } `$previousHandlerName = ""` `string|null`

-   `protected`{ .vis-protected } `$previousNamespaceName = ""` `string|null`

-   `protected`{ .vis-protected } `$returnedValue = null` `string|null`

</div>

### Methods

<div class="api-group">Public · 37</div>

#### `callActionMethod()` { #dispatcherabstractdispatcher-callactionmethod }

```php
public function callActionMethod(
    mixed $handler,
    string $actionMethod,
    array $params = []
);
```

#### `dispatch()` { #dispatcherabstractdispatcher-dispatch }

```php
public function dispatch(): mixed|bool;
```

Process the results of the router by calling into the appropriate
controller action(s) including any routing data or injected parameters.

#### `forward()` { #dispatcherabstractdispatcher-forward }

```php
public function forward( array $forward ): void;
```

Forwards the execution flow to another controller/action.

```php
$this->dispatcher->forward(
    [
        "controller" => "posts",
        "action"     => "index",
    ]
);
```

#### `getActionName()` { #dispatcherabstractdispatcher-getactionname }

```php
public function getActionName(): string;
```

Gets the latest dispatched action name

#### `getActionSuffix()` { #dispatcherabstractdispatcher-getactionsuffix }

```php
public function getActionSuffix(): string;
```

Gets the default action suffix

#### `getActiveMethod()` { #dispatcherabstractdispatcher-getactivemethod }

```php
public function getActiveMethod(): string;
```

Returns the current method to be/executed in the dispatcher

#### `getBoundModels()` { #dispatcherabstractdispatcher-getboundmodels }

```php
public function getBoundModels(): array;
```

Returns bound models from binder instance

```php
class UserController extends Controller
{
    public function showAction(User $user)
    {
        // return array with $user
        $boundModels = $this->dispatcher->getBoundModels();
    }
}
```

#### `getDefaultNamespace()` { #dispatcherabstractdispatcher-getdefaultnamespace }

```php
public function getDefaultNamespace(): string;
```

Returns the default namespace

#### `getEventsManager()` { #dispatcherabstractdispatcher-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getHandlerClass()` { #dispatcherabstractdispatcher-gethandlerclass }

```php
public function getHandlerClass(): string;
```

Possible class name that will be located to dispatch the request

#### `getHandlerSuffix()` { #dispatcherabstractdispatcher-gethandlersuffix }

```php
public function getHandlerSuffix(): string;
```

Gets the default handler suffix

#### `getModelBinder()` { #dispatcherabstractdispatcher-getmodelbinder }

```php
public function getModelBinder(): BinderInterface|null;
```

Gets model binder

#### `getModuleName()` { #dispatcherabstractdispatcher-getmodulename }

```php
public function getModuleName(): string|null;
```

Gets the module where the controller class is

#### `getNamespaceName()` { #dispatcherabstractdispatcher-getnamespacename }

```php
public function getNamespaceName(): string;
```

Gets a namespace to be prepended to the current handler name

#### `getParam()` { #dispatcherabstractdispatcher-getparam }

```php
public function getParam(
    mixed $param,
    mixed $filters = null,
    mixed $defaultValue = null
): mixed;
```

Gets a param by its name or numeric index

@todo remove this in future versions

#### `getParameter()` { #dispatcherabstractdispatcher-getparameter }

```php
public function getParameter(
    mixed $param,
    mixed $filters = null,
    mixed $defaultValue = null
): mixed;
```

Gets a param by its name or numeric index

#### `getParameters()` { #dispatcherabstractdispatcher-getparameters }

```php
public function getParameters(): array;
```

Gets action params

#### `getParams()` { #dispatcherabstractdispatcher-getparams }

```php
public function getParams(): array;
```

Gets action params

@todo remove this in future versions

#### `getReturnedValue()` { #dispatcherabstractdispatcher-getreturnedvalue }

```php
public function getReturnedValue(): mixed;
```

Returns value returned by the latest dispatched action

#### `hasParam()` { #dispatcherabstractdispatcher-hasparam }

```php
public function hasParam( mixed $param ): bool;
```

Check if a param exists
@todo deprecate this in the future

#### `hasParameter()` { #dispatcherabstractdispatcher-hasparameter }

```php
public function hasParameter( mixed $param ): bool;
```

Check if a param exists

#### `isFinished()` { #dispatcherabstractdispatcher-isfinished }

```php
public function isFinished(): bool;
```

Checks if the dispatch loop is finished or has more pendent
controllers/tasks to dispatch

#### `setActionName()` { #dispatcherabstractdispatcher-setactionname }

```php
public function setActionName( string $actionName ): void;
```

Sets the action name to be dispatched

#### `setActionSuffix()` { #dispatcherabstractdispatcher-setactionsuffix }

```php
public function setActionSuffix( string $actionSuffix ): void;
```

Sets the default action suffix

#### `setDefaultAction()` { #dispatcherabstractdispatcher-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): void;
```

Sets the default action name

#### `setDefaultNamespace()` { #dispatcherabstractdispatcher-setdefaultnamespace }

```php
public function setDefaultNamespace( string $defaultNamespace ): void;
```

Sets the default namespace

#### `setEventsManager()` { #dispatcherabstractdispatcher-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

#### `setHandlerSuffix()` { #dispatcherabstractdispatcher-sethandlersuffix }

```php
public function setHandlerSuffix( string $handlerSuffix ): void;
```

Sets the default suffix for the handler

#### `setModelBinder()` { #dispatcherabstractdispatcher-setmodelbinder }

```php
public function setModelBinder(
    BinderInterface $modelBinder,
    mixed $cache = null
): DispatcherInterface;
```

Enable model binding during dispatch

```php
$di->set(
    'dispatcher',
    function() {
        $dispatcher = new Dispatcher();

        $dispatcher->setModelBinder(
            new Binder(),
            'cache'
        );

        return $dispatcher;
    }
);
```

#### `setModuleName()` { #dispatcherabstractdispatcher-setmodulename }

```php
public function setModuleName( string $moduleName = null ): void;
```

Sets the module where the controller is (only informative)

#### `setNamespaceName()` { #dispatcherabstractdispatcher-setnamespacename }

```php
public function setNamespaceName( string $namespaceName ): void;
```

Sets the namespace where the controller class is

#### `setParam()` { #dispatcherabstractdispatcher-setparam }

```php
public function setParam(
    mixed $param,
    mixed $value
): void;
```

Set a param by its name or numeric index
@todo deprecate this in the future

#### `setParameter()` { #dispatcherabstractdispatcher-setparameter }

```php
public function setParameter(
    mixed $param,
    mixed $value
): void;
```

Set a param by its name or numeric index

#### `setParameters()` { #dispatcherabstractdispatcher-setparameters }

```php
public function setParameters( array $params ): void;
```

Sets action params to be dispatched

#### `setParams()` { #dispatcherabstractdispatcher-setparams }

```php
public function setParams( array $params ): void;
```

Sets action params to be dispatched
@todo deprecate this in the future

#### `setReturnedValue()` { #dispatcherabstractdispatcher-setreturnedvalue }

```php
public function setReturnedValue( mixed $value ): void;
```

Sets the latest returned value by an action manually

#### `wasForwarded()` { #dispatcherabstractdispatcher-wasforwarded }

```php
public function wasForwarded(): bool;
```

Check if the current executed action was forwarded by another one

<div class="api-group">Protected · 2</div>

#### `resolveEmptyProperties()` { #dispatcherabstractdispatcher-resolveemptyproperties }

```php
protected function resolveEmptyProperties(): void;
```

Set empty properties to their defaults (where defaults are available)

#### `toCamelCase()` { #dispatcherabstractdispatcher-tocamelcase }

```php
protected function toCamelCase( string $input ): string;
```


## Dispatcher\DispatcherInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/DispatcherInterface.zep){ .src-btn }

Interface for Phalcon\Dispatcher\AbstractDispatcher

<div class="api-tree" markdown>

- **`Phalcon\Dispatcher\DispatcherInterface`**
    - [`Phalcon\Cli\DispatcherInterface`](phalcon_cli.md#clidispatcherinterface)
    - [`Phalcon\Mvc\DispatcherInterface`](phalcon_mvc.md#mvcdispatcherinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherdispatcherinterface-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed|bool</code>
<code class="sig">dispatch()</code>
<span class="desc">Dispatches a handle action taking into account the routing parameters</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-forward">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">forward( array $forward )</code>
<span class="desc">Forwards the execution flow to another controller/action</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionName()</code>
<span class="desc">Gets last dispatched action name</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionSuffix()</code>
<span class="desc">Gets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-gethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getHandlerSuffix()</code>
<span class="desc">Gets the default handler suffix</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparam">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getParam(
    mixed $param,
    mixed $filters = null
)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getParameter(
    mixed $param,
    mixed $filters = null
)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParameters()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParams()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getReturnedValue()</code>
<span class="desc">Returns value returned by the latest dispatched action</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-hasparam">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasParam( mixed $param )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-isfinished">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isFinished()</code>
<span class="desc">Checks if the dispatch loop is finished or has more pendent</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setactionname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setActionName( string $actionName )</code>
<span class="desc">Sets the action name to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setActionSuffix( string $actionSuffix )</code>
<span class="desc">Sets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultAction( string $actionName )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultNamespace( string $defaultNamespace )</code>
<span class="desc">Sets the default namespace</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-sethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setHandlerSuffix( string $handlerSuffix )</code>
<span class="desc">Sets the default suffix for the handler</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setmodulename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModuleName( string $moduleName = null )</code>
<span class="desc">Sets the module name which the application belongs to</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setNamespaceName( string $namespaceName )</code>
<span class="desc">Sets the namespace which the controller belongs to</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setparam">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setParam(
    mixed $param,
    mixed $value
)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setparams">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setParams( array $params )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
</div>

### Methods

<div class="api-group">Public · 21</div>

#### `dispatch()` { #dispatcherdispatcherinterface-dispatch }

```php
public function dispatch(): mixed|bool;
```

Dispatches a handle action taking into account the routing parameters

#### `forward()` { #dispatcherdispatcherinterface-forward }

```php
public function forward( array $forward ): void;
```

Forwards the execution flow to another controller/action

#### `getActionName()` { #dispatcherdispatcherinterface-getactionname }

```php
public function getActionName(): string;
```

Gets last dispatched action name

#### `getActionSuffix()` { #dispatcherdispatcherinterface-getactionsuffix }

```php
public function getActionSuffix(): string;
```

Gets the default action suffix

#### `getHandlerSuffix()` { #dispatcherdispatcherinterface-gethandlersuffix }

```php
public function getHandlerSuffix(): string;
```

Gets the default handler suffix

#### `getParam()` { #dispatcherdispatcherinterface-getparam }

```php
public function getParam(
    mixed $param,
    mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

#### `getParameter()` { #dispatcherdispatcherinterface-getparameter }

```php
public function getParameter(
    mixed $param,
    mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

#### `getParameters()` { #dispatcherdispatcherinterface-getparameters }

```php
public function getParameters(): array;
```

Gets action params

#### `getParams()` { #dispatcherdispatcherinterface-getparams }

```php
public function getParams(): array;
```

Gets action params

#### `getReturnedValue()` { #dispatcherdispatcherinterface-getreturnedvalue }

```php
public function getReturnedValue(): mixed;
```

Returns value returned by the latest dispatched action

#### `hasParam()` { #dispatcherdispatcherinterface-hasparam }

```php
public function hasParam( mixed $param ): bool;
```

Check if a param exists

#### `isFinished()` { #dispatcherdispatcherinterface-isfinished }

```php
public function isFinished(): bool;
```

Checks if the dispatch loop is finished or has more pendent
controllers/tasks to dispatch

#### `setActionName()` { #dispatcherdispatcherinterface-setactionname }

```php
public function setActionName( string $actionName ): void;
```

Sets the action name to be dispatched

#### `setActionSuffix()` { #dispatcherdispatcherinterface-setactionsuffix }

```php
public function setActionSuffix( string $actionSuffix ): void;
```

Sets the default action suffix

#### `setDefaultAction()` { #dispatcherdispatcherinterface-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): void;
```

Sets the default action name

#### `setDefaultNamespace()` { #dispatcherdispatcherinterface-setdefaultnamespace }

```php
public function setDefaultNamespace( string $defaultNamespace ): void;
```

Sets the default namespace

#### `setHandlerSuffix()` { #dispatcherdispatcherinterface-sethandlersuffix }

```php
public function setHandlerSuffix( string $handlerSuffix ): void;
```

Sets the default suffix for the handler

#### `setModuleName()` { #dispatcherdispatcherinterface-setmodulename }

```php
public function setModuleName( string $moduleName = null ): void;
```

Sets the module name which the application belongs to

#### `setNamespaceName()` { #dispatcherdispatcherinterface-setnamespacename }

```php
public function setNamespaceName( string $namespaceName ): void;
```

Sets the namespace which the controller belongs to

#### `setParam()` { #dispatcherdispatcherinterface-setparam }

```php
public function setParam(
    mixed $param,
    mixed $value
): void;
```

Set a param by its name or numeric index

#### `setParams()` { #dispatcherdispatcherinterface-setparams }

```php
public function setParams( array $params ): void;
```

Sets action params to be dispatched


## Dispatcher\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Dispatcher/* will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Dispatcher\Exception`**
        - [`Phalcon\Cli\Dispatcher\Exception`](phalcon_cli.md#clidispatcherexception)
        - [`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`](#dispatcherexceptionsforwardininitializeforbidden)
        - [`Phalcon\Mvc\Dispatcher\Exception`](phalcon_mvc.md#mvcdispatcherexception)

</div>

### Constants

<div class="api-list" markdown>

-   `EXCEPTION_ACTION_NOT_FOUND = 5` `int`

-   `EXCEPTION_CYCLIC_ROUTING = 1` `int`

-   `EXCEPTION_HANDLER_NOT_FOUND = 2` `int`

-   `EXCEPTION_INVALID_HANDLER = 3` `int`

-   `EXCEPTION_INVALID_PARAMS = 4` `int`

-   `EXCEPTION_NO_DI = 0` `int`

</div>


## Dispatcher\Exceptions\ForwardInInitializeForbidden

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/Exceptions/ForwardInInitializeForbidden.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the
LICENSE.txt file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Dispatcher\Exception`](#dispatcherexception)
        - **`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`**

</div>

__Uses__ `Phalcon\Dispatcher\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherexceptionsforwardininitializeforbidden-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dispatcherexceptionsforwardininitializeforbidden-__construct }

```php
public function __construct();
```
