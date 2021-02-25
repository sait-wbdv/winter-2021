---
layout: post
title: Array Loops with Array.prototype.forEach()
categories: cpnt262
---

## Homework
1. Review
    - [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
    - [Common Array Operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. Loops
    - Read: [Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
    - Read: [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    - Watch: [JavaScript Array forEach Method](https://youtu.be/159EAISAxwg) by Steve Griffith    
    - Watch: [`for` Loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) by Mosh Hamedani
3. Manipulating Documents
    - Review: [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
    - Reference: [Addition assignment (`+=`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
    - Skim: [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
    - Reference: [`<template>`: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

---
{% comment %}

## Morning reflection
### Housekeeping

---
{% endcomment %}

## 1. Basic Loops with `forEach()`
### Learning Objectives
- Review the concept of callback functions.
- Review the process of outputting an HTML list using `Array.prototype.join()`.
- Understand and predict the behaviour of a [`.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) loop.
  - Loop through an array using `.forEach()` and output each item to the console.
- Use the VS Code Debug panel to visualize a `forEach()` loop.
- Understand the syntax and purpose of the addition assignment operator.
  - Output a list of nouns as an HTML list using the addition assignment operator (`+=`).

### Terminology
Iteration
: The same procedure repeated multiple times.

Append
: Concatenate to the end of a thing. In this case add to the end of an existing string.

### Materials
- [Sample Arrays](https://github.com/sait-wbdv/sample-code/tree/master/assets/js)
- Gist: [Basic `.forEach()` loop](https://gist.github.com/acidtone/aca3574779b81c3ec6d19e3d075fb3ed)
- Codepen:
  - Review: [Example: Outputing an HTML list with .`join()`](https://codepen.io/acidtone/pen/PobmaeM)
  - [Example: Outputing an HTML list with `.forEach()`](https://codepen.io/acidtone/pen/BaQJqvY)

### Key Takeaways
- `item` is the conventional name given to the array item passed to the callback function but you can name it whatever you want (i.e. `noun` if you're looping an array of nouns).
- You can optionally add the `index` (of the current iteration) as a second argument to the callback function.

### Activities
1. Using the [`terminology.js`](https://github.com/sait-wbdv/sample-code/blob/master/assets/js/terminology.mjs) sample array, output an array of objects to an HTML definition list.
2. Assignment 2

---

## 2. Classic Loops with `for`
### Learning Objectives
- Understand and predict the behaviour of a `for` loop.
- Define the initialization, condition and increment stages of the `for` loop.
- Write a `for` loop that:
  - logs the numbers 1 to 100 to the console.
  - iterates through every element in an array.
  - outputs a list of nouns to an HTML page.

### Terminology
Initializer
: This expression usually creates one or more loop counters, but the syntax allows an expression of any degree of complexity.

Condition
: If the value of condition expression is true, the loop iteration executes. If the value of condition is false, the loop terminates.

Increment
: The loop counter increments. This expression is usually `i++` but the syntax allows an expression of any degree of complexity. 

### Materials
- Gist: [1-to-100 with a `for` loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)
- Practical example: [Tony's Name Generator](https://acidtone.github.io/namor/)
  - [method call](https://github.com/acidtone/namor/blob/master/js/app.mjs#L16)
  - [`for` loop code](https://github.com/acidtone/namor/blob/master/js/phraser.mjs#L11-13)

### Key Takeaways
**Danger**: It's possible to create an infinite loop if the `condition` always evaluates to `true`. This will probably crash/hang your browser.
{: .notice .notice--danger }
- Be careful not to switch the `condition` and `increment` conditions as this will create an infinite loop.
- To loop through an array with `for`:

    ```js
    for(let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
    ```

### Activities
1. Instead of a `.forEach()` loop, output the list of nouns from earlier using a `for` loop.
2. Classic interview question: **FizzBuzz** - using a `for` loop, print a series of numbers from 1 to 100 such that:
    - if the number is divisible by 3, print 'Fizz';
    - if the number is divisible by 5, print 'Buzz';
    - if the number is divisible by both 3 and 5, print 'FizzBuzz';
    - otherwise, print the number.

---

## Open lab-time
1. See the activities above
2. Assignments and readings
3. Experiments for the portfolio

---

### Tony's goals for Lab-Time
- More gists!

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.