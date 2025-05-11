import type { MyButton } from './button.element'

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}

export * from './button.element'
