---
layout: post
title: SVG Fundamentals
categories: cpnt201
---

## Homework
1. Review
    - [Anchor element: Linking to an element on the same page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page)
2. Scalable Vector Graphics
    - Watch: [A beginners guide to SVG: Part 1](https://youtu.be/ZJSCl6XEdP8) by Kevin Powell. You can skip Part 2 but watch [Part 3](https://youtu.be/TBYJ2V1jAlA) if you're interested.
3. Optimizing SVG
    - Tool: [SVG OMG](https://jakearchibald.github.io/svgomg/)
    - Watch: [How to Optimize SVGs from your editor](https://youtu.be/cWh0de8IhX4?t=1184) by Kevin Powell (about 19 minutes into a longer video)
    - Advanced: [Understanding and Manually Improving SVG Optimization](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)
3. SVG in HTML Documents
    - Read: [Using SVG](https://css-tricks.com/using-svg/) on CSS-Tricks
    - Read: [How to Scale SVG](https://css-tricks.com/scale-svg/)
    - [How to Work with SVGs in Figma, HTML, and CSS](https://youtu.be/R0oz8DsxeYU) by Build UX
    - Optional (but fun): [SVG Can Do That?!](https://youtu.be/ADXX4fmWHbo) by Sarah Drasner   

---

## Morning reflection
### Housekeeping
1. [Javascript homework](/winter-2021{{page.next.url}})
2. Show-and-Tell
    - Joel
    - Vitaly

---

## 1. Inserting SVGs
### Learning Objectives
1. Explore 3 ways to insert an SVG into an HTML page.
2. Discuss the advantages and disadvantages of each method.
3. Style an inline `svg` with CSS using `fill` and `stroke`.
4. Apply a CSS `filter` to an inline `svg`.

### Materials
- Gist: [3 ways to insert an SVG](https://gist.github.com/acidtone/90c99bbd1825f591586d05e5419d711f)

### Key Takeaways
- Inserting an `svg` as either an HTML (using an `img` element) or CSS image (using `background-image`) treats it like any other image.
- Inserting an inline SVG allows you to style it with CSS.

    **Note**: SVGs are defined by a different specification than HTML and CSS. Background colours and borders are controlled with the `fill` and `stroke` properties, respectively. See MDN:[Fills and Strokes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes)
    {: .notice .notice--info}

- When inserting as an image, all styling must be included with the SVG itself. When using an inline `svg` element, these styles can be removed (assuming you're styling with CSS).
- Unlike images, the browser will _not_ break the aspect ratio of an inline `svg` and will crop the graphic instead. Set `preserveAspectRatio` to `none` if you want to override this (this is rarely preferred).

---

## 2. `viewBox` and SVG anatomy
### Learning Objectives
1. Discuss the role of the `width` and `height` attributes of an `svg` element and it's relationship to responsive design.
2. Discuss the nature of the `viewBox` and its relationship to the rest of an SVG.
3. Explore different methods of exporting an SVG from Figma (for example) to control the `viewBox`.
4. Optimize an `svg` with SVGOMG.

### Materials
- Gist: [The problem with `viewBox`](https://gist.github.com/acidtone/1180c12d207234f9a053eedda981ddf9)

### Key Takeaways
- Remove `width` and `height` attributes from and `svg` element to make it responsive.

  **Warning**: There are many references to the SVG "viewport" in online resources, relating to the `width` and `height` attributes. This is _not_ the same as the browser viewport. Save yourself the hassle and just delete the `width` and `height` attributes and pretend SVG viewports don't exist (for now). 
  {: .notice .notice--warning}

- SVG styles and effects _cannot_ leave the `viewBox`. Make your `viewBox` a little larger than the graphic if styles or filter effects are getting clipped. It's easiest to do this in a vector editor like Figma or Illustrator.
- The `xmlns` attribute is needed if you want to support non-HTML5 browsers (we probably do) or XML parsers (we probably don't).
- SVGOMG: 
  - Most of the defaults are fine.
  - Prettify the code, if desired. It won't add a lot to file size.
  - `width` and `height` attributes will be removed by default (this is good).
  - A lower precision will result in a smaller file size but very low values might affect the detail of your designs.

---

## Open lab-time
### Activities:
1. Gist: [SVG Anatomy](https://gist.github.com/acidtone/7dc749f62b43bc777859ca52cde2b791)
2. Gist: [Inserting an SVG](https://gist.github.com/acidtone/008a53588ab361a0ccc2fc89ff2439eb)
3. Gist: [Add an SVG colour scheme](https://gist.github.com/acidtone/118f11cd417a7b20fb4f6976f36767a1)

---

### Tony's goals for Lab-Time

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.