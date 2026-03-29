# Security Policy

## Supported Versions

This repository is a static site and does not currently maintain versioned release branches. Security fixes are applied on the `main` branch.

## Reporting a Vulnerability

Please do not open a public issue for suspected security problems.

Instead:

1. Contact the maintainer privately with a clear description of the issue.
2. Include reproduction steps, affected files, and impact if known.
3. Allow reasonable time for review and remediation before public disclosure.

## Typical Risk Areas

For this repository, the most likely security concerns are:

- unsafe third-party CDN dependencies
- accidental introduction of secrets or tokens into the repository
- unsafe client-side scripting patterns
- deployment misconfiguration in GitHub Pages or repository settings
