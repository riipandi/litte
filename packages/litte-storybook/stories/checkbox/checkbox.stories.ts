import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { CheckboxProps } from 'litte/checkbox'
import 'litte'

type CheckboxStoryProps = CheckboxProps & { content: string }

const meta: Meta<CheckboxStoryProps> = {
  title: 'Components/Checkbox',
  component: 'litte-checkbox',
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
type Story = StoryObj<CheckboxStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
