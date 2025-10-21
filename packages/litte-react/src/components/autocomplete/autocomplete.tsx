import { createComponent } from '@lit/react'
import { LitteAutocomplete } from 'litte'
import * as React from 'react'

export const Autocomplete = createComponent({
  elementClass: LitteAutocomplete,
  tagName: 'litte-autocomplete',
  react: React,
  events: {},
  displayName: 'Autocomplete',
})
