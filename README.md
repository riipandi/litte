# 🔥 Litte

[![Lit](https://img.shields.io/badge/Lit-v3-blue.svg?logo=lit)](https://lit.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9-blue.svg?logo=TypeScript&logoColor=blue)](https://www.typescriptlang.org)
[![License](https://img.shields.io/github/license/riipandi/litte?color=green)](https://github.com/riipandi/litte/graphs/contributors)
[![Contribution](https://img.shields.io/badge/Contributions-welcome-gray.svg?labelColor=gray)](https://github.com/riipandi/litte/graphs/contributors)
<!-- [![Release](https://img.shields.io/github/v/release/riipandi/litte?logo=npm&logoColor=white)](https://github.com/riipandi/litte/releases) -->
<!-- [![CI Test](https://github.com/riipandi/litte/actions/workflows/ci-test.yml/badge.svg)](https://github.com/riipandi/litte/actions/workflows/ci-test.yml) -->
<!-- [![CI Build](https://github.com/riipandi/litte/actions/workflows/ci-build.yml/badge.svg)](https://github.com/riipandi/litte/actions/workflows/ci-build.yml) -->
<!-- [![CI Release](https://github.com/riipandi/litte/actions/workflows/release.yml/badge.svg)](https://github.com/riipandi/litte/actions/workflows/release.yml) -->

---

> [!WARNING]
> This project is under active development, so you may encounter bugs.
> Please review the release notes thoroughly before updating, as breaking
> changes can occur, use at your own risk!

---

## Overview

**Litte** is a modern web component library built with [Lit][lit] and [TypeScript][typescript].
It provides reusable, customizable UI components designed for fast development and easy integration in
any web project.

- **Built with Lit:** Leverages Lit’s efficient rendering and small footprint.
- **TypeScript-first:** All packages use strict TypeScript for type safety and maintainability.

Whether you need a simple button or want to extend with your own components, Litte offers a solid
foundation for building modern web interfaces.

## What's inside?

This monorepo contains everything you need to build, share, and maintain modern web components:

### Components

- [`@litte/avatar`](http://npm.im/@litte/avatar): A lightweight, customizable avatar component
- [`@litte/button`](http://npm.im/@litte/button): A lightweight, customizable button component

### Configuration

- [`@repo/rollup-config`](./internal/rollup-config): Shared Rollup configurations used throughout the monorepo
- [`@repo/typescript-config`](./internal/typescript-config): Shared TypeScript configurations used throughout the monorepo

Each package is 100% [TypeScript][typescript] and built as ESM modules.

## Development

### Build

To build all packages, run the following command:

```bash
pnpm build
```

### Develop

To develop all packages, run the following command:

```bash
pnpm dev
```

### Clean

To clean all build artifacts, run:

```bash
pnpm cleanup
```

## License

This project is released under the [MIT License][license-mit]. For a quick summary of the MIT License terms,
visit [tldrlegal.com][tldr-mit].

All copyright remains with the individual contributors.

See the [LICENSE][license-mit] file for more information.

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>

[![Made by](https://badgen.net/badge/icon/Made%20by%20Aris%20Ripandi?icon=cocoapods&label&color=black&labelColor=black)][riipandi-x]

<!-- link reference definition -->
[license-mit]: https://github.com/riipandi/litte/blob/main/LICENSE
[lit]: https://lit.dev
[typescript]: https://www.typescriptlang.org
[tldr-mit]: https://www.tldrlegal.com/license/mit-license
[riipandi-x]: https://x.com/intent/follow?screen_name=riipandi
