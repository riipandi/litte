import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { loaderStyles } from './loader.css'

export interface LoaderProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-loader')
export class Loader extends LitteElement {
  static styles = loaderStyles

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
    'litte-loader': Loader
  }
}
