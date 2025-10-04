import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { tabsStyles } from './tabs.css'

export interface TabsProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-tabs')
export class Tabs extends LitteElement {
  static styles = tabsStyles

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
    'litte-tabs': Tabs
  }
}
