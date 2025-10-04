import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { dividerStyles } from './divider.css'

export interface DividerProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-divider')
export class Divider extends LitteElement {
  static styles = dividerStyles

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
    'litte-divider': Divider
  }
}
