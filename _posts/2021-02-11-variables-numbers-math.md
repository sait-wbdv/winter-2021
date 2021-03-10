---
layout: post
title: Variables, Numbers and Math
categories: cpnt262
---

## Homework
1. Errors
    - Read: [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
2. Variables
    - Read: [Storing the information you need - variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
    - Read: [Assignment (=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)
    - Read: [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
    - Read: [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
3. Arithmetic Operators
    - Read: [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
4. Strings
    - Read: [Handling text - strings in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
5. Forms
    - Reference: [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)
    - Reference: [Number Field](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types#numeric_field)
    - Reference: [Submit buttons](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)


---

## Morning reflection
### Housekeeping
- Added forms "homework"
- Assignment 1 announced tomorrow.

---

## 1. Variable Declaration vs Assignment
### Learning Objectives
- Define the difference between [syntax vs logic errors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong).
- Discuss the Creation and Execution phases in Javascript.
  - Define the global object.
- Compare and contrast the "strict" vs "sloppy" modes of Javascript.
- Illustrate the difference between variable declaration and assignment.
  - Demonstrate the [assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) (`=`).
  - Demonstrate the difference between [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) when declaring variables.
- Define the primitive value types.
  - Define the difference between `undefined` and `null`.
  - Discuss the difference between "_x_ not defined" and `undefined`.

### Terminology
Syntax Error
: These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through — you will usually be provided with some error messages too. These are usually okay to fix, as long as you are familiar with the right tools and know what the error messages mean!

Logic Error
: These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors, as there usually isn't an error message to direct you to the source of the error.

Variable
: A _named_ Javascript value.

Operator
: A symbol that is used to perform an operation. The most common form is the _binary_ operator that performs an operation on items located on either side of the symbol.

Operand
: The values that operators act on. For example, in `1 + 2`, the `1` and `2` are operands.

Primitive Value Types
: Data types that exist at the lowest level of the Javascript implementation. There are seven primitive values in JS; this course will cover these five: [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined), [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Null), [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/Boolean),[`string`](https://developer.mozilla.org/en-US/docs/Glossary/String), [`number`](https://developer.mozilla.org/en-US/docs/Glossary/Number)

Expression
: A piece of code that returns a value.

Variable Declaration
: Creating a variable name in memory (with or without a value). In Javascript ES6, this is accomplished with the `const` and `let` declaration keywords.

Variable Assignment
: When we give a variable name a value using the `=` assignment operator. We say we've "assigned a variable". If a variable hasn't been assigned, it's value will be `undefined`.

Mutable
: Able to be changed. In Javascript, only arrays and objects (which include HTML Element variables) are mutable.

### Materials
- Node console(!)

### Key Takeaways
- Use strict mode whenever possible. It will make you a better (safer) coder:

    At the top of your script, add:

    ```js
    'use strict';
    ```

- When declaring variables, start with the `const` keyword and use `let` only when you need to reassign a variable. Avoid the use of the older `var` keyword.
- Variables defined with `const` are still mutable, they just can't be reassigned. In other words, you can create an array with the `const` keyword and the items in the array can still be changed. The same is true for objects (including HTML Elements).
- Never explicitly assign a variable to `undefined`. When you need a variable to be "nothing" use `null` instead.
- When in doubt copy and paste your syntax error into Google.

### Common assignment/declaration syntax errors
1. Calling a variable that hasn't been declared:

    ```
    Uncaught ReferenceError: 'whatever' is not defined
    ```

    Probably the most common syntax error: trying to use a variable that doesn't exist. Best solution: declare the variable so it exists!

2. Missing assignment on `const` variable:

    In Firefox:

    ```
    Uncaught SyntaxError: missing = in const declaration
    ```

    Or, in Chrome/Node

    ```
    SyntaxError: Missing initializer in const declaration
    ```

    The `const` keyword requires that you assign the variable with a value at the time of creation. If you need to create a variable without assigning it, use `let`.

3. Re-assigning a `const` variable:

    In Firefox:

    ```
    Uncaught TypeError: invalid assignment to const 'whatever'
    ```

    Or, in Chrome/Node

    ```
    TypeError: Assignment to constant variable.
    ```

    You tried to reassign a constant variable. Try declaring with `let` if you need to reassign.

---

## 2. Numbers, strings and the addition operator
### Learning Objectives
- Primitive types
  - Define the `number` primitive type.
  - Define the `string` primitive type.
- [Addition Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
  - Arithmetically add two numbers and log the result to the console. 
  - Define value coercion.
  - Explore the relationship between addition and concatenation.

### Terminology
Coercion
: Converting a value from one type to another.

Arithmetic operator
: Operators that take numerical values (either literals or variables) as their operands and return a single numerical value.

Addition Operator (`+`)
: The addition operator produces the sum of numeric operands or string concatenation.

### Key Takeaways
- There are no "integers" in Javascript (except for the new-ish `BigInt` value, which we won't cover). If you need to guarantee that you're working with an integer, use tje `parseInt()` function.
- Javascript is an "untyped" language, meaning JS will try it's best to convert one type to another to "help" you out.
- The `+` operator adds values if they are numbers. It will concatenate values if one or more is a string.

---

## 3. Forms: Adding Machine
### Learning Objectives
- Forms
  - Create a form element with two number fields and a submit button.
  - Create a `form` HTML element variable using `document.querySelector()`. 
  - Add a `submit` event listener to a `form`.
  - Prevent a form from being submitted with `preventDefault()`.
  - Add two numbers submitted from a form and log the `result` to the Console.

### Materials
- [Adding Machine](https://gist.github.com/acidtone/41311f0c2ae259445de4e6ca3b400edc)

### Key Takeaways
- Forms will try to submit to a server by default. Use `event.preventDefault` to stop this (the event must be passed as an argument in the event listener).
- Forms will convert all input values to strings. Use `parseFloat()` to convert a string into a number.

---

## Open lab-time
1. Read: [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)
2. Level-up exercises in [Adding Machine](https://gist.github.com/acidtone/41311f0c2ae259445de4e6ca3b400edc) activity.

---

## Dailies
- Submit today's Adding Machine to the Dailies section (in Assessments) in Brightspace.