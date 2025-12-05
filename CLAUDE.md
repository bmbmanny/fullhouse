# Project Context for Claude Code (Updated for Professional Development Workflows)

## User Profile
- **Technical Level:** User is *not* the maintainer; they rely on Claude for implementation quality and architectural decisions.
- **Goal:** Build production-ready web applications and services.
- **Environment:** macOS with Node.js, Homebrew, git, GitHub CLI. Standard development tools available and allowed.

## Communication Guidelines

### Professional & Clear
- Use standard technical language when appropriate.
- Write explanations when useful, but assume the user wants results, not lessons.
- Justify major architectural choices with concise reasoning.

### Maintain Reasonable Complexity
- Complexity is acceptable when it provides long-term scalability, maintainability, or industry-standard practices.
- Favor established patterns and frameworks over “simple but outdated” approaches.

### Transparency on Changes
- Always show which files are created or modified.
- Summaries should clarify *why* a structural change or dependency is being introduced.
- Surface possible breaking changes early.

## Technical Standards

### Modern, Industry-Standard Tooling
Use best-practice technologies by default:

#### Frontend
- **Default:** React (Next.js preferred for production apps)
- **Alternatives when better suited:**
  - Astro (content-heavy sites)
  - Vue/Nuxt (if requested)
  - SvelteKit (for lightweight interactive experiences)

#### Backend
- **Default:** Node.js with Express or Fastify  
- **For fullstack React apps:** Use Next.js API routes unless more complexity is required.

#### Build & Tooling
- Use package managers (npm, pnpm, or yarn — default to npm unless user specifies).
- Use build systems, bundlers, and TypeScript as appropriate.
- Use eslint, prettier, and recommended directory structures.

### Project Structure
- Use standard, scalable structures:
  - Next.js: `/app` or `/pages`, `/components`, `/lib`, `/api`
  - React Vite project: `/src/components`, `/src/pages`, `/src/hooks`
  - Node backend: `/src`, `/src/routes`, `/src/services`, `/src/models`

### Code Style
- Use TypeScript unless explicitly told otherwise.
- Use modern JS/TS patterns: async/await, modules, functional components.
- Follow framework conventions (e.g., React hooks, Next.js server/client components).

### Browser & Platform Support
- Target modern browsers and current Node LTS.
- Assume deployment to Vercel, Netlify, or a Node server unless told otherwise.

## Best Practices

### Production-Ready Foundation
- Prefer components, separation of concerns, reusable abstractions.
- Include environment variable usage when needed.
- Include README updates when architecture changes.

### Dependency Philosophy
- Prefer well-maintained libraries over reinventing the wheel.
- Use UI libraries when fitting (e.g., Tailwind, MUI, Shadcn UI).
- Ensure dependencies do not introduce unnecessary overhead.

### API & State Management
- Use React Query, Zustand, or framework-built solutions when appropriate.
- Handle async flows cleanly with proper error boundaries.

### Documentation
- Add comments only where logically helpful. Code clarity > excessive commentary.
- Automatically generate helpful instructions in README when structure changes.

## Common Scenarios

### “Build a website/app for X”
- Default to Next.js unless there is a reason to choose differently.
- Ask clarifying questions about functionality, not about HTML basics.
- Scaffold full project with proper routing, components, styling, and package.json.

### “Add feature Y”
- Implement using idiomatic patterns for the chosen framework.
- Refactor structurally if needed and explain why.
- Ensure the addition does not create architectural drift.

### “Something is broken”
- Diagnose using standard debugging reasoning.
- Suggest fixes that maintain clean architecture.
- Use DevTools, logs, or framework-level debugging techniques.

### “How do I deploy this?”
- Recommend appropriate deployment platforms:
  - Next.js → Vercel
  - Static sites → Netlify or GitHub Pages
  - Node backend → Railway, Render, Fly.io
- Provide exact deployment steps and configuration files (e.g., `vercel.json`, Dockerfile if needed).

## Safety, Secrets, and Repo Hygiene

### Environment Variables
- Never place secrets in source.
- Always instruct user to use `.env` and `.env.example`.
- Warn about secrets in public GitHub repos.

### Security Best Practices
- Validate inputs for backend routes.
- Avoid using unsafe React patterns.
- Use HTTPS-ready configurations, safe headers, etc.

## Git Workflow Support

### Git Standards
- Use clean, descriptive commit messages.
- Use feature branches when appropriate.
- Provide PR descriptions if generating multi-file changes.

### When the User Is Stuck
- Provide exact commands (git, npm, etc.).
- Include explanations only if they add clarity.


## Version Control & Changelog Requirements

### Maintain a Changelog
Claude must maintain a clear and organized **CHANGELOG.md** documenting all notable changes to the project.

Each entry should include:
- Version number (e.g., `v1.0.1`)
- Date of change
- Summary of changes
- Type of changes (Added, Modified, Fixed, Removed)
- Any migration notes if applicable

Format should follow the **Keep a Changelog** convention:
- https://keepachangelog.com/en/1.1.0/

Example entry:

```

## [1.2.0] - 2025-02-10

### Added

* New Quote Request API route
* Location-based SEO service pages

### Modified

* Homepage hero layout for improved mobile performance

### Fixed

* Form validation bug in contact form

### Removed

* Deprecated "services-old.js" file

```

---

### Versioning Standards
Claude should use **Semantic Versioning (SemVer)**:
```

MAJOR.MINOR.PATCH

```

- **MAJOR** for breaking changes  
- **MINOR** for new features (backwards compatible)  
- **PATCH** for bug fixes  

Example: `v1.4.2`

---

### Git & Branching Requirements

Claude must use professional, disciplined Git workflows.

#### Branching
- `main` or `master` = production-ready code  
- `dev` or `development` = latest development changes  
- Feature branches:  
  - `feature/contact-form`
  - `feature/homepage-redesign`
- Bug fix branches:  
  - `fix/header-overflow`
- Refactor branches:  
  - `refactor/component-structure`

#### Pull Requests
Even when Claude is generating code directly, PR-style documentation should be maintained in explanations:

- Summary of the change  
- Why it was necessary  
- Files modified  
- Any breaking changes or migration notes  

#### Commit Messages
Use clean, conventional commits (Conventional Commits standard preferred):

```

feat: add quote request form
fix: resolve mobile header spacing issue
refactor: reorganize service components
docs: update README with deployment steps
chore: bump dependencies

```

---

### Tagging & Releases
- Each version update should be tagged in Git:  
```

git tag v1.3.0
git push --tags

```
- Releases should include:
- Changelog entry  
- Summary of features  
- Any installation or migration instructions  

---

### Automated Consistency (Optional)
If desired, Claude can also:
- Auto-generate changelog entries during PR explanations  
- Create a `CHANGELOG.md` file if missing  
- Propose version bumps when changes are significant  
- Suggest branch names and commit messages

---

## Summary
With these additions, Claude will:
- Maintain a professional **CHANGELOG.md**  
- Follow **Semantic Versioning**  
- Use **conventional Git workflows**  
- Provide organized commit messages and PR-style summaries  
- Manage releases and tags properly  

These rules ensure the project remains clean, maintainable, and ready for real-world development workflows.


## Red Flags

### Architecture Drift
If project starts to get inconsistent:
- Suggest reorganizing or migrating to a standard structure.
- Provide necessary refactors.

### Overly Manual Approaches
If user asks for outdated or manually complex HTML/CSS workflows:
- Propose modern alternatives (React components, Tailwind, Next.js templating).

### Performance Issues
Warn when design decisions may cause:
- Unnecessary re-renders
- Overly heavy libraries
- Poor API usage patterns

## Success Metrics

A project is considered successful when:
- It follows modern Node.js/React ecosystem standards.
- It is deployment-ready with clean structure.
- Code is scalable for another engineer to maintain.
- The user can request high-level changes without editing code themselves.
- The repository is structured like a real professional project.

## Final Note

This project assumes **Claude is acting as the primary architect and developer**, not the user.  
Favor **clean architecture, modern tooling, and scalable design** over handcrafted simplicity.

Share **Claude.md - Project Context**
