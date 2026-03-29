# Contributing

## Scope

This repository is a static frontend toolkit showcase. Contributions should improve one or more of the following:

- visual consistency
- accessibility
- documentation quality
- component coverage in the cookbook
- deployment and repository hygiene

## Setup

No build toolchain is required.

1. Clone the repository.
2. Serve the project locally with a static file server such as `python3 -m http.server 8000`.
3. Validate changes in both `index.html` and `cookbook.html`.

## Pull Requests

Before opening a pull request:

1. Keep changes focused and easy to review.
2. Preserve relative asset paths for GitHub Pages compatibility.
3. Update documentation when a component, behavior, or workflow changes.
4. Check layout behavior on desktop and mobile widths.
5. Confirm that external CDN references still resolve correctly.

## Content Standards

- Use semantic HTML where practical.
- Keep CSS naming aligned with existing `toolkit-*`, `lcd-*`, and `gs-*` patterns.
- Avoid introducing unnecessary build tooling for static assets.
- Prefer small, intentional JavaScript enhancements over framework-heavy additions.

## Commit Guidance

- Use clear commit messages that describe the user-facing or repository-facing change.
- Separate structural repository changes from visual redesigns when possible.

## Review Criteria

Changes are more likely to be accepted when they:

- improve clarity without increasing complexity
- preserve the existing visual direction
- keep the project easy to host as a static site
