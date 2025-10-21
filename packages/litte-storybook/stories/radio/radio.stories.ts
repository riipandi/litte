import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { RadioProps } from 'litte/radio'

type RadioStoryProps = RadioProps & { content: string }

const meta: Meta<RadioStoryProps> = {
  title: 'Components/Radio',
  component: 'litte-radio',
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
type Story = StoryObj<RadioStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
