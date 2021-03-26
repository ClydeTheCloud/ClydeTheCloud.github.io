<template>
	<section class="container">
		<h3 class="section-title">{{ $t('title') }}</h3>
		<ProjectCard
			v-for="(project, index) in list"
			:key="index"
			:description="project.description[this.$i18n.locale]"
			:title="project.title[this.$i18n.locale]"
			:img="project.img"
			:links="project.links"
		/>
	</section>
</template>

<script>
import ProjectCard from './ProjectCard'
export default {
	name: 'ProjectList',
	components: {
		ProjectCard,
	},
	data() {
		return {
			list: null,
		}
	},
	async mounted() {
		const res = await fetch('https://my-json-server.typicode.com/clydethecloud/portfolio-db-mock/db')
		const data = await res.json()
		this.list = data.data
	},
}
</script>

<i18n>
{
	"en": {
		"title": "My projects:"
	},
	"ru": {
		"title": "Мои проекты:"
	}
}
</i18n>

<style></style>
