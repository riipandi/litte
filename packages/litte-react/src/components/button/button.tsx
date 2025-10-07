import { createComponent } from '@lit/react'
import { LitteButton } from '@litte/button'
import * as React from 'react'

export const Button = createComponent({
  elementClass: LitteButton,
  tagName: 'litte-button',
  react: React,
  events: {},
  displayName: 'Button',
})
