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
				discord_spin: {
					'0%': {
						transform: 'rotate(0deg) skewY(0px)',
						scale: '1',
					},
					'50%': {
						transform: 'rotate(180deg) skewY(24px)',
						scale: '1.2',
					},
					'100%': {
						transform: 'rotate(360deg)',
						scale: '1',
					},
				},
			},
			animation: {
				float: 'floating 3s ease-in-out infinite',
				discord: 'discord_spin 0.85s 1 ease-in-out',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
