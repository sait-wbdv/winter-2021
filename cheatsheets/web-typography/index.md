---
layout: page
title: "Web Typography"
---

## Readable Text
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

