---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Dispatcher\AbstractDispatcher

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Dispatcher/AbstractDispatcher.php){ .src-btn }

This is the base class for Phalcon\Mvc\Dispatcher and Phalcon\Cli\Dispatcher.
This class can't be instantiated directly, you can use it to create your own
dispatchers.

## Error protocol

Subclasses (including third-party ones) MUST implement the two abstract
error hooks {@see throwDispatchException()} and {@see handleException()}.
The dispatch loop calls them on every error/exception path; a subclass that
omits them cannot be loaded.

## Hook channels

A single lifecycle point can be intercepted through three independent
channels. For any given point they run in this order:

1. **Events-manager listener** - e.g. `dispatch:beforeExecuteRoute`. A
   listener returning `false` cancels; calling `forward()` re-enters the
   loop; throwing routes through {@see handleException()}.
2. **Duck-typed handler method** - e.g. a `beforeExecuteRoute()` method on
   the controller/task itself (presence is cached per class). Same
   `false` / `forward()` cancellation semantics as the event.
3. **`dispatch:beforeCallAction` observer** - fired by
   {@see callActionMethod()} with a `Phalcon\Support\Collection` carrying
   the mutable keys `handler`, `action` and `params`. Listeners may rewrite
   those keys to change *what* gets invoked; the substituted callable is
   re-validated before the call. `dispatch:afterCallAction` receives the
   same Collection plus a `result` key.

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Dispatcher\AbstractDispatcher`** - implements [`Phalcon\Dispatcher\DispatcherInterface`](#dispatcherdispatcherinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
            - [`Phalcon\Cli\Dispatcher`](phalcon_cli.md#clidispatcher)
            - [`Phalcon\Mvc\Dispatcher`](phalcon_mvc.md#mvcdispatcher)

</div>

__Uses__ `Exception` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Contracts\Dispatcher\DispatcherTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\Exception` · `Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Filter\FilterInterface` · `Phalcon\Mvc\Model\Binder` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherabstractdispatcher-callactionmethod">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">callActionMethod</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$handler</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$actionMethod</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$params</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">dispatch</span>()</code>
<span class="desc">Process the results of the router by calling into the appropriate</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-forward">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">forward</span>( <span class="st">array</span> <span class="sv">$forward</span> )</code>
<span class="desc">Forwards the execution flow to another controller/action.</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionName</span>()</code>
<span class="desc">Gets the latest dispatched action name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionSuffix</span>()</code>
<span class="desc">Gets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getactivemethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActiveMethod</span>()</code>
<span class="desc">Returns the current method to be/executed in the dispatcher</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getboundmodels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getBoundModels</span>()</code>
<span class="desc">Returns bound models from binder instance</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDefaultNamespace</span>()</code>
<span class="desc">Returns the default namespace</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-gethandlerclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHandlerClass</span>()</code>
<span class="desc">Possible class name that will be located to dispatch the request</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-gethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHandlerSuffix</span>()</code>
<span class="desc">Gets the default handler suffix</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getmodelbinder">
<code class="vis vis-public">public</code>
<code class="ret">BinderInterface|null</code>
<code class="sig"><span class="sf">getModelBinder</span>()</code>
<span class="desc">Gets model binder</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getmodulename">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getModuleName</span>()</code>
<span class="desc">Gets the module where the controller class is</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getNamespaceName</span>()</code>
<span class="desc">Gets a namespace to be prepended to the current handler name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparam">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParam</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParameters</span>()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParams</span>()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getpreviousactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPreviousActionName</span>()</code>
<span class="desc">Gets previous dispatched action name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getprevioushandlername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPreviousHandlerName</span>()</code>
<span class="desc">Gets previous dispatched handler name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getpreviousnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPreviousNamespaceName</span>()</code>
<span class="desc">Gets previous dispatched namespace name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-getreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getReturnedValue</span>()</code>
<span class="desc">Returns value returned by the latest dispatched action</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-hasparam">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParam</span>( <span class="st">mixed</span> <span class="sv">$param</span> )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-hasparameter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParameter</span>( <span class="st">mixed</span> <span class="sv">$param</span> )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-isfinished">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isFinished</span>()</code>
<span class="desc">Checks if the dispatch loop is finished or has more pendent</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setactionname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setActionName</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the action name to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setActionSuffix</span>( <span class="st">string</span> <span class="sv">$actionSuffix</span> )</code>
<span class="desc">Sets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultAction</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultNamespace</span>( <span class="st">string</span> <span class="sv">$defaultNamespace</span> )</code>
<span class="desc">Sets the default namespace</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-sethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHandlerSuffix</span>( <span class="st">string</span> <span class="sv">$handlerSuffix</span> )</code>
<span class="desc">Sets the default suffix for the handler</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setmodelbinder">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterface</code>
<code class="sig"><span class="sf">setModelBinder</span>(<span class="prm"><span class="st">BinderInterface</span> <span class="sv">$modelBinder</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$cache</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Enable model binding during dispatch</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setmodulename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setModuleName</span>( <span class="st">string|null</span> <span class="sv">$moduleName</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the module where the controller is (only informative)</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setNamespaceName</span>( <span class="st">string</span> <span class="sv">$namespaceName</span> )</code>
<span class="desc">Sets the namespace where the controller class is</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparam">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParam</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParameter</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparameters">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParameters</span>( <span class="st">array</span> <span class="sv">$params</span> )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setparams">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParams</span>( <span class="st">array</span> <span class="sv">$params</span> )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-setreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setReturnedValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Sets the latest returned value by an action manually</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-wasforwarded">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">wasForwarded</span>()</code>
<span class="desc">Check if the current executed action was forwarded by another one</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-handleexception">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">handleException</span>( <span class="st">Exception</span> <span class="sv">$exception</span> )</code>
<span class="desc">Handles a user exception triggered inside the dispatch loop.</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-resolveemptyproperties">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveEmptyProperties</span>()</code>
<span class="desc">Set empty properties to their defaults (where defaults are available)</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-throwdispatchexception">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">throwDispatchException</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$exceptionCode</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Throws an internal dispatch exception.</span>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-tocamelcase">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toCamelCase</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$actionName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$actionSuffix</span><span class="sm"> = &quot;Action&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sv">$activeHandler</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$activeMethodMap</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$camelCaseMap</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultAction</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultHandler</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultNamespace</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$finished</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forwarded</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$handlerHashes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$handlerHookCache</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$handlerName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$handlerSuffix</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isControllerInitialize</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$lastHandler</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">BinderInterface|null</code>
<code class="sig"><span class="sv">$modelBinder</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$modelBinding</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$moduleName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$namespaceName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$params</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$previousActionName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$previousHandlerName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$previousNamespaceName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$returnedValue</span><span class="sm"> = null</span></code>
<span class="desc">@todo fix the type in v7</span>
</div>
</div>

### Methods

<div class="api-group">Public · 38</div>

#### `callActionMethod()` { #dispatcherabstractdispatcher-callactionmethod }

```php
public function callActionMethod(
    mixed $handler,
    string $actionMethod,
    array $params = []
): mixed;
```

#### `dispatch()` { #dispatcherabstractdispatcher-dispatch }

```php
public function dispatch(): mixed;
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

Note: The interface declares `getParam(param, filters = null)` without the
`defaultValue` argument, so code typed against `DispatcherInterface`
cannot use the default-value feature. This signature drift is intentional
for now; the interface and implementation will be aligned in the next
major version.

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

#### `getPreviousActionName()` { #dispatcherabstractdispatcher-getpreviousactionname }

```php
public function getPreviousActionName(): string;
```

Gets previous dispatched action name

#### `getPreviousHandlerName()` { #dispatcherabstractdispatcher-getprevioushandlername }

```php
public function getPreviousHandlerName(): string;
```

Gets previous dispatched handler name

#### `getPreviousNamespaceName()` { #dispatcherabstractdispatcher-getpreviousnamespacename }

```php
public function getPreviousNamespaceName(): string;
```

Gets previous dispatched namespace name

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
public function setModuleName( string|null $moduleName = null ): void;
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

<div class="api-group">Protected · 4</div>

#### `handleException()` { #dispatcherabstractdispatcher-handleexception }

```php
abstract protected function handleException( Exception $exception );
```

Handles a user exception triggered inside the dispatch loop.

Subclasses implement the namespace-specific behavior (typically firing
the `dispatch:beforeException` event so listeners may forward or swallow
the exception).

#### `resolveEmptyProperties()` { #dispatcherabstractdispatcher-resolveemptyproperties }

```php
protected function resolveEmptyProperties(): void;
```

Set empty properties to their defaults (where defaults are available)

#### `throwDispatchException()` { #dispatcherabstractdispatcher-throwdispatchexception }

```php
abstract protected function throwDispatchException(
    string $message,
    int $exceptionCode = 0
);
```

Throws an internal dispatch exception.

Subclasses build the namespace-specific exception and route it through
handleException() before throwing it when it was not handled.

#### `toCamelCase()` { #dispatcherabstractdispatcher-tocamelcase }

```php
protected function toCamelCase( string $input ): string;
```


## Dispatcher\DispatcherInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Dispatcher/DispatcherInterface.php){ .src-btn }

Interface for Phalcon\Dispatcher\AbstractDispatcher

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](phalcon_contracts.md#contractsdispatcherdispatcher)
    - **`Phalcon\Dispatcher\DispatcherInterface`**

</div>

__Uses__ `Phalcon\Contracts\Dispatcher\Dispatcher`
{ .api-uses }


## Dispatcher\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Dispatcher/Exception.php){ .src-btn }

Exceptions thrown in Phalcon\Dispatcher/* will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Dispatcher\Exception`**
        - [`Phalcon\Cli\Dispatcher\Exception`](phalcon_cli.md#clidispatcherexception)
        - [`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`](#dispatcherexceptionsforwardininitializeforbidden)
        - [`Phalcon\Mvc\Dispatcher\Exception`](phalcon_mvc.md#mvcdispatcherexception)

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EXCEPTION_ACTION_NOT_FOUND</span><span class="sm"> = 5</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EXCEPTION_CYCLIC_ROUTING</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EXCEPTION_HANDLER_NOT_FOUND</span><span class="sm"> = 2</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EXCEPTION_INVALID_HANDLER</span><span class="sm"> = 3</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EXCEPTION_INVALID_PARAMS</span><span class="sm"> = 4</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EXCEPTION_NO_DI</span><span class="sm"> = 0</span></code>
</div>
</div>


## Dispatcher\Exceptions\ForwardInInitializeForbidden

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Dispatcher/Exceptions/ForwardInInitializeForbidden.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dispatcherexceptionsforwardininitializeforbidden-__construct }

```php
public function __construct();
```
