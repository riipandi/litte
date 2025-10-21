import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { ProgressBarProps } from 'litte/progress-bar'
import 'litte'

type ProgressBarStoryProps = ProgressBarProps & { content: string }

const meta: Meta<ProgressBarStoryProps> = {
  title: 'Components/ProgressBar',
  component: 'litte-progress-bar',
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
type Story = StoryObj<ProgressBarStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
