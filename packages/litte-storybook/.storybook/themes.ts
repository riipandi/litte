import { create } from 'storybook/theming'

// Single custom theme for Storybook manager and docs
export const customTheme = create({
  base: 'dark',
  brandTitle: 'UI Components',
  brandUrl: '/',
  brandTarget: '_self',
  fontBase: 'Inter, BlinkMacSystemFont, -apple-system, Roboto, Aptos, Helvetica, Arial, sans-serif',
  appBorderRadius: 4,
  inputBorderRadius: 4,
  // Color palette for Storybook UI
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
