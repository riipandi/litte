/* @ref: https://storybook.js.org/docs/configure/user-interface/theming/ */
import { addons } from 'storybook/manager-api'
import { customTheme } from './themes'

// Set custom theme and layout for Storybook manager
addons.setConfig({
  theme: customTheme,
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
