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
	position: absolute;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
}

.switch {
	z-index: 11;
	position: fixed;
	right: 25px;
	top: 25px;
	user-select: none;
	color: var(--color-5);
	font-size: 0.95rem;
	border-radius: 10px;
}

.switch:focus-within {
	box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.3);
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

@media (max-width: 1366px) {
	.switch {
		right: 15px;
		top: 15px;
		transform-origin: right top;
		transform: scale(0.8);
	}
}

@media (max-width: 768px) {
	.switch {
		right: 10px;
		top: 10px;
	}
}

@media (max-width: 576px) {
	.switch {
		position: absolute;
		top: initial;
		right: initial;
		left: 50%;
		bottom: 25%;
		transform: translateX(-50%);
	}
}
</style>
