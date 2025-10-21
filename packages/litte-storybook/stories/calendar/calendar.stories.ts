import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { CalendarProps } from 'litte/calendar'
import 'litte'

type CalendarStoryProps = CalendarProps & { content: string }

const meta: Meta<CalendarStoryProps> = {
  title: 'Components/Calendar',
  component: 'litte-calendar',
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
type Story = StoryObj<CalendarStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Hello World' },
}
