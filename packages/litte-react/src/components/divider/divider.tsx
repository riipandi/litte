import { createComponent } from '@lit/react'
import { LitteDivider } from '@litte/divider'
import * as React from 'react'

export const Divider = createComponent({
  elementClass: LitteDivider,
  tagName: 'litte-divider',
  react: React,
  events: {},
  displayName: 'Divider',
})
