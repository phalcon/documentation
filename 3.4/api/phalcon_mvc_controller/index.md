---
title: "Abstract class **Phalcon\\Mvc\\Controller**"
version: "3.4"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Abstract class **Phalcon\Mvc\Controller**

*extends* abstract class [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

*implements* [Phalcon\Events\EventsAwareInterface](/3.4/api/phalcon_events/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/), [Phalcon\Mvc\ControllerInterface](/3.4/api/phalcon_mvc_controller/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/controller.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Every application controller should extend this class that encapsulates all the controller functionality

The controllers provide the “flow” between models and views. Controllers are responsible
for processing the incoming requests from the web browser, interrogating the models for data,
and passing that data on to the views for presentation.

```php
<?php

<?php

class PeopleController extends \Phalcon\Mvc\Controller
{
// This action will be executed by default
public function indexAction()
{

}

public function findAction()
{

}

public function saveAction()
{
    // Forwards flow to the index action
    return $this->dispatcher->forward(
        [
            "controller" => "people",
            "action"     => "index",
        ]
    );
}
}

```

## Methods
final public  **__construct** ()

Phalcon\Mvc\Controller constructor

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Sets the dependency injector

public  **getDI** () inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Returns the internal dependency injector

public  **setEventsManager** ([Phalcon\Events\ManagerInterface](/3.4/api/phalcon_events/) $eventsManager) inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Sets the event manager

public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Returns the internal event manager

public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Magic method __get

<hr />

# Interface **Phalcon\Mvc\Controller\BindModelInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/controller/bindmodelinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public static  **getModelName** ()

...

<hr />

# Interface **Phalcon\Mvc\ControllerInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/controllerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Source: https://docs.phalcon.io/3.4/api/phalcon_mvc_controller/index.mdx
