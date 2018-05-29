<template>
    <div class="recommend">
        <div class="recommendHead">
            <div class="dfl">
                <i class="crown"></i>
                <span>热门推荐</span>
            </div>
            <div class="dfr">
                <router-link :to="''">
                    <span>more</span>
                    <i class="more"></i>
                </router-link>
            </div>
        </div>
        <ul class="list">
            <li v-for="(obj, idx) in list" :key="idx" :id="obj.id">
                <router-link :to="''">
                    <img :src="obj.url" alt="">
                    <div class="con">
                        <h4>{{obj.text}}</h4>
                        <p>{{obj.describe}}</p>
                        <div class="flex">
                            <span>￥{{obj.price}}</span>
                            <span><i></i>{{obj.enshrine}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
import './recommend.scss';
export default {
    data(){
        return{
            list:[
                {id:'1', text: '典雅之美珍珠戒指', describe: '925银', price:'798', enshrine: '823', url: 'src/img/AB34889.jpg'},
                {id:'2', text: '独特雪花手镯', describe: '925银', price:'798', enshrine: '934', url: 'src/img/AB36581.jpg'},
                {id:'3', text: '四叶幸运草手链', describe: '18k黄金', price:'4899', enshrine: '723', url: 'src/img/AB36582.jpg'},
                {id:'4', text: '心形丝带戒指', describe: '925银', price:'498', enshrine: '41', url: 'src/img/AB37485.jpg'},
            ]
        }
    }
}
</script>
