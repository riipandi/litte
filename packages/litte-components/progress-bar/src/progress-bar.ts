import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { progressBarStyles } from './progress-bar.css'

export interface ProgressBarProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-progress-bar')
export class ProgressBar extends LitteElement {
  static styles = progressBarStyles

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
