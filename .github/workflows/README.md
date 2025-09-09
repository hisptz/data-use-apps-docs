This directory contains GitHub Actions workflows for CI, separated into three files:

- typecheck.yml — runs TypeScript type checking on pull requests to `develop`.
- lint.yml — runs ESLint and Prettier check on pull requests to `develop`.
- build.yml — builds the Docusaurus site on pull requests to `develop`.

The previous combined workflow (ci.yml) was split to provide clearer status checks and faster incremental feedback.
