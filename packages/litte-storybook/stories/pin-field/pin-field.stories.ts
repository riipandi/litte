import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { PinFieldProps } from 'litte/pin-field'
import 'litte'

type PinFieldStoryProps = PinFieldProps & { content: string }

const meta: Meta<PinFieldStoryProps> = {
  title: 'Components/PinField',
  component: 'litte-pin-field',
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
type Story = StoryObj<PinFieldStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
