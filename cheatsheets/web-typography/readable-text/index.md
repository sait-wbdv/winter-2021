---
layout: page
title: "Readable Text"
---

## Typography Triad
Readable text is a balance of the following fundamental characteristics of typography:

### 1. [Font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) 
  - The base font size is often declared in `px` units on the parent `body` element. 
  - Derivative font sizes (such as for headings, navigation, etc) are usually declared on their respective elements (`h1`, `nav`, etc) in either `em` or `rem` units.
  - The default font size in most browsers is `16px`.

### 2. [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
`line height` is generally defined as a ratio of `font-size`. For example, if `line-height` is 1.5 and `font-size` is 16px, the actual calculated line height will be `24px` and `4px` of spacing will be added above and below the line.
- "Proper" line height greatly depends on a lot of factors such as:
  - The font family being used;
  - Font size and line length;
  - The contrast ratio of the text to its background.
- The default for most browsers is 1.2, which is too small in most cases.
- In general, aim for a line length between 1.5 and 2.

### 3. Line length
Line length 
- Max line length for print: 95 [characters](https://css-tricks.com/the-lengths-of-css/#ch)
- Max line length for web: 75-85 characters
- Min (multi)line length for web: ~30 characters

---

## Contrast ratio
The color contrast between background and foreground content (that is, usually text) should be great enough to ensure legibility.

When designing readable interfaces for different vision capabilities, the WCAG guidelines recommend the [following contrast ratios](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast).

### Determining contrast ratio
1. Tony's fave [contrast ratio checker](https://contrast-ratio.com/)
2. Firefox Inspector
    1. Right-click and inspect an element with text;
    2. Under `Rules`, find the color declaration of the text;
    3. Click on the color swatch. An info window will pop up listing:
        - The calculated contrast ratio;
        - The WCAG rating (AA or AAA);
        - Wether or not the rating is for large text.
