import { type CSSResult, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitteElement } from '../../base-element'
import { autocompleteStyles } from './autocomplete.css'
import type { AutocompleteProps } from './autocomplete.types'

@customElement('litte-autocomplete')
export class LitteAutocomplete extends LitteElement implements AutocompleteProps {
  static styles: CSSResult = autocompleteStyles

  /** Disable the button */
  @property({ type: Boolean, reflect: true })
  accessor disabled: AutocompleteProps['disabled'] = false

  /** Show loading state */
  @property({ type: Boolean, reflect: true })
  accessor loading: AutocompleteProps['loading'] = false

  render() {
    return nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litte-autocomplete': LitteAutocomplete
  }
}
