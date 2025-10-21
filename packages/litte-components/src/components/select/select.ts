import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { selectStyles } from './select.css'
import type { SelectProps } from './select.types'

@customElement('litte-select')
export class LitteSelect extends LitteElement implements SelectProps {
  static styles: CSSResult = selectStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: SelectProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: SelectProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-select': LitteSelect
  }
}
