<template>
  <div class="background">
    <!-- <van-button id="button1" class="">1</van-button> -->
    <router-link to="/login">

      <arrowButton1/>
    </router-link>
    <!-- <router-view></router-view> -->
    
    <arrowButton2/>
    <arrowButton3/>
    <arrowButton4/>
    <arrowButton5/>
    <arrowButton6/>
    <arrowButton7/>
    <arrowButton8/>
    <!-- <vButton1/> -->
    <div class="cover">
      <img :src="require('../assets/background_pic.png')" class="pic">
    </div>
    <!-- <van-image class="pic" fit="contain" :src="require('../assets/background_pic.png')"/> -->
  </div>
</template>

<script>
</script>

<style>
.background {
  width: 1024px;
  height: 734px;
  margin: 0 auto;
  background-color: rgb(228, 226, 226);
}
.pic {
  /* width: 650px; */
  width: 1024px;
  margin: 0 auto;
  opacity: 0.3;
  filter: alpha(opacity=30);
  /* position: absolute; */
  /* top: 120px; */
  /* left: 50px; */
  /* right: 955px; */
}
.cover {
  background: #c9c4c4;
}
</style>
