import type { SliderProps } from '@litte/slider'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '@litte/slider'

type SliderStoryProps = SliderProps & { content: string }

const meta: Meta<SliderStoryProps> = {
  title: 'Components/Slider',
  component: 'litte-slider',
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
type Story = StoryObj<SliderStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
