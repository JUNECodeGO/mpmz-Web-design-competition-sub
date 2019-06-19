<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  :root,
  body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #app{
    width: 100%;
  }
  @media (max-width: 1190px){
    #app{
      width: 1200px;
    }
  }
</style>
