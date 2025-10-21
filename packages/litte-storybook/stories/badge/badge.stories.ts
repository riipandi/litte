import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { BadgeProps } from 'litte/badge'

type BadgeStoryProps = BadgeProps & { content: string }

const meta: Meta<BadgeStoryProps> = {
  title: 'Components/Badge',
  component: 'litte-badge',
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
type Story = StoryObj<BadgeStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
