<template>
  <!-- <arrowButtonOrientRight id="button2"/> -->
  <van-button id="button2" @click="handleClick()"></van-button>
</template>

<style>
#button2 {
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  position: absolute;
  top: 246px;
  right: 1865px;
}
#button2:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>
<script>
function handleClickWithdrawButton(){
  withdrawButton.click();
}
function handleClickFiveHundredButton(){
  fiveHundredButton.click();
}
export default{
  methods:{
    handleClick(){
      if(this.$route.path == "/choice-info"|this.$route.path == "/queryBalance-info")
      {
        handleClickWithdrawButton();
      }
      else if(this.$route.path == "/withdraw-info")
      {
        handleClickFiveHundredButton();
      }
    }
  }
}
</script>