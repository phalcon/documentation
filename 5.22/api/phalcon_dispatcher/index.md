---
title: "Phalcon Dispatcher"
version: "5.22"
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
error hooks throwDispatchException() and handleException().
The dispatch loop calls them on every error/exception path; a subclass that
omits them cannot be loaded.

## Hook channels

A single lifecycle point can be intercepted through three independent
channels. For any given point they run in this order:

1. **Events-manager listener** - e.g. `dispatch:beforeExecuteRoute`. A
   listener returning `false` cancels; calling `forward()` re-enters the
   loop; throwing routes through handleException().
2. **Duck-typed handler method** - e.g. a `beforeExecuteRoute()` method on
   the controller/task itself (presence is cached per class). Same
   `false` / `forward()` cancellation semantics as the event.
3. **`dispatch:beforeCallAction` observer** - fired by
   callActionMethod() with a `Phalcon\Support\Collection` carrying
   the mutable keys `handler`, `action` and `params`. Listeners may rewrite
   those keys to change *what* gets invoked; the substituted callable is
   re-validated before the call. `dispatch:afterCallAction` receives the
   same Collection plus a `result` key.

@todo fix the returnValue type in v7

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.22/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Dispatcher\AbstractDispatcher`** - implements [`Phalcon\Dispatcher\DispatcherInterface`](#dispatcherdispatcherinterface), [`Phalcon\Events\EventsAwareInterface`](/5.22/api/phalcon_events/#eventseventsawareinterface)
      - [`Phalcon\Cli\Dispatcher`](/5.22/api/phalcon_cli/#clidispatcher)
      - [`Phalcon\Mvc\Dispatcher`](/5.22/api/phalcon_mvc/#mvcdispatcher)

`Exception` · `Phalcon\Contracts\Dispatcher\DispatcherTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\Exception` · `Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Filter\FilterInterface` · `Phalcon\Mvc\Model\Binder` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Support\Collection`

### Method Summary

- `public callActionMethod(mixed $handler, string $actionMethod, array $params = [])`

- `public dispatch(): mixed|bool` — Process the results of the router by calling into the appropriate

- `public forward(array $forward): void` — Forwards the execution flow to another controller/action.

- `public getActionName(): string` — Gets the latest dispatched action name

- `public getActionSuffix(): string` — Gets the default action suffix

- `public getActiveMethod(): string` — Returns the current method to be/executed in the dispatcher

- `public getBoundModels(): array` — Returns bound models from binder instance

- `public getDefaultNamespace(): string` — Returns the default namespace

- `public getHandlerClass(): string` — Possible class name that will be located to dispatch the request

- `public getHandlerSuffix(): string` — Gets the default handler suffix

- `public getModelBinder(): BinderInterface|null` — Gets model binder

- `public getModuleName(): string|null` — Gets the module where the controller class is

- `public getNamespaceName(): string` — Gets a namespace to be prepended to the current handler name

- `public getParam(mixed $param, mixed $filters = null, mixed $defaultValue = null): mixed` — Gets a param by its name or numeric index

- `public getParameter(mixed $param, mixed $filters = null, mixed $defaultValue = null): mixed` — Gets a param by its name or numeric index

- `public getParameters(): array` — Gets action params

- `public getParams(): array` — Gets action params

- `public getPreviousActionName(): string` — Gets previous dispatched action name

- `public getPreviousHandlerName(): string` — Gets previous dispatched handler name

- `public getPreviousNamespaceName(): string` — Gets previous dispatched namespace name

- `public getReturnedValue(): mixed` — Returns value returned by the latest dispatched action

- `public hasParam(mixed $param): bool` — Check if a param exists

- `public hasParameter(mixed $param): bool` — Check if a param exists

- `public isFinished(): bool` — Checks if the dispatch loop is finished or has more pendent

- `public setActionName(string $actionName): void` — Sets the action name to be dispatched

- `public setActionSuffix(string $actionSuffix): void` — Sets the default action suffix

- `public setDefaultAction(string $actionName): void` — Sets the default action name

- `public setDefaultNamespace(string $defaultNamespace): void` — Sets the default namespace

- `public setHandlerSuffix(string $handlerSuffix): void` — Sets the default suffix for the handler

- `public setModelBinder(BinderInterface $modelBinder, mixed $cache = null): DispatcherInterface` — Enable model binding during dispatch

- `public setModuleName(string|null $moduleName = null): void` — Sets the module where the controller is (only informative)

- `public setNamespaceName(string $namespaceName): void` — Sets the namespace where the controller class is

- `public setParam(mixed $param, mixed $value): void` — Set a param by its name or numeric index

- `public setParameter(mixed $param, mixed $value): void` — Set a param by its name or numeric index

- `public setParameters(array $params): void` — Sets action params to be dispatched

- `public setParams(array $params): void` — Sets action params to be dispatched

- `public setReturnedValue(mixed $value): void` — Sets the latest returned value by an action manually

- `public wasForwarded(): bool` — Check if the current executed action was forwarded by another one

- `protected handleException(\Exception $exception)` — Handles a user exception triggered inside the dispatch loop.

- `protected resolveEmptyProperties(): void` — Set empty properties to their defaults (where defaults are available)

- `protected throwDispatchException(string $message, int $exceptionCode = 0)` — Throws an internal dispatch exception.

- `protected toCamelCase(string $input): string`

### Properties

- `protected string $actionName = ""`

- `protected string $actionSuffix = "Action"`

- `protected object|null $activeHandler = null`

- `protected array $activeMethodMap = []`

- `protected array $camelCaseMap = []`

- `protected string $defaultAction = ""`

- `protected string $defaultHandler = ""`

- `protected string $defaultNamespace = ""`

- `protected bool $finished = false`

- `protected bool $forwarded = false`

- `protected array $handlerHashes = []`

- `protected array $handlerHookCache = []`

- `protected string $handlerName = ""`

- `protected string $handlerSuffix = ""`

- `protected bool $isControllerInitialize = false`

- `protected mixed $lastHandler = null`

- `protected BinderInterface|null $modelBinder = null`

- `protected bool $modelBinding = false`

- `protected string $moduleName = ""`

- `protected string $namespaceName = ""`

- `protected array $params = []`

- `protected string|null $previousActionName = ""`

- `protected string|null $previousHandlerName = ""`

- `protected string|null $previousNamespaceName = ""`

- `protected string|null $returnedValue = null`

### Methods

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
abstract protected function handleException( \Exception $exception );
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

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](/5.22/api/phalcon_contracts/#contractsdispatcherdispatcher)
  - **`Phalcon\Dispatcher\DispatcherInterface`**

`Phalcon\Contracts\Dispatcher\Dispatcher`


## Dispatcher\Exception

Class

Exceptions thrown in Phalcon\Dispatcher/* will use this class

- `\Exception`
  - **`Phalcon\Dispatcher\Exception`**
    - [`Phalcon\Cli\Dispatcher\Exception`](/5.22/api/phalcon_cli/#clidispatcherexception)
    - [`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`](#dispatcherexceptionsforwardininitializeforbidden)
    - [`Phalcon\Mvc\Dispatcher\Exception`](/5.22/api/phalcon_mvc/#mvcdispatcherexception)

### Constants

- `const int EXCEPTION_ACTION_NOT_FOUND = 5`

- `const int EXCEPTION_CYCLIC_ROUTING = 1`

- `const int EXCEPTION_HANDLER_NOT_FOUND = 2`

- `const int EXCEPTION_INVALID_HANDLER = 3`

- `const int EXCEPTION_INVALID_PARAMS = 4`

- `const int EXCEPTION_NO_DI = 0`


## Dispatcher\Exceptions\ForwardInInitializeForbidden

Class

- `\Exception`
  - [`Phalcon\Dispatcher\Exception`](#dispatcherexception)
    - **`Phalcon\Dispatcher\Exceptions\ForwardInInitializeForbidden`**

`Phalcon\Dispatcher\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dispatcherexceptionsforwardininitializeforbidden-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Source: https://docs.phalcon.io/5.22/api/phalcon_dispatcher/index.mdx
