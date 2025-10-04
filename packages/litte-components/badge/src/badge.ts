import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { badgeStyles } from './badge.css'

export interface BadgeProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-badge')
export class Badge extends LitteElement {
  static styles = badgeStyles

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
    'litte-badge': Badge
  }
}
