---
layout: post
title: MongoDB, Mongoose and Atlas hosting
categories: cpnt262
---

## Homework
1. Review
    - [Create, read, update and delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) on Wikipedia
    - [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) definition on MDN
    - [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
    - [Using dotenv package to create environment variables](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)
2. Introduction to CRUD and Mongoose
    - Read: [NoSQL vs SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
    - Read: [Mongoose CRUD](https://coursework.vschool.io/mongoose-crud/) (Create, Read, Update, Delete)
    - Reference: [Mongoose Getting Started](https://mongoosejs.com/docs/)
3. MongoDB Atlas
    - Read: [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started/)
    - Read: [How to host a RESTful Node.js server with MongoDB Atlas database on Heroku](https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl)
        - Note:
            - CORS headers are often not needed with Atlas... but sometimes they are.
            - We will be connecting to Mongoose a little differently that what is shown in this article.

---

## Morning reflection
### Housekeeping
- `json` enpoint review this afternoon
- No Dailies today (we're only connecting with local code today)
- Goals for the day
    1. Connect successfully to MongoDB Atlas
    2. Import your gallery data into Atlas.

---

## 1. NoSQL vs SQL
### Learning Objectives
- Understand the difference between NoSQL and SQL (relational) databases.
- Define document databases and their terminology.
- Summarize the pros and cons to document databases and MongoDB in general.

### Terminology
Document Database
: A type of NoSQL (Not-only SQL) database that stores its data as documents on the file system. MongoDB is a `json` document database.

Database
: Holds one or more collections.

Collection
: A collection of documents (i.e. a fancy folder). Collections are analogous to tables in relational databases.

Document
: MongoDB stores data in the form of `json` Documents (technically BSON documents). Each document is analagous to a row in a relational database.

### Materials
- [What is NoSQL?](https://www.mongodb.com/nosql-explained)
- [NoSQL vs SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)

### Key Takeaways
- MongoDB is a file database engine. It literally stores its data as a folder (i.e. Collection) of `json` files (i.e. Documents).
- Working with MongoDB is a little messy so we use the `mongoose` package to:
  - use a simpler syntax;
  - ensure the documents in a collection have the same structure;
  - hide the gritty details like promises and asynchronous things.

---

## 2. Configuring MongoDB Atlas
### Learning Objectives
- Create a MongoDB Atlas account.
- Configure Atlas for outside connections.
- Connect to Atlas with Mongoose.

### Materials
- [MongoDB Atlas Cheatsheet](https://github.com/sait-wbdv/sample-code/tree/master/backend/mongoose)
- [Setting up MongoDB Atlas](https://github.com/sait-wbdv/sample-code/tree/master/backend/mongoose/1-atlas-getting-started)
- [hello-atlas](https://github.com/sait-wbdv/hello-atlas)

### Key Takeaways
- The main error you will run into when connecting is `Authentication Failed`. Try the following:
  - Confirm you've set the correct username/password in your connection string. You can reset the password in the Atlas control panel.
  - Confirm you've changed the database in your connection string to `winter-2021` or similar.
  - Confirm you've whitelisted all IPs in Atlas. 

---

## 3. Kitten models
### Learning Objectives
- Understand the difference between Mongoose Schemas, Models and Instances.
- Create a Mongoose Schema.
- Compile a Mongoose Model from a Schema.
- Load data into a model from Atlas to create an Instance.

### Terminology
Schema
: A Javascript object that describes/defines the structure of a `json` document.

Model
: A compiled Schema that facilitates communication with a MongdDB server.

Instance
: A model that contains actual data, either assigned in your script or pulled from a MongoDB database.

### Materials
- [Mongoose Getting Started](https://mongoosejs.com/docs/)

### Key Takeaways
- Defining your model is the first step to using `mongoose` (after you have successfully connected).
  - Example: This [animal model](https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/2-sample-import/models/animal.js) describes this [animal data](https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/2-sample-import/seeds/animals.js).

---

## Open lab-time
### Activities
1. [Importing data into Atlas](https://github.com/sait-wbdv/sample-code/tree/master/backend/mongoose/2-sample-import)
    - [Converting Javascript objects into `json` files](https://gist.github.com/acidtone/9ba1c784d5f78fdc9dc4df9c6f26bcf8)

        Warning: `json` files are for data only. Don't include Javascript logic like `=`, `const`, etc. Stick to arrays and object values.
        {: .notice .notice--warning}

---

### Review Session: `json` API endpoints
- 

---

## Dailies
- None today.