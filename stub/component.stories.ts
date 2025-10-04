import type { CHANGEME_COMPONENT_NAMEProps } from '@litte/CHANGEME_COMPONENT_ID'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '@litte/CHANGEME_COMPONENT_ID'

type CHANGEME_COMPONENT_NAMEStoryProps = CHANGEME_COMPONENT_NAMEProps & { content: string }

const meta: Meta<CHANGEME_COMPONENT_NAMEStoryProps> = {
  title: 'Components/CHANGEME_COMPONENT_NAME',
  component: 'litte-button',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
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
type Story = StoryObj<CHANGEME_COMPONENT_NAMEStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
