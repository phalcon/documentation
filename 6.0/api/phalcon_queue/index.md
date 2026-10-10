---
title: "Phalcon Queue"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Queue

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Queue\AdapterFactory

Class

Maps an adapter name to its ConnectionFactory. Mirrors
Phalcon\Storage\AdapterFactory.

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Queue\AdapterFactory`**

`Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\QueueTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory` · `Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory` · `Phalcon\Queue\Adapter\Redis\RedisConnectionFactory` · `Phalcon\Queue\Adapter\Stream\StreamConnectionFactory` · `Phalcon\Queue\Exceptions\Exception`

### Method Summary

- `public __construct(array $services = [])` — AdapterFactory constructor.

- `public newInstance(string $name, array $options = []): ConnectionFactoryInterface` — Creates a new ConnectionFactory for the named adapter.

- `protected getExceptionClass(): string` — Returns the exception class for the factory

- `protected getServices(): array` — Returns the available adapters.

### Methods

<h4 id="queueadapterfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

<h4 id="queueadapterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    array $options = []
): ConnectionFactoryInterface;
```

Creates a new ConnectionFactory for the named adapter.

<h4 id="queueadapterfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Returns the exception class for the factory

<h4 id="queueadapterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters.


## Queue\Adapter\AbstractConsumer

Abstract

Shared consumer base. Implements the blocking `receive()` as a polling loop
on top of the abstract `receiveNoWait()`; concrete consumers provide the
transport-specific `receiveNoWait`, `acknowledge`, `reject` and `getQueue`.

Transports with a native blocking receive (Redis BRPOP, Beanstalk reserve)
override `receive()` instead of polling.

- **`Phalcon\Queue\Adapter\AbstractConsumer`** - implements [`Phalcon\Contracts\Queue\Consumer`](/6.0/api/phalcon_contracts/#contractsqueueconsumer)
  - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConsumer`](#queueadapterbeanstalkbeanstalkconsumer)
  - [`Phalcon\Queue\Adapter\Memory\MemoryConsumer`](#queueadaptermemorymemoryconsumer)
  - [`Phalcon\Queue\Adapter\Redis\RedisConsumer`](#queueadapterredisredisconsumer)
  - [`Phalcon\Queue\Adapter\Stream\StreamConsumer`](#queueadapterstreamstreamconsumer)

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue`

### Method Summary

- `public acknowledge(MessageInterface $message): void` — Acknowledges the message; the transport may then discard it.

- `public getQueue(): QueueInterface` — Returns the queue this consumer reads from.

- `public receive(int $timeout = 0): MessageInterface|null` — Receives a message, blocking up to timeout milliseconds (0 = block

- `public receiveNoWait(): MessageInterface|null` — Receives a message without blocking, or null when none is ready.

- `public reject(MessageInterface $message, bool $requeue = false): void` — Rejects the message. When requeue is true the transport redelivers it.

- `public setPollInterval(int $pollInterval): void` — Sets the poll interval (in milliseconds) used by `receive()`.

### Properties

- `protected int $pollInterval = 200` — Milliseconds slept between poll attempts.

- `protected QueueInterface $queue` — The queue this consumer reads from.

### Methods

<h4 id="queueadapterabstractconsumer-acknowledge"><code>acknowledge()</code></h4>

```php
abstract public function acknowledge( MessageInterface $message ): void;
```

Acknowledges the message; the transport may then discard it.

<h4 id="queueadapterabstractconsumer-getqueue"><code>getQueue()</code></h4>

```php
public function getQueue(): QueueInterface;
```

Returns the queue this consumer reads from.

<h4 id="queueadapterabstractconsumer-receive"><code>receive()</code></h4>

```php
public function receive( int $timeout = 0 ): MessageInterface|null;
```

Receives a message, blocking up to timeout milliseconds (0 = block
until one is available), by polling `receiveNoWait()` every
`pollInterval` milliseconds. Returns null when none arrives in time.

<h4 id="queueadapterabstractconsumer-receivenowait"><code>receiveNoWait()</code></h4>

```php
abstract public function receiveNoWait(): MessageInterface|null;
```

Receives a message without blocking, or null when none is ready.

<h4 id="queueadapterabstractconsumer-reject"><code>reject()</code></h4>

```php
abstract public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```

Rejects the message. When requeue is true the transport redelivers it.

<h4 id="queueadapterabstractconsumer-setpollinterval"><code>setPollInterval()</code></h4>

```php
public function setPollInterval( int $pollInterval ): void;
```

Sets the poll interval (in milliseconds) used by `receive()`.


## Queue\Adapter\AbstractContext

Abstract

Shared transport-session base. Every transport builds the same destination
value objects (GenericQueue / GenericTopic) and the same uniquely named
temporary queue, so those factories live here once. Concrete contexts
implement the transport-specific factories (consumer, producer, message,
subscription consumer) and the storage operations.

- **`Phalcon\Queue\Adapter\AbstractContext`** - implements [`Phalcon\Contracts\Queue\Context`](/6.0/api/phalcon_contracts/#contractsqueuecontext)
  - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkContext`](#queueadapterbeanstalkbeanstalkcontext)
  - [`Phalcon\Queue\Adapter\Memory\MemoryContext`](#queueadaptermemorymemorycontext)
  - [`Phalcon\Queue\Adapter\Redis\RedisContext`](#queueadapterredisrediscontext)
  - [`Phalcon\Queue\Adapter\Stream\StreamContext`](#queueadapterstreamstreamcontext)

`Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\Topic`

### Method Summary

- `public createQueue(string $queueName): QueueInterface` — Creates a queue destination by name.

- `public createTemporaryQueue(): QueueInterface` — Creates a uniquely named temporary queue.

- `public createTopic(string $topicName): TopicInterface` — Creates a topic destination by name.

### Methods

<h4 id="queueadapterabstractcontext-createqueue"><code>createQueue()</code></h4>

```php
public function createQueue( string $queueName ): QueueInterface;
```

Creates a queue destination by name.

<h4 id="queueadapterabstractcontext-createtemporaryqueue"><code>createTemporaryQueue()</code></h4>

```php
public function createTemporaryQueue(): QueueInterface;
```

Creates a uniquely named temporary queue.

<h4 id="queueadapterabstractcontext-createtopic"><code>createTopic()</code></h4>

```php
public function createTopic( string $topicName ): TopicInterface;
```

Creates a topic destination by name.


## Queue\Adapter\AbstractMessage

Abstract

Shared base for the concrete adapter messages.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Queue\Adapter\Traits\MessageTrait directly instead of extending this.

- **`Phalcon\Queue\Adapter\AbstractMessage`** - implements [`Phalcon\Contracts\Queue\Message`](/6.0/api/phalcon_contracts/#contractsqueuemessage)
  - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkMessage`](#queueadapterbeanstalkbeanstalkmessage)
  - [`Phalcon\Queue\Adapter\Memory\MemoryMessage`](#queueadaptermemorymemorymessage)
  - [`Phalcon\Queue\Adapter\Redis\RedisMessage`](#queueadapterredisredismessage)
  - [`Phalcon\Queue\Adapter\Stream\StreamMessage`](#queueadapterstreamstreammessage)

`Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\Traits\MessageTrait`


## Queue\Adapter\AbstractProducer

Abstract

Shared producer base. Defaults every optional capability (delivery delay,
priority, time to live) to "unsupported": the getter returns null and the
setter throws the matching exception for any non-null value. A concrete
producer overrides only the capabilities its transport actually supports,
and implements `send()`.

- **`Phalcon\Queue\Adapter\AbstractProducer`** - implements [`Phalcon\Contracts\Queue\Producer`](/6.0/api/phalcon_contracts/#contractsqueueproducer)
  - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkProducer`](#queueadapterbeanstalkbeanstalkproducer)
  - [`Phalcon\Queue\Adapter\Memory\MemoryProducer`](#queueadaptermemorymemoryproducer)
  - [`Phalcon\Queue\Adapter\Redis\RedisProducer`](#queueadapterredisredisproducer)
  - [`Phalcon\Queue\Adapter\Stream\StreamProducer`](#queueadapterstreamstreamproducer)

`Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException` · `Phalcon\Queue\Exceptions\PriorityNotSupportedException` · `Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`

### Method Summary

- `public getDeliveryDelay(): int|null`

- `public getPriority(): int|null`

- `public getTimeToLive(): int|null`

- `public send(DestinationInterface $destination, MessageInterface $message): void`

- `public setDeliveryDelay(mixed $deliveryDelay = null): ProducerInterface`

- `public setPriority(mixed $priority = null): ProducerInterface`

- `public setTimeToLive(mixed $timeToLive = null): ProducerInterface`

### Methods

<h4 id="queueadapterabstractproducer-getdeliverydelay"><code>getDeliveryDelay()</code></h4>

```php
public function getDeliveryDelay(): int|null;
```

<h4 id="queueadapterabstractproducer-getpriority"><code>getPriority()</code></h4>

```php
public function getPriority(): int|null;
```

<h4 id="queueadapterabstractproducer-gettimetolive"><code>getTimeToLive()</code></h4>

```php
public function getTimeToLive(): int|null;
```

<h4 id="queueadapterabstractproducer-send"><code>send()</code></h4>

```php
abstract public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```

<h4 id="queueadapterabstractproducer-setdeliverydelay"><code>setDeliveryDelay()</code></h4>

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): ProducerInterface;
```

<h4 id="queueadapterabstractproducer-setpriority"><code>setPriority()</code></h4>

```php
public function setPriority( mixed $priority = null ): ProducerInterface;
```

<h4 id="queueadapterabstractproducer-settimetolive"><code>setTimeToLive()</code></h4>

```php
public function setTimeToLive( mixed $timeToLive = null ): ProducerInterface;
```


## Queue\Adapter\AbstractSubscriptionConsumer

Abstract

Shared subscription-consumer base.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait directly instead of
extending this.

- **`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`** - implements [`Phalcon\Contracts\Queue\SubscriptionConsumer`](/6.0/api/phalcon_contracts/#contractsqueuesubscriptionconsumer)
  - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer`](#queueadapterbeanstalkbeanstalksubscriptionconsumer)
  - [`Phalcon\Queue\Adapter\Memory\MemorySubscriptionConsumer`](#queueadaptermemorymemorysubscriptionconsumer)
  - [`Phalcon\Queue\Adapter\Redis\RedisSubscriptionConsumer`](#queueadapterredisredissubscriptionconsumer)
  - [`Phalcon\Queue\Adapter\Stream\StreamSubscriptionConsumer`](#queueadapterstreamstreamsubscriptionconsumer)

`Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait`


## Queue\Adapter\Beanstalk\BeanstalkConnection

Class

Dependency-free socket client for the Beanstalkd work queue, implementing
the subset of the 1.2 protocol the adapter needs (use/watch/ignore, put,
reserve-with-timeout, delete/release/bury/touch). Recovered and trimmed
from the original Phalcon\Queue\Beanstalk transport.

- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnection`**

`Phalcon\Contracts\Queue\QueueTypes` · `Phalcon\Queue\Exceptions\Exception` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(string $host = "127.0.0.1", int $port = 11300, bool $persistent = false)`

- `public buryJob(string $id, int $priority): bool` — Puts a reserved job into the "buried" state.

- `public connect()` — Opens the socket connection to the Beanstalkd server.

- `public deleteJob(string $id): bool` — Removes a job from the server entirely.

- `public disconnect(): bool` — Closes the connection to the server.

- `public ignoreTube(string $tube): bool` — Removes the named tube from the watch list for the connection.

- `public put(string $data, int $priority, int $delay, int $ttr): false|int` — Puts a job on the queue using the currently used tube. Returns the new

- `public read(int $length = 0): false|string` — Reads a packet from the socket. Verifies the connection is available

- `public readStatus(): array` — Reads the latest status line and splits it into tokens.

- `public releaseJob(string $id, int $priority, int $delay): bool` — Puts a reserved job back into the ready queue.

- `public reserve(int|null $timeout = null): array|null` — Reserves a ready job from a watched tube. A null timeout blocks until a

- `public statsTube(string $tube): array|false` — Returns the Beanstalkd statistics for a tube as an associative array, or

- `public touchJob(string $id): bool` — Extends the time-to-run of a reserved job.

- `public useTube(string $tube): bool` — Changes the tube new jobs are put on. By default this is "default".

- `public watchTube(string $tube): bool` — Adds the named tube to the watch list for the connection.

- `public write(string $data): false|int` — Writes data to the socket, connecting first when needed.

### Properties

- `protected resource|null $connection = null` — Connection resource.

- `protected string $host = "127.0.0.1"`

- `protected bool $persistent = false`

- `protected int $port = 11300`

- `protected string $usedTube = "default"` — Tube currently selected with `use`. A fresh connection uses "default".

- `protected array<string, bool> $watchedTubes = [...]` — Tubes currently on the watch list, keyed by tube name. A fresh
  connection watches "default".

### Methods

<h4 id="queueadapterbeanstalkbeanstalkconnection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $host = "127.0.0.1",
    int $port = 11300,
    bool $persistent = false
);
```

<h4 id="queueadapterbeanstalkbeanstalkconnection-buryjob"><code>buryJob()</code></h4>

```php
public function buryJob(
    string $id,
    int $priority
): bool;
```

Puts a reserved job into the "buried" state.

<h4 id="queueadapterbeanstalkbeanstalkconnection-connect"><code>connect()</code></h4>

```php
public function connect();
```

Opens the socket connection to the Beanstalkd server.

<h4 id="queueadapterbeanstalkbeanstalkconnection-deletejob"><code>deleteJob()</code></h4>

```php
public function deleteJob( string $id ): bool;
```

Removes a job from the server entirely.

<h4 id="queueadapterbeanstalkbeanstalkconnection-disconnect"><code>disconnect()</code></h4>

```php
public function disconnect(): bool;
```

Closes the connection to the server.

<h4 id="queueadapterbeanstalkbeanstalkconnection-ignoretube"><code>ignoreTube()</code></h4>

```php
public function ignoreTube( string $tube ): bool;
```

Removes the named tube from the watch list for the connection.

<h4 id="queueadapterbeanstalkbeanstalkconnection-put"><code>put()</code></h4>

```php
public function put(
    string $data,
    int $priority,
    int $delay,
    int $ttr
): false|int;
```

Puts a job on the queue using the currently used tube. Returns the new
job id, or false when the server did not accept it.

<h4 id="queueadapterbeanstalkbeanstalkconnection-read"><code>read()</code></h4>

```php
public function read( int $length = 0 ): false|string;
```

Reads a packet from the socket. Verifies the connection is available
first.

<h4 id="queueadapterbeanstalkbeanstalkconnection-readstatus"><code>readStatus()</code></h4>

```php
public function readStatus(): array;
```

Reads the latest status line and splits it into tokens.

<h4 id="queueadapterbeanstalkbeanstalkconnection-releasejob"><code>releaseJob()</code></h4>

```php
public function releaseJob(
    string $id,
    int $priority,
    int $delay
): bool;
```

Puts a reserved job back into the ready queue.

<h4 id="queueadapterbeanstalkbeanstalkconnection-reserve"><code>reserve()</code></h4>

```php
public function reserve( int|null $timeout = null ): array|null;
```

Reserves a ready job from a watched tube. A null timeout blocks until a
job is available; otherwise it blocks up to timeout seconds. Returns
[id, body] or null when none is reserved.

<h4 id="queueadapterbeanstalkbeanstalkconnection-statstube"><code>statsTube()</code></h4>

```php
public function statsTube( string $tube ): array|false;
```

Returns the Beanstalkd statistics for a tube as an associative array, or
false when the tube does not exist.

<h4 id="queueadapterbeanstalkbeanstalkconnection-touchjob"><code>touchJob()</code></h4>

```php
public function touchJob( string $id ): bool;
```

Extends the time-to-run of a reserved job.

<h4 id="queueadapterbeanstalkbeanstalkconnection-usetube"><code>useTube()</code></h4>

```php
public function useTube( string $tube ): bool;
```

Changes the tube new jobs are put on. By default this is "default".

<h4 id="queueadapterbeanstalkbeanstalkconnection-watchtube"><code>watchTube()</code></h4>

```php
public function watchTube( string $tube ): bool;
```

Adds the named tube to the watch list for the connection.

<h4 id="queueadapterbeanstalkbeanstalkconnection-write"><code>write()</code></h4>

```php
public function write( string $data ): false|int;
```

Writes data to the socket, connecting first when needed.


## Queue\Adapter\Beanstalk\BeanstalkConnectionFactory

Class

Builds a BeanstalkContext.

Options:
  - host:         server host (default 127.0.0.1).
  - port:         server port (default 11300).
  - persistent:   use a persistent socket (default false).
  - ttr:          default time-to-run in seconds for every job (default 86400).
  - pollInterval: milliseconds between subscription poll passes (default 200).

- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/6.0/api/phalcon_contracts/#contractsqueueconnectionfactory)

`Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\QueueTypes`

### Method Summary

- `public __construct(array $options = [])`

- `public createContext(): ContextInterface`

### Properties

- `protected array $options = []`

### Methods

<h4 id="queueadapterbeanstalkbeanstalkconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="queueadapterbeanstalkbeanstalkconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```


## Queue\Adapter\Beanstalk\BeanstalkConsumer

Class

Receives messages from a single Beanstalkd tube over its own connection.
`receive()` is overridden to use the native blocking reserve. Implements
VisibilityAware: a reserved job has a time-to-run window that `touch()`
extends; acknowledging deletes the job, rejecting releases it (requeue) or
buries it.

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
  - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConsumer`** - implements [`Phalcon\Contracts\Queue\VisibilityAware`](/6.0/api/phalcon_contracts/#contractsqueuevisibilityaware)

`Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\VisibilityAware` · `Phalcon\Queue\Adapter\AbstractConsumer` · `Phalcon\Queue\Adapter\MessageEnvelope`

### Method Summary

- `public __construct(BeanstalkConnection $connection, QueueInterface $queue)`

- `public acknowledge(MessageInterface $message): void`

- `public receive(int $timeout = 0): MessageInterface|null`

- `public receiveNoWait(): MessageInterface|null`

- `public reject(MessageInterface $message, bool $requeue = false): void`

- `public touch(MessageInterface $message): bool` — Extends the time-to-run window of a reserved job (VisibilityAware).

### Constants

- `const int DEFAULT_PRIORITY = 100` — Default Beanstalkd priority used when releasing or burying.

### Properties

- `protected BeanstalkConnection $connection`

### Methods

<h4 id="queueadapterbeanstalkbeanstalkconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    BeanstalkConnection $connection,
    QueueInterface $queue
);
```

<h4 id="queueadapterbeanstalkbeanstalkconsumer-acknowledge"><code>acknowledge()</code></h4>

```php
public function acknowledge( MessageInterface $message ): void;
```

<h4 id="queueadapterbeanstalkbeanstalkconsumer-receive"><code>receive()</code></h4>

```php
public function receive( int $timeout = 0 ): MessageInterface|null;
```

<h4 id="queueadapterbeanstalkbeanstalkconsumer-receivenowait"><code>receiveNoWait()</code></h4>

```php
public function receiveNoWait(): MessageInterface|null;
```

<h4 id="queueadapterbeanstalkbeanstalkconsumer-reject"><code>reject()</code></h4>

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```

<h4 id="queueadapterbeanstalkbeanstalkconsumer-touch"><code>touch()</code></h4>

```php
public function touch( MessageInterface $message ): bool;
```

Extends the time-to-run window of a reserved job (VisibilityAware).


## Queue\Adapter\Beanstalk\BeanstalkContext

Class

Beanstalkd transport session. A queue maps to a Beanstalkd tube. Producers
share the context connection (`use` + `put`); each consumer owns its own
connection, because Beanstalkd only lets the reserving connection delete,
release, bury or touch a job. The destination factories come from
AbstractContext.

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
  - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkContext`** - implements [`Phalcon\Contracts\Queue\Inspectable`](/6.0/api/phalcon_contracts/#contractsqueueinspectable)

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Inspectable` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

### Method Summary

- `public __construct(string $host, int $port, bool $persistent = false, int $ttr = 86400, int $pollInterval = 200)`

- `public close(): void`

- `public createConsumer(DestinationInterface $destination): ConsumerInterface`

- `public createMessage(string $body = "", array $properties = [], array $headers = []): MessageInterface`

- `public createProducer(): ProducerInterface`

- `public createSubscriptionConsumer(): SubscriptionConsumerInterface`

- `public getStats(QueueInterface $queue): array` — Returns the Beanstalkd `stats-tube` fields for the queue's tube as an

- `public getTtr(): int` — Default time-to-run (seconds) for new jobs. Used by BeanstalkProducer.

- `public purgeQueue(QueueInterface $queue): void`

- `public putMessage(string $tube, string $payload, int $priority, int $delay, int $ttr): void` — Puts a serialized payload on a tube via the shared connection.

### Properties

- `protected BeanstalkConnection|null $connection = null` — Shared connection used by producers and purges.

- `protected string $host`

- `protected bool $persistent = false`

- `protected int $pollInterval = 200`

- `protected int $port`

- `protected int $ttr = 86400`

### Methods

<h4 id="queueadapterbeanstalkbeanstalkcontext-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $host,
    int $port,
    bool $persistent = false,
    int $ttr = 86400,
    int $pollInterval = 200
);
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-close"><code>close()</code></h4>

```php
public function close(): void;
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-createconsumer"><code>createConsumer()</code></h4>

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-createmessage"><code>createMessage()</code></h4>

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-createproducer"><code>createProducer()</code></h4>

```php
public function createProducer(): ProducerInterface;
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-createsubscriptionconsumer"><code>createSubscriptionConsumer()</code></h4>

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-getstats"><code>getStats()</code></h4>

```php
public function getStats( QueueInterface $queue ): array;
```

Returns the Beanstalkd `stats-tube` fields for the queue's tube as an
associative array, with numeric values cast to int (the `name` field is
kept as a string). When the tube exists the result is the full Beanstalkd
stats-tube field set (current-jobs-*, total-jobs, the `cmd-*` counters and
tube-configuration fields).

The `current-jobs-*` backlog keys are always present: an unknown tube
(no jobs, not used or watched) has zero backlog, so those keys are
returned at zero. This keeps the backlog shape independent of transient
watcher state. Runs on a fresh short-lived connection (like purgeQueue)
so the read never shares the producer's socket.

<h4 id="queueadapterbeanstalkbeanstalkcontext-getttr"><code>getTtr()</code></h4>

```php
public function getTtr(): int;
```

Default time-to-run (seconds) for new jobs. Used by BeanstalkProducer.

<h4 id="queueadapterbeanstalkbeanstalkcontext-purgequeue"><code>purgeQueue()</code></h4>

```php
public function purgeQueue( QueueInterface $queue ): void;
```

<h4 id="queueadapterbeanstalkbeanstalkcontext-putmessage"><code>putMessage()</code></h4>

```php
public function putMessage(
    string $tube,
    string $payload,
    int $priority,
    int $delay,
    int $ttr
): void;
```

Puts a serialized payload on a tube via the shared connection.
Internal transport API used by BeanstalkProducer.


## Queue\Adapter\Beanstalk\BeanstalkMessage

Class

Beanstalkd-backed message. Carries the reserved job id so the consumer can
delete, release, bury or touch it; all other behavior comes from
MessageTrait.

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
  - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkMessage`**

`Phalcon\Queue\Adapter\AbstractMessage`

### Method Summary

- `public getJobId(): string|null`

- `public setJobId(string $jobId): void`

### Properties

- `protected string|null $jobId = null` — The reserved Beanstalkd job id, or null before it is reserved.

### Methods

<h4 id="queueadapterbeanstalkbeanstalkmessage-getjobid"><code>getJobId()</code></h4>

```php
public function getJobId(): string|null;
```

<h4 id="queueadapterbeanstalkbeanstalkmessage-setjobid"><code>setJobId()</code></h4>

```php
public function setJobId( string $jobId ): void;
```


## Queue\Adapter\Beanstalk\BeanstalkProducer

Class

Sends messages to a Beanstalkd tube. Delivery delay (rounded down to whole
seconds) and message priority are supported natively; Beanstalkd has no
message expiry, so time to live is not (the default from AbstractProducer
rejects it).

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
  - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkProducer`**

`Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

### Method Summary

- `public __construct(BeanstalkContext $context)`

- `public getDeliveryDelay(): int|null`

- `public getPriority(): int|null`

- `public send(DestinationInterface $destination, MessageInterface $message): void`

- `public setDeliveryDelay(mixed $deliveryDelay = null): ProducerInterface`

- `public setPriority(mixed $priority = null): ProducerInterface`

### Constants

- `const int DEFAULT_PRIORITY = 100` — Default Beanstalkd priority (0 = most urgent).

### Properties

- `protected BeanstalkContext $context`

- `protected int|null $deliveryDelay = null` — Delivery delay in milliseconds, or null when not set.

- `protected int|null $priority = null` — Job priority, or null when not set.

### Methods

<h4 id="queueadapterbeanstalkbeanstalkproducer-__construct"><code>__construct()</code></h4>

```php
public function __construct( BeanstalkContext $context );
```

<h4 id="queueadapterbeanstalkbeanstalkproducer-getdeliverydelay"><code>getDeliveryDelay()</code></h4>

```php
public function getDeliveryDelay(): int|null;
```

<h4 id="queueadapterbeanstalkbeanstalkproducer-getpriority"><code>getPriority()</code></h4>

```php
public function getPriority(): int|null;
```

<h4 id="queueadapterbeanstalkbeanstalkproducer-send"><code>send()</code></h4>

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```

<h4 id="queueadapterbeanstalkbeanstalkproducer-setdeliverydelay"><code>setDeliveryDelay()</code></h4>

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): ProducerInterface;
```

<h4 id="queueadapterbeanstalkbeanstalkproducer-setpriority"><code>setPriority()</code></h4>

```php
public function setPriority( mixed $priority = null ): ProducerInterface;
```


## Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer

Class

Consumes from several Beanstalkd tubes at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
  - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer`**

`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

### Method Summary

- `public __construct(BeanstalkContext $context, int $pollInterval = 200)` — The context is retained for transports that may later need it for a

### Properties

- `protected BeanstalkContext $context`

### Methods

<h4 id="queueadapterbeanstalkbeanstalksubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    BeanstalkContext $context,
    int $pollInterval = 200
);
```

The context is retained for transports that may later need it for a
native multi-queue receive; the shared poll loop does not use it.


## Queue\Adapter\GenericQueue

Class

A named queue destination shared by every transport. A queue name is the
only knowledge a destination carries, so the adapters need no transport
specific subclass.

- **`Phalcon\Queue\Adapter\GenericQueue`** - implements [`Phalcon\Contracts\Queue\Queue`](/6.0/api/phalcon_contracts/#contractsqueuequeue)

`Phalcon\Contracts\Queue\Queue`

### Method Summary

- `public __construct(string $queueName)` — GenericQueue constructor.

- `public getQueueName(): string` — Returns the queue name.

### Properties

- `protected string $queueName`

### Methods

<h4 id="queueadaptergenericqueue-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $queueName );
```

GenericQueue constructor.

<h4 id="queueadaptergenericqueue-getqueuename"><code>getQueueName()</code></h4>

```php
public function getQueueName(): string;
```

Returns the queue name.


## Queue\Adapter\GenericTopic

Class

A named topic destination shared by every transport. A topic name is the
only knowledge a destination carries, so the adapters need no transport
specific subclass.

- **`Phalcon\Queue\Adapter\GenericTopic`** - implements [`Phalcon\Contracts\Queue\Topic`](/6.0/api/phalcon_contracts/#contractsqueuetopic)

`Phalcon\Contracts\Queue\Topic`

### Method Summary

- `public __construct(string $topicName)` — GenericTopic constructor.

- `public getTopicName(): string` — Returns the topic name.

### Properties

- `protected string $topicName`

### Methods

<h4 id="queueadaptergenerictopic-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $topicName );
```

GenericTopic constructor.

<h4 id="queueadaptergenerictopic-gettopicname"><code>getTopicName()</code></h4>

```php
public function getTopicName(): string;
```

Returns the topic name.


## Queue\Adapter\Memory\MemoryConnectionFactory

Class

Builds a MemoryContext. The Memory transport takes no options.

- **`Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/6.0/api/phalcon_contracts/#contractsqueueconnectionfactory)

`Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\QueueTypes`

### Method Summary

- `public __construct(array $options = [])` — MemoryConnectionFactory constructor.

- `public createContext(): ContextInterface` — Creates a new in-process context.

### Properties

- `protected array $options = []`

### Methods

<h4 id="queueadaptermemorymemoryconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

MemoryConnectionFactory constructor.

<h4 id="queueadaptermemorymemoryconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```

Creates a new in-process context.


## Queue\Adapter\Memory\MemoryConsumer

Class

Receives messages from a single in-process queue. `receive()` is the
polling loop inherited from AbstractConsumer.

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
  - **`Phalcon\Queue\Adapter\Memory\MemoryConsumer`**

`Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`

### Method Summary

- `public __construct(MemoryContext $context, QueueInterface $queue)` — MemoryConsumer constructor.

- `public acknowledge(MessageInterface $message): void` — No-op: a received message has already been removed from the queue.

- `public receiveNoWait(): MessageInterface|null` — Removes and returns the next message, or null when the queue is empty.

- `public reject(MessageInterface $message, bool $requeue = false): void` — Rejects the message. When requeue is true it is put back on the queue.

### Properties

- `protected MemoryContext $context`

### Methods

<h4 id="queueadaptermemorymemoryconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    MemoryContext $context,
    QueueInterface $queue
);
```

MemoryConsumer constructor.

<h4 id="queueadaptermemorymemoryconsumer-acknowledge"><code>acknowledge()</code></h4>

```php
public function acknowledge( MessageInterface $message ): void;
```

No-op: a received message has already been removed from the queue.

<h4 id="queueadaptermemorymemoryconsumer-receivenowait"><code>receiveNoWait()</code></h4>

```php
public function receiveNoWait(): MessageInterface|null;
```

Removes and returns the next message, or null when the queue is empty.

<h4 id="queueadaptermemorymemoryconsumer-reject"><code>reject()</code></h4>

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```

Rejects the message. When requeue is true it is put back on the queue.


## Queue\Adapter\Memory\MemoryContext

Class

In-process transport session. Owns the named FIFO queues that this context's
producers and consumers share. The destination factories (createQueue /
createTopic / createTemporaryQueue) come from AbstractContext.

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
  - **`Phalcon\Queue\Adapter\Memory\MemoryContext`**

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

### Method Summary

- `public close(): void` — Closes the context and drops every stored message.

- `public createConsumer(DestinationInterface $destination): ConsumerInterface` — Creates a consumer for the given queue destination.

- `public createMessage(string $body = "", array $properties = [], array $headers = []): MessageInterface` — Creates a message.

- `public createProducer(): ProducerInterface` — Creates a producer.

- `public createSubscriptionConsumer(): SubscriptionConsumerInterface` — Creates a subscription consumer.

- `public popMessage(string $queueName): MessageInterface|null` — Removes the front message from a queue, or null when it is empty.

- `public purgeQueue(QueueInterface $queue): void` — Removes all messages from the given queue.

- `public pushMessage(string $queueName, MessageInterface $message): void` — Appends a message to the back of a queue.

### Properties

- `protected array<string, list<MessageInterface>> $queues = []` — Named queues: queue name => list of messages (FIFO).

### Methods

<h4 id="queueadaptermemorymemorycontext-close"><code>close()</code></h4>

```php
public function close(): void;
```

Closes the context and drops every stored message.

<h4 id="queueadaptermemorymemorycontext-createconsumer"><code>createConsumer()</code></h4>

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

Creates a consumer for the given queue destination.

<h4 id="queueadaptermemorymemorycontext-createmessage"><code>createMessage()</code></h4>

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

Creates a message.

<h4 id="queueadaptermemorymemorycontext-createproducer"><code>createProducer()</code></h4>

```php
public function createProducer(): ProducerInterface;
```

Creates a producer.

<h4 id="queueadaptermemorymemorycontext-createsubscriptionconsumer"><code>createSubscriptionConsumer()</code></h4>

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

Creates a subscription consumer.

<h4 id="queueadaptermemorymemorycontext-popmessage"><code>popMessage()</code></h4>

```php
public function popMessage( string $queueName ): MessageInterface|null;
```

Removes the front message from a queue, or null when it is empty.
Internal transport API used by MemoryConsumer.

<h4 id="queueadaptermemorymemorycontext-purgequeue"><code>purgeQueue()</code></h4>

```php
public function purgeQueue( QueueInterface $queue ): void;
```

Removes all messages from the given queue.

<h4 id="queueadaptermemorymemorycontext-pushmessage"><code>pushMessage()</code></h4>

```php
public function pushMessage(
    string $queueName,
    MessageInterface $message
): void;
```

Appends a message to the back of a queue.
Internal transport API used by MemoryProducer.


## Queue\Adapter\Memory\MemoryMessage

Class

In-process message. All behavior comes from MessageTrait.

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
  - **`Phalcon\Queue\Adapter\Memory\MemoryMessage`**

`Phalcon\Queue\Adapter\AbstractMessage`


## Queue\Adapter\Memory\MemoryProducer

Class

Sends messages into an in-process queue. The Memory transport delivers
immediately and in-process, so delivery delay, priority and time to live are
not supported (the defaults from AbstractProducer reject them).

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
  - **`Phalcon\Queue\Adapter\Memory\MemoryProducer`**

`Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

### Method Summary

- `public __construct(MemoryContext $context)`

- `public send(DestinationInterface $destination, MessageInterface $message): void`

### Properties

- `protected MemoryContext $context`

### Methods

<h4 id="queueadaptermemorymemoryproducer-__construct"><code>__construct()</code></h4>

```php
public function __construct( MemoryContext $context );
```

<h4 id="queueadaptermemorymemoryproducer-send"><code>send()</code></h4>

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```


## Queue\Adapter\Memory\MemorySubscriptionConsumer

Class

Consumes from several in-process queues at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
  - **`Phalcon\Queue\Adapter\Memory\MemorySubscriptionConsumer`**

`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

### Method Summary

- `public __construct(MemoryContext $context)` — The context is retained for transports that may later need it for a

### Properties

- `protected MemoryContext $context`

### Methods

<h4 id="queueadaptermemorymemorysubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct( MemoryContext $context );
```

The context is retained for transports that may later need it for a
native multi-queue receive; the shared poll loop does not use it.


## Queue\Adapter\MessageEnvelope

Class

Encodes and decodes the \{body, properties, headers\} envelope shared by every
transport that persists a message as a serialized string (Stream, Redis,
Beanstalk). Centralizes the wire shape, the object-injection-safe
`allowed_classes => false` guard, and the missing-key defaults, so each
adapter only supplies its own concrete message factory around `decode()`.

- **`Phalcon\Queue\Adapter\MessageEnvelope`**

`Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\QueueTypes`

### Method Summary

- `public decode(string $payload): array|null` — Decodes a serialized payload into a normalized \{body, properties,

- `public encode(MessageInterface $message): string` — Serializes a message into its wire envelope.

### Methods

<h4 id="queueadaptermessageenvelope-decode"><code>decode()</code></h4>

```php
public static function decode( string $payload ): array|null;
```

Decodes a serialized payload into a normalized \{body, properties,
headers\} array, or null when the payload is not a valid envelope.

<h4 id="queueadaptermessageenvelope-encode"><code>encode()</code></h4>

```php
public static function encode( MessageInterface $message ): string;
```

Serializes a message into its wire envelope.


## Queue\Adapter\QueueDestinationGuard

Class

Shared "destination must be a queue" guard. Producers (on send) and contexts
(on createConsumer) both reject any non-queue destination with the same typed
exception; this keeps that single rule in one place. The `action` verb
("send to", "consume from") tailors the message to the caller.

- **`Phalcon\Queue\Adapter\QueueDestinationGuard`**

`Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Exceptions\InvalidDestinationException`

### Method Summary

- `public assertQueue(DestinationInterface $destination, string $action): void` — Throws InvalidDestinationException unless the destination is a queue.

### Methods

<h4 id="queueadapterqueuedestinationguard-assertqueue"><code>assertQueue()</code></h4>

```php
public static function assertQueue(
    DestinationInterface $destination,
    string $action
): void;
```

Throws InvalidDestinationException unless the destination is a queue.


## Queue\Adapter\Redis\RedisConnectionFactory

Class

Connects to a Redis server (ext-redis) and builds a RedisContext. The
connection (connect/pconnect, auth, database select) is delegated to
Phalcon\Storage\Adapter\Redis so the queue reuses the framework's hardened
connection handling instead of re-implementing it.

Options:
  - host:         server host (default 127.0.0.1).
  - port:         server port (default 6379).
  - timeout:      connection timeout in seconds (default 0).
  - persistent:   use a persistent connection (default false).
  - persistentId: identifier for the persistent connection.
  - auth:         password, or [user, password] for ACL auth.
  - index:        database index to SELECT (default 0).
  - prefix:       key prefix for every queue (default "phalcon_queue:").
  - pollInterval: milliseconds between subscription poll passes (default 200).

- **`Phalcon\Queue\Adapter\Redis\RedisConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/6.0/api/phalcon_contracts/#contractsqueueconnectionfactory)

`Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\QueueTypes` · `Phalcon\Queue\Exceptions\Exception` · `Phalcon\Storage\Adapter\Redis` · `Phalcon\Storage\Exception` · `Phalcon\Storage\SerializerFactory` · `Redis`

### Method Summary

- `public __construct(array $options = [])`

- `public createContext(): ContextInterface`

### Properties

- `protected array $options = []`

### Methods

<h4 id="queueadapterredisredisconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="queueadapterredisredisconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```


## Queue\Adapter\Redis\RedisConsumer

Class

Receives messages from a single Redis queue. `receive()` is overridden to
use the native blocking BRPOP (in one-second chunks, so due delayed
messages keep getting promoted) instead of the inherited polling loop.

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
  - **`Phalcon\Queue\Adapter\Redis\RedisConsumer`**

`Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`

### Method Summary

- `public __construct(RedisContext $context, QueueInterface $queue)`

- `public acknowledge(MessageInterface $message): void` — No-op: a received message has already been removed from the queue.

- `public receive(int $timeout = 0): MessageInterface|null`

- `public receiveNoWait(): MessageInterface|null`

- `public reject(MessageInterface $message, bool $requeue = false): void`

### Properties

- `protected RedisContext $context`

### Methods

<h4 id="queueadapterredisredisconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    RedisContext $context,
    QueueInterface $queue
);
```

<h4 id="queueadapterredisredisconsumer-acknowledge"><code>acknowledge()</code></h4>

```php
public function acknowledge( MessageInterface $message ): void;
```

No-op: a received message has already been removed from the queue.

<h4 id="queueadapterredisredisconsumer-receive"><code>receive()</code></h4>

```php
public function receive( int $timeout = 0 ): MessageInterface|null;
```

<h4 id="queueadapterredisredisconsumer-receivenowait"><code>receiveNoWait()</code></h4>

```php
public function receiveNoWait(): MessageInterface|null;
```

<h4 id="queueadapterredisredisconsumer-reject"><code>reject()</code></h4>

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```


## Queue\Adapter\Redis\RedisContext

Class

Redis transport session (ext-redis). Each queue is a Redis list; messages
are LPUSHed on send and RPOP/BRPOPed on receive, giving FIFO delivery.
Delayed messages live in a companion sorted set (`<key>:delayed`) scored by
their due time in milliseconds, and are promoted into the list once due. The
destination factories come from AbstractContext.

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
  - **`Phalcon\Queue\Adapter\Redis\RedisContext`**

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard` · `Redis`

### Method Summary

- `public __construct(RedisService $redis, string $prefix = "phalcon_queue:", int $pollInterval = 200)`

- `public blockingPop(string $queueName, int $timeout): MessageInterface|null` — Blocking pop from the back of a queue list. Promotes any due delayed

- `public close(): void`

- `public createConsumer(DestinationInterface $destination): ConsumerInterface`

- `public createMessage(string $body = "", array $properties = [], array $headers = []): MessageInterface`

- `public createProducer(): ProducerInterface`

- `public createSubscriptionConsumer(): SubscriptionConsumerInterface`

- `public popMessage(string $queueName): MessageInterface|null` — Non-blocking pop from the back of a queue list, or null when empty.

- `public purgeQueue(QueueInterface $queue): void`

- `public pushMessage(string $queueName, MessageInterface $message, int $delay = 0): void` — Sends a message to a queue. With a positive delay (milliseconds) the

### Properties

- `protected int $pollInterval = 200`

- `protected string $prefix = "phalcon_queue:"`

- `protected RedisService $redis`

### Methods

<h4 id="queueadapterredisrediscontext-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    RedisService $redis,
    string $prefix = "phalcon_queue:",
    int $pollInterval = 200
);
```

<h4 id="queueadapterredisrediscontext-blockingpop"><code>blockingPop()</code></h4>

```php
public function blockingPop(
    string $queueName,
    int $timeout
): MessageInterface|null;
```

Blocking pop from the back of a queue list. Promotes any due delayed
messages first, then blocks up to timeout seconds. Internal transport
API used by RedisConsumer.

<h4 id="queueadapterredisrediscontext-close"><code>close()</code></h4>

```php
public function close(): void;
```

<h4 id="queueadapterredisrediscontext-createconsumer"><code>createConsumer()</code></h4>

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

<h4 id="queueadapterredisrediscontext-createmessage"><code>createMessage()</code></h4>

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

<h4 id="queueadapterredisrediscontext-createproducer"><code>createProducer()</code></h4>

```php
public function createProducer(): ProducerInterface;
```

<h4 id="queueadapterredisrediscontext-createsubscriptionconsumer"><code>createSubscriptionConsumer()</code></h4>

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

<h4 id="queueadapterredisrediscontext-popmessage"><code>popMessage()</code></h4>

```php
public function popMessage( string $queueName ): MessageInterface|null;
```

Non-blocking pop from the back of a queue list, or null when empty.
Promotes any due delayed messages first. Internal transport API used
by RedisConsumer.

<h4 id="queueadapterredisrediscontext-purgequeue"><code>purgeQueue()</code></h4>

```php
public function purgeQueue( QueueInterface $queue ): void;
```

<h4 id="queueadapterredisrediscontext-pushmessage"><code>pushMessage()</code></h4>

```php
public function pushMessage(
    string $queueName,
    MessageInterface $message,
    int $delay = 0
): void;
```

Sends a message to a queue. With a positive delay (milliseconds) the
message is parked in the delayed set; otherwise it is pushed onto the
front of the list. Internal transport API used by RedisProducer.


## Queue\Adapter\Redis\RedisMessage

Class

Redis-backed message. All behavior comes from MessageTrait.

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
  - **`Phalcon\Queue\Adapter\Redis\RedisMessage`**

`Phalcon\Queue\Adapter\AbstractMessage`


## Queue\Adapter\Redis\RedisProducer

Class

Sends messages to a Redis queue. Delivery delay is supported (via the
delayed sorted set); priority and time to live are not (the defaults from
AbstractProducer reject them).

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
  - **`Phalcon\Queue\Adapter\Redis\RedisProducer`**

`Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

### Method Summary

- `public __construct(RedisContext $context)`

- `public getDeliveryDelay(): int|null`

- `public send(DestinationInterface $destination, MessageInterface $message): void`

- `public setDeliveryDelay(mixed $deliveryDelay = null): ProducerInterface`

### Properties

- `protected RedisContext $context`

- `protected int|null $deliveryDelay = null` — Delivery delay in milliseconds, or null when not set.

### Methods

<h4 id="queueadapterredisredisproducer-__construct"><code>__construct()</code></h4>

```php
public function __construct( RedisContext $context );
```

<h4 id="queueadapterredisredisproducer-getdeliverydelay"><code>getDeliveryDelay()</code></h4>

```php
public function getDeliveryDelay(): int|null;
```

<h4 id="queueadapterredisredisproducer-send"><code>send()</code></h4>

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```

<h4 id="queueadapterredisredisproducer-setdeliverydelay"><code>setDeliveryDelay()</code></h4>

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): ProducerInterface;
```


## Queue\Adapter\Redis\RedisSubscriptionConsumer

Class

Consumes from several Redis queues at once. The round-robin poll loop lives
in SubscriptionConsumerTrait.

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
  - **`Phalcon\Queue\Adapter\Redis\RedisSubscriptionConsumer`**

`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

### Method Summary

- `public __construct(RedisContext $context, int $pollInterval = 200)` — The context is retained for transports that may later need it for a

### Properties

- `protected RedisContext $context`

### Methods

<h4 id="queueadapterredisredissubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    RedisContext $context,
    int $pollInterval = 200
);
```

The context is retained for transports that may later need it for a
native multi-queue receive; the shared poll loop does not use it.


## Queue\Adapter\Stream\StreamConnectionFactory

Class

Builds a StreamContext.

Options:
  - storageDir:   directory holding the queue files (default: a private
                  "phalcon_queue" subdirectory of the system temp dir).
  - pollInterval: milliseconds between consumer poll attempts (default 200).

- **`Phalcon\Queue\Adapter\Stream\StreamConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/6.0/api/phalcon_contracts/#contractsqueueconnectionfactory)

`Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\QueueTypes`

### Method Summary

- `public __construct(array $options = [])`

- `public createContext(): ContextInterface`

### Properties

- `protected array $options = []`

### Methods

<h4 id="queueadapterstreamstreamconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="queueadapterstreamstreamconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```


## Queue\Adapter\Stream\StreamConsumer

Class

Receives messages from a single filesystem queue. `receive()` is the
polling loop inherited from AbstractConsumer.

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
  - **`Phalcon\Queue\Adapter\Stream\StreamConsumer`**

`Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`

### Method Summary

- `public __construct(StreamContext $context, QueueInterface $queue, int $pollInterval = 200)`

- `public acknowledge(MessageInterface $message): void` — No-op: a received message has already been removed from the queue file.

- `public receiveNoWait(): MessageInterface|null`

- `public reject(MessageInterface $message, bool $requeue = false): void`

### Properties

- `protected StreamContext $context`

### Methods

<h4 id="queueadapterstreamstreamconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    StreamContext $context,
    QueueInterface $queue,
    int $pollInterval = 200
);
```

<h4 id="queueadapterstreamstreamconsumer-acknowledge"><code>acknowledge()</code></h4>

```php
public function acknowledge( MessageInterface $message ): void;
```

No-op: a received message has already been removed from the queue file.

<h4 id="queueadapterstreamstreamconsumer-receivenowait"><code>receiveNoWait()</code></h4>

```php
public function receiveNoWait(): MessageInterface|null;
```

<h4 id="queueadapterstreamstreamconsumer-reject"><code>reject()</code></h4>

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```


## Queue\Adapter\Stream\StreamContext

Class

Filesystem transport session. Each queue is one append-only file under the
configured directory; cross-process safety comes from flock. One message
per line, stored as base64(serialize([...])) so bodies with newlines are
safe. The destination factories come from AbstractContext.

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
  - **`Phalcon\Queue\Adapter\Stream\StreamContext`**

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(string $storageDir, int $pollInterval = 200)`

- `public close(): void`

- `public createConsumer(DestinationInterface $destination): ConsumerInterface`

- `public createMessage(string $body = "", array $properties = [], array $headers = []): MessageInterface`

- `public createProducer(): ProducerInterface`

- `public createSubscriptionConsumer(): SubscriptionConsumerInterface`

- `public popMessage(string $queueName): MessageInterface|null` — Removes the front message from a queue file, or null when it is empty.

- `public purgeQueue(QueueInterface $queue): void`

- `public pushMessage(string $queueName, MessageInterface $message): void` — Appends a message to the back of a queue file.

### Properties

- `protected int $pollInterval = 200`

- `protected string $storageDir = ""` — Directory (with trailing separator) that holds the queue files.

### Methods

<h4 id="queueadapterstreamstreamcontext-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $storageDir,
    int $pollInterval = 200
);
```

<h4 id="queueadapterstreamstreamcontext-close"><code>close()</code></h4>

```php
public function close(): void;
```

<h4 id="queueadapterstreamstreamcontext-createconsumer"><code>createConsumer()</code></h4>

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

<h4 id="queueadapterstreamstreamcontext-createmessage"><code>createMessage()</code></h4>

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

<h4 id="queueadapterstreamstreamcontext-createproducer"><code>createProducer()</code></h4>

```php
public function createProducer(): ProducerInterface;
```

<h4 id="queueadapterstreamstreamcontext-createsubscriptionconsumer"><code>createSubscriptionConsumer()</code></h4>

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

<h4 id="queueadapterstreamstreamcontext-popmessage"><code>popMessage()</code></h4>

```php
public function popMessage( string $queueName ): MessageInterface|null;
```

Removes the front message from a queue file, or null when it is empty.
Internal transport API used by StreamConsumer.

<h4 id="queueadapterstreamstreamcontext-purgequeue"><code>purgeQueue()</code></h4>

```php
public function purgeQueue( QueueInterface $queue ): void;
```

<h4 id="queueadapterstreamstreamcontext-pushmessage"><code>pushMessage()</code></h4>

```php
public function pushMessage(
    string $queueName,
    MessageInterface $message
): void;
```

Appends a message to the back of a queue file.
Internal transport API used by StreamProducer.


## Queue\Adapter\Stream\StreamMessage

Class

Filesystem-backed message. All behavior comes from MessageTrait.

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
  - **`Phalcon\Queue\Adapter\Stream\StreamMessage`**

`Phalcon\Queue\Adapter\AbstractMessage`


## Queue\Adapter\Stream\StreamProducer

Class

Appends messages to a filesystem queue. The Stream transport delivers in
insertion order with no scheduling, so delivery delay, priority and time to
live are not supported (the defaults from AbstractProducer reject them).

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
  - **`Phalcon\Queue\Adapter\Stream\StreamProducer`**

`Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

### Method Summary

- `public __construct(StreamContext $context)`

- `public send(DestinationInterface $destination, MessageInterface $message): void`

### Properties

- `protected StreamContext $context`

### Methods

<h4 id="queueadapterstreamstreamproducer-__construct"><code>__construct()</code></h4>

```php
public function __construct( StreamContext $context );
```

<h4 id="queueadapterstreamstreamproducer-send"><code>send()</code></h4>

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```


## Queue\Adapter\Stream\StreamSubscriptionConsumer

Class

Consumes from several filesystem queues at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
  - **`Phalcon\Queue\Adapter\Stream\StreamSubscriptionConsumer`**

`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

### Method Summary

- `public __construct(StreamContext $context, int $pollInterval = 200)` — The context is retained for transports that may later need it for a

### Properties

- `protected StreamContext $context`

### Methods

<h4 id="queueadapterstreamstreamsubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    StreamContext $context,
    int $pollInterval = 200
);
```

The context is retained for transports that may later need it for a
native multi-queue receive; the shared poll loop does not use it.


## Queue\Adapter\Traits\MessageTrait

Trait

Shared implementation of every Message getter/setter, plus the
correlation-id / message-id / timestamp / reply-to header conveniences.
Concrete adapter messages use this trait.

The convenience accessors are stored as transport headers under fixed keys
for binary compatibility with the wider interop ecosystem.

- **`Phalcon\Queue\Adapter\Traits\MessageTrait`**

`Phalcon\Contracts\Queue\QueueTypes`

[`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)

### Method Summary

- `public __construct(string $body = "", array $properties = [], array $headers = [])` — Message constructor.

- `public getBody(): string` — Returns the message body.

- `public getCorrelationId(): string|null` — Returns the correlation id used to correlate request/reply messages.

- `public getHeader(string $name, mixed $defaultValue = null): mixed` — Returns a single header value, or the default when it is not set.

- `public getHeaders(): array` — Returns all transport headers.

- `public getMessageId(): string|null` — Returns the message id.

- `public getProperties(): array` — Returns all application properties.

- `public getProperty(string $name, mixed $defaultValue = null): mixed` — Returns a single property value, or the default when it is not set.

- `public getReplyTo(): string|null` — Returns the reply-to destination name.

- `public getTimestamp(): int|null` — Returns the timestamp (in milliseconds) or null when it is not set.

- `public isRedelivered(): bool` — Whether the message has been redelivered.

- `public setBody(string $body): void` — Sets the message body.

- `public setCorrelationId(string $correlationId): void` — Sets the correlation id.

- `public setHeader(string $name, mixed $value): void` — Sets a single transport header.

- `public setHeaders(array $headers): void` — Replaces all transport headers.

- `public setMessageId(string $messageId): void` — Sets the message id.

- `public setProperties(array $properties): void` — Replaces all application properties.

- `public setProperty(string $name, mixed $value): void` — Sets a single application property.

- `public setRedelivered(bool $redelivered): void` — Marks the message as redelivered.

- `public setReplyTo(string $replyTo): void` — Sets the reply-to destination name.

- `public setTimestamp(int $timestamp): void` — Sets the timestamp (in milliseconds).

### Properties

- `protected string $body = ""`

- `protected array $headers = []`

- `protected array $properties = []`

- `protected bool $redelivered = false`

### Methods

<h4 id="queueadaptertraitsmessagetrait-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $body = "",
    array $properties = [],
    array $headers = []
);
```

Message constructor.

<h4 id="queueadaptertraitsmessagetrait-getbody"><code>getBody()</code></h4>

```php
public function getBody(): string;
```

Returns the message body.

<h4 id="queueadaptertraitsmessagetrait-getcorrelationid"><code>getCorrelationId()</code></h4>

```php
public function getCorrelationId(): string|null;
```

Returns the correlation id used to correlate request/reply messages.

<h4 id="queueadaptertraitsmessagetrait-getheader"><code>getHeader()</code></h4>

```php
public function getHeader(
    string $name,
    mixed $defaultValue = null
): mixed;
```

Returns a single header value, or the default when it is not set.

<h4 id="queueadaptertraitsmessagetrait-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): array;
```

Returns all transport headers.

<h4 id="queueadaptertraitsmessagetrait-getmessageid"><code>getMessageId()</code></h4>

```php
public function getMessageId(): string|null;
```

Returns the message id.

<h4 id="queueadaptertraitsmessagetrait-getproperties"><code>getProperties()</code></h4>

```php
public function getProperties(): array;
```

Returns all application properties.

<h4 id="queueadaptertraitsmessagetrait-getproperty"><code>getProperty()</code></h4>

```php
public function getProperty(
    string $name,
    mixed $defaultValue = null
): mixed;
```

Returns a single property value, or the default when it is not set.

<h4 id="queueadaptertraitsmessagetrait-getreplyto"><code>getReplyTo()</code></h4>

```php
public function getReplyTo(): string|null;
```

Returns the reply-to destination name.

<h4 id="queueadaptertraitsmessagetrait-gettimestamp"><code>getTimestamp()</code></h4>

```php
public function getTimestamp(): int|null;
```

Returns the timestamp (in milliseconds) or null when it is not set.

<h4 id="queueadaptertraitsmessagetrait-isredelivered"><code>isRedelivered()</code></h4>

```php
public function isRedelivered(): bool;
```

Whether the message has been redelivered.

<h4 id="queueadaptertraitsmessagetrait-setbody"><code>setBody()</code></h4>

```php
public function setBody( string $body ): void;
```

Sets the message body.

<h4 id="queueadaptertraitsmessagetrait-setcorrelationid"><code>setCorrelationId()</code></h4>

```php
public function setCorrelationId( string $correlationId ): void;
```

Sets the correlation id.

<h4 id="queueadaptertraitsmessagetrait-setheader"><code>setHeader()</code></h4>

```php
public function setHeader(
    string $name,
    mixed $value
): void;
```

Sets a single transport header.

<h4 id="queueadaptertraitsmessagetrait-setheaders"><code>setHeaders()</code></h4>

```php
public function setHeaders( array $headers ): void;
```

Replaces all transport headers.

<h4 id="queueadaptertraitsmessagetrait-setmessageid"><code>setMessageId()</code></h4>

```php
public function setMessageId( string $messageId ): void;
```

Sets the message id.

<h4 id="queueadaptertraitsmessagetrait-setproperties"><code>setProperties()</code></h4>

```php
public function setProperties( array $properties ): void;
```

Replaces all application properties.

<h4 id="queueadaptertraitsmessagetrait-setproperty"><code>setProperty()</code></h4>

```php
public function setProperty(
    string $name,
    mixed $value
): void;
```

Sets a single application property.

<h4 id="queueadaptertraitsmessagetrait-setredelivered"><code>setRedelivered()</code></h4>

```php
public function setRedelivered( bool $redelivered ): void;
```

Marks the message as redelivered.

<h4 id="queueadaptertraitsmessagetrait-setreplyto"><code>setReplyTo()</code></h4>

```php
public function setReplyTo( string $replyTo ): void;
```

Sets the reply-to destination name.

<h4 id="queueadaptertraitsmessagetrait-settimestamp"><code>setTimestamp()</code></h4>

```php
public function setTimestamp( int $timestamp ): void;
```

Sets the timestamp (in milliseconds).


## Queue\Adapter\Traits\SubscriptionConsumerTrait

Trait

Shared subscription-consumer implementation. Implements the round-robin poll
loop that dispatches each subscribed consumer's messages to its callback; a
callback returning false stops consumption. The loop relies only on the
consumer's `receiveNoWait()`, so it is transport-agnostic. Concrete adapters
keep just the constructor that captures their context and poll interval.

- **`Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait`**

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\QueueTypes`

[`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)

### Method Summary

- `public consume(int $timeout = 0): void` — Polls every subscription, dispatching each message to its callback,

- `public subscribe(ConsumerInterface $consumer, callable $callback): void` — Subscribes a consumer; the callback receives each delivered message.

- `public unsubscribe(ConsumerInterface $consumer): void` — Removes a previously subscribed consumer.

- `public unsubscribeAll(): void` — Removes every subscribed consumer.

### Properties

- `protected int $pollInterval = 200` — Milliseconds slept between poll passes.

- `protected array $subscriptions = []` — Subscriptions keyed by queue name: \[consumer, callback].

### Methods

<h4 id="queueadaptertraitssubscriptionconsumertrait-consume"><code>consume()</code></h4>

```php
public function consume( int $timeout = 0 ): void;
```

Polls every subscription, dispatching each message to its callback,
blocking up to timeout milliseconds (0 = block until a callback
returns false).

<h4 id="queueadaptertraitssubscriptionconsumertrait-subscribe"><code>subscribe()</code></h4>

```php
public function subscribe(
    ConsumerInterface $consumer,
    callable $callback
): void;
```

Subscribes a consumer; the callback receives each delivered message.

<h4 id="queueadaptertraitssubscriptionconsumertrait-unsubscribe"><code>unsubscribe()</code></h4>

```php
public function unsubscribe( ConsumerInterface $consumer ): void;
```

Removes a previously subscribed consumer.

<h4 id="queueadaptertraitssubscriptionconsumertrait-unsubscribeall"><code>unsubscribeAll()</code></h4>

```php
public function unsubscribeAll(): void;
```

Removes every subscribed consumer.


## Queue\Cli\ConsumerTask

Class

Optional CLI runner for a queue worker - the only class coupled to
Phalcon\Cli. A thin adapter: it resolves the context from the `queueFactory`
service, binds one queue to one processor (both given as command arguments),
and runs a Worker whose lifetime bounds come from CLI options. Users not on
Phalcon\Cli use Worker directly.

Usage:
    &lt;task> &lt;queueName> &lt;processorServiceId> \
        [--max-messages=N] [--max-time=SECONDS] \
        [--max-memory=MB] [--jitter=SECONDS]

Register it in your own Phalcon\Cli\Console; it is not auto-wired into
FactoryDefault.

- `\stdClass`
  - [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
    - [`Phalcon\Cli\Task`](/6.0/api/phalcon_cli/#clitask)
      - **`Phalcon\Queue\Cli\ConsumerTask`**

`Phalcon\Cli\Dispatcher` · `Phalcon\Cli\Task` · `Phalcon\Config\Config` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Di\DiInterface` · `Phalcon\Queue\Consumer\QueueConsumer` · `Phalcon\Queue\Consumer\Worker` · `Phalcon\Queue\Consumer\WorkerOptions` · `Phalcon\Queue\QueueFactory`

### Method Summary

- `public mainAction(): int`

### Methods

<h4 id="queuecliconsumertask-mainaction"><code>mainAction()</code></h4>

```php
public function mainAction(): int;
```


## Queue\Consumer\BoundProcessor

Class

Binds a processor to a queue, together with the consumer that reads it.

- **`Phalcon\Queue\Consumer\BoundProcessor`**

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Contracts\Queue\Queue`

### Method Summary

- `public __construct(QueueInterface $queue, ProcessorInterface $processor, ConsumerInterface $consumer)`

- `public getConsumer(): ConsumerInterface`

- `public getProcessor(): ProcessorInterface`

- `public getQueue(): QueueInterface`

### Properties

- `protected ConsumerInterface $consumer`

- `protected ProcessorInterface $processor`

- `protected QueueInterface $queue`

### Methods

<h4 id="queueconsumerboundprocessor-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    QueueInterface $queue,
    ProcessorInterface $processor,
    ConsumerInterface $consumer
);
```

<h4 id="queueconsumerboundprocessor-getconsumer"><code>getConsumer()</code></h4>

```php
public function getConsumer(): ConsumerInterface;
```

<h4 id="queueconsumerboundprocessor-getprocessor"><code>getProcessor()</code></h4>

```php
public function getProcessor(): ProcessorInterface;
```

<h4 id="queueconsumerboundprocessor-getqueue"><code>getQueue()</code></h4>

```php
public function getQueue(): QueueInterface;
```


## Queue\Consumer\Events

Class

Lifecycle event names fired by the queue consumer through
Phalcon\Events\Manager. One public constant per event.

- **`Phalcon\Queue\Consumer\Events`**

### Constants

- `const string AFTER_END = "queue:afterEnd"`

- `const string AFTER_PROCESS = "queue:afterProcess"`

- `const string AFTER_RECEIVE = "queue:afterReceive"`

- `const string BEFORE_PROCESS = "queue:beforeProcess"`

- `const string BEFORE_RECEIVE = "queue:beforeReceive"`

- `const string BEFORE_START = "queue:beforeStart"`

- `const string PROCESSOR_EXCEPTION = "queue:processorException"`


## Queue\Consumer\QueueConsumer

Class

Lean consumption runner. Binds processors to queues, polls each bound queue
round-robin, and dispatches messages to their processors while firing the
lifecycle events on `Phalcon\Queue\Consumer\Events` through the events
manager. The long-running operational shell (lifetime, signals) lives in
`Phalcon\Queue\Consumer\Worker`, which drives `consumeOnce()` and shares the
stop signal through `stop()` / `isStopRequested()`.

- [`Phalcon\Events\AbstractEventsAware`](/6.0/api/phalcon_events/#eventsabstracteventsaware)
  - **`Phalcon\Queue\Consumer\QueueConsumer`** - implements [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Events\AbstractEventsAware` · `Phalcon\Events\EventsAwareInterface` · `Throwable`

### Method Summary

- `public __construct(ContextInterface $context)`

- `public bind(QueueInterface $queue, ProcessorInterface $processor): QueueConsumer` — Binds a processor to a queue. Returns self for chaining.

- `public consume(int $timeout = 0): void` — Runs the consumption loop, blocking up to timeout milliseconds (0 =

- `public consumeOnce(): int` — Polls every bound queue once, dispatching any messages found. Returns

- `public end(): void` — Fires the `queue:afterEnd` event. Called once the loop exits.

- `public isStopRequested(): bool` — Whether a stop has been requested (by a signal, `stop()`, or an

- `public setPollInterval(int $pollInterval): void` — Sets the poll interval (in milliseconds).

- `public start(): bool` — Resets the stop flag and fires `queue:beforeStart`. Returns false when a

- `public stop(): void` — Requests the consumption loop to stop after the current message.

### Properties

- `protected array<string, BoundProcessor> $bindings = []` — Bound processors keyed by queue name.

- `protected ContextInterface $context`

- `protected int $pollInterval = 200` — Milliseconds slept between poll passes when nothing was received.

- `protected bool $shouldStop = false`

### Methods

<h4 id="queueconsumerqueueconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct( ContextInterface $context );
```

<h4 id="queueconsumerqueueconsumer-bind"><code>bind()</code></h4>

```php
public function bind(
    QueueInterface $queue,
    ProcessorInterface $processor
): QueueConsumer;
```

Binds a processor to a queue. Returns self for chaining.

<h4 id="queueconsumerqueueconsumer-consume"><code>consume()</code></h4>

```php
public function consume( int $timeout = 0 ): void;
```

Runs the consumption loop, blocking up to timeout milliseconds (0 =
block until stopped). The simple loop; production setups use Worker.

<h4 id="queueconsumerqueueconsumer-consumeonce"><code>consumeOnce()</code></h4>

```php
public function consumeOnce(): int;
```

Polls every bound queue once, dispatching any messages found. Returns
the number of messages processed in this pass, so callers (the Worker)
can apply a message-count limit across several bound queues.

<h4 id="queueconsumerqueueconsumer-end"><code>end()</code></h4>

```php
public function end(): void;
```

Fires the `queue:afterEnd` event. Called once the loop exits.

<h4 id="queueconsumerqueueconsumer-isstoprequested"><code>isStopRequested()</code></h4>

```php
public function isStopRequested(): bool;
```

Whether a stop has been requested (by a signal, `stop()`, or an
`afterReceive` listener returning false).

<h4 id="queueconsumerqueueconsumer-setpollinterval"><code>setPollInterval()</code></h4>

```php
public function setPollInterval( int $pollInterval ): void;
```

Sets the poll interval (in milliseconds).

<h4 id="queueconsumerqueueconsumer-start"><code>start()</code></h4>

```php
public function start(): bool;
```

Resets the stop flag and fires `queue:beforeStart`. Returns false when a
listener cancels the start.

<h4 id="queueconsumerqueueconsumer-stop"><code>stop()</code></h4>

```php
public function stop(): void;
```

Requests the consumption loop to stop after the current message.


## Queue\Consumer\Worker

Class

Long-running operational shell around a QueueConsumer. Owns the outer loop,
the bounded lifetime (max messages / seconds / memory, plus jitter) and -
when ext-pcntl is available - graceful shutdown on SIGTERM/SIGINT/SIGQUIT.
The current message always finishes before the loop stops (drain, not
guillotine), because the stop flag is only checked between iterations.

- **`Phalcon\Queue\Consumer\Worker`**

`Phalcon\Traits\Php\InfoTrait`

### Method Summary

- `public __construct(QueueConsumer $consumer, WorkerOptions|null $options = null)`

- `public handleSignal(int $signal): void` — Signal handler: requests a graceful stop.

- `public run(): int` — Runs the worker until a lifetime bound trips or a stop is requested.

### Properties

- `protected QueueConsumer $consumer`

- `protected WorkerOptions $options`

### Methods

<h4 id="queueconsumerworker-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    QueueConsumer $consumer,
    WorkerOptions|null $options = null
);
```

<h4 id="queueconsumerworker-handlesignal"><code>handleSignal()</code></h4>

```php
public function handleSignal( int $signal ): void;
```

Signal handler: requests a graceful stop.

<h4 id="queueconsumerworker-run"><code>run()</code></h4>

```php
public function run(): int;
```

Runs the worker until a lifetime bound trips or a stop is requested.
Returns the number of messages processed.


## Queue\Consumer\WorkerOptions

Class

Immutable lifetime bounds for a Worker. A value of 0 means "no limit".
The worker stops on whichever bound trips first.

- **`Phalcon\Queue\Consumer\WorkerOptions`**

### Method Summary

- `public __construct(int $maxMessages = 0, int $maxSeconds = 0, int $maxMemory = 0, int $jitter = 0)`

- `public getJitter(): int`

- `public getMaxMemory(): int`

- `public getMaxMessages(): int`

- `public getMaxSeconds(): int`

### Properties

- `protected int $jitter = 0`

- `protected int $maxMemory = 0`

- `protected int $maxMessages = 0`

- `protected int $maxSeconds = 0`

### Methods

<h4 id="queueconsumerworkeroptions-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    int $maxMessages = 0,
    int $maxSeconds = 0,
    int $maxMemory = 0,
    int $jitter = 0
);
```

<h4 id="queueconsumerworkeroptions-getjitter"><code>getJitter()</code></h4>

```php
public function getJitter(): int;
```

<h4 id="queueconsumerworkeroptions-getmaxmemory"><code>getMaxMemory()</code></h4>

```php
public function getMaxMemory(): int;
```

<h4 id="queueconsumerworkeroptions-getmaxmessages"><code>getMaxMessages()</code></h4>

```php
public function getMaxMessages(): int;
```

<h4 id="queueconsumerworkeroptions-getmaxseconds"><code>getMaxSeconds()</code></h4>

```php
public function getMaxSeconds(): int;
```


## Queue\Exceptions\DeliveryDelayNotSupportedException

Class

Thrown when the transport does not support a delivery delay.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionsdeliverydelaynotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\Exceptions\Exception

Class

Generic exception for the Queue component, and the base for every typed
queue exception.

- `\Exception`
  - **`Phalcon\Queue\Exceptions\Exception`** - implements [`Phalcon\Queue\Exceptions\QueueThrowable`](#queueexceptionsqueuethrowable)
    - [`Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException`](#queueexceptionsdeliverydelaynotsupportedexception)
    - [`Phalcon\Queue\Exceptions\InvalidDestinationException`](#queueexceptionsinvaliddestinationexception)
    - [`Phalcon\Queue\Exceptions\InvalidMessageException`](#queueexceptionsinvalidmessageexception)
    - [`Phalcon\Queue\Exceptions\PriorityNotSupportedException`](#queueexceptionsprioritynotsupportedexception)
    - [`Phalcon\Queue\Exceptions\PurgeQueueNotSupportedException`](#queueexceptionspurgequeuenotsupportedexception)
    - [`Phalcon\Queue\Exceptions\SubscriptionConsumerNotSupportedException`](#queueexceptionssubscriptionconsumernotsupportedexception)
    - [`Phalcon\Queue\Exceptions\TemporaryQueueNotSupportedException`](#queueexceptionstemporaryqueuenotsupportedexception)
    - [`Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`](#queueexceptionstimetolivenotsupportedexception)

`Exception`


## Queue\Exceptions\InvalidDestinationException

Class

Thrown when a destination is not valid for the operation, for example a
Topic passed where a Queue is required. The action verb ("send to",
"consume from") tailors the message to the failing operation.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\InvalidDestinationException`**

### Method Summary

- `public __construct(string $action)`

### Methods

<h4 id="queueexceptionsinvaliddestinationexception-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $action );
```


## Queue\Exceptions\InvalidMessageException

Class

Thrown when a message is not valid for the operation.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\InvalidMessageException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionsinvalidmessageexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\Exceptions\PriorityNotSupportedException

Class

Thrown when the transport does not support message priority.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\PriorityNotSupportedException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionsprioritynotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\Exceptions\PurgeQueueNotSupportedException

Class

Thrown when the transport does not support purging a queue.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\PurgeQueueNotSupportedException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionspurgequeuenotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\Exceptions\QueueThrowable

Interface

Base throwable contract for the Queue component. Every queue exception
implements it, so callers can catch all queue errors with a single type.

- `\Throwable`
  - **`Phalcon\Queue\Exceptions\QueueThrowable`**

`Throwable`


## Queue\Exceptions\SubscriptionConsumerNotSupportedException

Class

Thrown when the transport does not support subscription consumers.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\SubscriptionConsumerNotSupportedException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionssubscriptionconsumernotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\Exceptions\TemporaryQueueNotSupportedException

Class

Thrown when the transport does not support temporary queues.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\TemporaryQueueNotSupportedException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionstemporaryqueuenotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\Exceptions\TimeToLiveNotSupportedException

Class

Thrown when the transport does not support a message time to live.

- `\Exception`
  - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
    - **`Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="queueexceptionstimetolivenotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Queue\QueueFactory

Class

Builds a queue Context from the standard Phalcon config shape. Mirrors
Phalcon\Cache\CacheFactory.

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - **`Phalcon\Queue\QueueFactory`**

`Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\QueueTypes` · `Phalcon\Factory\AbstractConfigFactory` · `Phalcon\Queue\Exceptions\Exception`

### Method Summary

- `public __construct(AdapterFactory|null $factory = null)` — A default AdapterFactory is created when none is supplied, so the

- `public load(mixed $config): ContextInterface` — Builds a Context from a config array/object.

- `public newInstance(string $name, array $options = []): ContextInterface` — Builds a Context for the named adapter.

- `protected getExceptionClass(): string` — Returns the exception class for the factory

### Properties

- `protected AdapterFactory $adapterFactory`

### Methods

<h4 id="queuequeuefactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterFactory|null $factory = null );
```

A default AdapterFactory is created when none is supplied, so the
factory is usable straight from the DI container.

<h4 id="queuequeuefactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): ContextInterface;
```

Builds a Context from a config array/object.

<h4 id="queuequeuefactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    array $options = []
): ContextInterface;
```

Builds a Context for the named adapter.

<h4 id="queuequeuefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Returns the exception class for the factory

Source: https://docs.phalcon.io/6.0/api/phalcon_queue/index.mdx
