import { createComponent } from '@lit/react'
import { LitteActionBar } from 'litte'
import * as React from 'react'

export const ActionBar = createComponent({
  elementClass: LitteActionBar,
  tagName: 'litte-action-bar',
  react: React,
  events: {},
  displayName: 'ActionBar',
})
