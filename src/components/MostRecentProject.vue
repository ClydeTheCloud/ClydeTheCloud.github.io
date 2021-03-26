<template>
	<section>
		<div class="container">
			<h3 class="section-title">{{ $t('title') }}</h3>
			<ProjectCard :title="title[this.$i18n.locale]" :img="img" :description="description[this.$i18n.locale]" :links="links" />
		</div>
	</section>
</template>

<script>
import ProjectCard from './ProjectCard'
export default {
	name: 'MostRecentProject',
	data() {
		return {
			title: {
				ru: 'Название',
				en: 'Title',
			},
			img: 'https://clydethecloud.github.io/img/undertool-preview.png',
			description: { ru: 'Описание проекта на русском языке', en: 'English description of a project' },
			links: [
				{
					url: 'https://clydethecloud.github.io/',
					type: 'github',
					description: {
						ru: 'Репозиторий',
						en: 'GitHub',
					},
				},
				{
					url: 'https://clydethecloud.github.io/',
					type: 'site',
					description: {
						ru: 'Сайт',
						en: 'Site',
					},
				},
				{
					url: 'https://clydethecloud.github.io/',
					type: 'site',
					description: {
						ru: 'Сайт',
						en: 'Site',
					},
				},
			],
		}
	},
	components: {
		ProjectCard,
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
