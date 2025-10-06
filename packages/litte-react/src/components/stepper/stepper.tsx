'use client'

import { createComponent } from '@lit/react'
import { LitteStepper } from '@litte/stepper'
import * as React from 'react'

export const Stepper = createComponent({
  elementClass: LitteStepper,
  tagName: 'litte-stepper',
  react: React,
  events: {},
  displayName: 'Stepper',
})
