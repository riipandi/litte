import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { pinFieldStyles } from './pin-field.css'

@customElement('litte-pin-field')
export class PinField extends LitteElement {
  static styles: CSSResult = pinFieldStyles

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
    'litte-pin-field': PinField
  }
}
