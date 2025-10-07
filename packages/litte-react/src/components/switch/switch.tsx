import { createComponent } from '@lit/react'
import { LitteSwitch } from '@litte/switch'
import * as React from 'react'

export const Switch = createComponent({
  elementClass: LitteSwitch,
  tagName: 'litte-switch',
  react: React,
  events: {},
  displayName: 'Switch',
})
