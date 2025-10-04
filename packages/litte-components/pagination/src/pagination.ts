import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { paginationStyles } from './pagination.css'

export interface PaginationProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-pagination')
export class Pagination extends LitteElement {
  static styles = paginationStyles

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
