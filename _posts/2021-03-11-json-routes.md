---
layout: post
title: JSON Routes and Custom Modules
categories: cpnt262
---

## Homework
1. Review
    - [Create a local `http` server](https://gist.github.com/acidtone/4f96eefab57e9ab8d2ec4e21f6029be3)
    - [request/response cycle](https://medium.com/@jen_strong/the-request-response-cycle-of-the-web-1b7e206e9047)
    - [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) definition on MDN
    - [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) on Wikipedia
    - [Create, read, update and delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) on Wikipedia
2. Express Routes
    - Watch: The first 20 minutes of [How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48) by Mosh Hamedani (we'll eventually cover most of this video)
    - Read: [Express Routes](https://expressjs.com/en/guide/routing.html) in the ExpressJS Documentation
3. Postman
    - Watch: [The Basics of Using Postman for API Testing](https://youtu.be/t5n07Ybz7yI)
4. Custom Modules
    - Read: [Export a Module in Node.js](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports) by Tutorials Teacher
    - Watch: 15:22 - 33:00 of [Node.js Tutorial for Beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=922s) by Mosh Hamedani

---

## Morning reflection
### Housekeeping
1. Dailies shoutouts
    - [Norville's Ultimate Chatroom](https://ultimate-chatroom.herokuapp.com/)

---

## 1. Sending JSON data
### Learning Objectives
- Summarize the purpose of the `Content-Type` HTTP header and how they relate to MIME Type.
- Understand the [difference between `response.json()`, `response.send()` and `response.end()`](https://blog.fullstacktraining.com/res-json-vs-res-send-vs-res-end-in-express/).

### Materials
- Article [res.json() vs res.send() vs res.end() in Express](https://blog.fullstacktraining.com/res-json-vs-res-send-vs-res-end-in-express/)
- MDN: [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

## Key Takeaways
- When in doubt, use `.send()`. It dynamically sets `Content-Type` headers to match the data it sends.
- When sending JSON, you can either use `.json()` uses `.send()`.
  - `.json()` is arguably less confusing
  - `.json()` uses `.send()` under the hood so the resulting HTTP headers are the same. 
- `.json()` has JSON formatting options ([`replacer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) and [`space`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_space_argument)) that you'll probably never need.
- Only use `.end()` when you need to end the `response` without providing data. 
  - `.send()`/`.json()` will end the `response` after they send data anyway.

---

## 2. Custom modules with CommonJS
### Learning Objectives
- Summarize the difference between CommonJS and ES Modules in Node.
  - See: [Node Modules at War: Why CommonJS and ES Modules Can’t Get Along](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)
- Create a custom (local) module.
  - Turn a file into a module: assign a value to using `module.exports`.
  - Load a module using `require()`.
- Demonstrate a module's protected variable environment.
- Load an array of objects using a custom module 

### Terminology
Module
: A reusable block of code whose existence does not accidentally impact other code (Javascript didn't have this before).

CommonJS Module
: An agreed upon standard for how code modules should be structured. Because modules are a relatively new feature of Javascript, there are competing standards: ES Modules are used in the browser but CommonJS Modules are most common in Node.js (which supports both standards).

### Materials
- Gists:
  - [Node: Local modules](https://gist.github.com/acidtone/4dd61a189ef934a76df8efde14738dfe)
  - Example: [Node: 3 stages of greet](https://gist.github.com/acidtone/7ab0bd9d11f8d85a39fe185d2fb0a065)
  - Activity: [Create custom modules](https://gist.github.com/acidtone/ebdc01c9fe3516f6d34fd3ff1249349c)

### Key Takeaways
- You must prefix local module paths with `./`.
- `module.exports` is an empty object by default.
- You can assign any value to `module.exports` to expose it to the outer environment.
- `require()` returns the value that is assigned to a module's `module.exports`. All other variables will be private to the module. 

---

## 3. Route parameters
### Learning Objectives
- Define route parameter.
- Create a JSON endpoint using `app.get()` and custom modules.
  - Return an array of objects to `GET /api/v0/definitions`.
- Demonstrate a route parameter using `app.get()` and `:slug`.
  - Return a single of object to `GET /api/v0/definitions/:slug`.
- Review: 
  - Requesting data using `fetch()`.

### Terminology
Route parameter
: A named URL segment (i.e. between or after a `/`) that is used to capture values based on their position in a URL. Example: in `/api/image/:id`, `:id` is a route parameter.

### Materials
- Starter: [Definition list](https://github.com/sait-wbdv/in-class/tree/main/w9r/1-definition-starter)

### Key Takeaways
- Route parameters are stored in `request.params`.
- Route parameter paths are usually placed _after_ static routes to prevent them from "stealing" requests.

---

## Open lab-time
### Activities
1. [Create custom modules](https://gist.github.com/acidtone/ebdc01c9fe3516f6d34fd3ff1249349c)
2. Refactor your Assignment 2 gallery to use your own custom JSON endpoint using `app.get()`.
    1. `GET /api/v0/images` -> json array of objects
    3. Create a custom module for your data using `require()` and `module.exports`.
    4. Bonus: Add support for single images.
        - `GET /api/v0/images/:id` -> single object

### Demo
1. Data logger as a module. 

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.