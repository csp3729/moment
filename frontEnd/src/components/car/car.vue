<template>
    <div class="car">
        <div class="header">
            <i></i>
            <h3>购物车</h3>
            <!-- <span>编辑</span> -->
        </div>
        <div class="carList">
            <ul>
                <li v-for="(obj, idx) in $store.state.car.datalist" :key="idx">
                    <div class="dvleft">
                        <span :class="{check: select.indexOf(obj.goods_id) > -1}"  @click="setSelect(obj.goods_id)"></span>
                    </div>
                    <div class="dvcenter">
                        <img :src="`src/${obj.imgurl}`" alt="">
                    </div>
                    <div class="dvright">
                        <h3><router-link :to="''">{{obj.title}}</router-link></h3>
                        <p>{{obj.miaoShu}}</p>
                        <div>
                            <div>
                                <span class="price">￥{{obj.price*obj.qty}}</span>
                            </div>
                            <div class="goodsQty" @click="setQty(obj.goods_id, obj.qty, $event)">
                                <i class="red">-</i>
                                <span>{{obj.qty}}</span>
                                <i class="add">+</i>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <ul class="carMenus">
                <li>
                    <div class="select">
                        <span :class="{check: $store.state.car.datalist.length == select.length }" @click="setSelect('all')"></span>全选
                    </div>
                </li>
                <li>
                    <div class="calculate">合计:￥{{calculateTotal()}}</div>
                </li>
                <li>
                    <div class="btn close" @click="goodsClose">结算</div>
                </li>
                <li>
                    <div class="btn del" @click="delGoods(select)">删除</div>
                </li>
            </ul>
        </div>
        <div class="shade" v-if="del == 'show'">
            <div class="hint">
                <p>您确定要删除商品吗？</p>
                <div class="btn" @click="verify">
                    <span>确定</span>
                    <span>取消</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './car.scss';
import http from '../../utils/httpclient.js';
import router from '../../router/router.js';

export default {
    data(){
        return{
            select: [],
            del: 'hide',
            goods_id: [],
        }
    },
    components:{

    },
    methods:{
        getList(){
            this.$store.dispatch('getList', {username:'haha'})
        },

        verify(e){
            let target = e.target.innerText;
            if(target == '确定'){
                http.get('deleteCarGoods',{username:'haha', goods_id:this.goods_id}).then((res) => {
                    if(res.status){
                        this.del = 'hide';
                        this.getList();
                    }
                })
            }
            if(target == '取消'){
                this.del = 'hide';
            }
        },

        setSelect(par){
            if(par == 'all'){
                if(this.select.length == this.$store.state.car.datalist.length){
                    this.select = []
                } else {
                    this.select = [];
                    this.select = this.$store.state.car.datalist.map((item) => { 
                        return item.goods_id
                    })
                }
            } else {
                if(this.select.indexOf(par) < 0){
                    this.select.push(par)
                } else {
                    this.select.splice(this.select.indexOf(par), 1);
                }
            }
        },

        setQty(id, qty, e){
            let tarName = e.target.className
            let data;
            if(tarName == 'red'){
                if(qty - 1 < 1){
                    this.goods_id = [id];
                    this.del = 'show';
                    return
                }
                data = {username:'haha', goods_id: id, qty: qty*1-1}
            }
            if(tarName == 'add'){
                data = {username:'haha', goods_id: id, qty: qty*1+1}
            }
            http.get('updatecarlist', data).then((res) => {
                if(res.status){
                    this.getList()
                }
            })
        },

        calculateTotal(){
            let total = 0;
            this.select.forEach((item) => {
                this.$store.state.car.datalist.forEach((key) => {
                    if(key.goods_id == item){
                        total += key.price*key.qty
                    }
                })
            })
            return total
        },

        goodsClose(){
            let dataList = this.$store.state.car.datalist;
            let goodsList = [];
            goodsList = this.select.map((item) => {
                for(var i=0;i<dataList.length;i++){
                    if(dataList[i].goods_id == item){
                        dataList[i].status = '待付款';
                        return dataList[i]
                    }
                }
            })
            this.$store.dispatch('setOrder', goodsList);
            router.push({name: 'YnOrder'})
        },

        delGoods(id){
            let username = 'haha';
            let goods_id = id;
            http.get('deleteCarGoods',{username, goods_id}).then((res) => {
                if(res.status){
                    this.getList()
                }
            })
        }
    },

    mounted(){
        this.getList();
        this.$store.dispatch('setActive','car')
    }
}
</script>
