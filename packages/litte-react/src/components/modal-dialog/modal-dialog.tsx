import { createComponent } from '@lit/react'
import { LitteModalDialog } from 'litte'
import * as React from 'react'

export const ModalDialog = createComponent({
  elementClass: LitteModalDialog,
  tagName: 'litte-modal-dialog',
  react: React,
  events: {},
  displayName: 'ModalDialog',
})
