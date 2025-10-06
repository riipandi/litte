'use client'

import { createComponent } from '@lit/react'
import { LitteAlert } from '@litte/alert'
import * as React from 'react'

export const Alert = createComponent({
  elementClass: LitteAlert,
  tagName: 'litte-alert',
  react: React,
  events: {},
  displayName: 'Alert',
})
