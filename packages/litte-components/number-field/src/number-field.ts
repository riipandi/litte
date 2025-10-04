import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { numberFieldStyles } from './number-field.css'

@customElement('litte-number-field')
export class NumberField extends LitteElement {
  static styles = numberFieldStyles

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
    'litte-number-field': NumberField
  }
}
