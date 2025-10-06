import rollupOptions from '@repo/rollup-config'
import { defineConfig } from 'rollup'
import pkg from './package.json' with { type: 'json' }

// Get peer dependencies from package.json
const peerDeps = Object.keys(pkg.peerDependencies || {})

export default defineConfig({
  ...rollupOptions,
  output: { ...rollupOptions.output, preserveModules: true },
  // External dependencies that shouldn't be bundled because it will increase bundle size
  external: [...peerDeps, 'lit', 'lit/decorators.js', 'lit/directives/style-map.js', 'clsx'],
})
