---
title: "Upgrade Guide"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Upgrade Guide

# Upgrading to V6

So you have decided to upgrade to v6! **Congratulations**!!

Phalcon v6 contains a near identical code with v5, to make the upgrade process as simple and painless as possible.

There are a couple of areas that have been reworked and changed that you should be aware of - and if you do not use that functionality, the upgrade can be a simple `composer require` command, after you [remove the Phalcon v5 extension](#remove-phalcon-v5).

## Requirements

### PHP 8.1

Phalcon v6 has the same requirements as v5. PHP 8.1 [active support][php-support] has already expired, including security fixes. We will be supporting this version for a while longer, offering developers more time to upgrade their applications.

Since Phalcon 4, we have been following the PHP releases and adjusting Phalcon accordingly to work with those releases.

### PHP Extensions

Phalcon v6 requires these PHP extensions:

- `fileinfo`
- `json`
- `mbstring`
- `pdo`
- `xml`

Composer does not install Phalcon v6 if one of these extensions is missing. Make sure that each PHP installation that runs your application has them. This includes the CLI, PHP-FPM and your Docker images.

## Installation

Remove Phalcon v5 before you install Phalcon v6. See [Remove Phalcon v5](#remove-phalcon-v5).

Phalcon can be installed using composer.

```
composer require phalcon/phalcon
```

In Phalcon v5, the PHQL and Volt parsers are part of the extension. In Phalcon v6, they are Composer packages. Composer installs them with Phalcon:

- `phalcon/phql`: the PHQL parser
- `phalcon/volt`: the Volt parser

:::danger[DANGER]
The parser of the docblock annotations is in the `phalcon/annotations` package. Composer does not install this package with Phalcon. If your application reads docblock annotations, you must install it. This includes the annotations adapters (`Phalcon\Annotations\Adapter\*`), `Phalcon\Mvc\Router\Annotations` and the annotations strategy of the model metadata (`Phalcon\Mvc\Model\MetaData\Strategy\Annotations`).

```bash
composer require phalcon/annotations
```

Composer does not show an error if the package is missing. The first request that reads annotations stops with this error:

```text
Error: Class "Phalcon\Annotations\Docblock\Parser\Parser" not found
```
:::

- - -

## Upgrading from v5 to v6

Phalcon v6 has the same classes and methods as Phalcon v5. The changes below can affect your application.

### INI Settings

Phalcon v5 reads its settings from the INI configuration of PHP: `php.ini`, the files in `conf.d`, `.htaccess`, the PHP-FPM pool files and `ini_set()`. Phalcon v6 does not read the `phalcon.*` INI settings. PHP does not know these settings when the extension is not loaded. Thus, `ini_get()` and `ini_set()` return `false` for them. Phalcon v6 uses the default value of each setting, and it does not show an error or a warning.

:::danger[DANGER]
If you disable the PHQL literals in v5 with `phalcon.orm.enable_literals = 0`, Phalcon v6 accepts the literals again. Disable them with `Settings::set()`, as this section shows.
:::

Set each setting in the bootstrap file of your application, before the application handles the request. Use `Phalcon\Support\Settings::set()`. The name of the setting is the name of the INI setting without the `phalcon.` prefix:

```ini
; v5: php.ini
phalcon.orm.events = 0
phalcon.orm.enable_literals = 0
```

```php
<?php

// v6: public/index.php
use Phalcon\Support\Settings;

Settings::set('orm.events', false);
Settings::set('orm.enable_literals', false);
```

`Settings::set()` does not save the value. Thus, the bootstrap file must set the values for each request. See [Settings][phalcon-support-settings] for the list of the settings. Phalcon v6 does not have a setting for `phalcon.warning.enable`.

`Phalcon\Mvc\Model::setup()` also changes the ORM settings. It works in v5 and v6:

```php
<?php

use Phalcon\Mvc\Model;

Model::setup(
    [
        'events'       => false,
        'phqlLiterals' => false,
    ]
);
```

### Detect Phalcon

Phalcon v5 is a PHP extension. Phalcon v6 is a Composer package. Thus, the functions that examine the extensions do not find Phalcon v6:

| Code                                                                   | v5                                  | v6      |
|------------------------------------------------------------------------|-------------------------------------|---------|
| `extension_loaded('phalcon')`                                          | `true`                              | `false` |
| `phpversion('phalcon')`                                                | The version, for example `'5.23.0'` | `false` |
| `(new ReflectionClass(Phalcon\Support\Version::class))->isInternal()` | `true`                              | `false` |

To find the version of Phalcon, use `Phalcon\Support\Version`. This code works in v5 and v6:

```php
<?php

use Phalcon\Support\Version;

if (class_exists(Version::class)) {
    $major = (new Version())->getPart(Version::VERSION_MAJOR);

    echo $major, PHP_EOL; // '5' or '6'
}
```

### Typed Properties

The properties of the Phalcon v5 classes do not have types. Most properties of the Phalcon v6 classes have types. If your class extends a Phalcon class and declares a Phalcon property again, your declaration must have the same type. If it does not, PHP stops with a fatal error when it loads your class.

```php
<?php

namespace App\Http;

use Phalcon\Http\Request as PhalconRequest;

class Request extends PhalconRequest
{
    protected $trustedProxies = ['10.0.0.1'];
}
```

Phalcon v5 accepts this class. Phalcon v6 stops with this error:

```text
Fatal error: Type of App\Http\Request::$trustedProxies must be array (as in class Phalcon\Http\Request)
```

Declare the property with the type of the Phalcon property:

```php
<?php

namespace App\Http;

use Phalcon\Http\Request as PhalconRequest;

class Request extends PhalconRequest
{
    protected array $trustedProxies = ['10.0.0.1'];
}
```

Phalcon v5 does not accept a type on this property (`must not be defined`). Thus, change the declaration when you move to v6.

These properties do not have a type in v6, as in v5, because applications often declare them again:

- `Phalcon\Di\Injectable::$container`
- `Phalcon\Filter\Validation\AbstractValidator::$template`
- `Phalcon\Filter\Validation\AbstractValidatorComposite::$validators`
- `Phalcon\Forms\Element\AbstractElement::$value`
- `Phalcon\Forms\Form::$attributes` and `$entity`
- `Phalcon\Mvc\Model::$transaction`, `$uniqueKey` and `$uniqueParams`

### Return Types

Some methods do not have a return type in Phalcon v5 and have the return type `mixed` in Phalcon v6. Examples are `Phalcon\Http\Request::get()`, `Phalcon\Mvc\Dispatcher::getParam()` and `Phalcon\Session\Manager::get()`. If your class overrides one of these methods, your method must also declare `mixed`. If it does not, PHP stops with a fatal error when it loads your class.

```php
<?php

namespace App\Session;

use Phalcon\Session\Manager as PhalconManager;

class Manager extends PhalconManager
{
    public function get(string $key, $defaultValue = null, bool $remove = false)
    {
        return parent::get($key, $defaultValue, $remove);
    }
}
```

Phalcon v5 accepts this class. Phalcon v6 stops with this error:

```text
Fatal error: Declaration of App\Session\Manager::get(string $key, $defaultValue = null, bool $remove = false) must be compatible with Phalcon\Session\Manager::get(string $key, mixed $defaultValue = null, bool $remove = false): mixed
```

Add the return type. This declaration works in v5 and v6:

```php
<?php

namespace App\Session;

use Phalcon\Session\Manager as PhalconManager;

class Manager extends PhalconManager
{
    public function get(string $key, $defaultValue = null, bool $remove = false): mixed
    {
        return parent::get($key, $defaultValue, $remove);
    }
}
```

In Phalcon v5.23.0 and earlier, two methods declare a return type that is not correct. Phalcon v6 declares the correct type. If your class overrides one of these methods, declare the v6 type:

| Method                                       | v5.23.0                               | v6                              |
|----------------------------------------------|---------------------------------------|---------------------------------|
| `Phalcon\Db\Dialect::checkColumnType()`      | `string`                              | `int`                           |
| `Phalcon\Mvc\Model\Query::getCache()`        | `Phalcon\Db\Adapter\AdapterInterface` | `?Phalcon\Cache\CacheInterface` |

### Mvc View

#### Template Variables in Partials

In Phalcon v5 and v6, these rules apply to the variables of the templates:

- A variable that the view of the action sets is visible in the layout.
- A variable that a template sets is visible in a partial without parameters that the template calls after it sets the variable.
- A variable that a partial without parameters sets is visible in the template that called the partial, after the call.
- A partial with an array of parameters gets a new set. The set has only the variables of the view and the parameters of the partial. The variables that this partial sets are not visible in the template that called it.
- Each render starts with a new set. A variable that a template sets in one render is not visible in the next render.
- All the template engines of a view use the same set. For example, a variable that a Volt template sets is visible in a `.phtml` partial.

Phalcon v6 is written in PHP, and PHP runs each template in its own scope. When a template ends, Phalcon v6 copies the variables of the template to the set of the render. The layout and the other templates that the view renders after the template can then use these variables. Two cases need an additional call in v6:

- A partial does not get the variables that the calling template set or changed before the call. To give these variables to the partial, call `withScope(get_defined_vars())` before `partial()`.
- The calling template does not get the variables that the partial set. To get these variables, call `extract($this->getScope())` after `partial()`.

In v6, these variables are available without an additional call:

- The variables that your controller sets with `setVar()` or `setVars()` of the view.
- The variables in the `$params` array of `partial()`.
- The variables that a template sets, in the templates that the view renders after this template ends, in the same render. For example, the layout can use the variables that the view of the action sets.

**Volt**

Volt templates do not need a change. For `partial()` and `{% include %}`, the [Volt][phalcon-volt] compiler adds the `withScope()` call before the partial and the `extract()` call after it, where it is necessary. In this example, `partials/header.volt` can use `title`, and the template can use `subtitle` after the call if `partials/header.volt` sets it:

```twig
{% set title = 'Invoices' %}
{{ partial('partials/header') }}
{{ subtitle }}
```

A partial with an array of parameters, for example `{{ partial('partials/header', ['page': 1]) }}`, does not get `title`, and the variables that it sets are not visible after the call. This is the same in v5 and v6.

The templates that Phalcon v5 compiled do not have these calls. Remove the compiled templates after the upgrade, so that the compiler makes them again.

**PHP Templates**

A `.phtml` template needs a change in two cases only.

In the first case, the template sets or changes a variable, and then calls `$this->partial()` for a partial that uses this variable. Call `withScope(get_defined_vars())` before `partial()`:

```php
<?php $title = 'Invoices'; ?>

<!-- v5 -->
<?php $this->partial('partials/header'); ?>

<!-- v6 -->
<?php $this->withScope(get_defined_vars())->partial('partials/header'); ?>
```

Without the `withScope()` call, `partials/header.phtml` does not get `$title` in v6. If an earlier template of the same render set `$title`, the partial gets the value from that template.

In the second case, the template uses a variable that the partial sets. Call `extract($this->getScope())` after `partial()`. In this example, `partials/totals.phtml` sets `$total`:

```php
<!-- v5 -->
<?php $this->partial('partials/totals'); ?>
<?= $total ?>

<!-- v6 -->
<?php
$this->partial('partials/totals');
extract($this->getScope());
?>
<?= $total ?>
```

If both cases apply, call `withScope()` before the partial and `extract()` after it:

```php
<?php
$this->withScope(get_defined_vars())->partial('partials/header');
extract($this->getScope());
?>
```

**`withScope()`, `getScope()` and `setScope()`**

The variables that the templates share are one set for each view. All the template engines of the view use this set.

`Phalcon\Mvc\View\Engine\AbstractEngine::withScope(array $scope): static` adds the variables in `$scope` to the set of the view. A variable in `$scope` replaces the variable with the same name in the set. The method returns the engine. Thus, you can call `partial()` on the result.

- Phalcon v5 does not have `withScope()`. On v5, a template that calls it stops with the error `Call to undefined method`.
- `partial()` has the same signature as in v5. A class that extends `AbstractEngine` and overrides `partial()` does not need a change.
- `getScope(): array` returns the set of the view, and `setScope(array $scope): static` replaces it. `Phalcon\Mvc\View` and `Phalcon\Mvc\View\Simple` use these methods to start a new set for each render and for each partial with an array of parameters. Phalcon v5 does not have these methods.

### Values of the Wrong Type

Phalcon v5 is written in Zephir. When a value does not have the expected type, Phalcon v5 often changes the value to the expected type, or it gives a notice and continues. The parameters and the properties of Phalcon v6 have types. Phalcon v6 accepts the same values as v5 in most cases, for example a numeric string for an integer option or an integer for a string option.

:::warning[WARNING]
These calls throw an error in Phalcon v6. Phalcon v5 accepts the value, or gives a notice and continues. Examine your code for them before you upgrade.
:::

| Call                                                                                                                                          | v5                                                                                   | v6                                                                             |
|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| `null` for a parameter of type `string`, for example `$request->getHeader(null)`                                                             | Deprecation notice. The value is `''`                                                | `TypeError`                                                                    |
| An integer sanitizer name, for example `$filter->sanitize('invoice', 1)`                                                                      | Notice `Sanitizer '1' is not registered`. The value does not change                  | `TypeError`                                                                    |
| An integer `pattern` for `Phalcon\Filter\Validation\Validator\Regex`                                                                          | The validation fails with a message                                                  | `TypeError` when the validation runs                                           |
| An integer `resolution` for the `File\Resolution` validators, or an integer `ratio` for `File\Resolution\AspectRatio`                         | The validation fails with a message                                                  | `TypeError` when the validation runs                                           |
| An integer `mode` for `Phalcon\Logger\Adapter\Stream`, for example `['mode' => 1]`                                                            | The adapter writes the log                                                           | `TypeError`                                                                    |
| A float `size` or `typeValues` for `Phalcon\Db\Column`, for example `['size' => 10.5]`                                                        | The column keeps the float                                                           | `TypeError`                                                                    |
| An integer `TABLE_COMMENT` option for `createTable()` of `Phalcon\Db\Dialect\Postgresql`                                                      | The dialect makes the SQL statement                                                  | `TypeError`                                                                    |
| An integer `separator` for a `list` expression in `getSqlExpression()` of a dialect                                                           | No error                                                                             | `TypeError`                                                                    |
| HTTP methods that are not a string or an array, for example `$route->via(1)` of `Phalcon\Mvc\Router\Route`                                    | The route keeps the value. `handle()` of the router throws the exception of v6       | `Exception` with the message `The argument is not initialized or iterable()`, when you call `via()` |

### Return Values

Phalcon v5 does not examine the return type of a method at run time. Thus, a method of Phalcon v5 can return a value of a type that is different from its declared return type. Phalcon v6 is written in PHP, and PHP examines the return types. Thus, these methods of Phalcon v6 return a value of the declared type:

| Call                                                                                                                       | v5                           | v6                             |
|----------------------------------------------------------------------------------------------------------------------------|------------------------------|--------------------------------|
| `$request->getServer('REQUEST_TIME')` and `$request->getHeader('REQUEST_TIME')`                                            | `1764000000` (integer)       | `'1764000000'` (string)        |
| `getOption('autoescape')` of the Volt compiler, after `setOption('autoescape', true)`                                      | `true`                       | `'1'`                          |
| `getAfterPosition()` and `getComment()` of `Phalcon\Db\Column`, for an integer option                                     | The integer                  | The integer as a string        |
| `getSchemaName()`, `getReferencedSchema()`, `getOnDelete()` and `getOnUpdate()` of `Phalcon\Db\Reference`, for an integer | The integer                  | The integer as a string        |
| `getColumns()` of `Phalcon\Mvc\Model\Criteria`, after `columns(1)`                                                         | `1`                          | `'1'`                          |
| `isReusable()` of `Phalcon\Mvc\Model\Relation`, for the option `'reusable' => '1'`                                         | `'1'`                        | `true`                         |

If your code compares these values with `===`, or gives them to a parameter of type `int` in a file with `strict_types=1`, convert them first:

```php
<?php

$requestTime = (int) $request->getServer('REQUEST_TIME');
```

### PHQL Parser Settings

In Phalcon v5.23.0 and earlier, the PHQL parser reads only the INI settings `phalcon.orm.enable_literals` and `phalcon.orm.cache_level`. The values that you set with `Model::setup()` (`phqlLiterals`) or with `Settings::set()` (`orm.enable_literals`, `orm.cache_level`) do not change the parser. Phalcon v6 and Phalcon v5.24.0 give these values to the parser. In v5.24.0, such a value has priority over the INI setting. Phalcon v6 does not read the INI settings (see [INI Settings](#ini-settings)).

Thus, when `phqlLiterals` is `false`, a PHQL statement with a literal throws `Phalcon\Mvc\Model\Exception` with the message `Literals are disabled in PHQL statements`. In v5.23.0 and earlier, the statement runs.

```php
<?php

use Phalcon\Mvc\Model;

Model::setup(['phqlLiterals' => false]);

// v5.23.0: the statement runs
// v5.24.0 and v6: Phalcon\Mvc\Model\Exception
$invoices = $modelsManager->executeQuery(
    'SELECT * FROM Invoices WHERE inv_status_flag = 1'
);
```

Use bound parameters in place of the literals:

```php
<?php

$invoices = $modelsManager->executeQuery(
    'SELECT * FROM Invoices WHERE inv_status_flag = :status:',
    [
        'status' => 1,
    ]
);
```

### Security Hash Cost

In Phalcon v5.23.0 and earlier, `Phalcon\Encryption\Security::hash()` uses the cost `4` when the `cost` option is empty (`null`, `0`, `'0'`, `false` or `''`). Phalcon v6 uses the work factor (`getWorkFactor()`, default `10`), the same as when the option is not set.

```php
<?php

use Phalcon\Encryption\Security;

$security = new Security();
$hash     = $security->hash('s3cr3t', ['cost' => 0]);

// v5.23.0: '$2y$04$...'
// v6:      '$2y$10$...'
```

The new hashes take more time to make. `checkHash()` still verifies the hashes that v5 made, because each hash contains its cost.

### Assets Filters

Phalcon v5 has the filters `Phalcon\Assets\Filters\Jsmin` and `Phalcon\Assets\Filters\Cssmin`. They are deprecated, and they do not change the content. Phalcon v6 has the filters `Phalcon\Assets\Filters\JsMin` and `Phalcon\Assets\Filters\CssMin`, with a capital `M`. They minify the content.

- The Composer autoloader finds a class from the name of its file. On a file system that is case-sensitive, for example on Linux, `new Jsmin()` gives the error `Class "Phalcon\Assets\Filters\Jsmin" not found`. Use `JsMin` and `CssMin`.
- The output of the filters is now minified. Examine the pages that use these filters.

```php
<?php

use Phalcon\Assets\Filters\JsMin;

$assets
    ->collection('footer')
    ->addJs('js/invoices.js')
    ->addFilter(new JsMin());
```

### Parsers

In Phalcon v5, the Volt, PHQL and annotations parsers are C code in the extension. In Phalcon v6, they are PHP code in the `phalcon/volt`, `phalcon/phql` and `phalcon/annotations` packages. Thus, a parse takes more time in v6. Use the caches, so that Phalcon parses less:

- Volt: Phalcon compiles a template one time and keeps the compiled file. Do not set the `always` option to `true` in production.
- Annotations: use an adapter that keeps the parsed annotations between the requests, for example `Phalcon\Annotations\Adapter\Apcu` or `Phalcon\Annotations\Adapter\Stream`. `Phalcon\Annotations\Adapter\Memory` parses the annotations again in each request.
- Model metadata: use an adapter that keeps the metadata between the requests, for example `Phalcon\Mvc\Model\MetaData\Apcu`, `Phalcon\Mvc\Model\MetaData\Redis` or `Phalcon\Mvc\Model\MetaData\Stream`. This is important when you use the annotations strategy.

- - -

## Remove Phalcon v5

Phalcon v5 is a PHP extension that is written in C. Phalcon v6 is a Composer package that is written in PHP. The two versions use the same `Phalcon` namespace and the same class names.

PHP loads the classes of an extension when PHP starts. The Composer autoloader loads a class only when PHP does not have that class. Thus, if the v5 extension is loaded, PHP uses the v5 classes, and Composer does not load the v6 classes that have the same names. Your application then runs a mix of v5 and v6 code. PHP does not show an error or a warning for this condition.

:::danger[DANGER]
Before you install Phalcon v6, remove the Phalcon v5 extension from each PHP installation that runs your application. This includes the CLI, PHP-FPM, the Apache PHP module and your Docker images.
:::

The procedure has five steps:

1. Find the extension.
2. Remove the extension with the tool that you used to install it.
3. Remove the INI entries.
4. Restart PHP.
5. Make sure that PHP does not load the extension.

:::info[NOTE]
If you have more than one PHP version on your system, do the procedure for each version.
:::

:::tip[Fastest way: disable the extension]
You do not have to delete the files of Phalcon v5. You can disable the extension and restart your web server. PHP then does not load Phalcon v5, and your application loads Phalcon v6 from Composer. This is the fastest procedure. Do only these steps:

- Step 3: remove the Phalcon line from the INI files, or put a `;` at the start of the line.
- Step 4: restart PHP-FPM or your web server.
- Step 5: make sure that PHP does not load the extension.

On Debian and Ubuntu, these commands disable the extension and restart PHP-FPM. Change the version to agree with your installation:

```bash
sudo phpdismod phalcon
sudo systemctl restart php8.3-fpm
```

If `phpdismod` cannot find the module, edit the INI files as step 3 shows.

The files of Phalcon v5 stay on your system. To go back to v5, enable the extension again and restart PHP.
:::

#### Step 1: Find the Extension

Run this command to see if the CLI loads Phalcon:

```bash
php --ri phalcon
```

If the extension is loaded, the output shows the Phalcon version and its settings. If the extension is not loaded, the output is:

```text
Extension 'phalcon' not present.
```

The CLI and the web server can use different INI files. Thus, also do a check of the web server. For PHP-FPM, change the version in the command to agree with your installation:

```bash
php-fpm8.3 -m | grep -i phalcon
```

For other web servers, look for `phalcon` in the output of `phpinfo()`.

Get the list of INI files that PHP reads:

```bash
php --ini
```

Get the folder that contains the extension file (`phalcon.so`, or `php_phalcon.dll` on Windows):

```bash
php -r 'echo ini_get("extension_dir"), PHP_EOL;'
```

#### Step 2: Remove the Extension

Use the instructions for the method that you used to install Phalcon v5. If you do not know the method, use the commands that list the installed packages (`pie show`, `pecl list`, `dpkg -l`, `rpm -qa`, `brew list`). If no tool shows Phalcon, use the instructions in [Compiled From Source](#compiled-from-source).

##### PIE

```bash
pie uninstall phalcon/cphalcon
```

PIE disables the extension and removes it. The command can ask for your password, because it can need elevated privileges.

To select a PHP version, add the `--with-php-config` option:

```bash
pie uninstall --with-php-config=/usr/bin/php-config8.3 phalcon/cphalcon
```

To see the extensions that PIE installed, run `pie show`.

:::info[NOTE]
Old versions of PIE do not have the `uninstall` command. Update PIE first, or use the instructions in [Compiled From Source](#compiled-from-source).
:::

##### PECL

```bash
sudo pecl uninstall phalcon
```

PECL deletes the extension file. PECL does not always remove the `extension=phalcon.so` line from the INI files. Do step 3 to remove it.

##### Linux Packages

Debian and Ubuntu ([Ondřej Surý][ondrej] repository):

```bash
dpkg -l | grep -i phalcon
sudo apt-get purge php-phalcon5
```

Change `php-phalcon5` to the package names that the first command shows. The `purge` command also removes the INI files of the package.

RPM based distributions ([Remi][remi] repository):

```bash
rpm -qa | grep -i phalcon
sudo dnf remove php80-php-phalcon5
```

Change `php80-php-phalcon5` to the package names that the first command shows. On old systems, use `yum` instead of `dnf`.

##### FreeBSD

```bash
pkg info | grep -i phalcon
sudo pkg delete php80-phalcon5
```

Change `php80-phalcon5` to the package name that the first command shows. If you installed Phalcon from ports, use these commands:

```bash
cd /usr/ports/www/phalcon5
sudo make deinstall
```

##### macOS

Homebrew:

```bash
brew list | grep -i phalcon
brew uninstall phalcon
brew untap phalcon/extension
```

Change `phalcon` to the formula name that the first command shows.

MacPorts:

```bash
port installed | grep -i phalcon
sudo port uninstall php80-phalcon
```

Change `php80-phalcon` to the port name that the first command shows. Then do step 3 to remove the `extension=php_phalcon.so` line from `php.ini`.

##### PHPBrew

```bash
phpbrew ext disable phalcon
```

Then delete the extension file. Use the instructions in [Compiled From Source](#compiled-from-source).

##### Windows

1. Delete `php_phalcon.dll` from the `ext` folder of your PHP installation.
2. Remove the `extension=php_phalcon.dll` line from `php.ini`.
3. Restart your web server.

##### Docker

Remove the lines that install or enable Phalcon v5 from your `Dockerfile`. These lines are similar to:

```dockerfile
RUN pie install phalcon/cphalcon
RUN pecl install phalcon && docker-php-ext-enable phalcon
```

If your base image includes Phalcon v5, change to an image that does not include it. Then build the image again without the cache:

```bash
docker compose build --no-cache
```

##### Shared Hosting

Disable the Phalcon module in your control panel. For example, in cPanel & WHM, remove the Phalcon module from EasyApache 4. If you cannot change the PHP extensions, ask your hosting provider to disable Phalcon.

##### Compiled From Source

Use these instructions if you compiled Phalcon v5 with the `install` script, with `phpize` and `make install`, or on a Raspberry Pi. Also use them if you do not know how Phalcon v5 was installed.

The build copies `phalcon.so` into the extension folder of PHP. A PHP extension does not have a `make uninstall` command. Thus, you must delete the file manually.

Get the extension folder:

```bash
php -r 'echo ini_get("extension_dir"), PHP_EOL;'
```

The output is similar to `/usr/lib/php/20230831`. Delete `phalcon.so` from that folder:

```bash
sudo rm /usr/lib/php/20230831/phalcon.so
```

PHP does not use the source folder after the build. You can delete it. Make sure that the path is correct before you run the command:

```bash
sudo rm -rf /usr/local/src/cphalcon
```

#### Step 3: Remove the INI Entries

PIE and the package managers usually remove the INI entries. PECL and manual installations do not. If an INI entry points to a deleted file, PHP shows a warning each time it starts.

Find the INI files that contain Phalcon. On Debian and Ubuntu, this command searches the files of all PHP versions:

```bash
grep -rli phalcon /etc/php/
```

On other systems, search the files and the folders that `php --ini` shows.

The line that loads Phalcon has one of these forms:

```ini
extension=phalcon
extension=phalcon.so
extension=php_phalcon.so
extension=php_phalcon.dll
```

For each file that you find:

- If the file contains only the Phalcon line (for example `30-phalcon.ini`), delete the file.
- If the file contains other settings (for example `php.ini`), delete the Phalcon line, or put a `;` at the start of the line.

On Debian and Ubuntu, you can also disable the extension for all PHP versions with this command:

```bash
sudo phpdismod phalcon
```

#### Step 4: Restart PHP

PHP reads the INI files only when it starts. Restart PHP-FPM, or the web server if it runs the PHP module. Change the service names to agree with your system:

```bash
sudo systemctl restart php8.3-fpm
sudo systemctl restart apache2
```

#### Step 5: Make Sure That PHP Does Not Load the Extension

Do a check of the CLI:

```bash
php --ri phalcon
```

The output must be:

```text
Extension 'phalcon' not present.
```

Do a check of the web server. Put this file in the public folder of your application:

```php
<?php

var_dump(extension_loaded('phalcon'));
```

Open the file in your browser. The output must be `bool(false)`. Delete the file after the check.

After you install Phalcon v6, make sure that your application uses the v6 classes. Run this command in the root folder of your application:

```bash
php -r 'require "vendor/autoload.php"; echo (new Phalcon\Support\Version())->get(), PHP_EOL;'
```

The output must start with `6`. If it starts with `5`, PHP still loads the v5 extension.

[phalcon-acl]: /6.0/acl/
[phalcon-annotations]: /6.0/annotations/
[phalcon-application]: /6.0/application/
[phalcon-application-cli]: /6.0/application-cli/
[phalcon-assets]: /6.0/assets/
[phalcon-autoload]: /6.0/autoload/
[phalcon-cache]: /6.0/cache/
[phalcon-config]: /6.0/config/
[phalcon-datamapper]: /6.0/datamapper/
[phalcon-db-layer]: /6.0/db-layer/
[phalcon-db-pagination]: /6.0/db-pagination/
[phalcon-di]: /6.0/di/
[phalcon-dispatcher]: /6.0/dispatcher/
[phalcon-domain]: /6.0/domain/
[phalcon-encryption-crypt]: /6.0/encryption-crypt/
[phalcon-encryption-security]: /6.0/encryption-security/
[phalcon-events]: /6.0/events/
[phalcon-filter-filter]: /6.0/filter-filter/
[phalcon-filter-validation]: /6.0/filter-validation/
[phalcon-flash]: /6.0/flash/
[phalcon-forms]: /6.0/forms/
[phalcon-html]: /6.0/html/
[phalcon-html-escaper]: /6.0/html-escaper/
[phalcon-html-link]: /6.0/html-link/
[phalcon-html-tagfactory]: /6.0/html-tagfactory/
[phalcon-logger]: /6.0/logger/
[phalcon-mvc]: /6.0/mvc/
[phalcon-mvc-url]: /6.0/mvc-url/
[phalcon-session]: /6.0/session/
[phalcon-storage]: /6.0/storage/
[phalcon-support-collection]: /6.0/support-collection/
[phalcon-support-debug]: /6.0/support-debug/
[phalcon-support-helper]: /6.0/support-helper/
[phalcon-support-registry]: /6.0/support-registry/
[phalcon-support-settings]: /6.0/support-settings/
[phalcon-support-version]: /6.0/support-version/
[phalcon-tag]: /6.0/tag/
[phalcon-translate]: /6.0/translate/
[phalcon-volt]: /6.0/volt/
[php-support]: https://www.php.net/supported-versions.php
[ondrej]: https://launchpad.net/~ondrej/+archive/ubuntu/php/
[remi]: https://github.com/remicollet
[bridge-psr3]: https://github.com/phalcon/bridge-psr3
[psr-16]: https://www.php-fig.org/psr/psr-16/
[psr-3]: https://www.php-fig.org/psr/psr-3/
[psr-extension]: https://github.com/jbboehr/php-psr
[volt-tag-helpers]: /6.0/volt/#tag-helpers
[zephir-phar]: https://github.com/phalcon/zephir/releases

Source: https://docs.phalcon.io/6.0/upgrade/index.mdx
