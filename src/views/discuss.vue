<template>
    <div class="discuss-container">
        <div class="banner">
            <div class="banner-back">
                <div class="back"></div>
            </div>
            <div class=" pot pot1"></div>
            <div class=" pot pot2"></div>
        </div>
        <div class="lastD"></div>
        <div class="discuss-content">
            <div class="im im1"></div>
            <div class="im im2"></div>
            <div class="im im3"></div>
            <div class="im im4"></div>
            <div class="im im5"></div>
            <topic-d v-for = "(item,index) in $store.state.senT"
                     :key="'_' + index"
                     :sentence="item.a" :imgUrl="item.b"/>
            <topic-y v-for = "(item,index) in $store.state.youSen"
                     :key="index.a"
                     :sentence="item.a" :imgUrl="item.b"/>
        </div>
        <div class="submit-container" :style="{'margin-top':num + 'px'}">
            <textarea class="text-place" v-model="text">一起讨论吧～</textarea>
            <div class="my-bottom" @click="mySumbit"></div>
        </div>
    </div>
</template>

<script>
    import topicD from '../components/topic-d'
    import topicY from '../components/topic-y'

    export default {
        name: "discuss",
        components:{
            topicD,
            topicY
        },
        data(){
            return{
                text:'',
                num:'0'
            }
        },
        methods:{
            mySumbit(){
                this.$store.commit('addDiscuss',this.text);
                this.num +=120
            }
        }
    }
</script>

<style scoped lang="less">
@import "../assets/css/discuss.less";
</style>