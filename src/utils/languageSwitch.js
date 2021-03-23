const language = {
	available: { en: 'En', ru: 'Ru' },
	_current: undefined,

	init() {
		const localStorageLang = localStorage.getItem('lang')
		if (!localStorageLang) {
			// PLACEHOLDER
			this._current = this.available.ru
			// get language from browser settings
			// set this.current to language from browser settings
			return
		} else {
			this._currentt = localStorageLang
			return
		}
	},

	get current() {
		console.log('get', this._current)
		if (this._current === undefined) {
			this.init()
		}
		return this._current
	},

	set current(newLanguage) {
		console.log('set', newLanguage)
		localStorage.setItem('lang', newLanguage)
		this._current = newLanguage
	},
}

export default language
