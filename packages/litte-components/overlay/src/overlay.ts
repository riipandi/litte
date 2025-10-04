import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { overlayStyles } from './overlay.css'

export interface OverlayProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-overlay')
export class Overlay extends LitteElement {
  static styles = overlayStyles

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
    'litte-overlay': Overlay
  }
}
