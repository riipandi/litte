import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { fileUploadStyles } from './file-upload.css'
import type { FileUploadProps } from './file-upload.types'

@customElement('litte-file-upload')
export class LitteFileUpload extends LitteElement implements FileUploadProps {
  static styles: CSSResult = fileUploadStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: FileUploadProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: FileUploadProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-file-upload': LitteFileUpload
  }
}
