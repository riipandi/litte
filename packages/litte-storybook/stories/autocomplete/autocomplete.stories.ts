import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { AutocompleteProps } from 'litte/autocomplete'
import 'litte'

type AutocompleteStoryProps = AutocompleteProps & { content: string }

const meta: Meta<AutocompleteStoryProps> = {
  title: 'Components/Autocomplete',
  component: 'litte-autocomplete',
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
type Story = StoryObj<AutocompleteStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
