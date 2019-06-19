<template>
    <div class="daBa-container">
        <div class="daBa-head">
            <div class="title">
                <div>
                    <h2>《切大巴上里的玫瑰梦》</h2>
                    <p>
                        家乡，这两个字在在外打工人心里的份量有多重，不言自明，瞬间一抢而空的车票，逢年过节时的大包小裹，人们匆匆赶路的脚步，都是最好的回答。如果在家就能过上富足安稳的日子，相信很多人都不愿意往外跑。现在，很多在外打工的人都选择回到家乡，开创一份属于自己的事业。伍元生就是其中的一个。但是，他在家里要干的事并不是太顺利。
                    </p>
                </div>
                <span>
                    >
                </span>
            </div>
            <div class="pic"></div>
        </div>
        <div class="daBa-middle">
            <div class="title">
                “我们到山上去看了一下，山上的田土，基本上60%、70%全部是荒的，里面的有一些树都长多深了。” 爱动脑筋的老伍很时尚，他上网一查，发现玫瑰的经济价值和观赏效果都很高，于是老伍这个土生土长的三百梯人，萌生了打造四川第一玫瑰博览园的想法。说干就干，2014年5月，伍元生和几个朋友集资180万元，成立了自己的合作社。但因为这几个朋友都不愿意放弃自己原有的工作，合作社日常管理的重担就落在了老伍一个人的肩上。 家人的反对没能阻止老伍把玫瑰梦继续做下去，这天，老伍终于请动了信用社的人到玫瑰园来考察。
            </div>
        </div>
        <div class="daBa-foot"></div>
    </div>
</template>

<script>
    export default {
        name: "daBa"
    }
</script>

<style scoped lang="less">
    .daBa-container{
        position: relative;
        .daBa-head{
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
                width:394px;
                height:290px;
                background-image: url("../assets/image/dream 3.png");
                background-repeat: no-repeat;
                background-position: -349px 0px;

            }
        }
        .daBa-middle{
            position: absolute;
            top:700px;
            width:100%;
            height:800px;
            background-image: url("../assets/image/dream 7.png");
            background-repeat: no-repeat;
            background-size: 1400px;
            .title{
                position:absolute;
                left:709px;
                top:298px;
                font-size: 18px;
                width: 380px;
                height:400px;
                text-indent: 2em;
            }
        }
        .daBa-foot{
            position: absolute;
            top:1420px;
            width:100%;
            height:780px;
            background-image: url("../assets/image/dream 6.png");
            background-repeat: no-repeat;
            background-size: 1400px;
        }
    }
</style>