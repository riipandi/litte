import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { radioStyles } from './radio.css'

export interface RadioProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-radio')
export class Radio extends LitteElement {
  static styles = radioStyles

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
    'litte-radio': Radio
  }
}
