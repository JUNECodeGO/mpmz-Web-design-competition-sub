<template>
    <div class="dream-container">
        <div class="dream-nav">
            <router-link :class="{'sector':true, 's1':true}" to="/qieGao"/>
            <router-link :class="{'sector':true, 's2':true}" to="/createP" />
            <router-link :class="{'sector':true, 's3':true}" to="/daBa" />
        </div>
        <div class="dream-back">
          <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: "dream",
        data(){
            return{
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/css/dream";
</style>