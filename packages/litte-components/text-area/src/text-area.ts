import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { textAreaStyles } from './text-area.css'

@customElement('litte-text-area')
export class TextArea extends LitteElement {
  static styles = textAreaStyles

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
    'litte-text-area': TextArea
  }
}
