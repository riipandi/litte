import type { Preview } from '@storybook/web-components-vite'
import { withThemeProvider } from './decorators'
import { light } from './themes'

const customComponents = {}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    previewTabs: { 'storybook/docs/panel': { index: -1 } },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      exclude: ['asChild', 'onClick'],
    },
    viewport: {
      options: {
        smallMobile: {
          name: 'Small mobile',
          styles: { width: '320px', height: '568px' },
        },
        largeMobile: {
          name: 'Large mobile',
          styles: { width: '414px', height: '896px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '834px', height: '1112px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '1000px' },
        },
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        includeName: true,
        order: [
          'Introduction',
          'Getting Started',
          'Changelog',
          'Basic Components',
          'Layout Components',
          'Visualizations',
          '*',
        ],
      },
    },
    backgrounds: { disabled: true },
    layout: 'padded',
    chromatic: {
      modes: {
        dark: {
          theme: 'dark',
        },
        light: {
          theme: 'light',
        },
      },
    },
    docs: {
      theme: light, // default, will be updated by decorator
      components: customComponents,
      defaultName: 'Documentation',
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: '#preview',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme variant for components',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme',
        icon: 'component',
        dynamicTitle: false,
        showName: false,
        items: [
          { title: 'Default', value: 'default', icon: 'circlehollow' },
          { title: 'Slate', value: 'slate', icon: 'circle' },
        ],
      },
    },
    colorMode: {
      name: 'Color Mode',
      description: 'Color mode (dark or light)',
      defaultValue: 'system',
      toolbar: {
        title: 'Color Mode',
        icon: 'paintbrush',
        dynamicTitle: false,
        showName: false,
        items: [
          { title: 'Match system', value: 'system', icon: 'mirror' },
          { title: 'Light', value: 'light', icon: 'circlehollow' },
          { title: 'Dark', value: 'dark', icon: 'circle' },
        ],
      },
    },
  },

  decorators: [withThemeProvider],
}

export default preview
