---
layout: post
title: Callbacks and Event Listeners
categories: cpnt262
---

## Homework
1. Variable Handling
    - Reference: [Default parameter values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
    - Reference: [Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
    - Reference: [Logical OR assignment (||=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
2. Callback Functions
    - Read: [What are Callbacks in JS and How to Use Them](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/) by Free Code Camp
3. Events and Listeners
    - Read: [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
    - Read: [Element.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
    - Watch: [Introduction to JavaScript Event Listeners](https://youtu.be/EaRrmOtPYTM) by Steve Griffith
    - Reference: [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

---
## Morning reflection
### Housekeeping
- Volunteers: function mentors

---

## 1. Demo: Tip Calculator
### Learning Objectives
- Discuss the need to test for falsy, `undefined` and `null` values.
- Test for [`falsy`](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values with [logical OR assignment (||=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- Test for `null` or `undefined` values with the [nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- Test for `undefined` parameters [default parameter values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Materials
- [Tip Calculator Starter](https://github.com/sait-wbdv/in-class/blob/main/w7w/tip-calculator/)

### Key Takeaways
- The key goal is to fail gracefully and (among other things) avoid printing/using a variable that is `undefined`, `null` or empty.
- Use `??=` to allow zero (`0`) as a value for arithmetic functions.

### Activities
1. Research: 
    - How to test for an empty array?
    - How to test for an empty object?
    - How do utility libraries like [Lodash](https://lodash.com/) or [underscore](https://underscorejs.org/) test for emptiness?

---

## 2. Callback functions
### Learning Objectives
1. Understand the difference between invoking a function and passing a function as a value.
2. Define callback function.
3. Define anonymous function.
4. Create a `greet` function that accepts a function as a parameter.
5. Pass an anonymous callback function using a function expression. 

### Terminology
Callback Function
: A function passed to another function, presumably to be invoked later.

Anonymous Function
: A function expression passed as a value with no name. This is how callback functions are often created.

### Materials
- Gists:
  - [Callback Functions](https://gist.github.com/acidtone/79cb54c90249b1d925dce3c2de45fdaf)
  - Example: [`greet` callback function](https://gist.github.com/acidtone/cf53fd8eac01a7a41fce234b8e66d3d6)

### Key Takeaways
- The callback function is a general programming _pattern_ that's possible with first-class functions. There are many use cases in JS such as event emitters, array/object sorting, looping, etc.
- If a function is only passed as a value once in your code, it's often better to pass it as an anonymous function so that your code is in the same lexical location.

---

## 3. Handling events and event objects
### Learning Objectives
- Discuss Javascript events in terms of callback functions.
- Log an event object to the console and inspect it.
- Discuss [event capturing and bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture).

### Materials
- [CSS Toggles](http://browsertherapy.com/challenges/css-toggles-with-classlist/)
- [Colour Sliders](http://browsertherapy.com/challenges/colour-sliders-css-variables/)

### Activities
1. Log [different event objects](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing) to the console and inspect them. 
    - How are the events triggered?
    - What are common properties and methods common to each event? Which are different?
2. Integrate an event you've never used before into a project. For example, can you modify a CSS Variable with the scroll wheel?

---

## Lab-time!
1. See the activities above
2. Assignments and readings
3. Experiments for the portfolio

---

### Tony's goals for Lab-Time
- Convert tip calculator starter and finished to Gist
- Create Gist for falsy/null/undefined testing

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.