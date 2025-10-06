import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { stepperStyles } from './stepper.css'

@customElement('litte-stepper')
export class Stepper extends LitteElement {
  static styles: CSSResult = stepperStyles

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
    'litte-stepper': Stepper
  }
}
