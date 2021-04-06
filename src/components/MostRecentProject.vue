<template>
	<section>
		<div class="container">
			<h3 class="section-title">{{ $t('title') }}</h3>
			<div v-if="errorMessage" class="notification error">
				<h4>{{ errorMessage }}</h4>
			</div>
			<ProjectCard v-if="isLoading" skeleton="{{true}}" />
			<ProjectCard
				v-else
				:description="project.description"
				:title="project.title"
				:img="'http://localhost:1337' + project.img.url"
				:links="project.links"
			/>
		</div>
	</section>
</template>

<script>
import ProjectCard from './ProjectCard'
export default {
	name: 'MostRecentProject',
	data() {
		return {
			project: null,
			isLoading: true,
			errorMessage: null,
		}
	},
	components: {
		ProjectCard,
	},
	async mounted() {
		try {
			const res = await fetch('http://localhost:1337/projects?_sort=id:DESC&_limit=1')
			const data = await res.json()
			this.project = data[0]
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
		"title": "Most Recent Project",
	},
	"ru": {
		"title": "Предыдущий проект",

	}
}
</i18n>
