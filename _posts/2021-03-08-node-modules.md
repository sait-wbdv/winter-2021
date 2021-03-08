---
layout: post
title: Node Builtin Modules
categories: cpnt262
---

## Homework
1. Tools
    - [Install Postman](https://www.postman.com/downloads/)
2. Server-side Programming
    - Read: [Server-side website programming first steps](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps) on MDN
    - Read: [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
    - Skim: [What software do I need to build a website?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_software_do_I_need)
3. Node.js
    - Read: [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
    - Read: [Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
    - Watch: [Node.js Tutorial for Beginners](https://youtu.be/TlB_eWDSMt4)
4. Builtin Modules
    - Documentation (for reference):
        - [`http`](https://nodejs.org/docs/latest/api/http.html)
        - [`url`](https://nodejs.org/docs/latest/api/url.html)
        - [`path`](https://nodejs.org/docs/latest/api/path.html)
        - [`fs`](https://nodejs.org/docs/latest/api/fs.html)

---

## Morning reflection
### Housekeeping
1. CPNT 262 Assignment 2 marks returned
2. [CPNT 262 Assignment 3](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/assignment-3)

---

## 1. The Node environment
### Learning Objectives
- Understand the similarities and differences between the Node environment and the browser environment.
- Demonstrate a Javascript core module such as `Math`.
- Log core Node objects to the console:
  - `__dirname`
  - `__filename`
  - `this`
  - `global`
- Log command line arguments to the console with `process.argv`.

### Terminology
[JS Builtin Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
: Objects that come with all Javascript runtime environments (browser, Node, etc). Examples: `Math` and `Date`

### Materials
- Gists: 
  - [Default objects and properties](https://gist.github.com/acidtone/873e18b256e3feca52d36ead8b1d5318)
  - [List all Node builtin modules](https://gist.github.com/acidtone/67f06e065255915f41f92abde65d2e2c)
  - Activity: [Adding Machine with command line arguments](https://gist.github.com/acidtone/99208821b9d7fbdc5b04ae2ddd4d04bc)

### Key Takeaways
- Builtin objects do not have to be imported as they are core Javascript functionality.
- `process.argv` is just one of many properties and methods that come with the `process` object but it's the most useful. 

---

## 2. Import builtin modules with `require`
### Learning Objectives
- Log a list of all Node builtin modules to the console. 
- Import a Node builtin module using `require()`.
  - Import the `path` builtin module.
  - Split a file path into its component parts with the `path` module:
    - `path.basename()`
    - `path.extname()`
    - `path.dirname()`
    - `path.isAbsolute()`
    - `path.join()`
    - `path.normalize()`

### Terminology
Node Builtin Module
: Modules that are included with the Node runtime environment. These modules need to be imported into your script but do not need to be installed with `npm`.

### Materials
Gist: [Manipulating filenames and directory paths with `path`](https://gist.github.com/acidtone/aa0302b5f6573d73cfd05fedb00fc708)

### Key Takeaways
- Although builtin modules come pre-installed with Node, they still need to be imported into your script with `require()`.

---

## 3. Files Access with the `fs` module
### Learning Objectives
- Import the `fs` builtin module.
  - List directory contents with `fs.readdir()`.
  - Asynchronously read the contents of a file and log them to the console.
  - Create a new "Hello World!" file in the file system.
  - Update the contents of a file.
  - Delete a file from the file system.

### Terminology
File CRUD
: Create, Read, Update and Delete a file.

### Materials
- Gists:
  - [Reading files with the `fs` module](https://gist.github.com/acidtone/9fa3f74b8efc12273cfcdc224ac5f56b)

### Key Takeaways
- Use the asynchronous version of `fs` methods whenever possible.

---

## Open lab-time
- Refactor for `process.argv`.

---

### Tony's goals for Lab-Time

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.