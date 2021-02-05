---
layout: post
title: Optimizing Image Performance 
categories: cpnt201
---

## Homework
1. Review
    - MDN: [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
2. Image loading performance
    - Read: [If you’re just changing resolutions, use `srcset`](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
    - Reference: [`srcset` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
    - Optional: [`sizes` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)
3. File prep
    - Small, medium and large sample images.
    - Sample section that uses a large HTML image on Desktop and smaller on mobile.
    - Optional: Sample blog page with multiple images that you need to scroll through.
4. `srcset`
    - Read: [Responsive Images: If you’re just changing resolutions, use `srcset`](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
    - Watch: [Figuring Out Responsive Images](https://css-tricks.com/video-screencasts/133-figuring-responsive-images/)
    - Read: [Don’t use `<picture>` (most of the time)](https://cloudfour.com/thinks/dont-use-picture-most-of-the-time/)
5. `image-set()`
    - Read: [Is there a srcset equivalent for css background image](https://stackoverflow.com/questions/26801745/is-there-a-srcset-equivalent-for-css-background-image) on Stack Overflow
    - Reference: [`image-set()` property](https://developer.mozilla.org/en-US/docs/Web/CSS/image-set())
6. Native lazy loading images
    - Watch: [Lazy loading is too easy now](https://youtu.be/AActXSWxsRo) by Kevin Powell
    - Read: [`loading` image attribute](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#Images_and_iframes) by MDN
    - Read: [Native Lazy Loading](https://css-tricks.com/native-lazy-loading/) by CSS Tricks

---

## Morning reflection
### Housekeeping
- [`cpnt201-a2`](https://github.com/sait-wbdv/assessments/tree/master/cpnt201/assignment-2)
- `cpnt201-a3` pushed to Feb 15 (Family Day)
- Due Friday Feb 12: [CPNT 260 Exercises](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/exercises)

---

## 1. `width`, `height` and `loading` image attributes
### Learning Objectives 
- Discuss the advantages of using `width` and `height` attributes.
- Review the risks of breaking image aspect ratio when `width` and `height` attributes are defined.
- Demonstrate the `loading` attribute for delaying image downloads.

### Materials
1. Image Performance
    - [GH Pages](/sample-code/frontend/image-performance/)
    - [GH Repo](https://github.com/sait-wbdv/sample-code/tree/master/frontend/image-performance)
2. Improving network performance with native lazy loading
    - [Starter Sample Blog](/sample-code/frontend/image-performance/starter)
    - [Instructions](/sample-code/frontend/image-performance/#manage-network-resources-with-native-lazy-loading)
    - [Finished](/sample-code/frontend/image-performance/lazy-loading)

---

## 2. Selective image loading with `srcset` and `sizes`
### Terminology
Device-pixel ratio
: Device-pixel ratio is the number of device pixels per CSS pixel. This ratio is determined by the pixel density of the device and the zoom level of the browser.

### Learning Objectives
- Discuss the criteria which selective image loading can operate under: viewport width and a display's pixel density.
- Define alternate large, medium or small versions of an image using the `srcset` attribute.
- Discuss the `sizes` attribute and how it can be used to set specific image sizes at defined breakpoints.
- Discuss the use of the `image-set` CSS function for background images.

### Materials
1. Controlling image asset size using `srcset`
    - [Starter Blog Home Page](/sample-code/frontend/image-performance/starter)
    - [Instructions](/sample-code/frontend/image-performance/#define-minimally-responsive-images)

### Key Takeaways
- Image decisions are based on the current viewport width. Images that are smaller that the viewport will often load with a larger size than is needed. 
- `srcset` describes the alternate image sizes available and makes decisions accordingly when displaying the image. It will make these decisions based on the viewport width and the pixel-ratio of the device. 
- The `image-set()` CSS function is a partially supported feature in most browsers and is mostly used to serve optimized image to high density displays. 
- For more control of your image size at particular screen widths, you can use the newer `sizes` attribute to add media query-style instructions.

---

## Open lab-time
1. Checkbox hacking a menu with Ash and Tony!

### Tony's goals for Lab-Time
- Build a whiteboard checkbox into the program website?
    1. Understand the problem.
    2. Plan it out.
    3. Brute force solution.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.