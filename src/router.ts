
import { createRouter, createWebHistory } from "vue-router";
import TaskListVue from './components/TaskList.vue';
import SettingPageVue from './components/SettingPage.vue';
import PointStationVue from './components/PointStation.vue';

const routes = [
	{
		path: '/',
		name: 'index',
		component: TaskListVue
	},
	{
		path: '/setting',
		name: 'setting',
		component: SettingPageVue
	},
	{
		path: '/point',
		name: 'point',
		component: PointStationVue
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
