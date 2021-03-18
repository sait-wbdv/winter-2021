---
layout: post
title: Mongoose CRUD and Heroku/Atlas Config
categories: cpnt262
---

## Homework
1. Review
    - Read: [NoSQL vs SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
    - [Mongoose Getting Started](https://mongoosejs.com/docs/)
2. Introduction to CRUD and Mongoose
    - Using Callbacks: [NodeJs CRUD Operations Using Mongoose and MongoDB Atlas](https://www.geeksforgeeks.org/nodejs-crud-operations-using-mongoose-and-mongodb-atlas/)
    - Using Promises: [CRUD Operations with Mongoose and MongoDB Atlas](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)
    - Reference: [Mongoose Queries](https://mongoosejs.com/docs/queries.html) in the mongoose documentation.
        - [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model.find)
        - [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model.findOne)
3. POST Requests in Express
    - Read: [Handle GET and POST Request in Express](https://codeforgeek.com/handle-get-post-request-express-4/)
3. MongoDB Atlas
    - [How to host a RESTful Node.js server with MongoDB Atlas database on Heroku](https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl)

---

## Morning reflection
### Housekeeping
- Assignment 4 deadline extended to Sunday
- Saturday Review Session: 10am
- Presentation this afternoon!

---

## 1. Setting up Atlas on Heroku
### Learning Objectives
- Add Atlas DB User credentials to Heroku `Config Vars` panel

### Instructions
1. Login to your Heroku account.
2. Open the Admin panel of your app.
3. Go to `Settings`.
4. Under the heading `Config Vars`, enter your connection string (as the value) under the name `MONGODB_URL`.
5. Now your app should be able to connect to Atlas. 

### Key Takeaways
- Heroku's `Config Vars` panel is where it stores environment variables like the ones in your `.env` file.
- **Important**: You need to name your Atlas connection string `MONGODB_URL`. Otherwise, Heroku won't connect to Atlas properly.

---

## 2. CRUD Operations with Mongoose
### Learning Objectives
- Refactor an API to use Mongoose and MongoDB Atlas.
  - Connect to Atlas using `mongoose.connect()`.
  - Export an Atlas connection as a local module.
  - Load a `mongoose` connection into a route.
  - Retrieve all records from a Collection using `Model.find()`.
  - Retrieve one record from a Collection using `Model.findOne()`.

### Materials
- Starter: [Definitions API using a local module](https://github.com/sait-wbdv/in-class/tree/main/w10r/1-definitions-starter)
- Gist: [Mongoose - Reading MongoDB data in Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)

### Key Takeaways
- `mongoose` supports asynchronous connections using either callbacks or promises. If you pass it a callback `function` as an argument, it will automatically use that callback. If not, it will default to using a promise.

---

## 3. Handling POST requests
### Learning Objectives
- Submit form data using the post method.
- Capture form data using `express.urlencoded()`.
- Handle a `post` request using `app.get()`.
- Create a model instance using form data.
- Create an Atlas record using `Model.save()`.

### Materials
- [Handle GET and POST Request in Express](https://codeforgeek.com/handle-get-post-request-express-4/)
- Starter: Finished Definitions App from above
- Gist: [Mongoose - Create document from form data in Express](https://gist.github.com/acidtone/c69a20727a1e11c58fcc9ff0503b1471)

### Key Takeaways
- `express.urlencoded()` is available in Express v4.16.0 onwards. For earlier versions, you'll need to install the `body-parser` package.
- There is a `json` version of this middleware if you're expecting a form to be submitted using Javascript: `express.json()`. It performs the same functionality and adds submitted data to `req.body`.

---

## Open lab-time
- Ash's presentation!

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.