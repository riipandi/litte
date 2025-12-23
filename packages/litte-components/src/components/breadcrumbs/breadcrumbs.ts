import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { breadcrumbsStyles } from './breadcrumbs.css'
import type { BreadcrumbsProps } from './breadcrumbs.types'

@customElement('litte-breadcrumbs')
export class LitteBreadcrumbs extends LitteElement implements BreadcrumbsProps {
  static styles: CSSResult = breadcrumbsStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: BreadcrumbsProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: BreadcrumbsProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-breadcrumbs': LitteBreadcrumbs
  }
}
