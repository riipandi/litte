import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { tableStyles } from './table.css'
import type { TableProps } from './table.types'

@customElement('litte-table')
export class LitteTable extends LitteElement implements TableProps {
  static styles: CSSResult = tableStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: TableProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: TableProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-table': LitteTable
  }
}
