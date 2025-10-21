# Litte

[![npm version](https://img.shields.io/npm/v/litte)](https://www.npmjs.com/package/litte)
[![npm downloads](https://img.shields.io/npm/dm/litte)](https://www.npmjs.com/package/litte)
[![license-mit](https://img.shields.io/badge/License-MIT-greens.svg)][license-mit]

**Litte** is a modern web component library built with [Lit][lit] and [TypeScript][typescript].
It provides reusable, customizable UI components designed for fast development and easy integration in
any web project.

- **Built with Lit:** Leverages Lit’s efficient rendering and small footprint.
- **TypeScript-first:** All packages use strict TypeScript for type safety and maintainability.

Whether you need a simple button or want to extend with your own components, Litte offers a solid
foundation for building modern web interfaces.

Visit the [homepage][litte-homepage] for more detailed information.

**Compatibility**: ESM and UMD.

## Usage

### ESM (Using Bundler)

Install via npm, pnpm, or yarn:

```sh
# Install with npm
npm install litte

# Install with pnpm
pnpm add litte

# Install with yarn
yarn add litte
```

Import the component in your JavaScript or TypeScript file:

```ts
import 'litte'
```

### UMD (Browser via CDN)

Add to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/@litte/themes@PKG_VERSION/dist/bundle.min.css">
<script src="https://unpkg.com/litte@PKG_VERSION/dist/umd/index.js"></script>
```

Use in your HTML:

```html
<litte-button variant="primary">Click Me</litte-button>
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
