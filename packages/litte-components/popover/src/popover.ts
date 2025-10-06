import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { popoverStyles } from './popover.css'
import type { PopoverProps } from './popover.types'

@customElement('litte-popover')
export class LittePopover extends LitteElement implements PopoverProps {
  static styles: CSSResult = popoverStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: PopoverProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: PopoverProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-popover': LittePopover
  }
}
