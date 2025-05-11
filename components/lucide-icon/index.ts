import type { LucideIcon } from './icon.element'

declare global {
  interface HTMLElementTagNameMap {
    'lucide-icon': LucideIcon
  }
}

export * from './icon.element'
export * from './icon.types'
