'use client'

import { createComponent } from '@lit/react'
import { LitteTooltip } from '@litte/tooltip'
import * as React from 'react'

export const Tooltip = createComponent({
  elementClass: LitteTooltip,
  tagName: 'litte-tooltip',
  react: React,
  events: {},
  displayName: 'Tooltip',
})
