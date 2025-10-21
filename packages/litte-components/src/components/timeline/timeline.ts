import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { timelineStyles } from './timeline.css'
import type { TimelineProps } from './timeline.types'

@customElement('litte-timeline')
export class LitteTimeline extends LitteElement implements TimelineProps {
  static styles: CSSResult = timelineStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: TimelineProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: TimelineProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-timeline': LitteTimeline
  }
}
