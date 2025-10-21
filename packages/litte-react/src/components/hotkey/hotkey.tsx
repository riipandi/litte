import { createComponent } from '@lit/react'
import { LitteHotkey } from 'litte'
import * as React from 'react'

export const Hotkey = createComponent({
  elementClass: LitteHotkey,
  tagName: 'litte-hotkey',
  react: React,
  events: {},
  displayName: 'Hotkey',
})
