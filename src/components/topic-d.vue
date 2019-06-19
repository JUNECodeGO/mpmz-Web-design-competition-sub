<template>
    <div class="topicD-container">
        <div class="head-pic" >
            <img :src="imgUrl" width="80px" height="80px" alt="">
        </div>
        <div class="sentence-container">
            <p>{{sentence}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic-d",
        props:['sentence','imgUrl'],
    }
</script>

<style scoped lang="less">
    .topicD-container{
        z-index: 20;
        width:731px;
        height: 100px;
        background-image: url("../assets/image/discuss2.png");
        background-repeat: no-repeat;
        background-size: 1000px auto;
        box-sizing: border-box;
        display: flex;
        margin-bottom: 20px;
        .head-pic{
            width:100px;
            height:100px;
            box-sizing: border-box;
            padding: 10px 10px;
        }
        .sentence-container{
            font-size: 20px;
            padding: 26px 51px 20px 20px;
            p{
                margin: 0;
            }
        }
    }
</style>