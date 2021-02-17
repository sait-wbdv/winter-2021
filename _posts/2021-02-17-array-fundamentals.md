---
layout: post
title: Array fundamentals
categories: cpnt262
---

## Homework
1. Arrays
    - Read: [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
    - Watch: [Introduction to Arrays with JavaScript](https://youtu.be/arIhhRd1RPc) by Steve Griffith
2. Checkboxes
    - Read: [HTML checkboxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

---

## Morning reflection
### Housekeeping


---

## 1. Array Overview
### Learning Objectives
- Create an array using an array literal.
- Add to the end of an array using `[]`.
- Access an item in an array using the item's index.
- Re-assign an item in an array using the item's index.

### Terminology
Array literal
: A comma separated list of values surrounded by `[]`. For example, ['cats', 'dogs', 'fish'].

Array index
: The location of an item in an array. In Javascript, his is always a sequential number starting at 0.

Array item
: Any Javascript data type (i.e. value) that an array index points to.

### Materials
- MDN: [Common array operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#common_operations)

### Key Takeaways
- Array indexes _always_ start at zero and increase by one with each additional element.
- The _next_ index in an array is _always_ `array.length`.
- The _last_ index of an array is _always_ `array.length - 1`.
- The _value_ of an element can be any data type: `undefined`, `null`, `number`, `string`, `boolean`, `array`, `object`, etc.
- Although arrays can be a list of any value type, you rarely see a mix of types in the same array.
- The most common use case of an array is a list of objects, which we'll cover later this week.
- Don't forget: creating an array using `const` still allows you to change (or mutate) the items in that array.

---

## 2. Finding a random item in an array
### Learning Objectives
- Create a random index of an array.
- Retrieve a random item from an array.
- Output an HTML using a random array item and [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

### Materials
- Gist: [Find a Random Item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)
- [Sample Arrays](https://github.com/sait-wbdv/sample-code/tree/master/assets/js)
    - To use the above arrays, either:
        1. Copy/paste _after_ `export`, OR;
        2. `import` the `mjs` file using [ES Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- In-class: [Outputing a random array item to HTML](https://codepen.io/acidtone/pen/ExNmROE)

### Key Takeaways
- Random numbers in Javascript are a pain.
- There are many ways to output HTML than `Element.innerHTML` but we'll stick with this one for most of this program. See [<template>: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) for a fancier way.

---

## 3. Output an HTML list from an array
### Learning Objectives
- Create a list of HTML items from an array using:
    - [`Array.prototype.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join), 
    - [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), and 
    - [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

### Terminology
Array glue
: A string that is added when joining elements of an array.

### Materials
- In-class: [Outputing an HTML list from an array](https://codepen.io/acidtone/pen/PobmaeM)

### Key Takeaways
- The array glue for an HTML list is most often `</li><li>`, which is then surrounded by `<ul><li>` and `</li></ul>`.

---

## Open lab-time
### Activities
1. Create a list of `img` URLs from your projects and assets and create a "Random Image of the Day" page.
2. Using the [`nouns.mjs`](https://github.com/sait-wbdv/sample-code/blob/master/assets/js/nouns.mjs) sample arrya, re-create a version of Tony's [Random Band Name Generator](https://acidtone.github.io/namor/).

---

### Tony's goals for Lab-Time
- Refactor [Random Band Name Generator](https://acidtone.github.io/namor/) to remove the nouns list from the phraser module.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.