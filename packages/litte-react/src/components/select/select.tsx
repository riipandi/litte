import { createComponent } from '@lit/react'
import { LitteSelect } from '@litte/select'
import * as React from 'react'

export const Select = createComponent({
  elementClass: LitteSelect,
  tagName: 'litte-select',
  react: React,
  events: {},
  displayName: 'Select',
})
