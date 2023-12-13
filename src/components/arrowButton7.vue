<template>
  <!-- <arrowButtonOrientLeft id="button8"/> -->
  <van-button id="button7" @click="handleClick()"></van-button>
</template>

<style>
#button7 {
  position: absolute;
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  top: 246px;
  right: 560px;
}
#button7:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>
<script>
function handleClickQueryDetailsButton(){
  queryDetailsButton.click();
}
function handleClickFiveThousandButton(){
  fiveThousandButon.click();
}
export default{
  methods:{
    handleClick(){
      if(this.$route.path == "/choice-info"){
        handleClickQueryDetailsButton();
      }
      else if(this.$route.path == "/withdraw-info"){
        handleClickFiveThousandButton();
      }
    }
  }
}
</script>