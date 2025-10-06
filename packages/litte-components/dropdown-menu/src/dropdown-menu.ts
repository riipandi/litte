import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { dropdownMenuStyles } from './dropdown-menu.css'

@customElement('litte-dropdown-menu')
export class DropdownMenu extends LitteElement {
  static styles: CSSResult = dropdownMenuStyles

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
    'litte-dropdown-menu': DropdownMenu
  }
}
