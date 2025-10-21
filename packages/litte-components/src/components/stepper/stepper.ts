import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { stepperStyles } from './stepper.css'
import type { StepperProps } from './stepper.types'

@customElement('litte-stepper')
export class LitteStepper extends LitteElement implements StepperProps {
  static styles: CSSResult = stepperStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: StepperProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: StepperProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-stepper': LitteStepper
  }
}
