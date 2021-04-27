<template>
	<header :class="{ minimized: isMinimized() }">
		<h1 class="hidden">{{ $t('hiddenHeader') }}</h1>
		<div class="title-container">
			<p class="header-title left">
				{{ $t('firstName') }}
			</p>
		</div>
		<div class="container header-wrapper">
			<img class="header-logo" src="../assets/logo.svg" alt="Logo" />

			<div :class="{ 'sidemenu-wrapper__open': this.isSideMenuOpen }" class="sidemenu-wrapper">
				<nav class="header-links">
					<router-link
						@click="this.isSideMenuOpen = false"
						to="/"
						class="header-link-item"
						:class="{ 'header-link-active': isActive('/') }"
						>{{ $t('nav.about') }}
					</router-link>

					<router-link
						@click="this.isSideMenuOpen = false"
						to="/projects"
						class="header-link-item"
						:class="{ 'header-link-active': isActive('/projects') }"
						>{{ $t('nav.projects') }}</router-link
					>

					<router-link
						@click="this.isSideMenuOpen = false"
						to="/contact"
						class="header-link-item"
						:class="{ 'header-link-active': isActive('/contact') }"
						>{{ $t('nav.contact') }}</router-link
					>
				</nav>
				<LanguageSwitcher />
			</div>
			<div
				@click="this.isSideMenuOpen = false"
				:class="{ 'sidemenu-close-on-click__open': this.isSideMenuOpen }"
				class="sidemenu-close-on-click"
			></div>
		</div>
		<div class="title-container">
			<p class="header-title right">
				{{ $t('lastName') }}
			</p>
		</div>
		<button @click="toggleSideMenu" :class="{ 'menu-button__open': this.isSideMenuOpen }" class="menu-button">
			<div class="burger-slice"></div>
			<div class="burger-slice"></div>
			<div class="burger-slice"></div>
		</button>
	</header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'

export default {
	name: 'Header',
	methods: {
		isActive(route) {
			return route === this.$route.path
		},
		isMinimized() {
			return this.$route.path !== '/'
		},
		toggleSideMenu() {
			this.isSideMenuOpen = !this.isSideMenuOpen
		},
	},
	data() {
		return {
			// for mobile layout
			isSideMenuOpen: false,
		}
	},
	components: {
		LanguageSwitcher,
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
		},
		"hiddenHeader": "I'm a junior web developer looking for work."
	},
	"ru": {
		"firstName": "Александр",
		"lastName": "Дьяков",
		"nav": {
			"about": "Подробнее",
			"projects": "Проекты",
			"contact": "Контакты",
		},
		"hiddenHeader": "Я начинающий веб-разработчик, в поисках работы."
	}
}

</i18n>

<style>
header {
	--header-apropriate-height: 800px;
	--header-height: max(100vh, var(--header-apropriate-height));
	z-index: 10;
	position: sticky;
	top: calc(100px - var(--header-height));
	background-color: var(--color-4);
	color: var(--color-1);
	height: var(--header-height);
	font-weight: bold;
	font-size: 1.5em;
}

header.minimized {
	top: 0;
	height: 100px;
}

header,
.title-container {
	transition: all 0.3s ease-in-out;
}

header.minimized .title-container {
	position: absolute;
	top: -9999px;
	opacity: 0;
	height: 0;
	width: 0;
	transform: scale(0, 0);
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

.header-link-item:hover,
.header-link-item:focus {
	background-color: var(--color-3);
	top: -12.5px;
	height: 100px;
}

.header-link-item:focus {
	outline: none;
}

.header-link-active {
	border-bottom: 5px solid var(--color-2);
}

.header-logo {
	width: calc(var(--header-apropriate-height) / 4);
	transition: all ease-in-out 0.2s;
}

.header-logo:hover {
	animation-name: blink;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
	animation-duration: 0.2s;
	animation-iteration-count: 2;
	animation-delay: 0.1s;
}

.menu-button {
	display: none;
}

.sidemenu-close-on-click {
	display: none;
}

@keyframes blink {
	from {
		transform: scaleY(100%);
	}
	to {
		transform: scaleY(0);
	}
}
@media (max-width: 1366px) {
	header {
		--header-apropriate-height: 650px;
		font-size: 1.25em;
	}

	.header-title {
		font-size: 5em;
	}
}

@media (max-width: 768px) {
	.header-title {
		font-size: 4em;
	}

	.header-link-item {
		padding: 10px 15px;
		font-size: 0.75em;
	}

	.header-logo {
		width: calc(var(--header-apropriate-height) / 5);
	}
}

@media (max-width: 576px) {
	header {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: initial;
	}

	header.minimized {
		height: 0;
	}

	header.minimized .header-logo {
		display: none;
	}

	.header-logo {
		width: 200px;
	}

	.header-title {
		font-size: 2.95em;
	}

	.header-wrapper {
		position: initial;
	}

	.header-links {
		height: 150px;
		flex-direction: column;
		align-items: center;
	}

	.header-link-item {
		width: 80%;
	}

	.header-link-item:hover,
	.header-link-item:focus {
		top: 0;
		height: initial;
	}

	.menu-button {
		z-index: 20;
		position: fixed;
		top: 15px;
		left: 15px;
		display: flex;
		width: 35px;
		height: 35px;
		padding: 5px;
		flex-direction: column;
		justify-content: space-between;
		border: none;
		border-radius: 5px;
		opacity: 0.8;
		background-color: var(--color-3);
	}

	.burger-slice {
		background-color: var(--color-2);
		height: 5px;
		width: 100%;
	}

	.menu-button__open .burger-slice {
		position: absolute;
		top: 50%;
		left: 50%;
	}

	.menu-button__open .burger-slice:nth-child(1) {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.menu-button__open .burger-slice:nth-child(2) {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	.menu-button__open .burger-slice:nth-child(3) {
		opacity: 0;
	}

	.sidemenu-wrapper {
		z-index: 15;
		position: fixed;
		top: 0;
		left: -200px;
		height: 100vh;
		width: 200px;
		background-color: var(--color-4);
		padding-top: 100px;
		transition: all 0.2s;
		border-right: solid 5px var(--color-1);
	}

	.sidemenu-close-on-click {
		display: block;
		z-index: 15;
		position: fixed;
		top: 0;
		right: 100vw;
		height: 100vh;
		width: calc(100vw - 200px);
		transition: all 0.2s;
	}

	.sidemenu-wrapper__open {
		left: 0;
	}

	.sidemenu-close-on-click__open {
		right: 0;
	}

	.header-wrapper {
		justify-content: center;
	}
}

@media (max-width: 360px) {
	.header-title {
		font-size: 2em;
	}
}
</style>
