import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { ProgressIndicatorProps } from 'litte/progress-indicator'
import 'litte'

type ProgressIndicatorStoryProps = ProgressIndicatorProps & { content: string }

const meta: Meta<ProgressIndicatorStoryProps> = {
  title: 'Components/ProgressIndicator',
  component: 'litte-progress-indicator',
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
type Story = StoryObj<ProgressIndicatorStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
