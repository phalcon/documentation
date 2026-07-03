# Docker

- - -

## Introduction

Phalcon is distributed as a Composer package (`phalcon/phalcon`), so it does not require a dedicated Docker image or a compiled extension. Any official [PHP Docker image][php-docker] can run a Phalcon application. You add Phalcon to your project with Composer, the same way you add any other dependency.

## Dockerfile

Start from an official PHP image, install the PHP extensions your application needs, add Composer, and let Composer pull in Phalcon as a project dependency:

```dockerfile
FROM php:8.3-fpm

# Helper to install PHP extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions \
    && install-php-extensions pdo_mysql gd intl

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . /app

# Phalcon is installed as a project dependency
RUN composer install --no-dev --optimize-autoloader
```

If you are adding Phalcon to an existing project, run:

```bash
composer require phalcon/phalcon
```

## Extensions

Phalcon is loosely coupled and does not require additional extensions to load. However, some components rely on PHP extensions to work. For example `pdo_mysql` / `pdo_pgsql` for database access, `gd` or `imagick` for the Image component, `openssl` for the Security and Crypt components, and `redis` or `memcached` for cache and session adapters. Install only the extensions your application uses, as shown in the `install-php-extensions` line above.

For the full list of extensions available through this helper, see the [docker-php-extension-installer][ext-installer] documentation. For other extensions, see the official PHP Docker image [documentation][php-docker].

## Credits

We want to thank the following people for providing us with tools for building Docker images:

[PHP](https://github.com/php/)
: The PHP Team for providing the base images including the newest PHP versions.

[mlocati](https://github.com/mlocati/docker-php-extension-installer)
: For the PHP extension installer and the large list of supported extensions.

[ext-installer]: https://github.com/mlocati/docker-php-extension-installer#supported-php-extensions
[php-docker]: https://hub.docker.com/_/php/
