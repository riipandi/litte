import { ThemeConfig } from '../types'

const themeNeoBrutalist: ThemeConfig = {
  id: 'neobrutalist',
  name: 'Neo Brutalism',
  theme: {
    typography: {
      fontFamilyTitle: `"IBM Plex Mono", "Mona Sans", monospace, sans-serif`,
      fontFamilyBody: `"IBM Plex Mono", "Mona Sans", monospace, sans-serif`,
      fontFamilyMonospace: `"IBM Plex Mono", SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`,
      fontWeightRegular: '400',
      fontWeightMedium: '600',
      fontWeightSemibold: '700',
      fontWeightBold: '800',
      fontWeightExtrabold: '900',
      fontWeightBlack: '900',
      fontSizeTitle1: '5.5rem',
      lineHeightTitle1: '5.75rem',
      fontFamilyTitle1: 'var(--lt-font-family-title)',
      fontWeightTitle1: 'var(--lt-font-weight-extrabold)',
      letterSpacingTitle1: '0.01em',
      fontSizeTitle2: '4.5rem',
      lineHeightTitle2: '4.75rem',
      fontFamilyTitle2: 'var(--lt-font-family-title)',
      fontWeightTitle2: 'var(--lt-font-weight-extrabold)',
      letterSpacingTitle2: '0.01em',
      fontSizeTitle3: '3.5rem',
      lineHeightTitle3: '3.75rem',
      fontFamilyTitle3: 'var(--lt-font-family-title)',
      fontWeightTitle3: 'var(--lt-font-weight-extrabold)',
      letterSpacingTitle3: '0.01em',
      fontSizeTitle4: '3rem',
      lineHeightTitle4: '3.25rem',
      fontFamilyTitle4: 'var(--lt-font-family-title)',
      fontWeightTitle4: 'var(--lt-font-weight-bold)',
      letterSpacingTitle4: '0.01em',
      fontSizeTitle5: '2.5rem',
      lineHeightTitle5: '2.75rem',
      fontFamilyTitle5: 'var(--lt-font-family-title)',
      fontWeightTitle5: 'var(--lt-font-weight-bold)',
      letterSpacingTitle5: '0.01em',
      fontSizeTitle6: '2rem',
      lineHeightTitle6: '2.25rem',
      fontFamilyTitle6: 'var(--lt-font-family-title)',
      fontWeightTitle6: 'var(--lt-font-weight-bold)',
      letterSpacingTitle6: '0.01em',
      fontSizeFeatured1: '1.5rem',
      lineHeightFeatured1: '2rem',
      fontFamilyFeatured1: 'var(--lt-font-family-body)',
      letterSpacingFeatured1: '0.01em',
      fontSizeFeatured2: '1.25rem',
      lineHeightFeatured2: '1.75rem',
      fontFamilyFeatured2: 'var(--lt-font-family-body)',
      letterSpacingFeatured2: '0.01em',
      fontSizeFeatured3: '1.125rem',
      lineHeightFeatured3: '1.5rem',
      fontFamilyFeatured3: 'var(--lt-font-family-body)',
      letterSpacingFeatured3: '0.01em',
      fontSizeBody1: '1rem',
      lineHeightBody1: '1.5rem',
      fontFamilyBody1: 'var(--lt-font-family-body)',
      letterSpacingBody1: '0.01em',
      fontSizeBody2: '0.9375rem',
      lineHeightBody2: '1.375rem',
      fontFamilyBody2: 'var(--lt-font-family-body)',
      letterSpacingBody2: '0.01em',
      fontSizeBody3: '0.875rem',
      lineHeightBody3: '1.25rem',
      fontFamilyBody3: 'var(--lt-font-family-body)',
      letterSpacingBody3: '0.01em',
      fontSizeCaption1: '0.75rem',
      lineHeightCaption1: '1rem',
      fontFamilyCaption1: 'var(--lt-font-family-body)',
      letterSpacingCaption1: '0.01em',
      fontSizeCaption2: '0.625rem',
      lineHeightCaption2: '0.75rem',
      fontFamilyCaption2: 'var(--lt-font-family-body)',
      letterSpacingCaption2: '0.01em',
    },
    shadow: {
      raised: '4px 4px 0px 0px #000, 0px 1px 5px -4px rgba(0,0,0,0.5)',
      overlay: '8px 8px 0px 0px #000, 0px 5px 10px 0px rgba(0,0,0,0.05)',
    },
    radius: {
      small: '0px',
      medium: '0px',
      large: '0px',
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
      mMin: '660',
      lMin: '900',
      xlMin: '1280',
    },
    duration: {
      rapid: '80ms',
      fast: '160ms',
      medium: '240ms',
      slow: '320ms',
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
      brand: '#2563eb', // blue-600
      white: '#f8fafc', // neutral-50
      black: '#181818',
      onBackgroundPrimary: '#181818',
      onBackgroundCritical: '#181818',
      onBackgroundWarning: '#181818',
      onBackgroundPositive: '#181818',
      onBrand: '#f8fafc',
      rgbWhite: '248, 250, 252',
      rgbBlack: '24, 24, 24',
    },
    colors: {
      backgroundPrimary: {
        light: '#2563eb', // blue-600
        dark: '#1e40af', // blue-800
      },
      backgroundPrimaryFaded: {
        light: '#dbeafe', // blue-100
        dark: '#0c1330', // custom deep blue
      },
      borderPrimary: {
        light: '#181818',
        dark: '#f8fafc',
      },
      borderPrimaryFaded: {
        light: '#60a5fa', // blue-400
        dark: '#181818',
      },
      foregroundPrimary: {
        light: '#181818',
        dark: '#f8fafc',
      },
      backgroundCritical: {
        light: '#ef4444', // red-500
        dark: '#b91c1c', // red-800
      },
      backgroundCriticalFaded: {
        light: '#fee2e2', // red-100
        dark: '#2a0909', // custom deep red
      },
      borderCritical: {
        light: '#181818',
        dark: '#f8fafc',
      },
      borderCriticalFaded: {
        light: '#fca5a5', // red-300
        dark: '#181818',
      },
      foregroundCritical: {
        light: '#181818',
        dark: '#f8fafc',
      },
      backgroundWarning: {
        light: '#facc15', // yellow-400
        dark: '#a16207', // yellow-800
      },
      backgroundWarningFaded: {
        light: '#fef9c3', // yellow-100
        dark: '#2a2309', // custom deep yellow
      },
      borderWarning: {
        light: '#181818',
        dark: '#f8fafc',
      },
      borderWarningFaded: {
        light: '#fde047', // yellow-300
        dark: '#181818',
      },
      foregroundWarning: {
        light: '#181818',
        dark: '#f8fafc',
      },
      backgroundPositive: {
        light: '#22c55e', // green-500
        dark: '#166534', // green-800
      },
      backgroundPositiveFaded: {
        light: '#dcfce7', // green-100
        dark: '#0c1f13', // custom deep green
      },
      borderPositive: {
        light: '#181818',
        dark: '#f8fafc',
      },
      borderPositiveFaded: {
        light: '#86efac', // green-300
        dark: '#181818',
      },
      foregroundPositive: {
        light: '#181818',
        dark: '#f8fafc',
      },
      backgroundNeutral: {
        light: '#f8fafc', // neutral-50
        dark: '#181818',
      },
      backgroundNeutralFaded: {
        light: '#e5e7eb', // neutral-200
        dark: '#23272e', // custom dark neutral
      },
      borderNeutral: {
        light: '#181818',
        dark: '#f8fafc',
      },
      borderNeutralFaded: {
        light: '#cbd5e1', // neutral-300
        dark: '#181818',
      },
      foregroundNeutral: {
        light: '#181818',
        dark: '#f8fafc',
      },
      foregroundNeutralFaded: {
        light: '#64748b', // neutral-500
        dark: '#cbd5e1', // neutral-300
      },
      backgroundDisabled: {
        light: '#e5e7eb', // neutral-200
        dark: '#23272e', // custom dark neutral
      },
      backgroundDisabledFaded: {
        light: '#f1f5f9', // neutral-100
        dark: '#181818',
      },
      borderDisabled: {
        light: '#cbd5e1', // neutral-300
        dark: '#64748b', // neutral-500
      },
      foregroundDisabled: {
        light: '#64748b', // neutral-500
        dark: '#cbd5e1', // neutral-300
      },
      backgroundElevationBase: {
        light: '#f8fafc',
        dark: '#181818',
      },
      backgroundElevationRaised: {
        light: '#dbeafe', // blue-100
        dark: '#23272e', // custom dark neutral
      },
      backgroundElevationOverlay: {
        light: '#2563eb', // blue-600
        dark: '#1e40af', // blue-800
      },
      backgroundPage: {
        light: '#f8fafc',
        dark: '#181818',
      },
      backgroundPageFaded: {
        light: '#dbeafe', // blue-100
        dark: '#23272e', // custom dark neutral
      },
      rgbBackgroundPrimary: {
        light: '37, 99, 235',
        dark: '30, 64, 175',
      },
      rgbBackgroundPrimaryFaded: {
        light: '219, 234, 254',
        dark: '12, 19, 48',
      },
      rgbBackgroundCritical: {
        light: '239, 68, 68',
        dark: '185, 28, 28',
      },
      rgbBackgroundCriticalFaded: {
        light: '254, 226, 226',
        dark: '42, 9, 9',
      },
      rgbBackgroundWarning: {
        light: '250, 204, 21',
        dark: '161, 98, 7',
      },
      rgbBackgroundWarningFaded: {
        light: '254, 249, 195',
        dark: '42, 35, 9',
      },
      rgbBackgroundPositive: {
        light: '34, 197, 94',
        dark: '22, 101, 52',
      },
      rgbBackgroundPositiveFaded: {
        light: '220, 252, 231',
        dark: '12, 31, 19',
      },
      onBackgroundNeutral: {
        light: '#181818',
        dark: '#f8fafc',
      },
      rgbBackgroundNeutral: {
        light: '248, 250, 252',
        dark: '24, 24, 24',
      },
      rgbBackgroundNeutralFaded: {
        light: '229, 231, 235',
        dark: '35, 39, 46',
      },
      rgbBackgroundDisabled: {
        light: '229, 231, 235',
        dark: '35, 39, 46',
      },
      rgbBackgroundDisabledFaded: {
        light: '241, 245, 249',
        dark: '24, 24, 24',
      },
      rgbBackgroundElevationBase: {
        light: '248, 250, 252',
        dark: '24, 24, 24',
      },
      rgbBackgroundElevationRaised: {
        light: '219, 234, 254',
        dark: '35, 39, 46',
      },
      rgbBackgroundElevationOverlay: {
        light: '37, 99, 235',
        dark: '30, 64, 175',
      },
      rgbBackgroundPage: {
        light: '248, 250, 252',
        dark: '24, 24, 24',
      },
      rgbBackgroundPageFaded: {
        light: '219, 234, 254',
        dark: '35, 39, 46',
      },
    },
  },
}

export default themeNeoBrutalist
