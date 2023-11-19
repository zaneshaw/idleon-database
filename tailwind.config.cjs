/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				idleon: ["IdleOn", "sans-serif"]
			},
			cursor: {
				auto: "url(/cursors/default.png), auto",
				pointer: "url(/cursors/pointer.png), pointer"
			}
		}
	},

	plugins: []
};

module.exports = config;
