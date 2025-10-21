import { createComponent } from '@lit/react'
import { LitteNumberField } from 'litte'
import * as React from 'react'

export const NumberField = createComponent({
  elementClass: LitteNumberField,
  tagName: 'litte-number-field',
  react: React,
  events: {},
  displayName: 'NumberField',
})
