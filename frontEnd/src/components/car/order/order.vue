<template>
    <div class="YN_Order">
        <div class="header">
            <i></i>
            <h3>确认订单</h3>
        </div>
        <div class="order_site">
           <div class="order_icon">
               <div class="icon"></div>
           </div>
           <div class="order_siteMes">
               <div>
                   <span>收货人：</span>
                   <span>陈宇楠</span>
                   <span class="tel">18122447027</span>
               </div>
               <div>
                   <span>收货地址：</span>
                   <span>广东省 广州市 番禺区 大石街道 植村三路30号菜鸟驿站</span>
               </div>
               <div class="tixing">请确认收货地址！</div>
           </div>
           <div class="order_nav">
               <div class="nav"></div>
           </div>
        </div>
        <div class="OrderList">
            <ul>
                <li v-for="(obj, idx) in $store.state.car.order" :key="idx">
                    <div class="dvleft">
                        <img :src="`src/${obj.imgurl}`" alt="">
                    </div>
                    <div class="dvright">
                        <h3>{{obj.title}}</h3>
                        <p>{{obj.miaoShu}}</p>
                        <div>
                            <div>
                                <span class="price">￥{{obj.price*obj.qty}}</span>
                            </div>
                            <div class="goodsQty">
                                <span>X {{obj.qty}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="order_b">
            <div class="total">合计:￥{{calculateTotal()}}</div>
            <div class="btn" @click="submit">提交订单</div>
        </div>
    </div>
</template>

<script>
import './order.scss';
import http from '../../../utils/httpclient.js';

export default {
    methods:{
        calculateTotal(){
            let total = 0;
            this.$store.state.car.order.forEach((item) => {
                total += item.price*item.qty
            })
            return total
        },

        submit(){
            let goodsList = this.$store.state.car.order;
            let goods_id = goodsList.map((item) => {
                return item.goods_id
            })
            goodsList = JSON.stringify(goodsList)
            http.get('order', {goodsList}).then((res) => {
                if(res.status){
                    let username = 'haha';
                    http.get('deleteCarGoods',{username, goods_id}).then((res) => {
                        if(res.status){
                            this.getList()
                        }
                    })
                }
            })
        }
    },
    mounted(){
        console.log(this.$store.state.car.order)
    }
}
</script>
