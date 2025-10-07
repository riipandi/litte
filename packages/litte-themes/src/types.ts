export type ThemeColorConfig = {
  backgroundPrimary: { light: string; dark: string }
  backgroundPrimaryFaded: { light: string; dark: string }
  borderPrimary: { light: string; dark: string }
  borderPrimaryFaded: { light: string; dark: string }
  foregroundPrimary: { light: string; dark: string }
  backgroundCritical: { light: string; dark: string }
  backgroundCriticalFaded: { light: string; dark: string }
  borderCritical: { light: string; dark: string }
  borderCriticalFaded: { light: string; dark: string }
  foregroundCritical: { light: string; dark: string }
  backgroundWarning: { light: string; dark: string }
  backgroundWarningFaded: { light: string; dark: string }
  borderWarning: { light: string; dark: string }
  borderWarningFaded: { light: string; dark: string }
  foregroundWarning: { light: string; dark: string }
  backgroundPositive: { light: string; dark: string }
  backgroundPositiveFaded: { light: string; dark: string }
  borderPositive: { light: string; dark: string }
  borderPositiveFaded: { light: string; dark: string }
  foregroundPositive: { light: string; dark: string }
  backgroundNeutral: { light: string; dark: string }
  backgroundNeutralFaded: { light: string; dark: string }
  borderNeutral: { light: string; dark: string }
  borderNeutralFaded: { light: string; dark: string }
  foregroundNeutral: { light: string; dark: string }
  foregroundNeutralFaded: { light: string; dark: string }
  backgroundDisabled: { light: string; dark: string }
  backgroundDisabledFaded: { light: string; dark: string }
  borderDisabled: { light: string; dark: string }
  foregroundDisabled: { light: string; dark: string }
  backgroundElevationBase: { light: string; dark: string }
  backgroundElevationRaised: { light: string; dark: string }
  backgroundElevationOverlay: { light: string; dark: string }
  backgroundPage: { light: string; dark: string }
  backgroundPageFaded: { light: string; dark: string }
  rgbBackgroundPrimary: { light: string; dark: string }
  rgbBackgroundPrimaryFaded: { light: string; dark: string }
  rgbBackgroundCritical: { light: string; dark: string }
  rgbBackgroundCriticalFaded: { light: string; dark: string }
  rgbBackgroundWarning: { light: string; dark: string }
  rgbBackgroundWarningFaded: { light: string; dark: string }
  rgbBackgroundPositive: { light: string; dark: string }
  rgbBackgroundPositiveFaded: { light: string; dark: string }
  onBackgroundNeutral: { light: string; dark: string }
  rgbBackgroundNeutral: { light: string; dark: string }
  rgbBackgroundNeutralFaded: { light: string; dark: string }
  rgbBackgroundDisabled: { light: string; dark: string }
  rgbBackgroundDisabledFaded: { light: string; dark: string }
  rgbBackgroundElevationBase: { light: string; dark: string }
  rgbBackgroundElevationRaised: { light: string; dark: string }
  rgbBackgroundElevationOverlay: { light: string; dark: string }
  rgbBackgroundPage: { light: string; dark: string }
  rgbBackgroundPageFaded: { light: string; dark: string }
}

export type ThemeConfig = {
  id: string
  name: string
  theme: {
    typography: {
      fontFamilyTitle: string
      fontFamilyBody: string
      fontFamilyMonospace: string
      fontWeightRegular: string
      fontWeightMedium: string
      fontWeightSemibold: string
      fontWeightBold: string
      fontWeightExtrabold: string
      fontWeightBlack: string
      fontSizeTitle1: string
      lineHeightTitle1: string
      fontFamilyTitle1: string
      fontWeightTitle1: string
      letterSpacingTitle1: string
      fontSizeTitle2: string
      lineHeightTitle2: string
      fontFamilyTitle2: string
      fontWeightTitle2: string
      letterSpacingTitle2: string
      fontSizeTitle3: string
      lineHeightTitle3: string
      fontFamilyTitle3: string
      fontWeightTitle3: string
      letterSpacingTitle3: string
      fontSizeTitle4: string
      lineHeightTitle4: string
      fontFamilyTitle4: string
      fontWeightTitle4: string
      letterSpacingTitle4: string
      fontSizeTitle5: string
      lineHeightTitle5: string
      fontFamilyTitle5: string
      fontWeightTitle5: string
      letterSpacingTitle5: string
      fontSizeTitle6: string
      lineHeightTitle6: string
      fontFamilyTitle6: string
      fontWeightTitle6: string
      letterSpacingTitle6: string
      fontSizeFeatured1: string
      lineHeightFeatured1: string
      fontFamilyFeatured1: string
      letterSpacingFeatured1: string
      fontSizeFeatured2: string
      lineHeightFeatured2: string
      fontFamilyFeatured2: string
      letterSpacingFeatured2: string
      fontSizeFeatured3: string
      lineHeightFeatured3: string
      fontFamilyFeatured3: string
      letterSpacingFeatured3: string
      fontSizeBody1: string
      lineHeightBody1: string
      fontFamilyBody1: string
      letterSpacingBody1: string
      fontSizeBody2: string
      lineHeightBody2: string
      fontFamilyBody2: string
      letterSpacingBody2: string
      fontSizeBody3: string
      lineHeightBody3: string
      fontFamilyBody3: string
      letterSpacingBody3: string
      fontSizeCaption1: string
      lineHeightCaption1: string
      fontFamilyCaption1: string
      letterSpacingCaption1: string
      fontSizeCaption2: string
      lineHeightCaption2: string
      fontFamilyCaption2: string
      letterSpacingCaption2: string
    }
    shadow: {
      raised: string
      overlay: string
    }
    radius: {
      small: string
      medium: string
      large: string
    }
    unit: {
      base: string
      x1: string
      x2: string
      x3: string
      x4: string
      x5: string
      x6: string
      x7: string
      x8: string
      x9: string
      x10: string
    }
    viewport: {
      mMin: string
      lMin: string
      xlMin: string
    }
    duration: {
      rapid: string
      fast: string
      medium: string
      slow: string
    }
    easing: {
      standard: string
      accelerate: string
      decelerate: string
    }
    zIndex: {
      relative: string
      absolute: string
      fixed: string
    }
    color: {
      brand: string
      white: string
      black: string
      onBackgroundPrimary: string
      onBackgroundCritical: string
      onBackgroundWarning: string
      onBackgroundPositive: string
      onBrand: string
      rgbWhite: string
      rgbBlack: string
    }
    colors: ThemeColorConfig
  }
}
