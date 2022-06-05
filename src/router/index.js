import { createRouter, createWebHistory } from 'vue-router';

import home from '@/components/v-main'
import department from '@/components/v-department'
import employee from '@/components/v-employee'
import E404 from '@/components/E404'

let routes = [
   {
      path:'/',
      name: 'home',
      component:home
   },
   {
      path:'/home',
      component:home
   },
   {
      path:'/employee',
      name: 'employee',
      component:employee
   },
   {
      path:'/department',
      name: 'department',
      component:department
   },
   {
		name: 'E404',
		path: '/:pathMatch(.*)',
		component: E404,
	},
];

export default createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});