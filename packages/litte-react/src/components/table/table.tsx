import { createComponent } from '@lit/react'
import { LitteTable } from '@litte/table'
import * as React from 'react'

export const Table = createComponent({
  elementClass: LitteTable,
  tagName: 'litte-table',
  react: React,
  events: {},
  displayName: 'Table',
})
