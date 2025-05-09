import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", "class"],
	theme: {
		fontFamily: {
			lexend: ['Lexend Deca"', ...defaultTheme.fontFamily.sans],
			poppins: ["Poppins", "sans-serif"],
			roboto: ["Roboto Slab", "serif"]
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1320px'
			}
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				primary: {
					DEFAULT: '#4361ee',
					light: '#eaf1ff',
					'dark-light': 'rgba(67,97,238,.15)'
				},
				secondary: {
					DEFAULT: '#805dca',
					light: '#ebe4f7',
					'dark-light': 'rgb(128 93 202 / 15%)'
				},
				success: {
					DEFAULT: '#00ab55',
					light: '#ddf5f0',
					'dark-light': 'rgba(0,171,85,.15)'
				},
				indigo: {
					DEFAULT: 'red',
					light: 'red',
					'dark-light': 'rgba(0,171,85,.15)'
				},
				danger: {
					DEFAULT: '#ed3348',
					light: '#fff5f5',
					'dark-light': 'rgba(231,81,90,.15)'
				},
				warning: {
					DEFAULT: '#e2a03f',
					light: '#fff9ed',
					'dark-light': 'rgba(226,160,63,.15)'
				},
				info: {
					DEFAULT: '#2196f3',
					light: '#e7f7ff',
					'dark-light': 'rgba(33,150,243,.15)'
				},
				dark: {
					DEFAULT: '#3b3f5c',
					light: '#eaeaec',
					'dark-light': 'rgba(59,63,92,.15)'
				},
				black: {
					DEFAULT: '#0e1726',
					light: '#e3e4eb',
					'dark-light': 'rgba(14,23,38,.15)'
				},
				white: {
					DEFAULT: '#ffffff',
					light: '#e0e6ed',
					dark: '#888ea8'
				},
				text900: {
					DEFAULT: '#1C1D1E+',
					light: '#e0e6ed',
					dark: '#888ea8'
				},
				red: {
					'500': '#ED3248'
				}
			},
			fontSize: {
				tiny: [".8125rem", "1rem"]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
