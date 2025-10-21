import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { pinFieldStyles } from './pin-field.css'
import type { PinFieldProps } from './pin-field.types'

@customElement('litte-pin-field')
export class LittePinField extends LitteElement implements PinFieldProps {
  static styles: CSSResult = pinFieldStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: PinFieldProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: PinFieldProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-pin-field': LittePinField
  }
}
