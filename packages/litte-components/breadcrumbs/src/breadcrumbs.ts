import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { breadcrumbsStyles } from './breadcrumbs.css'

@customElement('litte-breadcrumbs')
export class Breadcrumbs extends LitteElement {
  static styles = breadcrumbsStyles

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
    'litte-breadcrumbs': Breadcrumbs
  }
}
