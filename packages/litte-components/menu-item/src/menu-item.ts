import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { menuItemStyles } from './menu-item.css'

export interface MenuItemProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-menu-item')
export class MenuItem extends LitteElement {
  static styles = menuItemStyles

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
    'litte-menu-item': MenuItem
  }
}
