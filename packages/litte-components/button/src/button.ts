import { clsx } from 'clsx'
import { html, LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { buttonStyles } from './button.css.js'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps {
  type?: HTMLButtonElement['type']
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  color?: string
  backgroundColor?: string
}

@customElement('litte-button')
export class LitteButton extends LitElement {
  static styles = buttonStyles

  @property({ type: String })
  type: HTMLButtonElement['type'] = 'button'

  @property({ type: String })
  variant: ButtonVariant = 'primary'

  @property({ type: String })
  size: ButtonSize = 'md'

  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean })
  loading = false

  @property({ type: String })
  color?: string

  @property({ type: String })
  backgroundColor?: string

  private _handleClick(e: Event) {
    // Let the native click event bubble up naturally
    // No need to dispatch custom event, just let it pass through
    if (this.disabled || this.loading) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
  }

  render() {
    const classes = clsx(
      'litte-button',
      `litte-button--${this.variant}`,
      `litte-button--${this.size}`,
      {
        'litte-button--disabled': this.disabled,
        'litte-button--loading': this.loading,
      }
    )

    const customStyles = styleMap({
      ...(this.backgroundColor && { backgroundColor: this.backgroundColor }),
      ...(this.color && { color: this.color }),
    })

    const loadingSpinner = this.loading
      ? html`<span class="litte-button__spinner"></span>`
      : nothing

    return html`
      <button
        type=${this.type}
        class=${classes}
        style=${customStyles}
        ?disabled=${this.disabled || this.loading}
        @click=${this._handleClick}
      >
        ${loadingSpinner}
        <slot></slot>
      </button>
    `
  }
}

// Example usage:
// <litte-button @click=${() => console.log('clicked')}>Default Button</litte-button>
// <litte-button variant="secondary" size="lg" @click=${handleClick}>Large Secondary</litte-button>
// <litte-button variant="outline" disabled>Disabled Button</litte-button>
// <litte-button variant="ghost" loading>Loading...</litte-button>
// <litte-button backgroundColor="#ff4444" color="white" @click=${handleClick}>Custom Colors</litte-button>

declare global {
  interface HTMLElementTagNameMap {
    'litte-button': LitteButton
  }
}
