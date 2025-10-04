import type { ToggleButtonProps } from '@litte/toggle-button'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '@litte/toggle-button'

type ToggleButtonStoryProps = ToggleButtonProps & { content: string }

const meta: Meta<ToggleButtonStoryProps> = {
  title: 'Components/ToggleButton',
  component: 'litte-toggle-button',
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
type Story = StoryObj<ToggleButtonStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
