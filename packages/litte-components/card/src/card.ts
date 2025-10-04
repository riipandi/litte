import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cardStyles } from './card.css'

export interface CardProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-card')
export class Card extends LitteElement {
  static styles = cardStyles

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
    'litte-card': Card
  }
}
