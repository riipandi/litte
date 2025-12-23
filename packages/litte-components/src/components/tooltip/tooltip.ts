import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { tooltipStyles } from './tooltip.css'
import type { TooltipProps } from './tooltip.types'

@customElement('litte-tooltip')
export class LitteTooltip extends LitteElement implements TooltipProps {
  static styles: CSSResult = tooltipStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: TooltipProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: TooltipProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-tooltip': LitteTooltip
  }
}
