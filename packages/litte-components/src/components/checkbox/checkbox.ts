import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { checkboxStyles } from './checkbox.css'
import type { CheckboxProps } from './checkbox.types'

@customElement('litte-checkbox')
export class LitteCheckbox extends LitteElement implements CheckboxProps {
  static styles: CSSResult = checkboxStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: CheckboxProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: CheckboxProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-checkbox': LitteCheckbox
  }
}
