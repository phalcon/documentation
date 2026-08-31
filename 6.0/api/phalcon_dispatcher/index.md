---
title: "Phalcon Dispatcher"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Dispatcher

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Dispatcher\AbstractDispatcher

Abstract

This is the base class for Phalcon\Mvc\Dispatcher and Phalcon\Cli\Dispatcher.
This class can't be instantiated directly, you can use it to create your own
dispatchers.

## Error protocol

Subclasses (including third-party ones) MUST implement the two abstract
error hooks \{@see throwDispatchException()\} and \{@see handleException()\}.
The dispatch loop calls them on every error/exception path; a subclass that
omits them cannot be loaded.

## Hook channels

A single lifecycle point can be intercepted through three independent
channels. For any given point they run in this order:

1. **Events-manager listener** - e.g. `dispatch:beforeExecuteRoute`. A
   listener returning `false` cancels; calling `forward()` re-enters the
   loop; throwing routes through \{@see handleException()\}.
2. **Duck-typed handler method** - e.g. a `beforeExecuteRoute()` method on
   the controller/task itself (presence is cached per class). Same
   `false` / `forward()` cancellation semantics as the event.
3. **`dispatch:beforeCallAction` observer** - fired by
   \{@see callActionMethod()\} with a `Phalcon\Support\Collection` carrying
   the mutable keys `handler`, `action` and `params`. Listeners may rewrite
   those keys to change *what* gets invoked; the substituted callable is
   re-validated before the call. `dispatch:afterCallAction` receives the
   same Collection plus a `result` key.

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](../phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Dispatcher\AbstractDispatcher`** - implements [`Phalcon\Dispatcher\DispatcherInterface`](#dispatcherdispatcherinterface), [`Phalcon\Events\EventsAwareInterface`](../phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Cli\Dispatcher`](../phalcon_cli/#clidispatcher)
- [`Phalcon\Mvc\Dispatcher`](../phalcon_mvc/#mvcdispatcher)

`Exception` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Contracts\Dispatcher\DispatcherTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\Exception` · `Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Filter\FilterInterface` · `Phalcon\Mvc\Model\Binder` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Support\Collection`

### Method Summary

<ApiItem href="#dispatcherabstractdispatcher-callactionmethod" visibility="public" name="callActionMethod" returnType="mixed" params={[{"type":"mixed","name":"handler","default":null},{"type":"string","name":"actionMethod","default":null},{"type":"array","name":"params","default":"[]"}]}>
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-dispatch" visibility="public" name="dispatch" returnType="mixed" params={[]}>
Process the results of the router by calling into the appropriate
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-forward" visibility="public" name="forward" returnType="void" params={[{"type":"array","name":"forward","default":null}]}>
Forwards the execution flow to another controller/action.
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Gets the latest dispatched action name
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getactionsuffix" visibility="public" name="getActionSuffix" returnType="string" params={[]}>
Gets the default action suffix
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getactivemethod" visibility="public" name="getActiveMethod" returnType="string" params={[]}>
Returns the current method to be/executed in the dispatcher
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getboundmodels" visibility="public" name="getBoundModels" returnType="array" params={[]}>
Returns bound models from binder instance
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getdefaultnamespace" visibility="public" name="getDefaultNamespace" returnType="string" params={[]}>
Returns the default namespace
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-gethandlerclass" visibility="public" name="getHandlerClass" returnType="string" params={[]}>
Possible class name that will be located to dispatch the request
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-gethandlersuffix" visibility="public" name="getHandlerSuffix" returnType="string" params={[]}>
Gets the default handler suffix
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getmodelbinder" visibility="public" name="getModelBinder" returnType="BinderInterface|null" params={[]}>
Gets model binder
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getmodulename" visibility="public" name="getModuleName" returnType="string|null" params={[]}>
Gets the module where the controller class is
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getnamespacename" visibility="public" name="getNamespaceName" returnType="string" params={[]}>
Gets a namespace to be prepended to the current handler name
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getparam" visibility="public" name="getParam" returnType="mixed" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Gets a param by its name or numeric index
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getparameter" visibility="public" name="getParameter" returnType="mixed" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Gets a param by its name or numeric index
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getparameters" visibility="public" name="getParameters" returnType="array" params={[]}>
Gets action params
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Gets action params
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getpreviousactionname" visibility="public" name="getPreviousActionName" returnType="string" params={[]}>
Gets previous dispatched action name
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getprevioushandlername" visibility="public" name="getPreviousHandlerName" returnType="string" params={[]}>
Gets previous dispatched handler name
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getpreviousnamespacename" visibility="public" name="getPreviousNamespaceName" returnType="string" params={[]}>
Gets previous dispatched namespace name
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-getreturnedvalue" visibility="public" name="getReturnedValue" returnType="mixed" params={[]}>
Returns value returned by the latest dispatched action
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-hasparam" visibility="public" name="hasParam" returnType="bool" params={[{"type":"mixed","name":"param","default":null}]}>
Check if a param exists
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-hasparameter" visibility="public" name="hasParameter" returnType="bool" params={[{"type":"mixed","name":"param","default":null}]}>
Check if a param exists
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-isfinished" visibility="public" name="isFinished" returnType="bool" params={[]}>
Checks if the dispatch loop is finished or has more pendent
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setactionname" visibility="public" name="setActionName" returnType="void" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the action name to be dispatched
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setactionsuffix" visibility="public" name="setActionSuffix" returnType="void" params={[{"type":"string","name":"actionSuffix","default":null}]}>
Sets the default action suffix
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setdefaultaction" visibility="public" name="setDefaultAction" returnType="void" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the default action name
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setdefaultnamespace" visibility="public" name="setDefaultNamespace" returnType="void" params={[{"type":"string","name":"defaultNamespace","default":null}]}>
Sets the default namespace
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-sethandlersuffix" visibility="public" name="setHandlerSuffix" returnType="void" params={[{"type":"string","name":"handlerSuffix","default":null}]}>
Sets the default suffix for the handler
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setmodelbinder" visibility="public" name="setModelBinder" returnType="DispatcherInterface" params={[{"type":"BinderInterface","name":"modelBinder","default":null},{"type":"mixed","name":"cache","default":"null"}]}>
Enable model binding during dispatch
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setmodulename" visibility="public" name="setModuleName" returnType="void" params={[{"type":"string|null","name":"moduleName","default":"null"}]}>
Sets the module where the controller is (only informative)
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setnamespacename" visibility="public" name="setNamespaceName" returnType="void" params={[{"type":"string","name":"namespaceName","default":null}]}>
Sets the namespace where the controller class is
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setparam" visibility="public" name="setParam" returnType="void" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"value","default":null}]}>
Set a param by its name or numeric index
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setparameter" visibility="public" name="setParameter" returnType="void" params={[{"type":"mixed","name":"param","default":null},{"type":"mixed","name":"value","default":null}]}>
Set a param by its name or numeric index
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setparameters" visibility="public" name="setParameters" returnType="void" params={[{"type":"array","name":"params","default":null}]}>
Sets action params to be dispatched
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setparams" visibility="public" name="setParams" returnType="void" params={[{"type":"array","name":"params","default":null}]}>
Sets action params to be dispatched
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-setreturnedvalue" visibility="public" name="setReturnedValue" returnType="void" params={[{"type":"mixed","name":"value","default":null}]}>
Sets the latest returned value by an action manually
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-wasforwarded" visibility="public" name="wasForwarded" returnType="bool" params={[]}>
Check if the current executed action was forwarded by another one
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-handleexception" visibility="protected" name="handleException" returnType="" params={[{"type":"Exception","name":"exception","default":null}]}>
Handles a user exception triggered inside the dispatch loop.
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-resolveemptyproperties" visibility="protected" name="resolveEmptyProperties" returnType="void" params={[]}>
Set empty properties to their defaults (where defaults are available)
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-throwdispatchexception" visibility="protected" name="throwDispatchException" returnType="" params={[{"type":"string","name":"message","default":null},{"type":"int","name":"exceptionCode","default":"0"}]}>
Throws an internal dispatch exception.
</ApiItem>
<ApiItem href="#dispatcherabstractdispatcher-tocamelcase" visibility="protected" name="toCamelCase" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="actionName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="actionSuffix" type="string" default="&quot;Action&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeHandler" type="object|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeMethodMap" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="camelCaseMap" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultAction" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultHandler" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultNamespace" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="finished" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="forwarded" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlerHashes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlerHookCache" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlerName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlerSuffix" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isControllerInitialize" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="lastHandler" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelBinder" type="BinderInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelBinding" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="moduleName" type="string|null" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="namespaceName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="params" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="previousActionName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="previousHandlerName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="previousNamespaceName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="returnedValue" type="mixed" default="null">
@todo fix the type in v7
</ApiItem>

### Methods

<h4 id="dispatcherabstractdispatcher-callactionmethod"><code>callActionMethod()</code></h4>

```php
public function callActionMethod(
mixed $handler,
string $actionMethod,
array $params = []
): mixed;
```

<h4 id="dispatcherabstractdispatcher-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch(): mixed;
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

Note: The interface declares `getParam(param, filters = null)` without the
`defaultValue` argument, so code typed against `DispatcherInterface`
cannot use the default-value feature. This signature drift is intentional
for now; the interface and implementation will be aligned in the next
major version.

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

<h4 id="dispatcherabstractdispatcher-getpreviousactionname"><code>getPreviousActionName()</code></h4>

```php
public function getPreviousActionName(): string;
```

Gets previous dispatched action name

<h4 id="dispatcherabstractdispatcher-getprevioushandlername"><code>getPreviousHandlerName()</code></h4>

```php
public function getPreviousHandlerName(): string;
```

Gets previous dispatched handler name

<h4 id="dispatcherabstractdispatcher-getpreviousnamespacename"><code>getPreviousNamespaceName()</code></h4>

```php
public function getPreviousNamespaceName(): string;
```

Gets previous dispatched namespace name

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
public function setModuleName( string|null $moduleName = null ): void;
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

<h4 id="dispatcherabstractdispatcher-handleexception"><code>handleException()</code></h4>

```php
abstract protected function handleException( Exception $exception );
```

Handles a user exception triggered inside the dispatch loop.

Subclasses implement the namespace-specific behavior (typically firing
the `dispatch:beforeException` event so listeners may forward or swallow
the exception).

<h4 id="dispatcherabstractdispatcher-resolveemptyproperties"><code>resolveEmptyProperties()</code></h4>

```php
protected function resolveEmptyProperties(): void;
```

Set empty properties to their defaults (where defaults are available)

<h4 id="dispatcherabstractdispatcher-throwdispatchexception"><code>throwDispatchException()</code></h4>

```php
abstract protected function throwDispatchException(
string $message,
int $exceptionCode = 0
);
```

Throws an internal dispatch exception.

Subclasses build the namespace-specific exception and route it through
handleException() before throwing it when it was not handled.

<h4 id="dispatcherabstractdispatcher-tocamelcase"><code>toCamelCase()</code></h4>

```php
protected function toCamelCase( string $input ): string;
```

## Dispatcher\DispatcherInterface

Interface

Interface for Phalcon\Dispatcher\AbstractDispatcher

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](../phalcon_contracts/#contractsdispatcherdispatcher)
- **`Phalcon\Dispatcher\DispatcherInterface`**

`Phalcon\Contracts\Dispatcher\Dispatcher`

## Dispatcher\Exception

Class

Exceptions thrown in Phalcon\Dispatcher/* will use this class

- `\Exception`
- **`Phalcon\Dispatcher\Exception`**
- [`Phalcon\Cli\Dispatcher\Exception`](../phalcon_cli/#clidispatcherexception)
- [`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`](#dispatcherexceptionsforwardininitializeforbidden)
- [`Phalcon\Mvc\Dispatcher\Exception`](../phalcon_mvc/#mvcdispatcherexception)

### Constants

<ApiItem kind="constant" name="EXCEPTION_ACTION_NOT_FOUND" type="int" default="5">
</ApiItem>
<ApiItem kind="constant" name="EXCEPTION_CYCLIC_ROUTING" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="EXCEPTION_HANDLER_NOT_FOUND" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="EXCEPTION_INVALID_HANDLER" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="EXCEPTION_INVALID_PARAMS" type="int" default="4">
</ApiItem>
<ApiItem kind="constant" name="EXCEPTION_NO_DI" type="int" default="0">
</ApiItem>

## Dispatcher\Exceptions\ForwardInInitializeForbidden

Class

- `\Exception`
- [`Phalcon\Dispatcher\Exception`](#dispatcherexception)
- **`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`**

`Phalcon\Dispatcher\Exception`

### Method Summary

<ApiItem href="#dispatcherexceptionsforwardininitializeforbidden-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="dispatcherexceptionsforwardininitializeforbidden-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Source: https://docs.phalcon.io/6.0/api/phalcon_dispatcher/index.mdx
