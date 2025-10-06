'use client'

import { createComponent } from '@lit/react'
import { LitteAvatar } from '@litte/avatar'
import * as React from 'react'

export const Avatar = createComponent({
  elementClass: LitteAvatar,
  tagName: 'litte-avatar',
  react: React,
  events: {},
  displayName: 'Avatar',
})
