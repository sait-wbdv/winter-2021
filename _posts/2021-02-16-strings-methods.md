---
layout: post
title: String and string properties/methods
categories: cpnt262
---

## Homework
1. Review
    - Read: [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
2. Strings
    - Read: [Handling text - strings in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
    - Read: [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
    - Watch: [JavaScript Strings](https://youtu.be/09BwruU4kiY) by Mosh
    - Watch: [20 String Methods in 7 Minutes](https://youtu.be/VRz0nbax0uI) by Free Code Camp
3. Concatenations with ES6
    - Read: [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) on MDN

---

## Morning reflection
### Housekeeping
1. Marks returned
    - CPNT 260 Assignment 2
    - CPNT 260 Assignment 3
    - CPNT 262 Exercises
2. Week 5 recap
    - Primitive Types
    - Coercion
        - Coercing a type into a boolean value using `Boolean()`.
    - Operator Associativity
    - Template literals
3. Dailies highlights
    - Swapna's Greet form
    - Patrick's [To Do List](https://pteskey.github.io/in-class/12-02-2021/)

---

## 1. Coercion and the String Object
### Learning Objectives
- Define a string literal.
- Discuss object prototypes in Javascript and how it relates to MDN documentation.
- Create a string using:
    1. [Single or double quotes](https://stackoverflow.com/questions/242813/when-should-i-use-double-or-single-quotes-in-javascript);
    2. [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals);
    3. [`new String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) object constructor (this has become "out-of-fashion").
- Demonstrate the difference between creating a string with single or double quotes.
    - Discuss the escaping of characters (quotes, newlines, spaces, tabs, etc).
- Differentiate between calling the `String()` constructor as a function (useful) vs using the `new` keyword (rare).
- Demonstrate the [`string.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property.
    - Introduce the concept of Arrays, in terms of sting character indexes.

### Terminology
String Literal
: A string value created using either single or double quotes.

Coercion
: Converting a value from one type to another. In this case, string primitives will be converted to an object when you try to use `string.length` or a string prototype method.

Prototype
: A base object that other objects can inherit. In the case of strings, methods such as [`string.prototype.substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) and [`string.prototype.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) are inherited using prototypes.

Object
: A collection of name/value pairs (in terms of Javascript)

Property
: A fancy term for a variable that lives inside an object and is most often accessed using dot notation. Example: `string.length`.

Method
: A fancy term for a function that lives inside an object and is most often accessed using dot notation. Example: `string.trim()`.

String Constructor
: When paired with the `new` keyword, a string constructor creates a fully qualified string object with all the properties and methods inherited with the prototype. It can also be called as a function to convert any type into a string primitive type.

### Materials
- [Sample string methods](https://github.com/sait-wbdv/sample-code/blob/master/js-base/strings/string-methods.js)

### Key Takeaways
- Deep dark secret: everything in Javascript is actually an object.
- Although a string is one of the primitive types, it is implicitly coerced into an object. This means that using `new String()` is rare since we get the methods anyway.
- The `String()` constructor can be used in two ways!
    1. `new String('some string/value')` will create a String _object_ (you will do this rarely).
    2. Calling it as a function: `String('some value')` will convert that value to a string _primitive_ (you will do this more often).
- Along with `string.length` string characters are also copied into an array; each character is given a number, starting at zero, in order of the characters. Each character can be accessed with [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements).

---

## 2. Demo: String methods and character counters
### Learning Objectives
- Explore some [useful methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods) that are available for strings.
    - Identify whether a method is an expression or not.
- Use `string.length` to create a character counter for a [`textarea` form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
    - Pseudo-code: what's the best way to accomplish this?
        - How do we access the string inside a `textarea` element?
        - What's the best event to keep track of character length?
        - How do we output a character counter for the `textarea` element?
- Demonstrate how to find the last character of a string.

### Materials
- Codepen (currently empty): [Text area character counter](https://codepen.io/acidtone/pen/qBqrzGb)

### Key Takeaways
- Best event for tracking `textarea` changes: 
- Location of a string inside `textarea`: 
- How to display the character limit from `textarea` attributes:

---

## Open lab-time
### Activities
1. Using the Codepen created in the morning session:
    - Using conditionals, change the character colour to red when there are less than 25 (or whatever) characters left.
    - Add a counter for how many _words_ have been typed;
    - Add a Name field and join the `textarea` text with a "Hello [name]," introduction similar to how you'd write an email.
    - Find any instances of hashtags (i.e. `#dogs`) and/or account usernames (i.e. `@acidtone`).
2. Test your skills: [Strings](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings)

---

### Tony's goals for Lab-Time
- Test your skills?

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.