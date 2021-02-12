---
layout: post
title: Conditional statements and comparison operators
categories: cpnt262
---

## Homework
1. Primitive values
    - [Boolean values](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
2. Conditional Statements
    - [Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
    - [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)
    - [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
3. Logical operators
    - [Logical NOT (`!`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
4. Forms
    - [`<select>`: The HTML Select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

---
## Morning reflection
### Housekeeping
1. [Assignment 1: classList Toggle](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/assignment-1)
2. Poll: Which Gist format is better?
    - One `index.html` page: [Adding Machine](https://gist.github.com/acidtone/41311f0c2ae259445de4e6ca3b400edc)
    - Codepen style: [Hiding and Element](https://gist.github.com/acidtone/61ae09c7efb6a504010d17199e41510e)

---

## 1. Equality and Truthiness
### Learning Objectives
- Define the boolean value type.
  - Identify a value's type with the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
  - Convert a value to a boolean value ([^1]).
- Define and demonstrate [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).
  - Define truthiness.
  - Demonstrate the difference between equal and strict equal (identical).
- Explore the role of coercion with comparison operations.

[^1]: [2 Ways to Convert Values to Boolean in JavaScript](https://www.samanthaming.com/tidbits/19-2-ways-to-convert-to-boolean/)

### Terminology
Boolean values
: `true` or `false` (there is no maybe).

Equality (`==`)
: When two values are equal _after_ they are coerced to the same type (if necessary).

Strict Equality (`===`)
: When two values are equal _and_ they are of the same value type.

Falsy
: A value that is considered `false` when converted to a Boolean value.

Truthy
: A value that is considered `true` when converted to a Boolean value.

### Materials
- Console!

### Key Takeaways
- Use `===` when testing for equality (it's safer). Use `==` once you understand truthiness.
- Any expression (code than returns a value) can be coerced to a boolean value.
- Some caveats when using `typeof`:

  **Notice**: `typeof` is one of the oldest operators in JS. So old, it doesn't use camel case.
  {:  .notice .notice--info}

  **Warning**: `typeof` also has one of the oldest bugs in Javascript: `typeof null` returns `object`.
  {:  .notice .notice--warning}


[^2]: [JavaScript check if variable exists (is defined/initialized)](https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized)

---

## 2. Conditional code blocks
### Learning Objectives
- Explore the role of pseudo-code in development.
- Review `@media` queries and their relationship to Boolean values.
- Demonstrate `if`, `else` and `else if`.


### Materials
- Review: [CPNT 260 Day 5 - Media queries](https://sait-wbdv.github.io/winter-2021/cpnt260/media-queries-icons/)
- [Adding Machine](https://gist.github.com/acidtone/1b036a8d2f1e5b7f398462cc957f64dc) answer from yesterday

### Key Takeaways
- A common use case: checking if a variable is initialized with [^2]:
    
  ```js
  if (typeof variable !== 'undefined') {
    // the variable is defined
  }
  ```

  **Notice**: `typeof` has the added benefit of not throwing a "Not Defined" error if the "variable" hasn't been declared.
  {:  .notice .notice--info}
  
---

## Open lab-time
### Activities
1. Try building a Greet form in HTML that uses the same logic as the [sample code](https://github.com/sait-wbdv/in-class/blob/main/w5f/js/greet.js) created in class.
2. Test your skills: [Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals)

### Deep dives
- Read: [Operator Overview](https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch04s07.html) on O'Reilly. It's "The Definitive Guide" to operators.
  - Teach Tony: What the heck does "Shift left" and "Shift right with sign/zero extension" do?

### Problem
- Why does this expression evaluate to `false`?

    ```js
    3 > 2 > 1
    ```

    **Hint**: Search "[js operator associatvity](https://www.google.com/search?q=js+operator+precedence+and+associativity)". Associativity is the order (left-to-right/right-to-left) that operators of the same precedence are performed.
    {:  .notice .notice--pro-tip}

---

### Tony's goals for Lab-Time
- Create a dynamic 2x2 Grid that follows the cursor?

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.