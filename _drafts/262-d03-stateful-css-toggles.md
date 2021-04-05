---
layout: post
title: Stateful CSS Toggles
categories: cpnt262
---
## Housekeeping
- [CPNT 201 Assignment 3](https://github.com/sait-wbdv/assessments/tree/master/cpnt201/assignment-3)

## Homework
- Review: 
  - [Tissue Contrast Illusion](http://browsertherapy.com/challenges/tissue-contrast/)
  - [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  - [Code Challenge - CSS Toggles with element.classList](http://browsertherapy.com/challenges/css-toggles-with-classlist/)
- Checkboxes
  - Read: [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) on MDN
  - Read: [:checked pseudo-selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) on MDN
- Extras
  - Skim: [Positioning elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) on MDN
  - Skim: [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) on MDN
  - Watch: [Responsive Menu With Media Queries (Checkbox Trick) - Using Only CSS3](https://www.youtube.com/watch?v=xMTs8tAapnQ) by Caler Edwards

---

## 1. SVG with checkbox toggle
1. Create a hamburger menu icon in Figma.
2. Optimize icon using [SVG OMG](https://jakearchibald.github.io/svgomg/).
3. Add inline SVG to a sample page.
4. Hopefully: using a checkbox and label, transform the menu into an animated "X" when clicked (and toggle back).

---

## 2. Menus and absolute positioning
Absolute positioning demo?

---

## Activities
1. Using media queries, build a menu that:
  - is a horizontal flexbox on desktop;
  - is replaced with a hamburger icon on mobile.
2. Add a checkbox and label to the hamburger icon.
3. Using the Stateful CSS Toggle covered in today's lesson, add a click handler to the checkbox so that the menu is displayed vertically (using either `flex-direction`, for example) when the hamgurger icon is clicked.
4. Bonus: Try swapping out the hamburger icon for an "X" icon when the menu is visible.

---

## Clean-up Time!
- [Tomorrow]({% link _posts/2020-10-15-numbers-strings-coersion.md %})