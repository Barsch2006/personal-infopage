import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Index from './Index.vue';

import vuetify from './plugins/vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './assets/base.css';

const routes = [
	/*
	Public Routes
	*/
	{
		path: '/',
		name: 'Homepage',
		component: () => import('./pages/Homepage.vue')
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('./pages/Contact.vue')
	},
	{
		path: '/impressum',
		name: 'Impressum',
		component:() => import('./pages/Impressum.vue')
	},
	{
		path: '/datenschutz',
		name: 'Datenschutz',
		component:() => import('./pages/Datenschutz.vue')
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('./pages/Projects/Projects.vue')
	},
	/*
	Christian Routes
	*/
	{
		path: '/christian/about',
		name: 'ChristianAbout',
		component: () => import('./pages/Christian/About.vue')
	},
	{
		path: '/christian/blog',
		name: 'ChristianBlog',
		component: () => import('./pages/Christian/Blog.vue')
	},
	{
		path: '/christian/',
		name: 'ChristianHomepage',
		component: () => import('./pages/Christian/Home.vue')
	},
	/*
	Heeecker Routes
	*/
	{
		path: '/heeecker/about',
		name: 'HeeeckerAbout',
		component: () => import('./pages/Heeecker/About.vue')
	},
	{
		path: '/heeecker/blog',
		name: 'HeeeckerBlog',
		component: () => import('./pages/Heeecker/Blog.vue')
	},
	{
		path: '/heeecker/',
		name: 'HeeeckerHomepage',
		component: () => import('./pages/Heeecker/Home.vue')
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(Index)
	.use(router)
	.use(vuetify)
	.mount('#app');
