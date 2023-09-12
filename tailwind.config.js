/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
		colors: {
			"custom-black": "#111",
			"custom-grey": "#11111160",
			"custom-blue": "#6047EC",
			"custom-blue-hover": "#6000CF"
		},
	},
  },
  plugins: [],
}

