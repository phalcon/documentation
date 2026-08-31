---
title: "Settings"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Settings

## Overview

[Phalcon\Support\Settings][support-settings] is a PHP-userland layer for reading and overriding the Phalcon extension's
`ini` settings (`orm.*`, `db.*`, `form.*`). It replaces the `globals_get()` / `globals_set()` builtins that were
previously sprinkled across the framework with a single class that is safe to use from application code.

The component exposes three static methods. There is nothing to instantiate.

```php
<?php

use Phalcon\Support\Settings;

Settings::get('orm.events');                  // mixed
Settings::set('orm.events', false);           // void
Settings::reset();                            // void
```

## Resolution order

`Settings::get($key)` resolves a setting in this order:

1. PHP-level override stored by a prior `Settings::set($key, $value)` call.
2. The C-level value returned by `globals_get($key)` - honouring `php.ini`, `.htaccess`, and per-virtualhost
   configuration.
3. `null` if the key is not recognised.

`Settings::set()` stores the value in the PHP-level override array only. It **does not** call `globals_set()`, so the
underlying C struct is never modified. This keeps an override scoped to the current request (and the PHP process state)
without leaking into other projects that share the same PHP worker.

`Settings::reset()` clears every override that was previously stored via `set()`, restoring `get()` to return the
`globals_get()` fallback for each key. It does not touch C-level configuration.

:::info[NOTE]
In non-ZTS (non-thread-safe) PHP builds, `globals_get()` reads from a process-level C struct. Because `set()` never writes to that struct, any value set by `ini_set("phalcon.orm.*", ...)` or by `globals_set()` from other code remains visible through `get()` as the fallback for keys that have no PHP-level override. In ZTS builds, each thread has its own copy of the struct.
:::

## Recognised keys

Only the keys listed below are recognised. Calls to `set()` for any other key are silently ignored, and `get()` returns
`null` for unknown keys.

| Key                                     | Type   | Notes                                                                                                                  |
|-----------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------|
| `db.escape_identifiers`                 | `bool` | Escape identifiers in generated SQL                                                                                    |
| `db.force_casting`                      | `bool` | Force bind-parameter casting in PDO                                                                                    |
| `form.strict_entity_property_check`     | `bool` | Strict property-existence check in `Form::bind()`                                                                      |
| `orm.case_insensitive_column_map`       | `bool` | Case-insensitive lookup of column-map keys                                                                             |
| `orm.cast_last_insert_id_to_int`        | `bool` | Cast `lastInsertId` to `int` on auto-increment columns                                                                 |
| `orm.cast_on_hydrate`                   | `bool` | Cast values to the column type during hydration                                                                        |
| `orm.column_renaming`                   | `bool` | Honour the column-map during attribute lookup                                                                          |
| `orm.disable_assign_setters`            | `bool` | Skip setter methods in `Model::assign()` / `cloneResultMap()`                                                          |
| `orm.dynamic_update`                    | `bool` | Issue `UPDATE` statements only for changed columns                                                                     |
| `orm.enable_implicit_joins`             | `bool` | Allow PHQL to auto-join related models                                                                                 |
| `orm.enable_literals`                   | `bool` | Allow literals on the right-hand side of PHQL expressions                                                              |
| `orm.events`                            | `bool` | Fire ORM lifecycle events                                                                                              |
| `orm.exception_on_failed_metadata_save` | `bool` | Throw when MetaData cache write fails                                                                                  |
| `orm.exception_on_failed_save`          | `bool` | Throw when `save()` fails instead of returning `false`                                                                 |
| `orm.ignore_unknown_columns`            | `bool` | Silently drop unknown columns during hydration                                                                         |
| `orm.late_state_binding`                | `bool` | Resolve static calls on the late-bound model class                                                                     |
| `orm.not_null_validations`              | `bool` | Add not-null validations automatically                                                                                 |
| `orm.resultset_empty_left_join_model`   | `bool` | LEFT-JOIN hydration: `true` (default) returns an empty Model instance for unmatched rows; `false` returns plain `null` |
| `orm.resultset_prefetch_records`        | `int`  | Number of records prefetched for big resultsets (`0` = unlimited)                                                      |
| `orm.update_snapshot_on_save`           | `bool` | Update the model snapshot after a successful save                                                                      |
| `orm.virtual_foreign_keys`              | `bool` | Validate virtual foreign keys before save / delete                                                                     |

## Examples

Read the current value of a setting:

```php
<?php

use Phalcon\Support\Settings;

if (Settings::get('orm.dynamic_update')) {
// The ORM is configured to issue partial UPDATE statements
}
```

Toggle a setting for the lifetime of the request:

```php
<?php

use Phalcon\Support\Settings;

Settings::set('orm.events', false);

// ... do bulk work that should not fire model events ...

Settings::set('orm.events', true);
```

Restore every override to its `php.ini` fallback at once:

```php
<?php

use Phalcon\Support\Settings;

Settings::reset();
```

## Migrating from `globals_get` / `globals_set`

Before [Phalcon\Support\Settings][support-settings], the recommended way to read or change these toggles from PHP was to
call `globals_get()` / `globals_set()` directly. Internally the framework now routes every such access through
`Settings::get()` / `Settings::set()` so per-project overrides cannot leak across projects sharing the same PHP worker.
Application code should follow suit:

| Before                               | After                                                |
|--------------------------------------|------------------------------------------------------|
| `globals_get('orm.events')`          | `Phalcon\Support\Settings::get('orm.events')`        |
| `globals_set('orm.events', false)`   | `Phalcon\Support\Settings::set('orm.events', false)` |
| `ini_set('phalcon.orm.events', '0')` | `Phalcon\Support\Settings::set('orm.events', false)` |

[support-settings]: /5.13/api/phalcon_support/#supportsettings

Source: https://docs.phalcon.io/5.13/support-settings/index.mdx
