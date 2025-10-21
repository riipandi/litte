import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import { minify } from 'rollup-plugin-esbuild'
import summary from 'rollup-plugin-summary'
import pkg from './package.json' with { type: 'json' }

const peerDeps = Object.keys(pkg.peerDependencies || {})
const externalDeps = [...peerDeps, 'lit', 'lit/decorators.js', 'lit/directives/style-map.js']
const isProduction = process.env.NODE_ENV === 'production'

const commonPlugins = [
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
  summary({
    showBrotliSize: true,
    showMinifiedSize: true,
    showGzippedSize: true,
  }),
]

export default defineConfig([
  // ESM build (exclude peer deps)
  {
    input: ['./src/index.ts'],
    output: {
      format: 'es',
      dir: 'dist/esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
      sourcemap: true,
    },
    preserveEntrySignatures: 'strict',
    external: externalDeps,
    plugins: [
      ...commonPlugins,
      minify({
        format: 'esm',
        target: 'es2023',
        minify: isProduction,
      }),
    ],
  },
  // UMD build (bundle all)
  {
    input: ['./src/index.ts'],
    output: {
      name: 'litte',
      format: 'umd',
      file: 'dist/umd/index.js',
      minifyInternalExports: true,
      sourcemap: false,
      compact: true,
    },
    preserveEntrySignatures: 'strict',
    external: [], // bundle everything
    plugins: [
      ...commonPlugins,
      copy({
        targets: [{ src: 'src/styles.css', dest: 'dist' }],
        hook: 'writeBundle',
      }),
    ],
  },
])
