export default defineNuxtConfig({
	css: ["tailwindcss/tailwind.css"],
	devtools: { enabled: true },
	experimental: {
		// inlineSSRStyles: false,
	},
	modules: ["@nuxtjs/i18n"],
	postcss: {
		plugins: {
			tailwindcss: {},
		},
	},
});
