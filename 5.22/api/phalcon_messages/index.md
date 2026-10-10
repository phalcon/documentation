---
title: "Phalcon Messages"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Messages

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Messages\Exception

Class

Exceptions thrown in Phalcon\Messages\* classes will use this class

- `\Exception`
  - **`Phalcon\Messages\Exception`**
    - [`Phalcon\Messages\Exceptions\MessageNotObject`](#messagesexceptionsmessagenotobject)
    - [`Phalcon\Messages\Exceptions\MessagesNotIterable`](#messagesexceptionsmessagesnotiterable)


## Messages\Exceptions\MessageNotObject

Class

- `\Exception`
  - [`Phalcon\Messages\Exception`](#messagesexception)
    - **`Phalcon\Messages\Exceptions\MessageNotObject`**

`Phalcon\Messages\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="messagesexceptionsmessagenotobject-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Messages\Exceptions\MessagesNotIterable

Class

- `\Exception`
  - [`Phalcon\Messages\Exception`](#messagesexception)
    - **`Phalcon\Messages\Exceptions\MessagesNotIterable`**

`Phalcon\Messages\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="messagesexceptionsmessagesnotiterable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Messages\Message

Class

Class Message

Stores a message from various components

- **`Phalcon\Messages\Message`** - implements [`Phalcon\Messages\MessageInterface`](#messagesmessageinterface), `\JsonSerializable`

`JsonSerializable` · `Phalcon\Contracts\Messages\MessagesTypes`

### Method Summary

- `public __construct(string $message, string $field = "", string $type = "", int $code = 0, array $metaData = [])` — Phalcon\Messages\Message constructor

- `public __toString(): string` — Magic \_\_toString method returns verbose message

- `public getCode(): int`

- `public getField(): string`

- `public getMessage(): string`

- `public getMetaData(): array`

- `public getType(): string`

- `public jsonSerialize(): array` — Serializes the object for json\_encode

- `public setCode(int $code): MessageInterface` — Sets code for the message

- `public setField(string $field): MessageInterface` — Sets field name related to message

- `public setMessage(string $message): MessageInterface` — Sets verbose message

- `public setMetaData(array $metaData): MessageInterface` — Sets message metadata

- `public setType(string $type): MessageInterface` — Sets message type

### Properties

- `protected int $code = 0`

- `protected string $field = ""`

- `protected string $message`

- `protected array $metaData = []`

- `protected string $type = ""`

### Methods

<h4 id="messagesmessage-__construct"><code>__construct()</code></h4>

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

<h4 id="messagesmessage-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Magic __toString method returns verbose message

<h4 id="messagesmessage-getcode"><code>getCode()</code></h4>

```php
public function getCode(): int;
```

<h4 id="messagesmessage-getfield"><code>getField()</code></h4>

```php
public function getField(): string;
```

<h4 id="messagesmessage-getmessage"><code>getMessage()</code></h4>

```php
public function getMessage(): string;
```

<h4 id="messagesmessage-getmetadata"><code>getMetaData()</code></h4>

```php
public function getMetaData(): array;
```

<h4 id="messagesmessage-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

<h4 id="messagesmessage-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

Serializes the object for json_encode

<h4 id="messagesmessage-setcode"><code>setCode()</code></h4>

```php
public function setCode( int $code ): MessageInterface;
```

Sets code for the message

<h4 id="messagesmessage-setfield"><code>setField()</code></h4>

```php
public function setField( string $field ): MessageInterface;
```

Sets field name related to message

<h4 id="messagesmessage-setmessage"><code>setMessage()</code></h4>

```php
public function setMessage( string $message ): MessageInterface;
```

Sets verbose message

<h4 id="messagesmessage-setmetadata"><code>setMetaData()</code></h4>

```php
public function setMetaData( array $metaData ): MessageInterface;
```

Sets message metadata

<h4 id="messagesmessage-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): MessageInterface;
```

Sets message type


## Messages\MessageInterface

Interface

Interface for Phalcon\Messages\Message

- **`Phalcon\Messages\MessageInterface`**

`Phalcon\Contracts\Messages\MessagesTypes`

### Method Summary

- `public __toString(): string` — Magic \_\_toString method returns verbose message

- `public getCode(): int` — Returns the message code related to this message

- `public getField(): string` — Returns field name related to message

- `public getMessage(): string` — Returns verbose message

- `public getMetaData(): array` — Returns message metadata

- `public getType(): string` — Returns message type

- `public setCode(int $code): MessageInterface` — Sets code for the message

- `public setField(string $field): MessageInterface` — Sets field name related to message

- `public setMessage(string $message): MessageInterface` — Sets verbose message

- `public setMetaData(array $metaData): MessageInterface` — Sets message metadata

- `public setType(string $type): MessageInterface` — Sets message type

### Methods

<h4 id="messagesmessageinterface-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Magic __toString method returns verbose message

<h4 id="messagesmessageinterface-getcode"><code>getCode()</code></h4>

```php
public function getCode(): int;
```

Returns the message code related to this message

<h4 id="messagesmessageinterface-getfield"><code>getField()</code></h4>

```php
public function getField(): string;
```

Returns field name related to message

<h4 id="messagesmessageinterface-getmessage"><code>getMessage()</code></h4>

```php
public function getMessage(): string;
```

Returns verbose message

<h4 id="messagesmessageinterface-getmetadata"><code>getMetaData()</code></h4>

```php
public function getMetaData(): array;
```

Returns message metadata

<h4 id="messagesmessageinterface-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Returns message type

<h4 id="messagesmessageinterface-setcode"><code>setCode()</code></h4>

```php
public function setCode( int $code ): MessageInterface;
```

Sets code for the message

<h4 id="messagesmessageinterface-setfield"><code>setField()</code></h4>

```php
public function setField( string $field ): MessageInterface;
```

Sets field name related to message

<h4 id="messagesmessageinterface-setmessage"><code>setMessage()</code></h4>

```php
public function setMessage( string $message ): MessageInterface;
```

Sets verbose message

<h4 id="messagesmessageinterface-setmetadata"><code>setMetaData()</code></h4>

```php
public function setMetaData( array $metaData ): MessageInterface;
```

Sets message metadata

<h4 id="messagesmessageinterface-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): MessageInterface;
```

Sets message type


## Messages\Messages

Class

Represents a collection of messages

Messages are stored and iterated by integer position. An entry added under a
string key through the ArrayAccess interface (for example
`$messages["database"] = $message`) stays reachable by that offset but is not
visited during iteration (`foreach`), which walks the integer sequence only.
Use the append methods (`appendMessage()` / `appendMessages()`) when entries
must take part in iteration.

- **`Phalcon\Messages\Messages`** - implements [`Phalcon\Contracts\Messages\Messages`](/5.22/api/phalcon_contracts/#contractsmessagesmessages), `\JsonSerializable`

`Iterator` · `JsonSerializable` · `Phalcon\Contracts\Messages\Messages` · `Phalcon\Contracts\Messages\MessagesTypes` · `Phalcon\Messages\Exceptions\MessagesNotIterable` · `Phalcon\Messages\Traits\MessagesHelperTrait` · `Traversable`

### Method Summary

- `public __construct(array $messages = [])` — Phalcon\Messages\Messages constructor

- `public appendMessage(MessageInterface $message): void` — Appends a message to the collection

- `public appendMessages(mixed $messages)` — Appends an array of messages to the collection

- `public filter(string $fieldName): array` — Filters the message collection by field name

- `public jsonSerialize(): array` — Returns serialized message objects as array for json\_encode. Calls

### Methods

<h4 id="messagesmessages-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $messages = [] );
```

Phalcon\Messages\Messages constructor

<h4 id="messagesmessages-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): void;
```

Appends a message to the collection

```php
$messages->appendMessage(
    new \Phalcon\Messages\Message("This is a message")
);
```

<h4 id="messagesmessages-appendmessages"><code>appendMessages()</code></h4>

```php
public function appendMessages( mixed $messages );
```

Appends an array of messages to the collection

```php
$messages->appendMessages($messagesArray);
```

Accepts an array of MessageInterface objects or an Iterator yielding
them. The parameter stays untyped so that a non-iterable argument
reaches the guard below and raises MessagesNotIterable rather than a
TypeError.

<h4 id="messagesmessages-filter"><code>filter()</code></h4>

```php
public function filter( string $fieldName ): array;
```

Filters the message collection by field name

<h4 id="messagesmessages-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

Returns serialized message objects as array for json_encode. Calls
jsonSerialize on each object if present

```php
$data = $messages->jsonSerialize();
echo json_encode($data);
```


## Messages\Traits\MessagesHelperTrait

Trait

Trait MessagesHelperTrait

- **`Phalcon\Messages\Traits\MessagesHelperTrait`**

`Phalcon\Contracts\Messages\MessagesTypes` · `Phalcon\Messages\Exceptions\MessageNotObject` · `Phalcon\Messages\MessageInterface`

[`Phalcon\Messages\Messages`](#messagesmessages)

### Method Summary

- `public count(): int` — Returns the number of messages in the list

- `public current(): MessageInterface` — Returns the current message in the iterator

- `public key(): int` — Returns the current position/key in the iterator

- `public next(): void` — Moves the internal iteration pointer to the next position

- `public offsetExists(mixed $offset): bool` — Checks if an index exists

- `public offsetGet(mixed $offset): mixed` — Gets an attribute a message using the array syntax

- `public offsetSet(mixed $offset, mixed $value): void` — Sets an attribute using the array-syntax

- `public offsetUnset(mixed $offset): void` — Removes a message from the list

- `public rewind(): void` — Rewinds the internal iterator

- `public valid(): bool` — Check if the current message in the iterator is valid

### Properties

- `protected messages_list $messages = []`

- `protected int $position = 0`

### Methods

<h4 id="messagestraitsmessageshelpertrait-count"><code>count()</code></h4>

```php
public function count(): int;
```

Returns the number of messages in the list

<h4 id="messagestraitsmessageshelpertrait-current"><code>current()</code></h4>

```php
public function current(): MessageInterface;
```

Returns the current message in the iterator

<h4 id="messagestraitsmessageshelpertrait-key"><code>key()</code></h4>

```php
public function key(): int;
```

Returns the current position/key in the iterator

<h4 id="messagestraitsmessageshelpertrait-next"><code>next()</code></h4>

```php
public function next(): void;
```

Moves the internal iteration pointer to the next position

<h4 id="messagestraitsmessageshelpertrait-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

Checks if an index exists

```php
var_dump(
    isset($message["database"])
);
```

<h4 id="messagestraitsmessageshelpertrait-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $offset ): mixed;
```

Gets an attribute a message using the array syntax

```php
print_r(
    $messages[0]
);
```

<h4 id="messagestraitsmessageshelpertrait-offsetset"><code>offsetSet()</code></h4>

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

<h4 id="messagestraitsmessageshelpertrait-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Removes a message from the list

```php
unset($message["database"]);
```

<h4 id="messagestraitsmessageshelpertrait-rewind"><code>rewind()</code></h4>

```php
public function rewind(): void;
```

Rewinds the internal iterator

<h4 id="messagestraitsmessageshelpertrait-valid"><code>valid()</code></h4>

```php
public function valid(): bool;
```

Check if the current message in the iterator is valid

Source: https://docs.phalcon.io/5.22/api/phalcon_messages/index.mdx
