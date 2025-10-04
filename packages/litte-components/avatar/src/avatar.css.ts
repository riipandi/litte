import { css } from 'lit'

export const avatarStyles = css`
  :host {
    display: inline-block;
  }
  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    aspect-ratio: 1;
    line-height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: #f3f3f3;
    width: 36px;
    height: 36px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  .--variant-faded.--color-neutral { color: #666; }
  .--variant-faded.--color-critical { color: #d32f2f; }
  .--variant-faded.--color-positive { color: #388e3c; }
  .--variant-faded.--color-warning { color: #fbc02d; }
  .--variant-faded.--color-primary { color: #1976d2; }
  .--squared { border-radius: 8px; }
`
