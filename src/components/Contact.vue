<template>
	<section class="container">
		<h2 class="hidden">{{ $t('hidden-title') }}</h2>
		<div class="contact-block">
			<h3 class="section-title">
				{{ $t('title') }}
			</h3>
			<form>
				<!-- TODO add jsmail -->
				<label>
					{{ $t('form.name') }} <br />
					<input type="text" />
				</label>
				<label>
					{{ $t('form.email') }} <br />
					<input type="email" />
				</label>
				<label>
					{{ $t('form.message') }} <br />
					<textarea></textarea>
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
		"social-media": "Or get in touch on social media:"
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
		"direct": "Свяжитесь напрямую",
		"social-media": "Или через социальные сети:"
	}
}
</i18n>

<style>
form {
	margin: 0 auto;
	padding: 50px;
	max-width: 600px;
	background-color: var(--color-2);
	color: var(--color-5);
	border-radius: 25px;
	font-weight: bold;
	font-size: 1.5em;
}

input,
textarea {
	display: block;
	width: 100%;
	margin: 0.5em 0;
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
	width: 5em;
	font-size: 2rem;
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
</style>
