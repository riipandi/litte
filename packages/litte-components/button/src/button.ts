import { LitteElement } from '@litte/element'
import { clsx } from 'clsx'
import { html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { buttonStyles } from './button.css'
import type { ButtonProps } from './button.types'

@customElement('litte-button')
export class LitteButton extends LitteElement implements ButtonProps {
  static styles = buttonStyles

  /** Button type attribute */
  @property({ type: String, reflect: true })
  type: ButtonProps['type']

  /** Button variant style */
  @property({ type: String, reflect: true })
  variant: ButtonProps['variant']

  /** Button size */
  @property({ type: String, reflect: true })
  size: ButtonProps['size']

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  disabled: ButtonProps['disabled']

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  loading: ButtonProps['loading']

  /** Custom text color */
  @property({ type: String, reflect: true })
  color: ButtonProps['color']

  /** Custom background color */
  @property({ type: String, reflect: true })
  backgroundColor: ButtonProps['backgroundColor']

  constructor() {
    super()
    this.type = 'button'
    this.variant = 'primary'
    this.size = 'md'
    this.disabled = false
    this.loading = false
    this.color = ''
    this.backgroundColor = ''
  }

  private _handleClick(e: Event) {
    if (this.disabled || this.loading) {
      e.preventDefault()
      e.stopPropagation()
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
      ...(this.backgroundColor ? { backgroundColor: this.backgroundColor } : {}),
      ...(this.color ? { color: this.color } : {}),
    })

    return html`
      <button
        type=${ifDefined(this.type)}
        class=${classes}
        style=${customStyles}
        ?disabled=${this.disabled || this.loading}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-busy=${this.loading ? 'true' : 'false'}
        @click=${this._handleClick}
      >
        ${
          this.loading
            ? html`<span class="litte-button__spinner" aria-hidden="true"></span>`
            : nothing
        }
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-button': LitteButton
  }
}
