import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { menuItemStyles } from './menu-item.css'
import type { MenuItemProps } from './menu-item.types'

@customElement('litte-menu-item')
export class LitteMenuItem extends LitteElement implements MenuItemProps {
  static styles: CSSResult = menuItemStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: MenuItemProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: MenuItemProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-menu-item': LitteMenuItem
  }
}
