import { type CSSResult, html /*nothing*/ } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { calendarStyles } from './calendar.css'
import type { CalendarProps } from './calendar.types'

@customElement('litte-calendar')
export class LitteCalendar extends LitteElement implements CalendarProps {
  static styles: CSSResult = calendarStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: CalendarProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: CalendarProps['loading'] = false

  render() {
    return html`/* Add html element implementation here*/`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-calendar': LitteCalendar
  }
}
