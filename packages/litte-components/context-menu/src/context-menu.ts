import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { contextMenuStyles } from './context-menu.css'

@customElement('litte-context-menu')
export class ContextMenu extends LitteElement {
  static styles: CSSResult = contextMenuStyles

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
    'litte-context-menu': ContextMenu
  }
}
