import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from '../components/menu/menu';

const store = new Vuex.Store({
    modules: {
        menu
    }
})

export default store;