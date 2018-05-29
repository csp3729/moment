<template>
    <div class="mHome">
        <div class="hBody">
            <hd />
            <main class="mainer">
                <div class="banns">
                    <banns />
                </div>
                <div>
                    <catalog />
                </div>
                <div class="design">
                    <design />
                </div>
                <div>
                    <recommend />
                </div>
                <div>
                    <discount />
                </div>
                <div>
                    <subject />
                </div>
            </main>
        </div>
        <menus />
    </div>
</template>

<script>
import hd from './header/header.vue';
import banns from '../bann/bann.vue';
import catalog from './catalog/catalog.vue';
import design from './design/design.vue';
import recommend from './recommend/recommend.vue';
import discount from './discount/discount.vue';
import subject from './subject/subject.vue';

import menus from '../menu/menu.vue';

import './home.scss';
 
export default {
    data(){
        return{
            
        }
    },
    components:{
        hd,
        banns,
        catalog,
        design,
        recommend,
        discount,
        subject,
        menus,
    },
    methods:{
        
    },
    mounted(){
        this.$store.dispatch('setActive','home')
    }
}
</script>

