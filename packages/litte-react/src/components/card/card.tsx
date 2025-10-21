import { createComponent } from '@lit/react'
import { LitteCard } from 'litte'
import * as React from 'react'

export const Card = createComponent({
  elementClass: LitteCard,
  tagName: 'litte-card',
  react: React,
  events: {},
  displayName: 'Card',
})
