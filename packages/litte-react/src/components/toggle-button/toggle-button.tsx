'use client'

import { createComponent } from '@lit/react'
import { LitteToggleButton } from '@litte/toggle-button'
import * as React from 'react'

export const ToggleButton = createComponent({
  elementClass: LitteToggleButton,
  tagName: 'litte-toggle-button',
  react: React,
  events: {},
  displayName: 'ToggleButton',
})
