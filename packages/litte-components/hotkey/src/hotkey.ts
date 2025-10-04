import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hotkeyStyles } from './hotkey.css'

export interface HotkeyProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-hotkey')
export class Hotkey extends LitteElement {
  static styles = hotkeyStyles

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
    'litte-hotkey': Hotkey
  }
}
