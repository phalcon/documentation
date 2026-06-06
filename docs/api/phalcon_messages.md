---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Messages\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Messages/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Messages\* classes will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Messages\Exception`**
        - [`Phalcon\Messages\Exceptions\MessageNotObject`](#messagesexceptionsmessagenotobject)
        - [`Phalcon\Messages\Exceptions\MessagesNotIterable`](#messagesexceptionsmessagesnotiterable)

</div>


## Messages\Exceptions\MessageNotObject

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Messages/Exceptions/MessageNotObject.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Messages\Exception`](#messagesexception)
        - **`Phalcon\Messages\Exceptions\MessageNotObject`**

</div>

__Uses__ `Phalcon\Messages\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#messagesexceptionsmessagenotobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #messagesexceptionsmessagenotobject-__construct }

```php
public function __construct();
```


## Messages\Exceptions\MessagesNotIterable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Messages/Exceptions/MessagesNotIterable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Messages\Exception`](#messagesexception)
        - **`Phalcon\Messages\Exceptions\MessagesNotIterable`**

</div>

__Uses__ `Phalcon\Messages\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#messagesexceptionsmessagesnotiterable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #messagesexceptionsmessagesnotiterable-__construct }

```php
public function __construct();
```


## Messages\Message

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Messages/Message.zep){ .src-btn }

Phalcon\Messages\Message

Stores a message from various components

<div class="api-tree" markdown>

- **`Phalcon\Messages\Message`** — implements [`Phalcon\Messages\MessageInterface`](#messagesmessageinterface), `JsonSerializable`

</div>

__Uses__ `JsonSerializable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#messagesmessage-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$metaData</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Phalcon\Messages\Message constructor</span>
</a>
<a class="api-item" href="#messagesmessage-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Magic __toString method returns verbose message</span>
</a>
<a class="api-item" href="#messagesmessage-getcode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCode</span>()</code>
</a>
<a class="api-item" href="#messagesmessage-getfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getField</span>()</code>
</a>
<a class="api-item" href="#messagesmessage-getmessage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessage</span>()</code>
</a>
<a class="api-item" href="#messagesmessage-getmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMetaData</span>()</code>
</a>
<a class="api-item" href="#messagesmessage-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
<a class="api-item" href="#messagesmessage-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">jsonSerialize</span>()</code>
<span class="desc">Serializes the object for json_encode</span>
</a>
<a class="api-item" href="#messagesmessage-setcode">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setCode</span>( <span class="st">int</span> <span class="sv">$code</span> )</code>
<span class="desc">Sets code for the message</span>
</a>
<a class="api-item" href="#messagesmessage-setfield">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setField</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Sets field name related to message</span>
</a>
<a class="api-item" href="#messagesmessage-setmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setMessage</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Sets verbose message</span>
</a>
<a class="api-item" href="#messagesmessage-setmetadata">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setMetaData</span>( <span class="st">array</span> <span class="sv">$metaData</span> )</code>
<span class="desc">Sets message metadata</span>
</a>
<a class="api-item" href="#messagesmessage-settype">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets message type</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$code</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$field</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$message</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$metaData</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `__construct()` { #messagesmessage-__construct }

```php
public function __construct(
    string $message,
    string $field = "",
    string $type = "",
    int $code = 0,
    array $metaData = []
);
```

Phalcon\Messages\Message constructor

#### `__toString()` { #messagesmessage-__tostring }

```php
public function __toString(): string;
```

Magic __toString method returns verbose message

#### `getCode()` { #messagesmessage-getcode }

```php
public function getCode(): int;
```

#### `getField()` { #messagesmessage-getfield }

```php
public function getField(): string;
```

#### `getMessage()` { #messagesmessage-getmessage }

```php
public function getMessage(): string;
```

#### `getMetaData()` { #messagesmessage-getmetadata }

```php
public function getMetaData(): array;
```

#### `getType()` { #messagesmessage-gettype }

```php
public function getType(): string;
```

#### `jsonSerialize()` { #messagesmessage-jsonserialize }

```php
public function jsonSerialize(): array;
```

Serializes the object for json_encode

#### `setCode()` { #messagesmessage-setcode }

```php
public function setCode( int $code ): MessageInterface;
```

Sets code for the message

#### `setField()` { #messagesmessage-setfield }

```php
public function setField( string $field ): MessageInterface;
```

Sets field name related to message

#### `setMessage()` { #messagesmessage-setmessage }

```php
public function setMessage( string $message ): MessageInterface;
```

Sets verbose message

#### `setMetaData()` { #messagesmessage-setmetadata }

```php
public function setMetaData( array $metaData ): MessageInterface;
```

Sets message metadata

#### `setType()` { #messagesmessage-settype }

```php
public function setType( string $type ): MessageInterface;
```

Sets message type


## Messages\MessageInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Messages/MessageInterface.zep){ .src-btn }

Phalcon\Messages\MessageInterface

Interface for Phalcon\Messages\MessageInterface

<div class="api-tree" markdown>

- **`Phalcon\Messages\MessageInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#messagesmessageinterface-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Magic __toString method returns verbose message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-getcode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCode</span>()</code>
<span class="desc">Returns the message code related to this message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-getfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getField</span>()</code>
<span class="desc">Returns field name related to message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-getmessage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessage</span>()</code>
<span class="desc">Returns verbose message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-getmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMetaData</span>()</code>
<span class="desc">Returns message metadata</span>
</a>
<a class="api-item" href="#messagesmessageinterface-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns message type</span>
</a>
<a class="api-item" href="#messagesmessageinterface-setcode">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setCode</span>( <span class="st">int</span> <span class="sv">$code</span> )</code>
<span class="desc">Sets code for the message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-setfield">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setField</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Sets field name related to message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-setmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setMessage</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Sets verbose message</span>
</a>
<a class="api-item" href="#messagesmessageinterface-setmetadata">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setMetaData</span>( <span class="st">array</span> <span class="sv">$metaData</span> )</code>
<span class="desc">Sets message metadata</span>
</a>
<a class="api-item" href="#messagesmessageinterface-settype">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets message type</span>
</a>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `__toString()` { #messagesmessageinterface-__tostring }

```php
public function __toString(): string;
```

Magic __toString method returns verbose message

#### `getCode()` { #messagesmessageinterface-getcode }

```php
public function getCode(): int;
```

Returns the message code related to this message

#### `getField()` { #messagesmessageinterface-getfield }

```php
public function getField(): string;
```

Returns field name related to message

#### `getMessage()` { #messagesmessageinterface-getmessage }

```php
public function getMessage(): string;
```

Returns verbose message

#### `getMetaData()` { #messagesmessageinterface-getmetadata }

```php
public function getMetaData(): array;
```

Returns message metadata

#### `getType()` { #messagesmessageinterface-gettype }

```php
public function getType(): string;
```

Returns message type

#### `setCode()` { #messagesmessageinterface-setcode }

```php
public function setCode( int $code ): MessageInterface;
```

Sets code for the message

#### `setField()` { #messagesmessageinterface-setfield }

```php
public function setField( string $field ): MessageInterface;
```

Sets field name related to message

#### `setMessage()` { #messagesmessageinterface-setmessage }

```php
public function setMessage( string $message ): MessageInterface;
```

Sets verbose message

#### `setMetaData()` { #messagesmessageinterface-setmetadata }

```php
public function setMetaData( array $metaData ): MessageInterface;
```

Sets message metadata

#### `setType()` { #messagesmessageinterface-settype }

```php
public function setType( string $type ): MessageInterface;
```

Sets message type


## Messages\Messages

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Messages/Messages.zep){ .src-btn }

Represents a collection of messages

<div class="api-tree" markdown>

- **`Phalcon\Messages\Messages`** — implements `ArrayAccess`, `Countable`, `Iterator`, `JsonSerializable`

</div>

__Uses__ `ArrayAccess` · `Countable` · `Iterator` · `JsonSerializable` · `Phalcon\Messages\Exceptions\MessageNotObject` · `Phalcon\Messages\Exceptions\MessagesNotIterable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#messagesmessages-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$messages</span><span class="sm"> = []</span> )</code>
<span class="desc">Phalcon\Messages\Messages constructor</span>
</a>
<a class="api-item" href="#messagesmessages-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">appendMessage</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Appends a message to the collection</span>
</a>
<a class="api-item" href="#messagesmessages-appendmessages">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">appendMessages</span>( <span class="st">mixed</span> <span class="sv">$messages</span> )</code>
<span class="desc">Appends an array of messages to the collection</span>
</a>
<a class="api-item" href="#messagesmessages-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Returns the number of messages in the list</span>
</a>
<a class="api-item" href="#messagesmessages-current">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">current</span>()</code>
<span class="desc">Returns the current message in the iterator</span>
</a>
<a class="api-item" href="#messagesmessages-filter">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">string</span> <span class="sv">$fieldName</span> )</code>
<span class="desc">Filters the message collection by field name</span>
</a>
<a class="api-item" href="#messagesmessages-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">jsonSerialize</span>()</code>
<span class="desc">Returns serialised message objects as array for json_encode. Calls</span>
</a>
<a class="api-item" href="#messagesmessages-key">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">key</span>()</code>
<span class="desc">Returns the current position/key in the iterator</span>
</a>
<a class="api-item" href="#messagesmessages-next">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">next</span>()</code>
<span class="desc">Moves the internal iteration pointer to the next position</span>
</a>
<a class="api-item" href="#messagesmessages-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$index</span> )</code>
<span class="desc">Checks if an index exists</span>
</a>
<a class="api-item" href="#messagesmessages-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$index</span> )</code>
<span class="desc">Gets an attribute a message using the array syntax</span>
</a>
<a class="api-item" href="#messagesmessages-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$offset</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets an attribute using the array-syntax</span>
</a>
<a class="api-item" href="#messagesmessages-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$index</span> )</code>
<span class="desc">Removes a message from the list</span>
</a>
<a class="api-item" href="#messagesmessages-rewind">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">rewind</span>()</code>
<span class="desc">Rewinds the internal iterator</span>
</a>
<a class="api-item" href="#messagesmessages-valid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">valid</span>()</code>
<span class="desc">Check if the current message in the iterator is valid</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$messages</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$position</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 15</div>

#### `__construct()` { #messagesmessages-__construct }

```php
public function __construct( array $messages = [] );
```

Phalcon\Messages\Messages constructor

#### `appendMessage()` { #messagesmessages-appendmessage }

```php
public function appendMessage( MessageInterface $message ): void;
```

Appends a message to the collection

```php
$messages->appendMessage(
    new \Phalcon\Messages\Message("This is a message")
);
```

#### `appendMessages()` { #messagesmessages-appendmessages }

```php
public function appendMessages( mixed $messages );
```

Appends an array of messages to the collection

```php
$messages->appendMessages($messagesArray);
```

#### `count()` { #messagesmessages-count }

```php
public function count(): int;
```

Returns the number of messages in the list

#### `current()` { #messagesmessages-current }

```php
public function current(): MessageInterface;
```

Returns the current message in the iterator

#### `filter()` { #messagesmessages-filter }

```php
public function filter( string $fieldName ): array;
```

Filters the message collection by field name

#### `jsonSerialize()` { #messagesmessages-jsonserialize }

```php
public function jsonSerialize(): array;
```

Returns serialised message objects as array for json_encode. Calls
jsonSerialize on each object if present

```php
$data = $messages->jsonSerialize();
echo json_encode($data);
```

#### `key()` { #messagesmessages-key }

```php
public function key(): int;
```

Returns the current position/key in the iterator

#### `next()` { #messagesmessages-next }

```php
public function next(): void;
```

Moves the internal iteration pointer to the next position

#### `offsetExists()` { #messagesmessages-offsetexists }

```php
public function offsetExists( mixed $index ): bool;
```

Checks if an index exists

```php
var_dump(
    isset($message["database"])
);
```

#### `offsetGet()` { #messagesmessages-offsetget }

```php
public function offsetGet( mixed $index ): mixed;
```

Gets an attribute a message using the array syntax

```php
print_r(
    $messages[0]
);
```

#### `offsetSet()` { #messagesmessages-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Sets an attribute using the array-syntax

```php
$messages[0] = new \Phalcon\Messages\Message("This is a message");
```

#### `offsetUnset()` { #messagesmessages-offsetunset }

```php
public function offsetUnset( mixed $index ): void;
```

Removes a message from the list

```php
unset($message["database"]);
```

#### `rewind()` { #messagesmessages-rewind }

```php
public function rewind(): void;
```

Rewinds the internal iterator

#### `valid()` { #messagesmessages-valid }

```php
public function valid(): bool;
```

Check if the current message in the iterator is valid
