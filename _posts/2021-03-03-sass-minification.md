---
layout: post
title: Build Tools - Sass and Minification
categories: cpnt201
---

## Homework
1. Sass Documentation
    - Reference: [Sass Basics](https://sass-lang.com/guide)
    - Reference: [Sass Docs](https://sass-lang.com/documentation)
    - Reference: [Sass Guidlines](https://sass-guidelin.es)
2. Sass Articles
    - Read: [Getting Started with SASS](https://scotch.io/tutorials/getting-started-with-sass) on Scotch.io
    - Read: [The Sass Ampersand](https://css-tricks.com/the-sass-ampersand/) on CSS Tricks
    - Read: [Introducing Sass Modules](https://css-tricks.com/introducing-sass-modules/)
    - Read: [How to easily use Google Fonts with Sass](https://www.developerdrive.com/how-to-easily-use-google-fonts-with-sass/)
    - Reference: [Steve Griffith's Sass Playlist](https://www.youtube.com/playlist?list=PLyuRouwmQCjlzPHwHOAIfIFXkf6J8Q_qy)
3. Sass Tools
    - [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
4. Minification
    - Read: [What is Minification?](https://blog.stackpath.com/glossary-minification/)
    - Tools: 
        - VS Code: [VS Code Minify Extension](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify)
        - JS
            - [UglifyJS](https://github.com/mishoo/UglifyJS)
            - [Google Closure Compiler](https://developers.google.com/closure/compiler/)
            - [YUI Compressor](https://yui.github.io/yuicompressor/)
        - CSS
            - [cssnano](https://github.com/cssnano/cssnano)
            - [CSSO](https://github.com/css/csso)
            - [uncss](https://github.com/uncss/uncss)


---

## Morning reflection
### Housekeeping
1. Clarifications on CPNT 201 Assignments 4 & 5.

---

## 1. Sass fundamentals
### Learning Objectives
- Define CSS pre-processors.
- Install a Sass compiler using a VS Code Extension.
- Demonstrate common features of the Sass language:
    - variables with `$`
    - nested rules
    - nested selectors with `&`
    - mixins
    - functions
    - conditionals with `@if`/`@else if`/`@else`
    - inheritance with `@extend`

### Terminology
Dependency
: A software module/library/framework that your code needs to have  installed before it can function. Sass is a dependency.

Build Tool/Process
: Software that optimizes/prepares/packages your source files for deployment to a live server. Sass compilers and minifiers are dependencies.

CSS Preprocessor
: A program that lets you generate CSS from the preprocessor's own unique syntax. These programs provide added features that make the CSS structure more readable and easier to maintain. 

Watching
: When a preprocessor "watches" for changes to `.scss` files so it can compile them to `.css` immediately.

### Materials
- VS Code Extension: [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- Gist: [Common Sass Examples](https://gist.github.com/acidtone/58178e5f10aaa6154b3cd05917f205e4)

### Key Takeaways
- Sass is a dependency that requires a "build process" to compile `.scss` files into `.css` files before your site will work in a browser.
- When adding your stylesheets to your HTML, you will link the **compiled css**. Sass files will not work in a browser.
- `@import` has recently been deprecated (discontinued) in favour of `@use` and `@forward`. We will cover these today if we have time.

---

## 2. CSS and JS Minification
### Learning Objectives
- Define minification.
- Install a Minifier using a VS Code Extension.

### Terminology
Minification
: A build process that reduces CSS and JS file size by removing comments and whitespace. Advanced compilers will also reduce JS variable/function names to `a`, `b`, `c`, etc.

### Materials
- VS Code Extension: [JS & CSS Minifier (Minify)](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify)

### Key Takeaways
- Unlike Sass, minification isn't a dependency. Browsers don't care if a file is minified but it increases performance.
- When adding your files to your HTML, you will link the **minified versions**. 
- Source maps (`.map` files) are not required for minified files to operate but they help with reading minified code in the browser.

---

## Open lab-time
1. Refactor a project using Sass
    1. Pick one of your larger projects.
    2. Walkthrough: Find examples of repetitive code that can be simplified with Sass:
        - property names -> variables
        - selectors -> nested rules
        - groups of rules -> mixins
        - vendor prefixes -> mixins
2. Assignments!

---

### Tony's goals for Lab-Time

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.