# Queue Component

- - -

!!! info "NOTE"

    This component is under active development. The contracts and exception
    hierarchy described below are stable; the adapters, consumer runner and
    factories are delivered in later phases and are noted as such.

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

## Contracts

The contracts live in the `Phalcon\Contracts\Queue` namespace and are pure
interfaces.

| Interface              | Purpose                                                            |
| ---------------------- | ------------------------------------------------------------------ |
| `ConnectionFactory`    | Builds a `Context`; the entry point of every adapter.              |
| `Context`              | A transport session; factory for messages, destinations, producers and consumers. |
| `Destination`          | Marker for a message destination (`Queue` or `Topic`).             |
| `Queue`                | A point-to-point destination (`getQueueName()`).                   |
| `Topic`                | A publish/subscribe destination (`getTopicName()`).                |
| `Message`              | Body, application properties, transport headers and messaging metadata. |
| `Producer`             | Sends messages; supports delivery delay, priority and time to live. |
| `Consumer`             | Receives, acknowledges and rejects messages from a single queue.   |
| `SubscriptionConsumer` | Consumes from several queues at once via callbacks.                |
| `Processor`            | Handles one message; returns `ACK` / `REJECT` / `REQUEUE`.         |
| `VisibilityAware`      | Marker for consumers that support a visibility timeout.            |

### Processor return values

`Phalcon\Contracts\Queue\Processor` exposes three constants that a processor
returns to tell the consumer what to do with the message:

| Constant             | Value             | Meaning                              |
| -------------------- | ----------------- | ------------------------------------ |
| `Processor::ACK`     | `enqueue.ack`     | The message was handled; remove it.  |
| `Processor::REJECT`  | `enqueue.reject`  | Discard the message.                 |
| `Processor::REQUEUE` | `enqueue.requeue` | Put the message back for redelivery. |

The literal values are kept compatible with the wider interop ecosystem.

## Exceptions

Every queue exception implements `Phalcon\Queue\Exceptions\QueueThrowable`, so
all queue errors can be caught with a single type. A concrete
`Phalcon\Queue\Exceptions\Exception` is the base for the typed exceptions
below.

| Exception                                   | Thrown when…                                          |
| ------------------------------------------- | ----------------------------------------------------- |
| `Exception`                                 | Generic queue error; base of all the others.          |
| `InvalidDestinationException`               | A destination is not valid for the operation.         |
| `InvalidMessageException`                   | A message is not valid for the operation.             |
| `DeliveryDelayNotSupportedException`        | The transport does not support a delivery delay.      |
| `PriorityNotSupportedException`             | The transport does not support message priority.      |
| `PurgeQueueNotSupportedException`           | The transport does not support purging a queue.       |
| `SubscriptionConsumerNotSupportedException` | The transport does not support subscription consumers.|
| `TemporaryQueueNotSupportedException`       | The transport does not support temporary queues.      |
| `TimeToLiveNotSupportedException`           | The transport does not support a message time to live.|

## Adapters

!!! info "NOTE"

    Documented as each adapter ships. Planned for v1: **Memory**, **Stream**,
    **Redis** and **Beanstalk**.

## Consumer

!!! info "NOTE"

    The consumption runner (`QueueConsumer`), the long-running `Worker` (with
    bounded lifetime and graceful shutdown) and the CLI consumer task are
    documented when they ship.

## Factories

!!! info "NOTE"

    `Phalcon\Queue\AdapterFactory` and `Phalcon\Queue\QueueFactory` follow the
    `Phalcon\Storage` / `Phalcon\Cache` factory conventions and are documented
    when they ship.

[queue-interop]: https://github.com/queue-interop/queue-interop
[storage]: storage.md
[cache]: cache.md
