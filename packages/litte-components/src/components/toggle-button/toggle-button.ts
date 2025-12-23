import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { toggleButtonStyles } from './toggle-button.css'
import type { ToggleButtonProps } from './toggle-button.types'

@customElement('litte-toggle-button')
export class LitteToggleButton extends LitteElement implements ToggleButtonProps {
  static styles: CSSResult = toggleButtonStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ToggleButtonProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ToggleButtonProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-toggle-button': LitteToggleButton
  }
}
