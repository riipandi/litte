import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { timelineStyles } from './timeline.css'

export interface TimelineProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-timeline')
export class Timeline extends LitteElement {
  static styles = timelineStyles

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
    'litte-timeline': Timeline
  }
}
