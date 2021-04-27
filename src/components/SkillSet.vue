<template>
	<section>
		<div class="container">
			<h3 class="section-title">{{ $t('title') }}</h3>
			<ul class="tags-wrapper">
				<li class="tag" v-for="tag in techList" :key="tag">{{ tag }}</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Experience',
	data() {
		return {
			techList: [
				'HTML',
				'CSS',
				'SCSS',
				'Tailwind',
				'JavaScript',
				'TypeScript',
				'React',
				'React-Redux',
				'Vue',
				'Vuex',
				'Nodejs',
				'Express',
				'MongoDB',
				'Mongoose',
				'Strapi',
			],
		}
	},
}
</script>

<i18n>
{
	"en": {
		"title": "Skill set"
	},
	"ru": {
		"title": "Мои навыки"
	},
}
</i18n>

<style>
.tags-wrapper {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	list-style-type: none;
}

.tag {
	cursor: default;
	margin: 20px 10px;
	background-color: var(--color-4);
	color: var(--color-1);
	font-size: 2.5rem;
	padding: 1rem;
	border-radius: 20px;
	transition: transform ease-in-out 0.2s;
}

.tag:hover {
	transform: translateY(-10px);
	color: var(--color-2);
}

@media (max-width: 768px) {
	.tag {
		font-size: 2rem;
		padding: 0.75rem;
	}
}
@media (max-width: 576px) {
	.tag {
		margin: 10px 10px;
		font-size: 1.25rem;
	}
}
@media (max-width: 360px) {
	.tag {
		margin: 5px 5px;
		font-size: 1.15rem;
	}
}
</style>
