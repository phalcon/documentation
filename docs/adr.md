# ADR - Action Domain Responder

- - -

## Overview

Action-Domain-Responder ([ADR][adr-pattern]) is a software architectural pattern that refines Model View Controller ([MVC][mvc]) for applications that speak in requests and responses. It separates the handling of a request into three distinct elements, keeping your business logic isolated from the details of the presentation layer.

Where MVC leaves the controller responsible for both invoking the business logic and preparing the response, ADR splits those concerns apart. An _Action_ drives the _Domain_ and hands its result to a _Responder_. Each route maps to a single, focused action rather than a controller with many methods.

Phalcon offers the object-oriented classes necessary to implement Action-Domain-Responder in your application. As with the rest of the framework, these classes are written in Zephir, which is translated to C, offering a high-performance implementation in PHP.

ADR benefits include:

* A single responsibility per action, instead of controllers that grow without bound
* Business logic that never knows it is on the web, making it easy to test and reuse
* One place, the responder, that owns everything about the response

## Action

An action is a single, invokable class responsible for one route. It collects input from the request, invokes the domain with that input, and hands the domain's result to a responder to build the response. An action contains no business logic and no presentation logic of its own. It is the thin seam that wires the two together. [more...][actions]

## Domain

The domain is your application's business logic: entities, services, and the rules that operate on them. In ADR the domain is unaware of HTTP. It accepts input, does its work, and returns a result (a [Payload][payload]) describing what happened. Because it never touches the request or response, the domain is simple to test and can be reused across HTTP, CLI, or queue contexts. [more...][domain]

## Responder

The responder is the only element that speaks HTTP. It takes the domain's payload and builds the response: status code, headers, and body, choosing the representation (JSON, HTML, redirect, and so on) appropriate to the request. Moving all presentation concerns here keeps them out of the action and the domain. [more...][responders]

## The request lifecycle

The ADR triad is surrounded by a small set of framework components that carry a request from start to finish:

1. The [Front Controller][front] boots the container and runs the application.
2. The [Router][router] matches the request to an action class.
3. The [Dispatcher][dispatcher] resolves that action and runs it through the middleware pipeline.
4. The action drives the domain and passes its payload to a responder.
5. The [Emitter][emitter] sends the resulting response to the client.

[adr-pattern]: https://pmjones.io/adr/
[mvc]: mvc.md
[actions]: adr-actions.md
[domain]: adr-domain.md
[responders]: adr-responders.md
[payload]: adr-payload.md
[front]: adr-front-controller.md
[router]: adr-router.md
[dispatcher]: adr-dispatcher.md
[emitter]: adr-emitter.md
