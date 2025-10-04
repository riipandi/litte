import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { progressIndicatorStyles } from './progress-indicator.css'

@customElement('litte-progress-indicator')
export class ProgressIndicator extends LitteElement {
  static styles = progressIndicatorStyles

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
    'litte-progress-indicator': ProgressIndicator
  }
}
