import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { switchStyles } from './switch.css'
import type { SwitchProps } from './switch.types'

@customElement('litte-switch')
export class LitteSwitch extends LitteElement implements SwitchProps {
  static styles: CSSResult = switchStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: SwitchProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: SwitchProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-switch': LitteSwitch
  }
}
