import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { alertStyles } from './alert.css'
import type { AlertProps } from './alert.types'

@customElement('litte-alert')
export class LitteAlert extends LitteElement implements AlertProps {
  static styles: CSSResult = alertStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: AlertProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: AlertProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-alert': LitteAlert
  }
}
