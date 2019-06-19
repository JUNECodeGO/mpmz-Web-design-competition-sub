<template>
    <div class="qieGao-container">
        <div class="qieGao-head">
            <div class="title">
                <div>
                    <h2>《切糕合伙人》</h2>
                    <p>
                        2012年底的岳阳“天价切糕”事件之后，阿迪力在公交车上听人家讨论天价切糕，心里很不舒服。作为第三代切糕传人，他想为家乡特产正名。和同学凑到3万元本钱，将网店开起来，“那时我们没设备，只能挑选街上制作比较好的切糕放在网上卖，但是顾客评价并不好。”阿迪力说，为了让大家品尝到正宗的玛仁糖，他决定自己动手制作。
                    </p>
                </div>
                <span>
                    >
                </span>
            </div>
            <div class="pic"></div>
        </div>
        <div class="qieGao-middle">
            <div class="title">
                <p>因为深知卖玛仁糖既辛苦又不赚钱，父亲不想让孩子再从事这个行业。但经过一整天的劝说，阿迪力最终说服了父母，随着网店的生意越来越好，阿迪力的家里人也逐渐支持他。
                </p>
                <p>
                    他们的创业得到了学院的大力支持，学校创业园针对他们的实际情况，为他们提供了免费场地，并委派专门老师悉心指导。2013年3月，学院再次组织了20多名志愿者帮助他们搬到新的作坊。
                </p>
                <p>在2014年5月2日晚，《舌尖上的中国2：时节》播放了新疆特色小吃——切糕，这引发了许多观众的兴趣，当晚就有不少人拿起手机、打开电脑，在淘宝上查询切糕的价格。
                </p>
            </div>
        </div>
        <div class="qieGao-foot"></div>
    </div>
</template>

<script>
    export default {
        name: "qieGao",
    }
</script>
<style scoped lang="less">
    .qieGao-container{
        position: relative;
        .qieGao-head{
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
                background-image: url("../assets/image/dream 3.png");
                background-repeat: no-repeat;
            }
        }
        .qieGao-middle{
            position: absolute;
            top:700px;
            width:100%;
            height:800px;
            background-image: url("../assets/image/dream 3.png");
            background-repeat: no-repeat;
            background-position: 0 -450px;
            background-size: 1400px;
            .title{
                position:absolute;
                left:900px;
                top:302px;
                font-size: 18px;
                width: 380px;
                height:400px;
                text-indent: 2em;
            }
        }
        .qieGao-foot{
            position: absolute;
            top:1500px;
            width:100%;
            height:780px;
            background-image: url("../assets/image/dream 5.png");
            background-repeat: no-repeat;
            background-size: 1400px;
        }
    }
</style>
