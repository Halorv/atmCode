<template>
  <!-- <arrowButtonOrientRight id="button1"/> -->
  <!-- <button>
    <img :src="require('../assets/realButton.png')" id="button1">
  </button> -->
  <van-button id="button1" @click="handleClick()"></van-button>
</template>

<style>
#button1 {
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  position: absolute;
  top: 120px;
  right: 1865px;
}
#button1:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>

<script>
function handleClickLogin() {
  loginButton.click();
}
function handleClickDeposit() {
  depositButton.click();
}
function handleClickOneHundredButton() {
  oneHundredButton.click();
}
export default {
  methods: {
    handleClick() {
      if (this.$route.path == "/") {
        handleClickLogin();
      }
      else if (
        (this.$route.path == "/choice-info") |
        (this.$route.path == "/queryBalance-info")
      ){
        handleClickDeposit();
      }
      else if (this.$route.path == "/withdraw-info") {
        handleClickOneHundredButton();
      }
    },
  },
};
</script>
