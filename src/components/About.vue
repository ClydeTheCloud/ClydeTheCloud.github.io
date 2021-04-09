<template>
	<section>
		<div class="container">
			<h2 class="section-title">{{ $t('wellcome') }}</h2>
			<div class="about-wrapper">
				<img class="photo" src="../assets/avatar.png" alt="My photo" />
				<p class="description">
					{{ $t('description.part1') }}<br />
					{{ $t('description.part2') }}
					{{ $t('description.part3') }}
					{{ $t('description.part4') }}
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

<i18n>
{
	"en": {
		"wellcome": "Hello and wellcome!",
		"description": {
			"part1": "Nice seeing you here!",
			"part2": "Let me introduce myself:",
			"part3": "My name is Aleksandr and I am a web developer from Russia, Saint Petersburg. I've been studing fullstack web development since October of 2019, though i lean more toward the frontend. I am self-taught and relatively beginner: no commercial experience yet, although I have a few projects I've done for myself. I love to discover new web-tech and always eager to learn something new.",
			"part4": "I am currently available for work, both longterm and freelance. Hit me up if you want to discuss anything!"
		}
	},
	"ru": {
		"wellcome": "Привет и добро пожаловать!",
		"description": {
			"part1": "Рад тебя здесь видеть!",
			"part2": "Позволь представиться:",
			"part3": "Меня зовут Александр и я веб-разработчик из Санкт-Петербурга. Я изучаю fullstack разработку примерно с Октября 2019го года, с уклоном во frontend. Я самоучка и меня можно назвать начинающим: опыта коммерческой разработки у меня пока нет, зато есть несколько личных проектов. Мне нравится открывать для себя новые веб-технологии и я всегда стремлюсь научиться чему-то новому.",
			"part4": "В данный момент я в поиске работы, готов рассмотреть как постоянное трудоустройство, так и подработку. Напишите мне, если хотите что-либо обсудить!"
		}
	}
}
</i18n>

<style>
.photo {
	float: left;
	height: 250px;
	shape-outside: circle(50%);
	margin-right: 2rem;
}

.about-wrapper .description {
	text-align: justify;
	margin-top: 100px;
	font-size: 1.75rem;
}

@media (max-width: 768px) {
	.photo {
		height: 200px;
		margin-right: 1.5rem;
	}
	.about-wrapper .description {
		margin-top: 50px;
		font-size: 1.5rem;
	}
}

@media (max-width: 576px) {
	.photo {
		height: 80px;
		margin-right: 1rem;
	}
	.about-wrapper .description {
		margin-top: 50px;
		font-size: 1.15rem;
	}
}
</style>
