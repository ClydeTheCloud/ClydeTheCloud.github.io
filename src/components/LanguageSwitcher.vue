<template>
	<button @click="toggle" class="switcher">{{ $i18n.locale.toUpperCase() }}</button>
</template>

<script>
export default {
	name: 'LanguageSwitcher',
	methods: {
		toggle() {
			this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en'
			localStorage.setItem('locale', this.$i18n.locale)
		},
	},
}
</script>

<style>
.switcher {
	padding: 10px;
	color: var(--color-5);
	background-color: var(--color-2);
	font-size: 20px;
	border: none;
	position: fixed;
	right: 25px;
	top: 25px;
	z-index: 11;
	border-radius: 10px;
	cursor: pointer;
}
</style>
