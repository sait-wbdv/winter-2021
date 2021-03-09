---
layout: post
title: npm and package.json
categories: cpnt262
---

## Homework
1. npm
    - Read: [An Absolute Beginner's Guide to Using NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
    - Read: [Anatomy of a `package.json` File](https://www.digitalocean.com/community/tutorials/nodejs-package-json) on Digital Ocean
    - Reference: Node Documentation
        - [An introduction to the npm package manager](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)
        - [Where does npm install the packages?](https://nodejs.dev/learn/where-does-npm-install-the-packages)
        - [The `package.json` guide](https://nodejs.dev/learn/the-package-json-guide)
        - [The `package-lock.json` file](https://nodejs.dev/learn/the-package-lock-json-file)
        - [Semantic Versioning using npm](https://nodejs.dev/learn/semantic-versioning-using-npm)
2. Tools
    - Dates
        - npm: [`dayjs`](https://www.npmjs.com/package/dayjs)
        - [Why you shouldn't use Moment.js...](https://inventi.studio/en/blog/why-you-shouldnt-use-moment-js)


---

## Morning reflection
### Housekeeping
1. Tomorrow: 
    - Draft - Assignments 4 & 5
    - Draft - Final Project
    - Groups for Final Project

---

## 1. The `http` builtin module
### Learning Objectives
- Create a simple `http` server using Node.
- Understand when code is executed:
  - on initial script execution;
  - when a `request` event occurs.
- Start a server on port `8080`.

### Materials
- Gist: [Create a local `http` server](https://gist.github.com/acidtone/4f96eefab57e9ab8d2ec4e21f6029be3)

### Key Takeaways
- The `http` module allows us to create servers without installing dependencies but it requires a lot of work to setup the features that a production server requires (`404` handling, reading HTML files from the file system, etc).
- Starting tomorrow, we'll use `npm` to install the `express` framework, which simplifies the creation and management of web servers.

---

## 2. An introduction to `npm`
### Learning Objectives
- Define [common terminology for `npm` projects](https://gist.github.com/acidtone/9a52204b37465c860decd481ab130727).
- Summarize the history of `npm`.
- Define the problem that `npm` solves.
- Understand [semantic versioning](https://nodejs.dev/learn/semantic-versioning-using-npm) and `update` rules.
  - `~1.2.3`: Auto-update patch releases (`1.2.x`)
  - `^1.2.3`: Auto-update minor releases (`1.x`)

### Materials
- Gist: [An introduction to `npm`](https://gist.github.com/acidtone/01ce4933169a17011659c525233442b5)

### Key Takeaways
- `npm` is great but it has a weakness: it's hosted by a single registry that can go offline. When this happens, it's impossible to `install` and `update` dependencies. 

---

## 3. Creating `npm` projects
### Learning Objectives
- Recognize the presence/absence of an `npm` project.
- Understand the [anatomy of a `package.json` file], specifically:
  - `name`: name of the project
  - `main`: Entry script filename (i.e. `app.js`, `server.js`, etc)
  - `scripts`: Command line shortcuts
  - `dependencies`: Project production dependencies
  - `devDependencies`: Project Development dependencies
- Initialize a new `npm` project

### Materials
- [Anatomy of a `package.json` file]((https://www.digitalocean.com/community/tutorials/nodejs-package-json))
- Gists: [`npm` - Getting started](https://gist.github.com/acidtone/d57f41d7c18d0d198263c7bc3ab230e3)

### Key Takeaways
- `npm` projects are usually in the same root directory as a `git` repository.
- Don't initialize projects within projects.
- Add `node_modules` to your `.gitignore` file to avoid storing needless files in your repository.
- Commit `package.json` and `package-lock.json` to your repository.
- Don't manually edit `package-lock.json`. This is maintained by `npm` to lock dependencies to specific versions/ranges.
- Update `package.json` by the command line (or other tool) unless you're comfortable editing the file manually.

---

## 4. Installing new dependencies
### Learning Objectives
- Evaluate an `npm` package vs alternatives.
- Install a package from the `npm` registry.
- Import a package into a Node app.

### Materials
- Activities: 
  - [Install DayJS using `npm`](https://gist.github.com/acidtone/232d9c9a0997692483fca51b6f624a61)

### Key Takeaways
- `momentjs` is an industry favourite for handling dates but even [the maintainers recommend more modern alternatives](https://momentjs.com/docs/#/-project-status/).
- There are many `npm` options for date handling. Here's a [handy breakdown](https://medium.com/swlh/best-moment-js-alternatives-5dfa6861a1eb) of the most popular ones.

---

## Open lab-time
### Activities
1. Using the internet and the simple `http` server created earlier today, figure out how to send the requested URL as a response instead of "Hello World".
2. Output a fancy date to a web site.
    1. [Create a simple `http` server](https://gist.github.com/acidtone/4f96eefab57e9ab8d2ec4e21f6029be3);
    2. Initialize a new `npm` project;
    3. Install `dayjs` as a dependency;
    4. Load `dayjs` into the `http` script;
    5. Add a fancy date to the "Hello World" message sent by the server.
3. Prep for tomorrow: create a new `npm` project and install `express` as a dependency.

---

### Tony's goals for Lab-Time

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.