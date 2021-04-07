<template>
	<section class="container">
		<h2 class="hidden">{{ $t('hidden-title') }}</h2>

		<div class="contact-block">
			<h3 class="section-title">
				{{ $t('title') }}
			</h3>
			<div v-if="notification.text" class="notification" :class="notification.status">
				<h4>{{ notification.text }}</h4>
			</div>
			<form @submit.prevent="onSubmit">
				<label>
					{{ $t('form.name') }} <br />
					<p :class="['notification error', { 'error-hidden': isNameInvalid }]">{{ errors.name }}</p>
					<input @input="this.errors.name = ''" type="text" v-model.trim="name" />
				</label>
				<label>
					{{ $t('form.email') }} <br />
					<p :class="['notification error', { 'error-hidden': isEmailInvalid }]">{{ errors.email }}</p>
					<input @input="this.errors.email = ''" type="email" v-model.trim="email" />
				</label>
				<label>
					{{ $t('form.message') }} <br />
					<p :class="['notification error', { 'error-hidden': isMessageInvalid }]">{{ errors.message }}</p>
					<textarea @input="this.errors.message = ''" v-model.trim="message"></textarea>
				</label>
				<button>{{ $t('form.submit') }}</button>
			</form>
		</div>

		<div class="contact-block">
			<h3 class="section-title">
				{{ $t('direct') }}
			</h3>
			<a class="email" href="mailto:artenisfaul@mail.ru">artenisfaul@mail.ru</a>
		</div>

		<div class="contact-block">
			<h3 class="section-title">{{ $t('social-media') }}</h3>
			<div class="contact-links">
				<a href="https://github.com/clydethecloud/" class="contact-link-item">
					<img src="../assets/icons/github.svg" alt="GitHub" />
				</a>
				<a href="https://www.reddit.com/user/d_ke" class="contact-link-item">
					<img src="../assets/icons/reddit.svg" alt="Reddit" />
				</a>
				<a
					href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%B4%D1%8C%D1%8F%D0%BA%D0%BE%D0%B2-8a01b920a/"
					class="contact-link-item"
				>
					<img src="../assets/icons/linkedin.svg" alt="LinkedIn" />
				</a>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ContactComponent',
	data() {
		return {
			name: '',
			email: '',
			message: '',
			errors: {
				name: '',
				email: '',
				message: '',
			},
			notification: {
				text: '',
				status: '',
			},
		}
	},
	methods: {
		async onSubmit() {
			const nameRegex = /^([ \p{L}\\-])+$/giu
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			// validate name input
			if (this.name.length < 2 || this.name.length > 14) {
				this.errors.name = this.$t('errors.name.length')
			} else if (!nameRegex.test(this.name)) {
				console.log(this.name)
				this.errors.name = this.$t('errors.name.characters')
			}
			// validate email input
			else if (!emailRegex.test(this.email)) {
				this.errors.email = this.$t('errors.email')
			}

			// validate message input
			else if (this.message.length < 10) {
				this.errors.message = this.$t('errors.message')
			}

			// return if there's any active errors
			if (this.errors.name || this.errors.email || this.errors.message) {
				return
				// return if the form is empty
			} else if (!this.name || !this.email || !this.message) {
				return
			}

			const res = await fetch(`${this.$API}/contact-form-messages/`, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					name: this.name,
					email: this.email,
					message: this.message,
				}),
			})
			console.log(res)
			if (res.status === 200) {
				this.setNotification(this.$t('notification.success'), 'success')
				this.name = ''
				this.email = ''
				this.message = ''
			} else {
				this.setNotification(`${this.$t('notification.error')}: ${res.status} - ${res.statusText}`, 'error')
				console.log(res.status, res.statusText)
			}
		},
		setNotification(text, status) {
			this.notification = { text, status }
			setTimeout(() => {
				this.notification.status = ''
				this.notification.text = ''
			}, 5000)
		},
	},
	computed: {
		isNameInvalid() {
			return this.errors.name === ''
		},
		isEmailInvalid() {
			return this.errors.email === ''
		},
		isMessageInvalid() {
			return this.errors.message === ''
		},
	},
}
</script>

<i18n>
{
	"en": {
		"hidden-title": "Contact information:",
		"title": "Send me a message!",
		"form": {
			"name":"Name",
			"email":"Email",
			"message":"Message",
			"submit": "Submit"
		},
		"direct": "Contact me directly:",
		"social-media": "Or get in touch on social media:",
		"errors": {
			"name": {
				"length": "Min length 2, max length 14.",
				"characters": "Invalid characters in name. Only letters, spaces and dashes are allowed."
			},
			"email": "Invalid email adress.",
			"message": "10 characters minimum."
		},
		"notification": {
			"success": "Your message was sent successfully.",
			"error": "Something went wrong"
		}
	},
	"ru": {
		"hidden-title": "Контактная информация:",
		"title": "Отправьте мне сообщение!",
		"form": {
			"name":"Имя",
			"email":"Электронная почта",
			"message":"Ваше сообщение",
			"submit": "Отправить"
		},
		"direct": "Свяжитесь напрямую:",
		"social-media": "Или через социальные сети:",
				"errors": {
			"name": {
				"length": "Минимум 2 символа, максимум 14.",
				"characters": "Недопустимое имя. Разрешены только буквы, пробелы и тире."
			},
			"email": "Недопустимый почтовый адресс.",
			"message": "Минимум 10 символов."
		},
		"notification": {
			"success": "Ваше сообщение успешно отправленно.",
			"error": "Что-то пошло не так"
		}
	}
}
</i18n>

<style>
form {
	margin: 0 auto;
	padding: 40px;
	max-width: 600px;
	background-color: var(--color-2);
	color: var(--color-5);
	border-radius: 25px;
	font-weight: bold;
	font-size: 1.35em;
}

input,
textarea {
	display: block;
	width: 100%;
	margin: 0.35em 0;
	padding: 5px;
	font-size: 24px;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
}

textarea {
	resize: none;
	height: 6em;
}

form button {
	display: block;
	padding: 0.5em;
	margin: 0 auto;
	margin-top: 1em;
	min-width: 5em;
	font-size: 1.25em;
	font-weight: bold;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	background-color: var(--color-5);
	color: var(--color-2);
}

form button:hover {
	color: var(--color-2);
}

form .error {
	margin: 1em 0;
	font-size: 1rem;
	padding: 1em;
}

.error-hidden {
	display: none;
}

.email {
	display: block;
	text-align: center;
	font-size: 4rem;
	transition: all 0.2s;
}

.email:hover {
	color: var(--color-2);
}

.contact-links {
	display: flex;
	justify-content: space-between;
	max-width: 350px;
	margin: 6em auto;
}

.contact-links a {
	padding: 1rem;
	border-radius: 15px;
	background-color: var(--color-5);
	width: 5rem;
	height: 5rem;
}

.contact-links a:hover {
	background-color: var(--color-2);
}

.contact-links img {
	width: 3rem;
	height: 3rem;
}

@media (max-width: 768px) {
	form {
		padding: 35px;
		font-size: 1.25em;
	}

	.email {
		font-size: 3rem;
	}
}

@media (max-width: 576px) {
	form {
		padding: 25px;
		font-size: 1em;
	}

	.email {
		font-size: 2rem;
	}

	.contact-links {
		margin: 4em auto;
	}
}

@media (max-width: 360px) {
	.email {
		font-size: 1.5rem;
	}

	.contact-links {
		margin: 3em auto;
	}

	.contact-links a {
		padding: 1rem;
		width: 4rem;
		height: 4rem;
	}

	.contact-links img {
		width: 2rem;
		height: 2rem;
	}
}

/* @media (max-width: 1366px) {}
@media (max-width: 768px) {}
@media (max-width: 576px) {}
@media (max-width: 360px) {} */
</style>
