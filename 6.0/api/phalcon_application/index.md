---
title: "Phalcon Application"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Application

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Application\AbstractApplication

Abstract

Base class for Phalcon\Cli\Console and Phalcon\Mvc\Application.

- `\stdClass`
- [`Phalcon\Di\Injectable`](../phalcon_di/#diinjectable)
- **`Phalcon\Application\AbstractApplication`** - implements [`Phalcon\Events\EventsAwareInterface`](../phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Cli\Console`](../phalcon_cli/#cliconsole)
- [`Phalcon\Mvc\Application`](../phalcon_mvc/#mvcapplication)

`Closure` · `Phalcon\Application\Exceptions\ModuleNotRegistered` · `Phalcon\Contracts\Application\ApplicationTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

<ApiItem href="#applicationabstractapplication-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"DiInterface|null","name":"container","default":"null"}]}>
AbstractApplication constructor.
</ApiItem>
<ApiItem href="#applicationabstractapplication-getdefaultmodule" visibility="public" name="getDefaultModule" returnType="string" params={[]}>
Returns the default module name
</ApiItem>
<ApiItem href="#applicationabstractapplication-getmodule" visibility="public" name="getModule" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Gets the module definition registered in the application via module name
</ApiItem>
<ApiItem href="#applicationabstractapplication-getmodules" visibility="public" name="getModules" returnType="array" params={[]}>
Return the modules registered in the application
</ApiItem>
<ApiItem href="#applicationabstractapplication-registermodules" visibility="public" name="registerModules" returnType="static" params={[{"type":"array","name":"modules","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Register an array of modules present in the application
</ApiItem>
<ApiItem href="#applicationabstractapplication-setdefaultmodule" visibility="public" name="setDefaultModule" returnType="static" params={[{"type":"string","name":"defaultModule","default":null}]}>
Sets the module name to be used if the router does not return a valid
</ApiItem>
<ApiItem href="#applicationabstractapplication-seteventsmanager" visibility="public" name="setEventsManager" returnType="void" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the events manager
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="defaultModule" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modules" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="applicationabstractapplication-__construct"><code>__construct()</code></h4>

```php
public function __construct( DiInterface|null $container = null );
```

AbstractApplication constructor.

<h4 id="applicationabstractapplication-getdefaultmodule"><code>getDefaultModule()</code></h4>

```php
public function getDefaultModule(): string;
```

Returns the default module name

<h4 id="applicationabstractapplication-getmodule"><code>getModule()</code></h4>

```php
public function getModule( string $name ): mixed;
```

Gets the module definition registered in the application via module name

<h4 id="applicationabstractapplication-getmodules"><code>getModules()</code></h4>

```php
public function getModules(): array;
```

Return the modules registered in the application

<h4 id="applicationabstractapplication-registermodules"><code>registerModules()</code></h4>

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

<h4 id="applicationabstractapplication-setdefaultmodule"><code>setDefaultModule()</code></h4>

```php
public function setDefaultModule( string $defaultModule ): static;
```

Sets the module name to be used if the router does not return a valid
module

<h4 id="applicationabstractapplication-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

## Application\Exception

Class

Exceptions thrown in Phalcon\Application use this class

- `\Exception`
- **`Phalcon\Application\Exception`**
- [`Phalcon\Application\Exceptions\ModuleNotRegistered`](#applicationexceptionsmodulenotregistered)
- [`Phalcon\Cli\Console\Exception`](../phalcon_cli/#cliconsoleexception)
- [`Phalcon\Mvc\Application\Exception`](../phalcon_mvc/#mvcapplicationexception)

## Application\Exceptions\ModuleNotRegistered

Class

- `\Exception`
- [`Phalcon\Application\Exception`](#applicationexception)
- **`Phalcon\Application\Exceptions\ModuleNotRegistered`**

`Phalcon\Application\Exception`

### Method Summary

<ApiItem href="#applicationexceptionsmodulenotregistered-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="applicationexceptionsmodulenotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

Source: https://docs.phalcon.io/6.0/api/phalcon_application/index.mdx
