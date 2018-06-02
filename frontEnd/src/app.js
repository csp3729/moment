import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload'
import router from './router/router.js';

import appComponent from './components/app/app.vue';

import store from './vuex/store.js';

Vue.use(VueLazyLoad,{
    loading: require('./assets/loading.gif')
});

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(appComponent)
})