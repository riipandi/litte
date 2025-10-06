import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { skeletonStyles } from './skeleton.css'

@customElement('litte-skeleton')
export class Skeleton extends LitteElement {
  static styles: CSSResult = skeletonStyles

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
    'litte-skeleton': Skeleton
  }
}
