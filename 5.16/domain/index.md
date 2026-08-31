---
title: "Domain"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Domain

:::warning[WARNING]
In future versions of Phalcon, this component will be reworked to follow the [Payload Interop][payload-interop] interface.
:::

The domain component incorporates components that are used for the implementation of the [Action Domain Responder][adr] ([ADR][adr-jones]) pattern and can also be used when implementing [Domain Driven Design][ddd].

## Payload

The [Action Domain Responder][adr] requires a data transfer mechanism between the three layers to serve your application. The [Phalcon\Domain\Payload][payload-payload] is a data transfer object that is used to send data between the three layers of the pattern.

```php
<?php

use Phalcon\Domain\Payload;

$payload = new Payload();
```

When using this object, you can set its status, the input, the output, any messages, or extra information required by each layer of your pattern to be transferred to the next layer that requires it during the application flow. The class itself is a data wrapper that contains the necessary information to be passed between layers.

The properties stored are:

| Property   | Description       |
|------------|-------------------|
| `extras`   | Extra information |
| `input`    | Input             |
| `messages` | Messages          |
| `status`   | Status            |
| `output`   | Output            |

The component offers getters and setters for the above properties.

:::info[NOTE]
All the setters return a [Phalcon\Domain\Payload][payload-payload] object, which allows you to chain calls for a more fluent syntax.
:::

## Factory

[Phalcon\Domain\PayloadFactory][payload-payloadfactory] is also available, offering a way to generate new Payload objects.

```php
<?php
use Phalcon\Domain\PayloadFactory;

$payloadFactory = new PayloadFactory();
$payload = $payloadFactory->newInstance();
?>
```

## Interfaces

There are three interfaces that you can take advantage of if you wish to extend the object.

| Interface            | Description                          |
|----------------------|--------------------------------------|
| `ReadableInterface`  | contains only read methods           |
| `WriteableInterface` | contains only write methods          |
| `PayloadInterface`   | contains both read and write methods |

The two single-responsibility interfaces describe a narrowing convention for the [Action Domain Responder][adr] flow:

- The domain layer builds the payload through `WriteableInterface` (the setters).
- The responder consumes the finished payload through `ReadableInterface` (the getters).

`PayloadInterface` extends both and exposes the full surface. Type-hinting against the narrower interface at each boundary keeps each side to the capability it needs.

## Contracts

The three interfaces above extend canonical contracts in the `Phalcon\Contracts\Domain\Payload` namespace. New code should type-hint the contracts. The `*Interface` types remain as deprecated aliases and will be removed in a future major version.

| Deprecated interface                        | Contract                                     |
|---------------------------------------------|----------------------------------------------|
| `Phalcon\Domain\Payload\ReadableInterface`  | `Phalcon\Contracts\Domain\Payload\Readable`  |
| `Phalcon\Domain\Payload\WriteableInterface` | `Phalcon\Contracts\Domain\Payload\Writeable` |
| `Phalcon\Domain\Payload\PayloadInterface`   | `Phalcon\Contracts\Domain\Payload\Payload`   |

## Status Values

The [Phalcon\Domain\Payload\Status][payload-status] class contains several constants to help with the domain status of your Payload objects. You can always extend the class and introduce your own domain statuses, depending on the needs of your application.

* `ACCEPTED`
* `AUTHENTICATED`
* `AUTHORIZED`
* `CREATED`
* `DELETED`
* `ERROR`
* `FAILURE`
* `FOUND`
* `NOT_ACCEPTED`
* `NOT_AUTHENTICATED`
* `NOT_AUTHORIZED`
* `NOT_CREATED`
* `NOT_DELETED`
* `NOT_FOUND`
* `NOT_UPDATED`
* `NOT_VALID`
* `PROCESSING`
* `SUCCESS`
* `UPDATED`
* `VALID`

These statuses can be used at the display/view layer of your application to process domain objects retrieved via `Payload::getOutput()`.

:::info[NOTE]
`ERROR` and `FAILURE` carry distinct meanings. `ERROR` means an exception was raised while the domain layer was running; by convention, `Payload::setException()` pairs with the `ERROR` status. `FAILURE` means the domain layer ran to completion but declined the request (for example, a business rule was not satisfied), with no exception raised.
:::

## Example

```php
<?php

use Application\Models\Reports;
use Phalcon\Domain\PayloadFactory;
use Phalcon\Domain\Payload\Status;
use Phalcon\Mvc\Controller;

class ReportsController extends Controller
{
public function viewAction(int $reportId)
{
    $factory = new PayloadFactory();
    $payload = $factory->newInstance();

    $report = Reports::find(
        [
            'conditions' => 'reportId = :reportId:',
            'bind'       => [
                'reportId' => $reportId,
             ],
        ]          
    );

    if (false === $report) {
        $payload
            ->setStatus(Status::NOT_FOUND)
            ->setInput(func_get_args())
        ;
    } else {
        $payload
            ->setStatus(Status::FOUND)
            ->setOutput($report)
        ;
    }

    return $payload;
}
}   
```

## Links

* [Action Domain Responder][adr]
* [Clarifications to a review of Action Domain Responder][adr-clarifications]
* [Payload Interop][payload-interop]

[adr]: https://en.wikipedia.org/wiki/Action%E2%80%93domain%E2%80%93responder
[adr-clarifications]: https://paul-m-jones.com/post/2018/12/19/clarifications-to-a-review-of-action-domain-responder/
[adr-jones]: https://pmjones.io/adr/
[ddd]: https://en.wikipedia.org/wiki/Domain-driven_design
[payload-interop]: https://github.com/payload-interop/payload-interop
[payload-payload]: /5.16/api/phalcon_domain/#domainpayloadpayload
[payload-payloadfactory]: /5.16/api/phalcon_domain/#domainpayloadpayloadfactory
[payload-payloadinterface]: /5.16/api/phalcon_domain/#domainpayloadpayloadinterface
[payload-readableinterface]: /5.16/api/phalcon_domain/#domainpayloadreadableinterface
[payload-status]: /5.16/api/phalcon_domain/#domainpayloadstatus
[payload-writeableinterface]: /5.16/api/phalcon_domain/#domainpayloadwriteableinterface

Source: https://docs.phalcon.io/5.16/domain/index.mdx
