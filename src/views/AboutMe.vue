<template>
	<div>
		<About />
		<MostRecentProject />
		<SkillSet />
		<Footer />
	</div>
</template>

<script>
import About from '@/components/About'
import MostRecentProject from '@/components/MostRecentProject'
import SkillSet from '@/components/SkillSet'
import Footer from '@/components/Footer'

export default {
	name: 'AboutMe',
	components: {
		About,
		MostRecentProject,
		SkillSet,
		Footer,
	},
}
</script>
