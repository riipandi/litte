import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { fileUploadStyles } from './file-upload.css'

@customElement('litte-file-upload')
export class FileUpload extends LitteElement {
  static styles: CSSResult = fileUploadStyles

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
    'litte-file-upload': FileUpload
  }
}
