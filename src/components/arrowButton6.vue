<template>

  <!-- <arrowButtonOrientLeft id="button8"/> -->
  <van-button id="button6" @click="handleClick()"></van-button>
</template>

<style>
#button6 {
  position: absolute;
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  top: 372px;
  right: 560px;
}
#button6:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>

<script>
function handleClickTransferButton(){
  transferButton.click();
}
function handleClickOtherAmountButton(){
  otherAmountButton.click();
}

export default{
  methods:{
    handleClick(){
      if(this.$route.path =="/choice-info") {
        handleClickTransferButton();
      }
      else if(this.$route.path == "/withdraw-info"){
        handleClickOtherAmountButton();
      }
    }
  }
}
</script>
