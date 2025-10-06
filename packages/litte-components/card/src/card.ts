import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
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
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-card': LitteCard
  }
}
