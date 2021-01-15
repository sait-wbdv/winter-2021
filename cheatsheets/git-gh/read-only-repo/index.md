---
title: "Cloning a read-only repo"
layout: page
---

The materials for this course are all stored as public repos that you can clone onto your system. These are meant to be for reference in support of each day's lesson. It is not expected that you will be altering these files.

### Terms
Read-only Repo
: A remote repository (on a service such as GitHub) that you do not own or have permission to change.

## Prerequisites
- Git installed
- Public remote repo

## Cloning a repo
1. Using the terminal, navigate to the directory you will be storing the repos associated with this program.
2. Confirm that you are not already in a git repository:

    ```
    $ git status
    ```

    This should return "fatal: not a git repository" or similar. If the command outputs branch information, you're inside a repo you've already created. That's a tricky situation you should ask your closest Git nerd about.
3. On GitHub navigate to the repository you would like to clone. For example, here is the [WBDV sample-code](https://github.com/sait-wbdv/sample-code) repo.
4. Copy the clone URL listed under the green `Code` menu. GitHub recommends you use the [HTTPS link](https://stackoverflow.com/questions/11041729/why-does-github-recommend-https-over-ssh).
5. Clone the repo to your machine using the URL you just copied:

    ```
    $ git clone https://github.com/sait-wbdv/sample-code.git
    ```

6. Navigate to the new directory that Git created in your location. This is a step you will often forget:

    ```
    $ cd <dir-name>
    ```

7. Confirm the status of your new local repo:

    ```
    $ git status
    ```

### Refreshing your local repo
Your instructor will be pushing updates to the program repos throughout this program. You can refresh your local copy by pulling new changes:

    ```
    $ git pull
    ```

The connection between your local copy and the remote master copy was created when you first created clone the repo.

## Relevant Cheatsheets
- [Initializing a new local repo]({{site.baseurl}}/cheatsheets/git-gh/init-local)
- [Commiting changes to a local repo]({{site.baseurl}}/cheatsheets/git-gh/add-commit)
- [Create and sync a remote repo]({{site.baseurl}}/cheatsheets/git-gh/sync-remote)
- [Push commits to a remote repo]({{site.baseurl}}/cheatsheets/git-gh/push-remote)