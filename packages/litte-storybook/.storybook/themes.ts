import { GLOBALS_UPDATED } from 'storybook/internal/core-events'
import { create } from 'storybook/theming'

// Brand config for Storybook theme
const brand = {
  brandTitle: 'UI Components',
  brandUrl: '/',
  fontBase: 'Inter, BlinkMacSystemFont, -apple-system, Roboto, Aptos, Helvetica, Arial, sans-serif',
  appBorderRadius: 4,
  inputBorderRadius: 4,
}

// Light theme config
export const light = create({
  base: 'light',
  ...brand,
  colorPrimary: '#0f131a',
  colorSecondary: '#0f131a',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  textColor: '#0f131a',
  textMutedColor: '#6b7280',
  textInverseColor: '#ffffff',
  barTextColor: '#6b7280',
  barHoverColor: '#374151',
  barSelectedColor: '#1fa2ff',
  barBg: '#ffffff',
  buttonBg: '#f3f4f6',
  buttonBorder: '#e5e7eb',
  inputBg: '#ffffff',
  inputBorder: '#e5e7eb',
  inputTextColor: '#0f131a',
})

// Dark theme config
export const dark = create({
  base: 'dark',
  ...brand,
  colorPrimary: '#ffffff',
  colorSecondary: '#374151',
  appBg: '#0f131a',
  appContentBg: '#0f131a',
  appPreviewBg: '#0f131a',
  appBorderColor: '#374151',
  textColor: '#ffffff',
  textMutedColor: '#9ca3af',
  textInverseColor: '#0f131a',
  barTextColor: '#9ca3af',
  barHoverColor: '#d1d5db',
  barSelectedColor: '#1fa2ff',
  barBg: '#0f131a',
  buttonBg: '#1f2937',
  buttonBorder: '#374151',
  inputBg: '#111827',
  inputBorder: '#374151',
  inputTextColor: '#ffffff',
})

export type ThemeVariant = 'default' | 'slate'
export type ColorMode = 'light' | 'dark' | 'system'

type EventListener = (
  eventName: string,
  callback: (context: { globals: Record<string, unknown> }) => void
) => void

export function listenToColorScheme(
  eventEmitter: { on: EventListener; off: EventListener },
  callback: (colorMode: 'light' | 'dark') => void
) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  let isSystemMode = false

  const handleMediaChange = (event: MediaQueryListEvent) => {
    if (isSystemMode) {
      callback(event.matches ? 'dark' : 'light')
    }
  }

  const handleGlobalsChange = ({ globals }: { globals: Record<string, unknown> }) => {
    const colorMode = (globals.colorMode as ColorMode) || 'system'

    if (colorMode === 'system') {
      isSystemMode = true
      callback(mediaQuery.matches ? 'dark' : 'light')
      mediaQuery.addEventListener('change', handleMediaChange)
    } else {
      isSystemMode = false
      callback(colorMode)
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }

  // Inisialisasi dengan global colorMode saat ini
  handleGlobalsChange({ globals: window.__STORYBOOK_GLOBALS__ || { colorMode: 'system' } })

  eventEmitter.on(GLOBALS_UPDATED, handleGlobalsChange)

  // Cleanup function
  return () => {
    eventEmitter.off(GLOBALS_UPDATED, handleGlobalsChange)
    mediaQuery.removeEventListener('change', handleMediaChange)
  }
}

// Declare global for Storybook globals
declare global {
  interface Window {
    __STORYBOOK_GLOBALS__?: Record<string, any>
  }
}
