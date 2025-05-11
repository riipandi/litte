import type { CSSResultGroup, CSSResultOrNative } from 'lit'
import { LitElement, unsafeCSS } from 'lit'
import appStyles from '../styles/app.css?inline'

export class BaseElement extends LitElement {
  /**
   * Finalizes styles by combining element styles with provided styles
   * @param styles Optional CSS styles to include
   * @returns Array of finalized CSS styles
   */
  static finalizeStyles(styles?: CSSResultGroup | undefined): CSSResultOrNative[] {
    const elementStyles = LitElement.finalizeStyles(styles)
    const globalStyles = new CSSStyleSheet()

    globalStyles.replaceSync(``)

    // TODO: this is workaround to make global styles works
    // Replace the unsafeCSS with a better solution in the future.
    return [...elementStyles, globalStyles, unsafeCSS(appStyles)]
  }

  /**
   * Applies form styles to the component's shadow root
   * @param includeFormStyles Whether to include form normalization styles
   */
  protected applyGlobalStyles(includeFormStyles = true) {
    if (this.shadowRoot) {
      const existingStyles = this.shadowRoot.adoptedStyleSheets || []

      if (includeFormStyles) {
        this.shadowRoot.adoptedStyleSheets = [...existingStyles]
      }
    }
  }

  /**
   * Constructor with option to automatically apply form styles
   */
  constructor(autoApplyFormStyles = true) {
    super()

    if (autoApplyFormStyles) {
      this.applyGlobalStyles()
    }
  }
}
