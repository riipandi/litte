import { ThemeConfig } from '../types'

const themeIndigo: ThemeConfig = {
  id: 'indigo',
  name: 'Indigo',
  theme: {
    typography: {
      fontFamilyTitle: `"Mona Sans", BlinkMacSystemFont, -apple-system, Roboto, Aptos, Helvetica, Arial, sans-serif`,
      fontFamilyBody: `"Mona Sans", BlinkMacSystemFont, -apple-system, Roboto, Aptos, Helvetica, Arial, sans-serif`,
      fontFamilyMonospace: `"Monaspace Argon", SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`,
      fontWeightRegular: '400',
      fontWeightMedium: '500',
      fontWeightSemibold: '600',
      fontWeightBold: '700',
      fontWeightExtrabold: '800',
      fontWeightBlack: '900',
      fontSizeTitle1: '6rem',
      lineHeightTitle1: '6.25rem',
      fontFamilyTitle1: 'var(--lt-font-family-title)',
      fontWeightTitle1: 'var(--lt-font-weight-extrabold)',
      letterSpacingTitle1: 'normal',
      fontSizeTitle2: '5rem',
      lineHeightTitle2: '5.25rem',
      fontFamilyTitle2: 'var(--lt-font-family-title)',
      fontWeightTitle2: 'var(--lt-font-weight-extrabold)',
      letterSpacingTitle2: 'normal',
      fontSizeTitle3: '4rem',
      lineHeightTitle3: '4.25rem',
      fontFamilyTitle3: 'var(--lt-font-family-title)',
      fontWeightTitle3: 'var(--lt-font-weight-extrabold)',
      letterSpacingTitle3: 'normal',
      fontSizeTitle4: '3.5rem',
      lineHeightTitle4: '3.75rem',
      fontFamilyTitle4: 'var(--lt-font-family-title)',
      fontWeightTitle4: 'var(--lt-font-weight-bold)',
      letterSpacingTitle4: 'normal',
      fontSizeTitle5: '3rem',
      lineHeightTitle5: '3.25rem',
      fontFamilyTitle5: 'var(--lt-font-family-title)',
      fontWeightTitle5: 'var(--lt-font-weight-bold)',
      letterSpacingTitle5: 'normal',
      fontSizeTitle6: '2.25rem',
      lineHeightTitle6: '2.5rem',
      fontFamilyTitle6: 'var(--lt-font-family-title)',
      fontWeightTitle6: 'var(--lt-font-weight-bold)',
      letterSpacingTitle6: 'normal',
      fontSizeFeatured1: '2rem',
      lineHeightFeatured1: '2.5rem',
      fontFamilyFeatured1: 'var(--lt-font-family-body)',
      letterSpacingFeatured1: 'normal',
      fontSizeFeatured2: '1.5rem',
      lineHeightFeatured2: '2rem',
      fontFamilyFeatured2: 'var(--lt-font-family-body)',
      letterSpacingFeatured2: 'normal',
      fontSizeFeatured3: '1.25rem',
      lineHeightFeatured3: '1.75rem',
      fontFamilyFeatured3: 'var(--lt-font-family-body)',
      letterSpacingFeatured3: 'normal',
      fontSizeBody1: '1.125rem',
      lineHeightBody1: '1.75rem',
      fontFamilyBody1: 'var(--lt-font-family-body)',
      letterSpacingBody1: 'normal',
      fontSizeBody2: '1rem',
      lineHeightBody2: '1.5rem',
      fontFamilyBody2: 'var(--lt-font-family-body)',
      letterSpacingBody2: 'normal',
      fontSizeBody3: '0.875rem',
      lineHeightBody3: '1.25rem',
      fontFamilyBody3: 'var(--lt-font-family-body)',
      letterSpacingBody3: 'normal',
      fontSizeCaption1: '0.75rem',
      lineHeightCaption1: '1rem',
      fontFamilyCaption1: 'var(--lt-font-family-body)',
      letterSpacingCaption1: 'normal',
      fontSizeCaption2: '0.625rem',
      lineHeightCaption2: '0.75rem',
      fontFamilyCaption2: 'var(--lt-font-family-body)',
      letterSpacingCaption2: 'normal',
    },
    shadow: {
      raised: '0px 1px 5px -4px rgba(0, 0, 0, 0.5), 0px 4px 8px 0px rgba(0, 0, 0, 0.05)',
      overlay: '0px 5px 10px 0px rgba(0, 0, 0, 0.05), 0px 15px 25px 0px rgba(0, 0, 0, 0.07)',
    },
    radius: {
      small: '4px',
      medium: '8px',
      large: '12px',
    },
    unit: {
      base: '4px',
      x1: '4px',
      x2: '8px',
      x3: '12px',
      x4: '16px',
      x5: '20px',
      x6: '24px',
      x7: '28px',
      x8: '32px',
      x9: '36px',
      x10: '40px',
    },
    viewport: {
      mMin: '660',
      lMin: '900',
      xlMin: '1280',
    },
    duration: {
      rapid: '100ms',
      fast: '200ms',
      medium: '300ms',
      slow: '400ms',
    },
    easing: {
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
      decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    },
    zIndex: {
      relative: '10',
      absolute: '100',
      fixed: '200',
    },
    color: {
      brand: '#5a58f2',
      white: '#ffffff',
      black: '#000000',
      onBackgroundPrimary: 'oklch(1 0 0)',
      onBackgroundCritical: 'oklch(1 0 0)',
      onBackgroundWarning: 'oklch(0 0 0)',
      onBackgroundPositive: 'oklch(1 0 0)',
      onBrand: 'oklch(1 0 0)',
      rgbWhite: '255, 255, 255',
      rgbBlack: '0, 0, 0',
    },
    colors: {
      backgroundPrimary: {
        light: '#5a58f2',
        dark: '#524fea',
      },
      backgroundPrimaryFaded: {
        light: '#ecebfe',
        dark: '#252544',
      },
      borderPrimary: {
        light: '#3b38ed',
        dark: '#8c8bf3',
      },
      borderPrimaryFaded: {
        light: '#dedcfb',
        dark: '#323164',
      },
      foregroundPrimary: {
        light: '#4f4cf0',
        dark: '#8b8af7',
      },
      backgroundCritical: {
        light: '#e22c2c',
        dark: '#d02626',
      },
      backgroundCriticalFaded: {
        light: '#fdeded',
        dark: '#3e1f1f',
      },
      borderCritical: {
        light: '#bf2424',
        dark: '#f46969',
      },
      borderCriticalFaded: {
        light: '#f3dad6',
        dark: '#5a2e29',
      },
      foregroundCritical: {
        light: '#c42525',
        dark: '#f36a6a',
      },
      backgroundWarning: {
        light: '#facc15',
        dark: '#f1c512',
      },
      backgroundWarningFaded: {
        light: '#fffae9',
        dark: '#2c271f',
      },
      borderWarning: {
        light: '#cfa90f',
        dark: '#b4920a',
      },
      borderWarningFaded: {
        light: '#ece2c4',
        dark: '#453c1e',
      },
      foregroundWarning: {
        light: '#7b6305',
        dark: '#b4920c',
      },
      backgroundPositive: {
        light: '#118850',
        dark: '#14784a',
      },
      backgroundPositiveFaded: {
        light: '#edfdf5',
        dark: '#1f2a23',
      },
      borderPositive: {
        light: '#0c6e40',
        dark: '#21ab6b',
      },
      borderPositiveFaded: {
        light: '#d2eddb',
        dark: '#264431',
      },
      foregroundPositive: {
        light: '#0d7544',
        dark: '#18ab66',
      },
      backgroundNeutral: {
        light: '#dfe2ea',
        dark: '#494f60',
      },
      backgroundNeutralFaded: {
        light: '#f3f3f5',
        dark: '#222835',
      },
      borderNeutral: {
        light: '#0000001f',
        dark: '#ffffff24',
      },
      borderNeutralFaded: {
        light: '#00000014',
        dark: '#ffffff14',
      },
      foregroundNeutral: {
        light: '#14181f',
        dark: '#eff1f5',
      },
      foregroundNeutralFaded: {
        light: '#5b667e',
        dark: '#c0c6d6',
      },
      backgroundDisabled: {
        light: '#eceef2',
        dark: '#1e212a',
      },
      backgroundDisabledFaded: {
        light: '#f5f6f9',
        dark: '#171921',
      },
      borderDisabled: {
        light: '#dfe2ea',
        dark: '#262a34',
      },
      foregroundDisabled: {
        light: '#c6ccda',
        dark: '#434959',
      },
      backgroundElevationBase: {
        light: '#ffffff',
        dark: '#15171e',
      },
      backgroundElevationRaised: {
        light: '#ffffff',
        dark: '#191b23',
      },
      backgroundElevationOverlay: {
        light: '#ffffff',
        dark: '#1c1f28',
      },
      backgroundPage: {
        light: '#ffffff',
        dark: '#0f1116',
      },
      backgroundPageFaded: {
        light: '#f9f9fb',
        dark: '#111319',
      },
      rgbBackgroundPrimary: {
        light: '89.9895, 88.0005, 241.995',
        dark: '82.008, 78.999, 233.988',
      },
      rgbBackgroundPrimaryFaded: {
        light: '236.0025, 235.008, 254.0055',
        dark: '37.0005, 37.0005, 68.0085',
      },
      rgbBackgroundCritical: {
        light: '226.0065, 43.9875, 43.9875',
        dark: '208.0035, 37.995, 37.995',
      },
      rgbBackgroundCriticalFaded: {
        light: '253.011, 236.997, 236.997',
        dark: '61.9905, 31.008, 31.008',
      },
      rgbBackgroundWarning: {
        light: '250.002, 204, 21.012',
        dark: '241.0005, 196.9875, 18.003',
      },
      rgbBackgroundWarningFaded: {
        light: '255, 250.002, 232.9935',
        dark: '43.9875, 38.9895, 31.008',
      },
      rgbBackgroundPositive: {
        light: '17.0085, 135.9915, 79.9935',
        dark: '19.992, 120.003, 74.001',
      },
      rgbBackgroundPositiveFaded: {
        light: '236.997, 253.011, 245.004',
        dark: '31.008, 41.9985, 35.0115',
      },
      onBackgroundNeutral: {
        light: 'oklch(0 0 0)',
        dark: 'oklch(1 0 0)',
      },
      rgbBackgroundNeutral: {
        light: '222.9975, 226.0065, 233.988',
        dark: '73.0065, 78.999, 96.0075',
      },
      rgbBackgroundNeutralFaded: {
        light: '242.9895, 242.9895, 245.004',
        dark: '33.9915, 40.0095, 52.989',
      },
      rgbBackgroundDisabled: {
        light: '236.0025, 237.9915, 241.995',
        dark: '29.988, 32.997, 41.9985',
      },
      rgbBackgroundDisabledFaded: {
        light: '245.004, 245.9985, 249.0075',
        dark: '23.001, 24.99, 32.997',
      },
      rgbBackgroundElevationBase: {
        light: '255, 255, 255',
        dark: '21.012, 23.001, 29.988',
      },
      rgbBackgroundElevationRaised: {
        light: '255, 255, 255',
        dark: '24.99, 27.0045, 35.0115',
      },
      rgbBackgroundElevationOverlay: {
        light: '255, 255, 255',
        dark: '27.999, 31.008, 40.0095',
      },
      rgbBackgroundPage: {
        light: '255, 255, 255',
        dark: '14.994, 17.0085, 22.0065',
      },
      rgbBackgroundPageFaded: {
        light: '249.0075, 249.0075, 250.9965',
        dark: '17.0085, 18.9975, 24.99',
      },
    },
  },
}

export default themeIndigo
