<template>
    <div id="d-project">
        <header id="d-header">
            <h2><i></i>串饰</h2>
            <div class="banner">
                <banner />
            </div>
        </header>
        <nav id="d-nav">
            <ul class="tab">
                <li>全部</li>
                <li>925银</li>
                <li>黄金</li>
                <li>调色</li>

            </ul>
        </nav>
        <main id="d-main">
            <ul class="tab">
                <li v-for = "(value,index) in arr" :key="index" :id="value.id" @click="buy">
                    <a href="#">
                        <img v-lazy="`src/${value.imgurl}`"/>
                        <p class="name">{{value.title}}</p>
                        <p class="kind">{{value.kuanShi}}</p>
                        <div class="price">
                            <span class="one">￥{{value.price}}</span>
                            <span class="two">{{value.shouCang}}</span>
                        </div>
                    </a>
                </li>
                
            </ul>
        </main>
        
        <menus />
    </div>
    
</template>

<script>
    import './goodslist.scss';
    import menus from '../menu/menu.vue';
    import banner from './banner.vue'
    import superagent from 'superagent';
    export default {
        data(){
            return {
                arr:[]
            }
        },
        components:{
            menus,
            banner
        },
        mounted(){
            superagent.get('http://10.3.133.21:8081/pbahome').end((err,res)=>{
                this.arr = res.body.data;
            });
            this.$store.dispatch('setActive','goodslist')
        },
        methods:{
            buy(e){
                if(e.target.tagName.toLowerCase() == 'img'){
                    var id = e.target.parentNode.parentNode.getAttribute('id');
                    console.log(id);
                    this.$router.push({name:'details',params:{goodsid:id}});
                }
            }
        }
    }
</script>