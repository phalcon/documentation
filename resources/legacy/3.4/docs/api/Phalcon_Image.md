---
layout: default
title: 'Phalcon\Image'
---
# Class **Phalcon\Image**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Constants
*integer* **NONE**

*integer* **WIDTH**

*integer* **HEIGHT**

*integer* **AUTO**

*integer* **INVERSE**

*integer* **PRECISE**

*integer* **TENSILE**

*integer* **HORIZONTAL**

*integer* **VERTICAL**


<hr>

# Abstract class **Phalcon\Image\Adapter**

*implements* [Phalcon\Image\AdapterInterface](Phalcon_Image.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

All image adapters must use this class


## Methods
public  **getImage** ()

...


public  **getRealpath** ()

...


public  **getWidth** ()

Image width



public  **getHeight** ()

Image height



public  **getType** ()

Image type
Driver dependent



public  **getMime** ()

Image mime type



public  **resize** ([*mixed* $width], [*mixed* $height], [*mixed* $master])

Resize the image to the given size



public  **liquidRescale** (*mixed* $width, *mixed* $height, [*mixed* $deltaX], [*mixed* $rigidity])

This method scales the images using liquid rescaling method. Only support Imagick



public  **crop** (*mixed* $width, *mixed* $height, [*mixed* $offsetX], [*mixed* $offsetY])

Crop an image to the given size



public  **rotate** (*mixed* $degrees)

Rotate the image by a given amount



public  **flip** (*mixed* $direction)

Flip the image along the horizontal or vertical axis



public  **sharpen** (*mixed* $amount)

Sharpen the image by a given amount



public  **reflection** (*mixed* $height, [*mixed* $opacity], [*mixed* $fadeIn])

Add a reflection to an image



public  **watermark** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity])

Add a watermark to an image with the specified opacity



public  **text** (*mixed* $text, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity], [*mixed* $color], [*mixed* $size], [*mixed* $fontfile])

Add a text to an image with a specified opacity



public  **mask** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark)

Composite one image onto another



public  **background** (*mixed* $color, [*mixed* $opacity])

Set the background color of an image



public  **blur** (*mixed* $radius)

Blur image



public  **pixelate** (*mixed* $amount)

Pixelate image



public  **save** ([*mixed* $file], [*mixed* $quality])

Save the image



public  **render** ([*mixed* $ext], [*mixed* $quality])

Render the image and return the binary string




<hr>

# Class **Phalcon\Image\Adapter\Gd**

*extends* abstract class [Phalcon\Image\Adapter](Phalcon_Image.md)

*implements* [Phalcon\Image\AdapterInterface](Phalcon_Image.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image/adapter/gd.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
public static  **check** ()

...


public  **__construct** (*mixed* $file, [*mixed* $width], [*mixed* $height])

...


protected  **_resize** (*mixed* $width, *mixed* $height)

...


protected  **_crop** (*mixed* $width, *mixed* $height, *mixed* $offsetX, *mixed* $offsetY)

...


protected  **_rotate** (*mixed* $degrees)

...


protected  **_flip** (*mixed* $direction)

...


protected  **_sharpen** (*mixed* $amount)

...


protected  **_reflection** (*mixed* $height, *mixed* $opacity, *mixed* $fadeIn)

...


protected  **_watermark** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark, *mixed* $offsetX, *mixed* $offsetY, *mixed* $opacity)

...


protected  **_text** (*mixed* $text, *mixed* $offsetX, *mixed* $offsetY, *mixed* $opacity, *mixed* $r, *mixed* $g, *mixed* $b, *mixed* $size, *mixed* $fontfile)

...


protected  **_mask** ([Phalcon\Image\Adapter](Phalcon_Image.md) $mask)

...


protected  **_background** (*mixed* $r, *mixed* $g, *mixed* $b, *mixed* $opacity)

...


protected  **_blur** (*mixed* $radius)

...


protected  **_pixelate** (*mixed* $amount)

...


protected  **_save** (*mixed* $file, *mixed* $quality)

...


protected  **_render** (*mixed* $ext, *mixed* $quality)

...


protected  **_create** (*mixed* $width, *mixed* $height)

...


public  **__destruct** ()

...


public  **getImage** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

...


public  **getRealpath** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

...


public  **getWidth** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image width



public  **getHeight** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image height



public  **getType** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image type
Driver dependent



public  **getMime** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image mime type



public  **resize** ([*mixed* $width], [*mixed* $height], [*mixed* $master]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Resize the image to the given size



public  **liquidRescale** (*mixed* $width, *mixed* $height, [*mixed* $deltaX], [*mixed* $rigidity]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

This method scales the images using liquid rescaling method. Only support Imagick



public  **crop** (*mixed* $width, *mixed* $height, [*mixed* $offsetX], [*mixed* $offsetY]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Crop an image to the given size



public  **rotate** (*mixed* $degrees) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Rotate the image by a given amount



public  **flip** (*mixed* $direction) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Flip the image along the horizontal or vertical axis



public  **sharpen** (*mixed* $amount) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Sharpen the image by a given amount



public  **reflection** (*mixed* $height, [*mixed* $opacity], [*mixed* $fadeIn]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Add a reflection to an image



public  **watermark** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Add a watermark to an image with the specified opacity



public  **text** (*mixed* $text, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity], [*mixed* $color], [*mixed* $size], [*mixed* $fontfile]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Add a text to an image with a specified opacity



public  **mask** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Composite one image onto another



public  **background** (*mixed* $color, [*mixed* $opacity]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Set the background color of an image



public  **blur** (*mixed* $radius) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Blur image



public  **pixelate** (*mixed* $amount) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Pixelate image



public  **save** ([*mixed* $file], [*mixed* $quality]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Save the image



public  **render** ([*mixed* $ext], [*mixed* $quality]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Render the image and return the binary string




<hr>

# Class **Phalcon\Image\Adapter\Imagick**

*extends* abstract class [Phalcon\Image\Adapter](Phalcon_Image.md)

*implements* [Phalcon\Image\AdapterInterface](Phalcon_Image.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image/adapter/imagick.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Image manipulation support. Allows images to be resized, cropped, etc.

```php
<?php

$image = new \Phalcon\Image\Adapter\Imagick("upload/test.jpg");

$image->resize(200, 200)->rotate(90)->crop(100, 100);

if ($image->save()) {
    echo "success";
}

```


## Methods
public static  **check** ()

Checks if Imagick is enabled



public  **__construct** (*mixed* $file, [*mixed* $width], [*mixed* $height])

\Phalcon\Image\Adapter\Imagick constructor



protected  **_resize** (*mixed* $width, *mixed* $height)

Execute a resize.



protected  **_liquidRescale** (*mixed* $width, *mixed* $height, *mixed* $deltaX, *mixed* $rigidity)

This method scales the images using liquid rescaling method. Only support Imagick



protected  **_crop** (*mixed* $width, *mixed* $height, *mixed* $offsetX, *mixed* $offsetY)

Execute a crop.



protected  **_rotate** (*mixed* $degrees)

Execute a rotation.



protected  **_flip** (*mixed* $direction)

Execute a flip.



protected  **_sharpen** (*mixed* $amount)

Execute a sharpen.



protected  **_reflection** (*mixed* $height, *mixed* $opacity, *mixed* $fadeIn)

Execute a reflection.



protected  **_watermark** ([Phalcon\Image\Adapter](Phalcon_Image.md) $image, *mixed* $offsetX, *mixed* $offsetY, *mixed* $opacity)

Execute a watermarking.



protected  **_text** (*mixed* $text, *mixed* $offsetX, *mixed* $offsetY, *mixed* $opacity, *mixed* $r, *mixed* $g, *mixed* $b, *mixed* $size, *mixed* $fontfile)

Execute a text



protected  **_mask** ([Phalcon\Image\Adapter](Phalcon_Image.md) $image)

Composite one image onto another



protected  **_background** (*mixed* $r, *mixed* $g, *mixed* $b, *mixed* $opacity)

Execute a background.



protected  **_blur** (*mixed* $radius)

Blur image



protected  **_pixelate** (*mixed* $amount)

Pixelate image



protected  **_save** (*mixed* $file, *mixed* $quality)

Execute a save.



protected  **_render** (*mixed* $extension, *mixed* $quality)

Execute a render.



public  **__destruct** ()

Destroys the loaded image to free up resources.



public  **getInternalImInstance** ()

Get instance



public  **setResourceLimit** (*mixed* $type, *mixed* $limit)

Sets the limit for a particular resource in megabytes



public  **getImage** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

...


public  **getRealpath** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

...


public  **getWidth** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image width



public  **getHeight** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image height



public  **getType** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image type
Driver dependent



public  **getMime** () inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Image mime type



public  **resize** ([*mixed* $width], [*mixed* $height], [*mixed* $master]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Resize the image to the given size



public  **liquidRescale** (*mixed* $width, *mixed* $height, [*mixed* $deltaX], [*mixed* $rigidity]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

This method scales the images using liquid rescaling method. Only support Imagick



public  **crop** (*mixed* $width, *mixed* $height, [*mixed* $offsetX], [*mixed* $offsetY]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Crop an image to the given size



public  **rotate** (*mixed* $degrees) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Rotate the image by a given amount



public  **flip** (*mixed* $direction) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Flip the image along the horizontal or vertical axis



public  **sharpen** (*mixed* $amount) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Sharpen the image by a given amount



public  **reflection** (*mixed* $height, [*mixed* $opacity], [*mixed* $fadeIn]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Add a reflection to an image



public  **watermark** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Add a watermark to an image with the specified opacity



public  **text** (*mixed* $text, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity], [*mixed* $color], [*mixed* $size], [*mixed* $fontfile]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Add a text to an image with a specified opacity



public  **mask** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Composite one image onto another



public  **background** (*mixed* $color, [*mixed* $opacity]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Set the background color of an image



public  **blur** (*mixed* $radius) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Blur image



public  **pixelate** (*mixed* $amount) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Pixelate image



public  **save** ([*mixed* $file], [*mixed* $quality]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Save the image



public  **render** ([*mixed* $ext], [*mixed* $quality]) inherited from [Phalcon\Image\Adapter](Phalcon_Image.md)

Render the image and return the binary string




<hr>

# Interface **Phalcon\Image\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **resize** ([*mixed* $width], [*mixed* $height], [*mixed* $master])

...


abstract public  **crop** (*mixed* $width, *mixed* $height, [*mixed* $offsetX], [*mixed* $offsetY])

...


abstract public  **rotate** (*mixed* $degrees)

...


abstract public  **flip** (*mixed* $direction)

...


abstract public  **sharpen** (*mixed* $amount)

...


abstract public  **reflection** (*mixed* $height, [*mixed* $opacity], [*mixed* $fadeIn])

...


abstract public  **watermark** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity])

...


abstract public  **text** (*mixed* $text, [*mixed* $offsetX], [*mixed* $offsetY], [*mixed* $opacity], [*mixed* $color], [*mixed* $size], [*mixed* $fontfile])

...


abstract public  **mask** ([Phalcon\Image\Adapter](Phalcon_Image.md) $watermark)

...


abstract public  **background** (*mixed* $color, [*mixed* $opacity])

...


abstract public  **blur** (*mixed* $radius)

...


abstract public  **pixelate** (*mixed* $amount)

...


abstract public  **save** ([*mixed* $file], [*mixed* $quality])

...


abstract public  **render** ([*mixed* $ext], [*mixed* $quality])

...



<hr>

# Class **Phalcon\Image\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Image\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/image/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Image Adapter class using 'adapter' option

```php
<?php

use Phalcon\Image\Factory;

$options = [
    "width"   => 200,
    "height"  => 200,
    "file"    => "upload/test.jpg",
    "adapter" => "imagick",
];
$image = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config)

...
