---
description: Enhance GitHub release with detailed notes after release PR is merged to main
---

You are helping create detailed GitHub release notes after a version has been deployed. Your task is to gather changes, generate comprehensive notes, and publish them to the GitHub release.

## Step 1: Identify Latest Release

Find the latest release tag:

```bash
git tag --list | grep '^v[0-9]' | sort -V | tail -1
```

Show the user:

```
Latest release tag: {tag}
Creating release notes for this version.
```

## Step 2: Get Previous Release

Find the previous release to compare changes:

```bash
git tag --list | grep '^v[0-9]' | sort -V | tail -2 | head -1
```

## Step 3: Extract Changes

Get the list of commits between the previous and current release:

```bash
git log {previous_tag}..{current_tag} --oneline --no-merges
```

Get the list of changed files:

```bash
git diff {previous_tag}..{current_tag} --name-only --diff-filter=ACDMRT
```

Show the user a summary of changes.

## Step 4: Categorize Changes

Analyze the commits and categorize them by type:

**Features** (commits with `[ Feature ]`):

- Extract all Feature commits
- Format as bullet points

**Bug Fixes** (commits with `[ Bug ]` or `[ Fix ]`):

- Extract all Bug/Fix commits
- Format as bullet points

**Content Updates** (commits with `[ Content ]`):

- Extract all Content commits
- Format as bullet points

**Design Improvements** (commits with `[ Design ]`):

- Extract design/styling commits
- Format as bullet points

**SEO & Analytics** (commits with `[ SEO ]` or `[ Analytics ]`):

- Extract SEO and analytics commits
- Format as bullet points

**Documentation** (commits with `[ Docs ]`):

- Extract all docs commits

**Improvements** (commits with `[ Refactor ]`):

- Extract refactoring commits
- Format as bullet points

**Tests** (commits with `[ Test ]`):

- Extract test commits

**Chores** (commits with `[ Chore ]`):

- Build, dependency updates, etc.

## Step 5: Generate Release Notes

Create comprehensive release notes in this format:

**IMPORTANT:** Do NOT include the main title (e.g., "# Release v0.4.0") in the release notes body, as GitHub already displays it as the release title. Start directly with "Released: {date}".

```markdown
Released: {date}

## 🎉 What's New

{List of new features from [ Feature ] commits}

## 🐛 Bug Fixes

{List of fixes from [ Bug ] or [ Fix ] commits}

## 📝 Content Updates

{List of content updates from [ Content ] commits}

## 🎨 Design Improvements

{List of design changes from [ Design ] commits}

## 📈 SEO & Analytics

{List of SEO and analytics updates from [ SEO ] or [ Analytics ] commits}

## 💅 Code Improvements

{List of improvements from [ Refactor ] commits}

## 📚 Documentation

{List of doc updates from [ Docs ] commits}

## 🧪 Testing

{List of test updates from [ Test ] commits}

## 🔧 Maintenance

{List of maintenance items from [ Chore ] commits}

## 📦 Dependencies

{List any dependency updates if visible in commits}

## 🚀 Deployment

This release was automatically deployed via Vercel:

- Build: Next.js production build
- Deployment: Vercel edge network
- Production: navarrolajous.com
- Secondary: www.navarrolajous.com

## Files Changed

{Count and summary of changed files}

**Full Changelog**: {previous_tag}...{current_tag}
```

## Step 6: Create GitHub Release

Use the `gh` CLI to create the release with a descriptive title:

```bash
gh release create {tag} \
  --title "Release {version} - {Short Feature Description}" \
  --notes "$(cat <<'EOF'
{GENERATED_RELEASE_NOTES}
EOF
)"
```

**Note:** The title should be descriptive but concise (e.g., "Release v0.4.0 - Waitlist Module"). The release notes body should NOT repeat this title.

Alternatively, if the release already exists (created automatically by the tag), edit it:

```bash
gh release edit {tag} \
  --notes "$(cat <<'EOF'
{GENERATED_RELEASE_NOTES}
EOF
)"
```

## Step 7: Confirm

Output a confirmation message:

```
✅ Release notes created for {tag}
✅ Published to GitHub Releases

View release:
gh release view {tag} --web
```

Open the release in the browser:

```bash
gh release view {tag} --web
```

## Important Notes

- Run this command AFTER the `/release` command has completed
- Ensure the deployment has finished successfully
- Release notes are based on Conventional Commits format
- Use descriptive categories to organize changes
- Include links to the full changelog
- Mention any breaking changes prominently
- Add deployment verification steps if relevant

## Breaking Changes Warning

If any commits contain `BREAKING CHANGE:` in the footer or use an exclamation mark after the type:

```markdown
## ⚠️ BREAKING CHANGES

{List of breaking changes with migration instructions}

**Migration Guide:**
{Provide upgrade instructions}
```

Add this section prominently at the top of the release notes.

## Example Commands

View the release after creation:

```bash
gh release view {tag}
```

View release in browser:

```bash
gh release view {tag} --web
```

List all releases:

```bash
gh release list
```

## Error Handling

- If tag doesn't exist: Run `/release` first to create the version tag
- If `gh` not installed: Install GitHub CLI or create release manually on GitHub
- If not authenticated: Run `gh auth login` to authenticate
- If release already has notes: Ask user if they want to replace or append
- If no previous tag: Use initial commit as comparison point
