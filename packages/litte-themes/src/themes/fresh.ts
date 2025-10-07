import { ThemeConfig } from '../types'

const themeFresh: ThemeConfig = {
  id: 'fresh',
  name: 'Fresh',
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
      brand: 'oklch(0.75 0.22 142.5)',
      white: 'oklch(1 0 0)',
      black: 'oklch(0 0 0)',
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
        light: 'oklch(0.75 0.22 142.5)',
        dark: 'oklch(0.68 0.18 142.5)',
      },
      backgroundPrimaryFaded: {
        light: 'oklch(0.97 0.03 142.5)',
        dark: 'oklch(0.25 0.04 142.5)',
      },
      borderPrimary: {
        light: 'oklch(0.68 0.22 142.5)',
        dark: 'oklch(0.75 0.18 142.5)',
      },
      borderPrimaryFaded: {
        light: 'oklch(0.92 0.04 142.5)',
        dark: 'oklch(0.35 0.04 142.5)',
      },
      foregroundPrimary: {
        light: 'oklch(0.6 0.22 142.5)',
        dark: 'oklch(0.85 0.19 142.5)',
      },
      backgroundCritical: {
        light: 'oklch(0.59 0.22 26.97)',
        dark: 'oklch(0.5874 0.176 26.97)',
      },
      backgroundCriticalFaded: {
        light: 'oklch(0.97 0.02 26.97)',
        dark: 'oklch(0.25 0.0352 26.97)',
      },
      borderCritical: {
        light: 'oklch(0.51 0.22 26.97)',
        dark: 'oklch(0.6874 0.176 26.97)',
      },
      borderCriticalFaded: {
        light: 'oklch(0.92 0.03 26.97)',
        dark: 'oklch(0.35 0.0352 26.97)',
      },
      foregroundCritical: {
        light: 'oklch(0.5 0.22 26.97)',
        dark: 'oklch(0.75 0.187 26.97)',
      },
      backgroundWarning: {
        light: 'oklch(0.83 0.2 80)',
        dark: 'oklch(0.8036 0.16 80)',
      },
      backgroundWarningFaded: {
        light: 'oklch(0.97 0.04 80)',
        dark: 'oklch(0.25 0.032 80)',
      },
      borderWarning: {
        light: 'oklch(0.75 0.2 80)',
        dark: 'oklch(0.9036 0.16 80)',
      },
      borderWarningFaded: {
        light: 'oklch(0.92 0.05 80)',
        dark: 'oklch(0.35 0.032 80)',
      },
      foregroundWarning: {
        light: 'oklch(0.5 0.2 80)',
        dark: 'oklch(0.75 0.17 80)',
      },
      backgroundPositive: {
        light: 'oklch(0.68 0.18 142.5)',
        dark: 'oklch(0.68 0.18 142.5)',
      },
      backgroundPositiveFaded: {
        light: 'oklch(0.97 0.02 142.5)',
        dark: 'oklch(0.25 0.036 142.5)',
      },
      borderPositive: {
        light: 'oklch(0.58 0.18 142.5)',
        dark: 'oklch(0.75 0.18 142.5)',
      },
      borderPositiveFaded: {
        light: 'oklch(0.92 0.03 142.5)',
        dark: 'oklch(0.35 0.036 142.5)',
      },
      foregroundPositive: {
        light: 'oklch(0.55 0.18 142.5)',
        dark: 'oklch(0.85 0.19 142.5)',
      },
      backgroundNeutral: {
        light: 'oklch(0.92 0.01 142.5)',
        dark: 'oklch(0.36 0.008 142.5)',
      },
      backgroundNeutralFaded: {
        light: 'oklch(0.97 0.005 142.5)',
        dark: 'oklch(0.25 0.01 142.5)',
      },
      borderNeutral: {
        light: 'oklch(0 0.01 142.5 / 0.12)',
        dark: 'oklch(1 0.008 142.5 / 0.16)',
      },
      borderNeutralFaded: {
        light: 'oklch(0 0.005 142.5 / 0.08)',
        dark: 'oklch(1 0.01 142.5 / 0.08)',
      },
      foregroundNeutral: {
        light: 'oklch(0.2 0.01 142.5)',
        dark: 'oklch(0.96 0.008 142.5)',
      },
      foregroundNeutralFaded: {
        light: 'oklch(0.45 0.01 142.5)',
        dark: 'oklch(0.81 0.008 142.5)',
      },
      backgroundDisabled: {
        light: 'oklch(0.95 0 142.5)',
        dark: 'oklch(0.28 0 142.5)',
      },
      backgroundDisabledFaded: {
        light: 'oklch(0.98 0 142.5)',
        dark: 'oklch(0.23 0 142.5)',
      },
      borderDisabled: {
        light: 'oklch(0 0.01 142.5 / 0.06)',
        dark: 'oklch(0.28 0 142.5)',
      },
      foregroundDisabled: {
        light: 'oklch(0.84 0 142.5)',
        dark: 'oklch(0.4 0 142.5)',
      },
      backgroundElevationBase: {
        light: 'oklch(1 0 142.5)',
        dark: 'oklch(0.2 0 142.5)',
      },
      backgroundElevationRaised: {
        light: 'oklch(1 0 142.5)',
        dark: 'oklch(0.21 0 142.5)',
      },
      backgroundElevationOverlay: {
        light: 'oklch(1 0 142.5)',
        dark: 'oklch(0.22 0 142.5)',
      },
      backgroundPage: {
        light: 'oklch(1 0 142.5)',
        dark: 'oklch(0.16 0 142.5)',
      },
      backgroundPageFaded: {
        light: 'oklch(0.97 0 142.5)',
        dark: 'oklch(0.18 0 142.5)',
      },
      rgbBackgroundPrimary: {
        light: '57, 181, 74',
        dark: '57, 181, 74',
      },
      rgbBackgroundPrimaryFaded: {
        light: '238.5, 247, 240',
        dark: '25.533, 52.149, 32.4795',
      },
      rgbBackgroundCritical: {
        light: '226.593, 39.168, 41.0295',
        dark: '208.437, 69.87, 62.526',
      },
      rgbBackgroundCriticalFaded: {
        light: '258.5445, 240.3885, 237.8895',
        dark: '48.6285, 26.877, 24.378',
      },
      rgbBackgroundWarning: {
        light: '265.7865, 180.5145, -70.15050000000001',
        dark: '244.1625, 177.3525, 31.7985',
      },
      rgbBackgroundWarningFaded: {
        light: '259.6665, 242.862, 215.577',
        dark: '41.6925, 31.900499999999997, 15.1215',
      },
      rgbBackgroundPositive: {
        light: '57, 181, 74',
        dark: '57, 181, 74',
      },
      rgbBackgroundPositiveFaded: {
        light: '235.4415, 249.3645, 239.0115',
        dark: '25.9335, 36.643499999999996, 29.0445',
      },
      onBackgroundNeutral: {
        light: 'oklch(0 0 0)',
        dark: 'oklch(1 0 0)',
      },
      rgbBackgroundNeutral: {
        light: '224.96099999999998, 228.6585, 235.416',
        dark: '58.8285, 61.149, 65.43299999999999',
      },
      rgbBackgroundNeutralFaded: {
        light: '243.219, 245.10600000000002, 248.523',
        dark: '31.0335, 33.6855, 38.556',
      },
      rgbBackgroundDisabled: {
        light: '238.29749999999999, 238.29749999999999, 238.29749999999999',
        dark: '40.774499999999996, 40.774499999999996, 40.774499999999996',
      },
      rgbBackgroundDisabledFaded: {
        light: '248.2935, 248.2935, 248.2935',
        dark: '28.815, 28.815, 28.815',
      },
      rgbBackgroundElevationBase: {
        light: '255, 255, 255',
        dark: '21.9555, 21.9555, 21.9555',
      },
      rgbBackgroundElevationRaised: {
        light: '255, 255, 255',
        dark: '24.225, 24.225, 24.225',
      },
      rgbBackgroundElevationOverlay: {
        light: '255, 255, 255',
        dark: '26.52, 26.52, 26.52',
      },
      rgbBackgroundPage: {
        light: '255, 255, 255',
        dark: '13.209, 13.209, 13.209',
      },
      rgbBackgroundPageFaded: {
        light: '244.953, 244.953, 244.953',
        dark: '17.5185, 17.5185, 17.5185',
      },
    },
  },
}

export default themeFresh
