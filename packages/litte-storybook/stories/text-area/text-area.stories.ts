import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { TextAreaProps } from 'litte/text-area'

type TextAreaStoryProps = TextAreaProps & { content: string }

const meta: Meta<TextAreaStoryProps> = {
  title: 'Components/TextArea',
  component: 'litte-text-area',
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
type Story = StoryObj<TextAreaStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
