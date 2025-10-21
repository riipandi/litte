import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { CardProps } from 'litte/card'
import 'litte'

type CardStoryProps = CardProps & { content: string }

const meta: Meta<CardStoryProps> = {
  title: 'Components/Card',
  component: 'litte-card',
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
type Story = StoryObj<CardStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
