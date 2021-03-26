import { createRouter, createWebHashHistory } from 'vue-router'
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
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 }
	},
})

export default router
