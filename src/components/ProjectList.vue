<template>
	<section class="container">
		<h2 class="section-title">{{ $t('title') }}</h2>
		<div v-if="errorMessage" class="notification error">
			<p>{{ errorMessage }}</p>
		</div>
		<div class="preject-wrapper" v-if="isLoading">
			<ProjectCard skeleton="{{true}}" />
			<ProjectCard skeleton="{{true}}" />
			<ProjectCard skeleton="{{true}}" />
		</div>
		<div class="preject-wrapper" v-else>
			<ProjectCard
				v-for="(project, index) in list"
				:key="index"
				:description="project.description"
				:title="project.title"
				:img="project.img.url"
				:links="project.links"
			/>
		</div>
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
			isLoading: true,
			errorMessage: null,
		}
	},
	async mounted() {
		try {
			const res = await fetch(`${this.$API}/projects`)
			const data = await res.json()
			this.list = data.reverse()
			this.isLoading = false
		} catch (e) {
			this.errorMessage = this.$t('fetchError')
			console.log('Fetching went wrong')
			console.log(e)
		}
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
