import type { AlertProps } from '@litte/alert'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '@litte/alert'

type AlertStoryProps = AlertProps & { content: string }

const meta: Meta<AlertStoryProps> = {
  title: 'Components/Alert',
  component: 'litte-alert',
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
type Story = StoryObj<AlertStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
