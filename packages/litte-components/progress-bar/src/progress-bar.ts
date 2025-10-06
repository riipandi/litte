import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { progressBarStyles } from './progress-bar.css'

@customElement('litte-progress-bar')
export class ProgressBar extends LitteElement {
  static styles: CSSResult = progressBarStyles

  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean })
  loading = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-progress-bar': ProgressBar
  }
}
