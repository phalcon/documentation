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

## Installation

Remove Phalcon v5 before you install Phalcon v6. See [Remove Phalcon v5](#remove-phalcon-v5).

Phalcon can be installed using composer.

```
composer require phalcon/phalcon
```

- - -

## Upgrading from v5 to v6

Phalcon v6 has the same classes and methods as Phalcon v5. The changes below can affect your application.

### Mvc View

#### Template Variables in Partials

Phalcon v5 runs all the templates of a view with one set of variables. A template, its partials, its layout and the templates that the view renders after it can use each variable that one of them sets.

Phalcon v6 is written in PHP, and PHP runs each template in its own scope. When a template ends, Phalcon v6 copies the variables of the template to a set of variables that all the templates share. The layout and the templates that the view renders after the template can use these variables. A partial that the template calls before it ends does not get the variables that the template set or changed before the call. To give these variables to the partial, call `withScope()` before `partial()`.

In v6, a partial gets these variables without `withScope()`:

- The variables that your controller sets with `setVar()` or `setVars()` of the view.
- The variables in the `$params` array of `partial()`.
- The variables that a template sets, in the templates that the view renders after this template ends. For example, the layout can use the variables that the view of the action sets.

**Volt**

Volt templates do not need a change. The [Volt][phalcon-volt] compiler adds the `withScope()` call to `partial()` and `{% include %}` where it is necessary. In this example, `partials/header.volt` can use `title`:

```twig
{% set title = 'Invoices' %}
{{ partial('partials/header') }}
```

The templates that Phalcon v5 compiled do not have the `withScope()` call. Remove the compiled templates after the upgrade, so that the compiler makes them again.

**PHP Templates**

A `.phtml` template needs a change in one case only: the template sets or changes a variable, and then calls `$this->partial()` for a partial that uses this variable. In this case, call `withScope(get_defined_vars())` before `partial()`:

```php
<?php $title = 'Invoices'; ?>

<!-- v5 -->
<?php $this->partial('partials/header'); ?>

<!-- v6 -->
<?php $this->withScope(get_defined_vars())->partial('partials/header'); ?>
```

Without the `withScope()` call, `partials/header.phtml` does not get `$title` in v6. If an earlier template set `$title`, the partial gets the value from that template.

**`withScope()`**

`Phalcon\Mvc\View\Engine\AbstractEngine::withScope(array $scope): static` adds the variables in `$scope` to the set of variables that all the templates share. A variable in `$scope` replaces the variable with the same name in the set. The method returns the engine. Thus, you can call `partial()` on the result.

- Phalcon v5 does not have `withScope()`. On v5, a template that calls it stops with the error `Call to undefined method`.
- `partial()` has the same signature as in v5. A class that extends `AbstractEngine` and overrides `partial()` does not need a change.

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
