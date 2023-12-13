<template>
  <!-- <arrowButtonOrientLeft id="button8"/> -->
  <van-button id="button5" @click="handleClick()"></van-button>
</template>

<style>
#button5 {
  position: absolute;
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  top: 500px;
  right: 560px;
}
#button5:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>

<script>
function handleClickModifyPassword() {
  modifyPasswordButton.click();
}
function handleClickQueryCardReturnButton() {
  queryCardReturnButton.click();
}
export default {
  methods: {
    handleClick() {
      if (this.$route.path == "/choice-info") {
        handleClickModifyPassword();
      } 
      else if (
        (this.$route.path == "/queryBalance-info") |
        (this.$route.path == "/queryDetails-info")
      ) {
        handleClickQueryCardReturnButton();
      }
    },
  },
};
</script>
