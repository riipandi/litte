import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { actionBarStyles } from './action-bar.css'
import type { ActionBarProps } from './action-bar.types'

@customElement('litte-action-bar')
export class LitteActionBar extends LitteElement implements ActionBarProps {
  static styles: CSSResult = actionBarStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ActionBarProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ActionBarProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-action-bar': LitteActionBar
  }
}
