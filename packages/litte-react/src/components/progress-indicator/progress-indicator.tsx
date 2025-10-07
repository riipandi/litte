import { createComponent } from '@lit/react'
import { LitteProgressIndicator } from '@litte/progress-indicator'
import * as React from 'react'

export const ProgressIndicator = createComponent({
  elementClass: LitteProgressIndicator,
  tagName: 'litte-progress-indicator',
  react: React,
  events: {},
  displayName: 'ProgressIndicator',
})
