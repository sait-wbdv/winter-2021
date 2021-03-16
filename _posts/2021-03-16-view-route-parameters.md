---
layout: post
title: Views with Route Parameters
categories: cpnt262
---

## Homework
1. Review
    - Read: [Export a Module in Node.js](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports) by Tutorials Teacher
    - Watch: 15:22 - 33:00 of [Node.js Tutorial for Beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=922s) by Mosh Hamedani
    - Watch: [The Basics of Using Postman for API Testing](https://youtu.be/t5n07Ybz7yI)
2. REST APIs
    - [What Is a REST API?](https://www.sitepoint.com/developers-rest-api/) on SitePoint
3. Route Parameters
    - Read: [Route Parameters in Express](https://masteringjs.io/tutorials/express/route-parameters) on MasteringJS
    - Reference: [Express Routing Documentation](https://expressjs.com/en/guide/routing.html#route-parameters) (linked to "Route parameters" section)
    - Reference: [`req.params`](https://expressjs.com/en/4x/api.html#req.params)

---

## Morning reflection
- As of Express 4, an optional (recommended?) way to send bare `404` errors:

    ```js
    res.sendStatus(404)
    ```

    Replaces:

    ```js
    res.status(404)
    res.send('Not found')
    ```

### Housekeeping
1. Create [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

---

## 1. RESTful API Interfaces
### Learning Objectives
- Summarize the characteristics of a REST API.
- Identify common convensions for REST APIs.

### Materials
- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

### Key Takeaways
- Endpoint paths are usually plural versions of nouns. Examples:
  - `GET /users`
  - `GET /images`
- An endpoint with a `id` or parameter returns a single item. Without those parameters, it returns a list of the items:
  - `GET /users`: returns a list of users.
  - `GET /users/42`: Returns user 42.
- Verbs should be avoided for RESTful paths. That is what HTTP methods are for.
  - `GET /find/users` is not a good endpoint.
- Filters for sorting and searching should not be a part of and enpoint (because they are verbs). Instead, pass them as URL parameters (not route parameters).
  - `GET /images?sort=date`
  - `GET /definitions?search=function`

---

## 2. Add definitions `list` endpoint
### Learning Objectives
- Create a RESTful `list` endpoint with `ejs`.
- Add a custom `js` script to a view.
- Add a custom stylesheet to a view.

### Terminology
### Materials
- Sample Code: [Route Parameters](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/route-params)
- Activity: [Create a RESTful `list` endpoint](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/route-params/1-create-list-route)

### Key Takeaways
- `main.css` (or similar) contains CSS that is common to all (or most) pages of a site. If a page needs a lot of (or conflicting) styling, it's often best to create a separate stylesheet for that page.

---

## 3. Add definitions `item` endpoint
### Learning Objectives
- Create a RESTful `item` endpoint with route parameters and EJS.

### Materials
- Activity: [Create a RESTful `item` endpoint](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/route-params/1-create-list-route)

### Key Takeaways
- Route parameters are created by placing a colon `:` before a path segment in an endpoint:
  - `GET /users/:id`
- The label after the `:` becomes the name of the variable when it's passed to the route handler.
- In express, route parameter name/value pairs are assigned to the `request.params` object.

---

## 4. Testing GET endpoints in Postman
### Learning Objectives
- Import a Collection into Postman.
- Test the basic health of a server with Postman unit tests.

### Materials
- [Sample Postman Unit Tests](https://github.com/sait-wbdv/sample-code/tree/master/tools/postman)

### Takeaways
- You can find the test of each endpoint under `Tests`.
- The tests query `localhost:3000` so you'll need to start a Node project before starting tests.

---

## Open lab-time
### Activities
1. Finish the Extras listed in today's Activity.
2. Using your wits figure out where URL parameters (the bit after the `?` in a URL) are stored in an Express request and:
    - Add a `random` filter to a list endpoint using this [Random Array Item](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e) sample code.
        - `GET /images?filter=random`
    - Add a `sort` filter that... sorts your list:
        - `GET /images?sort=asc`
3. Work on assignments and such.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.