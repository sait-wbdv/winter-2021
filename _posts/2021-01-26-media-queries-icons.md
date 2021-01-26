---
layout: post
title: Media Queries and Icons
categories: cpnt260
---

## Housekeeping
- [CPNT 260 Assignment 2](https://github.com/sait-wbdv/assessments/tree/master/cpnt260/assignment-2)

## Homework
1. Media Queries
    - Read: [Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
    - Read: [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) by MDN
2. Mobile-first design
    - Definition: [Mobile-first design](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First)
    - Watch: The first 10 minutes of [Are you writing responsive CSS the wrong way?](https://youtu.be/0ohtVzCSHqs) by Kevin Powell
    - Reference: [Popular screen resolutions](https://mediag.com/blog/popular-screen-resolutions-designing-for-all/)
3. Specificity
    - MDN: [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
    - Tool: [Specificity Calculator](https://specificity.keegan.st/)
4. Icons
    - Read: [Font Awesome - Basic Use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)
    - Reference: [CDNJS](https://en.wikipedia.org/wiki/Cdnjs)
        - [Font Awesome on CDNJS](https://cdnjs.com/libraries/font-awesome)
5. Progressive Enhancement
    - Watch: [Introduction to Resilient CSS – Part 1 of 7](https://youtu.be/u00FY9vADfQ)
    - Watch: [The Secrets of ‘Can I Use’ – Resilient CSS Part 2 of 7](https://youtu.be/WM_cKHH7bZ0)
    - Watch: [How Browsers Handle Errors in CSS – Resilient CSS Part 3 of 7](https://youtu.be/NJjlzxud4_M)
    
---

## 1. Media queries
### Learning Objectives
1. Distinguish between mobile-first and desktop-first design patterns.
2. Inspect the Cascade using the Rules tab in Developer Tools.
3. Discuss the purpose and function of media queries.
3. Declare conditional styles using `max-width`.
4. Declare conditional styles using `min-width`.
5. Declare conditional styles using `orientation`.
6. Declare conditional styles using `min-aspect-ratio` and `max-aspect-ratio`.

### Materials
- Gist: [Desktop-first: `max-width`](https://gist.github.com/acidtone/0f9c31e820f29511fc2671063fd71c58)
- Gist: [Mobile-first: `min-width`](https://gist.github.com/acidtone/8b22888818aa6f81653ab0858ad4c418)
- Gist: [Mobile-first: `orientation`](https://gist.github.com/acidtone/6aeb476a3c9bbc9788ce1ebc958b98d1)
- Gist: [Squarish screens: `aspect-ratio`](https://gist.github.com/acidtone/a361a7a765fedead8e35db1ce698658b)

### Key Takeaways
1. Use media queries as a last resort. Flexbox and CSS Grid have responsivene features built-in that now replace many of the use cases for media queries.
2. Media queries are positioned below your other declarations so that they will tend to override those styles.
3. Position medium-width queries in order of progressing screen width width. Otherwise, some declarations may never trigger.
    - For mobile first: default -> medium -> large
    - For desktop first: default -> medium -> small 
4. Although it's optional, it's good practice to include a media type (ex. screen) for each media query in the form:

    ```css
    @media media-type and (media-feature-rule) {
      /* Styles here */

    }
    ```
    
5. Instead of targeting common device widths (there are too many devices for this to be effective), change the design at the size where the content starts to break in some way. 
6. Treat layout as an enhancement and aim for a mobile-first design. Start with a simple, single-column design that works for mobile and _then_ begin adding layout features in your media queries for larger screens.
7. Try using relative widths (`em`, `rem`, `ch`, etc) instead of pixels. This avoids issues with devices that are zoomed in and keeps you focused on your design, not devices.
8. Avoid using these deprecated media features:
    - `device-aspect-ratio`
    - `device-height`
    - `device-width`

---

## 2. Font Awesome and CDNJS
There are a few options available for using Font Awesome. A popular option is to use CDNJS:
1. Go to the [Font Awesome library on CDNJS](https://cdnjs.com/libraries/font-awesome).
2. Copy the top link that ends in `.../css/all.min.css` (or use a subset if that's all you need).
3. Link to this library using a `link` element in the `head` of your document:

    ```
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    ```
4. See [Font Awesome - Basic Use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for details on how to use FA icons in your pages.

---

## Activities
### 1. Basic responsive navigation
Refactor your Flexbox navigation from yesterday to make it responsive.
1. Using a mobile-first method, create a default vertical navigation that will work on mobile devices.
2. Using a media query for larger screens, make your navigation horizontal. Choose a screen width that makes sense for the width of your navigation.

### 2. Advanced: Hamburger icons
Refactor your responsive nav above to incorporate a hamburger menu:
1. Using a mobile-first method, hide your vertical menu (`display: none` is easiest, but a popular alternative is to place it off the page with [absolute positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)) and replace it with a hamburger menu icon.
2. Using your media query, replace the hamburger menu icon with your horizontal menu.
3. Using the [checkbox hack](https://css-tricks.com/the-checkbox-hack/) use CSS to show/hide your vertical menu when the hamburger icon is checked/unchecked.

### 3. Test your skills
- MDN: [Media Queries and Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/rwd_skills)
- Note: Flexbox and/or CSS Grid knowledge will be helpful with this exercise.

---

## Clean-up Time!
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.