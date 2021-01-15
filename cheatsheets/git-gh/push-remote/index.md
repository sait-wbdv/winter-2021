---
title: "Push commits to a remote repo"
layout: page
---

## Dev Life
In the course of an average professional project, a developer should be regularly:
- pulling new code recently contributed by team members;
- pushing committed code to a remote repository (preferably daily).

## Prerequisits
- [Local repo linked to a remote repo]({{site.baseurl}}/cheatsheets/git-gh/sync-remote)

## Pushing commits to a remote repo
1. In team projects (or if you work on multiple machines), **you will need to `pull` recent updates from the remote repo before Git will allow you to push**.

    ```
    $ git pull
    ```

If you are working alone on one machine, you can usually skip this step.

2. When you are ready, you can push your changes from your local repo to a remote repo using (assuming these repos are already linked) with the following command:

    ```
    $ git push
    ```

## Relevant Cheatsheets
- [Commiting changes to a local repo]({{site.baseurl}}/cheatsheets/git-gh/add-commit)
