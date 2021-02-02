---
layout: post
title: Raster Image Optimization with Squoosh.app
categories: cpnt201
---

## Homework
1. Image Formats and Compression
    - Watch: [Image compression deep-dive](https://youtu.be/F1kYBnY6mwg) by Jake and Surma
    - Read: [`picture` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
    - Reference: [Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
    - Tool: [Squoosh.app](https://squoosh.app/)
2. Image `width` and `height` attributes
    - Read: [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
    - Watch: [Do This to Improve Image Loading on Your Website](https://youtu.be/4-d_SoCHeWE)

---

## Morning reflection
### Housekeeping
- 

---

## Image Optimization Fundamentals
### Learning Objectives
1. Define image encoder.
2. Distinguish between lossless, lossy compression.
3. Distinguish between high and low frequency imagery.
4. Predict whether lossless or lossy compression will be best for a particular image.

### Terminology
<dl>
Image encoder
: A library/module that converts one image format to another. Not all encoders are created equal.

High Frequency Imagery
: Parts of an image (or the whole image) where colour and contrast change a lot from one pixel to the next. Example: a photo of a busy intersection.

Low Frequency Imagery
: Parts of an image (or the whole image) where colour and contrast change very little from one pixel to the next. Example: a vector logo or other image with a lot of flat colour.

Colour Data
: The digital information in an image that controls pixel colour. Also called chroma data.

Brightness Data
: The digital information in an image that controls pixel brightness.

### Materials
- [Tony's Raw Screencaps](https://github.com/sait-wbdv/assets/)

### Key Takeaways

---

## 2. HTML Image Optimization: `width` and `height` attributes

- Add `width` and `height` attributes to an `img` element.
- Demonstrate the advantages of using `width` and `height` attributes.
- Explore the risks of breaking image aspect ratio when `width` and `height` attributes are defined.
- Compare the performance of a web page with and without `width`/`height` attributes.

---

## Open lab-time
### Activity 1: Squooshing high-frequency images with WebP (Lossy)
Optimize an image file size using [Squoosh.app](https://squoosh.app/):
1. Pick a high frequency image (try [jank](https://github.com/sait-wbdv/assets/blob/main/images/source/jank.png) and upload it to Squoosh.
2. Zoom the image to the size it will be on the web page (and resist the urge to zoom).
    - To account for high resolution displays, take the native size of your image and zoom out so it's about 50% of its original size.
3. Choose `WebP` encoder under "Compress".
4. Turn down Quality until the image "looks bad".
5. Increase Effort (to max?).
6. Advanced Settings: 
    - try toggling `Auto adjust filter strength`;
    - try adjusting `Spatial noise shaping`.
7. Download and save your optimized files in a `full` directory next to your `source` directory.

### Activity 2a: Creating JPEG image (for Safari)
1. Choose `MozJPEG` encoder under "Compress".
2. Reduce `Quality` until the image "looks bad".
3. Advanced Settings:
    - try adjusting `Subsample chroma by`;
    - try toggling `Separate chroma quality`.
4. Download the optimized image and use it as an asset in a project web page of your choice.
5. Complete two performance audits on your project page using Chrome Lighthouse: once with the original image file and a second with the optimized image file.
6. Download and save your optimized files in a `full` directory next to your `source` directory.

### Activity 3: Squooshing low-frequency images with WebP (Lossless)
1. Pick a low-frequency image (something with a lot of flat colour) and upload it to Squoosh.
2. Zoom the image to the size it will be on the web page (and resist the urge to zoom).
    - To account for high resolution displays, take the native size of your image and zoom out so it's about 50% of its original size.
3. Choose `WebP` encoder under "Compress".
4. Click `Lossless` to enable the low-frequency encoder.
5. Increase `Effort` (to max?).
6. Try increasing `Slight loss`. Your mileage may vary.
7. Try `reduce pallette` to remove unneeded colours.
    - Select `Browser PNG` under "Compress" to speed up the preview.
    - Click `Reduce pallette`.
    - Reduce `Dithering` to zero (unless you need it, which you probably don't).
    - Reduce `Colors` as much as possible until the image "looks bad".
8. Download and save your optimized files in a `full` directory next to your `source` directory.

### Activity 3a: Creating PNG image for Safari
1. Choose `OxiPNG` encoder under "Compress".
2. Increase `Effort` (to max?).
3. Click `Reduce pallette`.
4. Reduce `Dithering` to zero (unless you need it, which you probably don't).
5. Reduce `Colors` as much as possible until the image "looks bad".
6. Download and save your optimized files in a `full` directory next to your `source` directory.
7. Does WebP provide enough savings to bother with it?

---

## Tony's goals for Lab-Time

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.
