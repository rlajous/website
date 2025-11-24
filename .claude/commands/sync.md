---
description: Sync your feature branch with latest main to avoid conflicts
---

You are helping sync a feature branch with the latest changes from main. This prevents merge conflicts and ensures your PR is up-to-date.

## When to Use This

Use this command when:

- Your feature branch is behind main
- You want to incorporate recent changes from main
- GitHub shows your branch is out of date
- You want to test your changes with latest main

## Step 1: Verify Current Branch

Check that you are NOT on the `main` branch:

```bash
git branch --show-current
```

If on `main`:

- Inform user this command is for feature branches
- Ask which feature branch they want to sync

## Step 2: Fetch Latest Main

Get the latest changes from remote:

```bash
git fetch origin main
```

Show how many commits behind:

```bash
git rev-list --left-right --count HEAD...origin/main
```

Display to user:

```
Your branch is {N} commits behind origin/main
Syncing will merge these changes into your feature branch
```

## Step 3: Merge Main into Feature Branch

Merge the latest main into your current branch:

```bash
git merge origin/main
```

## Step 4: Handle Conflicts (if any)

If merge conflicts occur:

1. Show the conflicted files:

   ```bash
   git status
   ```

2. Display to user:

   ```
   ⚠️  Merge conflicts detected in:
   {list of conflicted files}

   Please resolve the conflicts:
   1. Open each file and fix the conflicts
   2. Remove conflict markers (<<<<<<<, =======, >>>>>>>)
   3. Save the files
   4. Let me know when you're done
   ```

3. After user resolves conflicts, stage the files:

   ```bash
   git add {conflicted_files}
   ```

4. Complete the merge:

   ```bash
   git commit -m "[ Merge ] Sync with latest main"
   ```

## Step 5: Push Updated Branch

Push the updated branch to remote:

```bash
git push origin {branch_name}
```

If the push is rejected (branch has diverged), ask user:

```
Your branch has diverged from the remote. This can happen if you rebased locally.

Options:
1. Force push with lease (safer): git push --force-with-lease
2. Cancel and review changes first

Which option do you prefer?
```

If user chooses option 1:

```bash
git push --force-with-lease origin {branch_name}
```

## Step 6: Confirm

Output a confirmation message:

```
✅ Feature branch synced with latest main
✅ {N} commits merged from main
✅ Branch pushed to remote

Your PR is now up-to-date with main.
Next: Continue working or run `/finish` to create/update PR
```

## Important Notes

- NEVER run this on `main` branch
- Always fetch before merging to get latest changes
- Use `--force-with-lease` instead of `--force` if needed (safer)
- Resolve conflicts carefully - ask for help if unsure
- Test your changes after syncing to ensure nothing broke
- If your PR already exists, GitHub will update it automatically

## Alternative: Rebase Instead of Merge

If you prefer a cleaner history without merge commits, you can rebase instead:

**Warning**: Only rebase if you're comfortable with it, as it rewrites history.

```bash
git fetch origin main
git rebase origin/main
```

If conflicts occur during rebase:

1. Resolve conflicts in each file
2. Stage resolved files: `git add {files}`
3. Continue rebase: `git rebase --continue`
4. Repeat until rebase is complete
5. Force push: `git push --force-with-lease origin {branch_name}`

**When to use rebase vs merge**:

- **Merge** (default): Safer, preserves history, creates merge commit
- **Rebase**: Cleaner history, but rewrites commits (use with caution)

## Error Handling

- If merge fails: Show error and help user understand the issue
- If push fails: Check if user has push permissions
- If conflicts are complex: Suggest creating a new branch and starting fresh
- If unsure: Always prefer merge over rebase for safety
