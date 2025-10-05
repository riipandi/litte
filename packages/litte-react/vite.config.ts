// import tailwindCSSPlugin from './plugins/tailwindcss.plugin'
import { extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import fg from 'fast-glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import pkg from './package.json' with { type: 'json' }

const globFiles = await fg.glob(['src/components/**/*.{ts,tsx}'], {
  ignore: ['src/components/**/*.d.ts'],
  onlyFiles: true,
})

const inputGlob = Object.fromEntries(
  globFiles.map((file) => [
    relative('src/components', file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, import.meta.url)),
  ])
)

export default defineConfig({
  server: { port: 5173, strictPort: true, host: false },
  plugins: [
    react(),
    dts({ include: ['src/components'] }), // DTS plugin used for generating TypeScript declaration files
    tsconfigPaths(), // tsconfigPaths plugin used for resolving TypeScript paths
    // tailwindCSSPlugin(), // Tailwind CSS plugin to compile CSS after the build
  ],
  build: {
    lib: {
      entry: resolve('src/components/index.ts'),
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
        banner: "'use client';",
      },
    },
  },
})
