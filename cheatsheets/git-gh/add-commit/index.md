---
title: "Commiting changes to a local repo"
layout: page
---
## Prerequisites 
- [Local repo initialized]({{site.baseurl}}/cheatsheets/git-gh/init-local)

## Terms
Unstaged changes
: Changes to a file (modified, moved or deleted) that have not been added to the staging area.

Staged file
: A file that has changes ready to be commited. Files are staged using the `git add`.

Untracked file
: A file that has never been staged using `git add`.

## Committing changes
An example routine most developers will follow in a given work-day:

1. Navigate to the project directory using a unix shell terminal.
2. Type  to see an overview of the state of your repo. 

    ```
    $ git status
    ```

    - If you haven't made any changes since your last commit, you should see the message "_nothing to commit, working tree clean_" (try making some changes to a file);
    - If no repo exists, you should see the message "fatal: not a git repository". See: [Creating local Git Repositories]({{site.baseurl}}/cheatsheets/git-gh/creating-repos/);
    - Otherwise, you should see a list of staged/unstaged/untracked changes.
3. Stage your changes:
    
    ```
    $ git add <relative file path>
    ```

    Note: you can also add all files at once with `git add --all` or `git add .` but be careful you don't add files you son't want to commit.
4. `git status` to double-check your staged changes before you commit (probably listed in green).
5. Commit your changes:

    ```
    $ git commit -m "concise description of your changes"
    ```
    
    If you forget to add the `-m "<message>"`, Git will probably open your default command line file editor (probably Vim) so you can add your change manually (not fun for beginners).
    
6. Confirm that you have a clean "working tree":

    ```
    $ git status
    ```

7. Make some changes to your code and start again at Step 2. You should be committing changes to your local repo at least at the end of a work day/session.

## Relevant Cheatsheets
- [Create and sync a remote repo]({{site.baseurl}}/cheatsheets/git-gh/sync-remote)
- [Push commits to a remote repo]({{site.baseurl}}/cheatsheets/git-gh/push-remote)
