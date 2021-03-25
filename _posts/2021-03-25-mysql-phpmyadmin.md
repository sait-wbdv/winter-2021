---
layout: post
title: MySQL and phpMyAdmin
categories: cpnt200
---

## Homework
1. SQL Syntax
    - Read: [SQL Syntax](https://www.w3schools.com/sql/sql_syntax.asp) from w3schools (and the world ends...)
    - Reference: 
        - [SQL INSERT INTO Statement](https://www.w3schools.com/sql/sql_insert.asp)
        - [SQL SELECT Statement](https://www.w3schools.com/sql/sql_select.asp)
        - [SQL WHERE Clause](https://www.w3schools.com/sql/sql_where.asp)
        - [SQL ORDER BY Keyword](https://www.w3schools.com/sql/sql_orderby.asp)
        - [SQL UPDATE Statement](https://www.w3schools.com/sql/sql_update.asp)
        - [SQL DELETE Statement](https://www.w3schools.com/sql/sql_delete.asp)
2. Relational Databases
    - Read: [Summary - Relational Database Model](https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl)
    - Read: [MariaDB vs MySQL](https://www.guru99.com/mariadb-vs-mysql.html)
3. phpMyAdmin
    - Read: [How to Manage Databases with phpMyAdmin](https://www.siteground.com/tutorials/phpmyadmin/database-management/)
    - Read: [How to Create and Populate Tables](https://www.siteground.com/tutorials/phpmyadmin/create-populate-tables/)
4. MySQL with PHP and phpMyAdmin
    - Watch: [PHP Tutorial #23 - MySQL Introduction](https://youtu.be/N2L9KZo2szY) by Net Ninja
    - Watch: [PHP Tutorial #24 - Setting Up a MySQL Database](https://youtu.be/YFlIw4KMpVM)
    - Watch: [PHP Tutorial #25 - Connecting to a Database](https://youtu.be/zpTlJ6dtOxA)
    - Watch: [PHP Tutorial #26 - Getting Data From a Database](https://youtu.be/WGuyxGJW9hs)
    - Watch: [PHP Tutorial #27 - Rendering Data to the Browser](https://youtu.be/3T8bp9DlypU)
    - Watch: [#31 - Getting a Single Record](https://youtu.be/G8OYy-y3C9A)
    - Reference:
        - [mysqli_query](https://www.php.net/manual/en/mysqli.query.php)
        - [mysqli](https://www.php.net/manual/en/class.mysqli.php)

---
{% comment %}

## Morning reflection
### Housekeeping

---

## 1. Relational Data Models
### Learning Objectives
- Define the features of a relational data model.
- Understand how to read and diagram a data model using and Entity Relationship Diagram (ERD).
- Demonstrate common relationships found in relational data models:
  - One-to-many
  - Many-to-many
- Define [normalization](https://www.guru99.com/database-normalization.html)
- Summarize the similarities and differences between MySQL and MariaDB.

### Materials
- [Relational Terminology](https://github.com/sait-wbdv/php-sample-code/tree/main/mysql)
- [ERD Diagrams](https://www.lucidchart.com/pages/er-diagrams)
- [ERD Symbols](https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning)
- [`aviano-db` source repo](https://github.com/hurshd0/aviano-db)

### Key Takeaways
- Naming convensions for database tables:
  - lowercase
  - spaces replaced with underscores
  - no numbers
  - valid, descriptive names no longer than 64 characters

---

## 2. `phpMyAdmin` Tour
### Learning Objectives
- Perform common operations using the `phpMyAdmin` control panel:
  - Create a database.
  - Define a table.
  - Insert data into a table.
  - Perform SQL queries against a database.

### Materials
- [Activity: Create an `animals` database](https://github.com/sait-wbdv/php-sample-code/blob/main/mysql/phpmyadmin.md)

### Key Takeaways
- Changing the structure of a database can be difficult after you insert data. Getting it right the first (or second) time can be difficult and the reason NoSQL databases are popular.
- It's important to not forget your constraints. A key concept of relational data models is maintaining data integrity.

---

## 3. SQL Queries
### Learning Objectives
- Understand the syntax of common SQL queries.
- Perform common CRUD operations on a database using SQL.
  - Create a record with `INSERT`.
  - Retrieve a record with `SELECT`.
    - Filter results with `WHERE` conditions.
    - Sort results with an `ORDER` clause.
  - Update a record with `UPDATE`.
    - Target records with `WHERE` conditions.
  - Combine the results from two tables with `INNER JOIN`.
- Define a `mysql` function.

### Terminology
### Materials
- [SQL Syntax Basics](https://github.com/sait-wbdv/php-sample-code/blob/main/mysql/sql-syntax.md)
- [18 Useful SQL Functions](https://learnsql.com/blog/18-important-sql-functions-learn-2018/)

### Key Takeaways
- Inserting data using `phpMyAdmin` can be a pain. You will often create an import script instead. This can be done with your language of choice.
- We rarely delete records in industry. Instead, there will usually be an `active` field (or similar) that is set to `yes` or `no`.

---

## Open lab-time


---

### Tony's goals for Lab-Time

---
{% endcomment %}

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.