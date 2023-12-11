<template>
  <van-button class="returnBack" @click="returnBack()">返回</van-button>
</template>
<style>
.returnBack {
  position: absolute;
  top: 500px;
  right: 1665px;
}
</style>
<script>
export default{
  methods:{
    returnBack(){
      this.$router.go(-1);
    }
  }
}
</script>
