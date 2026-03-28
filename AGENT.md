# AGENT.md

This file defines the default working rules for AI agents contributing to projects that follow this stack and structure.

## Project Profile

- Build static-first frontends.
- Prefer plain HTML, CSS, and vanilla JavaScript.
- Use Bootstrap 5 as the layout and utility foundation, not as the visual identity.
- Layer a custom design system on top of Bootstrap with project-specific classes, tokens, and components.
- Keep the project dependency-light and avoid introducing a build step unless the project requirements clearly justify it.

## Primary Goals

- Preserve a strong visual identity instead of falling back to generic Bootstrap styling.
- Keep the codebase easy to open, edit, and serve locally with a simple HTTP server.
- Optimize for clarity, portability, and low maintenance.
- Ship interfaces that feel intentional on desktop and mobile.
- Respect accessibility and reduced-motion preferences.

## Default Stack

- HTML5 for page structure.
- CSS3 for theming, layout overrides, tokens, and components.
- Vanilla JavaScript for progressive enhancement and small interactive behaviors.
- Bootstrap 5.x for grid, spacing, layout primitives, and selected interactive patterns.
- Optional lightweight browser-side libraries only when they solve a specific UI problem cleanly.

## Architecture Rules

- Keep the site runnable without a bundler.
- Favor a flat structure for small projects.
- Put reusable styles in `assets/toolkit.css` or an equivalent shared stylesheet.
- Put reusable interactive behavior in `assets/toolkit.js` or an equivalent shared script.
- Keep pages as direct HTML entry points such as `index.html`, `cookbook.html`, `about.html`, or `docs.html`.
- Store images, icons, and media under `assets/`.
- Reuse existing classes and tokens before creating new ones.

## HTML Guidelines

- Write semantic HTML first.
- Use Bootstrap layout classes for structure, spacing, and responsive behavior.
- Use custom project classes for branded components and visual treatment.
- Keep markup readable and sectioned clearly.
- Add meaningful `meta` description, Open Graph, and Twitter metadata on public-facing pages.
- Use descriptive `alt` text for content images and empty `alt=""` for decorative images.
- Prefer native elements and attributes before adding JavaScript-driven behavior.

## CSS Guidelines

- Centralize design tokens in `:root`.
- Define color, spacing, shadow, typography, and surface values as CSS custom properties.
- Treat Bootstrap variables as integration points that should be mapped to the project theme.
- Build branded components with custom classes instead of overloading Bootstrap components everywhere.
- Prefer responsive CSS and fluid sizing with `clamp()` where it improves polish.
- Keep visual systems cohesive: typography, borders, shadows, overlays, and motion should feel like one language.
- Avoid one-off inline styles unless there is a strong reason.
- Preserve strong art direction. Do not dilute the project into default Bootstrap aesthetics.

## JavaScript Guidelines

- Use vanilla JavaScript and `DOMContentLoaded` initialization for page behaviors.
- Keep scripts small, readable, and scoped to the actual UI needs.
- Prefer progressive enhancement: pages should remain usable if JavaScript fails or is unavailable.
- Respect `prefers-reduced-motion` for animations and smooth scrolling.
- Avoid large state abstractions or framework-like patterns unless the project has clearly outgrown static-site complexity.
- Reuse shared selectors and `data-*` hooks for behavior attachment.
- Keep animation and interaction logic lightweight.

## UX and Visual Direction

- Design should feel distinctive and authored, not template-derived.
- Bold visual systems are preferred when they stay coherent and usable.
- Backgrounds, overlays, type, and motion should contribute to the theme.
- Motion should support hierarchy and delight, not distract.
- Mobile layouts must be intentional, not desktop layouts merely squeezed smaller.
- Preserve contrast, readability, and interaction clarity.

## Accessibility Rules

- Maintain keyboard-accessible navigation and controls.
- Ensure visible focus states.
- Use sufficient color contrast for text and critical UI.
- Respect reduced motion and avoid essential meaning being communicated only by animation.
- Keep headings hierarchical and landmarks clear.

## Dependency Policy

- Do not add a framework, bundler, or heavy runtime dependency by default.
- Do not add npm tooling unless there is a clear requirement from the project scope.
- If proposing a new dependency, justify it in terms of real maintenance and UX benefit.
- Favor CDN-loaded libraries only for small static projects when that keeps setup simpler.

## Editing Policy For Agents

- Match the existing structure and naming style before inventing a new pattern.
- Extend shared styles and scripts instead of duplicating logic across pages.
- Keep diffs focused and minimal.
- Do not perform broad refactors unless asked.
- Do not replace the visual language with generic components.
- If introducing a new component pattern, make it reusable and consistent with the existing system.
- When changing behavior, verify the no-JS or reduced-motion fallback still makes sense.

## Quality Checklist

Before finishing work, verify:

- The site still works as static files served over a simple local HTTP server.
- Layouts behave correctly on desktop and mobile widths.
- New styles align with existing tokens and component language.
- New interactions are lightweight and degrade gracefully.
- Accessibility basics are preserved.
- Public-facing metadata and content remain coherent.

## Default Agent Behaviour

When working in a project that uses this template, the AI agent should:

- Assume the preferred solution is static-first and low-complexity.
- Reach for HTML, CSS, and vanilla JavaScript before suggesting a framework.
- Use Bootstrap for structure and responsiveness, while preserving a custom branded layer.
- Avoid unnecessary tooling churn.
- Keep implementation practical, readable, and easy for humans to maintain.

## When To Break These Rules

It is acceptable to move beyond this approach only if at least one of these is true:

- The project has complex application state that is becoming hard to manage without a framework.
- Reuse requirements across many pages justify a build system or component pipeline.
- Performance, content scale, or engineering workflow needs clearly exceed a static setup.
- The user explicitly asks for a different architecture.

If that happens, call out the tradeoff clearly before changing direction.
