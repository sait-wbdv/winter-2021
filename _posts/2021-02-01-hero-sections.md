---
layout: post
title: Hero Sections
categories: cpnt260
---

## Homework
1. Review
    - [Document and Website Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
2. CSS Images
    - Read: [Backgrounds and Borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
    - Skim: [Linear Gradients](https://css-tricks.com/css3-gradients/)
3. Full Viewport Containers 
    - Watch: [Introduction to Viewport Units](https://youtu.be/_sgF8I-Q1Gs)
4. Sample code
    - [Tissue Contrast Illusion](http://browsertherapy.com/challenges/tissue-contrast/)
        - Objectives 1 and 2 cover the code we'll need for a basic hero section.
        - Objective 3 comes in handy for mobile menus.

---

{% comment %}

## Morning reflection
### Housekeeping
1. [CPNT 260 Assignment 4](https://github.com/sait-wbdv/assessments/tree/master/cpnt260/assignment-4)
2. DSGN 270 Marks Published
3. Preliminary feedback on 260 Assignment 1:
    - **Code Quality**
        1. Validation
            1. Broken root HTML structure. See [Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document)
            2. Significant syntax errors.
            3. Minor-moderate syntax errors.
        2. [File structure](https://sait-wbdv.github.io/cheatsheets/naming-conventions/#file-naming-conventionsguidelines)
            1. HTML page should be named `index.html`
            2. External css files should be in a `css` directory.
            3. Your images should be in a dedicated `images` directory.
        3. Indentation and Organization
            1. Indent should be 2 spaces. You can change this in your code editor preferences/settings.
            2. Nested code blocks should be indented.
            3. CSS declarations should be organized by category (box model, fonts, borders, flex, etc), separated by a space.
    - **Project Documentation**
        1. README file. Note: many of you didn't include one and I should have been more explicit. I removed a maximum of one point for missing READMEs to be fair to those that created one. Suggested information for a README:
            1. Course code and title
            2. Assignment title
            3. GH Pages link
            4. Attributions
        2. Code comments
            1. General reminders for yourself and hints for new developers working on your project.
            2. Description of obstacles you encountered during the project, theories on the nature of the problem and possible solutions.

---

## 1. Full-viewport containers and centering
### Learning Objectives
- Create a full viewport container using `min-height` and viewport units.
- Centre an element in the viewport.
- Use `background-image` and gradients to create a split background.
- Spice things up with `background-blend-mode` and transparency.

### Materials
- [Tissue Contrast Illusion](http://browsertherapy.com/challenges/tissue-contrast/)
- Examples: 
  - [Hero section with multiple gradients](https://codepen.io/browsertherapy/pen/ExKGBMg)
  - [Vertical Split](https://codepen.io/browsertherapy/pen/eYOXpWK)

### Key Takeaways
- By default, empty block-level elements are `0px` tall (not including `border`).
- Before you can center an element in the viewport, a largish `height` (or `min-height`) must be set on the container to add vertical space.
- Mobile viewport units are a lie! The disappearing address bar on mobile browsers create a scroll bar if `height` is set to `100vh`. To be safe, set `min-height` to `85vh` on mobile (for now). Search: "[viewport units on mobile](https://www.google.com/search?q=viewport+units+on+mobile)" for more details.

---

## 2. Live-code example: Definition slide

---

## Open lab-time
Find an example of a hero section online that you think you can duplicate.
- Given the layout of the hero section, what should the underlying elements look like?
- If a `background-image` is needed, what element should it be applied to?
- What should the hero section look like on mobile?

### Tony's goals for Lab-Time
- Integrate [Work-in-progress](https://codepen.io/acidtone/pen/PoGMmyO) layout modifications into main program website.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.

{% endcomment %}