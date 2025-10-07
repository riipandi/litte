import { createComponent } from '@lit/react'
import { LitteElement } from '@litte/element'
import * as React from 'react'

export const Element = createComponent({
  elementClass: LitteElement,
  tagName: 'litte-element',
  react: React,
  events: {},
  displayName: 'Element',
})
