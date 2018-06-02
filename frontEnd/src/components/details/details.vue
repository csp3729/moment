<template>
    <div class="d-details">
        <header class="d-header">
            <h4 class="title">
                <i @click="back"></i>
                商品信息
            </h4>
        </header>
        <main class="d-main">
            <div class="pic">
                <img :src="`src/${goodObj.imgurl}`"/>
            </div>
            <div class="miaoshu">
                <div class="miaoshu-l">
                    <p class="name">{{goodObj.title}}</p>
                    <p class="color">{{goodObj.kuanShi}}</p>
                </div>
                <div class="miaoshu-r">
                    <p class="price">￥{{goodObj.price}}</p>
                </div>
            </div>
            <div class="sheji">
                <p>设计理念</p>
                <p>提着鱼的可爱小猫,在主人胸前展露出满足的笑容。玫瑰金吊坠造型生动精致,是爱猫一族的陪衬首选。</p>
            </div>
            <div class="ziliao">
                <p>商品资料</p>
                <div class="picc">
                    <div class="pic-l">
                        <img :src="`src/${goodObj.imgurl}`"/>
                    </div>
                    <ul class="pic-r">
                        <li>款号: {{goodObj.moHao}}</li>
                        <li>材质: {{goodObj.chengSe}}</li>
                        <li>重量: {{goodObj.zhongLiang}}</li>
                        <li>尺寸: {{goodObj.chiCun}}</li>
                        <li>描述: {{goodObj.miaoShu}}</li>
                    </ul>
                </div>
            </div>
            <div class="zhanshi">
                <p>产品展示</p>
                <div class="show">
                    <img :src="`src/${goodObj.imgurl}`"/>
                </div>
            </div>
            <div class="baoyang">
                <p>保养说明</p>
                <p class="text">1.避免化学品，避免洗澡时佩戴,避免大量出汗时佩戴</p>
                <p class="text">2.用软布擦拭饰品,睡觉时避免佩戴</p>
            </div>

        </main>

        <footer class="d-footer">
            <ul>
                <li class="config"><i></i></li>
                <li class="config"><i></i></li>
                <li class="btn"><div @click="addToCar">立即购买</div></li>

            </ul>
        </footer>
    </div>
</template>

<script>
    import superagent from 'superagent';
    import './details.scss';
    export default {
        data(){
            return {
                dataId:this.$route.params.goodsid,
                goodObj:{}
            }
        },
        mounted(){
            superagent.post('http://10.3.133.21:8081/listtodetail').set({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }).send({id:this.dataId})
                .end((err,res) => {
                    this.goodObj = res.body.data[0];
                    
                })
        },
        methods:{
            back:function(){
                this.$router.push({name:'goodslist'});
            },
            addToCar:function(){
                var username = "haha";
                var goods_id = this.goodObj.id;
                var qty = this.goodObj.qty;
                var imgurl = this.goodObj.imgurl;
                var title = this.goodObj.title;
                var price = this.goodObj.price;
                var miaoShu = this.goodObj.miaoShu;
                var chiCun = this.goodObj.chiCun;
                superagent.post('http://10.3.133.21:8081/insertnewcarlist').set({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }).send({
                    username:username,
                    goods_id:goods_id,
                    qty:qty,
                    imgurl:imgurl,
                    title:title,
                    price:price,
                    miaoShu:miaoShu,
                    chiCun:chiCun

                })
                .end((err,res) => {
                    console.log(res);
                })
            }
        }
    }
</script>