import { GLOBALS_UPDATED } from 'storybook/internal/core-events'
import { create } from 'storybook/theming'

// Brand config for Storybook theme
const brand = {
  brandTitle: 'UI Components',
  brandUrl: '/',
  brandTarget: '_self',
  fontBase: 'Inter, BlinkMacSystemFont, -apple-system, Roboto, Aptos, Helvetica, Arial, sans-serif',
  appBorderRadius: 4,
  inputBorderRadius: 4,
}

// Light theme config: soft but clearer blue palette
export const light = create({
  base: 'light',
  ...brand,
  colorPrimary: '#2563eb',
  colorSecondary: '#3b82f6',
  appBg: '#f2f9fe',
  appContentBg: '#feffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#dbeafe',
  textColor: '#1e293b',
  textMutedColor: '#64748b',
  textInverseColor: '#feffff',
  barTextColor: '#23272f',
  barHoverColor: '#2563eb',
  barSelectedColor: '#3b82f6',
  barBg: '#feffff',
  buttonBg: '#dbeafe',
  buttonBorder: '#93c5fd',
  inputBg: '#ffffff',
  inputBorder: '#93c5fd',
  inputTextColor: '#1e293b',
})

// Dark theme config: darker gray background, softer blue accent
export const dark = create({
  base: 'dark',
  ...brand,
  colorPrimary: '#3b5998',
  colorSecondary: '#5a7abf',
  appBg: '#181a20',
  appContentBg: '#181a20',
  appPreviewBg: '#ffffff',
  appBorderColor: '#23272f',
  textColor: '#e2e8f0',
  textMutedColor: '#94a3b8',
  textInverseColor: '#64748b',
  barTextColor: '#e2e8f0',
  barHoverColor: '#94a3b8',
  barSelectedColor: '#3b5998',
  barBg: '#181a20',
  buttonBg: '#23272f',
  buttonBorder: '#3b5998',
  inputBg: '#23272f',
  inputBorder: '#3b5998',
  inputTextColor: '#e2e8f0',
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

  // Initialize with current global colorMode
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
