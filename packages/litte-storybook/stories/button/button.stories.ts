import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import type { ButtonProps, ButtonSize, ButtonVariant } from 'litte/button'

type ButtonStoryProps = ButtonProps & { content: string }

const meta: Meta<ButtonStoryProps> = {
  title: 'Components/Button',
  component: 'litte-button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['submit', 'reset', 'button'] as HTMLButtonElement['type'][],
      description: 'Button type',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'] as ButtonVariant[],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Custom background color',
    },
    color: {
      control: { type: 'color' },
      description: 'Custom text color',
    },
    content: {
      control: { type: 'text' },
      description: 'Button content/text',
    },
  },
  args: {
    variant: 'primary' as ButtonVariant,
    size: 'md' as ButtonSize,
    disabled: false,
    loading: false,
    content: 'Button',
  },

  render: (args) => html`
    <litte-button
      variant=${args.variant || 'primary'}
      size=${args.size || 'md'}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      backgroundColor=${args.backgroundColor || ''}
      color=${args.color || ''}
      @click=${(e: Event) => console.info('Button clicked!', e)}
    >
      ${args.content}
    </litte-button>
  `,
}

export default meta
type Story = StoryObj<ButtonStoryProps>

// Default story for testing and property changes
export const Default: Story = {
  args: { content: 'Default Button' },
}

// Variant showcase - disable all controls
export const VariantShowcase: Story = {
  name: 'Variant Showcase',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <litte-button variant="primary">Primary</litte-button>
      <litte-button variant="secondary">Secondary</litte-button>
      <litte-button variant="outline">Outline</litte-button>
      <litte-button variant="ghost">Ghost</litte-button>
    </div>
  `,
}

// Size showcase - disable all controls
export const SizeShowcase: Story = {
  name: 'Size Showcase',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;"
    >
      <litte-button size="xs">Extra Small</litte-button>
      <litte-button size="sm">Small</litte-button>
      <litte-button size="md">Medium</litte-button>
      <litte-button size="lg">Large</litte-button>
      <litte-button size="xl">Extra Large</litte-button>
    </div>
  `,
}

// State showcase - disable all controls
export const StateShowcase: Story = {
  name: 'State Showcase',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <litte-button>Normal</litte-button>
      <litte-button disabled>Disabled</litte-button>
      <litte-button loading>Loading</litte-button>
    </div>
  `,
}

// Custom styling showcase - disable all controls
export const CustomStylingShowcase: Story = {
  name: 'Custom Colors',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <litte-button backgroundColor="#ff6b6b" color="white">Custom Red</litte-button>
      <litte-button backgroundColor="#4ecdc4" color="white">Custom Teal</litte-button>
      <litte-button backgroundColor="#45b7d1" color="white">Custom Blue</litte-button>
      <litte-button backgroundColor="#f9ca24" color="#333">Custom Yellow</litte-button>
    </div>
  `,
}
