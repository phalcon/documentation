---
title: "Installation"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Installation

## Requirements

### PHP 8.1

Phalcon requires PHP 8.1 or above.

Although PHP 8.1 was released several years ago and its [active support][php-support] as well as security updates have expired, Phalcon still supports it, in order to offer enough time for developers to upgrade their applications.

:::info[NOTE]
Installing a web server is outside the scope of this document. Please refer to relevant guides on the Internet on how to install a web server.
:::

### PDO

Since Phalcon is loosely coupled, it exposes functionality without the need for additional extensions. However, certain components rely on additional extensions to work. When in need of database connectivity and access, you will need to install the `php_pdo` extension. If your RDBMS is MySQL/MariaDB or Aurora, you will need the `php_mysqlnd` extension also. Similarly, using a PostgreSql database with Phalcon requires the `php_pgsql` extension.

### Hardware

Phalcon is designed to use as few resources as possible while offering high performance. Although we have tested Phalcon in various high-end environments, (such as 0.25GB RAM, 0.5 CPU), the hardware that you will choose will depend on your application needs.

We have hosted our website and blog for the last few years on an Amazon VM with 512MB RAM and 1 vCPU.

### Software

:::danger[DANGER]
You should always try and use the latest version of Phalcon and PHP as both address bugs, security enhancements as well as performance.
:::

Along with PHP 8.1 or greater, depending on your application needs and the Phalcon components you need, you might need to install the following extensions:

* [curl][curl]
* [fileinfo][fileinfo]
* [gettext][gettext]
* [gd2][gd2] (to use the [Phalcon\Image\Adapter\Gd](/6.0/api/phalcon_image/#imageadaptergd) class)
* [imagick][imagick] (to use the [Phalcon\Image\Adapter\Imagick](/6.0/api/phalcon_image/#imageadapterimagick) class)
* [json][json]
* [PDO][pdo] Extension as well as the relevant RDBMS-specific extension (i.e. [MySQL][mysql], [PostgreSql][postgresql], etc.)
* [OpenSSL][openssl] Extension
* [Mbstring][mbstring] Extension
* [Memcached][memcached] or other relevant cache adapters depending on your usage of cache

:::info[NOTE]
Installing these packages will vary based on your operating system as well as the package manager you use (if any). Please consult the relevant documentation on how to install these extensions.
:::

## Installation

Phalcon is distributed as a PHP package. Install it in your project with [Composer][composer]:

```bash
composer require phalcon/phalcon
```

Composer adds Phalcon to your `composer.json` and loads its classes through the Composer autoloader. There is no PHP extension to compile or enable.

[composer]: https://getcomposer.org
[curl]: https://www.php.net/manual/en/book.curl.php
[fileinfo]: https://www.php.net/manual/en/book.fileinfo.php
[gd2]: https://www.php.net/manual/en/book.image.php
[gettext]: https://www.php.net/manual/en/book.gettext.php
[imagick]: https://www.php.net/manual/en/book.imagick.php
[json]: https://www.php.net/manual/en/book.json.php
[mbstring]: https://php.net/manual/en/book.mbstring.php
[memcached]: https://php.net/manual/en/book.memcached.php
[mysql]: https://php.net/manual/en/ref.pdo-mysql.php
[openssl]: https://php.net/manual/en/book.openssl.php
[pdo]: https://php.net/manual/en/book.pdo.php
[php-support]: https://www.php.net/supported-versions.php
[postgresql]: https://php.net/manual/en/ref.pdo-pgsql.php

Source: https://docs.phalcon.io/6.0/installation/index.mdx
