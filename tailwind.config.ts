import type { Config } from "tailwindcss";
import color from "tailwindcss/colors"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: color.zinc[900],
				foreground: color.zinc[800],
				border: color.zinc[400],
				accent: color.purple[900],
			}
		},
	},
	plugins: [],
} satisfies Config;
