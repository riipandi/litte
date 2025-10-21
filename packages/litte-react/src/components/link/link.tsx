import { createComponent } from '@lit/react'
import { LitteLink } from 'litte'
import * as React from 'react'

export const Link = createComponent({
  elementClass: LitteLink,
  tagName: 'litte-link',
  react: React,
  events: {},
  displayName: 'Link',
})
