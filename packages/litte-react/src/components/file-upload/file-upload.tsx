import { createComponent } from '@lit/react'
import { LitteFileUpload } from 'litte'
import * as React from 'react'

export const FileUpload = createComponent({
  elementClass: LitteFileUpload,
  tagName: 'litte-file-upload',
  react: React,
  events: {},
  displayName: 'FileUpload',
})
