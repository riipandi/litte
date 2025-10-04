import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { popoverStyles } from './popover.css'

export interface PopoverProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-popover')
export class Popover extends LitteElement {
  static styles = popoverStyles

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
    'litte-popover': Popover
  }
}
