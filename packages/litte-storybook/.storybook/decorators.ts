import type { Decorator, StoryContext } from '@storybook/web-components-vite'
import { dark, light } from './themes'

// Get color mode from system (OS/browser)
function getSystemColorMode(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Set theme attributes for preview HTML
function setThemeAttrs(theme: string, colorMode: string) {
  if (theme) document.documentElement.setAttribute('data-lt-theme', theme)
  if (colorMode) document.documentElement.setAttribute('data-lt-color-mode', colorMode)
}

// Set docs theme for Storybook docs panel
function setDocsTheme(colorMode: 'light' | 'dark') {
  // @ts-expect-error
  window.__STORYBOOK_ADDONS?.setConfig?.({
    docs: { theme: colorMode === 'dark' ? dark : light },
  })
}

// Listen for system color scheme changes
function listenSystemColorMode(onChange: (mode: 'light' | 'dark') => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = () => onChange(getSystemColorMode())
  media.addEventListener('change', handler)
  return () => media.removeEventListener('change', handler)
}

// Sync theme to manager by sending a custom event with colorMode detail
function syncManagerTheme(colorMode: 'light' | 'dark') {
  window.dispatchEvent(new CustomEvent('storybook:globals:update', { detail: { colorMode } }))
}

let removeListener: (() => void) | null = null

export const withThemeProvider: Decorator = (Story, context: StoryContext) => {
  // Get theme and colorMode from globals or parameters
  const theme = context.globals.theme || context.parameters.theme || 'default'
  const colorMode = context.globals.colorMode || context.parameters.colorMode || 'system'

  const validThemes = ['default', 'slate']
  const validColorModes = ['light', 'dark', 'system']

  const selectedTheme = validThemes.includes(theme) ? theme : 'default'
  let selectedColorMode = validColorModes.includes(colorMode) ? colorMode : 'system'

  // If colorMode is system, listen for OS changes
  if (selectedColorMode === 'system') {
    selectedColorMode = getSystemColorMode()
    if (!removeListener) {
      removeListener = listenSystemColorMode((mode) => {
        setThemeAttrs(selectedTheme, mode)
        setDocsTheme(mode)
        syncManagerTheme(mode)
      })
    }
  } else if (removeListener) {
    removeListener()
    removeListener = null
  }

  setThemeAttrs(selectedTheme, selectedColorMode)
  setDocsTheme(selectedColorMode as 'light' | 'dark')
  syncManagerTheme(selectedColorMode as 'light' | 'dark')

  return Story()
}
