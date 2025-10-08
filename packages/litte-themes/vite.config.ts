// import tailwindCSSPlugin from './plugins/tailwindcss.plugin'

import fs from 'node:fs/promises'
import { extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { litteThemesGenerator } from './generator'
import pkg from './package.json' with { type: 'json' }
import { LitteThemes } from './src'

// Find all TypeScript source files except type declarations
const globFiles: string[] = []
for await (const file of fs.glob('src/**/*.{ts,tsx}')) {
  if (!file.endsWith('.d.ts') && !file.endsWith('types.ts')) globFiles.push(file)
}

// Prepare input entries for Vite's library mode
const inputGlob = Object.fromEntries(
  globFiles.map((file) => [
    relative('src', file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, import.meta.url)),
  ])
)

export default defineConfig({
  plugins: [
    dts({ include: ['src'] }), // Generates TypeScript declaration files
    tsconfigPaths(), // Resolves TypeScript path aliases from tsconfig.json
    litteThemesGenerator({
      theme: Object.values(LitteThemes),
      outputDir: resolve('dist'),
      minify: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      formats: ['es'],
    },
    emptyOutDir: true,
    copyPublicDir: false,
    minify: process.env.NODE_ENV === 'production',
    cssMinify: process.env.NODE_ENV === 'production',
    outDir: resolve('dist'),
    rollupOptions: {
      external: [...Object.keys((pkg as any).peerDependencies || {})],
      input: inputGlob,
      output: {
        exports: 'named',
        entryFileNames: '[name].js',
        chunkFileNames: '_chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        reexportProtoFromExternal: false,
      },
    },
  },
})
