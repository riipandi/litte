'use client'

import { createComponent } from '@lit/react'
import { LitteSkeleton } from '@litte/skeleton'
import * as React from 'react'

export const Skeleton = createComponent({
  elementClass: LitteSkeleton,
  tagName: 'litte-skeleton',
  react: React,
  events: {},
  displayName: 'Skeleton',
})
