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
1. Lab time cameras optional after attendance is taken?
2. 260 Assignment 1 marks published
3. Assignment Feedback
    - relative links, please
    - Congrats to the helpers
        - Ellie
        - Vitaly
        - Erica
        - Kyle
    - Key problems
        - stylesheets go in a `css` directory
        - CSS organization
        - More CSS comments
        - Proper use of `nav`, `header`, `main` and `footer`
        - Reading the rubric

---

## Editing Raster Images
### Goal for the Day
Have a directory of processed images in a structure similar to this:

```
/images
  /full
    /img-1.jpg
    /img-2.jpg
    /img-3.jpg
    /img-4.jpg
  /lg
    /img-1.jpg
    /img-2.jpg
    /img-3.jpg
    /img-4.jpg
  /md
    /img-1.jpg
    /img-2.jpg
    /img-3.jpg
    /img-4.jpg
  /sm
    /img-1.jpg
    /img-2.jpg
    /img-3.jpg
    /img-4.jpg
```

**Note**: Rename your files to something descriptive. Optional: add `sm`, `md`, and `lg` descriptors to the filenames themselves.  
{: .notice .notice--info}

These images will be used for the next two days. They will form the basis of the Assignment, which will be to create a page similar to this one: [`srcset` and lazy loading example](https://sait-wbdv.github.io/sample-code/frontend/image-performance/srcset/) (with some additions as we cover them).

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

---

## Pixlr walk-throughs
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
We need some sample images to play with on Friday. Using the your source images you will create:
1. A "source" image where you will store your original, maybe cruddy, image.
2. A "full" image that's the same size as "source", but corrected and pretty.
3. Large image size:
    1. Using an image editor of your choice, create a large version of your file. You can decided what "large" is but it's usually wider than `1500px`. 
    2. Save this file in a `large`/`lg` directory next to the `full` and `source` directories you created yesterday.
4. Medium image size:
    1. Create a medium version of your file, usually between `750px` and `1000px`.
    2. Extra step for `srcset` testing: desaturate your image by about 50% so that the colours are duller than the large version. This will be to make `srcset` testing easier for Friday.
    3. Save this file in a `medium`/`md` directory.
5. Small image size:
    1. Create a small version of your file, usually around `500px`.
    2. Extra step for `srcset` testing: make this a grayscale image. This will be to make `srcset` testing easier for Friday.
    3. Save this file in a `small`/`sm` directory.

---

## Open lab-time
This course will require small, medium and large versions of multiple images. These will be used in mobile, tablet and desktop screen widths using the `srcset` attribute.


**Warning**: It's important that the small, medium and large sizes of an individual image is the same aspect ratio. Otherwise, the images will be distorted at some screen sizes. 
{: .notice .notice--warning}

### Session Goals
1. Choose 3-5 images you would like to use in a list of Lorem Ipsum blog articles. Each image will be 100% wide as part of a blog summary (aka, excerpt).
2. Create a corrected image template:
    - crop it to the aspect ratio you need for your design;
    - colour correct it, if needed;
    - save it as a template you'll use for the modifications below.
3. Large image - open a fresh template image, and:
    - Add some visual effect that will differentiate it from the other sizes of the same image. For example: make it black and white, change the saturation, distort it with a filter, add text, etc.
    - Save it as a large copy of that image.
4. Medium image - open a fresh template image, and:
    - resize it to a medium size;
    - add a different visual effect to differentiate it;
    - Save it as a medium copy of the image.
5. Small image - open a fresh template image, and:
    - resize it to a small size;
    - add a different visual effect to differentiate it;
    - Save it as a small copy of the image.
6. Repeat this process for at least 2 other images.

---

### Tony's goals for Lab-Time
- Vector lesson plans.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.