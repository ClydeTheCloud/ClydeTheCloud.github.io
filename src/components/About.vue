<template>
	<section>
		<div class="container">
			<!-- <h1 class="hidden">Aleksandr Diakov - web developer</h1> -->
			<h2 class="section-title">Hello and wellcome!</h2>
			<div class="about-wrapper">
				<img class="photo" src="../assets/avatar.png" alt="My photo" />
				<p class="description">
					Nice seeing you here!<br />
					Let me introduce myself: <br />
					My name is Aleksandr and I am a web developer from Russia. I've been studing fullstack web development since
					October of 2019. I am self-taught and relatively beginner: no commercial experience yet, although I have a few
					projects I've done for myself. I love to discover new web-tech and always eager to learn something new.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'About',
}
</script>

<style>
.section-title {
	margin: 6rem 0;
	text-align: center;
	font-weight: bold;
	font-size: 3em;
}

.photo {
	float: left;
	height: 250px;
	shape-outside: circle(50%);
	margin-right: 2rem;
}

.about-wrapper .description {
	margin-top: 100px;
	font-size: 1.75rem;
}
</style>
