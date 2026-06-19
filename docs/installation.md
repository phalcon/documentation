# Installation

- - -

## Requirements

### PHP 8.1

Phalcon v6 supports only PHP 8.1 and above.

Although PHP 8.1 was released several years ago and its [active support][php-support] as well as security updates have
expired, Phalcon still supports it, in order to offer enough time for developers to upgrade their applications.

!!! info "NOTE"

    Installing a web server is outside the scope of this document. Please refer to relevant guides on the Internet on how to install a web server.

### Composer

Phalcon v6 is a pure PHP framework, distributed as a [Composer][composer] package. Unlike previous versions, it is
**no longer a C extension**: there is nothing to compile, and nothing to load in your `php.ini`. If you do not have
Composer installed yet, follow the [official installation instructions][composer-install].

### PDO

Since Phalcon is loosely coupled, it exposes functionality without the need for additional extensions. However, certain
components rely on additional extensions to work. When in need of database connectivity and access, you will need to
install the `pdo` extension. If your RDBMS is MySQL/MariaDB or Aurora, you will need the `mysqlnd` extension also.
Similarly, using a PostgreSql database with Phalcon requires the `pgsql` extension.

### Hardware

Phalcon is designed to use as few resources as possible while offering high performance. Although we have tested Phalcon
in various high-end environments, (such as 0.25GB RAM, 0.5 CPU), the hardware that you will choose will depend on your
application needs.

We have hosted our website and blog for the last few years on an Amazon VM with 512MB RAM and 1 vCPU.

### Software

!!! danger "DANGER"

    You should always try and use the latest version of Phalcon and PHP as both address bugs, security enhancements as well as performance.

Phalcon requires PHP 8.1 or greater and the following extensions, which are present in most PHP installations:

* [fileinfo][fileinfo]
* [json][json]
* [Mbstring][mbstring]
* [PDO][pdo] (and the relevant RDBMS-specific extension, i.e. [MySQL][mysql], [PostgreSql][postgresql], etc.)
* [xml][xml]

Depending on your application needs and the Phalcon components you use, you might also need to install the following
optional extensions:

| Extension       | Used by                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------|
| [apcu][apcu]         | `Cache\Adapter\Apcu`, `Storage\Adapter\Apcu`                                            |
| [gd2][gd2]           | `Image\Adapter\Gd`                                                                      |
| [igbinary][igbinary] | `Storage\Serializer\Igbinary`                                                           |
| [imagick][imagick]   | `Image\Adapter\Imagick`                                                                 |
| [memcached][memcached] | `Cache\Adapter\Libmemcached`, `Session\Adapter\Libmemcached`, `Storage\Adapter\Libmemcached` |
| [openssl][openssl]   | `Encryption\Crypt`                                                                      |
| [redis][redis]       | `Cache\Adapter\Redis`, `Session\Adapter\Redis`, `Storage\Adapter\Redis`                |
| [yaml][yaml]         | `Config\Adapter\Yaml`                                                                   |

!!! info "NOTE"

    Installing these extensions will vary based on your operating system as well as the package manager you use (if any). Please consult the relevant documentation on how to install these extensions.

## Installation

Install Phalcon in your project using [Composer][composer]:

```bash
composer require phalcon/phalcon
```

While v6 is in alpha, you may need to allow pre-release versions:

```bash
composer require phalcon/phalcon:^6.0@alpha
```

That is all that is required. Because Phalcon is now a standard PHP package, there is no module to enable and no web
server restart needed. Once Composer has added the package, the `Phalcon\` namespaces are available through the
autoloader, and you can start writing your application.

## Shared Hosting

Because Phalcon v6 is a standard Composer package, it runs on any host that provides PHP 8.1 or greater. There is no
need for root access, server modules, or extension support from your hosting provider. If your host allows you to run
Composer you can install Phalcon directly; otherwise, you can run `composer install` locally and upload the generated
`vendor/` directory along with your application.

[apcu]: https://www.php.net/manual/en/book.apcu.php
[composer]: https://getcomposer.org/
[composer-install]: https://getcomposer.org/doc/00-intro.md
[fileinfo]: https://www.php.net/manual/en/book.fileinfo.php
[gd2]: https://www.php.net/manual/en/book.image.php
[igbinary]: https://www.php.net/manual/en/book.igbinary.php
[imagick]: https://www.php.net/manual/en/book.imagick.php
[json]: https://www.php.net/manual/en/book.json.php
[mbstring]: https://php.net/manual/en/book.mbstring.php
[memcached]: https://php.net/manual/en/book.memcached.php
[mysql]: https://php.net/manual/en/ref.pdo-mysql.php
[openssl]: https://php.net/manual/en/book.openssl.php
[pdo]: https://php.net/manual/en/book.pdo.php
[php-support]: https://www.php.net/supported-versions.php
[postgresql]: https://php.net/manual/en/ref.pdo-pgsql.php
[redis]: https://github.com/phpredis/phpredis
[xml]: https://www.php.net/manual/en/book.xml.php
[yaml]: https://pecl.php.net/package/yaml
