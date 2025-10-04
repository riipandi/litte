import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { toggleButtonStyles } from './toggle-button.css'

export interface ToggleButtonProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-toggle-button')
export class ToggleButton extends LitteElement {
  static styles = toggleButtonStyles

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
    'litte-toggle-button': ToggleButton
  }
}
