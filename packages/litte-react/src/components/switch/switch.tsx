import { createComponent } from '@lit/react'
import { LitteSwitch } from 'litte'
import * as React from 'react'

export const Switch = createComponent({
  elementClass: LitteSwitch,
  tagName: 'litte-switch',
  react: React,
  events: {},
  displayName: 'Switch',
})
