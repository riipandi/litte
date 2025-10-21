import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { badgeStyles } from './badge.css'
import type { BadgeProps } from './badge.types'

@customElement('litte-badge')
export class LitteBadge extends LitteElement implements BadgeProps {
  static styles: CSSResult = badgeStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: BadgeProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: BadgeProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-badge': LitteBadge
  }
}
