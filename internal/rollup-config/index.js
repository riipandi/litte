import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { minify } from 'rollup-plugin-esbuild'
import summary from 'rollup-plugin-summary'

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupOptions = {
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    resolve({
      extensions: ['.ts', '.js', '.mjs'],
      exportConditions: ['es2023', 'module', 'import', 'default'],
      preferBuiltins: false, // Prefer ES modules
    }),
    minify({
      format: 'esm',
      target: 'es2023',
      minify: process.env.NODE_ENV === 'production',
    }),
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
    preserveModulesRoot: 'src',
    preserveModules: false,
  },
  preserveEntrySignatures: 'strict',
}

export default rollupOptions
