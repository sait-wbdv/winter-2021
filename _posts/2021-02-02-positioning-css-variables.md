---
layout: post
title: Positioning and CSS Variables (Custom properties)
categories: cpnt260
---

## Homework
1. Positioning
    - Read:: [Absolute, Relative, Fixed Positioning: How Do They Differ?](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/) on CSS Tricks
    - Read: [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) on MDN
    - Read: [Understanding CSS z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index) on MDN
2. CSS Animation
    - Read: [Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) on MDN
    - Read: [CSS Transition Examples](https://www.freecodecamp.org/news/css-transition-examples/) on Free Code Camp
    - Reference: [`transition` property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
    - Optional: [Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
3. CSS Variables
    - Read: [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) on MDN
    - Read: [CSS Variables: Why Should You Care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care) on Google Developer
    - Watch: [Lea Verou on CSS Variable Secrets at SmashingConf Toronto 2018](https://vimeo.com/292466625)

---

## Morning reflection
### Housekeeping
- Open assets directory added to the [Library]({{ "/library" | relative_url }}).
- Browser test:
  - [Command Line Cheatsheet](https://sait-wbdv.github.io/winter-2021/cheatsheets/command-line/)
    - Do the Notice boxes display correctly?
- Poll: What image editor do you use?

---

## Hiding Elements
### Learning Objectives
1. Discuss the various methods for hiding an element.
    - Set element to `display: none`.
    - Set the element to `visibility: hidden`.
    - Overlap a larger element using `z-index`.
    - Move the element off the viewport with `absolute` positioning.
    - Overlap a larger element with Explicit Grid item placement.
2. Explore CSS positioning.
    - `position: relative`
    - `position: absolute`
    - `top`/`bottom`/`left`/`right`
    - `z-index`
3. Explore CSS Transitions? Grid Overlap? Review?

### Materials
- [Tissue Contrast Illusion](http://browsertherapy.com/challenges/tissue-contrast/)
- `relative` and `absolute` positioning.
  - Codepen: [CSS Positioning](https://codepen.io/browsertherapy/pen/PobqQjv)
  - Gist: [CSS Positioning v0.1](https://gist.github.com/acidtone/61ae09c7efb6a504010d17199e41510e)

### Key Takeaways
- `top`/`bottom`/`left`/`right` and `z-index` only work on positioned elements.
- The direction of `top`/`bottom`/`left`/`right` reverses depending on `relative` vs `absolute`(?)
- On absolutely positioned elements, `top`/`bottom`/`left`/`right` are relative to:
  - `body`, OR;
  - the closest parent with `position: relative`.
- `z-index` defaults to `1` for positioned elements. So, `2` will send an element to the top of the stack.

---

## Open lab-time
1. Try using the Checkbox hack to hide and display a mobile menu using one of the methods above.

### Tony's goals for Lab-Time
- Revamp Library page?

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.