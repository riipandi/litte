'use client'

import { createComponent } from '@lit/react'
import { LittePinField } from '@litte/pin-field'
import * as React from 'react'

export const PinField = createComponent({
  elementClass: LittePinField,
  tagName: 'litte-pin-field',
  react: React,
  events: {},
  displayName: 'PinField',
})
