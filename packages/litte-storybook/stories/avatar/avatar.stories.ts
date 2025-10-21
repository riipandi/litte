import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import type { AvatarProps } from 'litte/avatar'
import 'litte'

type AvatarStoryProps = AvatarProps

const meta: Meta<AvatarStoryProps> = {
  title: 'Components/Avatar',
  component: 'litte-avatar',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image URL' },
    alt: { control: 'text', description: 'Image alt text' },
    initials: { control: 'text', description: 'Initials to display' },
    icon: { control: 'text', description: 'SVG string or icon name' },
    squared: { control: 'boolean', description: 'Rounded square shape' },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'faded'],
      description: 'Render variant',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'critical', 'warning', 'positive', 'primary'],
      description: 'Color scheme',
    },
    size: { control: 'number', description: 'Size in px' },
    class: { control: 'text', description: 'Additional class' },
  },
  args: {
    src: '',
    alt: '',
    initials: 'AR',
    icon: '',
    squared: false,
    variant: 'solid',
    color: 'neutral',
    size: 36,
    class: '',
  },
  render: (args) => html`
    <litte-avatar
      src=${ifDefined(args.src)}
      alt=${ifDefined(args.alt)}
      initials=${ifDefined(args.initials)}
      icon=${ifDefined(args.icon)}
      ?squared=${args.squared}
      variant=${ifDefined(args.variant)}
      color=${ifDefined(args.color)}
      size=${ifDefined(args.size)}
      class=${ifDefined(args.class)}
    ></litte-avatar>
  `,
}

export default meta
type Story = StoryObj<AvatarStoryProps>

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/921834?v=4',
    alt: '',
    initials: 'AR',
    icon: '',
    squared: false,
    variant: 'solid',
    color: 'neutral',
    size: 36,
    class: '',
  },
}

export const Unsplash: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2',
    alt: 'Unsplash Avatar',
    initials: '',
    icon: '',
    squared: false,
    variant: 'solid',
    color: 'neutral',
    size: 48,
    class: '',
  },
}
