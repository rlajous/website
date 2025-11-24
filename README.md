# Portfolio Website - Rodrigo Manuel Navarro Lajous

[![Next.js](https://img.shields.io/badge/Next.js-14.1.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> A modern, SEO-optimized portfolio website showcasing professional experience, projects, speaking engagements, and education.

**🌐 Live Site:** [navarrolajous.com](https://navarrolajous.com) | [www.navarrolajous.com](https://www.navarrolajous.com)

---

## Table of Contents

- [Overview](#overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🗄️ Data Architecture](#️-data-architecture)
- [🚀 Getting Started](#-getting-started)
- [💻 Development Workflow](#-development-workflow)
- [➕ Adding Content](#-adding-content)
- [🎨 Customization](#-customization)
- [📜 Available Scripts](#-available-scripts)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📧 Contact](#-contact)

---

## Overview

This is a professional portfolio website built with Next.js 14 (App Router) and TypeScript, featuring a modern design system with dark mode support, comprehensive SEO optimization, and dynamic content sections. The site showcases professional experience, project portfolio, academic background, and speaking engagements at conferences.

**Key Highlights:**
- 📱 Fully responsive design (mobile-first approach)
- 🌓 Dark/Light theme with system detection
- 🔍 SEO optimized with sitemap, robots.txt, and Schema.org structured data
- ⚡ Static generation for optimal performance
- 📊 Integrated Umami Analytics
- 📧 Contact form with Resend email integration
- 🎤 Speaking engagements and conference talks showcase

---

## ✨ Features

### Core Sections

#### 🏢 Experience
- **Jobs & Startups**: Separate tabs for employment history and entrepreneurial ventures
- **Detail Pages**: Individual pages for each role with dynamic routes (`/experience/[slug]`)
- **Rich Content**: Responsibilities, achievements, tech stack, location, and period
- **Company Links**: Direct links to company websites and profiles

#### 💼 Projects
- **Three Categories**: Freelance, Hobby, and Open Source projects
- **Detail Pages**: Comprehensive project showcase (`/projects/[slug]`)
- **Project Details**: Features, challenges, impact, screenshots, and banners
- **Links**: GitHub repositories and live project URLs
- **Visual Content**: Project banners and multiple screenshots

#### 🎤 Talks & Speaking Engagements
- **Conference Presentations**: Showcase of talks at DuneCon, DeFi Security Summit, etc.
- **Detail Pages**: Full talk information with descriptions and topics (`/talks/[slug]`)
- **Media Integration**: YouTube video embeds and PDF slide viewers
- **Event Information**: Date, location, and event details

#### 🎓 Education
- **Academic Background**: Degrees and certifications
- **Detail Pages**: In-depth educational credentials (`/education/[slug]`)
- **Academic Details**: Thesis information, coursework, achievements, and tech stack

#### 📬 Contact
- **Contact Form**: Validated form with Zod schema
- **Email Integration**: Automated email notifications via Resend API
- **User Feedback**: Toast notifications for form submission status

### Additional Features

- **📄 Resume Download**: Direct PDF download from header navigation
- **🔗 Social Links**: GitHub and LinkedIn integration
- **🎨 Theme Toggle**: Smooth dark/light mode switching with persistence
- **📱 Mobile Navigation**: Responsive header with mobile menu
- **🔍 SEO**: Meta tags, OpenGraph, Twitter cards, and JSON-LD structured data
- **🗺️ Sitemap**: Auto-generated sitemap for all routes
- **🤖 Robots.txt**: Search engine crawler configuration
- **📈 Analytics**: Umami Analytics integration for privacy-friendly tracking

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript (strict mode)

### Styling
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind classes

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled accessible components
  - Dialog, Dropdown Menu, Label, Navigation Menu, Slot, Tabs, Toast, Avatar
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[class-variance-authority](https://cva.style/)** - CVA for component variants

### Features & Utilities
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode implementation
- **[react-hook-form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers
- **[Resend](https://resend.com/)** - Email API for contact form
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classNames utility

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

### Deployment & Analytics
- **[Vercel](https://vercel.com/)** - Hosting and deployment platform
- **[Umami Analytics](https://umami.is/)** - Privacy-friendly analytics

---

## 📁 Project Structure

```
website/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint
│   ├── contact/
│   │   ├── components/
│   │   │   └── ContactForm.tsx  # Contact form component
│   │   └── page.tsx             # Contact page
│   ├── education/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Education detail pages
│   │   ├── components/
│   │   │   └── EducationCard.tsx
│   │   └── page.tsx             # Education list page
│   ├── experience/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Experience detail pages
│   │   ├── components/
│   │   │   ├── ExperienceCard/
│   │   │   └── ExperiencesTab.tsx
│   │   ├── layout.tsx           # Experience layout for metadata
│   │   └── page.tsx             # Experience list with tabs
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Project detail pages
│   │   ├── components/
│   │   │   ├── ProjectCard/
│   │   │   └── ProjectTabs.tsx
│   │   ├── layout.tsx           # Projects layout for metadata
│   │   └── page.tsx             # Projects list with tabs
│   ├── talks/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Talk detail pages
│   │   ├── components/
│   │   │   ├── PDFViewer.tsx
│   │   │   ├── TalkCard.tsx
│   │   │   └── YouTubeEmbed.tsx
│   │   └── page.tsx             # Talks list page
│   ├── favicon.ico
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # Robots.txt generation
│   └── sitemap.ts               # Sitemap generation
│
├── components/                   # Shared components
│   ├── emails-templates/        # Email templates for Resend
│   ├── Footer/
│   ├── Header/                  # Navigation header
│   ├── ModeToggle/              # Dark/light theme toggle
│   ├── SchemaOrgScripts/        # SEO structured data
│   ├── ui/                      # shadcn/ui components
│   └── theme-provider.tsx       # Theme provider wrapper
│
├── constants/                    # Application constants
│   └── routes.ts                # Route definitions and SITE_URL config
│
├── domains/                      # TypeScript interfaces/types
│   ├── Education.ts             # Education interface
│   ├── Experience.ts            # Experience interface
│   ├── Project.ts               # Project interface
│   └── Talk.ts                  # Talk interface
│
├── lib/                         # Library utilities
│   └── utils.ts                 # Tailwind utility (cn function)
│
├── public/                      # Static assets
│   ├── assets/                  # Images, banners, etc.
│   └── resume.pdf               # Downloadable resume
│
├── services/                    # Data services (static data)
│   ├── education.ts             # Education data
│   ├── experience.ts            # Jobs, startups, skills data
│   ├── projects.ts              # Projects data (freelance, hobby, opensource)
│   └── talks.ts                 # Talks and presentations data
│
├── utils/                       # Utility functions
│   ├── getEnv.ts               # Environment variable helper
│   └── iconUtils.ts            # Icon utilities
│
├── .claude/                     # Claude Code configuration
│   ├── commands/                # Custom slash commands
│   │   ├── start.md            # /start - Create feature branch
│   │   ├── commit.md           # /commit - Stage and commit
│   │   ├── sync.md             # /sync - Sync with main
│   │   ├── build.md            # /build - Build and validate
│   │   ├── release.md          # /release - Create release
│   │   ├── dev.md              # /dev - Start dev server
│   │   ├── finish.md           # /finish - Create PR
│   │   └── release-notes.md    # /release-notes - Enhance release
│   └── CLAUDE.md               # AI assistant guidance
│
├── .env.template                # Environment variables template
├── .nvmrc                       # Node version specification
├── components.json              # shadcn/ui configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 🗄️ Data Architecture

This project uses a **static TypeScript data pattern** where all content is stored as typed data in the `services/` directory. This approach provides:
- ✅ Type safety for all content
- ✅ Easy content management
- ✅ Fast builds (static generation)
- ✅ No database needed

### Domain Interfaces

All content types are defined as TypeScript interfaces in `domains/`:

```typescript
// domains/Experience.ts
export interface Experience {
  id: number;
  slug: string;
  type: 'job' | 'startup';
  company: string;
  position: string;
  period: string;
  location?: string;
  companyUrl?: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  banner?: string;
}

// domains/Project.ts
export interface Project {
  id: number;
  slug: string;
  type: 'freelance' | 'hobby' | 'opensource';
  name: string;
  company: string;
  github?: string;
  website?: string;
  period: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  technologies: string[];
  banner?: string;
  screenshots?: string[];
  impact?: string;
}
```

### Data Services

Content is stored in `services/` files as typed arrays:

```typescript
// services/experience.ts
import { Experience } from "@/domains/Experience";

export const jobs: Experience[] = [
  {
    id: 1,
    slug: "webacy",
    type: "job",
    company: "Webacy",
    position: "Staff Software Engineer",
    period: "Jan 2023 — Present",
    // ... more fields
  },
  // ... more jobs
];

export const startups: Experience[] = [
  // ... startups
];
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version specified in `.nvmrc` (use `nvm use` if you have nvm installed)
- **npm**: Comes with Node.js
- **Resend Account**: For contact form email functionality (sign up at [resend.com](https://resend.com))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rlajous/website.git
   cd website
   ```

2. **Set up Node.js version:**
   ```bash
   nvm use
   ```
   If you don't have nvm, ensure you're using the Node.js version from `.nvmrc`.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure environment variables:**
   ```bash
   cp .env.template .env.local
   ```

   Update `.env.local` with your values:
   ```env
   # Resend API Key (get from https://resend.com/api-keys)
   RESEND_API_KEY=re_your_api_key_here

   # Email recipient for contact form
   RECIPIENT_EMAIL=your.email@example.com

   # Optional: Override site URL for different environments
   NEXT_PUBLIC_SITE_URL=https://navarrolajous.com
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Troubleshooting

**Issue: Module not found errors**
- Solution: Delete `node_modules` and `.next`, then run `npm install` again

**Issue: Environment variables not working**
- Solution: Restart the dev server after changing `.env.local`
- Ensure variables start with `NEXT_PUBLIC_` for client-side access

**Issue: Build fails**
- Solution: Run `npm run build` locally to see detailed error messages
- Check TypeScript errors with `npm run lint`

---

## 💻 Development Workflow

This project uses custom slash commands (in `.claude/commands/`) for streamlined development:

### Available Commands

- **`/start`** - Start a new PR by creating a feature branch
  - Creates branch following naming convention (`feat/`, `fix/`, etc.)
  - Stores context for other commands

- **`/commit`** - Stage and commit changes with proper formatting
  - Follows conventional commit format
  - Adds co-author attribution

- **`/sync`** - Sync your feature branch with latest main
  - Prevents merge conflicts
  - Keeps branch up to date

- **`/build`** - Build and validate the production bundle locally
  - Runs `npm run build`
  - Validates output

- **`/dev`** - Start the development server with environment validation
  - Checks environment variables
  - Starts `npm run dev`

- **`/finish`** - Create a pull request with comprehensive description
  - Generates PR description
  - Creates PR on GitHub

- **`/release`** - Create a new release version and trigger deployment
  - Bumps version (patch/minor/major)
  - Creates git tag
  - Triggers Vercel deployment

- **`/release-notes`** - Enhance GitHub release with detailed notes
  - Generates categorized changelog
  - Updates GitHub release

### Git Workflow

**Branch Naming Convention:**
```
feat/feature-name       # New features
fix/bug-description     # Bug fixes
refactor/what-changed   # Code improvements
content/what-updated    # Content updates
design/what-improved    # Design changes
docs/what-documented    # Documentation
```

**Commit Message Format:**
```
[ Type ] Description

Examples:
[ Feature ] Add blog section with MDX support
[ Bug ] Fix mobile navigation overflow
[ Content ] Update experience with Webacy role
[ Design ] Improve dark mode theme transitions
[ Refactor ] Simplify contact form validation
```

---

## ➕ Adding Content

### Adding a New Job/Experience

1. Open `services/experience.ts`
2. Add a new entry to the `jobs` or `startups` array:

```typescript
export const jobs: Experience[] = [
  {
    id: 8, // Increment ID
    slug: "company-name", // URL-friendly slug
    type: "job",
    company: "Company Name",
    position: "Your Position",
    period: "Jan 2024 — Present",
    location: "Remote", // Optional
    companyUrl: "https://company.com", // Optional
    responsibilities: [
      "Key responsibility 1",
      "Key responsibility 2",
      "Key responsibility 3",
    ],
    achievements: [ // Optional
      "Achievement 1",
      "Achievement 2",
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    banner: "/experience/company-banner.jpg", // Optional
  },
  // ... existing jobs
];
```

3. Add banner image to `public/assets/experience/` (if using)
4. The detail page will be auto-generated at `/experience/company-name`

### Adding a New Project

1. Open `services/projects.ts`
2. Add to `freelance`, `hobby`, or `opensource` array:

```typescript
export const freelance: Project[] = [
  {
    id: 8, // Increment ID
    slug: "project-name",
    type: "freelance",
    name: "Project Name",
    company: "Client Name",
    github: "https://github.com/user/repo", // Optional
    website: "https://project.com", // Optional
    period: "2024",
    description: "Brief description for card view",
    detailedDescription: "Longer description for detail page", // Optional
    features: [ // Optional
      "Feature 1",
      "Feature 2",
    ],
    challenges: [ // Optional
      "Challenge 1",
      "Challenge 2",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    banner: "/projects/project-banner.jpg", // Optional
    screenshots: [ // Optional
      "/projects/project-screenshot-1.jpg",
      "/projects/project-screenshot-2.jpg",
    ],
    impact: "Impact description", // Optional
  },
  // ... existing projects
];
```

3. Add images to `public/assets/projects/`
4. Detail page will be at `/projects/project-name`

### Adding a New Talk/Speaking Engagement

1. Open `services/talks.ts`
2. Add a new talk:

```typescript
export const talks: Talk[] = [
  {
    id: 3, // Increment ID
    slug: "event-name-year",
    title: "Talk Title",
    event: "Conference Name",
    location: "City, Country",
    date: "2025-03-15",
    description: "Talk description and key points",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
    slides: "https://slides.com/presentation", // Optional
    video: "https://youtube.com/watch?v=...", // Optional
    banner: "/talks/event-banner.jpg", // Optional
  },
  // ... existing talks
];
```

3. Add banner to `public/assets/talks/`
4. Detail page will be at `/talks/event-name-year`

### Adding Education

1. Open `services/education.ts`
2. Add new entry:

```typescript
export const education: Education[] = [
  {
    id: 3, // Increment ID
    slug: "degree-institution",
    degree: "Degree Name",
    institution: "University Name",
    period: "2020 — 2024",
    location: "City, Country", // Optional
    institutionUrl: "https://university.edu", // Optional
    specialization: "Specialization", // Optional
    thesis: { // Optional
      title: "Thesis Title",
      description: "Thesis description",
      link: "https://thesis-link.com",
    },
    coursework: ["Course 1", "Course 2"], // Optional
    achievements: ["Achievement 1"], // Optional
    technologies: ["Python", "R", "MATLAB"],
    banner: "/education/institution-banner.jpg", // Optional
  },
  // ... existing education
];
```

---

## 🎨 Customization

### Changing Theme Colors

Edit `app/globals.css` to modify the color palette:

```css
@layer base {
  :root {
    --primary: 222.2 47.4% 11.2%; /* Change primary color */
    --secondary: 210 40% 96.1%; /* Change secondary color */
    /* ... other colors */
  }

  .dark {
    --primary: 210 40% 98%; /* Dark mode primary */
    /* ... other colors */
  }
}
```

### Modifying Components

Components follow the shadcn/ui pattern. To modify a component:

1. Find it in `components/ui/`
2. Edit the component file
3. Maintain the CVA pattern for variants

### Adding New Pages

1. Create a new directory in `app/`
2. Add `page.tsx`:
   ```typescript
   export default function NewPage() {
     return <div>New Page Content</div>
   }
   ```
3. Add to navigation in `components/Header/`
4. Update `constants/routes.ts`

### Updating SEO Metadata

Edit `app/layout.tsx` for global metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Title",
  description: "Your description",
  // ... other metadata
};
```

For page-specific metadata, add `generateMetadata` to page files.

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

This site is optimized for Vercel deployment with automatic CI/CD:

1. **Fork/Clone this repository**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables:**
   In Vercel project settings, add:
   ```
   RESEND_API_KEY=your_resend_api_key
   RECIPIENT_EMAIL=your.email@example.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Configure Domains:**
   - Add your custom domain in Vercel project settings
   - Update DNS records as instructed by Vercel
   - Both apex and www domains are supported

5. **Deploy:**
   - Push to `main` branch to trigger deployment
   - Vercel builds and deploys automatically
   - Preview deployments created for pull requests

### Post-Deployment

- **Analytics**: Configure Umami Analytics in `app/layout.tsx`
- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots**: Configured at `/robots.txt`
- **Monitoring**: Check Vercel dashboard for build logs and analytics

---

## 🤝 Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository**

2. **Create a feature branch:**
   ```bash
   git checkout -b feat/amazing-feature
   ```

3. **Make your changes:**
   - Follow the existing code style
   - Add types for all TypeScript code
   - Test your changes locally
   - Update documentation if needed

4. **Commit your changes:**
   ```bash
   git commit -m "[ Feature ] Add amazing feature"
   ```

5. **Push to your fork:**
   ```bash
   git push origin feat/amazing-feature
   ```

6. **Open a Pull Request**

### Code Style Guidelines

- **TypeScript**: Use strict mode, add types for all variables
- **Components**: Follow shadcn/ui patterns
- **Naming**: Use descriptive names, camelCase for variables/functions
- **Comments**: Add comments for complex logic
- **Formatting**: Use Prettier (if configured) or follow existing style

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 📧 Contact

**Rodrigo Manuel Navarro Lajous**

- 🌐 Website: [navarrolajous.com](https://navarrolajous.com)
- 💼 LinkedIn: [linkedin.com/in/rodrigo-lajous](https://www.linkedin.com/in/rodrigo-lajous)
- 🐙 GitHub: [@rlajous](https://github.com/rlajous)
- 🐦 Twitter: [@arlequin_eth](https://twitter.com/arlequin_eth)

---

<div align="center">
  <sub>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</sub>
</div>
