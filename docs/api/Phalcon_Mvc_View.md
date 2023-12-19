---
layout: default
title: 'Phalcon\Mvc\View'
---
# Class **Phalcon\Mvc\View**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Mvc\ViewInterface](Phalcon_Mvc_View.md), [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Mvc\View is a class for working with the "view" portion of the model-view-controller pattern.
That is, it exists to help keep the view script separate from the model and controller scripts.
It provides a system of helpers, output filters, and variable escaping.

```php
<?php

use Phalcon\Mvc\View;

$view = new View();

// Setting views directory
$view->setViewsDir("app/views/");

$view->start();

// Shows recent posts view (app/views/posts/recent.phtml)
$view->render("posts", "recent");
$view->finish();

// Printing views output
echo $view->getContent();

```


## Constants
*integer* **LEVEL_MAIN_LAYOUT**

*integer* **LEVEL_AFTER_TEMPLATE**

*integer* **LEVEL_LAYOUT**

*integer* **LEVEL_BEFORE_TEMPLATE**

*integer* **LEVEL_ACTION_VIEW**

*integer* **LEVEL_NO_RENDER**

*integer* **CACHE_MODE_NONE**

*integer* **CACHE_MODE_INVERSE**

## Methods
public  **getRenderLevel** ()

...


public  **getCurrentRenderLevel** ()

...


public  **getRegisteredEngines** ()





public  **__construct** ([*array* $options])

Phalcon\Mvc\View constructor



final protected  **_isAbsolutePath** (*mixed* $path)

Checks if a path is absolute or not



public  **setViewsDir** (*mixed* $viewsDir)

Sets the views directory. Depending of your platform,
always add a trailing slash or backslash



public  **getViewsDir** ()

Gets views directory



public  **setLayoutsDir** (*mixed* $layoutsDir)

Sets the layouts sub-directory. Must be a directory under the views directory.
Depending of your platform, always add a trailing slash or backslash

```php
<?php

$view->setLayoutsDir("../common/layouts/");

```



public  **getLayoutsDir** ()

Gets the current layouts sub-directory



public  **setPartialsDir** (*mixed* $partialsDir)

Sets a partials sub-directory. Must be a directory under the views directory.
Depending of your platform, always add a trailing slash or backslash

```php
<?php

$view->setPartialsDir("../common/partials/");

```



public  **getPartialsDir** ()

Gets the current partials sub-directory



public  **setBasePath** (*mixed* $basePath)

Sets base path. Depending of your platform, always add a trailing slash or backslash

```php
<?php

	$view->setBasePath(__DIR__ . "/");

```



public  **getBasePath** ()

Gets base path



public  **setRenderLevel** (*mixed* $level)

Sets the render level for the view

```php
<?php

// Render the view related to the controller only
$this->view->setRenderLevel(
    View::LEVEL_LAYOUT
);

```



public  **disableLevel** (*mixed* $level)

Disables a specific level of rendering

```php
<?php

// Render all levels except ACTION level
$this->view->disableLevel(
    View::LEVEL_ACTION_VIEW
);

```



public  **setMainView** (*mixed* $viewPath)

Sets default view name. Must be a file without extension in the views directory

```php
<?php

// Renders as main view views-dir/base.phtml
$this->view->setMainView("base");

```



public  **getMainView** ()

Returns the name of the main view



public  **setLayout** (*mixed* $layout)

Change the layout to be used instead of using the name of the latest controller name

```php
<?php

$this->view->setLayout("main");

```



public  **getLayout** ()

Returns the name of the main view



public  **setTemplateBefore** (*mixed* $templateBefore)

Sets a template before the controller layout



public  **cleanTemplateBefore** ()

Resets any "template before" layouts



public  **setTemplateAfter** (*mixed* $templateAfter)

Sets a "template after" controller layout



public  **cleanTemplateAfter** ()

Resets any template before layouts



public  **setParamToView** (*mixed* $key, *mixed* $value)

Adds parameters to views (alias of setVar)

```php
<?php

$this->view->setParamToView("products", $products);

```



public  **setVars** (*array* $params, [*mixed* $merge])

Set all the render params

```php
<?php

$this->view->setVars(
    [
        "products" => $products,
    ]
);

```



public  **setVar** (*mixed* $key, *mixed* $value)

Set a single view parameter

```php
<?php

$this->view->setVar("products", $products);

```



public  **getVar** (*mixed* $key)

Returns a parameter previously set in the view



public  **getParamsToView** ()

Returns parameters to views



public  **getControllerName** ()

Gets the name of the controller rendered



public  **getActionName** ()

Gets the name of the action rendered



public  **getParams** ()

Gets extra parameters of the action rendered



public  **start** ()

Starts rendering process enabling the output buffering



protected  **_loadTemplateEngines** ()

Loads registered template engines, if none is registered it will use Phalcon\Mvc\View\Engine\Php



protected  **_engineRender** (*array* $engines, *string* $viewPath, *boolean* $silence, *boolean* $mustClean, [[Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache])

Checks whether view exists on registered extensions and render it



public  **registerEngines** (*array* $engines)

Register templating engines

```php
<?php

$this->view->registerEngines(
    [
        ".phtml" => "Phalcon\Mvc\View\Engine\Php",
        ".volt"  => "Phalcon\Mvc\View\Engine\Volt",
        ".mhtml" => "MyCustomEngine",
    ]
);

```



public  **exists** (*mixed* $view)

Checks whether view exists



public  **render** (*string* $controllerName, *string* $actionName, [*array* $params])

Executes render process from dispatching data

```php
<?php

// Shows recent posts view (app/views/posts/recent.phtml)
$view->start()->render("posts", "recent")->finish();

```



public  **pick** (*mixed* $renderView)

Choose a different view to render instead of last-controller/last-action

```php
<?php

use Phalcon\Mvc\Controller;

class ProductsController extends Controller
{
   public function saveAction()
   {
        // Do some save stuff...

        // Then show the list view
        $this->view->pick("products/list");
   }
}

```



public  **getPartial** (*mixed* $partialPath, [*mixed* $params])

Renders a partial view

```php
<?php

// Retrieve the contents of a partial
echo $this->getPartial("shared/footer");

```

```php
<?php

// Retrieve the contents of a partial with arguments
echo $this->getPartial(
    "shared/footer",
    [
        "content" => $html,
    ]
);

```



public  **partial** (*mixed* $partialPath, [*mixed* $params])

Renders a partial view

```php
<?php

// Show a partial inside another view
$this->partial("shared/footer");

```

```php
<?php

// Show a partial inside another view with parameters
$this->partial(
    "shared/footer",
    [
        "content" => $html,
    ]
);

```



public *string* **getRender** (*string* $controllerName, *string* $actionName, [*array* $params], [*mixed* $configCallback])

Perform the automatic rendering returning the output as a string

```php
<?php

$template = $this->view->getRender(
    "products",
    "show",
    [
        "products" => $products,
    ]
);

```



public  **finish** ()

Finishes the render process by stopping the output buffering



protected  **_createCache** ()

Create a Phalcon\Cache based on the internal cache options



public  **isCaching** ()

Check if the component is currently caching the output content



public  **getCache** ()

Returns the cache instance used to cache



public  **cache** ([*mixed* $options])

Cache the actual view render to certain level

```php
<?php

$this->view->cache(
    [
        "key"      => "my-key",
        "lifetime" => 86400,
    ]
);

```



public  **setContent** (*mixed* $content)

Externally sets the view content

```php
<?php

$this->view->setContent("<h1>hello</h1>");

```



public  **getContent** ()

Returns cached output from another view stage



public  **getActiveRenderPath** ()

Returns the path (or paths) of the views that are currently rendered



public  **disable** ()

Disables the auto-rendering process



public  **enable** ()

Enables the auto-rendering process



public  **reset** ()

Resets the view component to its factory default values



public  **__set** (*mixed* $key, *mixed* $value)

Magic method to pass variables to the views

```php
<?php

$this->view->products = $products;

```



public  **__get** (*mixed* $key)

Magic method to retrieve a variable passed to the view

```php
<?php

echo $this->view->products;

```



public  **isDisabled** ()

Whether automatic rendering is enabled



public  **__isset** (*mixed* $key)

Magic method to retrieve if a variable is set in the view

```php
<?php

echo isset($this->view->products);

```



protected  **getViewsDirs** ()

Gets views directories



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager




<hr>

# Abstract class **Phalcon\Mvc\View\Engine**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Mvc\View\EngineInterface](Phalcon_Mvc_View.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/engine.zep" class="btn btn-default btn-sm">Source on GitHub</a>

All the template engine adapters must inherit this class. This provides
basic interfacing between the engine and the Phalcon\Mvc\View component.


## Methods
public  **__construct** ([Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md) $view, [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector])

Phalcon\Mvc\View\Engine constructor



public  **getContent** ()

Returns cached output on another view stage



public *string* **partial** (*string* $partialPath, [*array* $params])

Renders a partial inside another view



public  **getView** ()

Returns the view component related to the adapter



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get



abstract public  **render** (*mixed* $path, *mixed* $params, [*mixed* $mustClean]) inherited from [Phalcon\Mvc\View\EngineInterface](Phalcon_Mvc_View.md)

...



<hr>

# Class **Phalcon\Mvc\View\Engine\Php**

*extends* abstract class [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

*implements* [Phalcon\Mvc\View\EngineInterface](Phalcon_Mvc_View.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/engine/php.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Adapter to use PHP itself as templating engine


## Methods
public  **render** (*mixed* $path, *mixed* $params, [*mixed* $mustClean])

Renders a view using the template engine



public  **__construct** ([Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md) $view, [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector]) inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Phalcon\Mvc\View\Engine constructor



public  **getContent** () inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Returns cached output on another view stage



public *string* **partial** (*string* $partialPath, [*array* $params]) inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Renders a partial inside another view



public  **getView** () inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Returns the view component related to the adapter



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Class **Phalcon\Mvc\View\Engine\Volt**

*extends* abstract class [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

*implements* [Phalcon\Mvc\View\EngineInterface](Phalcon_Mvc_View.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/engine/volt.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Designer friendly and fast template engine for PHP written in Zephir/C


## Methods
public  **setOptions** (*array* $options)

Set Volt's options



public  **getOptions** ()

Return Volt's options



public  **getCompiler** ()

Returns the Volt's compiler



public  **render** (*mixed* $templatePath, *mixed* $params, [*mixed* $mustClean])

Renders a view using the template engine



public  **length** (*mixed* $item)

Length filter. If an array/object is passed a count is performed otherwise a strlen/mb_strlen



public  **isIncluded** (*mixed* $needle, *mixed* $haystack)

Checks if the needle is included in the haystack



public  **convertEncoding** (*mixed* $text, *mixed* $from, *mixed* $to)

Performs a string conversion



public  **slice** (*mixed* $value, [*mixed* $start], [*mixed* $end])

Extracts a slice from a string/array/traversable object value



public  **sort** (*array* $value)

Sorts an array



public  **callMacro** (*mixed* $name, [*array* $arguments])

Checks if a macro is defined and calls it



public  **__construct** ([Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md) $view, [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector]) inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Phalcon\Mvc\View\Engine constructor



public  **getContent** () inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Returns cached output on another view stage



public *string* **partial** (*string* $partialPath, [*array* $params]) inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Renders a partial inside another view



public  **getView** () inherited from [Phalcon\Mvc\View\Engine](Phalcon_Mvc_View.md)

Returns the view component related to the adapter



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Class **Phalcon\Mvc\View\Engine\Volt\Compiler**

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/engine/volt/compiler.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class reads and compiles Volt templates into PHP plain code

```php
<?php

$compiler = new \Phalcon\Mvc\View\Engine\Volt\Compiler();

$compiler->compile("views/partials/header.volt");

require $compiler->getCompiledTemplatePath();

```


## Methods
public  **__construct** ([[Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md) $view])





public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **setOptions** (*array* $options)

Sets the compiler options



public  **setOption** (*string* $option, *mixed* $value)

Sets a single compiler option



public *string* **getOption** (*string* $option)

Returns a compiler's option



public  **getOptions** ()

Returns the compiler options



final public *mixed* **fireExtensionEvent** (*string* $name, [*array* $arguments])

Fires an event to registered extensions



public  **addExtension** (*mixed* $extension)

Registers a Volt's extension



public  **getExtensions** ()

Returns the list of extensions registered in Volt



public  **addFunction** (*mixed* $name, *mixed* $definition)

Register a new function in the compiler



public  **getFunctions** ()

Register the user registered functions



public  **addFilter** (*mixed* $name, *mixed* $definition)

Register a new filter in the compiler



public  **getFilters** ()

Register the user registered filters



public  **setUniquePrefix** (*mixed* $prefix)

Set a unique prefix to be used as prefix for compiled variables



public  **getUniquePrefix** ()

Return a unique prefix to be used as prefix for compiled variables and contexts



public  **attributeReader** (*array* $expr)

Resolves attribute reading



public  **functionCall** (*array* $expr)

Resolves function intermediate code into PHP function calls



public  **resolveTest** (*array* $test, *mixed* $left)

Resolves filter intermediate code into a valid PHP expression



final protected  **resolveFilter** (*array* $filter, *mixed* $left)

Resolves filter intermediate code into PHP function calls



final public  **expression** (*array* $expr)

Resolves an expression node in an AST volt tree



final protected *string* | *array* **_statementListOrExtends** (*array* $statements)

Compiles a block of statements



public  **compileForeach** (*array* $statement, [*mixed* $extendsMode])

Compiles a "foreach" intermediate code representation into plain PHP code



public  **compileForElse** ()

Generates a 'forelse' PHP code



public  **compileIf** (*array* $statement, [*mixed* $extendsMode])

Compiles a 'if' statement returning PHP code



public  **compileElseIf** (*array* $statement)

Compiles a "elseif" statement returning PHP code



public  **compileCache** (*array* $statement, [*mixed* $extendsMode])

Compiles a "cache" statement returning PHP code



public  **compileSet** (*array* $statement)

Compiles a "set" statement returning PHP code



public  **compileDo** (*array* $statement)

Compiles a "do" statement returning PHP code



public  **compileReturn** (*array* $statement)

Compiles a "return" statement returning PHP code



public  **compileAutoEscape** (*array* $statement, *mixed* $extendsMode)

Compiles a "autoescape" statement returning PHP code



public *string* **compileEcho** (*array* $statement)

Compiles a '{{' '}}' statement returning PHP code



public  **compileInclude** (*array* $statement)

Compiles a 'include' statement returning PHP code



public  **compileMacro** (*array* $statement, *mixed* $extendsMode)

Compiles macros



public *string* **compileCall** (*array* $statement, *boolean* $extendsMode)

Compiles calls to macros



final protected  **_statementList** (*array* $statements, [*mixed* $extendsMode])

Traverses a statement list compiling each of its nodes



protected  **_compileSource** (*mixed* $viewCode, [*mixed* $extendsMode])

Compiles a Volt source code returning a PHP plain version



public  **compileString** (*mixed* $viewCode, [*mixed* $extendsMode])

Compiles a template into a string

```php
<?php

echo $compiler->compileString('{{ "hello world" }}');

```



public *string* | *array* **compileFile** (*string* $path, *string* $compiledPath, [*boolean* $extendsMode])

Compiles a template into a file forcing the destination path

```php
<?php

$compiler->compile("views/layouts/main.volt", "views/layouts/main.volt.php");

```



public  **compile** (*mixed* $templatePath, [*mixed* $extendsMode])

Compiles a template into a file applying the compiler options
This method does not return the compiled path if the template was not compiled

```php
<?php

$compiler->compile("views/layouts/main.volt");

require $compiler->getCompiledTemplatePath();

```



public  **getTemplatePath** ()

Returns the path that is currently being compiled



public  **getCompiledTemplatePath** ()

Returns the path to the last compiled template



public *array* **parse** (*string* $viewCode)

Parses a Volt template returning its intermediate representation

```php
<?php

print_r(
    $compiler->parse("{% raw %}{{ 3 + 2 }}{% endraw %}")
);

```



protected  **getFinalPath** (*mixed* $path)

Gets the final path with VIEW




<hr>

# Class **Phalcon\Mvc\View\Engine\Volt\Exception**

*extends* class [Phalcon\Mvc\View\Exception](Phalcon_Mvc_View.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/engine/volt/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Interface **Phalcon\Mvc\View\EngineInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/engineinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getContent** ()

...


abstract public  **partial** (*mixed* $partialPath, [*mixed* $params])

...


abstract public  **render** (*mixed* $path, *mixed* $params, [*mixed* $mustClean])

...



<hr>

# Class **Phalcon\Mvc\View\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Mvc\View\Simple**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/view/simple.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component allows to render views without hierarchical levels

```php
<?php

use Phalcon\Mvc\View\Simple as View;

$view = new View();

// Render a view
echo $view->render(
    "templates/my-view",
    [
        "some" => $param,
    ]
);

// Or with filename with extension
echo $view->render(
    "templates/my-view.volt",
    [
        "parameter" => $here,
    ]
);

```


## Methods
public  **getRegisteredEngines** ()





public  **__construct** ([*array* $options])

Phalcon\Mvc\View\Simple constructor



public  **setViewsDir** (*mixed* $viewsDir)

Sets views directory. Depending of your platform, always add a trailing slash or backslash



public  **getViewsDir** ()

Gets views directory



public  **registerEngines** (*array* $engines)

Register templating engines

```php
<?php

$this->view->registerEngines(
    [
        ".phtml" => "Phalcon\Mvc\View\Engine\Php",
        ".volt"  => "Phalcon\Mvc\View\Engine\Volt",
        ".mhtml" => "MyCustomEngine",
    ]
);

```



protected *array* **_loadTemplateEngines** ()

Loads registered template engines, if none is registered it will use Phalcon\Mvc\View\Engine\Php



final protected  **_internalRender** (*string* $path, *array* $params)

Tries to render the view with every engine registered in the component



public  **render** (*string* $path, [*array* $params])

Renders a view



public  **partial** (*mixed* $partialPath, [*mixed* $params])

Renders a partial view

```php
<?php

// Show a partial inside another view
$this->partial("shared/footer");

```

```php
<?php

// Show a partial inside another view with parameters
$this->partial(
    "shared/footer",
    [
        "content" => $html,
    ]
);

```



public  **setCacheOptions** (*array* $options)

Sets the cache options



public *array* **getCacheOptions** ()

Returns the cache options



protected  **_createCache** ()

Create a Phalcon\Cache based on the internal cache options



public  **getCache** ()

Returns the cache instance used to cache



public  **cache** ([*mixed* $options])

Cache the actual view render to certain level

```php
<?php

$this->view->cache(
    [
        "key"      => "my-key",
        "lifetime" => 86400,
    ]
);

```



public  **setParamToView** (*mixed* $key, *mixed* $value)

Adds parameters to views (alias of setVar)

```php
<?php

$this->view->setParamToView("products", $products);

```



public  **setVars** (*array* $params, [*mixed* $merge])

Set all the render params

```php
<?php

$this->view->setVars(
    [
        "products" => $products,
    ]
);

```



public  **setVar** (*mixed* $key, *mixed* $value)

Set a single view parameter

```php
<?php

$this->view->setVar("products", $products);

```



public  **getVar** (*mixed* $key)

Returns a parameter previously set in the view



public *array* **getParamsToView** ()

Returns parameters to views



public  **setContent** (*mixed* $content)

Externally sets the view content

```php
<?php

$this->view->setContent("<h1>hello</h1>");

```



public  **getContent** ()

Returns cached output from another view stage



public *string* **getActiveRenderPath** ()

Returns the path of the view that is currently rendered



public  **__set** (*mixed* $key, *mixed* $value)

Magic method to pass variables to the views

```php
<?php

$this->view->products = $products;

```



public  **__get** (*mixed* $key)

Magic method to retrieve a variable passed to the view

```php
<?php

echo $this->view->products;

```



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager




<hr>

# Interface **Phalcon\Mvc\ViewBaseInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/viewbaseinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setViewsDir** (*mixed* $viewsDir)

...


abstract public  **getViewsDir** ()

...


abstract public  **setParamToView** (*mixed* $key, *mixed* $value)

...


abstract public  **setVar** (*mixed* $key, *mixed* $value)

...


abstract public  **getParamsToView** ()

...


abstract public  **getCache** ()

...


abstract public  **cache** ([*mixed* $options])

...


abstract public  **setContent** (*mixed* $content)

...


abstract public  **getContent** ()

...


abstract public  **partial** (*mixed* $partialPath, [*mixed* $params])

...



<hr>

# Interface **Phalcon\Mvc\ViewInterface**

*implements* [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/viewinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setLayoutsDir** (*mixed* $layoutsDir)

...


abstract public  **getLayoutsDir** ()

...


abstract public  **setPartialsDir** (*mixed* $partialsDir)

...


abstract public  **getPartialsDir** ()

...


abstract public  **setBasePath** (*mixed* $basePath)

...


abstract public  **getBasePath** ()

...


abstract public  **setRenderLevel** (*mixed* $level)

...


abstract public  **setMainView** (*mixed* $viewPath)

...


abstract public  **getMainView** ()

...


abstract public  **setLayout** (*mixed* $layout)

...


abstract public  **getLayout** ()

...


abstract public  **setTemplateBefore** (*mixed* $templateBefore)

...


abstract public  **cleanTemplateBefore** ()

...


abstract public  **setTemplateAfter** (*mixed* $templateAfter)

...


abstract public  **cleanTemplateAfter** ()

...


abstract public  **getControllerName** ()

...


abstract public  **getActionName** ()

...


abstract public  **getParams** ()

...


abstract public  **start** ()

...


abstract public  **registerEngines** (*array* $engines)

...


abstract public  **render** (*mixed* $controllerName, *mixed* $actionName, [*mixed* $params])

...


abstract public  **pick** (*mixed* $renderView)

...


abstract public  **finish** ()

...


abstract public  **getActiveRenderPath** ()

...


abstract public  **disable** ()

...


abstract public  **enable** ()

...


abstract public  **reset** ()

...


abstract public  **isDisabled** ()

...


abstract public  **setViewsDir** (*mixed* $viewsDir) inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **getViewsDir** () inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **setParamToView** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **setVar** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **getParamsToView** () inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **getCache** () inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **cache** ([*mixed* $options]) inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **setContent** (*mixed* $content) inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **getContent** () inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...


abstract public  **partial** (*mixed* $partialPath, [*mixed* $params]) inherited from [Phalcon\Mvc\ViewBaseInterface](Phalcon_Mvc_View.md)

...
