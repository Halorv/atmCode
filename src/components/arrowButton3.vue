<template>

  <!-- <arrowButtonOrientRight id="button3"/> -->
  <van-button id="button3" @click="handleClick"></van-button>
</template>

<style>
#button3 {
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  position: absolute;
  top: 372px;
  right: 1865px;
}
#button3:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>
<script>
  function handleClickOneThousandButton(){
    oneThousandButton.click();
  }
  export default{
    methods:{
      handleClick(){
        if(this.$route.path == "/withdraw-info")
        {
          handleClickOneThousandButton();
        }
      }
    }
  }
</script>
