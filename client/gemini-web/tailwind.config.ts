import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],

	daisyui: {
		themes: ['corporate', 'business', 'lemonade']
	},

	plugins: [require('daisyui')]
};

export default config;
