import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { progressBarStyles } from './progress-bar.css'
import type { ProgressBarProps } from './progress-bar.types'

@customElement('litte-progress-bar')
export class LitteProgressBar extends LitteElement implements ProgressBarProps {
  static styles: CSSResult = progressBarStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ProgressBarProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ProgressBarProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-progress-bar': LitteProgressBar
  }
}
