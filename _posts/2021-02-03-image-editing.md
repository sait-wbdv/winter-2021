---
layout: post
title: Image Editing
categories: cpnt201
---

## Homework
1. Download and install an image editor, such as Photoshop, if you don't already have access to one. Some free(ish) Photoshop alternatives:
    - [GIMP](https://www.gimp.org/) (Window, Mac, Linux)
    - [Pixlr](https://pixlr.com/) (browser-based)
    - [Canva](https://www.canva.com/photo-editor/app/) (browser-based)
    - [Photo Pos Pro](https://www.photopos.com/PPP3_BS/Default.aspx) (Windows-only)
    - [Acorn](https://flyingmeat.com/acorn/) (Mac-only)
2. Choose 1-3 images that are appropriate for use in a hero section (at least `2000px` wide).

---

## Morning reflection
### Housekeeping
- Lab time cameras optional after attendance is taken?

---

## Lecture/Live code
### Learning Objectives
1. Use image editing software to:
    - re-size a raster image;
    - adjust colour levels of a raster image;
    - crop a raster image;
    - repair a raster image.
2. Explore various methods for further modifying images:
    - Filters
        - Blur
        - Sharpen/Unsharp Mask
        - Warp/Skew
    - Adding transparency (PNG and WebP only)

### Terminology
Sources
- [Photo Editing Terms Explained Simply](https://www.picmonkey.com/blog/photo-editing-terms-you-dont-know)
- [Digital Terminology and Essential Elements of Photo-Editing](https://extension.uga.edu/publications/detail.html?number=B1254-2&title=Part%202:%20Digital%20Terminology%20and%20Essential%20Elements%20of%20Photo-Editing)

Raster Image
: A digital image that is represented by a generally rectangular grid of pixels, each described in Red, Green and Blue 8-bit channels.

Image Size
: The literal width and height of an image in pixels.

Image Resolution
: The number of pixels per a given length unit to describe pixel density. For example, print images are usually described in `ppi` (pixels per inch). In web, this most often descries the pixel density of retina displays.

Color Channel
: A data structure that stores the colour information of an image. Most images are made up of three 8-bit channels (256 levels of colour) for Red, Green and Blue.

Exposure
: This is how light or dark the image appears after the image was created. Various image editors will call their exposure correction tools "levels", "curves".

Histogram
: A graph displaying all the tones in your image as numbers, usually ranging from 0 to 255. This is usually the visual representation of an image's exposure

Re-sample
: In other words, re-size. _Resampling_ tools are used to increase or decrease the size and/or the resolution of a bitmap-based image. An image is up-sampled to increase the resolution by adding new pixels. An image is down-sampled to decrease the resolution by deleting pixels.

Cropping
: The removal of unwanted outer areas from a photographic or illustrated image.

### Materials
- [Sample Images](https://github.com/sait-wbdv/sample-code/tree/master/assets/images)

### Key Takeaways


---

## Open lab-time
### Activity 1: Image Editing
Get comfortable with your image editor. Pick an image from the source images you used yesterday and try the following:
- Crop the image;
- Adjust its colour balance;
- Adjust its exposure;
- Try adding a filter (if supported by your editor)
  - sharpen
  - unsharp mask
  - blur
  - warp/skew
- Bonus: find an image editor that supports batch processing!

### Activity 2: Sizing images
We need some sample images to play with tomorrow. Using the sources images you used yesterday, create a:
1. Large image size:
    1. Using an image editor of your choice, create a large version of your file. You can decided what "large" is but it's usually wider than `1000px`. 
    2. Save this file in a `large`/`lg` directory next to the `full` and `source` directories you created yesterday.
2. Medium image size:
    1. Create a medium version of your file, usually between `500px` and `1000px`.
    2. Extra step for testing: desaturate your image by about 50% so that the colours are duller than the large version. This will be to make testing easier for tomorrow.
    3. Save this file in a `medium`/`md` directory.
3. Small image size:
    1. Create a small version of your file, usually less than `500px`.
    2. Extra step for testing: make this a grayscale image. This will be to make testing easier for tomorrow.
    3. Save this file in a `small`/`sm` directory.

---

### Tony's goals for Lab-Time

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.