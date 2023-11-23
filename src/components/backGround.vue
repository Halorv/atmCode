<template>
  <div class="background">
    <arrowButton1/>
    <arrowButton8/>
    <img :src="require('../assets/background_pic.png')" class="pic">
    <!-- <van-image class="pic" fit="contain" :src="require('../assets/background_pic.png')"/> -->
  </div>
  
</template>

<script>
</script>

<style>
.background {
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  background-color: rgb(228, 226, 226);
}
.pic {
  width: 650px;
  position: relative;
  top: 120px;
  right: 110px;
}
</style>
