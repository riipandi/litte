import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { loaderStyles } from './loader.css'
import type { LoaderProps } from './loader.types'

@customElement('litte-loader')
export class LitteLoader extends LitteElement implements LoaderProps {
  static styles: CSSResult = loaderStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: LoaderProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: LoaderProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-loader': LitteLoader
  }
}
