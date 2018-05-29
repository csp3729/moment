import Vue from 'vue';

import VueRouter from 'vue-router';

import homeComponent from '../components/home/home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: homeComponent, name: 'home'},
    ]
})

export default router;