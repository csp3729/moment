<template>
    <ul class="menus" @click="setActive">
        <li v-for="(obj, index) in menus" :key="index" :class="{active: obj.class == $store.state.menu.active}">
            <router-link :to="obj.path">
                <i :class="obj.icon"></i>
                <span>{{obj.text}}</span> 
            </router-link>
        </li>
    </ul>
</template>

<script>
import './menu.scss';

export default {
    data(){
        return{
            menus:[
                {path: '/', text: '首页', icon: 'homeicon', class: 'home'},
                {path: '/goodslist', text: '分类', icon: 'divicon', class: 'goodslist'},
                {path: '/car', text: '购物车', icon: 'caricon', class: 'car'},
                {path: '/', text: '我的', icon: 'myicon', class: 'my'},
            ]
        }
    },
    methods:{
        setActive(e){
            // console.log(e.target)
        }
    },
    mounted(){
        // console.log(this.$store.state.user.data)
    }

}
</script>
