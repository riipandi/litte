import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
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
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-file-upload': LitteFileUpload
  }
}
