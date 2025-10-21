import { createComponent } from '@lit/react'
import { LitteTextField } from 'litte'
import * as React from 'react'

export const TextField = createComponent({
  elementClass: LitteTextField,
  tagName: 'litte-text-field',
  react: React,
  events: {},
  displayName: 'TextField',
})
