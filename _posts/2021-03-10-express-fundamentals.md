---
layout: post
title: Express Fundamentals
categories: cpnt262
---

## Homework
1. Review: 
    - [Create a local `http` server](https://gist.github.com/acidtone/4f96eefab57e9ab8d2ec4e21f6029be3)
    - [request/response cycle](https://medium.com/@jen_strong/the-request-response-cycle-of-the-web-1b7e206e9047)
2. Model-View-Controller
    - Read: [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) definition on MDN
    - Read: [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) on Wikipedia
3. Postman
    - Watch: [The Basics of Using Postman for API Testing](https://youtu.be/t5n07Ybz7yI) by Steve Griffith
4. Express
    - Read: [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
    - Read: [Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment) on MDN
    - Read: [Serving static files in Express](https://expressjs.com/en/starter/static-files.html) in Express Docs
    - Read: [Using Express Middleware](https://expressjs.com/en/guide/using-middleware.html) in Express Docs
    - Watch: The first 20 minutes of [How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48) by Mosh Hamedani (we'll eventually cover most of this video)
    
---

## Morning reflection
### Housekeeping
1. CPNT 201 Assignment 5 ZIPs
    - Feel free to not upload the entire `winter-2021` repo.
    - Upload a README with links to your Issue and Pull Request.
2. Announced after lunch:
    - Assignment 4: [JSON gallery endpoint with `fetch`](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/assignment-4)
    - DRAFT: [Final Project](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/final)

---

## 1. Introduction to `express`
### Learning Objectives
- Summarize the MVC (Model-View-Controller) design pattern.
  - Understand how the directory structure of an `express` app relates to the MVC pattern.
  - Understand how middleware and routes relate to the MCV pattern.
- Install the `express` package as a project dependency.
  - Create a "Hello World!" `express` app.
  - Start an `express` server with default port.
- Review the CRUD design pattern.
  - Define route handler.
  - Understand the relationship between route methods and CRUD operations.
  - Fulfill a `GET` request using the `app.get()` route handler.

### Terminology
Route
: An event handler that fires for server requests that match a route method (i.e. `GET`, `POST`, etc) paired with a route path (i.e. `/login`, `/api/definitions`). These often respond with web files and/or `json` data. Routes are part of the _Controller_ layer of the MVC pattern.

### Materials
- Gists: 
  - [Design patterns in Express apps](https://gist.github.com/acidtone/b4cdb0741460d54f5966ab18a753548c)
  - [Hello World! app](https://gist.github.com/acidtone/8a188adf6e85a913f7f88c4f6cd53677)

### Key Takeaways
- Server requests are [fulfilled on a first-come-first-served basis](https://stackoverflow.com/questions/32603818/order-of-router-precedence-in-express-js), so the order of your route handlers and middleware matter.
- If a route sends a `response`, the connection is closed and downstream routes are not invoked.

---

## 2. Routes and Middleware
### Learning Objectives
- Define middleware.
- Understand the relationship between middleware and the request/response cycle of an `express` server.
- Demonstrate how the order of route and middleware handlers affect the `response` sent from the server.
- Refactor a "Hello World" app to serve static files.
- Refactor a "Hello World" app to send `404 Not Found` errors.

### Terminology
Middleware
: A generic event that fires for _all_ server requests. These often prepare the `request` and/or `response` for downstream middlware or routes but can also send the `response` directly. Middlware handlers are part of the _Controller_ layer of the MVC pattern.

### Materials
- Gists:
  - [Catch `404 Not Found` errors](https://gist.github.com/acidtone/f5a08d0f15e70c4ddf1d40571b9e0645)
  - [Serving static files](https://gist.github.com/acidtone/e2590b67f8fd701a36f7a04e62caa594)

### Key Takeaways
- Static file middleware is usually placed first in your app so that requests are filfilled before dynamic responses are needlessly called (static files rarely need these resources). 
- `404` middleware is usually placed near the end of your app since successful calls would have already been fulfilled by then.

---

## 3. Heroku Deployment
### Learning Objectives
- Push a valid `express` project to Github.
- Connect a GitHub repository to a Heroku app.
- Deploy an express app to Heroku.

### Materials
- Gist: [Deploying an Express app to Heroku](https://gist.github.com/acidtone/0e02f60221468344482722fe9dcc7fba)

### Key Takeaways
- In order to function properly, Heroku needs your app to have the following:
  - a start script defined in your `package.json`, such as 

      ```js
      "scripts": {
        "start": "node server.js"
      }
      ```
  - A port number defined with `process.env.PORT` so that Heroku can override it with the standard port.
- Sometimes (often?) Heroku will return an internal server error due to a misconfiguration. You can access the server logs from the admin panel menu in the top right: 
  - "More" -> "View logs"
  - You can also install the Heroku CLI (command line interface) to pull the logs from your terminal.
    - See: [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

---

## Open lab-time
### Activities
1. Using a custom middleware handler, create a data logger that writes the current date and time to a log file for every server request.
2. After today, you should have all you need to complete Assignment 3.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.