import type { Decorator, StoryContext } from '@storybook/web-components-vite'

// Utility: get color scheme from system
export function getSystemColorScheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Set theme attributes for preview HTML
function setThemeAttrs(theme: string, colorScheme: string) {
  if (theme) document.documentElement.setAttribute('data-lt-theme', theme)
  if (colorScheme) document.documentElement.setAttribute('data-lt-color-mode', colorScheme)
}

// Listen for system color scheme changes
function listenSystemColorScheme(onChange: (mode: 'light' | 'dark') => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = () => onChange(getSystemColorScheme())
  media.addEventListener('change', handler)
  return () => media.removeEventListener('change', handler)
}

let removeListener: (() => void) | null = null

export const withThemeProvider: Decorator = (Story, context: StoryContext) => {
  // Get theme and colorScheme from globals or parameters
  const theme = context.globals.theme || context.parameters.theme || 'default'
  const colorScheme = context.globals.colorScheme || context.parameters.colorScheme || 'system'

  const validThemes = ['default', 'slate']
  const validColorSchemes = ['light', 'dark', 'system']

  const selectedTheme = validThemes.includes(theme) ? theme : 'default'
  let selectedColorScheme = validColorSchemes.includes(colorScheme) ? colorScheme : 'system'

  // If colorScheme is system, listen for OS changes
  if (selectedColorScheme === 'system') {
    selectedColorScheme = getSystemColorScheme()
    if (!removeListener) {
      removeListener = listenSystemColorScheme((mode) => {
        setThemeAttrs(selectedTheme, mode)
      })
    }
  } else if (removeListener) {
    removeListener()
    removeListener = null
  }

  setThemeAttrs(selectedTheme, selectedColorScheme)

  return Story()
}
