---
layout: post
title: Flexbox patterns
categories: cpnt260
---

## Homework
1. Review
    - Read: [Designing Card-Based User Interfaces](https://www.smashingmagazine.com/2016/10/designing-card-based-user-interfaces/)
    - Watch: [Flexbox design patterns you can use in your projects](https://www.youtube.com/watch?v=vQAvjof1oe4) by Kevin Powell. This one of Kevin's latest video on Flexbox.
2. Cards
    - MDN: [CSS Layout cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook)
    - MDN: [Cards](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card)
3. CSS Grid
    - Read: [Grid by Example](https://gridbyexample.com)
    - Reference: 
        - [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
    - Watch the following videos on Grid by Example:
        - [Defining a Grid](https://gridbyexample.com/video/series-define-a-grid/)
        - [The `fr` unit](https://gridbyexample.com/video/series-the-fr-unit/)
        - [Repeat Notation](https://gridbyexample.com/video/series-repeat/)
        - [Introducing minmax()](https://gridbyexample.com/video/series-minmax/)
    - Game: [CSS Grid Garden](https://cssgridgarden.com/)
4. Fast Layouts
    - Watch: [Build a Classic Layout FAST in CSS Grid](https://youtu.be/KOvGeFUHAC0) by Miriam Suzanne
    - Watch: [Incredibly Easy Layouts with CSS Grid](https://youtu.be/tFKrK4eAiUQ) by Jenn Simmons
    - Watch: [Using Flexbox + CSS Grid Together: Easy Gallery Layout](https://youtu.be/dQHtT47eH0M) by Jenn Simmons

---

## Morning reflection
### Housekeeping
1. Dailies Feedback
    - selectors in `@media` blocks
    - pruning and optimizing code
    - The Coding Lifecycle
        1. Understand the problem
        2. Plan it out
        3. Brute force a solution
        4. Walk-through
        5. Optimize
        6. Clean-up and prep
2. Schedule changes
    - Assignment due dates
    - Pushed to Monday: Hero sections
    - Friday: ???
3. Saturday plans?


---

## Lecture/Live code
### Learning Objectives
- Demonstrate the relationship between `flex-grow`, `flex-shrink` and `flex-basis`.
- Understand the default settings for flex items.
- Understand common shorthand declarations for `flex`.
- Explore common Flex layout patterns.

### Terms
flex-basis
: The optimum size of a Flex item along the main axis.

- `auto`: uses the size of its content

flex-grow
: If there is extra space in the container, does the item grow? 

- `0`: no; 
- `1`: yes;
- `<number>`: the item takes its share (of the container `flex-grow` total) of extra space.

flex-shrink
: If there isn't enough space in the container, does the item shrink? 

- `0`: no; 
- `1`: yes;
- `<number>`: the item gives its share (of the container `flex-shrink` total) of needed space.

### Materials

<p class="codepen" data-height="370" data-theme-id="light" data-default-tab="result" data-user="acidtone" data-slug-hash="ZEpgMGL" style="height: 370px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox patterns">
  <span>See the Pen <a href="https://codepen.io/acidtone/pen/ZEpgMGL">
  Flexbox patterns</a> by Tony Grimes (<a href="https://codepen.io/acidtone">@acidtone</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

- Gist: [Default item settings and defaults](https://gist.github.com/acidtone/c7103937a432c3dbb94a96debf1dbeb8)
- Gist: [Even Columns](https://gist.github.com/acidtone/5f493cac57f8b8a5485558bfab45dffe)
- Gist: Grid-ish
- Gist: Content/Sidebar

### Key Takeaways
- `flex-grow` and `flex-shrink` are relative to `flex-basis`.
- `flex-basis: auto` defaults to the content size.
- `flex-basis` is overridden by:
  - row: `width`, `min-width` and `max-width`
  - column: `height`, `min-height` and `max-height`
- It's best practice to declare the size of an item "the Flex Way" and use `flex-basis` instead of `width` or `height`.
- `min-width`/`min-height` and `max-width`/`max-height` are excellent ways to customize common patterns for your needs, :
  - applied directly to a flex item, or
  - applied to an flex item's content

---

## WBDV Library refactor
### Session Goals
Move side content to a responsive sidebar:
1. Understand the problem
2. Plan it out
3. Brute force a solution

---

## Open lab-time
- Start with the [default flex shortcuts](https://gist.github.com/acidtone/c7103937a432c3dbb94a96debf1dbeb8).

### Tony's goals
- Assignment 3 first draft
- Deploy WBDV v0.2
  - notices
  - page nav
  - update media query primary nav

## Activities
### 1. MDN: Test your skills
- [Structuring a page of content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
- [Media Queries and Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/rwd_skills)

### 2. Pattern recognition
1. Re-imagine a section of a personal project, assignment, etc in terms of Flexbox layout.
2. Choose one of the patterns covered today, copy the gist to your own project/codepen/in-class.
3. Using your new knowledge of `flex-basis`, `flex-grow` and `flex-shink` customize the pattern to fit your layout requirements.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.