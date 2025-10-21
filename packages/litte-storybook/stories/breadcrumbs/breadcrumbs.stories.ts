import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { BreadcrumbsProps } from 'litte/breadcrumbs'

type BreadcrumbsStoryProps = BreadcrumbsProps & { content: string }

const meta: Meta<BreadcrumbsStoryProps> = {
  title: 'Components/Breadcrumbs',
  component: 'litte-breadcrumbs',
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
type Story = StoryObj<BreadcrumbsStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
