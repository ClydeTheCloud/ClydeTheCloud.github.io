<template>
	<div class="link-item">
		<img src="../assets/icons/github.svg" alt="github" />
		<p>{{ description[this.$i18n.locale] }}</p>
	</div>
</template>

<script>
export default {
	name: 'CardLinkGithub',
	props: ['description'],
}
</script>
