import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { linkStyles } from './link.css'

export interface LinkProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-link')
export class Link extends LitteElement {
  static styles = linkStyles

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
    'litte-link': Link
  }
}
