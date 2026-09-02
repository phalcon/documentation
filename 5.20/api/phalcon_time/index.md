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

<ApiItem href="#timeclockclockinterface-now" visibility="public" name="now" returnType="DateTimeImmutable" params={[]}>
</ApiItem>

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

<ApiItem href="#timeclockexceptionsinvalidmodifier-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"modifier","default":null},{"type":"Throwable|null","name":"ex","default":"null"}]}>
</ApiItem>

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

<ApiItem href="#timeclockfrozenclock-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"DateTimeImmutable","name":"now","default":null}]}>
</ApiItem>
<ApiItem href="#timeclockfrozenclock-adjust" visibility="public" name="adjust" returnType="static" params={[{"type":"string","name":"modifier","default":null}]}>
Mutates the clock to a new value. All consumers receive the same modification
</ApiItem>
<ApiItem href="#timeclockfrozenclock-fromsystemtimezone" visibility="public" name="fromSystemTimezone" returnType="FrozenClock" params={[]}>
Return a new object of now with the current timezone
</ApiItem>
<ApiItem href="#timeclockfrozenclock-fromutc" visibility="public" name="fromUTC" returnType="FrozenClock" params={[]}>
Return a new object of now with UTC
</ApiItem>
<ApiItem href="#timeclockfrozenclock-now" visibility="public" name="now" returnType="DateTimeImmutable" params={[]}>
Return the current clock
</ApiItem>
<ApiItem href="#timeclockfrozenclock-set" visibility="public" name="set" returnType="static" params={[{"type":"DateTimeImmutable","name":"now","default":null}]}>
Sets the clock to a new value. All consumers receive the same modification
</ApiItem>

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

<ApiItem href="#timeclocksystemclock-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"DateTimeZone","name":"timezone","default":null}]}>
</ApiItem>
<ApiItem href="#timeclocksystemclock-fromsystemtimezone" visibility="public" name="fromSystemTimezone" returnType="SystemClock" params={[]}>
Return a new object of now with the current timezone
</ApiItem>
<ApiItem href="#timeclocksystemclock-fromutc" visibility="public" name="fromUTC" returnType="SystemClock" params={[]}>
Return a new object of now with UTC
</ApiItem>
<ApiItem href="#timeclocksystemclock-now" visibility="public" name="now" returnType="DateTimeImmutable" params={[]}>
Return the current clock
</ApiItem>

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
