---
title: "Phalcon Coding Standard"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Coding Standard

Phalcon v6 is written in PHP. The code follows [PSR-12][psr-12] and some additional rules. Two tools check the rules. The [phalcon/code-quality][code-quality] package holds the configuration of both tools, so all the Phalcon projects use the same rules.

| Tool                           | Composer commands                                  | Rules                                                     |
|--------------------------------|----------------------------------------------------|-----------------------------------------------------------|
| [PHP_CodeSniffer][phpcs]       | `composer cs` (check), `composer cs-fix` (fix)     | The `Phalcon` standard: PSR-12, but a method name can start with an underscore |
| [PHP CS Fixer][php-cs-fixer]   | `composer cs-fixer` (dry run), `composer cs-fixer-fix` (fix) | PSR-12 and the Phalcon rules on this page          |

Both tools check `src/`, `tests/unit/`, and `tests/database/`, so the tests follow the same rules. Run `composer cs-fixer-fix` first. The output of PHP CS Fixer passes PHP_CodeSniffer. The CI workflow runs `composer cs`.

The example below follows all the rules:

```php
<?php

declare(strict_types=1);

namespace Phalcon\Db\Adapter;

use Phalcon\Db\Exception;
use Phalcon\Support\Settings;

use function is_int;

class Connection
{
    public const DEFAULT_PORT = 3306;

    protected array $options = [];

    private string $host = 'localhost';

    public function __construct(private int | string | null $port = null)
    {
        $this->options = [
            'charset'    => 'utf8',
            'persistent' => true,
        ];
    }

    public function getDsn(): string
    {
        if ($this->port !== null && !is_int($this->port)) {
            throw new Exception('The port must be an integer');
        }

        $host    = $this->host;
        $port    = $this->port ?? self::DEFAULT_PORT;
        $charset = $this->options['charset'];

        return 'mysql:host=' . $host . ';port=' . $port . ';charset=' . $charset;
    }

    public function getSetting(string $key): bool | int | null
    {
        return Settings::get($key);
    }
}
```

## Files

- Each file declares strict types: `declare(strict_types=1);`
- The folders in `src/` follow the namespaces ([PSR-4][psr-4]). For example, `src/Acl/Adapter/Memory.php` contains the `Phalcon\Acl\Adapter\Memory` class.
- For the other file rules (encoding, line endings, indentation, line length), see [PSR-12][psr-12].

## Imports

- The `use` statements are sorted alphabetically.
- Class imports come first, then function imports, then constant imports.
- Unused imports are removed.

## Class Members

Class members are in the order below. In each group, the members are sorted alphabetically.

1. Trait `use` statements
2. Enum cases
3. Constants: `public`, `protected`, `private`
4. Static properties: `public`, `protected`, `private`
5. Properties: `public`, `protected`, `private`
6. `__construct()`, `__destruct()`, and the other magic methods
7. PHPUnit methods, such as `setUp()` and `tearDown()`
8. Static methods: `public`, `protected`, `private`
9. Methods: `public`, `protected`, `private`

There is one blank line between two members.

## Alignment

- The `=` of consecutive assignments are aligned. The compound assignments (`+=`, `.=`, `??=`, and the others) are in the same group.
- The `=>` of consecutive array elements are aligned.
- All the other binary operators have one space on each side.

## Types

- The types of a union are sorted alphabetically, with `null` last: `bool | int | null`.
- There is one space on each side of the `|`.
- The types in PHPDoc tags use the same order.

## PHPDoc

- The `@param`, `@return`, and `@var` tags that only repeat the native type are removed. A tag stays when it has a description or a more precise type, such as `array<string, mixed>`.
- The tags (`@param`, `@return`, `@throws`, `@var`, and the others) are aligned vertically.
- Empty PHPDoc blocks are removed.

## Static Analysis

The code in `src/` must pass [PHPStan][phpstan] at level `max`. Run `composer analyze` to check it. The configuration is in `resources/phpstan.neon`. The CI workflow runs `composer analyze`.

[code-quality]: https://github.com/phalcon/code-quality
[php-cs-fixer]: https://cs.symfony.com/
[phpcs]: https://github.com/PHPCSStandards/PHP_CodeSniffer
[phpstan]: https://phpstan.org/
[psr-4]: https://www.php-fig.org/psr/psr-4/
[psr-12]: https://www.php-fig.org/psr/psr-12/

Source: https://docs.phalcon.io/6.0/coding-standard/index.mdx
