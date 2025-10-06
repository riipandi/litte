import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { dividerStyles } from './divider.css'
import type { DividerProps } from './divider.types'

@customElement('litte-divider')
export class LitteDivider extends LitteElement implements DividerProps {
  static styles: CSSResult = dividerStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: DividerProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: DividerProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-divider': LitteDivider
  }
}
