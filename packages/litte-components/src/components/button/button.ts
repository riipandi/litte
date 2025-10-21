import { type CSSResult, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { LitteElement } from '../../base-element'
import { clsx } from '../../utils'
import { buttonStyles } from './button.css'
import type { ButtonProps } from './button.types'

@customElement('litte-button')
export class LitteButton extends LitteElement implements ButtonProps {
  static styles: CSSResult = buttonStyles

  /** Button type attribute */
  @property({ type: String, reflect: true })
  accessor type: ButtonProps['type'] = 'button'

  /** Button variant style */
  @property({ type: String, reflect: true })
  accessor variant: ButtonProps['variant'] = 'primary'

  /** Button size */
  @property({ type: String, reflect: true })
  accessor size: ButtonProps['size'] = 'md'

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ButtonProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ButtonProps['loading'] = false

  /** Custom text color */
  @property({ type: String, reflect: true })
  accessor color: ButtonProps['color'] = ''

  /** Custom background color */
  @property({ type: String, reflect: true })
  accessor backgroundColor: ButtonProps['backgroundColor'] = ''

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
        part="button"
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
            ? html`<span class="litte-button__spinner" part="spinner" aria-hidden="true"></span>`
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
