<template>
    <div class="design-main">
        <header>
            <div class="dfl">
                <i class="crown"></i>
                <span>人气设计</span>
            </div>
            <div class="dfr">
                <router-link :to="''">
                    <span>more</span>
                    <i class="more"></i>
                </router-link>
            </div>
        </header>
        <ul class="designList">
            <li v-for="(obj, idx) in list" :key="idx">
                <router-link :to="''">
                    <img :src="obj.url" alt="">
                    <p>{{obj.text}}</p>
                    <span>￥{{obj.price}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import './design.scss';
export default {
    data(){
        return{
            list:[
                {path:'', text:'粉色心情手链', price:'2292', url:'src/img/test_1.png'},
                {path:'', text:'粉色心情手链', price:'2292', url:'src/img/test_1.png'},
                {path:'', text:'粉色心情手链', price:'2292', url:'src/img/test_1.png'},
                {path:'', text:'粉色心情手链', price:'2292', url:'src/img/test_1.png'},
                {path:'', text:'粉色心情手链', price:'2292', url:'src/img/test_1.png'},
            ]
        }
    }
}
</script>
