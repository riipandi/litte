# Litte Element

[![npm version](https://img.shields.io/npm/v/@litte/element)](https://www.npmjs.com/package/@litte/element)
[![npm downloads](https://img.shields.io/npm/dm/@litte/element)](https://www.npmjs.com/package/@litte/element)
[![license-mit](https://img.shields.io/badge/License-MIT-greens.svg)][license-mit]

Litte Element is base element for Litte web component library powered by [Lit][lit]
and [TypeScript][typescript]. Part of the [Litte][litte-homepage] component library,
it provides a modern web component solution with excellent performance and
accessibility features.

Visit the [homepage][litte-homepage] for more detailed information.

**Compatibility**: ESM-only.

## Installation

```sh
# Install with npm
npm install @litte/element

# Install with pnpm
pnpm add @litte/element

# Install with yarn
yarn add @litte/element
```

## Usage

Import the component in your JavaScript or TypeScript file:

```ts
import { LitteElement } '@litte/element'

@customElement('my-element')
export class MyElement extends LitteElement {
  ...
}
```

For detailed usage examples, see the [Litte Documentation](https://litte.dev/docs).

## License

Licensed under the [MIT license][license-mit].

Copyrights in this project are retained by their contributors.

See the [LICENSE][license-mit] file for more information.

[litte-homepage]: https://litte.dev
[license-mit]: https://github.com/riipandi/litte/blob/main/LICENSE
[typescript]: https://www.typescriptlang.org
[lit]: https://lit.dev
