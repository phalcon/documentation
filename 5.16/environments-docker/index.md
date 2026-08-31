---
title: "Docker"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Docker

## Introduction

Since Version 5.9.2, we provide production-ready Docker images for your convenience. By default, the Docker images run as user `phalcon` in group `phalcon` with `UID` and `GID` 1000.

You can override those values by providing a different user and group in your Docker Compose or stack file. You can also use the Dockerfiles in our [Docker images repository](https://github.com/phalcon/docker) to permanently change those values.

## How to download?

We provide our Docker images on the Docker Hub and GitHub. See the following table for the addresses:

| Provider   | Pull command example                                  |
|------------|-------------------------------------------------------|
| Docker Hub | `docker pull phalconphp/cphalcon:v5.14.0-php8.4`      |
| GitHub     | `docker pull ghcr.io/phalcon/cphalcon:v5.14.0-php8.4` |

:::info[NOTE]
We do not provide a "latest" tag on our Docker images.
:::

The tag for our Docker images has the following build: `v[Phalcon Release]-php[PHP Version]`. As an example, if you want to install Phalcon Version 5.8.0 on PHP 8.2, the tag would be `v5.8.0-php8.2`.

## How do we build the docker images?

As the base we use the official PHP FPM Docker image based on Debian Linux. We integrate a basic healthcheck and all configurations needed to run a basic Phalcon application.

Take a look at our [Docker images repository](https://github.com/phalcon/docker) for more details.

## Extensions

The following list of extensions is installed additional to the extensions of the PHP Docker image in every release:

- apcu
- gd
- gettext
- igbinary
- imagick
- intl
- mysqli
- mysqlnd
- opcache
- pdo_mysql
- pdo_pgsql
- pgsql
- phalcon
- redis
- xsl
- yaml
- zip

## Extending the Docker image

The provided Docker image is usually all you need to run a basic Phalcon application. For more advanced applications, you may need to install another extension.

Let's say you want to install the `memcached` extension. Phalcon provides a way to do so:

```dockerfile
FROM phalconphp/cphalcon:v5.16.0-php8.4

RUN set -eux \
  && install-php-extensions memcached
```

For a full list of supported extensions using this method, please see the [Documentation](https://github.com/mlocati/docker-php-extension-installer#supported-php-extensions). For other extensions not covered by this method, please see the official PHP Docker image [Documentation](https://hub.docker.com/_/php/).

## Notes

We provide production-ready images. That means we do not install anything else you might need in a local development environment. For example, we do not have installed `curl` or `composer`. This minimizes the possibility to download malicious content inside your Docker image. We also do not install `xdebug` or tools like `top` or `git`.

## Credits

We want to thank the following people for providing us with tools for building production-ready Docker images:

[PHP](https://github.com/php/)
: The PHP Team for providing the base images including the newest PHP versions.

[mlocati](https://github.com/mlocati/docker-php-extension-installer)
: For the PHP extension installer and the large list of supported extensions.

[renatomefi](https://github.com/renatomefi/php-fpm-healthcheck)
: For the FPM healthcheck script.

Source: https://docs.phalcon.io/5.16/environments-docker/index.mdx
