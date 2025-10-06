'use client'

import { createComponent } from '@lit/react'
import { LitteMenuItem } from '@litte/menu-item'
import * as React from 'react'

export const MenuItem = createComponent({
  elementClass: LitteMenuItem,
  tagName: 'litte-menu-item',
  react: React,
  events: {},
  displayName: 'MenuItem',
})
