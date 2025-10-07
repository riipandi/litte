import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { minify } from 'rollup-plugin-esbuild'
import summary from 'rollup-plugin-summary'
import pkg from './package.json' with { type: 'json' }

// Get peer dependencies from package.json
const peerDeps = Object.keys(pkg.peerDependencies || {})
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationDir: undefined,
      declarationMap: false,
      emitDeclarationOnly: false,
      outDir: undefined,
    }),
    resolve({
      extensions: ['.ts', '.js', '.mjs'],
      exportConditions: ['es2023', 'module', 'import', 'default'],
      preferBuiltins: false,
    }),
    minify({ format: 'esm', target: 'es2023', minify: isProduction }),
    summary({ showBrotliSize: true, showMinifiedSize: true, showGzippedSize: true }),
  ],
  input: ['./src/index.ts'],
  output: [
    {
      format: 'es',
      dir: 'dist/esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
      sourcemap: true,
    },
    {
      format: 'umd',
      file: 'dist/umd/index.js',
      name: 'litte',
      globals: {
        lit: 'lit',
        'lit/decorators.js': 'litDecorators',
        'lit/directives/style-map.js': 'styleMap',
      },
      sourcemap: true,
    },
  ],
  preserveEntrySignatures: 'strict',
  // External dependencies that shouldn't be bundled because it will increase bundle size
  external: [...peerDeps, 'lit', 'lit/decorators.js', 'lit/directives/style-map.js'],
})
