---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Queue\AdapterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/AdapterFactory.zep){ .src-btn }

Maps an adapter name to its ConnectionFactory. Mirrors
Phalcon\Storage\AdapterFactory.

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Queue\AdapterFactory`**

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory` · `Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory` · `Phalcon\Queue\Adapter\Redis\RedisConnectionFactory` · `Phalcon\Queue\Adapter\Stream\StreamConnectionFactory` · `Phalcon\Queue\Exceptions\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#queueadapterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionFactoryInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Creates a new ConnectionFactory for the named adapter.</span>
</a>
<a class="api-item" href="#queueadapterfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#queueadapterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadapterfactory-__construct }

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

#### `newInstance()` { #queueadapterfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): ConnectionFactoryInterface;
```

Creates a new ConnectionFactory for the named adapter.

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #queueadapterfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #queueadapterfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters.


## Queue\Adapter\AbstractConsumer

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractConsumer.zep){ .src-btn }

Shared consumer base. Implements the blocking `receive()` as a polling loop
on top of the abstract `receiveNoWait()`; concrete consumers provide the
transport-specific `receiveNoWait`, `acknowledge` and `reject`.

Transports with a native blocking receive (Redis BRPOP, Beanstalk reserve)
override `receive()` instead of polling.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\AbstractConsumer`** - implements [`Phalcon\Contracts\Queue\Consumer`](phalcon_contracts.md#contractsqueueconsumer)
    - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConsumer`](#queueadapterbeanstalkbeanstalkconsumer)
    - [`Phalcon\Queue\Adapter\Memory\MemoryConsumer`](#queueadaptermemorymemoryconsumer)
    - [`Phalcon\Queue\Adapter\Redis\RedisConsumer`](#queueadapterredisredisconsumer)
    - [`Phalcon\Queue\Adapter\Stream\StreamConsumer`](#queueadapterstreamstreamconsumer)

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterabstractconsumer-acknowledge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">acknowledge</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Acknowledges the message; the transport may then discard it.</span>
</a>
<a class="api-item" href="#queueadapterabstractconsumer-getqueue">
<code class="vis vis-public">public</code>
<code class="ret">QueueInterface</code>
<code class="sig"><span class="sf">getQueue</span>()</code>
<span class="desc">Returns the queue this consumer reads from.</span>
</a>
<a class="api-item" href="#queueadapterabstractconsumer-receive">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receive</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
<span class="desc">Receives a message, blocking up to timeout milliseconds (0 = block</span>
</a>
<a class="api-item" href="#queueadapterabstractconsumer-receivenowait">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receiveNoWait</span>()</code>
<span class="desc">Receives a message without blocking, or null when none is ready.</span>
</a>
<a class="api-item" href="#queueadapterabstractconsumer-reject">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reject</span>(<span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$requeue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Rejects the message. When requeue is true the transport redelivers it.</span>
</a>
<a class="api-item" href="#queueadapterabstractconsumer-setpollinterval">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setPollInterval</span>( <span class="st">int</span> <span class="sv">$pollInterval</span> )</code>
<span class="desc">Sets the poll interval (in milliseconds) used by <code>receive()</code>.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$pollInterval</span><span class="sm"> = 200</span></code>
<span class="desc">Milliseconds slept between poll attempts.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">QueueInterface</code>
<code class="sig"><span class="sv">$queue</span></code>
<span class="desc">The queue this consumer reads from.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `acknowledge()` { #queueadapterabstractconsumer-acknowledge }

```php
abstract public function acknowledge( MessageInterface $message ): void;
```

Acknowledges the message; the transport may then discard it.

#### `getQueue()` { #queueadapterabstractconsumer-getqueue }

```php
public function getQueue(): QueueInterface;
```

Returns the queue this consumer reads from.

#### `receive()` { #queueadapterabstractconsumer-receive }

```php
public function receive( int $timeout = 0 ): MessageInterface|null;
```

Receives a message, blocking up to timeout milliseconds (0 = block
until one is available), by polling `receiveNoWait()` every
`pollInterval` milliseconds. Returns null when none arrives in time.

#### `receiveNoWait()` { #queueadapterabstractconsumer-receivenowait }

```php
abstract public function receiveNoWait(): MessageInterface|null;
```

Receives a message without blocking, or null when none is ready.

#### `reject()` { #queueadapterabstractconsumer-reject }

```php
abstract public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```

Rejects the message. When requeue is true the transport redelivers it.

#### `setPollInterval()` { #queueadapterabstractconsumer-setpollinterval }

```php
public function setPollInterval( int $pollInterval ): void;
```

Sets the poll interval (in milliseconds) used by `receive()`.


## Queue\Adapter\AbstractContext

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractContext.zep){ .src-btn }

Shared transport-session base. Every transport builds the same destination
value objects (GenericQueue / GenericTopic) and the same uniquely named
temporary queue, so those factories live here once. Concrete contexts
implement the transport-specific factories (consumer, producer, message,
subscription consumer) and the storage operations.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\AbstractContext`** - implements [`Phalcon\Contracts\Queue\Context`](phalcon_contracts.md#contractsqueuecontext)
    - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkContext`](#queueadapterbeanstalkbeanstalkcontext)
    - [`Phalcon\Queue\Adapter\Memory\MemoryContext`](#queueadaptermemorymemorycontext)
    - [`Phalcon\Queue\Adapter\Redis\RedisContext`](#queueadapterredisrediscontext)
    - [`Phalcon\Queue\Adapter\Stream\StreamContext`](#queueadapterstreamstreamcontext)

</div>

__Uses__ `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\Topic`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterabstractcontext-createqueue">
<code class="vis vis-public">public</code>
<code class="ret">QueueInterface</code>
<code class="sig"><span class="sf">createQueue</span>( <span class="st">string</span> <span class="sv">$queueName</span> )</code>
<span class="desc">Creates a queue destination by name.</span>
</a>
<a class="api-item" href="#queueadapterabstractcontext-createtemporaryqueue">
<code class="vis vis-public">public</code>
<code class="ret">QueueInterface</code>
<code class="sig"><span class="sf">createTemporaryQueue</span>()</code>
<span class="desc">Creates a uniquely named temporary queue.</span>
</a>
<a class="api-item" href="#queueadapterabstractcontext-createtopic">
<code class="vis vis-public">public</code>
<code class="ret">TopicInterface</code>
<code class="sig"><span class="sf">createTopic</span>( <span class="st">string</span> <span class="sv">$topicName</span> )</code>
<span class="desc">Creates a topic destination by name.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `createQueue()` { #queueadapterabstractcontext-createqueue }

```php
public function createQueue( string $queueName ): QueueInterface;
```

Creates a queue destination by name.

#### `createTemporaryQueue()` { #queueadapterabstractcontext-createtemporaryqueue }

```php
public function createTemporaryQueue(): QueueInterface;
```

Creates a uniquely named temporary queue.

#### `createTopic()` { #queueadapterabstractcontext-createtopic }

```php
public function createTopic( string $topicName ): TopicInterface;
```

Creates a topic destination by name.


## Queue\Adapter\AbstractMessage

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractMessage.zep){ .src-btn }

Shared base for the concrete adapter messages.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Queue\Adapter\Traits\MessageTrait directly instead of extending this.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\AbstractMessage`** - implements [`Phalcon\Contracts\Queue\Message`](phalcon_contracts.md#contractsqueuemessage)
    - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkMessage`](#queueadapterbeanstalkbeanstalkmessage)
    - [`Phalcon\Queue\Adapter\Memory\MemoryMessage`](#queueadaptermemorymemorymessage)
    - [`Phalcon\Queue\Adapter\Redis\RedisMessage`](#queueadapterredisredismessage)
    - [`Phalcon\Queue\Adapter\Stream\StreamMessage`](#queueadapterstreamstreammessage)

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\Traits\MessageTrait`
{ .api-uses }


## Queue\Adapter\AbstractProducer

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractProducer.zep){ .src-btn }

Shared producer base. Defaults every optional capability (delivery delay,
priority, time to live) to "unsupported": the getter returns null and the
setter throws the matching exception for any non-null value. A concrete
producer overrides only the capabilities its transport actually supports,
and implements `send()`.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\AbstractProducer`** - implements [`Phalcon\Contracts\Queue\Producer`](phalcon_contracts.md#contractsqueueproducer)
    - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkProducer`](#queueadapterbeanstalkbeanstalkproducer)
    - [`Phalcon\Queue\Adapter\Memory\MemoryProducer`](#queueadaptermemorymemoryproducer)
    - [`Phalcon\Queue\Adapter\Redis\RedisProducer`](#queueadapterredisredisproducer)
    - [`Phalcon\Queue\Adapter\Stream\StreamProducer`](#queueadapterstreamstreamproducer)

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException` · `Phalcon\Queue\Exceptions\PriorityNotSupportedException` · `Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterabstractproducer-getdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getDeliveryDelay</span>()</code>
</a>
<a class="api-item" href="#queueadapterabstractproducer-getpriority">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getPriority</span>()</code>
</a>
<a class="api-item" href="#queueadapterabstractproducer-gettimetolive">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getTimeToLive</span>()</code>
</a>
<a class="api-item" href="#queueadapterabstractproducer-send">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">send</span>(<span class="prm"><span class="st">DestinationInterface</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterabstractproducer-setdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">setDeliveryDelay</span>( <span class="st">mixed</span> <span class="sv">$deliveryDelay</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#queueadapterabstractproducer-setpriority">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">setPriority</span>( <span class="st">mixed</span> <span class="sv">$priority</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#queueadapterabstractproducer-settimetolive">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">setTimeToLive</span>( <span class="st">mixed</span> <span class="sv">$timeToLive</span><span class="sm"> = null</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `getDeliveryDelay()` { #queueadapterabstractproducer-getdeliverydelay }

```php
public function getDeliveryDelay(): int|null;
```

#### `getPriority()` { #queueadapterabstractproducer-getpriority }

```php
public function getPriority(): int|null;
```

#### `getTimeToLive()` { #queueadapterabstractproducer-gettimetolive }

```php
public function getTimeToLive(): int|null;
```

#### `send()` { #queueadapterabstractproducer-send }

```php
abstract public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```

#### `setDeliveryDelay()` { #queueadapterabstractproducer-setdeliverydelay }

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): ProducerInterface;
```

#### `setPriority()` { #queueadapterabstractproducer-setpriority }

```php
public function setPriority( mixed $priority = null ): ProducerInterface;
```

#### `setTimeToLive()` { #queueadapterabstractproducer-settimetolive }

```php
public function setTimeToLive( mixed $timeToLive = null ): ProducerInterface;
```


## Queue\Adapter\AbstractSubscriptionConsumer

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractSubscriptionConsumer.zep){ .src-btn }

Shared subscription-consumer base.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait directly instead of
extending this.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`** - implements [`Phalcon\Contracts\Queue\SubscriptionConsumer`](phalcon_contracts.md#contractsqueuesubscriptionconsumer)
    - [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer`](#queueadapterbeanstalkbeanstalksubscriptionconsumer)
    - [`Phalcon\Queue\Adapter\Memory\MemorySubscriptionConsumer`](#queueadaptermemorymemorysubscriptionconsumer)
    - [`Phalcon\Queue\Adapter\Redis\RedisSubscriptionConsumer`](#queueadapterredisredissubscriptionconsumer)
    - [`Phalcon\Queue\Adapter\Stream\StreamSubscriptionConsumer`](#queueadapterstreamstreamsubscriptionconsumer)

</div>

__Uses__ `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait`
{ .api-uses }


## Queue\Adapter\Beanstalk\BeanstalkConnection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkConnection.zep){ .src-btn }

Dependency-free socket client for the Beanstalkd work queue, implementing
the subset of the 1.2 protocol the adapter needs (use/watch/ignore, put,
reserve-with-timeout, delete/release/bury/touch). Recovered and trimmed
from the original Phalcon\Queue\Beanstalk transport.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnection`**

</div>

__Uses__ `Phalcon\Queue\Exceptions\Exception` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$host</span><span class="sm"> = &quot;127.0.0.1&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$port</span><span class="sm"> = 11300</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$persistent</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-buryjob">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">buryJob</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span></span>)</code>
<span class="desc">Puts a reserved job into the &quot;buried&quot; state.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-connect">
<code class="vis vis-public">public</code>
<code class="ret">resource</code>
<code class="sig"><span class="sf">connect</span>()</code>
<span class="desc">Opens the socket connection to the Beanstalkd server.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-deletejob">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">deleteJob</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Removes a job from the server entirely.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">disconnect</span>()</code>
<span class="desc">Closes the connection to the server.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-ignoretube">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">ignoreTube</span>( <span class="st">string</span> <span class="sv">$tube</span> )</code>
<span class="desc">Removes the named tube from the watch list for the connection.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-put">
<code class="vis vis-public">public</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">put</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$delay</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$ttr</span></span>)</code>
<span class="desc">Puts a job on the queue using the currently used tube. Returns the new</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-read">
<code class="vis vis-public">public</code>
<code class="ret">bool|string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">int</span> <span class="sv">$length</span><span class="sm"> = 0</span> )</code>
<span class="desc">Reads a packet from the socket. Verifies the connection is available</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-readstatus">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">readStatus</span>()</code>
<span class="desc">Reads the latest status line and splits it into tokens.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-releasejob">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">releaseJob</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$delay</span></span>)</code>
<span class="desc">Puts a reserved job back into the ready queue.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-reserve">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">reserve</span>( <span class="st">mixed</span> <span class="sv">$timeout</span><span class="sm"> = null</span> )</code>
<span class="desc">Reserves a ready job from a watched tube. A null timeout blocks until a</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-statstube">
<code class="vis vis-public">public</code>
<code class="ret">array|bool</code>
<code class="sig"><span class="sf">statsTube</span>( <span class="st">string</span> <span class="sv">$tube</span> )</code>
<span class="desc">Returns the Beanstalkd statistics for a tube as an associative array, or</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-touchjob">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">touchJob</span>( <span class="st">string</span> <span class="sv">$id</span> )</code>
<span class="desc">Extends the time-to-run of a reserved job.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-usetube">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">useTube</span>( <span class="st">string</span> <span class="sv">$tube</span> )</code>
<span class="desc">Changes the tube new jobs are put on. By default this is &quot;default&quot;.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-watchtube">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">watchTube</span>( <span class="st">string</span> <span class="sv">$tube</span> )</code>
<span class="desc">Adds the named tube to the watch list for the connection.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnection-write">
<code class="vis vis-public">public</code>
<code class="ret">bool|int</code>
<code class="sig"><span class="sf">write</span>( <span class="st">string</span> <span class="sv">$data</span> )</code>
<span class="desc">Writes data to the socket, connecting first when needed.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">resource</code>
<code class="sig"><span class="sv">$connection</span></code>
<span class="desc">Connection resource.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$host</span><span class="sm"> = &quot;127.0.0.1&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$persistent</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$port</span><span class="sm"> = 11300</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$usedTube</span><span class="sm"> = &quot;default&quot;</span></code>
<span class="desc">Tube currently selected with <code>use</code>. A fresh connection uses &quot;default&quot;.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$watchedTubes</span><span class="sm"> = []</span></code>
<span class="desc">Tubes currently on the watch list, keyed by tube name. A fresh
connection watches &quot;default&quot;.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `__construct()` { #queueadapterbeanstalkbeanstalkconnection-__construct }

```php
public function __construct(
    string $host = "127.0.0.1",
    int $port = 11300,
    bool $persistent = false
);
```

#### `buryJob()` { #queueadapterbeanstalkbeanstalkconnection-buryjob }

```php
public function buryJob(
    string $id,
    int $priority
): bool;
```

Puts a reserved job into the "buried" state.

#### `connect()` { #queueadapterbeanstalkbeanstalkconnection-connect }

```php
public function connect(): resource;
```

Opens the socket connection to the Beanstalkd server.

#### `deleteJob()` { #queueadapterbeanstalkbeanstalkconnection-deletejob }

```php
public function deleteJob( string $id ): bool;
```

Removes a job from the server entirely.

#### `disconnect()` { #queueadapterbeanstalkbeanstalkconnection-disconnect }

```php
public function disconnect(): bool;
```

Closes the connection to the server.

#### `ignoreTube()` { #queueadapterbeanstalkbeanstalkconnection-ignoretube }

```php
public function ignoreTube( string $tube ): bool;
```

Removes the named tube from the watch list for the connection.

#### `put()` { #queueadapterbeanstalkbeanstalkconnection-put }

```php
public function put(
    string $data,
    int $priority,
    int $delay,
    int $ttr
): int|bool;
```

Puts a job on the queue using the currently used tube. Returns the new
job id, or false when the server did not accept it.

#### `read()` { #queueadapterbeanstalkbeanstalkconnection-read }

```php
public function read( int $length = 0 ): bool|string;
```

Reads a packet from the socket. Verifies the connection is available
first.

#### `readStatus()` { #queueadapterbeanstalkbeanstalkconnection-readstatus }

```php
public function readStatus(): array;
```

Reads the latest status line and splits it into tokens.

#### `releaseJob()` { #queueadapterbeanstalkbeanstalkconnection-releasejob }

```php
public function releaseJob(
    string $id,
    int $priority,
    int $delay
): bool;
```

Puts a reserved job back into the ready queue.

#### `reserve()` { #queueadapterbeanstalkbeanstalkconnection-reserve }

```php
public function reserve( mixed $timeout = null ): array|null;
```

Reserves a ready job from a watched tube. A null timeout blocks until a
job is available; otherwise it blocks up to timeout seconds. Returns
[id, body] or null when none is reserved.

#### `statsTube()` { #queueadapterbeanstalkbeanstalkconnection-statstube }

```php
public function statsTube( string $tube ): array|bool;
```

Returns the Beanstalkd statistics for a tube as an associative array, or
false when the tube does not exist.

#### `touchJob()` { #queueadapterbeanstalkbeanstalkconnection-touchjob }

```php
public function touchJob( string $id ): bool;
```

Extends the time-to-run of a reserved job.

#### `useTube()` { #queueadapterbeanstalkbeanstalkconnection-usetube }

```php
public function useTube( string $tube ): bool;
```

Changes the tube new jobs are put on. By default this is "default".

#### `watchTube()` { #queueadapterbeanstalkbeanstalkconnection-watchtube }

```php
public function watchTube( string $tube ): bool;
```

Adds the named tube to the watch list for the connection.

#### `write()` { #queueadapterbeanstalkbeanstalkconnection-write }

```php
public function write( string $data ): bool|int;
```

Writes data to the socket, connecting first when needed.


## Queue\Adapter\Beanstalk\BeanstalkConnectionFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkConnectionFactory.zep){ .src-btn }

Builds a BeanstalkContext.

Options:
  - host:         server host (default 127.0.0.1).
  - port:         server port (default 11300).
  - persistent:   use a persistent socket (default false).
  - ttr:          default time-to-run in seconds for every job (default 86400).
  - pollInterval: milliseconds between subscription poll passes (default 200).

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](phalcon_contracts.md#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnectionfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconnectionfactory-createcontext">
<code class="vis vis-public">public</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sf">createContext</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadapterbeanstalkbeanstalkconnectionfactory-__construct }

```php
public function __construct( array $options = [] );
```

#### `createContext()` { #queueadapterbeanstalkbeanstalkconnectionfactory-createcontext }

```php
public function createContext(): ContextInterface;
```


## Queue\Adapter\Beanstalk\BeanstalkConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkConsumer.zep){ .src-btn }

Receives messages from a single Beanstalkd tube over its own connection.
`receive()` is overridden to use the native blocking reserve. Implements
VisibilityAware: a reserved job has a time-to-run window that `touch()`
extends; acknowledging deletes the job, rejecting releases it (requeue) or
buries it.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
    - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConsumer`** - implements [`Phalcon\Contracts\Queue\VisibilityAware`](phalcon_contracts.md#contractsqueuevisibilityaware)

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\VisibilityAware` · `Phalcon\Queue\Adapter\AbstractConsumer` · `Phalcon\Queue\Adapter\MessageEnvelope`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">BeanstalkConnection</span> <span class="sv">$connection</span>,</span><span class="prm"><span class="st">QueueInterface</span> <span class="sv">$queue</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconsumer-acknowledge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">acknowledge</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconsumer-receive">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receive</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconsumer-receivenowait">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receiveNoWait</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconsumer-reject">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reject</span>(<span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$requeue</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkconsumer-touch">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">touch</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Extends the time-to-run window of a reserved job (VisibilityAware).</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEFAULT_PRIORITY</span><span class="sm"> = 100</span></code>
<span class="desc">Default Beanstalkd priority used when releasing or burying.</span>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">BeanstalkConnection</code>
<code class="sig"><span class="sv">$connection</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #queueadapterbeanstalkbeanstalkconsumer-__construct }

```php
public function __construct(
    BeanstalkConnection $connection,
    QueueInterface $queue
);
```

#### `acknowledge()` { #queueadapterbeanstalkbeanstalkconsumer-acknowledge }

```php
public function acknowledge( MessageInterface $message ): void;
```

#### `receive()` { #queueadapterbeanstalkbeanstalkconsumer-receive }

```php
public function receive( int $timeout = 0 ): MessageInterface|null;
```

#### `receiveNoWait()` { #queueadapterbeanstalkbeanstalkconsumer-receivenowait }

```php
public function receiveNoWait(): MessageInterface|null;
```

#### `reject()` { #queueadapterbeanstalkbeanstalkconsumer-reject }

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```

#### `touch()` { #queueadapterbeanstalkbeanstalkconsumer-touch }

```php
public function touch( MessageInterface $message ): bool;
```

Extends the time-to-run window of a reserved job (VisibilityAware).


## Queue\Adapter\Beanstalk\BeanstalkContext

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkContext.zep){ .src-btn }

Beanstalkd transport session. A queue maps to a Beanstalkd tube. Producers
share the context connection (`use` + `put`); each consumer owns its own
connection, because Beanstalkd only lets the reserving connection delete,
release, bury or touch a job. The destination factories come from
AbstractContext.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
    - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkContext`** - implements [`Phalcon\Contracts\Queue\Inspectable`](phalcon_contracts.md#contractsqueueinspectable)

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Inspectable` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$host</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$port</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$persistent</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$ttr</span><span class="sm"> = 86400</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-createconsumer">
<code class="vis vis-public">public</code>
<code class="ret">ConsumerInterface</code>
<code class="sig"><span class="sf">createConsumer</span>( <span class="st">DestinationInterface</span> <span class="sv">$destination</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-createmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">createMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$body</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-createproducer">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">createProducer</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-createsubscriptionconsumer">
<code class="vis vis-public">public</code>
<code class="ret">SubscriptionConsumerInterface</code>
<code class="sig"><span class="sf">createSubscriptionConsumer</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-getstats">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getStats</span>( <span class="st">QueueInterface</span> <span class="sv">$queue</span> )</code>
<span class="desc">Returns the Beanstalkd <code>stats-tube</code> fields for the queue&#039;s tube as an</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-getttr">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTtr</span>()</code>
<span class="desc">Default time-to-run (seconds) for new jobs. Used by BeanstalkProducer.</span>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-purgequeue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">purgeQueue</span>( <span class="st">QueueInterface</span> <span class="sv">$queue</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkcontext-putmessage">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">putMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tube</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$payload</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$delay</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$ttr</span></span>)</code>
<span class="desc">Puts a serialized payload on a tube via the shared connection.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">BeanstalkConnection | null</code>
<code class="sig"><span class="sv">$connection</span><span class="sm"> = null</span></code>
<span class="desc">Shared connection used by producers and purges.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$host</span><span class="sm"> = &quot;127.0.0.1&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$persistent</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$pollInterval</span><span class="sm"> = 200</span></code>
<span class="desc">Milliseconds slept between poll passes by a subscription consumer.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$port</span><span class="sm"> = 11300</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$ttr</span><span class="sm"> = 86400</span></code>
<span class="desc">Default time-to-run (seconds) applied to every put.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #queueadapterbeanstalkbeanstalkcontext-__construct }

```php
public function __construct(
    string $host,
    int $port,
    bool $persistent = false,
    int $ttr = 86400,
    int $pollInterval = 200
);
```

#### `close()` { #queueadapterbeanstalkbeanstalkcontext-close }

```php
public function close(): void;
```

#### `createConsumer()` { #queueadapterbeanstalkbeanstalkcontext-createconsumer }

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

#### `createMessage()` { #queueadapterbeanstalkbeanstalkcontext-createmessage }

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

#### `createProducer()` { #queueadapterbeanstalkbeanstalkcontext-createproducer }

```php
public function createProducer(): ProducerInterface;
```

#### `createSubscriptionConsumer()` { #queueadapterbeanstalkbeanstalkcontext-createsubscriptionconsumer }

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

#### `getStats()` { #queueadapterbeanstalkbeanstalkcontext-getstats }

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

#### `getTtr()` { #queueadapterbeanstalkbeanstalkcontext-getttr }

```php
public function getTtr(): int;
```

Default time-to-run (seconds) for new jobs. Used by BeanstalkProducer.

#### `purgeQueue()` { #queueadapterbeanstalkbeanstalkcontext-purgequeue }

```php
public function purgeQueue( QueueInterface $queue ): void;
```

#### `putMessage()` { #queueadapterbeanstalkbeanstalkcontext-putmessage }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkMessage.zep){ .src-btn }

Beanstalkd-backed message. Carries the reserved job id so the consumer can
delete, release, bury or touch it; all other behavior comes from
MessageTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
    - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalkmessage-getjobid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getJobId</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkmessage-setjobid">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setJobId</span>( <span class="st">string</span> <span class="sv">$jobId</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string | null</code>
<code class="sig"><span class="sv">$jobId</span><span class="sm"> = null</span></code>
<span class="desc">The reserved Beanstalkd job id, or null before it is reserved.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getJobId()` { #queueadapterbeanstalkbeanstalkmessage-getjobid }

```php
public function getJobId(): string|null;
```

#### `setJobId()` { #queueadapterbeanstalkbeanstalkmessage-setjobid }

```php
public function setJobId( string $jobId ): void;
```


## Queue\Adapter\Beanstalk\BeanstalkProducer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkProducer.zep){ .src-btn }

Sends messages to a Beanstalkd tube. Delivery delay (rounded down to whole
seconds) and message priority are supported natively; Beanstalkd has no
message expiry, so time to live is not (the default from AbstractProducer
rejects it).

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
    - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalkproducer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">BeanstalkContext</span> <span class="sv">$context</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkproducer-getdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getDeliveryDelay</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkproducer-getpriority">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getPriority</span>()</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkproducer-send">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">send</span>(<span class="prm"><span class="st">DestinationInterface</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkproducer-setdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">setDeliveryDelay</span>( <span class="st">mixed</span> <span class="sv">$deliveryDelay</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#queueadapterbeanstalkbeanstalkproducer-setpriority">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">setPriority</span>( <span class="st">mixed</span> <span class="sv">$priority</span><span class="sm"> = null</span> )</code>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEFAULT_PRIORITY</span><span class="sm"> = 100</span></code>
<span class="desc">Default Beanstalkd priority (0 = most urgent).</span>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">BeanstalkContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int | null</code>
<code class="sig"><span class="sv">$deliveryDelay</span><span class="sm"> = null</span></code>
<span class="desc">Delivery delay in milliseconds, or null when not set.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int | null</code>
<code class="sig"><span class="sv">$priority</span><span class="sm"> = null</span></code>
<span class="desc">Job priority, or null when not set.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #queueadapterbeanstalkbeanstalkproducer-__construct }

```php
public function __construct( BeanstalkContext $context );
```

#### `getDeliveryDelay()` { #queueadapterbeanstalkbeanstalkproducer-getdeliverydelay }

```php
public function getDeliveryDelay(): int|null;
```

#### `getPriority()` { #queueadapterbeanstalkbeanstalkproducer-getpriority }

```php
public function getPriority(): int|null;
```

#### `send()` { #queueadapterbeanstalkbeanstalkproducer-send }

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```

#### `setDeliveryDelay()` { #queueadapterbeanstalkbeanstalkproducer-setdeliverydelay }

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): ProducerInterface;
```

#### `setPriority()` { #queueadapterbeanstalkbeanstalkproducer-setpriority }

```php
public function setPriority( mixed $priority = null ): ProducerInterface;
```


## Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkSubscriptionConsumer.zep){ .src-btn }

Consumes from several Beanstalkd tubes at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
    - **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterbeanstalkbeanstalksubscriptionconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">BeanstalkContext</span> <span class="sv">$context</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">BeanstalkContext</code>
<code class="sig"><span class="sv">$context</span></code>
<span class="desc">Retained for transports that may later need it for a native multi-queue
receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueadapterbeanstalkbeanstalksubscriptionconsumer-__construct }

```php
public function __construct(
    BeanstalkContext $context,
    int $pollInterval = 200
);
```


## Queue\Adapter\GenericQueue

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/GenericQueue.zep){ .src-btn }

A named queue destination shared by every transport. A queue name is the
only knowledge a destination carries, so the adapters need no transport
specific subclass.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\GenericQueue`** - implements [`Phalcon\Contracts\Queue\Queue`](phalcon_contracts.md#contractsqueuequeue)

</div>

__Uses__ `Phalcon\Contracts\Queue\Queue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptergenericqueue-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$queueName</span> )</code>
<span class="desc">GenericQueue constructor.</span>
</a>
<a class="api-item" href="#queueadaptergenericqueue-getqueuename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getQueueName</span>()</code>
<span class="desc">Returns the queue name.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$queueName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadaptergenericqueue-__construct }

```php
public function __construct( string $queueName );
```

GenericQueue constructor.

#### `getQueueName()` { #queueadaptergenericqueue-getqueuename }

```php
public function getQueueName(): string;
```

Returns the queue name.


## Queue\Adapter\GenericTopic

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/GenericTopic.zep){ .src-btn }

A named topic destination shared by every transport. A topic name is the
only knowledge a destination carries, so the adapters need no transport
specific subclass.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\GenericTopic`** - implements [`Phalcon\Contracts\Queue\Topic`](phalcon_contracts.md#contractsqueuetopic)

</div>

__Uses__ `Phalcon\Contracts\Queue\Topic`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptergenerictopic-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$topicName</span> )</code>
<span class="desc">GenericTopic constructor.</span>
</a>
<a class="api-item" href="#queueadaptergenerictopic-gettopicname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTopicName</span>()</code>
<span class="desc">Returns the topic name.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$topicName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadaptergenerictopic-__construct }

```php
public function __construct( string $topicName );
```

GenericTopic constructor.

#### `getTopicName()` { #queueadaptergenerictopic-gettopicname }

```php
public function getTopicName(): string;
```

Returns the topic name.


## Queue\Adapter\Memory\MemoryConnectionFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryConnectionFactory.zep){ .src-btn }

Builds a MemoryContext. The Memory transport takes no options.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](phalcon_contracts.md#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermemorymemoryconnectionfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">MemoryConnectionFactory constructor.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemoryconnectionfactory-createcontext">
<code class="vis vis-public">public</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sf">createContext</span>()</code>
<span class="desc">Creates a new in-process context.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadaptermemorymemoryconnectionfactory-__construct }

```php
public function __construct( array $options = [] );
```

MemoryConnectionFactory constructor.

#### `createContext()` { #queueadaptermemorymemoryconnectionfactory-createcontext }

```php
public function createContext(): ContextInterface;
```

Creates a new in-process context.


## Queue\Adapter\Memory\MemoryConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryConsumer.zep){ .src-btn }

Receives messages from a single in-process queue. `receive()` is the
polling loop inherited from AbstractConsumer.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
    - **`Phalcon\Queue\Adapter\Memory\MemoryConsumer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermemorymemoryconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">MemoryContext</span> <span class="sv">$context</span>,</span><span class="prm"><span class="st">QueueInterface</span> <span class="sv">$queue</span></span>)</code>
<span class="desc">MemoryConsumer constructor.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemoryconsumer-acknowledge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">acknowledge</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">No-op: a received message has already been removed from the queue.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemoryconsumer-receivenowait">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receiveNoWait</span>()</code>
<span class="desc">Removes and returns the next message, or null when the queue is empty.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemoryconsumer-reject">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reject</span>(<span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$requeue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Rejects the message. When requeue is true it is put back on the queue.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">MemoryContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #queueadaptermemorymemoryconsumer-__construct }

```php
public function __construct(
    MemoryContext $context,
    QueueInterface $queue
);
```

MemoryConsumer constructor.

#### `acknowledge()` { #queueadaptermemorymemoryconsumer-acknowledge }

```php
public function acknowledge( MessageInterface $message ): void;
```

No-op: a received message has already been removed from the queue.

#### `receiveNoWait()` { #queueadaptermemorymemoryconsumer-receivenowait }

```php
public function receiveNoWait(): MessageInterface|null;
```

Removes and returns the next message, or null when the queue is empty.

#### `reject()` { #queueadaptermemorymemoryconsumer-reject }

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```

Rejects the message. When requeue is true it is put back on the queue.


## Queue\Adapter\Memory\MemoryContext

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryContext.zep){ .src-btn }

In-process transport session. Owns the named FIFO queues that this context's
producers and consumers share. The destination factories (createQueue /
createTopic / createTemporaryQueue) come from AbstractContext.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
    - **`Phalcon\Queue\Adapter\Memory\MemoryContext`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermemorymemorycontext-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the context and drops every stored message.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-createconsumer">
<code class="vis vis-public">public</code>
<code class="ret">ConsumerInterface</code>
<code class="sig"><span class="sf">createConsumer</span>( <span class="st">DestinationInterface</span> <span class="sv">$destination</span> )</code>
<span class="desc">Creates a consumer for the given queue destination.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-createmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">createMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$body</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Creates a message.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-createproducer">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">createProducer</span>()</code>
<span class="desc">Creates a producer.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-createsubscriptionconsumer">
<code class="vis vis-public">public</code>
<code class="ret">SubscriptionConsumerInterface</code>
<code class="sig"><span class="sf">createSubscriptionConsumer</span>()</code>
<span class="desc">Creates a subscription consumer.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-popmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">popMessage</span>( <span class="st">string</span> <span class="sv">$queueName</span> )</code>
<span class="desc">Removes the front message from a queue, or null when it is empty.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-purgequeue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">purgeQueue</span>( <span class="st">QueueInterface</span> <span class="sv">$queue</span> )</code>
<span class="desc">Removes all messages from the given queue.</span>
</a>
<a class="api-item" href="#queueadaptermemorymemorycontext-pushmessage">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">pushMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$queueName</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Appends a message to the back of a queue.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$queues</span><span class="sm"> = []</span></code>
<span class="desc">Named queues: queue name =&gt; list of messages (FIFO).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `close()` { #queueadaptermemorymemorycontext-close }

```php
public function close(): void;
```

Closes the context and drops every stored message.

#### `createConsumer()` { #queueadaptermemorymemorycontext-createconsumer }

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

Creates a consumer for the given queue destination.

#### `createMessage()` { #queueadaptermemorymemorycontext-createmessage }

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

Creates a message.

#### `createProducer()` { #queueadaptermemorymemorycontext-createproducer }

```php
public function createProducer(): ProducerInterface;
```

Creates a producer.

#### `createSubscriptionConsumer()` { #queueadaptermemorymemorycontext-createsubscriptionconsumer }

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

Creates a subscription consumer.

#### `popMessage()` { #queueadaptermemorymemorycontext-popmessage }

```php
public function popMessage( string $queueName ): MessageInterface|null;
```

Removes the front message from a queue, or null when it is empty.
Internal transport API used by MemoryConsumer.

#### `purgeQueue()` { #queueadaptermemorymemorycontext-purgequeue }

```php
public function purgeQueue( QueueInterface $queue ): void;
```

Removes all messages from the given queue.

#### `pushMessage()` { #queueadaptermemorymemorycontext-pushmessage }

```php
public function pushMessage(
    string $queueName,
    MessageInterface $message
): void;
```

Appends a message to the back of a queue.
Internal transport API used by MemoryProducer.


## Queue\Adapter\Memory\MemoryMessage

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryMessage.zep){ .src-btn }

In-process message. All behavior comes from MessageTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
    - **`Phalcon\Queue\Adapter\Memory\MemoryMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`
{ .api-uses }


## Queue\Adapter\Memory\MemoryProducer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryProducer.zep){ .src-btn }

Sends messages into an in-process queue. The Memory transport delivers
immediately and in-process, so delivery delay, priority and time to live are
not supported (the defaults from AbstractProducer reject them).

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
    - **`Phalcon\Queue\Adapter\Memory\MemoryProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermemorymemoryproducer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">MemoryContext</span> <span class="sv">$context</span> )</code>
</a>
<a class="api-item" href="#queueadaptermemorymemoryproducer-send">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">send</span>(<span class="prm"><span class="st">DestinationInterface</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">MemoryContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadaptermemorymemoryproducer-__construct }

```php
public function __construct( MemoryContext $context );
```

#### `send()` { #queueadaptermemorymemoryproducer-send }

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```


## Queue\Adapter\Memory\MemorySubscriptionConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemorySubscriptionConsumer.zep){ .src-btn }

Consumes from several in-process queues at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
    - **`Phalcon\Queue\Adapter\Memory\MemorySubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermemorymemorysubscriptionconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">MemoryContext</span> <span class="sv">$context</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">MemoryContext</code>
<code class="sig"><span class="sv">$context</span></code>
<span class="desc">Retained for transports that may later need it for a native multi-queue
receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueadaptermemorymemorysubscriptionconsumer-__construct }

```php
public function __construct( MemoryContext $context );
```


## Queue\Adapter\MessageEnvelope

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/MessageEnvelope.zep){ .src-btn }

Encodes and decodes the {body, properties, headers} envelope shared by every
transport that persists a message as a serialized string (Stream, Redis,
Beanstalk). Centralizes the wire shape, the object-injection-safe
`allowed_classes => false` guard, and the missing-key defaults, so each
adapter only supplies its own concrete message factory around `decode()`.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\MessageEnvelope`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermessageenvelope-decode">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">decode</span>( <span class="st">string</span> <span class="sv">$payload</span> )</code>
<span class="desc">Decodes a serialized payload into a normalized {body, properties,</span>
</a>
<a class="api-item" href="#queueadaptermessageenvelope-encode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">encode</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Serializes a message into its wire envelope.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `decode()` { #queueadaptermessageenvelope-decode }

```php
public static function decode( string $payload ): array|null;
```

Decodes a serialized payload into a normalized {body, properties,
headers} array, or null when the payload is not a valid envelope.

#### `encode()` { #queueadaptermessageenvelope-encode }

```php
public static function encode( MessageInterface $message ): string;
```

Serializes a message into its wire envelope.


## Queue\Adapter\QueueDestinationGuard

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/QueueDestinationGuard.zep){ .src-btn }

Shared "destination must be a queue" guard. Producers (on send) and contexts
(on createConsumer) both reject any non-queue destination with the same typed
exception; this keeps that single rule in one place. The `action` verb
("send to", "consume from") tailors the message to the caller.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\QueueDestinationGuard`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Exceptions\InvalidDestinationException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterqueuedestinationguard-assertqueue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">assertQueue</span>(<span class="prm"><span class="st">DestinationInterface</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$action</span></span>)</code>
<span class="desc">Throws InvalidDestinationException unless the destination is a queue.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `assertQueue()` { #queueadapterqueuedestinationguard-assertqueue }

```php
public static function assertQueue(
    DestinationInterface $destination,
    string $action
): void;
```

Throws InvalidDestinationException unless the destination is a queue.


## Queue\Adapter\Redis\RedisConnectionFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisConnectionFactory.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Redis\RedisConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](phalcon_contracts.md#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Queue\Exceptions\Exception` · `Phalcon\Storage\Adapter\Redis` · `Phalcon\Storage\Exception` · `Phalcon\Storage\SerializerFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterredisredisconnectionfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#queueadapterredisredisconnectionfactory-createcontext">
<code class="vis vis-public">public</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sf">createContext</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadapterredisredisconnectionfactory-__construct }

```php
public function __construct( array $options = [] );
```

#### `createContext()` { #queueadapterredisredisconnectionfactory-createcontext }

```php
public function createContext(): ContextInterface;
```


## Queue\Adapter\Redis\RedisConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisConsumer.zep){ .src-btn }

Receives messages from a single Redis queue. `receive()` is overridden to
use the native blocking BRPOP (in one-second chunks, so due delayed
messages keep getting promoted) instead of the inherited polling loop.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
    - **`Phalcon\Queue\Adapter\Redis\RedisConsumer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterredisredisconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">RedisContext</span> <span class="sv">$context</span>,</span><span class="prm"><span class="st">QueueInterface</span> <span class="sv">$queue</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterredisredisconsumer-acknowledge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">acknowledge</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">No-op: a received message has already been removed from the queue.</span>
</a>
<a class="api-item" href="#queueadapterredisredisconsumer-receive">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receive</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
</a>
<a class="api-item" href="#queueadapterredisredisconsumer-receivenowait">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receiveNoWait</span>()</code>
</a>
<a class="api-item" href="#queueadapterredisredisconsumer-reject">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reject</span>(<span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$requeue</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RedisContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #queueadapterredisredisconsumer-__construct }

```php
public function __construct(
    RedisContext $context,
    QueueInterface $queue
);
```

#### `acknowledge()` { #queueadapterredisredisconsumer-acknowledge }

```php
public function acknowledge( MessageInterface $message ): void;
```

No-op: a received message has already been removed from the queue.

#### `receive()` { #queueadapterredisredisconsumer-receive }

```php
public function receive( int $timeout = 0 ): MessageInterface|null;
```

#### `receiveNoWait()` { #queueadapterredisredisconsumer-receivenowait }

```php
public function receiveNoWait(): MessageInterface|null;
```

#### `reject()` { #queueadapterredisredisconsumer-reject }

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```


## Queue\Adapter\Redis\RedisContext

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisContext.zep){ .src-btn }

Redis transport session (ext-redis). Each queue is a Redis list; messages
are LPUSHed on send and RPOP/BRPOPed on receive, giving FIFO delivery.
Delayed messages live in a companion sorted set (`<key>:delayed`) scored by
their due time in milliseconds, and are promoted into the list once due. The
destination factories come from AbstractContext.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
    - **`Phalcon\Queue\Adapter\Redis\RedisContext`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterredisrediscontext-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$redis</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$prefix</span><span class="sm"> = &quot;phalcon_queue:&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-blockingpop">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">blockingPop</span>(<span class="prm"><span class="st">string</span> <span class="sv">$queueName</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$timeout</span></span>)</code>
<span class="desc">Blocking pop from the back of a queue list. Promotes any due delayed</span>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-createconsumer">
<code class="vis vis-public">public</code>
<code class="ret">ConsumerInterface</code>
<code class="sig"><span class="sf">createConsumer</span>( <span class="st">DestinationInterface</span> <span class="sv">$destination</span> )</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-createmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">createMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$body</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-createproducer">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">createProducer</span>()</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-createsubscriptionconsumer">
<code class="vis vis-public">public</code>
<code class="ret">SubscriptionConsumerInterface</code>
<code class="sig"><span class="sf">createSubscriptionConsumer</span>()</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-popmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">popMessage</span>( <span class="st">string</span> <span class="sv">$queueName</span> )</code>
<span class="desc">Non-blocking pop from the back of a queue list, or null when empty.</span>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-purgequeue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">purgeQueue</span>( <span class="st">QueueInterface</span> <span class="sv">$queue</span> )</code>
</a>
<a class="api-item" href="#queueadapterredisrediscontext-pushmessage">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">pushMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$queueName</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$delay</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Sends a message to a queue. With a positive delay (milliseconds) the</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$pollInterval</span><span class="sm"> = 200</span></code>
<span class="desc">Milliseconds slept between poll passes by a subscription consumer.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;phalcon_queue:&quot;</span></code>
<span class="desc">Key prefix applied to every queue (and its delayed companion set).</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">\Redis</code>
<code class="sig"><span class="sv">$redis</span></code>
<span class="desc">The connected ext-redis client.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #queueadapterredisrediscontext-__construct }

```php
public function __construct(
    mixed $redis,
    string $prefix = "phalcon_queue:",
    int $pollInterval = 200
);
```

#### `blockingPop()` { #queueadapterredisrediscontext-blockingpop }

```php
public function blockingPop(
    string $queueName,
    int $timeout
): MessageInterface|null;
```

Blocking pop from the back of a queue list. Promotes any due delayed
messages first, then blocks up to timeout seconds. Internal transport
API used by RedisConsumer.

#### `close()` { #queueadapterredisrediscontext-close }

```php
public function close(): void;
```

#### `createConsumer()` { #queueadapterredisrediscontext-createconsumer }

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

#### `createMessage()` { #queueadapterredisrediscontext-createmessage }

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

#### `createProducer()` { #queueadapterredisrediscontext-createproducer }

```php
public function createProducer(): ProducerInterface;
```

#### `createSubscriptionConsumer()` { #queueadapterredisrediscontext-createsubscriptionconsumer }

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

#### `popMessage()` { #queueadapterredisrediscontext-popmessage }

```php
public function popMessage( string $queueName ): MessageInterface|null;
```

Non-blocking pop from the back of a queue list, or null when empty.
Promotes any due delayed messages first. Internal transport API used
by RedisConsumer.

#### `purgeQueue()` { #queueadapterredisrediscontext-purgequeue }

```php
public function purgeQueue( QueueInterface $queue ): void;
```

#### `pushMessage()` { #queueadapterredisrediscontext-pushmessage }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisMessage.zep){ .src-btn }

Redis-backed message. All behavior comes from MessageTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
    - **`Phalcon\Queue\Adapter\Redis\RedisMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`
{ .api-uses }


## Queue\Adapter\Redis\RedisProducer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisProducer.zep){ .src-btn }

Sends messages to a Redis queue. Delivery delay is supported (via the
delayed sorted set); priority and time to live are not (the defaults from
AbstractProducer reject them).

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
    - **`Phalcon\Queue\Adapter\Redis\RedisProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterredisredisproducer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">RedisContext</span> <span class="sv">$context</span> )</code>
</a>
<a class="api-item" href="#queueadapterredisredisproducer-getdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getDeliveryDelay</span>()</code>
</a>
<a class="api-item" href="#queueadapterredisredisproducer-send">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">send</span>(<span class="prm"><span class="st">DestinationInterface</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterredisredisproducer-setdeliverydelay">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">setDeliveryDelay</span>( <span class="st">mixed</span> <span class="sv">$deliveryDelay</span><span class="sm"> = null</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RedisContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int | null</code>
<code class="sig"><span class="sv">$deliveryDelay</span><span class="sm"> = null</span></code>
<span class="desc">Delivery delay in milliseconds, or null when not set.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #queueadapterredisredisproducer-__construct }

```php
public function __construct( RedisContext $context );
```

#### `getDeliveryDelay()` { #queueadapterredisredisproducer-getdeliverydelay }

```php
public function getDeliveryDelay(): int|null;
```

#### `send()` { #queueadapterredisredisproducer-send }

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```

#### `setDeliveryDelay()` { #queueadapterredisredisproducer-setdeliverydelay }

```php
public function setDeliveryDelay( mixed $deliveryDelay = null ): ProducerInterface;
```


## Queue\Adapter\Redis\RedisSubscriptionConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisSubscriptionConsumer.zep){ .src-btn }

Consumes from several Redis queues at once. The round-robin poll loop lives
in SubscriptionConsumerTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
    - **`Phalcon\Queue\Adapter\Redis\RedisSubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterredisredissubscriptionconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">RedisContext</span> <span class="sv">$context</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RedisContext</code>
<code class="sig"><span class="sv">$context</span></code>
<span class="desc">Retained for transports that may later need it for a native multi-queue
receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueadapterredisredissubscriptionconsumer-__construct }

```php
public function __construct(
    RedisContext $context,
    int $pollInterval = 200
);
```


## Queue\Adapter\Stream\StreamConnectionFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamConnectionFactory.zep){ .src-btn }

Builds a StreamContext.

Options:
  - storageDir:   directory holding the queue files (default: system temp).
  - pollInterval: milliseconds between consumer poll attempts (default 200).

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Stream\StreamConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](phalcon_contracts.md#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterstreamstreamconnectionfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamconnectionfactory-createcontext">
<code class="vis vis-public">public</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sf">createContext</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadapterstreamstreamconnectionfactory-__construct }

```php
public function __construct( array $options = [] );
```

#### `createContext()` { #queueadapterstreamstreamconnectionfactory-createcontext }

```php
public function createContext(): ContextInterface;
```


## Queue\Adapter\Stream\StreamConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamConsumer.zep){ .src-btn }

Receives messages from a single filesystem queue. `receive()` is the
polling loop inherited from AbstractConsumer.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
    - **`Phalcon\Queue\Adapter\Stream\StreamConsumer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterstreamstreamconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">StreamContext</span> <span class="sv">$context</span>,</span><span class="prm"><span class="st">QueueInterface</span> <span class="sv">$queue</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamconsumer-acknowledge">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">acknowledge</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">No-op: a received message has already been removed from the queue file.</span>
</a>
<a class="api-item" href="#queueadapterstreamstreamconsumer-receivenowait">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">receiveNoWait</span>()</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamconsumer-reject">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reject</span>(<span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$requeue</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #queueadapterstreamstreamconsumer-__construct }

```php
public function __construct(
    StreamContext $context,
    QueueInterface $queue,
    int $pollInterval = 200
);
```

#### `acknowledge()` { #queueadapterstreamstreamconsumer-acknowledge }

```php
public function acknowledge( MessageInterface $message ): void;
```

No-op: a received message has already been removed from the queue file.

#### `receiveNoWait()` { #queueadapterstreamstreamconsumer-receivenowait }

```php
public function receiveNoWait(): MessageInterface|null;
```

#### `reject()` { #queueadapterstreamstreamconsumer-reject }

```php
public function reject(
    MessageInterface $message,
    bool $requeue = false
): void;
```


## Queue\Adapter\Stream\StreamContext

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamContext.zep){ .src-btn }

Filesystem transport session. Each queue is one append-only file under the
configured directory; cross-process safety comes from flock. One message
per line, stored as base64(serialize([...])) so bodies with newlines are
safe. The destination factories come from AbstractContext.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
    - **`Phalcon\Queue\Adapter\Stream\StreamContext`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterstreamstreamcontext-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$storageDir</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-createconsumer">
<code class="vis vis-public">public</code>
<code class="ret">ConsumerInterface</code>
<code class="sig"><span class="sf">createConsumer</span>( <span class="st">DestinationInterface</span> <span class="sv">$destination</span> )</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-createmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">createMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$body</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-createproducer">
<code class="vis vis-public">public</code>
<code class="ret">ProducerInterface</code>
<code class="sig"><span class="sf">createProducer</span>()</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-createsubscriptionconsumer">
<code class="vis vis-public">public</code>
<code class="ret">SubscriptionConsumerInterface</code>
<code class="sig"><span class="sf">createSubscriptionConsumer</span>()</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-popmessage">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface|null</code>
<code class="sig"><span class="sf">popMessage</span>( <span class="st">string</span> <span class="sv">$queueName</span> )</code>
<span class="desc">Removes the front message from a queue file, or null when it is empty.</span>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-purgequeue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">purgeQueue</span>( <span class="st">QueueInterface</span> <span class="sv">$queue</span> )</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamcontext-pushmessage">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">pushMessage</span>(<span class="prm"><span class="st">string</span> <span class="sv">$queueName</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
<span class="desc">Appends a message to the back of a queue file.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$pollInterval</span><span class="sm"> = 200</span></code>
<span class="desc">Milliseconds slept between poll attempts by consumers.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$storageDir</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Directory (with trailing separator) that holds the queue files.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #queueadapterstreamstreamcontext-__construct }

```php
public function __construct(
    string $storageDir,
    int $pollInterval = 200
);
```

#### `close()` { #queueadapterstreamstreamcontext-close }

```php
public function close(): void;
```

#### `createConsumer()` { #queueadapterstreamstreamcontext-createconsumer }

```php
public function createConsumer( DestinationInterface $destination ): ConsumerInterface;
```

#### `createMessage()` { #queueadapterstreamstreamcontext-createmessage }

```php
public function createMessage(
    string $body = "",
    array $properties = [],
    array $headers = []
): MessageInterface;
```

#### `createProducer()` { #queueadapterstreamstreamcontext-createproducer }

```php
public function createProducer(): ProducerInterface;
```

#### `createSubscriptionConsumer()` { #queueadapterstreamstreamcontext-createsubscriptionconsumer }

```php
public function createSubscriptionConsumer(): SubscriptionConsumerInterface;
```

#### `popMessage()` { #queueadapterstreamstreamcontext-popmessage }

```php
public function popMessage( string $queueName ): MessageInterface|null;
```

Removes the front message from a queue file, or null when it is empty.
Internal transport API used by StreamConsumer.

#### `purgeQueue()` { #queueadapterstreamstreamcontext-purgequeue }

```php
public function purgeQueue( QueueInterface $queue ): void;
```

#### `pushMessage()` { #queueadapterstreamstreamcontext-pushmessage }

```php
public function pushMessage(
    string $queueName,
    MessageInterface $message
): void;
```

Appends a message to the back of a queue file.
Internal transport API used by StreamProducer.


## Queue\Adapter\Stream\StreamMessage

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamMessage.zep){ .src-btn }

Filesystem-backed message. All behavior comes from MessageTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
    - **`Phalcon\Queue\Adapter\Stream\StreamMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`
{ .api-uses }


## Queue\Adapter\Stream\StreamProducer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamProducer.zep){ .src-btn }

Appends messages to a filesystem queue. The Stream transport delivers in
insertion order with no scheduling, so delivery delay, priority and time to
live are not supported (the defaults from AbstractProducer reject them).

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
    - **`Phalcon\Queue\Adapter\Stream\StreamProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterstreamstreamproducer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">StreamContext</span> <span class="sv">$context</span> )</code>
</a>
<a class="api-item" href="#queueadapterstreamstreamproducer-send">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">send</span>(<span class="prm"><span class="st">DestinationInterface</span> <span class="sv">$destination</span>,</span><span class="prm"><span class="st">MessageInterface</span> <span class="sv">$message</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamContext</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #queueadapterstreamstreamproducer-__construct }

```php
public function __construct( StreamContext $context );
```

#### `send()` { #queueadapterstreamstreamproducer-send }

```php
public function send(
    DestinationInterface $destination,
    MessageInterface $message
): void;
```


## Queue\Adapter\Stream\StreamSubscriptionConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamSubscriptionConsumer.zep){ .src-btn }

Consumes from several filesystem queues at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

<div class="api-tree" markdown>

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
    - **`Phalcon\Queue\Adapter\Stream\StreamSubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadapterstreamstreamsubscriptionconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">StreamContext</span> <span class="sv">$context</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pollInterval</span><span class="sm"> = 200</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamContext</code>
<code class="sig"><span class="sv">$context</span></code>
<span class="desc">Retained for transports that may later need it for a native multi-queue
receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueadapterstreamstreamsubscriptionconsumer-__construct }

```php
public function __construct(
    StreamContext $context,
    int $pollInterval = 200
);
```


## Queue\Adapter\Traits\MessageTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Traits/MessageTrait.zep){ .src-btn }

Shared implementation of every Message getter/setter, plus the
correlation-id / message-id / timestamp / reply-to header conveniences.
Concrete adapter messages use this trait.

The convenience accessors are stored as transport headers under fixed keys
for binary compatibility with the wider interop ecosystem.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Traits\MessageTrait`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptertraitsmessagetrait-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$body</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$properties</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Message constructor.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getbody">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBody</span>()</code>
<span class="desc">Returns the message body.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getcorrelationid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getCorrelationId</span>()</code>
<span class="desc">Returns the correlation id used to correlate request/reply messages.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getheader">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a single header value, or the default when it is not set.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns all transport headers.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getmessageid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getMessageId</span>()</code>
<span class="desc">Returns the message id.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getproperties">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getProperties</span>()</code>
<span class="desc">Returns all application properties.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getproperty">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a single property value, or the default when it is not set.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-getreplyto">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getReplyTo</span>()</code>
<span class="desc">Returns the reply-to destination name.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-gettimestamp">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getTimestamp</span>()</code>
<span class="desc">Returns the timestamp (in milliseconds) or null when it is not set.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-isredelivered">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isRedelivered</span>()</code>
<span class="desc">Whether the message has been redelivered.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setbody">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setBody</span>( <span class="st">string</span> <span class="sv">$body</span> )</code>
<span class="desc">Sets the message body.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setcorrelationid">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setCorrelationId</span>( <span class="st">string</span> <span class="sv">$correlationId</span> )</code>
<span class="desc">Sets the correlation id.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setheader">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a single transport header.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setheaders">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setHeaders</span>( <span class="st">array</span> <span class="sv">$headers</span> )</code>
<span class="desc">Replaces all transport headers.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setmessageid">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setMessageId</span>( <span class="st">string</span> <span class="sv">$messageId</span> )</code>
<span class="desc">Sets the message id.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setproperties">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setProperties</span>( <span class="st">array</span> <span class="sv">$properties</span> )</code>
<span class="desc">Replaces all application properties.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setproperty">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a single application property.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setredelivered">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setRedelivered</span>( <span class="st">bool</span> <span class="sv">$redelivered</span> )</code>
<span class="desc">Marks the message as redelivered.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-setreplyto">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setReplyTo</span>( <span class="st">string</span> <span class="sv">$replyTo</span> )</code>
<span class="desc">Sets the reply-to destination name.</span>
</a>
<a class="api-item" href="#queueadaptertraitsmessagetrait-settimestamp">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTimestamp</span>( <span class="st">int</span> <span class="sv">$timestamp</span> )</code>
<span class="desc">Sets the timestamp (in milliseconds).</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$body</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$headers</span><span class="sm"> = null</span></code>
<span class="desc">@todo Use a default [] once Zephir supports array trait defaults</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$properties</span><span class="sm"> = null</span></code>
<span class="desc">@todo Use a default [] once Zephir supports array trait defaults</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$redelivered</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 21</div>

#### `__construct()` { #queueadaptertraitsmessagetrait-__construct }

```php
public function __construct(
    string $body = "",
    array $properties = [],
    array $headers = []
);
```

Message constructor.

#### `getBody()` { #queueadaptertraitsmessagetrait-getbody }

```php
public function getBody(): string;
```

Returns the message body.

#### `getCorrelationId()` { #queueadaptertraitsmessagetrait-getcorrelationid }

```php
public function getCorrelationId(): string|null;
```

Returns the correlation id used to correlate request/reply messages.

#### `getHeader()` { #queueadaptertraitsmessagetrait-getheader }

```php
public function getHeader(
    string $name,
    mixed $defaultValue = null
): mixed;
```

Returns a single header value, or the default when it is not set.

#### `getHeaders()` { #queueadaptertraitsmessagetrait-getheaders }

```php
public function getHeaders(): array;
```

Returns all transport headers.

#### `getMessageId()` { #queueadaptertraitsmessagetrait-getmessageid }

```php
public function getMessageId(): string|null;
```

Returns the message id.

#### `getProperties()` { #queueadaptertraitsmessagetrait-getproperties }

```php
public function getProperties(): array;
```

Returns all application properties.

#### `getProperty()` { #queueadaptertraitsmessagetrait-getproperty }

```php
public function getProperty(
    string $name,
    mixed $defaultValue = null
): mixed;
```

Returns a single property value, or the default when it is not set.

#### `getReplyTo()` { #queueadaptertraitsmessagetrait-getreplyto }

```php
public function getReplyTo(): string|null;
```

Returns the reply-to destination name.

#### `getTimestamp()` { #queueadaptertraitsmessagetrait-gettimestamp }

```php
public function getTimestamp(): int|null;
```

Returns the timestamp (in milliseconds) or null when it is not set.

#### `isRedelivered()` { #queueadaptertraitsmessagetrait-isredelivered }

```php
public function isRedelivered(): bool;
```

Whether the message has been redelivered.

#### `setBody()` { #queueadaptertraitsmessagetrait-setbody }

```php
public function setBody( string $body ): void;
```

Sets the message body.

#### `setCorrelationId()` { #queueadaptertraitsmessagetrait-setcorrelationid }

```php
public function setCorrelationId( string $correlationId ): void;
```

Sets the correlation id.

#### `setHeader()` { #queueadaptertraitsmessagetrait-setheader }

```php
public function setHeader(
    string $name,
    mixed $value
): void;
```

Sets a single transport header.

#### `setHeaders()` { #queueadaptertraitsmessagetrait-setheaders }

```php
public function setHeaders( array $headers ): void;
```

Replaces all transport headers.

#### `setMessageId()` { #queueadaptertraitsmessagetrait-setmessageid }

```php
public function setMessageId( string $messageId ): void;
```

Sets the message id.

#### `setProperties()` { #queueadaptertraitsmessagetrait-setproperties }

```php
public function setProperties( array $properties ): void;
```

Replaces all application properties.

#### `setProperty()` { #queueadaptertraitsmessagetrait-setproperty }

```php
public function setProperty(
    string $name,
    mixed $value
): void;
```

Sets a single application property.

#### `setRedelivered()` { #queueadaptertraitsmessagetrait-setredelivered }

```php
public function setRedelivered( bool $redelivered ): void;
```

Marks the message as redelivered.

#### `setReplyTo()` { #queueadaptertraitsmessagetrait-setreplyto }

```php
public function setReplyTo( string $replyTo ): void;
```

Sets the reply-to destination name.

#### `setTimestamp()` { #queueadaptertraitsmessagetrait-settimestamp }

```php
public function setTimestamp( int $timestamp ): void;
```

Sets the timestamp (in milliseconds).


## Queue\Adapter\Traits\SubscriptionConsumerTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Traits/SubscriptionConsumerTrait.zep){ .src-btn }

Shared subscription-consumer implementation. Implements the round-robin poll
loop that dispatches each subscribed consumer's messages to its callback; a
callback returning false stops consumption. The loop relies only on the
consumer's `receiveNoWait()`, so it is transport-agnostic. Concrete adapters
keep just the constructor that captures their context and poll interval.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptertraitssubscriptionconsumertrait-consume">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">consume</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
<span class="desc">Polls every subscription, dispatching each message to its callback,</span>
</a>
<a class="api-item" href="#queueadaptertraitssubscriptionconsumertrait-subscribe">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">subscribe</span>(<span class="prm"><span class="st">\Phalcon\Contracts\Queue\Consumer</span> <span class="sv">$consumer</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callback</span></span>)</code>
<span class="desc">Subscribes a consumer; the callback receives each delivered message.</span>
</a>
<a class="api-item" href="#queueadaptertraitssubscriptionconsumertrait-unsubscribe">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsubscribe</span>( <span class="st">\Phalcon\Contracts\Queue\Consumer</span> <span class="sv">$consumer</span> )</code>
<span class="desc">Removes a previously subscribed consumer.</span>
</a>
<a class="api-item" href="#queueadaptertraitssubscriptionconsumertrait-unsubscribeall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsubscribeAll</span>()</code>
<span class="desc">Removes every subscribed consumer.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$pollInterval</span><span class="sm"> = 200</span></code>
<span class="desc">Milliseconds slept between poll passes.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$subscriptions</span><span class="sm"> = null</span></code>
<span class="desc">Subscriptions keyed by queue name: [consumer, callback].

@todo Use a default [] once Zephir supports array trait defaults</span>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `consume()` { #queueadaptertraitssubscriptionconsumertrait-consume }

```php
public function consume( int $timeout = 0 ): void;
```

Polls every subscription, dispatching each message to its callback,
blocking up to timeout milliseconds (0 = block until a callback
returns false).

#### `subscribe()` { #queueadaptertraitssubscriptionconsumertrait-subscribe }

```php
public function subscribe(
    \Phalcon\Contracts\Queue\Consumer $consumer,
    callable $callback
): void;
```

Subscribes a consumer; the callback receives each delivered message.

#### `unsubscribe()` { #queueadaptertraitssubscriptionconsumertrait-unsubscribe }

```php
public function unsubscribe( \Phalcon\Contracts\Queue\Consumer $consumer ): void;
```

Removes a previously subscribed consumer.

#### `unsubscribeAll()` { #queueadaptertraitssubscriptionconsumertrait-unsubscribeall }

```php
public function unsubscribeAll(): void;
```

Removes every subscribed consumer.


## Queue\Cli\ConsumerTask

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Cli/ConsumerTask.zep){ .src-btn }

Optional CLI runner for a queue worker - the only class coupled to
Phalcon\Cli. A thin adapter: it resolves the context from the `queueFactory`
service, binds one queue to one processor (both given as command arguments),
and runs a Worker whose lifetime bounds come from CLI options. Users not on
Phalcon\Cli use Worker directly.

Usage:
    <task> <queueName> <processorServiceId> \
        [--max-messages=N] [--max-time=SECONDS] \
        [--max-memory=MB] [--jitter=SECONDS]

Register it in your own Phalcon\Cli\Console; it is not auto-wired into
FactoryDefault.

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - [`Phalcon\Cli\Task`](phalcon_cli.md#clitask)
            - **`Phalcon\Queue\Cli\ConsumerTask`**

</div>

__Uses__ `Phalcon\Cli\Task` · `Phalcon\Di\DiInterface` · `Phalcon\Queue\Consumer\QueueConsumer` · `Phalcon\Queue\Consumer\Worker` · `Phalcon\Queue\Consumer\WorkerOptions`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queuecliconsumertask-mainaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">mainAction</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `mainAction()` { #queuecliconsumertask-mainaction }

```php
public function mainAction(): int;
```


## Queue\Consumer\BoundProcessor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/BoundProcessor.zep){ .src-btn }

Binds a processor to a queue, together with the consumer that reads it.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Consumer\BoundProcessor`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Contracts\Queue\Queue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueconsumerboundprocessor-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">QueueInterface</span> <span class="sv">$queue</span>,</span><span class="prm"><span class="st">ProcessorInterface</span> <span class="sv">$processor</span>,</span><span class="prm"><span class="st">ConsumerInterface</span> <span class="sv">$consumer</span></span>)</code>
</a>
<a class="api-item" href="#queueconsumerboundprocessor-getconsumer">
<code class="vis vis-public">public</code>
<code class="ret">ConsumerInterface</code>
<code class="sig"><span class="sf">getConsumer</span>()</code>
</a>
<a class="api-item" href="#queueconsumerboundprocessor-getprocessor">
<code class="vis vis-public">public</code>
<code class="ret">ProcessorInterface</code>
<code class="sig"><span class="sf">getProcessor</span>()</code>
</a>
<a class="api-item" href="#queueconsumerboundprocessor-getqueue">
<code class="vis vis-public">public</code>
<code class="ret">QueueInterface</code>
<code class="sig"><span class="sf">getQueue</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ConsumerInterface</code>
<code class="sig"><span class="sv">$consumer</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ProcessorInterface</code>
<code class="sig"><span class="sv">$processor</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">QueueInterface</code>
<code class="sig"><span class="sv">$queue</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #queueconsumerboundprocessor-__construct }

```php
public function __construct(
    QueueInterface $queue,
    ProcessorInterface $processor,
    ConsumerInterface $consumer
);
```

#### `getConsumer()` { #queueconsumerboundprocessor-getconsumer }

```php
public function getConsumer(): ConsumerInterface;
```

#### `getProcessor()` { #queueconsumerboundprocessor-getprocessor }

```php
public function getProcessor(): ProcessorInterface;
```

#### `getQueue()` { #queueconsumerboundprocessor-getqueue }

```php
public function getQueue(): QueueInterface;
```


## Queue\Consumer\Events

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/Events.zep){ .src-btn }

Lifecycle event names fired by the queue consumer through
Phalcon\Events\Manager. One public constant per event.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Consumer\Events`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AFTER_END</span><span class="sm"> = &quot;queue:afterEnd&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AFTER_PROCESS</span><span class="sm"> = &quot;queue:afterProcess&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AFTER_RECEIVE</span><span class="sm"> = &quot;queue:afterReceive&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">BEFORE_PROCESS</span><span class="sm"> = &quot;queue:beforeProcess&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">BEFORE_RECEIVE</span><span class="sm"> = &quot;queue:beforeReceive&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">BEFORE_START</span><span class="sm"> = &quot;queue:beforeStart&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROCESSOR_EXCEPTION</span><span class="sm"> = &quot;queue:processorException&quot;</span></code>
</div>
</div>


## Queue\Consumer\QueueConsumer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/QueueConsumer.zep){ .src-btn }

Lean consumption runner. Binds processors to queues, polls each bound queue
round-robin, and dispatches messages to their processors while firing the
lifecycle events on `Phalcon\Queue\Consumer\Events` through the events
manager. The long-running operational shell (lifetime, signals) lives in
`Phalcon\Queue\Consumer\Worker`, which drives `consumeOnce()` and shares the
stop signal through `stop()` / `isStopRequested()`.

<div class="api-tree" markdown>

- [`Phalcon\Events\AbstractEventsAware`](phalcon_events.md#eventsabstracteventsaware)
    - **`Phalcon\Queue\Consumer\QueueConsumer`** - implements [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Events\AbstractEventsAware` · `Phalcon\Events\EventsAwareInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueconsumerqueueconsumer-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">ContextInterface</span> <span class="sv">$context</span> )</code>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-bind">
<code class="vis vis-public">public</code>
<code class="ret">QueueConsumer</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">QueueInterface</span> <span class="sv">$queue</span>,</span><span class="prm"><span class="st">ProcessorInterface</span> <span class="sv">$processor</span></span>)</code>
<span class="desc">Binds a processor to a queue. Returns self for chaining.</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-consume">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">consume</span>( <span class="st">int</span> <span class="sv">$timeout</span><span class="sm"> = 0</span> )</code>
<span class="desc">Runs the consumption loop, blocking up to timeout milliseconds (0 =</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-consumeonce">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">consumeOnce</span>()</code>
<span class="desc">Polls every bound queue once, processing up to one message from each.</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-end">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">end</span>()</code>
<span class="desc">Fires the <code>queue:afterEnd</code> event. Called once the loop exits.</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-isstoprequested">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStopRequested</span>()</code>
<span class="desc">Whether a stop has been requested (by a signal, <code>stop()</code>, or an</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-setpollinterval">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setPollInterval</span>( <span class="st">int</span> <span class="sv">$pollInterval</span> )</code>
<span class="desc">Sets the poll interval (in milliseconds).</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-start">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">start</span>()</code>
<span class="desc">Resets the stop flag and fires <code>queue:beforeStart</code>. Returns false when a</span>
</a>
<a class="api-item" href="#queueconsumerqueueconsumer-stop">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">stop</span>()</code>
<span class="desc">Requests the consumption loop to stop after the current message.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$bindings</span><span class="sm"> = []</span></code>
<span class="desc">Bound processors keyed by queue name.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sv">$context</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$pollInterval</span><span class="sm"> = 200</span></code>
<span class="desc">Milliseconds slept between poll passes when nothing was received.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$shouldStop</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #queueconsumerqueueconsumer-__construct }

```php
public function __construct( ContextInterface $context );
```

#### `bind()` { #queueconsumerqueueconsumer-bind }

```php
public function bind(
    QueueInterface $queue,
    ProcessorInterface $processor
): QueueConsumer;
```

Binds a processor to a queue. Returns self for chaining.

#### `consume()` { #queueconsumerqueueconsumer-consume }

```php
public function consume( int $timeout = 0 ): void;
```

Runs the consumption loop, blocking up to timeout milliseconds (0 =
block until stopped). The simple loop; production setups use Worker.

#### `consumeOnce()` { #queueconsumerqueueconsumer-consumeonce }

```php
public function consumeOnce(): bool;
```

Polls every bound queue once, processing up to one message from each.
Returns true if any message was handled. Sleeps the poll interval when
nothing was received so callers can loop tightly.

#### `end()` { #queueconsumerqueueconsumer-end }

```php
public function end(): void;
```

Fires the `queue:afterEnd` event. Called once the loop exits.

#### `isStopRequested()` { #queueconsumerqueueconsumer-isstoprequested }

```php
public function isStopRequested(): bool;
```

Whether a stop has been requested (by a signal, `stop()`, or an
`afterReceive` listener returning false).

#### `setPollInterval()` { #queueconsumerqueueconsumer-setpollinterval }

```php
public function setPollInterval( int $pollInterval ): void;
```

Sets the poll interval (in milliseconds).

#### `start()` { #queueconsumerqueueconsumer-start }

```php
public function start(): bool;
```

Resets the stop flag and fires `queue:beforeStart`. Returns false when a
listener cancels the start.

#### `stop()` { #queueconsumerqueueconsumer-stop }

```php
public function stop(): void;
```

Requests the consumption loop to stop after the current message.


## Queue\Consumer\Worker

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/Worker.zep){ .src-btn }

Long-running operational shell around a QueueConsumer. Owns the outer loop,
the bounded lifetime (max messages / seconds / memory, plus jitter) and -
when ext-pcntl is available - graceful shutdown on SIGTERM/SIGINT/SIGQUIT.
The current message always finishes before the loop stops (drain, not
guillotine), because the stop flag is only checked between iterations.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Consumer\Worker`**

</div>

__Uses__ `Phalcon\Traits\Php\InfoTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueconsumerworker-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">QueueConsumer</span> <span class="sv">$consumer</span>,</span><span class="prm"><span class="st">WorkerOptions</span> <span class="sv">$options</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#queueconsumerworker-handlesignal">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">handleSignal</span>( <span class="st">int</span> <span class="sv">$signal</span> )</code>
<span class="desc">Signal handler: requests a graceful stop.</span>
</a>
<a class="api-item" href="#queueconsumerworker-run">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">run</span>()</code>
<span class="desc">Runs the worker until a lifetime bound trips or a stop is requested.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">QueueConsumer</code>
<code class="sig"><span class="sv">$consumer</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">WorkerOptions</code>
<code class="sig"><span class="sv">$options</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #queueconsumerworker-__construct }

```php
public function __construct(
    QueueConsumer $consumer,
    WorkerOptions $options = null
);
```

#### `handleSignal()` { #queueconsumerworker-handlesignal }

```php
public function handleSignal( int $signal ): void;
```

Signal handler: requests a graceful stop.

#### `run()` { #queueconsumerworker-run }

```php
public function run(): int;
```

Runs the worker until a lifetime bound trips or a stop is requested.
Returns the number of messages processed.


## Queue\Consumer\WorkerOptions

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/WorkerOptions.zep){ .src-btn }

Immutable lifetime bounds for a Worker. A value of 0 means "no limit".
The worker stops on whichever bound trips first.

<div class="api-tree" markdown>

- **`Phalcon\Queue\Consumer\WorkerOptions`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueconsumerworkeroptions-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">int</span> <span class="sv">$maxMessages</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$maxSeconds</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$maxMemory</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$jitter</span><span class="sm"> = 0</span></span>)</code>
</a>
<a class="api-item" href="#queueconsumerworkeroptions-getjitter">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getJitter</span>()</code>
</a>
<a class="api-item" href="#queueconsumerworkeroptions-getmaxmemory">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getMaxMemory</span>()</code>
</a>
<a class="api-item" href="#queueconsumerworkeroptions-getmaxmessages">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getMaxMessages</span>()</code>
</a>
<a class="api-item" href="#queueconsumerworkeroptions-getmaxseconds">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getMaxSeconds</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$jitter</span><span class="sm"> = 0</span></code>
<span class="desc">Seconds added to maxSeconds (randomised per worker) so a pool does not
restart in lockstep.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$maxMemory</span><span class="sm"> = 0</span></code>
<span class="desc">Memory ceiling in megabytes.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$maxMessages</span><span class="sm"> = 0</span></code>
<span class="desc">Maximum number of messages to process.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$maxSeconds</span><span class="sm"> = 0</span></code>
<span class="desc">Maximum run time in seconds.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #queueconsumerworkeroptions-__construct }

```php
public function __construct(
    int $maxMessages = 0,
    int $maxSeconds = 0,
    int $maxMemory = 0,
    int $jitter = 0
);
```

#### `getJitter()` { #queueconsumerworkeroptions-getjitter }

```php
public function getJitter(): int;
```

#### `getMaxMemory()` { #queueconsumerworkeroptions-getmaxmemory }

```php
public function getMaxMemory(): int;
```

#### `getMaxMessages()` { #queueconsumerworkeroptions-getmaxmessages }

```php
public function getMaxMessages(): int;
```

#### `getMaxSeconds()` { #queueconsumerworkeroptions-getmaxseconds }

```php
public function getMaxSeconds(): int;
```


## Queue\Exceptions\DeliveryDelayNotSupportedException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/DeliveryDelayNotSupportedException.zep){ .src-btn }

Thrown when the transport does not support a delivery delay.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionsdeliverydelaynotsupportedexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionsdeliverydelaynotsupportedexception-__construct }

```php
public function __construct();
```


## Queue\Exceptions\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/Exception.zep){ .src-btn }

Generic exception for the Queue component, and the base for every typed
queue exception.

<div class="api-tree" markdown>

- `BaseException`
    - **`Phalcon\Queue\Exceptions\Exception`** - implements [`Phalcon\Queue\Exceptions\QueueThrowable`](#queueexceptionsqueuethrowable)
        - [`Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException`](#queueexceptionsdeliverydelaynotsupportedexception)
        - [`Phalcon\Queue\Exceptions\InvalidDestinationException`](#queueexceptionsinvaliddestinationexception)
        - [`Phalcon\Queue\Exceptions\InvalidMessageException`](#queueexceptionsinvalidmessageexception)
        - [`Phalcon\Queue\Exceptions\PriorityNotSupportedException`](#queueexceptionsprioritynotsupportedexception)
        - [`Phalcon\Queue\Exceptions\PurgeQueueNotSupportedException`](#queueexceptionspurgequeuenotsupportedexception)
        - [`Phalcon\Queue\Exceptions\SubscriptionConsumerNotSupportedException`](#queueexceptionssubscriptionconsumernotsupportedexception)
        - [`Phalcon\Queue\Exceptions\TemporaryQueueNotSupportedException`](#queueexceptionstemporaryqueuenotsupportedexception)
        - [`Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`](#queueexceptionstimetolivenotsupportedexception)

</div>

__Uses__ `Exception`
{ .api-uses }


## Queue\Exceptions\InvalidDestinationException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/InvalidDestinationException.zep){ .src-btn }

Thrown when a destination is not valid for the operation, for example a
Topic passed where a Queue is required. The action verb ("send to",
"consume from") tailors the message to the failing operation.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\InvalidDestinationException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionsinvaliddestinationexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$action</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionsinvaliddestinationexception-__construct }

```php
public function __construct( string $action );
```


## Queue\Exceptions\InvalidMessageException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/InvalidMessageException.zep){ .src-btn }

Thrown when a message is not valid for the operation.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\InvalidMessageException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionsinvalidmessageexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionsinvalidmessageexception-__construct }

```php
public function __construct();
```


## Queue\Exceptions\PriorityNotSupportedException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/PriorityNotSupportedException.zep){ .src-btn }

Thrown when the transport does not support message priority.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\PriorityNotSupportedException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionsprioritynotsupportedexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionsprioritynotsupportedexception-__construct }

```php
public function __construct();
```


## Queue\Exceptions\PurgeQueueNotSupportedException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/PurgeQueueNotSupportedException.zep){ .src-btn }

Thrown when the transport does not support purging a queue.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\PurgeQueueNotSupportedException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionspurgequeuenotsupportedexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionspurgequeuenotsupportedexception-__construct }

```php
public function __construct();
```


## Queue\Exceptions\QueueThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/QueueThrowable.zep){ .src-btn }

Base throwable contract for the Queue component. Every queue exception
implements it, so callers can catch all queue errors with a single type.

<div class="api-tree" markdown>

- `\Throwable`
    - **`Phalcon\Queue\Exceptions\QueueThrowable`**

</div>


## Queue\Exceptions\SubscriptionConsumerNotSupportedException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/SubscriptionConsumerNotSupportedException.zep){ .src-btn }

Thrown when the transport does not support subscription consumers.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\SubscriptionConsumerNotSupportedException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionssubscriptionconsumernotsupportedexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionssubscriptionconsumernotsupportedexception-__construct }

```php
public function __construct();
```


## Queue\Exceptions\TemporaryQueueNotSupportedException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/TemporaryQueueNotSupportedException.zep){ .src-btn }

Thrown when the transport does not support temporary queues.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\TemporaryQueueNotSupportedException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionstemporaryqueuenotsupportedexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionstemporaryqueuenotsupportedexception-__construct }

```php
public function __construct();
```


## Queue\Exceptions\TimeToLiveNotSupportedException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/TimeToLiveNotSupportedException.zep){ .src-btn }

Thrown when the transport does not support a message time to live.

<div class="api-tree" markdown>

- `BaseException`
    - [`Phalcon\Queue\Exceptions\Exception`](#queueexceptionsexception)
        - **`Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueexceptionstimetolivenotsupportedexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #queueexceptionstimetolivenotsupportedexception-__construct }

```php
public function __construct();
```


## Queue\QueueFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/QueueFactory.zep){ .src-btn }

Builds a queue Context from the standard Phalcon config shape. Mirrors
Phalcon\Cache\CacheFactory.

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - **`Phalcon\Queue\QueueFactory`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Context` · `Phalcon\Factory\AbstractConfigFactory` · `Phalcon\Queue\Exceptions\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#queuequeuefactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AdapterFactory</span> <span class="sv">$factory</span><span class="sm"> = null</span> )</code>
<span class="desc">QueueFactory constructor. A default AdapterFactory is created when none</span>
</a>
<a class="api-item" href="#queuequeuefactory-load">
<code class="vis vis-public">public</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Builds a Context from a config array/object.</span>
</a>
<a class="api-item" href="#queuequeuefactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">ContextInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Builds a Context for the named adapter.</span>
</a>
<a class="api-item" href="#queuequeuefactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterFactory</code>
<code class="sig"><span class="sv">$adapterFactory</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #queuequeuefactory-__construct }

```php
public function __construct( AdapterFactory $factory = null );
```

QueueFactory constructor. A default AdapterFactory is created when none
is supplied, so the factory is usable straight from the DI container.

#### `load()` { #queuequeuefactory-load }

```php
public function load( mixed $config ): ContextInterface;
```

Builds a Context from a config array/object.

#### `newInstance()` { #queuequeuefactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): ContextInterface;
```

Builds a Context for the named adapter.

<div class="api-group">Protected · 1</div>

#### `getExceptionClass()` { #queuequeuefactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```
