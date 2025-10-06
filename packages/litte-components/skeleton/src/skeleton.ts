import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { skeletonStyles } from './skeleton.css'
import type { SkeletonProps } from './skeleton.types'

@customElement('litte-skeleton')
export class LitteSkeleton extends LitteElement implements SkeletonProps {
  static styles: CSSResult = skeletonStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: SkeletonProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: SkeletonProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-skeleton': LitteSkeleton
  }
}
