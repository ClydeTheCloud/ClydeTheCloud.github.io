<template>
	<header :class="{ minimized: isMinimized() }">
		<div class="title-container">
			<h2 class="header-title left">
				{{ $t('firstName') }}
			</h2>
		</div>
		<div class="container header-wrapper">
			<img class="header-logo" src="../assets/logo.svg" alt="Logo" />

			<nav class="header-links">
				<router-link to="/" class="header-link-item" :class="{ 'header-link-active': isActive('/') }"
					>{{ $t('nav.about') }}
				</router-link>

				<router-link to="/projects" class="header-link-item" :class="{ 'header-link-active': isActive('/projects') }">{{
					$t('nav.projects')
				}}</router-link>

				<router-link to="/contact" class="header-link-item" :class="{ 'header-link-active': isActive('/contact') }">{{
					$t('nav.contact')
				}}</router-link>
			</nav>
		</div>
		<div class="title-container">
			<h2 class="header-title right">
				{{ $t('lastName') }}
			</h2>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		isActive(route) {
			console.log(route === this.$route.path)
			return route === this.$route.path
		},
		isMinimized() {
			return this.$route.path !== '/'
		},
	},
}
</script>

<i18n>
{
	"en": {
		"firstName": "Aleksandr",
		"lastName": "Diakov",
		"nav": {
			"about": "About me",
			"projects": "Projects",
			"contact": "Contact",
		}
	},
	"ru": {
		"firstName": "Александр",
		"lastName": "Дьяков",
		"nav": {
			"about": "Подробнее",
			"projects": "Проекты",
			"contact": "Контакты",
		}
	}
}

</i18n>

<style>
header {
	z-index: 10;
	position: sticky;
	top: calc(100px - max(100vh, 800px));
	background-color: var(--color-4);
	color: var(--color-1);
	/* min-height: 100vh; */
	height: max(100vh, 800px);
	/* padding-bottom: 100px; */

	font-weight: bold;
	font-size: 1.5em;
}

header.minimized {
	top: 0;
	height: 100px;
}

header.minimized .title-container {
	display: none;
}

.header-title {
	padding: 0.5em 0.25em;
	color: var(--color-5);
	font-size: 6em;
}

.header-title.left {
	text-align-last: left;
}
.header-title.right {
	text-align-last: right;
}

.header-wrapper {
	position: sticky;
	top: 0px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
}

.header-links {
	display: flex;
	justify-content: space-between;
	height: 75px;
}

.header-link-item {
	position: relative;
	display: flex;
	place-items: center;
	padding: 15px 20px;
}

.header-link-item:hover {
	background-color: var(--color-3);
	top: -12.5px;
	height: 100px;
}

.header-link-active {
	border-bottom: 5px solid var(--color-2);
}

.header-logo {
	width: 200px;
	transition: all ease-in-out 0.2s;
}

.header-logo:hover {
	/* width: 100px; */
	/* transform: scaleY(0); */
	animation-name: blink;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
	animation-duration: 0.2s;
	animation-iteration-count: 2;
	animation-delay: 0.1s;
}

@keyframes blink {
	from {
		transform: scaleY(100%);
	}
	to {
		transform: scaleY(0);
	}
}
</style>
