import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { skeletonStyles } from './skeleton.css'

export interface SkeletonProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-skeleton')
export class Skeleton extends LitteElement {
  static styles = skeletonStyles

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
