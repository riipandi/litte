'use client'

import { createComponent } from '@lit/react'
import { LitteTabs } from '@litte/tabs'
import * as React from 'react'

export const Tabs = createComponent({
  elementClass: LitteTabs,
  tagName: 'litte-tabs',
  react: React,
  events: {},
  displayName: 'Tabs',
})
