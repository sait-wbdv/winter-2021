---
layout: page
title: "Responsive Fundamentals"
---

## Key Takeaway: Responsive layout is all about width.
Horizontal scroll bars should be avoided in most circumstances.Since screen widths will vary from `400px` to at least `2000px`, this constraint leads to a number of common design patterns:

### Text Line length
Text is most readable at line lengths between 30 and 90 characters long. **This should be a priority** when planning out a design (also see [readable text]({{site.baseurl}}/cheatsheets/web-typography)).
- Font-size should be smaller on mobile screens to ensure a line length of at least 30 characters.
- Text boxes should have a maximum width set, in order to prevent line lengths of more than 90 characters.
- Given their larger `font-size`, multi-line headings are often readable at lengths shorter than 30 characters.

### Layout
Responsive content often follows the [card pattern](https://www.google.com/search?q=ux+card+pattern) in order to simplify the layouts required for varying screen widths.
- An image will often scale to fit the width of its parent container (which could be a card or an entire column on a page).
- When a row of multiple cards or images are too wide for the screen, they will wrap and create more rows.
- In general, layouts and galleries will be a single column on mobile and multiple columns at larger screen widths.
- To accomodate very large screen widths, (`2000px` or larger) page of content will often reach a maximum width and distribute extra negative space equally on either side of the page.

### Navigation
It's imperative that page navigation is not compromized at any screen width. When a screen is too narrow for a horizontal navigation menu, it will usually either:
- become a veritical navigation menu, or
- be replaced by a hamburger menu that will toggle a vertical navigation menu.
