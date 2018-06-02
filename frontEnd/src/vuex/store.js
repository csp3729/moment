import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from '../components/menu/menu';
import car from '../components/car/car'

const store = new Vuex.Store({
    modules: {
        menu,
        car,
    }
})

export default store;