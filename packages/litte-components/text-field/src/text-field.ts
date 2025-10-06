import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { textFieldStyles } from './text-field.css'

@customElement('litte-text-field')
export class TextField extends LitteElement {
  static styles: CSSResult = textFieldStyles

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
    'litte-text-field': TextField
  }
}
