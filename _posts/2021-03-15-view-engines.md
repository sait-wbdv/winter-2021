---
layout: post
title: Views and View Engines
categories: cpnt262
---

## Homework
1. View Engines
    - [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)
    - [EJS](https://ejs.co/)
      - [How To Use EJS to Template Your Node Application](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)
      - Search: [node ejs tutorial](https://www.google.com/search?q=node+ejs+tutorial)
      - Reference: [EJS home page](https://ejs.co/)
      - Reference: [EJS tag reference](https://www.npmjs.com/package/ejs#tags)
    - [Pug](https://pugjs.org/api/getting-started.html)
      - Search: [node pug tutorial](https://www.google.com/search?q=node+pug+tutorial)
    - [Handlebars](https://handlebarsjs.com/)
      - Search: [node handlebars tutorial](https://www.google.com/search?q=node+handlebars+tutorial)
2. `response.locals`
    - [res.locals](https://expressjs.com/en/api.html#res.locals) from Express documentation

---

## Morning reflection
- Listing global npm packages

    ```
    $ npm list -g --depth 0
    ```

### Housekeeping
- Final Project: Group Charter
- Semi-colons
- `in-class` code
  - finished examples will be pushed to `sample-code` throughout the week.

---

## 1. View Engines
### Learning Objectives
- Understand the purpose of a view engine.
- Install `ejs` as a project dependency.
- Set an express app view engine.
- Create a view template.
- Render an view template to html with `app.get()` and `response.render()`.

### Terminology
View engine
: A syntax parser that replaces variables in a template file with values, and transforms the template into an HTML file sent to the client.

### Materials
- Sample Code: [EJS Getting Started](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views)
  - Activity: [Step 1 - Create views](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/1-create-views)
- Article: [How To Use EJS to Template Your Node Application](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application) for the basics.

### Key Takeaways
See Takeaways in [EJS Getting Started](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views).

---

## 2. EJS including template partials
### Learning Objectives
- Create a template partial.
- Include a template partial in another file.

### Materials
- Sample Code Activity: [Step 2 - Create view partials](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/2-include-partials)

---

## 3. Injecting global variables with `response.locals`
### Learning Objectives
- Inject global variables with `response.locals`.
- Output a variable with `<%= %>`.

### Materials
- Sample Code Activity: [Step 3 - Inject global variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/3-global-variables)

---

## 4. Injecting local variables with `response.render()`
### Learning Objectives
- Inject local variables with `response.render()`.
- Output a variable with `<%= %>`.

### Materials
- Sample Code Activity: [Step 4 - Inject local variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/4-local-variables)

---

## Open lab-time
1. Using today's activity try converting one or more of your current/past projects.
2. Final Project Groups. Begin your Group Charter if you haven't already.

---

## Lab Time Demo: ???

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.