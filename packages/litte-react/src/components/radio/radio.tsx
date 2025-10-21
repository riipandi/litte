import { createComponent } from '@lit/react'
import { LitteRadio } from 'litte'
import * as React from 'react'

export const Radio = createComponent({
  elementClass: LitteRadio,
  tagName: 'litte-radio',
  react: React,
  events: {},
  displayName: 'Radio',
})
