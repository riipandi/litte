import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { linkStyles } from './link.css'
import type { LinkProps } from './link.types'

@customElement('litte-link')
export class LitteLink extends LitteElement implements LinkProps {
  static styles: CSSResult = linkStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: LinkProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: LinkProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-link': LitteLink
  }
}
