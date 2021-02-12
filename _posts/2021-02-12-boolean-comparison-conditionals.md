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
3. Forms
    - [`<select>`: The HTML Select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

---
{% comment %}
## Morning reflection
### Housekeeping

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

Flasyy 

### Materials
- Console!

### Key Takeaways
- Use `===` when testing for equality (it's safer). Use `==` once you understand truthiness.
- Any expression (code than returns a value) can be coerced to a boolean value.
  
---

## 2. Conditional code blocks
### Learning Objectives
- Explore the role of pseudocode in development.
- Review @media queries 


### Terminology
### Materials
### Key Takeaways

---

## Open lab-time
### Deep dives
- Read: [Operator Overview](https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch04s07.html) on O'Reilly. It's "The Definitive Guide" to operators.
  - Teach Tony: What the heck does "Shift left" and "Shift right with sign/zero extension" do?

### Problem
- Why does this expression evaluate to `false`?

    ```js
    1 > 2 > 3
    ```

    **Hint**: Search "[js operator associatvity](https://www.google.com/search?q=js+operator+precedence+and+associativity)". Associativity is the order (left-to-right/right-to-left) that operators of the same precedence are performed.
    {:  .notice .notice--pro-tip}

---

### Tony's goals for Lab-Time

---
{% endcomment %}

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.