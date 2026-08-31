---
title: "Class **Phalcon\\Mvc\\Model\\Binder**"
version: "3.4"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Class **Phalcon\Mvc\Model\Binder**

*implements* [Phalcon\Mvc\Model\BinderInterface](/3.4/api/phalcon_mvc_model_binder/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/binder.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Mvc\Model\Binding

This is an class for binding models into params for handler

## Methods
public  **getBoundModels** ()

Array for storing active bound models

public  **getOriginalValues** ()

Array for original values

public  **__construct** ([[Phalcon\Cache\BackendInterface](/3.4/api/phalcon_cache/) $cache])

Phalcon\Mvc\Model\Binder constructor

public  **setCache** ([Phalcon\Cache\BackendInterface](/3.4/api/phalcon_cache/) $cache)

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

<hr />

# Interface **Phalcon\Mvc\Model\Binder\BindableInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/binder/bindableinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getModelName** ()

...

<hr />

# Interface **Phalcon\Mvc\Model\BinderInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/binderinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getBoundModels** ()

...

abstract public  **getCache** ()

...

abstract public  **setCache** ([Phalcon\Cache\BackendInterface](/3.4/api/phalcon_cache/) $cache)

...

abstract public  **bindToHandler** (*mixed* $handler, *array* $params, *mixed* $cacheKey, [*mixed* $methodName])

...

Source: https://docs.phalcon.io/3.4/api/phalcon_mvc_model_binder/index.mdx
