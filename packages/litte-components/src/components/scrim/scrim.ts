import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { scrimStyles } from './scrim.css'
import type { ScrimProps } from './scrim.types'

@customElement('litte-scrim')
export class LitteScrim extends LitteElement implements ScrimProps {
  static styles: CSSResult = scrimStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ScrimProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ScrimProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-scrim': LitteScrim
  }
}
