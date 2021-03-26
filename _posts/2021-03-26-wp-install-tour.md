---
layout: post
title: Wordpress Install (the classic way) and Feature Tour
categories: cpnt200
---

## Homework
1. Introduction to Wordpress
    - Reference:
        - [WordPress Codex](https://codex.wordpress.org/) (Developer Documentation)
        - [Basic Usage](https://wordpress.org/support/category/basic-usage/)
        - [Administration Screens](https://wordpress.org/support/article/administration-screens/)
2. Local Development Environments
    - [The 4 Best Local WordPress Development Environments in 2020: XAMPP vs MAMP vs Local vs DesktopServer](https://deliciousbrains.com/xampp-mamp-local-dev/) on Delicious Brains
    - [The Best Setup for Your Local WordPress Development Environment](https://deliciousbrains.com/wordpress-local-development-environment/) on Delicious Brains
3. Wordpress SQL Queries
    - [13 Useful WordPress SQL Queries You Wish You Knew Earlier](https://onextrapixel.com/13-useful-wordpress-sql-queries-you-wish-you-knew-earlier/)

---

## Morning reflection
### Housekeeping
- This afternoon: Review session and A4 answer key

---

## 1. Install WP
### Learning Objectives
1. Install a vanilla version of WP on your system.
2. Locate the `wp-config.php` file in a WP installation.

### Materials
- [Installing WP the classic way](https://wordpress.org/support/article/how-to-install-wordpress/)

### Key Takeaways
- This method of installation is a last resort but is sometimes needed. We'll use more modern methods next week but keep this installation as a code reference.
- **Pro-tip**: On the "Information needed" page that asks for an account username, DON'T use `admin` on production websites (it's fine for today). That's honey for hack bots. 

---

## 2. WP Tour
### Learning Objectives
1. Summarize the major features of the Wordpress Admin panel.
2. Locate the `wp-content` directory in a WP installation.
3. Understand the purpose of `wp-content` and the directories inside it.
4. Locate the database fields referenced in [13 Useful WordPress SQL Queries You Wish You Knew Earlier](https://onextrapixel.com/13-useful-wordpress-sql-queries-you-wish-you-knew-earlier/).

### Materials
- [WordPress Codex](https://codex.wordpress.org/) (Developer Documentation)
- [Basic Usage](https://wordpress.org/support/category/basic-usage/)
- [Administration Screens](https://wordpress.org/support/article/administration-screens/)

### Key Takeaways
1. The `wp-content` is the only directory you usually need to deal with for most projects. It's safe to ignore `wp-admin` and `wp-includes`.

    ```
    project-root
      ├─ wp-admin
      ├─ wp-content    
        ├─ plugins
        ├─ themes
            ├─ theme-1
            ├─ theme-2
            └─ theme-3
        └─ uploads
      └─ wp-includes
    ```

    - `plugins` contains all the (you guessed it) plugins you install from the Admin panel. Elementor (covered next week) is a theme-builder that will be installed as a plugin.
    - `themes` is the closest thing WP has to a `views` folder. This is where any installed themes are located.
    - `uploads` contains all the Media files you upload in the Admin panel.

2. Plugins
    - The number one source of blog bloat:
        - Beware of client projects that have more than 20 plugins;
        - Beware of plugins that are more than a major version out of date;
        - Beware of plugins that are no longer maintained.
3. Posts - great for content that:
    - has an author(s);
    - has a category;
        - See Codex: [Post Categories](https://en.support.wordpress.com/posts/categories/)
    - can be tagged;
        - See Codex: [Post Tags](https://en.support.wordpress.com/posts/tags/)
    - has a date:
        - is organized by date;
        - needs to be scheduled.
    - each post type can be assigned a page template
        - See Codex: [Post Templates](https://developer.wordpress.org/themes/template-files-section/post-template-files/)
    - don't support custom templates
    - can be customized by setting a [Post Format](https://developer.wordpress.org/themes/functionality/post-formats/) (the theme must explicitly support this)
4. Pages - great for content that:
    - is important enough to be in the primary navigation;
    - doesn't change often;
    - requires structured layouts
        - See Codex: 
            - [Page Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/)
                - [Custom Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/#creating-a-custom-page-template-for-one-specific-page)
                - [Template Partials](https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/#content-slug-php)
            - Note: Template pages override custom pages

---

## Review and Assignment 4 Answer Key
- Tony needs an example project from Assignment 3. Post your Heroku link and GH repo in the chat if you'd like Tony to make an example of you.

---

## Dailies
- No Daily for today.