---
layout: post
title: Scope and the Execution Stack
categories: cpnt262
---

## Homework
1. Watch: [Javascript the Weird Parts](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=3598s) @59:58 (you can stop at Dynamic Typing)
2. Asynchronous JS
    - Read:
        - [Asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
            - [General asynchronous programming concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
            - [Introducing asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
            - [Cooperative asynchronous Javascript: Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
    - [Asynchronous JavaScript in ~10 Minutes - Callbacks, Promises, and Async/Await](https://www.youtube.com/watch?v=670f71LTWpM) by James Quick
    - Optional Watch: [Asynchronous Callbacks](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=5855s) by Tony Alicea (you can stop at 1:48:00)

---

## Morning reflection
### Housekeeping
- Afternoon lecture?
- Dailies Shoutouts
  - Makayka and Shivani

---

## 1. Block scope
### Learning Objectives
- Define global and local scope.
- Demonstrate how `let` and `const` variables are block scoped.

### Terminology
Scope
: The current context of code, which determines the accessibility of variables to JavaScript. Global variables are those declared outside of a block. Local variables are those declared inside of a block.

Code Block
: Javascript that is surrounded by curly braces `{}` such as inside `if`/`else if`/`else`, loops and functions.

Block Scope
: `let` and `const` variables that are declared inside a code block are only available within that block. In other words, they are local variables.

### Materials
- MDN: [block scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

### Key Takeaways
- `let` and `const` variables are only available inside the code block that they are declared in.

---

## 2. Function scope and the Execution Stack
### Learning Objectives
- Review the Creation and Execution phases of the Javascript.
- Define function scope.
- Understand the First-in, Last-out nature of the Execution Stack.
- Demonstrate that variables are scoped to the function they are defined in.
- Understand how function inherit outside variables.

### Terminology
Global
: All code that is not inside a function.

Execution Context
: A wrapper to help manage the code that is running. The lexical environment that is currently running is managed via execution contexts.

Global Scope
: Variables that are available anywhere in your code (even inside functions).

Function Scope
: All variables defined inside a function are only available inside that function.

### Materials
- Review: [Stacks and Queues](https://sait-wbdv.github.io/winter-2021/cpnt262/array-methods-objects/#terminology)
- Gists: 
  - [Function Scope](https://gist.github.com/acidtone/7acba1de8552628fb10936bd843fa99e)
  - [Funception](https://gist.github.com/acidtone/f3176c2da93f6813fd3c64f0bd8dfe4f)

### Key Takeaways
- Functions inherit variables based on where that function is _defined_ lexically in your code, not where the function is _invoked_ in your code.

---

## 2. Asynchronous callbacks
### Learning Objectives
- Define single-threaded runtime environments.
- Define synchronous and asynchronous execution.
- Understand the First-in, First-out nature of the Event Queue.
- Demonstrate how the Event Queue is involved in asynchronous code execution.

### Terminology
Single threaded
: One statement is executed at a time. Javascript is single threaded. Many other languages are not.

Synchrounous
: One at a time. 

Asynchrounous
: More than one at a time.

Callback function
: A function passed to another function as a value, presumably to be invoked later.

### Materials
- Gist: [Asynchronous callbacks](https://gist.github.com/acidtone/fb7c13d8253ad575c9775e75c2db44b9)

### Key Takeaways
- Synchronous functions are executed when the original script is executed.
- Asynchronous functions are executed after the original script has finished. Instead:
    1. The function is added to the Event Queue after a specified event happens;
    2. The Event Queue is executed in order by the Javascript engine;
    3. The asynchronous function is _then_ executed when it's next in line. This often happens long after the original script has finished.

---

## Open lab-time
- If we have time...

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.