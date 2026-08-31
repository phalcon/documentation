---
title: "Phalcon Time"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Time

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Time\Clock\ClockInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/ClockInterface.zep)

-   __Namespace__

    - `Phalcon\Time\Clock`

-   __Uses__

    - `DateTimeImmutable`

-   __Extends__

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

### Methods

```php
public function now(): DateTimeImmutable;
```

## Time\Clock\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/Exception.zep)

-   __Namespace__

    - `Phalcon\Time\Clock`

-   __Uses__

    - `Throwable`

-   __Extends__

    `\Exception`

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

### Methods

```php
public static function invalidModifier( string $message, Throwable $ex = null ): Exception;
```

## Time\Clock\FrozenClock ![Final](/assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/FrozenClock.zep)

-   __Namespace__

    - `Phalcon\Time\Clock`

-   __Uses__

    - `DateTimeImmutable`
    - `DateTimeZone`
    - `Throwable`

-   __Extends__

-   __Implements__

    - `ClockInterface`

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

### Properties
```php
/**
 * @var DateTimeImmutable
 */
private $now;

```

### Methods

```php
public function __construct( DateTimeImmutable $now );
```

```php
public function adjust( string $modifier ): FrozenClock;
```
Mutates the clock to a new value. All consumers receive the same modification

@throws Exception When the modifier string cannot be parsed

```php
public static function fromSystemTimezone(): FrozenClock;
```
Return a new object of now with the current timezone

```php
public static function fromUTC(): FrozenClock;
```
Return a new object of now with UTC

```php
public function now(): DateTimeImmutable;
```
Return the current clock

```php
public function set( DateTimeImmutable $now ): FrozenClock;
```
Sets the clock to a new value. All consumers receive the same modification

## Time\Clock\SystemClock ![Final](/assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/SystemClock.zep)

-   __Namespace__

    - `Phalcon\Time\Clock`

-   __Uses__

    - `DateTimeImmutable`
    - `DateTimeZone`

-   __Extends__

-   __Implements__

    - `ClockInterface`

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

### Properties
```php
/**
 * @var DateTimeZone
 */
private $timezone;

```

### Methods

```php
public function __construct( DateTimeZone $timezone );
```

```php
public static function fromSystemTimezone(): SystemClock;
```
Return a new object of now with the current timezone

```php
public static function fromUTC(): SystemClock;
```
Return a new object of now with UTC

```php
public function now(): DateTimeImmutable;
```
Return the current clock

Source: https://docs.phalcon.io/5.13/api/phalcon_time/index.mdx
