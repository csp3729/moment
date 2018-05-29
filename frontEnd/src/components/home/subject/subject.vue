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
    </div>
</template>

<script>
import './subject.scss';
export default {
    data(){

    }
}
</script>
