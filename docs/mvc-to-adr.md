# ADR - Migrating from MVC

- - -

## Overview

Action-Domain-Responder is a refinement of [MVC][mvc] for applications that handle requests and responses, so moving to it is an incremental, controller-by-controller effort rather than a rewrite. Your models, the DI container, the event manager, filters, and the rest of the framework stay exactly as they are. What changes is how a request is *handled*: a fat controller becomes a set of small actions, each backed by a domain and a responder.

## How the pieces map

| MVC | ADR |
| --- | --- |
| A controller with many action methods | One [action][actions] class per route |
| Business logic inside the controller | The [domain][domain] |
| Building the response inside the controller | The [responder][responders] |
| Explicit route definitions | Convention [routing][router]: the method and path resolve the action class |
| A view rendered for the response | A responder: `ViewResponder` renders the view |
| `Phalcon\Mvc\Model` | `Phalcon\Mvc\Model` (unchanged) |
| The DI container | The same container, wired by the ADR [provider][provider] |

## A worked example

Here is a typical MVC controller action that returns an invoice as JSON:

```php
<?php

namespace MyApp\Controllers;

use MyApp\Models\Invoices;
use Phalcon\Mvc\Controller;

class InvoicesController extends Controller
{
    public function viewAction($id)
    {
        $invoice = Invoices::findFirst($id);

        if ($invoice === null) {
            $this->response->setStatusCode(404);

            return $this->response->setJsonContent(['error' => 'Not found']);
        }

        return $this->response->setJsonContent($invoice);
    }
}
```

The controller does three jobs at once: it fetches data, decides the outcome, and builds the response. ADR separates them.

### 1. The domain holds the business logic

The data access and the decision (found or not) move into a domain that returns a [payload][payload], with no mention of HTTP:

```php
<?php

namespace MyApp\Domain;

use MyApp\Models\Invoices;
use Phalcon\ADR\Input\Input;
use Phalcon\ADR\Payload\Payload;
use Phalcon\Contracts\ADR\Payload\Payload as PayloadInterface;

final class ViewInvoice
{
    public function __invoke(Input $input): PayloadInterface
    {
        $invoice = Invoices::findFirst($input->get('id'));

        return $invoice === null
            ? Payload::notFound(['id' => $input->get('id')])
            : Payload::success($invoice);
    }
}
```

### 2. The action wires input, domain and responder

The action is named for its route and contains only the wiring:

```php
<?php

namespace MyApp\Action\Invoices;

use MyApp\Domain\ViewInvoice;
use Phalcon\ADR\Input\Input;
use Phalcon\Contracts\ADR\Action;
use Phalcon\Contracts\ADR\Responder\Responder;
use Phalcon\Contracts\Http\AttributeRequestInterface;
use Phalcon\Http\Response;
use Phalcon\Http\ResponseInterface;

final class GetInvoices implements Action
{
    public function __construct(
        private ViewInvoice $domain,
        private Responder $responder
    ) {
    }

    public function __invoke(AttributeRequestInterface $request): ResponseInterface
    {
        $payload = ($this->domain)(Input::fromRequest($request));

        return ($this->responder)($request, new Response(), $payload);
    }
}
```

### 3. The responder builds the response

The `404`/`200` decision and the JSON encoding are no longer in your code at all. The built-in `JsonResponder` maps the payload's status to an HTTP code and serializes the result: `NOT_FOUND` becomes a `404`, `SUCCESS` becomes a `200`, and both carry a JSON body. See [Responders][responders].

## A controller that renders a view

A controller that returns HTML instead of JSON does the same three jobs, plus a fourth: it picks a template and hands it the variables.

```php
<?php

namespace MyApp\Controllers;

use MyApp\Models\Invoices;
use Phalcon\Mvc\Controller;

class InvoicesController extends Controller
{
    public function viewAction($id)
    {
        $invoice = Invoices::findFirst($id);

        if ($invoice === null) {
            $this->response->setStatusCode(404);
            $this->view->pick('invoices/notFound');

            return;
        }

        $this->view->setVar('invoice', $invoice);
        $this->view->pick('invoices/view');
    }
}
```

The domain is the one written above, unchanged: it answers *found* or *not found* and knows nothing about templates. What changes is the responder. `Phalcon\ADR\Responder\ViewResponder` takes a renderer, maps the payload status to the HTTP code, and returns the rendered template as HTML. The action type-hints it directly instead of the generic `Responder`, because the action is what names the template:

```php
<?php

namespace MyApp\Action\Invoices;

use MyApp\Domain\ViewInvoice;
use Phalcon\ADR\Input\Input;
use Phalcon\ADR\Responder\ViewResponder;
use Phalcon\Contracts\ADR\Action;
use Phalcon\Contracts\Http\AttributeRequestInterface;
use Phalcon\Http\Response;
use Phalcon\Http\ResponseInterface;

final class GetInvoices implements Action
{
    public function __construct(
        private ViewInvoice $domain,
        private ViewResponder $responder
    ) {
    }

    public function __invoke(AttributeRequestInterface $request): ResponseInterface
    {
        $payload = ($this->domain)(Input::fromRequest($request));

        return ($this->responder->withTemplate('invoices/view'))(
            $request,
            new Response(),
            $payload
        );
    }
}
```

`$this->view->setVar()` has no equivalent: the template receives `result`, `messages` and `status` from the payload, so the data reaches the view without the action passing it along. The `404` is gone too, since the responder derives it from the status.

`$this->view->pick()` becomes `withTemplate()`. The example above renders one template for every outcome, and the template branches on `$status`. To keep a separate page per outcome, as the controller did, pick the template in the action from the status on the payload before invoking the responder.

The renderer is `Phalcon\Mvc\View\Simple`, which implements the new `Phalcon\Contracts\View\Renderer` contract and is bound in your own provider. Your existing `.phtml` templates are used as they are, but the engine map must stay empty, so `.volt` templates cannot be rendered from ADR in this version. See [Responders][responders] for the wiring and the full explanation.

## Migrating a controller, step by step

1. Pick one controller action.
2. Move its data access and business rules into a domain class that returns a payload.
3. Create an action named for the route (see [Routing][router]), injecting the domain and a responder.
4. Delete the response-building code; let the responder produce the response.
5. Remove the explicit route definition; the convention router resolves the action from its class name.
6. Repeat for the next action, then delete the controller once it is empty.

## What stays the same

Your models, the DI container, the event manager, filters, sessions, and every other component are unchanged. ADR changes how requests are handled, not the tools you handle them with, so you can migrate one endpoint at a time while the rest of your MVC application keeps running.

[mvc]: mvc.md
[actions]: adr-actions.md
[domain]: adr-domain.md
[payload]: adr-payload.md
[responders]: adr-responders.md
[router]: adr-router.md
[provider]: adr-container.md
