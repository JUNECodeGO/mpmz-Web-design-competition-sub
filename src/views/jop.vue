<template>
    <div class="job-container">
        <div class="yy"></div>
        <div class="title-select">
            <div :class="{'qianAi':true,'blue':type.isQ}">
          <span @click="changeColor('isQ')">
            <p>《潜  爱》</p>
            <p>阅 读</p>
          </span>
            </div>
            <div :class="{'longChi':true,'blue':type.isL}">
           <span @click="changeColor('isL')">
            <p>《龙  痴》</p>
            <p>阅  读</p>
          </span>
            </div>
            <div :class="{'xinXue':true,'blue':type.isX}">
           <span @click="changeColor('isX')">
            <p>《心  血》</p>
            <p>阅 读</p>
          </span>
            </div>
            <div :class="{'chuanShan':true,'blue':type.isC}">
           <span @click="changeColor('isC')">
            <p>《穿  山》</p>
             <p>阅 读</p>
          </span>
            </div>
        </div>
        <div class="articles">
            <div v-show="type.isQ" class="QianA"></div>
            <div v-show="type.isL" class="longA"></div>
            <div v-show="type.isX" class="xinA"></div>
            <div v-show="type.isC" class="chuanA"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jop",
        data(){
            return{
                type:{
                    isQ:true,
                    isL:false,
                    isX:false,
                    isC:false,
                }
            }
        },
        methods:{
            changeColor(name){
                var obj = {}
                Object.keys(this.type).forEach(ele => {
                    if(ele !== name){
                        obj[ele]= false;
                    }else{
                        obj[ele] = true;
                    }
                })
                this.type = obj;
            }
        }
    }

</script>

<style scoped lang="less">
    @import "../assets/css/job";
</style>