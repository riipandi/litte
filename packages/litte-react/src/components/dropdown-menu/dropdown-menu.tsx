import { createComponent } from '@lit/react'
import { LitteDropdownMenu } from '@litte/dropdown-menu'
import * as React from 'react'

export const DropdownMenu = createComponent({
  elementClass: LitteDropdownMenu,
  tagName: 'litte-dropdown-menu',
  react: React,
  events: {},
  displayName: 'DropdownMenu',
})
