import themeDefault from './themes/default'
import themeFresh from './themes/fresh'
import themeIndigo from './themes/indigo'
import themeMacOS from './themes/macos'
import themeNeoBrutalist from './themes/neobrutalist'

export const LitteThemes = [themeDefault, themeFresh, themeIndigo, themeNeoBrutalist, themeMacOS]

export type LitteTheme = (typeof LitteThemes)[number]['id']
export type { ThemeColorConfig, ThemeConfig } from './types'
