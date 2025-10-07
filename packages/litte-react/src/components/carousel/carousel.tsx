import { createComponent } from '@lit/react'
import { LitteCarousel } from '@litte/carousel'
import * as React from 'react'

export const Carousel = createComponent({
  elementClass: LitteCarousel,
  tagName: 'litte-carousel',
  react: React,
  events: {},
  displayName: 'Carousel',
})
