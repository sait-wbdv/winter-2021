---
layout: post
title: Grid Fundamentals
categories: cpnt260
---

## Homework
1. Review
    - [Flexbox vs. CSS Grid — Which is Better?](https://youtu.be/hs3piaN4b5I) by Jenn Simmons
2. CSS Grid
    - Read: [Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) on MDN
    - Reference: [Grid by Example](https://gridbyexample.com)
        - [Examples](https://gridbyexample.com/examples/)
        - [Patterns](https://gridbyexample.com/patterns/)
        - [Videos](https://gridbyexample.com/video/)
    - Reference: 
        - [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
    - Watch the following videos on Grid by Example:
        - [Defining a Grid](https://gridbyexample.com/video/series-define-a-grid/)
        - [The `fr` unit](https://gridbyexample.com/video/series-the-fr-unit/)
        - [Repeat Notation](https://gridbyexample.com/video/series-repeat/)
        - [Introducing minmax()](https://gridbyexample.com/video/series-minmax/)
    - Game: [CSS Grid Garden](https://cssgridgarden.com/)
3. Fast Layouts
    - Watch: [Build a Classic Layout FAST in CSS Grid](https://youtu.be/KOvGeFUHAC0) by Miriam Suzanne
    - Watch: [Incredibly Easy Layouts with CSS Grid](https://youtu.be/tFKrK4eAiUQ) by Jenn Simmons
    - Watch: [Using Flexbox + CSS Grid Together: Easy Gallery Layout](https://youtu.be/dQHtT47eH0M) by Jenn Simmons

---

## Morning reflection
### Housekeeping
1. [CPNT 260 Assignment 3](https://github.com/sait-wbdv/assessments/tree/master/cpnt260)
2. Dailies feedback
    - Decline in submissions for W3W?
    - Copy and paste is fine, but...
        - Try making something from scratch.
        - Add comments: problems, victories, questions.
    - `body` and `head` are not needed in Codepen.
    - Comment out broken code if something isn't working and you need help with it.

---

## Lecture/Live code
### Learning Objectives
- Discuss the differences between Flexbox and CSS Grid.
- Identify the  strengths and weaknesses of each technology.
- Define a Grid template using traditional length units.
- Define a Grid template using the `fr` unit.
- Layout a web page with Grid names and areas.

### Terms
- See: [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Materials
- Gist: [Starter Code](https://gist.github.com/acidtone/d946ea7147e60568d7f8262b5e7be449)
- Gist: [Traditional sidebar layout](https://gist.github.com/acidtone/4c73631fe86425523c3161743a32f03b)
- Traditional layout with grid areas:
  - [Gist](https://gist.github.com/acidtone/0813b3f46c99cc08760a421f3d2dcca3)
  - [Codepen](https://codepen.io/browsertherapy/pen/gOYVaVN)

### General implementation process
1. Define your container. All direct children will become grid items.
2. Define your Grid template.
3. Explicitly place items, if needed.

### Key Takeaways
- Like Flexbox, Grid items are defined as the direct children of the container.
- Flexbox vs Grid: Flex operates in one direction like a sentence (in `row` direction) and Grid operates in two dimensions like a spreadsheet.
- Unlike Flexbox, grids don't change axis; columns are always in the up-down direction and rows are left-right. 
- The grid _template_ is not a part of the DOM. It cannot by styled or targetted with selectors. Its purpose is to guide the positioning of the grid items.
- Implicit item placement happens automatically: the browser will place items on the grid in source order. You can control this with various _explicit_ placement properties.
- Grid cells cannot take non-rectangular shapes (like a Tetris "L"). They must be rectangular.
- Half the grid declarations seem to be shorthand properties.

---

## Open lab-time
### Tips for learning
- Beginners
  - Try defining your grid columns using units you already know (`px`, `rem`, `em`, `ch`, etc), _then_ experiment with `fr` units.
  - Define traditional layouts using `grid-area` and `grid-template-areas` at first, _then_ redefine the same grid in another project using `grid-column`, `grid-row` and the `span` keyword.
    - Digital Ocean: [CSS Grid Layout: The Span Keyword](https://www.digitalocean.com/community/tutorials/css-css-grid-layout-span-keyword)
- Intermediate
  - Place items explicitly using Grid lines.
    - [CSS Grid Garden](https://cssgridgarden.com/)
  - Implement the `minmax()` function to create "squishy" columns (and rows).
    - Grid by Example: [Introducing minmax()](https://gridbyexample.com/video/series-minmax/)
  - Use the `repeat()` function to create repeating rows or columns. This will prep you for auto-generated columns below.
- Advanced
  - Auto-generate Grid tracks with `auto-fill`, `auto-fit` in combination with `repeat()` and play with stacking order.
    - Grid by Example: 
      - [Introducing auto-fill and auto-fit](https://gridbyexample.com/video/series-auto-fill-auto-fit/)
      - [Auto-placement and packing modes](https://gridbyexample.com/video/series-auto-placement-span/)
  - How do pseudo-elements work in a grid layout?
    - See: 
      - CSS Tricks: [Pseudo-elements are children, kinda](https://css-tricks.com/a-little-reminder-that-pseudo-elements-are-children-kinda/)
  - How do absolutely positioned elements work in a grid layout?
    - See: 
      - Grid by Example: [Absolute positioning and grid items](https://gridbyexample.com/video/absolute-positioning/)
  - Overlap items using explicit grid line placement.
    - See: 
      - Layout Land: [Overlap on the Web, Graphic Design Made Easy with CSS Grid](https://youtu.be/EashgVqboWo)
      - Steve Griffith: [Overlapping CSS Grid Elements](https://youtu.be/7U7EebDUPXc) 

### Tony's goals
- Walkthrough of [Tony's Home Page](https://acidtone.github.io)

---

## Activities
1. MDN: [Test your skils: Grid Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grid_skills)
2. Free Code Camp: [Grid challenges](https://www.freecodecamp.org/learn/responsive-web-design/css-grid/)
3. Layout challenges: try using Grid to duplicate the following layouts:
    - [Calculator](https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/media/1/dlOjNGD9TeV4OeAQCHvM_227WdRs.png)
    - [3.5 Columns](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/df3ba450-a9a3-49be-a224-03be84e3de8c/09-grid-image-areas-opt.png)
    - [Mondrian layout](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/34fb87db-ec24-471a-9042-1e353ce7df7b/10-grid-mondrian-opt.png)
    - [Cats!](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4163e9b5-d6b5-4170-91e1-ab33e91a7587/04-grid-comic-opt.png)
    - [Random Layout](https://seesparkbox.com/uploads/article_uploads/cssgrid_flexbox_fallbacks.png)

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.
