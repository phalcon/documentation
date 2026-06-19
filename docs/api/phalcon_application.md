---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Application\AbstractApplication

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Application/AbstractApplication.zep){ .src-btn }

Base class for Phalcon\Cli\Console and Phalcon\Mvc\Application.

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Application\AbstractApplication`** — implements [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
            - [`Phalcon\Cli\Console`](phalcon_cli.md#cliconsole)
            - [`Phalcon\Mvc\Application`](phalcon_mvc.md#mvcapplication)

</div>

__Uses__ `Phalcon\Application\Exceptions\ModuleNotRegistered` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#applicationabstractapplication-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">DiInterface</span> <span class="sv">$container</span><span class="sm"> = null</span> )</code>
<span class="desc">Phalcon\AbstractApplication constructor</span>
</a>
<a class="api-item" href="#applicationabstractapplication-getdefaultmodule">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDefaultModule</span>()</code>
<span class="desc">Returns the default module name</span>
</a>
<a class="api-item" href="#applicationabstractapplication-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#applicationabstractapplication-getmodule">
<code class="vis vis-public">public</code>
<code class="ret">array|object</code>
<code class="sig"><span class="sf">getModule</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets the module definition registered in the application via module name</span>
</a>
<a class="api-item" href="#applicationabstractapplication-getmodules">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getModules</span>()</code>
<span class="desc">Return the modules registered in the application</span>
</a>
<a class="api-item" href="#applicationabstractapplication-registermodules">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">registerModules</span>(<span class="prm"><span class="st">array</span> <span class="sv">$modules</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Register an array of modules present in the application</span>
</a>
<a class="api-item" href="#applicationabstractapplication-setdefaultmodule">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefaultModule</span>( <span class="st">string</span> <span class="sv">$defaultModule</span> )</code>
<span class="desc">Sets the module name to be used if the router does not return a valid module</span>
</a>
<a class="api-item" href="#applicationabstractapplication-seteventsmanager">
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
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultModule</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sv">$eventsManager</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$modules</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #applicationabstractapplication-__construct }

```php
public function __construct( DiInterface $container = null );
```

Phalcon\AbstractApplication constructor

#### `getDefaultModule()` { #applicationabstractapplication-getdefaultmodule }

```php
public function getDefaultModule(): string;
```

Returns the default module name

#### `getEventsManager()` { #applicationabstractapplication-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getModule()` { #applicationabstractapplication-getmodule }

```php
public function getModule( string $name ): array|object;
```

Gets the module definition registered in the application via module name

#### `getModules()` { #applicationabstractapplication-getmodules }

```php
public function getModules(): array;
```

Return the modules registered in the application

#### `registerModules()` { #applicationabstractapplication-registermodules }

```php
public function registerModules(
    array $modules,
    bool $merge = false
): static;
```

Register an array of modules present in the application

```php
$this->registerModules(
    [
        "frontend" => [
            "className" => \Multiple\Frontend\Module::class,
            "path"      => "../apps/frontend/Module.php",
        ],
        "backend" => [
            "className" => \Multiple\Backend\Module::class,
            "path"      => "../apps/backend/Module.php",
        ],
    ]
);
```

#### `setDefaultModule()` { #applicationabstractapplication-setdefaultmodule }

```php
public function setDefaultModule( string $defaultModule ): static;
```

Sets the module name to be used if the router does not return a valid module

#### `setEventsManager()` { #applicationabstractapplication-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager


## Application\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Application/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Application class will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Application\Exception`**
        - [`Phalcon\Application\Exceptions\ModuleNotRegistered`](#applicationexceptionsmodulenotregistered)
        - [`Phalcon\Cli\Console\Exception`](phalcon_cli.md#cliconsoleexception)
        - [`Phalcon\Mvc\Application\Exception`](phalcon_mvc.md#mvcapplicationexception)

</div>


## Application\Exceptions\ModuleNotRegistered

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Application/Exceptions/ModuleNotRegistered.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](#applicationexception)
        - **`Phalcon\Application\Exceptions\ModuleNotRegistered`**

</div>

__Uses__ `Phalcon\Application\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#applicationexceptionsmodulenotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #applicationexceptionsmodulenotregistered-__construct }

```php
public function __construct( string $name );
```
