/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			questrial: ['Questrial', 'Arial', 'sans-serif'],
			body: ['Questrial', 'Arial', 'sans-serif'],
		},
		screens: {
			xxxs: { max: '476px' },
			xxs: { max: '550px ' },
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1536px',
		},
	},
	plugins: [],
};
