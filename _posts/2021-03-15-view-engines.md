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
{% comment %}

## Morning reflection
- Listing global npm packages

    ```
    $ npm list -g --depth 0
    ```

### Housekeeping


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
- Views should only be used to compile HTML. `css` and `js` files should be linked externally to keep concerns separated.
- Express is view engine agnostic. Although we're covering `ejs` in class, there are many alternatives.
- There are two main ways to inject variables into a template:
  1. Globally (available to all templates) with `response.locals`.
  2. Locally (available to one template) as an optional second argument to `response.render()`.

---

## 2. EJS including template partials
### Learning Objectives


### Terminology
Template partials
: Repeated page fragments that can be added to any page.

### Materials
- Sample Code Activity: [Step 2 - Create view partials](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/2-include-partials)

### Key Takeaways
- Each template engine has its own rules for adding template partials. 
- In EJS, partials are added with `<%- include(path); %>`

---

## 3. Injecting global variables with `response.locals`
### Learning Objectives

### Materials
- Sample Code Activity: [Step 3 - Inject global variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/3-global-variables)

### Key Takeaways
- 

---

## 4. Injecting local variables with `response.render()`
### Learning Objectives

### Materials
- Sample Code Activity: [Step 4 - Inject local variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/4-local-variables)

### Key Takeaways
- The second argument for `.render()` expects an object. The name/value pairs will be injected into the template's scope.

---

## Open lab-time

---

### Tony's goals for Lab-Time

---
{% endcomment %}

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.