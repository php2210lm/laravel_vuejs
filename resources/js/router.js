import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import About from './components/About.vue';
const my_routes = [
    {path: '/', component: Home},
    {path: '/about', component: About}
];

export default createRouter({
    history: createWebHistory(),
    routes: my_routes
})