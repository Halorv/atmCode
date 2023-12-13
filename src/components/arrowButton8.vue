<template>
  <!-- <arrowButtonOrientLeft id="button8"/> -->
  <van-button id="button8" @click="handleClick()"></van-button>
</template>

<style>
#button8 {
  position: absolute;
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  top: 120px;
  right: 560px;
}
#button8:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>

<script>
  function handleClickTwoThousandButton(){
    twoThousandButton.click();
  }
  function handleClickQueryBalanceButton(){
    queryBalanceButton.click();
  }
  function handleClickQueryDetailsButton(){
    queryDetailsButton.click();
  }
  export default{
    methods:{
      handleClick(){
        if(this.$route.path == "/withdraw-info")
        {
          handleClickTwoThousandButton();
        }
        else if(this.$route.path == "/choice-info"){
          handleClickQueryBalanceButton();
        }
        else if(this.$route.path == "/queryBalance-info"){
          handleClickQueryDetailsButton();
        }
      }
    }
  }
</script>