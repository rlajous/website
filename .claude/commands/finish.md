---
description: Create a pull request with comprehensive description following repo best practices
---

You are helping create a pull request with a comprehensive description. Your task is to gather information, generate the PR description, push the branch, and create the PR.

## Step 1: Load Context

Load the context from `.claude/.pr-context.json`.

If the file doesn't exist or is incomplete:

- Ask the user for missing information (branch name, commit message, type)
- Inform them they should run `/start` and `/commit` first for the best experience

## Step 2: Gather Changed Files

Run the following commands to understand what changed:

```bash
git diff --name-only main...HEAD
git diff --stat main...HEAD
```

Show the user the list of changed files.

## Step 3: Gather PR Information

Ask the user for the following information (use AskUserQuestion tool with multiple questions):

### Question 1: Summary

**Question**: "Provide a brief summary of what this PR does (1-2 sentences)."
**Example**:

```
Adds passport expiration tracking module with Clean Architecture. Includes entities, use cases, and API endpoints for managing user passports.
```

### Question 2: What Changed

**Question**: "List the main changes in this PR."
**Example**:

```
- Created passport domain entities with expiration validation
- Implemented CRUD use cases for passport management
- Added REST API endpoints for passport operations
- Created comprehensive test suite for all layers
```

### Question 3: Why

**Question**: "Why was this change needed? What problem does it solve?"
**Example**:

```
Users need to track passport expiration dates to avoid travel issues. This provides a centralized way to manage multiple passports and receive alerts before expiration.
```

### Question 4: Testing

**Question**: "How did you test this? Include test results."
**Example**:

```
- Unit tests: 95% coverage across domain, application, and infrastructure layers
- Integration tests: Repository and controller tests passing
- Manual testing: Verified API endpoints work correctly
- Ran: npm run test:cov
```

### Question 5: Breaking Changes

**Question**: "Are there any breaking changes?"
**Options**: "Yes" / "No"
**Follow-up if Yes**: "Describe the breaking changes"

## Step 4: Generate PR Description

Generate a simple, focused PR description:

```markdown
## Summary

{Summary from Question 1}

## Changes

{List from Question 2}

## Why

{Reason from Question 3}

## Testing

{Testing details from Question 4}
- Tested locally with `npm run dev`
- Verified build succeeds with `npm run build`
- Tested responsive design (mobile/tablet/desktop)
- Verified in both light and dark modes

## Breaking Changes

{From Question 5 or "None - backwards compatible"}

## Deployment

This will auto-deploy to Vercel upon merge to main:
- **Preview**: Available in PR checks below
- **Production**: navarrolajous.com
- **Secondary**: www.navarrolajous.com

## Files Changed

{Generate from git diff --name-only main...HEAD}

---

**Checklist:**

- [x] Code follows Next.js best practices
- [x] Responsive design tested (mobile/tablet/desktop)
- [x] Dark mode verified
- [x] Build succeeds locally
- [x] TypeScript types correct
- [x] SEO metadata updated if needed
- [x] Accessibility verified
```

## Step 5: Push Branch

Run the following command:

```bash
git push -u origin {branch_name}
```

If the branch is already pushed and has changes, inform the user and ask if they want to force push or just update.

## Step 6: Create PR

Format the PR title as: `[ {Type} ] {Summary from commit}`

Examples:

- `[ Feature ] Add talks section with conference presentations`
- `[ Bug ] Fix mobile navigation overflow on small screens`
- `[ Content ] Update experience section with Webacy role`
- `[ Design ] Improve dark mode theme transitions`

Run the following command:

```bash
gh pr create --base main --title "{PR_TITLE}" --assignee @me --body "$(cat <<'EOF'
{GENERATED_DESCRIPTION}
EOF
)"
```

## Step 7: Confirm and Cleanup

Output a confirmation message:

```
✅ Branch pushed: {branch_name}
✅ PR created: {PR_URL}
✅ Title: {PR_TITLE}

PR #{number} is ready for review!
```

Optionally clean up the context file:

```bash
rm .claude/.pr-context.json
```

## Important Notes

- Always use `--base main` for the PR
- The PR title should use bracket prefix format: `[ Type ] Description`
- Common types: Feature, Bug, Content, Design, Refactor, SEO, Analytics
- Keep the description concise and focused on what/why/testing
- Show the PR URL to the user after creation
- Vercel will automatically create preview deployments for PRs
- Production deploys automatically when merged to main
- If `gh` command fails, provide instructions for manual PR creation
- Multiple commits in a PR are fine

## Error Handling

- If `gh` is not installed, instruct user to install it or create PR manually
- If branch is not pushed, push it first
- If user is not authenticated with GitHub, provide instructions
- If PR creation fails, show the full error message and suggest fixes
