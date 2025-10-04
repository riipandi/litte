import { LitteElement } from '@litte/element'
import { html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { calendarStyles } from './calendar.css'

export interface CalendarProps {
  disabled?: boolean
  loading?: boolean
}

@customElement('litte-calendar')
export class Calendar extends LitteElement {
  static styles = calendarStyles

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
    'litte-calendar': Calendar
  }
}
