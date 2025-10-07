export const AvailableThemes = ['default', 'fresh', 'indigo'] as const

export type Theme = (typeof AvailableThemes)[number]
