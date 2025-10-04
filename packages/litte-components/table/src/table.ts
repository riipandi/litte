import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { tableStyles } from './table.css'

export interface TableProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-table')
export class Table extends LitteElement {
  static styles = tableStyles

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
    'litte-table': Table
  }
}
