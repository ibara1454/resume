---
name: commit-push-pr
description: Commit staged changes, push the branch, and open a pull request using the project PR template.
---

# Commit, Push, and Open a PR

Follow the standard commit/push/PR workflow, but **always** respect the project PR template.

## PR Template

The following content is dynamically injected from `.github/PULL_REQUEST_TEMPLATE.md`:

!`cat .github/PULL_REQUEST_TEMPLATE.md`

## Steps

1. Commit any staged or unstaged changes with a conventional commit message (`type: description`).
2. Push the branch to the remote (with `-u` if it is a new branch).
3. Create the PR using `gh pr create`, filling every section of the template above:
   - Replace all `<!-- ... -->` comment placeholders with real content.
   - Check the appropriate boxes in "Type of Change" with `[x]`.
   - Never omit or skip template sections.
