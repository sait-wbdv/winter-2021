---
layout: post
title: The Browser Triad, Long-form Text and Validation
categories: cpnt260
---

## Housekeeping
1. Poll: HTML/CSS skillz
2. Updated: [Open Source Assets Cheatsheet]({{site.baseurl}}/cheatsheets/copyright/open-assets)
2. New nav page: [WBDV Library]({{site.baseurl}}/library)

## Homework
1. Review
    - Choose a print document (book, magazine, brochure, etc) in your immediate area that shows diverse examples of visual hierarchy.
    - Choose an open-source web document (e.g. a Wikipedia page) explaining a favourite topic of your choice.
2. Tool Time
    - Watch: [Introduction to Pair Programming](https://www.youtube.com/watch?v=vgkahOzFH2Q)
    - Video: [Why are there Four Firefoxes?](https://youtu.be/qQ1oQJJn1nQ)
    - Reference: 
        - [Can I Use?](https://caniuse.com/)
        - [CSS Tricks](https://css-tricks.com/)
        - [Stack Overflow](https://stackoverflow.com/)
3. Introduction: HTML and CSS
    - Watch: [Why is CSS So Weird?](https://www.youtube.com/watch?v=aHUtMbJw8iA)
    - Read: [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
    - Read: [HTML text fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
    - Read: [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
4. CSS Selectors
    - Read: [Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
    - Skim: [Pseudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

---

## 1. The Browser Triad
### Learning Objectives
- Explain the difference between HTML, CSS, and JavaScript.
- Briefly summarize the history and development of HTML and CSS to their current incarnation.
- Define a tag, element and attribute.
- View the source of a web page.
- Add appropriately marked-up text to a web page, including paragraphs and headings.

### Terminology
Content Layer
: The HTML that defines the meaning and structure of web content.

Presentation Layer
: The CSS (and supporting assets) that control the visual appearance of a web page. Examples: typography, layout, colour, etc.

Behaviour Layer
: The Javascript that controls the interactive behaviour of a web page. In practice, the behaviour layer is responsible for everything the content and presentation layers _can't_ do.

For specific HTML/CSS definitions and syntax see:
- [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

---

## 2. Codepen and Lorem Picsum tour
- Tony's Codepens
  - [Browser Therapy](https://codepen.io/browsertherapy/)
  - [Personal Codepen](https://codepen.io/acidtone/)

---

### Activity: Practice with paired coding and HTML
You will be working in pairs for this activity. 

[Introduction to Pair Programming](https://www.youtube.com/watch?v=vgkahOzFH2Q)

Choose an openly licensed document of your choice from Wikipedia or similar service. Code it in HTML using Codepen. Start with the following HTML tags:
- `h1`-`h3`: headings
- `p`: paragraphs
- `a`: links
- `strong`, `em`: bold and italicize
- `ul` and/or `ol`: unordered and ordered lists
- `img`: image as content
  - We'll be using the [Lorem Picsum](https://picsum.photos/) image service for many of the images in this course.

Don't know where to start? Try searching for the above elements to find sample code. Which search terms give you the best results?

#### Spoilers
- Codepen: [Responsive Text: Max Line Length with Scroll Track](https://codepen.io/browsertherapy/pen/RwaJmbx)
- Codepen: [Sample Blog Post with a floated HTML image](https://codepen.io/browsertherapy/pen/JjGJxZP)

### Stretch Activities
Once you have the basics figured out, try some of these more advanced concepts:
- [Clipped, floated images](https://codepen.io/browsertherapy/pen/yLeobxq)
    1. Create a new shape using the [Clippy](https://bennettfeely.com/clippy/) tool.
    2. Mask an image with this shape using the `clip-path` property.
    3. Float adjacent text around this new shape (and image) using `shape-outside`.

---

## 2. The Box Model
### Learning Objectives
- Identify the fundamental structures of the box model and their purpose.
- Find an elements box model diagram in the Firefox Inspector.
- Distinguish between block and inline elements.
- Use CSS to modify an element's box model styles.

### Materials:
- MDN: [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [inline vs block elements](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block)

---

### Activity: Blockquote box model
You will be working in pairs for this activity.

1. Add a quotation to your code from the previous activity using the `blockquote` element.
2. Using a [CSS type selector](https://css-tricks.com/almanac/selectors/t/type/), add some visual hierarchy to the blockquote by modifying the element's box model. For example:
    - Add a border with the `border` and `border-radius` properties.
    - Add a background colour with the `background-color` property. To ensure readable text, choose a matching text colour with `color`.
    - Add negative space between the quote text and the border with `padding`.
    - Add negative space between the border and outside elements with `margin`.

---

### Stretch Activities
Once you have the basics figured out, try some of these more advanced concepts:
- [Style a blockquote with pseudo-elements](https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/)
- [More cool things you can do with pseudo-elements](https://css-tricks.com/pseudo-element-roundup/)
- [Customize your list styling](https://css-tricks.com/almanac/properties/l/list-style/)

---

## 3. Lab Time: Migrate and Validate
### Learning Objectives
- Identify the anatomy of an HTML page.
- Migrate code from a Codepen to an HTML page in VS Code.
- Define the rules for naming web pages.
- Add a file extension and save a web page.
- Validate a web page.

---

### Activity: Optimize and Validate
You will be working independently in groups of 3 or 4.

1. Clean up your code!
    - Is your code properly formatted?
    - Are there any dead ends or failed experiments that should be removed?
    - Are there better solutions to the problems you solved today?
    - Which of your solutions could be re-used for future projects?
2. Migrate your final Codepen code into an HTML file in VS Code. 
    1. Create a [blank HTML page](https://gist.github.com/acidtone/6871979b4f4b04375edb6312dcdba5b7) in VS Code and save it to:

        ```
        [sait-folder]/in-class/w2w/index.html (or similar)
        ```

    2. Copy your Codepen CSS to a `style` element in the `head` of your HTML document.
    3. Copy your Codepen HTML inside the `body` element of your HTML document. 
    4. View your file in Firefox using the VS Code Live Server extension. Does it look similar to the Codepen version?
3. Validate your HTML file using the [W3C Markup Validation Service](https://validator.w3.org/)
4. Validate your external CSS file using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

---

## Clean up time!

