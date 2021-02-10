---
layout: post
title: Javascript Introduction
categories: cpnt262
---

## Homework
- Javascript Fundamentals
  - MDN Textbook
    - Read: [Javascript - Dynamic client-side scripting](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
      - Read: [Javascript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
        - Read: [What is Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
        - Read: [A first splash into Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
        - Read: [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
        - Read: [Storing the information you need - variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
        - Skim: [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
        - Skim: [Handling text - strings in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
  - Watch: [JavaScript Tutorial for Beginners](https://youtu.be/W6NZfCO5SIk) by [Mosh Hamedani](https://codewithmosh.com/)
    - This is an excellent overview of the starter JS concepts you'll need for the rest of this course.
    - There is a handy Table of Contents in the video description.
- DOM
  - Skim: [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - Skim: ['Element.classList'](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    - [dot notation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
    - [Code Examples](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Examples)
  - Skim: [`Element.addEventListener()'](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


---

{% comment %}

## Morning reflection
### Housekeeping

---

## 1. Hello Dobby
### Learning Objectives
- Review the [origin and history of Javascript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript).
  - Define the Javascript run-time environment.
    - [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)): Chrome and Node
    - [Spider Monkey](https://en.wikipedia.org/wiki/SpiderMonkey): Firefox
  - Define the [`window` object](https://developer.mozilla.org/en-US/docs/Web/API/Window).
  - Review the role of the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
- Locate and display the browser [Javascript Console](https://balsamiq.com/support/faqs/browserconsole/).
  - Identify syntax errors in the Javascript Console.
  - Log messages and values to the Console using `console.log()`.
- Discuss common `window` object properties.
  - `innerWidth` (aka. `window.innerHeight`)
  - `innerHeight` (aka. `window.innerWidth`)
- Understand [Javascript coding conventions](https://www.w3schools.com/js/js_conventions.asp).

### Materials
- Firefox Console

### Terminology
API (Application Programming Interface)
: 

### Key Takeaways

---

## 2. CSS Toggle Walk-through
### Learning Objectives
- Define the [`document` object](https://developer.mozilla.org/en-US/docs/Web/API/Document).
  - Review common HTML page anatomy in terms of Javascript.
    - `<script>` before `</body>`
    - `<script>` in `<head>`
    - Embedded JS vs external
  - DOM and source order
- Access the features of a [DOM Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) using dot notation in the Console.
  - Examples:
    - [`element.className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
    - [`element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- Discuss the concept of Javascript Events.
  - CSS Toggle Example: `click` vs `mouseover`.

### Materials
- Search: [window vs document vs dom](https://www.google.com/search?q=window+vs+document+vs+dom)
- [Code Challenge - CSS Toggles with element.classList](http://browsertherapy.com/challenges/css-toggles-with-classlist/)

### Terminology
DOM Object
: Pre-build Javascript objects that extend the functionality of Javascript by providing an interface for controlling the Document Object Model.

Object property
: A Javascript variable that exists inside an object.

Object method
: A Javascript function that exists inside an object.

### Key Takeaways


---

## Open lab-time

---

### Tony's goals for Lab-Time

---
{% endcomment %}

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.