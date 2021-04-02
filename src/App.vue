<template>
	<Header />
	<LanguageSwitcher />
	<router-view v-slot="{ Component }">
		<transition name="slide" mode="out-in">
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<script>
import Header from './components/Header'
import LanguageSwitcher from './components/LanguageSwitcher'

export default {
	name: 'App',
	components: {
		Header,
		LanguageSwitcher,
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Noto Sans', sans-serif;
	--color-1: #fa5a5a;
	--color-2: #855ca8;
	--color-3: #1f2833;
	--color-4: #0b0c10;
	--color-5: #ffffff;
	background-color: var(--color-3);
	color: var(--color-5);
	overflow-x: hidden;
}

a {
	color: inherit;
}

.container {
	width: 1000px;
	margin: 0 auto;
	padding: 0 2em;
}

.hidden {
	visibility: hidden;
	position: absolute;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
}

.section-title {
	margin: 6rem 0;
	text-align: center;
	font-weight: bold;
	font-size: 3em;
}

.error {
	text-align: center;
	background-color: red;
	color: white;
	padding: 1em;
	font-size: 2rem;
	border-radius: 25px;
}

/* Transition animation */
.slide-enter-from {
	opacity: 0;
	transform: translateX(50px);
}

.slide-enter-active {
	transition: all 0.4s ease-out;
}

.slide-leave-to {
	opacity: 0;
	transform: translateX(-50px);
}

.slide-leave-active {
	transition: all 0.4s ease-in;
}

/* Media Queries*/

@media (max-width: 1366px) {
	.container {
		width: 750px;
	}

	.error {
		font-size: 1.75rem;
	}
}

@media (max-width: 768px) {
	.container {
		width: 90%;
		padding: 0 1.25em;
	}

	.section-title {
		margin: 5rem 0;
		font-size: 2.5em;
	}

	.error {
		padding: 0.75em;
		font-size: 1.5rem;
	}
}

@media (max-width: 576px) {
	.container {
		padding: 0 1em;
	}

	.section-title {
		margin: 4rem 0;
		font-size: 2em;
	}

	.error {
		font-size: 1rem;
	}
}

@media (max-width: 360px) {
	.container {
		padding: 0 0.75em;
		width: 300px;
	}

	.section-title {
		margin: 2rem 0;
		font-size: 1.5em;
	}
}
/* @media (max-width: 1366px) {}
@media (max-width: 768px) {}
@media (max-width: 576px) {}
@media (max-width: 360px) {} */
</style>
