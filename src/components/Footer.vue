<template>
	<footer>
		<div class="container">
			<h3 class="section-title"><router-link>Send me a message!</router-link></h3>
			<div>
				<p>Aleksandr Diakov</p>
				<p>2021</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	created() {
		console.log(this.$language)
		// console.log(this.$i18n.locale)
	},
}
</script>

<style scoped>
footer {
	margin-top: 6rem;
	background-color: var(--color-4);
	padding: 1rem;
}

router-link {
	margin: 3rem 0;
	background-color: var(--color-3);
	padding: 2rem;
	border-radius: 2rem;
}

/* router-link {
	width: 100%;
	height: 100%;
} */

div > div {
	display: flex;
	justify-content: space-between;
}
</style>
