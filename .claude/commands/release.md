---
description: Create a new release version and trigger Vercel production deployment
---

You are helping create a production release for the portfolio website. Your task is to version bump, tag, and trigger Vercel's automated deployment.

## Step 1: Verify Current Branch

Check that you are on the `main` branch:

```bash
git branch --show-current
git status
```

If not on `main`:

- Ask the user if they want to switch to `main`
- Run `git checkout main` if confirmed
- Run `git pull origin main` to get latest changes

## Step 2: Verify Clean State

Ensure all changes are committed and the working directory is clean:

```bash
git status
```

If there are uncommitted changes:

- Inform the user they must commit or stash changes first
- Do NOT proceed until working directory is clean

## Step 3: Ask for Version Bump Type

Ask the user what type of version bump this should be (use AskUserQuestion tool):

**Question**: "What type of version bump is this?"

**Options**:

- **patch** - Bug fixes and minor changes (e.g., 1.1.0 → 1.1.1)
- **minor** - New features, content updates (e.g., 1.1.0 → 1.2.0)
- **major** - Major redesign or breaking changes (e.g., 1.1.0 → 2.0.0)

**Default**: patch

## Step 4: Show Current Version

Display the current version from `package.json`:

```bash
npm version --json
```

Show the user:

```
Current version: {version}
New version will be: {calculated_new_version}

Proceed with version bump?
```

## Step 5: Run Version Bump

Execute the version bump command:

```bash
npm version {patch|minor|major}
```

This command automatically:

1. Updates `package.json` version
2. Creates a git commit with the version number
3. Creates a git tag (e.g., v1.2.0)

## Step 6: Push Changes and Tags

Push the version bump commit and tags to GitHub:

```bash
git push --follow-tags
```

This triggers Vercel's automated deployment:

1. Vercel detects the new commit on main
2. Builds the Next.js application
3. Deploys to production (navarrolajous.com)

## Step 7: Confirm and Monitor

Output a confirmation message:

```
✅ Version bumped to: {new_version}
✅ Commit and tag pushed to GitHub
✅ Vercel deployment triggered

Deployment Progress:
1. Vercel: Building Next.js application...
2. Vercel: Deploying to production...
3. Production URL: https://navarrolajous.com

Monitor deployment:
- Vercel Dashboard: https://vercel.com/dashboard
- Check deployment status in real-time
- Verify site loads correctly after deployment
```

## Step 8: Verify Deployment

After deployment completes (usually 1-3 minutes):

1. Visit https://navarrolajous.com
2. Verify changes are live
3. Test critical functionality:
   - Navigation works
   - Contact form submits
   - Dark mode toggle works
   - Responsive design on mobile

## Important Notes

- **ONLY run this on `main` branch** - Vercel deploys from main
- **Ensure working directory is clean** - no uncommitted changes
- **Version tags provide history** - can reference any tagged version
- **Deployment is automatic** - Vercel handles everything
- **Preview URLs available** - PRs get preview deployments automatically

## Semantic Versioning Guide

**MAJOR version** (major changes):

- Complete redesign
- Major feature additions
- Significant content restructuring

**MINOR version** (new content/features):

- New sections (blog, testimonials, etc.)
- New project or experience entries
- Feature enhancements
- Significant content updates

**PATCH version** (fixes and minor updates):

- Bug fixes
- Minor content updates
- Styling tweaks
- Performance improvements

## Rollback Instructions

If deployment has issues:

1. **Revert via Vercel Dashboard**:
   - Go to Vercel Dashboard
   - Find previous successful deployment
   - Click "Promote to Production"

2. **Or revert via Git**:

   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Or rollback to specific version**:

   ```bash
   git checkout {previous_tag}
   git checkout -b rollback
   git push origin rollback
   # Then create PR to merge rollback to main
   ```

## Error Handling

- If `npm version` fails: Check package.json is valid
- If git push fails: Ensure you have push permissions
- If Vercel deployment fails: Check Vercel Dashboard for build logs
- If build fails: Run `npm run build` locally to debug
