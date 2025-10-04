import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { autocompleteStyles } from './autocomplete.css'

@customElement('litte-autocomplete')
export class Autocomplete extends LitteElement {
  static styles = autocompleteStyles

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
    'litte-autocomplete': Autocomplete
  }
}
