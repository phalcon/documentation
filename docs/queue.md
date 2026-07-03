# Queue Component

- - -

## Overview

The `Phalcon\Queue` namespace provides a first-class queue / messaging component with a pluggable adapter layer. Its interface surface is modeled on the JMS-style [queue-interop][queue-interop] contract set, so producers, consumers and messages are addressed through small, transport-agnostic interfaces. Application code is written once against those interfaces and the transport is swapped through configuration.

A curated set of built-in adapters (Memory, Stream, Redis and Beanstalk) lets you start without any external transport, and the factories follow the same conventions as [Phalcon\Storage][storage] and [Phalcon\Cache][cache] so the shape is immediately familiar.

The moving parts:

- **Context** - a session/connection to a transport; the factory for everything else.
- **Destination** - a `Queue` (point-to-point) or a `Topic` (publish/subscribe).
- **Producer** - sends messages to a destination.
- **Consumer** - receives messages from a queue.
- **Message** - the payload plus its properties, headers and metadata.
- **Processor** - your handler for a single message; returns `ACK`, `REJECT` or `REQUEUE`.

## Quick start

A queue worker is the main use case: enqueue messages, then run a long-running process that pulls them and hands each to your code. Write a `Processor` for the work, bind it to a queue, and run it inside a `Worker`.

A processor handles one message and returns `ACK`, `REJECT` or `REQUEUE`:

```php
<?php

use Phalcon\Contracts\Queue\Context;
use Phalcon\Contracts\Queue\Message;
use Phalcon\Contracts\Queue\Processor;

class SendEmailProcessor implements Processor
{
    public function process(Message $message, Context $context): string
    {
        $payload = json_decode($message->getBody(), true);

        if (!isset($payload['to'])) {
            return Processor::REJECT;   // malformed - drop it, no redelivery
        }

        try {
            // ... the real work ...
            // $this->mailer->send($payload['to'], $payload['subject'], $payload['body']);
        } catch (\Throwable $exception) {
            return Processor::REQUEUE;  // transient failure - put it back
        }

        return Processor::ACK;          // handled - remove it
    }
}
```

A worker drains the queue, calling the processor for each message and stopping on a lifetime bound or a signal:

```php
<?php

use Phalcon\Queue\Adapter\Redis\RedisConnectionFactory;
use Phalcon\Queue\Consumer\QueueConsumer;
use Phalcon\Queue\Consumer\Worker;
use Phalcon\Queue\Consumer\WorkerOptions;

// Build the Redis-backed context.
$context = (new RedisConnectionFactory([
    'host'   => '127.0.0.1',
    'port'   => 6379,
    'prefix' => 'phalcon_queue:',
]))->createContext();

// Bind each queue to the processor that drains it.
$consumer = new QueueConsumer($context);
$consumer->bind(
    $context->createQueue('emails'),
    new SendEmailProcessor()
);

// Stop after 1000 messages, one hour, or 128 MB - whichever comes first.
$options = new WorkerOptions(
    1000, // maxMessages
    3600, // maxSeconds
    128,  // maxMemory (MB)
    30    // jitter (seconds)
);

$processed = (new Worker($consumer, $options))->run();

echo $processed . ' messages processed' . PHP_EOL;
```

Enqueue work from anywhere in the application:

```php
<?php

use Phalcon\Queue\Adapter\Redis\RedisConnectionFactory;

$context = (new RedisConnectionFactory(['host' => '127.0.0.1']))->createContext();
$queue   = $context->createQueue('emails');

$context->createProducer()->send(
    $queue,
    $context->createMessage(
        json_encode([
            'to'      => 'someone@example.com',
            'subject' => 'Welcome',
            'body'    => 'Thanks for signing up.',
        ])
    )
);
```

The example uses Redis; change the adapter to switch transport (see [Adapters](#adapters)), or use the Memory adapter to run it with no external services. [Consumer](#consumer) documents the processor semantics, worker lifetime options, scaling, the CLI task and events.

## Contracts

The contracts live in the `Phalcon\Contracts\Queue` namespace and are pure interfaces.

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

`Phalcon\Contracts\Queue\Processor` exposes three constants that a processor returns to tell the consumer what to do with the message:

| Constant             | Value             | Meaning                              |
|----------------------|-------------------|--------------------------------------|
| `Processor::ACK`     | `enqueue.ack`     | The message was handled; remove it.  |
| `Processor::REJECT`  | `enqueue.reject`  | Discard the message.                 |
| `Processor::REQUEUE` | `enqueue.requeue` | Put the message back for redelivery. |

The literal values are kept compatible with the wider interop ecosystem.

## Exceptions

Every queue exception implements `Phalcon\Queue\Exceptions\QueueThrowable`, so all queue errors can be caught with a single type. A concrete `Phalcon\Queue\Exceptions\Exception` is the base for the typed exceptions below.

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

Transport connection failures - an unreachable server, a failed authentication, or a database index that cannot be selected - are surfaced as `Exception`, so they are caught through `QueueThrowable` like every other queue error.

## Adapters

Adapters live under `Phalcon\Queue\Adapter`. Every adapter ships the same set of classes (`ConnectionFactory`, `Context`, `Producer`, `Consumer`, `Message`, `SubscriptionConsumer`). The `Queue` and `Topic` destinations are the shared `Phalcon\Queue\Adapter\GenericQueue` and `Phalcon\Queue\Adapter\GenericTopic`, returned by every `Context` from `createQueue()` and `createTopic()`. Shared behavior lives in the `Phalcon\Queue\Adapter\Abstract*` base classes (`AbstractConsumer`, `AbstractMessage` and `AbstractSubscriptionConsumer`).

The server-backed adapters (Stream, Redis and Beanstalk) serialize the message envelope - body, properties and headers - to the transport. On receive the payload is decoded without allowing object instantiation, so a stored entry cannot be used to reconstruct arbitrary PHP objects.

### Memory

`Phalcon\Queue\Adapter\Memory` is a pure in-process, FIFO transport. The named queues are held by the `MemoryContext`, so a producer and a consumer created from the *same* context share them. There is no persistence and no cross-process visibility, which makes it ideal for tests and for in-process fan-out where the producer and consumer run in the same PHP process.

Because it needs no external services, it runs the producer and consumer in the same process - useful for tests and for seeing the raw API end to end:

```php
<?php

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

The Memory transport delivers immediately, so it does not support a delivery delay, message priority or a time to live. Calling the matching `Producer` setter with a non-null value throws the relevant exception (`DeliveryDelayNotSupportedException`, `PriorityNotSupportedException` or `TimeToLiveNotSupportedException`).

### Stream

`Phalcon\Queue\Adapter\Stream` stores each queue as an append-only file under a configurable directory, using `flock` for cross-process safety. Unlike Memory it survives process restarts and can be shared between processes on the same host. Each message is one line of `base64(serialize(...))`; produces use an `FILE_APPEND | LOCK_EX` write and consumes take the first line under an exclusive lock.

```php
use Phalcon\Queue\Adapter\Stream\StreamConnectionFactory;

$context = (new StreamConnectionFactory([
    'storageDir'   => '/var/data/queues',
    'pollInterval' => 200,
]))->createContext();
```

Options: `storageDir` (defaults to the system temp directory) and `pollInterval` (milliseconds between poll passes, applied to both the consumer and the subscription consumer, default `200`). Like Memory, the Stream transport does not support delivery delay, priority or time to live.

!!! warning "NOTE"

    `flock` is not reliable on NFS; use the Redis adapter for cross-host setups.

### Redis

`Phalcon\Queue\Adapter\Redis` is a server-backed transport built on the `redis` extension. Each queue is a Redis list - messages are `LPUSH`ed on send and `RPOP`/`BRPOP`ed on receive, giving FIFO delivery that is shared across every process and host that connects to the same server.

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

Options: `host` (default `127.0.0.1`), `port` (default `6379`), `timeout` (connection timeout in seconds), `persistent`/`persistentId` (use a persistent connection), `auth` (a password, or `[user, password]` for ACL auth), `index` (database to `SELECT`), `prefix` (key prefix for every queue, default `phalcon_queue:`) and `pollInterval` (milliseconds between subscription poll passes, default `200`).

Unlike Memory and Stream, the Redis transport **supports a delivery delay**. A delayed message is parked in a companion sorted set (`<prefix><queue>:delayed`) scored by its due time, and is promoted into the queue list once due:

```php
$context->createProducer()
    ->setDeliveryDelay(5000) // milliseconds
    ->send($queue, $context->createMessage('later'));
```

The consumer's blocking `receive()` uses the native `BRPOP` (waking once a second to promote due delayed messages) instead of polling. Message priority and time to live are not supported - the matching setters throw `PriorityNotSupportedException` and `TimeToLiveNotSupportedException`.

### Beanstalk

`Phalcon\Queue\Adapter\Beanstalk` talks to a [Beanstalkd][beanstalkd] server over a dependency-free socket client (no extension required). A queue maps to a Beanstalkd *tube*; producers `put` jobs on it and consumers `reserve` them.

```php
use Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory;

$context = (new BeanstalkConnectionFactory([
    'host' => '127.0.0.1',
    'port' => 11300,
    'ttr'  => 86400,
]))->createContext();
```

Options: `host` (default `127.0.0.1`), `port` (default `11300`), `persistent` (use a persistent socket), `ttr` (default time-to-run in seconds for every job, default `86400`) and `pollInterval` (milliseconds between subscription poll passes, default `200`).

Beanstalk supports both a **delivery delay** (rounded down to whole seconds - Beanstalkd's granularity) and **message priority**; it has no message expiry, so time to live is not supported and `setTimeToLive()` throws `TimeToLiveNotSupportedException`.

A reserved job is not removed until it is acknowledged: `acknowledge()` deletes it, while `reject()` releases it back to the tube (with requeue) or buries it. Because Beanstalkd gives every reserved job a time-to-run window, the consumer implements `Phalcon\Contracts\Queue\VisibilityAware` and exposes `touch()` to extend that window for long-running work:

```php
$consumer = $context->createConsumer($queue);
$message  = $consumer->receive();

if ($consumer instanceof \Phalcon\Contracts\Queue\VisibilityAware) {
    $consumer->touch($message); // I need more time
}

$consumer->acknowledge($message);
```

The socket client reconnects automatically when the connection to the server is lost. A reconnect replays the session state the consumer established, so the tube it watches - and the tube a producer uses - is restored and consumption continues from the correct tube without any application change.

## Consumer

The [Quick start](#quick-start) shows the full worker flow end to end. This section documents each piece: the `Processor` you write, the `QueueConsumer` that dispatches to it, and the `Worker` that runs the loop. The low-level `Consumer` - driving the loop yourself, as the [Memory](#memory) example does - remains available when you do not want the runner.

### Processor

A `Phalcon\Contracts\Queue\Processor` is the unit of work for a single message. Its `process()` method returns one of the [`ACK` / `REJECT` / `REQUEUE`](#processor-return-values) constants, which the runner turns into an acknowledge, a discard, or a requeue. A processor that throws is caught and the message is rejected. The Quick start has a complete `Processor`.

### QueueConsumer

`Phalcon\Queue\Consumer\QueueConsumer` binds one or more queues to their processors and drives the consumption loop. It is built from a `Context`, and `bind()` registers a queue/processor pair. On each pass it reads the next message from every bound queue and calls the processor; the return value becomes an `acknowledge()`, a `reject()` (discard), or a `reject()` with requeue. A processor that throws is caught and the message is rejected.

`consume()` runs the loop until a timeout in milliseconds (`0` blocks forever). For a process with lifetime limits and signal handling, use a `Worker` instead.

### Worker

`Phalcon\Queue\Consumer\Worker` is the operational shell around a `QueueConsumer`. It runs the loop until a lifetime bound trips, then returns the number of messages processed. With `ext-pcntl` available it installs handlers for `SIGTERM`, `SIGINT` and `SIGQUIT` and stops gracefully - the message in flight always finishes before the loop ends.

The bounds come from `Phalcon\Queue\Consumer\WorkerOptions`; a value of `0` means "no limit". The worker stops on whichever trips first:

- `maxMessages` - maximum number of messages to process
- `maxSeconds` - maximum run time in seconds
- `maxMemory` - memory ceiling in megabytes
- `jitter` - seconds added at random to `maxSeconds`, so a pool of workers does not restart in lockstep

### Running multiple workers

One `Worker` is one process. To process a queue in parallel, run the worker script several times under a process supervisor (systemd, Supervisor, or a container orchestrator). Every worker reads from the same Redis queue as a competing consumer, so each message is delivered to exactly one of them. The lifetime bounds let each process exit periodically to release memory, and `jitter` staggers those restarts so the pool does not cycle at once.

### Command-line consumer

`Phalcon\Queue\Cli\ConsumerTask` runs a worker from the Phalcon CLI. It reads the context from the `queueFactory` service and the `config->queue` configuration, binds the queue named in the first argument to the processor service named in the second, and runs a `Worker` whose bounds come from the command options. It is not registered automatically; add it to your own `Phalcon\Cli\Console`.

```bash
<task> emails sendEmailProcessor \
    --max-messages=1000 --max-time=3600 --max-memory=128 --jitter=30
```

### Events

`QueueConsumer` fires lifecycle events through the events manager, named by the constants on `Phalcon\Queue\Consumer\Events`: `queue:beforeStart`, `queue:beforeReceive`, `queue:afterReceive`, `queue:beforeProcess`, `queue:afterProcess`, `queue:processorException` and `queue:afterEnd`. Attach an events manager to add logging or metrics. Returning `false` from `queue:beforeStart` prevents the run from starting; returning `false` from `queue:beforeProcess` skips the current message.

## Factories

The factories follow the same conventions as `Phalcon\Storage` and `Phalcon\Cache`.

### AdapterFactory

`Phalcon\Queue\AdapterFactory` maps an adapter name to its `ConnectionFactory`:

```php
use Phalcon\Queue\AdapterFactory;

$adapterFactory    = new AdapterFactory();
$connectionFactory = $adapterFactory->newInstance('memory');
$context           = $connectionFactory->createContext();
```

### QueueFactory

`Phalcon\Queue\QueueFactory` builds a `Context` directly from the standard Phalcon config shape (`adapter` plus an optional `options` array). It accepts an array or a `Phalcon\Config\Config` object:

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

`Phalcon\Di\FactoryDefault` and `Phalcon\Di\FactoryDefault\Cli` both register a shared `queueFactory` service, so a context can be built from your application config:

```php
$context = $di->get('queueFactory')->load(
    $di->get('config')->queue
);
```

If you prefer a ready-built context available directly as a service, register one in your bootstrap:

```php
$di->setShared('queue', function () use ($di) {
    return $di->get('queueFactory')->load($di->get('config')->queue);
});
```

[beanstalkd]: https://beanstalkd.github.io/
[cache]: cache.md
[queue-interop]: https://github.com/queue-interop/queue-interop
[storage]: storage.md
