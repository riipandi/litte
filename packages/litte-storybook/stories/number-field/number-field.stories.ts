import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { NumberFieldProps } from 'litte/number-field'

type NumberFieldStoryProps = NumberFieldProps & { content: string }

const meta: Meta<NumberFieldStoryProps> = {
  title: 'Components/NumberField',
  component: 'litte-number-field',
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
type Story = StoryObj<NumberFieldStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
