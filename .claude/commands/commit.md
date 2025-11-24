---
description: Stage and commit changes with proper formatting following repo conventions
---

You are helping commit changes for a pull request. Your task is to stage all changes and create a properly formatted commit message following Conventional Commits.

## Step 1: Check for Context

Load the context from `.claude/.pr-context.json` if it exists to get the change type.

If the file doesn't exist:

- Ask the user for the change type (feat, fix, docs, style, refactor, perf, test, chore)
- Store this information for later use

## Step 2: Show Changed Files

Run the following command to show what will be staged:

```bash
git status
git diff --name-only
```

Display the list of modified files to the user and ask for confirmation:

```
The following files will be staged:
- src/file1.ts
- src/file2.ts
- src/file3.ts

Do you want to proceed with staging these files?
```

## Step 3: Ask for Commit Message

Ask the user for a commit message summary (use AskUserQuestion tool):

- Question: "What is the summary of your changes?"
- Example: "add passport expiration tracking"

Optionally ask for a scope:

- Question: "What scope/module does this affect? (optional, press enter to skip)"
- Example: "passports" or "auth" or leave empty

## Step 4: Format Commit Message

Format the commit message using bracket prefix style:

```
[ Type ] Description
```

Examples:

- `[ Feature ] Add blog section with MDX support`
- `[ Bug ] Fix mobile navigation overflow`
- `[ Content ] Update experience with Webacy role`
- `[ Design ] Improve dark mode theme transitions`
- `[ Refactor ] Simplify contact form validation`
- `[ Analytics ] Add Umami event tracking for talks`
- `[ SEO ] Update meta tags for talks page`

**Type mapping:**

- Feature: New functionality or pages
- Bug/Fix: Bug fixes and corrections
- Content: Content updates (experience, projects, talks, etc.)
- Design: Visual and styling improvements
- Refactor: Code improvements without feature changes
- Analytics: Analytics and tracking additions
- SEO: SEO and metadata improvements
- Docs: Documentation updates
- Test: Adding or updating tests
- Chore: Build process or dependency updates

**Important**: Keep the message concise and single-line only!

## Step 5: Stage and Commit

Run the following commands:

```bash
git add {list of modified files}
git commit -m "{formatted commit message}"
```

If the commit fails, show the user the error and help resolve it.

## Step 6: Update Context

Update `.claude/.pr-context.json` with the commit information:

```json
{
  "branch": "feat/add-talks-section",
  "type": "feat",
  "description": "add talks section",
  "started_at": "2025-01-17T12:00:00Z",
  "commit_message": "[ Feature ] Add talks section with conference presentations",
  "commit_summary": "add talks section with conference presentations",
  "committed_at": "2025-01-17T12:30:00Z"
}
```

## Step 7: Confirm

Output a confirmation message:

```
✅ Staged {N} files
✅ Committed with message: {commit_message}

Next step:
Run `/finish` to create the pull request
```

## Important Notes

- Always show the user what files will be staged before committing
- The commit message MUST be a single line following bracket prefix format: `[ Type ] Description`
- Do NOT use co-authored-by in the commit message
- Do NOT add emojis or special characters unless the user requests it
- If there are no changes to commit, inform the user
- Keep the description clear and concise
