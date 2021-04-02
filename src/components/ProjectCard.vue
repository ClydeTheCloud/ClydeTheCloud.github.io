<template>
	<div class="card-wrapper">
		<div v-if="skeleton" class="card">
			<div class="skeleton">
				<div class="description">
					<div class="p placeholder"></div>
					<div class="p placeholder"></div>
					<div class="p placeholder"></div>
					<div class="p placeholder"></div>
				</div>
				<div class="links">
					<div class="link placeholder"></div>
					<div class="link placeholder"></div>
					<div class="link placeholder"></div>
				</div>
				<div class="loading-anim"></div>
			</div>
		</div>
		<div v-else class="card">
			<img :src="img" class="site-preview" :alt="`${title[this.$i18n.locale]} screenshot`" />
			<div class="overlay"></div>
			<div class="tap"><img src="../assets/icons/tap.svg" alt="Tap icon" /></div>
			<div class="sidebar"></div>
			<div class="description">
				<p>{{ description[this.$i18n.locale] }}</p>
			</div>
			<div class="links">
				<a v-for="(link, index) in links" :key="index" :href="link.url">
					<component :is="link.type" :description="link.description" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import CardLinkSite from './CardLinkSite'
import CardLinkGithub from './CardLinkGithub'

export default {
	name: 'ProjectCard',
	props: ['title', 'img', 'description', 'links', 'skeleton'],
	components: {
		github: CardLinkGithub,
		site: CardLinkSite,
	},
}
</script>

<style>
.card-wrapper {
	max-width: calc(600px + 2rem);
	margin: 6rem auto;
	padding: 2rem;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(to bottom right, var(--color-1), var(--color-2));
}

.card {
	background: linear-gradient(to bottom right, var(--color-1), var(--color-2));
	border-radius: 15px;
	position: relative;
	width: 600px;
	overflow: hidden;
}

.site-preview {
	z-index: 1;
	position: relative;
	right: 0;
	top: 0;
	width: 100%;
	height: auto;
	transition: ease-in-out 0.8s;
	transform-origin: top;
	transform: scale(1.03);
}

.card .sidebar {
	z-index: 3;
	position: absolute;
	width: 500px;
	height: 220%;
	top: -20px;
	right: -500px;
	background-color: var(--color-3);
	transition: ease-in-out 0.8s;
}

.card .tap {
	display: none;
}

.card .overlay {
	z-index: 2;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0);
	transition: ease-in-out 0.8s;
}

.card:hover .overlay,
.card:focus-within .overlay {
	background-color: rgba(0, 0, 0, 0.7);
}

.card:hover .sidebar,
.card:focus-within .sidebar {
	transform: rotate(15deg);
	right: -200px;
}

.card:hover .site-preview,
.card:focus-within .site-preview {
	right: 100px;
}

.card .description {
	color: var(--color-5);
	text-align: center;
	display: flex;
	place-items: center;
	z-index: 4;
	position: absolute;
	height: 100%;
	width: 200px;
	right: -200px;
	top: 0;
	padding: 5rem 1rem;
	transition: ease-in 0.6s;
	font-weight: 600;
}

.card:hover .description,
.card:focus-within .description,
.skeleton .description {
	right: 15px;
	transition: ease-in-out 1.2s;
}

.card .links a {
	transition: top ease-in 0.6s;
	position: relative;
	top: -400px;
}

.card .link-item {
	margin-left: 5px;
	display: flex;
	place-items: center;
	background-color: rgba(255, 255, 255, 0.7);
	padding: 0.5rem 1.5rem;
	border-radius: 100px;
	overflow: hidden;
}

.card .link-item:hover,
.card a:focus .link-item {
	background-color: rgba(255, 255, 255, 0.9);
}

.card .link-item > img {
	height: 24px;
	width: auto;
	margin-right: 1rem;
}

.card .link-item > p {
	font-size: 22px;
	/* line-height: 16px; */
	margin: 0;
	font-weight: 600;
	color: var(--color-4);
	width: 100%;
	height: 100%;
	display: inline;
}

.card:hover a:nth-child(1),
.card:focus-within a:nth-child(1) {
	transition: top ease-in-out 0.8s;
	transition-delay: 0.4s;
	top: 0;
}
.card:hover a:nth-child(2),
.card:focus-within a:nth-child(2) {
	transition: top ease-in-out 0.8s;
	transition-delay: 0.2s;
	top: 0;
}
.card:hover a:nth-child(3),
.card:focus-within a:nth-child(3) {
	transition: top ease-in-out 0.8s;
	top: 0;
}

.card .links {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	z-index: 4;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	min-width: 50%;
	max-width: 60%;
}

a,
a:hover {
	text-decoration: none;
}

/* .more {
	z-index: 4;
	padding: 0.75rem;
	position: absolute;
	bottom: 2rem;
	right: -200px;
	border: none;
	background: linear-gradient(to left, var(--color-1), var(--color-2));
	color: var(--color-3);
	border-radius: 100px;
	font-size: 0.75em;
	transition: ease-in 0.6s;
	transform: translateX(50%);
} */

/* .card:hover .more {
	right: 115px;
	transition: ease-in-out 1.2s;
	transition-delay: 0.2s;
} */

/* .card > .tap > img {
	z-index: 5;
	position: absolute;
	visibility: hidden;
	width: 25px;
	height: auto;
	bottom: 1em;
	right: 1em;
} */

.skeleton {
	width: 568px;
	height: 326px;
	background-color: #bbaaff;
}

.skeleton .loading-anim {
	width: 568px;
	height: 326px;
	background: linear-gradient(300deg, rgba(255, 255, 255, 0) 25%, var(--color-5) 50%, rgba(255, 255, 255, 0) 75%);
	animation-name: loading;
	animation-duration: 0.9s;
	animation-direction: normal;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

.skeleton .description {
	flex-direction: column;
	justify-content: space-around;
}

.skeleton .placeholder {
	background-color: #998899;
	border-radius: 15px;
}

.p.placeholder {
	width: 100%;
	height: 1em;
}

.links .placeholder {
	width: 60%;
	height: 2em;
}

@keyframes loading {
	from {
		transform: translateX(-200%);
	}
	to {
		transform: translateX(200%);
	}
}

@media (max-width: 768px) {
	.card-wrapper {
		max-width: calc(500px + 1rem);
		margin: 5rem auto;
		padding: 1rem;
	}

	.card {
		width: 500px;
	}

	.card .sidebar {
		width: 450px;
		right: -450px;
	}

	.card .description {
		width: 180px;
		right: -180px;
		padding: 5rem 1rem;
	}

	.card .link-item {
		padding: 0.35rem 0.75rem;
	}

	.card .link-item > p {
		font-size: 15px;
	}

	.card .tap {
		z-index: 2;
		display: block;
		position: absolute;
		right: 15px;
		bottom: 15px;
		background-color: var(--color-5);
		width: 35px;
		height: 35px;
		border-radius: 999px;
		padding: 7px;
	}

	.card .tap img {
		width: 100%;
		height: 100%;
	}
}

@media (max-width: 576px) {
	.card-wrapper {
		max-width: calc(360px + 1rem);
	}

	.card {
		width: 360px;
	}

	.card .sidebar {
		width: 400px;
		right: -400px;
	}

	.card .description {
		width: 150px;
		right: -150px;
		padding: 4rem 0.75rem;
		font-size: 0.85rem;
	}

	.card:hover .description,
	.card:focus-within .description,
	.skeleton .description {
		right: 5px;
	}

	.card .link-item {
		padding: 0.35rem 0.5rem;
	}

	.card .link-item > img {
		height: 20px;
		margin-right: 0.5rem;
	}

	.card .link-item > p {
		font-size: 13px;
	}
}

@media (max-width: 480px) {
	.card-wrapper {
		max-width: 350px;
		margin: 4rem auto;
		padding: 10px;
	}

	.card {
		width: 340px;
		height: 300px;
	}

	.card .sidebar,
	.card .description {
		padding: 1rem 1rem;
		height: 50%;
		width: 100%;
		top: initial;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.card .site-preview {
		height: 50%;
		/* width: auto; */
		object-fit: cover;
	}

	.card:hover .site-preview,
	.card:focus-within .site-preview {
		right: 0;
	}

	.card:hover .sidebar,
	.card:focus-within .sidebar {
		transform: initial;
		right: 0;
	}

	.card .links {
		top: 0;
		left: 0;
		height: 50%;
		min-width: initial;
		max-width: initial;
		width: 100%;
	}

	.card .tap {
		bottom: calc(50% + 15px);
		transition: all ease-in-out 0.8s;
	}
	.card:hover .tap,
	.card:focus-within .tap {
		bottom: calc(50% - 50px);
	}
}
</style>
