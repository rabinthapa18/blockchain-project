import { createRouter, createWebHistory } from 'vue-router';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import { getCookie } from "./utils.js";


const routes = [
    { path: "/signup", component: Signup, name: 'signup' },
    { path: "/login", component: Login, name: 'login' },
    { path: "/dashboard", component: Dashboard, name: 'dashboard' }
];

let router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    let token = getCookie('access_token');
    console.log(to.path, from.path, token);
    if (token || (to.path === '/login' || to.path === '/signup')) {
        console.log('next');
        next();
    } else {
        console.log('redirect');
        next('/login');
    }
})


export default router;
