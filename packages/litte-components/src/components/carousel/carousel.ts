import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { carouselStyles } from './carousel.css'
import type { CarouselProps } from './carousel.types'

@customElement('litte-carousel')
export class LitteCarousel extends LitteElement implements CarouselProps {
  static styles: CSSResult = carouselStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: CarouselProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: CarouselProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-carousel': LitteCarousel
  }
}
