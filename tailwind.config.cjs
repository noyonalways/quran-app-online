/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			screens: {
				DEFAULT: "100%",
				sm: "640px",
				lg: "768px",
				xl: "1100px",
				"2xl": "1280px",
			},
			padding: {
				DEFAULT: "0.5rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "5rem",
			},
		},
		extend: {
			colors: {
				// secondary: '#151515',
				// primary: '##FF3811'
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				andika: ["Andika", "sans-serif"],
				lateef: ["Lateef", "serif"],
			},
		},
	},
	plugins: [],
};
