---
description: Start the development server with environment validation
---

You are helping start the development server for the portfolio website. Your task is to validate the environment and start the Next.js dev server.

## Step 1: Check Environment Variables

Verify that `.env.local` exists:

```bash
test -f .env.local && echo "✅ .env.local found" || echo "❌ .env.local not found"
```

If not found:

```
⚠️  Environment file not found!

The contact form requires environment variables to work.

To set up:
1. Copy .env.template to .env.local:
   cp .env.template .env.local

2. Edit .env.local and add your keys:
   - RESEND_API_KEY: Get from resend.com
   - RECIPIENT_EMAIL: Your email for contact form

Do you want me to create .env.local from template?
```

If user confirms, create the file:

```bash
cp .env.template .env.local
```

Then inform:

```
✅ Created .env.local from template

⚠️  Important: Edit .env.local to add your API keys before the contact form will work.

You can still run the dev server - the contact form just won't submit without valid keys.
```

## Step 2: Check Node Version

Verify Node version matches .nvmrc:

```bash
node --version
cat .nvmrc
```

Compare versions and display:

```
Node version check:
- Current: {actual_version}
- Expected: {nvmrc_version}
```

If versions don't match significantly (different major version):

```
⚠️  Node version mismatch!

Expected: {nvmrc_version} (from .nvmrc)
Current: {actual_version}

To fix:
1. If you have nvm installed:
   nvm use

2. Otherwise, consider installing Node {nvmrc_version}:
   https://nodejs.org/

You can continue, but may encounter issues.
```

## Step 3: Check Dependencies

Verify node_modules exists and is up to date:

```bash
test -d node_modules && echo "✅ Dependencies installed" || echo "❌ Dependencies not installed"
```

If not installed:

```
Installing dependencies...
```

```bash
npm install
```

If installed but package-lock.json is newer:

```
Dependencies may be outdated. Running npm install...
```

```bash
npm install
```

## Step 4: Start Development Server

Start the Next.js dev server:

```bash
npm run dev
```

This command runs in the foreground. Inform the user:

```
🚀 Starting development server...

The server will be available at:
- Local: http://localhost:3000
- Network: Use for mobile testing

Features:
- Hot reload on file changes
- API routes available at /api/*
- Contact form (requires RESEND_API_KEY in .env.local)
- Automatic TypeScript checking
- Fast Refresh for React components

Press Ctrl+C to stop the server
```

## Important Notes

- Contact form won't work without `RESEND_API_KEY` in `.env.local`
- Server runs on port 3000 by default
- If port 3000 is in use, Next.js will suggest another port
- Use the network URL to test on mobile devices
- Changes auto-reload - no restart needed
- TypeScript errors will show in the browser
- Build errors will show in the terminal

## Common Issues

**Issue**: Port 3000 already in use

- **Solution**: Kill the process using port 3000 or use a different port:
  ```bash
  PORT=3001 npm run dev
  ```

**Issue**: Module not found errors

- **Solution**: Delete node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

**Issue**: TypeScript errors on startup

- **Solution**: Check the errors and fix them, or run:
  ```bash
  npm run lint
  ```

**Issue**: Contact form not working

- **Solution**: Verify `.env.local` has valid `RESEND_API_KEY` and `RECIPIENT_EMAIL`

## Testing Checklist

Once the server is running, verify:

- [ ] Homepage loads at http://localhost:3000
- [ ] Navigation works (all pages load)
- [ ] Dark mode toggle works
- [ ] Responsive design works (resize browser)
- [ ] No console errors in browser
- [ ] Hot reload works (make a small change and save)

## Next Steps

After starting the dev server:

- Make your changes to the code
- Test in the browser
- Run `/commit` when ready to commit
- Run `/finish` to create a PR
