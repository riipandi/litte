import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { modalDialogStyles } from './modal-dialog.css'

@customElement('litte-modal-dialog')
export class ModalDialog extends LitteElement {
  static styles: CSSResult = modalDialogStyles

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
    'litte-modal-dialog': ModalDialog
  }
}
