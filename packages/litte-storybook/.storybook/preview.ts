import { LitteThemes } from '@litte/themes'
import type { Preview } from '@storybook/web-components-vite'
import { withThemeProvider } from './decorators'
import { customTheme } from './themes'

// Load the application stylesheets and themes
import '@litte/themes/default/theme.css'
import '@litte/themes/fresh/theme.css'
import '@litte/themes/indigo/theme.css'

const themeItems = LitteThemes.map((theme) => ({
  title: theme.name,
  value: theme.id,
  icon: 'circle',
}))

// Set a specific icon for the default theme
if (themeItems.length > 0) {
  themeItems[0].icon = 'circlehollow'
}

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
      theme: customTheme,
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
        items: themeItems,
      },
    },
    colorScheme: {
      name: 'Color Scheme',
      description: 'Color scheme (dark or light)',
      defaultValue: 'system',
      toolbar: {
        title: 'Color Scheme',
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
