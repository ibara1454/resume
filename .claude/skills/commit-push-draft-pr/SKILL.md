---
name: commit-push-draft-pr
description: Commit staged changes, push the branch, and open a draft pull request using the project PR template.
allowed-tools: Bash(git checkout:*), Bash(git add:*), Bash(git status:*), Bash(git push:*), Bash(git commit:*), Bash(gh pr create:*)
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`

## PR Template

The following is the project's PR template. You MUST use it when creating the PR — do not skip, omit, or reorder any section:

!`cat .github/PULL_REQUEST_TEMPLATE.md`

## Your task

Based on the above changes:

1. Create a new branch if on main
2. Create a single commit with an appropriate message
3. Push the branch to origin
4. Create a draft pull request using `gh pr create --draft`
5. You have the capability to call multiple tools in a single response. You MUST do all of the above in a single message. Do not use any other tools or do anything else. Do not send any other text or messages besides these tool calls.
