import { createComponent } from '@lit/react'
import { LitteTextArea } from 'litte'
import * as React from 'react'

export const TextArea = createComponent({
  elementClass: LitteTextArea,
  tagName: 'litte-text-area',
  react: React,
  events: {},
  displayName: 'TextArea',
})
