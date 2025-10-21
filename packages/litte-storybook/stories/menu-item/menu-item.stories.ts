import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { MenuItemProps } from 'litte/menu-item'

type MenuItemStoryProps = MenuItemProps & { content: string }

const meta: Meta<MenuItemStoryProps> = {
  title: 'Components/MenuItem',
  component: 'litte-menu-item',
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
type Story = StoryObj<MenuItemStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
