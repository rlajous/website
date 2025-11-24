---
description: Build and validate the production bundle locally
---

You are helping build the production bundle for the portfolio website. This validates that the site will build successfully on Vercel.

## Step 1: Clean Previous Build

Remove previous build artifacts to ensure a clean build:

```bash
rm -rf .next
```

Output to user:

```
🧹 Cleaning previous build artifacts...
✅ .next directory removed
```

## Step 2: Run Production Build

Build the application:

```bash
npm run build
```

Monitor the build output and show key information to the user.

## Step 3: Analyze Build Output

After the build completes, extract and display key metrics:

```
📊 Build Summary:
────────────────────────────────────
✓ Build completed successfully
✓ Routes: {count} pages generated
✓ Build time: {time}
✓ Static pages: {count}
✓ Server pages: {count}
────────────────────────────────────
```

Show route information:

```
Routes Generated:
• / (Home)
• /experience
• /projects
• /education
• /talks
• /contact
• /talks/[slug] (dynamic)
• /api/contact (API route)
```

If there are warnings, display them:

```
⚠️  Build warnings:
────────────────────────────────────
{list warnings with context}
────────────────────────────────────

These warnings won't prevent deployment but should be addressed.
```

## Step 4: Check Build Success

If build succeeds:

```
✅ Production build successful!

Your site is ready for deployment to Vercel.
```

If build fails:

```
❌ Build failed!

Common issues:
- TypeScript errors: Run `npm run lint` to see all errors
- Missing dependencies: Run `npm install`
- Environment variables: Check if any are required at build time
- Import errors: Check file paths and imports

Error details:
{show error output}
```

## Step 5: Test Production Build Locally (Optional)

Ask the user if they want to test the production build:

```
Would you like to test the production build locally?
```

If yes, start the production server:

```bash
npm start
```

Then display:

```
✅ Production server running at http://localhost:3000

Test the following:
- All pages load correctly
- Contact form works
- Dark mode toggle functions
- Navigation is responsive
- Images load properly
- No console errors

This is exactly how your site will behave on Vercel.

Press Ctrl+C to stop the server
```

## Step 6: Verify Environment Variables

Check if production needs environment variables:

```
Environment Variables for Production:

The following environment variables are needed in Vercel:

✓ RESEND_API_KEY - For contact form email sending
✓ RECIPIENT_EMAIL - Contact form recipient

To set these in Vercel:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable for Production environment

Current status:
{Check if variables exist in .env.local and inform user}
```

## Step 7: Confirm Readiness

Output final summary:

```
🎉 Build validation complete!

Summary:
────────────────────────────────────
✅ Production build successful
✅ {count} routes generated
✅ No critical errors
{✅ or ⚠️} Environment variables {configured/need attention}

Next steps:
1. Run `/commit` to commit your changes
2. Run `/finish` to create a PR
3. Merge PR to deploy to Vercel
────────────────────────────────────
```

## Important Notes

- Build must succeed before deploying to Vercel
- Warnings should be addressed but won't block deployment
- Test production build locally before pushing
- Vercel uses the same build command (`npm run build`)
- Environment variables must be set in Vercel dashboard (not in code)
- Build time locally may differ from Vercel (Vercel is optimized)

## Common Build Issues

### Issue: TypeScript errors

**Solution**: Run TypeScript checker:

```bash
npx tsc --noEmit
```

Fix all TypeScript errors before building.

### Issue: Module not found

**Solution**: Verify imports and install missing dependencies:

```bash
npm install
```

### Issue: Image optimization errors

**Solution**: Check image paths and formats. Next.js Image component requires:

- Valid image paths
- Supported formats (jpg, png, webp, avif)
- Images in `public/` directory

### Issue: Environment variable warnings

**Solution**: Some environment variables may be needed at build time. Check if any are accessed in:

- `app/layout.tsx`
- `next.config.js`
- Server components at build time

### Issue: Out of memory

**Solution**: Increase Node memory:

```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## Build Performance Tips

- Images are optimized by Next.js automatically
- Static pages are generated at build time
- Dynamic routes use ISR (Incremental Static Regeneration)
- Bundle size is optimized automatically
- Tree-shaking removes unused code

## Vercel Build Comparison

When you push to Vercel:

1. **Same build command**: `npm run build`
2. **Automatic optimization**: Vercel adds edge network optimization
3. **Environment variables**: Pulled from Vercel dashboard
4. **Preview deployments**: PRs get unique preview URLs
5. **Production deployment**: Main branch deploys to production

## Next Steps

After successful build:

1. **Commit changes**: Use `/commit` command
2. **Create PR**: Use `/finish` command
3. **Review preview**: Check Vercel preview deployment in PR
4. **Merge**: Merge PR to deploy to production
5. **Verify**: Check production site after deployment
