---
title: "MVC - Model View Controller"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# MVC - Model View Controller

## Overview

Model View Controller ([MVC][wiki-mvc]) is a software architectural pattern, which divides the application logic into three interconnected elements, separating internal representations of information of the application.

Phalcon offers the object-oriented classes, necessary to implement the Model View Controller in your application. This design pattern is widely used by other web frameworks and desktop applications.

MVC benefits include:

* Isolation of business logic from the user interface and the database layer
* Making it clear where different types of code belong for easier maintenance

If you decide to use MVC, every request to your application resources will be managed by the MVC architecture. Phalcon provides the classes that implement the MVC pattern for your PHP application.

## Models

A model represents the information (data) of the application and the rules to manipulate that data. Models are primarily used for managing the rules of interaction with a corresponding database table. In most cases, each table in your database will correspond to one model in your application. The bulk of your application's business logic will be concentrated in the models. [more...][db-models]

## Views

Views represent the user interface of your application. Views are often HTML files with embedded PHP code that perform tasks related solely to the presentation of the data. Views handle the job of providing data to the web browser or other tool that is used to make requests from your application. [more...][views]

## Controllers

The controllers provide the _flow_ between models and views. Controllers are responsible for processing the incoming requests from the web browser, interrogating the models for data, and passing that data on to the views for presentation. [more...][controllers]

[controllers]: /6.0/controllers/
[db-models]: /6.0/db-models/
[views]: /6.0/views/
[wiki-mvc]: https://en.wikipedia.org/wiki/Model-view-controller

Source: https://docs.phalcon.io/6.0/mvc/index.mdx
