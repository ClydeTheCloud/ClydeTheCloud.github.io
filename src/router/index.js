import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [
	{
		path: '/',
		name: 'AboutMe',
		component: AboutMe,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition && from.name === undefined) {
			return savedPosition
		}
		// If user goues to home page then scroll back to top immediately (need this for header unrolling animation)
		if (to.path === '/') {
			return { top: 0 }
		}

		return new Promise(resolve => {
			setTimeout(() => {
				resolve({ top: 0 })
			}, 400)
		})
	},
})

router.afterEach(to => {
	document.title = 'Aleksandr Diakov - ' + to.name
})

export default router
