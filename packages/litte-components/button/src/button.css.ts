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
    border-radius: 0.5rem;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    user-select: none;
    white-space: nowrap;
  }

  /* Variants */
  .litte-button--primary {
    background-color: #3b82f6;
    color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .litte-button--primary:hover:not(:disabled) {
    background-color: #2563eb;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .litte-button--primary:active:not(:disabled) {
    background-color: #1d4ed8;
    transform: translateY(1px);
  }

  .litte-button--secondary {
    background-color: #f1f5f9;
    color: #475569;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .litte-button--secondary:hover:not(:disabled) {
    background-color: #e2e8f0;
    color: #334155;
  }

  .litte-button--secondary:active:not(:disabled) {
    background-color: #cbd5e1;
    transform: translateY(1px);
  }

  .litte-button--outline {
    background-color: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;
  }

  .litte-button--outline:hover:not(:disabled) {
    background-color: #3b82f6;
    color: white;
  }

  .litte-button--outline:active:not(:disabled) {
    background-color: #2563eb;
    transform: translateY(1px);
  }

  .litte-button--ghost {
    background-color: transparent;
    color: #475569;
  }

  .litte-button--ghost:hover:not(:disabled) {
    background-color: #f1f5f9;
    color: #334155;
  }

  .litte-button--ghost:active:not(:disabled) {
    background-color: #e2e8f0;
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
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .litte-button--outline:focus-visible {
    outline-color: #3b82f6;
  }

  .litte-button--secondary:focus-visible {
    outline-color: #475569;
  }

  .litte-button--ghost:focus-visible {
    outline-color: #475569;
  }
`
