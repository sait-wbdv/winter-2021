---
layout: post
title: Variable declaration and assignment
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
{% comment %}
## Morning reflection
### Housekeeping

---

## 1. Variable Declaration vs Assignment
### Learning Objectives
- Define the difference between [syntax vs logic errors]((https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)).
- Discuss the Creation and Execution phases in Javascript.
  - Define the global object.
- Define the difference between variable declaration and assignment.
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
: Data types that exist at the lowest level of the Javascript implmentation. There are seven primitive values in JS; this course will cover these five: [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined), [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Null), [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/Boolean),[`string`](https://developer.mozilla.org/en-US/docs/Glossary/String), [`number`](https://developer.mozilla.org/en-US/docs/Glossary/Number)

Expression
: A piece of code that returns a value.

Variable Declaration
: Creating a variable name in memory (with or without a value). In Jascript ES6, this is accomplished with the `const` and `let` declaration keywords.

Variable Assignment
: When we give a variable name a value using the `=` asignment operator. We say we've "assigned a variable". If a variable hasn't been assigned, it's value will be `undefined`.

Mutable
: Able to be changed. In Javascript, only arrays and objects (which include HTML Element variables) are mutable.

### Materials
- Node console(!)

### Key Takeaways
- When declaring variables, start with the `const` keyword and use `let` only when you need to reassign a variable. Avoid the use of `var`.
- Variables defined with `const` are still mutable, they just can't be reassigned. In other words, you can create an array with the `const` keyword and the items in the array can still be changed.
- Never explicitly assign a variable to `undefined`. When you need a variable to be "nothing" use `null` instead.

### Common assignment/declaration syntax errors
1. Calling a variable that hasn't been declared:

    ```
    Uncaught ReferenceError: 'whatever' is not defined
    ```

    Probably the most common syntax error: trying to use a variable that doesn't exist. Best solution: declare the variable so it exists!

2. Re-assigning a `const` variable:

    ```
    Uncaught TypeError: invalid assignment to const 'whatever'
    ```

    You tried to reassign a constant. Try declaring with `let` if you need to reassign.

3. Missing assignment on `const` variable:

    ```
    Uncaught SyntaxError: missing = in const declaration
    ```

    The `const` keyword requires that you assign the variable with a value at the time of creation. If you need to create a variable without assigning it, use `let`.

---

## 2. Numbers, arithmetic operators and forms
### Learning Objectives
- Define the `number` primitive type.
- Define the `string` primitive type.
- Define value coersion.
- Arithmetically add two numbers and log the result to the console. 
- Create a form element with two number fields and a submit button.
- Add a `submit` event listener to a form that adds two number field values (and log the result to the console).

### Terminology
Coersion
: Converting a value from one type to another.

Arithmetic operator
: Operators that take numerical values (either literals or variables) as their operands and return a single numerical value.

Addition Operator (`+`)
: The addition operator produces the sum of numeric operands or string concatenation.

### Materials
- [Adding Machine](https://gist.github.com/acidtone/41311f0c2ae259445de4e6ca3b400edc)

### Key Takeaways
- Javascript is an "untyped" language, meaning JS will try it's best to convert one type to another to "help" you out.
- The `+` operator adds values if they are numbers. It will concatenate values if one or more is a string.
- Forms will try to submit to a server by default. Use `event.preventDefault` to stop this (the event must be passed as an argument in the event listener).
- Forms will convert all input values to strings. Use `parseFloat` to convert a string into a number.

---

## Open lab-time


---

### Tony's goals for Lab-Time

---
{% endcomment %}

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.