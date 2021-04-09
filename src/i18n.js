import { createI18n } from 'vue-i18n'

import getUserLocale from './locales/getUserLocale'

function getStartingLocale() {
	const previeouslySetLocale = localStorage.getItem('locale')

	if (previeouslySetLocale) {
		return previeouslySetLocale
	}

	const localesAssociatedWithRu = ['az', 'ar', 'by', 'ge', 'kz', 'kg', 'ru', 'tj', 'tm', 'uk', 'uz']
	const userLocale = getUserLocale()
	const preferredLocale = localesAssociatedWithRu.includes(userLocale) ? 'ru' : 'en'

	return preferredLocale
}

function loadLocaleMessages() {
	const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
	const messages = {}
	locales.keys().forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
		if (matched && matched.length > 1) {
			const locale = matched[1]
			messages[locale] = locales(key).default
		}
	})
	return messages
}

export default createI18n({
	legacy: true,
	locale: getStartingLocale() || 'en',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
	messages: loadLocaleMessages(),
})
