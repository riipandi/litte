import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
// import { copy } from "@web/rollup-plugin-copy";
// import minifyHTML from "rollup-plugin-minify-html-literals";
import summary from "rollup-plugin-summary";

export default defineConfig({
	plugins: [
		resolve(), // Resolve bare module specifiers to relative paths
		// minifyHTML(), // Minify HTML template literals
		terser({ ecma: 2021, module: true, warnings: true }), // Minify JS
		summary(), // Print bundle summary
		// Optional: copy any static assets to build directory
		// copy({ patterns: ["images/**/*"] }),
	],
	input: "src/index.ts",
	output: { dir: "dist" },
	preserveEntrySignatures: "strict",
});
