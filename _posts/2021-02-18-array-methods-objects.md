---
layout: post
title: Array methods and objects
categories: cpnt262
---

## Homework
1. Common array methods
    - Read: [Common array operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#common_operations)
    - Reference: [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (**adding** an item to the **end** of an array)
    - Reference: [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) (**removing** an item from the **end** of an array)
    - Reference: [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) (**adding** an item to the **beginning** of an array)
    - Reference: [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) (**removing** an item from the **beginning** of any array)
2. Objects
    - Read: [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
    - Skim: [Introducing objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

---

## Morning reflection
### Housekeeping
1. Dailies shoutouts
    - [Joel's Drinking Game](https://kayej22.github.io/w6w/)
    - [Makayla's Date Night Chooser](https://codepen.io/makaylamr/pen/MWbmPNE)
    - [Aidan's Character Generator](https://codepen.io/Aidano/pen/vYymbBj)
    - [Karen's "Which Kiyo are you today"](https://nerakmari.github.io/kiyo-generator/)
    - [Swapna's Random on Hover](https://swappnasama.github.io/random-generator/) (with multi-dimensional array)
    - [Patrick's Random Cat Generator](https://pteskey.github.io/in-class/17-02-2021/)
    - [Norville's Random Word Speaker](https://cdpn.io/nozky/debug/ZEBKNLp/dXkqBaNyXPvM)
2. Note for Dailies: include direct link to GH Pages.

---

## 1. Useful array methods
### Learning Objectives
- Define Stack and First-In/Last-Out data structures.
  - Demonstrate [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) and [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) array methods.
- Define Queue and First-In/First-Out data structures.
  - Demonstrate `push()` and [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) array methods.
- Demonstrate other common array methods:
  - [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift): Adding to the beginning of an array.
  - [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): Remove or replace the items of an array.
  - [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice): Copies a subset of an array.
  - [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat): Returns a joined copy of two arrays.
  - [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof): Finds the first index of a matching item.

**Warning**: Array methods like `pop()`, `push()`, `shift()`, `unshift()` and `splice()` are **destructive** operations that change the original array. `slice()` and `concat()` are _non-destructive_ because they _return_ a copy of the original array.
{: .notice .notice--warning}

### Terminology
Stacks (FILO)
: First-In/Last-Out - The first item added to an array is the last item removed from an array. Example: A stack of books or dishes.

Queue (FIFO)
: First-In/First-Out - The first item added to an array is the first item removed from an array. Example: A ticket line.

Destructive
: A process that changes the original array instead of returning a new array.

### Materials
- [Changing Arrays](https://github.com/sait-wbdv/sample-code/blob/master/js-base/arrays/2-adding-removing-items.js)

### Key Takeaways
- Stacks and Queues are data structures that are most often used on the backend. We'll revisit these during the node portion of the course.
- Pay careful attention to when and how a method _returns_ values when reading the documentation.

---

## 2. Pagination using non-destructive `slice()`
### Learning Objectives
- Define the properties of a paginated list.
- Demonstrate pagination using `slice()` and arithmetic operations.

### Terminology
Pagination
: A pattern for showing a subset of a list, usually divided into an equal number of items per page.

Items per page
: The number of items per page, duh.

Page
: The current page being displayed

Offset
: The total number of items _before_ the current page, usually calculated by `page * itemsPerPage`.

Total Pages
: The total number of pages. Usually calculated as `array.length / itemsPerPage`, rounded up.

### Materials
- Starter: [Paginating an HTML List](https://codepen.io/acidtone/pen/wvoeJYE)

### Key Takeaways
- Pagination can be handled on the front or backend, usually by passing the _page_ to display.
- _Items per page_ is usually a configuration setting that doesn't change. This, combined 

---

## 3. Object literals
### Learning Objectives
- Define Javascript object.
- Demonstrate the creation of an object literal.
- Output the data of an object to an HTML page.

### Terminology
Object
: A collection of name/value pairs (in terms of Javascript)

Object Literal
: An object _literally_ coded using proper object notation.

Object Property
: A fancy term for a name/value pair where the _value_ is anything but a function.

Object Method
: A fancy term for name/value pair where the _value_ is a function.

### Materials
- [Animal Images](https://github.com/sait-wbdv/sample-code/tree/master/assets/images/animals)
- Starter: [Animal objects](https://codepen.io/acidtone/pen/ExNXmaN)

### Key Takeaways
- Unlike other programming languages, an _object_ is simply a collection of name/value pairs.
- Object prototypes are objects that are named `__prototype__`; Javascript handles the rest.

**Danger**: Never overwrite or change the `__prototype__` object unless you know what you're doing. Doing so can break your application very badly.
{: .notice .notice--danger}


---

## Open lab-time
1. Take one of your image URLs from yesterday and convert it to an object, adding a:
    - title
    - imgURL
    - width
    - height
    - photoCredit
2. Repeat with the rest of your image URLs and convert your array of strings into an array of objects.
3. Refactor your random image code to use an object instead of just an image URL.
4. Try paginating your list of images.

---

### Tony's goals for Lab-Time
- Add URL params to Random Name Generator
- Gists!
  - linking JS modules
  - Pagination

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.