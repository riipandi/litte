import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { dropdownMenuStyles } from './dropdown-menu.css'
import type { DropdownMenuProps } from './dropdown-menu.types'

@customElement('litte-dropdown-menu')
export class LitteDropdownMenu extends LitteElement implements DropdownMenuProps {
  static styles: CSSResult = dropdownMenuStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: DropdownMenuProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: DropdownMenuProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-dropdown-menu': LitteDropdownMenu
  }
}
