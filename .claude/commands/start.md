---
description: Start a new PR by creating a feature branch following repo conventions
---

You are helping create a new pull request. Your task is to create a properly named feature branch and store context for the next commands.

## Step 1: Gather Information

Ask the user for the following information (use AskUserQuestion tool):

1. **Type**: Ask what type of change this is
   - Options: feat, fix, docs, style, refactor, content, design, perf, test, chore, hotfix
   - Most common: feat (new feature), fix (bug fix), content (content updates), design (visual improvements)
   - Default: feat

2. **Short Description**: Ask for a brief description (will be converted to kebab-case)
   - Example: "add blog section" or "update experience"
   - Will become: "add-blog-section" or "update-experience"

## Step 2: Create Branch

Format the branch name as: `{type}/{description-kebab-case}`

Examples:

- `feat/add-blog-section`
- `fix/mobile-navigation-overflow`
- `content/update-experience-webacy`
- `design/improve-dark-mode-transitions`
- `docs/update-readme`

Run the following commands:

```bash
git checkout -b {branch_name}
```

## Step 3: Store Context

Create a file `.claude/.pr-context.json` with the following structure:

```json
{
  "branch": "{type}/{description}",
  "type": "{type}",
  "description": "Short description",
  "started_at": "2025-01-17T12:00:00Z"
}
```

## Step 4: Confirm

Output a confirmation message:

```
✅ Created branch: {branch_name}

Next steps:
1. Make your code changes
2. Run `/commit` to stage and commit your changes
3. Run `/finish` to create the pull request
```

## Step 5: Task Tracking for Large Features (Optional)

If this is a large or complex feature, ask the user if they want to create a task tracking file:

**Question**: "This looks like a large feature. Would you like me to create a TASKS.md file to track your progress?"

If yes, create a file `.claude/TASKS.md` with this structure:

```markdown
# Tasks for {branch_name}

**Started**: {date}
**Type**: {type}
**Description**: {description}

## Tasks

- [ ] Task 1: {description}
- [ ] Task 2: {description}
- [ ] Task 3: {description}

## Completed

<!-- Tasks will be moved here as they are completed -->

## Notes

{Any additional context or notes}
```

Update this file as you work by:

1. Moving completed tasks from "Tasks" to "Completed" section
2. Changing `- [ ]` to `- [x]` when done
3. Adding new tasks as they are discovered

## Important Notes

- If the branch already exists, ask the user if they want to switch to it or create a new one with a different name
- If `.claude/.pr-context.json` already exists, ask the user if they want to overwrite it
- Always use `git checkout -b` to create AND switch to the new branch
- Ensure the branch name follows the convention: `{type}/{kebab-case-description}`
- Prefixes: feat/, fix/, docs/, style/, refactor/, content/, design/, perf/, test/, chore/, hotfix/
- For large tasks, create TASKS.md to track progress and mark items as done
