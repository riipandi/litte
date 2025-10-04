export interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  icon?: string // SVG string or icon name
  squared?: boolean
  variant?: 'solid' | 'faded'
  color?: 'neutral' | 'critical' | 'warning' | 'positive' | 'primary'
  size?: number
  class?: string
}
