import { createComponent } from '@lit/react'
import { LittePopover } from '@litte/popover'
import * as React from 'react'

export const Popover = createComponent({
  elementClass: LittePopover,
  tagName: 'litte-popover',
  react: React,
  events: {},
  displayName: 'Popover',
})
