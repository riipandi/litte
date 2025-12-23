import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { cardStyles } from './card.css'
import type { CardProps } from './card.types'

@customElement('litte-card')
export class LitteCard extends LitteElement implements CardProps {
  static styles: CSSResult = cardStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: CardProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: CardProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-card': LitteCard
  }
}
