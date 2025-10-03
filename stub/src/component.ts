import { LitteElement } from '@litte/element'
import { html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CHANGEME_COMPONENT_STYLES } from './CHANGEME_COMPONENT_ID.css'

export interface CHANGEME_COMPONENT_NAMEProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-CHANGEME_COMPONENT_ID')
export class CHANGEME_COMPONENT_NAME extends LitteElement {
  static styles = CHANGEME_COMPONENT_STYLES

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
    'litte-CHANGEME_COMPONENT_ID': CHANGEME_COMPONENT_NAME
  }
}
