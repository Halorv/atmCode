<template>
  <van-button class="returnBack" id="returnBackButton" @click="returnBack()">返回</van-button>
</template>
<style>
.returnBack {
  position: absolute;
  top: 500px;
  right: 1665px;
}
</style>
<script>
var returnBackButton = document.getElementById(returnBackButton)
export default{
  methods:{
    returnBack(){
      this.$router.go(-1);
    }
  }
}
</script>
