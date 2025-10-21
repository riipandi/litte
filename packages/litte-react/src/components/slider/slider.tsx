import { createComponent } from '@lit/react'
import { LitteSlider } from 'litte'
import * as React from 'react'

export const Slider = createComponent({
  elementClass: LitteSlider,
  tagName: 'litte-slider',
  react: React,
  events: {},
  displayName: 'Slider',
})
