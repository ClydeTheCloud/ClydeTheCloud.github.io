<template>
	<div class="switch">
		<input @click="toggle" type="checkbox" id="language-switch" v-model="engLang" class="switch-input" />
		<label for="language-switch" class="switch-label">
			<div class="knob"></div>
			<div class="eng">ENG</div>
			<div class="rus">RUS</div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'LanguageSwitcher',
	data() {
		return {
			engLang: this.$i18n.locale === 'en',
		}
	},
	methods: {
		toggle() {
			this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en'
			localStorage.setItem('locale', this.$i18n.locale)
		},
	},
}
</script>

<style scoped>
input[type='checkbox'] {
	display: none;
}

.switch {
	z-index: 11;
	position: fixed;
	right: 25px;
	top: 25px;
	user-select: none;
}

.switch-label {
	position: relative;
	display: block;
	width: 80px;
	height: 40px;
	background-color: var(--color-2);
	cursor: pointer;
	border-radius: 10px;
	transition: 0.4s ease background-color;
}

.knob {
	position: relative;
	top: 5px;
	left: 5px;
	background-color: var(--color-5);
	width: 30px;
	height: 30px;
	border-radius: 999px;
	transition: 0.4s ease left;
}

.eng,
.rus {
	font-size: 0.85em;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

.eng {
	transform: translateY(-50%) translateX(25%);
	left: 0;
}

.rus {
	transform: translateY(-50%) translateX(-25%);
	right: 0;
}

#language-switch:checked + .switch-label .knob {
	left: 45px;
}

#language-switch:checked + .switch-label {
	background-color: var(--color-1);
}

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
