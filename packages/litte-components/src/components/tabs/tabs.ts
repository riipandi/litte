import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { tabsStyles } from './tabs.css'
import type { TabsProps } from './tabs.types'

@customElement('litte-tabs')
export class LitteTabs extends LitteElement implements TabsProps {
  static styles: CSSResult = tabsStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: TabsProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: TabsProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-tabs': LitteTabs
  }
}
