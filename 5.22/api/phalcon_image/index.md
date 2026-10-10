---
title: "Phalcon Image"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Image

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Image\Adapter\AbstractAdapter

Abstract

All image adapters must use this class

@template TImage of object

- **`Phalcon\Image\Adapter\AbstractAdapter`** - implements [`Phalcon\Image\Adapter\AdapterInterface`](#imageadapteradapterinterface)
  - [`Phalcon\Image\Adapter\Gd`](#imageadaptergd)
  - [`Phalcon\Image\Adapter\Imagick`](#imageadapterimagick)

`Phalcon\Contracts\Image\ImageTypes` · `Phalcon\Image\Enum` · `Phalcon\Image\Exception` · `Phalcon\Image\Exceptions\ImageTooLarge` · `Phalcon\Image\Exceptions\InvalidColor` · `Phalcon\Image\Exceptions\MissingDimensions` · `Phalcon\Image\Exceptions\MissingHeight` · `Phalcon\Image\Exceptions\MissingWidth`

### Method Summary

- `public background(string $color, int $opacity = 100): AdapterInterface` — Set the background color of an image

- `public blur(int $radius): AdapterInterface` — Blur image

- `public crop(int $width, int $height, mixed $offsetX = null, mixed $offsetY = null): AdapterInterface` — Crop an image to the given size

- `public flip(int $direction): AdapterInterface` — Flip the image along the horizontal or vertical axis

- `public getHeight(): int`

- `public getImage()`

- `public getMime(): string`

- `public getRealpath(): string`

- `public getType(): int`

- `public getWidth(): int`

- `public mask(AdapterInterface $mask): AdapterInterface` — Composite one image onto another

- `public pixelate(int $amount): AdapterInterface` — Pixelate image

- `public reflection(int $height, int $opacity = 100, bool $fadeIn = false): AdapterInterface` — Add a reflection to an image

- `public render(string|null $extension = null, int $quality = 100): string` — Render the image and return the binary string

- `public resize(int|null $width = null, int|null $height = null, int $master = Enum::AUTO): AdapterInterface` — Resize the image to the given size

- `public rotate(int $degrees): AdapterInterface` — Rotate the image by a given amount

- `public save(string|null $file = null, int $quality = -1): AdapterInterface` — Save the image

- `public sharpen(int $amount): AdapterInterface` — Sharpen the image by a given amount

- `public text(string $text, mixed $offsetX = false, mixed $offsetY = false, int $opacity = 100, string $color = "000000", int $size = 12, string|null $fontFile = null): AdapterInterface` — Add a text to an image with a specified opacity

- `public watermark(AdapterInterface $watermark, int $offsetX = 0, int $offsetY = 0, int $opacity = 100): AdapterInterface` — Add a watermark to an image with the specified opacity

- `protected assertPixelLimit(int $width, int $height): void` — Rejects an image whose pixel count exceeds the configured limit before

- `protected checkHighLow(int $value, int $min = 0, int $max = 100): int`

- `protected processBackground(int $red, int $green, int $blue, int $opacity): void` — Renders the supplied color onto the image as the background. Channels

- `protected processBlur(int $radius): void` — Applies a blur. The radius is already clamped to 1-100.

- `protected processCrop(int $width, int $height, int $offsetX, int $offsetY): void` — Crops the image. Width, height and both offsets are already normalized

- `protected processFlip(int $direction): void` — Flips the image. The direction is already normalized to

- `protected processMask(AdapterInterface $mask)` — Composites the supplied image as a mask onto this one. The mask is read

- `protected processPixelate(int $amount): void` — Pixelates the image. The amount is already at least 2.

- `protected processReflection(int $height, int $opacity, bool $fadeIn): void` — Adds a reflection. The height is clamped to the image height and the

- `protected processRender(string $extension, int $quality)` — Renders the image to a binary string. The extension is non-empty and the

- `protected processResize(int $width, int $height): void` — Resizes the image. Width and height are already resolved to positive

- `protected processRotate(int $degrees): void` — Rotates the image. The degrees value is already normalized to -180..180.

- `protected processSave(string $file, int $quality): bool` — Saves the image to the supplied file path.

- `protected processSharpen(int $amount): void` — Sharpens the image. The amount is already clamped to 1-100.

- `protected processText(string $text, mixed $offsetX, mixed $offsetY, int $opacity, int $red, int $green, int $blue, int $size, string|null $fontFile = null): void` — Renders text onto the image. The opacity is clamped to 0-100 and the

- `protected processWatermark(AdapterInterface $watermark, int $offsetX, int $offsetY, int $opacity): void` — Composites the supplied watermark onto this image. Offsets and opacity

### Constants

- `const int DEFAULT_MAX_PIXELS = 50000000` — Default cap on the pixel count (width \* height) of a loaded image, used
  when the constructor is not given an explicit limit. Bounds the memory a
  crafted image (decompression bomb / pixel flood) can force the backend to
  allocate (CWE-409). Generous by default; override per instance.

### Properties

- `protected string $file`

- `protected int $height`

- `protected TImage|null $image = null` — The handle of the underlying backend. Every adapter assigns it in its
  constructor and releases it in its destructor.

- `protected int $maxPixels = 0` — Maximum allowed pixel count (width \* height) for a loaded image. Zero
  disables the check.

- `protected string $mime`

- `protected string $realpath`

- `protected int $type` — Image type

  Driver dependent

- `protected int $width` — Image width

### Methods

<h4 id="imageadapterabstractadapter-background"><code>background()</code></h4>

```php
public function background(
    string $color,
    int $opacity = 100
): AdapterInterface;
```

Set the background color of an image

<h4 id="imageadapterabstractadapter-blur"><code>blur()</code></h4>

```php
public function blur( int $radius ): AdapterInterface;
```

Blur image

<h4 id="imageadapterabstractadapter-crop"><code>crop()</code></h4>

```php
public function crop(
    int $width,
    int $height,
    mixed $offsetX = null,
    mixed $offsetY = null
): AdapterInterface;
```

Crop an image to the given size

<h4 id="imageadapterabstractadapter-flip"><code>flip()</code></h4>

```php
public function flip( int $direction ): AdapterInterface;
```

Flip the image along the horizontal or vertical axis

<h4 id="imageadapterabstractadapter-getheight"><code>getHeight()</code></h4>

```php
public function getHeight(): int;
```

<h4 id="imageadapterabstractadapter-getimage"><code>getImage()</code></h4>

```php
public function getImage();
```

<h4 id="imageadapterabstractadapter-getmime"><code>getMime()</code></h4>

```php
public function getMime(): string;
```

<h4 id="imageadapterabstractadapter-getrealpath"><code>getRealpath()</code></h4>

```php
public function getRealpath(): string;
```

<h4 id="imageadapterabstractadapter-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="imageadapterabstractadapter-getwidth"><code>getWidth()</code></h4>

```php
public function getWidth(): int;
```

<h4 id="imageadapterabstractadapter-mask"><code>mask()</code></h4>

```php
public function mask( AdapterInterface $mask ): AdapterInterface;
```

Composite one image onto another

The mask is read through its public render() output rather than its
internal handle, so a mask created with a different backend composites
correctly. The cost is one encode/decode round trip per call, which is
worth knowing inside loops.

<h4 id="imageadapterabstractadapter-pixelate"><code>pixelate()</code></h4>

```php
public function pixelate( int $amount ): AdapterInterface;
```

Pixelate image

<h4 id="imageadapterabstractadapter-reflection"><code>reflection()</code></h4>

```php
public function reflection(
    int $height,
    int $opacity = 100,
    bool $fadeIn = false
): AdapterInterface;
```

Add a reflection to an image

<h4 id="imageadapterabstractadapter-render"><code>render()</code></h4>

```php
public function render(
    string|null $extension = null,
    int $quality = 100
): string;
```

Render the image and return the binary string

<h4 id="imageadapterabstractadapter-resize"><code>resize()</code></h4>

```php
public function resize(
    int|null $width = null,
    int|null $height = null,
    int $master = Enum::AUTO
): AdapterInterface;
```

Resize the image to the given size

<h4 id="imageadapterabstractadapter-rotate"><code>rotate()</code></h4>

```php
public function rotate( int $degrees ): AdapterInterface;
```

Rotate the image by a given amount

<h4 id="imageadapterabstractadapter-save"><code>save()</code></h4>

```php
public function save(
    string|null $file = null,
    int $quality = -1
): AdapterInterface;
```

Save the image

<h4 id="imageadapterabstractadapter-sharpen"><code>sharpen()</code></h4>

```php
public function sharpen( int $amount ): AdapterInterface;
```

Sharpen the image by a given amount

<h4 id="imageadapterabstractadapter-text"><code>text()</code></h4>

```php
public function text(
    string $text,
    mixed $offsetX = false,
    mixed $offsetY = false,
    int $opacity = 100,
    string $color = "000000",
    int $size = 12,
    string|null $fontFile = null
): AdapterInterface;
```

Add a text to an image with a specified opacity

The offsets accept `false` to centre the text on that axis, so they are
wider than the `int` the interface documents.

<h4 id="imageadapterabstractadapter-watermark"><code>watermark()</code></h4>

```php
public function watermark(
    AdapterInterface $watermark,
    int $offsetX = 0,
    int $offsetY = 0,
    int $opacity = 100
): AdapterInterface;
```

Add a watermark to an image with the specified opacity

The watermark is read through its public render() output rather than its
internal handle, so a watermark created with a different backend
composites correctly. The cost is one encode/decode round trip per call,
which is worth knowing inside loops.

<h4 id="imageadapterabstractadapter-assertpixellimit"><code>assertPixelLimit()</code></h4>

```php
protected function assertPixelLimit(
    int $width,
    int $height
): void;
```

Rejects an image whose pixel count exceeds the configured limit before
the backend allocates it, bounding decompression-bomb / pixel-flood
memory use (CWE-409). A zero limit disables the check.

<h4 id="imageadapterabstractadapter-checkhighlow"><code>checkHighLow()</code></h4>

```php
protected function checkHighLow(
    int $value,
    int $min = 0,
    int $max = 100
): int;
```

<h4 id="imageadapterabstractadapter-processbackground"><code>processBackground()</code></h4>

```php
abstract protected function processBackground(
    int $red,
    int $green,
    int $blue,
    int $opacity
): void;
```

Renders the supplied color onto the image as the background. Channels
are 0-255; the opacity is the validated 0-100 value.

<h4 id="imageadapterabstractadapter-processblur"><code>processBlur()</code></h4>

```php
abstract protected function processBlur( int $radius ): void;
```

Applies a blur. The radius is already clamped to 1-100.

<h4 id="imageadapterabstractadapter-processcrop"><code>processCrop()</code></h4>

```php
abstract protected function processCrop(
    int $width,
    int $height,
    int $offsetX,
    int $offsetY
): void;
```

Crops the image. Width, height and both offsets are already normalized
to fit within the current canvas.

<h4 id="imageadapterabstractadapter-processflip"><code>processFlip()</code></h4>

```php
abstract protected function processFlip( int $direction ): void;
```

Flips the image. The direction is already normalized to
Enum::HORIZONTAL or Enum::VERTICAL.

<h4 id="imageadapterabstractadapter-processmask"><code>processMask()</code></h4>

```php
abstract protected function processMask( AdapterInterface $mask );
```

Composites the supplied image as a mask onto this one. The mask is read
through its public render() output, so it may be any adapter backend.

<h4 id="imageadapterabstractadapter-processpixelate"><code>processPixelate()</code></h4>

```php
abstract protected function processPixelate( int $amount ): void;
```

Pixelates the image. The amount is already at least 2.

<h4 id="imageadapterabstractadapter-processreflection"><code>processReflection()</code></h4>

```php
abstract protected function processReflection(
    int $height,
    int $opacity,
    bool $fadeIn
): void;
```

Adds a reflection. The height is clamped to the image height and the
opacity to 0-100.

<h4 id="imageadapterabstractadapter-processrender"><code>processRender()</code></h4>

```php
abstract protected function processRender(
    string $extension,
    int $quality
);
```

Renders the image to a binary string. The extension is non-empty and the
quality is already clamped to 1-100. Returns the encoded bytes.

<h4 id="imageadapterabstractadapter-processresize"><code>processResize()</code></h4>

```php
abstract protected function processResize(
    int $width,
    int $height
): void;
```

Resizes the image. Width and height are already resolved to positive
integers per the requested resize mode.

<h4 id="imageadapterabstractadapter-processrotate"><code>processRotate()</code></h4>

```php
abstract protected function processRotate( int $degrees ): void;
```

Rotates the image. The degrees value is already normalized to -180..180.

<h4 id="imageadapterabstractadapter-processsave"><code>processSave()</code></h4>

```php
abstract protected function processSave(
    string $file,
    int $quality
): bool;
```

Saves the image to the supplied file path.

<h4 id="imageadapterabstractadapter-processsharpen"><code>processSharpen()</code></h4>

```php
abstract protected function processSharpen( int $amount ): void;
```

Sharpens the image. The amount is already clamped to 1-100.

<h4 id="imageadapterabstractadapter-processtext"><code>processText()</code></h4>

```php
abstract protected function processText(
    string $text,
    mixed $offsetX,
    mixed $offsetY,
    int $opacity,
    int $red,
    int $green,
    int $blue,
    int $size,
    string|null $fontFile = null
): void;
```

Renders text onto the image. The opacity is clamped to 0-100 and the
colour is supplied as separate 0-255 channels.

<h4 id="imageadapterabstractadapter-processwatermark"><code>processWatermark()</code></h4>

```php
abstract protected function processWatermark(
    AdapterInterface $watermark,
    int $offsetX,
    int $offsetY,
    int $opacity
): void;
```

Composites the supplied watermark onto this image. Offsets and opacity
are already clamped to the valid range; the watermark is read through
its public render() output, so it may be any adapter backend.


## Image\Adapter\AdapterInterface

Interface

Interface for Phalcon\Image\Adapter classes

- **`Phalcon\Image\Adapter\AdapterInterface`**

`Phalcon\Image\Enum`

### Method Summary

- `public background(string $color, int $opacity = 100): AdapterInterface` — Add a background to an image

- `public blur(int $radius): AdapterInterface` — Blur an image

- `public crop(int $width, int $height, int|null $offsetX = null, int|null $offsetY = null): AdapterInterface` — Crop an image

- `public flip(int $direction): AdapterInterface` — Flip an image

- `public getHeight(): int`

- `public getWidth(): int`

- `public mask(AdapterInterface $mask): AdapterInterface` — Add a mask to an image

- `public pixelate(int $amount): AdapterInterface` — Pixelate an image

- `public reflection(int $height, int $opacity = 100, bool $fadeIn = false): AdapterInterface` — Reflect an image

- `public render(string|null $extension = null, int $quality = 100): string` — Render an image

- `public resize(int|null $width = null, int|null $height = null, int $master = Enum::AUTO): AdapterInterface` — Resize an image

- `public rotate(int $degrees): AdapterInterface` — Rotate an image

- `public save(string|null $file = null, int $quality = 100): AdapterInterface` — Save an image

- `public sharpen(int $amount): AdapterInterface` — Sharpen an image

- `public text(string $text, int $offsetX = 0, int $offsetY = 0, int $opacity = 100, string $color = "000000", int $size = 12, string|null $fontFile = null): AdapterInterface` — Adds text on an image

- `public watermark(AdapterInterface $watermark, int $offsetX = 0, int $offsetY = 0, int $opacity = 100): AdapterInterface` — Add a watermark on an image

### Methods

<h4 id="imageadapteradapterinterface-background"><code>background()</code></h4>

```php
public function background(
    string $color,
    int $opacity = 100
): AdapterInterface;
```

Add a background to an image

<h4 id="imageadapteradapterinterface-blur"><code>blur()</code></h4>

```php
public function blur( int $radius ): AdapterInterface;
```

Blur an image

<h4 id="imageadapteradapterinterface-crop"><code>crop()</code></h4>

```php
public function crop(
    int $width,
    int $height,
    int|null $offsetX = null,
    int|null $offsetY = null
): AdapterInterface;
```

Crop an image

<h4 id="imageadapteradapterinterface-flip"><code>flip()</code></h4>

```php
public function flip( int $direction ): AdapterInterface;
```

Flip an image

<h4 id="imageadapteradapterinterface-getheight"><code>getHeight()</code></h4>

```php
public function getHeight(): int;
```

<h4 id="imageadapteradapterinterface-getwidth"><code>getWidth()</code></h4>

```php
public function getWidth(): int;
```

<h4 id="imageadapteradapterinterface-mask"><code>mask()</code></h4>

```php
public function mask( AdapterInterface $mask ): AdapterInterface;
```

Add a mask to an image

<h4 id="imageadapteradapterinterface-pixelate"><code>pixelate()</code></h4>

```php
public function pixelate( int $amount ): AdapterInterface;
```

Pixelate an image

<h4 id="imageadapteradapterinterface-reflection"><code>reflection()</code></h4>

```php
public function reflection(
    int $height,
    int $opacity = 100,
    bool $fadeIn = false
): AdapterInterface;
```

Reflect an image

<h4 id="imageadapteradapterinterface-render"><code>render()</code></h4>

```php
public function render(
    string|null $extension = null,
    int $quality = 100
): string;
```

Render an image

<h4 id="imageadapteradapterinterface-resize"><code>resize()</code></h4>

```php
public function resize(
    int|null $width = null,
    int|null $height = null,
    int $master = Enum::AUTO
): AdapterInterface;
```

Resize an image

<h4 id="imageadapteradapterinterface-rotate"><code>rotate()</code></h4>

```php
public function rotate( int $degrees ): AdapterInterface;
```

Rotate an image

<h4 id="imageadapteradapterinterface-save"><code>save()</code></h4>

```php
public function save(
    string|null $file = null,
    int $quality = 100
): AdapterInterface;
```

Save an image

<h4 id="imageadapteradapterinterface-sharpen"><code>sharpen()</code></h4>

```php
public function sharpen( int $amount ): AdapterInterface;
```

Sharpen an image

<h4 id="imageadapteradapterinterface-text"><code>text()</code></h4>

```php
public function text(
    string $text,
    int $offsetX = 0,
    int $offsetY = 0,
    int $opacity = 100,
    string $color = "000000",
    int $size = 12,
    string|null $fontFile = null
): AdapterInterface;
```

Adds text on an image

<h4 id="imageadapteradapterinterface-watermark"><code>watermark()</code></h4>

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

Class

Image manipulation backed by the GD extension.

Capabilities:

| Aspect              | Support                                     |
|---------------------|---------------------------------------------|
| Load formats        | GIF, JPEG, JPEG 2000, PNG, WEBP, WBMP, XBM  |
| Render/save formats | GIF, JPEG, PNG, WBMP, WEBP, XBM             |
| Backend-only API    | none                                        |

Unsupported render/save formats raise
Phalcon\Image\Exceptions\UnsupportedImageType. Visual semantics differ from
the Imagick adapter: blur() applies repeated 3x3 Gaussian convolutions
(the radius is the number of passes), while sharpen and reflection use GD's
own scales. Switching the factory backend can change the rendered output.

@extends AbstractAdapter&lt;GdImage>

- [`Phalcon\Image\Adapter\AbstractAdapter`](#imageadapterabstractadapter)
  - **`Phalcon\Image\Adapter\Gd`**

`GdImage` · `Phalcon\Contracts\Image\ImageTypes` · `Phalcon\Image\Enum` · `Phalcon\Image\Exception` · `Phalcon\Image\Exceptions\ExtensionNotLoaded` · `Phalcon\Image\Exceptions\ImageLoadFailed` · `Phalcon\Image\Exceptions\TextRenderingFailed` · `Phalcon\Image\Exceptions\UnsupportedImageType` · `Phalcon\Image\Exceptions\VersionMismatch` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

- `public __construct(string $file, int|null $width = null, int|null $height = null, int $maxPixels = 0)` — Loads an image from a file, or creates a blank canvas.

- `public __destruct()` — Destructor

- `public create(int $width, int $height): AbstractAdapter` — Creates a blank true-color canvas of the given dimensions, without the

- `public getVersion(): string`

- `protected processBackground(int $red, int $green, int $blue, int $opacity): void`

- `protected processBlur(int $radius): void`

- `protected processCreate(int $width, int $height)`

- `protected processCrop(int $width, int $height, int $offsetX, int $offsetY): void`

- `protected processFlip(int $direction): void`

- `protected processMask(AdapterInterface $mask)`

- `protected processPixelate(int $amount): void`

- `protected processReflection(int $height, int $opacity, bool $fadeIn): void`

- `protected processRender(string $extension, int $quality): false|string`

- `protected processResize(int $width, int $height): void`

- `protected processRotate(int $degrees): void`

- `protected processSave(string $file, int $quality): bool`

- `protected processSharpen(int $amount): void`

- `protected processText(string $text, mixed $offsetX, mixed $offsetY, int $opacity, int $red, int $green, int $blue, int $size, string|null $fontFile = null): void`

- `protected processWatermark(AdapterInterface $watermark, int $offsetX, int $offsetY, int $opacity): void`

### Methods

<h4 id="imageadaptergd-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $file,
    int|null $width = null,
    int|null $height = null,
    int $maxPixels = 0
);
```

Loads an image from a file, or creates a blank canvas.

When the file exists it is loaded. When the file does not exist and both
a width and a height are supplied, a blank true-color canvas is created
instead - its realpath, mime and type then describe a PNG canvas rather
than the named file. Prefer Gd::create() for the canvas case; this dual
mode is slated for removal in the next major version.

<h4 id="imageadaptergd-__destruct"><code>__destruct()</code></h4>

```php
public function __destruct();
```

Destructor

<h4 id="imageadaptergd-create"><code>create()</code></h4>

```php
public static function create(
    int $width,
    int $height
): AbstractAdapter;
```

Creates a blank true-color canvas of the given dimensions, without the
load-or-create ambiguity of the constructor.

<h4 id="imageadaptergd-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string;
```

<h4 id="imageadaptergd-processbackground"><code>processBackground()</code></h4>

```php
protected function processBackground(
    int $red,
    int $green,
    int $blue,
    int $opacity
): void;
```

<h4 id="imageadaptergd-processblur"><code>processBlur()</code></h4>

```php
protected function processBlur( int $radius ): void;
```

<h4 id="imageadaptergd-processcreate"><code>processCreate()</code></h4>

```php
protected function processCreate(
    int $width,
    int $height
);
```

<h4 id="imageadaptergd-processcrop"><code>processCrop()</code></h4>

```php
protected function processCrop(
    int $width,
    int $height,
    int $offsetX,
    int $offsetY
): void;
```

<h4 id="imageadaptergd-processflip"><code>processFlip()</code></h4>

```php
protected function processFlip( int $direction ): void;
```

<h4 id="imageadaptergd-processmask"><code>processMask()</code></h4>

```php
protected function processMask( AdapterInterface $mask );
```

<h4 id="imageadaptergd-processpixelate"><code>processPixelate()</code></h4>

```php
protected function processPixelate( int $amount ): void;
```

<h4 id="imageadaptergd-processreflection"><code>processReflection()</code></h4>

```php
protected function processReflection(
    int $height,
    int $opacity,
    bool $fadeIn
): void;
```

<h4 id="imageadaptergd-processrender"><code>processRender()</code></h4>

```php
protected function processRender(
    string $extension,
    int $quality
): false|string;
```

<h4 id="imageadaptergd-processresize"><code>processResize()</code></h4>

```php
protected function processResize(
    int $width,
    int $height
): void;
```

<h4 id="imageadaptergd-processrotate"><code>processRotate()</code></h4>

```php
protected function processRotate( int $degrees ): void;
```

<h4 id="imageadaptergd-processsave"><code>processSave()</code></h4>

```php
protected function processSave(
    string $file,
    int $quality
): bool;
```

<h4 id="imageadaptergd-processsharpen"><code>processSharpen()</code></h4>

```php
protected function processSharpen( int $amount ): void;
```

<h4 id="imageadaptergd-processtext"><code>processText()</code></h4>

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
    string|null $fontFile = null
): void;
```

<h4 id="imageadaptergd-processwatermark"><code>processWatermark()</code></h4>

```php
protected function processWatermark(
    AdapterInterface $watermark,
    int $offsetX,
    int $offsetY,
    int $opacity
): void;
```


## Image\Adapter\Imagick

Class

Phalcon\Image\Adapter\Imagick

Image manipulation support. Resize, rotate, crop etc.

```php
$image = new \Phalcon\Image\Adapter\Imagick("upload/test.jpg");

$image->resize(200, 200)->rotate(90)->crop(100, 100);

if ($image->save()) {
    echo "success";
}
```

Capabilities:

| Aspect              | Support                                        |
|---------------------|------------------------------------------------|
| Load formats        | Whatever the linked ImageMagick build supports |
| Render/save formats | Whatever the linked ImageMagick build supports |
| Backend-only API    | liquidRescale(), setResourceLimit()            |

Visual semantics differ from the Gd adapter: blur() maps the radius to a
blur sigma, while sharpen and reflection use ImageMagick's own scales.
Switching the factory backend can change the rendered output.

@extends AbstractAdapter&lt;ImagickNative>

- [`Phalcon\Image\Adapter\AbstractAdapter`](#imageadapterabstractadapter)
  - **`Phalcon\Image\Adapter\Imagick`**

`Imagick` · `ImagickDraw` · `ImagickDrawException` · `ImagickException` · `ImagickPixel` · `ImagickPixelException` · `Phalcon\Image\Enum` · `Phalcon\Image\Exception` · `Phalcon\Image\Exceptions\CompositeFailed` · `Phalcon\Image\Exceptions\ExtensionNotLoaded` · `Phalcon\Image\Exceptions\ImageLoadFailed` · `Phalcon\Image\Exceptions\ResizeFailed` · `Phalcon\Image\Exceptions\ResourceTypeError` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(string $file, int|null $width = null, int|null $height = null, int $maxPixels = 0)` — Loads an image from a file, or creates a blank canvas.

- `public __destruct()` — Destroys the loaded image to free up resources.

- `public create(int $width, int $height): AbstractAdapter` — Creates a blank transparent canvas of the given dimensions, without the

- `public liquidRescale(int $width, int $height, int $deltaX = 0, int $rigidity = 0): AbstractAdapter` — This method scales the images using liquid rescaling method. Only support

- `public setResourceLimit(int $type, int $limit): void` — Sets the limit for a particular resource in megabytes

- `protected processBackground(int $red, int $green, int $blue, int $opacity): void` — Execute a background.

- `protected processBlur(int $radius): void` — Blur image

- `protected processCrop(int $width, int $height, int $offsetX, int $offsetY): void` — Execute a crop.

- `protected processFlip(int $direction): void` — Execute a flip.

- `protected processMask(AdapterInterface $mask): void` — Composite one image onto another

- `protected processPixelate(int $amount): void` — Pixelate image

- `protected processReflection(int $height, int $opacity, bool $fadeIn): void` — Execute a reflection.

- `protected processRender(string $extension, int $quality): string` — Execute a render.

- `protected processResize(int $width, int $height): void` — Execute a resize.

- `protected processRotate(int $degrees): void` — Execute a rotation.

- `protected processSave(string $file, int $quality): bool` — Execute a save.

- `protected processSharpen(int $amount): void` — Execute a sharpen.

- `protected processText(string $text, mixed $offsetX, mixed $offsetY, int $opacity, int $red, int $green, int $blue, int $size, string|null $fontFile = null): void` — Execute a text

- `protected processWatermark(AdapterInterface $watermark, int $offsetX, int $offsetY, int $opacity): void` — Add Watermark

### Properties

- `protected int $version = 0`

### Methods

<h4 id="imageadapterimagick-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $file,
    int|null $width = null,
    int|null $height = null,
    int $maxPixels = 0
);
```

Loads an image from a file, or creates a blank canvas.

When the file exists it is loaded. When the file does not exist and both
a width and a height are supplied, a blank transparent canvas is created
instead - its realpath, mime and type then describe a PNG canvas rather
than the named file. Prefer Imagick::create() for the canvas case; this
dual mode is slated for removal in the next major version.

<h4 id="imageadapterimagick-__destruct"><code>__destruct()</code></h4>

```php
public function __destruct();
```

Destroys the loaded image to free up resources.

<h4 id="imageadapterimagick-create"><code>create()</code></h4>

```php
public static function create(
    int $width,
    int $height
): AbstractAdapter;
```

Creates a blank transparent canvas of the given dimensions, without the
load-or-create ambiguity of the constructor.

<h4 id="imageadapterimagick-liquidrescale"><code>liquidRescale()</code></h4>

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

<h4 id="imageadapterimagick-setresourcelimit"><code>setResourceLimit()</code></h4>

```php
public function setResourceLimit(
    int $type,
    int $limit
): void;
```

Sets the limit for a particular resource in megabytes

@link https://www.php.net/manual/en/imagick.constants.php#imagick.constants.resourcetypes

<h4 id="imageadapterimagick-processbackground"><code>processBackground()</code></h4>

```php
protected function processBackground(
    int $red,
    int $green,
    int $blue,
    int $opacity
): void;
```

Execute a background.

<h4 id="imageadapterimagick-processblur"><code>processBlur()</code></h4>

```php
protected function processBlur( int $radius ): void;
```

Blur image

<h4 id="imageadapterimagick-processcrop"><code>processCrop()</code></h4>

```php
protected function processCrop(
    int $width,
    int $height,
    int $offsetX,
    int $offsetY
): void;
```

Execute a crop.

<h4 id="imageadapterimagick-processflip"><code>processFlip()</code></h4>

```php
protected function processFlip( int $direction ): void;
```

Execute a flip.

<h4 id="imageadapterimagick-processmask"><code>processMask()</code></h4>

```php
protected function processMask( AdapterInterface $mask ): void;
```

Composite one image onto another

<h4 id="imageadapterimagick-processpixelate"><code>processPixelate()</code></h4>

```php
protected function processPixelate( int $amount ): void;
```

Pixelate image

<h4 id="imageadapterimagick-processreflection"><code>processReflection()</code></h4>

```php
protected function processReflection(
    int $height,
    int $opacity,
    bool $fadeIn
): void;
```

Execute a reflection.

<h4 id="imageadapterimagick-processrender"><code>processRender()</code></h4>

```php
protected function processRender(
    string $extension,
    int $quality
): string;
```

Execute a render.

<h4 id="imageadapterimagick-processresize"><code>processResize()</code></h4>

```php
protected function processResize(
    int $width,
    int $height
): void;
```

Execute a resize.

<h4 id="imageadapterimagick-processrotate"><code>processRotate()</code></h4>

```php
protected function processRotate( int $degrees ): void;
```

Execute a rotation.

<h4 id="imageadapterimagick-processsave"><code>processSave()</code></h4>

```php
protected function processSave(
    string $file,
    int $quality
): bool;
```

Execute a save.

<h4 id="imageadapterimagick-processsharpen"><code>processSharpen()</code></h4>

```php
protected function processSharpen( int $amount ): void;
```

Execute a sharpen.

<h4 id="imageadapterimagick-processtext"><code>processText()</code></h4>

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
    string|null $fontFile = null
): void;
```

Execute a text

<h4 id="imageadapterimagick-processwatermark"><code>processWatermark()</code></h4>

```php
protected function processWatermark(
    AdapterInterface $watermark,
    int $offsetX,
    int $offsetY,
    int $opacity
): void;
```

Add Watermark


## Image\Enum

Class

- **`Phalcon\Image\Enum`**

### Constants

- `const int AUTO = 4`

- `const int HEIGHT = 3`

- `const int HORIZONTAL = 11`

- `const int INVERSE = 5`

- `const int NONE = 1`

- `const int PRECISE = 6`

- `const int TENSILE = 7`

- `const int VERTICAL = 12`

- `const int WIDTH = 2`


## Image\Exception

Class

Exceptions thrown in Phalcon\Image will use this class

- `\Exception`
  - **`Phalcon\Image\Exception`**
    - [`Phalcon\Image\Exceptions\CompositeFailed`](#imageexceptionscompositefailed)
    - [`Phalcon\Image\Exceptions\ExtensionNotLoaded`](#imageexceptionsextensionnotloaded)
    - [`Phalcon\Image\Exceptions\ImageLoadFailed`](#imageexceptionsimageloadfailed)
    - [`Phalcon\Image\Exceptions\ImageTooLarge`](#imageexceptionsimagetoolarge)
    - [`Phalcon\Image\Exceptions\InvalidColor`](#imageexceptionsinvalidcolor)
    - [`Phalcon\Image\Exceptions\MissingDimensions`](#imageexceptionsmissingdimensions)
    - [`Phalcon\Image\Exceptions\MissingHeight`](#imageexceptionsmissingheight)
    - [`Phalcon\Image\Exceptions\MissingWidth`](#imageexceptionsmissingwidth)
    - [`Phalcon\Image\Exceptions\ResizeFailed`](#imageexceptionsresizefailed)
    - [`Phalcon\Image\Exceptions\ResourceTypeError`](#imageexceptionsresourcetypeerror)
    - [`Phalcon\Image\Exceptions\TextRenderingFailed`](#imageexceptionstextrenderingfailed)
    - [`Phalcon\Image\Exceptions\UnsupportedImageType`](#imageexceptionsunsupportedimagetype)
    - [`Phalcon\Image\Exceptions\VersionMismatch`](#imageexceptionsversionmismatch)


## Image\Exceptions\CompositeFailed

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\CompositeFailed`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionscompositefailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\ExtensionNotLoaded

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\ExtensionNotLoaded`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct(string $extension)`

### Methods

<h4 id="imageexceptionsextensionnotloaded-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $extension );
```


## Image\Exceptions\ImageLoadFailed

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\ImageLoadFailed`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct(string $file)`

### Methods

<h4 id="imageexceptionsimageloadfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $file );
```


## Image\Exceptions\ImageTooLarge

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\ImageTooLarge`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct(int $pixels, int $maxPixels)`

### Methods

<h4 id="imageexceptionsimagetoolarge-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    int $pixels,
    int $maxPixels
);
```


## Image\Exceptions\InvalidColor

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\InvalidColor`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct(string $color)`

### Methods

<h4 id="imageexceptionsinvalidcolor-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $color );
```


## Image\Exceptions\MissingDimensions

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\MissingDimensions`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionsmissingdimensions-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\MissingHeight

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\MissingHeight`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionsmissingheight-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\MissingWidth

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\MissingWidth`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionsmissingwidth-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\ResizeFailed

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\ResizeFailed`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionsresizefailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\ResourceTypeError

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\ResourceTypeError`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionsresourcetypeerror-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\TextRenderingFailed

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\TextRenderingFailed`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="imageexceptionstextrenderingfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Image\Exceptions\UnsupportedImageType

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\UnsupportedImageType`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct(string $format = "")`

### Methods

<h4 id="imageexceptionsunsupportedimagetype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $format = "" );
```


## Image\Exceptions\VersionMismatch

Class

- `\Exception`
  - [`Phalcon\Image\Exception`](#imageexception)
    - **`Phalcon\Image\Exceptions\VersionMismatch`**

`Phalcon\Image\Exception`

### Method Summary

- `public __construct(string $version)`

### Methods

<h4 id="imageexceptionsversionmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $version );
```


## Image\ImageFactory

Class

Factory to create adapters for image manipulation

- [`Phalcon\Factory\AbstractConfigFactory`](/5.22/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/5.22/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Image\ImageFactory`**

`Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Image\ImageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Image\Adapter\AdapterInterface` · `Phalcon\Image\Adapter\Gd` · `Phalcon\Image\Adapter\Imagick` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

- `public __construct(array $services = [])` — Constructor

- `public load(mixed $config): AdapterInterface` — Factory to create an instance from a Config object

- `public newInstance(string $name, string $file, int|null $width = null, int|null $height = null): AdapterInterface` — Creates a new instance

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="imageimagefactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

Constructor

<h4 id="imageimagefactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

<h4 id="imageimagefactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    string $file,
    int|null $width = null,
    int|null $height = null
): AdapterInterface;
```

Creates a new instance

<h4 id="imageimagefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="imageimagefactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

Source: https://docs.phalcon.io/5.22/api/phalcon_image/index.mdx
