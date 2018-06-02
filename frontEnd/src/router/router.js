import Vue from 'vue';

import VueRouter from 'vue-router';

import homeComponent from '../components/home/home.vue';
import carComponent from '../components/car/car.vue';
import YnOrderComponent from '../components/car/order/order.vue';

import Goodslist from '../components/goodslist/goodslist.vue';
// import Login from '../components/user/login/login.vue';
// import Register from '../components/user/register/register.vue';
import Details from '../components/details/details.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: homeComponent, name: 'home'},
        {path: '/car', component: carComponent, name: 'car'},
        {path: '/car/order', component: YnOrderComponent, name: 'YnOrder'},
        {path:'/goodslist',component:Goodslist,name:"goodslist"},
        // {path:'/login',component:Login,name:"login"},
        // {path:'/register',component:Register,name:"register"},
        {path:'/details/:goodsid',component:Details,name:'details'},
    ]
})

export default router;