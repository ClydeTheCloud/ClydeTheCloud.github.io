<template>
	<section>
		<div class="container">
			<h3 class="section-title">Most Recent Project:</h3>
			<ProjectCard :title="title" :img="img" :description="description" :links="links" />
		</div>
	</section>
</template>

<script>
import ProjectCard from './ProjectCard'
export default {
	name: 'MostRecentProject',
	data() {
		return {
			title: 'Test',
			img: 'https://clydethecloud.github.io/img/undertool-preview.png',
			description:
				'Description about a project I have made, maybe even what stack I used and technology implemented inside said project',
			links: [
				{
					url: 'https://clydethecloud.github.io/',
					type: 'github',
					description: 'Github',
				},
				{
					url: 'https://clydethecloud.github.io/',
					type: 'site',
					description: 'Site',
				},
				{
					url: 'https://clydethecloud.github.io/',
					type: 'site',
					description: 'Site',
				},
			],
		}
	},
	components: {
		ProjectCard,
	},
}
</script>
