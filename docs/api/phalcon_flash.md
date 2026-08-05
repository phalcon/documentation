---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Flash\AbstractFlash

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/AbstractFlash.php){ .src-btn }

Shows HTML notifications related to different circumstances. Classes can be
stylized using CSS

```php
$flash->success("The record was successfully deleted");
$flash->error("Cannot open the file");
```

Class AbstractFlash

@package Phalcon\Flash

<div class="api-tree" markdown>

- **`Phalcon\Flash\AbstractFlash`** - implements [`Phalcon\Flash\FlashInterface`](#flashflashinterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)
    - [`Phalcon\Flash\Direct`](#flashdirect)
    - [`Phalcon\Flash\Session`](#flashsession)

</div>

__Uses__ `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Flash\Exceptions\EscaperServiceUnavailable` · `Phalcon\Flash\Exceptions\FlashMessageNotStringOrArray` · `Phalcon\Flash\Traits\FlashGettersTrait` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashabstractflash-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface|null</span> <span class="sv">$escaper</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">SessionInterface|null</span> <span class="sv">$session</span><span class="sm"> = null</span></span>)</code>
<span class="desc">AbstractFlash constructor.</span>
</a>
<a class="api-item" href="#flashabstractflash-error">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">error</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML error message</span>
</a>
<a class="api-item" href="#flashabstractflash-getescaperservice">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface</code>
<code class="sig"><span class="sf">getEscaperService</span>()</code>
<span class="desc">Returns the Escaper Service</span>
</a>
<a class="api-item" href="#flashabstractflash-message">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">message</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Outputs a message. Delivery semantics differ per implementation:</span>
</a>
<a class="api-item" href="#flashabstractflash-notice">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">notice</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML notice/information message</span>
</a>
<a class="api-item" href="#flashabstractflash-outputmessage">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">outputMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Outputs a message formatting it with HTML</span>
</a>
<a class="api-item" href="#flashabstractflash-setautoescape">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAutoescape</span>( <span class="st">bool</span> <span class="sv">$autoescape</span> )</code>
<span class="desc">Set the autoescape mode in generated HTML</span>
</a>
<a class="api-item" href="#flashabstractflash-setautomatichtml">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAutomaticHtml</span>( <span class="st">bool</span> <span class="sv">$automaticHtml</span> )</code>
<span class="desc">Set if the output must be implicitly formatted with HTML</span>
</a>
<a class="api-item" href="#flashabstractflash-setcssclasses">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setCssClasses</span>( <span class="st">array</span> <span class="sv">$cssClasses</span> )</code>
<span class="desc">Set an array with CSS classes to format the messages</span>
</a>
<a class="api-item" href="#flashabstractflash-setcssiconclasses">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setCssIconClasses</span>( <span class="st">array</span> <span class="sv">$cssIconClasses</span> )</code>
<span class="desc">Set an array with CSS classes to format the icon messages</span>
</a>
<a class="api-item" href="#flashabstractflash-setcustomtemplate">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setCustomTemplate</span>( <span class="st">string</span> <span class="sv">$customTemplate</span> )</code>
<span class="desc">Set a custom template for showing the messages</span>
</a>
<a class="api-item" href="#flashabstractflash-setescaperservice">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setEscaperService</span>( <span class="st">EscaperInterface</span> <span class="sv">$escaperService</span> )</code>
<span class="desc">Sets the Escaper Service</span>
</a>
<a class="api-item" href="#flashabstractflash-setimplicitflush">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setImplicitFlush</span>( <span class="st">bool</span> <span class="sv">$implicitFlush</span> )</code>
<span class="desc">Set whether the output must be implicitly flushed to the output or</span>
</a>
<a class="api-item" href="#flashabstractflash-success">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">success</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML success message</span>
</a>
<a class="api-item" href="#flashabstractflash-warning">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">warning</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Shows a HTML warning message</span>
</a>
</div>

### Methods

<div class="api-group">Public · 15</div>

#### `__construct()` { #flashabstractflash-__construct }

```php
public function __construct(
    EscaperInterface|null $escaper = null,
    SessionInterface|null $session = null
);
```

AbstractFlash constructor.

#### `error()` { #flashabstractflash-error }

```php
public function error( string $message ): string|null;
```

Shows a HTML error message

```php
$flash->error("This is an error");
```

#### `getEscaperService()` { #flashabstractflash-getescaperservice }

```php
public function getEscaperService(): EscaperInterface;
```

Returns the Escaper Service

#### `message()` { #flashabstractflash-message }

```php
abstract public function message(
    string $type,
    mixed $message
): string|null;
```

Outputs a message. Delivery semantics differ per implementation:
`Direct` renders and emits immediately, `Session` stores the raw
message for output on a later request.

#### `notice()` { #flashabstractflash-notice }

```php
public function notice( string $message ): string|null;
```

Shows a HTML notice/information message

```php
$flash->notice("This is an information");
```

#### `outputMessage()` { #flashabstractflash-outputmessage }

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

#### `setAutoescape()` { #flashabstractflash-setautoescape }

```php
public function setAutoescape( bool $autoescape ): static;
```

Set the autoescape mode in generated HTML

#### `setAutomaticHtml()` { #flashabstractflash-setautomatichtml }

```php
public function setAutomaticHtml( bool $automaticHtml ): static;
```

Set if the output must be implicitly formatted with HTML

#### `setCssClasses()` { #flashabstractflash-setcssclasses }

```php
public function setCssClasses( array $cssClasses ): static;
```

Set an array with CSS classes to format the messages

#### `setCssIconClasses()` { #flashabstractflash-setcssiconclasses }

```php
public function setCssIconClasses( array $cssIconClasses ): static;
```

Set an array with CSS classes to format the icon messages

#### `setCustomTemplate()` { #flashabstractflash-setcustomtemplate }

```php
public function setCustomTemplate( string $customTemplate ): static;
```

Set a custom template for showing the messages

#### `setEscaperService()` { #flashabstractflash-setescaperservice }

```php
public function setEscaperService( EscaperInterface $escaperService ): static;
```

Sets the Escaper Service

#### `setImplicitFlush()` { #flashabstractflash-setimplicitflush }

```php
public function setImplicitFlush( bool $implicitFlush ): static;
```

Set whether the output must be implicitly flushed to the output or
returned as string

Note: `output()` is an echo API and requires implicit flush to remain
enabled (the default). With implicit flush disabled, `message()` returns
the rendered string while `output()` does not emit it.

#### `success()` { #flashabstractflash-success }

```php
public function success( string $message ): string|null;
```

Shows a HTML success message

```php
$flash->success("The process was finished successfully");
```

#### `warning()` { #flashabstractflash-warning }

```php
public function warning( string $message ): string|null;
```

Shows a HTML warning message

```php
$flash->warning("Hey, this is important");
```


## Flash\Direct

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Direct.php){ .src-btn }

Class Direct

@package Phalcon\Flash

<div class="api-tree" markdown>

- [`Phalcon\Flash\AbstractFlash`](#flashabstractflash)
    - **`Phalcon\Flash\Direct`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashdirect-message">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">message</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Outputs a message</span>
</a>
<a class="api-item" href="#flashdirect-output">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">output</span>( <span class="st">bool</span> <span class="sv">$remove</span><span class="sm"> = true</span> )</code>
<span class="desc">Prints the messages accumulated in the flasher</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `message()` { #flashdirect-message }

```php
public function message(
    string $type,
    mixed $message
): string|null;
```

Outputs a message

#### `output()` { #flashdirect-output }

```php
public function output( bool $remove = true ): void;
```

Prints the messages accumulated in the flasher


## Flash\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Exception.php){ .src-btn }

Exceptions thrown in Phalcon\Flash classes will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Flash\Exception`**
        - [`Phalcon\Flash\Exceptions\EscaperServiceUnavailable`](#flashexceptionsescaperserviceunavailable)
        - [`Phalcon\Flash\Exceptions\FlashMessageNotStringOrArray`](#flashexceptionsflashmessagenotstringorarray)
        - [`Phalcon\Flash\Exceptions\SessionServiceUnavailable`](#flashexceptionssessionserviceunavailable)

</div>


## Flash\Exceptions\EscaperServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Exceptions/EscaperServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Flash\Exception`](#flashexception)
        - **`Phalcon\Flash\Exceptions\EscaperServiceUnavailable`**

</div>

__Uses__ `Phalcon\Flash\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashexceptionsescaperserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #flashexceptionsescaperserviceunavailable-__construct }

```php
public function __construct();
```


## Flash\Exceptions\FlashMessageNotStringOrArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Exceptions/FlashMessageNotStringOrArray.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Flash\Exception`](#flashexception)
        - **`Phalcon\Flash\Exceptions\FlashMessageNotStringOrArray`**

</div>

__Uses__ `Phalcon\Flash\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashexceptionsflashmessagenotstringorarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #flashexceptionsflashmessagenotstringorarray-__construct }

```php
public function __construct();
```


## Flash\Exceptions\SessionServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Exceptions/SessionServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Flash\Exception`](#flashexception)
        - **`Phalcon\Flash\Exceptions\SessionServiceUnavailable`**

</div>

__Uses__ `Phalcon\Flash\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashexceptionssessionserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #flashexceptionssessionserviceunavailable-__construct }

```php
public function __construct();
```


## Flash\FlashInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/FlashInterface.php){ .src-btn }

Interface FlashInterface

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Flash\Flash`](phalcon_contracts.md#contractsflashflash)
    - **`Phalcon\Flash\FlashInterface`**

</div>

__Uses__ `Phalcon\Contracts\Flash\Flash`
{ .api-uses }


## Flash\Session

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Session.php){ .src-btn }

This is an implementation of the Phalcon\Flash\FlashInterface that
temporarily stores the messages in session, then messages can be printed in
the next request.

Class Session

@package Phalcon\Flash

<div class="api-tree" markdown>

- [`Phalcon\Flash\AbstractFlash`](#flashabstractflash)
    - **`Phalcon\Flash\Session`**

</div>

__Uses__ `Phalcon\Flash\Exceptions\SessionServiceUnavailable` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Session\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashsession-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface|null</span> <span class="sv">$escaper</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">ManagerInterface|null</span> <span class="sv">$session</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$sessionKey</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Session constructor.</span>
</a>
<a class="api-item" href="#flashsession-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clear messages in the session messenger</span>
</a>
<a class="api-item" href="#flashsession-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMessages</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$type</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remove</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Returns the messages in the session flasher</span>
</a>
<a class="api-item" href="#flashsession-getsessionservice">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig"><span class="sf">getSessionService</span>()</code>
<span class="desc">Returns the Session Service</span>
</a>
<a class="api-item" href="#flashsession-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string|null</span> <span class="sv">$type</span><span class="sm"> = null</span> )</code>
<span class="desc">Checks whether there are messages</span>
</a>
<a class="api-item" href="#flashsession-message">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">message</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Adds a message to the session flasher</span>
</a>
<a class="api-item" href="#flashsession-output">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">output</span>( <span class="st">bool</span> <span class="sv">$remove</span><span class="sm"> = true</span> )</code>
<span class="desc">Prints the messages in the session flasher</span>
</a>
<a class="api-item" href="#flashsession-getsessionmessages">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSessionMessages</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$remove</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the messages stored in session</span>
</a>
<a class="api-item" href="#flashsession-setsessionmessages">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">setSessionMessages</span>( <span class="st">array</span> <span class="sv">$messages</span> )</code>
<span class="desc">Stores the messages in session</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">SESSION_KEY</span><span class="sm"> = &quot;_flashMessages&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$sessionKey</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__construct()` { #flashsession-__construct }

```php
public function __construct(
    EscaperInterface|null $escaper = null,
    ManagerInterface|null $session = null,
    string|null $sessionKey = null
);
```

Session constructor.

#### `clear()` { #flashsession-clear }

```php
public function clear(): void;
```

Clear messages in the session messenger

#### `getMessages()` { #flashsession-getmessages }

```php
public function getMessages(
    string|null $type = null,
    bool $remove = true
): array;
```

Returns the messages in the session flasher

#### `getSessionService()` { #flashsession-getsessionservice }

```php
public function getSessionService(): ManagerInterface;
```

Returns the Session Service

#### `has()` { #flashsession-has }

```php
public function has( string|null $type = null ): bool;
```

Checks whether there are messages

#### `message()` { #flashsession-message }

```php
public function message(
    string $type,
    mixed $message
): string|null;
```

Adds a message to the session flasher

#### `output()` { #flashsession-output }

```php
public function output( bool $remove = true ): void;
```

Prints the messages in the session flasher

<div class="api-group">Protected · 2</div>

#### `getSessionMessages()` { #flashsession-getsessionmessages }

```php
protected function getSessionMessages(
    bool $remove,
    string|null $type = null
): array;
```

Returns the messages stored in session

#### `setSessionMessages()` { #flashsession-setsessionmessages }

```php
protected function setSessionMessages( array $messages ): array;
```

Stores the messages in session


## Flash\Traits\FlashGettersTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Flash/Traits/FlashGettersTrait.php){ .src-btn }

Class AbstractFlash

@package Phalcon\Flash

Shows HTML notifications related to different circumstances. Classes can be
stylized using CSS

```php
$flash->success("The record was successfully deleted");
$flash->error("Cannot open the file");
```
@property bool                  $autoescape
@property bool                  $automaticHtml
@property array                 $cssClasses
@property string                $customTemplate
@property EscaperInterface|null $escaperService
@property bool                  $implicitFlush
@property array                 $messages
@property SessionInterface|null $sessionService

<div class="api-tree" markdown>

- **`Phalcon\Flash\Traits\FlashGettersTrait`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Session\ManagerInterface`
{ .api-uses }

__Used by__ [`Phalcon\Flash\AbstractFlash`](#flashabstractflash)
{ .api-used-by }

### Method Summary

<div class="api-list">
<a class="api-item" href="#flashtraitsflashgetterstrait-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears accumulated messages when implicit flush is disabled</span>
</a>
<a class="api-item" href="#flashtraitsflashgetterstrait-getautoescape">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getAutoescape</span>()</code>
<span class="desc">Returns the flag that defines whether to automatically escape content or not</span>
</a>
<a class="api-item" href="#flashtraitsflashgetterstrait-getautomatichtml">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getAutomaticHtml</span>()</code>
<span class="desc">Returns the flag that defines whether to automatically use HTML or not</span>
</a>
<a class="api-item" href="#flashtraitsflashgetterstrait-getcssclasses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCssClasses</span>()</code>
<span class="desc">Returns the array of the CSS classes for formatting messages. The key is</span>
</a>
<a class="api-item" href="#flashtraitsflashgetterstrait-getcssiconclasses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCssIconClasses</span>()</code>
<span class="desc">Returns the array of the icon CSS classes for formatting messages. The</span>
</a>
<a class="api-item" href="#flashtraitsflashgetterstrait-getcustomtemplate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCustomTemplate</span>()</code>
<span class="desc">Returns the custom template for formatting messages</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$autoescape</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$automaticHtml</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$cssClasses</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$cssIconClasses</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$customTemplate</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">EscaperInterface|null</code>
<code class="sig"><span class="sv">$escaperService</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$implicitFlush</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$messages</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">SessionInterface|null</code>
<code class="sig"><span class="sv">$sessionService</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `clear()` { #flashtraitsflashgetterstrait-clear }

```php
public function clear(): void;
```

Clears accumulated messages when implicit flush is disabled

#### `getAutoescape()` { #flashtraitsflashgetterstrait-getautoescape }

```php
public function getAutoescape(): bool;
```

Returns the flag that defines whether to automatically escape content or not

#### `getAutomaticHtml()` { #flashtraitsflashgetterstrait-getautomatichtml }

```php
public function getAutomaticHtml(): bool;
```

Returns the flag that defines whether to automatically use HTML or not

#### `getCssClasses()` { #flashtraitsflashgetterstrait-getcssclasses }

```php
public function getCssClasses(): array;
```

Returns the array of the CSS classes for formatting messages. The key is
the type of message and the value is the CSS class

#### `getCssIconClasses()` { #flashtraitsflashgetterstrait-getcssiconclasses }

```php
public function getCssIconClasses(): array;
```

Returns the array of the icon CSS classes for formatting messages. The
key is the type of message and the value is the icon CSS class

#### `getCustomTemplate()` { #flashtraitsflashgetterstrait-getcustomtemplate }

```php
public function getCustomTemplate(): string;
```

Returns the custom template for formatting messages
