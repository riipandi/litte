import { createComponent } from '@lit/react'
import { LitteToggleButton } from 'litte'
import * as React from 'react'

export const ToggleButton = createComponent({
  elementClass: LitteToggleButton,
  tagName: 'litte-toggle-button',
  react: React,
  events: {},
  displayName: 'ToggleButton',
})
