import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { SelectProps } from 'litte/select'

type SelectStoryProps = SelectProps & { content: string }

const meta: Meta<SelectStoryProps> = {
  title: 'Components/Select',
  component: 'litte-select',
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
type Story = StoryObj<SelectStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
