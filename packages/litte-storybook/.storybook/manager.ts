/* @ref: https://storybook.js.org/docs/configure/user-interface/theming/ */
import { addons } from 'storybook/manager-api'
import { dark, light } from './themes'

// Get color mode from system (OS/browser)
function getSystemColorMode(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Apply theme to Storybook manager UI
function applyManagerTheme(colorMode: string) {
  addons.setConfig({
    theme: colorMode === 'dark' ? dark : light,
    sidebar: {
      showRoots: true,
      collapsedRoots: ['other'],
    },
    panelPosition: 'right',
    enableShortcuts: false,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    showToolbar: true,
    toolbar: {
      copy: { hidden: true },
      eject: { hidden: false },
      fullscreen: { hidden: true },
      title: { hidden: false },
      zoom: { hidden: false },
      'storybook/viewport': { hidden: false },
      'storybook/outline': { hidden: false },
    },
    initialActive: 'sidebar',
    selectedPanel: 'controls',
  })
}

// Update theme based on global colorMode or system
function updateTheme(event?: CustomEvent) {
  let mode: 'light' | 'dark' | 'system'
  // Try to get colorMode from event detail (sent by decorator)
  if (event?.detail?.colorMode) {
    mode = event.detail.colorMode
  } else {
    const globals = window.__STORYBOOK_GLOBALS__ || {}
    mode = globals.colorMode || 'system'
    if (mode === 'system') mode = getSystemColorMode()
  }
  applyManagerTheme(mode)
}

// Initial theme setup
updateTheme()

// Listen for colorMode changes from preview/decorator
window.addEventListener('storybook:globals:update', (e) => updateTheme(e as CustomEvent))

// Listen for system color scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => updateTheme())

// Fallback polling for robustness
setInterval(() => updateTheme(), 500)
