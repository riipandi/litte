import themeDefault from './themes/default'
import themeFresh from './themes/fresh'
import themeIndigo from './themes/indigo'

export const LitteThemes = [themeDefault, themeFresh, themeIndigo]

export type LitteTheme = (typeof LitteThemes)[number]['id']
export type { ThemeColorConfig, ThemeConfig } from './types'
