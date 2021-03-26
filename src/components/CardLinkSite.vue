<template>
	<div class="link-item">
		<img src="../assets/icons/site.svg" alt="site" />
		<p>{{ description[this.$i18n.locale] }}</p>
	</div>
</template>

<script>
export default {
	name: 'CardLinkSite',
	props: ['description'],
}
</script>
