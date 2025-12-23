import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { toastStyles } from './toast.css'
import type { ToastProps } from './toast.types'

@customElement('litte-toast')
export class LitteToast extends LitteElement implements ToastProps {
  static styles: CSSResult = toastStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: ToastProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: ToastProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-toast': LitteToast
  }
}
