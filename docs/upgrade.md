# Upgrade Guide

- - -

# Upgrading to V6

Phalcon v6 is a major release. The most significant change is architectural: Phalcon is no longer a C extension. From v6
onwards the framework is implemented in pure PHP and is distributed as a Composer package. There is nothing to compile
and nothing to load in your `php.ini`.

## Requirements

### PHP 8.1

Phalcon v6 supports only PHP 8.1 and above. PHP 8.1 [active support][php-support] has already expired, including
security fixes. We will be supporting this version for a while longer, offering developers more time to upgrade their
applications.

### Installation

Phalcon v6 is installed via [Composer][composer]:

```bash
composer require phalcon/phalcon
```

While v6 is in alpha, you may need to allow pre-release versions:

```bash
composer require phalcon/phalcon:^6.0@alpha
```

Unlike previous versions, Phalcon is no longer a C extension: there is nothing to compile and nothing to enable in your
`php.ini`. Once Composer has added the package, the `Phalcon\` namespaces are available through the autoloader.

## Notable Changes

### Annotations

The annotations component has changed how it reads metadata. In v5 and earlier, annotations were read from class,
method, and property docblocks (for example `@Column(type="integer")`) by a parser written in C. In v6 the component
reads native [PHP 8 attributes][php-attributes] (`#[Column(type: 'integer')]`) through the Reflection API. Docblock
annotations are no longer supported. Code that relied on the docblock syntax must be migrated to attributes. See
[Annotations][annotations] for the new usage.

[annotations]: annotations.md

[composer]: https://getcomposer.org/

[php-attributes]: https://www.php.net/manual/en/language.attributes.php

[php-support]: https://www.php.net/supported-versions.php
