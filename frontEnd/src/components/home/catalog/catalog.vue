<template>
    <ul class="catalog">
        <li v-for="(obj, idx) in catalog" :key="idx">
            <router-link :to="obj.path">
                <img :src="obj.url" alt="">
                <span>{{obj.text}}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
import './catalog.scss';

export default {
    data(){
        return{
            catalog: [
                {path:'', text:'戒指', url:'src/img/catalog/catalog-ring.png'},
                {path:'', text:'手链', url:'src/img/catalog/catalog-braceletA.png'},
                {path:'', text:'手镯', url:'src/img/catalog/catalog-braceletB.png'},
                {path:'', text:'耳环', url:'src/img/catalog/catalog-earrings.png'},
                {path:'', text:'项链', url:'src/img/catalog/catalog-necklace.png'},
                {path:'', text:'胸针', url:'src/img/catalog/catalog-brooch.png'},
                {path:'', text:'串饰', url:'src/img/catalog/catalog-bunch.png'},
                {path:'', text:'坠饰', url:'src/img/catalog/catalog-hanging .png'},
            ]
        }
    }
}
</script>
