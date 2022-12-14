/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLanguage: "en",
	supportedLanguages: ["en", "my"],
	i18next: {
		// debug is convenient during development to check for missing keys
		debug: true,
		initImmediate: false,
		backend: {
			loadPath: "./src/locales/{{lng}}/{{ns}}.json",
		},
	},
	i18nextPlugins: { fsBackend: "i18next-fs-backend" },
};
