import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { FileUploadProps } from 'litte/file-upload'

type FileUploadStoryProps = FileUploadProps & { content: string }

const meta: Meta<FileUploadStoryProps> = {
  title: 'Components/FileUpload',
  component: 'litte-file-upload',
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
type Story = StoryObj<FileUploadStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
