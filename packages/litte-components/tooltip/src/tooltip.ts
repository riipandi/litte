import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { tooltipStyles } from './tooltip.css'

export interface TooltipProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-tooltip')
export class Tooltip extends LitteElement {
  static styles = tooltipStyles

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
    'litte-tooltip': Tooltip
  }
}
