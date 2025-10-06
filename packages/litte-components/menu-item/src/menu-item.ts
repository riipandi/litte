import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { menuItemStyles } from './menu-item.css'

@customElement('litte-menu-item')
export class MenuItem extends LitteElement {
  static styles: CSSResult = menuItemStyles

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
