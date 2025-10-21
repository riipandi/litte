import { createComponent } from '@lit/react'
import { LitteBadge } from 'litte'
import * as React from 'react'

export const Badge = createComponent({
  elementClass: LitteBadge,
  tagName: 'litte-badge',
  react: React,
  events: {},
  displayName: 'Badge',
})
