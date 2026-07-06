# Upgrade Guide

- - -

# Upgrading to V6

So you have decided to upgrade to v6! **Congratulations**!!

Phalcon v6 contains a near identical code with v5, to make the upgrade process as simple and painless as possible.

There are a couple of areas that have been reworked and changed that you should be aware of - and if you do not use that functionality, the upgrade can be a simple `composer require` command.

## Requirements

### PHP 8.1

Phalcon v6 has the same requirements as v5. PHP 8.1 [active support][php-support] has already expired, including security fixes. We will be supporting this version for a while longer, offering developers more time to upgrade their applications.

Since Phalcon 4, we have been following the PHP releases and adjusting Phalcon accordingly to work with those releases.

### Installation

Phalcon can be installed using composer.

```
composer require phalcon/phalcon
```

- - -

## General Notes

## Changes

![](assets/images/status-no-changes-blue.svg) [![](assets/images/status-docs.svg)][phalcon-annotations]

### Annotations

![](assets/images/status-changes-required-red.svg) [![](assets/images/status-docs.svg)][phalcon-application]



---

### Volt

![](assets/images/status-changes-required-red.svg) [![](assets/images/status-docs.svg)][phalcon-volt]

[phalcon-acl]: acl.md
[phalcon-annotations]: annotations.md
[phalcon-application]: application.md
[phalcon-application-cli]: application-cli.md
[phalcon-assets]: assets.md
[phalcon-autoload]: autoload.md
[phalcon-cache]: cache.md
[phalcon-config]: config.md
[phalcon-datamapper]: datamapper.md
[phalcon-db-layer]: db-layer.md
[phalcon-db-pagination]: db-pagination.md
[phalcon-di]: di.md
[phalcon-dispatcher]: dispatcher.md
[phalcon-domain]: domain.md
[phalcon-encryption-crypt]: encryption-crypt.md
[phalcon-encryption-security]: encryption-security.md
[phalcon-events]: events.md
[phalcon-filter-filter]: filter-filter.md
[phalcon-filter-validation]: filter-validation.md
[phalcon-flash]: flash.md
[phalcon-forms]: forms.md
[phalcon-html]: html.md
[phalcon-html-escaper]: html-escaper.md
[phalcon-html-link]: html-link.md
[phalcon-html-tagfactory]: html-tagfactory.md
[phalcon-logger]: logger.md
[phalcon-mvc]: mvc.md
[phalcon-mvc-url]: mvc-url.md
[phalcon-session]: session.md
[phalcon-storage]: storage.md
[phalcon-support-collection]: support-collection.md
[phalcon-support-debug]: support-debug.md
[phalcon-support-helper]: support-helper.md
[phalcon-support-registry]: support-registry.md
[phalcon-support-version]: support-version.md
[phalcon-tag]: tag.md
[phalcon-translate]: translate.md
[phalcon-volt]: volt.md
[php-support]: https://www.php.net/supported-versions.php
[bridge-psr3]: https://github.com/phalcon/bridge-psr3
[psr-16]: https://www.php-fig.org/psr/psr-16/
[psr-3]: https://www.php-fig.org/psr/psr-3/
[psr-extension]: https://github.com/jbboehr/php-psr
[support]: #support
[volt-tag-helpers]: volt.md#tag-helpers
[zephir-phar]: https://github.com/phalcon/zephir/releases
