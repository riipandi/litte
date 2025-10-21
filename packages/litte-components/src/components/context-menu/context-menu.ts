import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { contextMenuStyles } from './context-menu.css'
import type { ContextMenuProps } from './context-menu.types'

@customElement('litte-context-menu')
export class LitteContextMenu extends LitteElement implements ContextMenuProps {
  static styles: CSSResult = contextMenuStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ContextMenuProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ContextMenuProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-context-menu': LitteContextMenu
  }
}
