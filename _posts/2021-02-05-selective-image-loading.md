---
layout: post
title: Selective Image Loading
categories: cpnt201
---

## Homework
1. Review
    - MDN: [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
2. Image loading performance
    - [`srcset` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
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

---

## `width` and `height` attributes
### Learning Objectives 
- Discuss the advantages of using `width` and `height` attributes.
- Review the risks of breaking image aspect ratio when `width` and `height` attributes are defined.
- Selectively download a large or small version of an image using the `srcset` attribute.
- Explore the use of the `image-set` CSS function for background images.

### Terms
### Materials
1. Image Performance
    - [GH Pages]({{"/sample-code/frontend/image-performance/" | relative_url }})
    - [GH Repo](https://github.com/sait-wbdv/sample-code/tree/master/frontend/image-performance)
2. Controlling image asset size using `srcset`
    - [Starter Blog Home Page]({{"/sample-code/frontend/image-performance/starter" | relative_url }})
    - [Instructions]({{"/sample-code/frontend/image-performance/#define-minimally-responsive-images" | relative_url }})
3. Improving network performance with native lazy loading
    - [Starter Blog Home Page]({{"/sample-code/frontend/image-performance/starter" | relative_url }})
    - [Instructions]({{"/sample-code/frontend/image-performance/#manage-network-resources-with-native-lazy-loading" | relative_url }})
    - [Finished]({{"/sample-code/frontend/image-performance/lazy-loading" | relative_url }})

### Key Takeaways

---

## Open lab-time
1. Checkbox hacking a menu with Ash and Tony!

### Tony's goals for Lab-Time
- Build a whiteboard checkbox into the program website?
    1. Understand the problem.
    2. Plan it out.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.