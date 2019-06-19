<template>
    <div class="topicY-container">
        <div class="sentence-container">
            <p>{{sentence}}</p>
        </div>
        <div class="head-pic">
            <img :src="imgUrl" width="80px" height="80px" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic-y",
        props:['sentence','imgUrl'],
    }
</script>

<style scoped lang="less">
    .topicY-container{
        z-index: 20;
        float: right;
        width:711px;
        height: 100px;
        background-image: url("../assets/image/discuss2.png");
        background-repeat: no-repeat;
        background-size: 1000px auto;
        background-position: 0 -124px;
        box-sizing: border-box;
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
    .head-pic{
        width:100px;
        height:100px;
        box-sizing: border-box;
        padding: 10px 10px;
        float:right;
    }
    .sentence-container{
        font-size: 20px;
        padding: 26px 17px 20px 20px;
    p{
        margin: 0;
    }
    }
    }
</style>