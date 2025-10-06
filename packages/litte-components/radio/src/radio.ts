import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
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
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-radio': LitteRadio
  }
}
