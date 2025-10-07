import fs from 'node:fs/promises'
import path from 'node:path'
import cssnano from 'cssnano'
import postcss from 'postcss'
import { ThemeConfig } from './src/types'

/**
 * Options for generating theme CSS files.
 * - theme: A single ThemeConfig or an array of ThemeConfig objects.
 * - outputDir: Directory path where the CSS files will be written.
 * - minify: If true, also generates a minified CSS file (theme.min.css).
 */
interface GenerateThemeCssOptions {
  theme: ThemeConfig | ThemeConfig[]
  outputDir: string
  minify?: boolean
}

/**
 * Converts camelCase or PascalCase to kebab-case.
 */
function toKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
}

/**
 * Renders CSS custom properties from a flat object.
 * Skips keys listed in skipKeys.
 */
function renderVars(obj: Record<string, any>, prefix = '--lt-', skipKeys: string[] = []) {
  const lines: string[] = []
  for (const [key, value] of Object.entries(obj)) {
    if (skipKeys.includes(key)) continue
    if (typeof value === 'string') {
      lines.push(`${prefix}${toKebabCase(key)}: ${value};`)
    }
  }
  return lines
}

/**
 * Renders color variables for a specific color scheme (light or dark).
 */
function renderColorVars(colors: ThemeConfig['theme']['colors'], scheme: 'light' | 'dark') {
  const lines: string[] = []
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'object' && value.light !== undefined && value.dark !== undefined) {
      lines.push(`--lt-color-${toKebabCase(key)}: ${value[scheme]};`)
    }
  }
  return lines
}

/**
 * Renders color variables from a flat color object.
 */
function renderColorObjVars(colorObj: Record<string, string>) {
  const lines: string[] = []
  for (const [key, value] of Object.entries(colorObj)) {
    lines.push(`--lt-color-${toKebabCase(key)}: ${value};`)
  }
  return lines
}

/**
 * Builds the CSS string for a given theme, including all variables and color schemes.
 */
function buildThemeCss(theme: ThemeConfig): string {
  const { id, theme: t } = theme

  const baseVars = [
    ...renderVars(t.typography),
    ...renderVars(t.unit, '--lt-unit-'),
    ...renderVars(t.radius, '--lt-radius-'),
    ...renderVars(t.shadow, '--lt-shadow-'),
    ...renderVars(t.viewport, '--lt-viewport-'),
    ...renderVars(t.duration, '--lt-duration-'),
    ...renderVars(t.easing, '--lt-easing-'),
    ...renderVars(t.zIndex, '--lt-z-index-'),
    ...renderColorObjVars(t.color),
  ]

  return `
[data-lt-theme="${id}"],
[data-lt-theme*=" ${id} "] {
  ${baseVars.join('\n  ')}
}

[data-lt-theme="${id}"][data-lt-scheme="light"],
[data-lt-theme*=" ${id} "][data-lt-scheme="light"] {
  ${renderColorVars(t.colors, 'light').join('\n  ')}
}

[data-lt-theme="${id}"][data-lt-scheme="dark"],
[data-lt-theme*=" ${id} "][data-lt-scheme="dark"] {
  ${renderColorVars(t.colors, 'dark').join('\n  ')}
}
`.trim()
}

/**
 * Minifies a CSS string using cssnano.
 */
async function minifyCss(css: string, from?: string) {
  return (await postcss([cssnano({ preset: 'default' })]).process(css, { from })).css
}

/**
 * Main function to generate theme CSS files in the specified output directory.
 * Accepts a single theme or an array of themes.
 * Generates both regular and minified CSS if requested.
 */
async function generateThemeCss(options: GenerateThemeCssOptions) {
  const { theme, outputDir, minify = false } = options
  const themes = Array.isArray(theme) ? theme : [theme]
  await Promise.all(
    themes.map(async (t) => {
      const css = buildThemeCss(t)
      const themeDir = path.join(outputDir, t.id)
      await fs.mkdir(themeDir, { recursive: true })
      const cssPath = path.join(themeDir, 'theme.css')
      await fs.writeFile(cssPath, css)
      if (minify) {
        const minified = await minifyCss(css, cssPath)
        await fs.writeFile(path.join(themeDir, 'theme.min.css'), minified)
      }
    })
  )
}

/**
 * Vite plugin to generate all theme CSS files in the output directory after build.
 * Uses the same options as generateThemeCss.
 */
export function litteThemesGenerator(options: GenerateThemeCssOptions) {
  return {
    name: 'litte-themes-generator',
    apply: 'build' as const,
    async closeBundle() {
      await generateThemeCss(options)
    },
  }
}

export { type GenerateThemeCssOptions, generateThemeCss }
