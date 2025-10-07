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
 * Builds the media.css content using viewport values from the theme.
 */
function buildMediaCss(theme: ThemeConfig): string {
  const v = theme.theme.viewport
  return [
    `@custom-media --lt-viewport-s (max-width: ${Number(v.mMin) - 1}px);`,
    `@custom-media --lt-viewport-m (min-width: ${v.mMin}px);`,
    `@custom-media --lt-viewport-l (min-width: ${v.lMin}px);`,
    `@custom-media --lt-viewport-xl (min-width: ${v.xlMin}px);`,
    '',
  ].join('\n')
}

/**
 * Builds the tailwind.css content using theme variables.
 * The output maps design tokens to Tailwind-friendly custom properties.
 */
function buildTailwindCss(theme: ThemeConfig): string {
  const v = theme.theme.viewport
  const tailwindStr = `@theme inline {
\t--background-color-primary: var(--lt-color-background-primary);
\t--background-color-primary-faded: var(--lt-color-background-primary-faded);
\t--border-color-primary: var(--lt-color-border-primary);
\t--border-color-primary-faded: var(--lt-color-border-primary-faded);
\t--text-color-primary: var(--lt-color-foreground-primary);
\t--background-color-critical: var(--lt-color-background-critical);
\t--background-color-critical-faded: var(--lt-color-background-critical-faded);
\t--border-color-critical: var(--lt-color-border-critical);
\t--border-color-critical-faded: var(--lt-color-border-critical-faded);
\t--text-color-critical: var(--lt-color-foreground-critical);
\t--background-color-warning: var(--lt-color-background-warning);
\t--background-color-warning-faded: var(--lt-color-background-warning-faded);
\t--border-color-warning: var(--lt-color-border-warning);
\t--border-color-warning-faded: var(--lt-color-border-warning-faded);
\t--text-color-warning: var(--lt-color-foreground-warning);
\t--background-color-positive: var(--lt-color-background-positive);
\t--background-color-positive-faded: var(--lt-color-background-positive-faded);
\t--border-color-positive: var(--lt-color-border-positive);
\t--border-color-positive-faded: var(--lt-color-border-positive-faded);
\t--text-color-positive: var(--lt-color-foreground-positive);
\t--background-color-neutral: var(--lt-color-background-neutral);
\t--background-color-neutral-faded: var(--lt-color-background-neutral-faded);
\t--border-color-neutral: var(--lt-color-border-neutral);
\t--border-color-neutral-faded: var(--lt-color-border-neutral-faded);
\t--text-color-neutral: var(--lt-color-foreground-neutral);
\t--text-color-neutral-faded: var(--lt-color-foreground-neutral-faded);
\t--background-color-disabled: var(--lt-color-background-disabled);
\t--background-color-disabled-faded: var(--lt-color-background-disabled-faded);
\t--border-color-disabled: var(--lt-color-border-disabled);
\t--text-color-disabled: var(--lt-color-foreground-disabled);
\t--background-color-elevation-base: var(--lt-color-background-elevation-base);
\t--background-color-elevation-raised: var(--lt-color-background-elevation-raised);
\t--background-color-elevation-overlay: var(--lt-color-background-elevation-overlay);
\t--background-color-page: var(--lt-color-background-page);
\t--background-color-page-faded: var(--lt-color-background-page-faded);
\t--color-brand: var(--lt-color-brand);
\t--color-white: var(--lt-color-white);
\t--color-black: var(--lt-color-black);
\t--text-color-on-primary: var(--lt-color-on-background-primary);
\t--text-color-on-critical: var(--lt-color-on-background-critical);
\t--text-color-on-warning: var(--lt-color-on-background-warning);
\t--text-color-on-positive: var(--lt-color-on-background-positive);
\t--text-color-on-neutral: var(--lt-color-on-background-neutral);
\t--text-color-on-brand: var(--lt-color-on-brand);
\t--radius-small: var(--lt-radius-small);
\t--radius-medium: var(--lt-radius-medium);
\t--radius-large: var(--lt-radius-large);
\t--spacing-0: 0px;
\t--spacing-x1: var(--lt-unit-x1);
\t--spacing-x2: var(--lt-unit-x2);
\t--spacing-x3: var(--lt-unit-x3);
\t--spacing-x4: var(--lt-unit-x4);
\t--spacing-x5: var(--lt-unit-x5);
\t--spacing-x6: var(--lt-unit-x6);
\t--spacing-x7: var(--lt-unit-x7);
\t--spacing-x8: var(--lt-unit-x8);
\t--spacing-x9: var(--lt-unit-x9);
\t--spacing-x10: var(--lt-unit-x10);
\t--shadow-raised: var(--lt-shadow-raised);
\t--shadow-overlay: var(--lt-shadow-overlay);
\t--breakpoint-m: ${v.mMin}px;
\t--breakpoint-l: ${v.lMin}px;
\t--breakpoint-xl: ${v.xlMin}px;
}`
  return `${tailwindStr.trim()}\n`
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
 * Also generates media.css, media.min.css, tailwind.css, and tailwind.min.css using theme values.
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

      // Generate media.css
      const mediaCss = buildMediaCss(t)
      const mediaCssPath = path.join(themeDir, 'media.css')
      await fs.writeFile(mediaCssPath, mediaCss)
      if (minify) {
        const minifiedMedia = await minifyCss(mediaCss, mediaCssPath)
        await fs.writeFile(path.join(themeDir, 'media.min.css'), minifiedMedia)
      }

      // Generate tailwind.css
      const tailwindCss = buildTailwindCss(t)
      const tailwindCssPath = path.join(themeDir, 'tailwind.css')
      await fs.writeFile(tailwindCssPath, tailwindCss)
      if (minify) {
        const minifiedTailwind = await minifyCss(tailwindCss, tailwindCssPath)
        await fs.writeFile(path.join(themeDir, 'tailwind.min.css'), minifiedTailwind)
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
