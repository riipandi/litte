import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { textFieldStyles } from './text-field.css'
import type { TextFieldProps } from './text-field.types'

@customElement('litte-text-field')
export class LitteTextField extends LitteElement implements TextFieldProps {
  static styles: CSSResult = textFieldStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: TextFieldProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: TextFieldProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-text-field': LitteTextField
  }
}
