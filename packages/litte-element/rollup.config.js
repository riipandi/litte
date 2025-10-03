import rollupOptions from '@repo/rollup-config'
import { defineConfig } from 'rollup'

export default defineConfig({
  ...rollupOptions,
  // External dependencies that shouldn't be bundled
  // TODO: remove tslib from external after fixing the issue with the button
  external: ['lit', 'lit/decorators.js', 'lit/directives/style-map.js', 'clsx', 'tslib'],
})
