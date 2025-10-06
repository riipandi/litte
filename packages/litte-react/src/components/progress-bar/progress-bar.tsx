'use client'

import { createComponent } from '@lit/react'
import { LitteProgressBar } from '@litte/progress-bar'
import * as React from 'react'

export const ProgressBar = createComponent({
  elementClass: LitteProgressBar,
  tagName: 'litte-progress-bar',
  react: React,
  events: {},
  displayName: 'ProgressBar',
})
