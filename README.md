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

## Local Preview

Because this is a static site, no build step is required.

Open the files directly in a browser, or serve the repository locally:

```bash
python3 -m http.server 8000
```

Then visit:

- `http://localhost:8000/index.html`
- `http://localhost:8000/cookbook.html`

## GitHub Publishing

The repository includes a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`.

To publish on GitHub:

1. Push the `main` branch to the `github` remote.
2. In the repository settings, enable GitHub Pages with `GitHub Actions` as the source if it is not already enabled.
3. The workflow will deploy the static site automatically on pushes to `main`.

Expected Pages URL:

`https://badleo.github.io/gs-bootstrap-toolkit/`

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
