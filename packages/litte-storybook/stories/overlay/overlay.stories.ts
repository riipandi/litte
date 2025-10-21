import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { OverlayProps } from 'litte/overlay'

type OverlayStoryProps = OverlayProps & { content: string }

const meta: Meta<OverlayStoryProps> = {
  title: 'Components/Overlay',
  component: 'litte-overlay',
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
type Story = StoryObj<OverlayStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
