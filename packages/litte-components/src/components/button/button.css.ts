import { css } from 'lit'

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  .litte-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    border-radius: var(--lt-radius-medium);
    font-family: var(--lt-font-family-body);
    font-weight: var(--lt-font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    user-select: none;
    white-space: nowrap;
  }

  /* Variants */
  .litte-button--primary {
    background-color: var(--lt-color-background-primary);
    color: var(--lt-color-white);
    box-shadow: var(--lt-shadow-raised);
  }

  .litte-button--primary:hover:not(:disabled) {
    background-color: var(--lt-color-background-primary);
    color: var(--lt-color-white);
    opacity: 0.9;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .litte-button--primary:active:not(:disabled) {
    background-color: var(--lt-color-border-primary-faded);
    transform: translateY(1px);
  }

  .litte-button--secondary {
    background-color: var(--lt-color-background-neutral);
    color: var(--lt-color-foreground-neutral);
    box-shadow: var(--lt-shadow-raised);
  }

  .litte-button--secondary:hover:not(:disabled) {
    background-color: var(--lt-color-background-neutral-faded);
    color: var(--lt-color-foreground-neutral-faded);
  }

  .litte-button--secondary:active:not(:disabled) {
    background-color: var(--lt-color-border-neutral);
    transform: translateY(1px);
  }

  .litte-button--outline {
    background-color: transparent;
    color: var(--lt-color-background-primary);
    border: 1px solid var(--lt-color-background-primary);
  }

  .litte-button--outline:hover:not(:disabled) {
    background-color: var(--lt-color-background-primary);
    color: var(--lt-color-white);
  }

  .litte-button--outline:active:not(:disabled) {
    background-color: var(--lt-color-border-primary);
    transform: translateY(1px);
  }

  .litte-button--ghost {
    background-color: transparent;
    color: var(--lt-color-foreground-neutral);
  }

  .litte-button--ghost:hover:not(:disabled) {
    background-color: var(--lt-color-background-neutral);
    color: var(--lt-color-foreground-neutral-faded);
  }

  .litte-button--ghost:active:not(:disabled) {
    background-color: var(--lt-color-background-neutral-faded);
    transform: translateY(1px);
  }

  /* Sizes */
  .litte-button--xs {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .litte-button--sm {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .litte-button--md {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .litte-button--lg {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .litte-button--xl {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  /* States */
  .litte-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .litte-button--loading {
    cursor: wait;
  }

  .litte-button--loading slot {
    opacity: 0.7;
  }

  /* Loading spinner */
  .litte-button__spinner {
    width: 1em;
    height: 1em;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Focus styles */
  .litte-button:focus-visible {
    outline: 2px solid var(--lt-color-background-primary);
    outline-offset: 2px;
  }

  .litte-button--outline:focus-visible {
    outline-color: var(--lt-color-background-primary);
  }

  .litte-button--secondary:focus-visible {
    outline-color: var(--lt-color-foreground-neutral);
  }

  .litte-button--ghost:focus-visible {
    outline-color: var(--lt-color-foreground-neutral);
  }
`
