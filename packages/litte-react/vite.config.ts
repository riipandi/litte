// import tailwindCSSPlugin from '@repo/vite-plugin-tailwindcss'
import { extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import fg from 'fast-glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import pkg from './package.json' with { type: 'json' }

const globFiles = await fg.glob(['src/**/*.{ts,tsx}'], {
  ignore: ['src/**/*.d.ts'],
  onlyFiles: true,
})

const inputGlob = Object.fromEntries(
  globFiles.map((file) => [
    relative('src', file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, import.meta.url)),
  ])
)

export default defineConfig({
  server: { port: 5173, strictPort: true, host: false },
  plugins: [
    react(),
    dts({ include: ['src'] }),
    tsconfigPaths(),
    {
      name: 'banner-use-client',
      /**
       * Add 'use client' directive only to specific output files:
       * - dist/components/[name]/index.js (if source is index.ts or index.tsx)
       * - dist/components/[name]/[name].js (if source is [name].tsx)
       *
       * This ensures only React Client Components in the components subfolder
       * receive the directive, not the entire library or unrelated files.
       */
      generateBundle(_options, bundle) {
        for (const [fileName, chunk] of Object.entries(bundle)) {
          // Only process JS chunks in components subfolders with the correct filename pattern
          if (
            chunk.type !== 'chunk' ||
            !fileName.startsWith('components/') ||
            !/^(components\/[^/]+\/(index|[^/]+)\.js)$/.test(fileName)
          ) {
            continue
          }
          const src = chunk.facadeModuleId
          if (!src) continue

          // Normalize path for cross-platform compatibility
          const normalizedSrc = src.replace(/\\/g, '/')

          // Match index.ts or index.tsx in components subfolders
          const isComponentIndex = /src\/components\/[^/]+\/index\.(ts|tsx)$/.test(normalizedSrc)

          // Match [name].tsx in components subfolders
          const isComponentTsx = /src\/components\/[^/]+\/[^/]+\.tsx$/.test(normalizedSrc)

          // Add 'use client' only if the source matches the above patterns
          if (isComponentIndex || isComponentTsx) {
            chunk.code = `'use client';\n${chunk.code}`
          }
        }
      },
    },
    // tailwindCSSPlugin(),
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
      external: [...Object.keys(pkg.peerDependencies || {})],
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
