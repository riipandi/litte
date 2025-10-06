'use client'

import { createComponent } from '@lit/react'
import { LitteTimeline } from '@litte/timeline'
import * as React from 'react'

export const Timeline = createComponent({
  elementClass: LitteTimeline,
  tagName: 'litte-timeline',
  react: React,
  events: {},
  displayName: 'Timeline',
})
