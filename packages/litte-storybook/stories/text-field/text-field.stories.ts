import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { TextFieldProps } from 'litte/text-field'
import 'litte'

type TextFieldStoryProps = TextFieldProps & { content: string }

const meta: Meta<TextFieldStoryProps> = {
  title: 'Components/TextField',
  component: 'litte-text-field',
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
type Story = StoryObj<TextFieldStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
