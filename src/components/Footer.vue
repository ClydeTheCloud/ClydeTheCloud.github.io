<template>
	<footer>
		<div class="container">
			<h3 class="section-title">
				<router-link to="/contact">{{ $t('message') }}</router-link>
			</h3>
			<div>
				<p>{{ $t('name') }}</p>
				<p>2021</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<i18n>
{
	"en": {
		"message": "Send me a message!",
		"name": "Aleksandr Diakov"
	},
	"ru": {
		"message": "Отправить сообщение",
		"name": "Александр Дьяков"
	}
}
</i18n>

<style scoped>
footer {
	margin-top: 6rem;
	background-color: var(--color-4);
	padding: 1rem;
}

a {
	margin: 3rem 0;
	background-color: var(--color-3);
	padding: 2rem;
	border-radius: 2rem;
}

a:hover {
	color: var(--color-2);
}

div > div {
	display: flex;
	justify-content: space-between;
}
</style>
