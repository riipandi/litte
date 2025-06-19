import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
// import { buttonStyles } from "./button.css";

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
}

export const Button = ({
	primary,
	backgroundColor,
	size,
	label,
	onClick,
}: ButtonProps) => {
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";

	return html`
    <button
      type="button"
      class=${["storybook-button", `storybook-button--${size || "medium"}`, mode].join(" ")}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
