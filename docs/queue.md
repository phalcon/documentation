# Queue Component

- - -

!!! info "NOTE"

    This component is under active development. The contracts, exception
    hierarchy, factories and the **Memory**, **Stream**, **Redis** and
    **Beanstalk** adapters are available now; the consumer runner is delivered
    in a later phase and is noted as such.

## Overview

The `Phalcon\Queue` namespace provides a first-class queue / messaging
component with a pluggable adapter layer. Its interface surface is modeled
on the JMS-style [queue-interop][queue-interop] contract set, so producers,
consumers and messages are addressed through small, transport-agnostic
interfaces. Application code is written once against those interfaces and the
transport is swapped through configuration.

A curated set of built-in adapters (Memory, Stream, Redis and Beanstalk) lets
you start without any external transport, and the factories follow the same
conventions as [Phalcon\Storage][storage] and [Phalcon\Cache][cache] so the
shape is immediately familiar.

The moving parts:

- **Context** - a session/connection to a transport; the factory for
  everything else.
- **Destination** - a `Queue` (point-to-point) or a `Topic` (publish/subscribe).
- **Producer** - sends messages to a destination.
- **Consumer** - receives messages from a queue.
- **Message** - the payload plus its properties, headers and metadata.
- **Processor** - your handler for a single message; returns `ACK`, `REJECT`
  or `REQUEUE`.

## Quick start

The Memory adapter needs no external services, so it is the quickest way to
see the component end to end - produce a message and consume it in the same
process:

```php
use Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory;

$context = (new MemoryConnectionFactory())->createContext();
$queue   = $context->createQueue('emails');

// produce
$context->createProducer()->send(
    $queue,
    $context->createMessage('{"to":"someone@example.com"}')
);

// consume
$consumer = $context->createConsumer($queue);
$message  = $consumer->receiveNoWait();

if ($message !== null) {
    // ... handle $message->getBody() ...
    $consumer->acknowledge($message);
}
```

The same code runs against any adapter - only the way you build the
`$context` changes (see [Factories](#factories)).

## Contracts

The contracts live in the `Phalcon\Contracts\Queue` namespace and are pure
interfaces.

| Interface              | Purpose                                                                           |
|------------------------|-----------------------------------------------------------------------------------|
| `ConnectionFactory`    | Builds a `Context`; the entry point of every adapter.                             |
| `Context`              | A transport session; factory for messages, destinations, producers and consumers. |
| `Destination`          | Marker for a message destination (`Queue` or `Topic`).                            |
| `Queue`                | A point-to-point destination (`getQueueName()`).                                  |
| `Topic`                | A publish/subscribe destination (`getTopicName()`).                               |
| `Message`              | Body, application properties, transport headers and messaging metadata.           |
| `Producer`             | Sends messages; supports delivery delay, priority and time to live.               |
| `Consumer`             | Receives, acknowledges and rejects messages from a single queue.                  |
| `SubscriptionConsumer` | Consumes from several queues at once via callbacks.                               |
| `Processor`            | Handles one message; returns `ACK` / `REJECT` / `REQUEUE`.                        |
| `VisibilityAware`      | Marker for consumers that support a visibility timeout.                           |

### Processor return values

`Phalcon\Contracts\Queue\Processor` exposes three constants that a processor
returns to tell the consumer what to do with the message:

| Constant             | Value             | Meaning                              |
|----------------------|-------------------|--------------------------------------|
| `Processor::ACK`     | `enqueue.ack`     | The message was handled; remove it.  |
| `Processor::REJECT`  | `enqueue.reject`  | Discard the message.                 |
| `Processor::REQUEUE` | `enqueue.requeue` | Put the message back for redelivery. |

The literal values are kept compatible with the wider interop ecosystem.

## Exceptions

Every queue exception implements `Phalcon\Queue\Exceptions\QueueThrowable`, so
all queue errors can be caught with a single type. A concrete
`Phalcon\Queue\Exceptions\Exception` is the base for the typed exceptions
below.

| Exception                                   | Thrown when…                                           |
|---------------------------------------------|--------------------------------------------------------|
| `Exception`                                 | Generic queue error; base of all the others.           |
| `InvalidDestinationException`               | A destination is not valid for the operation.          |
| `InvalidMessageException`                   | A message is not valid for the operation.              |
| `DeliveryDelayNotSupportedException`        | The transport does not support a delivery delay.       |
| `PriorityNotSupportedException`             | The transport does not support message priority.       |
| `PurgeQueueNotSupportedException`           | The transport does not support purging a queue.        |
| `SubscriptionConsumerNotSupportedException` | The transport does not support subscription consumers. |
| `TemporaryQueueNotSupportedException`       | The transport does not support temporary queues.       |
| `TimeToLiveNotSupportedException`           | The transport does not support a message time to live. |

Transport connection failures - an unreachable server, a failed authentication,
or a database index that cannot be selected - are surfaced as `Exception`, so
they are caught through `QueueThrowable` like every other queue error.

## Adapters

Adapters live under `Phalcon\Queue\Adapter`. Every adapter ships the same set
of classes (`ConnectionFactory`, `Context`, `Producer`, `Consumer`, `Message`,
`SubscriptionConsumer`). The `Queue` and `Topic` destinations are the shared
`Phalcon\Queue\Adapter\GenericQueue` and `Phalcon\Queue\Adapter\GenericTopic`,
returned by every `Context` from `createQueue()` and `createTopic()`. Shared
behavior lives in the `Phalcon\Queue\Adapter\Abstract*` base classes
(`AbstractConsumer`, `AbstractMessage` and `AbstractSubscriptionConsumer`).

The server-backed adapters (Stream, Redis and Beanstalk) serialize the message
envelope - body, properties and headers - to the transport. On receive the
payload is decoded without allowing object instantiation, so a stored entry
cannot be used to reconstruct arbitrary PHP objects.

### Memory

`Phalcon\Queue\Adapter\Memory` is a pure in-process, FIFO transport. The named
queues are held by the `MemoryContext`, so a producer and a consumer created
from the *same* context share them. There is no persistence and no
cross-process visibility, which makes it ideal for tests and for in-process
fan-out where the producer and consumer run in the same PHP process.

Build a context directly:

```php
use Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory;

$context = (new MemoryConnectionFactory())->createContext();
```

The Memory transport delivers immediately, so it does not support a delivery
delay, message priority or a time to live. Calling the matching `Producer`
setter with a non-null value throws the relevant exception
(`DeliveryDelayNotSupportedException`, `PriorityNotSupportedException` or
`TimeToLiveNotSupportedException`).

### Stream

`Phalcon\Queue\Adapter\Stream` stores each queue as an append-only file under a
configurable directory, using `flock` for cross-process safety. Unlike Memory
it survives process restarts and can be shared between processes on the same
host. Each message is one line of `base64(serialize(...))`; produces use an
`FILE_APPEND | LOCK_EX` write and consumes take the first line under an
exclusive lock.

```php
use Phalcon\Queue\Adapter\Stream\StreamConnectionFactory;

$context = (new StreamConnectionFactory([
    'storageDir'   => '/var/data/queues',
    'pollInterval' => 200,
]))->createContext();
```

Options: `storageDir` (defaults to the system temp directory) and
`pollInterval` (milliseconds between poll passes, applied to both the consumer
and the subscription consumer, default `200`).
Like Memory, the Stream transport does not support delivery delay, priority or
time to live.

!!! warning "NOTE"

    `flock` is not reliable on NFS; use the Redis adapter for cross-host
    setups.

### Redis

`Phalcon\Queue\Adapter\Redis` is a server-backed transport built on the
`redis` extension. Each queue is a Redis list - messages are `LPUSH`ed on send
and `RPOP`/`BRPOP`ed on receive, giving FIFO delivery that is shared across
every process and host that connects to the same server.

```php
use Phalcon\Queue\Adapter\Redis\RedisConnectionFactory;

$context = (new RedisConnectionFactory([
    'host'   => '127.0.0.1',
    'port'   => 6379,
    'index'  => 0,
    'auth'   => 'secret',
    'prefix' => 'phalcon_queue:',
]))->createContext();
```

Options: `host` (default `127.0.0.1`), `port` (default `6379`), `timeout`
(connection timeout in seconds), `persistent`/`persistentId` (use a persistent
connection), `auth` (a password, or `[user, password]` for ACL auth), `index`
(database to `SELECT`), `prefix` (key prefix for every queue, default
`phalcon_queue:`) and `pollInterval` (milliseconds between subscription poll
passes, default `200`).

Unlike Memory and Stream, the Redis transport **supports a delivery delay**.
A delayed message is parked in a companion sorted set (`<prefix><queue>:delayed`)
scored by its due time, and is promoted into the queue list once due:

```php
$context->createProducer()
    ->setDeliveryDelay(5000) // milliseconds
    ->send($queue, $context->createMessage('later'));
```

The consumer's blocking `receive()` uses the native `BRPOP` (waking once a
second to promote due delayed messages) instead of polling. Message priority
and time to live are not supported - the matching setters throw
`PriorityNotSupportedException` and `TimeToLiveNotSupportedException`.

### Beanstalk

`Phalcon\Queue\Adapter\Beanstalk` talks to a [Beanstalkd][beanstalkd] server
over a dependency-free socket client (no extension required). A queue maps to a
Beanstalkd *tube*; producers `put` jobs on it and consumers `reserve` them.

```php
use Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory;

$context = (new BeanstalkConnectionFactory([
    'host' => '127.0.0.1',
    'port' => 11300,
    'ttr'  => 86400,
]))->createContext();
```

Options: `host` (default `127.0.0.1`), `port` (default `11300`), `persistent`
(use a persistent socket), `ttr` (default time-to-run in seconds for every job,
default `86400`) and `pollInterval` (milliseconds between subscription poll
passes, default `200`).

Beanstalk supports both a **delivery delay** (rounded down to whole seconds -
Beanstalkd's granularity) and **message priority**; it has no message expiry,
so time to live is not supported and `setTimeToLive()` throws
`TimeToLiveNotSupportedException`.

A reserved job is not removed until it is acknowledged: `acknowledge()` deletes
it, while `reject()` releases it back to the tube (with requeue) or buries it.
Because Beanstalkd gives every reserved job a time-to-run window, the consumer
implements `Phalcon\Contracts\Queue\VisibilityAware` and exposes `touch()` to
extend that window for long-running work:

```php
$consumer = $context->createConsumer($queue);
$message  = $consumer->receive();

if ($consumer instanceof \Phalcon\Contracts\Queue\VisibilityAware) {
    $consumer->touch($message); // I need more time
}

$consumer->acknowledge($message);
```

The socket client reconnects automatically when the connection to the server is
lost. A reconnect replays the session state the consumer established, so the
tube it watches - and the tube a producer uses - is restored and consumption
continues from the correct tube without any application change.

## Consumer

!!! info "NOTE"

    The consumption runner (`QueueConsumer`), the long-running `Worker` (with
    bounded lifetime and graceful shutdown) and the CLI consumer task are
    documented when they ship.

## Factories

The factories follow the same conventions as `Phalcon\Storage` and
`Phalcon\Cache`.

### AdapterFactory

`Phalcon\Queue\AdapterFactory` maps an adapter name to its `ConnectionFactory`:

```php
use Phalcon\Queue\AdapterFactory;

$adapterFactory    = new AdapterFactory();
$connectionFactory = $adapterFactory->newInstance('memory');
$context           = $connectionFactory->createContext();
```

### QueueFactory

`Phalcon\Queue\QueueFactory` builds a `Context` directly from the standard
Phalcon config shape (`adapter` plus an optional `options` array). It accepts
an array or a `Phalcon\Config\Config` object:

```php
use Phalcon\Queue\QueueFactory;

$factory = new QueueFactory();
$context = $factory->load(
    [
        'adapter' => 'memory',
        'options' => [],
    ]
);
```

### Dependency injection

`Phalcon\Di\FactoryDefault` and `Phalcon\Di\FactoryDefault\Cli` both register
a shared `queueFactory` service, so a context can be built from your
application config:

```php
$context = $di->get('queueFactory')->load(
    $di->get('config')->queue
);
```

If you prefer a ready-built context available directly as a service, register
one in your bootstrap:

```php
$di->setShared('queue', function () use ($di) {
    return $di->get('queueFactory')->load($di->get('config')->queue);
});
```

[queue-interop]: https://github.com/queue-interop/queue-interop
[storage]: storage.md
[cache]: cache.md
[beanstalkd]: https://beanstalkd.github.io/
