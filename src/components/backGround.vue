<template>
  <div class="background">
    <van-button id="button1" class="">1</van-button>
    <arrowButton1/>
    <arrowButton8/>
    <img :src="require('../assets/background_pic.png')" class="pic">
    <!-- <van-image class="pic" fit="contain" :src="require('../assets/background_pic.png')"/> -->
  </div>
  
</template>

<script>
</script>

<style>
@import url('../assets/arrowButton.css');
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
.button1 {
  
}
</style>
