import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { sliderStyles } from './slider.css'
import type { SliderProps } from './slider.types'

@customElement('litte-slider')
export class LitteSlider extends LitteElement implements SliderProps {
  static styles: CSSResult = sliderStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: SliderProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: SliderProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-slider': LitteSlider
  }
}
