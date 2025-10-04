import type { AvatarProps } from '@litte/avatar'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '@litte/avatar'

type AvatarStoryProps = AvatarProps & { content: string }

const meta: Meta<AvatarStoryProps> = {
  title: 'Components/Avatar',
  component: 'litte-avatar',
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
type Story = StoryObj<AvatarStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
