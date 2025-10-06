// Experimental bundler configuration for Lit components using Rolldown
// Rolldown oxc still doesn't support `accessors` and decorators!

// rolldown.config.js
// "build": "rolldown --config rolldown.config.js",
// "dev": "rolldown --config rolldown.config.js --watch",

import { dts } from 'rolldown-plugin-dts'

/**
 * @type {import('rolldown').RolldownOptions}
 */
const rolldownOptions = {
  plugins: [
    dts({
      sourcemap: process.env.NODE_ENV !== 'production',
      oxc: { stripInternal: false },
      resolve: false,
      build: true,
    }),
  ],
  input: ['./src/index.ts'],
  output: {
    dir: 'dist',
    format: 'es',
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV !== 'production',
    preserveModulesRoot: 'src',
    preserveModules: false,
  },
  preserveEntrySignatures: 'strict',
  resolve: {
    // This needs to be explicitly set for now because oxc resolver doesn't
    // assume default exports conditions. Rolldown will ship with a default that
    // aligns with Vite in the future.
    conditionNames: ['import'],
    extensions: ['.ts', '.js', '.mjs', '.json'],
  },
}

export default rolldownOptions
