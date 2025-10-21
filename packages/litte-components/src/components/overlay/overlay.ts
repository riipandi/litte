import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { overlayStyles } from './overlay.css'
import type { OverlayProps } from './overlay.types'

@customElement('litte-overlay')
export class LitteOverlay extends LitteElement implements OverlayProps {
  static styles: CSSResult = overlayStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: OverlayProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: OverlayProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-overlay': LitteOverlay
  }
}
