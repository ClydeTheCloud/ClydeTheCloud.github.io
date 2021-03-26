export default function getUserLocale() {
	const locale = navigator.languages ? navigator.languages[0] : navigator.language
	if (!locale) {
		return undefined
	}
	const localeCode = locale.split('-')[0]
	return localeCode
}
