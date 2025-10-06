import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CHANGEME_COMPONENT_STYLES } from './CHANGEME_COMPONENT_ID.css'
import { CHANGEME_COMPONENT_NAMEProps } from './CHANGEME_COMPONENT_ID.types'

@customElement('litte-CHANGEME_COMPONENT_ID')
export class LitteCHANGEME_COMPONENT_NAME
  extends LitteElement
  implements CHANGEME_COMPONENT_NAMEProps
{
  static styles: CSSResult = CHANGEME_COMPONENT_STYLES

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: CHANGEME_COMPONENT_NAMEProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: CHANGEME_COMPONENT_NAMEProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-CHANGEME_COMPONENT_ID': LitteCHANGEME_COMPONENT_NAME
  }
}
