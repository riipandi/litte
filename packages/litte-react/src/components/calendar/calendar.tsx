import { createComponent } from '@lit/react'
import { LitteCalendar } from '@litte/calendar'
import * as React from 'react'

export const Calendar = createComponent({
  elementClass: LitteCalendar,
  tagName: 'litte-calendar',
  react: React,
  events: {},
  displayName: 'Calendar',
})
