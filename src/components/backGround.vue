<template>
  <div class="background">
    <!-- <van-button id="button1" class="">1</van-button> -->
    <arrowButton1/>
    <arrowButton2/>
    <arrowButton3/>
    <arrowButton4/>
    <arrowButton5/>
    <arrowButton6/>
    <arrowButton7/>
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
  position: absolute;
  top: 120px;
  /* left: 50px; */
  right: 955px;
}

</style>
