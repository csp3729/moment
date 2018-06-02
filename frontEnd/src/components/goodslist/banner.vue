<template>
    <slider :pages="pages" :sliderinit="sliderinit"  @slide='slide' @tap='onTap' @init='onInit'>
        <!-- 设置loading,可自定义 -->
        <div slot="loading">loading...</div>
    </slider>
</template>

<script>
import slider from 'vue-concise-slider';

let list = [
    {
        title:'',
        //html: '<img src="src/img/banner1.jpg"/>',
        style:{
            background:'url(src/img/banner1.jpg)',
            width: '100%',
            height: '244px'
        }
    },
    {
        title:'',
        //html: '<img src="src/img/banner2.jpg"/>',
        style:{
            background:'url(src/img/banner2.jpg)',
            width: '100%',
            height: '244px'
        }
    },
    {
        title:'',
        //html: '<img src="src/img/banner3.jpg"/>',
        style:{
            background:'url(src/img/banner3.jpg)',
            width: '100%',
            height: '244px'
        }
    },
]

export default {
    data(){
        return{
            //图片列表[arr]
            pages: list,
            sliderinit: {
                currentPage: 0,//当前页码
                // thresholdDistance: 100,//滑动判定距离
                // thresholdTime: 200,//滑动判定时间
                autoplay:2000,//自动轮播间隔[ms]
                loop:true,//循环滚动
                direction:'horizontal',//方向设置，垂直滚动
                infinite:1,//无限滚动前后遍历数
                slidesToScroll:1,//每次滑动项数
                timingFunction: 'ease',
                duration: 300
            }
        }
    },
    components:{
        slider
    },
    methods: {
        // Listener event
        slide (data) {
            // console.log(this)
        },
        onTap (data) {
            // console.log(this)
        },
        onInit (data) {
            // console.log(this)
        }

    }
}
</script>
