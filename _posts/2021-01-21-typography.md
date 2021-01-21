---
layout: post
title: Typography
categories: cpnt260
---

## Housekeeping
1. Recommendations from Dailies
2. Tool Time: Can I Use?


## Homework
1. Review
    - [Responsive Design Cheatsheet]({{site.baseurl}}/cheatsheets/responsive-design/)
2. Tool Time
    - Watch: [Inspecting the CSS Cascade using Firefox DevTools](https://youtu.be/Sp9ZfSvpf7A)
    - Reference: [CDNJS](https://en.wikipedia.org/wiki/Cdnjs)
3. Web Typography
    - Read: [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
    - Find some favourite Google Fonts for your text
        - Search: [best google font combinations](https://www.google.com/search?q=best+google+font+combinations)
        - [Google Fonts](https://fonts.google.com/)
4. Fluid Typography
    - Skim: [Fluid Typography](https://css-tricks.com/simplified-fluid-typography/) on CSS Tricks
    - Watch: The first 16 minutes of [Beyond Media Queries](https://vimeo.com/235428198) by Michael Riethmuller (you can stop at _Solving Problems with calc()_)
5. Icon fonts and HTML Entities
    - Read: [HTML Entities](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_Including_special_characters_in_HTML)
    - Reference: [List of XML and HTML character entity references](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)
    - Read: [Font Awesome - Basic Use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)
    - Advanced: Font Awesome using pseudo-elements
        - Read: The pseudo-elements section of [Pseudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
        - Watch: [Before and After pseudo elements explained](https://youtu.be/zGiirUiWslI)
        - Watch: [Setting up Font Awesome icons as pseudo-elements](https://youtu.be/lMBa7gLWyO4)
6. Units
    - [em, rem and ch units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Relative_length_units)
    - [Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by Jeremy Church
    - [Why you shouldn't set font-sizes using em](https://youtu.be/pautqDqa54I) by Kevin Powell

---

## 1. Font fallbacks and overrides
### Terms
Inheritance
: When CSS property values set on parent elements are inherited by their child elements. Most font settings are inherited.

Fallback
: A default setting or configuration that activates when a CSS declaration fails.

CSS Override
: A aspect of the cascade where a previous CSS declaration is overwritten by another that has higher priority/specificity.

### Materials
- MDN: [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Web Typography Cheatsheet]({{site.baseurl}}/cheatsheets/web-typography)

---

## 2. Readable Text
### Materials
- [Readable Text Cheatsheet]({{site.baseurl}}/cheatsheets/web-typography/readable-text)

---

## 3. Font-based units
### Materials
- [Units Cheatsheet]({{site.baseurl}}/cheatsheets/units)

---

## Activities
### Font-family pairings
In groups of 3-4, create two to three font pairings using Google Fonts with system and generic families as fallbacks. See [Web Typography Cheatsheet]({{site.baseurl}}/cheatsheets/web-typography).
1. Create a css file that embeds your favourite [google font pairing](https://www.google.com/search?q=best+google+font+combinations) using the `@import` rule:

    ```
    @import url('https://fonts.googleapis.com/css2?family=Karla&family=Raleway:wght@300;400&display=swap');
    ```

2. Declare your main body text font family using the `font-family` declaration and a type selector on the `body` tag. Include settings for `line-height` (default is `1.2`; try for `1.5`-`2`) and increase the `font-size` to something larger than `16px` (the default on most browsers):

    ```
    body {
      font-family: 'Karla', sans-serif;
      font-size: 18px;
      line-height: 1.6;
    }
    ```

3. Declare a secondary font on your headings using a group selector:
    
    ```
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;

      /* Sometimes needed, depending on the font that you ebmedded. */
      font-weight: 300; 
    }
    ```

4. Add fallbacks for system fonts. See [Web-safe Font Stacks](https://codepen.io/browsertherapy/pen/eYNmYQP).
5. Level-up: Add visual hierarchy to your headings with one of more of the following "fancy" declarations:
    - `font-variant`
    - `word-spacing`
    - `letter-spacing`
    - `initial-letter`
        - Note: this declaration has limited browser support at this time.
6. Level-up: How big can you go? Refer back to the [Visual Hierarchy Cheatsheet]({{site.baseurl}}/cheatsheets/design/visual-hierarchy). How can you use typography and box model declarations to replicate some of these examples of visual hierarchy?
7. Level-up: [Style a blockquote with pseudo-elements](https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/)
8. Level-up: [Customize your list styling](https://css-tricks.com/almanac/properties/l/list-style/)
9. Level-up: Add [HTML Entities](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_Including_special_characters_in_HTML) to your document.
    - Reference: [List of XML and HTML character entity references](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)
10. Level-up: Try adding [Font Awesome Icons](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use). Hint: it's often easier to embed FA using [CDNJS](https://cdnjs.com/libraries/font-awesome).

---

## Cleanup Time
- Submit today's Codepen to the Dailies section (in Assessments) in Brightspace.


