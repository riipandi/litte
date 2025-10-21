import { createComponent } from '@lit/react'
import { LittePagination } from 'litte'
import * as React from 'react'

export const Pagination = createComponent({
  elementClass: LittePagination,
  tagName: 'litte-pagination',
  react: React,
  events: {},
  displayName: 'Pagination',
})
