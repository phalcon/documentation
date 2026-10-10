---
title: "Phalcon Time"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Time

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Time\Clock\ClockInterface

Interface

- **`Phalcon\Time\Clock\ClockInterface`**

`DateTimeImmutable`

### Method Summary

- `public now(): DateTimeImmutable`

### Methods

<h4 id="timeclockclockinterface-now"><code>now()</code></h4>

```php
public function now(): DateTimeImmutable;
```


## Time\Clock\Exception

Class

- `\Exception`
  - **`Phalcon\Time\Clock\Exception`**
    - [`Phalcon\Time\Clock\Exceptions\InvalidModifier`](#timeclockexceptionsinvalidmodifier)


## Time\Clock\Exceptions\InvalidModifier

Class

- `\Exception`
  - [`Phalcon\Time\Clock\Exception`](#timeclockexception)
    - **`Phalcon\Time\Clock\Exceptions\InvalidModifier`**

`Phalcon\Time\Clock\Exception` · `Throwable`

### Method Summary

- `public __construct(string $modifier, Throwable|null $ex = null)`

### Methods

<h4 id="timeclockexceptionsinvalidmodifier-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $modifier,
    Throwable|null $ex = null
);
```


## Time\Clock\FrozenClock

Final

- **`Phalcon\Time\Clock\FrozenClock`** - implements [`Phalcon\Time\Clock\ClockInterface`](#timeclockclockinterface)

`DateTimeImmutable` · `DateTimeZone` · `Phalcon\Time\Clock\Exceptions\InvalidModifier` · `Throwable`

### Method Summary

- `public __construct(DateTimeImmutable $now)`

- `public adjust(string $modifier): static` — Mutates the clock to a new value. All consumers receive the same modification

- `public fromSystemTimezone(): FrozenClock` — Return a new object of now with the current timezone

- `public fromUTC(): FrozenClock` — Return a new object of now with UTC

- `public now(): DateTimeImmutable` — Return the current clock

- `public set(DateTimeImmutable $now): static` — Sets the clock to a new value. All consumers receive the same modification

### Methods

<h4 id="timeclockfrozenclock-__construct"><code>__construct()</code></h4>

```php
public function __construct( DateTimeImmutable $now );
```

<h4 id="timeclockfrozenclock-adjust"><code>adjust()</code></h4>

```php
public function adjust( string $modifier ): static;
```

Mutates the clock to a new value. All consumers receive the same modification

<h4 id="timeclockfrozenclock-fromsystemtimezone"><code>fromSystemTimezone()</code></h4>

```php
public static function fromSystemTimezone(): FrozenClock;
```

Return a new object of now with the current timezone

<h4 id="timeclockfrozenclock-fromutc"><code>fromUTC()</code></h4>

```php
public static function fromUTC(): FrozenClock;
```

Return a new object of now with UTC

<h4 id="timeclockfrozenclock-now"><code>now()</code></h4>

```php
public function now(): DateTimeImmutable;
```

Return the current clock

<h4 id="timeclockfrozenclock-set"><code>set()</code></h4>

```php
public function set( DateTimeImmutable $now ): static;
```

Sets the clock to a new value. All consumers receive the same modification


## Time\Clock\SystemClock

Final

- **`Phalcon\Time\Clock\SystemClock`** - implements [`Phalcon\Time\Clock\ClockInterface`](#timeclockclockinterface)

`DateTimeImmutable` · `DateTimeZone`

### Method Summary

- `public __construct(DateTimeZone $timezone)`

- `public fromSystemTimezone(): SystemClock` — Return a new object of now with the current timezone

- `public fromUTC(): SystemClock` — Return a new object of now with UTC

- `public now(): DateTimeImmutable` — Return the current clock

### Methods

<h4 id="timeclocksystemclock-__construct"><code>__construct()</code></h4>

```php
public function __construct( DateTimeZone $timezone );
```

<h4 id="timeclocksystemclock-fromsystemtimezone"><code>fromSystemTimezone()</code></h4>

```php
public static function fromSystemTimezone(): SystemClock;
```

Return a new object of now with the current timezone

<h4 id="timeclocksystemclock-fromutc"><code>fromUTC()</code></h4>

```php
public static function fromUTC(): SystemClock;
```

Return a new object of now with UTC

<h4 id="timeclocksystemclock-now"><code>now()</code></h4>

```php
public function now(): DateTimeImmutable;
```

Return the current clock

Source: https://docs.phalcon.io/5.20/api/phalcon_time/index.mdx
