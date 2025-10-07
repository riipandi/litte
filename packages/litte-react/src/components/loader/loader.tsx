import { createComponent } from '@lit/react'
import { LitteLoader } from '@litte/loader'
import * as React from 'react'

export const Loader = createComponent({
  elementClass: LitteLoader,
  tagName: 'litte-loader',
  react: React,
  events: {},
  displayName: 'Loader',
})
