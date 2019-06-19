<template>
    <div class="createP-container">
        <div class="createP-head">
            <div class="title">
                <div>
                    <h2>《我是创客》</h2>
                    <p>
                        80后的姚思聪，很喜欢玩四轴飞行器。因为爱好，他研究生毕业后放弃了专业，选择了和飞行器有关的职业，但是这份工作却让他很纠结，但他还是辞职创业。如今他成为了天豚科技创始人、产品经理，致力于科学与科普教育课程的开发。
                    </p>
                </div>
                <span>
                    >
                </span>
            </div>
            <div class="pic"></div>
        </div>
        <div class="createP-middle">
            <div class="title">
                60后的大圣，早年间是一名工人，最大的梦想是做一名修电器的人，但是去日本6年后，回国再也没有找工作，平时就在一个社区的创客空间做东西，参加社区的创客比赛，过着别人眼里看起来没钱的生活，他却认为这是自己想要的有趣的生活。
            </div>
        </div>
        <div class="createP-foot"></div>
    </div>
</template>

<script>
    export default {
        name: "createp"
    }
</script>

<style scoped lang="less">
    .createP-container{
        position: relative;
        .createP-head{
            position: absolute;
            top:348px;
            color:#fff;
            font-size:16px;
            .title{
                display: inline-block;
                padding-top: 10px;
                padding-left: 320px;
                height:220px;
                width:903px;
                box-sizing: border-box;
                background-color:rgba(198,162,75,0.5);
                position: absolute;
                z-index: 1000;
                div{
                    width:75%;
                    display: inline-block;
                    p{
                        line-height:22px;
                    }
                }
                span{
                    width:10%;
                    display: inline-block;
                    font-size:36px;
                    vertical-align: top;
                    padding-top: 90px;
                    padding-left: 80px;
                }
            }
            .pic{
                position:absolute;
                top:-30px;
                left:809px;
                display: inline-block;
                width:320px;
                height:290px;
                background-image: url("../assets/image/dream 2.png");
                background-repeat: no-repeat;
            }
        }
        .createP-middle{
            position: absolute;
            top:700px;
            width:100%;
            height:700px;
            background-image: url("../assets/image/dream 2.png");
            background-repeat: no-repeat;
            background-position: 0 -320px;
            background-size: 1400px;
            .title{
                position:absolute;
                left:977px;
                top:323px;
                font-size: 18px;
                width: 250px;
                height:280px;
                text-indent: 2em;
            }
        }
        .createP-foot{
            position: absolute;
            top:1300px;
            width:100%;
            height:780px;
            background-image: url("../assets/image/dream 4.png");
            background-repeat: no-repeat;
            background-size: 1400px;
        }
    }
</style>