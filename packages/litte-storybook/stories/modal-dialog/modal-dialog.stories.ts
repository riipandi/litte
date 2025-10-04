import type { ModalDialogProps } from '@litte/modal-dialog'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '@litte/modal-dialog'

type ModalDialogStoryProps = ModalDialogProps & { content: string }

const meta: Meta<ModalDialogStoryProps> = {
  title: 'Components/ModalDialog',
  component: 'litte-modal-dialog',
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
type Story = StoryObj<ModalDialogStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
