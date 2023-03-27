/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
		'./context/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				neueMontreal: ['NeueMontreal-Bold', 'sans-serif'],
				neueMontrealRegular: ['NeueMontreal-Regular', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
