import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { textAreaStyles } from './text-area.css'
import type { TextAreaProps } from './text-area.types'

@customElement('litte-text-area')
export class LitteTextArea extends LitteElement implements TextAreaProps {
  static styles: CSSResult = textAreaStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: TextAreaProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: TextAreaProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-text-area': LitteTextArea
  }
}
