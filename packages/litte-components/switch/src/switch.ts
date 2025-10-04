import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { switchStyles } from './switch.css'

export interface SwitchProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-switch')
export class Switch extends LitteElement {
  static styles = switchStyles

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
    'litte-switch': Switch
  }
}
