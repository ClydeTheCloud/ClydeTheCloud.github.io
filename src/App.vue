<template>
	<Header />
	<About />
	<MostRecentProject />
	<Experience />
	<Footer />
</template>

<script>
import Header from './components/Header'
import About from './components/About'
import MostRecentProject from './components/MostRecentProject'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default {
	name: 'App',
	components: {
		Header,
		About,
		MostRecentProject,
		Experience,
		Footer,
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
}

.container {
	width: 1000px;
	margin: 0 auto;
	padding: 0 2em;
}

.hidden {
	visibility: hidden;
}
</style>
