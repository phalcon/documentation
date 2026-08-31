---
title: "Phalcon Dispatcher"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Dispatcher

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Dispatcher\AbstractDispatcher

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/AbstractDispatcher.zep">Source on GitHub</a>

This is the base class for Phalcon\Mvc\Dispatcher and Phalcon\Cli\Dispatcher.
This class can't be instantiated directly, you can use it to create your own
dispatchers.

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/5.14/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Dispatcher\AbstractDispatcher`** — implements [`Phalcon\Dispatcher\DispatcherInterface`](#dispatcherdispatcherinterface), [`Phalcon\Events\EventsAwareInterface`](/5.14/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Cli\Dispatcher`](/5.14/api/phalcon_cli/#clidispatcher)
- [`Phalcon\Mvc\Dispatcher`](/5.14/api/phalcon_mvc/#mvcdispatcher)

</div>

__Uses__ `Exception` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\Exception` · `Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterInterface` · `Phalcon\Mvc\Model\Binder` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Support\Collection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherabstractdispatcher-callactionmethod">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">callActionMethod</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$handler</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$actionMethod</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$params</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#dispatcherabstractdispatcher-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed|bool</code>
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
<a class="api-item" href="#dispatcherabstractdispatcher-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
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
<a class="api-item" href="#dispatcherabstractdispatcher-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
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
<code class="sig"><span class="sf">setModuleName</span>( <span class="st">string</span> <span class="sv">$moduleName</span><span class="sm"> = null</span> )</code>
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
<a class="api-item" href="#dispatcherabstractdispatcher-resolveemptyproperties">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveEmptyProperties</span>()</code>
<span class="desc">Set empty properties to their defaults (where defaults are available)</span>
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
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sv">$eventsManager</span><span class="sm"> = null</span></code>
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
<code class="ret">mixed|null</code>
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
<code class="ret">string</code>
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
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$previousActionName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$previousHandlerName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$previousNamespaceName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$returnedValue</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 37</div>

<h4 id="dispatcherabstractdispatcher-callactionmethod"><code>callActionMethod()</code></h4>

```php
public function callActionMethod(
mixed $handler,
string $actionMethod,
array $params = []
);
```

<h4 id="dispatcherabstractdispatcher-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch(): mixed|bool;
```

Process the results of the router by calling into the appropriate
controller action(s) including any routing data or injected parameters.

<h4 id="dispatcherabstractdispatcher-forward"><code>forward()</code></h4>

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

<h4 id="dispatcherabstractdispatcher-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Gets the latest dispatched action name

<h4 id="dispatcherabstractdispatcher-getactionsuffix"><code>getActionSuffix()</code></h4>

```php
public function getActionSuffix(): string;
```

Gets the default action suffix

<h4 id="dispatcherabstractdispatcher-getactivemethod"><code>getActiveMethod()</code></h4>

```php
public function getActiveMethod(): string;
```

Returns the current method to be/executed in the dispatcher

<h4 id="dispatcherabstractdispatcher-getboundmodels"><code>getBoundModels()</code></h4>

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

<h4 id="dispatcherabstractdispatcher-getdefaultnamespace"><code>getDefaultNamespace()</code></h4>

```php
public function getDefaultNamespace(): string;
```

Returns the default namespace

<h4 id="dispatcherabstractdispatcher-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

<h4 id="dispatcherabstractdispatcher-gethandlerclass"><code>getHandlerClass()</code></h4>

```php
public function getHandlerClass(): string;
```

Possible class name that will be located to dispatch the request

<h4 id="dispatcherabstractdispatcher-gethandlersuffix"><code>getHandlerSuffix()</code></h4>

```php
public function getHandlerSuffix(): string;
```

Gets the default handler suffix

<h4 id="dispatcherabstractdispatcher-getmodelbinder"><code>getModelBinder()</code></h4>

```php
public function getModelBinder(): BinderInterface|null;
```

Gets model binder

<h4 id="dispatcherabstractdispatcher-getmodulename"><code>getModuleName()</code></h4>

```php
public function getModuleName(): string|null;
```

Gets the module where the controller class is

<h4 id="dispatcherabstractdispatcher-getnamespacename"><code>getNamespaceName()</code></h4>

```php
public function getNamespaceName(): string;
```

Gets a namespace to be prepended to the current handler name

<h4 id="dispatcherabstractdispatcher-getparam"><code>getParam()</code></h4>

```php
public function getParam(
mixed $param,
mixed $filters = null,
mixed $defaultValue = null
): mixed;
```

Gets a param by its name or numeric index

@todo remove this in future versions

<h4 id="dispatcherabstractdispatcher-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter(
mixed $param,
mixed $filters = null,
mixed $defaultValue = null
): mixed;
```

Gets a param by its name or numeric index

<h4 id="dispatcherabstractdispatcher-getparameters"><code>getParameters()</code></h4>

```php
public function getParameters(): array;
```

Gets action params

<h4 id="dispatcherabstractdispatcher-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Gets action params

@todo remove this in future versions

<h4 id="dispatcherabstractdispatcher-getreturnedvalue"><code>getReturnedValue()</code></h4>

```php
public function getReturnedValue(): mixed;
```

Returns value returned by the latest dispatched action

<h4 id="dispatcherabstractdispatcher-hasparam"><code>hasParam()</code></h4>

```php
public function hasParam( mixed $param ): bool;
```

Check if a param exists
@todo deprecate this in the future

<h4 id="dispatcherabstractdispatcher-hasparameter"><code>hasParameter()</code></h4>

```php
public function hasParameter( mixed $param ): bool;
```

Check if a param exists

<h4 id="dispatcherabstractdispatcher-isfinished"><code>isFinished()</code></h4>

```php
public function isFinished(): bool;
```

Checks if the dispatch loop is finished or has more pendent
controllers/tasks to dispatch

<h4 id="dispatcherabstractdispatcher-setactionname"><code>setActionName()</code></h4>

```php
public function setActionName( string $actionName ): void;
```

Sets the action name to be dispatched

<h4 id="dispatcherabstractdispatcher-setactionsuffix"><code>setActionSuffix()</code></h4>

```php
public function setActionSuffix( string $actionSuffix ): void;
```

Sets the default action suffix

<h4 id="dispatcherabstractdispatcher-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): void;
```

Sets the default action name

<h4 id="dispatcherabstractdispatcher-setdefaultnamespace"><code>setDefaultNamespace()</code></h4>

```php
public function setDefaultNamespace( string $defaultNamespace ): void;
```

Sets the default namespace

<h4 id="dispatcherabstractdispatcher-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<h4 id="dispatcherabstractdispatcher-sethandlersuffix"><code>setHandlerSuffix()</code></h4>

```php
public function setHandlerSuffix( string $handlerSuffix ): void;
```

Sets the default suffix for the handler

<h4 id="dispatcherabstractdispatcher-setmodelbinder"><code>setModelBinder()</code></h4>

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

<h4 id="dispatcherabstractdispatcher-setmodulename"><code>setModuleName()</code></h4>

```php
public function setModuleName( string $moduleName = null ): void;
```

Sets the module where the controller is (only informative)

<h4 id="dispatcherabstractdispatcher-setnamespacename"><code>setNamespaceName()</code></h4>

```php
public function setNamespaceName( string $namespaceName ): void;
```

Sets the namespace where the controller class is

<h4 id="dispatcherabstractdispatcher-setparam"><code>setParam()</code></h4>

```php
public function setParam(
mixed $param,
mixed $value
): void;
```

Set a param by its name or numeric index
@todo deprecate this in the future

<h4 id="dispatcherabstractdispatcher-setparameter"><code>setParameter()</code></h4>

```php
public function setParameter(
mixed $param,
mixed $value
): void;
```

Set a param by its name or numeric index

<h4 id="dispatcherabstractdispatcher-setparameters"><code>setParameters()</code></h4>

```php
public function setParameters( array $params ): void;
```

Sets action params to be dispatched

<h4 id="dispatcherabstractdispatcher-setparams"><code>setParams()</code></h4>

```php
public function setParams( array $params ): void;
```

Sets action params to be dispatched
@todo deprecate this in the future

<h4 id="dispatcherabstractdispatcher-setreturnedvalue"><code>setReturnedValue()</code></h4>

```php
public function setReturnedValue( mixed $value ): void;
```

Sets the latest returned value by an action manually

<h4 id="dispatcherabstractdispatcher-wasforwarded"><code>wasForwarded()</code></h4>

```php
public function wasForwarded(): bool;
```

Check if the current executed action was forwarded by another one

<div class="api-group">Protected · 2</div>

<h4 id="dispatcherabstractdispatcher-resolveemptyproperties"><code>resolveEmptyProperties()</code></h4>

```php
protected function resolveEmptyProperties(): void;
```

Set empty properties to their defaults (where defaults are available)

<h4 id="dispatcherabstractdispatcher-tocamelcase"><code>toCamelCase()</code></h4>

```php
protected function toCamelCase( string $input ): string;
```

## Dispatcher\DispatcherInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/DispatcherInterface.zep">Source on GitHub</a>

Interface for Phalcon\Dispatcher\AbstractDispatcher

<div class="api-tree">

- **`Phalcon\Dispatcher\DispatcherInterface`**
- [`Phalcon\Cli\DispatcherInterface`](/5.14/api/phalcon_cli/#clidispatcherinterface)
- [`Phalcon\Mvc\DispatcherInterface`](/5.14/api/phalcon_mvc/#mvcdispatcherinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherdispatcherinterface-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed|bool</code>
<code class="sig"><span class="sf">dispatch</span>()</code>
<span class="desc">Dispatches a handle action taking into account the routing parameters</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-forward">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">forward</span>( <span class="st">array</span> <span class="sv">$forward</span> )</code>
<span class="desc">Forwards the execution flow to another controller/action</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionName</span>()</code>
<span class="desc">Gets last dispatched action name</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionSuffix</span>()</code>
<span class="desc">Gets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-gethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHandlerSuffix</span>()</code>
<span class="desc">Gets the default handler suffix</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparam">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParam</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParameters</span>()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getParams</span>()</code>
<span class="desc">Gets action params</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-getreturnedvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getReturnedValue</span>()</code>
<span class="desc">Returns value returned by the latest dispatched action</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-hasparam">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParam</span>( <span class="st">mixed</span> <span class="sv">$param</span> )</code>
<span class="desc">Check if a param exists</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-isfinished">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isFinished</span>()</code>
<span class="desc">Checks if the dispatch loop is finished or has more pendent</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setactionname">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setActionName</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the action name to be dispatched</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setActionSuffix</span>( <span class="st">string</span> <span class="sv">$actionSuffix</span> )</code>
<span class="desc">Sets the default action suffix</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultAction</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultNamespace</span>( <span class="st">string</span> <span class="sv">$defaultNamespace</span> )</code>
<span class="desc">Sets the default namespace</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-sethandlersuffix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHandlerSuffix</span>( <span class="st">string</span> <span class="sv">$handlerSuffix</span> )</code>
<span class="desc">Sets the default suffix for the handler</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setmodulename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setModuleName</span>( <span class="st">string</span> <span class="sv">$moduleName</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the module name which the application belongs to</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setNamespaceName</span>( <span class="st">string</span> <span class="sv">$namespaceName</span> )</code>
<span class="desc">Sets the namespace which the controller belongs to</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setparam">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParam</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$param</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a param by its name or numeric index</span>
</a>
<a class="api-item" href="#dispatcherdispatcherinterface-setparams">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setParams</span>( <span class="st">array</span> <span class="sv">$params</span> )</code>
<span class="desc">Sets action params to be dispatched</span>
</a>
</div>

### Methods

<div class="api-group">Public · 21</div>

<h4 id="dispatcherdispatcherinterface-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch(): mixed|bool;
```

Dispatches a handle action taking into account the routing parameters

<h4 id="dispatcherdispatcherinterface-forward"><code>forward()</code></h4>

```php
public function forward( array $forward ): void;
```

Forwards the execution flow to another controller/action

<h4 id="dispatcherdispatcherinterface-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Gets last dispatched action name

<h4 id="dispatcherdispatcherinterface-getactionsuffix"><code>getActionSuffix()</code></h4>

```php
public function getActionSuffix(): string;
```

Gets the default action suffix

<h4 id="dispatcherdispatcherinterface-gethandlersuffix"><code>getHandlerSuffix()</code></h4>

```php
public function getHandlerSuffix(): string;
```

Gets the default handler suffix

<h4 id="dispatcherdispatcherinterface-getparam"><code>getParam()</code></h4>

```php
public function getParam(
mixed $param,
mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

<h4 id="dispatcherdispatcherinterface-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter(
mixed $param,
mixed $filters = null
): mixed;
```

Gets a param by its name or numeric index

<h4 id="dispatcherdispatcherinterface-getparameters"><code>getParameters()</code></h4>

```php
public function getParameters(): array;
```

Gets action params

<h4 id="dispatcherdispatcherinterface-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Gets action params

<h4 id="dispatcherdispatcherinterface-getreturnedvalue"><code>getReturnedValue()</code></h4>

```php
public function getReturnedValue(): mixed;
```

Returns value returned by the latest dispatched action

<h4 id="dispatcherdispatcherinterface-hasparam"><code>hasParam()</code></h4>

```php
public function hasParam( mixed $param ): bool;
```

Check if a param exists

<h4 id="dispatcherdispatcherinterface-isfinished"><code>isFinished()</code></h4>

```php
public function isFinished(): bool;
```

Checks if the dispatch loop is finished or has more pendent
controllers/tasks to dispatch

<h4 id="dispatcherdispatcherinterface-setactionname"><code>setActionName()</code></h4>

```php
public function setActionName( string $actionName ): void;
```

Sets the action name to be dispatched

<h4 id="dispatcherdispatcherinterface-setactionsuffix"><code>setActionSuffix()</code></h4>

```php
public function setActionSuffix( string $actionSuffix ): void;
```

Sets the default action suffix

<h4 id="dispatcherdispatcherinterface-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): void;
```

Sets the default action name

<h4 id="dispatcherdispatcherinterface-setdefaultnamespace"><code>setDefaultNamespace()</code></h4>

```php
public function setDefaultNamespace( string $defaultNamespace ): void;
```

Sets the default namespace

<h4 id="dispatcherdispatcherinterface-sethandlersuffix"><code>setHandlerSuffix()</code></h4>

```php
public function setHandlerSuffix( string $handlerSuffix ): void;
```

Sets the default suffix for the handler

<h4 id="dispatcherdispatcherinterface-setmodulename"><code>setModuleName()</code></h4>

```php
public function setModuleName( string $moduleName = null ): void;
```

Sets the module name which the application belongs to

<h4 id="dispatcherdispatcherinterface-setnamespacename"><code>setNamespaceName()</code></h4>

```php
public function setNamespaceName( string $namespaceName ): void;
```

Sets the namespace which the controller belongs to

<h4 id="dispatcherdispatcherinterface-setparam"><code>setParam()</code></h4>

```php
public function setParam(
mixed $param,
mixed $value
): void;
```

Set a param by its name or numeric index

<h4 id="dispatcherdispatcherinterface-setparams"><code>setParams()</code></h4>

```php
public function setParams( array $params ): void;
```

Sets action params to be dispatched

## Dispatcher\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Dispatcher/* will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Dispatcher\Exception`**
- [`Phalcon\Cli\Dispatcher\Exception`](/5.14/api/phalcon_cli/#clidispatcherexception)
- [`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`](#dispatcherexceptionsforwardininitializeforbidden)
- [`Phalcon\Mvc\Dispatcher\Exception`](/5.14/api/phalcon_mvc/#mvcdispatcherexception)

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Dispatcher/Exceptions/ForwardInInitializeForbidden.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the
LICENSE.txt file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Dispatcher\Exception`](#dispatcherexception)
- **`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`**

</div>

__Uses__ `Phalcon\Dispatcher\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#dispatcherexceptionsforwardininitializeforbidden-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="dispatcherexceptionsforwardininitializeforbidden-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Source: https://docs.phalcon.io/5.14/api/phalcon_dispatcher/index.mdx
