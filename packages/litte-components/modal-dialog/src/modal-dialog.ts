import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { modalDialogStyles } from './modal-dialog.css'

export interface ModalDialogProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-modal-dialog')
export class ModalDialog extends LitteElement {
  static styles = modalDialogStyles

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
