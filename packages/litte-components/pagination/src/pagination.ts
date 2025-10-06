import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { paginationStyles } from './pagination.css'

@customElement('litte-pagination')
export class Pagination extends LitteElement {
  static styles: CSSResult = paginationStyles

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
    'litte-pagination': Pagination
  }
}
