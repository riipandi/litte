import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { minify } from 'rollup-plugin-esbuild'
import summary from 'rollup-plugin-summary'

export default defineConfig({
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    resolve({
      extensions: ['.ts', '.js', '.mjs'],
      exportConditions: ['es2020', 'es2015', 'module', 'import', 'default'],
      preferBuiltins: false, // Prefer ES modules
    }),
    minify({ target: 'es2020', format: 'esm' }),
    summary({
      showBrotliSize: true,
      showMinifiedSize: true,
      showGzippedSize: true,
    }), // Print bundle summary
  ],
  input: ['./src/index.ts'],
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  preserveEntrySignatures: 'strict',
  // External dependencies that shouldn't be bundled
  // TODO: remove tslib from external after fixing the issue with the button
  external: ['lit', 'lit/decorators.js', 'lit/directives/style-map.js', 'clsx', 'tslib'],
})
