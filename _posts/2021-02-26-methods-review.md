---
layout: post
title: Function as object methods
categories: cpnt262
---

## Homework
1. Asynchronous JS
    - Read:
        - [Asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
            - [General asynchronous programming concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
            - [Introducing asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
            - [Cooperative asynchronous Javascript: Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
            - [Graceful asynchronous programming with Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
    - Optional Watch: [Asynchronous Callbacks](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=5855s) by Tony Alicea (you can stop at 1:48:00)
2. JSON
    - Read: [Working with JSON data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
    - Tool: [JSON Placeholder](https://jsonplaceholder.typicode.com/)
3. `fetch()`
    - Read: [Fetching data from the server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
    - Read: [How to use Fetch API for CRUD operations](https://dev.to/duhbhavesh/how-to-use-fetch-api-for-crud-operations-57a0) on dev.to
    - Reference: [Create, read, update and delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) on Wikipedia
4. Reference
    - [List of Public APIs](https://github.com/public-apis/public-apis)

---

## Morning reflection
### Housekeeping
1. Assignment 3 Cancelled
2. CPNT 262 Assignment Review

---

## 1. FizzBuzz walkthrough
### Learning Objectives
- Review conditional statements: `if`/`else`/`else if`.
- Review arithmetic operators.
- Test if a value is an integer.

### Materials
- Gist starter: [Print 1-to-100 with a for Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)

### Key Takeaways
- There are usually many ways to solve a problem.

---

## 2. Functions as methods
### Learning Objectives
- Review object literals and how to [initialize objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#creating_objects).
- Demonstrate `this` in the context of objects.
- Refactor Tuesday's Greeter function into an object.
  - Create an object method using an object literal and function expressions.

### Terminology
Object
: A collection of name/value pairs (in terms of Javascript)

Object Literal
: An object _literally_ coded using proper object notation.

Object Property
: A fancy term for a name/value pair where the _value_ is anything but a function.

Object Method
: A fancy term for name/value pair where the _value_ is a function.

`this` (for methods)
: When inside a method (a function that's the property of an object), `this` is a keyword that refers to the parent object.

### Materials
- MDN: [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- Starter: [Greeter](https://github.com/sait-wbdv/in-class/tree/main/w7f/1-greeter-starter)

### Key Takeaways
- Avoid the use of `this` unless you're working within a method (and not even inside a function inside a method). Outside of a method, [`this` is a big bag of hurt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

---

## Open lab-time
- Pick out a problem in the WBDV course website (that you think you can fix) and post an Issue about it. You will later fix this issue and create a Pull Request for CPNT 201 Assignment 4.

---

### Tony's goals for Lab-Time
- Coding process gist for [tomorrow's Hackathon](https://www.meetup.com/Software-Developers-Learning-Together/events/276074166/).

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.