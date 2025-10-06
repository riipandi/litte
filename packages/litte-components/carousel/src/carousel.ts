import { LitteElement } from '@litte/element'
import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { carouselStyles } from './carousel.css'

@customElement('litte-carousel')
export class Carousel extends LitteElement {
  static styles: CSSResult = carouselStyles

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
    'litte-carousel': Carousel
  }
}
