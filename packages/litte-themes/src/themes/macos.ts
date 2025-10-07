import { ThemeConfig } from '../types'

const themeMacOS: ThemeConfig = {
  id: 'macos',
  name: 'macOS',
  theme: {
    typography: {
      fontFamilyTitle: `-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, Arial, sans-serif`,
      fontFamilyBody: `-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, Arial, sans-serif`,
      fontFamilyMonospace: `"SF Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", monospace`,
      fontWeightRegular: '400',
      fontWeightMedium: '500',
      fontWeightSemibold: '600',
      fontWeightBold: '700',
      fontWeightExtrabold: '800',
      fontWeightBlack: '900',
      fontSizeTitle1: '2rem', // 32px
      lineHeightTitle1: '2.5rem', // 40px
      fontFamilyTitle1: 'var(--lt-font-family-title)',
      fontWeightTitle1: 'var(--lt-font-weight-bold)',
      letterSpacingTitle1: '0em',
      fontSizeTitle2: '1.5rem', // 24px
      lineHeightTitle2: '2rem', // 32px
      fontFamilyTitle2: 'var(--lt-font-family-title)',
      fontWeightTitle2: 'var(--lt-font-weight-bold)',
      letterSpacingTitle2: '0em',
      fontSizeTitle3: '1.25rem', // 20px
      lineHeightTitle3: '1.75rem', // 28px
      fontFamilyTitle3: 'var(--lt-font-family-title)',
      fontWeightTitle3: 'var(--lt-font-weight-semibold)',
      letterSpacingTitle3: '0em',
      fontSizeTitle4: '1.125rem', // 18px
      lineHeightTitle4: '1.5rem', // 24px
      fontFamilyTitle4: 'var(--lt-font-family-title)',
      fontWeightTitle4: 'var(--lt-font-weight-semibold)',
      letterSpacingTitle4: '0em',
      fontSizeTitle5: '1rem', // 16px
      lineHeightTitle5: '1.25rem', // 20px
      fontFamilyTitle5: 'var(--lt-font-family-title)',
      fontWeightTitle5: 'var(--lt-font-weight-medium)',
      letterSpacingTitle5: '0em',
      fontSizeTitle6: '0.875rem', // 14px
      lineHeightTitle6: '1.125rem', // 18px
      fontFamilyTitle6: 'var(--lt-font-family-title)',
      fontWeightTitle6: 'var(--lt-font-weight-medium)',
      letterSpacingTitle6: '0em',
      fontSizeFeatured1: '1rem', // 16px
      lineHeightFeatured1: '1.5rem', // 24px
      fontFamilyFeatured1: 'var(--lt-font-family-body)',
      letterSpacingFeatured1: '0em',
      fontSizeFeatured2: '0.9375rem', // 15px
      lineHeightFeatured2: '1.25rem', // 20px
      fontFamilyFeatured2: 'var(--lt-font-family-body)',
      letterSpacingFeatured2: '0em',
      fontSizeFeatured3: '0.875rem', // 14px
      lineHeightFeatured3: '1.125rem', // 18px
      fontFamilyFeatured3: 'var(--lt-font-family-body)',
      letterSpacingFeatured3: '0em',
      fontSizeBody1: '1rem', // 16px
      lineHeightBody1: '1.5rem', // 24px
      fontFamilyBody1: 'var(--lt-font-family-body)',
      letterSpacingBody1: '0em',
      fontSizeBody2: '0.9375rem', // 15px
      lineHeightBody2: '1.25rem', // 20px
      fontFamilyBody2: 'var(--lt-font-family-body)',
      letterSpacingBody2: '0em',
      fontSizeBody3: '0.875rem', // 14px
      lineHeightBody3: '1.125rem', // 18px
      fontFamilyBody3: 'var(--lt-font-family-body)',
      letterSpacingBody3: '0em',
      fontSizeCaption1: '0.75rem', // 12px
      lineHeightCaption1: '1rem', // 16px
      fontFamilyCaption1: 'var(--lt-font-family-body)',
      letterSpacingCaption1: '0em',
      fontSizeCaption2: '0.6875rem', // 11px
      lineHeightCaption2: '0.875rem', // 14px
      fontFamilyCaption2: 'var(--lt-font-family-body)',
      letterSpacingCaption2: '0em',
    },
    shadow: {
      raised: '0 1px 3px 0 rgba(60,60,67,0.15), 0 1.5px 6px 0 rgba(60,60,67,0.10)',
      overlay: '0 8px 24px 0 rgba(60,60,67,0.18), 0 1.5px 6px 0 rgba(60,60,67,0.10)',
    },
    radius: {
      small: '6px',
      medium: '10px',
      large: '16px',
    },
    unit: {
      base: '8px',
      x1: '8px',
      x2: '16px',
      x3: '24px',
      x4: '32px',
      x5: '40px',
      x6: '48px',
      x7: '56px',
      x8: '64px',
      x9: '72px',
      x10: '80px',
    },
    viewport: {
      mMin: '600',
      lMin: '900',
      xlMin: '1280',
    },
    duration: {
      rapid: '100ms',
      fast: '180ms',
      medium: '250ms',
      slow: '350ms',
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
      brand: '#007aff', // macOS blue
      white: '#ffffff',
      black: '#1a1a1a',
      onBackgroundPrimary: '#fff',
      onBackgroundCritical: '#fff',
      onBackgroundWarning: '#1a1a1a',
      onBackgroundPositive: '#1a1a1a',
      onBrand: '#fff',
      rgbWhite: '255,255,255',
      rgbBlack: '26,26,26',
    },
    colors: {
      backgroundPrimary: {
        light: '#007aff', // macOS blue button
        dark: '#0a84ff', // macOS blue dark
      },
      backgroundPrimaryFaded: {
        light: '#339cff', // hover/active blue
        dark: '#2296ff',
      },
      backgroundPage: {
        light: '#f5f5f7', // macOS window bg
        dark: '#1e1e1e',
      },
      backgroundPageFaded: {
        light: '#e5e5ea',
        dark: '#232323',
      },
      borderPrimary: {
        light: '#007aff', // blue border for button
        dark: '#2296ff',
      },
      borderPrimaryFaded: {
        light: '#339cff',
        dark: '#2296ff',
      },
      foregroundPrimary: {
        light: '#fff', // white text on blue button
        dark: '#fff',
      },
      backgroundCritical: {
        light: '#ff3b30',
        dark: '#ff453a',
      },
      backgroundCriticalFaded: {
        light: '#ffe5e2',
        dark: '#3a2321',
      },
      borderCritical: {
        light: '#ff3b30',
        dark: '#ff453a',
      },
      borderCriticalFaded: {
        light: '#ffb3ad',
        dark: '#3a2321',
      },
      foregroundCritical: {
        light: '#fff',
        dark: '#fff',
      },
      backgroundWarning: {
        light: '#ffd60a',
        dark: '#ffd60a',
      },
      backgroundWarningFaded: {
        light: '#fffbe6',
        dark: '#3a321e',
      },
      borderWarning: {
        light: '#ffd60a',
        dark: '#ffd60a',
      },
      borderWarningFaded: {
        light: '#fff3b0',
        dark: '#3a321e',
      },
      foregroundWarning: {
        light: '#1a1a1a',
        dark: '#1a1a1a',
      },
      backgroundPositive: {
        light: '#30d158',
        dark: '#32d74b',
      },
      backgroundPositiveFaded: {
        light: '#e6fbe9',
        dark: '#223a23',
      },
      borderPositive: {
        light: '#30d158',
        dark: '#32d74b',
      },
      borderPositiveFaded: {
        light: '#a3f7b5',
        dark: '#223a23',
      },
      foregroundPositive: {
        light: '#fff',
        dark: '#fff',
      },
      backgroundNeutral: {
        light: '#f5f5f7',
        dark: '#232323',
      },
      backgroundNeutralFaded: {
        light: '#e5e5ea',
        dark: '#232323',
      },
      borderNeutral: {
        light: '#d1d1d6',
        dark: '#444',
      },
      borderNeutralFaded: {
        light: '#e5e5ea',
        dark: '#333',
      },
      foregroundNeutral: {
        light: '#1a1a1a',
        dark: '#fff',
      },
      foregroundNeutralFaded: {
        light: '#636366',
        dark: '#bdbdbd',
      },
      backgroundDisabled: {
        light: '#e5e5ea',
        dark: '#444',
      },
      backgroundDisabledFaded: {
        light: '#f5f5f7',
        dark: '#232323',
      },
      borderDisabled: {
        light: '#d1d1d6',
        dark: '#444',
      },
      foregroundDisabled: {
        light: '#bdbdbd',
        dark: '#bdbdbd',
      },
      backgroundElevationBase: {
        light: '#fff',
        dark: '#232323',
      },
      backgroundElevationRaised: {
        light: '#f5f5f7',
        dark: '#232323',
      },
      backgroundElevationOverlay: {
        light: '#fff',
        dark: '#232323',
      },
      rgbBackgroundPrimary: {
        light: '0,122,255',
        dark: '10,132,255',
      },
      rgbBackgroundPrimaryFaded: {
        light: '51,156,255',
        dark: '34,150,255',
      },
      rgbBackgroundCritical: {
        light: '255,59,48',
        dark: '255,69,58',
      },
      rgbBackgroundCriticalFaded: {
        light: '255,229,226',
        dark: '58,35,33',
      },
      rgbBackgroundWarning: {
        light: '255,214,10',
        dark: '255,214,10',
      },
      rgbBackgroundWarningFaded: {
        light: '255,251,230',
        dark: '58,50,30',
      },
      rgbBackgroundPositive: {
        light: '48,209,88',
        dark: '50,215,75',
      },
      rgbBackgroundPositiveFaded: {
        light: '230,251,233',
        dark: '34,58,35',
      },
      onBackgroundNeutral: {
        light: '#1a1a1a',
        dark: '#fff',
      },
      rgbBackgroundNeutral: {
        light: '245,245,247',
        dark: '35,35,35',
      },
      rgbBackgroundNeutralFaded: {
        light: '229,229,234',
        dark: '35,35,35',
      },
      rgbBackgroundDisabled: {
        light: '229,229,234',
        dark: '68,68,68',
      },
      rgbBackgroundDisabledFaded: {
        light: '245,245,247',
        dark: '35,35,35',
      },
      rgbBackgroundElevationBase: {
        light: '255,255,255',
        dark: '35,35,35',
      },
      rgbBackgroundElevationRaised: {
        light: '245,245,247',
        dark: '35,35,35',
      },
      rgbBackgroundElevationOverlay: {
        light: '255,255,255',
        dark: '35,35,35',
      },
      rgbBackgroundPage: {
        light: '245,245,247',
        dark: '30,30,30',
      },
      rgbBackgroundPageFaded: {
        light: '229,229,234',
        dark: '35,35,35',
      },
    },
  },
}

export default themeMacOS
