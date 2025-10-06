import { LitteElement } from '@litte/element'
import { type CSSResult, html, nothing, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { avatarStyles } from './avatar.css'
import type { AvatarProps } from './avatar.types'

@customElement('litte-avatar')
export class Avatar extends LitteElement implements AvatarProps {
  static styles: CSSResult = avatarStyles

  @property({ type: String }) src?: string
  @property({ type: String }) alt?: string
  @property({ type: String }) initials?: string
  @property({ type: String }) icon?: string
  @property({ type: Boolean }) squared = false
  @property({ type: String }) variant: 'solid' | 'faded' = 'solid'
  @property({ type: String }) color: 'neutral' | 'critical' | 'warning' | 'positive' | 'primary' =
    'neutral'
  @property({ type: Number }) size = 36
  @property({ type: String }) class?: string

  render(): TemplateResult {
    const classes = [
      'root',
      this.squared ? '--squared' : '',
      this.variant === 'faded' ? '--variant-faded' : '',
      this.color ? `--color-${this.color}` : '',
      this.class ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    const style = `
      width: ${this.size}px;
      height: ${this.size}px;
      font-size: ${Math.round(this.size / 3)}px;
    `

    return html`
      <div class="${classes}" style="${style}">
        ${
          this.src
            ? html`<img class="img" src="${this.src}" alt="${this.alt ?? ''}" />`
            : this.initials
              ? html`<span>${this.initials}</span>`
              : this.icon
                ? html`<span>${this.icon}</span>`
                : nothing
        }
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-avatar': Avatar
  }
}
