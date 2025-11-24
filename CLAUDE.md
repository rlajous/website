# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases professional experience, projects, education, speaking engagements, and includes a contact form with email integration via Resend.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Environment Setup
1. Copy `.env.template` to `.env.local`
2. Set required environment variables:
   - `RESEND_API_KEY` - API key from Resend for email functionality
   - `RECIPIENT_EMAIL` - Email address to receive contact form submissions

### Node Version
Use the version specified in `.nvmrc`. Run `nvm use` if you have nvm installed.

## Architecture

### Directory Structure
```
app/                    # Next.js App Router pages and API routes
├── api/contact/       # API route for contact form submission
├── contact/           # Contact page with form
├── experience/        # Experience page with job/startup tabs
├── projects/          # Projects page with hobby/freelance/opensource tabs
├── education/         # Education page
├── talks/             # Talks/speaking page with conference presentations
└── layout.tsx         # Root layout with metadata and providers

components/            # React components
├── Header/           # Navigation header
├── Footer/           # Site footer
├── ModeToggle/       # Dark/light theme toggle
├── ui/               # shadcn/ui components
├── emails-templates/ # Email templates for Resend
└── theme-provider.tsx # Theme provider wrapper

domains/              # TypeScript domain models/interfaces
├── Experience.ts     # Experience interface
├── Project.ts        # Project interface
└── Talk.ts           # Talk interface

services/             # Data services (static data)
├── experience.ts     # Jobs, startups, education, skills data
├── projects.ts       # Freelance, hobby, opensource projects data
└── talks.ts          # Conference talks and speaking engagements

constants/            # Application constants
└── routes.ts         # Route definitions

utils/                # Utility functions
├── getEnv.ts        # Environment variable helper with validation
└── iconUtils.ts     # Icon utility functions

lib/                  # Library code
└── utils.ts         # Tailwind utility (cn function)
```

### Key Technologies
- **Next.js 14** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components (configured in `components.json`)
- **Resend** for transactional emails
- **next-themes** for dark/light mode
- **react-hook-form** + **zod** for form validation
- **Radix UI** primitives for accessible components

### Path Aliases
- `@/*` maps to root directory (configured in `tsconfig.json`)
- shadcn/ui components alias: `@/components` and `@/lib/utils`

### Data Architecture
Content is stored as static TypeScript data in `services/`:
- **experience.ts**: Contains `jobs[]`, `startups[]`, `education[]`, and `skills[]` arrays
- **projects.ts**: Contains `freelance[]`, `hobby[]`, and `opensource[]` project arrays
- **talks.ts**: Contains `talks[]` array with conference presentations and speaking engagements

All data follows the domain interfaces defined in `domains/`:
- `Experience` interface: position, company, period, responsibilities, technologies
- `Project` interface: name, company, github, website, period, description, technologies, banner
- `Talk` interface: title, event, location, date, description, topics, optional links (slides, video), optional banner

### Contact Form Flow
1. User submits form on `/contact` page via `ContactForm.tsx`
2. Form validates using react-hook-form + zod
3. POST request to `/api/contact/route.ts`
4. API route uses Resend SDK to send email using template from `components/emails-templates/`
5. Email sent to `RECIPIENT_EMAIL` from environment variables

### Theme System
- Uses `next-themes` with system detection
- Toggle component in header via `ModeToggle` component
- Tailwind configured for dark mode with `class` strategy
- Provider wraps entire app in `app/layout.tsx`

### SEO & Analytics
- Comprehensive metadata in `app/layout.tsx` (OpenGraph, Twitter cards, etc.)
- Sitemap at `app/sitemap.ts`
- Robots.txt at `app/robots.ts`
- Umami analytics integrated in root layout

## Component Patterns

### Page Structure
Pages follow this pattern:
1. Import data from `services/`
2. Use tab components for multiple content sections
3. Card components for displaying individual items
4. Responsive grid layouts with Tailwind

### UI Components
All UI components use shadcn/ui patterns:
- Radix UI primitives for accessibility
- Tailwind for styling with `cn()` utility from `lib/utils.ts`
- Class variance authority for component variants
- Dark mode support via CSS variables

## Deployment

Site is configured for Vercel deployment:
- Automatic deployments from GitHub
- Environment variables must be set in Vercel project settings
- Primary domain: navarrolajous.com
- Secondary domain tracked in analytics: www.navarrolajous.com
