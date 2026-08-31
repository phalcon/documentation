---
title: "Phalcon Time"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Time

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Time\Clock\ClockInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/phalcon/blob/v6.0.x/src/Time/Clock/ClockInterface.php">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Time\Clock\ClockInterface`**

</div>

__Uses__ `DateTimeImmutable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclockclockinterface-now">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig"><span class="sf">now</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="timeclockclockinterface-now"><code>now()</code></h4>

```php
public function now(): DateTimeImmutable;
```

## Time\Clock\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/phalcon/blob/v6.0.x/src/Time/Clock/Exception.php">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- **`Phalcon\Time\Clock\Exception`**
- [`Phalcon\Time\Clock\Exceptions\InvalidModifier`](#timeclockexceptionsinvalidmodifier)

</div>

## Time\Clock\Exceptions\InvalidModifier

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/phalcon/blob/v6.0.x/src/Time/Clock/Exceptions/InvalidModifier.php">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Time\Clock\Exception`](#timeclockexception)
- **`Phalcon\Time\Clock\Exceptions\InvalidModifier`**

</div>

__Uses__ `Phalcon\Time\Clock\Exception` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclockexceptionsinvalidmodifier-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$modifier</span>,</span><span class="prm"><span class="st">Throwable|null</span> <span class="sv">$ex</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="timeclockexceptionsinvalidmodifier-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $modifier,
Throwable|null $ex = null
);
```

## Time\Clock\FrozenClock

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/phalcon/blob/v6.0.x/src/Time/Clock/FrozenClock.php">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Time\Clock\FrozenClock`** - implements [`Phalcon\Time\Clock\ClockInterface`](#timeclockclockinterface)

</div>

__Uses__ `DateTimeImmutable` · `DateTimeZone` · `Phalcon\Time\Clock\Exceptions\InvalidModifier` · `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclockfrozenclock-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">DateTimeImmutable</span> <span class="sv">$now</span> )</code>
</a>
<a class="api-item" href="#timeclockfrozenclock-adjust">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">adjust</span>( <span class="st">string</span> <span class="sv">$modifier</span> )</code>
<span class="desc">Mutates the clock to a new value. All consumers receive the same modification</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-fromsystemtimezone">
<code class="vis vis-public">public</code>
<code class="ret">FrozenClock</code>
<code class="sig"><span class="sf">fromSystemTimezone</span>()</code>
<span class="desc">Return a new object of now with the current timezone</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-fromutc">
<code class="vis vis-public">public</code>
<code class="ret">FrozenClock</code>
<code class="sig"><span class="sf">fromUTC</span>()</code>
<span class="desc">Return a new object of now with UTC</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-now">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig"><span class="sf">now</span>()</code>
<span class="desc">Return the current clock</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">set</span>( <span class="st">DateTimeImmutable</span> <span class="sv">$now</span> )</code>
<span class="desc">Sets the clock to a new value. All consumers receive the same modification</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

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

<span class="badge badge--final">Final</span>
<a class="src-btn" href="https://github.com/phalcon/phalcon/blob/v6.0.x/src/Time/Clock/SystemClock.php">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Time\Clock\SystemClock`** - implements [`Phalcon\Time\Clock\ClockInterface`](#timeclockclockinterface)

</div>

__Uses__ `DateTimeImmutable` · `DateTimeZone`

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclocksystemclock-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">DateTimeZone</span> <span class="sv">$timezone</span> )</code>
</a>
<a class="api-item" href="#timeclocksystemclock-fromsystemtimezone">
<code class="vis vis-public">public</code>
<code class="ret">SystemClock</code>
<code class="sig"><span class="sf">fromSystemTimezone</span>()</code>
<span class="desc">Return a new object of now with the current timezone</span>
</a>
<a class="api-item" href="#timeclocksystemclock-fromutc">
<code class="vis vis-public">public</code>
<code class="ret">SystemClock</code>
<code class="sig"><span class="sf">fromUTC</span>()</code>
<span class="desc">Return a new object of now with UTC</span>
</a>
<a class="api-item" href="#timeclocksystemclock-now">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig"><span class="sf">now</span>()</code>
<span class="desc">Return the current clock</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

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

Source: https://docs.phalcon.io/6.0/api/phalcon_time/index.mdx
