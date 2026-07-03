# Version Component

- - -

## Overview

[Phalcon\Support\Version][version] is a small but handy class, that returns the current version of Phalcon installed in your system.

## Constants

| Name                     | Value | Description                             |
|--------------------------|:-----:|-----------------------------------------|
| `VERSION_MAJOR`          |   0   | The major version                       |
| `VERSION_MEDIUM`         |   1   | The medium version                      |
| `VERSION_MINOR`          |   2   | The minor version                       |
| `VERSION_SPECIAL`        |   3   | The special version (alpha, beta, etc.) |
| `VERSION_SPECIAL_NUMBER` |   4   | The special version number              |

## Methods

```php
protected function getVersion(): array
```

Return an array with each version part as an element.

```php
<?php

use Phalcon\Support\Version;

$version = new Version();

var_dump($version->getVersion());
// [6, 0, 0, 1, 1] 
```

```php
public function get(): string
```

Return the version

```php
<?php

use Phalcon\Support\Version;

$version = new Version();

echo $version->get();
// 6.0.0alpha1
```

```php
public function getId(): string
```

Return the version as a number string

```php
<?php

use Phalcon\Support\Version;

$version = new Version();

echo $version->getId();
// 6000011
```

[version]: api/phalcon_support.md#supportversion
