---
title: "Generating a Backtrace"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Generating a Backtrace

Phalcon is compiled into a C extension loaded on your web server. Because of that, bugs lead to segmentation faults,
causing Phalcon to crash some of your web server processes.

For debugging these segmentation faults a stack trace is required. Creating a stack trace requires a special build of
PHP and some steps need to be done to generate a trace that allows the Phalcon team to debug this behavior.

Please follow this guide to understand how to generate the backtrace.

[https://bugs.php.net/bugs-generating-backtrace.php](https://bugs.php.net/bugs-generating-backtrace.php)

[https://bugs.php.net/bugs-generating-backtrace-win32.php](https://bugs.php.net/bugs-generating-backtrace-win32.php)

Source: https://docs.phalcon.io/5.13/generating-backtrace/index.mdx
