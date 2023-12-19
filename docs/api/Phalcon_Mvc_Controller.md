---
layout: default
title: 'Phalcon\Mvc\Controller'
---
# Abstract class **Phalcon\Mvc\Controller**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Mvc\ControllerInterface](Phalcon_Mvc_Controller.md)

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

# Interface **Phalcon\Mvc\Controller\BindModelInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/controller/bindmodelinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public static  **getModelName** ()

...



<hr>

# Interface **Phalcon\Mvc\ControllerInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/controllerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>
