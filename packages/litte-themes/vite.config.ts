// import tailwindCSSPlugin from './plugins/tailwindcss.plugin'

import fs from 'node:fs/promises'
import path, { extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import cssnano from 'cssnano'
import fg from 'fast-glob'
import postcss from 'postcss'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import pkg from './package.json' with { type: 'json' }

// Find all TypeScript source files except type declarations
const globFiles = await fg.glob(['src/**/*.{ts,tsx}'], {
  ignore: ['src/**/*.d.ts'],
  onlyFiles: true,
})

// Prepare input entries for Vite's library mode
const inputGlob = Object.fromEntries(
  globFiles.map((file) => [
    relative('src', file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, import.meta.url)),
  ])
)

// Helper to minify CSS using PostCSS and cssnano
async function minifyCss(css: string, from?: string) {
  return (await postcss([cssnano({ preset: 'default' })]).process(css, { from })).css
}

// Custom Vite plugin to copy and minify theme CSS files
function bundleThemes(minify: boolean) {
  return {
    name: 'bundle-themes-plugin',
    apply: 'build' as const,
    async closeBundle() {
      // Find all theme.css and media.css files in each theme directory
      const files = await fg('src/themes/*/{theme,media}.css')
      // Map to collect CSS content for each theme
      const themeMap: Record<string, { theme?: string; media?: string }> = {}

      // 1. Copy and optionally minify each individual CSS file, and collect for bundling
      await Promise.all(
        files.map(async (srcPath) => {
          const css = await fs.readFile(srcPath, 'utf8')
          const { dir, name } = path.parse(srcPath)
          const themeName = dir.split('/').pop()!
          const outDir = join('dist/themes', themeName)
          await fs.mkdir(outDir, { recursive: true })
          // Write original CSS file
          await fs.writeFile(join(outDir, `${name}.css`), css)
          // Write minified CSS file if minify is enabled
          if (minify) {
            const minified = await minifyCss(css, srcPath)
            await fs.writeFile(join(outDir, `${name}.min.css`), minified)
          }
          // Store CSS content for later bundling
          themeMap[themeName] = themeMap[themeName] || {}
          themeMap[themeName][name as 'theme' | 'media'] = css
        })
      )

      // 2. For each theme, create bundle.css and bundle.min.css (media.css + theme.css)
      await Promise.all(
        Object.entries(themeMap).map(async ([themeName, files]) => {
          if (files.media && files.theme) {
            const outDir = join('dist/themes', themeName)
            // Concatenate media.css and theme.css (in that order)
            const bundleCss = `${files.media}\n${files.theme}`
            await fs.writeFile(join(outDir, 'bundle.css'), bundleCss)
            // Write minified bundle if minify is enabled
            if (minify) {
              const minified = await minifyCss(bundleCss)
              await fs.writeFile(join(outDir, 'bundle.min.css'), minified)
            }
          }
        })
      )
    },
  }
}

export default defineConfig({
  plugins: [
    dts({ include: ['src'] }), // Generates TypeScript declaration files
    tsconfigPaths(), // Resolves TypeScript path aliases from tsconfig.json
    bundleThemes(process.env.NODE_ENV === 'production'), // Copies and minifies theme CSS files
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
