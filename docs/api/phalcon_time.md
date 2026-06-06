---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Time\Clock\ClockInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/ClockInterface.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

<div class="api-tree" markdown>

- **`Phalcon\Time\Clock\ClockInterface`**

</div>

__Uses__ `DateTimeImmutable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclockclockinterface-now">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig">now()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `now()` { #timeclockclockinterface-now }

```php
public function now(): DateTimeImmutable;
```


## Time\Clock\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/Exception.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Time\Clock\Exception`**
        - [`Phalcon\Time\Clock\Exceptions\InvalidModifier`](#timeclockexceptionsinvalidmodifier)

</div>


## Time\Clock\Exceptions\InvalidModifier

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/Exceptions/InvalidModifier.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Time\Clock\Exception`](#timeclockexception)
        - **`Phalcon\Time\Clock\Exceptions\InvalidModifier`**

</div>

__Uses__ `Phalcon\Time\Clock\Exception` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclockexceptionsinvalidmodifier-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $message,
    Throwable $ex = null
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #timeclockexceptionsinvalidmodifier-__construct }

```php
public function __construct(
    string $message,
    Throwable $ex = null
);
```


## Time\Clock\FrozenClock

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/FrozenClock.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

<div class="api-tree" markdown>

- **`Phalcon\Time\Clock\FrozenClock`** — implements [`Phalcon\Time\Clock\ClockInterface`](#timeclockclockinterface)

</div>

__Uses__ `DateTimeImmutable` · `DateTimeZone` · `Phalcon\Time\Clock\Exceptions\InvalidModifier` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclockfrozenclock-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( DateTimeImmutable $now )</code>
</a>
<a class="api-item" href="#timeclockfrozenclock-adjust">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">adjust( string $modifier )</code>
<span class="desc">Mutates the clock to a new value. All consumers receive the same modification</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-fromsystemtimezone">
<code class="vis vis-public">public</code>
<code class="ret">FrozenClock</code>
<code class="sig">fromSystemTimezone()</code>
<span class="desc">Return a new object of now with the current timezone</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-fromutc">
<code class="vis vis-public">public</code>
<code class="ret">FrozenClock</code>
<code class="sig">fromUTC()</code>
<span class="desc">Return a new object of now with UTC</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-now">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig">now()</code>
<span class="desc">Return the current clock</span>
</a>
<a class="api-item" href="#timeclockfrozenclock-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">set( DateTimeImmutable $now )</code>
<span class="desc">Sets the clock to a new value. All consumers receive the same modification</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #timeclockfrozenclock-__construct }

```php
public function __construct( DateTimeImmutable $now );
```

#### `adjust()` { #timeclockfrozenclock-adjust }

```php
public function adjust( string $modifier ): static;
```

Mutates the clock to a new value. All consumers receive the same modification

#### `fromSystemTimezone()` { #timeclockfrozenclock-fromsystemtimezone }

```php
public static function fromSystemTimezone(): FrozenClock;
```

Return a new object of now with the current timezone

#### `fromUTC()` { #timeclockfrozenclock-fromutc }

```php
public static function fromUTC(): FrozenClock;
```

Return a new object of now with UTC

#### `now()` { #timeclockfrozenclock-now }

```php
public function now(): DateTimeImmutable;
```

Return the current clock

#### `set()` { #timeclockfrozenclock-set }

```php
public function set( DateTimeImmutable $now ): static;
```

Sets the clock to a new value. All consumers receive the same modification


## Time\Clock\SystemClock

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Time/Clock/SystemClock.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by lcobucci/clock

@link    https://github.com/lcobucci/clock
@license https://github.com/lcobucci/clock/blob/3.7.x/LICENSE

<div class="api-tree" markdown>

- **`Phalcon\Time\Clock\SystemClock`** — implements [`Phalcon\Time\Clock\ClockInterface`](#timeclockclockinterface)

</div>

__Uses__ `DateTimeImmutable` · `DateTimeZone`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#timeclocksystemclock-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( DateTimeZone $timezone )</code>
</a>
<a class="api-item" href="#timeclocksystemclock-fromsystemtimezone">
<code class="vis vis-public">public</code>
<code class="ret">SystemClock</code>
<code class="sig">fromSystemTimezone()</code>
<span class="desc">Return a new object of now with the current timezone</span>
</a>
<a class="api-item" href="#timeclocksystemclock-fromutc">
<code class="vis vis-public">public</code>
<code class="ret">SystemClock</code>
<code class="sig">fromUTC()</code>
<span class="desc">Return a new object of now with UTC</span>
</a>
<a class="api-item" href="#timeclocksystemclock-now">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig">now()</code>
<span class="desc">Return the current clock</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #timeclocksystemclock-__construct }

```php
public function __construct( DateTimeZone $timezone );
```

#### `fromSystemTimezone()` { #timeclocksystemclock-fromsystemtimezone }

```php
public static function fromSystemTimezone(): SystemClock;
```

Return a new object of now with the current timezone

#### `fromUTC()` { #timeclocksystemclock-fromutc }

```php
public static function fromUTC(): SystemClock;
```

Return a new object of now with UTC

#### `now()` { #timeclocksystemclock-now }

```php
public function now(): DateTimeImmutable;
```

Return the current clock
