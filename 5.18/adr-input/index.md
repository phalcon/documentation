---
title: "ADR - Input"
version: "5.18"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ADR - Input

## Overview

`Phalcon\ADR\Input\Input` collects the data of a request into a single object the [domain][domain] can consume without any knowledge of HTTP. It gives the [action][actions] one place to read from, and keeps the domain free of the request object.

## Creating input

The common case builds input straight from the request:

```php
use Phalcon\ADR\Input\Input;

$input = Input::fromRequest($request);
```

`fromRequest()` merges four sources into one bag, in this order:

1. the query string
2. the POST body
3. the JSON body, when the request carries one
4. the route attributes matched by the [router][router]

You can also build input from a plain array, which is convenient in tests:

```php
$input = Input::fromArray(['id' => 42]);
```

## Reading input

```php
$id   = $input->get('id');              // null if absent
$page = $input->get('page', 1);         // with a default
$has  = $input->has('id');              // bool
$all  = $input->toArray();              // the whole bag
```

Values arrive exactly as they came in over the wire, as strings. Input does not filter or cast: that is deliberately the responsibility of the [domain][domain], which knows what each value is supposed to be. When you need sanitizing, apply the framework's `Phalcon\Filter\Filter` to the value yourself.

## Typed input

`Input` is a plain, extendable class, so you can give a domain a typed, self-documenting input instead of a raw string bag. Subclass it and add accessors:

```php
<?php

namespace MyApp\Dto;

use Phalcon\ADR\Input\Input;

final class InvoicesDto extends Input
{
public function id(): int
{
    return (int) $this->get('id');
}

public function reference(): ?string
{
    return $this->get('reference');
}
}
```

Because the factories use late static binding, `InvoicesDto::fromRequest($request)` returns an `InvoicesDto`, so the [action][actions] builds it and the [domain][domain] types its parameter against it:

```php
$input   = InvoicesDto::fromRequest($request);   // an InvoicesDto
$payload = ($this->domain)($input);              // domain: __invoke(InvoicesDto $input)
```

Casting and validation then live in one obvious place, the value object, instead of being scattered through the domain.

[domain]: /5.18/adr-domain/
[actions]: /5.18/adr-actions/
[router]: /5.18/adr-router/

Source: https://docs.phalcon.io/5.18/adr-input/index.mdx
