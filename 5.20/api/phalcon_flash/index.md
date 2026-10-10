---
title: "Phalcon Flash"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Flash

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Flash\AbstractFlash

Abstract

Shows HTML notifications related to different circumstances. Classes can be
stylized using CSS

```php
$flash->success("The record was successfully deleted");
$flash->error("Cannot open the file");
```

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.20/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Flash\AbstractFlash`** - implements [`Phalcon\Flash\FlashInterface`](#flashflashinterface)
      - [`Phalcon\Flash\Direct`](#flashdirect)
      - [`Phalcon\Flash\Session`](#flashsession)

`Phalcon\Contracts\Flash\FlashTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Flash\Exceptions\EscaperServiceUnavailable` · `Phalcon\Flash\Exceptions\FlashMessageNotStringOrArray` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait`

### Method Summary

- `public __construct(EscaperInterface|null $escaper = null, SessionInterface|null $session = null)` — AbstractFlash constructor.

- `public clear(): void` — Clears accumulated messages when implicit flush is disabled

- `public error(string $message): string|null` — Shows a HTML error message

- `public getAutoescape(): bool` — Returns the flag that defines whether to automatically escape content or not

- `public getAutomaticHtml(): bool` — Returns the flag that defines whether to automatically use HTML or not

- `public getCssClasses(): array` — Returns the array of the CSS classes for formatting messages. The key is

- `public getCssIconClasses(): array` — Returns the array of the icon CSS classes for formatting messages. The

- `public getCustomTemplate(): string` — Returns the custom template for formatting messages

- `public getEscaperService(): EscaperInterface` — Returns the Escaper Service

- `public message(string $type, mixed $message): string|null` — Outputs a message. Delivery semantics differ per implementation:

- `public notice(string $message): string|null` — Shows a HTML notice/information message

- `public outputMessage(string $type, mixed $message): string|null` — Outputs a message formatting it with HTML

- `public setAutoescape(bool $autoescape): static` — Set the autoescape mode in generated HTML

- `public setAutomaticHtml(bool $automaticHtml): static` — Set if the output must be implicitly formatted with HTML

- `public setCssClasses(array $cssClasses): static` — Set an array with CSS classes to format the messages

- `public setCssIconClasses(array $cssIconClasses): static` — Set an array with CSS classes to format the icon messages

- `public setCustomTemplate(string $customTemplate): static` — Set a custom template for showing the messages

- `public setEscaperService(EscaperInterface $escaperService): static` — Sets the Escaper Service

- `public setImplicitFlush(bool $implicitFlush): static` — Set whether the output must be implicitly flushed to the output or

- `public success(string $message): string|null` — Shows a HTML success message

- `public warning(string $message): string|null` — Shows a HTML warning message

### Properties

- `protected bool $autoescape = true`

- `protected bool $automaticHtml = true`

- `protected array $cssClasses = []`

- `protected array $cssIconClasses = []`

- `protected string $customTemplate = ""`

- `protected EscaperInterface|null $escaperService = null`

- `protected bool $implicitFlush = true`

- `protected array $messages = []`

- `protected SessionInterface|null $sessionService = null`

### Methods

<h4 id="flashabstractflash-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    EscaperInterface|null $escaper = null,
    SessionInterface|null $session = null
);
```

AbstractFlash constructor.

<h4 id="flashabstractflash-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clears accumulated messages when implicit flush is disabled

<h4 id="flashabstractflash-error"><code>error()</code></h4>

```php
public function error( string $message ): string|null;
```

Shows a HTML error message

```php
$flash->error("This is an error");
```

<h4 id="flashabstractflash-getautoescape"><code>getAutoescape()</code></h4>

```php
public function getAutoescape(): bool;
```

Returns the flag that defines whether to automatically escape content or not

<h4 id="flashabstractflash-getautomatichtml"><code>getAutomaticHtml()</code></h4>

```php
public function getAutomaticHtml(): bool;
```

Returns the flag that defines whether to automatically use HTML or not

<h4 id="flashabstractflash-getcssclasses"><code>getCssClasses()</code></h4>

```php
public function getCssClasses(): array;
```

Returns the array of the CSS classes for formatting messages. The key is
the type of message and the value is the CSS class

<h4 id="flashabstractflash-getcssiconclasses"><code>getCssIconClasses()</code></h4>

```php
public function getCssIconClasses(): array;
```

Returns the array of the icon CSS classes for formatting messages. The
key is the type of message and the value is the icon CSS class

<h4 id="flashabstractflash-getcustomtemplate"><code>getCustomTemplate()</code></h4>

```php
public function getCustomTemplate(): string;
```

Returns the custom template for formatting messages

<h4 id="flashabstractflash-getescaperservice"><code>getEscaperService()</code></h4>

```php
public function getEscaperService(): EscaperInterface;
```

Returns the Escaper Service

<h4 id="flashabstractflash-message"><code>message()</code></h4>

```php
abstract public function message(
    string $type,
    mixed $message
): string|null;
```

Outputs a message. Delivery semantics differ per implementation:
`Direct` renders and emits immediately, `Session` stores the raw
message for output on a later request.

<h4 id="flashabstractflash-notice"><code>notice()</code></h4>

```php
public function notice( string $message ): string|null;
```

Shows a HTML notice/information message

```php
$flash->notice("This is an information");
```

<h4 id="flashabstractflash-outputmessage"><code>outputMessage()</code></h4>

```php
public function outputMessage(
    string $type,
    mixed $message
): string|null;
```

Outputs a message formatting it with HTML

```php
$flash->outputMessage("error", $message);
```

<h4 id="flashabstractflash-setautoescape"><code>setAutoescape()</code></h4>

```php
public function setAutoescape( bool $autoescape ): static;
```

Set the autoescape mode in generated HTML

<h4 id="flashabstractflash-setautomatichtml"><code>setAutomaticHtml()</code></h4>

```php
public function setAutomaticHtml( bool $automaticHtml ): static;
```

Set if the output must be implicitly formatted with HTML

<h4 id="flashabstractflash-setcssclasses"><code>setCssClasses()</code></h4>

```php
public function setCssClasses( array $cssClasses ): static;
```

Set an array with CSS classes to format the messages

<h4 id="flashabstractflash-setcssiconclasses"><code>setCssIconClasses()</code></h4>

```php
public function setCssIconClasses( array $cssIconClasses ): static;
```

Set an array with CSS classes to format the icon messages

<h4 id="flashabstractflash-setcustomtemplate"><code>setCustomTemplate()</code></h4>

```php
public function setCustomTemplate( string $customTemplate ): static;
```

Set a custom template for showing the messages

<h4 id="flashabstractflash-setescaperservice"><code>setEscaperService()</code></h4>

```php
public function setEscaperService( EscaperInterface $escaperService ): static;
```

Sets the Escaper Service

<h4 id="flashabstractflash-setimplicitflush"><code>setImplicitFlush()</code></h4>

```php
public function setImplicitFlush( bool $implicitFlush ): static;
```

Set whether the output must be implicitly flushed to the output or
returned as string

Note: `output()` is an echo API and requires implicit flush to remain
enabled (the default). With implicit flush disabled, `message()` returns
the rendered string while `output()` does not emit it.

<h4 id="flashabstractflash-success"><code>success()</code></h4>

```php
public function success( string $message ): string|null;
```

Shows a HTML success message

```php
$flash->success("The process was finished successfully");
```

<h4 id="flashabstractflash-warning"><code>warning()</code></h4>

```php
public function warning( string $message ): string|null;
```

Shows a HTML warning message

```php
$flash->warning("Hey, this is important");
```


## Flash\Direct

Class

Class Direct

@package Phalcon\Flash

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.20/api/phalcon_di/#diabstractinjectionaware)
    - [`Phalcon\Flash\AbstractFlash`](#flashabstractflash)
      - **`Phalcon\Flash\Direct`**

### Method Summary

- `public message(string $type, mixed $message): string|null` — Outputs a message

- `public output(bool $remove = true): void` — Prints the messages accumulated in the flasher

### Methods

<h4 id="flashdirect-message"><code>message()</code></h4>

```php
public function message(
    string $type,
    mixed $message
): string|null;
```

Outputs a message

<h4 id="flashdirect-output"><code>output()</code></h4>

```php
public function output( bool $remove = true ): void;
```

Prints the messages accumulated in the flasher


## Flash\Exception

Class

Exceptions thrown in Phalcon\Flash classes will use this class

- `\Exception`
  - **`Phalcon\Flash\Exception`**
    - [`Phalcon\Flash\Exceptions\EscaperServiceUnavailable`](#flashexceptionsescaperserviceunavailable)
    - [`Phalcon\Flash\Exceptions\FlashMessageNotStringOrArray`](#flashexceptionsflashmessagenotstringorarray)
    - [`Phalcon\Flash\Exceptions\SessionServiceUnavailable`](#flashexceptionssessionserviceunavailable)


## Flash\Exceptions\EscaperServiceUnavailable

Class

- `\Exception`
  - [`Phalcon\Flash\Exception`](#flashexception)
    - **`Phalcon\Flash\Exceptions\EscaperServiceUnavailable`**

`Phalcon\Flash\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="flashexceptionsescaperserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Flash\Exceptions\FlashMessageNotStringOrArray

Class

- `\Exception`
  - [`Phalcon\Flash\Exception`](#flashexception)
    - **`Phalcon\Flash\Exceptions\FlashMessageNotStringOrArray`**

`Phalcon\Flash\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="flashexceptionsflashmessagenotstringorarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Flash\Exceptions\SessionServiceUnavailable

Class

- `\Exception`
  - [`Phalcon\Flash\Exception`](#flashexception)
    - **`Phalcon\Flash\Exceptions\SessionServiceUnavailable`**

`Phalcon\Flash\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="flashexceptionssessionserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Flash\FlashInterface

Interface

Interface FlashInterface

- [`Phalcon\Contracts\Flash\Flash`](/5.20/api/phalcon_contracts/#contractsflashflash)
  - **`Phalcon\Flash\FlashInterface`**

`Phalcon\Contracts\Flash\Flash`


## Flash\Session

Class

This is an implementation of the Phalcon\Flash\FlashInterface that
temporarily stores the messages in session, then messages can be printed in
the next request.

Class Session

@package Phalcon\Flash

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.20/api/phalcon_di/#diabstractinjectionaware)
    - [`Phalcon\Flash\AbstractFlash`](#flashabstractflash)
      - **`Phalcon\Flash\Session`**

`Phalcon\Contracts\Flash\FlashTypes` · `Phalcon\Flash\Exceptions\SessionServiceUnavailable` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Session\ManagerInterface`

### Method Summary

- `public __construct(EscaperInterface|null $escaper = null, ManagerInterface|null $session = null, string|null $sessionKey = null)` — Session constructor.

- `public clear(): void` — Clear messages in the session messenger

- `public getMessages(mixed $type = null, bool $remove = true): array` — Returns the messages in the session flasher

- `public getSessionService(): ManagerInterface` — Returns the Session Service

- `public has(string|null $type = null): bool` — Checks whether there are messages

- `public message(string $type, mixed $message): string|null` — Adds a message to the session flasher

- `public output(bool $remove = true): void` — Prints the messages in the session flasher

- `protected getSessionMessages(bool $remove, string|null $type = null): array` — Returns the messages stored in session

- `protected setSessionMessages(array $messages): array` — Stores the messages in session

### Constants

- `const string SESSION_KEY = "_flashMessages"`

### Properties

- `protected string $sessionKey = ""`

### Methods

<h4 id="flashsession-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    EscaperInterface|null $escaper = null,
    ManagerInterface|null $session = null,
    string|null $sessionKey = null
);
```

Session constructor.

<h4 id="flashsession-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clear messages in the session messenger

<h4 id="flashsession-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(
    mixed $type = null,
    bool $remove = true
): array;
```

Returns the messages in the session flasher

<h4 id="flashsession-getsessionservice"><code>getSessionService()</code></h4>

```php
public function getSessionService(): ManagerInterface;
```

Returns the Session Service

<h4 id="flashsession-has"><code>has()</code></h4>

```php
public function has( string|null $type = null ): bool;
```

Checks whether there are messages

<h4 id="flashsession-message"><code>message()</code></h4>

```php
public function message(
    string $type,
    mixed $message
): string|null;
```

Adds a message to the session flasher

<h4 id="flashsession-output"><code>output()</code></h4>

```php
public function output( bool $remove = true ): void;
```

Prints the messages in the session flasher

<h4 id="flashsession-getsessionmessages"><code>getSessionMessages()</code></h4>

```php
protected function getSessionMessages(
    bool $remove,
    string|null $type = null
): array;
```

Returns the messages stored in session

<h4 id="flashsession-setsessionmessages"><code>setSessionMessages()</code></h4>

```php
protected function setSessionMessages( array $messages ): array;
```

Stores the messages in session

Source: https://docs.phalcon.io/5.20/api/phalcon_flash/index.mdx
