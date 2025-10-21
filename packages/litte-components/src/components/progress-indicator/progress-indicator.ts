import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { progressIndicatorStyles } from './progress-indicator.css'
import type { ProgressIndicatorProps } from './progress-indicator.types'

@customElement('litte-progress-indicator')
export class LitteProgressIndicator extends LitteElement implements ProgressIndicatorProps {
  static styles: CSSResult = progressIndicatorStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ProgressIndicatorProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ProgressIndicatorProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-progress-indicator': LitteProgressIndicator
  }
}
