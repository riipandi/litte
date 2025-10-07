import { createComponent } from '@lit/react'
import { LitteContextMenu } from '@litte/context-menu'
import * as React from 'react'

export const ContextMenu = createComponent({
  elementClass: LitteContextMenu,
  tagName: 'litte-context-menu',
  react: React,
  events: {},
  displayName: 'ContextMenu',
})
