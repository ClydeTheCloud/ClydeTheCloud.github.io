<template>
	<header>
		<div class="title-container">
			<h2 class="header-title left">
				Aleksandr
			</h2>
		</div>
		<div class="container header-wrapper">
			<img class="header-logo" src="../assets/logo.svg" alt="Logo" />

			<nav class="header-links">
				<div class="header-link-item header-link-active"><router-link>About me</router-link></div>
				<div class="header-link-item"><router-link>Projects</router-link></div>
				<div class="header-link-item"><router-link>Contact</router-link></div>
			</nav>
		</div>
		<div class="title-container">
			<h2 class="header-title right">
				Diakov
			</h2>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style>
header {
	z-index: 10;
	position: sticky;
	top: calc(100px - 100vh);
	background-color: var(--color-4);
	color: var(--color-1);
	/* padding: 1em; */
	/* padding-bottom: 0; */
	height: 100vh;

	font-weight: bold;
	font-size: 1.5em;
}

.header-title {
	padding: 0.5em 0.25em;
	color: var(--color-5);
	font-size: 6em;
	/* margin: 10px; */
	/* text-align: center; */
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
	/* transition: all 0.2s; */
}

.header-link-item:hover {
	background-color: var(--color-3);
	top: -12.5px;
	height: 100px;
}

.header-logo {
	/* transform: scaleY(100%); */
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

.header-link-active {
	border-bottom: 5px solid var(--color-2);
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
