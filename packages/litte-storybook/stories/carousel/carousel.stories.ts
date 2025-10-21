import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { CarouselProps } from 'litte/carousel'
import 'litte'

type CarouselStoryProps = CarouselProps & { content: string }

const meta: Meta<CarouselStoryProps> = {
  title: 'Components/Carousel',
  component: 'litte-carousel',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the component',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
  },
  args: {
    disabled: false,
    loading: false,
    content: 'Hello World',
  },
  render: (args) => html`
    <div>
      ${args.content}
    </div>
  `,
}

export default meta
type Story = StoryObj<CarouselStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
