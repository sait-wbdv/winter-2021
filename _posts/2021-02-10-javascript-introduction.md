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

## Morning reflection
### Housekeeping
- Course agenda
- Assignment Schedule
- Poll: How's your Javascript?

---
## Terminology
Global
: All code that is not inside a function.

Global Execution Context
: The environment that is available everywhere in your app.

Lexical Environment
: Where something sits physically in the code you write. In Javascript, *where* you write your code is important

Syntax Parser
: A program that reads your code and determines what it does and if its grammar is valid

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
- Discuss examples of `window` object properties.
  - `innerWidth` (aka. `window.innerHeight`)
  - `innerHeight` (aka. `window.innerWidth`)
- Understand [Javascript coding conventions](https://www.w3schools.com/js/js_conventions.asp).

### Materials
- Firefox Console

### Key Takeaways
- 90% of Javascript is using the DOM API. The rest is actually programming in JS.
- `console.log()` and or the Console should be your first step when debugging your code.
- Get used to looking up DOM objects in the MDN.
- The Codepen console is a little clunky. Open your scripts in Debug Mode and open the normal Console from there.

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

### Key Takeaways
- Pay attention to indentation. It tells you a lot about when and how JS code will execute.
- The DOM needs to load before you can access its objects. For now, embed or link your code at the bottom of your page, just before the `</body>` tag. We'll eventually move your code to the `<head>` of you HTML documents.
- Get used to seeing code you don't immediately understand. Start with the bits you _do_ understand; we'll cover the mystery bits as the course progresses.

---

## Open lab-time
### Activities
1. Free Code Camp exercise
2. Read: [A first splash into Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
3. Test your skills: [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables)


---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.