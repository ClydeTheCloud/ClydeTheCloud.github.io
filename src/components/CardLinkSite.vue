<template>
	<div class="link-item">
		<img src="../assets/icons/site.svg" alt="site" />
		<p>{{ description }}</p>
	</div>
</template>

<script>
export default {
	name: 'CardLinkSite',
	props: ['description'],
}
</script>
