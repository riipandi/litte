import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { paginationStyles } from './pagination.css'
import type { PaginationProps } from './pagination.types'

@customElement('litte-pagination')
export class LittePagination extends LitteElement implements PaginationProps {
  static styles: CSSResult = paginationStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: PaginationProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: PaginationProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-pagination': LittePagination
  }
}
