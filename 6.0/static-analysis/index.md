---
title: "Static Analysis"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Static Analysis

## Overview

Using a static analysis tool in your project can dramatically increase your code quality and highlight potential bugs
before they are exposed.

## Integrating Psalm with Phalcon

```bash
composer require --dev vimeo/psalm
```

Phalcon v6 is a PHP package. Psalm reads the Phalcon classes from `vendor/phalcon/phalcon` through the Composer
autoloader, so you do not need stubs. The [Phalcon IDE Stubs](https://github.com/phalcon/ide-stubs) are for the
Phalcon v5 C extension only.

## Initializing Psalm

Run the command `vendor/bin/psalm --init` in the root of your project to initialize Psalm. Psalm will create a default
project configuration file called `psalm.xml` at the root of your project.

### Sample Configuration

The configuration file below serves as a good base to use in your project. Replace the contents in `psalm.xml` with the
contents below and change the directories to match your project.

```xml
<?xml version="1.0"?>
<psalm
    errorLevel="3"
    resolveFromConfigFile="true"
    findUnusedCode="false"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="https://getpsalm.org/schema/config"
    xsi:schemaLocation="https://getpsalm.org/schema/config vendor/vimeo/psalm/config.xsd"
>
    <projectFiles>
        <directory name="src" />
        <ignoreFiles>
            <directory name="vendor" />
        </ignoreFiles>
    </projectFiles>
    <issueHandlers>
        <PropertyNotSetInConstructor>
            <errorLevel type="suppress">
                <directory name="src"/>
            </errorLevel>
        </PropertyNotSetInConstructor>
    </issueHandlers>
</psalm>
```

The `PropertyNotSetInConstructor` suppression is for classes such as controllers, which get their services from the
DI container and not from the constructor.

### Running Psalm

When you execute `vendor/bin/psalm` in your command line, you will get a similar output, depending on your errors:

```bash
------------------------------

       No errors found!

------------------------------

Checks took 0.74 seconds and used 72.860MB of memory
Psalm was able to infer types for 83.3333% of the codebase
```

Fix your errors, and run Psalm again.

## Resources

- [Psalm Documentation](https://psalm.dev/docs/)
- [Static Analysis with Psalm PHP](https://www.twilio.com/blog/static-analysis-with-psalm-php)
- [What Is Static Code Analysis?](https://www.perforce.com/blog/sca/what-static-analysis)

Source: https://docs.phalcon.io/6.0/static-analysis/index.mdx
