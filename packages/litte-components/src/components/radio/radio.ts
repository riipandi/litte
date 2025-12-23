import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { radioStyles } from './radio.css'
import type { RadioProps } from './radio.types'

@customElement('litte-radio')
export class LitteRadio extends LitteElement implements RadioProps {
  static styles: CSSResult = radioStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: RadioProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: RadioProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-radio': LitteRadio
  }
}
