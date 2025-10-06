import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { modalDialogStyles } from './modal-dialog.css'
import type { ModalDialogProps } from './modal-dialog.types'

@customElement('litte-modal-dialog')
export class LitteModalDialog extends LitteElement implements ModalDialogProps {
  static styles: CSSResult = modalDialogStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ModalDialogProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ModalDialogProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-modal-dialog': LitteModalDialog
  }
}
