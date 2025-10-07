# Litte Button

[![npm version](https://img.shields.io/npm/v/@litte/button)](https://www.npmjs.com/package/@litte/button)
[![npm downloads](https://img.shields.io/npm/dm/@litte/button)](https://www.npmjs.com/package/@litte/button)
[![license-mit](https://img.shields.io/badge/License-MIT-greens.svg)][license-mit]

Litte Button is a lightweight, customizable button component built with [Lit][lit]
and [TypeScript][typescript]. Part of the [Litte][litte-homepage] component library,
it provides a modern web component solution with excellent performance and
accessibility features.

Perfect for developers seeking a customizable button component that prioritizes
accessibility and performance, Litte Button streamlines implementation with a simple
API and deep customization options.

Visit the [homepage][litte-homepage] for more detailed information.

**Compatibility**: ESM-only.

## Installation

```sh
# Install with npm
npm install @litte/button

# Install with pnpm
pnpm add @litte/button

# Install with yarn
yarn add @litte/button
```

## Usage

Import the component in your JavaScript or TypeScript file:

```ts
import '@litte/button'
```

Use in your HTML:

```html
<!-- Default -->
<litte-button>Click me</litte-button>

<!-- With attributes -->
<litte-button variant="primary" size="lg">Primary Button</litte-button>
```

For detailed usage examples, see the [Litte Documentation](https://litte.dev/docs).

## Thanks

<p align="left" style="margin-top: 20px;">
  <a href="https://www.netlify.com/?utm_source=litte&utm_medium=npmjs&utm_campaign=README" style="margin-right: 12px;">
    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Netlify" height="36px" />
  </a>
</p>

Thanks to [Netlify](https://www.netlify.com/) for providing hosting for the website and Storybook of this project.

## License

Licensed under the [MIT license][license-mit].

Copyrights in this project are retained by their contributors.

See the [LICENSE][license-mit] file for more information.

[litte-homepage]: https://litte.dev
[license-mit]: https://github.com/riipandi/litte/blob/main/LICENSE
[typescript]: https://www.typescriptlang.org
[lit]: https://lit.dev
