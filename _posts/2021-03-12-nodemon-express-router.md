---
layout: post
title: Dev dependencies (nodemon) and express.Router()
categories: cpnt262
---

## Homework
1. Review
    - [Specifying dependencies and devDependencies in a package.json file](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
2. `nodemon`
    - Reference: [nodemon](https://www.npmjs.com/package/nodemon)
    - Watch: [REST API with Node js & Express](https://www.youtube.com/watch?v=pKd0Rpw7O48&t=897s) @14:57 - 16:29​​
    - Read: [Downloading and installing packages globally](https://docs.npmjs.com/downloading-and-installing-packages-globally)
3. `dotenv`
    - Reference: [dotenv](https://www.npmjs.com/package/dotenv)
4. `express.Router`
    - Read: [ExpressJS - Routing](https://www.tutorialspoint.com/expressjs/expressjs_routing.htm) on Tutorials Point
    - Reference: [Express Routes - `express.Router`](https://expressjs.com/en/guide/routing.html#express-router)

---

## Morning reflection
### Housekeeping
- [Modifications to Assignment 4](https://github.com/sait-wbdv/assessments/commit/557caf4dc2ef6a1f55cbe42e60b44871aed49b51)

---

## 1. `nodemon` and `dotenv`
### Learning Objectives
- Understand the purpose of development dependencies
  - Install `nodemon` as a develment dependency.
  - Add a `dev: "nodemon server.js"` script to `package.json`.
  - Start a server using `nodemon`.
- Understand the purpose of envronment variables.
  - Install `dotenv` as a dependency.
  - Assign a `PORT` environment variable.
  - Load a `.env` file into a Node server.

### Terminology
Development Dependency
: Packages that are only needed for local development and testing.
Environment Variable
: Configuration variables that are set to different values based on the environment you run your app in.

### Materials
- npm
  - [`nodemon` documentation](https://www.npmjs.com/package/nodemon)
  - [`dotenv` documentation](https://www.npmjs.com/package/dotenv)

### Key Takeaways
- Install development dependencies with the `--save-dev` or `-D` flags:
    
    ```
    $ npm install nodemon --save-dev
    ```

    Or 

    ```
    $ npm install nodemon -D
    ```

- Development dependencies are installed when you run `npm install`. To prevent this you instead run `npm install --production`.
- Installing a dependency globally is not recommended for production dependencies (you're locked to one version of `express`, for example) but global dev dependencies are usually fine.
- Permissions issues sometimes happen with global packages depending on the system.

---

## 2. `express.Router()`
### Learning Objectives
- Understand the purpose of the `express.Router` class.
- Create router module with `express.Router`.
- Export a route using `modules.exports`.
- Load a route using `app.use()`.

### Materials
- [Sample data](https://github.com/sait-wbdv/sample-code/tree/master/assets/js)

### Key Takeaways
- Router modules still need to load `express` with `require()`.
- Router methods (i.e. `router.get()`) behave largely the same as the parent express methods (i.e. `app.get()`).
- Route modules append their endpoint paths to the path specified in the `app.use()` that loaded it. Together, these paths are joined to create the complete route path (i.e. `/api/v0/definitions`).

    In `server.js`:

    ```js
    app.use('/api/v0', v0);
    ```

    In `/routes/v0.js`:

    ```js
    router.get('/definitions', callback);
    ```

---

## 3. Assignment 5, Final project and group assignments
- DRAFT: Assignment 5
- DRAFT: Final Project
- You will be assigned to your Final Project groups during lab time.

---

## Open lab-time
- Group hangs
  - Team names!
- Mentor orientation

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.