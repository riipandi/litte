import { createComponent } from '@lit/react'
import { LitteBreadcrumbs } from 'litte'
import * as React from 'react'

export const Breadcrumbs = createComponent({
  elementClass: LitteBreadcrumbs,
  tagName: 'litte-breadcrumbs',
  react: React,
  events: {},
  displayName: 'Breadcrumbs',
})
