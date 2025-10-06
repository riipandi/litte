'use client'

import { createComponent } from '@lit/react'
import { LitteToast } from '@litte/toast'
import * as React from 'react'

export const Toast = createComponent({
  elementClass: LitteToast,
  tagName: 'litte-toast',
  react: React,
  events: {},
  displayName: 'Toast',
})
