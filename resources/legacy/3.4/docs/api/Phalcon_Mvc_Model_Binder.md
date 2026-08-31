---
layout: default
title: 'Phalcon\Mvc\Model\Binder'
---
# Class **Phalcon\Mvc\Model\Binder**

*implements* [Phalcon\Mvc\Model\BinderInterface](Phalcon_Mvc_Model_Binder.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/binder.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Mvc\Model\Binding

This is an class for binding models into params for handler


## Methods
public  **getBoundModels** ()

Array for storing active bound models



public  **getOriginalValues** ()

Array for original values



public  **__construct** ([[Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache])

Phalcon\Mvc\Model\Binder constructor



public  **setCache** ([Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache)

Gets cache instance



public  **getCache** ()

Sets cache instance



public  **bindToHandler** (*mixed* $handler, *array* $params, *mixed* $cacheKey, [*mixed* $methodName])

Bind models into params in proper handler



protected  **findBoundModel** (*mixed* $paramValue, *mixed* $className)

Find the model by param value.



protected  **getParamsFromCache** (*mixed* $cacheKey)

Get params classes from cache by key



protected  **getParamsFromReflection** (*mixed* $handler, *array* $params, *mixed* $cacheKey, *mixed* $methodName)

Get modified params for handler using reflection




<hr>

# Interface **Phalcon\Mvc\Model\Binder\BindableInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/binder/bindableinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getModelName** ()

...



<hr>

# Interface **Phalcon\Mvc\Model\BinderInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/binderinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getBoundModels** ()

...


abstract public  **getCache** ()

...


abstract public  **setCache** ([Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache)

...


abstract public  **bindToHandler** (*mixed* $handler, *array* $params, *mixed* $cacheKey, [*mixed* $methodName])

...
