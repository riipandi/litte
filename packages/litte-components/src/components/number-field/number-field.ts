import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { numberFieldStyles } from './number-field.css'
import type { NumberFieldProps } from './number-field.types'

@customElement('litte-number-field')
export class LitteNumberField extends LitteElement implements NumberFieldProps {
  static styles: CSSResult = numberFieldStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: NumberFieldProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: NumberFieldProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-number-field': LitteNumberField
  }
}
