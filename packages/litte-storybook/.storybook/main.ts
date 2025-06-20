/** biome-ignore-all lint/suspicious/noExplicitAny: [] */

import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/web-components-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 * Compatible with both ESM and CommonJS across Node.js versions.
 */
function getAbsolutePath(value: string): string {
	try {
		// Try ESM approach first (Node.js 24+)
		if (typeof import.meta !== "undefined") {
			const basePath = import.meta.resolve(join(value, "package.json"));
			return dirname(new URL(basePath).pathname);
		}
	} catch (_) {
		// Fall through to CommonJS approach
	}

	try {
		// Fallback to CommonJS approach (Node.js 22 and older)
		return dirname(require.resolve(join(value, "package.json")));
	} catch (_) {
		// Final fallback - construct path manually
		const nodeModulesPath = join(process.cwd(), "node_modules", value);
		return nodeModulesPath;
	}
}

const config: StorybookConfig = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|mjs|ts|mts)"],
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
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import("vite");
		return mergeConfig(config, {
			plugins: [],
			...(configType === "PRODUCTION"
				? {
						base: "/",
						build: {
							chunkSizeWarningLimit: 1024 * 4,
							rollupOptions: {
								onwarn(warning: any, warn: any) {
									if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
										return;
									}
									warn(warning);
								},
							},
						},
					}
				: {}),
		});
	},
};

export default config;
