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

---

## Morning reflection
### Housekeeping
1. Draft: [`cpnt201-a2`](https://github.com/sait-wbdv/assessments/tree/master/cpnt201/assignment-2)
2. Lab time agendas
3. Changes to Dailies
4. New attendance process?

---

## 1. Image theory
### Learning Objectives
1. Define image encoder.
2. Distinguish between lossless, lossy compression.
3. Distinguish between high and low frequency imagery.
4. Predict whether lossless or lossy compression will be best for a particular image.

### Terminology
<dl>
Image encoder (aka. codec)
: A library/module that converts one image format to another. Not all encoders are created equal.

Colour Data (aka. chroma)
: The digital information in an image that controls pixel colour. Also called chroma data.

Brightness Data (aka. luma)
: The digital information in an image that controls pixel brightness.

High Frequency Imagery
: Parts of an image (or the whole image) where colour and contrast change a lot from one pixel to the next. Example: a photo of nature (trees, mountains, etc.).

Low Frequency Imagery
: Parts of an image (or the whole image) where colour and contrast change very little from one pixel to the next. Example: a vector logo or other image with a lot of flat colour.

### Materials
- [Sample Images](https://github.com/sait-wbdv/sample-code/tree/master/assets/images)
- Video breakdown: [Image compression deep-dive](https://youtu.be/F1kYBnY6mwg)
  - 0:00 - [Intro](https://youtu.be/F1kYBnY6mwg)
  - 1:49 - [Lossy vs lossless vs vector](https://youtu.be/F1kYBnY6mwg?t=100)
  - 4:45 - [Lossy: Chroma vs Luma](https://youtu.be/F1kYBnY6mwg?t=285)
  - 8:03 - [Lossy: How JPEG works](https://youtu.be/F1kYBnY6mwg?t=483)
  - 12:47 - ["WebP is just better."](https://youtu.be/F1kYBnY6mwg?t=767)
  - 16:04 - [Squoosh feature walk-through (lossy)](https://youtu.be/F1kYBnY6mwg?t=964)
  - 21:28 - [Lossless: Stop using GIF](https://youtu.be/F1kYBnY6mwg?t=1288)
  - 23:00 - [Squoosh feature walk-through (lossless)](https://youtu.be/F1kYBnY6mwg?t=1380)
  - 27:38 - [Review and conclusion](https://youtu.be/F1kYBnY6mwg?t=1658)

### Key Takeaways
1. Don't rely on Photoshop's image codecs ([Squoosh](https://squoosh.app/) is way better).
1. Lossy image encoders shrink the file size of an image by throwing away colour data while keeping brightness data.
2. Lossless image encoders shrink file size by [indexing the colours](https://en.wikipedia.org/wiki/Indexed_color) in an image and then mathematically "describing" each pixel based on their neighbours (i.e. "the next 159 pixels are white").
3. If you need to support older browsers:
  - JPEG (lossy) is best for high frequency images;
  - PNG (lossless) is best for low frequency images.
4. Get you an encoder that can do both (WebP). Use the `picture` element to use WebP images with a JPEG/PNG fallback. This allows you to use other codecs as well.
5. Don't zoom in!

---

## 2. Image Optimization with Squoosh.app
### Materials
- [Squoosh](https://squoosh.app/)

### Learning Objectives
1. Create an optimized _high frequency_ image using the WebP (lossy) codec.
2. Create an optimized _high frequency_ image fallback using the `MozJPEG` codec.
3. Create an optimized _low frequency_ image using a WebP (lossless) codec.
4. Create an optimized _low frequency_ image fallback using the `OxiPNG` codec.

### Activity 1: Squooshing high-frequency images with WebP (Lossy)
Optimize an image file size using [Squoosh.app](https://squoosh.app/):
1. Pick a high frequency image (try [jank](https://github.com/sait-wbdv/assets/blob/main/images/misc/jank.png) and upload it to Squoosh.
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

---

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

## Open lab-time
Using the large images you created yesterday:
1. Define the low and high frequency areas;
2. Predict if the file will be smaller as a lossless or lossy image.
3. Use [Squoosh](https://squoosh.app/) to see if you're correct.

---

## Tony's goals for Lab-Time
- Finalize cpnt201-a2.
- Play with clip-masks.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.
