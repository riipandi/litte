'use client'

import { createComponent } from '@lit/react'
import { LitteCheckbox } from '@litte/checkbox'
import * as React from 'react'

export const Checkbox = createComponent({
  elementClass: LitteCheckbox,
  tagName: 'litte-checkbox',
  react: React,
  events: {},
  displayName: 'Checkbox',
})
