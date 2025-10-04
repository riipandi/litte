import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sliderStyles } from './slider.css'

export interface SliderProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-slider')
export class Slider extends LitteElement {
  static styles = sliderStyles

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
    'litte-slider': Slider
  }
}
