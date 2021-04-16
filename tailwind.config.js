module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			primary: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#f59e0b',
				secondary: '#593C8F',
				bg: 'FAFAFF',
			},
			maxWidth: {
				form: '450px',
			},
			minWidth: {
				form: '400px',
			},
			boxShadow: {
				DEFAULT: '1px 2px 12px 4px #0000000d',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
