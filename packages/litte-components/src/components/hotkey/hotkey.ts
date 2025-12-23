import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { hotkeyStyles } from './hotkey.css'
import type { HotkeyProps } from './hotkey.types'

@customElement('litte-hotkey')
export class LitteHotkey extends LitteElement implements HotkeyProps {
  static styles: CSSResult = hotkeyStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: HotkeyProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: HotkeyProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-hotkey': LitteHotkey
  }
}
