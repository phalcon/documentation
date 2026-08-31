---
title: "Phalcon Queue"
version: "5.17"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Queue

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Queue\AdapterFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/AdapterFactory.zep">Source on GitHub</a>

Maps an adapter name to its ConnectionFactory. Mirrors
Phalcon\Storage\AdapterFactory.

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.17/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.17/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Queue\AdapterFactory`**

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Factory\AbstractFactory`

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

<div class="api-group">Protected · 2</div>

<h4 id="queueadapterfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="queueadapterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters.

## Queue\Adapter\AbstractConsumer

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractConsumer.zep">Source on GitHub</a>

Shared consumer base. Implements the blocking `receive()` as a polling loop
on top of the abstract `receiveNoWait()`; concrete consumers provide the
transport-specific `receiveNoWait`, `acknowledge` and `reject`.

Transports with a native blocking receive (Redis BRPOP, Beanstalk reserve)
override `receive()` instead of polling.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\AbstractConsumer`** - implements [`Phalcon\Contracts\Queue\Consumer`](/5.17/api/phalcon_contracts/#contractsqueueconsumer)
- [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConsumer`](#queueadapterbeanstalkbeanstalkconsumer)
- [`Phalcon\Queue\Adapter\Memory\MemoryConsumer`](#queueadaptermemorymemoryconsumer)
- [`Phalcon\Queue\Adapter\Redis\RedisConsumer`](#queueadapterredisredisconsumer)
- [`Phalcon\Queue\Adapter\Stream\StreamConsumer`](#queueadapterstreamstreamconsumer)

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue`

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractContext.zep">Source on GitHub</a>

Shared transport-session base. Every transport builds the same destination
value objects (GenericQueue / GenericTopic) and the same uniquely named
temporary queue, so those factories live here once. Concrete contexts
implement the transport-specific factories (consumer, producer, message,
subscription consumer) and the storage operations.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\AbstractContext`** - implements [`Phalcon\Contracts\Queue\Context`](/5.17/api/phalcon_contracts/#contractsqueuecontext)
- [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkContext`](#queueadapterbeanstalkbeanstalkcontext)
- [`Phalcon\Queue\Adapter\Memory\MemoryContext`](#queueadaptermemorymemorycontext)
- [`Phalcon\Queue\Adapter\Redis\RedisContext`](#queueadapterredisrediscontext)
- [`Phalcon\Queue\Adapter\Stream\StreamContext`](#queueadapterstreamstreamcontext)

</div>

__Uses__ `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\Topic`

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractMessage.zep">Source on GitHub</a>

Shared base for the concrete adapter messages.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Queue\Adapter\Traits\MessageTrait directly instead of extending this.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\AbstractMessage`** - implements [`Phalcon\Contracts\Queue\Message`](/5.17/api/phalcon_contracts/#contractsqueuemessage)
- [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkMessage`](#queueadapterbeanstalkbeanstalkmessage)
- [`Phalcon\Queue\Adapter\Memory\MemoryMessage`](#queueadaptermemorymemorymessage)
- [`Phalcon\Queue\Adapter\Redis\RedisMessage`](#queueadapterredisredismessage)
- [`Phalcon\Queue\Adapter\Stream\StreamMessage`](#queueadapterstreamstreammessage)

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\Traits\MessageTrait`

## Queue\Adapter\AbstractProducer

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractProducer.zep">Source on GitHub</a>

Shared producer base. Defaults every optional capability (delivery delay,
priority, time to live) to "unsupported": the getter returns null and the
setter throws the matching exception for any non-null value. A concrete
producer overrides only the capabilities its transport actually supports,
and implements `send()`.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\AbstractProducer`** - implements [`Phalcon\Contracts\Queue\Producer`](/5.17/api/phalcon_contracts/#contractsqueueproducer)
- [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkProducer`](#queueadapterbeanstalkbeanstalkproducer)
- [`Phalcon\Queue\Adapter\Memory\MemoryProducer`](#queueadaptermemorymemoryproducer)
- [`Phalcon\Queue\Adapter\Redis\RedisProducer`](#queueadapterredisredisproducer)
- [`Phalcon\Queue\Adapter\Stream\StreamProducer`](#queueadapterstreamstreamproducer)

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Exceptions\DeliveryDelayNotSupportedException` · `Phalcon\Queue\Exceptions\PriorityNotSupportedException` · `Phalcon\Queue\Exceptions\TimeToLiveNotSupportedException`

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/AbstractSubscriptionConsumer.zep">Source on GitHub</a>

Shared subscription-consumer base.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait directly instead of
extending this.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`** - implements [`Phalcon\Contracts\Queue\SubscriptionConsumer`](/5.17/api/phalcon_contracts/#contractsqueuesubscriptionconsumer)
- [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer`](#queueadapterbeanstalkbeanstalksubscriptionconsumer)
- [`Phalcon\Queue\Adapter\Memory\MemorySubscriptionConsumer`](#queueadaptermemorymemorysubscriptionconsumer)
- [`Phalcon\Queue\Adapter\Redis\RedisSubscriptionConsumer`](#queueadapterredisredissubscriptionconsumer)
- [`Phalcon\Queue\Adapter\Stream\StreamSubscriptionConsumer`](#queueadapterstreamstreamsubscriptionconsumer)

</div>

__Uses__ `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\Traits\SubscriptionConsumerTrait`

## Queue\Adapter\Beanstalk\BeanstalkConnection

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkConnection.zep">Source on GitHub</a>

Dependency-free socket client for the Beanstalkd work queue, implementing
the subset of the 1.2 protocol the adapter needs (use/watch/ignore, put,
reserve-with-timeout, delete/release/bury/touch). Recovered and trimmed
from the original Phalcon\Queue\Beanstalk transport.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnection`**

</div>

__Uses__ `Phalcon\Queue\Exceptions\Exception` · `Phalcon\Traits\Php\FileTrait`

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
<span class="desc">Tubes currently on the watch list, keyed by tube name. A fresh connection watches &quot;default&quot;.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 16</div>

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
public function connect(): resource;
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
): int|bool;
```

Puts a job on the queue using the currently used tube. Returns the new
job id, or false when the server did not accept it.

<h4 id="queueadapterbeanstalkbeanstalkconnection-read"><code>read()</code></h4>

```php
public function read( int $length = 0 ): bool|string;
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
public function reserve( mixed $timeout = null ): array|null;
```

Reserves a ready job from a watched tube. A null timeout blocks until a
job is available; otherwise it blocks up to timeout seconds. Returns
[id, body] or null when none is reserved.

<h4 id="queueadapterbeanstalkbeanstalkconnection-statstube"><code>statsTube()</code></h4>

```php
public function statsTube( string $tube ): array|bool;
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
public function write( string $data ): bool|int;
```

Writes data to the socket, connecting first when needed.

## Queue\Adapter\Beanstalk\BeanstalkConnectionFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkConnectionFactory.zep">Source on GitHub</a>

Builds a BeanstalkContext.

Options:
  - host:         server host (default 127.0.0.1).
  - port:         server port (default 11300).
  - persistent:   use a persistent socket (default false).
  - ttr:          default time-to-run in seconds for every job (default 86400).
  - pollInterval: milliseconds between subscription poll passes (default 200).

<div class="api-tree">

- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/5.17/api/phalcon_contracts/#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context`

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

<h4 id="queueadapterbeanstalkbeanstalkconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="queueadapterbeanstalkbeanstalkconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```

## Queue\Adapter\Beanstalk\BeanstalkConsumer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkConsumer.zep">Source on GitHub</a>

Receives messages from a single Beanstalkd tube over its own connection.
`receive()` is overridden to use the native blocking reserve. Implements
VisibilityAware: a reserved job has a time-to-run window that `touch()`
extends; acknowledging deletes the job, rejecting releases it (requeue) or
buries it.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConsumer`** - implements [`Phalcon\Contracts\Queue\VisibilityAware`](/5.17/api/phalcon_contracts/#contractsqueuevisibilityaware)

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\VisibilityAware` · `Phalcon\Queue\Adapter\AbstractConsumer` · `Phalcon\Queue\Adapter\MessageEnvelope`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkContext.zep">Source on GitHub</a>

Beanstalkd transport session. A queue maps to a Beanstalkd tube. Producers
share the context connection (`use` + `put`); each consumer owns its own
connection, because Beanstalkd only lets the reserving connection delete,
release, bury or touch a job. The destination factories come from
AbstractContext.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkContext`** - implements [`Phalcon\Contracts\Queue\Inspectable`](/5.17/api/phalcon_contracts/#contractsqueueinspectable)

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Inspectable` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkMessage.zep">Source on GitHub</a>

Beanstalkd-backed message. Carries the reserved job id so the consumer can
delete, release, bury or touch it; all other behavior comes from
MessageTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`

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

<h4 id="queueadapterbeanstalkbeanstalkmessage-getjobid"><code>getJobId()</code></h4>

```php
public function getJobId(): string|null;
```

<h4 id="queueadapterbeanstalkbeanstalkmessage-setjobid"><code>setJobId()</code></h4>

```php
public function setJobId( string $jobId ): void;
```

## Queue\Adapter\Beanstalk\BeanstalkProducer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkProducer.zep">Source on GitHub</a>

Sends messages to a Beanstalkd tube. Delivery delay (rounded down to whole
seconds) and message priority are supported natively; Beanstalkd has no
message expiry, so time to live is not (the default from AbstractProducer
rejects it).

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Beanstalk/BeanstalkSubscriptionConsumer.zep">Source on GitHub</a>

Consumes from several Beanstalkd tubes at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
- **`Phalcon\Queue\Adapter\Beanstalk\BeanstalkSubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

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
<span class="desc">Retained for transports that may later need it for a native multi-queue receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="queueadapterbeanstalkbeanstalksubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
BeanstalkContext $context,
int $pollInterval = 200
);
```

## Queue\Adapter\GenericQueue

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/GenericQueue.zep">Source on GitHub</a>

A named queue destination shared by every transport. A queue name is the
only knowledge a destination carries, so the adapters need no transport
specific subclass.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\GenericQueue`** - implements [`Phalcon\Contracts\Queue\Queue`](/5.17/api/phalcon_contracts/#contractsqueuequeue)

</div>

__Uses__ `Phalcon\Contracts\Queue\Queue`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/GenericTopic.zep">Source on GitHub</a>

A named topic destination shared by every transport. A topic name is the
only knowledge a destination carries, so the adapters need no transport
specific subclass.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\GenericTopic`** - implements [`Phalcon\Contracts\Queue\Topic`](/5.17/api/phalcon_contracts/#contractsqueuetopic)

</div>

__Uses__ `Phalcon\Contracts\Queue\Topic`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryConnectionFactory.zep">Source on GitHub</a>

Builds a MemoryContext. The Memory transport takes no options.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\Memory\MemoryConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/5.17/api/phalcon_contracts/#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryConsumer.zep">Source on GitHub</a>

Receives messages from a single in-process queue. `receive()` is the
polling loop inherited from AbstractConsumer.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
- **`Phalcon\Queue\Adapter\Memory\MemoryConsumer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryContext.zep">Source on GitHub</a>

In-process transport session. Owns the named FIFO queues that this context's
producers and consumers share. The destination factories (createQueue /
createTopic / createTemporaryQueue) come from AbstractContext.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
- **`Phalcon\Queue\Adapter\Memory\MemoryContext`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryMessage.zep">Source on GitHub</a>

In-process message. All behavior comes from MessageTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
- **`Phalcon\Queue\Adapter\Memory\MemoryMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`

## Queue\Adapter\Memory\MemoryProducer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemoryProducer.zep">Source on GitHub</a>

Sends messages into an in-process queue. The Memory transport delivers
immediately and in-process, so delivery delay, priority and time to live are
not supported (the defaults from AbstractProducer reject them).

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
- **`Phalcon\Queue\Adapter\Memory\MemoryProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Memory/MemorySubscriptionConsumer.zep">Source on GitHub</a>

Consumes from several in-process queues at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
- **`Phalcon\Queue\Adapter\Memory\MemorySubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

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
<span class="desc">Retained for transports that may later need it for a native multi-queue receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="queueadaptermemorymemorysubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct( MemoryContext $context );
```

## Queue\Adapter\MessageEnvelope

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/MessageEnvelope.zep">Source on GitHub</a>

Encodes and decodes the \{body, properties, headers\} envelope shared by every
transport that persists a message as a serialized string (Stream, Redis,
Beanstalk). Centralizes the wire shape, the object-injection-safe
`allowed_classes => false` guard, and the missing-key defaults, so each
adapter only supplies its own concrete message factory around `decode()`.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\MessageEnvelope`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message`

### Method Summary

<div class="api-list">
<a class="api-item" href="#queueadaptermessageenvelope-decode">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">decode</span>( <span class="st">string</span> <span class="sv">$payload</span> )</code>
<span class="desc">Decodes a serialized payload into a normalized \{body, properties,</span>
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/QueueDestinationGuard.zep">Source on GitHub</a>

Shared "destination must be a queue" guard. Producers (on send) and contexts
(on createConsumer) both reject any non-queue destination with the same typed
exception; this keeps that single rule in one place. The `action` verb
("send to", "consume from") tailors the message to the caller.

<div class="api-tree">

- **`Phalcon\Queue\Adapter\QueueDestinationGuard`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Exceptions\InvalidDestinationException`

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

<h4 id="queueadapterqueuedestinationguard-assertqueue"><code>assertQueue()</code></h4>

```php
public static function assertQueue(
DestinationInterface $destination,
string $action
): void;
```

Throws InvalidDestinationException unless the destination is a queue.

## Queue\Adapter\Redis\RedisConnectionFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisConnectionFactory.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Queue\Adapter\Redis\RedisConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/5.17/api/phalcon_contracts/#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context` · `Phalcon\Queue\Exceptions\Exception` · `Phalcon\Storage\Adapter\Redis` · `Phalcon\Storage\Exception` · `Phalcon\Storage\SerializerFactory`

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

<h4 id="queueadapterredisredisconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="queueadapterredisredisconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```

## Queue\Adapter\Redis\RedisConsumer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisConsumer.zep">Source on GitHub</a>

Receives messages from a single Redis queue. `receive()` is overridden to
use the native blocking BRPOP (in one-second chunks, so due delayed
messages keep getting promoted) instead of the inherited polling loop.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
- **`Phalcon\Queue\Adapter\Redis\RedisConsumer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisContext.zep">Source on GitHub</a>

Redis transport session (ext-redis). Each queue is a Redis list; messages
are LPUSHed on send and RPOP/BRPOPed on receive, giving FIFO delivery.
Delayed messages live in a companion sorted set (`<key>:delayed`) scored by
their due time in milliseconds, and are promoted into the list once due. The
destination factories come from AbstractContext.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
- **`Phalcon\Queue\Adapter\Redis\RedisContext`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<h4 id="queueadapterredisrediscontext-__construct"><code>__construct()</code></h4>

```php
public function __construct(
mixed $redis,
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisMessage.zep">Source on GitHub</a>

Redis-backed message. All behavior comes from MessageTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
- **`Phalcon\Queue\Adapter\Redis\RedisMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`

## Queue\Adapter\Redis\RedisProducer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisProducer.zep">Source on GitHub</a>

Sends messages to a Redis queue. Delivery delay is supported (via the
delayed sorted set); priority and time to live are not (the defaults from
AbstractProducer reject them).

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
- **`Phalcon\Queue\Adapter\Redis\RedisProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Redis/RedisSubscriptionConsumer.zep">Source on GitHub</a>

Consumes from several Redis queues at once. The round-robin poll loop lives
in SubscriptionConsumerTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
- **`Phalcon\Queue\Adapter\Redis\RedisSubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

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
<span class="desc">Retained for transports that may later need it for a native multi-queue receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="queueadapterredisredissubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
RedisContext $context,
int $pollInterval = 200
);
```

## Queue\Adapter\Stream\StreamConnectionFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamConnectionFactory.zep">Source on GitHub</a>

Builds a StreamContext.

Options:
  - storageDir:   directory holding the queue files (default: system temp).
  - pollInterval: milliseconds between consumer poll attempts (default 200).

<div class="api-tree">

- **`Phalcon\Queue\Adapter\Stream\StreamConnectionFactory`** - implements [`Phalcon\Contracts\Queue\ConnectionFactory`](/5.17/api/phalcon_contracts/#contractsqueueconnectionfactory)

</div>

__Uses__ `Phalcon\Contracts\Queue\ConnectionFactory` · `Phalcon\Contracts\Queue\Context`

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

<h4 id="queueadapterstreamstreamconnectionfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

<h4 id="queueadapterstreamstreamconnectionfactory-createcontext"><code>createContext()</code></h4>

```php
public function createContext(): ContextInterface;
```

## Queue\Adapter\Stream\StreamConsumer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamConsumer.zep">Source on GitHub</a>

Receives messages from a single filesystem queue. `receive()` is the
polling loop inherited from AbstractConsumer.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractConsumer`](#queueadapterabstractconsumer)
- **`Phalcon\Queue\Adapter\Stream\StreamConsumer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Queue\Adapter\AbstractConsumer`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamContext.zep">Source on GitHub</a>

Filesystem transport session. Each queue is one append-only file under the
configured directory; cross-process safety comes from flock. One message
per line, stored as base64(serialize([...])) so bodies with newlines are
safe. The destination factories come from AbstractContext.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractContext`](#queueadapterabstractcontext)
- **`Phalcon\Queue\Adapter\Stream\StreamContext`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Producer` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Contracts\Queue\SubscriptionConsumer` · `Phalcon\Queue\Adapter\AbstractContext` · `Phalcon\Queue\Adapter\MessageEnvelope` · `Phalcon\Queue\Adapter\QueueDestinationGuard` · `Phalcon\Traits\Php\FileTrait`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamMessage.zep">Source on GitHub</a>

Filesystem-backed message. All behavior comes from MessageTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractMessage`](#queueadapterabstractmessage)
- **`Phalcon\Queue\Adapter\Stream\StreamMessage`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractMessage`

## Queue\Adapter\Stream\StreamProducer

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamProducer.zep">Source on GitHub</a>

Appends messages to a filesystem queue. The Stream transport delivers in
insertion order with no scheduling, so delivery delay, priority and time to
live are not supported (the defaults from AbstractProducer reject them).

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractProducer`](#queueadapterabstractproducer)
- **`Phalcon\Queue\Adapter\Stream\StreamProducer`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Destination` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Queue\Adapter\AbstractProducer` · `Phalcon\Queue\Adapter\QueueDestinationGuard`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Adapter/Stream/StreamSubscriptionConsumer.zep">Source on GitHub</a>

Consumes from several filesystem queues at once. The round-robin poll loop
lives in SubscriptionConsumerTrait.

<div class="api-tree">

- [`Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`](#queueadapterabstractsubscriptionconsumer)
- **`Phalcon\Queue\Adapter\Stream\StreamSubscriptionConsumer`**

</div>

__Uses__ `Phalcon\Queue\Adapter\AbstractSubscriptionConsumer`

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
<span class="desc">Retained for transports that may later need it for a native multi-queue receive; the shared poll loop does not use it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="queueadapterstreamstreamsubscriptionconsumer-__construct"><code>__construct()</code></h4>

```php
public function __construct(
StreamContext $context,
int $pollInterval = 200
);
```

## Queue\Cli\ConsumerTask

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Cli/ConsumerTask.zep">Source on GitHub</a>

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

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\Injectable`](/5.17/api/phalcon_di/#diinjectable)
- [`Phalcon\Cli\Task`](/5.17/api/phalcon_cli/#clitask)
- **`Phalcon\Queue\Cli\ConsumerTask`**

</div>

__Uses__ `Phalcon\Cli\Task` · `Phalcon\Di\DiInterface` · `Phalcon\Queue\Consumer\QueueConsumer` · `Phalcon\Queue\Consumer\Worker` · `Phalcon\Queue\Consumer\WorkerOptions`

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

<h4 id="queuecliconsumertask-mainaction"><code>mainAction()</code></h4>

```php
public function mainAction(): int;
```

## Queue\Consumer\BoundProcessor

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/BoundProcessor.zep">Source on GitHub</a>

Binds a processor to a queue, together with the consumer that reads it.

<div class="api-tree">

- **`Phalcon\Queue\Consumer\BoundProcessor`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Consumer` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Contracts\Queue\Queue`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/Events.zep">Source on GitHub</a>

Lifecycle event names fired by the queue consumer through
Phalcon\Events\Manager. One public constant per event.

<div class="api-tree">

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/QueueConsumer.zep">Source on GitHub</a>

Lean consumption runner. Binds processors to queues, polls each bound queue
round-robin, and dispatches messages to their processors while firing the
lifecycle events on `Phalcon\Queue\Consumer\Events` through the events
manager. The long-running operational shell (lifetime, signals) lives in
`Phalcon\Queue\Consumer\Worker`, which drives `consumeOnce()` and shares the
stop signal through `stop()` / `isStopRequested()`.

<div class="api-tree">

- [`Phalcon\Events\AbstractEventsAware`](/5.17/api/phalcon_events/#eventsabstracteventsaware)
- **`Phalcon\Queue\Consumer\QueueConsumer`** - implements [`Phalcon\Events\EventsAwareInterface`](/5.17/api/phalcon_events/#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Contracts\Queue\Context` · `Phalcon\Contracts\Queue\Message` · `Phalcon\Contracts\Queue\Processor` · `Phalcon\Contracts\Queue\Queue` · `Phalcon\Events\AbstractEventsAware` · `Phalcon\Events\EventsAwareInterface`

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
public function consumeOnce(): bool;
```

Polls every bound queue once, processing up to one message from each.
Returns true if any message was handled. Sleeps the poll interval when
nothing was received so callers can loop tightly.

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/Worker.zep">Source on GitHub</a>

Long-running operational shell around a QueueConsumer. Owns the outer loop,
the bounded lifetime (max messages / seconds / memory, plus jitter) and -
when ext-pcntl is available - graceful shutdown on SIGTERM/SIGINT/SIGQUIT.
The current message always finishes before the loop stops (drain, not
guillotine), because the stop flag is only checked between iterations.

<div class="api-tree">

- **`Phalcon\Queue\Consumer\Worker`**

</div>

__Uses__ `Phalcon\Traits\Php\InfoTrait`

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

<h4 id="queueconsumerworker-__construct"><code>__construct()</code></h4>

```php
public function __construct(
QueueConsumer $consumer,
WorkerOptions $options = null
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Consumer/WorkerOptions.zep">Source on GitHub</a>

Immutable lifetime bounds for a Worker. A value of 0 means "no limit".
The worker stops on whichever bound trips first.

<div class="api-tree">

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
<span class="desc">Seconds added to maxSeconds (randomised per worker) so a pool does not restart in lockstep.</span>
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/DeliveryDelayNotSupportedException.zep">Source on GitHub</a>

Thrown when the transport does not support a delivery delay.

<div class="api-tree">

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

<h4 id="queueexceptionsdeliverydelaynotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\Exceptions\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/Exception.zep">Source on GitHub</a>

Generic exception for the Queue component, and the base for every typed
queue exception.

<div class="api-tree">

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

## Queue\Exceptions\InvalidDestinationException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/InvalidDestinationException.zep">Source on GitHub</a>

Thrown when a destination is not valid for the operation, for example a
Topic passed where a Queue is required. The action verb ("send to",
"consume from") tailors the message to the failing operation.

<div class="api-tree">

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

<h4 id="queueexceptionsinvaliddestinationexception-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $action );
```

## Queue\Exceptions\InvalidMessageException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/InvalidMessageException.zep">Source on GitHub</a>

Thrown when a message is not valid for the operation.

<div class="api-tree">

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

<h4 id="queueexceptionsinvalidmessageexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\Exceptions\PriorityNotSupportedException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/PriorityNotSupportedException.zep">Source on GitHub</a>

Thrown when the transport does not support message priority.

<div class="api-tree">

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

<h4 id="queueexceptionsprioritynotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\Exceptions\PurgeQueueNotSupportedException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/PurgeQueueNotSupportedException.zep">Source on GitHub</a>

Thrown when the transport does not support purging a queue.

<div class="api-tree">

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

<h4 id="queueexceptionspurgequeuenotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\Exceptions\QueueThrowable

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/QueueThrowable.zep">Source on GitHub</a>

Base throwable contract for the Queue component. Every queue exception
implements it, so callers can catch all queue errors with a single type.

<div class="api-tree">

- `\Throwable`
- **`Phalcon\Queue\Exceptions\QueueThrowable`**

</div>

## Queue\Exceptions\SubscriptionConsumerNotSupportedException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/SubscriptionConsumerNotSupportedException.zep">Source on GitHub</a>

Thrown when the transport does not support subscription consumers.

<div class="api-tree">

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

<h4 id="queueexceptionssubscriptionconsumernotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\Exceptions\TemporaryQueueNotSupportedException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/TemporaryQueueNotSupportedException.zep">Source on GitHub</a>

Thrown when the transport does not support temporary queues.

<div class="api-tree">

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

<h4 id="queueexceptionstemporaryqueuenotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\Exceptions\TimeToLiveNotSupportedException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/Exceptions/TimeToLiveNotSupportedException.zep">Source on GitHub</a>

Thrown when the transport does not support a message time to live.

<div class="api-tree">

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

<h4 id="queueexceptionstimetolivenotsupportedexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Queue\QueueFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Queue/QueueFactory.zep">Source on GitHub</a>

Builds a queue Context from the standard Phalcon config shape. Mirrors
Phalcon\Cache\CacheFactory.

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.17/api/phalcon_factory/#factoryabstractconfigfactory)
- **`Phalcon\Queue\QueueFactory`**

</div>

__Uses__ `Phalcon\Contracts\Queue\Context` · `Phalcon\Factory\AbstractConfigFactory`

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

<h4 id="queuequeuefactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterFactory $factory = null );
```

QueueFactory constructor. A default AdapterFactory is created when none
is supplied, so the factory is usable straight from the DI container.

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

<div class="api-group">Protected · 1</div>

<h4 id="queuequeuefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

Source: https://docs.phalcon.io/5.17/api/phalcon_queue/index.mdx
