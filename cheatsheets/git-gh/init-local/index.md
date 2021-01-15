---
title: "Initializing a new local repo"
layout: page
---

## Terminology
Project
: A directory that contains all the files needed for a website or application to function.

## Prerequisites
- Git installed
- Existing project that's not a repo (i.e. a directory of text files)

## Initializing a new repo
1. Using the terminal, navigate to your project directory.
2. Confirm that you are not already in a git repository:

    ```
    $ git status
    ```

    should return "fatal: not a git repository" or similar. If the command outputs branch information, you're inside a repo you've already created. That's a tricky situation you should ask your closest Git nerd about.

3. Initialize an empty repo. **Note**: It's very important that you are in the root folder of your project when you do this.

    ```
    $ git init
    ```

4. Stage your project files. "Staging" is an extra step you need to do before you can commit any changes. This gives you better control over your commit history (although it can be a pain).

    ```
    $ git add --all
    ```

5. Commit your changes. This is Git's version of saving your files.

    ```
    $ git commit -m "initial commit"
    ```

6. Confirm that you're up to date.

    ```
    $ git status
    ```

    You can never `git status` too much. If you have no changes to stage or commit, you'll see a message similar to `nothing to commit, working tree clean`.

## Relevant Cheatsheets
- [Commiting changes to a local repo]({{site.baseurl}}/cheatsheets/git-gh/add-commit)
- [Create and sync a remote repo]({{site.baseurl}}/cheatsheets/git-gh/sync-remote)
- [Push commits to a remote repo]({{site.baseurl}}/cheatsheets/git-gh/push-remote)