import { createComponent } from '@lit/react'
import { LitteScrim } from 'litte'
import * as React from 'react'

export const Scrim = createComponent({
  elementClass: LitteScrim,
  tagName: 'litte-scrim',
  react: React,
  events: {},
  displayName: 'Scrim',
})
