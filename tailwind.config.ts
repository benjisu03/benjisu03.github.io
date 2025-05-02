import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#f2f2f2",
				foreground: "#fcfcfc",
				border: "#bfbfbf",
				accent: "#4169E1",
			}
		},
	},
	plugins: [],
} satisfies Config;
