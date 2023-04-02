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
			keyframes: {
				floating: {
					'0%': { transform: 'translate(0)' },
					'50%': { transform: 'translateY(200px)' },
					'100%': { transform: 'translate(0)' },
				},
			},
			animation: {
				float: 'floating 3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
