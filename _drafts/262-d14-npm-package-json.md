---
layout: post
title: npm and package.json
categories: cpnt262
---
## Housekeeping
- CPNT 262 Exercises and Assignment 1 Marks
- CPNT 262 [Assignment 3](https://github.com/sait-wbdv/assessments/tree/master/cpnt262)
- Daily Code dropboxes in Brightspace: Days 14-20

## Homework
1. Review
    - [File and Directory Cheatsheet]({{site.basurl}}/cheatsheets/naming-conventions)
    - [Command Line Cheatsheet]({{site.basurl}}/cheatsheets/command-line)
2. NPM
    - Read: [An Absolute Beginner's Guide to Using NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
    - Read: [Anatomy of a `package.json` File](https://www.digitalocean.com/community/tutorials/nodejs-package-json) on Digital Ocean
    - Reference: Node Documentation
        - [An introduction to the npm package manager](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)
        - [Where does npm install the packages?](https://nodejs.dev/learn/where-does-npm-install-the-packages)
        - [The `package.json` guide](https://nodejs.dev/learn/the-package-json-guide)
        - [The `package-lock.json` file](https://nodejs.dev/learn/the-package-lock-json-file)
        - [Semantic Versioning using npm](https://nodejs.dev/learn/semantic-versioning-using-npm)

---

## Terminology
Source: First three definitions from [Learn and Understand NodeJS](https://www.udemy.com/course/understand-nodejs/) (Paid Udemy course) by Tony Alicea
<dl>
  <dt>npm Package</dt>
  <dd>Third-party code that is managed and maintained with a package management system.</dd>
  <dt>Package Management System</dt>
  <dd>Software that automates installing and updating packages, including their versions and dependencies.</dd>
  <dt>Dependency</dt>
  <dd>Code that another set of code depends on to function. If you use that code in your app, it's a dependency. Your app depends on it. Each dependency will most likey have their own list of dependencies, which npm helps manage.</dd>
  <dt>Development Dependency</dt>
  <dd>An npm package that's only needed during development (i.e. nodemon to help reload new code). These dependencies should be ignored when the app is in production.</dd>
  <dt>Production Dependency</dt>
  <dd>An npm package that is needed for a node project to function. Express is the best example of this.</dd>
  <dt>Global npm Package</dt>
  <dd>A package that is installed globally on your machine so that it's available to every project. Global packages will not show up in your <code>node_modules</code> directory.</dd>
</dl>

---

## 1. Introduction to npm and the `node_modules` directory

**Cheatsheet**: [npm Introduction](https://github.com/sait-wbdv/sample-code/tree/master/backend/npm)

---

## 2. Installing development dependencies

**Activity**: [Initialize a new project and install nodemon](https://github.com/sait-wbdv/sample-code/tree/master/backend/npm/hello-npm)

---

## 3. Installing production dependencies

**Activity**: [Install moments in an existing project](https://github.com/sait-wbdv/sample-code/tree/master/backend/npm/hello-moment)

---

## Activities
- [Initialize a new project and install nodemon](https://github.com/sait-wbdv/sample-code/tree/master/backend/npm/hello-npm)
- [Install moments in an existing project](https://github.com/sait-wbdv/sample-code/tree/master/backend/npm/hello-moment)
- [Installing project dependencies from a cloned repo](https://github.com/sait-wbdv/sample-code/tree/master/backend/npm/hello-npm-install)

---

## Clean-up Time!
- Don't forget to submit your code to the appropriate Daily Code dropbox on Brightspace.
- [Tomorrow]({% link _posts/2020-11-03-static-express-heroku.md %})