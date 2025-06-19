import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/web-components-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
	const basePath = import.meta.resolve(join(value, "package.json"));
	return dirname(new URL(basePath).pathname);
}

const config: StorybookConfig = {
	stories: ["./stories/**/*.mdx", "./stories/**/*.stories.@(js|mjs|ts|mts)"],
	addons: [],
	framework: {
		name: getAbsolutePath("@storybook/web-components-vite"),
		options: {},
	},
	core: {
		disableTelemetry: true, // 👈 Disables telemetry
		enableCrashReports: false, // 👈 Appends the crash reports to the telemetry events
		disableWhatsNewNotifications: true, // 👈 Disables the Whats New notifications
	},
};

export default config;
