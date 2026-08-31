---
title: "Abstract class **Phalcon\\Mvc\\Model\\MetaData**"
version: "3.4"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Abstract class **Phalcon\Mvc\Model\MetaData**

*implements* [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/), [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Because Phalcon\Mvc\Model requires meta-data like field names, data types, primary keys, etc.
this component collect them and store for further querying by Phalcon\Mvc\Model.
Phalcon\Mvc\Model\MetaData can also use adapters to store temporarily or permanently the meta-data.

A standard Phalcon\Mvc\Model\MetaData can be used to query model attributes:

```php
<?php

$metaData = new \Phalcon\Mvc\Model\MetaData\Memory();

$attributes = $metaData->getAttributes(
new Robots()
);

print_r($attributes);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

Sets the DependencyInjector container

public  **getDI** ()

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy)

Set the meta-data extraction strategy

public  **getStrategy** ()

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** ()

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

public  **reset** ()

Resets internal meta-data in order to regenerate it

```php
<?php

$metaData->reset();

```

abstract public  **read** (*mixed* $key) inherited from [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/)

...

abstract public  **write** (*mixed* $key, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/)

...

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Apc**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/apc.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in the APC cache. Data will erased if the web server is restarted

By default meta-data is stored for 48 hours (172800 seconds)

You can query the meta-data by printing apc_fetch('$PMM$') or apc_fetch('$PMM$my-app-id')

```php
<?php

$metaData = new \Phalcon\Mvc\Model\Metadata\Apc(
[
    "prefix"   => "my-app-id",
    "lifetime" => 86400,
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Apc constructor

public  **read** (*mixed* $key)

Reads meta-data from APC

public  **write** (*mixed* $key, *mixed* $data)

Writes the meta-data to APC

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

public  **reset** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Resets internal meta-data in order to regenerate it

```php
<?php

$metaData->reset();

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Files**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/files.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in PHP files.

```php
<?php

$metaData = new \Phalcon\Mvc\Model\Metadata\Files(
[
    "metaDataDir" => "app/cache/metadata/",
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Files constructor

public *mixed* **read** (*string* $key)

Reads meta-data from files

public  **write** (*string* $key, *array* $data)

Writes the meta-data to files

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

public  **reset** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Resets internal meta-data in order to regenerate it

```php
<?php

$metaData->reset();

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Libmemcached**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/libmemcached.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in the Memcache.

By default meta-data is stored for 48 hours (172800 seconds)

```php
<?php

$metaData = new Phalcon\Mvc\Model\Metadata\Libmemcached(
[
    "servers" => [
        [
            "host"   => "localhost",
            "port"   => 11211,
            "weight" => 1,
        ],
    ],
    "client" => [
        Memcached::OPT_HASH       => Memcached::HASH_MD5,
        Memcached::OPT_PREFIX_KEY => "prefix.",
    ],
    "lifetime" => 3600,
    "prefix"   => "my_",
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Libmemcached constructor

public  **read** (*mixed* $key)

Reads metadata from Memcache

public  **write** (*mixed* $key, *mixed* $data)

Writes the metadata to Memcache

public  **reset** ()

Flush Memcache data and resets internal meta-data in order to regenerate it

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Memcache**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/memcache.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in the Memcache.

By default meta-data is stored for 48 hours (172800 seconds)

```php
<?php

$metaData = new Phalcon\Mvc\Model\Metadata\Memcache(
[
    "prefix"     => "my-app-id",
    "lifetime"   => 86400,
    "host"       => "localhost",
    "port"       => 11211,
    "persistent" => false,
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Memcache constructor

public  **read** (*mixed* $key)

Reads metadata from Memcache

public  **write** (*mixed* $key, *mixed* $data)

Writes the metadata to Memcache

public  **reset** ()

Flush Memcache data and resets internal meta-data in order to regenerate it

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Memory**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/memory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in memory. Data will be erased when the request finishes

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Memory constructor

public *array* **read** (*string* $key)

Reads the meta-data from temporal memory

public  **write** (*string* $key, *array* $data)

Writes the meta-data to temporal memory

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

public  **reset** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Resets internal meta-data in order to regenerate it

```php
<?php

$metaData->reset();

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Redis**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/redis.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in the Redis.

By default meta-data is stored for 48 hours (172800 seconds)

```php
<?php

use Phalcon\Mvc\Model\Metadata\Redis;

$metaData = new Redis(
[
    "host"       => "127.0.0.1",
    "port"       => 6379,
    "persistent" => 0,
    "statsKey"   => "_PHCM_MM",
    "lifetime"   => 172800,
    "index"      => 2,
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Redis constructor

public  **read** (*mixed* $key)

Reads metadata from Redis

public  **write** (*mixed* $key, *mixed* $data)

Writes the metadata to Redis

public  **reset** ()

Flush Redis data and resets internal meta-data in order to regenerate it

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Session**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/session.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in session. Data will erased when the session finishes.
Meta-data are permanent while the session is active.

You can query the meta-data by printing $_SESSION['$PMM$']

```php
<?php

$metaData = new \Phalcon\Mvc\Model\Metadata\Session(
[
   "prefix" => "my-app-id",
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Session constructor

public *array* **read** (*string* $key)

Reads meta-data from $_SESSION

public  **write** (*string* $key, *array* $data)

Writes the meta-data to $_SESSION

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

public  **reset** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Resets internal meta-data in order to regenerate it

```php
<?php

$metaData->reset();

```

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Strategy\Annotations**

*implements* [Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/strategy/annotations.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final public  **getMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, [Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

The meta-data is obtained by reading the column descriptions from the database information schema

final public  **getColumnMaps** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, [Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

Read the model's column map, this can't be inferred

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Strategy\Introspection**

*implements* [Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/strategy/introspection.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Queries the table meta-data in order to introspect the model's metadata

## Methods
final public  **getMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, [Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

The meta-data is obtained by reading the column descriptions from the database information schema

final public  **getColumnMaps** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, [Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

Read the model's column map, this can't be inferred

<hr />

# Interface **Phalcon\Mvc\Model\MetaData\StrategyInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/strategyinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, [Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

...

abstract public  **getColumnMaps** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, [Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector)

...

<hr />

# Class **Phalcon\Mvc\Model\MetaData\Xcache**

*extends* abstract class [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

*implements* [Phalcon\Mvc\Model\MetaDataInterface](/3.4/api/phalcon_mvc_model_metadata/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadata/xcache.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Stores model meta-data in the XCache cache. Data will erased if the web server is restarted

By default meta-data is stored for 48 hours (172800 seconds)

You can query the meta-data by printing xcache_get('$PMM$') or xcache_get('$PMM$my-app-id')

```php
<?php

$metaData = new Phalcon\Mvc\Model\Metadata\Xcache(
[
    "prefix"   => "my-app-id",
    "lifetime" => 86400,
]
);

```

## Constants
*integer* **MODELS_ATTRIBUTES**

*integer* **MODELS_PRIMARY_KEY**

*integer* **MODELS_NON_PRIMARY_KEY**

*integer* **MODELS_NOT_NULL**

*integer* **MODELS_DATA_TYPES**

*integer* **MODELS_DATA_TYPES_NUMERIC**

*integer* **MODELS_DATE_AT**

*integer* **MODELS_DATE_IN**

*integer* **MODELS_IDENTITY_COLUMN**

*integer* **MODELS_DATA_TYPES_BIND**

*integer* **MODELS_AUTOMATIC_DEFAULT_INSERT**

*integer* **MODELS_AUTOMATIC_DEFAULT_UPDATE**

*integer* **MODELS_DEFAULT_VALUES**

*integer* **MODELS_EMPTY_STRING_VALUES**

*integer* **MODELS_COLUMN_MAP**

*integer* **MODELS_REVERSE_COLUMN_MAP**

## Methods
public  **__construct** ([*array* $options])

Phalcon\Mvc\Model\MetaData\Xcache constructor

public *array* **read** (*string* $key)

Reads metadata from XCache

public  **write** (*string* $key, *array* $data)

Writes the metadata to XCache

final protected  **_initialize** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $key, *mixed* $table, *mixed* $schema) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Initialize the metadata for certain table

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Sets the DependencyInjector container

public  **getDI** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the DependencyInjector container

public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the meta-data extraction strategy

public  **getStrategy** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Return the strategy to obtain the meta-data

final public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the complete meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaData(
    new Robots()
)
);

```

final public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads meta-data for certain model

```php
<?php

print_r(
$metaData->readMetaDataIndex(
    new Robots(),
    0
)
);

```

final public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Writes meta-data for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->writeMetaDataIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);

```

final public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads the ordered/reversed column map for certain model

```php
<?php

print_r(
$metaData->readColumnMap(
    new Robots()
)
);

```

final public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Reads column-map information for certain model using a MODEL_* constant

```php
<?php

print_r(
$metaData->readColumnMapIndex(
    new Robots(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);

```

public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns table attributes names (fields)

```php
<?php

print_r(
$metaData->getAttributes(
    new Robots()
)
);

```

public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are part of the primary key

```php
<?php

print_r(
$metaData->getPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of fields which are not part of the primary key

```php
<?php

print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Robots()
)
);

```

public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns an array of not null attributes

```php
<?php

print_r(
$metaData->getNotNullAttributes(
    new Robots()
)
);

```

public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their data types

```php
<?php

print_r(
$metaData->getDataTypes(
    new Robots()
)
);

```

public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes which types are numerical

```php
<?php

print_r(
$metaData->getDataTypesNumeric(
    new Robots()
)
);

```

public *string* **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the name of identity field (if one is present)

```php
<?php

print_r(
$metaData->getIdentityField(
    new Robots()
)
);

```

public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes and their bind data types

```php
<?php

print_r(
$metaData->getBindTypes(
    new Robots()
)
);

```

public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the INSERT SQL generation

```php
<?php

print_r(
$metaData->getAutomaticCreateAttributes(
    new Robots()
)
);

```

public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes that must be ignored from the UPDATE SQL generation

```php
<?php

print_r(
$metaData->getAutomaticUpdateAttributes(
    new Robots()
)
);

```

public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the INSERT SQL generation

```php
<?php

$metaData->setAutomaticCreateAttributes(
new Robots(),
[
    "created_at" => true,
]
);

```

public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that must be ignored from the UPDATE SQL generation

```php
<?php

$metaData->setAutomaticUpdateAttributes(
new Robots(),
[
    "modified_at" => true,
]
);

```

public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Set the attributes that allow empty string values

```php
<?php

$metaData->setEmptyStringAttributes(
new Robots(),
[
    "name" => true,
]
);

```

public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes allow empty strings

```php
<?php

print_r(
$metaData->getEmptyStringAttributes(
    new Robots()
)
);

```

public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns attributes (which have default values) and their default values

```php
<?php

print_r(
$metaData->getDefaultValues(
    new Robots()
)
);

```

public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the column map if any

```php
<?php

print_r(
$metaData->getColumnMap(
    new Robots()
)
);

```

public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Returns the reverse column map if any

```php
<?php

print_r(
$metaData->getReverseColumnMap(
    new Robots()
)
);

```

public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute) inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Check if a model has certain attribute

```php
<?php

var_dump(
$metaData->hasAttribute(
    new Robots(),
    "name"
)
);

```

public  **isEmpty** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Checks if the internal meta-data container is empty

```php
<?php

var_dump(
$metaData->isEmpty()
);

```

public  **reset** () inherited from [Phalcon\Mvc\Model\MetaData](/3.4/api/phalcon_mvc_model_metadata/)

Resets internal meta-data in order to regenerate it

```php
<?php

$metaData->reset();

```

<hr />

# Interface **Phalcon\Mvc\Model\MetaDataInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/metadatainterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setStrategy** ([Phalcon\Mvc\Model\MetaData\StrategyInterface](/3.4/api/phalcon_mvc_model_metadata/) $strategy)

...

abstract public  **getStrategy** ()

...

abstract public  **readMetaData** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **readMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index)

...

abstract public  **writeMetaDataIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index, *mixed* $data)

...

abstract public  **readColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **readColumnMapIndex** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $index)

...

abstract public  **getAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getNonPrimaryKeyAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getNotNullAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getDataTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getDataTypesNumeric** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getIdentityField** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getBindTypes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **setAutomaticCreateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes)

...

abstract public  **setAutomaticUpdateAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes)

...

abstract public  **setEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *array* $attributes)

...

abstract public  **getEmptyStringAttributes** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getDefaultValues** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **getReverseColumnMap** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model)

...

abstract public  **hasAttribute** ([Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $model, *mixed* $attribute)

...

abstract public  **isEmpty** ()

...

abstract public  **reset** ()

...

abstract public  **read** (*mixed* $key)

...

abstract public  **write** (*mixed* $key, *mixed* $data)

...

Source: https://docs.phalcon.io/3.4/api/phalcon_mvc_model_metadata/index.mdx
