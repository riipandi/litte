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

- [`@litte/action-bar`](https://npm.im/@litte/action-bar): Litte Action Bar component
- [`@litte/alert`](https://npm.im/@litte/alert): Litte Alert component
- [`@litte/autocomplete`](https://npm.im/@litte/autocomplete): Litte Autocomplete component
- [`@litte/avatar`](https://npm.im/@litte/avatar): Litte Avatar component
- [`@litte/badge`](https://npm.im/@litte/badge): Litte Badge component
- [`@litte/breadcrumbs`](https://npm.im/@litte/breadcrumbs): Litte Breadcrumbs component
- [`@litte/button`](https://npm.im/@litte/button): Litte Button component
- [`@litte/calendar`](https://npm.im/@litte/calendar): Litte Calendar component
- [`@litte/card`](https://npm.im/@litte/card): Litte Card component
- [`@litte/carousel`](https://npm.im/@litte/carousel): Litte Carousel component
- [`@litte/checkbox`](https://npm.im/@litte/checkbox): Litte Checkbox component
- [`@litte/context-menu`](https://npm.im/@litte/context-menu): Litte Context Menu component
- [`@litte/divider`](https://npm.im/@litte/divider): Litte Divider component
- [`@litte/dropdown-menu`](https://npm.im/@litte/dropdown-menu): Litte Dropdown Menu component
- [`@litte/file-upload`](https://npm.im/@litte/file-upload): Litte File Upload component
- [`@litte/hotkey`](https://npm.im/@litte/hotkey): Litte Hotkey component
- [`@litte/link`](https://npm.im/@litte/link): Litte Link component
- [`@litte/loader`](https://npm.im/@litte/loader): Litte Loader component
- [`@litte/menu-item`](https://npm.im/@litte/menu-item): Litte Menu Item component
- [`@litte/modal-dialog`](https://npm.im/@litte/modal-dialog): Litte Modal Dialog component
- [`@litte/number-field`](https://npm.im/@litte/number-field): Litte Number Field component
- [`@litte/overlay`](https://npm.im/@litte/overlay): Litte Overlay component
- [`@litte/pagination`](https://npm.im/@litte/pagination): Litte Pagination component
- [`@litte/pin-field`](https://npm.im/@litte/pin-field): Litte Pin Field component
- [`@litte/popover`](https://npm.im/@litte/popover): Litte Popover component
- [`@litte/progress-bar`](https://npm.im/@litte/progress-bar): Litte Progress Bar component
- [`@litte/progress-indicator`](https://npm.im/@litte/progress-indicator): Litte Progress Indicator component
- [`@litte/radio`](https://npm.im/@litte/radio): Litte Radio component
- [`@litte/select`](https://npm.im/@litte/select): Litte Select component
- [`@litte/skeleton`](https://npm.im/@litte/skeleton): Litte Skeleton component
- [`@litte/slider`](https://npm.im/@litte/slider): Litte Slider component
- [`@litte/stepper`](https://npm.im/@litte/stepper): Litte Stepper component
- [`@litte/switch`](https://npm.im/@litte/switch): Litte Switch component
- [`@litte/table`](https://npm.im/@litte/table): Litte Table component
- [`@litte/tabs`](https://npm.im/@litte/tabs): Litte Tabs component
- [`@litte/text-area`](https://npm.im/@litte/text-area): Litte Text Area component
- [`@litte/text-field`](https://npm.im/@litte/text-field): Litte Text Field component
- [`@litte/timeline`](https://npm.im/@litte/timeline): Litte Timeline component
- [`@litte/toast`](https://npm.im/@litte/toast): Litte Toast component
- [`@litte/toggle-button`](https://npm.im/@litte/toggle-button): Litte Toggle Button component
- [`@litte/tooltip`](https://npm.im/@litte/tooltip): Litte Tooltip component

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

## Acknowledgement

- https://reshaped.so
- https://ui.shadcn.com

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
