'use client'

import { createComponent } from '@lit/react'
import { LittePagination } from '@litte/pagination'
import * as React from 'react'

export const Pagination = createComponent({
  elementClass: LittePagination,
  tagName: 'litte-pagination',
  react: React,
  events: {},
  displayName: 'Pagination',
})
