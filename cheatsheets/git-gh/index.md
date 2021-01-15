---
title: "Git and GitHub"
layout: page
---
## Prerequisites 
- Git installed
- Github Account created
- [Command Line Cheatsheet]({{site.basurl}}/cheatsheets/command-line)
- [Naming Conventions Cheatsheet]({{site.basurl}}/cheatsheets/naming-conventions)

## Relevant Cheatsheets
- [First Time Setup]({{site.baseurl}}/cheatsheets/git-gh/setup)
- [Cloning a read-only repo]({{site.baseurl}}/cheatsheets/git-gh/read-only-repo)
- [Initializing a new local repo]({{site.baseurl}}/cheatsheets/git-gh/init-local)
- [Commiting changes to a local repo]({{site.baseurl}}/cheatsheets/git-gh/add-commit)
- [Create and sync a remote repo]({{site.baseurl}}/cheatsheets/git-gh/sync-remote)
- [Push commits to a remote repo]({{site.baseurl}}/cheatsheets/git-gh/push-remote)


## Terms
Version Control
: A category of software tools that help a software team manage changes to source code over time.

Repository (aka repo)
: Technically, a collection of commits, and branches and tags to identify commits. You can think of a repo as a directory of code that is tracked using Git.

Local Repository
: A repo that is located on your local machine.

Remote Repository
: A repo that is located on another machine or server. For the purposes of this course, all of your remote repos will be located on GitHub.

Initialize a Repository
: A method of creating a new repo in the current directory using the `git init` command.

Linking a Repository
: To associate a local repo on your system to a remote repo (i.e. on GitHub). This is done automatically when you clone a repo. Otherwise, a link can be created using the `git remote` command.

Clone a Repository
: A method of copying a remote repo to your local system using the `git clone` command.

Fork a Repository
: A GitHub feature that allows you to copy a third-party GH repo into your GH account. Note: this is _not_ a native Git feature.

Commit Changes to a Repository
: A saved "snapshot" of the repo at any given time using the `git commit` command.

Unstaged changes
: Changes to a file (modified, moved or deleted) that have not been added to the staging area.

Staged file
: A file that has changes ready to be commited. Files are staged using the `git add`.

Untracked file
: A file that has never been staged using `git add`.

Stage a File(s) to be Committed
: Git is an "opt-in" environment. Changes to a file need to be "staged" before they can be committed to a repo. You do this using the `git add` command.

Pull Changes _from_ a Remote Repository
: To update a local repo with the commits from a remote repo using the `git pull` command. This needs to be done **before you can push changes** (assuming the local and remote repos are out of sync).

Push Changes _to_ a Remote Repository
: To synchronize a remote repo with the commits from a local repo using the `git push` command.
