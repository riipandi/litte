'use client'

import { createComponent } from '@lit/react'
import { LitteOverlay } from '@litte/overlay'
import * as React from 'react'

export const Overlay = createComponent({
  elementClass: LitteOverlay,
  tagName: 'litte-overlay',
  react: React,
  events: {},
  displayName: 'Overlay',
})
