import Vue from 'vue';

import VueRouter from 'vue-router';

import homeComponent from '../components/home/home.vue';
import carComponent from '../components/car/car.vue';
import YnOrderComponent from '../components/car/order/order.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: homeComponent, name: 'home'},
        {path: '/car', component: carComponent, name: 'car'},
        {path: '/car/order', component: YnOrderComponent, name: 'YnOrder'}
    ]
})

export default router;