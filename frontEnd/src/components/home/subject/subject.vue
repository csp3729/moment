<template>
    <div class="subject">
        <div class="subjectHead">
            <div class="dfl">
                <i class="crown"></i>
                <span>专题频道</span>
            </div>
            <div class="dfr">
                <router-link :to="''">
                    <span>more</span>
                    <i class="more"></i>
                </router-link>
            </div>
        </div>
        <div>
            <ul class="entrance">
                <li v-for="(obj, idx) in list" :key="idx">
                    <router-link :to="obj.path">
                        <img :src="obj.url" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import './subject.scss';
export default {
    data(){
        return{
            list:[
                {path:'', text:'', url:'src/img/zoology.png'},
                {path:'', text:'', url:'src/img/marry.png'},
                {path:'', text:'', url:'src/img/royal.fw.png'},
            ]
        }
    }
}
</script>
