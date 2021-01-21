---
title: Command Line Cheatsheet
layout: page
---

## Terms

Command Line Interface (CLI)
: An alternative to Graphical User Interfaces (GUI) that are based on mouse clicks. Terminal apps come in a few flavours; in this course you can use a unix terminal of your choice.</dd>

The Terminal
: A nickname for an application that understands one or more Command Line Interfaces (CLIs).

Workspace
: A dedicated folder(s) on your system for the projects you'll be working on.

Command Prompt
: Usually the last line shown in the terminal where you enter your commands. Often represented by a `$` or `#` in examples online (see warning below).

---

**Notice**: General information will be displayed in boxes such as this one. Warnings will be in red (see below) for information that will help you avoid potential problems. 
{: .notice .notice--info}

**Warning**: There are two flavours of "command line": Windows and Unix. We will be using the latter: Git Bash (installed along with Git) on Windows and Terminal on Mac (Mac is unix-based so almost any terminal app will do; Tony uses [iTerm](https://iterm2.com/)). 
{: .notice .notice--warning}

## Navigating the file system
Most of the command line tools we will be using in this course (like Git, [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)) will **depend greatly on which directory you are in**. We will cover the three system commands that help up us navigate the file system.

**Note**: The examples below start with a `$`. Do not include this when typing commands; it's there to represent the command prompt.

- `pwd`
  - displays your 'present working directory'. This will usually default to your home folder when you first open your terminal.
- `ls`: Lists the contents of your current directory. The `-l` **flag** lists extra information and `-a` lists hidden files. `-la` will list extra information _and_ also all hidden files. Examples:
    - `$ ls` (lists file and directory name of the current folder)
    - `$ ls -l` (lists full directory information)
    - `$ ls -a` (lists hidden files)
    - `$ ls -la` (lists full information plus hidden files)
- `cd`: changes your directory based on the path you provide after the command (separated by a space). Examples:
  - `$ cd Documents/sait`
  - `$ cd /` (moves to the top root folder)
  - `$ cd` (moves to user home folder)
  - `$ cd ..` (moves up one directory level)
  - `$ cd ../../some-directory` (moves up two directories and into "some-directory")

**Notice**: Below are _Pro-tips_ that will give you some hints on how the pros do things. In this case, there are some _quality of life_ tips that will reduce the grind if using the command line. 
{: .notice .notice--info}

**CLI Quality of Life Tip #1**: The tab key auto-completes file names and directories.
{:  .notice .notice--pro-tip}

**CLI Quality of Life Tip #2**: Use the Up Arrow to browse through the history of last used commands.
{:  .notice .notice--pro-tip}

### Questions to Consider
- What is the starting directory when you open a terminal on your system?
- What files and directories are in this initial directory?
- What file did you last open? Try to find it using only the terminal.
- What's at the top of your directory structure? How do you get there?
- Using the terminal, find the directory you've chosen to store your projects.
