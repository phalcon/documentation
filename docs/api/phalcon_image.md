---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Image\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Adapter/AbstractAdapter.zep){ .src-btn }

All image adapters must use this class

<div class="api-tree" markdown>

- **`Phalcon\Image\Adapter\AbstractAdapter`** — implements [`Phalcon\Image\Adapter\AdapterInterface`](#imageadapteradapterinterface)
    - [`Phalcon\Image\Adapter\Gd`](#imageadaptergd)
    - [`Phalcon\Image\Adapter\Imagick`](#imageadapterimagick)

</div>

__Uses__ `Phalcon\Image\Enum` · `Phalcon\Image\Exception` · `Phalcon\Image\Exceptions\MissingDimensions` · `Phalcon\Image\Exceptions\MissingHeight` · `Phalcon\Image\Exceptions\MissingWidth`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageadapterabstractadapter-background">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">background</span>(<span class="prm"><span class="st">string</span> <span class="sv">$color</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Set the background color of an image</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-blur">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">blur</span>( <span class="st">int</span> <span class="sv">$radius</span> )</code>
<span class="desc">Blur image</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-crop">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">crop</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetX</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetY</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Crop an image to the given size</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-flip">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">flip</span>( <span class="st">int</span> <span class="sv">$direction</span> )</code>
<span class="desc">Flip the image along the horizontal or vertical axis</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-getheight">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getHeight</span>()</code>
</a>
<a class="api-item" href="#imageadapterabstractadapter-getimage">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getImage</span>()</code>
</a>
<a class="api-item" href="#imageadapterabstractadapter-getmime">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMime</span>()</code>
</a>
<a class="api-item" href="#imageadapterabstractadapter-getrealpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealpath</span>()</code>
</a>
<a class="api-item" href="#imageadapterabstractadapter-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
<a class="api-item" href="#imageadapterabstractadapter-getwidth">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getWidth</span>()</code>
</a>
<a class="api-item" href="#imageadapterabstractadapter-mask">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">mask</span>( <span class="st">AdapterInterface</span> <span class="sv">$mask</span> )</code>
<span class="desc">Composite one image onto another</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-pixelate">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">pixelate</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
<span class="desc">Pixelate image</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-reflection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">reflection</span>(<span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$fadeIn</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Add a reflection to an image</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>(<span class="prm"><span class="st">string</span> <span class="sv">$extension</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Render the image and return the binary string</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-resize">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">resize</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$master</span><span class="sm"> = Enum::AUTO</span></span>)</code>
<span class="desc">Resize the image to the given size</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-rotate">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">rotate</span>( <span class="st">int</span> <span class="sv">$degrees</span> )</code>
<span class="desc">Rotate the image by a given amount</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-save">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">save</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Save the image</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-sharpen">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">sharpen</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
<span class="desc">Sharpen the image by a given amount</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-text">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">text</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetX</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetY</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$color</span><span class="sm"> = &quot;000000&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$size</span><span class="sm"> = 12</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fontFile</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Add a text to an image with a specified opacity</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-watermark">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">watermark</span>(<span class="prm"><span class="st">AdapterInterface</span> <span class="sv">$watermark</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Add a watermark to an image with the specified opacity</span>
</a>
<a class="api-item" href="#imageadapterabstractadapter-checkhighlow">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">checkHighLow</span>(<span class="prm"><span class="st">int</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$min</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$max</span><span class="sm"> = 100</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$file</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$height</span></code>
<span class="desc">Image height</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sv">$image</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$mime</span></code>
<span class="desc">Image mime type</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$realpath</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$type</span></code>
<span class="desc">Image type

Driver dependent</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$width</span></code>
<span class="desc">Image width</span>
</div>
</div>

### Methods

<div class="api-group">Public · 20</div>

#### `background()` { #imageadapterabstractadapter-background }

```php
public function background(
    string $color,
    int $opacity = 100
): AdapterInterface;
```

Set the background color of an image

#### `blur()` { #imageadapterabstractadapter-blur }

```php
public function blur( int $radius ): AdapterInterface;
```

Blur image

#### `crop()` { #imageadapterabstractadapter-crop }

```php
public function crop(
    int $width,
    int $height,
    mixed $offsetX = null,
    mixed $offsetY = null
): AdapterInterface;
```

Crop an image to the given size

#### `flip()` { #imageadapterabstractadapter-flip }

```php
public function flip( int $direction ): AdapterInterface;
```

Flip the image along the horizontal or vertical axis

#### `getHeight()` { #imageadapterabstractadapter-getheight }

```php
public function getHeight(): int;
```

#### `getImage()` { #imageadapterabstractadapter-getimage }

```php
public function getImage();
```

#### `getMime()` { #imageadapterabstractadapter-getmime }

```php
public function getMime(): string;
```

#### `getRealpath()` { #imageadapterabstractadapter-getrealpath }

```php
public function getRealpath(): string;
```

#### `getType()` { #imageadapterabstractadapter-gettype }

```php
public function getType(): int;
```

#### `getWidth()` { #imageadapterabstractadapter-getwidth }

```php
public function getWidth(): int;
```

#### `mask()` { #imageadapterabstractadapter-mask }

```php
public function mask( AdapterInterface $mask ): AdapterInterface;
```

Composite one image onto another

#### `pixelate()` { #imageadapterabstractadapter-pixelate }

```php
public function pixelate( int $amount ): AdapterInterface;
```

Pixelate image

#### `reflection()` { #imageadapterabstractadapter-reflection }

```php
public function reflection(
    int $height,
    int $opacity = 100,
    bool $fadeIn = false
): AdapterInterface;
```

Add a reflection to an image

#### `render()` { #imageadapterabstractadapter-render }

```php
public function render(
    string $extension = null,
    int $quality = 100
): string;
```

Render the image and return the binary string

#### `resize()` { #imageadapterabstractadapter-resize }

```php
public function resize(
    int $width = null,
    int $height = null,
    int $master = Enum::AUTO
): AdapterInterface;
```

Resize the image to the given size

#### `rotate()` { #imageadapterabstractadapter-rotate }

```php
public function rotate( int $degrees ): AdapterInterface;
```

Rotate the image by a given amount

#### `save()` { #imageadapterabstractadapter-save }

```php
public function save(
    string $file = null,
    int $quality = -1
): AdapterInterface;
```

Save the image

#### `sharpen()` { #imageadapterabstractadapter-sharpen }

```php
public function sharpen( int $amount ): AdapterInterface;
```

Sharpen the image by a given amount

#### `text()` { #imageadapterabstractadapter-text }

```php
public function text(
    string $text,
    mixed $offsetX = false,
    mixed $offsetY = false,
    int $opacity = 100,
    string $color = "000000",
    int $size = 12,
    string $fontFile = null
): AdapterInterface;
```

Add a text to an image with a specified opacity

#### `watermark()` { #imageadapterabstractadapter-watermark }

```php
public function watermark(
    AdapterInterface $watermark,
    int $offsetX = 0,
    int $offsetY = 0,
    int $opacity = 100
): AdapterInterface;
```

Add a watermark to an image with the specified opacity

<div class="api-group">Protected · 1</div>

#### `checkHighLow()` { #imageadapterabstractadapter-checkhighlow }

```php
protected function checkHighLow(
    int $value,
    int $min = 0,
    int $max = 100
): int;
```


## Image\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Adapter/AdapterInterface.zep){ .src-btn }

Interface for Phalcon\Image\Adapter classes

<div class="api-tree" markdown>

- **`Phalcon\Image\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Image\Enum`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageadapteradapterinterface-background">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">background</span>(<span class="prm"><span class="st">string</span> <span class="sv">$color</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Add a background to an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-blur">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">blur</span>( <span class="st">int</span> <span class="sv">$radius</span> )</code>
<span class="desc">Blur an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-crop">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">crop</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Crop an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-flip">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">flip</span>( <span class="st">int</span> <span class="sv">$direction</span> )</code>
<span class="desc">Flip an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-getheight">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getHeight</span>()</code>
</a>
<a class="api-item" href="#imageadapteradapterinterface-getwidth">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getWidth</span>()</code>
</a>
<a class="api-item" href="#imageadapteradapterinterface-mask">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">mask</span>( <span class="st">AdapterInterface</span> <span class="sv">$mask</span> )</code>
<span class="desc">Add a mask to an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-pixelate">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">pixelate</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
<span class="desc">Pixelate an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-reflection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">reflection</span>(<span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$fadeIn</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Reflect an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>(<span class="prm"><span class="st">string</span> <span class="sv">$extension</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Render an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-resize">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">resize</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$master</span><span class="sm"> = Enum::AUTO</span></span>)</code>
<span class="desc">Resize an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-rotate">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">rotate</span>( <span class="st">int</span> <span class="sv">$degrees</span> )</code>
<span class="desc">Rotate an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-save">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">save</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Save an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-sharpen">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">sharpen</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
<span class="desc">Sharpen an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-text">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">text</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$color</span><span class="sm"> = &quot;000000&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$size</span><span class="sm"> = 12</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fontFile</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Adds text on an image</span>
</a>
<a class="api-item" href="#imageadapteradapterinterface-watermark">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">watermark</span>(<span class="prm"><span class="st">AdapterInterface</span> <span class="sv">$watermark</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span><span class="sm"> = 100</span></span>)</code>
<span class="desc">Add a watermark on an image</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `background()` { #imageadapteradapterinterface-background }

```php
public function background(
    string $color,
    int $opacity = 100
): AdapterInterface;
```

Add a background to an image

#### `blur()` { #imageadapteradapterinterface-blur }

```php
public function blur( int $radius ): AdapterInterface;
```

Blur an image

#### `crop()` { #imageadapteradapterinterface-crop }

```php
public function crop(
    int $width,
    int $height,
    int $offsetX = null,
    int $offsetY = null
): AdapterInterface;
```

Crop an image

#### `flip()` { #imageadapteradapterinterface-flip }

```php
public function flip( int $direction ): AdapterInterface;
```

Flip an image

#### `getHeight()` { #imageadapteradapterinterface-getheight }

```php
public function getHeight(): int;
```

#### `getWidth()` { #imageadapteradapterinterface-getwidth }

```php
public function getWidth(): int;
```

#### `mask()` { #imageadapteradapterinterface-mask }

```php
public function mask( AdapterInterface $mask ): AdapterInterface;
```

Add a mask to an image

#### `pixelate()` { #imageadapteradapterinterface-pixelate }

```php
public function pixelate( int $amount ): AdapterInterface;
```

Pixelate an image

#### `reflection()` { #imageadapteradapterinterface-reflection }

```php
public function reflection(
    int $height,
    int $opacity = 100,
    bool $fadeIn = false
): AdapterInterface;
```

Reflect an image

#### `render()` { #imageadapteradapterinterface-render }

```php
public function render(
    string $extension = null,
    int $quality = 100
): string;
```

Render an image

#### `resize()` { #imageadapteradapterinterface-resize }

```php
public function resize(
    int $width = null,
    int $height = null,
    int $master = Enum::AUTO
): AdapterInterface;
```

Resize an image

#### `rotate()` { #imageadapteradapterinterface-rotate }

```php
public function rotate( int $degrees ): AdapterInterface;
```

Rotate an image

#### `save()` { #imageadapteradapterinterface-save }

```php
public function save(
    string $file = null,
    int $quality = 100
): AdapterInterface;
```

Save an image

#### `sharpen()` { #imageadapteradapterinterface-sharpen }

```php
public function sharpen( int $amount ): AdapterInterface;
```

Sharpen an image

#### `text()` { #imageadapteradapterinterface-text }

```php
public function text(
    string $text,
    int $offsetX = 0,
    int $offsetY = 0,
    int $opacity = 100,
    string $color = "000000",
    int $size = 12,
    string $fontFile = null
): AdapterInterface;
```

Adds text on an image

#### `watermark()` { #imageadapteradapterinterface-watermark }

```php
public function watermark(
    AdapterInterface $watermark,
    int $offsetX = 0,
    int $offsetY = 0,
    int $opacity = 100
): AdapterInterface;
```

Add a watermark on an image


## Image\Adapter\Gd

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Adapter/Gd.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- [`Phalcon\Image\Adapter\AbstractAdapter`](#imageadapterabstractadapter)
    - **`Phalcon\Image\Adapter\Gd`**

</div>

__Uses__ `Phalcon\Image\Enum` · `Phalcon\Image\Exception` · `Phalcon\Image\Exceptions\ExtensionNotLoaded` · `Phalcon\Image\Exceptions\ImageLoadFailed` · `Phalcon\Image\Exceptions\TextRenderingFailed` · `Phalcon\Image\Exceptions\UnsupportedImageType` · `Phalcon\Image\Exceptions\VersionMismatch`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageadaptergd-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$width</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-__destruct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__destruct</span>()</code>
<span class="desc">Destructor</span>
</a>
<a class="api-item" href="#imageadaptergd-getversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
</a>
<a class="api-item" href="#imageadaptergd-processbackground">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processBackground</span>(<span class="prm"><span class="st">int</span> <span class="sv">$red</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$green</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$blue</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processblur">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processBlur</span>( <span class="st">int</span> <span class="sv">$radius</span> )</code>
</a>
<a class="api-item" href="#imageadaptergd-processcreate">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">processCreate</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processcrop">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processCrop</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processflip">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processFlip</span>( <span class="st">int</span> <span class="sv">$direction</span> )</code>
</a>
<a class="api-item" href="#imageadaptergd-processmask">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">processMask</span>( <span class="st">AdapterInterface</span> <span class="sv">$mask</span> )</code>
</a>
<a class="api-item" href="#imageadaptergd-processpixelate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processPixelate</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
</a>
<a class="api-item" href="#imageadaptergd-processreflection">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processReflection</span>(<span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$fadeIn</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processrender">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">processRender</span>(<span class="prm"><span class="st">string</span> <span class="sv">$extension</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processresize">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processResize</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processrotate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processRotate</span>( <span class="st">int</span> <span class="sv">$degrees</span> )</code>
</a>
<a class="api-item" href="#imageadaptergd-processsave">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">processSave</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processsharpen">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processSharpen</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
</a>
<a class="api-item" href="#imageadaptergd-processtext">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processText</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetX</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetY</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$red</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$green</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$blue</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$size</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fontFile</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#imageadaptergd-processwatermark">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processWatermark</span>(<span class="prm"><span class="st">AdapterInterface</span> <span class="sv">$watermark</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #imageadaptergd-__construct }

```php
public function __construct(
    string $file,
    int $width = null,
    int $height = null
);
```

#### `__destruct()` { #imageadaptergd-__destruct }

```php
public function __destruct();
```

Destructor

#### `getVersion()` { #imageadaptergd-getversion }

```php
public function getVersion(): string;
```

<div class="api-group">Protected · 15</div>

#### `processBackground()` { #imageadaptergd-processbackground }

```php
protected function processBackground(
    int $red,
    int $green,
    int $blue,
    int $opacity
): void;
```

#### `processBlur()` { #imageadaptergd-processblur }

```php
protected function processBlur( int $radius ): void;
```

#### `processCreate()` { #imageadaptergd-processcreate }

```php
protected function processCreate(
    int $width,
    int $height
);
```

#### `processCrop()` { #imageadaptergd-processcrop }

```php
protected function processCrop(
    int $width,
    int $height,
    int $offsetX,
    int $offsetY
): void;
```

#### `processFlip()` { #imageadaptergd-processflip }

```php
protected function processFlip( int $direction ): void;
```

#### `processMask()` { #imageadaptergd-processmask }

```php
protected function processMask( AdapterInterface $mask );
```

#### `processPixelate()` { #imageadaptergd-processpixelate }

```php
protected function processPixelate( int $amount ): void;
```

#### `processReflection()` { #imageadaptergd-processreflection }

```php
protected function processReflection(
    int $height,
    int $opacity,
    bool $fadeIn
): void;
```

#### `processRender()` { #imageadaptergd-processrender }

```php
protected function processRender(
    string $extension,
    int $quality
);
```

#### `processResize()` { #imageadaptergd-processresize }

```php
protected function processResize(
    int $width,
    int $height
): void;
```

#### `processRotate()` { #imageadaptergd-processrotate }

```php
protected function processRotate( int $degrees ): void;
```

#### `processSave()` { #imageadaptergd-processsave }

```php
protected function processSave(
    string $file,
    int $quality
): bool;
```

#### `processSharpen()` { #imageadaptergd-processsharpen }

```php
protected function processSharpen( int $amount ): void;
```

#### `processText()` { #imageadaptergd-processtext }

```php
protected function processText(
    string $text,
    mixed $offsetX,
    mixed $offsetY,
    int $opacity,
    int $red,
    int $green,
    int $blue,
    int $size,
    string $fontFile = null
): void;
```

#### `processWatermark()` { #imageadaptergd-processwatermark }

```php
protected function processWatermark(
    AdapterInterface $watermark,
    int $offsetX,
    int $offsetY,
    int $opacity
): void;
```


## Image\Adapter\Imagick

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Adapter/Imagick.zep){ .src-btn }

Phalcon\Image\Adapter\Imagick

Image manipulation support. Resize, rotate, crop etc.

```php
$image = new \Phalcon\Image\Adapter\Imagick("upload/test.jpg");

$image->resize(200, 200)->rotate(90)->crop(100, 100);

if ($image->save()) {
    echo "success";
}
```

<div class="api-tree" markdown>

- [`Phalcon\Image\Adapter\AbstractAdapter`](#imageadapterabstractadapter)
    - **`Phalcon\Image\Adapter\Imagick`**

</div>

__Uses__ `Imagick` · `ImagickDraw` · `ImagickDrawException` · `ImagickException` · `ImagickPixel` · `ImagickPixelException` · `Phalcon\Image\Enum` · `Phalcon\Image\Exception` · `Phalcon\Image\Exceptions\CompositeFailed` · `Phalcon\Image\Exceptions\ExtensionNotLoaded` · `Phalcon\Image\Exceptions\ImageLoadFailed` · `Phalcon\Image\Exceptions\ResizeFailed` · `Phalcon\Image\Exceptions\ResourceTypeError`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageadapterimagick-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$width</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#imageadapterimagick-__destruct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__destruct</span>()</code>
<span class="desc">Destroys the loaded image to free up resources.</span>
</a>
<a class="api-item" href="#imageadapterimagick-liquidrescale">
<code class="vis vis-public">public</code>
<code class="ret">AbstractAdapter</code>
<code class="sig"><span class="sf">liquidRescale</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$deltaX</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$rigidity</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">This method scales the images using liquid rescaling method. Only support</span>
</a>
<a class="api-item" href="#imageadapterimagick-setresourcelimit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setResourceLimit</span>(<span class="prm"><span class="st">int</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$limit</span></span>)</code>
<span class="desc">Sets the limit for a particular resource in megabytes</span>
</a>
<a class="api-item" href="#imageadapterimagick-processbackground">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processBackground</span>(<span class="prm"><span class="st">int</span> <span class="sv">$red</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$green</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$blue</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span></span>)</code>
<span class="desc">Execute a background.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processblur">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processBlur</span>( <span class="st">int</span> <span class="sv">$radius</span> )</code>
<span class="desc">Blur image</span>
</a>
<a class="api-item" href="#imageadapterimagick-processcrop">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processCrop</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span></span>)</code>
<span class="desc">Execute a crop.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processflip">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processFlip</span>( <span class="st">int</span> <span class="sv">$direction</span> )</code>
<span class="desc">Execute a flip.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processmask">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processMask</span>( <span class="st">AdapterInterface</span> <span class="sv">$image</span> )</code>
<span class="desc">Composite one image onto another</span>
</a>
<a class="api-item" href="#imageadapterimagick-processpixelate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processPixelate</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
<span class="desc">Pixelate image</span>
</a>
<a class="api-item" href="#imageadapterimagick-processreflection">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processReflection</span>(<span class="prm"><span class="st">int</span> <span class="sv">$height</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$fadeIn</span></span>)</code>
<span class="desc">Execute a reflection.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processrender">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processRender</span>(<span class="prm"><span class="st">string</span> <span class="sv">$extension</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span></span>)</code>
<span class="desc">Execute a render.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processresize">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processResize</span>(<span class="prm"><span class="st">int</span> <span class="sv">$width</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span></span>)</code>
<span class="desc">Execute a resize.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processrotate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processRotate</span>( <span class="st">int</span> <span class="sv">$degrees</span> )</code>
<span class="desc">Execute a rotation.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processsave">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processSave</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$quality</span></span>)</code>
<span class="desc">Execute a save.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processsharpen">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processSharpen</span>( <span class="st">int</span> <span class="sv">$amount</span> )</code>
<span class="desc">Execute a sharpen.</span>
</a>
<a class="api-item" href="#imageadapterimagick-processtext">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processText</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetX</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$offsetY</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$red</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$green</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$blue</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$size</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fontFile</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Execute a text</span>
</a>
<a class="api-item" href="#imageadapterimagick-processwatermark">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processWatermark</span>(<span class="prm"><span class="st">AdapterInterface</span> <span class="sv">$image</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetX</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offsetY</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$opacity</span></span>)</code>
<span class="desc">Add Watermark</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$version</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #imageadapterimagick-__construct }

```php
public function __construct(
    string $file,
    int $width = null,
    int $height = null
);
```

Constructor

#### `__destruct()` { #imageadapterimagick-__destruct }

```php
public function __destruct();
```

Destroys the loaded image to free up resources.

#### `liquidRescale()` { #imageadapterimagick-liquidrescale }

```php
public function liquidRescale(
    int $width,
    int $height,
    int $deltaX = 0,
    int $rigidity = 0
): AbstractAdapter;
```

This method scales the images using liquid rescaling method. Only support
Imagick

#### `setResourceLimit()` { #imageadapterimagick-setresourcelimit }

```php
public function setResourceLimit(
    int $type,
    int $limit
): void;
```

Sets the limit for a particular resource in megabytes

@link https://www.php.net/manual/en/imagick.constants.php#imagick.constants.resourcetypes

<div class="api-group">Protected · 14</div>

#### `processBackground()` { #imageadapterimagick-processbackground }

```php
protected function processBackground(
    int $red,
    int $green,
    int $blue,
    int $opacity
): void;
```

Execute a background.

#### `processBlur()` { #imageadapterimagick-processblur }

```php
protected function processBlur( int $radius ): void;
```

Blur image

#### `processCrop()` { #imageadapterimagick-processcrop }

```php
protected function processCrop(
    int $width,
    int $height,
    int $offsetX,
    int $offsetY
): void;
```

Execute a crop.

#### `processFlip()` { #imageadapterimagick-processflip }

```php
protected function processFlip( int $direction ): void;
```

Execute a flip.

#### `processMask()` { #imageadapterimagick-processmask }

```php
protected function processMask( AdapterInterface $image ): void;
```

Composite one image onto another

#### `processPixelate()` { #imageadapterimagick-processpixelate }

```php
protected function processPixelate( int $amount ): void;
```

Pixelate image

#### `processReflection()` { #imageadapterimagick-processreflection }

```php
protected function processReflection(
    int $height,
    int $opacity,
    bool $fadeIn
): void;
```

Execute a reflection.

#### `processRender()` { #imageadapterimagick-processrender }

```php
protected function processRender(
    string $extension,
    int $quality
): string;
```

Execute a render.

#### `processResize()` { #imageadapterimagick-processresize }

```php
protected function processResize(
    int $width,
    int $height
): void;
```

Execute a resize.

#### `processRotate()` { #imageadapterimagick-processrotate }

```php
protected function processRotate( int $degrees ): void;
```

Execute a rotation.

#### `processSave()` { #imageadapterimagick-processsave }

```php
protected function processSave(
    string $file,
    int $quality
): void;
```

Execute a save.

#### `processSharpen()` { #imageadapterimagick-processsharpen }

```php
protected function processSharpen( int $amount ): void;
```

Execute a sharpen.

#### `processText()` { #imageadapterimagick-processtext }

```php
protected function processText(
    string $text,
    mixed $offsetX,
    mixed $offsetY,
    int $opacity,
    int $red,
    int $green,
    int $blue,
    int $size,
    string $fontFile = null
): void;
```

Execute a text

#### `processWatermark()` { #imageadapterimagick-processwatermark }

```php
protected function processWatermark(
    AdapterInterface $image,
    int $offsetX,
    int $offsetY,
    int $opacity
): void;
```

Add Watermark


## Image\Enum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Enum.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Image\Enum`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">AUTO</span><span class="sm"> = 4</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HEIGHT</span><span class="sm"> = 3</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HORIZONTAL</span><span class="sm"> = 11</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">INVERSE</span><span class="sm"> = 5</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NONE</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PRECISE</span><span class="sm"> = 6</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">TENSILE</span><span class="sm"> = 7</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERTICAL</span><span class="sm"> = 12</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">WIDTH</span><span class="sm"> = 2</span></code>
</div>
</div>


## Image\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Image will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Image\Exception`**
        - [`Phalcon\Image\Exceptions\CompositeFailed`](#imageexceptionscompositefailed)
        - [`Phalcon\Image\Exceptions\ExtensionNotLoaded`](#imageexceptionsextensionnotloaded)
        - [`Phalcon\Image\Exceptions\ImageLoadFailed`](#imageexceptionsimageloadfailed)
        - [`Phalcon\Image\Exceptions\MissingDimensions`](#imageexceptionsmissingdimensions)
        - [`Phalcon\Image\Exceptions\MissingHeight`](#imageexceptionsmissingheight)
        - [`Phalcon\Image\Exceptions\MissingWidth`](#imageexceptionsmissingwidth)
        - [`Phalcon\Image\Exceptions\ResizeFailed`](#imageexceptionsresizefailed)
        - [`Phalcon\Image\Exceptions\ResourceTypeError`](#imageexceptionsresourcetypeerror)
        - [`Phalcon\Image\Exceptions\TextRenderingFailed`](#imageexceptionstextrenderingfailed)
        - [`Phalcon\Image\Exceptions\UnsupportedImageType`](#imageexceptionsunsupportedimagetype)
        - [`Phalcon\Image\Exceptions\VersionMismatch`](#imageexceptionsversionmismatch)

</div>


## Image\Exceptions\CompositeFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/CompositeFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\CompositeFailed`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionscompositefailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionscompositefailed-__construct }

```php
public function __construct();
```


## Image\Exceptions\ExtensionNotLoaded

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/ExtensionNotLoaded.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\ExtensionNotLoaded`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsextensionnotloaded-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$extension</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsextensionnotloaded-__construct }

```php
public function __construct( string $extension );
```


## Image\Exceptions\ImageLoadFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/ImageLoadFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\ImageLoadFailed`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsimageloadfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$file</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsimageloadfailed-__construct }

```php
public function __construct( string $file );
```


## Image\Exceptions\MissingDimensions

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/MissingDimensions.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\MissingDimensions`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsmissingdimensions-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsmissingdimensions-__construct }

```php
public function __construct();
```


## Image\Exceptions\MissingHeight

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/MissingHeight.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\MissingHeight`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsmissingheight-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsmissingheight-__construct }

```php
public function __construct();
```


## Image\Exceptions\MissingWidth

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/MissingWidth.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\MissingWidth`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsmissingwidth-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsmissingwidth-__construct }

```php
public function __construct();
```


## Image\Exceptions\ResizeFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/ResizeFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\ResizeFailed`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsresizefailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsresizefailed-__construct }

```php
public function __construct();
```


## Image\Exceptions\ResourceTypeError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/ResourceTypeError.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\ResourceTypeError`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsresourcetypeerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsresourcetypeerror-__construct }

```php
public function __construct();
```


## Image\Exceptions\TextRenderingFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/TextRenderingFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\TextRenderingFailed`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionstextrenderingfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionstextrenderingfailed-__construct }

```php
public function __construct();
```


## Image\Exceptions\UnsupportedImageType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/UnsupportedImageType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\UnsupportedImageType`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsunsupportedimagetype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$format</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsunsupportedimagetype-__construct }

```php
public function __construct( string $format = "" );
```


## Image\Exceptions\VersionMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/Exceptions/VersionMismatch.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Image\Exception`](#imageexception)
        - **`Phalcon\Image\Exceptions\VersionMismatch`**

</div>

__Uses__ `Phalcon\Image\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageexceptionsversionmismatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$version</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #imageexceptionsversionmismatch-__construct }

```php
public function __construct( string $version );
```


## Image\ImageFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Image/ImageFactory.zep){ .src-btn }

Factory to create adapters for image manipulation

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Image\ImageFactory`**

</div>

__Uses__ `Phalcon\Config\ConfigInterface` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Image\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#imageimagefactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#imageimagefactory-load">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#imageimagefactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$width</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$height</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Creates a new instance</span>
</a>
<a class="api-item" href="#imageimagefactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#imageimagefactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #imageimagefactory-__construct }

```php
public function __construct( array $services = [] );
```

Constructor

#### `load()` { #imageimagefactory-load }

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

#### `newInstance()` { #imageimagefactory-newinstance }

```php
public function newInstance(
    string $name,
    string $file,
    int $width = null,
    int $height = null
): AdapterInterface;
```

Creates a new instance

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #imageimagefactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #imageimagefactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters
