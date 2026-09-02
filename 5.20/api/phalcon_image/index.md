---
title: "Phalcon Image"
version: "5.20"
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

<ApiItem href="#imageadapterabstractadapter-background" visibility="public" name="background" returnType="AdapterInterface" params={[{"type":"string","name":"color","default":null},{"type":"int","name":"opacity","default":"100"}]}>
Set the background color of an image
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-blur" visibility="public" name="blur" returnType="AdapterInterface" params={[{"type":"int","name":"radius","default":null}]}>
Blur image
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-crop" visibility="public" name="crop" returnType="AdapterInterface" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null},{"type":"mixed","name":"offsetX","default":"null"},{"type":"mixed","name":"offsetY","default":"null"}]}>
Crop an image to the given size
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-flip" visibility="public" name="flip" returnType="AdapterInterface" params={[{"type":"int","name":"direction","default":null}]}>
Flip the image along the horizontal or vertical axis
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-getheight" visibility="public" name="getHeight" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-getimage" visibility="public" name="getImage" returnType="" params={[]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-getmime" visibility="public" name="getMime" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-getrealpath" visibility="public" name="getRealpath" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-getwidth" visibility="public" name="getWidth" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-mask" visibility="public" name="mask" returnType="AdapterInterface" params={[{"type":"AdapterInterface","name":"mask","default":null}]}>
Composite one image onto another
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-pixelate" visibility="public" name="pixelate" returnType="AdapterInterface" params={[{"type":"int","name":"amount","default":null}]}>
Pixelate image
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-reflection" visibility="public" name="reflection" returnType="AdapterInterface" params={[{"type":"int","name":"height","default":null},{"type":"int","name":"opacity","default":"100"},{"type":"bool","name":"fadeIn","default":"false"}]}>
Add a reflection to an image
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-render" visibility="public" name="render" returnType="string" params={[{"type":"string|null","name":"extension","default":"null"},{"type":"int","name":"quality","default":"100"}]}>
Render the image and return the binary string
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-resize" visibility="public" name="resize" returnType="AdapterInterface" params={[{"type":"int|null","name":"width","default":"null"},{"type":"int|null","name":"height","default":"null"},{"type":"int","name":"master","default":"Enum::AUTO"}]}>
Resize the image to the given size
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-rotate" visibility="public" name="rotate" returnType="AdapterInterface" params={[{"type":"int","name":"degrees","default":null}]}>
Rotate the image by a given amount
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-save" visibility="public" name="save" returnType="AdapterInterface" params={[{"type":"string|null","name":"file","default":"null"},{"type":"int","name":"quality","default":"-1"}]}>
Save the image
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-sharpen" visibility="public" name="sharpen" returnType="AdapterInterface" params={[{"type":"int","name":"amount","default":null}]}>
Sharpen the image by a given amount
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-text" visibility="public" name="text" returnType="AdapterInterface" params={[{"type":"string","name":"text","default":null},{"type":"mixed","name":"offsetX","default":"false"},{"type":"mixed","name":"offsetY","default":"false"},{"type":"int","name":"opacity","default":"100"},{"type":"string","name":"color","default":"\"000000\""},{"type":"int","name":"size","default":"12"},{"type":"string|null","name":"fontFile","default":"null"}]}>
Add a text to an image with a specified opacity
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-watermark" visibility="public" name="watermark" returnType="AdapterInterface" params={[{"type":"AdapterInterface","name":"watermark","default":null},{"type":"int","name":"offsetX","default":"0"},{"type":"int","name":"offsetY","default":"0"},{"type":"int","name":"opacity","default":"100"}]}>
Add a watermark to an image with the specified opacity
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-assertpixellimit" visibility="protected" name="assertPixelLimit" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
Rejects an image whose pixel count exceeds the configured limit before
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-checkhighlow" visibility="protected" name="checkHighLow" returnType="int" params={[{"type":"int","name":"value","default":null},{"type":"int","name":"min","default":"0"},{"type":"int","name":"max","default":"100"}]}>
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processbackground" visibility="protected" name="processBackground" returnType="void" params={[{"type":"int","name":"red","default":null},{"type":"int","name":"green","default":null},{"type":"int","name":"blue","default":null},{"type":"int","name":"opacity","default":null}]}>
Renders the supplied colour onto the image as the background. Channels
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processblur" visibility="protected" name="processBlur" returnType="void" params={[{"type":"int","name":"radius","default":null}]}>
Applies a blur. The radius is already clamped to 1-100.
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processcrop" visibility="protected" name="processCrop" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null},{"type":"int","name":"offsetX","default":null},{"type":"int","name":"offsetY","default":null}]}>
Crops the image. Width, height and both offsets are already normalized
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processflip" visibility="protected" name="processFlip" returnType="void" params={[{"type":"int","name":"direction","default":null}]}>
Flips the image. The direction is already normalized to
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processmask" visibility="protected" name="processMask" returnType="" params={[{"type":"AdapterInterface","name":"mask","default":null}]}>
Composites the supplied image as a mask onto this one. The mask is read
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processpixelate" visibility="protected" name="processPixelate" returnType="void" params={[{"type":"int","name":"amount","default":null}]}>
Pixelates the image. The amount is already at least 2.
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processreflection" visibility="protected" name="processReflection" returnType="void" params={[{"type":"int","name":"height","default":null},{"type":"int","name":"opacity","default":null},{"type":"bool","name":"fadeIn","default":null}]}>
Adds a reflection. The height is clamped to the image height and the
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processrender" visibility="protected" name="processRender" returnType="" params={[{"type":"string","name":"extension","default":null},{"type":"int","name":"quality","default":null}]}>
Renders the image to a binary string. The extension is non-empty and the
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processresize" visibility="protected" name="processResize" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
Resizes the image. Width and height are already resolved to positive
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processrotate" visibility="protected" name="processRotate" returnType="void" params={[{"type":"int","name":"degrees","default":null}]}>
Rotates the image. The degrees value is already normalized to -180..180.
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processsave" visibility="protected" name="processSave" returnType="bool" params={[{"type":"string","name":"file","default":null},{"type":"int","name":"quality","default":null}]}>
Saves the image to the supplied file path.
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processsharpen" visibility="protected" name="processSharpen" returnType="void" params={[{"type":"int","name":"amount","default":null}]}>
Sharpens the image. The amount is already clamped to 1-100.
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processtext" visibility="protected" name="processText" returnType="void" params={[{"type":"string","name":"text","default":null},{"type":"mixed","name":"offsetX","default":null},{"type":"mixed","name":"offsetY","default":null},{"type":"int","name":"opacity","default":null},{"type":"int","name":"red","default":null},{"type":"int","name":"green","default":null},{"type":"int","name":"blue","default":null},{"type":"int","name":"size","default":null},{"type":"string|null","name":"fontFile","default":"null"}]}>
Renders text onto the image. The opacity is clamped to 0-100 and the
</ApiItem>
<ApiItem href="#imageadapterabstractadapter-processwatermark" visibility="protected" name="processWatermark" returnType="void" params={[{"type":"AdapterInterface","name":"watermark","default":null},{"type":"int","name":"offsetX","default":null},{"type":"int","name":"offsetY","default":null},{"type":"int","name":"opacity","default":null}]}>
Composites the supplied watermark onto this image. Offsets and opacity
</ApiItem>

### Constants

<ApiItem kind="constant" name="DEFAULT_MAX_PIXELS" type="int" default="50000000">
Default cap on the pixel count (width * height) of a loaded image, used
when the constructor is not given an explicit limit. Bounds the memory a
crafted image (decompression bomb / pixel flood) can force the backend to
allocate (CWE-409). Generous by default; override per instance.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="file" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="height" type="int" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="image" type="TImage|null" default="null">
The handle of the underlying backend. Every adapter assigns it in its
constructor and releases it in its destructor.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="maxPixels" type="int" default="0">
Maximum allowed pixel count (width * height) for a loaded image. Zero
disables the check.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="mime" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="realpath" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="int" default="">
Image type

Driver dependent
</ApiItem>
<ApiItem kind="property" visibility="protected" name="width" type="int" default="">
Image width
</ApiItem>

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

Renders the supplied colour onto the image as the background. Channels
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

<ApiItem href="#imageadapteradapterinterface-background" visibility="public" name="background" returnType="AdapterInterface" params={[{"type":"string","name":"color","default":null},{"type":"int","name":"opacity","default":"100"}]}>
Add a background to an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-blur" visibility="public" name="blur" returnType="AdapterInterface" params={[{"type":"int","name":"radius","default":null}]}>
Blur an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-crop" visibility="public" name="crop" returnType="AdapterInterface" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null},{"type":"int|null","name":"offsetX","default":"null"},{"type":"int|null","name":"offsetY","default":"null"}]}>
Crop an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-flip" visibility="public" name="flip" returnType="AdapterInterface" params={[{"type":"int","name":"direction","default":null}]}>
Flip an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-getheight" visibility="public" name="getHeight" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-getwidth" visibility="public" name="getWidth" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-mask" visibility="public" name="mask" returnType="AdapterInterface" params={[{"type":"AdapterInterface","name":"mask","default":null}]}>
Add a mask to an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-pixelate" visibility="public" name="pixelate" returnType="AdapterInterface" params={[{"type":"int","name":"amount","default":null}]}>
Pixelate an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-reflection" visibility="public" name="reflection" returnType="AdapterInterface" params={[{"type":"int","name":"height","default":null},{"type":"int","name":"opacity","default":"100"},{"type":"bool","name":"fadeIn","default":"false"}]}>
Reflect an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-render" visibility="public" name="render" returnType="string" params={[{"type":"string|null","name":"extension","default":"null"},{"type":"int","name":"quality","default":"100"}]}>
Render an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-resize" visibility="public" name="resize" returnType="AdapterInterface" params={[{"type":"int|null","name":"width","default":"null"},{"type":"int|null","name":"height","default":"null"},{"type":"int","name":"master","default":"Enum::AUTO"}]}>
Resize an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-rotate" visibility="public" name="rotate" returnType="AdapterInterface" params={[{"type":"int","name":"degrees","default":null}]}>
Rotate an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-save" visibility="public" name="save" returnType="AdapterInterface" params={[{"type":"string|null","name":"file","default":"null"},{"type":"int","name":"quality","default":"100"}]}>
Save an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-sharpen" visibility="public" name="sharpen" returnType="AdapterInterface" params={[{"type":"int","name":"amount","default":null}]}>
Sharpen an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-text" visibility="public" name="text" returnType="AdapterInterface" params={[{"type":"string","name":"text","default":null},{"type":"int","name":"offsetX","default":"0"},{"type":"int","name":"offsetY","default":"0"},{"type":"int","name":"opacity","default":"100"},{"type":"string","name":"color","default":"\"000000\""},{"type":"int","name":"size","default":"12"},{"type":"string|null","name":"fontFile","default":"null"}]}>
Adds text on an image
</ApiItem>
<ApiItem href="#imageadapteradapterinterface-watermark" visibility="public" name="watermark" returnType="AdapterInterface" params={[{"type":"AdapterInterface","name":"watermark","default":null},{"type":"int","name":"offsetX","default":"0"},{"type":"int","name":"offsetY","default":"0"},{"type":"int","name":"opacity","default":"100"}]}>
Add a watermark on an image
</ApiItem>

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

<ApiItem href="#imageadaptergd-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"file","default":null},{"type":"int|null","name":"width","default":"null"},{"type":"int|null","name":"height","default":"null"},{"type":"int","name":"maxPixels","default":"0"}]}>
Loads an image from a file, or creates a blank canvas.
</ApiItem>
<ApiItem href="#imageadaptergd-__destruct" visibility="public" name="__destruct" returnType="" params={[]}>
Destructor
</ApiItem>
<ApiItem href="#imageadaptergd-create" visibility="public" name="create" returnType="AbstractAdapter" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
Creates a blank true-color canvas of the given dimensions, without the
</ApiItem>
<ApiItem href="#imageadaptergd-getversion" visibility="public" name="getVersion" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processbackground" visibility="protected" name="processBackground" returnType="void" params={[{"type":"int","name":"red","default":null},{"type":"int","name":"green","default":null},{"type":"int","name":"blue","default":null},{"type":"int","name":"opacity","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processblur" visibility="protected" name="processBlur" returnType="void" params={[{"type":"int","name":"radius","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processcreate" visibility="protected" name="processCreate" returnType="" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processcrop" visibility="protected" name="processCrop" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null},{"type":"int","name":"offsetX","default":null},{"type":"int","name":"offsetY","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processflip" visibility="protected" name="processFlip" returnType="void" params={[{"type":"int","name":"direction","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processmask" visibility="protected" name="processMask" returnType="" params={[{"type":"AdapterInterface","name":"mask","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processpixelate" visibility="protected" name="processPixelate" returnType="void" params={[{"type":"int","name":"amount","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processreflection" visibility="protected" name="processReflection" returnType="void" params={[{"type":"int","name":"height","default":null},{"type":"int","name":"opacity","default":null},{"type":"bool","name":"fadeIn","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processrender" visibility="protected" name="processRender" returnType="false|string" params={[{"type":"string","name":"extension","default":null},{"type":"int","name":"quality","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processresize" visibility="protected" name="processResize" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processrotate" visibility="protected" name="processRotate" returnType="void" params={[{"type":"int","name":"degrees","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processsave" visibility="protected" name="processSave" returnType="bool" params={[{"type":"string","name":"file","default":null},{"type":"int","name":"quality","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processsharpen" visibility="protected" name="processSharpen" returnType="void" params={[{"type":"int","name":"amount","default":null}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processtext" visibility="protected" name="processText" returnType="void" params={[{"type":"string","name":"text","default":null},{"type":"mixed","name":"offsetX","default":null},{"type":"mixed","name":"offsetY","default":null},{"type":"int","name":"opacity","default":null},{"type":"int","name":"red","default":null},{"type":"int","name":"green","default":null},{"type":"int","name":"blue","default":null},{"type":"int","name":"size","default":null},{"type":"string|null","name":"fontFile","default":"null"}]}>
</ApiItem>
<ApiItem href="#imageadaptergd-processwatermark" visibility="protected" name="processWatermark" returnType="void" params={[{"type":"AdapterInterface","name":"watermark","default":null},{"type":"int","name":"offsetX","default":null},{"type":"int","name":"offsetY","default":null},{"type":"int","name":"opacity","default":null}]}>
</ApiItem>

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

<ApiItem href="#imageadapterimagick-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"file","default":null},{"type":"int|null","name":"width","default":"null"},{"type":"int|null","name":"height","default":"null"},{"type":"int","name":"maxPixels","default":"0"}]}>
Loads an image from a file, or creates a blank canvas.
</ApiItem>
<ApiItem href="#imageadapterimagick-__destruct" visibility="public" name="__destruct" returnType="" params={[]}>
Destroys the loaded image to free up resources.
</ApiItem>
<ApiItem href="#imageadapterimagick-create" visibility="public" name="create" returnType="AbstractAdapter" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
Creates a blank transparent canvas of the given dimensions, without the
</ApiItem>
<ApiItem href="#imageadapterimagick-liquidrescale" visibility="public" name="liquidRescale" returnType="AbstractAdapter" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null},{"type":"int","name":"deltaX","default":"0"},{"type":"int","name":"rigidity","default":"0"}]}>
This method scales the images using liquid rescaling method. Only support
</ApiItem>
<ApiItem href="#imageadapterimagick-setresourcelimit" visibility="public" name="setResourceLimit" returnType="void" params={[{"type":"int","name":"type","default":null},{"type":"int","name":"limit","default":null}]}>
Sets the limit for a particular resource in megabytes
</ApiItem>
<ApiItem href="#imageadapterimagick-processbackground" visibility="protected" name="processBackground" returnType="void" params={[{"type":"int","name":"red","default":null},{"type":"int","name":"green","default":null},{"type":"int","name":"blue","default":null},{"type":"int","name":"opacity","default":null}]}>
Execute a background.
</ApiItem>
<ApiItem href="#imageadapterimagick-processblur" visibility="protected" name="processBlur" returnType="void" params={[{"type":"int","name":"radius","default":null}]}>
Blur image
</ApiItem>
<ApiItem href="#imageadapterimagick-processcrop" visibility="protected" name="processCrop" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null},{"type":"int","name":"offsetX","default":null},{"type":"int","name":"offsetY","default":null}]}>
Execute a crop.
</ApiItem>
<ApiItem href="#imageadapterimagick-processflip" visibility="protected" name="processFlip" returnType="void" params={[{"type":"int","name":"direction","default":null}]}>
Execute a flip.
</ApiItem>
<ApiItem href="#imageadapterimagick-processmask" visibility="protected" name="processMask" returnType="void" params={[{"type":"AdapterInterface","name":"mask","default":null}]}>
Composite one image onto another
</ApiItem>
<ApiItem href="#imageadapterimagick-processpixelate" visibility="protected" name="processPixelate" returnType="void" params={[{"type":"int","name":"amount","default":null}]}>
Pixelate image
</ApiItem>
<ApiItem href="#imageadapterimagick-processreflection" visibility="protected" name="processReflection" returnType="void" params={[{"type":"int","name":"height","default":null},{"type":"int","name":"opacity","default":null},{"type":"bool","name":"fadeIn","default":null}]}>
Execute a reflection.
</ApiItem>
<ApiItem href="#imageadapterimagick-processrender" visibility="protected" name="processRender" returnType="string" params={[{"type":"string","name":"extension","default":null},{"type":"int","name":"quality","default":null}]}>
Execute a render.
</ApiItem>
<ApiItem href="#imageadapterimagick-processresize" visibility="protected" name="processResize" returnType="void" params={[{"type":"int","name":"width","default":null},{"type":"int","name":"height","default":null}]}>
Execute a resize.
</ApiItem>
<ApiItem href="#imageadapterimagick-processrotate" visibility="protected" name="processRotate" returnType="void" params={[{"type":"int","name":"degrees","default":null}]}>
Execute a rotation.
</ApiItem>
<ApiItem href="#imageadapterimagick-processsave" visibility="protected" name="processSave" returnType="bool" params={[{"type":"string","name":"file","default":null},{"type":"int","name":"quality","default":null}]}>
Execute a save.
</ApiItem>
<ApiItem href="#imageadapterimagick-processsharpen" visibility="protected" name="processSharpen" returnType="void" params={[{"type":"int","name":"amount","default":null}]}>
Execute a sharpen.
</ApiItem>
<ApiItem href="#imageadapterimagick-processtext" visibility="protected" name="processText" returnType="void" params={[{"type":"string","name":"text","default":null},{"type":"mixed","name":"offsetX","default":null},{"type":"mixed","name":"offsetY","default":null},{"type":"int","name":"opacity","default":null},{"type":"int","name":"red","default":null},{"type":"int","name":"green","default":null},{"type":"int","name":"blue","default":null},{"type":"int","name":"size","default":null},{"type":"string|null","name":"fontFile","default":"null"}]}>
Execute a text
</ApiItem>
<ApiItem href="#imageadapterimagick-processwatermark" visibility="protected" name="processWatermark" returnType="void" params={[{"type":"AdapterInterface","name":"watermark","default":null},{"type":"int","name":"offsetX","default":null},{"type":"int","name":"offsetY","default":null},{"type":"int","name":"opacity","default":null}]}>
Add Watermark
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="version" type="int" default="0">
</ApiItem>

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

<ApiItem kind="constant" name="AUTO" type="int" default="4">
</ApiItem>
<ApiItem kind="constant" name="HEIGHT" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="HORIZONTAL" type="int" default="11">
</ApiItem>
<ApiItem kind="constant" name="INVERSE" type="int" default="5">
</ApiItem>
<ApiItem kind="constant" name="NONE" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="PRECISE" type="int" default="6">
</ApiItem>
<ApiItem kind="constant" name="TENSILE" type="int" default="7">
</ApiItem>
<ApiItem kind="constant" name="VERTICAL" type="int" default="12">
</ApiItem>
<ApiItem kind="constant" name="WIDTH" type="int" default="2">
</ApiItem>

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

<ApiItem href="#imageexceptionscompositefailed-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsextensionnotloaded-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"extension","default":null}]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsimageloadfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"file","default":null}]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsimagetoolarge-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"pixels","default":null},{"type":"int","name":"maxPixels","default":null}]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsinvalidcolor-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"color","default":null}]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsmissingdimensions-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsmissingheight-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsmissingwidth-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsresizefailed-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsresourcetypeerror-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionstextrenderingfailed-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsunsupportedimagetype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"format","default":"\"\""}]}>
</ApiItem>

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

<ApiItem href="#imageexceptionsversionmismatch-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"version","default":null}]}>
</ApiItem>

### Methods

<h4 id="imageexceptionsversionmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $version );
```

## Image\ImageFactory

Class

Factory to create adapters for image manipulation

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.20/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Image\ImageFactory`**

`Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Image\ImageTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Image\Adapter\AdapterInterface` · `Phalcon\Image\Adapter\Gd` · `Phalcon\Image\Adapter\Imagick` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `Throwable`

### Method Summary

<ApiItem href="#imageimagefactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"services","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#imageimagefactory-load" visibility="public" name="load" returnType="AdapterInterface" params={[{"type":"mixed","name":"config","default":null}]}>
Factory to create an instance from a Config object
</ApiItem>
<ApiItem href="#imageimagefactory-newinstance" visibility="public" name="newInstance" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"file","default":null},{"type":"int|null","name":"width","default":"null"},{"type":"int|null","name":"height","default":"null"}]}>
Creates a new instance
</ApiItem>
<ApiItem href="#imageimagefactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#imageimagefactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

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

Source: https://docs.phalcon.io/5.20/api/phalcon_image/index.mdx
