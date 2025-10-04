import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { dropdownMenuStyles } from './dropdown-menu.css'

export interface DropdownMenuProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-dropdown-menu')
export class DropdownMenu extends LitteElement {
  static styles = dropdownMenuStyles

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
