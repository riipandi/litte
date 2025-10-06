import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { actionBarStyles } from './action-bar.css'

@customElement('litte-action-bar')
export class ActionBar extends LitteElement {
  static styles: CSSResult = actionBarStyles

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
    'litte-action-bar': ActionBar
  }
}
