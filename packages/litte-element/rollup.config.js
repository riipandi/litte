import rollupOptions from '@repo/rollup-config'
import { defineConfig } from 'rollup'

export default defineConfig({
  ...rollupOptions,
  output: { ...rollupOptions.output, preserveModules: true },
  // External dependencies that shouldn't be bundled because it will increase bundle size
  // TODO: remove tslib from external after fixing the issue with the components
  external: ['lit', 'lit/decorators.js', 'lit/directives/style-map.js', 'tslib'],
})
