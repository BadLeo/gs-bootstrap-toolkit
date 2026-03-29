# G-SHOCK Bootstrap Toolkit

Static frontend showcase and cookbook for a G-SHOCK-inspired UI toolkit built with Bootstrap 5 conventions, custom CSS, and lightweight JavaScript interactions.

## Overview

This repository contains a publish-ready static site with two primary entry points:

- `index.html`: marketing-style showcase for the toolkit language
- `cookbook.html`: component reference and usage examples

The visual system is based on rugged casing forms, LCD-style readouts, and the sample palette stored in `docs/samples`.

## Stack

- HTML5
- Bootstrap 5 via CDN
- Custom CSS in `assets/css/toolkit.css`
- Vanilla JavaScript in `assets/js/toolkit.js`
- Google Fonts and local `Digital-7` display font asset

## Project Structure

```text
.
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── images/
│   └── js/
├── docs/
│   └── samples/
├── cookbook.html
└── index.html
```

## Quality Expectations

- Keep the site dependency-light and static-first.
- Preserve relative asset paths so the project works in both local preview and GitHub Pages.
- Prefer semantic HTML and accessible labels for interactive UI elements.
- Document any new patterns in `cookbook.html` when adding components.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security

If you discover a security issue, follow the process in [SECURITY.md](SECURITY.md).

## License

This project is released under the [MIT License](LICENSE).
