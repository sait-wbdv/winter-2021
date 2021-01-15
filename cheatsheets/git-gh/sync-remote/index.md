---
title: "Creating and syncing a remote repo"
layout: page
---

### Terms
Remote
: A remote repo that is associated with a local repo.
  
Origin
: A shorthand name for the default remote repository URL.

### Assumptions
- Git installed and [configured]({{site.baseurl}}/cheatsheets/git-gh/setup)
- GitHub Account created
- Existing local repo exists (with no linked remotes)

### Link and push initial commit to empty local repo
1. Navigate to the root directory of the repo you'd like to push.
2. Ensure you have a clean working tree with `git status`.
3. Ensure there aren't already remotes attached to your local repo:

    ```
    $git remote -v
    ```

    Should return nothing.

4. Create an empty remote repo on GitHub.
    - Name your repo.
    - Add a description (optional)
    - Choose "Public" if you'd like to publish to GH Pages.
    - Do NOT check any boxes under "Initialize this repository with..." and submit.
5. Step 4 will lead you to a page of commands to enter, depending on your situation. Copy the code under the heading **…or push an existing repository from the command line**, paste them into your terminal and run them: 

    ```
    $ git remote add origin <remote-repo-url>
    $ git branch -M main
    $ git push -u origin main
    ```

6. Refresh the GitHub page and you should see your code listed instead of the example commands.