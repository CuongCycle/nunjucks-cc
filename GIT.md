# Nunjucks CC Boilerplate (NCC) Git Flow

## Branching model

- Development branch is `develop`
  The integration branch is used for development. Feature branches are merged back into this branch

- Production branch is `master`
  The branch is used for deploying releases. Only the develop brand is merged to this branch

## Branch name

Use branch prefix and description to describe
Example: `feat/TASK-DESCRIPTION`

## Branch prefixes

Use the prefixes below:

- Fixing Bug: `fix/` This is used for fixing bugs
- Feature: `feat/` This is used for specific feature
- Improvement: `chore/` This is used for improving feature or refactoring code

## Pull Request

- All Features and Fixing Bug branches are pull to `develop` branch

## Pull request (PR) description

- Please summarize what did you do.
- What pages or components will be impacted.

### To-Do List (if WIP):

- [x] Sub Task 1
- [ ] Sub Task 2
- [ ] Sub Task 3

If your PR is working in progress, please add prefix [WIP] on title of PR

## Git Tag

Every build or sprint need to tag with prefix `v1.0` and so on

```
git tag -a v1.0 -m "My first version"
```
