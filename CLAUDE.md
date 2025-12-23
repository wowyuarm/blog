# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Astro-based static blog** built using the **AstroPaper theme** (v5.5.0). It's a TypeScript project that generates a static website with blog functionality. The project uses **pnpm** as the package manager and **Tailwind CSS v4** for styling.

## Agent Workflow & Logic Mapping

This project uses a **logic-first mental model** approach defined in `docs/LOGIC_SCHEMA.md`. Follow this protocol for efficient codebase navigation and maintenance.

### LOGIC_MAP.md Usage

**Purpose**: `LOGIC_MAP.md` (in repo root) is a project-specific logic map that provides:
- A graph of system components, flows, and invariants
- Stable IDs for navigation (`CMP-*`, `FLOW-*`, `INV-*`)
- Direct anchors to code locations (file#SymbolPath)
- Evidence references (tests, assertions)

**Mandatory Protocol**:
1. **Always read `LOGIC_MAP.md` first** when starting work on this repository
2. **Update the map** as part of "done" for significant changes
3. **Use anchors** to navigate code rather than broad scanning

### When to Use LOGIC_MAP.md

**Scenario A (Bootstrap)**: If `LOGIC_MAP.md` doesn't exist, create it following `docs/LOGIC_SCHEMA.md` guidelines.

**Scenario B (Task-oriented exploration)**:
1. Read `LOGIC_MAP.md` as the project index
2. Convert user request to candidate nodes (`FLOW-*` for behavior, `CMP-*` for modules)
3. Traverse `relations` to find adjacent nodes
4. Follow `anchors` into code/tests/config
5. Only search broadly if map is insufficient

**Scenario C (Maintenance)**: Update map when code changes:
- Update nearest `FLOW-*` steps for behavior changes
- Add/update `REL-*` edges for new dependencies
- Update anchors for refactored symbols/files
- Add `INV-*` for new constraints with `EVD-*` evidence

### Relationship with CLAUDE.md

- **CLAUDE.md**: Always-on agent rulebook (this file) - enforces the protocol
- **LOGIC_MAP.md**: Project index (nodes + relations + anchors) - provides navigation
- **docs/LOGIC_SCHEMA.md**: Schema + methodology - defines the format

### Quick Start for Agents

1. **First action**: Check for `LOGIC_MAP.md` in repo root
2. **If exists**: Read it, identify relevant nodes, follow anchors
3. **If missing**: Create minimal map (1 system, 5-12 components, 2-5 flows)
4. **When done**: Update map if significant changes were made

## Development Commands

### Core Development
- `pnpm dev` - Start development server at `localhost:4321`
- `pnpm build` - Build with type checking, pagefind search index, and asset copying
- `pnpm preview` - Preview production build locally
- `pnpm sync` - Sync Astro type definitions

### Code Quality
- `pnpm lint` - Run ESLint checks
- `pnpm format:check` - Check code formatting with Prettier
- `pnpm format` - Format code with Prettier

### Docker Development
- `docker-compose up` - Run development server in Docker container
- Multi-stage Docker build available for production deployment

## Architecture & Structure

### Content Management
- Blog posts are stored in `src/data/blog/` as Markdown files with frontmatter
- Content collections use Zod validation (`src/content.config.ts`)
- Supports subdirectory organization for posts (since v5.1.0)
- Dynamic OG image generation per post using Satori and Resvg

### Key Configuration Files
- `src/config.ts` - Site metadata (title, author, URLs, etc.)
- `src/constants.ts` - Social media links and share buttons
- `astro.config.ts` - Astro configuration with Tailwind, sitemap, remark plugins
- `eslint.config.js` - ESLint configuration with Astro plugin

### Directory Structure
```
src/
├── assets/           # Icons and static assets
├── components/       # Reusable Astro components (14+ components)
├── data/blog/       # Blog posts in Markdown format
├── layouts/         # Page layouts (4 layouts)
├── pages/           # Route definitions (10+ pages)
├── styles/          # Global CSS and typography
├── utils/           # Utility functions (10+ utilities)
public/              # Static assets served directly
```

### Build Features
- **Type checking** integrated into build process
- **Pagefind** for client-side search functionality (copied to `public/` after build)
- **OG image generation** using Satori and Resvg
- **RSS feed** generation via `@astrojs/rss`
- **Sitemap** generation via `@astrojs/sitemap`
- **Syntax highlighting** with Shiki transformers

## Content Creation

### Blog Post Frontmatter
```yaml
---
author: "YuCreate"
pubDatetime: 2025-12-23T00:00:00.000Z
title: "Post Title"
featured: true
draft: false
tags: ["tag1", "tag2"]
ogImage: "custom-og.jpg"  # Optional
description: "Post description"
canonicalURL: "https://example.com"  # Optional
---
```

### Site Configuration
Modify `src/config.ts` for:
- Site metadata (title, author, description)
- URL configuration
- Pagination settings (posts per page/index)
- Feature toggles (light/dark mode, archives, back button)
- Edit post configuration
- Dynamic OG image generation
- Language and timezone settings

## Development Workflow

1. **Local Development**: `pnpm dev` starts dev server at `localhost:4321`
2. **Content Creation**: Add Markdown files to `src/data/blog/`
3. **Code Quality**: Run `pnpm lint` and `pnpm format:check` before committing
4. **Build Verification**: `pnpm build` creates production-ready static site in `dist/`
5. **Search Index**: Pagefind search index is automatically generated during build

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on PRs:
1. Linting with ESLint
2. Code formatting check with Prettier
3. Build verification

## Deployment Options

### Static Hosting
Deploy the `dist/` folder to any static hosting service (Cloudflare Pages, Vercel, Netlify, etc.)

### Docker Deployment
Multi-stage Docker build:
1. Node.js stage for building static files
2. Nginx stage for serving the application

### Environment Variables
- `PUBLIC_GOOGLE_SITE_VERIFICATION` - Optional Google Site Verification token

## Key Dependencies

### Core
- `astro` - Framework
- `@astrojs/rss` - RSS feed generation
- `@astrojs/sitemap` - Sitemap generation
- `tailwindcss` - Styling

### Content Processing
- `remark-toc` - Table of contents
- `remark-collapse` - Collapsible sections
- `@shikijs/transformers` - Code highlighting

### Image Generation
- `satori` - OG image generation
- `@resvg/resvg-js` - SVG rendering
- `sharp` - Image processing

### Search
- `pagefind` - Client-side search index

## Notes

- The project uses **pnpm** as package manager (not npm or yarn)
- Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin
- TypeScript strict mode is enabled
- No testing framework is currently configured
- Docker development uses Node.js LTS image with volume mounting